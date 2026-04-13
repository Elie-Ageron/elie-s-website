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

const Home = () => {
  const { t, language } = useLanguage();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Elie Ageron Web Design',
    url: 'https://elieageron.com',
    description: language === 'fr'
      ? 'Sites web premium qui convertissent les visiteurs en clients'
      : 'Premium websites that convert visitors into clients',
    author: { '@type': 'Person', name: 'Elie Ageron' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
    ],
  };

  return (
    <>
      <SEO page="home" structuredData={[websiteSchema, breadcrumbSchema]} />
      <FAQSchema page="home" />
      
      {/* Hero Section with 3D */}
      <HeroSection />

      {/* Stats - Social proof immédiate sous le fold */}
      <StatsSection />

      {/* Services - L'offre concrète, avant les témoignages */}
      <ServicesSection />

      {/* Personal Intro - Qui je suis */}
      <PersonalIntroSection />

      {/* Témoignages - Avis clients après avoir vu l'offre */}
      <TestimonialsSection />

      {/* FAQ - Objections avant le CTA final */}
      <FAQAccordion />

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
