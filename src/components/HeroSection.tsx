import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle, Star, Shield, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { lazy, Suspense, useState, useEffect, Component, ReactNode } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const { t } = useLanguage();
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
            <span className="text-primary">{t('hero.headline2')}</span>
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

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              variant="hero"
              size="xl"
              className="min-h-[56px] sm:min-h-[60px] px-6 sm:px-10 text-base sm:text-lg active:scale-[0.98] transition-transform w-full sm:w-auto"
              onClick={openCalendly}
              aria-label="Book your growth session with Elie Ageron"
            >
              {t('hero.cta')}
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="min-h-[56px] sm:min-h-[60px] px-6 sm:px-8 text-base sm:text-lg text-muted-foreground hover:text-foreground group w-full sm:w-auto"
              asChild
            >
              <Link to="/portfolio" className="flex items-center gap-2">
                {t('hero.secondaryCta')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {/* Scarcity — natural availability constraint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground/70"
          >
            <span className="w-1.5 h-1.5 bg-primary/70 rounded-full shrink-0" aria-hidden="true" />
            {t('hero.scarcity')}
          </motion.p>

          {/* Social Proof Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {[
              { icon: Users, label: t('hero.proof.clients') },
              { icon: CheckCircle, label: t('hero.proof.satisfaction') },
              { icon: Star, label: t('hero.proof.quality') },
              { icon: Shield, label: t('hero.proof.guarantee') },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-foreground/70 text-sm sm:text-base font-medium">
                <item.icon className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            ))}
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
