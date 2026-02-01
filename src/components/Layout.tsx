import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollPopup from '@/components/ScrollPopup';
import FloatingParticles from '@/components/animations/FloatingParticles';
import BackgroundPattern from '@/components/BackgroundPattern';
import PageTransition from '@/components/animations/PageTransition';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background relative">
        <BackgroundPattern />
        <FloatingParticles />
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
