import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Sparkles } from 'lucide-react';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SEO from '@/components/SEO';

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
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">Web Design Projects by Elie Ageron</h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* "This could be yours" banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 mb-8"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm sm:text-base">
                Ce site pourrait être le vôtre
              </span>
            </motion.div>

            {/* Main portfolio link */}
            <a 
              href="https://mywebglory.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl active:scale-[0.98] transition-transform cursor-pointer bg-card border border-border"
              >
                {/* Screenshot preview */}
                <div className="aspect-video overflow-hidden bg-muted">
                  <iframe
                    src="https://mywebglory.com"
                    title="MyWebGlory - Portfolio website example"
                    className="w-full h-full scale-100 pointer-events-none"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  {/* Overlay to make it clickable */}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-foreground/5 transition-colors" />
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 bg-card">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        Site Vitrine Premium
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">MyWebGlory</h3>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed max-w-lg">
                        Un site web professionnel conçu pour convertir les visiteurs en clients. Design moderne, responsive et optimisé pour le SEO.
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium">Visiter</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </a>

            {/* Mobile visit button */}
            <div className="sm:hidden mt-4">
              <a 
                href="https://mywebglory.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium"
              >
                <span>Visiter le site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default Portfolio;
