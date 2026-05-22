import { motion } from 'framer-motion';
import { Music, FileText, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const RoutingSection = () => {
  const { language } = useLanguage();

  const paths = [
    {
      icon: Music,
      label: language === 'fr' ? "Producteur d'événements" : 'Event producer',
      desc: language === 'fr'
        ? "Landing page sur-mesure pour votre prochain event. Testé gratuitement, payé si ça vous convient."
        : "Custom landing page for your next event. Try it free, pay only if you're happy.",
      href: '/event-production',
      cta: language === 'fr' ? "Voir l'offre dédiée" : 'See dedicated offer',
      primary: false,
    },
    {
      icon: FileText,
      label: language === 'fr' ? "J'ai un projet précis" : 'I have a precise project',
      desc: language === 'fr'
        ? "Formulaire en 4 étapes. Je construis, vous validez, vous le gardez si ça vous convient."
        : "4-step form. I build, you review, you keep it only if you like it.",
      href: '/get-started',
      cta: language === 'fr' ? 'Démarrer sans appel →' : 'Start without a call →',
      primary: true,
    },
    {
      icon: MessageCircle,
      label: language === 'fr' ? "Je veux d'abord en parler" : 'I want to talk first',
      desc: language === 'fr'
        ? "Appel, WhatsApp ou email : je réponds rapidement. Sans engagement de votre côté."
        : "Call, WhatsApp or email: I reply fast. No commitment on your side.",
      href: '/contact',
      cta: language === 'fr' ? 'Choisir mon option' : 'Choose my option',
      primary: false,
    },
  ];

  return (
    <section className="py-8 sm:py-10" aria-labelledby="routing-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p
          id="routing-heading"
          className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6 sm:mb-8"
        >
          {language === 'fr' ? 'Par où voulez-vous commencer ?' : 'Where do you want to start?'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {paths.map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={path.href}
                className={`group flex flex-col h-full p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                  path.primary
                    ? 'border-primary/50 bg-primary/5 hover:bg-primary/10 hover:border-primary/70 shadow-sm shadow-primary/10'
                    : 'border-border/50 bg-card/30 hover:bg-card/60 hover:border-border'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    path.primary ? 'bg-primary/20' : 'bg-secondary'
                  }`}
                >
                  <path.icon
                    className={`w-5 h-5 ${path.primary ? 'text-primary' : 'text-muted-foreground'}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-base">{path.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{path.desc}</p>
                <div
                  className={`mt-4 flex items-center gap-1 text-sm font-medium transition-colors ${
                    path.primary
                      ? 'text-primary'
                      : 'text-muted-foreground group-hover:text-foreground'
                  }`}
                >
                  {path.cta}
                  <ArrowRight
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutingSection;
