import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  date: string;
}

const Blog = () => {
  const { t, language } = useLanguage();

  const blogPosts: BlogPost[] = language === 'fr' ? [
    {
      id: '1',
      slug: 'pourquoi-site-web-2025',
      title: 'Pourquoi Votre Entreprise a Besoin d\'un Site Web en 2025',
      excerpt: 'Découvrez les 5 raisons cruciales pour lesquelles un site web professionnel est essentiel pour votre croissance.',
      readTime: '5 min',
      category: 'Stratégie',
      date: '2025-01-15',
    },
    {
      id: '2',
      slug: 'optimiser-taux-conversion',
      title: 'Comment Optimiser Votre Taux de Conversion',
      excerpt: 'Les techniques psychologiques et design qui transforment vos visiteurs en clients payants.',
      readTime: '7 min',
      category: 'Conversion',
      date: '2025-01-10',
    },
    {
      id: '3',
      slug: 'seo-local-guide-complet',
      title: 'SEO Local : Le Guide Complet pour Dominer Google',
      excerpt: 'Apprenez à positionner votre entreprise en première page de Google dans votre région.',
      readTime: '10 min',
      category: 'SEO',
      date: '2025-01-05',
    },
    {
      id: '4',
      slug: 'landing-page-efficace',
      title: 'Anatomie d\'une Landing Page qui Convertit',
      excerpt: 'Décryptage des éléments essentiels d\'une page d\'atterrissage haute performance.',
      readTime: '6 min',
      category: 'Design',
      date: '2025-01-01',
    },
  ] : [
    {
      id: '1',
      slug: 'why-website-2025',
      title: 'Why Your Business Needs a Website in 2025',
      excerpt: 'Discover the 5 crucial reasons why a professional website is essential for your growth.',
      readTime: '5 min',
      category: 'Strategy',
      date: '2025-01-15',
    },
    {
      id: '2',
      slug: 'optimize-conversion-rate',
      title: 'How to Optimize Your Conversion Rate',
      excerpt: 'Psychological and design techniques that transform visitors into paying clients.',
      readTime: '7 min',
      category: 'Conversion',
      date: '2025-01-10',
    },
    {
      id: '3',
      slug: 'local-seo-complete-guide',
      title: 'Local SEO: The Complete Guide to Dominate Google',
      excerpt: 'Learn how to rank your business on the first page of Google in your region.',
      readTime: '10 min',
      category: 'SEO',
      date: '2025-01-05',
    },
    {
      id: '4',
      slug: 'effective-landing-page',
      title: 'Anatomy of a High-Converting Landing Page',
      excerpt: 'Breaking down the essential elements of a high-performance landing page.',
      readTime: '6 min',
      category: 'Design',
      date: '2025-01-01',
    },
  ];

  return (
    <>
      <SEO page="blog" />
      
      {/* Hero */}
      <section className="py-16 md:py-20 relative grain" aria-labelledby="blog-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="blog-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">
                {language === 'fr' ? 'Conseils' : 'Tips'}
              </span>{' '}
              <span className="text-primary">
                {language === 'fr' ? '& Insights' : '& Insights'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Stratégies web, conversion et SEO pour développer votre business en ligne.'
                : 'Web strategies, conversion and SEO to grow your business online.'}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16" aria-labelledby="blog-posts-heading">
        <h2 id="blog-posts-heading" className="sr-only">
          {language === 'fr' ? 'Articles récents' : 'Recent articles'}
        </h2>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 flex flex-col h-full group cursor-pointer transition-all hover:neon-border"
                role="listitem"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" aria-hidden="true" />
                      Elie Ageron
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              {language === 'fr' 
                ? 'Plus d\'articles arrivent bientôt...'
                : 'More articles coming soon...'}
            </p>
            <Button asChild variant="hero" size="lg" className="group" id="cta-blog-pricing">
              <Link to="/pricing" className="flex items-center gap-2">
                {language === 'fr' ? 'Voir nos tarifs' : 'View our pricing'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <ContactMethodsSection />
    </>
  );
};

export default Blog;
