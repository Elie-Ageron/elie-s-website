import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioLuxura from '@/assets/portfolio-luxura-spa.jpg';
import portfolioSteel from '@/assets/portfolio-steel-pipe.jpg';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'luxura',
      image: portfolioLuxura,
      name: t('portfolio.luxura.name'),
      category: t('portfolio.luxura.category'),
      description: t('portfolio.luxura.desc'),
      url: '#',
    },
    {
      id: 'steel',
      image: portfolioSteel,
      name: t('portfolio.steel.name'),
      category: t('portfolio.steel.category'),
      description: t('portfolio.steel.desc'),
      url: '#',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 relative grain">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-1 mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  <Button 
                    variant="neonOutline" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {t('portfolio.preview')}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">{t('portfolio.cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('portfolio.cta.subtitle')}</p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">
                {t('portfolio.cta.button')}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
