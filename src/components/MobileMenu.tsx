import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { href: '/why-a-website', label: t('nav.why') },
    { href: '/our-process', label: t('nav.process') },
    { href: '/pricing', label: t('nav.pricing') },
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
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
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
                  asChild
                >
                  <a
                    href="https://calendly.com/elie-ageron/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    aria-label="Book a call with Elie Ageron"
                  >
                    {t('nav.book')}
                  </a>
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
