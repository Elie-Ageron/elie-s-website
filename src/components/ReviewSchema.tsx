import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const ReviewSchema = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://elieageron.lovable.app';

  // Simple Service schema with aggregateRating only (no individual reviews to avoid "multiple ratings" error)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#service`,
    name: language === 'fr' ? 'Services Web Design par Elie Ageron' : 'Web Design Services by Elie Ageron',
    description: language === 'fr'
      ? 'Services de création de sites web premium qui convertissent les visiteurs en clients'
      : 'Premium web design services that convert visitors into paying clients',
    image: `${baseUrl}/og-image.png`,
    url: baseUrl,
    provider: {
      '@type': 'Person',
      name: 'Elie Ageron',
      url: baseUrl,
    },
    serviceType: 'Web Design',
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '12',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default ReviewSchema;
