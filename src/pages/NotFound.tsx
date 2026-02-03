import { motion } from 'framer-motion';
import { Home, ArrowLeft, BookOpen, CreditCard, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  const content = {
    en: {
      title: 'Page Not Found',
      subtitle: "The page you're looking for doesn't exist or has been moved.",
      heading: "Lost? Let's get you back on track.",
      cta: 'Go to Homepage',
      links: [
        { to: '/why-a-website', icon: BookOpen, label: 'Why You Need a Website', desc: 'Learn how a site transforms your business' },
        { to: '/pricing', icon: CreditCard, label: 'View Pricing', desc: 'Transparent pricing for all budgets' },
        { to: '/contact', icon: Mail, label: 'Contact Us', desc: 'Get in touch for a free consultation' },
      ],
    },
    fr: {
      title: 'Page Non Trouvée',
      subtitle: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
      heading: 'Perdu ? Laissez-nous vous guider.',
      cta: 'Retour à l\'Accueil',
      links: [
        { to: '/why-a-website', icon: BookOpen, label: 'Pourquoi un Site Web', desc: 'Découvrez comment un site transforme votre business' },
        { to: '/pricing', icon: CreditCard, label: 'Voir les Tarifs', desc: 'Tarifs transparents pour tous les budgets' },
        { to: '/contact', icon: Mail, label: 'Nous Contacter', desc: 'Contactez-nous pour une consultation gratuite' },
      ],
    },
  };

  const t = content[language];

  return (
    <>
      <Helmet>
        <title>{t.title} | Elie Ageron Web Design</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content={t.subtitle} />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center relative grain">
        {/* Background glow */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <motion.h1
              className="text-8xl md:text-9xl font-bold text-primary neon-text mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              404
            </motion.h1>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              {t.subtitle}
            </p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  {t.cta}
                </Link>
              </Button>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-muted-foreground mb-6">{t.heading}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {t.links.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 hover:neon-border transition-all group block"
                    >
                      <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                      <span className="text-xs text-muted-foreground text-center">
                        {link.desc}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
