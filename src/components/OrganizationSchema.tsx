import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const OrganizationSchema = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://elieageron.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Elie Ageron Web Design',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/icons/apple-touch-icon.png`,
      width: 180,
      height: 180,
    },
    image: `${baseUrl}/og-image.png`,
    description: language === 'fr'
      ? 'Agence de création de sites web premium spécialisée en conversion et design haute performance'
      : 'Premium web design agency specializing in conversion optimization and high-performance design',
    email: 'elieageron@gmail.com',
    telephone: '+33695555318',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: 'Annecy',
      addressRegion: 'Haute-Savoie',
      postalCode: '74000',
    },
    founder: {
      '@id': `${baseUrl}/#person`,
    },
    sameAs: [
      'https://www.linkedin.com/in/elie-ageron-289636394',
      'https://calendly.com/elie-ageron/30min',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33695555318',
      contactType: 'customer service',
      email: 'elieageron@gmail.com',
      availableLanguage: ['French', 'English'],
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 46.603354,
        longitude: 1.888334,
      },
      geoRadius: '5000',
    },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Bank Transfer, Credit Card',
    slogan: language === 'fr' 
      ? 'Des sites web qui convertissent'
      : 'Websites that convert',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Elie Ageron Web Design',
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    logo: `${baseUrl}/icons/apple-touch-icon.png`,
    description: language === 'fr'
      ? 'Création de sites web premium à Annecy — spécialisé en conversion et design haute performance'
      : 'Premium web design in Annecy — specializing in conversion optimization and high-performance design',
    telephone: '+33695555318',
    email: 'elieageron@gmail.com',
    priceRange: '\u20ac\u20ac',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Annecy',
      addressLocality: 'Annecy',
      addressRegion: 'Haute-Savoie',
      postalCode: '74000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.8992,
      longitude: 6.1294,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/in/elie-ageron-289636394',
    ],
    areaServed: [
      { '@type': 'City', name: 'Annecy' },
      { '@type': 'State', name: 'Haute-Savoie' },
      { '@type': 'Country', name: 'France' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Services Web Design' : 'Web Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Landing Page' : 'Landing Page',
          price: '500',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Site Vitrine' : 'Showcase Website',
          price: '1500',
          priceCurrency: 'EUR',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
