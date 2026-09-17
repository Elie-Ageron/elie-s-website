/**
 * Est ce qu'on peut atteindre chaque page du site en cliquant, depuis l'accueil ?
 *
 * 🔴 **Ce controle repare un angle mort qui a coute cher deux fois.**
 * `check-maillage.mjs` ne regarde que les 142 articles, et il lit les donnees.
 * `check-content.mjs` verifie que les liens declares pointent quelque part.
 * Aucun des deux ne dit si une page est encore **atteignable depuis le site
 * rendu**, et c'est pourtant la question qui decide de son indexation.
 *
 * Le site s'est retrouve dans cette situation deux fois :
 * - en aout 2026, avec 108 liens internes dans le code et **4 vus par Google**,
 *   parce que le corps du HTML servi etait vide ;
 * - le 16 septembre 2026, avec dix pages locales reseaux que seul le sitemap
 *   atteignait, jusqu'a ce qu'on les ajoute au pied de page.
 *
 * Et c'est exactement le risque pris le 17 septembre en vidant ce pied de page
 * de ses trente deux liens. D'ou ce script : il ouvre les pages dans un vrai
 * navigateur, releve les `<a href>` **apres** le rendu de React, et remonte de
 * proche en proche.
 *
 * ⚠️ Il ne suit pas les articles de blog : ils sont couverts par
 * `check-maillage.mjs`, et les ouvrir un par un ferait passer ce controle de
 * une a dix minutes. `/blog` et les categories sont visites, donc les articles
 * restent comptes comme atteints.
 *
 * Usage : node scripts/check-maillage-pages.mjs [--base http://localhost:8080]
 *         (demande le serveur de dev allume, comme check:a11y et check:overflow)
 */
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
const i = args.indexOf('--base');
const base = i === -1 ? 'http://localhost:8080' : args[i + 1];

/* Les cibles viennent du sitemap : c'est la liste de ce qu'on demande a Google
   d'indexer, donc la liste exacte de ce qui doit etre atteignable. */
const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const toutes = [...sitemap.matchAll(/<loc>https:\/\/elieageron\.com([^<]*)<\/loc>/g)]
  .map((m) => m[1] || '/')
  .map((u) => (u.length > 1 ? u.replace(/\/$/, '') : u));

const estArticle = (u) => u.startsWith('/blog/') && !u.startsWith('/blog/categorie/');
const cibles = toutes.filter((u) => !estArticle(u));

/**
 * Les orphelines connues, avec la raison. Elles sont signalees, pas comptees
 * en echec : un controle qui reste rouge en permanence finit par ne plus etre
 * lu, et celui la doit rester utile.
 *
 * ⚠️ Une entree ici est une dette, pas une exemption. Elle disparait le jour
 * ou la page est refaite, redirigee, ou sortie du sitemap.
 */
const TOLEREES = {
  '/assessment':
    "page heritee de l'ancien site, dans l'ancien langage visuel, en attente d'arbitrage (refaire, rediriger, ou sortir du sitemap)",
};

const chemins = [
  process.env.PRERENDER_BROWSER,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
].filter(Boolean);
const executablePath = chemins.find((p) => existsSync(p));
if (!executablePath) {
  console.error('Aucun Chrome trouve. Definir PRERENDER_BROWSER.');
  process.exit(1);
}

const navigateur = await puppeteer.launch({ executablePath, headless: 'new', args: ['--no-sandbox'] });
const page = await navigateur.newPage();
await page.setViewport({ width: 1280, height: 900 });

const vus = new Set(['/']);
const file = ['/'];
/** Qui pointe vers quoi, pour pouvoir dire d'ou vient un lien. */
const provenance = new Map();
let visitees = 0;

while (file.length) {
  const route = file.shift();
  visitees += 1;
  process.stdout.write(`\r  ${visitees} page(s) ouverte(s), ${file.length} en attente   `);

  try {
    await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 });
  } catch {
    console.log(`\n  Page injoignable, ignoree : ${route}`);
    continue;
  }

  const liens = await page.evaluate(() =>
    [...document.querySelectorAll('a[href]')]
      .map((a) => a.getAttribute('href'))
      .filter((h) => h && h.startsWith('/'))
  );

  for (const brut of liens) {
    const url = brut.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    if (vus.has(url)) continue;
    vus.add(url);
    if (!provenance.has(url)) provenance.set(url, route);
    // On ouvre la page suivante seulement si ce n'est pas un article.
    if (!estArticle(url)) file.push(url);
  }
}

await navigateur.close();

const manquantes = cibles.filter((u) => !vus.has(u));
const orphelines = manquantes.filter((u) => !(u in TOLEREES));
const tolerees = manquantes.filter((u) => u in TOLEREES);
const horsSitemap = [...vus].filter((u) => !toutes.includes(u) && !estArticle(u));

console.log(`\n\nMaillage des pages : ${cibles.length} cibles hors articles, ${visitees} ouvertes.\n`);

if (tolerees.length) {
  console.log(`  ${tolerees.length} orpheline(s) connue(s), signalee(s) sans faire echouer :\n`);
  for (const u of tolerees) console.log(`    ${u}\n      ${TOLEREES[u]}`);
  console.log('');
}

if (orphelines.length) {
  console.log(`  ${orphelines.length} page(s) du sitemap qu'aucun lien du site ne mene :\n`);
  for (const u of orphelines) console.log(`    ${u}`);
  console.log(
    '\n  Une page que seul le sitemap atteint ne recoit aucune autorite,\n' +
      '  et Google la classe souvent en « detectee, actuellement non indexee ».\n'
  );
} else {
  console.log('  Toutes les pages du sitemap sont atteignables en cliquant.\n');
}

if (horsSitemap.length) {
  console.log(`  ${horsSitemap.length} page(s) liee(s) mais absente(s) du sitemap :\n`);
  for (const u of horsSitemap) console.log(`    ${u}   (lie depuis ${provenance.get(u) ?? '?'})`);
  console.log('');
}

process.exit(orphelines.length ? 1 : 0);
