import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SEO from '@/components/SEO';
import portfolioMyWebGlory from '@/assets/portfolio-mywebglory.png';

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO page="portfolio" />
      
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 relative grain" aria-labelledby="portfolio-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 sm:left-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="portfolio-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">{t('portfolio.title1')}</span>{' '}
              <span className="text-primary">{t('portfolio.title2')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('portfolio.subtitle')}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-8 sm:py-12 md:py-16" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">Web Design Projects by Elie Ageron</h2>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* "This could be yours" badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">
                Ce site pourrait être le vôtre
              </span>
            </div>
          </motion.div>

          {/* Main portfolio image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a 
              href="https://mywebglory.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              {/* Image container with shadow and border */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Screenshot */}
                <img 
                  src={portfolioMyWebGlory}
                  alt="MyWebGlory - Site web premium pour agence de marketing événementiel"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">Site Vitrine Premium</p>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">MyWebGlory</h3>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm font-medium hidden sm:block">Voir le site</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* CTA Button below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mt-8 sm:mt-10"
            >
              <Button
                size="lg"
                className="group"
                asChild
              >
                <a 
                  href="https://mywebglory.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Découvrir MyWebGlory
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
                Un site conçu pour convertir les visiteurs en clients, avec un design moderne et une expérience utilisateur optimisée.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default Portfolio;
