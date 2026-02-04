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
  
  useEffect(() => {
    // Use requestIdleCallback for non-critical elements
    const id = requestIdleCallback(() => {
      setShowDecorations(true);
    }, { timeout: 1500 });
    
    return () => cancelIdleCallback(id);
  }, []);

  return (
    <LanguageProvider>
      <JsonLd />
      <ReviewSchema />
      <OrganizationSchema />
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        {showDecorations && (
          <Suspense fallback={null}>
            <BackgroundPattern />
            <MobileBackgroundAnimation />
            <FloatingParticles />
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
