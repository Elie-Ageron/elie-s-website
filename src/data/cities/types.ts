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

/**
 * Un point de la section locale.
 *
 * 🔴 **Remplace le contexte en trois paragraphes et les trois blocs, le
 * 14 octobre 2026.** Elie, sur `/creation-site-web-albertville` : *« t'as
 * quatre paragraphes enormes avec un texte sur le contexte a Albertville, donc
 * on comprend rien. Personne va lire ca. »* La page empilait sept paragraphes
 * de contexte et trois blocs qui redisaient en partie la meme chose (la
 * saisonnalite y etait deux fois).
 *
 * ⚠️ **Le titre se lit seul**, c'est le seul texte que lit un visiteur qui
 * survole. Le texte tient en deux phrases au plus, environ 150 signes : quatre
 * lignes a 390 px.
 */
export interface CityPoint {
  titre: string;
  texte: string;
  /** L'article qui developpe ce point. Slug verifie par check:content. */
  article?: string;
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
  /** Ce qui est vrai de ce bassin et de lui seul, en trois ou quatre points. */
  points: CityPoint[];
  /** Metiers surrepresentes localement, utilises comme preuve de connaissance du terrain. */
  sectors: string[];
  /** Communes et hameaux desservis depuis cette base. */
  nearby: string[];
  /** Temps de trajet reel depuis Albertville, ou mention "sur place". */
  travel: string;
  /** Angle reseaux sociaux, deuxieme pilier de l'offre. Deux phrases au plus. */
  social: string;
  /** La page reseaux sociaux de la meme commune, quand elle existe. */
  socialPage?: string;
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
