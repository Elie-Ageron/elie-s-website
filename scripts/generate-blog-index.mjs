/**
 * Genere `src/data/blogIndex.ts` : tout ce qu'une liste d'articles affiche,
 * sans une ligne du texte des articles.
 *
 * Pourquoi : le module `blogPosts` embarque le texte integral et pese **1,1 Mo
 * compile**. Des qu'une page en importe quoi que ce soit, meme une seule
 * fonction, tout le corpus part dans son lot de telechargement.
 *
 * 🔴 **Mesure du 16 septembre 2026, en production, telephone en 4G lente.**
 * `/blog/prix-gestion-reseaux-sociaux` telechargeait 594 ko de JavaScript pour
 * afficher un seul article, avec un LCP a 7,2 s et le fil principal bloque
 * 1,9 s. Le lot fautif etait `blogPosts`, charge par `/blog`, les six pages de
 * categorie, `/guides`, les quatre guides et les 139 articles. **Soit 150 des
 * 185 pages du site.**
 *
 * L'index d'origine ne portait que slug, titre et accroche, ce qui ne suffisait
 * pas aux pages de liste : elles affichent aussi la categorie, la date, le
 * temps de lecture et les etiquettes. Elles retombaient donc sur `blogPosts`,
 * et la regle inscrite dans CLAUDE.md etait contournee par necessite. Une regle
 * qu'on ne peut pas suivre n'est pas une regle.
 *
 * ⚠️ **Ne jamais ajouter `contentFr` ici.** C'est tout l'interet du fichier.
 *
 * Usage : node scripts/generate-blog-index.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');

/* L'ordre compte : `blogPosts.ts` d'abord, comme dans le module, pour que les
   articles herites gardent leur rang dans les listes. */
const postFiles = [
  // Les articles herites d'abord, comme dans le module agrege : ils gardent
  // ainsi leur rang dans les listes.
  'src/data/blog/posts-legacy.ts',
  ...readdirSync(join(root, 'src/data/blog'))
    .filter((f) => f.startsWith('posts-') && f !== 'posts-legacy.ts')
    .map((f) => `src/data/blog/${f}`),
];

/** Extraction au regex, comme les autres scripts : pas de compilation TS. */
const field = (block, key) => {
  const m = block.match(new RegExp(`\\b${key}:\\s*\\n?\\s*(['"\`])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`));
  // La valeur capturee est du source TypeScript : les apostrophes y sont
  // echappees. On les rend avant de re-echapper a l'ecriture, sinon on double.
  return m ? m[2].replace(/\\(['"`\\])/g, '$1') : null;
};

/** Un tableau de chaines, `tags: ['a', 'b']`. */
const list = (block, key) => {
  const m = block.match(new RegExp(`\\b${key}:\\s*\\[([^\\]]*)\\]`));
  if (!m) return [];
  return [...m[1].matchAll(/(['"])((?:\\.|(?!\1)[^\\])*)\1/g)].map((x) => x[2].replace(/\\(['"\\])/g, '$1'));
};

/* La correspondance libelle vers categorie est lue dans `types.ts` plutot que
   recopiee : deux copies divergent toujours, et celle du script serait la
   derniere a etre mise a jour. */
const typesSrc = read('src/data/blog/types.ts');
const legacyMap = {};
{
  const bloc = typesSrc.slice(typesSrc.indexOf('const legacyCategoryMap'), typesSrc.indexOf('export const getCategorySlug'));
  for (const m of bloc.matchAll(/'?([^':\n]+)'?:\s*'([^']+)'/g)) {
    legacyMap[m[1].trim().replace(/^'|'$/g, '')] = m[2];
  }
}

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

    const categoryFr = field(block, 'categoryFr');
    entries.push({
      slug,
      title,
      excerpt,
      titleEn: field(block, 'titleEn'),
      excerptEn: field(block, 'excerptEn'),
      // Les balises SEO sont dans l'index pour que l'entete de l'article et son
      // `<head>` s'affichent sans attendre le chargement du texte.
      seoTitle: field(block, 'seoTitleFr'),
      seoDesc: field(block, 'seoDescFr'),
      seoTitleEn: field(block, 'seoTitleEn'),
      seoDescEn: field(block, 'seoDescEn'),
      category: field(block, 'categorySlug') ?? legacyMap[categoryFr] ?? 'strategie',
      date: field(block, 'date'),
      lastModified: field(block, 'lastModified'),
      readTime: field(block, 'readTime') ?? '5 min',
      tags: list(block, 'tags'),
      image: field(block, 'image'),
      pillar: field(block, 'pillar'),
      frOnly: /\bfrOnly:\s*true/.test(block),
      // Le fichier qui porte le texte, pour le chargement a la demande.
      module: file.replace('src/data/', '').replace(/\.ts$/, ''),
    });
  }
}

const j = (v) => JSON.stringify(v ?? null);
const ligne = (e) =>
  `  { slug: ${j(e.slug)}, title: ${j(e.title)}, excerpt: ${j(e.excerpt)}, ` +
  `titleEn: ${j(e.titleEn)}, excerptEn: ${j(e.excerptEn)}, ` +
  `seoTitle: ${j(e.seoTitle)}, seoDesc: ${j(e.seoDesc)}, ` +
  `seoTitleEn: ${j(e.seoTitleEn)}, seoDescEn: ${j(e.seoDescEn)}, ` +
  `category: ${j(e.category)}, date: ${j(e.date)}, lastModified: ${j(e.lastModified)}, ` +
  `readTime: ${j(e.readTime)}, tags: ${JSON.stringify(e.tags)}, image: ${j(e.image)}, ` +
  `pillar: ${j(e.pillar)}, frOnly: ${e.frOnly}, module: ${j(e.module)} },`;

const out = `/**
 * FICHIER GENERE. Ne pas modifier a la main.
 * Source : npm run gen:index (scripts/generate-blog-index.mjs)
 *
 * Tout ce qu'une liste d'articles affiche, **sans une ligne de leur texte**.
 *
 * 🔴 Importer ceci, pas \`blogPosts\`, des qu'une page n'affiche pas le corps
 * d'un article. \`blogPosts\` pese 1,1 Mo compile : une seule fonction importee
 * fait tomber les 139 articles entiers dans le lot de telechargement de la
 * page. Mesure du 16 septembre 2026 : 594 ko de JavaScript et un LCP a 7,2 s
 * sur un article, en 4G.
 *
 * Le champ \`module\` dit quel fichier porte le texte de l'article. C'est ce qui
 * permet a \`BlogPost\` de ne charger que celui-la.
 */

import { blogCategories, type CategorySlug } from './blog/types';

export interface BlogIndexEntry {
  slug: string;
  title: string;
  excerpt: string;
  /** Absents sur les articles francais uniquement. */
  titleEn: string | null;
  excerptEn: string | null;
  /** Balises SEO propres a l'article, repli sur titre et accroche. */
  seoTitle: string | null;
  seoDesc: string | null;
  seoTitleEn: string | null;
  seoDescEn: string | null;
  category: CategorySlug;
  date: string | null;
  lastModified: string | null;
  readTime: string;
  tags: string[];
  image: string | null;
  pillar: string | null;
  frOnly: boolean;
  /** Le fichier de \`src/data/\` qui porte le texte, pour l'import a la demande. */
  module: string;
}

export const blogIndex: BlogIndexEntry[] = [
${entries.map(ligne).join('\n')}
];

/** Nombre total d'articles publies, pour les libelles du type "les N articles". */
export const blogCount = ${entries.length};

export const getIndexEntry = (slug: string): BlogIndexEntry | undefined =>
  blogIndex.find((entry) => entry.slug === slug);

/** Les articles visibles dans une langue donnee. */
export const getIndexForLanguage = (language: 'fr' | 'en'): BlogIndexEntry[] =>
  language === 'en' ? blogIndex.filter((e) => !e.frOnly) : blogIndex;

/** Titre et accroche dans la langue servie, avec repli sur le francais. */
export const localizeIndexEntry = (entry: BlogIndexEntry, language: 'fr' | 'en') => {
  const anglais = language === 'en' && !entry.frOnly;
  const categorie = blogCategories.find((c) => c.slug === entry.category) ?? blogCategories[0];
  return {
    ...entry,
    title: anglais ? entry.titleEn ?? entry.title : entry.title,
    excerpt: anglais ? entry.excerptEn ?? entry.excerpt : entry.excerpt,
    categoryLabel: anglais ? categorie.en : categorie.fr,
    categorySlug: entry.category,
    seoTitleFinal: withBrand(
      (anglais ? entry.seoTitleEn : entry.seoTitle) ?? (anglais ? entry.titleEn ?? entry.title : entry.title)
    ),
    seoDescFinal:
      (anglais ? entry.seoDescEn : entry.seoDesc) ??
      (anglais ? entry.excerptEn ?? entry.excerpt : entry.excerpt),
  };
};

/**
 * Ajoute le suffixe de marque tant que la balise reste sous 60 caracteres.
 * Meme regle que dans \`blogPosts.ts\` : les titres deja signes ou trop longs
 * sont laisses tels quels.
 */
function withBrand(title: string): string {
  const suffixe = ' | Elie Ageron';
  if (title.includes('Elie Ageron')) return title;
  return title.length + suffixe.length <= 60 ? title + suffixe : title;
}

export const getIndexByCategory = (slug: CategorySlug, language: 'fr' | 'en' = 'fr') =>
  getIndexForLanguage(language).filter((entry) => entry.category === slug);

/** Categories qui contiennent au moins un article dans la langue demandee. */
export const getActiveCategoriesFromIndex = (language: 'fr' | 'en' = 'fr') =>
  blogCategories
    .map((category) => ({ ...category, count: getIndexByCategory(category.slug, language).length }))
    .filter((category) => category.count > 0);

/** Le visuel de partage, genere par gen:covers quand l'article n'en declare pas. */
export const getIndexImage = (entry: BlogIndexEntry): string =>
  entry.image ?? \`https://elieageron.com/blog/covers/\${entry.slug}.png\`;
`;

writeFileSync(join(root, 'src/data/blogIndex.ts'), out);
const parModule = {};
for (const e of entries) parModule[e.module] = (parModule[e.module] ?? 0) + 1;
console.log(
  `blogIndex.ts : ${entries.length} articles, ${Object.keys(parModule).length} modules de contenu`
);
