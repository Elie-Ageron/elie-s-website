import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { lazy, Suspense } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroScene3D = lazy(() => import('@/components/animations/HeroScene3D'));

const HeroSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain px-4 sm:px-6"
      aria-labelledby="hero-heading"
    >
      {/* 3D Scene Background - Desktop only */}
      {!isMobile && (
        <Suspense fallback={null}>
          <HeroScene3D />
        </Suspense>
      )}
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[100px] sm:blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/5 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto py-16 sm:py-20 text-center -mt-16 sm:-mt-32">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card mb-6 sm:mb-8"
            aria-label="Fast and affordable web design"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-xs sm:text-sm text-muted-foreground">{t('hero.badge')}</span>
          </motion.div>

          {/* Main Headline - Responsive typography */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 sm:mb-10 leading-tight sm:leading-tight drop-shadow-lg">
            <span className="text-foreground">{t('hero.headline1')}</span>
            <br />
            <span className="text-primary">{t('hero.headline2')}</span>
          </h1>

          {/* CTA Button - Touch optimized */}
          <motion.div
            className="mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="min-h-[56px] sm:min-h-[60px] px-6 sm:px-10 text-base sm:text-lg active:scale-[0.98] transition-transform"
              asChild
              aria-label="Book your growth session with Elie Ageron"
            >
              <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">
                {t('hero.cta')}
              </a>
            </Button>
          </motion.div>
        </motion.header>

        {/* Scroll indicator - Hidden on mobile for cleaner look */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs text-muted-foreground">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
