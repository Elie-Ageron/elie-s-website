import { useLanguage } from '@/contexts/LanguageContext';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/HeroSection';
import PersonalIntroSection from '@/components/PersonalIntroSection';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import ServicesSection from '@/components/ServicesSection';
import ServicesEcosystem from '@/components/ServicesEcosystem';
import PortfolioShowcaseSection from '@/components/PortfolioShowcaseSection';
import RoutingSection from '@/components/RoutingSection';
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

      {/* Work first, the strongest proof for a web designer */}
      <PortfolioShowcaseSection />

      {/* Testimonials - the people behind the sites */}
      <TestimonialsSection />

      {/* Why a professional site + real delivery facts */}
      <StatsSection />

      {/* Services - The website plans (the core wedge offer) */}
      <ServicesSection />

      {/* Ecosystem - "Beyond the site": the partner expansion teaser */}
      <ServicesEcosystem />

      {/* Personal Intro - Who I am */}
      <PersonalIntroSection />

      {/* FAQ - Objections avant le CTA final */}
      <FAQAccordion />

      {/* Routing, 3 entry paths, once the visitor is convinced */}
      <RoutingSection />

      {/* Internal Links */}
      <InternalLinks currentPage="home" />

      {/* Contact Methods Section */}
      <ContactMethodsSection />
    </>
  );
};

export default Home;
