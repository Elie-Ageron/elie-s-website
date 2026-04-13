import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: language === 'fr' ? 'Pourquoi un site ?' : 'Why a website?', href: '/why-a-website' },
    { label: language === 'fr' ? 'Notre processus' : 'Our process', href: '/our-process' },
    { label: language === 'fr' ? 'Tarifs' : 'Pricing', href: '/pricing' },
    { label: 'Apps & Dashboards', href: '/apps' },
    { label: t('nav.portfolio'), href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <div className="relative z-10" role="contentinfo" aria-label="Site footer">
      <footer className="bg-secondary/40 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
          >
            {/* Brand Column */}
            <div className="space-y-4">
              <Link to="/" className="inline-flex items-center gap-3 group" aria-label="Elie Ageron - Home">
                <img src={logo} alt="" className="w-8 h-8 rounded-lg" aria-hidden="true" />
                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Elie Ageron
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {language === 'fr'
                  ? 'Création de sites web professionnels et performants pour développer votre activité en ligne.'
                  : 'Professional, high-performance websites to grow your business online.'}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                {t('footer.made')}
                <Heart className="w-3.5 h-3.5 text-primary fill-primary" aria-hidden="true" />
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {language === 'fr' ? 'Navigation' : 'Navigation'}
              </h3>
              <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Contact
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:web@elieageron.com"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  web@elieageron.com
                </a>
                <a
                  href="tel:+33695555318"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  +33 6 95 55 53 18
                </a>
                <div className="inline-flex items-center gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <address style={{ fontStyle: 'normal' }}>
                    Annecy, Haute-Savoie, France
                  </address>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-border/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>© {currentYear} Elie Ageron. {t('footer.rights')}</span>
              <div className="flex items-center gap-4">
                <Link to="/mentions-legales" className="hover:text-primary transition-colors">
                  {language === 'fr' ? 'Mentions légales' : 'Legal Notice'}
                </Link>
                <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">
                  {language === 'fr' ? 'Confidentialité' : 'Privacy'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
