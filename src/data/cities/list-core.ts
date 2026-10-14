import type { CityData } from './types';

/**
 * Pages historiques : departement, bassin annecien et Haute-Savoie.
 * Elles couvrent des zones plutot que des communes.
 */
export const coreCities: CityData[] = [
  {
    slug: 'web-designer-annecy',
    postalCode: '74000',
    lat: 45.8992,
    lng: 6.1294,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'city',
    relatedCities: [
      'creation-site-web-haute-savoie',
      'creation-site-web-rumilly',
      'creation-site-web-cluses',
      'web-designer-savoie',
    ],
    fr: {
      name: 'Annecy',
      title: 'Web Designer Annecy | Elie Ageron',
      description:
        "Web designer basé en Savoie, j'interviens à Annecy. Sites pros qui convertissent les visiteurs en clients. Livraison en 7-14 jours, sur devis.",
      h1Pre: 'Web designer à ',
      h1Highlight: 'Annecy',
      h2: 'Un site qui ramène des clients. Pas juste un beau design.',
      intro:
        "Je suis basé en Savoie et j'interviens régulièrement à Annecy et autour du lac. J'accompagne les artisans, commerçants et PME du bassin annécien qui veulent un site qui leur ramène vraiment des clients. Restaurateur, coiffeur, prestataire de services : votre site doit sortir sur Google et donner envie de vous contacter dès la première visite.",
      breadcrumb: 'Web Designer Annecy',
    },
    en: {
      name: 'Annecy',
      title: 'Web Designer Annecy France | Elie Ageron',
      description:
        'Web designer based in Savoie, working in the Annecy area. Sites that convert visitors into clients. Live in 7-14 days, custom quote.',
      h1Pre: 'Web designer in ',
      h1Highlight: 'Annecy',
      h2: 'A site that brings you clients. Not just a pretty design.',
      intro:
        "I'm based in Savoie and work regularly with businesses in Annecy and around the lake. I help craftsmen, shop owners and small companies in the Annecy area get a website that actually brings in clients. Restaurant, hair salon, service provider: your site needs to show up on Google and make people want to contact you on the first visit.",
      breadcrumb: 'Web Designer Annecy',
    },
    depthFr: {
      travel: 'Environ quarante-cinq minutes depuis Albertville.',
      nearby: [
        'Annecy-le-Vieux',
        'Seynod',
        'Cran-Gevrier',
        'Meythet',
        'Poisy',
        'Épagny',
        'Sevrier',
        'Veyrier-du-Lac',
        'Faverges-Seythenex',
      ],
      sectors: [
        'Commerces et restauration',
        'Tourisme et hébergement',
        'Bien-être et santé',
        'Bâtiment et rénovation',
        'Services aux entreprises',
      ],
      socialPage: 'community-manager-annecy',
      points: [
        {
          titre: 'Le marché le plus disputé de la région',
          texte: "Tourisme, tertiaire, population aisée : beaucoup d'entreprises, et beaucoup d'agences web avec elles. Une stratégie générique n'y a aucune place.",
        },
        {
          titre: 'Viser les communes du bassin',
          texte: 'À Poisy, Sevrier ou Épagny, les gens tapent le nom de leur commune. Ces recherches sont bien moins disputées que celles sur Annecy.',
          article: 'trouver-mots-cles-clients',
        },
        {
          titre: 'Un site approximatif se voit plus ici',
          texte: "Les concurrents annéciens ont investi. Le contenu passe toujours avant l'esthétique, mais le niveau attendu est plus haut qu'en vallée.",
        },
        {
          titre: 'Se distinguer par la preuve',
          texte: "Réalisations récentes, avis nombreux, un visage qu'on reconnaît. Quand tout le monde a un beau site, c'est ce qui départage.",
          article: 'concurrent-devant-moi-google',
        },
      ],
      social:
        'Le public annécien est habitué à un contenu soigné. La plupart des entreprises publient par à-coups, donc celle qui publie chaque semaine se distingue vite.',
      faq: [
        {
          q: 'Vous vous déplacez à Annecy ?',
          a: "Oui, comptez environ quarante-cinq minutes depuis Albertville. Le rendez-vous de démarrage et les tournages se font sur place.",
        },
        {
          q: 'Le marché annécien est-il trop concurrentiel ?',
          a: "Sur les recherches génériques, oui, et je le dis avant de commencer. Sur des recherches précises liées à une prestation ou à une commune du bassin, il reste beaucoup de place.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-haute-savoie',
    postalCode: '74000',
    lat: 45.8992,
    lng: 6.1294,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'area',
    relatedCities: [
      'web-designer-annecy',
      'creation-site-web-cluses',
      'creation-site-web-thonon-les-bains',
      'creation-site-web-sallanches',
      'creation-site-web-rumilly',
      'web-designer-savoie',
    ],
    fr: {
      name: 'Haute-Savoie',
      title: 'Création Site Web Haute-Savoie | Elie Ageron',
      description:
        'Création de sites web professionnels en Haute-Savoie. Sur devis, livraison en 7-14 jours. Web designer basé en Savoie, proche du 74.',
      h1Pre: 'Création de site web en ',
      h1Highlight: 'Haute-Savoie',
      h2: 'Un site qui vous ramène des clients partout dans le 74.',
      intro:
        "Basé en Savoie, juste à côté de la Haute-Savoie, j'accompagne les artisans, commerçants, prestataires et PME du 74 dans leur présence en ligne. Annecy, Bonneville, Thonon, Cluses, Seynod : où que vous soyez dans le département, votre site doit être trouvé sur Google et transformer vos visiteurs en clients.",
      breadcrumb: 'Création Site Web Haute-Savoie',
    },
    en: {
      name: 'Haute-Savoie',
      title: 'Web Design Haute-Savoie France | Elie Ageron',
      description:
        'Professional web design in Haute-Savoie, France. Custom quote, delivered in 7-14 days. Web designer based in Savoie, next to Haute-Savoie.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Haute-Savoie',
      h2: 'A site that brings you clients anywhere in the 74.',
      intro:
        'Based in Savoie, right next to Haute-Savoie, I work with craftsmen, shop owners, service providers and small companies across the 74. Annecy, Bonneville, Thonon, Cluses, Seynod: wherever you are in the department, your site needs to be found on Google and turn visitors into clients.',
      breadcrumb: 'Création Site Web Haute-Savoie',
    },
    depthFr: {
      travel: 'Variable selon le secteur, entre quarante minutes et une heure trente.',
      nearby: ['Annecy', 'Thonon-les-Bains', 'Bonneville', 'Cluses', 'Sallanches', 'Rumilly', 'La Roche-sur-Foron'],
      sectors: [
        'Tourisme et montagne',
        'Décolletage et industrie',
        'Bâtiment et rénovation',
        'Commerces et restauration',
        'Services frontaliers',
      ],
      socialPage: 'gestion-reseaux-sociaux-haute-savoie',
      points: [
        {
          titre: 'Quatre bassins qui ne se ressemblent pas',
          texte: "Le bassin annécien, la vallée de l'Arve, le Chablais et le pays du Mont-Blanc. Ce qui marche dans l'un ne marche pas forcément dans l'autre.",
        },
        {
          titre: 'Une page par bassin, pas une page pour le 74',
          texte: 'Les gens cherchent avec le nom de leur ville ou de leur vallée. Une page départementale présente votre zone, elle ne remplace pas les pages locales.',
          article: 'seo-explique-a-un-artisan',
        },
        {
          titre: 'La sous-traitance se cherche en ligne',
          texte: "Dans l'Arve, les acheteurs cherchent des capacités précises. Un site qui détaille vos machines, vos matières et vos tolérances répond à ces recherches.",
          article: 'demarcher-les-professionnels',
        },
        {
          titre: 'La clientèle frontalière décide le soir',
          texte: 'Une partie du département travaille en Suisse. Afficher vos disponibilités en soirée ou le samedi fait une vraie différence sur ce public.',
        },
      ],
      social:
        "La vidéo courte marche particulièrement bien ici : le cadre est spectaculaire et la population jeune. Le piège, c'est de faire de belles images sans dire ce qu'on vend.",
      faq: [
        {
          q: 'Vous intervenez dans tout le département ?',
          a: "Oui, avec des temps de trajet variables. Le bassin annécien et Rumilly sont proches, le Chablais et le pays du Mont-Blanc demandent plus de route, ce qui se gère en groupant les rendez-vous.",
        },
        {
          q: 'Faut-il une page par ville en Haute-Savoie ?',
          a: "Pour les villes où vous travaillez réellement, oui. Le département est trop vaste et trop hétérogène pour qu'une page unique ressorte sur les recherches locales.",
        },
      ],
    },
  },
  {
    slug: 'web-designer-savoie',
    postalCode: '73200',
    lat: 45.6756,
    lng: 6.3925,
    department: 'Savoie',
    departmentCode: 'FR-73',
    scope: 'area',
    /* ⚠️ La page departement est un point d'entree : elle doit mener aux
       vallees qu'aucune autre page ne mene. Moutiers est deja propose par
       Albertville, la Maurienne ne l'etait par personne, et
       `npm run check:maillage` l'a signalee orpheline le 17 septembre 2026.
       Verifier avec ce controle avant de retoucher cette liste : elle est
       limitee a trois, donc une entree ajoutee en pousse une dehors. */
    relatedCities: [
      'creation-site-web-albertville',
      'creation-site-web-chambery',
      'creation-site-web-saint-jean-de-maurienne',
    ],
    fr: {
      name: 'Albertville',
      title: 'Web Designer Savoie | Elie Ageron',
      description:
        'Web designer en Savoie, basé à Albertville. Sites pros qui convertissent les visiteurs en clients. Livraison en 7-14 jours, sur devis.',
      h1Pre: 'Web designer en ',
      h1Highlight: 'Savoie',
      h2: 'Un site qui vous ramène des clients. Pas juste un beau design.',
      intro:
        "Basé à Albertville, en Savoie, j'accompagne les artisans, commerçants et PME du département. Albertville, Chambéry, Aix-les-Bains, Moûtiers, Ugine, Saint-Jean-de-Maurienne : votre site doit sortir sur Google et donner envie de vous contacter dès la première visite. Je le conçois pour ça, et je reste votre partenaire une fois qu'il est en ligne.",
      breadcrumb: 'Web Designer Savoie',
    },
    en: {
      name: 'Albertville',
      title: 'Web Designer Savoie France | Elie Ageron',
      description:
        'Web designer in Savoie, based in Albertville. Sites that convert visitors into clients. Live in 7-14 days, custom quote.',
      h1Pre: 'Web designer in ',
      h1Highlight: 'Savoie',
      h2: 'A site that brings you clients. Not just a pretty design.',
      intro:
        'Based in Albertville, in Savoie, I work with craftsmen, shop owners and small companies across the department. Albertville, Chambéry, Aix-les-Bains, Moûtiers, Ugine, Saint-Jean-de-Maurienne: your site needs to show up on Google and make people want to reach out from the first visit. I build it for that, and I stay your partner once it is live.',
      breadcrumb: 'Web Designer Savoie',
    },
    depthFr: {
      travel: 'Base à Albertville, déplacements dans tout le département.',
      nearby: [
        'Albertville',
        'Chambéry',
        'Aix-les-Bains',
        'Moûtiers',
        'Ugine',
        'Bourg-Saint-Maurice',
        'Saint-Jean-de-Maurienne',
        'La Ravoire',
      ],
      sectors: [
        'Artisans du bâtiment',
        'Commerces et restauration',
        'Tourisme et montagne',
        'Santé et bien-être',
        'Industrie et sous-traitance',
      ],
      socialPage: 'gestion-reseaux-sociaux-savoie',
      points: [
        {
          titre: 'Trois Savoie qui se croisent peu',
          texte: "Chambéry et le lac, la vallée d'Albertville et la Tarentaise, puis la Maurienne. Les économies et la concurrence n'y sont pas comparables.",
        },
        {
          titre: 'Je viens voir, et je repars le jour même',
          texte: "Installé à Albertville, je suis à moins d'une heure de Chambéry. Je peux voir un atelier et filmer un chantier dans la journée.",
        },
        {
          titre: 'La fiche Google avant le site',
          texte: "Gratuite, affichée au dessus des résultats, souvent à moitié remplie. Pour la plupart des entreprises savoyardes, c'est elle qui rapporte le plus vite.",
          article: 'difference-site-fiche-google-reseaux',
        },
        {
          titre: 'Je reste après la mise en ligne',
          texte: 'Un site laissé seul se dégrade. Je peux tenir votre fiche Google, ajouter des pages et alimenter vos réseaux dans la durée.',
        },
      ],
      social:
        "Décor reconnaissable, identité locale forte, groupes Facebook de commune très actifs : la Savoie se prête à la vidéo courte. Très peu d'entreprises publient dans la durée, celles qui le font se voient.",
      faq: [
        {
          q: 'Vous intervenez dans toute la Savoie ?',
          a: "Oui. Je suis basé à Albertville, ce qui met la Tarentaise, le Beaufortain et la combe de Savoie à moins de trente minutes, et Chambéry, Aix-les-Bains et la Maurienne à moins d'une heure.",
        },
        {
          q: 'Quels sont vos tarifs ?',
          a: "Une page dès 500 €, un site vitrine dès 1 500 €, un pack lancement dès 3 500 €. Le devis exact arrive sous 48 heures après notre échange : il bouge avec le nombre de pages et les textes à écrire.",
        },
        {
          q: 'Vous faites aussi les réseaux sociaux ?',
          a: "Oui, c'est mon deuxième métier autant que le premier. Je viens filmer une journée par mois, je monte, je sous-titre et je publie huit vidéos dans le mois sur vos comptes.",
        },
      ],
    },
  },
];
