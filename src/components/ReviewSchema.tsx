import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const ReviewSchema = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://elieageron.lovable.app';

  const reviews = [
    {
      author: 'Marc D.',
      reviewBody: language === 'fr'
        ? "Honnêtement, j'hésitais mais le résultat est dingue. Mon magasin a enfin une vraie présence en ligne. Les ventes ont augmenté de 40% le premier mois."
        : "Honestly, I was hesitant but the result is insane. My store finally has a real presence online. Sales went up 40% in the first month.",
      ratingValue: 5,
      datePublished: '2024-11-15',
    },
    {
      author: 'Sophie L.',
      reviewBody: language === 'fr'
        ? "Je ne savais pas à quoi m'attendre d'un jeune designer, mais Elie a dépassé mes attentes. Professionnel, rapide, et le site convertit vraiment !"
        : "I didn't know what to expect from a young designer, but Elie delivered beyond my expectations. Professional, fast, and the site actually converts!",
      ratingValue: 5,
      datePublished: '2024-12-01',
    },
    {
      author: 'Thomas R.',
      reviewBody: language === 'fr'
        ? "Le meilleur investissement que j'ai fait pour mon business. Le ROI était visible en quelques semaines. Je recommande à 100%."
        : "Best investment I've made for my business. The ROI was visible within weeks. Can't recommend enough.",
      ratingValue: 5,
      datePublished: '2025-01-10',
    },
  ];

  // Use Product schema for reviews - doesn't require physical address like LocalBusiness
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${baseUrl}/#service`,
    name: 'Web Design Services by Elie Ageron',
    description: language === 'fr'
      ? 'Services de création de sites web premium qui convertissent les visiteurs en clients'
      : 'Premium web design services that convert visitors into paying clients',
    image: `${baseUrl}/og-image.png`,
    url: baseUrl,
    brand: {
      '@type': 'Brand',
      name: 'Elie Ageron Web Design',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '300',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/pricing`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
    </Helmet>
  );
};

export default ReviewSchema;
