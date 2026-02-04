import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollPopup from '@/components/ScrollPopup';
import BackgroundPattern from '@/components/BackgroundPattern';
import PageTransition from '@/components/animations/PageTransition';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import ReviewSchema from '@/components/ReviewSchema';
import MobileBackgroundAnimation from '@/components/animations/MobileBackgroundAnimation';
import { ReactNode, lazy, Suspense } from 'react';

const FloatingParticles = lazy(() => import('@/components/animations/FloatingParticles'));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LanguageProvider>
      <JsonLd />
      <ReviewSchema />
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        <BackgroundPattern />
        <MobileBackgroundAnimation />
        <Suspense fallback={null}>
          <FloatingParticles />
        </Suspense>
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
