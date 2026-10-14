import type { CityData } from './types';

/**
 * Bassins de Haute-Savoie hors Annecy. Trois tissus economiques tres
 * differents : l'industrie de l'Arve, le Chablais frontalier et lacustre,
 * le pays du Mont-Blanc, plus l'Albanais agroalimentaire.
 *
 * Regle du projet : une page locale n'existe que si on a de la matiere
 * propre a ecrire dessus. Ces quatre bassins en ont.
 */
export const hauteSavoieCities: CityData[] = [
  {
    slug: 'creation-site-web-cluses',
    postalCode: '74300',
    lat: 46.0603,
    lng: 6.5789,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'city',
    relatedCities: [
      'creation-site-web-sallanches',
      'creation-site-web-haute-savoie',
      'web-designer-annecy',
    ],
    fr: {
      name: 'Cluses',
      title: 'Création Site Web Cluses | Elie Ageron',
      description:
        "Web designer pour les entreprises de Cluses et de la vallée de l'Arve. Sites B2B, sous-traitance industrielle, artisans et commerces. Devis sous 48h.",
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Cluses',
      h2: "Une vallée qui vend surtout à d'autres entreprises.",
      intro:
        "La vallée de l'Arve n'est pas un marché comme les autres en Haute-Savoie. Une grande partie des entreprises d'ici vendent à d'autres entreprises, souvent loin, et leur site ne sert pas à séduire un particulier mais à rassurer un acheteur industriel. Ça change entièrement ce qu'il faut écrire dessus.",
      breadcrumb: 'Création Site Web Cluses',
    },
    en: {
      name: 'Cluses',
      title: 'Web Design Cluses Haute-Savoie | Elie Ageron',
      description:
        'Web designer for businesses in Cluses and the Arve valley. B2B sites, industrial subcontracting, trades and shops. Quote within 48 hours.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Cluses',
      h2: 'A valley that mostly sells to other businesses.',
      intro:
        'The Arve valley is not a typical Haute-Savoie market. Many companies here sell to other companies, often far away, and their website exists to reassure an industrial buyer rather than charm a consumer. That changes everything about what belongs on it.',
      breadcrumb: 'Web Design Cluses',
    },
    depthFr: {
      travel: "Environ une heure et quart depuis Albertville, par Megève et Sallanches.",
      nearby: [
        'Scionzier',
        'Marnaz',
        'Thyez',
        'Marignier',
        'Bonneville',
        'Magland',
        'Saint-Jeoire',
        'Taninges',
      ],
      sectors: [
        'Décolletage et mécanique de précision',
        'Sous-traitance automobile, médicale et aéronautique',
        'Traitement de surface et usinage',
        'Bâtiment et second œuvre',
        'Commerces et services de vallée',
        'Transport et logistique',
      ],
      points: [
        {
          titre: 'Vos clients ne sont pas dans la vallée',
          texte: "Un décolleteur vend à des donneurs d'ordre situés à des centaines de kilomètres. Son site doit rassurer un acheteur, pas séduire un passant.",
        },
        {
          titre: 'Des capacités, pas des valeurs',
          texte: "Matières, diamètres, tolérances, parc machines, certifications. C'est ce qu'un acheteur cherche, et presque aucun site de la vallée ne l'écrit.",
        },
        {
          titre: 'Le site sert aussi à recruter',
          texte: "Une page qui montre l'atelier réel et donne la parole aux salariés aide à trouver des régleurs et des opérateurs.",
          article: 'recruter-avec-son-site-et-ses-reseaux',
        },
        {
          titre: 'Les artisans de la vallée jouent un autre match',
          texte: 'Pour un plombier de Scionzier ou un garage de Marnaz, tout repose sur la fiche Google, les avis et les recherches par commune.',
          article: 'electricien-plombier-chauffagiste-visibilite',
        },
      ],
      social:
        "Une pièce qui sort d'un tour numérique, un contrôle au projecteur de profil : les gestes industriels sont spectaculaires, et personne ne les montre. Ils servent en prospection comme en recrutement.",
      faq: [
        {
          q: 'Vous vous déplacez dans la vallée de l\'Arve ?',
          a: "Oui. Comptez environ une heure et quart depuis Albertville par Megève et Sallanches. Les rendez-vous de cadrage et les tournages se font sur place, le reste peut se traiter à distance.",
        },
        {
          q: 'Travaillez-vous pour des entreprises industrielles ?',
          a: "Oui, sur la partie site et contenu. Un site de sous-traitance se construit autour de vos capacités réelles, de vos certifications et de vos références, pas autour d'un discours commercial. Je ne fais en revanche ni publicité en ligne ni photographie industrielle professionnelle.",
        },
        {
          q: 'Un site sert-il quand nos clients sont des grands comptes ?',
          a: "Souvent plus qu'on ne le croit. Un acheteur ou un bureau d'études vérifie systématiquement en ligne avant de lancer une consultation, et un site absent ou daté pèse dans la décision, même quand la relation vient d'ailleurs.",
        },
        {
          q: 'Faites-vous des pages de recrutement ?',
          a: "Oui, et c'est un des usages les plus rentables dans cette vallée. Une page qui montre l'atelier, l'équipe et les conditions réelles change le nombre de candidatures reçues.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-thonon-les-bains',
    postalCode: '74200',
    lat: 46.3707,
    lng: 6.4794,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'city',
    relatedCities: [
      'creation-site-web-haute-savoie',
      'web-designer-annecy',
      'creation-site-web-cluses',
    ],
    fr: {
      name: 'Thonon-les-Bains',
      title: 'Création Site Web Thonon-les-Bains | Elie Ageron',
      description:
        'Web designer pour les entreprises du Chablais et de Thonon-les-Bains. Commerces, santé, bâtiment, tourisme lacustre. Devis sous 48h.',
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Thonon-les-Bains',
      h2: 'Un bassin dense, avec une clientèle qui travaille en Suisse.',
      intro:
        "Le Chablais a une particularité que peu de bassins français partagent : une part importante des habitants travaillent de l'autre côté du lac ou de la frontière. Ils décident vite, ils comparent en ligne, et ils sont peu disponibles en journée. Ça change la façon dont une entreprise locale doit se rendre joignable.",
      breadcrumb: 'Création Site Web Thonon-les-Bains',
    },
    en: {
      name: 'Thonon-les-Bains',
      title: 'Web Design Thonon-les-Bains | Elie Ageron',
      description:
        'Web designer for businesses in Thonon-les-Bains and the Chablais. Shops, healthcare, construction, lakeside tourism. Quote within 48 hours.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Thonon-les-Bains',
      h2: 'A dense area where many residents work in Switzerland.',
      intro:
        'The Chablais has a rare feature: a large share of residents work across the lake or across the border. They decide quickly, they compare online, and they are rarely available during the day. That changes how a local business needs to be reachable.',
      breadcrumb: 'Web Design Thonon-les-Bains',
    },
    depthFr: {
      travel: "Un peu moins de deux heures depuis Albertville, par Annecy ou par la rive du lac.",
      nearby: [
        'Évian-les-Bains',
        'Publier',
        'Anthy-sur-Léman',
        'Margencel',
        'Sciez',
        'Douvaine',
        'Bons-en-Chablais',
        'Perrignier',
      ],
      sectors: [
        'Bâtiment et rénovation',
        'Santé et professions libérales',
        'Commerces de centre-ville',
        'Hôtellerie et restauration au bord du lac',
        'Bien-être et thérapies',
        'Services aux frontaliers',
      ],
      points: [
        {
          titre: 'Vos clients travaillent en Suisse',
          texte: 'Ils partent tôt, rentrent tard et règlent tout le soir depuis leur téléphone. Celui qui répond le lendemain a déjà perdu une partie des demandes.',
          article: 'rater-moins-d-appels',
        },
        {
          titre: 'Joignable en dehors des heures de bureau',
          texte: "Un formulaire court, un numéro cliquable, une réponse dans la journée. Ce n'est pas de la technique, c'est de l'organisation.",
        },
        {
          titre: 'Un ordre de prix affiché',
          texte: 'Une clientèle aisée compare vite et écarte ce qui reste flou. Un ordre de grandeur sur le site fait gagner des rendez-vous.',
          article: 'afficher-ses-prix-ou-pas',
        },
        {
          titre: 'Le bâtiment a besoin de meilleures demandes',
          texte: "Beaucoup d'artisans du Chablais sont pleins. Un site qui dit votre zone, vos délais et ce que vous ne faites pas trie les demandes à votre place.",
        },
      ],
      social:
        "Dans le Chablais, les groupes de commune font circuler les noms. Un chantier fini, un coin du lac, un conseil pratique : ces vidéos marchent parce qu'on reconnaît le territoire.",
      faq: [
        {
          q: 'Vous intervenez dans le Chablais ?',
          a: "Oui, en me déplaçant pour les rendez-vous de cadrage et les tournages. Comptez un peu moins de deux heures depuis Albertville. Une partie du travail se fait ensuite à distance, ce qui rend le suivi simple quelle que soit la distance.",
        },
        {
          q: 'Faut-il un site en anglais dans ce secteur ?',
          a: "Cela dépend de votre clientèle réelle. Pour un hébergement du bord du lac ou une activité touristique, une version traduite des pages qui décident vaut souvent le coup. Pour un artisan qui travaille pour des résidents, non.",
        },
        {
          q: 'Travaillez-vous avec des professions de santé ?',
          a: "Oui, en tenant compte des règles propres à chaque profession. Elles limitent ce qu'on peut écrire et montrer, et il vaut mieux en tenir compte dès la conception plutôt que de corriger après.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-sallanches',
    postalCode: '74700',
    lat: 45.9366,
    lng: 6.632,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'city',
    relatedCities: [
      'creation-site-web-cluses',
      'creation-site-web-haute-savoie',
      'creation-site-web-bourg-saint-maurice',
    ],
    fr: {
      name: 'Sallanches',
      title: 'Création Site Web Sallanches | Elie Ageron',
      description:
        'Web designer pour les entreprises de Sallanches et du pays du Mont-Blanc. Bâtiment, commerces, hébergement, activités de montagne. Devis sous 48h.',
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Sallanches',
      h2: 'Le carrefour commercial du pays du Mont-Blanc.',
      intro:
        "Sallanches est la ville où l'on descend faire ses courses et ses démarches quand on habite la vallée, de Passy à Megève. C'est un bassin de service qui alimente des stations à fort pouvoir d'achat, et cette position de carrefour définit ce qu'une entreprise d'ici doit mettre en avant.",
      breadcrumb: 'Création Site Web Sallanches',
    },
    en: {
      name: 'Sallanches',
      title: 'Web Design Sallanches Mont-Blanc | Elie Ageron',
      description:
        'Web designer for businesses in Sallanches and the Mont-Blanc area. Construction, shops, accommodation, mountain activities. Quote within 48 hours.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Sallanches',
      h2: 'The commercial crossroads of the Mont-Blanc valley.',
      intro:
        'Sallanches is where people come down to shop and run errands, from Passy up to Megève. It is a service hub feeding high-spending resorts, and that crossroads position defines what a local business should put forward.',
      breadcrumb: 'Web Design Sallanches',
    },
    depthFr: {
      travel: "Environ une heure depuis Albertville, par Ugine, Flumet et Megève.",
      nearby: [
        'Passy',
        'Domancy',
        'Combloux',
        'Cordon',
        'Megève',
        'Saint-Gervais-les-Bains',
        'Praz-sur-Arly',
        'Magland',
      ],
      sectors: [
        'Bâtiment, charpente et rénovation de chalets',
        'Commerces et services de zone',
        'Hébergement et location saisonnière',
        'Activités de montagne et encadrement sportif',
        'Santé et bien-être',
        'Restauration',
      ],
      points: [
        {
          titre: "Vos clients n'habitent pas sur place",
          texte: "Un propriétaire de chalet qui vit à Paris ou à Genève choisit son artisan sans passer à l'atelier. Il choisit sur ce qu'il trouve en ligne.",
        },
        {
          titre: 'Ce qui remplace la visite compte double',
          texte: "Des photos de réalisations, un déroulé de chantier écrit, des avis détaillés. Peu d'entreprises de la vallée les fournissent.",
          article: 'avant-apres-artisan-contenu',
        },
        {
          titre: 'Un gros chantier mérite un site sérieux',
          texte: "Une rénovation de chalet se compte en dizaines de milliers d'euros. Plus le montant monte, plus le moindre détail bancal pèse.",
          article: 'menuisier-cuisiniste-visibilite',
        },
        {
          titre: 'Deux saisons, deux creux',
          texte: 'La visibilité se prépare pendant les intersaisons, avec les images tournées quand tout est plein.',
        },
      ],
      social:
        "Un chantier avec le massif derrière, un chalet fini : le décor fait une partie du travail. L'avant et après marche très bien ici, parce que le client à distance n'a que ces images pour juger.",
      faq: [
        {
          q: 'Vous vous déplacez à Sallanches et dans le pays du Mont-Blanc ?',
          a: "Oui, régulièrement. Comptez environ une heure depuis Albertville par Ugine, Flumet et Megève. C'est une des vallées les plus accessibles depuis chez moi.",
        },
        {
          q: 'Travaillez-vous avec des entreprises du bâtiment de montagne ?',
          a: "Oui. C'est un des cas où un site bien fait change vraiment le carnet, parce qu'une partie des clients décident à distance et n'ont que vos photos et vos avis pour vous juger.",
        },
        {
          q: 'Faites-vous des sites pour des locations saisonnières ?',
          a: "Oui, avec un objectif précis : reprendre une part des réservations en direct plutôt que de tout laisser aux plateformes. Cela suppose un calendrier à jour, des tarifs visibles et une fiche Google, pas seulement un joli site.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-rumilly',
    postalCode: '74150',
    lat: 45.8664,
    lng: 5.9455,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'city',
    relatedCities: [
      'web-designer-annecy',
      'creation-site-web-aix-les-bains',
      'creation-site-web-haute-savoie',
    ],
    fr: {
      name: 'Rumilly',
      title: 'Création Site Web Rumilly | Elie Ageron',
      description:
        "Web designer pour les entreprises de Rumilly et de l'Albanais. Industrie, agroalimentaire, artisans et commerces. Devis sous 48h.",
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Rumilly',
      h2: "Un bassin de travail, entre Annecy et Aix-les-Bains.",
      intro:
        "L'Albanais est un territoire de production plus que de tourisme, coincé entre deux agglomérations qui aspirent l'attention. C'est aussi un bassin où la concurrence en ligne est nettement plus faible qu'à Annecy, ce qui rend le travail de visibilité nettement moins disputé qu'à côté.",
      breadcrumb: 'Création Site Web Rumilly',
    },
    en: {
      name: 'Rumilly',
      title: 'Web Design Rumilly Haute-Savoie | Elie Ageron',
      description:
        'Web designer for businesses in Rumilly and the Albanais area. Industry, food processing, trades and shops. Quote within 48 hours.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Rumilly',
      h2: 'A working area between Annecy and Aix-les-Bains.',
      intro:
        'The Albanais is a production area rather than a tourist one, wedged between two urban centres that absorb the attention. Online competition is far lighter than in Annecy, which makes it one of the places where results come fastest.',
      breadcrumb: 'Web Design Rumilly',
    },
    depthFr: {
      travel: "Environ une heure depuis Albertville, par Annecy.",
      nearby: [
        'Alby-sur-Chéran',
        'Vallières-sur-Fier',
        'Sales',
        'Marcellaz-Albanais',
        'Boussy',
        'Saint-Félix',
        'Hauteville-sur-Fier',
        'Massingy',
      ],
      sectors: [
        'Industrie et agroalimentaire',
        'Bâtiment et travaux publics',
        'Agriculture et circuits courts',
        'Artisanat de production',
        'Commerces et services de proximité',
        'Transport',
      ],
      points: [
        {
          titre: "Moins de concurrence qu'à Annecy",
          texte: "Dans l'Albanais, peu d'entreprises travaillent leur visibilité. Une fiche Google bien tenue et quelques pages sérieuses y pèsent plus lourd.",
          article: 'etre-premier-google-dans-sa-ville',
        },
        {
          titre: 'Nommer toutes les communes',
          texte: "D'Alby-sur-Chéran à Saint-Félix, les gens cherchent avec le nom de la leur. Les écrire ne coûte rien, et presque personne ne le fait.",
        },
        {
          titre: 'Vente directe et circuits courts',
          texte: 'Horaires, points de retrait, marchés, produits disponibles. Les gens les cherchent, et ces informations manquent presque toujours en ligne.',
          article: 'traiteur-food-truck-visibilite',
        },
        {
          titre: 'Ne pas viser Annecy depuis Rumilly',
          texte: "Sur une recherche locale, Google favorise la proximité. Mieux vaut tenir son bassin que se battre sur la grande ville d'à côté.",
        },
      ],
      social:
        "Sur un territoire de petites communes, être identifié comme quelqu'un du coin donne une préférence spontanée. La vidéo y montre le travail réel et les visages.",
      faq: [
        {
          q: 'Vous vous déplacez à Rumilly et dans l\'Albanais ?',
          a: "Oui. Comptez environ une heure depuis Albertville en passant par Annecy. Les rendez-vous de cadrage et les tournages se font sur place.",
        },
        {
          q: 'Combien de temps pour ressortir sur Google à Rumilly ?',
          a: "Souvent plus vite qu'ailleurs en Haute-Savoie, parce que la concurrence locale y est plus faible qu'à Annecy ou à Chambéry. Quelques mois de travail régulier suffisent en général sur des recherches précises.",
        },
        {
          q: 'Travaillez-vous avec des producteurs et des artisans de bouche ?',
          a: "Oui. L'essentiel pour eux tient à des informations pratiques bien tenues : horaires de vente directe, points de retrait, marchés, disponibilité. C'est peu de travail et ça change le nombre de gens qui poussent la porte.",
        },
      ],
    },
  },
];
