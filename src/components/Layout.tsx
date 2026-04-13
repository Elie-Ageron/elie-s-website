import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import GlobalContactForm from '@/components/GlobalContactForm';
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
  // Delay contact form long enough for lazy page chunks to load and render,
  // preventing it from appearing before the hero section on first load.
  const [showContactForm, setShowContactForm] = useState(false);
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
    // Use requestIdleCallback to defer decorative elements until the browser is idle
    // after the initial paint. Falls back to setTimeout(400ms) for Safari which
    // doesn't support requestIdleCallback.
    let id: number | ReturnType<typeof setTimeout>;
    if ('requestIdleCallback' in window) {
      id = (window as Window).requestIdleCallback(() => setShowDecorations(true), { timeout: 1500 });
    } else {
      id = setTimeout(() => setShowDecorations(true), 400);
    }
    return () => {
      if ('cancelIdleCallback' in window && typeof id === 'number') {
        (window as Window).cancelIdleCallback(id as number);
      } else {
        clearTimeout(id as ReturnType<typeof setTimeout>);
      }
    };
  }, []);

  useEffect(() => {
    // Wait for the window load event (all resources fetched) + a small buffer
    // so lazy-loaded page chunks have time to render before the contact form mounts.
    const show = () => {
      const timer = setTimeout(() => setShowContactForm(true), 300);
      return timer;
    };

    let timer: ReturnType<typeof setTimeout>;
    if (document.readyState === 'complete') {
      timer = show();
    } else {
      const onLoad = () => { timer = show(); };
      window.addEventListener('load', onLoad, { once: true });
      return () => {
        window.removeEventListener('load', onLoad);
        clearTimeout(timer);
      };
    }
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
          <main className="pt-24 relative z-[1]">
            <Breadcrumb />
            {children}
            {showContactForm && <GlobalContactForm />}
          </main>
        </PageTransition>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
