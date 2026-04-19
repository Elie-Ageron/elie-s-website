import { useLanguage } from '@/contexts/LanguageContext';
import FloatingElements from '@/components/animations/FloatingElements';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/HeroSection';
import PersonalIntroSection from '@/components/PersonalIntroSection';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import ServicesSection from '@/components/ServicesSection';
import FAQAccordion from '@/components/FAQAccordion';
import SEO from '@/components/SEO';
import FAQSchema from '@/components/FAQSchema';
import InternalLinks from '@/components/InternalLinks';

const Home = () => {
  const { t, language } = useLanguage();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
    ],
  };

  return (
    <>
      <SEO page="home" structuredData={[breadcrumbSchema]} />
      <FAQSchema page="home" />
      
      {/* Hero Section with 3D */}
      <HeroSection />

      {/* Stats - Agitation: why you need a site */}
      <StatsSection />

      {/* Testimonials - Proof early, before the offer */}
      <TestimonialsSection />

      {/* Services - The offer, backed by proof */}
      <ServicesSection />

      {/* Personal Intro - Who I am */}
      <PersonalIntroSection />

      {/* FAQ - Objections avant le CTA final */}
      <FAQAccordion />

      {/* Internal Links */}
      <InternalLinks currentPage="home" />

      {/* Contact Methods Section */}
      <section className="relative overflow-hidden">
        <div className="hidden sm:block">
          <FloatingElements count={5} />
        </div>
        <div className="relative z-10">
          <ContactMethodsSection />
        </div>
      </section>
    </>
  );
};

export default Home;
