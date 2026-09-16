/**
 * Ecrit un fichier HTML par route, avec le bon <head>, sans navigateur.
 *
 * ── Le probleme qu'il resout ──
 *
 * Releve le 13 septembre 2026 sur la production : les 179 URL du site
 * renvoyaient toutes le meme HTML de 11 330 octets. Meme titre, meme H1, et
 * surtout **le meme canonical, pointant vers l'accueil**. Verifiable en une
 * commande :
 *
 *   curl -s https://elieageron.com/reseaux-sociaux | grep canonical
 *
 * Pour tout robot qui n'execute pas JavaScript, chaque page du site etait donc
 * un doublon de l'accueil qui se declarait lui-meme comme tel. La Search
 * Console le disait mot pour mot : « Page en double sans URL canonique
 * selectionnee par l'utilisateur », et 26 pages restaient « detectee,
 * actuellement non indexee ».
 *
 * ── Pourquoi le pre-rendu existant ne suffisait pas ──
 *
 * `scripts/prerender.mjs` fait le travail correctement, mais il lui faut
 * Chrome. L'image de build de Vercel n'en a pas, et le script sort en succes
 * quand il n'en trouve aucun, par choix : un pre-rendu impossible ne doit pas
 * casser un deploiement. Consequence : il n'a jamais tourne en production.
 *
 * ── Ce que fait ce script ──
 *
 * Il derive de la meme source de verite que le sitemap (les donnees, lues au
 * regex) un titre, une description et un canonical par route, puis ecrit
 * `dist/<route>/index.html` a partir de `dist/index.html`.
 *
 * Il ne rend pas le corps de la page : le contenu reste ecrit par React chez le
 * visiteur. Ce qu'il garantit, c'est que chaque URL se declare enfin comme
 * elle-meme. C'est peu de code pour le bug le plus cher du site.
 *
 * **Il ne touche jamais un fichier deja ecrit par `prerender.mjs`.** Quand le
 * vrai pre-rendu tourne (en local, avec Chrome), ses fichiers gagnent.
 *
 * Usage : node scripts/prerender-head.mjs   (apres `vite build`)
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(racine, 'dist');
const BASE = 'https://elieageron.com';

if (!existsSync(join(dist, 'index.html'))) {
  console.error('dist/index.html est absent. Lancer `vite build` avant.');
  process.exit(1);
}

const gabarit = readFileSync(join(dist, 'index.html'), 'utf8');
const lire = (p) => readFileSync(join(racine, p), 'utf8');
const lireTout = (fichiers) => fichiers.map((f) => readFileSync(f, 'utf8')).join('\n');

/** Enleve les echappements d'une chaine litterale TypeScript. */
const nettoyer = (s) => s.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, ' ').trim();

/** Attrape une chaine litterale TS, quel que soit le guillemet utilise. */
const CHAINE = String.raw`(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")`;

const champ = (bloc, nom) => {
  const m = new RegExp(`\\b${nom}:\\s*${CHAINE}`).exec(bloc);
  return m ? nettoyer(m[1] ?? m[2]) : null;
};

/* ══════════ Les routes ══════════ */

const routes = new Map();
const ajouter = (chemin, titre, description) => {
  if (!titre || !description) return;
  routes.set(chemin, { titre, description });
};

/* ── Pages fixes : on lit seoData.fr et pathMap dans SEO.tsx ── */
{
  const src = lire('src/components/SEO.tsx');

  const blocFr = src.slice(src.indexOf('  fr: {', src.indexOf('const seoData')));
  /* 🔴 Meme motif fragile que dans check-seo-tags.mjs, et meme correction.
     Il exigeait `title:` colle a l'accolade ouvrante : un commentaire pose
     au-dessus d'un titre faisait disparaitre la page de la liste des routes,
     et le controle de completude faisait echouer le build en annoncant que
     deux URL du sitemap retomberaient sur le HTML de l'accueil. Le garde-fou
     a fonctionne, mais la cause etait ici. */
  const COMMENTAIRES = String.raw`(?:\s*(?://[^\n]*|/\*[\s\S]*?\*/))*\s*`;
  const entrees = [...blocFr.matchAll(
    new RegExp(
      String.raw`(\w+):\s*\{${COMMENTAIRES}title:\s*${CHAINE},${COMMENTAIRES}description:\s*${CHAINE},`,
      'g'
    )
  )];

  const blocChemins = src.slice(src.indexOf('const pathMap'), src.indexOf('};', src.indexOf('const pathMap')));
  const chemins = Object.fromEntries(
    [...blocChemins.matchAll(new RegExp(String.raw`(\w+):\s*${CHAINE}`, 'g'))].map((m) => [
      m[1],
      m[2] ?? m[3],
    ])
  );

  for (const m of entrees) {
    const clef = m[1];
    if (!(clef in chemins)) continue;
    ajouter(chemins[clef] || '/', nettoyer(m[2] ?? m[3]), nettoyer(m[4] ?? m[5]));
  }
}

/** Le corpus, pour construire le maillage interne. */
const articles = [];
const categories = [];
const guidesListe = [];
const villes = [];
const villesReseaux = [];

/* ── Articles ── */
{
  const fichiers = [
    join(racine, 'src/data/blogPosts.ts'),
    ...readdirSync(join(racine, 'src/data/blog'))
      .filter((f) => f.startsWith('posts-'))
      .map((f) => join(racine, 'src/data/blog', f)),
  ];
  const src = lireTout(fichiers);
  // Chaque article commence par son slug. On decoupe sur les slugs et on lit
  // les champs dans la tranche qui suit, avant le slug suivant.
  const positions = [...src.matchAll(/\bslug:\s*'([^']+)'/g)];
  positions.forEach((m, i) => {
    const bloc = src.slice(m.index, positions[i + 1]?.index ?? m.index + 12000);
    const titre = champ(bloc, 'seoTitleFr') ?? champ(bloc, 'titleFr');
    const desc = champ(bloc, 'seoDescFr') ?? champ(bloc, 'excerptFr');
    ajouter(`/blog/${m[1]}`, titre, desc);
    // Pour le maillage : le titre editorial est meilleur en texte d'ancrage
    // que la balise title, qui porte le suffixe de marque.
    articles.push({
      slug: m[1],
      ancre: champ(bloc, 'titleFr') ?? titre,
      categorie: champ(bloc, 'categorySlug') ?? 'strategie',
    });
  });
}

/* ── Categories ── */
{
  const src = lire('src/data/blog/types.ts');
  const bloc = src.slice(src.indexOf('export const blogCategories'));
  const positions = [...bloc.matchAll(/\bslug:\s*'([^']+)'/g)];
  positions.forEach((m, i) => {
    const tranche = bloc.slice(m.index, positions[i + 1]?.index ?? bloc.length);
    ajouter(`/blog/categorie/${m[1]}`, champ(tranche, 'seoTitleFr'), champ(tranche, 'seoDescFr'));
    categories.push({ slug: m[1], ancre: champ(tranche, 'fr') ?? m[1] });
  });
}

/* ── Guides ── */
{
  const src = lire('src/data/guides.ts');
  const positions = [...src.matchAll(/\bslug:\s*'([^']+)'/g)];
  positions.forEach((m, i) => {
    const bloc = src.slice(m.index, positions[i + 1]?.index ?? src.length);
    ajouter(`/guides/${m[1]}`, champ(bloc, 'seoTitle'), champ(bloc, 'seoDesc'));
    guidesListe.push({ slug: m[1], ancre: champ(bloc, 'label') ?? champ(bloc, 'title') ?? m[1] });
  });
}

/* ── Pages locales ── */
{
  const fichiers = readdirSync(join(racine, 'src/data/cities'))
    .filter((f) => f.startsWith('list-'))
    .map((f) => join(racine, 'src/data/cities', f));
  for (const fichier of fichiers) {
    const src = readFileSync(fichier, 'utf8');
    const positions = [...src.matchAll(/\bslug:\s*'([^']+)'/g)];
    positions.forEach((m, i) => {
      const bloc = src.slice(m.index, positions[i + 1]?.index ?? src.length);
      // Le bloc `fr:` precede le bloc `en:` : on coupe au premier `en: {`.
      const blocFr = bloc.slice(bloc.indexOf('fr: {'), bloc.indexOf('en: {'));
      ajouter(`/${m[1]}`, champ(blocFr, 'title'), champ(blocFr, 'description'));
      villes.push({ slug: m[1], ancre: champ(blocFr, 'breadcrumb') ?? champ(blocFr, 'title') ?? m[1] });
    });
  }
}

/* ── Pages locales du pilier reseaux sociaux ──
 *
 * Famille separee des pages ci-dessus : les unes vendent un site, les autres
 * la gestion des reseaux. Voir l'en-tete de `src/data/social-cities.ts`. Sans
 * ce bloc, ces six URL sont dans le sitemap mais n'ont pas de fichier, et le
 * controle de completude fait echouer le build. C'est voulu : c'est ce qui
 * empeche une page d'etre servie avec le HTML de l'accueil.
 */
{
  const src = lire('src/data/social-cities.ts');
  const positions = [...src.matchAll(/^    slug: '([^']+)',$/gm)];
  positions.forEach((m, i) => {
    const bloc = src.slice(m.index, positions[i + 1]?.index ?? src.length);
    ajouter(`/${m[1]}`, champ(bloc, 'seoTitle'), champ(bloc, 'seoDesc'));
    villesReseaux.push({ slug: m[1], ancre: `Réseaux sociaux ${champ(bloc, 'name') ?? m[1]}` });
  });
}

/* ── Pages qui ecrivent leur head elles-memes ──
 *
 * Ces trois-la n'utilisent pas `seoData` : elles passent un titre sur mesure
 * (Assessment) ou un Helmet a la main (les deux pages legales). Elles sont donc
 * declarees ici, et le controle de fin verifie que la liste reste complete.
 */
ajouter(
  '/assessment',
  'Test : votre site convertit-il ? | Elie Ageron',
  'Répondez à 10 questions (2 min) et découvrez ce qui freine votre site et comment le corriger. Gratuit, résultat immédiat.'
);
ajouter(
  '/mentions-legales',
  'Mentions Légales | Elie Ageron',
  "Mentions légales du site elieageron.com : éditeur, hébergeur, propriété intellectuelle et données personnelles."
);
ajouter(
  '/politique-confidentialite',
  'Politique de Confidentialité | Elie Ageron',
  "Comment sont collectées, utilisées et conservées vos données personnelles sur elieageron.com, et comment les faire effacer."
);

/* ── Les routes qui partent en 301 n'ont pas besoin de fichier ──
 * Vercel applique les redirections avant le systeme de fichiers, donc un
 * fichier ici ne serait jamais servi. Autant ne pas l'ecrire.
 */
{
  const vercel = JSON.parse(readFileSync(join(racine, 'vercel.json'), 'utf8'));
  for (const r of vercel.redirects ?? []) routes.delete(r.source);
}

const echapper = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ══════════ Le maillage interne, en HTML reel ══════════
 *
 * Relevé le 13 septembre 2026 dans la Search Console, rapport « Liens » :
 *
 *     Liens externes : 3        Liens internes : 4
 *
 * Quatre. Le site en compte 108 verifies par `check:content`, plus toute
 * l'architecture hub-and-spoke des guides et des categories. Google n'en voyait
 * aucun, pour la raison la plus bete qui soit : le corps du HTML servi est
 * `<div id="root"></div>`, donc il ne contient pas une seule balise <a>.
 *
 * Sans liens internes, aucune page ne transmet d'autorite a une autre, et les
 * 139 articles ne sont atteignables que par le sitemap. C'est ce qui explique
 * les 26 pages « detectee, actuellement non indexee » et le corpus bloque entre
 * la position 40 et 80.
 *
 * On injecte donc un squelette dans `#root`. React le remplace au montage, donc
 * le visiteur ne le voit qu'un instant avant l'affichage de la page, exactement
 * comme le fait un site pre-rendu. Les robots, eux, ont enfin un graphe a
 * parcourir.
 */

const titreCourt = (t) => t.replace(/\s*\|\s*Elie Ageron\s*$/, '').trim();

const lien = (href, texte) => `<a href="${href}" style="color:#a02050;text-decoration:none">${echapper(texte)}</a>`;

/** Le tronc commun, present sur toutes les pages. */
const tronc = [
  ['/', 'Accueil'],
  ['/reseaux-sociaux', 'Réseaux sociaux'],
  ['/services', 'Tous les services'],
  ['/audit-gratuit', 'Audit gratuit'],
  ['/portfolio', 'Portfolio'],
  ['/blog', 'Blog'],
  ['/guides', 'Guides'],
  ['/a-propos', 'À propos'],
  ['/contact', 'Contact'],
]
  .map(([h, t]) => lien(h, t))
  .concat(guidesListe.map((g) => lien(`/guides/${g.slug}`, g.ancre)))
  .concat(categories.map((c) => lien(`/blog/categorie/${c.slug}`, c.ancre)));

/** Les liens supplementaires, selon la page. */
const liensDePage = (chemin) => {
  if (chemin === '/blog') return articles.map((a) => lien(`/blog/${a.slug}`, a.ancre));
  const cat = /^\/blog\/categorie\/(.+)$/.exec(chemin);
  if (cat) {
    return articles.filter((a) => a.categorie === cat[1]).map((a) => lien(`/blog/${a.slug}`, a.ancre));
  }
  if (chemin === '/services' || chemin === '/portfolio') {
    return [...villes, ...villesReseaux].map((v) => lien(`/${v.slug}`, v.ancre));
  }
  /* La page pilier des reseaux pousse vers ses pages locales, en HTML brut, et
     l'accueil aussi. Sans ca, les six pages ne sont atteignables que par le
     sitemap, ce qui est exactement la situation ou le site s'est retrouve
     bloque en aout 2026 : quatre liens internes vus par Google sur cent huit.
     L'accueil est la page la plus exploree, donc c'est de la que part le plus
     d'autorite. */
  if (chemin === '/reseaux-sociaux' || chemin === '/' || chemin === '') {
    return villesReseaux.map((v) => lien(`/${v.slug}`, v.ancre));
  }
  return [];
};

/**
 * Le squelette, sorti du flux de mise en page.
 *
 * 🔴 **Pourquoi `position:fixed`.** Mesure du 16 septembre 2026 sur la
 * production, telephone en 4G lente : l'accueil avait un CLS de 0,138, au-dela
 * du seuil de 0,1, provoque par **un seul decalage a 2509 ms** dont la source
 * etait `nav, nav`. C'etait exactement le moment ou React monte et remplace le
 * contenu de `#root`. Autrement dit, le squelette qui a repare l'exploration
 * du site cassait sa mise en page pour les visiteurs.
 *
 * Un element hors flux ne participe pas au calcul de la mise en page : sa
 * disparition ne peut donc, par construction, decaler rien du tout. Le
 * squelette reste entierement visible pendant les deux secondes ou React
 * demarre, et entierement lisible pour un robot. Rien n'est masque : c'est le
 * meme contenu, au meme endroit, simplement pose sur sa propre couche.
 *
 * ⚠️ Ne pas le repasser en flux normal pour « faire plus propre ». Le CLS
 * revient immediatement.
 */
const squelette = (chemin, titre, description) => {
  const sup = liensDePage(chemin);
  return (
    `<div style="position:fixed;inset:0;overflow-y:auto;background:#fdfcfa;z-index:0">` +
    /* 🔴 Police systeme, pas General Sans, et c'est la vraie cause du CLS.
       Trace du 16 septembre 2026 : le decalage de 0,138 venait de deux `<nav>`
       du squelette qui grandissaient de 240 a 271 pixels de haut a 2179 ms,
       soit l'instant ou la police web finit de charger et remplace la police
       de repli. Un texte qui change de fonte se remet en page, et une liste de
       vingt-sept liens se remet beaucoup en page.
       Le squelette vit deux secondes et sert surtout aux robots : il n'a aucun
       besoin de la fonte de la marque, et la police systeme est deja la. */
    `<div style="max-width:46rem;margin:0 auto;padding:5rem 1.5rem;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#2b2724;line-height:1.6">` +
    `<h1 style="font-size:2.1rem;font-weight:600;letter-spacing:-0.025em;line-height:1.15;margin:0">${echapper(titreCourt(titre))}</h1>` +
    `<p style="margin:1.25rem 0 0;color:#635e59">${echapper(description)}</p>` +
    `<nav style="margin-top:2.5rem;display:flex;flex-wrap:wrap;gap:0.5rem 1.25rem;font-size:0.9rem">${tronc.join('')}</nav>` +
    (sup.length
      ? `<nav style="margin-top:1.5rem;display:flex;flex-wrap:wrap;gap:0.4rem 1rem;font-size:0.82rem;color:#635e59">${sup.join('')}</nav>`
      : '') +
    `</div></div>`
  );
};

/* ══════════ Ecriture ══════════ */

/** Remplace une balise du <head>, ou signale si le motif est introuvable. */
const remplacer = (html, motif, valeur, manquants, nom) => {
  if (!motif.test(html)) {
    manquants.add(nom);
    return html;
  }
  return html.replace(motif, valeur);
};

let ecrits = 0;
let deja = 0;
const manquants = new Set();
const casses = [];

for (const [chemin, { titre, description }] of routes) {
  // L'accueil n'est pas saute. Son <head> est deja correct dans le gabarit,
  // mais sans passage ici il n'aurait aucun lien crawlable dans son corps, et
  // c'est la page la plus exploree du site. On la traite comme les autres : les
  // remplacements de <head> tombent sur les memes valeurs, le squelette est
  // ecrit par dessus `dist/index.html`.
  const estAccueil = chemin === '/' || chemin === '';
  const dossier = estAccueil ? dist : join(dist, chemin.replace(/^\//, ''));
  const fichier = join(dossier, 'index.html');

  // Pour l'accueil le fichier existe forcement : c'est le gabarit lui-meme.
  if (!estAccueil && existsSync(fichier)) {
    deja += 1;
    continue;
  }

  const url = estAccueil ? `${BASE}/` : `${BASE}${chemin}`;
  const t = echapper(titre);
  const d = echapper(description);

  let html = gabarit;
  html = remplacer(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`, manquants, 'title');
  html = remplacer(html, /(<meta\s+data-rh="true"\s+name="description"\s+content=")[^"]*(")/, `$1${d}$2`, manquants, 'description');
  html = remplacer(html, /(<link\s+data-rh="true"\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`, manquants, 'canonical');
  html = html.replace(/(<meta\s+data-rh="true"\s+property="og:title"\s+content=")[^"]*(")/, `$1${t}$2`);
  html = html.replace(/(<meta\s+data-rh="true"\s+property="og:description"\s+content=")[^"]*(")/, `$1${d}$2`);
  html = html.replace(/(<meta\s+data-rh="true"\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta\s+data-rh="true"\s+property="twitter:title"\s+content=")[^"]*(")/, `$1${t}$2`);
  html = html.replace(/(<meta\s+data-rh="true"\s+property="twitter:description"\s+content=")[^"]*(")/, `$1${d}$2`);
  html = html.replace(/(<meta\s+data-rh="true"\s+property="twitter:url"\s+content=")[^"]*(")/, `$1${url}$2`);

  // Le <noscript> devient une simple note. Il portait un <h1> et une
  // description, ce qui faisait deux <h1> par page une fois le squelette
  // injecte dans #root. Le squelette est strictement meilleur : il est lu par
  // tout le monde, pas seulement par les robots sans JavaScript.
  // ⚠️ On ancre sur le commentaire, pas sur `<noscript>` : il y a un premier
  // <noscript> plus haut dans le <head>, celui qui charge la police en repli.
  // Un motif naif remplacait celui-la et laissait le bon en place.
  html = html.replace(
    /<!-- Fallback content for crawlers[\s\S]*?<\/noscript>/,
    `<noscript><p style="font-family:system-ui,sans-serif;text-align:center;padding:2rem;color:#635e59">Activez JavaScript pour afficher le site. Vous pouvez aussi joindre Elie Ageron au <a href="tel:+33695555318">+33 6 95 55 53 18</a> ou à <a href="mailto:elie@elieageron.com">elie@elieageron.com</a>.</p></noscript>`
  );

  // Le squelette crawlable, remplace par React au montage.
  html = html.replace('<div id="root"></div>', `<div id="root">${squelette(chemin, titre, description)}</div>`);

  // Controle : on n'ecrit pas un fichier qui n'aurait pas son canonical.
  if (!html.includes(`href="${url}"`)) {
    casses.push(chemin);
    continue;
  }

  mkdirSync(dossier, { recursive: true });
  writeFileSync(fichier, html, 'utf8');
  ecrits += 1;
}

console.log(`Head par route : ${ecrits} fichier(s) ecrit(s), ${deja} deja pre-rendu(s), ${routes.size} route(s) connues.`);

/* ── Controle : toute URL du sitemap doit avoir son fichier ──
 *
 * C'est le garde-fou qui compte. Sans lui, ajouter une page sans l'ajouter ici
 * la ferait retomber silencieusement sur le HTML de l'accueil, ce qui est
 * exactement le bug que ce script existe pour corriger.
 */
const sitemap = readFileSync(join(racine, 'public/sitemap.xml'), 'utf8');
const attendues = [...sitemap.matchAll(/<loc>https:\/\/elieageron\.com([^<]*)<\/loc>/g)]
  .map((m) => m[1] || '/')
  .filter((u) => u !== '/');
const orphelines = attendues.filter((u) => !existsSync(join(dist, u.replace(/^\//, ''), 'index.html')));

if (orphelines.length) {
  console.error(
    `
${orphelines.length} URL du sitemap n'ont pas de fichier et retomberont sur le HTML de l'accueil :`
  );
  orphelines.forEach((u) => console.error(`   ${u}`));
  process.exit(1);
}
console.log(`Controle : les ${attendues.length} URL du sitemap ont leur fichier.`);

if (manquants.size) {
  console.error(
    `\nBalises introuvables dans dist/index.html : ${[...manquants].join(', ')}.` +
      `\nElles doivent porter data-rh="true" (voir la note sur le canonical en double dans CLAUDE.md).`
  );
}
if (casses.length) {
  console.error(`\n${casses.length} route(s) non ecrites faute de canonical : ${casses.slice(0, 5).join(', ')}`);
  process.exit(1);
}
