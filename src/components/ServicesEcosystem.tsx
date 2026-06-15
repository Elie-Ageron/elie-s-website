import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ScrollReveal from './animations/ScrollReveal';
import { services } from '@/data/services';

const ServicesEcosystem = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" aria-labelledby="ecosystem-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            {language === 'fr' ? 'Et une fois le site en ligne ?' : 'And once the site is live?'}
          </span>
          <h2 id="ecosystem-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{language === 'fr' ? 'Votre présence en ligne,' : 'Your online presence,'}</span>{' '}
            <span className="inline-block text-primary">{language === 'fr' ? 'gérée de A à Z' : 'managed from A to Z'}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fr'
              ? "Google, réseaux sociaux, identité de marque, référencement. Au lieu de jongler entre plusieurs prestataires, vous avez un seul partenaire qui s'occupe de tout."
              : 'Google, social media, brand identity, SEO. Instead of juggling several providers, you have one partner who handles it all.'}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="relative glass-card rounded-2xl p-5 sm:p-6 flex flex-col h-full group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/15">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  {service.soon && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                      {language === 'fr' ? 'Bientôt' : 'Soon'}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5">
                  {service.title[language]}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.short[language]}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <Button variant="hero" size="lg" className="group" asChild>
            <Link to="/services" className="flex items-center gap-2">
              {language === 'fr' ? 'Voir tous les services' : 'See all services'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesEcosystem;
