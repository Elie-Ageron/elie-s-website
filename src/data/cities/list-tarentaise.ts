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
      title: 'Création Site Web Albertville | Elie Ageron',
      description:
        "Web designer installé à Albertville. Sites qui sortent sur Google et vidéos pour vos réseaux. Rendez-vous sur place, devis sous 48h.",
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
      context: [
        "Albertville est un carrefour plus qu'une destination. La ville vit du passage vers la Tarentaise et le Beaufortain, des zones d'activité de la plaine, et d'un tissu d'artisans qui travaillent aussi bien en fond de vallée qu'en altitude.",
        "Ça change deux choses pour votre présence en ligne. D'abord votre clientèle est étalée sur un territoire large, souvent au delà de la commune, ce qui rend le référencement local plus utile qu'ailleurs. Ensuite votre activité est saisonnière, avec des mois pleins et des mois creux, et c'est précisément dans les mois creux qu'il faut avoir semé.",
        "La plupart des entreprises que je rencontre ici ont un bouche à oreille solide et une visibilité en ligne quasi nulle. Ce n'est pas un défaut de sérieux, c'est un manque de temps. Le résultat, c'est que quelqu'un qui vient d'emménager et qui cherche votre métier sur Google trouve un concurrent de Chambéry avant de vous trouver, vous.",
      ],
      blocks: [
        {
          title: 'Ce que je fais pour les entreprises du bassin',
          body: "Un site clair qui explique ce que vous faites, où vous intervenez et comment on vous joint. Une fiche Google Business remplie et entretenue, parce que c'est ce qui vous fait sortir sur la carte quand quelqu'un tape votre métier depuis son téléphone. Et si vous le souhaitez, une journée de tournage par mois pour alimenter vos réseaux sans que vous ayez à filmer quoi que ce soit.",
        },
        {
          title: 'Le rendez-vous sur place, sans facturation',
          body: "Je préfère venir voir. Un atelier, un chantier, un local commercial racontent plus en vingt minutes qu'un questionnaire en dix pages. Ce déplacement n'est pas facturé et il n'engage à rien, y compris si je vous dis à la fin que vous n'avez pas besoin de moi.",
        },
        {
          title: 'La saisonnalité, à prendre au sérieux',
          body: "Dans la vallée, beaucoup d'activités font leur chiffre sur quelques mois. La conséquence, c'est que le travail de visibilité doit démarrer largement avant la saison, pas pendant. Un site mis en ligne en décembre pour la saison d'hiver arrive trop tard, et une présence sur les réseaux démarrée en janvier ne produira rien avant le printemps.",
        },
      ],
      social:
        "Albertville est une ville où l'on se connaît, et les groupes Facebook locaux y sont particulièrement actifs. C'est un canal de recommandation qui pèse davantage ici que dans une grande agglomération. Pour une entreprise du bassin, publier régulièrement des vidéos courtes qui montrent le travail réel produit un effet direct sur le bouche à oreille, parce que les gens partagent ce qu'ils reconnaissent.",
      articles: [
        'site-web-artisan',
        'reseaux-sociaux-artisan-savoie',
        'creer-fiche-google-business',
        'electricien-plombier-chauffagiste-visibilite',
        'commerce-centre-ville-visibilite',
        'erreurs-visibilite-tpe-locale',
      ],
      faq: [
        {
          q: 'Vous vous déplacez à Albertville et autour ?',
          a: "Oui, je suis installé à Albertville. Je me déplace sans supplément dans tout le bassin, de Frontenex à Beaufort en passant par Ugine, et plus loin en Tarentaise selon les projets.",
        },
        {
          q: 'Combien coûte un site pour une entreprise locale ?',
          a: "Tout est chiffré sur devis, parce qu'une landing page et un site vitrine de six pages n'ont pas grand chose en commun. Le devis arrive sous 48 heures après notre échange, et il est ferme.",
        },
        {
          q: 'Vous travaillez avec des entreprises saisonnières ?',
          a: "Régulièrement. La contrainte principale est le calendrier : il faut lancer le travail de visibilité plusieurs mois avant la saison visée, sinon les résultats arrivent après.",
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
      context: [
        "Ugine a une identité industrielle forte, avec tout ce que ça implique de savoir faire technique et de sous-traitance autour. À côté de ça vit un tissu de commerces et d'artisans qui travaillent pour les habitants de la vallée et pour le Val d'Arly juste au dessus.",
        "Sur une commune de cette taille, la concurrence en ligne est faible. C'est une bonne nouvelle rarement exploitée : il suffit souvent d'une fiche Google correctement remplie et d'un site clair pour se retrouver devant, là où dans une agglomération il faudrait des mois de travail.",
        "Le réflexe local reste le bouche à oreille, et il fonctionne bien. Le problème apparaît avec les gens qui arrivent : nouveaux habitants, résidences secondaires, saisonniers. Eux ne connaissent personne et cherchent sur leur téléphone. Si vous n'y êtes pas, ils appellent quelqu'un d'Albertville.",
      ],
      blocks: [
        {
          title: 'Le levier le moins cher, en premier',
          body: "Pour une entreprise d'Ugine, la fiche Google Business passe avant le site. Elle est gratuite, elle s'affiche au dessus de tous les résultats classiques, et sur une commune de cette taille il suffit souvent de la remplir sérieusement pour ressortir. Je commence toujours par là avant de parler de quoi que ce soit d'autre.",
        },
        {
          title: 'Un site simple, mais complet',
          body: "Trois à cinq pages suffisent dans la plupart des cas : ce que vous faites, comment ça se passe, vos réalisations, et comment vous joindre. L'important n'est pas le nombre de pages, c'est que chacune réponde à une question que vos clients posent réellement au téléphone.",
        },
        {
          title: 'Le lien avec le Val d\'Arly',
          body: "Beaucoup d'entreprises d'Ugine montent travailler vers Flumet, Crest-Voland ou Notre-Dame-de-Bellecombe. Si c'est votre cas, il faut que ça se voie sur votre site et sur votre fiche Google, parce que les recherches se font par commune. Quelqu'un à Flumet ne tape pas Ugine.",
        },
      ],
      social:
        "Sur une commune de cette taille, une vidéo qui montre un chantier reconnaissable circule vite. Les gens identifient la rue, le bâtiment, parfois le voisin. C'est exactement ce qui déclenche les partages, et le partage local vaut infiniment plus que la vue anonyme. Deux vidéos par semaine tournées pendant votre travail normal suffisent à installer ça.",
      articles: [
        'site-web-artisan',
        'paysagiste-jardinier-visibilite',
        'creer-fiche-google-business',
        'zone-de-chalandise-sans-local',
        'menuisier-cuisiniste-visibilite',
        'rater-moins-d-appels',
      ],
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
      context: [
        "Moûtiers occupe une position particulière : c'est le verrou de la Tarentaise, le point où passe tout ce qui monte vers Courchevel, Méribel, Les Menuires ou Val Thorens. Une bonne partie de l'économie locale vit de ce passage.",
        "Pour une entreprise d'ici, ça veut dire deux clientèles très différentes. Les habitants de la vallée, présents toute l'année, qui cherchent un artisan ou un service de proximité. Et les acteurs de la station, qui cherchent un prestataire fiable capable d'intervenir vite en pleine saison.",
        "Ces deux publics ne cherchent pas de la même façon. Le premier tape le nom de la commune sur son téléphone. Le second cherche souvent depuis l'extérieur du département, parfois plusieurs mois à l'avance, et compare sur des critères de disponibilité et de réactivité. Un site qui ne parle qu'à l'un des deux laisse la moitié du marché de côté.",
      ],
      blocks: [
        {
          title: 'Deux publics, une seule page d\'accueil',
          body: "L'erreur classique consiste à faire un site qui s'adresse à un seul des deux. La solution n'est pas de faire deux sites, c'est d'avoir une page dédiée par type de client, avec un vocabulaire et des preuves différentes. Le particulier veut être rassuré, le professionnel veut connaître vos délais et votre capacité.",
        },
        {
          title: 'La disponibilité comme argument principal',
          body: "En Tarentaise, ce qui décide n'est pas toujours le prix. C'est de savoir si vous pouvez venir. Afficher clairement vos délais d'intervention, votre zone et vos périodes de forte charge vous fera gagner des clients et vous évitera des appels inutiles.",
        },
        {
          title: 'Anticiper le calendrier',
          body: "Les décisions se prennent hors saison. Un hébergeur qui cherche un prestataire pour l'hiver le cherche en septembre, parfois en juin. Votre visibilité doit donc être en place avant, ce qui suppose de commencer le travail plusieurs mois à l'avance.",
        },
      ],
      social:
        "La Tarentaise est un endroit où le contenu vidéo fonctionne particulièrement bien, pour une raison simple : le décor est spectaculaire et immédiatement reconnaissable. Une vidéo tournée sur un chantier avec les sommets derrière est identifiée en une seconde par les gens de la vallée, et elle intéresse aussi ceux qui viennent chaque hiver. C'est un avantage que peu d'entreprises exploitent.",
      articles: [
        'location-saisonniere-reservation-directe',
        'hebergement-station-reseaux-sociaux',
        'entreprise-saisonniere-communication',
        'site-web-artisan',
        'creer-fiche-google-business',
        'traiteur-food-truck-visibilite',
      ],
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
      context: [
        "Bourg-Saint-Maurice a une particularité que peu de villes de montagne partagent : elle vit correctement l'été. L'Isère y attire les activités d'eaux vives, la randonnée et le vélo remplissent les vallées, et la ville garde une population permanente qui fait tourner les commerces.",
        "Cette double saison change la nature du travail de visibilité. Une entreprise qui ne communique que l'hiver laisse la moitié de son potentiel de côté, et surtout elle repart de zéro à chaque reprise, parce qu'une audience qui n'a rien vu pendant six mois vous a oublié.",
        "L'autre spécificité, c'est que beaucoup de clients cherchent depuis loin et longtemps à l'avance. Quelqu'un qui prépare une semaine en juillet compare des prestataires en mars, depuis Lyon ou Paris. Ce n'est pas du référencement local classique, c'est de la visibilité nationale sur une prestation localisée, et ça se travaille différemment.",
      ],
      blocks: [
        {
          title: 'Se rendre trouvable depuis l\'extérieur',
          body: "Si vos clients viennent de loin, votre site doit répondre à leurs questions à eux : où exactement, comment on y accède, ce qui est inclus, quel niveau il faut avoir, quelles dates sont encore disponibles. Un site pensé uniquement pour les gens du coin passe à côté de cette clientèle.",
        },
        {
          title: 'Occuper les deux saisons',
          body: "Le contenu produit l'été sert l'hiver et inversement. C'est une des rares situations où publier régulièrement toute l'année a un effet cumulatif visible, parce que les gens qui vous découvrent en août réservent en janvier.",
        },
        {
          title: 'Les avis, plus décisifs qu\'ailleurs',
          body: "Une clientèle qui ne vous connaît pas et qui vient de loin s'appuie presque entièrement sur les avis pour choisir. Sur ce type d'activité, le travail de collecte d'avis rapporte souvent plus vite que le site lui même.",
        },
      ],
      social:
        "Peu d'endroits offrent un décor aussi favorable à la vidéo courte. Une descente en raft, un lever de soleil depuis un sommet, une intervention sur un chalet d'altitude : ce sont des images qui retiennent l'attention sans effort de mise en scène. L'enjeu ici n'est pas de trouver quoi filmer, c'est de le faire régulièrement et de dire clairement ce que vous vendez, sinon la belle image ne se transforme jamais en réservation.",
      articles: [
        'location-saisonniere-reservation-directe',
        'moniteur-guide-montagne-visibilite',
        'hebergement-station-reseaux-sociaux',
        'entreprise-saisonniere-communication',
        'site-bilingue-clientele-etrangere',
        'obtenir-avis-google',
      ],
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
