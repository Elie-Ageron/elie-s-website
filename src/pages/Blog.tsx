import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import InternalLinks from '@/components/InternalLinks';
import { blogPosts, getLocalizedPost } from '@/data/blogPosts';

const Blog = () => {
  const { language } = useLanguage();

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  // Latest article first, the most recent one is featured
  const sortedPosts = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : Number(b.id) - Number(a.id)))
    .map((post) => getLocalizedPost(post, language));

  const [featured, ...rest] = sortedPosts;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: language === 'fr' ? 'Blog Elie Ageron - Conseils Web Design & SEO' : 'Elie Ageron Blog - Web Design & SEO Tips',
    description: language === 'fr'
      ? 'Stratégies web, conversion et SEO pour développer votre business en ligne.'
      : 'Web strategies, conversion and SEO to grow your business online.',
    url: 'https://elieageron.com/blog',
    author: {
      '@type': 'Person',
      name: 'Elie Ageron',
      url: 'https://elieageron.com/',
    },
    blogPost: blogPosts.map(post => {
      const localized = getLocalizedPost(post, language);
      return {
        '@type': 'BlogPosting',
        headline: localized.title,
        description: localized.excerpt,
        datePublished: post.date,
        dateModified: post.lastModified || post.date,
        author: { '@type': 'Person', name: 'Elie Ageron' },
        url: `https://elieageron.com/blog/${post.slug}`,
        image: post.image || 'https://elieageron.com/og-image.png',
      };
    }),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://elieageron.com/blog' },
    ],
  };

  return (
    <>
      <SEO page="blog" structuredData={breadcrumbSchema} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      {/* Hero, compact, the articles are the point */}
      <section className="relative grain pt-8 sm:pt-14 pb-10 sm:pb-14" aria-labelledby="blog-hero-heading">
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
              {language === 'fr' ? 'Des conseils concrets pour ' : 'Practical advice to '}
              <span className="text-primary">
                {language === 'fr' ? 'trouver des clients en ligne.' : 'win clients online.'}
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === 'fr'
                ? 'Réseaux sociaux, site web, référencement local. Ce qui fait réellement entrer des clients, et ce qui fait juste perdre du temps.'
                : 'Social media, websites, local SEO. What actually brings clients in, and what just wastes your time.'}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Articles */}
      <section className="py-8 sm:py-12" aria-labelledby="blog-posts-heading">
        <h2 id="blog-posts-heading" className="sr-only">
          {language === 'fr' ? 'Articles récents' : 'Recent articles'}
        </h2>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Featured, latest article, big and typographic */}
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
                <span className="font-medium text-primary">{featured.category}</span>
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
                {language === 'fr' ? "Lire l'article" : 'Read the article'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          </motion.article>

          {/* The rest, editorial list */}
          <ul className="mt-2">
            {rest.map((post, index) => (
              <motion.li
                key={post.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
                className={index === 0 ? '' : 'border-t border-border/60'}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-baseline py-7 sm:py-8 sm:px-4 sm:-mx-4 rounded-2xl transition-colors duration-300 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div className="sm:col-span-3 flex sm:flex-col gap-2 sm:gap-1 text-xs sm:text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{post.category}</span>
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

          {/* Quiet closing CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 pt-8 border-t border-border/60 text-sm text-muted-foreground text-center"
          >
            {language === 'fr'
              ? 'Un projet de site en tête ? '
              : 'Have a website project in mind? '}
            <Link
              to="/get-started"
              className="text-primary font-medium hover:underline underline-offset-4 inline-flex items-center gap-1 min-h-[24px]"
              id="cta-blog-quote"
            >
              {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </motion.p>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks currentPage="blog" />

      {/* Contact */}
      <ContactMethodsSection />
    </>
  );
};

export default Blog;
