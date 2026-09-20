import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BandeauLangue from '@/components/BandeauLangue';
import GlobalContactForm from '@/components/GlobalContactForm';
import PageTransition from '@/components/animations/PageTransition';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import ReviewSchema from '@/components/ReviewSchema';
import OrganizationSchema from '@/components/OrganizationSchema';
import { ReactNode, lazy, Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Lazy load non-critical visual components
const FloatingParticles = lazy(() => import('@/components/animations/FloatingParticles'));
const BackgroundPattern = lazy(() => import('@/components/BackgroundPattern'));
const MobileBackgroundAnimation = lazy(() => import('@/components/animations/MobileBackgroundAnimation'));

interface LayoutProps {
  children: ReactNode;
}

/**
 * ⚠️ Le formulaire libre « Parlez-moi de votre projet » ne s'affiche plus que
 * sur `/contact`.
 *
 * Il etait injecte au bas des quatorze pages, sous la section de contact qui
 * porte deja le formulaire d'audit. Chaque page se terminait donc par deux
 * formulaires a la suite, l'un a deux champs et l'autre a quatre, sans que
 * rien n'explique la difference. Deux demandes de meme poids, donc aucune.
 *
 * L'audit reste la porte d'entree partout parce qu'il se remplit en dix
 * secondes. Celui qui prefere decrire son projet a un lien vers `/contact`
 * juste sous le formulaire d'audit.
 */
const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const pageDeContact = pathname === '/contact';
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

    // Safari < 14 only has addListener/removeListener. `??` would run both
    // branches here (addEventListener returns undefined), registering the
    // listener twice, so branch explicitly.
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    }
    mq.addListener(apply);
    return () => mq.removeListener(apply);
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
      <div className="min-h-screen bg-background relative" style={{ overflowX: 'clip' }}>
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
        {/* Lien d'evitement. WCAG 2.4.1 : sans lui, un visiteur au clavier doit
            traverser les neuf entrees du menu, le selecteur de langue et les
            deux boutons d'action avant d'atteindre le contenu, sur chaque page.
            Invisible tant qu'il n'a pas le focus. */}
        <a
          href="#contenu"
          onClick={(e) => {
            // Le saut est fait a la main. Un simple `href="#contenu"` ne
            // deplacait pas le focus : le routeur intercepte la navigation et
            // le fragment n'etait jamais applique. Or c'est le deplacement du
            // focus qui compte, pas le defilement.
            e.preventDefault();
            const cible = document.getElementById('contenu');
            if (!cible) return;
            cible.focus({ preventScroll: true });
            cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[400] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
        >
          Aller au contenu
        </a>
        <Header />
        <PageTransition>
          <main id="contenu" tabIndex={-1} className="pt-24 relative z-[1]">
            <Breadcrumb />
            {children}
            {pageDeContact && showContactForm && <GlobalContactForm />}
          </main>
        </PageTransition>
        <Footer />
        <FloatingWhatsApp />
        <BandeauLangue />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
