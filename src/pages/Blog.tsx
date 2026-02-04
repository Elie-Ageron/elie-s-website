import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import { blogPosts, getLocalizedPost } from '@/data/blogPosts';

const Blog = () => {
  const { language } = useLanguage();

  const localizedPosts = blogPosts.map(post => getLocalizedPost(post, language));

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
                  className="glass-card rounded-2xl p-6 flex flex-col h-full cursor-pointer transition-all hover:neon-border block active:scale-[0.98]"
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
                        {post.author}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
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
