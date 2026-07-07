import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

// Trois portes d'entrée, en liste éditoriale sobre.
// Placée en fin de page : le visiteur choisit son chemin une fois convaincu.
const RoutingSection = () => {
  const { language } = useLanguage();

  const paths = [
    {
      label: language === 'fr' ? "J'ai un projet précis" : 'I have a project',
      desc: language === 'fr'
        ? 'Formulaire en 4 étapes. Je construis, vous validez.'
        : '4-step form. I build, you review.',
      href: '/get-started',
      cta: language === 'fr' ? 'Démarrer sans appel' : 'Start without a call',
      primary: true,
    },
    {
      label: language === 'fr' ? "Je veux d'abord en parler" : 'I want to talk first',
      desc: language === 'fr'
        ? 'Appel, WhatsApp ou email. Je réponds vite, sans engagement.'
        : 'Call, WhatsApp or email. I reply fast, no commitment.',
      href: '/contact',
      cta: language === 'fr' ? 'Choisir mon option' : 'Choose my option',
      primary: false,
    },
    {
      label: language === 'fr' ? "Producteur d'événements" : 'Event producer',
      desc: language === 'fr'
        ? 'Landing page sur-mesure. Testé gratuitement, payé si ça vous convient.'
        : 'Custom landing page. Try free, pay only if happy.',
      href: '/event-production',
      cta: language === 'fr' ? "Voir l'offre dédiée" : 'See dedicated offer',
      primary: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative" aria-labelledby="routing-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          id="routing-heading"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-medium mb-8 sm:mb-10 text-center"
        >
          {language === 'fr' ? 'Par où commencer ?' : 'Where to start?'}
        </motion.h2>

        <ul>
          {paths.map((path, index) => (
            <motion.li
              key={path.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={index === 0 ? '' : 'border-t border-border/60'}
            >
              <Link
                to={path.href}
                className="group flex items-center gap-4 sm:gap-6 py-5 sm:py-6 rounded-2xl sm:px-4 sm:-mx-4 transition-colors duration-300 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3
                      className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                        path.primary ? 'text-primary' : 'text-foreground group-hover:text-primary'
                      }`}
                    >
                      {path.label}
                    </h3>
                    <span className="hidden sm:inline text-sm font-medium text-muted-foreground/80">
                      {path.cta}
                    </span>
                  </div>
                  <p className="mt-1 text-sm sm:text-[0.95rem] text-muted-foreground leading-relaxed">
                    {path.desc}
                  </p>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 shrink-0 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300"
                  aria-hidden="true"
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Soft secondary entry, the assessment, for the undecided */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 pt-6 border-t border-border/60 text-sm text-muted-foreground text-center"
        >
          {language === 'fr' ? "Pas sûr de ce qu'il vous faut ? " : 'Not sure what you need? '}
          <Link to="/assessment" className="text-primary font-medium hover:underline underline-offset-4 inline-flex items-center gap-1">
            {language === 'fr' ? 'Faites le test (2 min)' : 'Take the test (2 min)'}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </motion.p>
      </div>
    </section>
  );
};

export default RoutingSection;
