export interface CityLocale {
  name: string;
  title: string;
  description: string;
  h1Pre: string;
  h1Highlight: string;
  h2: string;
  intro: string;
  breadcrumb: string;
}

export interface CityBlock {
  title: string;
  body: string;
}

export interface CityFaq {
  q: string;
  a: string;
}

/**
 * Contenu propre a la commune. C'est ce qui distingue une page locale utile
 * d'une page dupliquee ou seul le nom de la ville change, ce que Google
 * detecte et ignore.
 */
export interface CityDepth {
  /** Le tissu economique reel de la zone, en deux ou trois paragraphes. */
  context: string[];
  /** Metiers surrepresentes localement, utilises comme preuve de connaissance du terrain. */
  sectors: string[];
  /** Communes et hameaux desservis depuis cette base. */
  nearby: string[];
  /** Temps de trajet reel depuis Albertville, ou mention "sur place". */
  travel: string;
  /** Sections editoriales de la page. */
  blocks: CityBlock[];
  /** Angle reseaux sociaux, deuxieme pilier de l'offre. */
  social: string;
  faq: CityFaq[];
}

export interface CityData {
  slug: string;
  postalCode: string;
  lat: number;
  lng: number;
  department: string;
  departmentCode: string;
  /** Page couvrant un departement ou un bassin plutot qu'une commune. */
  scope?: 'city' | 'area';
  /** Autres pages locales a proposer en maillage interne. */
  relatedCities?: string[];
  fr: CityLocale;
  en: CityLocale;
  /** Contenu long, francais uniquement. */
  depthFr?: CityDepth;
}
