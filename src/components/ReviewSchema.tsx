import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const ReviewSchema = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://elieageron.lovable.app';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#service`,
    name: language === 'fr' ? 'Elie Ageron Web Design' : 'Elie Ageron Web Design',
    description: language === 'fr'
      ? 'Services de création de sites web premium qui convertissent les visiteurs en clients'
      : 'Premium web design services that convert visitors into paying clients',
    image: `${baseUrl}/og-image.png`,
    url: baseUrl,
    telephone: '+33695555318',
    email: 'elieageron@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Annecy',
      addressRegion: 'Haute-Savoie',
      addressCountry: 'FR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Marc D.',
        },
        datePublished: '2024-12-15',
        reviewBody: language === 'fr'
          ? 'Professionnel, rapide, et les résultats parlent d\'eux-mêmes. Notre taux de conversion a augmenté de 40% après la refonte.'
          : 'Professional, fast, and the results speak for themselves. Our conversion rate increased by 40% after the redesign.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sophie L.',
        },
        datePublished: '2025-01-08',
        reviewBody: language === 'fr'
          ? 'Elie a compris notre vision immédiatement. Le site a dépassé nos attentes en design et en performance.'
          : 'Elie understood our vision immediately. The website exceeded our expectations in both design and performance.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Thomas R.',
        },
        datePublished: '2025-01-22',
        reviewBody: language === 'fr'
          ? 'Le meilleur investissement pour notre présence digitale. Le ROI était visible dès le premier mois.'
          : 'The best investment we made for our digital presence. ROI was visible within the first month.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
    ],
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
