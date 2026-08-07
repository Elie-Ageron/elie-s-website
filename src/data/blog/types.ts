/**
 * Modele de donnees du blog.
 *
 * Les articles ecrits avant aout 2026 sont bilingues (contentEn obligatoire).
 * Les articles publies depuis le pivot "reseaux sociaux" sont en francais
 * uniquement : `frOnly: true` les retire des listes en anglais, ce qui evite
 * de servir du francais sous une balise `lang="en"`.
 */

export type CategorySlug =
  | 'reseaux-sociaux'
  | 'video'
  | 'strategie'
  | 'seo-local'
  | 'site-web'
  | 'conversion';

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titleFr: string;
  /** Absent sur les articles francais uniquement. Repli sur la version FR. */
  titleEn?: string;
  excerptFr: string;
  excerptEn?: string;
  /** Balise title complete, suffixe marque inclus, sous 60 caracteres. Repli sur titleXx. */
  seoTitleFr?: string;
  seoTitleEn?: string;
  /** Meta description, sous 160 caracteres. Repli sur excerptXx. */
  seoDescFr?: string;
  seoDescEn?: string;
  contentFr: string;
  contentEn?: string;
  readTime: string;
  categoryFr: string;
  categoryEn?: string;
  /** Rattachement au systeme de categories. Deduit du libelle si absent. */
  categorySlug?: CategorySlug;
  date: string;
  lastModified?: string;
  author: string;
  image?: string;
  /** Article francais uniquement : masque des listes anglaises. */
  frOnly?: boolean;
  /** Page pilier vers laquelle l'article renvoie son autorite. */
  pillar?: string;
  /** Slugs d'articles a proposer en lecture suivante, dans l'ordre. */
  related?: string[];
  /** Mots-cles secondaires, utilises pour le calcul des articles voisins. */
  tags?: string[];
  /** Questions frequentes rendues en bas d'article et emises en FAQPage. */
  faqFr?: BlogFaqItem[];
}

export interface BlogCategory {
  slug: CategorySlug;
  fr: string;
  en: string;
  /** Une phrase, affichee en tete de la page categorie et dans sa meta description. */
  introFr: string;
  introEn: string;
  seoTitleFr: string;
  seoDescFr: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: 'reseaux-sociaux',
    fr: 'Réseaux sociaux',
    en: 'Social media',
    introFr:
      "Choisir ses plateformes, tenir un rythme de publication, comprendre ce que l'algorithme récompense et transformer des vues en clients.",
    introEn:
      'Choosing platforms, keeping a posting rhythm, understanding what the algorithm rewards and turning views into clients.',
    seoTitleFr: 'Réseaux Sociaux pour Entreprise | Elie Ageron',
    seoDescFr:
      "Conseils concrets sur les réseaux sociaux pour une entreprise locale : plateformes, rythme, algorithme, résultats. Sans jargon et sans promesse en l'air.",
  },
  {
    slug: 'video',
    fr: 'Vidéo',
    en: 'Video',
    introFr:
      'Filmer avec un téléphone, soigner le son, écrire une accroche, monter au format vertical. La partie technique, expliquée simplement.',
    introEn:
      'Filming on a phone, getting the sound right, writing a hook, editing vertical. The technical side, explained simply.',
    seoTitleFr: 'Vidéo Courte pour Entreprise | Elie Ageron',
    seoDescFr:
      'Filmer, cadrer, éclairer, monter et sous-titrer une vidéo verticale avec un simple téléphone. Les réglages qui comptent vraiment.',
  },
  {
    slug: 'strategie',
    fr: 'Stratégie',
    en: 'Strategy',
    introFr:
      'Où mettre son temps et son budget quand on dirige une petite entreprise et que la communication passe après le métier.',
    introEn:
      'Where to put your time and budget when you run a small business and communication comes after the actual job.',
    seoTitleFr: 'Stratégie Web pour TPE et Artisans | Elie Ageron',
    seoDescFr:
      'Site, réseaux, Google : par quoi commencer quand le budget et le temps sont comptés. Des arbitrages clairs pour une petite entreprise.',
  },
  {
    slug: 'seo-local',
    fr: 'Référencement local',
    en: 'Local SEO',
    introFr:
      'Sortir sur Google quand quelqu\'un cherche votre métier dans votre ville. Fiche Google Business, avis, pages locales.',
    introEn:
      'Showing up on Google when someone searches your trade in your town. Google Business Profile, reviews, local pages.',
    seoTitleFr: 'Référencement Local en Savoie | Elie Ageron',
    seoDescFr:
      'Fiche Google Business, avis clients, pages par ville : comment apparaître quand on cherche votre métier près de chez vous.',
  },
  {
    slug: 'site-web',
    fr: 'Site web',
    en: 'Websites',
    introFr:
      'Ce qu\'il faut écrire, montrer et corriger sur un site vitrine pour qu\'il rapporte des demandes au lieu de dormir.',
    introEn:
      'What to write, show and fix on a showcase site so it brings in enquiries instead of sitting there.',
    seoTitleFr: 'Créer et Améliorer son Site Web | Elie Ageron',
    seoDescFr:
      'Contenu, photos, vitesse, formulaire de contact : les points qui décident si un site vitrine génère des demandes ou non.',
  },
  {
    slug: 'conversion',
    fr: 'Conversion',
    en: 'Conversion',
    introFr:
      'Transformer un visiteur ou un spectateur en personne qui vous écrit. La partie la moins spectaculaire, la plus rentable.',
    introEn:
      'Turning a visitor or a viewer into someone who contacts you. The least spectacular part, and the most profitable.',
    seoTitleFr: 'Convertir ses Visiteurs en Clients | Elie Ageron',
    seoDescFr:
      'Pourquoi un site ou un compte qui fait des vues ne génère aucun contact, et les corrections qui changent réellement les choses.',
  },
];

/** Rattache les anciens libelles de categorie au systeme de slugs. */
const legacyCategoryMap: Record<string, CategorySlug> = {
  'Stratégie': 'strategie',
  Strategy: 'strategie',
  Conversion: 'conversion',
  SEO: 'seo-local',
  'Référencement local': 'seo-local',
  'Local SEO': 'seo-local',
  Design: 'site-web',
  'Site web': 'site-web',
  Websites: 'site-web',
  'Réseaux sociaux': 'reseaux-sociaux',
  'Social media': 'reseaux-sociaux',
  'Vidéo': 'video',
  Video: 'video',
};

export const getCategorySlug = (post: BlogPost): CategorySlug =>
  post.categorySlug ?? legacyCategoryMap[post.categoryFr] ?? 'strategie';

export const getCategory = (slug: CategorySlug): BlogCategory =>
  blogCategories.find((c) => c.slug === slug) ?? blogCategories[0];
