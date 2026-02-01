import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

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

  const navItems = [
    { href: '/why-a-website', label: t('nav.why') },
    { href: '/our-process', label: t('nav.process') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`max-w-6xl mx-auto glass-card rounded-2xl px-6 py-3 transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-primary/5' : ''
        }`}
        style={{
          borderBottom: scrolled ? '1px solid hsl(328 100% 54% / 0.3)' : undefined,
          boxShadow: scrolled ? '0 4px 30px hsl(328 100% 54% / 0.1)' : undefined,
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Elie Ageron
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm transition-colors relative group ${
                  isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-secondary/50 rounded-full p-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  language === 'fr' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
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
              >
                ENG
              </button>
            </div>
            
            <Button variant="neon" size="sm" asChild>
              <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">{t('nav.book')}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-border/30"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors py-2 ${
                      isActive(item.href) 
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Language Toggle */}
                <div className="flex items-center gap-2 py-2">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      language === 'fr' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      language === 'en' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    ENG
                  </button>
                </div>
                
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">{t('nav.book')}</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Header;
