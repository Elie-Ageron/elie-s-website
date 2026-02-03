import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '@/components/MobileMenu';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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

  const navItems = [
    { href: '/why-a-website', label: t('nav.why') },
    { href: '/our-process', label: t('nav.process') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/portfolio', label: t('nav.portfolio') },
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
            >
              Elie Ageron
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6" role="navigation" aria-label="Primary navigation">
              {navItems.map((item) => (
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
            <div className="hidden md:flex items-center gap-4">
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
              
              <Button variant="neon" size="sm" asChild>
                <a 
                  href="https://calendly.com/elie-ageron" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Book a call with Elie Ageron"
                >
                  {t('nav.book')}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button - Animated Hamburger with 48x48 touch target */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center text-foreground rounded-xl active:bg-primary/10 transition-colors"
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
