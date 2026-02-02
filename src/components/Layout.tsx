import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollPopup from '@/components/ScrollPopup';
import BackgroundPattern from '@/components/BackgroundPattern';
import PageTransition from '@/components/animations/PageTransition';
import { ReactNode, lazy, Suspense } from 'react';

const FloatingParticles = lazy(() => import('@/components/animations/FloatingParticles'));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background relative">
        <BackgroundPattern />
        <Suspense fallback={null}>
          <FloatingParticles />
        </Suspense>
        <Header />
        <PageTransition>
          <main className="pt-24">
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
