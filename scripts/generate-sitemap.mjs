/**
 * Genere public/sitemap.xml a partir des sources.
 *
 * Le sitemap etait maintenu a la main, ce qui garantissait de l'oublier apres
 * chaque ajout de page. Il est desormais derive des donnees : articles, pages
 * locales, guides et categories sont toujours a jour.
 *
 * Usage : node scripts/generate-sitemap.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://elieageron.com';
const today = new Date().toISOString().slice(0, 10);

/** Extraction sans compilation TypeScript : on lit les sources au regex. */
const readAll = (files) => files.map((f) => readFileSync(f, 'utf8')).join('\n');

const postFiles = [
  join(root, 'src/data/blogPosts.ts'),
  ...readdirSync(join(root, 'src/data/blog'))
    .filter((f) => f.startsWith('posts-'))
    .map((f) => join(root, 'src/data/blog', f)),
];

const collectPosts = () => {
  const src = readAll(postFiles);
  const re = /slug:\s*'([^']+)',[\s\S]{0,8000}?date:\s*'(\d{4}-\d{2}-\d{2})',(?:\s*lastModified:\s*'(\d{4}-\d{2}-\d{2})',)?/g;
  const posts = [];
  const seen = new Set();
  let m;
  while ((m = re.exec(src))) {
    if (seen.has(m[1])) continue;
    seen.add(m[1]);
    posts.push({ slug: m[1], lastmod: m[3] || m[2] });
  }
  return posts;
};

const collectCities = () => {
  const src = readAll(
    readdirSync(join(root, 'src/data/cities'))
      .filter((f) => f.startsWith('list-'))
      .map((f) => join(root, 'src/data/cities', f))
  );
  return [...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
};

const collectGuides = () => {
  const src = readFileSync(join(root, 'src/data/guides.ts'), 'utf8');
  const re = /slug:\s*'([^']+)',[\s\S]{0,2000}?updated:\s*'(\d{4}-\d{2}-\d{2})'/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) out.push({ slug: m[1], lastmod: m[2] });
  return out;
};

const collectCategories = () => {
  const src = readFileSync(join(root, 'src/data/blog/types.ts'), 'utf8');
  const block = src.slice(src.indexOf('export const blogCategories'));
  return [...block.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
};

/** Pages fixes, avec leur priorite editoriale. */
const staticPages = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/services', changefreq: 'weekly', priority: '0.9' },
  { loc: '/reseaux-sociaux', changefreq: 'weekly', priority: '0.9' },
  { loc: '/lieux-de-reception', changefreq: 'weekly', priority: '0.9' },
  { loc: '/guides', changefreq: 'weekly', priority: '0.9' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.9' },
  { loc: '/get-started', changefreq: 'monthly', priority: '0.9' },
  { loc: '/a-propos', changefreq: 'monthly', priority: '0.8' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
  { loc: '/portfolio', changefreq: 'weekly', priority: '0.8' },
  { loc: '/why-a-website', changefreq: 'monthly', priority: '0.8' },
  { loc: '/our-process', changefreq: 'monthly', priority: '0.8' },
  { loc: '/assessment', changefreq: 'monthly', priority: '0.7' },
  { loc: '/mentions-legales', changefreq: 'yearly', priority: '0.3' },
  { loc: '/politique-confidentialite', changefreq: 'yearly', priority: '0.3' },
];

const urlEntry = ({ loc, lastmod, changefreq, priority }) => {
  const url = `${BASE}${loc}`;
  return `  <url>
    <loc>${url}</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="${url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

const posts = collectPosts();
const cities = collectCities();
const guides = collectGuides();
const categories = collectCategories();

const entries = [
  ...staticPages.map((p) => ({ ...p, lastmod: today })),
  ...guides.map((g) => ({
    loc: `/guides/${g.slug}`,
    lastmod: g.lastmod,
    changefreq: 'monthly',
    priority: '0.9',
  })),
  ...cities.map((slug) => ({ loc: `/${slug}`, lastmod: today, changefreq: 'monthly', priority: '0.8' })),
  ...categories.map((slug) => ({
    loc: `/blog/categorie/${slug}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.7',
  })),
  ...posts.map((p) => ({
    loc: `/blog/${p.slug}`,
    lastmod: p.lastmod,
    changefreq: 'monthly',
    priority: '0.7',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Genere par scripts/generate-sitemap.mjs. Ne pas editer a la main. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(urlEntry).join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(
  `sitemap.xml : ${entries.length} URL (${staticPages.length} fixes, ${guides.length} guides, ${cities.length} villes, ${categories.length} categories, ${posts.length} articles)`
);
