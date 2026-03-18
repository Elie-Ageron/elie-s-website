import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { language, setLanguage, t } = useLanguage();
  const { openCalendly } = useCalendly();
  const location = useLocation();

  const isSitesActive = ['/why-a-website', '/our-process', '/pricing'].includes(location.pathname);
  const [sitesExpanded, setSitesExpanded] = useState(isSitesActive);

  const siteSubItems = [
    { href: '/why-a-website', label: language === 'fr' ? 'Pourquoi un site ?' : 'Why a website?' },
    { href: '/our-process', label: language === 'fr' ? 'Notre processus' : 'Our process' },
    { href: '/pricing', label: language === 'fr' ? 'Tarifs' : 'Pricing' },
  ];

  const flatNavItems = [
    { href: '/apps', label: 'Apps & Dashboards' },
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-[60]"
            aria-hidden="true"
          />

          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-card/98 backdrop-blur-xl z-[70] border-l border-border shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" aria-hidden="true" />

            {/* Close button - 48x48 touch target */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl bg-secondary/50 text-foreground active:scale-95 active:bg-primary/20 transition-all"
              aria-label="Close menu"
            >
              <X size={24} aria-hidden="true" />
            </button>

            {/* Menu Content */}
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              {/* Navigation Links */}
              <nav className="flex-1 space-y-2" role="navigation" aria-label="Mobile navigation">
                {/* Sites Web expandable */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    onClick={() => setSitesExpanded(!sitesExpanded)}
                    className={`flex items-center justify-between w-full min-h-[52px] px-4 rounded-xl text-lg font-medium transition-all active:scale-[0.98] ${
                      isSitesActive
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-secondary'
                    }`}
                    aria-expanded={sitesExpanded}
                  >
                    {language === 'fr' ? 'Sites Web' : 'Websites'}
                    {sitesExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {sitesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-1 pb-2 space-y-1">
                          {siteSubItems.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={onClose}
                              className={`flex items-center min-h-[44px] px-4 rounded-xl text-base font-medium transition-all active:scale-[0.98] ${
                                isActive(item.href)
                                  ? 'text-primary bg-primary/10'
                                  : 'text-muted-foreground hover:text-primary hover:bg-secondary'
                              }`}
                              aria-current={isActive(item.href) ? 'page' : undefined}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Flat nav items */}
                {flatNavItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`flex items-center min-h-[52px] px-4 rounded-xl text-lg font-medium transition-all active:scale-[0.98] ${
                        isActive(item.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-secondary active:bg-primary/10'
                      }`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="mobile-active-indicator"
                          className="ml-auto w-2 h-2 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Language Toggle - Touch optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 px-4">
                  {language === 'fr' ? 'Langue' : 'Language'}
                </p>
                <div className="flex gap-3 px-4" role="group" aria-label="Language selection">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`flex-1 min-h-[48px] rounded-xl text-base font-medium transition-all active:scale-[0.98] ${
                      language === 'fr'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground active:bg-primary/10'
                    }`}
                    aria-label="Changer la langue en français"
                    aria-pressed={language === 'fr'}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 min-h-[48px] rounded-xl text-base font-medium transition-all active:scale-[0.98] ${
                      language === 'en'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground active:bg-primary/10'
                    }`}
                    aria-label="Switch language to English"
                    aria-pressed={language === 'en'}
                  >
                    English
                  </button>
                </div>
              </motion.div>

              {/* CTA Button - Touch optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full min-h-[56px] text-base active:scale-[0.98]"
                  onClick={() => { openCalendly(); onClose(); }}
                  aria-label="Book a call with Elie Ageron"
                >
                  {t('nav.book')}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
