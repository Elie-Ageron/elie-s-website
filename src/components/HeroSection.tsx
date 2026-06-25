import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { lazy, Suspense, useState, useEffect, Component, ReactNode } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

import logoVmProducers from '@/assets/logo vm producers.png';
import logoSolarFusion from '@/assets/logo solar fusion.png';
import logoMywebglory from '@/assets/logo mwg.png';
import logoMyDrop from '@/assets/mydrop logo (1).png';

// Real client logos shown as above-the-fold social proof.
// `white: true` logos are dark-on-transparent and need the brightness-0 trick.
const CLIENT_LOGOS = [
  { src: logoMyDrop, name: 'MyDrop', white: false },
  { src: logoMywebglory, name: 'MyWebGlory', white: false },
  { src: logoVmProducers, name: 'VM Producers', white: true },
  { src: logoSolarFusion, name: 'Solar Fusion', white: false },
];

// Defer 3D scene loading
const HeroScene3D = lazy(() => import('@/components/animations/HeroScene3D'));

// Isolated error boundary for the 3D scene — prevents WebGL crashes from
// taking down the full page (important for SEO crawlers and unsupported environments).
class Scene3DErrorBoundary extends Component<{ children: ReactNode }, { crashed: boolean }> {
  state = { crashed: false };
  static getDerivedStateFromError() { return { crashed: true }; }
  render() {
    if (this.state.crashed) return null; // Silently hide the 3D scene on error
    return this.props.children;
  }
}

const HeroSection = () => {
  const { t, language } = useLanguage();
  const { openCalendly } = useCalendly();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [show3D, setShow3D] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Avoid loading WebGL during pre-render / first paint on mobile.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Delay 3D scene to prioritize text content (LCP) - desktop only.
  // 800ms ensures the hero text, CTA and social proof paint before WebGL initialises.
  useEffect(() => {
    if (!mounted) return;
    if (!isMobile && !prefersReducedMotion) {
      const timer = setTimeout(() => setShow3D(true), 800);
      return () => clearTimeout(timer);
    }
    setShow3D(false);
  }, [isMobile, mounted]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain px-4 sm:px-6"
      aria-labelledby="hero-heading"
    >
      {/* 3D Scene Background - Desktop only, deferred, isolated from page error boundary */}
      {mounted && show3D && (
        <Scene3DErrorBoundary>
          <Suspense fallback={null}>
            <HeroScene3D />
          </Suspense>
        </Scene3DErrorBoundary>
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
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-tight drop-shadow-lg">
            <span className="text-foreground">{t('hero.headline1')}</span>
            <br />
            <span className="inline-block text-primary">{t('hero.headline2')}</span>
          </h1>

          {/* Subtitle — concrete promise */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs — primary: book a call (solid) · secondary: assessment (lighter, subordinate to the headline) */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              variant="hero"
              size="lg"
              className="px-7 sm:px-8 text-sm sm:text-base active:scale-[0.98] transition-transform w-full sm:w-auto"
              onClick={openCalendly}
              aria-label={language === 'fr' ? 'Réserver un appel gratuit avec Elie Ageron' : 'Book a free call with Elie Ageron'}
            >
              {t('hero.cta.call')}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              variant="neonOutline"
              size="lg"
              className="px-6 sm:px-7 text-sm sm:text-base w-full sm:w-auto"
              asChild
            >
              <Link to="/assessment">{t('hero.cta.assessment')}</Link>
            </Button>
          </motion.div>

          {/* Friction reducers — directly under the CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-4 text-xs sm:text-sm text-muted-foreground font-medium"
          >
            {t('hero.friction')}
          </motion.p>

          {/* Social proof — real client logos + one verified review */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-9 sm:mt-11"
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground/60 mb-4">
              {t('hero.trustedby')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:gap-x-10">
              {CLIENT_LOGOS.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={`Logo ${logo.name}, client d'Elie Ageron`}
                  className={`h-6 sm:h-7 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity ${logo.white ? 'brightness-0' : ''}`}
                  loading="eager"
                  decoding="async"
                />
              ))}
            </div>

            {/* One real, attributed review — replace/extend as you collect more */}
            <div className="mt-6 flex flex-col items-center gap-1.5">
              <div className="flex gap-0.5" aria-label="5 sur 5 étoiles">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-foreground/80 italic max-w-md">
                «&nbsp;{t('hero.review.text')}&nbsp;»
              </p>
              <p className="text-xs text-muted-foreground/70">{t('hero.review.author')}</p>
            </div>
          </motion.div>
        </motion.header>

        {/* Scroll indicator - Hidden on mobile for cleaner look */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          aria-label="Défiler vers le bas"
        >
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
