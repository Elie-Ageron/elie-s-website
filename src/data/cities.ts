export interface CityData {
  slug: string;
  postalCode: string;
  lat: number;
  lng: number;
  department: string;
  departmentCode: string;
  fr: {
    name: string;
    title: string;
    description: string;
    h1Pre: string;
    h1Highlight: string;
    h2: string;
    intro: string;
    breadcrumb: string;
  };
  en: {
    name: string;
    title: string;
    description: string;
    h1Pre: string;
    h1Highlight: string;
    h2: string;
    intro: string;
    breadcrumb: string;
  };
}

export const cities: CityData[] = [
  {
    slug: 'web-designer-annecy',
    postalCode: '74000',
    lat: 45.8992,
    lng: 6.1294,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    fr: {
      name: 'Annecy',
      title: 'Web Designer Annecy | Elie Ageron — Dès 500€',
      description: 'Web designer freelance à Annecy. Sites pros qui convertissent les visiteurs en clients. Livraison en 7–14 jours, dès 500€. Appel gratuit.',
      h1Pre: 'Web designer à ',
      h1Highlight: 'Annecy',
      h2: 'Un site qui ramène des clients — pas juste un beau design.',
      intro: 'Basé en Haute-Savoie, je travaille avec des entrepreneurs et PME d\'Annecy qui veulent une présence en ligne qui convertit vraiment. Restaurateur au bord du lac, artisan, prestataire de services — votre site doit être trouvé sur Google et convaincre dès la première visite.',
      breadcrumb: 'Web Designer Annecy',
    },
    en: {
      name: 'Annecy',
      title: 'Web Designer Annecy France | Elie Ageron — From €500',
      description: 'Freelance web designer near Annecy, France. Sites that convert visitors into clients. Live in 7–14 days from €500. Free strategy call.',
      h1Pre: 'Web designer in ',
      h1Highlight: 'Annecy',
      h2: 'A site that brings you clients — not just a pretty design.',
      intro: 'Based in Haute-Savoie, I work with entrepreneurs and SMEs in the Annecy area who want an online presence that truly converts. Restaurant owner by the lake, craftsman, service provider — your site needs to be found on Google and convince visitors from the first click.',
      breadcrumb: 'Web Designer Annecy',
    },
  },
  {
    slug: 'web-designer-grenoble',
    postalCode: '38000',
    lat: 45.1885,
    lng: 5.7245,
    department: 'Isère',
    departmentCode: 'FR-38',
    fr: {
      name: 'Grenoble',
      title: 'Web Designer Grenoble | Elie Ageron — Dès 500€',
      description: 'Web designer freelance pour entreprises de Grenoble. Sites haute conversion livrés en 7–14 jours dès 500€. Appel stratégique gratuit.',
      h1Pre: 'Web designer à ',
      h1Highlight: 'Grenoble',
      h2: 'Votre site pro, livré en moins de 2 semaines.',
      intro: 'Je travaille avec des entreprises et indépendants de la région grenobloise qui ont besoin d\'un site sérieux, sans se ruiner. Grenoble est une ville compétitive — votre site doit se démarquer. Je livre des sites clairs, rapides et optimisés Google, en moins de deux semaines.',
      breadcrumb: 'Web Designer Grenoble',
    },
    en: {
      name: 'Grenoble',
      title: 'Web Designer Grenoble France | Elie Ageron — From €500',
      description: 'Freelance web designer for Grenoble businesses. High-converting sites from €500, delivered in 7–14 days. Free strategy call.',
      h1Pre: 'Web designer in ',
      h1Highlight: 'Grenoble',
      h2: 'Your professional site, delivered in under 2 weeks.',
      intro: 'I work with businesses and freelancers in the Grenoble area who need a serious website without breaking the bank. Grenoble is a competitive city — your site needs to stand out. I deliver clean, fast, Google-optimized sites in under two weeks.',
      breadcrumb: 'Web Designer Grenoble',
    },
  },
  {
    slug: 'web-designer-chambery',
    postalCode: '73000',
    lat: 45.5646,
    lng: 5.9178,
    department: 'Savoie',
    departmentCode: 'FR-73',
    fr: {
      name: 'Chambéry',
      title: 'Web Designer Chambéry | Elie Ageron — Dès 500€',
      description: 'Web designer freelance pour entreprises de Chambéry. Sites professionnels livrés en 7–14 jours dès 500€. Appel gratuit sans engagement.',
      h1Pre: 'Web designer à ',
      h1Highlight: 'Chambéry',
      h2: 'Un site pro qui convertit vos visiteurs en clients.',
      intro: 'Chambéry et sa région concentrent de nombreuses TPE et indépendants qui méritent une présence digitale à la hauteur de leur activité. Je crée des sites clairs, rapides, bien référencés sur Google, qui donnent envie aux visiteurs de vous contacter. Sans jargon, sans surprise sur le prix.',
      breadcrumb: 'Web Designer Chambéry',
    },
    en: {
      name: 'Chambéry',
      title: 'Web Designer Chambéry France | Elie Ageron — From €500',
      description: 'Freelance web designer for Chambéry businesses. Professional sites from €500, delivered in 7–14 days. Free strategy call.',
      h1Pre: 'Web designer in ',
      h1Highlight: 'Chambéry',
      h2: 'A professional site that converts your visitors into clients.',
      intro: 'Chambéry and its surroundings are home to many small businesses and freelancers who deserve a digital presence that matches their work. I create clear, fast, Google-optimized sites that give visitors a reason to contact you. No jargon, no price surprises.',
      breadcrumb: 'Web Designer Chambéry',
    },
  },
  {
    slug: 'creation-site-web-haute-savoie',
    postalCode: '74000',
    lat: 45.8992,
    lng: 6.1294,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    fr: {
      name: 'Haute-Savoie',
      title: 'Création Site Web Haute-Savoie | Elie Ageron',
      description: 'Création de sites web professionnels en Haute-Savoie. Dès 500€, livraison en 7–14 jours. Web designer freelance basé à Thônes (74).',
      h1Pre: 'Création de site web en ',
      h1Highlight: 'Haute-Savoie',
      h2: 'Un site qui vous ramène des clients partout dans le 74.',
      intro: 'Basé à Thônes, en plein cœur de la Haute-Savoie, j\'accompagne artisans, commerçants, prestataires et PME du 74 dans leur présence en ligne. Annecy, Bonneville, Thonon, Cluses, Seynod, Annecy-le-Vieux — où que vous soyez dans le département, votre site doit être trouvé sur Google et transformer les visiteurs en clients.',
      breadcrumb: 'Création Site Web Haute-Savoie',
    },
    en: {
      name: 'Haute-Savoie',
      title: 'Web Design Haute-Savoie France | Elie Ageron',
      description: 'Professional web design in Haute-Savoie, France. From €500, delivered in 7–14 days. Freelance web designer based in Thônes.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Haute-Savoie',
      h2: 'A site that brings you clients across the department.',
      intro: 'Based in Thônes, in the heart of Haute-Savoie, I help craftsmen, retailers, service providers and SMEs build a strong online presence across the department. Annecy, Bonneville, Thonon, Cluses, Seynod — wherever you are, your site needs to be found on Google and convert visitors into clients.',
      breadcrumb: 'Web Design Haute-Savoie',
    },
  },
];
