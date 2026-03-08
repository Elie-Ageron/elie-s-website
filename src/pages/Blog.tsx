import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import InternalLinks from '@/components/InternalLinks';
import { blogPosts, getLocalizedPost } from '@/data/blogPosts';

const Blog = () => {
  const { language } = useLanguage();

  const localizedPosts = blogPosts.map(post => getLocalizedPost(post, language));

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: language === 'fr' ? 'Blog Elie Ageron — Conseils Web Design & SEO' : 'Elie Ageron Blog — Web Design & SEO Tips',
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
        dateModified: post.date,
        author: { '@type': 'Person', name: 'Elie Ageron' },
        url: `https://elieageron.com/blog/${post.slug}`,
        image: 'https://elieageron.com/og-image.png',
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
      
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 relative grain" aria-labelledby="blog-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="blog-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">
                {language === 'fr' ? 'Conseils' : 'Tips'}
              </span>{' '}
              <span className="text-primary">
                {language === 'fr' ? '& Insights' : '& Insights'}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === 'fr' 
                ? 'Stratégies web, conversion et SEO pour développer votre business en ligne.'
                : 'Web strategies, conversion and SEO to grow your business online.'}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 sm:py-12 md:py-16" aria-labelledby="blog-posts-heading">
        <h2 id="blog-posts-heading" className="sr-only">
          {language === 'fr' ? 'Articles récents' : 'Recent articles'}
        </h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" role="list">
            {localizedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
                role="listitem"
              >
                <Link 
                  to={`/blog/${post.slug}`}
                  className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col h-full cursor-pointer transition-all hover:neon-border block active:scale-[0.98]"
                >
                  {/* Category Badge */}
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-3 sm:pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" aria-hidden="true" />
                        {post.author}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              {language === 'fr' 
                ? 'Plus d\'articles arrivent bientôt...'
                : 'More articles coming soon...'}
            </p>
            <Button asChild variant="hero" size="lg" className="group min-h-[52px] active:scale-[0.98] transition-transform" id="cta-blog-pricing">
              <Link to="/pricing" className="flex items-center gap-2">
                {language === 'fr' ? 'Voir nos tarifs' : 'View our pricing'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
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
