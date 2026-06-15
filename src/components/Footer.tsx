import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: language === 'fr' ? 'Services' : 'Services', href: '/services' },
    { label: language === 'fr' ? 'Pourquoi un site ?' : 'Why a website?', href: '/why-a-website' },
    { label: language === 'fr' ? 'Notre processus' : 'Our process', href: '/our-process' },
    { label: language === 'fr' ? 'Tarifs' : 'Pricing', href: '/pricing' },
    { label: t('nav.portfolio'), href: '/portfolio' },
    { label: language === 'fr' ? 'Événements' : 'Events', href: '/event-production' },
    { label: 'Blog', href: '/blog' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <div className="relative z-10" role="contentinfo" aria-label="Site footer">
      <footer className="bg-secondary/40 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 pb-10 border-b border-border/30"
          >
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'fr' ? 'Prêt à lancer votre projet ?' : 'Ready to launch your project?'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all text-sm active:scale-[0.98]"
              >
                {language === 'fr' ? 'Démarrer mon projet' : 'Start my project'}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {language === 'fr' ? 'Questions ? Écrivez-moi' : 'Questions? Write me'}
              </Link>
            </div>
          </motion.div>

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
                  ? 'Votre partenaire web de A à Z : site, Google, photos, réseaux sociaux et identité de marque. Toute votre présence en ligne, gérée par une seule personne.'
                  : 'Your all-in-one web partner: website, Google, photos, social media and brand identity. Your entire online presence, managed by one person.'}
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
                    Albertville, Savoie, France
                  </address>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Zones d'intervention — internal links to local landing pages for SEO crawl */}
          <nav aria-label={language === 'fr' ? "Zones d'intervention" : 'Service areas'} className="mt-10 pt-8 border-t border-border/30">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              {language === 'fr' ? "Zones d'intervention" : 'Service areas'}
            </h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                { href: '/web-designer-savoie', label: language === 'fr' ? 'Web designer Savoie' : 'Web designer Savoie' },
                { href: '/web-designer-annecy', label: language === 'fr' ? 'Web designer Annecy' : 'Web designer Annecy' },
                { href: '/creation-site-web-haute-savoie', label: language === 'fr' ? 'Création site web Haute-Savoie' : 'Web design Haute-Savoie' },
              ].map((z) => (
                <Link key={z.href} to={z.href} className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">
                  {z.label}
                </Link>
              ))}
            </div>
          </nav>

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
