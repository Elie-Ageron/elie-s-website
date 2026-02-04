export interface BlogPost {
  id: string;
  slug: string;
  titleFr: string;
  titleEn: string;
  excerptFr: string;
  excerptEn: string;
  contentFr: string;
  contentEn: string;
  readTime: string;
  categoryFr: string;
  categoryEn: string;
  date: string;
  author: string;
  image?: string;
}

// Add your blog posts here - the content supports Markdown formatting
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'pourquoi-site-web-2025',
    titleFr: 'Pourquoi Votre Entreprise a Besoin d\'un Site Web en 2025',
    titleEn: 'Why Your Business Needs a Website in 2025',
    excerptFr: 'Découvrez les 5 raisons cruciales pour lesquelles un site web professionnel est essentiel pour votre croissance.',
    excerptEn: 'Discover the 5 crucial reasons why a professional website is essential for your growth.',
    readTime: '5 min',
    categoryFr: 'Stratégie',
    categoryEn: 'Strategy',
    date: '2025-01-15',
    author: 'Elie Ageron',
    contentFr: `
## Introduction

En 2025, avoir un site web n'est plus une option mais une nécessité absolue pour toute entreprise qui souhaite prospérer.

## 1. Votre vitrine ouverte 24h/24

Contrairement à un magasin physique, votre site web travaille pour vous même quand vous dormez. Vos clients potentiels peuvent découvrir vos services à n'importe quelle heure.

## 2. Crédibilité instantanée

**89% des consommateurs** recherchent une entreprise en ligne avant de faire un achat. Sans site web, vous perdez automatiquement cette clientèle.

## 3. Génération de leads automatique

Un site bien optimisé génère des prospects qualifiés sans effort supplémentaire de votre part. C'est votre meilleur commercial.

## 4. Avantage concurrentiel

Vos concurrents ont probablement déjà un site. Ne pas en avoir vous place automatiquement en position de faiblesse.

## 5. Mesurabilité

Avec les outils d'analyse modernes, vous pouvez mesurer exactement ce qui fonctionne et optimiser en conséquence.

## Conclusion

Investir dans un site web professionnel n'est pas une dépense, c'est un investissement qui rapporte. [Contactez-moi](/contact) pour discuter de votre projet.
    `,
    contentEn: `
## Introduction

In 2025, having a website is no longer optional but an absolute necessity for any business that wants to thrive.

## 1. Your 24/7 Storefront

Unlike a physical store, your website works for you even while you sleep. Your potential clients can discover your services at any hour.

## 2. Instant Credibility

**89% of consumers** research a business online before making a purchase. Without a website, you automatically lose this clientele.

## 3. Automatic Lead Generation

A well-optimized website generates qualified leads without additional effort on your part. It's your best salesperson.

## 4. Competitive Advantage

Your competitors probably already have a website. Not having one automatically puts you at a disadvantage.

## 5. Measurability

With modern analytics tools, you can measure exactly what works and optimize accordingly.

## Conclusion

Investing in a professional website is not an expense, it's an investment that pays off. [Contact me](/contact) to discuss your project.
    `,
  },
  {
    id: '2',
    slug: 'optimiser-taux-conversion',
    titleFr: 'Comment Optimiser Votre Taux de Conversion',
    titleEn: 'How to Optimize Your Conversion Rate',
    excerptFr: 'Les techniques psychologiques et design qui transforment vos visiteurs en clients payants.',
    excerptEn: 'Psychological and design techniques that transform visitors into paying clients.',
    readTime: '7 min',
    categoryFr: 'Conversion',
    categoryEn: 'Conversion',
    date: '2025-01-10',
    author: 'Elie Ageron',
    contentFr: `
## L'art de la conversion

La conversion n'est pas un hasard. C'est une science qui combine psychologie, design et stratégie.

## Les principes fondamentaux

### 1. La clarté avant tout
Votre visiteur doit comprendre en **moins de 5 secondes** ce que vous proposez.

### 2. Un seul objectif par page
Chaque page doit avoir un objectif clair et unique. Trop de choix paralyse.

### 3. La preuve sociale
Les témoignages et avis clients multiplient par 3 vos conversions.

### 4. L'urgence et la rareté
Ces leviers psychologiques augmentent significativement le passage à l'action.

## Les erreurs à éviter

- Formulaires trop longs
- CTAs peu visibles
- Temps de chargement lent
- Pas de version mobile

## Conclusion

Optimiser vos conversions peut doubler votre chiffre d'affaires sans augmenter votre trafic.
    `,
    contentEn: `
## The Art of Conversion

Conversion is not luck. It's a science that combines psychology, design, and strategy.

## Fundamental Principles

### 1. Clarity Above All
Your visitor must understand in **less than 5 seconds** what you offer.

### 2. One Goal Per Page
Each page should have a clear, single objective. Too many choices paralyze.

### 3. Social Proof
Testimonials and customer reviews triple your conversions.

### 4. Urgency and Scarcity
These psychological levers significantly increase action-taking.

## Mistakes to Avoid

- Forms that are too long
- CTAs that aren't visible
- Slow loading times
- No mobile version

## Conclusion

Optimizing your conversions can double your revenue without increasing your traffic.
    `,
  },
  {
    id: '3',
    slug: 'seo-local-guide-complet',
    titleFr: 'SEO Local : Le Guide Complet pour Dominer Google',
    titleEn: 'Local SEO: The Complete Guide to Dominate Google',
    excerptFr: 'Apprenez à positionner votre entreprise en première page de Google dans votre région.',
    excerptEn: 'Learn how to rank your business on the first page of Google in your region.',
    readTime: '10 min',
    categoryFr: 'SEO',
    categoryEn: 'SEO',
    date: '2025-01-05',
    author: 'Elie Ageron',
    contentFr: `
## Pourquoi le SEO local est crucial

**46% des recherches Google** ont une intention locale. Si vous n'êtes pas visible localement, vous perdez la moitié de votre marché.

## Les 5 piliers du SEO local

### 1. Google Business Profile
Créez et optimisez votre fiche Google Business. C'est gratuit et indispensable.

### 2. Les avis clients
Collectez activement des avis positifs. Répondez à tous les avis, positifs comme négatifs.

### 3. Citations locales
Inscrivez-vous sur les annuaires locaux : Pages Jaunes, Yelp, TripAdvisor selon votre secteur.

### 4. Contenu local
Créez du contenu qui mentionne votre ville et région. Blog, pages de service localisées.

### 5. Backlinks locaux
Obtenez des liens depuis des sites locaux : associations, journaux, partenaires.

## Les outils essentiels

- Google Search Console
- Google Business Profile
- Moz Local
- BrightLocal

## Conclusion

Le SEO local est votre meilleur investissement pour attirer des clients de proximité.
    `,
    contentEn: `
## Why Local SEO is Crucial

**46% of Google searches** have local intent. If you're not visible locally, you're losing half your market.

## The 5 Pillars of Local SEO

### 1. Google Business Profile
Create and optimize your Google Business listing. It's free and essential.

### 2. Customer Reviews
Actively collect positive reviews. Respond to all reviews, both positive and negative.

### 3. Local Citations
Register on local directories: Yelp, TripAdvisor depending on your industry.

### 4. Local Content
Create content that mentions your city and region. Blog, localized service pages.

### 5. Local Backlinks
Get links from local sites: associations, newspapers, partners.

## Essential Tools

- Google Search Console
- Google Business Profile
- Moz Local
- BrightLocal

## Conclusion

Local SEO is your best investment to attract nearby customers.
    `,
  },
  {
    id: '4',
    slug: 'landing-page-efficace',
    titleFr: 'Anatomie d\'une Landing Page qui Convertit',
    titleEn: 'Anatomy of a High-Converting Landing Page',
    excerptFr: 'Décryptage des éléments essentiels d\'une page d\'atterrissage haute performance.',
    excerptEn: 'Breaking down the essential elements of a high-performance landing page.',
    readTime: '6 min',
    categoryFr: 'Design',
    categoryEn: 'Design',
    date: '2025-01-01',
    author: 'Elie Ageron',
    contentFr: `
## Qu'est-ce qu'une landing page ?

Une landing page est une page web conçue avec un **seul objectif** : convertir les visiteurs en leads ou clients.

## Les éléments indispensables

### 1. Le titre accrocheur
Votre titre doit capturer l'attention en moins de 3 secondes et promettre un bénéfice clair.

### 2. Le sous-titre explicatif
Il précise votre offre et renforce la promesse du titre.

### 3. Les visuels percutants
Images ou vidéos de haute qualité qui montrent votre produit/service en action.

### 4. Les bénéfices, pas les fonctionnalités
Listez ce que le client **gagne**, pas ce que le produit fait.

### 5. La preuve sociale
Témoignages, logos clients, chiffres clés, certifications.

### 6. Le CTA irrésistible
Un bouton visible, avec un texte orienté action ("Obtenez votre devis gratuit").

### 7. L'absence de navigation
Pas de menu, pas de distraction. Un seul chemin : la conversion.

## Les erreurs fatales

- Trop de texte
- CTA en bas de page uniquement
- Pas de version mobile
- Temps de chargement > 3 secondes

## Conclusion

Une landing page bien construite peut atteindre des taux de conversion de 20% ou plus.
    `,
    contentEn: `
## What is a Landing Page?

A landing page is a web page designed with a **single objective**: convert visitors into leads or customers.

## Essential Elements

### 1. The Attention-Grabbing Headline
Your headline must capture attention in less than 3 seconds and promise a clear benefit.

### 2. The Explanatory Subheadline
It clarifies your offer and reinforces the headline's promise.

### 3. Impactful Visuals
High-quality images or videos that show your product/service in action.

### 4. Benefits, Not Features
List what the customer **gains**, not what the product does.

### 5. Social Proof
Testimonials, client logos, key figures, certifications.

### 6. The Irresistible CTA
A visible button with action-oriented text ("Get your free quote").

### 7. No Navigation
No menu, no distraction. One path only: conversion.

## Fatal Mistakes

- Too much text
- CTA at the bottom only
- No mobile version
- Loading time > 3 seconds

## Conclusion

A well-built landing page can achieve conversion rates of 20% or more.
    `,
  },
];

// Helper function to get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get localized content
export const getLocalizedPost = (post: BlogPost, language: 'fr' | 'en') => {
  return {
    ...post,
    title: language === 'fr' ? post.titleFr : post.titleEn,
    excerpt: language === 'fr' ? post.excerptFr : post.excerptEn,
    content: language === 'fr' ? post.contentFr : post.contentEn,
    category: language === 'fr' ? post.categoryFr : post.categoryEn,
  };
};
