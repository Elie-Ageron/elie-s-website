import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const JsonLd = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://elieageron.com';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Elie Ageron',
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    jobTitle: language === 'fr' ? 'Web Designer Freelance' : 'Freelance Web Designer',
    description: language === 'fr'
      ? 'Web designer freelance basé à Thônes (Haute-Savoie). Création de sites web qui convertissent les visiteurs en clients pour les entreprises d\'Annecy, Grenoble, Chambéry et toute la France.'
      : 'Freelance web designer based in Thônes, Haute-Savoie, France. Building high-converting websites for businesses in Annecy, Grenoble, Chambéry and across France.',
    email: 'web@elieageron.com',
    telephone: '+33695555318',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Annecy',
      addressRegion: 'Haute-Savoie',
      postalCode: '74000',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://www.linkedin.com/in/elie-ageron-289636394',
    ],
    knowsAbout: [
      'Web Design',
      'Conversion Optimization',
      'Landing Page Design',
      'UI/UX Design',
      'SEO',
      'Responsive Design',
    ],
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#business`,
    name: 'Elie Ageron Web Design',
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    description: language === 'fr'
      ? 'Services de création de sites web premium qui convertissent les visiteurs en clients payants'
      : 'Premium web design services that convert visitors into paying clients',
    telephone: '+33695555318',
    email: 'web@elieageron.com',
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '4',
      bestRating: '5',
      worstRating: '1',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Annecy',
      addressRegion: 'Haute-Savoie',
      postalCode: '74000',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Thônes' },
      { '@type': 'City', name: 'Annecy' },
      { '@type': 'City', name: 'Bonneville' },
      { '@type': 'City', name: 'Thonon-les-Bains' },
      { '@type': 'City', name: 'Aix-les-Bains' },
      { '@type': 'City', name: 'Chambéry' },
      { '@type': 'City', name: 'Albertville' },
      { '@type': 'City', name: 'Grenoble' },
      { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
      { '@type': 'AdministrativeArea', name: 'Savoie' },
      { '@type': 'Country', name: 'France', alternateName: 'FR' },
      { '@type': 'Country', name: 'Belgium', alternateName: 'BE' },
      { '@type': 'Country', name: 'Switzerland', alternateName: 'CH' },
    ],
    founder: {
      '@id': `${baseUrl}/#person`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Services Web Design' : 'Web Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page',
            description: language === 'fr' 
              ? 'Landing page haute conversion livrée en 7 à 14 jours ouvrés'
              : 'High-conversion landing page delivered in 7-14 business days',
          },
          price: language === 'fr' ? '500' : '500',
          priceCurrency: language === 'fr' ? 'EUR' : 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Site Vitrine 4 Pages' : '4-Page Showcase Site',
            description: language === 'fr'
              ? 'Site web complet avec optimisation SEO et stratégie de contenu'
              : 'Complete website with SEO optimization and content strategy',
          },
          price: '1500',
          priceCurrency: language === 'fr' ? 'EUR' : 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Solution Sur-Mesure' : 'Custom Solution',
            description: language === 'fr'
              ? 'Solutions web personnalisées pour besoins complexes'
              : 'Custom web solutions for complex needs',
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Elie Ageron Web Design',
    alternateName: 'Elie Ageron',
    description: language === 'fr'
      ? 'Création de sites web premium par Elie Ageron'
      : 'Premium web design by Elie Ageron',
    publisher: {
      '@id': `${baseUrl}/#person`,
    },
    inLanguage: [language === 'fr' ? 'fr-FR' : 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: language === 'fr' ? 'Accueil' : 'Home',
        item: baseUrl,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default JsonLd;
