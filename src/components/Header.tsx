import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '@/components/MobileMenu';


const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { openCalendly } = useCalendly();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const [sitesOpen, setSitesOpen] = useState(false);
  const sitesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const siteSubItems = [
    {
      href: '/why-a-website',
      label: language === 'fr' ? 'Pourquoi un site ?' : 'Why a website?',
      desc: language === 'fr' ? "Les raisons d'avoir un site pro" : 'Why your business needs one',
    },
    {
      href: '/our-process',
      label: language === 'fr' ? 'Notre processus' : 'Our process',
      desc: language === 'fr' ? "De l'idée à la livraison" : 'From idea to launch',
    },
    {
      href: '/pricing',
      label: language === 'fr' ? 'Tarifs' : 'Pricing',
      desc: language === 'fr' ? 'Dès 500€, sans surprise' : 'From €500, no surprises',
    },
  ];

  const flatNavItems = [
    { href: '/apps', label: 'Apps & Dashboards' },
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4" role="banner">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`max-w-6xl mx-auto glass-card rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? 'shadow-lg shadow-primary/5' : ''
          }`}
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors"
              aria-label="Elie Ageron - Web Design - Home"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Elie Ageron
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Primary navigation">
              {/* Sites Web dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (sitesCloseTimer.current) clearTimeout(sitesCloseTimer.current);
                  setSitesOpen(true);
                }}
                onMouseLeave={() => {
                  sitesCloseTimer.current = setTimeout(() => setSitesOpen(false), 150);
                }}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    ['/why-a-website', '/our-process', '/pricing'].includes(location.pathname)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-expanded={sitesOpen}
                  aria-haspopup="true"
                >
                  {language === 'fr' ? 'Sites Web' : 'Websites'}
                  <motion.span animate={{ rotate: sitesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {sitesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                    >
                      <div className="bg-background rounded-2xl p-2 shadow-xl border border-border/50 min-w-[230px]">
                        {siteSubItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setSitesOpen(false)}
                            className={`flex flex-col px-4 py-3 rounded-xl transition-colors ${
                              location.pathname === item.href
                                ? 'text-primary bg-primary/10'
                                : 'text-foreground hover:bg-secondary'
                            }`}
                          >
                            <span className="text-sm font-medium">{item.label}</span>
                            <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Flat nav items */}
              {flatNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>

            {/* Right section - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center gap-1 bg-secondary/50 rounded-full p-1" role="group" aria-label="Language selection">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    language === 'fr' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label="Changer la langue en français"
                  aria-pressed={language === 'fr'}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    language === 'en' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label="Switch language to English"
                  aria-pressed={language === 'en'}
                >
                  ENG
                </button>
              </div>
              
              <Button variant="neon" size="sm" onClick={openCalendly} aria-label="Book a call with Elie Ageron">
                {t('nav.book')}
              </Button>
            </div>

            {/* Mobile Menu Button - Animated Hamburger with 48x48 touch target */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden min-w-[48px] min-h-[48px] flex items-center justify-center text-foreground rounded-xl active:bg-primary/10 transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.div
                className="flex flex-col gap-1.5 w-6"
                animate={isMenuOpen ? 'open' : 'closed'}
              >
                <motion.span
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                />
                <motion.span
                  className="block h-0.5 w-full bg-current rounded-full"
                  variants={{
                    closed: { opacity: 1, x: 0 },
                    open: { opacity: 0, x: 20 }
                  }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                />
                <motion.span
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                />
              </motion.div>
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu - Full screen slide-out */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
