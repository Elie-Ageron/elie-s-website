import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioLuxura from '@/assets/portfolio-luxura-spa.jpg';
import portfolioSteel from '@/assets/portfolio-steel-pipe.jpg';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SEO from '@/components/SEO';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'luxura',
      image: portfolioLuxura,
      name: t('portfolio.luxura.name'),
      category: t('portfolio.luxura.category'),
      description: t('portfolio.luxura.desc'),
      url: '/portfolio/luxura-spa',
    },
    {
      id: 'steel',
      image: portfolioSteel,
      name: t('portfolio.steel.name'),
      category: t('portfolio.steel.category'),
      description: t('portfolio.steel.desc'),
      url: '/portfolio/steel-pipe',
    },
  ];

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

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">Web Design Projects by Elie Ageron</h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {projects.map((project, index) => (
              <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl active:scale-[0.98] transition-transform cursor-pointer"
                  aria-label={`${project.name} - ${project.category}`}
                >
                  <figure className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.name} web design project - ${project.description}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </figure>
                  
                  {/* Overlay - Always visible on mobile, hover on desktop */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                  
                  {/* Content - Always visible on mobile */}
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1 mb-1 sm:mb-2">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-0 md:mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                      {project.description}
                    </p>
                  </figcaption>
                </motion.article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default Portfolio;
