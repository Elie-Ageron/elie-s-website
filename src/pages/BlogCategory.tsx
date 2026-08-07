import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Clock } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  blogCategories,
  getActiveCategories,
  getPostsByCategory,
  getLocalizedPost,
} from '@/data/blogPosts';
import type { CategorySlug } from '@/data/blogPosts';
import { guides } from '@/data/guides';

const baseUrl = 'https://elieageron.com';

/** Guide pilier mis en avant pour chaque famille de sujets. */
const categoryPillar: Partial<Record<CategorySlug, string>> = {
  'reseaux-sociaux': 'reseaux-sociaux-entreprise-locale',
  video: 'video-smartphone-entreprise',
  'seo-local': 'visibilite-google-locale',
  conversion: 'reseaux-sociaux-entreprise-locale',
  'site-web': 'visibilite-google-locale',
  strategie: 'reseaux-sociaux-entreprise-locale',
};

/**
 * Page categorie. C'est une cible SEO a part entiere : elle regroupe un
 * ensemble d'articles autour d'un theme et renvoie vers le guide pilier.
 */
const BlogCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) return <Navigate to="/blog" replace />;

  const posts = getPostsByCategory(category.slug, language).map((post) =>
    getLocalizedPost(post, language)
  );
  if (posts.length === 0) return <Navigate to="/blog" replace />;

  const fr = language === 'fr';
  const canonical = `${baseUrl}/blog/categorie/${category.slug}`;
  const otherCategories = getActiveCategories(language).filter((c) => c.slug !== category.slug);
  const pillar = guides.find((g) => g.slug === categoryPillar[category.slug]);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(fr ? 'fr-FR' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${canonical}#collection`,
    name: fr ? category.fr : category.en,
    description: fr ? category.introFr : category.introEn,
    url: canonical,
    inLanguage: fr ? 'fr-FR' : 'en-US',
    isPartOf: { '@id': `${baseUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${baseUrl}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: fr ? 'Accueil' : 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: fr ? category.fr : category.en, item: canonical },
    ],
  };

  return (
    <>
      <SEO
        page="blog"
        customTitle={fr ? category.seoTitleFr : `${category.en} Articles | Elie Ageron`}
        customDescription={fr ? category.seoDescFr : category.introEn}
        customCanonical={canonical}
        structuredData={[collectionSchema, breadcrumbSchema]}
      />

      <section className="relative grain pt-8 sm:pt-14 pb-8 sm:pb-12" aria-labelledby="category-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-10 right-[10%] w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <nav aria-label={fr ? "Fil d'ariane" : 'Breadcrumb'} className="mb-6 text-sm text-muted-foreground">
            <Link to="/blog" className="hover:text-primary underline-offset-4 hover:underline">
              Blog
            </Link>
          </nav>
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 id="category-heading" className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-balance">
              {fr ? category.fr : category.en}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {fr ? category.introFr : category.introEn}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {posts.length} {fr ? (posts.length > 1 ? 'articles' : 'article') : posts.length > 1 ? 'articles' : 'article'}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Renvoi vers le guide pilier */}
      {pillar && fr && (
        <section className="pb-8" aria-labelledby="category-pillar">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link
              to={`/guides/${pillar.slug}`}
              className="group block glass-card rounded-2xl p-5 sm:p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                Commencer par le guide
              </span>
              <h2 id="category-pillar" className="mt-2 text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                {pillar.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{pillar.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 min-h-[24px] text-sm font-medium text-primary">
                Lire le guide complet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>
      )}

      <section className="pb-8" aria-labelledby="category-posts">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="category-posts" className="sr-only">
            {fr ? 'Articles de cette catégorie' : 'Articles in this category'}
          </h2>
          <ul className="border-y border-border/60 divide-y divide-border/60">
            {posts.map((post, index) => (
              <motion.li
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: Math.min(index * 0.04, 0.24), duration: 0.4 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-baseline py-7 sm:px-4 sm:-mx-4 rounded-2xl transition-colors duration-300 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div className="sm:col-span-3 flex sm:flex-col gap-2 sm:gap-1 text-xs sm:text-sm text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="sm:col-span-8 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>
                  <div className="hidden sm:flex sm:col-span-1 justify-end self-center">
                    <ArrowUpRight
                      className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 sm:py-14" aria-labelledby="category-others">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="category-others" className="text-lg font-semibold text-foreground mb-4">
            {fr ? 'Les autres thèmes' : 'Other topics'}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {otherCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/blog/categorie/${c.slug}`}
                  className="inline-flex items-center gap-2 min-h-[36px] px-4 rounded-full border border-border/70 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {fr ? c.fr : c.en}
                  <span className="text-xs text-primary/70">{c.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactMethodsSection />
    </>
  );
};

export default BlogCategory;
