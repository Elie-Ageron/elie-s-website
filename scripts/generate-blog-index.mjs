/**
 * Genere src/data/blogIndex.ts : slug, titre et accroche des articles, sans
 * leur contenu.
 *
 * Pourquoi : le module blogPosts embarque le texte integral des articles et
 * pese environ un megaoctet une fois compile. Des qu'une page en importe quoi
 * que ce soit, meme une seule fonction, tout le corpus part dans son lot de
 * telechargement. L'accueil, les deux pages de service et les quinze pages
 * locales n'ont besoin que d'un titre et d'une accroche pour afficher quelques
 * liens : elles importent donc cet index leger a la place.
 *
 * Usage : node scripts/generate-blog-index.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
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

/** Extraction au regex, comme les autres scripts : pas de compilation TS. */
const field = (block, key) => {
  const m = block.match(
    new RegExp(`${key}:\\s*\\n?\\s*(['"\`])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`)
  );
  // La valeur capturee est du source TypeScript : les apostrophes y sont
  // echappees. On les rend avant de re-echapper a l'ecriture, sinon on double.
  return m ? m[2].replace(/\\(['"`\\])/g, '$1') : null;
};

const entries = [];
const seen = new Set();

for (const file of postFiles) {
  const src = read(file);
  // Un objet article commence a sa clef slug et court jusqu'au slug suivant.
  const marks = [...src.matchAll(/slug:\s*'([^']+)'/g)];
  for (let i = 0; i < marks.length; i++) {
    const slug = marks[i][1];
    if (seen.has(slug)) continue;
    const block = src.slice(marks[i].index, marks[i + 1]?.index ?? src.length);
    const title = field(block, 'titleFr');
    const excerpt = field(block, 'excerptFr');
    if (!title || !excerpt) {
      console.warn(`article ignore, titre ou accroche introuvable : ${slug}`);
      continue;
    }
    seen.add(slug);
    entries.push({ slug, title, excerpt });
  }
}

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const out = `/**
 * FICHIER GENERE. Ne pas modifier a la main.
 * Source : npm run gen:index (scripts/generate-blog-index.mjs)
 *
 * Index leger des articles : slug, titre et accroche, sans le contenu.
 * Importer ceci plutot que blogPosts quand une page a seulement besoin
 * d'afficher des liens : blogPosts embarque le texte integral et pese
 * environ un megaoctet une fois compile.
 */

export interface BlogIndexEntry {
  slug: string;
  title: string;
  excerpt: string;
}

export const blogIndex: BlogIndexEntry[] = [
${entries.map((e) => `  { slug: '${esc(e.slug)}', title: '${esc(e.title)}', excerpt: '${esc(e.excerpt)}' },`).join('\n')}
];

/** Nombre total d'articles publies, pour les libelles du type "les N articles". */
export const blogCount = ${entries.length};

export const getIndexEntry = (slug: string): BlogIndexEntry | undefined =>
  blogIndex.find((entry) => entry.slug === slug);
`;

writeFileSync(join(root, 'src/data/blogIndex.ts'), out);
console.log(`blogIndex.ts : ${entries.length} articles`);
