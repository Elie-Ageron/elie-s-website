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
    // La page qui decrit cette personne : signal E-E-A-T principal du site.
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/a-propos` },
    image: `${baseUrl}/og-image.png`,
    jobTitle: language === 'fr'
      ? 'Web Designer & Créateur de contenu réseaux sociaux'
      : 'Web Designer & Social Media Content Producer',
    description: language === 'fr'
      ? "Web designer et créateur de contenu basé à Albertville (Savoie). Deux services : des sites web qui convertissent les visiteurs en clients, et des vidéos courtes filmées sur place puis publiées chaque semaine sur les réseaux sociaux des clients. Savoie, Haute-Savoie, Annecy, Chambéry et toute la France."
      : 'Web designer and content producer based in Albertville, Savoie, France. Two services: high-converting websites, and short-form videos filmed on site then published weekly on clients social accounts. Savoie, Haute-Savoie, Annecy, Chambéry and across France.',
    email: 'elie@elieageron.com',
    telephone: '+33695555318',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Albertville',
      addressRegion: 'Savoie',
      postalCode: '73200',
      addressCountry: 'FR',
    },
    /* La fiche Google Business, ajoutee le 16 septembre 2026. Elle n'etait
       declaree nulle part, alors que c'est le premier levier en recherche
       locale. L'identifiant vient du lien de partage d'Elie :
       maps.app.goo.gl/rZ9cY6kz6dG32ecQ8 redirige vers une fiche dont le FID
       est 0x478bc3783d27ffe3:0x8de1f75d4ab27b78, et le CID est la moitie
       droite convertie en decimal. C'est la forme stable et documentee. */
    sameAs: [
      'https://www.linkedin.com/in/elie-ageron-289636394',
      'https://maps.google.com/?cid=10223724609164966776',
    ],
    knowsAbout: [
      'Web Design',
      'Social Media Management',
      'Short-form Vertical Video Production',
      'Instagram Reels',
      'TikTok Content Creation',
      'YouTube Shorts',
      'Video Editing',
      'Conversion Optimization',
      'Landing Page Design',
      'UI/UX Design',
      'SEO',
      'Local SEO',
      'Google Business Profile',
      'Brand Identity',
      'Content Writing',
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
      ? "Partenaire web : sites qui convertissent, création et publication de vidéos pour les réseaux sociaux, fiche Google Business, identité de marque, référencement local et contenu"
      : 'Web partner: high-converting websites, social media video production and publishing, Google Business profile, brand identity, local SEO and content',
    telephone: '+33695555318',
    email: 'elie@elieageron.com',
    priceRange: '€€',
    // aggregateRating vit uniquement dans ReviewSchema, sur ce meme @id #business.
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Albertville',
      addressRegion: 'Savoie',
      postalCode: '73200',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Moûtiers' },
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
      name: language === 'fr' ? 'Services Web & Réseaux Sociaux' : 'Web & Social Media Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Création de site web' : 'Website design',
            description: language === 'fr'
              ? 'Landing page ou site vitrine multi-pages, produit en 7 à 14 jours ouvrés une fois vos contenus fournis, optimisé pour Google et pour la conversion'
              : 'Landing page or multi-page showcase site, built in 7 to 14 business days once your content is supplied, optimized for Google and for conversion',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${baseUrl}/reseaux-sociaux#service`,
            name: language === 'fr' ? 'Gestion des réseaux sociaux' : 'Social media management',
            url: `${baseUrl}/reseaux-sociaux`,
            description: language === 'fr'
              ? "Tournage vidéo sur place une journée par mois, montage vertical, sous-titrage et publication de 6 à 12 vidéos courtes dans le mois sur Instagram, Facebook, TikTok et YouTube Shorts"
              : 'On-site video shoot one day a month, vertical editing, subtitling and publishing of 6 to 12 short videos over the month on Instagram, Facebook, TikTok and YouTube Shorts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Business',
            description: language === 'fr'
              ? 'Création et optimisation de la fiche Google Business pour le référencement local'
              : 'Google Business profile creation and optimization for local search',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Identité de marque' : 'Brand identity',
            description: language === 'fr'
              ? 'Logo, couleurs, typographies et charte graphique'
              : 'Logo, colors, typography and brand guidelines',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Référencement local' : 'Local SEO',
            description: language === 'fr'
              ? 'Suivi et optimisation continue du référencement local'
              : 'Ongoing local SEO tracking and optimization',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Rédaction de contenu' : 'Content writing',
            description: language === 'fr'
              ? 'Textes de site, articles de blog et posts pour les réseaux'
              : 'Website copy, blog articles and social media posts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Avis & e-réputation' : 'Reviews & online reputation',
            description: language === 'fr'
              ? "Collecte d'avis Google et réponses professionnelles à chaque retour client"
              : 'Google review collection and professional replies to every customer review',
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

  // Pas de BreadcrumbList ici : ce composant est rendu par le Layout sur toutes
  // les pages, et il y emettait un fil d'un seul element ("Accueil") en doublon
  // du vrai fil de chaque page. L'accueil etant la racine, il n'en a pas besoin.

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
    </Helmet>
  );
};

export default JsonLd;
