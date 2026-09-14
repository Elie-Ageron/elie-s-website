import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ScrollReveal from './animations/ScrollReveal';
import { services } from '@/data/services';

/**
 * L'index des sept services, sur l'accueil.
 *
 * Le titre disait « Le site n'est que le point de depart ». C'etait un reste
 * de l'epoque ou la page vendait d'abord des sites : il presentait les reseaux
 * sociaux comme une suite du site, alors que c'est l'inverse depuis aout 2026.
 * Le titre porte maintenant ce que le visiteur achete reellement ici, un seul
 * prestataire au lieu de quatre.
 */
const ServicesEcosystem = () => {
  const { language } = useLanguage();

  return (
    <section
      className="py-24 sm:py-36 relative"
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ─── Narrative (sticky on desktop) ─── */}
          <ScrollReveal direction="up" className="lg:col-span-5 lg:sticky lg:top-28 text-center lg:text-left">
            <h2 id="ecosystem-heading" className="section-title">
              {language === 'fr' ? 'Un seul interlocuteur ' : 'One person '}
              <span className="text-primary">
                {language === 'fr' ? 'pour tout le reste.' : 'for everything else.'}
              </span>
            </h2>

            <p className="section-lede mt-6 mx-auto lg:mx-0">
              {language === 'fr'
                ? "La fiche Google, les avis, le logo, les textes. Ce sont les quatre choses qu'on confie d'habitude à quatre personnes différentes qui ne se parlent pas. Ici c'est le même devis et le même numéro."
                : 'The Google profile, the reviews, the logo, the copy. Those are the four things usually handed to four different people who never talk to each other. Here it is one quote and one phone number.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col gap-4 items-center lg:items-start">
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
                  /* Disait « Un seul interlocuteur, un seul devis. », a douze
                     lignes du titre « Un seul interlocuteur pour tout le
                     reste ». La meme idee deux fois de suite ne renforce rien. */
                  ? 'Et un seul devis à la fin du mois.'
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
                    {/* Bare icon, node, not a card */}
                    <Icon
                      className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title[language]}
                        </h3>
                        {tag && (
                          <span className="text-xs font-medium text-muted-foreground tabular-nums">
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
