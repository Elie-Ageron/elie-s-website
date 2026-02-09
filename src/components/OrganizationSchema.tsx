import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const OrganizationSchema = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://elieageron.lovable.app';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Elie Ageron Web Design',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
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
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
