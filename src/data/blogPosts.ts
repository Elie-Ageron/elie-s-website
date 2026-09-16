import type { BlogPost, CategorySlug } from './blog/types';
import { blogCategories, getCategory, getCategorySlug } from './blog/types';
import { socialPostsA } from './blog/posts-social-a';
import { socialPostsB } from './blog/posts-social-b';
import { videoPosts } from './blog/posts-video';
import { localPosts } from './blog/posts-local';
import { webPosts } from './blog/posts-web';
import { creationPosts } from './blog/posts-creation';
import { googlePosts } from './blog/posts-google';
import { tourismePosts } from './blog/posts-tourisme';
import { socialPostsC } from './blog/posts-social-c';
import { metiersPosts } from './blog/posts-metiers';
import { decisionsPosts } from './blog/posts-decisions';
import { googlePostsB } from './blog/posts-google-b';
import { canauxPosts } from './blog/posts-canaux';
import { metiersPostsB } from './blog/posts-metiers-b';
import { pilotagePosts } from './blog/posts-pilotage';
import { terrainPosts } from './blog/posts-terrain';
import { metiersPostsC } from './blog/posts-metiers-c';
import { devisPosts } from './blog/posts-devis';
import { outilsPosts } from './blog/posts-outils';
import { pratiquePosts } from './blog/posts-pratique';
import { vitrinePosts } from './blog/posts-vitrine';
import { acquisitionPosts } from './blog/posts-acquisition';
import { visibilitePosts } from './blog/posts-visibilite';
import { fondamentauxPosts } from './blog/posts-fondamentaux';
import { legacyPosts } from './blog/posts-legacy';

export type { BlogPost, BlogCategory, CategorySlug, BlogFaqItem } from './blog/types';
export { blogCategories, getCategory, getCategorySlug } from './blog/types';


/**
 * Catalogue complet, trie du plus recent au plus ancien.
 * L'ordre du tableau pilote toutes les listes du site.
 */
export const blogPosts: BlogPost[] = [
  ...legacyPosts,
  ...socialPostsA,
  ...socialPostsB,
  ...videoPosts,
  ...localPosts,
  ...webPosts,
  ...creationPosts,
  ...googlePosts,
  ...tourismePosts,
  ...socialPostsC,
  ...metiersPosts,
  ...decisionsPosts,
  ...googlePostsB,
  ...canauxPosts,
  ...metiersPostsB,
  ...pilotagePosts,
  ...terrainPosts,
  ...metiersPostsC,
  ...devisPosts,
  ...outilsPosts,
  ...pratiquePosts,
  ...vitrinePosts,
  ...acquisitionPosts,
  ...visibilitePosts,
  ...fondamentauxPosts,
].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : Number(b.id) - Number(a.id)));

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

/**
 * Visuel de partage. Par defaut le visuel editorial genere par
 * scripts/generate-blog-covers.mjs, servi depuis le domaine plutot que
 * hotlinke sur une banque d'images.
 */
export const getPostImage = (post: BlogPost): string =>
  post.image ?? `https://elieageron.com/blog/covers/${post.slug}.png`;

/**
 * Articles visibles dans une langue donnee. Les articles `frOnly` sont masques
 * en anglais : servir du francais sous `lang="en"` ferait plus de mal que bien.
 */
export const getPostsForLanguage = (language: 'fr' | 'en'): BlogPost[] =>
  language === 'fr' ? blogPosts : blogPosts.filter((post) => !post.frOnly);

export const getPostsByCategory = (
  slug: CategorySlug,
  language: 'fr' | 'en' = 'fr'
): BlogPost[] => getPostsForLanguage(language).filter((post) => getCategorySlug(post) === slug);

/** Categories qui contiennent au moins un article dans la langue demandee. */
export const getActiveCategories = (language: 'fr' | 'en' = 'fr') =>
  blogCategories
    .map((category) => ({
      ...category,
      count: getPostsByCategory(category.slug, language).length,
    }))
    .filter((category) => category.count > 0);

/**
 * Lectures suivantes. On respecte d'abord la liste `related` ecrite a la main,
 * puis on complete par proximite : meme categorie, puis tags partages.
 */
export const getRelatedPosts = (
  post: BlogPost,
  language: 'fr' | 'en' = 'fr',
  limit = 3
): BlogPost[] => {
  const pool = getPostsForLanguage(language).filter((p) => p.slug !== post.slug);
  const picked: BlogPost[] = [];

  const push = (candidate?: BlogPost) => {
    if (candidate && picked.length < limit && !picked.some((p) => p.slug === candidate.slug)) {
      picked.push(candidate);
    }
  };

  (post.related ?? []).forEach((slug) => push(pool.find((p) => p.slug === slug)));

  const category = getCategorySlug(post);
  pool
    .filter((p) => getCategorySlug(p) === category)
    .forEach(push);

  const tags = new Set(post.tags ?? []);
  if (tags.size > 0) {
    pool
      .filter((p) => (p.tags ?? []).some((tag) => tags.has(tag)))
      .forEach(push);
  }

  pool.forEach(push);

  return picked;
};

/**
 * Ajoute le suffixe de marque tant que la balise title reste sous 60 caracteres.
 * Les titres deja signes ou trop longs sont laisses tels quels.
 */
const withBrand = (title: string): string => {
  const suffix = ' | Elie Ageron';
  if (title.includes('Elie Ageron')) return title;
  return title.length + suffix.length <= 60 ? title + suffix : title;
};

/** Contenu localise, avec repli sur le francais pour les articles `frOnly`. */
export const getLocalizedPost = (post: BlogPost, language: 'fr' | 'en') => {
  const useEnglish = language === 'en' && !post.frOnly;

  const title = useEnglish ? post.titleEn ?? post.titleFr : post.titleFr;
  const excerpt = useEnglish ? post.excerptEn ?? post.excerptFr : post.excerptFr;

  return {
    ...post,
    title,
    excerpt,
    content: useEnglish ? post.contentEn ?? post.contentFr : post.contentFr,
    category: useEnglish ? post.categoryEn ?? post.categoryFr : post.categoryFr,
    categorySlug: getCategorySlug(post),
    categoryLabel: useEnglish ? getCategory(getCategorySlug(post)).en : getCategory(getCategorySlug(post)).fr,
    // Balise title complete (suffixe marque compris) et meta description.
    // Les articles ont un titre editorial long ; ces champs gardent le SEO
    // sous les limites de Google sans raccourcir le H1.
    seoTitle: withBrand((useEnglish ? post.seoTitleEn : post.seoTitleFr) ?? title),
    seoDesc: (useEnglish ? post.seoDescEn : post.seoDescFr) ?? excerpt,
    /** Langue reelle du contenu servi, utilisee pour la balise html lang. */
    contentLanguage: (useEnglish ? 'en' : 'fr') as 'fr' | 'en',
  };
};
