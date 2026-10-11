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
 *
 * 🔴 **Il disait « Un seul interlocuteur pour tout le reste », et c'est parti
 * le 11 octobre 2026.** Elie : *« ca fait : OK, il est tout seul, donc c'est
 * pas ouf. Est-ce qu'il va reussir a faire mes reseaux sociaux ? Surtout que je
 * suis meme plus tout seul maintenant. »* Il fait appel a un ami sur certains
 * tournages. La formule nommait une limite au lieu d'un service, exactement
 * comme celle qu'il avait fait retirer du titre de `/services` et du pied de
 * page. Le titre parle maintenant de ce que le client y gagne : tout au meme
 * endroit. ⚠️ Ne pas la remplacer par « une equipe » : ce serait faux.
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
              {language === 'fr' ? 'Tout le reste, ' : 'Everything else, '}
              <span className="text-primary">
                {language === 'fr' ? 'au même endroit.' : 'in one place.'}
              </span>
            </h2>

            <p className="section-lede mt-6 mx-auto lg:mx-0">
              {language === 'fr'
                ? "La fiche Google, les avis, le logo, les textes. D'habitude, on les confie à quatre prestataires qui ne se parlent pas. Ici, tout est suivi ensemble, sur le même devis."
                : 'The Google profile, the reviews, the logo, the copy. They usually go to four different providers who never talk to each other. Here it is all handled together, on one quote.'}
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/services" className="flex items-center gap-2">
                  {language === 'fr' ? 'Voir tous les services' : 'See all services'}
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
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
