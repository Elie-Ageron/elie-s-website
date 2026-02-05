import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollPopup from '@/components/ScrollPopup';
import PageTransition from '@/components/animations/PageTransition';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import ReviewSchema from '@/components/ReviewSchema';
import OrganizationSchema from '@/components/OrganizationSchema';
import { ReactNode, lazy, Suspense, useEffect, useState } from 'react';

// Lazy load non-critical visual components
const FloatingParticles = lazy(() => import('@/components/animations/FloatingParticles'));
const BackgroundPattern = lazy(() => import('@/components/BackgroundPattern'));
const MobileBackgroundAnimation = lazy(() => import('@/components/animations/MobileBackgroundAnimation'));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Delay loading decorative elements until after initial paint
  const [showDecorations, setShowDecorations] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // iOS Safari is more prone to GPU memory issues with multiple fixed layers + heavy blur + continuous animations.
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  const isIOS = /iP(hone|ad|od)/i.test(ua);
  const isIOSSafari = isIOS && isSafari;

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const apply = () => setReduceMotion(!!mq.matches);
    apply();

    // Safari < 14 uses addListener/removeListener
    // eslint-disable-next-line deprecation/deprecation
    mq.addEventListener?.('change', apply) ?? mq.addListener?.(apply);
    return () => {
      // eslint-disable-next-line deprecation/deprecation
      mq.removeEventListener?.('change', apply) ?? mq.removeListener?.(apply);
    };
  }, []);

  useEffect(() => {
    // Use setTimeout as fallback for Safari (no requestIdleCallback support)
    const timer = setTimeout(() => {
      setShowDecorations(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <JsonLd />
      <ReviewSchema />
      <OrganizationSchema />
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        {showDecorations && (
          <Suspense fallback={null}>
            <BackgroundPattern disableBlurAccents={isIOSSafari} />
            {!reduceMotion && (
              <>
                <MobileBackgroundAnimation lite={isIOSSafari} />
                {!isIOSSafari && <FloatingParticles />}
              </>
            )}
          </Suspense>
        )}
        <Header />
        <PageTransition>
          <main className="pt-24">
            <Breadcrumb />
            {children}
          </main>
        </PageTransition>
        <Footer />
        <ScrollPopup />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
