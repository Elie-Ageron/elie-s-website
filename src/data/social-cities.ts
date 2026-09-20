/**
 * Pages locales du pilier n°2 : la gestion de réseaux sociaux, commune par commune.
 *
 * 🔴 Pourquoi ce fichier existe. Les quinze pages locales de `src/data/cities/`
 * portent toutes un titre de création de site web. Pour une recherche du type
 * « community manager Albertville » ou « gestion réseaux sociaux Savoie », le
 * site n'avait donc qu'une seule page candidate, `/reseaux-sociaux`, régionale
 * et générique, en concurrence interne avec quinze pages de site web mieux
 * maillées. Elie, le 16 septembre 2026 : « les gens me trouvent pour les sites
 * web, je veux que quand les gens cherchent réseaux sociaux Albertville ils me
 * trouvent ».
 *
 * Relevé de la page de résultats le même jour sur « community management
 * Albertville » : les quatre sites qui tiennent la première page (123digital,
 * Luca De Sa, Comète Digital, Agence Origin) ont tous une page dédiée dont
 * l'URL et la balise title contiennent le métier et le nom de la commune.
 * Aucun des quatre ne se déplace pour filmer.
 *
 * ⚠️ Le mot « community manager » est dans la balise title parce que c'est le
 * mot que les gens tapent. Le H1 le reprend et le premier paragraphe corrige
 * aussitôt : Elie ne gère pas des publications, il vient produire la matière.
 * C'est l'écart qui le distingue sur cette page de résultats, pas un défaut à
 * masquer.
 *
 * ⚠️ Chaque page doit dire quelque chose de vrai sur SON bassin. Une page
 * locale dupliquée où seul le nom de la commune change ne sert à rien et peut
 * desservir : c'est la règle posée pour `src/data/cities/`, elle vaut ici.
 */

export interface SocialCityBlock {
  title: string;
  body: string;
}

export interface SocialCityFaq {
  q: string;
  a: string;
}

export interface SocialCityData {
  slug: string;
  /** Nom affiché de la commune ou de la zone. */
  name: string;
  /** Page couvrant un département plutôt qu'une commune. */
  scope: 'city' | 'area';
  postalCode: string;
  lat: number;
  lng: number;
  department: string;
  departmentCode: string;
  /** Balise title, suffixe marque compris, sous 60 caractères. */
  seoTitle: string;
  /** Meta description, sous 160 caractères. */
  seoDesc: string;
  h1Pre: string;
  h1Highlight: string;
  /** La correction qui suit le H1 : ce que ce métier veut dire chez lui. */
  lede: string;
  /** Temps de trajet réel depuis Albertville, ou mention sur place. */
  travel: string;
  /** Communes couvertes depuis cette base. */
  nearby: string[];
  /** L'état réel des réseaux dans ce bassin, en deux ou trois paragraphes. */
  terrain: string[];
  /** Quelle plateforme prime ici, et pourquoi. */
  platforms: string;
  /** Angles de tournage concrets pour le tissu économique local. */
  filmer: SocialCityBlock[];
  faq: SocialCityFaq[];
  /** Articles du blog choisis pour ce bassin. Slugs validés par check:content. */
  articles: string[];
  /** Autres pages sociales locales à proposer en maillage. */
  related: string[];
  /** La page site web de la même commune, pour le maillage croisé entre piliers. */
  webPage?: string;
}

export const socialCities: SocialCityData[] = [
  {
    slug: 'community-manager-albertville',
    name: 'Albertville',
    scope: 'city',
    postalCode: '73200',
    lat: 45.6756,
    lng: 6.3925,
    department: 'Savoie',
    departmentCode: 'FR-73',
    seoTitle: 'Community Manager Albertville | Elie Ageron',
    seoDesc:
      "Je vis et je travaille à Albertville, donc je viens filmer chez vous une journée par mois sans trajet à compter. 8 vidéos publiées, 890 €/mois sans engagement.",
    h1Pre: 'Community manager à ',
    h1Highlight: 'Albertville',
    lede:
      "Sauf que je ne me contente pas de publier. Je viens filmer chez vous une journée par mois, je monte, j'écris les légendes et je publie dans le mois. Vous n'avez rien à préparer et rien à apprendre.",
    travel: 'Sur place. Je vis et je travaille à Albertville.',
    nearby: ['Ugine', 'Frontenex', 'Gilly-sur-Isère', 'Grignon', 'Mercury', 'Tours-en-Savoie', 'La Bâthie', 'Queige'],
    terrain: [
      "Ouvrez Instagram et cherchez les commerces du centre d'Albertville. Vous allez tomber sur beaucoup de comptes ouverts un jour d'enthousiasme, avec une dernière publication qui date de huit mois. Ce n'est pas de la négligence. C'est qu'aucun artisan, aucun commerçant et aucun praticien n'a le temps de tenir un rythme en plus de son métier.",
      "Ça a une conséquence directe, et elle joue en votre faveur. L'attention locale n'est disputée par presque personne ici. Un plombier d'Albertville qui publie deux fois par semaine devient, en quelques mois, le seul plombier que les gens du coin voient passer. Dans une ville de vingt mille habitants, ça se remarque bien plus vite qu'à Lyon.",
      "Et la demande existe, elle passe juste ailleurs. Les groupes Facebook d'Albertville et de la combe tournent toute la journée, avec les mêmes demandes de recommandation qui reviennent chaque semaine : un couvreur, une esthéticienne, quelqu'un pour un dépannage. Les gens qui répondent citent les noms qu'ils ont vus récemment.",
    ],
    platforms:
      "Ici, Facebook reste l'endroit où circulent les recommandations entre habitants, et Instagram celui où on vérifie que vous existez avant d'appeler. Les deux se nourrissent de la même vidéo verticale, donc la question du choix ne se pose pas vraiment : on publie sur les deux, plus TikTok quand le métier s'y prête.",
    filmer: [
      {
        title: 'Le chantier de la semaine',
        body: "La combe de Savoie et la vallée jusqu'à Ugine concentrent beaucoup de métiers du bâtiment. Un avant après filmé en deux plans, avec la difficulté réelle expliquée en quinze secondes, marche mieux que n'importe quelle publicité. Les gens reconnaissent les rues.",
      },
      {
        title: "Le geste qu'on ne voit jamais",
        body: "Pour un commerce du centre, la matière est dans l'atelier ou dans l'arrière boutique : la mise en place du matin, la réception d'un arrivage, la réparation qu'on fait gratuitement. Personne ne voit jamais ça, et c'est exactement ce qui donne envie de pousser la porte.",
      },
      {
        title: "La question qu'on vous pose dix fois par jour",
        body: "Les praticiens et les thérapeutes d'Albertville passent leur temps à répondre aux mêmes questions en début de séance. Chacune est une vidéo. C'est le format le plus simple à tourner, parce que vous avez déjà la réponse et que vous l'avez déjà dite cent fois.",
      },
      {
        title: 'Le passage de la Tarentaise',
        body: "Albertville est la porte des stations, et une partie du flux de décembre à avril ne fait que traverser. Une entreprise qui publie avant la saison est celle qu'on retrouve quand le besoin tombe, parce que le contenu reste en ligne alors que le passage, lui, ne revient pas.",
      },
    ],
    faq: [
      {
        q: 'Vous intervenez seulement à Albertville ?',
        a: "Albertville est ma base, donc c'est là que le déplacement ne coûte rien à personne. J'interviens aussi dans toute la combe et la vallée : Ugine, Frontenex, Gilly-sur-Isère, Mercury, La Bâthie, et jusqu'en Tarentaise.",
      },
      {
        q: 'Combien coûte la gestion de mes réseaux ?',
        a: "890 € par mois, sans engagement : déplacement, tournage, montage, légendes et publication de 8 vidéos, 4 carrousels et 8 stories. Le premier mois je filme deux jours au lieu d'un, et à partir du troisième mois je vous fais un site d'une page sans rien payer de plus. Si les 8 vidéos ne sortent pas dans le mois, le mois suivant ne vous est pas facturé. Vous voulez autre chose, plus de vidéos par exemple : vous m'écrivez et je vous réponds avec un prix.",
      },
      {
        q: "Est-ce que je dois apparaître à l'image ?",
        a: "Non. Beaucoup de gens ne veulent pas se filmer, et ça se comprend. On peut tout construire sur les mains, la matière, le lieu et la voix off. Si vous voulez essayer le face caméra, on le fait quand vous êtes prêt, pas le premier jour.",
      },
      {
        q: 'Ça marche vraiment dans une ville de cette taille ?',
        a: "Différemment, oui. Vous ne ferez pas des centaines de milliers de vues, et ce n'est pas le but. Sur un bassin comme celui d'Albertville, quelques milliers de vues locales répétées chaque semaine touchent une part réelle des gens qui peuvent devenir clients.",
      },
    ],
    articles: [
      'reseaux-sociaux-artisan-savoie',
      'groupes-facebook-commune',
      'instagram-ou-facebook-entreprise-locale',
      'deleguer-reseaux-sociaux',
      'prix-gestion-reseaux-sociaux',
      'combien-de-temps-resultats-reseaux-sociaux',
    ],
    related: ['community-manager-chambery', 'gestion-reseaux-sociaux-savoie', 'community-manager-aix-les-bains'],
    webPage: 'creation-site-web-albertville',
  },
  {
    slug: 'community-manager-chambery',
    name: 'Chambéry',
    scope: 'city',
    postalCode: '73000',
    lat: 45.5646,
    lng: 5.9178,
    department: 'Savoie',
    departmentCode: 'FR-73',
    seoTitle: 'Community Manager Chambéry | Elie Ageron',
    seoDesc:
      "Ni images de banque, ni citations programmées. Je viens filmer dans votre entreprise à Chambéry une journée par mois, à quarante-cinq minutes de chez moi.",
    h1Pre: 'Community manager à ',
    h1Highlight: 'Chambéry',
    lede:
      "Je ne recycle pas des images de banque et je ne programme pas des citations. Je viens filmer dans votre entreprise une journée par mois, et le reste du mois se passe sans vous.",
    travel: 'Environ quarante-cinq minutes depuis Albertville.',
    nearby: [
      'La Ravoire',
      'Saint-Alban-Leysse',
      'Cognin',
      'Bassens',
      'Barberaz',
      'Jacob-Bellecombette',
      'La Motte-Servolex',
      'Montmélian',
    ],
    terrain: [
      "Chambéry est le plus gros bassin de Savoie, et le seul où la concurrence sur les réseaux commence à se voir. La restauration du centre, quelques instituts et une poignée de commerces de la rue de Boigne publient sérieusement. Ce sont des exceptions, mais elles existent, ce qui n'est pas le cas dans les vallées.",
      "En dehors de ces métiers là, le terrain reste aussi vide qu'ailleurs. Les professions libérales, les artisans des zones de Bissy et de Bassens, les prestataires de services aux entreprises : presque aucun ne publie de vidéo. Ils ont pourtant la matière, et souvent une clientèle qui les cherche sur Google avant de les appeler.",
      "L'autre particularité chambérienne, c'est l'étendue du bassin. Les gens de Cognin, de Barberaz ou de Saint-Alban-Leysse se disent de Chambéry pour certaines choses et de leur commune pour d'autres. Une entreprise qui nomme ces communes dans ses vidéos et ses légendes capte une attention que ses concurrents laissent de côté.",
    ],
    platforms:
      "Sur Chambéry, Instagram porte le commerce, la restauration et le bien être, avec une audience jeune et un centre ville dense. Facebook garde les quarante ans et plus, et c'est souvent là que partent les recommandations de quartier. On produit une fois, on diffuse sur les deux.",
    filmer: [
      {
        title: 'Le centre ville se filme tout seul',
        body: "Entre les Halles, le Curial et la rue de Boigne, un commerce a un décor que personne d'autre n'a. Filmer la devanture au bon moment de la journée, c'est un plan de trois secondes qui dit où vous êtes sans avoir à l'écrire.",
      },
      {
        title: "L'expertise qui se raconte en une minute",
        body: "Chambéry compte beaucoup de professions libérales et de prestataires de services. Pour eux, le contenu n'est pas visuel, il est explicatif : une question de client, une réponse claire, un exemple concret. Filmé correctement, ce format convertit mieux que n'importe quelle plaquette.",
      },
      {
        title: "Les zones d'activité",
        body: "Bissy, Bassens, La Ravoire : beaucoup d'entreprises y travaillent sans aucune visibilité en ligne parce qu'elles se croient invisibles par nature. Un atelier en activité est pourtant l'un des contenus les plus regardés, précisément parce qu'on ne le voit jamais.",
      },
    ],
    faq: [
      {
        q: 'Vous vous déplacez à Chambéry ?',
        a: "Oui, comptez environ quarante-cinq minutes depuis Albertville. Le rendez vous de départ et la journée de tournage se font sur place, chez vous, chaque mois.",
      },
      {
        q: 'Mes concurrents publient déjà, est-ce trop tard ?',
        a: "Non, et c'est même plus simple : vous voyez ce qui marche chez eux avant de commencer. Ce qui départage sur un bassin comme Chambéry n'est pas l'antériorité, c'est la régularité tenue sur plusieurs mois.",
      },
      {
        q: 'Vous prenez aussi les communes autour ?',
        a: "Oui. La Ravoire, Cognin, Saint-Alban-Leysse, Barberaz, La Motte-Servolex et Montmélian sont dans la même sortie. C'est souvent là que les recherches sont les moins disputées.",
      },
    ],
    articles: [
      'quel-reseau-social-choisir-entreprise-locale',
      'commerce-centre-ville-visibilite',
      'transformer-vues-en-clients',
      'therapeute-reseaux-sociaux-clients',
      'prix-gestion-reseaux-sociaux',
      'temps-par-semaine-communication',
    ],
    related: ['community-manager-albertville', 'community-manager-aix-les-bains', 'gestion-reseaux-sociaux-savoie'],
    webPage: 'creation-site-web-chambery',
  },
  {
    slug: 'community-manager-annecy',
    name: 'Annecy',
    scope: 'city',
    postalCode: '74000',
    lat: 45.8992,
    lng: 6.1294,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    seoTitle: 'Community Manager Annecy | Elie Ageron',
    seoDesc:
      "Annecy est le bassin le plus exigeant de la région sur l'image. Je viens produire chez vous une journée par mois, et je publie le reste. 890 €/mois.",
    h1Pre: 'Community manager à ',
    h1Highlight: 'Annecy',
    lede:
      "Annecy est le bassin le plus exigeant de la région sur l'image. C'est pour ça que je ne vends pas de la programmation de publications : je viens produire, une journée par mois, et je publie le reste du temps.",
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
    terrain: [
      "Annecy est le seul bassin de la région où le niveau visuel attendu est réellement haut. Le tourisme, le tertiaire et une population aisée ont attiré beaucoup d'entreprises, beaucoup d'agences, et un nombre inhabituel de gens qui produisent du contenu pour vivre. Une vidéo mal cadrée se remarque davantage ici que dans une vallée.",
      "Ça ne veut pas dire que la place est prise. Ça veut dire qu'un contenu générique n'en a aucune. Viser l'attention de tout Annecy demande des moyens que personne n'a en TPE. Viser une prestation nommée et une commune du bassin reste tout à fait accessible, et c'est là que se trouvent les clients qui appellent.",
      "La saisonnalité joue aussi, plus qu'ailleurs. Une partie de l'économie annécienne vit sur l'été et sur les ailes de saison. Le contenu doit être en ligne avant, pas pendant, parce qu'une vidéo publiée au mois d'août travaille pour l'été suivant autant que pour celui en cours.",
    ],
    platforms:
      "Instagram domine largement ici, porté par le lac, la restauration et le bien être. TikTok touche une audience réelle sur les métiers qui se montrent. Facebook garde son utilité sur les communes du bassin, où les groupes d'habitants restent très actifs à Poisy, Seynod ou Épagny.",
    filmer: [
      {
        title: 'Viser la commune, pas la ville',
        body: "Les habitants de Poisy, de Sevrier ou d'Épagny nomment leur commune. Une vidéo qui dit le nom du village et montre un repère reconnaissable touche une audience beaucoup moins disputée que celle qui vise Annecy en général, pour un travail identique.",
      },
      {
        title: 'Le niveau visuel comme argument',
        body: "Dans un bassin où tout le monde soigne son image, le contenu qui sort du lot n'est pas le plus beau, c'est le plus vrai. Un atelier en activité, une main qui travaille, une explication sans script : ça se distingue au milieu des plans drone.",
      },
      {
        title: "L'avant saison",
        body: "Ce qu'on tourne en mars sert de juin à septembre. Une journée de tournage avant l'ouverture permet de couvrir toute la saison sans jamais avoir à filmer pendant le coup de feu, qui est le moment où personne n'a le temps.",
      },
    ],
    faq: [
      {
        q: 'Le marché annécien est-il trop concurrentiel ?',
        a: "Sur l'attention générale, oui, et je le dis avant de commencer. Sur une prestation précise et une commune du bassin, il reste beaucoup de place, parce que très peu d'entreprises locales publient de la vidéo régulièrement.",
      },
      {
        q: 'Vous vous déplacez depuis la Savoie ?',
        a: "Oui, comptez environ quarante-cinq minutes. Le déplacement est compris dans le tarif mensuel, il n'y a pas de frais kilométriques en plus.",
      },
      {
        q: 'Vous travaillez avec des hébergeurs et des restaurants ?',
        a: "Oui, et ce sont des métiers qui se filment bien parce que le décor travaille pour vous. La contrainte réelle est le calendrier : on tourne hors service, et on prépare la saison avant qu'elle commence.",
      },
    ],
    articles: [
      'restaurant-reseaux-sociaux',
      'hebergement-station-reseaux-sociaux',
      'entreprise-saisonniere-communication',
      'coiffeur-esthetique-reseaux-sociaux',
      'quel-reseau-social-choisir-entreprise-locale',
      'prix-gestion-reseaux-sociaux',
    ],
    related: ['gestion-reseaux-sociaux-haute-savoie', 'community-manager-chambery', 'community-manager-albertville'],
    webPage: 'web-designer-annecy',
  },
  {
    slug: 'community-manager-aix-les-bains',
    name: 'Aix-les-Bains',
    scope: 'city',
    postalCode: '73100',
    lat: 45.6885,
    lng: 5.9152,
    department: 'Savoie',
    departmentCode: 'FR-73',
    seoTitle: 'Community Manager Aix-les-Bains | Elie Ageron',
    seoDesc:
      "Tournage une journée par mois à Aix-les-Bains, montage vertical et publication suivie. 890 €/mois, sans engagement. Pensé pour le bien être et les praticiens.",
    h1Pre: 'Community manager à ',
    h1Highlight: 'Aix-les-Bains',
    lede:
      "Je viens filmer chez vous une journée par mois, puis je publie 8 vidéos dans le mois. Sur un bassin où la moitié des entreprises vivent du soin et du bien être, c'est le format qui rassure avant le premier rendez vous.",
    travel: 'Environ cinquante minutes depuis Albertville.',
    nearby: ['Grésy-sur-Aix', 'Drumettaz-Clarafond', 'Mouxy', 'Tresserve', 'Brison-Saint-Innocent', 'Viviers-du-Lac', 'Le Bourget-du-Lac'],
    terrain: [
      "Aix-les-Bains a une économie que je ne retrouve nulle part ailleurs en Savoie : le thermalisme et le lac ont installé une densité de praticiens, de thérapeutes, d'instituts et de professions de santé qu'aucune autre ville du département n'a. C'est exactement le type de métier où le contenu vidéo change quelque chose.",
      "Pourquoi : on ne choisit pas un praticien sur un prix. On le choisit parce qu'on a vu son visage, entendu sa voix et compris comment il travaille. Une fiche Google et trois photos ne font pas ça. Une vidéo où vous expliquez une question courante le fait en quarante secondes, et elle continue de le faire pendant des mois.",
      "La saison compte, ici aussi. L'activité se concentre de mars à octobre, le lac amène du passage l'été, et les curistes arrivent par sessions. Le contenu produit en hiver est celui qui travaille au printemps, quand tout le monde se met à publier en même temps.",
    ],
    platforms:
      "Instagram porte le bien être, le soin et l'esthétique, et c'est là que se fait la vérification avant un premier rendez vous. Facebook reste utile pour les habitants à l'année et pour les groupes de commune. Pour un cabinet, la messagerie privée compte autant que la publication elle même.",
    filmer: [
      {
        title: 'La question du premier rendez vous',
        body: "Chaque praticien a trois ou quatre questions qui reviennent avant la première séance : ce que ça fait, combien de temps, pour qui. Y répondre en vidéo enlève l'hésitation qui empêche d'appeler, et ça se tourne en quelques minutes.",
      },
      {
        title: 'Le lieu rassure autant que vous',
        body: "Un cabinet, un institut, une salle de soin : filmer l'endroit calmement, sans musique et sans effets, répond à une question que personne ne pose à voix haute mais que tout le monde se pose avant de pousser la porte.",
      },
      {
        title: 'Préparer la saison en hiver',
        body: "De novembre à février, vous avez le temps que vous n'aurez plus en juin. Une journée de tournage à ce moment là couvre le printemps entier, et vous publiez pendant la saison sans avoir à y penser.",
      },
    ],
    faq: [
      {
        q: 'Ça convient à un cabinet ou à un institut ?',
        a: "C'est même le cas où ça marche le mieux, parce que la décision d'appeler dépend de la confiance et pas du prix. On travaille dans le cadre que vous fixez : ce dont vous voulez parler, et ce que vous préférez garder pour vous.",
      },
      {
        q: 'Je reçois des messages privés, qui y répond ?',
        a: "Vous. Je publie et je gère les commentaires publics courants, mais les messages privés d'un patient ou d'un client restent chez vous. Personne d'autre ne doit répondre à ça à votre place.",
      },
      {
        q: 'Vous vous déplacez à Aix-les-Bains ?',
        a: "Oui, comptez environ cinquante minutes depuis Albertville. Grésy-sur-Aix, Drumettaz-Clarafond, Tresserve et Le Bourget-du-Lac sont dans le même déplacement.",
      },
    ],
    articles: [
      'therapeute-reseaux-sociaux-clients',
      'coiffeur-esthetique-reseaux-sociaux',
      'repondre-commentaires-messages-prives',
      'entreprise-saisonniere-communication',
      'parler-face-camera-timide',
      'prix-gestion-reseaux-sociaux',
    ],
    related: ['community-manager-chambery', 'gestion-reseaux-sociaux-savoie', 'community-manager-albertville'],
    webPage: 'creation-site-web-aix-les-bains',
  },
  {
    slug: 'gestion-reseaux-sociaux-savoie',
    name: 'Savoie',
    scope: 'area',
    postalCode: '73000',
    lat: 45.5646,
    lng: 5.9178,
    department: 'Savoie',
    departmentCode: 'FR-73',
    seoTitle: 'Gestion Réseaux Sociaux Savoie | Elie Ageron',
    seoDesc:
      "Basé à Albertville, au milieu du département. Albertville, Chambéry, Aix-les-Bains, les deux vallées et la Tarentaise. Une journée de tournage, 890 €/mois.",
    h1Pre: 'Gestion de réseaux sociaux en ',
    h1Highlight: 'Savoie',
    lede:
      "Je suis basé à Albertville, au milieu du département. Je viens filmer chez vous une journée par mois, je monte, je publie, et vous n'avez rien à faire entre deux tournages.",
    travel: 'Albertville, Chambéry, Aix-les-Bains, les deux vallées et la Tarentaise.',
    nearby: [
      'Albertville',
      'Chambéry',
      'Aix-les-Bains',
      'Ugine',
      'Moûtiers',
      'Bourg-Saint-Maurice',
      'Saint-Jean-de-Maurienne',
      'La Ravoire',
      'Montmélian',
    ],
    terrain: [
      "La Savoie n'est pas un marché, c'est quatre marchés qui ne se ressemblent pas. La cluse de Chambéry et Aix vivent du tertiaire, du commerce et du soin. La combe et Albertville vivent du bâtiment et de l'industrie. La Tarentaise et la Maurienne vivent de la saison, avec des entreprises qui font l'essentiel de leur chiffre sur quatre mois.",
      "Le point commun, c'est que presque personne ne publie de vidéo. Pas par choix stratégique : parce que tourner, monter, écrire et publier chaque semaine représente un vrai travail en plus du métier, et que ce travail saute le premier dès qu'une semaine est chargée. C'est pour ça que tant de comptes savoyards s'arrêtent après six semaines.",
      "Le second point commun, c'est la taille des bassins. Sur un département d'un peu plus de quatre cent mille habitants, une entreprise qui publie régulièrement devient visible vite, parce que la concurrence sur l'attention est faible. Ce n'est pas vrai dans une métropole, et ça ne durera pas éternellement ici.",
    ],
    platforms:
      "Facebook porte les recommandations entre habitants, commune par commune, et il reste dominant dans les vallées. Instagram porte le commerce, le soin et la restauration, surtout sur Chambéry, Aix et les stations. Une même vidéo verticale alimente les deux, plus TikTok quand le métier se montre bien.",
    filmer: [
      {
        title: 'La saison commande le calendrier',
        body: "En Tarentaise et en Maurienne, le contenu se tourne en intersaison et se publie pendant. Une entreprise qui attend décembre pour commencer a déjà perdu la saison, parce qu'un compte met plusieurs semaines à retrouver de la portée.",
      },
      {
        title: 'Le bâtiment a la meilleure matière',
        body: "Sur la combe et la vallée, les métiers du bâtiment ont ce que tous les autres cherchent : un avant, un après, et un geste technique visible. Deux plans et une phrase suffisent, et le résultat parle de lui même.",
      },
      {
        title: 'Nommer la commune, toujours',
        body: "Ugine, Moûtiers, Montmélian, Saint-Jean : nommer le lieu dans la vidéo et dans la légende fait deux choses à la fois. Ça attire l'attention des gens du coin, et ça dit à la plateforme à qui montrer la vidéo en priorité.",
      },
    ],
    faq: [
      {
        q: 'Vous couvrez tout le département ?',
        a: "Oui. Depuis Albertville, Chambéry et Aix sont à moins d'une heure, Moûtiers et Saint-Jean-de-Maurienne aussi, et Bourg-Saint-Maurice un peu plus. Le déplacement est compris dans le tarif mensuel.",
      },
      {
        q: 'Vous travaillez avec quels métiers ?',
        a: "Des artisans, des commerçants, des salons, des restaurants et des thérapeutes, principalement. Plus votre métier se voit, plus il est facile à filmer, mais un métier qui ne se voit pas se raconte.",
      },
      {
        q: 'Il y a un engagement ?',
        a: "Trois mois minimum, et ce n'est pas une clause commerciale. C'est le temps qu'il faut à un compte pour retrouver de la portée. En dessous, on paie pour une expérience dont on ne saura rien.",
      },
      {
        q: 'Et si mon site ne suit pas ?',
        a: "Je le refais. Les deux vont ensemble : des vidéos qui amènent des gens sur un site qui ne convertit pas, c'est du trafic perdu. Le site est mon autre métier, donc il n'y a personne d'autre à coordonner.",
      },
    ],
    articles: [
      'reseaux-sociaux-artisan-savoie',
      'entreprise-saisonniere-communication',
      'groupes-facebook-commune',
      'deleguer-reseaux-sociaux',
      'combien-de-temps-resultats-reseaux-sociaux',
      'prix-gestion-reseaux-sociaux',
    ],
    related: [
      'community-manager-albertville',
      'community-manager-chambery',
      'gestion-reseaux-sociaux-haute-savoie',
    ],
    webPage: 'web-designer-savoie',
  },
  {
    slug: 'gestion-reseaux-sociaux-haute-savoie',
    name: 'Haute-Savoie',
    scope: 'area',
    postalCode: '74000',
    lat: 45.8992,
    lng: 6.1294,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    seoTitle: 'Gestion Réseaux Sociaux Haute-Savoie | Elie Ageron',
    seoDesc:
      "Genevois, vallée de l'Arve, Chablais, Aravis : une clientèle qui a l'habitude de comparer. Je viens filmer une journée par mois. 890 €/mois.",
    h1Pre: 'Gestion de réseaux sociaux en ',
    h1Highlight: 'Haute-Savoie',
    lede:
      "Je viens filmer chez vous une journée par mois, et vos comptes tournent jusqu'à la suivante. Annecy, la vallée de l'Arve, le Chablais et les Aravis, depuis Albertville.",
    travel: "De quarante-cinq minutes à une heure trente selon la vallée.",
    nearby: ['Annecy', 'Cluses', 'Sallanches', 'Thonon-les-Bains', 'Rumilly', 'La Roche-sur-Foron', 'Bonneville', 'Saint-Julien-en-Genevois'],
    terrain: [
      "La Haute-Savoie est plus peuplée, plus riche et plus concurrentielle que la Savoie, et ça se voit en ligne. Le Genevois et le bassin annécien comptent des entreprises qui investissent réellement dans leur image, parce que leur clientèle a les moyens de comparer et l'habitude de le faire.",
      "Les vallées, elles, ressemblent davantage à la Savoie. Dans l'Arve, du côté de Cluses et de Bonneville, le décolletage et la sous traitance industrielle sont presque absents des réseaux, alors que ce sont des métiers spectaculaires à filmer. Le Chablais et les Aravis vivent de la saison, avec les mêmes contraintes de calendrier qu'en Tarentaise.",
      "Conséquence pratique : la stratégie n'est pas la même selon l'endroit. Sur Annecy et le Genevois, il faut viser précis parce que l'attention est disputée. Sur Cluses, Sallanches ou Thonon, le terrain est encore largement libre, et la régularité suffit à se détacher.",
    ],
    platforms:
      "Instagram domine sur Annecy, le lac et le Genevois. Facebook reste solide dans les vallées et sur les communes, où les groupes d'habitants servent d'annuaire officieux. TikTok touche vraiment quand le métier se montre, ce qui est le cas de l'industrie et de l'artisanat.",
    filmer: [
      {
        title: "L'industrie est le contenu le plus sous exploité",
        body: "Une machine de décolletage en fonctionnement, une pièce qui sort d'usinage, un contrôle au micron : ce sont des images que personne ne voit jamais et que tout le monde regarde jusqu'au bout. Les entreprises de l'Arve ont la meilleure matière de la région et ne s'en servent pas.",
      },
      {
        title: 'Le Genevois a une clientèle qui compare',
        body: "Près de la frontière, vos clients regardent trois prestataires avant d'appeler, et ils le font sur leur téléphone. Un compte vivant, avec un visage et des chantiers récents, tranche la comparaison plus vite qu'une page de prix.",
      },
      {
        title: 'Filmer avant la saison, dans les deux sens',
        body: "Le Chablais et les Aravis ont deux saisons, pas une. Ce qui se tourne en mai sert l'été, ce qui se tourne en octobre sert l'hiver. Le piège est d'attendre le début de saison, au moment précis où personne n'a plus une heure.",
      },
    ],
    faq: [
      {
        q: "Vous montez jusque dans la vallée de l'Arve ?",
        a: "Oui. Cluses, Sallanches et Bonneville sont à environ une heure trente d'Albertville. Le déplacement est compris dans le tarif, et on organise la journée de tournage pour qu'un seul aller retour couvre tout le mois.",
      },
      {
        q: 'Vous êtes en Savoie, est-ce un problème ?',
        a: "Non, c'est même l'inverse d'une agence à distance : je viens sur place chaque mois. Ce qui compte n'est pas le département sur ma carte, c'est que quelqu'un se déplace avec une caméra plutôt que de vous demander vos photos.",
      },
      {
        q: 'Combien de publications par mois ?',
        a: "Six, sur Instagram, Facebook, TikTok ou YouTube Shorts. Tout vient de la même journée de tournage, montée en format vertical avec les sous titres incrustés.",
      },
    ],
    articles: [
      'entreprise-saisonniere-communication',
      'hebergement-station-reseaux-sociaux',
      'quel-reseau-social-choisir-entreprise-locale',
      'transformer-vues-en-clients',
      'deleguer-reseaux-sociaux',
      'prix-gestion-reseaux-sociaux',
    ],
    related: [
      'community-manager-annecy',
      'gestion-reseaux-sociaux-savoie',
      'community-manager-albertville',
    ],
    webPage: 'creation-site-web-haute-savoie',
  },
];

export const getSocialCity = (slug: string) => socialCities.find((c) => c.slug === slug);

/** Les autres pages sociales locales a proposer, dans l'ordre declare. */
export const getRelatedSocialCities = (city: SocialCityData) =>
  city.related.map((slug) => getSocialCity(slug)).filter((c): c is SocialCityData => Boolean(c));
