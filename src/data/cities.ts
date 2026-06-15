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
      title: 'Web Designer Annecy | Elie Ageron, dès 500€',
      description: 'Web designer freelance basé en Savoie, j\'interviens à Annecy. Sites pros qui convertissent les visiteurs en clients. Livraison en 7-14 jours, dès 500€.',
      h1Pre: 'Web designer à ',
      h1Highlight: 'Annecy',
      h2: 'Un site qui ramène des clients. Pas juste un beau design.',
      intro: 'Je suis basé en Savoie et j\'interviens régulièrement à Annecy et autour du lac. J\'accompagne les artisans, commerçants et PME du bassin annécien qui veulent un site qui leur ramène vraiment des clients. Restaurateur, coiffeur, prestataire de services : votre site doit sortir sur Google et donner envie de vous contacter dès la première visite.',
      breadcrumb: 'Web Designer Annecy',
    },
    en: {
      name: 'Annecy',
      title: 'Web Designer Annecy France | Elie Ageron, from €500',
      description: 'Freelance web designer based in Savoie, working in the Annecy area, France. Sites that convert visitors into clients. Live in 7-14 days from €500.',
      h1Pre: 'Web designer in ',
      h1Highlight: 'Annecy',
      h2: 'A site that brings you clients. Not just a pretty design.',
      intro: 'I\'m based in Savoie and work regularly with businesses in Annecy and around the lake. I help craftsmen, shop owners and small companies in the Annecy area get a website that actually brings in clients. Restaurant, hair salon, service provider: your site needs to show up on Google and make people want to contact you on the first visit.',
      breadcrumb: 'Web Designer Annecy',
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
      description: 'Création de sites web professionnels en Haute-Savoie. Dès 500€, livraison en 7-14 jours. Web designer freelance basé en Savoie, proche du 74.',
      h1Pre: 'Création de site web en ',
      h1Highlight: 'Haute-Savoie',
      h2: 'Un site qui vous ramène des clients partout dans le 74.',
      intro: 'Basé en Savoie, juste à côté de la Haute-Savoie, j\'accompagne les artisans, commerçants, prestataires et PME du 74 dans leur présence en ligne. Annecy, Bonneville, Thonon, Cluses, Seynod : où que vous soyez dans le département, votre site doit être trouvé sur Google et transformer vos visiteurs en clients.',
      breadcrumb: 'Création Site Web Haute-Savoie',
    },
    en: {
      name: 'Haute-Savoie',
      title: 'Web Design Haute-Savoie France | Elie Ageron',
      description: 'Professional web design in Haute-Savoie, France. From €500, delivered in 7-14 days. Freelance web designer based in Savoie, next to Haute-Savoie.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Haute-Savoie',
      h2: 'A site that brings you clients across the department.',
      intro: 'Based in Savoie, right next to Haute-Savoie, I help craftsmen, retailers, service providers and small companies across the department build a strong online presence. Annecy, Bonneville, Thonon, Cluses, Seynod: wherever you are, your site needs to be found on Google and turn visitors into clients.',
      breadcrumb: 'Web Design Haute-Savoie',
    },
  },
  {
    slug: 'web-designer-savoie',
    postalCode: '73200',
    lat: 45.6756,
    lng: 6.3925,
    department: 'Savoie',
    departmentCode: 'FR-73',
    fr: {
      name: 'Albertville',
      title: 'Web Designer Savoie | Elie Ageron, dès 500€',
      description: 'Web designer freelance en Savoie, basé à Albertville. Sites pros qui convertissent les visiteurs en clients. Livraison en 7-14 jours, dès 500€.',
      h1Pre: 'Web designer en ',
      h1Highlight: 'Savoie',
      h2: 'Un site qui vous ramène des clients. Pas juste un beau design.',
      intro: 'Basé à Albertville, en Savoie, j\'accompagne les artisans, commerçants et PME de la vallée et de la Tarentaise. Albertville, Moûtiers, Ugine, Chambéry, Aix-les-Bains : votre site doit sortir sur Google et donner envie de vous contacter dès la première visite. Je le conçois pour ça, et je reste votre partenaire une fois qu\'il est en ligne.',
      breadcrumb: 'Web Designer Savoie',
    },
    en: {
      name: 'Albertville',
      title: 'Web Designer Savoie France | Elie Ageron, from €500',
      description: 'Freelance web designer in Savoie, France, based in Albertville. Sites that convert visitors into clients. Live in 7-14 days from €500.',
      h1Pre: 'Web designer in ',
      h1Highlight: 'Savoie',
      h2: 'A site that brings you clients. Not just a pretty design.',
      intro: 'Based in Albertville, in Savoie, I work with craftsmen, shop owners and small companies across the valley and the Tarentaise. Albertville, Moûtiers, Ugine, Chambéry, Aix-les-Bains: your site needs to show up on Google and make people want to reach out from the first visit. I build it for that, and I stay your partner once it is live.',
      breadcrumb: 'Web Designer Savoie',
    },
  },
];
