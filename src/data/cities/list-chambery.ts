import type { CityData } from './types';

/**
 * Agglomeration chamberienne, lac du Bourget et Maurienne.
 * Marches plus concurrentiels que la vallee d'Albertville, mais accessibles
 * sur des requetes precises.
 */
export const chamberyCities: CityData[] = [
  {
    slug: 'creation-site-web-chambery',
    postalCode: '73000',
    lat: 45.5646,
    lng: 5.9178,
    department: 'Savoie',
    departmentCode: 'FR-73',
    scope: 'city',
    relatedCities: [
      'creation-site-web-aix-les-bains',
      'creation-site-web-la-ravoire',
      'web-designer-savoie',
    ],
    fr: {
      name: 'Chambéry',
      title: 'Création Site Web Chambéry | Elie Ageron',
      description:
        "Web designer en Savoie, j'interviens à Chambéry. Sites qui convertissent, référencement local et vidéos pour vos réseaux. Devis sous 48h.",
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Chambéry',
      h2: 'Un marché plus disputé, donc des choix plus précis.',
      intro:
        "Chambéry est la plus grosse agglomération de Savoie, et c'est aussi celle où la concurrence en ligne est la plus réelle. Sortir sur une recherche générique y demande du temps. Sortir sur les recherches précises que tapent vos vrais clients est beaucoup plus accessible, et c'est là que je travaille.",
      breadcrumb: 'Création Site Web Chambéry',
    },
    en: {
      name: 'Chambéry',
      title: 'Web Design Chambéry Savoie | Elie Ageron',
      description:
        'Web designer in Savoie working in Chambéry. Sites that convert, local SEO and social media video. Quote within 48 hours.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Chambéry',
      h2: 'A more competitive market, so sharper choices.',
      intro:
        'Chambéry is the largest urban area in Savoie, and also the one with real online competition. Ranking on a generic search takes time. Ranking on the precise searches your actual clients type is far more achievable, and that is where I work.',
      breadcrumb: 'Web Design Chambéry',
    },
    depthFr: {
      travel: 'Environ quarante-cinq minutes depuis Albertville.',
      nearby: [
        'La Motte-Servolex',
        'Bassens',
        'Cognin',
        'Jacob-Bellecombette',
        'Saint-Alban-Leysse',
        'Barberaz',
        'Sonnaz',
        'Montmélian',
      ],
      sectors: [
        'Professions libérales et santé',
        'Conseil et services aux entreprises',
        'Commerces de centre-ville',
        'Bâtiment et rénovation',
        'Restauration',
        'Bien-être et thérapies',
      ],
      socialPage: 'community-manager-chambery',
      points: [
        {
          titre: 'Le marché le plus disputé de Savoie',
          texte: 'Sur une recherche large, votre métier plus Chambéry, vous affrontez des annuaires nationaux et des concurrents installés depuis dix ans.',
        },
        {
          titre: 'Les recherches précises restent libres',
          texte: 'Une prestation nommée, un quartier, un type de client. Ces recherches amènent moins de monde, mais des gens prêts à appeler.',
          article: 'trouver-mots-cles-clients',
        },
        {
          titre: 'Une page par prestation',
          texte: 'Une page qui liste huit prestations en trois lignes ne ressort sur aucune. Une page par prestation donne sa chance à chacune.',
          article: 'page-service-qui-ressort',
        },
        {
          titre: 'Sortir de la comparaison par le prix',
          texte: 'Vos réalisations, votre façon de travailler, votre visage. Sans eux, le client ne compare que le tarif.',
        },
      ],
      social:
        'À Chambéry, on vous compare à trois concurrents. Un compte à jour, avec des réalisations récentes et un visage, fait souvent la différence au dernier moment.',
      faq: [
        {
          q: 'Vous vous déplacez à Chambéry ?',
          a: "Oui, régulièrement. Comptez environ quarante-cinq minutes depuis Albertville. Les rendez-vous de démarrage se font sur place, la suite peut se gérer à distance si vous préférez.",
        },
        {
          q: 'Combien de temps pour ressortir sur Google à Chambéry ?',
          a: "Sur des recherches précises, comptez trois à six mois de travail régulier. Sur une recherche générique très disputée, c'est un chantier de plus longue haleine, et je le dis avant de commencer plutôt qu'après.",
        },
        {
          q: 'Travaillez-vous avec des professions libérales ?',
          a: "Oui, c'est une part importante du tissu chambérien. Les contraintes déontologiques de certaines professions changent ce qu'on peut écrire et montrer, et j'en tiens compte dès la conception.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-aix-les-bains',
    postalCode: '73100',
    lat: 45.6885,
    lng: 5.9152,
    department: 'Savoie',
    departmentCode: 'FR-73',
    scope: 'city',
    relatedCities: [
      'creation-site-web-chambery',
      'creation-site-web-la-ravoire',
      'web-designer-savoie',
    ],
    fr: {
      name: 'Aix-les-Bains',
      title: 'Création Site Web Aix-les-Bains | Elie Ageron',
      description:
        'Web designer en Savoie pour les entreprises d\'Aix-les-Bains. Bien-être, thérapies, hébergement, commerces : sites et vidéos qui convertissent.',
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Aix-les-Bains',
      h2: 'Une ville où l\'on vend de la confiance.',
      intro:
        "Thermalisme, bien-être, thérapies, hébergement : une bonne partie de l'économie aixoise repose sur des prestations où le client doit avoir confiance avant de réserver. Ça change complètement ce qu'il faut mettre sur un site, et ça donne beaucoup de valeur à la vidéo.",
      breadcrumb: 'Création Site Web Aix-les-Bains',
    },
    en: {
      name: 'Aix-les-Bains',
      title: 'Web Design Aix-les-Bains | Elie Ageron',
      description:
        'Web designer in Savoie for businesses in Aix-les-Bains. Wellness, therapy, accommodation and retail: sites and video that convert.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Aix-les-Bains',
      h2: 'A town where you sell trust.',
      intro:
        'Spa treatments, wellness, therapy, accommodation: much of the Aix economy rests on services the client must trust before booking. That changes what belongs on a website, and it makes video unusually valuable.',
      breadcrumb: 'Web Design Aix-les-Bains',
    },
    depthFr: {
      travel: 'Environ cinquante minutes depuis Albertville.',
      nearby: [
        'Grésy-sur-Aix',
        'Drumettaz-Clarafond',
        'Mouxy',
        'Tresserve',
        'Brison-Saint-Innocent',
        'Le Bourget-du-Lac',
        'Viviers-du-Lac',
      ],
      sectors: [
        'Thérapies et bien-être',
        'Hébergement et locations',
        'Restauration et commerces',
        'Sport et activités nautiques',
        'Santé et paramédical',
      ],
      socialPage: 'community-manager-aix-les-bains',
      points: [
        {
          titre: 'Ici, on vend de la confiance',
          texte: "Un soin, une séance, un séjour : le client ne peut pas essayer avant. Il cherche d'abord à savoir s'il peut vous faire confiance.",
        },
        {
          titre: 'Montrer le lieu et la personne',
          texte: "Des photos réelles du cabinet, un portrait, quelques mots sur votre parcours. C'est ce qui fait passer de la curiosité au rendez-vous.",
          article: 'therapeute-reseaux-sociaux-clients',
        },
        {
          titre: 'Expliquer le déroulé',
          texte: "Combien de temps, ce qui se passe, ce qu'il faut apporter. Ça paraît évident pour vous, et c'est exactement ce qui retient le client.",
        },
        {
          titre: "Les avis pèsent plus lourd qu'ailleurs",
          texte: "Sur une prestation qui touche au corps ou au bien-être, une routine simple pour collecter des avis rapporte souvent plus qu'une refonte.",
          article: 'obtenir-avis-google',
        },
      ],
      social:
        "Un métier du bien-être se montre mal par écrit et très bien en vidéo. Une séance, un geste, la personne qui reçoit : l'image lève le doute que le texte laisse.",
      faq: [
        {
          q: 'Vous travaillez avec des thérapeutes et des praticiens ?',
          a: "Oui, c'est une part importante de mes clients. Ces métiers ont des contraintes de vocabulaire et de promesses qu'il faut respecter, et un site mal formulé peut poser un vrai problème. J'en tiens compte dès la rédaction.",
        },
        {
          q: 'Comment être visible auprès des curistes et des visiteurs ?',
          a: "En travaillant les recherches faites sur place et à l'avance, et en soignant la fiche Google, qui est le premier réflexe de quelqu'un qui ne connaît pas la ville. Le site prend le relais pour rassurer.",
        },
        {
          q: 'Vous vous déplacez à Aix-les-Bains ?',
          a: "Oui, comptez environ cinquante minutes depuis Albertville. Le rendez-vous de départ et les tournages se font sur place.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-la-ravoire',
    postalCode: '73490',
    lat: 45.557,
    lng: 5.9528,
    department: 'Savoie',
    departmentCode: 'FR-73',
    scope: 'city',
    relatedCities: [
      'creation-site-web-chambery',
      'creation-site-web-aix-les-bains',
      'web-designer-savoie',
    ],
    fr: {
      name: 'La Ravoire',
      title: 'Création Site Web La Ravoire | Elie Ageron',
      description:
        "Web designer en Savoie pour les commerces et artisans de La Ravoire et de la couronne est de Chambéry. Sites, fiche Google et vidéos.",
      h1Pre: 'Création de site web à ',
      h1Highlight: 'La Ravoire',
      h2: 'La couronne de Chambéry, avec ses propres recherches.',
      intro:
        "La Ravoire, Barberaz, Challes-les-Eaux, Saint-Baldoph : la couronne est de Chambéry a son propre tissu de commerces et d'artisans. Et surtout, ses habitants tapent le nom de leur commune, pas celui de Chambéry. C'est une opportunité que peu d'entreprises exploitent.",
      breadcrumb: 'Création Site Web La Ravoire',
    },
    en: {
      name: 'La Ravoire',
      title: 'Web Design La Ravoire Savoie | Elie Ageron',
      description:
        'Web designer in Savoie for shops and tradespeople in La Ravoire and the eastern Chambéry belt. Websites, Google profile and video.',
      h1Pre: 'Web design in ',
      h1Highlight: 'La Ravoire',
      h2: 'The Chambéry belt, with its own searches.',
      intro:
        'La Ravoire, Barberaz, Challes-les-Eaux, Saint-Baldoph: the eastern Chambéry belt has its own fabric of shops and tradespeople. More importantly, residents type their own commune name, not Chambéry. Few businesses take advantage of that.',
      breadcrumb: 'Web Design La Ravoire',
    },
    depthFr: {
      travel: 'Environ quarante-cinq minutes depuis Albertville.',
      nearby: [
        'Barberaz',
        'Challes-les-Eaux',
        'Saint-Baldoph',
        'Saint-Jeoire-Prieuré',
        'Bassens',
        'Saint-Alban-Leysse',
        'Montagnole',
      ],
      sectors: [
        'Commerces et zones d\'activité',
        'Artisans du bâtiment',
        'Services à la personne',
        'Restauration',
        'Santé de proximité',
      ],
      points: [
        {
          titre: 'Les gens tapent le nom de leur commune',
          texte: "Quelqu'un à Barberaz cherche un artisan à Barberaz, pas à Chambéry. Presque toutes les entreprises du secteur ne parlent que de Chambéry.",
        },
        {
          titre: 'Nommer les communes, une par une',
          texte: 'La liste des communes où vous allez, écrite sur le site et sur la fiche Google. Dix minutes de travail, et un effet qui dure.',
          article: 'zone-de-chalandise-sans-local',
        },
        {
          titre: "Une zone de service plutôt qu'une adresse",
          texte: 'Sans local ouvert au public, déclarez une zone sur votre fiche Google. Les communes réelles, pas le département entier.',
          article: 'creer-fiche-google-business',
        },
        {
          titre: 'Trois ou quatre pages qui répondent',
          texte: 'Ce que vous faites, où vous allez, combien ça coûte à peu près, comment on vous joint. Pour un artisan de proximité, ça suffit.',
        },
      ],
      social:
        'Dans la couronne chambérienne, les groupes Facebook de commune sont le premier réflexe pour trouver un artisan. Une vidéo de chantier y circule vite, parce que les gens reconnaissent la rue.',
      faq: [
        {
          q: 'Pourquoi cibler La Ravoire plutôt que Chambéry ?',
          a: "Parce que les habitants tapent le nom de leur commune et que presque personne ne travaille ces recherches. Vous pouvez viser les deux, mais la commune donne des résultats bien plus vite.",
        },
        {
          q: 'Vous vous déplacez dans la couronne chambérienne ?',
          a: "Oui, comptez environ quarante-cinq minutes depuis Albertville. Le premier rendez-vous se fait sur place, et les tournages aussi.",
        },
        {
          q: 'Faut-il une page par commune sur mon site ?',
          a: "Seulement pour les communes où vous travaillez réellement et où vous pouvez écrire quelque chose de spécifique. Dupliquer une page en changeant le nom ne fonctionne pas et peut vous desservir.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-saint-jean-de-maurienne',
    postalCode: '73300',
    lat: 45.2761,
    lng: 6.3489,
    department: 'Savoie',
    departmentCode: 'FR-73',
    scope: 'city',
    relatedCities: [
      'creation-site-web-chambery',
      'creation-site-web-albertville',
      'web-designer-savoie',
    ],
    fr: {
      name: 'Saint-Jean-de-Maurienne',
      title: 'Site Web Saint-Jean-de-Maurienne | Elie Ageron',
      description:
        'Web designer en Savoie pour les entreprises de Maurienne. Sites professionnels, référencement local et contenu vidéo pour vos réseaux.',
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Saint-Jean-de-Maurienne',
      h2: 'Une vallée industrielle, sportive et en chantier.',
      intro:
        "La Maurienne a trois économies qui se superposent : l'industrie, le tourisme de montagne et les grands chantiers d'infrastructure. Les entreprises d'ici travaillent souvent pour ces trois mondes à la fois, et leur site doit pouvoir parler aux trois.",
      breadcrumb: 'Site Web Saint-Jean-de-Maurienne',
    },
    en: {
      name: 'Saint-Jean-de-Maurienne',
      title: 'Web Design Saint-Jean-de-Maurienne | Elie Ageron',
      description:
        'Web designer in Savoie for Maurienne valley businesses. Professional websites, local SEO and short-form video for social media.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Saint-Jean-de-Maurienne',
      h2: 'An industrial, sporting valley under construction.',
      intro:
        'The Maurienne has three overlapping economies: industry, mountain tourism and major infrastructure works. Local businesses often serve all three, and their website has to speak to all three.',
      breadcrumb: 'Web Design Saint-Jean-de-Maurienne',
    },
    depthFr: {
      travel: 'Environ une heure depuis Albertville.',
      nearby: [
        'La Chambre',
        'Saint-Michel-de-Maurienne',
        'Villargondran',
        'Fontcouverte-la-Toussuire',
        'Saint-Sorlin-d\'Arves',
        'Valloire',
        'Modane',
      ],
      sectors: [
        'Industrie et sous-traitance',
        'Bâtiment et travaux publics',
        'Cyclisme et sports de montagne',
        'Hébergement et restauration',
        'Commerces de vallée',
      ],
      points: [
        {
          titre: 'Trois économies dans la même vallée',
          texte: "L'industrie, la montagne et les grands chantiers. Vos clients viennent souvent des trois, et ils ne cherchent pas avec les mêmes mots.",
        },
        {
          titre: 'Une page pour les pros, une pour les particuliers',
          texte: "Le vocabulaire, les preuves et les arguments n'ont rien à voir. Une page qui mélange les deux affaiblit les deux messages.",
        },
        {
          titre: 'Les acheteurs industriels cherchent sur Google',
          texte: 'Un site qui détaille vos capacités, vos machines et vos certifications vous rend trouvable sur des recherches précises et peu disputées.',
          article: 'demarcher-les-professionnels',
        },
        {
          titre: "Les cyclistes réservent l'été dès l'hiver",
          texte: "La clientèle des cols prépare son séjour des mois à l'avance, et depuis loin. Votre visibilité doit exister en hiver.",
          article: 'entreprise-saisonniere-communication',
        },
      ],
      social:
        'Autour des cols, le décor se reconnaît tout de suite. Pour une entreprise industrielle, trente secondes de savoir-faire intéressent à la fois les clients et les candidats.',
      faq: [
        {
          q: 'Vous vous déplacez en Maurienne ?',
          a: "Oui, comptez environ une heure depuis Albertville. C'est un déplacement que je fais pour le rendez-vous de démarrage et pour les tournages, le suivi peut ensuite se faire à distance.",
        },
        {
          q: 'Un site sert-il à trouver des clients industriels ?',
          a: "Oui, et c'est souvent sous-estimé. Les acheteurs cherchent en ligne des sous-traitants disposant de capacités précises. Un site qui détaille ces capacités ressort sur des recherches très ciblées.",
        },
        {
          q: 'Comment toucher la clientèle cycliste estivale ?',
          a: "En travaillant les recherches liées aux cols, aux itinéraires et aux prestations plutôt qu'à la commune, et en étant visible dès l'hiver, quand les séjours se préparent.",
        },
      ],
    },
  },
];
