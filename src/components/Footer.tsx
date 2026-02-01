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
    <footer className="py-12 border-t border-border/30 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="section-divider" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-4">
              <Link to="/" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                Elie Ageron
              </Link>
              <span className="text-sm text-muted-foreground">
                © {currentYear} {t('footer.rights')}
              </span>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {t('footer.made')}
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
