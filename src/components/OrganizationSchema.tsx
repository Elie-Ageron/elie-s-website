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
      ? 'Partenaire web en Savoie et Haute-Savoie : création de sites, Google Business, réseaux sociaux, identité de marque, référencement local et contenu'
      : 'Web partner in Savoie & Haute-Savoie: websites, Google Business, social media, brand identity, local SEO and content',
    email: 'web@elieageron.com',
    telephone: '+33695555318',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: 'Albertville',
      addressRegion: 'Savoie',
      postalCode: '73200',
    },
    founder: {
      '@id': `${baseUrl}/#person`,
    },
    sameAs: [
      'https://www.linkedin.com/in/elie-ageron-289636394',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33695555318',
      contactType: 'customer service',
      email: 'web@elieageron.com',
      availableLanguage: ['French', 'English'],
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 45.6756,
        longitude: 6.3925,
      },
      geoRadius: '60000',
    },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Bank Transfer, Credit Card',
    slogan: language === 'fr'
      ? 'Votre partenaire web de A à Z'
      : 'Your all-in-one web partner',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '4',
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
      ? 'Partenaire web en Savoie et Haute-Savoie : sites web, Google Business, réseaux sociaux, identité de marque, référencement local et contenu'
      : 'Web partner in Savoie & Haute-Savoie: websites, Google Business, social media, brand identity, local SEO and content',
    telephone: '+33695555318',
    email: 'web@elieageron.com',
    priceRange: '\u20ac\u20ac',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Albertville',
      addressRegion: 'Savoie',
      postalCode: '73200',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.6756,
      longitude: 6.3925,
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
      { '@type': 'City', name: 'Moûtiers' },
      { '@type': 'City', name: 'Annecy' },
      { '@type': 'City', name: 'Annecy-le-Vieux' },
      { '@type': 'City', name: 'Cran-Gevrier' },
      { '@type': 'City', name: 'Seynod' },
      { '@type': 'City', name: 'Bonneville' },
      { '@type': 'City', name: 'Thonon-les-Bains' },
      { '@type': 'City', name: 'Aix-les-Bains' },
      { '@type': 'City', name: 'Chambéry' },
      { '@type': 'City', name: 'Albertville' },
      { '@type': 'City', name: 'Grenoble' },
      { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
      { '@type': 'AdministrativeArea', name: 'Savoie' },
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
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'fr' ? 'Google Business' : 'Google Business' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'fr' ? 'Gestion des réseaux sociaux' : 'Social media management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'fr' ? 'Identité de marque' : 'Brand identity' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'fr' ? 'Référencement local' : 'Local SEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'fr' ? 'Avis & e-réputation' : 'Reviews & reputation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'fr' ? 'Rédaction de contenu' : 'Content writing' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '4',
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
