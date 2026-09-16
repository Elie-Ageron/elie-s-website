/**
 * Controle les balises title et description de tout le site.
 *
 * Il lit exactement les memes sources que `prerender-head.mjs`, donc ce qu'il
 * mesure est ce que Google recevra. Il signale :
 *
 *   - les titles au-dessus de 60 caracteres (tronques dans les resultats)
 *   - les descriptions au-dessus de 160 ou en dessous de 70 caracteres
 *   - les titles et descriptions en double entre deux pages
 *   - les pages sans balise du tout
 *
 * Ce ne sont pas des regles de style : un title tronque perd son mot-cle final,
 * et une description dupliquee fait que Google en reecrit une a votre place.
 *
 * Usage : node scripts/check-seo-tags.mjs            (rapport)
 *         node scripts/check-seo-tags.mjs --strict   (sort en erreur si probleme)
 */
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const strict = process.argv.includes('--strict');

const MAX_TITRE = 60;
const MAX_DESC = 160;
const MIN_DESC = 70;

const lire = (p) => readFileSync(join(racine, p), 'utf8');
const nettoyer = (s) => s.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, ' ').trim();
const CHAINE = String.raw`(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")`;
const champ = (bloc, nom) => {
  const m = new RegExp(`\\b${nom}:\\s*${CHAINE}`).exec(bloc);
  return m ? nettoyer(m[1] ?? m[2]) : null;
};

/** Decoupe une source en blocs, un par `slug:`. */
const parSlug = (src, limite = 12000) => {
  const positions = [...src.matchAll(/\bslug:\s*'([^']+)'/g)];
  return positions.map((m, i) => ({
    slug: m[1],
    bloc: src.slice(m.index, positions[i + 1]?.index ?? Math.min(src.length, m.index + limite)),
  }));
};

const pages = [];

/* ── Pages fixes ── */
{
  const src = lire('src/components/SEO.tsx');
  const blocFr = src.slice(src.indexOf('  fr: {', src.indexOf('const seoData')));
  const blocChemins = src.slice(src.indexOf('const pathMap'), src.indexOf('};', src.indexOf('const pathMap')));
  const chemins = Object.fromEntries(
    [...blocChemins.matchAll(new RegExp(String.raw`(\w+):\s*${CHAINE}`, 'g'))].map((m) => [m[1], m[2] ?? m[3]])
  );
  /* 🔴 Le motif exigeait `title:` collé à l'accolade ouvrante. Le jour où une
     clef a reçu un commentaire au-dessus de son titre, elle a disparu du
     contrôle sans un mot : 12 pages annoncées au lieu de 14, et personne ne
     regarde ce compte. Or les commentaires au-dessus d'une valeur sont la
     convention du projet. Le motif saute donc les commentaires, avant le
     titre comme entre le titre et la description. */
  const COMMENTAIRES = String.raw`(?:\s*(?://[^\n]*|/\*[\s\S]*?\*/))*\s*`;
  for (const m of blocFr.matchAll(
    new RegExp(
      String.raw`(\w+):\s*\{${COMMENTAIRES}title:\s*${CHAINE},${COMMENTAIRES}description:\s*${CHAINE},`,
      'g'
    )
  )) {
    if (!(m[1] in chemins)) continue;
    pages.push({
      url: chemins[m[1]] || '/',
      type: 'page',
      titre: nettoyer(m[2] ?? m[3]),
      desc: nettoyer(m[4] ?? m[5]),
    });
  }
}

/* ── Articles ── */
{
  const fichiers = [
    join(racine, 'src/data/blogPosts.ts'),
    ...readdirSync(join(racine, 'src/data/blog'))
      .filter((f) => f.startsWith('posts-'))
      .map((f) => join(racine, 'src/data/blog', f)),
  ];
  const src = fichiers.map((f) => readFileSync(f, 'utf8')).join('\n');
  for (const { slug, bloc } of parSlug(src)) {
    pages.push({
      url: `/blog/${slug}`,
      type: 'article',
      titre: champ(bloc, 'seoTitleFr') ?? champ(bloc, 'titleFr'),
      desc: champ(bloc, 'seoDescFr') ?? champ(bloc, 'excerptFr'),
      surMesure: Boolean(champ(bloc, 'seoTitleFr')),
    });
  }
}

/* ── Categories ── */
{
  const src = lire('src/data/blog/types.ts');
  const bloc = src.slice(src.indexOf('export const blogCategories'));
  for (const p of parSlug(bloc, 3000)) {
    pages.push({
      url: `/blog/categorie/${p.slug}`,
      type: 'categorie',
      titre: champ(p.bloc, 'seoTitleFr'),
      desc: champ(p.bloc, 'seoDescFr'),
    });
  }
}

/* ── Guides ── */
for (const p of parSlug(lire('src/data/guides.ts'), 40000)) {
  pages.push({
    url: `/guides/${p.slug}`,
    type: 'guide',
    titre: champ(p.bloc, 'seoTitle'),
    desc: champ(p.bloc, 'seoDesc'),
  });
}

/* ── Pages locales ── */
for (const fichier of readdirSync(join(racine, 'src/data/cities')).filter((f) => f.startsWith('list-'))) {
  const src = readFileSync(join(racine, 'src/data/cities', fichier), 'utf8');
  for (const p of parSlug(src, 60000)) {
    const fr = p.bloc.slice(p.bloc.indexOf('fr: {'), p.bloc.indexOf('en: {'));
    pages.push({ url: `/${p.slug}`, type: 'ville', titre: champ(fr, 'title'), desc: champ(fr, 'description') });
  }
}

/* ── Pages locales du pilier reseaux sociaux ── */
{
  const src = readFileSync(join(racine, 'src/data/social-cities.ts'), 'utf8');
  for (const p of parSlug(src, 20000)) {
    pages.push({
      url: `/${p.slug}`,
      type: 'ville reseaux',
      titre: champ(p.bloc, 'seoTitle'),
      desc: champ(p.bloc, 'seoDesc'),
    });
  }
}

/* ══════════ Analyse ══════════ */

const soucis = [];
const compter = (cle) => {
  const vus = new Map();
  for (const p of pages) {
    const v = p[cle];
    if (!v) continue;
    if (!vus.has(v)) vus.set(v, []);
    vus.get(v).push(p.url);
  }
  return [...vus.entries()].filter(([, urls]) => urls.length > 1);
};

for (const p of pages) {
  if (!p.titre) soucis.push(['SANS TITRE', p.url, '']);
  else if (p.titre.length > MAX_TITRE) soucis.push(['TITRE LONG', p.url, `${p.titre.length} car. : ${p.titre}`]);
  if (!p.desc) soucis.push(['SANS DESCRIPTION', p.url, '']);
  else if (p.desc.length > MAX_DESC) soucis.push(['DESC LONGUE', p.url, `${p.desc.length} car.`]);
  else if (p.desc.length < MIN_DESC) soucis.push(['DESC COURTE', p.url, `${p.desc.length} car. : ${p.desc}`]);
}

for (const [valeur, urls] of compter('titre')) {
  soucis.push(['TITRE EN DOUBLE', urls.join(' + '), valeur]);
}
for (const [valeur, urls] of compter('desc')) {
  soucis.push(['DESC EN DOUBLE', urls.join(' + '), valeur.slice(0, 60)]);
}

/* ══════════ Rapport ══════════ */

const parType = {};
for (const p of pages) parType[p.type] = (parType[p.type] ?? 0) + 1;
console.log(
  `${pages.length} pages controlees : ` +
    Object.entries(parType)
      .map(([t, n]) => `${n} ${t}`)
      .join(', ')
);

const sansSurMesure = pages.filter((p) => p.type === 'article' && !p.surMesure).length;
if (sansSurMesure) {
  console.log(
    `\n${sansSurMesure} article(s) sans seoTitleFr : leur balise title reprend le titre editorial, souvent trop long pour un resultat Google.`
  );
}

if (!soucis.length) {
  console.log('\nAucun probleme de balise.');
  process.exit(0);
}

const groupes = {};
for (const [type, url, detail] of soucis) (groupes[type] ??= []).push([url, detail]);

for (const [type, lignes] of Object.entries(groupes)) {
  console.log(`\n${type} (${lignes.length})`);
  for (const [url, detail] of lignes.slice(0, 25)) {
    console.log(`   ${url}${detail ? `  ${detail}` : ''}`);
  }
  if (lignes.length > 25) console.log(`   ... et ${lignes.length - 25} de plus`);
}

console.log(`\n${soucis.length} probleme(s) au total.`);
if (strict) process.exit(1);
