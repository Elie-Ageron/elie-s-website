import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

const ScrollPopup = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShownThisSession, setHasBeenShownThisSession] = useState(false);

  useEffect(() => {
    // Some Safari setups (private mode / blocked cookies) can throw on Storage access.
    try {
      const popupShown = window.sessionStorage.getItem('popupShown');
      if (popupShown) setHasBeenShownThisSession(true);
    } catch {
      // If storage is unavailable, we just treat it as "not shown" for this session.
    }
  }, []);

  useEffect(() => {
    if (hasBeenShownThisSession) return;

    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 50) {
        setIsVisible(true);
        setHasBeenShownThisSession(true);
        try {
          window.sessionStorage.setItem('popupShown', 'true');
        } catch {
          // ignore
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasBeenShownThisSession, location.pathname]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal - Mobile optimized centering and touch targets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 w-auto sm:w-full sm:max-w-md flex items-center justify-center sm:block"
          >
            <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden w-full max-h-[90vh] overflow-y-auto shadow-xl">
              {/* Background accent - pointer-events-none to not block clicks */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
              
              {/* Close button - 48x48 touch target with higher z-index */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 min-w-[48px] min-h-[48px] flex items-center justify-center text-muted-foreground hover:text-foreground active:scale-95 transition-all rounded-xl bg-background/50"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Content */}
              <div className="relative z-10 text-center pt-4 sm:pt-0">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 mb-4 sm:mb-6">
                  <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {t('popup.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
                  {t('popup.subtitle')}
                </p>
                
                <div className="flex flex-col gap-3">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="min-h-[52px] text-base active:scale-[0.98] transition-transform"
                    asChild
                  >
                    <a href="https://calendly.com/elie-ageron/30min" target="_blank" rel="noopener noreferrer" onClick={handleClose}>
                      {t('popup.cta')}
                    </a>
                  </Button>
                  <button
                    onClick={handleClose}
                    className="min-h-[44px] text-sm text-muted-foreground hover:text-foreground active:text-primary transition-colors"
                  >
                    {t('popup.close')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ScrollPopup;
