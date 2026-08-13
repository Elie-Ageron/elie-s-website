/**
 * Regenere les sections de listing de public/llms.txt depuis les sources.
 *
 * Pourquoi : llms.txt est lu par les moteurs de reponse. Maintenu a la main,
 * il derive des que le blog grossit, et il finit par annoncer un catalogue
 * qui n'existe plus. Meme raisonnement que pour le sitemap.
 *
 * Le script ne touche qu'aux quatre sections generees, delimitees par leurs
 * titres. Toute la prose redigee a la main est conservee telle quelle.
 *
 * Usage : node scripts/generate-llms.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const base = 'https://elieageron.com';
const read = (p) => readFileSync(join(root, p), 'utf8');

/** Les titres sont ecrits en TypeScript : on rend les apostrophes echappees. */
const unescape = (s) => s.replace(/\\'/g, "'").replace(/\\"/g, '"');

const postFiles = [
  'src/data/blogPosts.ts',
  ...readdirSync(join(root, 'src/data/blog'))
    .filter((f) => f.startsWith('posts-'))
    .map((f) => `src/data/blog/${f}`),
];

const cityFiles = readdirSync(join(root, 'src/data/cities'))
  .filter((f) => f.startsWith('list-'))
  .map((f) => `src/data/cities/${f}`);

/** slug puis titre, dans l'ordre ou ils apparaissent dans les objets. */
const pairs = (src, titleKey, window = 400) => {
  const re = new RegExp(
    `slug:\\s*'([^']+)',[\\s\\S]{0,${window}}?${titleKey}:\\s*(['"])((?:\\\\.|(?!\\2).)*)\\2`,
    'g'
  );
  return [...src.matchAll(re)].map((m) => ({ slug: m[1], title: unescape(m[3]) }));
};

const dedupe = (items) => {
  const seen = new Set();
  return items.filter((i) => (seen.has(i.slug) ? false : seen.add(i.slug)));
};

const posts = dedupe(postFiles.flatMap((f) => pairs(read(f), 'titleFr')));
const guides = dedupe(pairs(read('src/data/guides.ts'), 'title', 600));
const cities = dedupe(cityFiles.flatMap((f) => pairs(read(f), 'breadcrumb', 1200)));

const typesSrc = read('src/data/blog/types.ts');
const categories = [
  ...typesSrc
    .slice(typesSrc.indexOf('export const blogCategories'))
    .matchAll(/slug:\s*'([^']+)',\s*\n\s*fr:\s*'([^']+)'/g),
].map((m) => ({ slug: m[1], title: m[2] }));

const line = (title, url) => `- ${title} : ${base}${url}`;

const sections = {
  '## Guides longs (contenu de reference)': guides
    .map((g) => line(g.title, `/guides/${g.slug}`))
    .join('\n'),
  '## Pages locales': cities.map((c) => line(c.title, `/${c.slug}`)).join('\n'),
  '## Categories du blog': categories
    .map((c) => line(c.title, `/blog/categorie/${c.slug}`))
    .join('\n'),
  [`## Articles du blog (${posts.length})`]: [...posts]
    .sort((a, b) => a.title.localeCompare(b.title, 'fr'))
    .map((p) => line(p.title, `/blog/${p.slug}`))
    .join('\n'),
};

const src = read('public/llms.txt');
const headings = [...src.matchAll(/^## .*$/gm)].map((m) => ({ text: m[0], index: m.index }));

let out = src;
for (const [heading, body] of Object.entries(sections)) {
  // Le titre des articles porte un compteur : on le retrouve par son prefixe.
  const prefix = heading.startsWith('## Articles du blog') ? '## Articles du blog' : heading;
  const found = headings.find((h) => h.text.startsWith(prefix));
  if (!found) {
    console.warn(`section absente de llms.txt, ignoree : ${prefix}`);
    continue;
  }
  const next = headings.find((h) => h.index > found.index);
  const start = found.index;
  const end = next ? next.index : src.length;
  const replacement = `${heading}\n\n${body}\n\n`;
  out = out.replace(src.slice(start, end), replacement);
}

writeFileSync(join(root, 'public/llms.txt'), out);

// --- llms-full.txt ---------------------------------------------------------
// Meme probleme : il annoncait 17 articles et 11 pages locales. On regenere
// ses deux sections de listing, la prose reste intacte.
const fullSrc = read('public/llms-full.txt');
const fullHeadings = [...fullSrc.matchAll(/^## .*$/gm)].map((m) => ({ text: m[0], index: m.index }));

const fullSections = {
  '## Articles de blog (expertise publique)': [...posts]
    .sort((a, b) => a.title.localeCompare(b.title, 'fr'))
    .map((p, i) => `${i + 1}. **${p.title}** - ${base}/blog/${p.slug}`)
    .join('\n'),
  '## Pages du site': [
    ['Accueil', '/'],
    ['Services (partenaire web)', '/services'],
    ['Réseaux sociaux (tournage + publication)', '/reseaux-sociaux'],
    ['À propos de Elie Ageron', '/a-propos'],
    ['Guides de référence', '/guides'],
    ['Blog', '/blog'],
    ['Contact / appel gratuit', '/contact'],
    ['Démarrer un projet', '/get-started'],
    ['Portfolio', '/portfolio'],
    ['Pourquoi un site web', '/why-a-website'],
    ['Notre processus', '/our-process'],
  ]
    .map(([t, u]) => line(t, u))
    .concat(guides.map((g) => line(`Guide : ${g.title}`, `/guides/${g.slug}`)))
    .concat(cities.map((c) => line(c.title, `/${c.slug}`)))
    .join('\n'),
};

let fullOut = fullSrc;
for (const [heading, body] of Object.entries(fullSections)) {
  const found = fullHeadings.find((h) => h.text === heading);
  if (!found) {
    console.warn(`section absente de llms-full.txt, ignoree : ${heading}`);
    continue;
  }
  const next = fullHeadings.find((h) => h.index > found.index);
  const end = next ? next.index : fullSrc.length;
  const slice = fullSrc.slice(found.index, end);
  // On conserve le separateur horizontal quand la section en avait un.
  const trailer = slice.trimEnd().endsWith('---') ? '\n---\n\n' : '\n\n';
  fullOut = fullOut.replace(slice, `${heading}\n\n${body}\n${trailer}`);
}

writeFileSync(join(root, 'public/llms-full.txt'), fullOut);

console.log(
  `llms.txt et llms-full.txt : ${posts.length} articles, ${cities.length} pages locales, ` +
    `${guides.length} guides, ${categories.length} categories`
);
