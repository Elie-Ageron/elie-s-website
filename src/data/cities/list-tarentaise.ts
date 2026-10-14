import type { CityData } from './types';

/**
 * Bassin d'Albertville et Tarentaise. Zone de deplacement quotidien,
 * ou le tournage sur place ne demande aucune logistique particuliere.
 */
export const tarentaiseCities: CityData[] = [
  {
    slug: 'creation-site-web-albertville',
    postalCode: '73200',
    lat: 45.6756,
    lng: 6.3925,
    department: 'Savoie',
    departmentCode: 'FR-73',
    scope: 'city',
    relatedCities: ['creation-site-web-ugine', 'creation-site-web-moutiers', 'web-designer-savoie'],
    fr: {
      name: 'Albertville',
      title: 'Création Site Internet Albertville | Elie Ageron',
      description:
        "Création de site internet à Albertville, une page dès 500 €. Je passe voir votre atelier, devis sous 48 h après notre échange.",
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Albertville',
      h2: "Je suis installé ici, pas à trois heures de route.",
      intro:
        "J'habite et je travaille à Albertville. Quand un client de la vallée m'appelle, je peux passer le voir dans la semaine, voir son atelier, filmer son chantier et repartir avec de quoi alimenter ses réseaux pendant un mois. C'est la différence entre un prestataire à distance et quelqu'un du coin.",
      breadcrumb: 'Création Site Web Albertville',
    },
    en: {
      name: 'Albertville',
      title: 'Web Design Albertville Savoie | Elie Ageron',
      description:
        'Web designer based in Albertville, Savoie. Websites that rank on Google and short videos for your social accounts. On-site meetings.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Albertville',
      h2: 'I am based here, not three hours away.',
      intro:
        'I live and work in Albertville. When a client from the valley calls, I can visit within the week, see the workshop, film the job site and leave with a month of social media content. That is the difference between a remote supplier and someone local.',
      breadcrumb: 'Web Design Albertville',
    },
    depthFr: {
      travel: 'Sur place. Je peux passer dans la semaine.',
      nearby: [
        'Gilly-sur-Isère',
        'Tours-en-Savoie',
        'Grignon',
        'Pallud',
        'Venthon',
        'Mercury',
        'Frontenex',
        'Grésy-sur-Isère',
        'Queige',
        'Beaufort',
      ],
      sectors: [
        'Artisans du bâtiment',
        'Commerces du centre et de Conflans',
        'Restauration',
        'Prestataires de services aux stations',
        'Santé et bien-être',
        'Sport et montagne',
      ],
      socialPage: 'community-manager-albertville',
      points: [
        {
          titre: 'Je passe vous voir dans la semaine',
          texte: "J'habite Albertville. Le premier rendez-vous se fait dans votre atelier ou votre boutique, sans facturation et sans engagement.",
        },
        {
          titre: 'Vos clients viennent de toute la vallée',
          texte: 'Ils arrivent de la Tarentaise, du Beaufortain ou de la plaine. Votre site et votre fiche Google disent où vous intervenez.',
          article: 'creer-fiche-google-business',
        },
        {
          titre: 'Le bouche à oreille ne touche pas les nouveaux',
          texte: "Quelqu'un qui vient d'emménager cherche votre métier sur Google. S'il ne vous trouve pas, il appelle un concurrent de Chambéry.",
          article: 'site-web-artisan',
        },
        {
          titre: 'On lance tout avant la saison',
          texte: "Un site mis en ligne en décembre arrive trop tard pour l'hiver. Le travail se fait pendant les mois creux.",
        },
      ],
      social:
        "Ici, les groupes Facebook locaux font le bouche à oreille. Une vidéo qui montre votre vrai travail circule, parce que les gens partagent ce qu'ils reconnaissent.",
      faq: [
        {
          q: 'Vous vous déplacez à Albertville et autour ?',
          a: "Oui, je suis installé à Albertville. Je me déplace sans supplément dans tout le bassin, de Frontenex à Beaufort en passant par Ugine, et plus loin en Tarentaise selon les projets.",
        },
        {
          q: 'Combien coûte un site pour une entreprise locale ?',
          a: "Une page dès 500 €, un site vitrine dès 1 500 €, un pack lancement dès 3 500 €. Le devis exact arrive sous 48 heures après notre échange, et il est ferme.",
        },
        {
          q: 'Vous travaillez avec des entreprises saisonnières ?',
          a: "Régulièrement. La contrainte principale est le calendrier : il faut lancer le travail de visibilité plusieurs mois avant la saison visée, sinon les résultats arrivent après.",
        },
        {
          q: 'Quelle différence avec une agence web ?',
          a: "Je suis web designer indépendant, installé à Albertville. Il n'y a pas de commercial entre nous : celui qui vient voir votre atelier est celui qui construit le site, et qui peut ensuite le faire vivre avec vos réseaux sociaux.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-ugine',
    postalCode: '73400',
    lat: 45.7461,
    lng: 6.4157,
    department: 'Savoie',
    departmentCode: 'FR-73',
    scope: 'city',
    relatedCities: [
      'creation-site-web-albertville',
      'creation-site-web-moutiers',
      'creation-site-web-haute-savoie',
    ],
    fr: {
      name: 'Ugine',
      title: 'Création Site Web Ugine | Elie Ageron',
      description:
        "Web designer basé à Albertville, à quinze minutes d'Ugine. Sites professionnels et vidéos pour vos réseaux. Devis sous 48h.",
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Ugine',
      h2: 'Quinze minutes de route, et je suis chez vous.',
      intro:
        "Ugine est à un quart d'heure de mon bureau d'Albertville. J'y accompagne des artisans, des commerçants et des prestataires qui travaillent aussi bien dans la vallée que vers le Val d'Arly. Un site qui vous rend trouvable, et si vous le voulez, des vidéos tournées sur place chaque mois.",
      breadcrumb: 'Création Site Web Ugine',
    },
    en: {
      name: 'Ugine',
      title: 'Web Design Ugine Savoie | Elie Ageron',
      description:
        'Web designer based in Albertville, fifteen minutes from Ugine. Professional websites and social media video. Quote within 48h.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Ugine',
      h2: 'Fifteen minutes away, and I am at your door.',
      intro:
        "Ugine is a quarter of an hour from my desk in Albertville. I work with craftsmen, shop owners and service providers across the valley and up towards the Val d'Arly. A website that makes you findable, and if you want it, videos filmed on site every month.",
      breadcrumb: 'Web Design Ugine',
    },
    depthFr: {
      travel: 'Environ quinze minutes depuis Albertville.',
      nearby: ['Marthod', 'Thénésol', 'Césarches', 'Flumet', 'Crest-Voland', 'Notre-Dame-de-Bellecombe', 'Faverges'],
      sectors: [
        'Artisans et sous-traitance industrielle',
        'Commerces de proximité',
        'Métiers du bâtiment',
        'Services à la personne',
        'Activités de montagne',
      ],
      points: [
        {
          titre: 'Peu de concurrence en ligne à Ugine',
          texte: "Sur une commune de cette taille, peu d'entreprises ont une fiche Google bien remplie et un site clair. Celles qui les ont se remarquent.",
          article: 'creer-fiche-google-business',
        },
        {
          titre: 'Les nouveaux arrivants ne connaissent personne',
          texte: "Nouveaux habitants, résidences secondaires, saisonniers : ils cherchent sur leur téléphone. Si vous n'y êtes pas, ils appellent quelqu'un d'Albertville.",
        },
        {
          titre: "Le Val d'Arly se cherche commune par commune",
          texte: "Quelqu'un à Flumet ne tape pas Ugine. Si vous montez travailler vers Crest-Voland ou Notre-Dame-de-Bellecombe, votre site doit le dire.",
          article: 'zone-de-chalandise-sans-local',
        },
        {
          titre: 'Trois à cinq pages suffisent',
          texte: "Ce que vous faites, comment ça se passe, vos réalisations, comment vous joindre. Chaque page répond à une question qu'on vous pose au téléphone.",
        },
      ],
      social:
        "Ici, une vidéo de chantier reconnaissable circule vite : les gens identifient la rue, parfois le voisin. Et un partage local vaut plus qu'une vue anonyme.",
      faq: [
        {
          q: 'Vous vous déplacez à Ugine ?',
          a: "Oui, sans supplément. Ugine est à quinze minutes d'Albertville, où je suis installé, donc les rendez-vous et les tournages sur place ne posent aucune difficulté.",
        },
        {
          q: 'Faut-il un site quand on a déjà une bonne réputation locale ?',
          a: "Le site ne remplace pas votre réputation, il la rend visible pour ceux qui ne vous connaissent pas encore. Nouveaux habitants, résidences secondaires, entreprises qui cherchent un prestataire : ces gens là ne demandent pas au voisin, ils cherchent en ligne.",
        },
        {
          q: 'Vous intervenez aussi vers le Val d\'Arly ?',
          a: "Oui, et je le prends en compte dans le contenu. Si vous travaillez vers Flumet ou Crest-Voland, votre site et votre fiche Google doivent le dire explicitement pour ressortir sur ces recherches.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-moutiers',
    postalCode: '73600',
    lat: 45.4849,
    lng: 6.5316,
    department: 'Savoie',
    departmentCode: 'FR-73',
    scope: 'city',
    relatedCities: [
      'creation-site-web-bourg-saint-maurice',
      'creation-site-web-albertville',
      'web-designer-savoie',
    ],
    fr: {
      name: 'Moûtiers',
      title: 'Création Site Web Moûtiers | Elie Ageron',
      description:
        'Web designer en Savoie, à trente minutes de Moûtiers. Sites pros pour les entreprises de Tarentaise et les prestataires des stations.',
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Moûtiers',
      h2: 'Une clientèle qui change quatre fois par an.',
      intro:
        "Moûtiers est le point de passage de toute la Tarentaise. Les entreprises d'ici travaillent pour les habitants de la vallée une partie de l'année et pour les stations le reste du temps. Cette double clientèle change complètement la façon de construire un site et une présence en ligne.",
      breadcrumb: 'Création Site Web Moûtiers',
    },
    en: {
      name: 'Moûtiers',
      title: 'Web Design Moûtiers Tarentaise | Elie Ageron',
      description:
        'Web designer in Savoie, thirty minutes from Moûtiers. Professional websites for Tarentaise businesses and ski resort suppliers.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Moûtiers',
      h2: 'A clientele that changes four times a year.',
      intro:
        'Moûtiers is the gateway to the whole Tarentaise valley. Local businesses serve valley residents part of the year and the resorts the rest of the time. That double clientele changes how a website and an online presence should be built.',
      breadcrumb: 'Web Design Moûtiers',
    },
    depthFr: {
      travel: 'Environ trente minutes depuis Albertville.',
      nearby: [
        'Salins-Fontaine',
        'Aigueblanche',
        'Bozel',
        'Brides-les-Bains',
        'Saint-Bon',
        'Les Allues',
        'Saint-Martin-de-Belleville',
        'Aime',
      ],
      sectors: [
        'Prestataires des stations',
        'Bâtiment et second oeuvre',
        'Transport et logistique',
        'Hébergement et conciergerie',
        'Commerces et services de vallée',
      ],
      points: [
        {
          titre: 'Deux clientèles qui ne cherchent pas pareil',
          texte: "Les habitants de la vallée tapent le nom de la commune. Les stations cherchent un prestataire fiable, souvent de loin et des mois à l'avance.",
        },
        {
          titre: 'Une page par type de client',
          texte: "Le particulier veut être rassuré, le professionnel veut vos délais et votre capacité. Un site qui ne parle qu'à l'un laisse l'autre de côté.",
        },
        {
          titre: 'Votre disponibilité vend plus que votre prix',
          texte: "En Tarentaise, le client veut d'abord savoir si vous pouvez venir. Affichez vos délais, votre zone et vos périodes chargées.",
        },
        {
          titre: "L'hiver se décide en septembre",
          texte: 'Un hébergeur cherche son prestataire pour la saison en septembre, parfois en juin. Votre visibilité doit être en place avant.',
          article: 'entreprise-saisonniere-communication',
        },
      ],
      social:
        'Une vidéo tournée sur un chantier avec les sommets derrière, les gens de la vallée la reconnaissent en une seconde. Ceux qui viennent chaque hiver aussi.',
      faq: [
        {
          q: 'Vous intervenez jusque dans les stations ?',
          a: "Oui. Moûtiers est à trente minutes d'Albertville et les stations un peu plus haut. Je me déplace pour les rendez-vous et pour les tournages, en tenant compte des conditions de circulation en pleine saison.",
        },
        {
          q: 'Comment gérer une activité très saisonnière sur un site ?',
          a: "En affichant clairement vos périodes et vos délais, et en préparant la visibilité hors saison. Un site mis en ligne au début de la saison arrive systématiquement trop tard pour en profiter.",
        },
        {
          q: 'Faut-il un site en anglais pour la clientèle des stations ?',
          a: "Cela dépend de qui vous facture. Si vos clients sont des structures locales, le français suffit. Si vous vendez directement à des vacanciers étrangers, une version anglaise se justifie.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-bourg-saint-maurice',
    postalCode: '73700',
    lat: 45.618,
    lng: 6.769,
    department: 'Savoie',
    departmentCode: 'FR-73',
    scope: 'city',
    relatedCities: [
      'creation-site-web-moutiers',
      'creation-site-web-albertville',
      'web-designer-savoie',
    ],
    fr: {
      name: 'Bourg-Saint-Maurice',
      title: 'Site Web Bourg-Saint-Maurice | Elie Ageron',
      description:
        'Web designer en Savoie pour les entreprises de Haute Tarentaise. Sites professionnels, référencement local et vidéos pour vos réseaux.',
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Bourg-Saint-Maurice',
      h2: 'Une économie qui tourne toute l\'année, ou presque.',
      intro:
        "La Haute Tarentaise est l'une des rares zones de montagne où l'activité ne s'arrête pas vraiment entre les saisons. Eaux vives et randonnée l'été, stations l'hiver, et une population permanente entre les deux. Pour une entreprise d'ici, ça veut dire une présence en ligne qui doit tenir sur douze mois.",
      breadcrumb: 'Site Web Bourg-Saint-Maurice',
    },
    en: {
      name: 'Bourg-Saint-Maurice',
      title: 'Web Design Bourg-Saint-Maurice | Elie Ageron',
      description:
        'Web designer in Savoie for Haute Tarentaise businesses. Professional websites, local SEO and short-form video for social media.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Bourg-Saint-Maurice',
      h2: 'An economy that runs almost all year round.',
      intro:
        'Haute Tarentaise is one of the few mountain areas where activity does not really stop between seasons. Whitewater and hiking in summer, resorts in winter, and a permanent population in between. For a local business, that means an online presence built to last twelve months.',
      breadcrumb: 'Web Design Bourg-Saint-Maurice',
    },
    depthFr: {
      travel: 'Environ cinquante minutes depuis Albertville.',
      nearby: [
        'Séez',
        'Landry',
        'Peisey-Nancroix',
        'Les Arcs',
        'La Rosière',
        'Tignes',
        'Val-d\'Isère',
        'Sainte-Foy-Tarentaise',
        'Aime-la-Plagne',
      ],
      sectors: [
        'Activités de plein air et sports d\'eaux vives',
        'Hébergement et conciergerie',
        'Moniteurs et encadrement sportif',
        'Bâtiment et rénovation d\'altitude',
        'Commerces et restauration',
      ],
      points: [
        {
          titre: "Ici, l'été compte autant que l'hiver",
          texte: "Eaux vives, randonnée et vélo l'été, stations l'hiver. Une entreprise qui ne communique qu'une saison repart de zéro à chaque reprise.",
          article: 'entreprise-saisonniere-communication',
        },
        {
          titre: 'Vos clients cherchent depuis Lyon ou Paris',
          texte: "Quelqu'un qui prépare une semaine en juillet compare en mars. Votre site répond à ses questions : l'accès, les dates, le niveau, ce qui est inclus.",
        },
        {
          titre: "Les avis décident plus qu'ailleurs",
          texte: 'Une clientèle qui vient de loin ne vous connaît pas. Elle choisit sur les avis, et les collecter rapporte souvent plus vite que le site.',
          article: 'obtenir-avis-google',
        },
      ],
      social:
        "Une descente en raft, un chalet d'altitude, un lever de soleil : ici le décor fait le travail. L'enjeu est de publier toute l'année et de dire ce que vous vendez.",
      faq: [
        {
          q: 'Vous montez jusqu\'en Haute Tarentaise ?',
          a: "Oui, pour les rendez-vous comme pour les tournages. Comptez environ cinquante minutes depuis Albertville, ce qui reste un déplacement courant pour moi.",
        },
        {
          q: 'Comment être visible auprès de clients qui viennent de loin ?',
          a: "En travaillant les recherches liées à l'activité plutôt qu'à la commune : le type de prestation, la station, la période. C'est un travail différent du référencement local classique, et il demande des pages dédiées par prestation.",
        },
        {
          q: 'Faut-il communiquer aussi hors saison ?',
          a: "Oui, et c'est même là que ça compte le plus. Les décisions de réservation se prennent souvent plusieurs mois avant, donc votre visibilité doit exister au moment où les gens préparent, pas au moment où ils arrivent.",
        },
      ],
    },
  },
];
