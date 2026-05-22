import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import FloatingElements from '@/components/animations/FloatingElements';

const RoutingSection = () => {
  const { language } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  const paths = [
    {
      label: language === 'fr' ? "Producteur d'événements" : 'Event producer',
      desc: language === 'fr'
        ? "Landing page sur-mesure. Testé gratuitement, payé si ça vous convient."
        : "Custom landing page. Try free, pay only if happy.",
      href: '/event-production',
      cta: language === 'fr' ? "Voir l'offre dédiée" : 'See dedicated offer',
      primary: false,
    },
    {
      label: language === 'fr' ? "J'ai un projet précis" : 'I have a project',
      desc: language === 'fr'
        ? "Formulaire en 4 étapes. Je construis, vous validez."
        : "4-step form. I build, you review.",
      href: '/get-started',
      cta: language === 'fr' ? 'Démarrer sans appel' : 'Start without a call',
      primary: true,
    },
    {
      label: language === 'fr' ? "Je veux d'abord en parler" : 'I want to talk first',
      desc: language === 'fr'
        ? "Appel, WhatsApp ou email. Je réponds vite, sans engagement."
        : "Call, WhatsApp or email. I reply fast, no commitment.",
      href: '/contact',
      cta: language === 'fr' ? 'Choisir mon option' : 'Choose my option',
      primary: false,
    },
  ];

  return (
    <section className="pt-6 sm:pt-10 pb-40 sm:pb-52 relative grain" aria-labelledby="routing-heading">
      {/* Floating animated shapes */}
      <FloatingElements count={12} />

      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-primary/10 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <p
          id="routing-heading"
          className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 sm:mb-6"
        >
          {language === 'fr' ? 'Par où commencer ?' : 'Where to start?'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {paths.map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              {/* Hover wrapper — covers card + floating description so no flicker on move */}
              <div
                className="relative"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Card — fixed height, never shifts layout */}
                <Link
                  to={path.href}
                  className={`block p-5 sm:p-6 rounded-2xl border transition-colors duration-200 shadow-sm ${
                    path.primary
                      ? 'border-primary/50 bg-primary/5 hover:bg-primary/10 hover:border-primary/70 shadow-primary/10'
                      : 'border-border/40 bg-card/30 hover:bg-card/60 hover:border-border/70'
                  }`}
                >
                  <h3
                    className={`text-lg sm:text-xl font-bold leading-tight ${
                      path.primary ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {path.label}
                  </h3>

                  {/* Mobile: description always visible inside the card */}
                  <div className="sm:hidden mt-3 space-y-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">{path.desc}</p>
                    <span
                      className={`flex items-center gap-1 text-sm font-medium ${
                        path.primary ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {path.cta}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>

                {/* Desktop: absolutely positioned — zero layout impact */}
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="hidden sm:block absolute top-full left-0 right-0 z-20 pt-1.5"
                    >
                      <div
                        className={`p-4 rounded-xl border shadow-lg ${
                          path.primary
                            ? 'bg-primary/10 border-primary/30'
                            : 'bg-card/95 border-border/60'
                        }`}
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed">{path.desc}</p>
                        <span
                          className={`mt-2.5 flex items-center gap-1 text-sm font-medium ${
                            path.primary ? 'text-primary' : 'text-muted-foreground'
                          }`}
                        >
                          {path.cta}
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutingSection;
