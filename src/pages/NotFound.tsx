import { motion } from 'framer-motion';
import { Home, ArrowLeft, BookOpen, LayoutGrid, Mail } from 'lucide-react';
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

  /**
   * ⚠️ Cette page parlait au « nous » dans les deux langues (« Laissez-nous
   * vous guider », « Contact Us », « une consultation gratuite »), alors que
   * tout le reste du site est ecrit a la premiere personne du singulier. Et
   * elle envoyait vers un « free consultation » qui n'existe pas : ce qui
   * existe, c'est l'audit gratuit.
   */
  const content = {
    en: {
      title: 'Page not found',
      subtitle: "This page does not exist, or it has moved.",
      heading: 'Here is where most people were going.',
      cta: 'Back to the homepage',
      links: [
        { to: '/reseaux-sociaux', icon: BookOpen, label: 'Social media', desc: 'I film, edit and post all month long' },
        { to: '/services', icon: LayoutGrid, label: 'Services', desc: 'Site, social, Google, branding, SEO' },
        { to: '/audit-gratuit', icon: Mail, label: 'Free audit', desc: 'What your clients find when they look you up' },
      ],
    },
    fr: {
      title: 'Page introuvable',
      subtitle: "Cette page n'existe pas, ou elle a changé d'adresse.",
      heading: 'Voilà où allaient la plupart des gens.',
      cta: "Retour à l'accueil",
      links: [
        { to: '/reseaux-sociaux', icon: BookOpen, label: 'Réseaux sociaux', desc: 'Je filme, je monte et je publie tout le mois' },
        { to: '/services', icon: LayoutGrid, label: 'Services', desc: 'Site, réseaux, Google, marque, référencement' },
        { to: '/audit-gratuit', icon: Mail, label: 'Audit gratuit', desc: 'Ce que vos clients trouvent quand ils vous cherchent' },
      ],
    },
  };

  const t = content[language];

  return (
    <>
      <Helmet>
        <html lang={language} />
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
