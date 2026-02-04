import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const JsonLd = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://elieageron.lovable.app';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Elie Ageron',
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    jobTitle: language === 'fr' ? 'Créateur de Sites Web' : 'Web Designer',
    description: language === 'fr' 
      ? 'Créateur de sites web premium spécialisé en conversion et design haute performance'
      : 'Premium web designer specializing in conversion optimization and high-performance design',
    email: 'elieageron@gmail.com',
    telephone: '+33695555318',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://www.linkedin.com/in/elie-ageron-289636394',
      'https://calendly.com/elie-ageron/30min',
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
    email: 'elieageron@gmail.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'France',
        alternateName: 'FR',
      },
      {
        '@type': 'Country',
        name: 'United States',
        alternateName: 'USA',
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
        alternateName: 'UK',
      },
      {
        '@type': 'Country',
        name: 'Canada',
        alternateName: 'CA',
      },
      {
        '@type': 'Country',
        name: 'Belgium',
        alternateName: 'BE',
      },
      {
        '@type': 'Country',
        name: 'Switzerland',
        alternateName: 'CH',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Europe',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'North America',
      },
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
              ? 'Landing page haute conversion livrée en 7 jours'
              : 'High-conversion landing page delivered in 7 days',
          },
          price: language === 'fr' ? '300' : '300',
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
          price: '1000',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '12',
      bestRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Marc D.',
        },
        reviewBody: language === 'fr'
          ? 'Mon magasin a enfin une vraie présence en ligne. Les ventes ont augmenté de 40% le premier mois.'
          : 'My store finally has a real presence online. Sales went up 40% in the first month.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Sophie L.',
        },
        reviewBody: language === 'fr'
          ? 'Elie a dépassé mes attentes. Professionnel, rapide, et le site convertit vraiment!'
          : 'Elie delivered beyond my expectations. Professional, fast, and the site actually converts!',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Elie Ageron Web Design',
    description: language === 'fr'
      ? 'Création de sites web premium par Elie Ageron'
      : 'Premium web design by Elie Ageron',
    publisher: {
      '@id': `${baseUrl}/#person`,
    },
    inLanguage: [language === 'fr' ? 'fr-FR' : 'en-US'],
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
