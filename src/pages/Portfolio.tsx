import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Sparkles, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import InternalLinks from '@/components/InternalLinks';
import SEO from '@/components/SEO';
import portfolioMyWebGlory from '@/assets/portfolio-mywebglory.png';
import portfolioSolarFusion from '@/assets/portfolio-solar-fusion.png';
import portfolioVmProducers from '@/assets/portfolio-vm-producers.png';

interface PortfolioItemProps {
  image: string;
  name: string;
  url: string;
  categoryKey: string;
  ctaKey: string;
  descKey: string;
  alt: string;
  quote: string;
  quoteAuthor: string;
  delay?: number;
}

const PortfolioItem = ({ image, name, url, categoryKey, ctaKey, descKey, alt, quote, quoteAuthor, delay = 0 }: PortfolioItemProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50 group-hover:border-primary/30 transition-all duration-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          <img
            src={image}
            alt={alt}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{t(categoryKey)}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{name}</h3>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span className="text-sm font-medium hidden sm:block">{t('portfolio.preview')}</span>
                <ExternalLink className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Client quote */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.15 }}
        className="mt-6 px-4 py-4 rounded-xl bg-secondary/60 border border-border/50 relative"
      >
        <Quote className="w-4 h-4 text-primary/40 absolute top-3 left-3" aria-hidden="true" />
        <p className="text-sm text-muted-foreground italic pl-5 leading-relaxed">"{quote}"</p>
        <p className="text-xs text-primary font-medium mt-2 pl-5">{quoteAuthor}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.25 }}
        className="text-center mt-6"
      >
        <Button size="lg" className="group" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {t(ctaKey)}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
          {t(descKey)}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const { t, language } = useLanguage();

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: language === 'fr' ? 'Portfolio - Elie Ageron Web Design' : 'Portfolio - Elie Ageron Web Design',
    description: language === 'fr'
      ? 'Réalisations web premium par Elie Ageron : sites haute conversion pour des clients exigeants.'
      : 'Premium web projects by Elie Ageron: high-conversion sites for demanding clients.',
    url: 'https://elieageron.com/portfolio',
    author: { '@type': 'Person', name: 'Elie Ageron' },
    hasPart: [
      {
        '@type': 'WebSite',
        name: 'MyWebGlory',
        url: 'https://mywebglory.com',
        description: language === 'fr'
          ? 'Site web premium pour agence de marketing événementiel'
          : 'Premium website for an event marketing agency',
      },
      {
        '@type': 'WebSite',
        name: 'Solar Fusion',
        url: 'https://solar-fusion.fr',
        description: language === 'fr'
          ? 'Site professionnel pour installateur de panneaux solaires'
          : 'Professional website for a solar panel installer',
      },
      {
        '@type': 'WebSite',
        name: 'VM Producers',
        url: 'https://vm-producers.mywebglory.com',
        description: language === 'fr'
          ? 'Site vitrine pour label de production musicale'
          : 'Showcase website for a music production label',
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://elieageron.com/portfolio' },
    ],
  };

  const projects = [
    {
      image: portfolioMyWebGlory,
      name: 'MyWebGlory',
      url: 'https://mywebglory.com',
      categoryKey: 'portfolio.showcase.mywebglory.category',
      ctaKey: 'portfolio.showcase.mywebglory.cta',
      descKey: 'portfolio.showcase.mywebglory.desc',
      alt: 'MyWebGlory - Site web premium pour agence de marketing événementiel créé par Elie Ageron Web Design',
      quote: language === 'fr'
        ? 'Notre site inspire confiance, convertit mieux, et nos clients nous le disent. Un travail soigné, du début à la fin.'
        : 'Our site now inspires trust, converts better, and our clients tell us so. Careful, attentive work from start to finish.',
      quoteAuthor: 'Gabriel Ageron – Fondateur, MyWebGlory',
    },
    {
      image: portfolioSolarFusion,
      name: 'Solar Fusion',
      url: 'https://solar-fusion.fr',
      categoryKey: 'portfolio.showcase.solarfusion.category',
      ctaKey: 'portfolio.showcase.solarfusion.cta',
      descKey: 'portfolio.showcase.solarfusion.desc',
      alt: 'Solar Fusion - Site professionnel pour installateur de panneaux solaires créé par Elie Ageron Web Design',
      quote: language === 'fr'
        ? 'Elie a su capter l\'essence de notre marque. Le trafic a vraiment décollé dès le lancement.'
        : 'Elie perfectly captured our brand\'s essence. Traffic has really taken off since launch.',
      quoteAuthor: 'Sébastien Chaffardon – Fondateur, Solar Fusion',
    },
    {
      image: portfolioVmProducers,
      name: 'VM Producers',
      url: 'https://vmproducers.com',
      categoryKey: 'portfolio.showcase.vmproducers.category',
      ctaKey: 'portfolio.showcase.vmproducers.cta',
      descKey: 'portfolio.showcase.vmproducers.desc',
      alt: 'VM Producers - Site vitrine pour label de production musicale créé par Elie Ageron Web Design',
      quote: language === 'fr'
        ? 'Elie a compris notre univers immédiatement. Le résultat est percutant, professionnel, exactement ce qu\'on voulait.'
        : 'Elie understood our world straight away. The result is sharp, professional, and exactly what we were after.',
      quoteAuthor: 'Austin Talley – VM Producers',
    },
  ];

  return (
    <>
      <SEO page="portfolio" structuredData={[collectionSchema, breadcrumbSchema]} />
      
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
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/15 border-2 border-primary/40 shadow-lg shadow-primary/10">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-primary font-bold text-lg sm:text-xl tracking-wide">
                {t('portfolio.badge')}
              </span>
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
          </motion.div>

          {/* Projects */}
          <div className="space-y-16 sm:space-y-20">
            {projects.map((project, index) => (
              <PortfolioItem key={project.name} {...project} delay={index * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks currentPage="portfolio" />

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default Portfolio;
