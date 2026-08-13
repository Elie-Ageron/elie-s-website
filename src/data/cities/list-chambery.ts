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
      context: [
        "Chambéry concentre l'essentiel du tertiaire savoyard : professions libérales, cabinets, conseil, services aux entreprises, plus une vie commerçante de centre-ville et des zones d'activité en périphérie. C'est un marché plus dense que le reste du département, et donc plus disputé en ligne.",
        "Cette densité a une conséquence directe sur la stratégie. Viser une recherche générique du type métier plus Chambéry, c'est se battre contre des annuaires nationaux et des concurrents installés depuis dix ans. Le rendement est faible et lent.",
        "En revanche, les recherches précises restent largement disponibles. Une prestation nommée exactement, un quartier, un type de client, une situation particulière : ces requêtes font moins de volume individuellement, elles convertissent beaucoup mieux, et elles sont atteignables en quelques mois plutôt qu'en quelques années.",
      ],
      blocks: [
        {
          title: 'Une page par prestation, pas une page fourre-tout',
          body: "C'est la différence principale entre un site qui ressort à Chambéry et un site qui n'y arrive pas. Une page qui liste huit prestations en trois lignes chacune ne se positionne sur aucune. Huit pages qui traitent réellement chaque prestation se positionnent sur huit familles de recherches.",
        },
        {
          title: 'La fiche Google, même en zone dense',
          body: "Le bloc de trois entreprises affiché sur la carte reste le premier point d'entrée, y compris à Chambéry. La différence, c'est qu'il faut plus d'avis et une fiche mieux tenue que dans une petite commune pour y figurer. C'est un travail de fond, pas un réglage ponctuel.",
        },
        {
          title: 'Se distinguer sur autre chose que le prix',
          body: "Dans un marché dense, un site qui ne dit rien de particulier fait comparer sur le seul critère lisible, c'est à dire le tarif. Montrer votre façon de travailler, vos réalisations réelles et les gens derrière l'entreprise déplace la comparaison sur un terrain où vous avez quelque chose à dire.",
        },
      ],
      social:
        "Sur une agglomération de cette taille, les réseaux sociaux ne servent pas au même usage qu'en vallée. Ils servent moins à faire circuler du bouche à oreille et davantage à établir votre crédibilité auprès de gens qui vous comparent à trois concurrents. Un compte à jour, avec des réalisations récentes et un visage identifiable, fait souvent la différence au moment du choix final.",
      articles: [
        'concurrent-devant-moi-google',
        'page-service-qui-ressort',
        'expert-comptable-conseil-visibilite',
        'therapeute-reseaux-sociaux-clients',
        'commerce-centre-ville-visibilite',
        'trouver-mots-cles-clients',
      ],
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
      context: [
        "Aix-les-Bains vit du thermalisme, du lac et de tout ce qui gravite autour : soins, bien-être, hébergement, restauration, activités nautiques. C'est une économie de service, saisonnière sur une partie de l'année, et fortement dépendante de la réputation.",
        "La particularité de ce marché, c'est que le client achète quelque chose qu'il ne peut pas essayer avant. Une séance, un soin, un séjour. Il ne compare pas des caractéristiques techniques, il cherche à savoir s'il peut vous faire confiance.",
        "C'est pour ça que les sites qui fonctionnent ici ne sont pas les plus jolis, ce sont ceux qui montrent le plus. La personne qui reçoit, le lieu, le déroulé d'une séance, les avis. Un site qui reste abstrait laisse le doute intact, et le doute se solde par un abandon silencieux.",
      ],
      blocks: [
        {
          title: 'Montrer le lieu et la personne',
          body: "Dans les métiers du soin et du bien-être, la première question du client est de savoir chez qui il va entrer. Des photos réelles du cabinet ou de l'institut, un portrait, quelques mots sur votre parcours : ce sont les éléments qui font passer de la curiosité à la prise de rendez-vous.",
        },
        {
          title: 'Expliquer le déroulé, pas seulement la prestation',
          body: "Combien de temps, ce qui se passe, ce qu'il faut apporter, ce qu'on ressent après. Ces informations paraissent évidentes de votre côté et elles sont exactement ce qui bloque le client. Les écrire enlève l'appréhension.",
        },
        {
          title: 'Les avis, décisifs sur ce type d\'activité',
          body: "Quand on vend une prestation qui touche au corps ou au bien-être, les avis pèsent plus lourd que partout ailleurs. Mettre en place une routine simple de collecte, au bon moment, produit souvent plus de rendez-vous qu'une refonte de site.",
        },
      ],
      social:
        "Aix-les-Bains est un terrain particulièrement favorable à la vidéo, parce que les métiers du bien-être se montrent mal par écrit et très bien en images. Une courte vidéo qui présente une séance, un geste, ou simplement la personne qui reçoit, lève la barrière que le texte ne lève pas. C'est aussi un moyen de toucher les gens qui viennent en cure ou en séjour et qui cherchent sur place.",
      articles: [
        'therapeute-reseaux-sociaux-clients',
        'coiffeur-esthetique-reseaux-sociaux',
        'location-saisonniere-reservation-directe',
        'commerce-centre-ville-visibilite',
        'obtenir-avis-google',
        'prendre-rendez-vous-en-ligne',
      ],
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
      context: [
        "La Ravoire fait partie de cette couronne est de Chambéry où vivent beaucoup de familles et où se concentrent des zones commerciales et artisanales. On y trouve un tissu dense de petites entreprises qui travaillent pour les habitants des communes voisines.",
        "L'intérêt de cette zone pour le référencement local tient à un détail comportemental : les gens tapent le nom de leur commune. Quelqu'un à Barberaz cherche un artisan à Barberaz, pas à Chambéry, même si les deux sont à cinq minutes. Or presque toutes les entreprises du secteur communiquent uniquement sur Chambéry.",
        "Résultat, ces recherches communales restent largement disponibles. Une entreprise qui les traite explicitement, sur son site et sur sa fiche Google, se retrouve seule ou presque, là où sur Chambéry elle serait dixième.",
      ],
      blocks: [
        {
          title: 'Nommer les communes, une par une',
          body: "C'est le geste le plus rentable dans cette zone. Écrire la liste des communes que vous desservez, sur votre site et dans votre fiche Google, vous rend trouvable sur des recherches que personne ne travaille. Ça prend dix minutes et l'effet est durable.",
        },
        {
          title: 'La fiche Google avec zone de service',
          body: "Si vous vous déplacez chez vos clients sans avoir de local ouvert au public, déclarez une zone de service plutôt qu'une adresse. Listez les communes réelles, pas le département entier, sinon Google dilue votre pertinence sur chacune.",
        },
        {
          title: 'Un site court, mais qui répond',
          body: "Pour un commerce ou un artisan de proximité, trois à quatre pages suffisent. Ce qui compte est que chacune réponde à une vraie question : ce que vous faites, où vous allez, combien ça coûte à peu près, comment on vous joint.",
        },
      ],
      social:
        "Dans une couronne périurbaine, les groupes Facebook de commune sont extrêmement actifs et servent de premier réflexe quand quelqu'un cherche un artisan ou un commerce. Y être présent régulièrement, sans y faire de promotion directe, vaut souvent mieux qu'un budget publicitaire. Les vidéos qui montrent un chantier local circulent vite parce que les gens reconnaissent la rue.",
      articles: [
        'commerce-centre-ville-visibilite',
        'garage-automobile-visibilite',
        'creer-fiche-google-business',
        'obtenir-avis-google',
        'zone-de-chalandise-sans-local',
        'rater-moins-d-appels',
      ],
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
      context: [
        "Saint-Jean-de-Maurienne est une ville industrielle dans une vallée qui vit aussi du tourisme. L'aluminium y a une histoire longue, les grands chantiers d'infrastructure y font travailler beaucoup de monde, et les cols environnants attirent chaque été une clientèle cycliste venue de toute l'Europe.",
        "Pour une entreprise locale, cette diversité est une opportunité et une difficulté. Une opportunité parce que la demande est variée et présente toute l'année. Une difficulté parce qu'un site qui essaie de parler à tout le monde en même temps finit par ne convaincre personne.",
        "La bonne approche consiste à séparer clairement les publics sur des pages différentes. Le donneur d'ordre industriel, le particulier de la vallée et le visiteur de passage ne cherchent pas les mêmes mots et n'ont pas les mêmes questions.",
      ],
      blocks: [
        {
          title: 'Séparer les publics, pas les diluer',
          body: "Une page pour les professionnels, une page pour les particuliers. Le vocabulaire, les preuves et les arguments diffèrent complètement. Une page unique qui mélange les deux affaiblit les deux messages et brouille aussi la compréhension qu'a Google de votre activité.",
        },
        {
          title: 'La sous-traitance industrielle se cherche en ligne',
          body: "Contrairement à une idée répandue, les acheteurs industriels utilisent Google, y compris pour trouver un sous-traitant local. Un site qui détaille précisément vos capacités, vos machines et vos certifications vous rend trouvable sur des recherches très spécifiques et peu concurrentielles.",
        },
        {
          title: 'La saison cycliste, un public à part',
          body: "Si votre activité touche au tourisme sportif, sachez que cette clientèle prépare son séjour plusieurs mois à l'avance et depuis loin. Votre visibilité doit exister en hiver pour produire des réservations en été.",
        },
      ],
      social:
        "La Maurienne offre un décor que les gens reconnaissent immédiatement, notamment autour des cols. Pour une entreprise touristique, c'est un avantage évident. Pour une entreprise industrielle ou du bâtiment, l'angle est différent mais tout aussi efficace : montrer un savoir faire technique en trente secondes intéresse à la fois les clients potentiels et les candidats au recrutement, ce qui est un vrai sujet dans la vallée.",
      articles: [
        'site-web-artisan',
        'electricien-plombier-chauffagiste-visibilite',
        'garage-automobile-visibilite',
        'creer-fiche-google-business',
        'entreprise-saisonniere-communication',
        'rater-moins-d-appels',
      ],
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
