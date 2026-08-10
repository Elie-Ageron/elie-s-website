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
      'web-designer-savoie',
      'creation-site-web-albertville',
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
      context: [
        "Annecy est le marché le plus concurrentiel de la région, en ligne comme ailleurs. Le tourisme, le tertiaire et une population aisée y attirent beaucoup d'entreprises, et beaucoup d'agences web avec elles.",
        "Ça ne veut pas dire qu'il n'y a pas de place. Ça veut dire qu'une stratégie générique n'en a aucune. Viser une recherche large ici demande des années. Viser des recherches précises, sur une prestation nommée et un quartier ou une commune du bassin, reste tout à fait accessible.",
        "L'autre spécificité annécienne, c'est le niveau d'exigence visuelle. Un site approximatif se remarque davantage ici que dans une vallée, parce que les concurrents ont investi. Le contenu reste plus important que l'esthétique, mais le seuil d'acceptabilité est plus haut.",
      ],
      blocks: [
        {
          title: 'Viser les communes du bassin, pas seulement Annecy',
          body: "Les habitants de Poisy, Sevrier ou Épagny tapent souvent le nom de leur commune. Ces recherches sont bien moins disputées que celles portant sur Annecy, et elles amènent des clients tout aussi réels.",
        },
        {
          title: 'Se distinguer par la preuve',
          body: "Dans un marché où tout le monde affiche un beau site, ce qui départage est la preuve : réalisations récentes, avis nombreux, visage identifiable. C'est aussi ce qui coûte le moins cher à produire quand on travaille déjà bien.",
        },
        {
          title: 'La saisonnalité touristique',
          body: "Une partie de l'économie annécienne dépend de la saison estivale. Comme partout, la visibilité doit être en place avant, pas pendant, et le contenu produit l'été sert toute l'année suivante.",
        },
      ],
      social:
        "Le bassin annécien est très actif sur les réseaux, avec une audience habituée à un contenu soigné. C'est plus exigeant qu'en vallée, et c'est aussi un endroit où une entreprise qui publie régulièrement se distingue vite, parce que la plupart de ses concurrents publient par à-coups.",
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
    relatedCities: ['web-designer-annecy', 'web-designer-savoie', 'creation-site-web-albertville'],
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
      context: [
        "La Haute-Savoie n'est pas un marché homogène. Le bassin annécien, la vallée de l'Arve, le Chablais et le pays du Mont-Blanc ont des économies très différentes, et une stratégie qui marche dans l'un ne marche pas forcément dans l'autre.",
        "Ce qu'ils ont en commun, c'est une forte proportion d'entreprises de petite taille, un tourisme important et une pression foncière qui pousse beaucoup d'activités à travailler sur des zones étendues.",
        "Pour le référencement, la conséquence est claire : une page unique qui parle du département entier ne ressort nulle part. Il faut des pages par bassin ou par commune, avec du contenu réellement différent pour chacune.",
      ],
      blocks: [
        {
          title: 'Découper par bassin, pas par département',
          body: "Les gens cherchent avec le nom de leur ville ou de leur vallée. Une page Haute-Savoie sert à présenter votre zone globale, elle ne remplace pas les pages locales qui, elles, ramènent réellement du trafic.",
        },
        {
          title: 'Le décolletage et la sous-traitance',
          body: "La vallée de l'Arve concentre un tissu industriel dense où les acheteurs cherchent en ligne des capacités précises. Un site qui détaille les machines, les matières et les tolérances ressort sur des recherches très spécifiques et peu disputées.",
        },
        {
          title: 'La clientèle frontalière',
          body: "Une partie du département vit du travail en Suisse, avec des horaires décalés et des attentes de réactivité particulières. Afficher clairement vos disponibilités en soirée ou le samedi peut faire une vraie différence sur ce public.",
        },
      ],
      social:
        "La Haute-Savoie est l'un des départements où la vidéo courte fonctionne le mieux, parce que le cadre est spectaculaire et que la population est jeune et connectée. L'écueil habituel est de faire de belles images sans jamais dire ce qu'on vend ni où l'on intervient.",
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
    relatedCities: [
      'creation-site-web-albertville',
      'creation-site-web-chambery',
      'creation-site-web-moutiers',
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
      context: [
        "La Savoie tient en trois mondes qui se croisent peu : l'agglomération chambérienne et le lac du Bourget d'un côté, la vallée d'Albertville et la Tarentaise de l'autre, la Maurienne au sud. Les économies et les niveaux de concurrence n'y sont pas comparables.",
        "Je suis installé à Albertville, ce qui me place au centre de la partie montagne du département et à moins d'une heure de Chambéry. Concrètement, ça veut dire que je peux venir voir un atelier, filmer un chantier et repartir le jour même, ce qu'un prestataire lyonnais ou parisien ne fera pas.",
        "Sur la partie montagne, la concurrence en ligne reste faible et les résultats arrivent vite. Sur Chambéry et Aix-les-Bains, il faut viser des recherches plus précises et accepter un délai plus long. Je le dis avant de commencer plutôt qu'après.",
      ],
      blocks: [
        {
          title: 'Une page par ville où vous travaillez réellement',
          body: "C'est la base du référencement local en Savoie, parce que les gens cherchent avec le nom de leur commune. La condition est que chaque page dise quelque chose de vrai et de spécifique sur cette commune, sinon elle ne sert à rien.",
        },
        {
          title: 'La fiche Google avant le site',
          body: "Pour la plupart des entreprises savoyardes, la fiche Google Business rapporte plus vite que le site. Elle est gratuite, elle s'affiche au dessus des résultats classiques, et elle est souvent à moitié remplie.",
        },
        {
          title: 'Le partenariat plutôt que la livraison',
          body: "Un site livré et laissé seul se dégrade. Je préfère rester présent après la mise en ligne, pour tenir la fiche Google, ajouter des pages et alimenter les réseaux. C'est ce qui fait la différence entre un site qui coûte et un site qui rapporte.",
        },
      ],
      social:
        "La Savoie est un terrain particulièrement favorable à la vidéo courte : décor reconnaissable, forte identité locale, groupes Facebook de commune très actifs. Une entreprise qui publie deux fois par semaine des vidéos tournées sur place se distingue rapidement, parce que très peu le font dans la durée.",
      faq: [
        {
          q: 'Vous intervenez dans toute la Savoie ?',
          a: "Oui. Je suis basé à Albertville, ce qui met la Tarentaise, le Beaufortain et la combe de Savoie à moins de trente minutes, et Chambéry, Aix-les-Bains et la Maurienne à moins d'une heure.",
        },
        {
          q: 'Quels sont vos tarifs ?',
          a: "Tout est chiffré sur devis, sous 48 heures après notre échange. Les écarts entre une landing page et un site complet sont trop importants pour qu'un tarif affiché ait un sens.",
        },
        {
          q: 'Vous faites aussi les réseaux sociaux ?',
          a: "Oui, c'est mon deuxième métier autant que le premier. Je viens filmer une journée par mois, je monte, je sous-titre et je publie six à douze vidéos dans le mois sur vos comptes.",
        },
      ],
    },
  },
];
