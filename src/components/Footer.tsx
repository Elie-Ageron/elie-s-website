import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: t('nav.why'), href: '/why-a-website' },
    { label: t('nav.process'), href: '/our-process' },
    { label: t('nav.pricing'), href: '/pricing' },
    { label: t('nav.portfolio'), href: '/portfolio' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <div className="relative z-10" role="contentinfo" aria-label="Site footer">
      {/* Navigation Band - Darker background */}
      <div className="bg-background/80 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <motion.nav 
            className="flex flex-wrap justify-center gap-x-8 gap-y-4" 
            aria-label="Footer navigation"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        </div>
      </div>

      {/* Footer - Slightly different background */}
      <footer className="bg-secondary/30 backdrop-blur-sm border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            {/* Logo & Copyright */}
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                aria-label="Elie Ageron - Home"
              >
                Elie Ageron
              </Link>
              <span className="text-sm text-muted-foreground">
                © {currentYear} {t('footer.rights')}
              </span>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {t('footer.made')}
              <Heart className="w-4 h-4 text-primary fill-primary" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
