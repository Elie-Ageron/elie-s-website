/**
 * Controle qualite du contenu editorial.
 *
 * Verifie ce qui casse silencieusement le SEO ou trahit une redaction
 * automatique : liens internes morts, tirets cadratins, guillemets courbes,
 * emoji, longueurs de balises title et description, dates dans le futur,
 * et coherence de l'offre reseaux sociaux avec CLAUDE.md.
 *
 * Usage : node scripts/check-content.mjs
 * Sort en code 1 si une erreur bloquante est trouvee.
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');

const postFiles = [
  'src/data/blogPosts.ts',
  ...readdirSync(join(root, 'src/data/blog'))
    .filter((f) => f.startsWith('posts-'))
    .map((f) => `src/data/blog/${f}`),
];
const cityFiles = readdirSync(join(root, 'src/data/cities'))
  .filter((f) => f.startsWith('list-'))
  .map((f) => `src/data/cities/${f}`);

const contentFiles = [...postFiles, ...cityFiles, 'src/data/guides.ts'];
const sources = Object.fromEntries(contentFiles.map((f) => [f, read(f)]));
const all = Object.values(sources).join('\n');

const errors = [];
const warnings = [];

// --- 1. Tirets cadratins et demi-cadratins -------------------------------
// Le tell le plus fiable d'un texte genere. Regle dure du projet.
for (const [file, src] of Object.entries(sources)) {
  for (const [ch, name] of [
    ['—', 'tiret cadratin'],
    ['–', 'tiret demi-cadratin'],
  ]) {
    const n = src.split(ch).length - 1;
    if (n > 0) errors.push(`${file} : ${n} ${name}(s)`);
  }
}

// --- 2. Guillemets courbes et emoji --------------------------------------
for (const [file, src] of Object.entries(sources)) {
  const curly = [...src].filter((c) => '“”‘'.includes(c)).length;
  if (curly > 0) errors.push(`${file} : ${curly} guillemet(s) courbe(s)`);
}
const emoji = [...new Set(all.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu) ?? [])];
if (emoji.length) errors.push(`emoji dans le contenu : ${emoji.join(' ')}`);

// --- 3. Coherence de l'offre reseaux sociaux -----------------------------
// CLAUDE.md : le tournage est une journee entiere, jamais une demi-journee,
// et 890 euros par mois est le seul prix affiche publiquement.
const offerPatterns = [
  /je viens filmer une demi-journ[ée]e/gi,
  /demi-journ[ée]e de tournage par mois/gi,
  /2 [àa] 3 vid[ée]os par semaine/gi,
  /deux [àa] trois publications par semaine/gi,
];
for (const [file, src] of Object.entries(sources)) {
  for (const re of offerPatterns) {
    const hits = src.match(re);
    if (hits) errors.push(`${file} : offre perimee "${hits[0]}" (CLAUDE.md : journee entiere, 6 a 12 publications)`);
  }
}

// --- 4. Liens internes ----------------------------------------------------
const slugsIn = (files) =>
  new Set(files.flatMap((f) => [...sources[f].matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])));

const postSlugs = slugsIn(postFiles);
const citySlugs = slugsIn(cityFiles);
const guideSlugs = slugsIn(['src/data/guides.ts']);
const typesSrc = read('src/data/blog/types.ts');
const categorySlugs = new Set(
  [...typesSrc.slice(typesSrc.indexOf('export const blogCategories')).matchAll(/slug:\s*'([^']+)'/g)].map(
    (m) => m[1]
  )
);

const staticRoutes = new Set([
  '/', '/services', '/reseaux-sociaux', '/contact', '/blog', '/guides', '/a-propos',
  '/portfolio', '/get-started', '/why-a-website', '/our-process', '/assessment',
  '/mentions-legales', '/politique-confidentialite',
]);

const links = new Set([...all.matchAll(/\]\((\/[^)]*)\)/g)].map((m) => m[1]));
let linkCount = 0;
for (const link of links) {
  linkCount++;
  const path = link.split('#')[0].replace(/\/$/, '') || '/';
  const last = path.split('/').pop();
  const ok =
    staticRoutes.has(path) ||
    (path.startsWith('/blog/categorie/') && categorySlugs.has(last)) ||
    (path.startsWith('/blog/') && postSlugs.has(last)) ||
    (path.startsWith('/guides/') && guideSlugs.has(last)) ||
    citySlugs.has(path.slice(1));
  if (!ok) errors.push(`lien interne mort : ${link}`);
}

// --- 5. Longueurs des balises SEO ----------------------------------------
for (const file of postFiles) {
  const src = sources[file];
  for (const m of src.matchAll(/slug:\s*'([^']+)'[\s\S]{0,600}?seoTitleFr:\s*(['"])([\s\S]*?)\2,/g)) {
    // Le suffixe " | Elie Ageron" est ajoute a la volee s'il rentre sous 60.
    const len = m[3].length;
    if (len > 60) errors.push(`${m[1]} : seoTitleFr de ${len} caracteres (max 60)`);
  }
  for (const m of src.matchAll(/slug:\s*'([^']+)'[\s\S]{0,900}?seoDescFr:\s*\n?\s*(['"])([\s\S]*?)\2,/g)) {
    const len = m[3].length;
    if (len > 160) errors.push(`${m[1]} : seoDescFr de ${len} caracteres (max 160)`);
    else if (len < 110) warnings.push(`${m[1]} : seoDescFr courte (${len} caracteres)`);
  }
}

// --- 6. Dates dans le futur ----------------------------------------------
const today = new Date().toISOString().slice(0, 10);
for (const file of postFiles) {
  for (const m of sources[file].matchAll(/slug:\s*'([^']+)'[\s\S]{0,3000}?\n\s*date:\s*'(\d{4}-\d{2}-\d{2})'/g)) {
    if (m[2] > today) errors.push(`${m[1]} : date de publication dans le futur (${m[2]})`);
  }
}

// --- 7. Slugs en double ---------------------------------------------------
const seen = new Map();
for (const file of postFiles) {
  for (const m of sources[file].matchAll(/slug:\s*'([^']+)'/g)) {
    if (seen.has(m[1])) errors.push(`slug en double : ${m[1]} (${seen.get(m[1])} et ${file})`);
    else seen.set(m[1], file);
  }
}

// --- Rapport --------------------------------------------------------------
console.log(
  `Controle : ${postSlugs.size} articles, ${citySlugs.size} pages locales, ` +
    `${guideSlugs.size} guides, ${linkCount} liens internes.`
);
if (warnings.length) {
  console.log(`\n${warnings.length} avertissement(s) :`);
  warnings.forEach((w) => console.log(`  - ${w}`));
}
if (errors.length) {
  console.error(`\n${errors.length} erreur(s) :`);
  errors.forEach((e) => console.error(`  x ${e}`));
  process.exit(1);
}
console.log('\nAucune erreur.');
