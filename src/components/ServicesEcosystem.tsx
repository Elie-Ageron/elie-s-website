import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ScrollReveal from './animations/ScrollReveal';
import { services } from '@/data/services';

// Section "Votre présence en ligne, gérée de A à Z" — index éditorial (refonte juillet 2026)
const ServicesEcosystem = () => {
  const { language } = useLanguage();

  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden"
      aria-labelledby="ecosystem-heading"
    >
      {/* Soft brand accent, top-right */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-[-10%] w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ─── Narrative (sticky on desktop) ─── */}
          <ScrollReveal direction="up" className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              {language === 'fr' ? 'Une fois le site en ligne' : 'Once the site is live'}
            </span>

            <h2
              id="ecosystem-heading"
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.1] text-balance"
            >
              {language === 'fr' ? 'Votre présence en ligne, ' : 'Your online presence, '}
              <span className="text-primary">
                {language === 'fr' ? 'gérée de A à Z' : 'managed from A to Z'}
              </span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              {language === 'fr'
                ? "Google, réseaux sociaux, identité de marque, référencement. Au lieu de jongler entre plusieurs prestataires, un seul partenaire s'occupe de tout."
                : 'Google, social media, brand identity, SEO. Instead of juggling several providers, one partner handles it all.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col gap-4 sm:items-center lg:items-start">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/services" className="flex items-center gap-2">
                  {language === 'fr' ? 'Voir tous les services' : 'See all services'}
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                {language === 'fr'
                  ? 'Un seul interlocuteur, un seul devis.'
                  : 'One contact, one quote.'}
              </p>
            </div>
          </ScrollReveal>

          {/* ─── Service index ─── */}
          <ul className="lg:col-span-7 -my-1">
            {services.map((service, index) => {
              const Icon = service.icon;
              const href = service.to ?? `/services#${service.anchor}`;
              const tag = service.soon
                ? language === 'fr'
                  ? 'bientôt'
                  : 'soon'
                : service.recurring
                ? language === 'fr'
                  ? 'mensuel'
                  : 'monthly'
                : null;

              return (
                <motion.li
                  key={service.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  className={index === 0 ? '' : 'border-t border-border/60'}
                >
                  <Link
                    to={href}
                    className="group flex items-center gap-4 sm:gap-5 py-5 pr-2 sm:pr-3 rounded-2xl sm:px-4 sm:-mx-4 transition-colors duration-300 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    {/* Bare icon — node, not a card */}
                    <Icon
                      className="w-5 h-5 shrink-0 text-muted-foreground/70 group-hover:text-primary transition-colors duration-300"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title[language]}
                        </h3>
                        {tag && (
                          <span className="text-xs font-medium text-muted-foreground/80 tabular-nums">
                            · {tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm sm:text-[0.95rem] text-muted-foreground leading-relaxed">
                        {service.short[language]}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="w-5 h-5 shrink-0 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesEcosystem;
