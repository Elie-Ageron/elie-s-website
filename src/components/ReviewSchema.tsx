import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Avis clients + note globale.
 *
 * Ce composant est le SEUL porteur de `aggregateRating` et de `review` sur le
 * site, et il les rattache au noeud entreprise canonique `#business` (le meme
 * @id que le LocalBusiness statique de index.html). Auparavant quatre entites
 * distinctes (#business, #service, #organization, #localbusiness) declaraient
 * chacune la meme note : Google y voyait quatre entreprises notees 5/5.
 */
const ReviewSchema = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://elieageron.com';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#business`,
    name: 'Elie Ageron Web Design',
    description: language === 'fr'
      ? "Création de sites web qui convertissent, et production de contenu vidéo pour les réseaux sociaux"
      : 'Websites built to convert, and social media video content produced end to end',
    image: `${baseUrl}/og-image.png`,
    url: baseUrl,
    telephone: '+33695555318',
    email: 'elie@elieageron.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Albertville',
      addressRegion: 'Savoie',
      postalCode: '73200',
      addressCountry: 'FR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '5',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Nora Aamara' },
        datePublished: '2026-07-15',
        publisher: { '@type': 'Organization', name: 'Google' },
        reviewBody: language === 'fr'
          ? "J'ai eu le plaisir de collaborer avec Elie pour la création du site internet de Naura Conseils, et je suis pleinement satisfaite du résultat. Dès le début du projet, il a été à l'écoute de mes besoins, de mes idées et de ma vision. Aujourd'hui, mon site est à la fois moderne, clair, fonctionnel et parfaitement adapté à mon activité. Je recommande Elie sans hésitation."
          : "I had the pleasure of working with Elie on the website for Naura Conseils, and I'm fully satisfied with the result. From the very start he listened to my needs, my ideas and my vision. Today my site is modern, clear, functional and perfectly suited to my business. I recommend Elie without hesitation.",
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Gabriel Ageron' },
        datePublished: '2026-03-01',
        reviewBody: language === 'fr'
          ? "Elie a su comprendre ce qu'on construisait et l'a traduit en un site qui fonctionne vraiment. Rapide, clair, et il pousse les visiteurs à s'inscrire. C'est exactement ce qu'il nous fallait."
          : "Elie really understood what we were building and translated it into a site that works. Fast, clear, and it pushes visitors to sign up. Exactly what we needed.",
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Austin Talley' },
        datePublished: '2026-01-01',
        reviewBody: language === 'fr'
          ? "On avait besoin d'un site à la hauteur de notre énergie. Elie a compris notre univers immédiatement. Le résultat est percutant, professionnel, exactement ce qu'on voulait."
          : "We needed a site that matched our energy. Elie understood our world straight away. The result is sharp, professional, and exactly what we were after.",
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Gabriel Ageron' },
        datePublished: '2025-12-01',
        reviewBody: language === 'fr'
          ? "Collaborer avec Elie a été une vraie révélation. Notre site inspire confiance, convertit mieux, et nos clients nous le disent. Un travail soigné, du début à la fin."
          : "Working with Elie was a real revelation. Our site now inspires trust, converts better, and our clients tell us so. Careful, attentive work from start to finish.",
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sébastien Chaffardon' },
        datePublished: '2025-11-01',
        reviewBody: language === 'fr'
          ? "Elie a su capter l'essence de notre marque. Le site reflète parfaitement notre ambition et nos valeurs. On a eu des retours très positifs dès le lancement et le trafic a vraiment décollé."
          : "Elie perfectly captured our brand's essence. The site reflects our ambition and our values. We got great feedback right from launch, and traffic has really taken off.",
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
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
