import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import InternalLinks from '@/components/InternalLinks';
import {
  getPostsForLanguage,
  getLocalizedPost,
  getActiveCategories,
  getPostImage,
} from '@/data/blogPosts';
import { guides } from '@/data/guides';

const baseUrl = 'https://elieageron.com';
const PAGE_SIZE = 12;

const Blog = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(fr ? 'fr-FR' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  const allPosts = useMemo(
    () => getPostsForLanguage(language).map((post) => getLocalizedPost(post, language)),
    [language]
  );

  const categories = useMemo(() => getActiveCategories(language), [language]);

  // Recherche cote client sur titre, resume et mots-cles. Suffisant a cette echelle.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allPosts;
    return allPosts.filter((post) => {
      const haystack = [post.title, post.excerpt, post.categoryLabel, ...(post.tags ?? [])]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [allPosts, query]);

  const isSearching = query.trim().length > 0;
  const [featured, ...rest] = filtered;
  const shown = isSearching ? filtered : rest.slice(0, visible);
  const hasMore = !isSearching && rest.length > visible;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${baseUrl}/blog#blog`,
    name: fr ? 'Blog Elie Ageron, réseaux sociaux et web' : 'Elie Ageron Blog, social media and web',
    description: fr
      ? 'Réseaux sociaux, vidéo courte, site web et référencement local pour les entreprises de Savoie et de Haute-Savoie.'
      : 'Social media, short-form video, websites and local SEO for businesses in Savoie and Haute-Savoie.',
    url: `${baseUrl}/blog`,
    inLanguage: fr ? 'fr-FR' : 'en-US',
    isPartOf: { '@id': `${baseUrl}/#website` },
    author: { '@id': `${baseUrl}/#person` },
    publisher: { '@id': `${baseUrl}/#organization` },
    blogPost: allPosts.slice(0, 20).map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${baseUrl}/blog/${post.slug}#article`,
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.lastModified || post.date,
      author: { '@id': `${baseUrl}/#person` },
      image: getPostImage(post),
      url: `${baseUrl}/blog/${post.slug}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: fr ? 'Accueil' : 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
    ],
  };

  return (
    <>
      <SEO page="blog" structuredData={[blogSchema, breadcrumbSchema]} />

      {/* Hero compact, les articles sont le sujet */}
      <section className="relative grain pt-8 sm:pt-14 pb-8 sm:pb-10" aria-labelledby="blog-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-10 right-[10%] w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              Blog
            </span>
            <h1 id="blog-hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-balance">
              {fr ? 'Des conseils concrets pour ' : 'Practical advice to '}
              <span className="text-primary">
                {fr ? 'trouver des clients en ligne.' : 'win clients online.'}
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {fr
                ? `${allPosts.length} articles sur les réseaux sociaux, la vidéo, le site web et le référencement local. Ce qui fait réellement entrer des clients, et ce qui fait juste perdre du temps.`
                : `${allPosts.length} articles on social media, video, websites and local SEO. What actually brings clients in, and what just wastes your time.`}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Guides piliers, en tete de blog */}
      {fr && (
        <section className="pb-8" aria-labelledby="blog-guides">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 id="blog-guides" className="text-sm font-semibold uppercase tracking-wide text-foreground mb-3">
              Commencer par un guide
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    to={`/guides/${guide.slug}`}
                    className="group flex h-full flex-col justify-between gap-3 rounded-xl border border-border/60 p-4 hover:border-primary/40 transition-colors"
                  >
                    <span className="font-medium leading-snug group-hover:text-primary transition-colors">
                      {guide.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{guide.readTime} de lecture</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Recherche et categories */}
      <section className="pb-8" aria-label={fr ? 'Filtrer les articles' : 'Filter articles'}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/blog/categorie/${category.slug}`}
                    className="inline-flex items-center gap-2 min-h-[36px] px-4 rounded-full border border-border/70 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {fr ? category.fr : category.en}
                    <span className="text-xs text-primary/70">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative sm:w-64 shrink-0">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                placeholder={fr ? 'Rechercher un article' : 'Search articles'}
                aria-label={fr ? 'Rechercher un article' : 'Search articles'}
                className="w-full min-h-[40px] pl-9 pr-9 rounded-full border border-border/70 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              />
              {isSearching && (
                <button
                  onClick={() => setQuery('')}
                  aria-label={fr ? 'Effacer la recherche' : 'Clear search'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-8 sm:pb-12" aria-labelledby="blog-posts-heading">
        <h2 id="blog-posts-heading" className="sr-only">
          {fr ? 'Articles' : 'Articles'}
        </h2>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              {fr
                ? 'Aucun article ne correspond. Essayez un autre mot, ou parcourez les catégories ci-dessus.'
                : 'No article matches. Try another word, or browse the categories above.'}
            </p>
          )}

          {/* Article en vedette, uniquement hors recherche */}
          {!isSearching && featured && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-y border-border/60"
            >
              <Link
                to={`/blog/${featured.slug}`}
                className="group block py-10 sm:py-14 sm:px-4 sm:-mx-4 rounded-2xl transition-colors duration-300 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-4">
                  <span className="font-medium text-primary">{featured.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {featured.readTime}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-balance max-w-3xl group-hover:text-primary transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 min-h-[24px] text-sm font-medium text-primary">
                  {fr ? "Lire l'article" : 'Read the article'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </motion.article>
          )}

          <ul className={isSearching ? 'border-t border-border/60' : 'mt-2'}>
            {shown.map((post, index) => (
              <motion.li
                key={post.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: Math.min(index * 0.04, 0.25), duration: 0.4 }}
                className={index === 0 && !isSearching ? '' : 'border-t border-border/60'}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-baseline py-7 sm:py-8 sm:px-4 sm:-mx-4 rounded-2xl transition-colors duration-300 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div className="sm:col-span-3 flex sm:flex-col gap-2 sm:gap-1 text-xs sm:text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{post.categoryLabel}</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <div className="sm:col-span-8 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="hidden sm:flex sm:col-span-1 justify-end self-center">
                    <ArrowUpRight
                      className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>

          {hasMore && (
            <div className="pt-8 border-t border-border/60 text-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="inline-flex items-center gap-2 min-h-[44px] px-6 rounded-full border border-border/70 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                {fr ? 'Afficher plus d\'articles' : 'Show more articles'}
                <span className="text-xs text-muted-foreground">
                  {shown.length + 1} / {filtered.length}
                </span>
              </button>
            </div>
          )}

          <p className="mt-6 pt-8 border-t border-border/60 text-sm text-muted-foreground text-center">
            {fr ? 'Un projet en tête ? ' : 'Have a project in mind? '}
            <Link
              to="/get-started"
              className="text-primary font-medium hover:underline underline-offset-4 inline-flex items-center gap-1 min-h-[24px]"
              id="cta-blog-quote"
            >
              {fr ? 'Demander un devis' : 'Request a quote'}
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <InternalLinks currentPage="blog" />
      <ContactMethodsSection />
    </>
  );
};

export default Blog;
