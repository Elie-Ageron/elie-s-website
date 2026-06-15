import {
  Globe,
  MapPin,
  Share2,
  Palette,
  TrendingUp,
  Star,
  PenLine,
  LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  /** Anchor id used on the /services page */
  anchor: string;
  /** Short editorial label shown above the title on the /services page */
  kicker: { fr: string; en: string };
  title: { fr: string; en: string };
  /** One-liner shown in the ecosystem grid */
  short: { fr: string; en: string };
  /** Longer paragraph shown on the dedicated /services page */
  desc: { fr: string; en: string };
  bullets: { fr: string[]; en: string[] };
  price: { fr: string; en: string };
  /** Recurring (monthly) service vs. one-time deliverable */
  recurring?: boolean;
  /** Future service, shown as "coming soon" */
  soon?: boolean;
  /** Optional internal link (e.g. websites point to the pricing page) */
  to?: string;
}

export const services: ServiceItem[] = [
  {
    id: 'sites',
    icon: Globe,
    anchor: 'sites-web',
    kicker: { fr: 'Votre vitrine', en: 'Your storefront' },
    title: { fr: 'Sites web', en: 'Websites' },
    short: {
      fr: 'Sites rapides, optimisés Google et pensés pour convertir vos visiteurs en clients.',
      en: 'Fast, Google-optimized sites built to turn visitors into clients.',
    },
    desc: {
      fr: "Le socle de votre présence en ligne. Landing page ou site vitrine multi-pages, livré en 7 à 14 jours, optimisé pour Google et impeccable sur mobile.",
      en: 'The foundation of your online presence. Landing page or multi-page showcase site, delivered in 7-14 days, optimized for Google and flawless on mobile.',
    },
    bullets: {
      fr: ['Landing page ou site vitrine multi-pages', 'Référencement Google inclus', 'Parfait sur mobile, tablette et ordinateur'],
      en: ['Landing page or multi-page showcase site', 'Google SEO included', 'Perfect on mobile, tablet and desktop'],
    },
    price: { fr: 'dès 500€', en: 'from €500' },
    to: '/pricing',
  },
  {
    id: 'google-business',
    icon: MapPin,
    anchor: 'google-business',
    kicker: { fr: 'Visibilité locale', en: 'Local visibility' },
    title: { fr: 'Google Business', en: 'Google Business' },
    short: {
      fr: 'Votre fiche Google optimisée pour apparaître dans les recherches locales.',
      en: 'Your Google profile optimized to show up in local searches.',
    },
    desc: {
      fr: "Quand un client cherche votre métier dans votre ville, c'est votre fiche qui doit apparaître. Création ou optimisation complète de votre profil Google Business : photos, descriptions, catégories, posts et référencement local.",
      en: 'When a client searches for your trade in your city, your profile is what should appear. Full creation or optimization of your Google Business profile: photos, descriptions, categories, posts and local SEO.',
    },
    bullets: {
      fr: ['Création ou optimisation de la fiche', 'Photos, horaires et descriptions soignés', 'Référencement local (Google Maps)'],
      en: ['Profile creation or optimization', 'Polished photos, hours and descriptions', 'Local SEO (Google Maps)'],
    },
    price: { fr: 'dès 250€', en: 'from €250' },
  },
  {
    id: 'reseaux',
    icon: Share2,
    anchor: 'reseaux-sociaux',
    kicker: { fr: 'Votre communauté', en: 'Your community' },
    title: { fr: 'Réseaux sociaux', en: 'Social media' },
    short: {
      fr: 'Création de contenu et gestion de vos comptes, sans que vous y pensiez.',
      en: 'Content creation and account management, without you lifting a finger.',
    },
    desc: {
      fr: "Rester présent sur Instagram et Facebook demande du temps que vous n'avez pas. Je crée le contenu, je publie régulièrement et je garde vos comptes vivants pour entretenir le lien avec vos clients.",
      en: "Staying active on Instagram and Facebook takes time you don't have. I create the content, post regularly and keep your accounts alive to maintain the link with your clients.",
    },
    bullets: {
      fr: ['Création de contenu (posts, stories, vidéos)', 'Publication régulière et planifiée', 'Comptes Instagram & Facebook gérés'],
      en: ['Content creation (posts, stories, videos)', 'Regular, scheduled publishing', 'Instagram & Facebook accounts managed'],
    },
    price: { fr: 'dès 250€/mois', en: 'from €250/mo' },
    recurring: true,
  },
  {
    id: 'branding',
    icon: Palette,
    anchor: 'identite-marque',
    kicker: { fr: 'Votre image', en: 'Your image' },
    title: { fr: 'Identité de marque', en: 'Brand identity' },
    short: {
      fr: 'Logo, couleurs et typographies : une image cohérente et mémorable.',
      en: 'Logo, colors and typography: a coherent, memorable image.',
    },
    desc: {
      fr: "Une marque forte se reconnaît du premier coup d'œil. Je crée votre charte graphique complète (logo, palette de couleurs, typographies et règles d'usage) pour une image cohérente sur tous vos supports.",
      en: 'A strong brand is recognizable at first glance. I create your full visual identity (logo, color palette, typography and usage rules) for a coherent image across all your materials.',
    },
    bullets: {
      fr: ['Logo et déclinaisons', 'Palette de couleurs & typographies', "Charte graphique et règles d'usage"],
      en: ['Logo and variations', 'Color palette & typography', 'Brand guidelines and usage rules'],
    },
    price: { fr: 'dès 600€', en: 'from €600' },
  },
  {
    id: 'seo',
    icon: TrendingUp,
    anchor: 'referencement-local',
    kicker: { fr: 'Votre référencement', en: 'Your ranking' },
    title: { fr: 'Référencement local', en: 'Local SEO' },
    short: {
      fr: 'Un suivi SEO continu pour rester visible sur Google dans votre zone.',
      en: 'Ongoing SEO to stay visible on Google in your area.',
    },
    desc: {
      fr: "Le référencement n'est pas figé : il se travaille dans le temps. Suivi mensuel pour améliorer votre position sur Google, surveiller vos mots-clés et garder une longueur d'avance sur vos concurrents locaux.",
      en: "SEO is never set in stone: it's worked over time. Monthly follow-up to improve your Google position, monitor your keywords and stay ahead of your local competitors.",
    },
    bullets: {
      fr: ['Suivi de positionnement mensuel', 'Optimisation continue des pages', 'Veille sur la concurrence locale'],
      en: ['Monthly ranking tracking', 'Ongoing page optimization', 'Local competitor monitoring'],
    },
    price: { fr: 'dès 150€/mois', en: 'from €150/mo' },
    recurring: true,
  },
  {
    id: 'avis',
    icon: Star,
    anchor: 'avis-reputation',
    kicker: { fr: 'Votre réputation', en: 'Your reputation' },
    title: { fr: 'Avis & e-réputation', en: 'Reviews & reputation' },
    short: {
      fr: 'Collecte et gestion de vos avis Google pour inspirer confiance.',
      en: 'Collecting and managing your Google reviews to build trust.',
    },
    desc: {
      fr: "Les avis sont le premier critère de confiance pour un nouveau client. Je mets en place une stratégie pour collecter plus d'avis positifs et je réponds à votre place, professionnellement, à chaque retour.",
      en: 'Reviews are the first trust factor for a new client. I set up a strategy to collect more positive reviews and reply on your behalf, professionally, to every one.',
    },
    bullets: {
      fr: ['Stratégie de collecte d\'avis', 'Réponses professionnelles aux avis', 'Suivi de votre note globale'],
      en: ['Review-collection strategy', 'Professional replies to reviews', 'Tracking of your overall rating'],
    },
    price: { fr: 'dès 90€/mois', en: 'from €90/mo' },
    recurring: true,
  },
  {
    id: 'contenu',
    icon: PenLine,
    anchor: 'redaction',
    kicker: { fr: 'Vos mots', en: 'Your words' },
    title: { fr: 'Rédaction de contenu', en: 'Content writing' },
    short: {
      fr: 'Textes de site, posts et articles qui parlent à vos clients.',
      en: 'Website copy, posts and articles that speak to your clients.',
    },
    desc: {
      fr: "Les bons mots font vendre. Rédaction des textes de votre site, de vos posts réseaux ou d'articles de blog optimisés pour Google, dans un ton qui vous ressemble et qui donne envie de vous contacter.",
      en: 'The right words sell. Writing of your website copy, social posts or Google-optimized blog articles, in a tone that sounds like you and makes people want to reach out.',
    },
    bullets: {
      fr: ['Textes de site et pages services', 'Articles de blog optimisés SEO', 'Légendes et posts pour les réseaux'],
      en: ['Website and service-page copy', 'SEO-optimized blog articles', 'Captions and social posts'],
    },
    price: { fr: 'dès 90€', en: 'from €90' },
  },
];
