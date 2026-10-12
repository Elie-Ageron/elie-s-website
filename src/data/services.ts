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
  /** Optional internal link (e.g. social media points to its dedicated page) */
  to?: string;
  /** Label for the `to` link. Defaults to a generic "learn more" wording. */
  ctaLabel?: { fr: string; en: string };
  /**
   * La page de detail n'existe qu'en francais.
   *
   * ⚠️ Le libelle anglais le dit, il ne le cache pas. Un anglophone qui clique
   * « See details » et tombe sur une page francaise en deduit que le site est
   * casse. Un anglophone a qui on annonce la langue avant le clic ne deduit
   * rien du tout : c'est un guide en francais, il choisit.
   */
  detailFrOnly?: boolean;
  /**
   * Un second lien, plus discret, pose a cote du premier sur `/services`.
   *
   * ⚠️ Il existe pour une seule raison : `/why-a-website` n'etait atteignable
   * que par `InternalLinks`, retire des fins de page le 11 octobre 2026. C'est
   * desormais son point d'entree depuis le site rendu. Ne pas le retirer sans
   * relancer `npm run check:maillage`.
   */
  secondaryLink?: { to: string; label: { fr: string; en: string } };
}

/**
 * Ordre volontaire : les deux gros services (sites web, réseaux sociaux) d'abord,
 * le reste ensuite. Cet ordre pilote la page /services, la section écosystème
 * de la home et le catalogue d'offres JSON-LD.
 */
/* ⚠️ Les sept `desc` tiennent en une ou deux phrases depuis le 12 octobre 2026.
   Elie, sur telephone : *« des gros textes partout, c'est dur a lire »*. Celle
   des reseaux faisait dix lignes sur `/services`. Le detail vit sur la page de
   chaque service, et les puces juste dessous disent deja le perimetre. */
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
      fr: "Une page ou un site vitrine, en ligne 7 à 14 jours après vos contenus, et rapide sur téléphone.",
      en: "One page or a showcase site, live 7 to 14 days after your content is in, and fast on a phone.",
    },
    bullets: {
      fr: ['Landing page ou site vitrine multi-pages', 'Référencement Google inclus', 'Parfait sur mobile, tablette et ordinateur'],
      en: ['Landing page or multi-page showcase site', 'Google SEO included', 'Perfect on mobile, tablet and desktop'],
    },
    price: { fr: 'dès 500€', en: 'from €500' },
    // La page du pilier existe depuis le 12 octobre 2026.
    to: '/creation-site-web',
    ctaLabel: { fr: 'Voir les formules', en: 'See the plans' },
    secondaryLink: {
      to: '/why-a-website',
      label: { fr: "Ce qu'un site change vraiment", en: 'What a site actually changes' },
    },
  },
  {
    id: 'reseaux',
    icon: Share2,
    anchor: 'reseaux-sociaux',
    kicker: { fr: 'Votre présence quotidienne', en: 'Your daily presence' },
    title: { fr: 'Réseaux sociaux', en: 'Social media' },
    short: {
      fr: 'On filme une journée, je publie vos vidéos tout le mois. Vous ne touchez à rien.',
      en: 'We film for a day, I post your videos all month. You touch nothing.',
    },
    desc: {
      fr: "Je viens tourner une journée chez vous, puis je monte et je publie 8 vidéos dans le mois. Vous retournez travailler.",
      en: "I come and film one day at your place, then edit and post 8 videos over the month. You go back to work.",
    },
    bullets: {
      fr: [
        'Un plan de tournage et des idées de sujets, préparés en amont',
        'Une journée de tournage chez vous, tout le matériel fourni',
        '8 vidéos verticales montées et publiées dans le mois',
        '4 carrousels et 8 stories, tirés de la même journée',
      ],
      en: [
        'A shooting plan and topic ideas, prepared in advance',
        'A full day of filming at your place, all equipment provided',
        '8 vertical videos edited and published over the month',
        '4 carousels and 8 stories, from the same day',
      ],
    },
    price: { fr: '890€/mois', en: '€890/mo' },
    recurring: true,
    to: '/reseaux-sociaux',
    ctaLabel: { fr: 'Voir comment ça marche', en: 'See how it works' },
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
      fr: "Quand on cherche votre métier dans votre ville, c'est votre fiche qui doit sortir. Je la crée, ou je la reprends en entier.",
      en: "When someone searches your trade in your town, your profile should come up. I create it, or rework it entirely.",
    },
    bullets: {
      fr: ['Création ou optimisation de la fiche', 'Photos, horaires et descriptions soignés', 'Référencement local (Google Maps)'],
      en: ['Profile creation or optimization', 'Polished photos, hours and descriptions', 'Local SEO (Google Maps)'],
    },
    price: { fr: 'dès 250€', en: 'from €250' },
    to: '/fiche-google-business',
    ctaLabel: { fr: 'Voir le détail', en: 'See details (in French)' },
    detailFrOnly: true,
  },
  {
    id: 'branding',
    icon: Palette,
    anchor: 'identite-marque',
    kicker: { fr: 'Votre image', en: 'Your image' },
    title: { fr: 'Identité de marque', en: 'Brand identity' },
    short: {
      fr: 'Logo, couleurs et typographies, pour que votre devis, votre camion et votre site se ressemblent.',
      en: 'Logo, colors and typography: a coherent, memorable image.',
    },
    desc: {
      fr: "Logo, couleurs, typographies et règles d'usage, pour que tous vos supports se ressemblent.",
      en: "Logo, colours, typefaces and usage rules, so all your materials look like they belong together.",
    },
    bullets: {
      fr: ['Logo et déclinaisons', 'Palette de couleurs & typographies', "Charte graphique et règles d'usage"],
      en: ['Logo and variations', 'Color palette & typography', 'Brand guidelines and usage rules'],
    },
    price: { fr: 'dès 600€', en: 'from €600' },
    to: '/identite-de-marque',
    ctaLabel: { fr: 'Voir le détail', en: 'See details (in French)' },
    detailFrOnly: true,
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
      fr: "Le référencement se travaille dans le temps. Chaque mois, je suis vos mots-clés et votre position dans votre zone.",
      en: "Search ranking is worked on over time. Every month, I track your keywords and your position in your area.",
    },
    bullets: {
      fr: ['Suivi de positionnement mensuel', 'Optimisation continue des pages', 'Veille sur la concurrence locale'],
      en: ['Monthly ranking tracking', 'Ongoing page optimization', 'Local competitor monitoring'],
    },
    price: { fr: 'dès 150€/mois', en: 'from €150/mo' },
    recurring: true,
    to: '/referencement-local',
    ctaLabel: { fr: 'Voir le détail', en: 'See details (in French)' },
    detailFrOnly: true,
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
      fr: "Une méthode pour que vos clients contents laissent un avis, et une réponse à chacun, en votre nom.",
      en: "A method so happy clients leave a review, and a reply to each one, on your behalf.",
    },
    bullets: {
      fr: ['Stratégie de collecte d\'avis', 'Réponses professionnelles aux avis', 'Suivi de votre note globale'],
      en: ['Review-collection strategy', 'Professional replies to reviews', 'Tracking of your overall rating'],
    },
    price: { fr: 'dès 90€/mois', en: 'from €90/mo' },
    recurring: true,
    to: '/avis-google',
    ctaLabel: { fr: 'Voir le détail', en: 'See details (in French)' },
    detailFrOnly: true,
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
      fr: "Les textes de votre site, vos posts et vos articles, dans un ton qui vous ressemble.",
      en: "Your site copy, your posts and your articles, in a tone that sounds like you.",
    },
    bullets: {
      fr: ['Textes de site et pages services', 'Articles de blog optimisés SEO', 'Légendes et posts pour les réseaux'],
      en: ['Website and service-page copy', 'SEO-optimized blog articles', 'Captions and social posts'],
    },
    price: { fr: 'dès 90€', en: 'from €90' },
    to: '/redaction-web',
    ctaLabel: { fr: 'Voir le détail', en: 'See details (in French)' },
    detailFrOnly: true,
  },
];
