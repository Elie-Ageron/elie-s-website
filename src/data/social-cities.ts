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

/**
 * Un point de la section locale. Même règle que `CityPoint` dans
 * `src/data/cities/types.ts` : le titre se lit seul, le texte tient en deux
 * phrases au plus.
 *
 * 🔴 **Remplace le terrain en trois paragraphes, les plateformes et les angles
 * de tournage, le 14 octobre 2026.** Même défaut que les quinze pages de
 * villes, signalé par Elie le même jour : six paragraphes de quatre à six
 * lignes avant le premier élément concret.
 */
export interface SocialCityPoint {
  titre: string;
  texte: string;
  /** L'article qui développe ce point. Slug vérifié par check:content. */
  article?: string;
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
  /** Ce qui est vrai des réseaux dans ce bassin, en quatre points. */
  points: SocialCityPoint[];
  faq: SocialCityFaq[];
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
    h1Pre: 'Community manager à ',
    h1Highlight: 'Albertville',
    lede:
      "Sauf que je ne me contente pas de publier. Je viens filmer chez vous une journée par mois, puis je publie à votre place.",
    travel: 'Sur place. Je vis et je travaille à Albertville.',
    nearby: ['Ugine', 'Frontenex', 'Gilly-sur-Isère', 'Grignon', 'Mercury', 'Tours-en-Savoie', 'La Bâthie', 'Queige'],
    points: [
      {
        titre: 'Presque personne ne publie ici',
        texte: "Beaucoup de commerces du centre ont un compte dont la dernière publication date de huit mois. L'attention locale n'est disputée par presque personne.",
      },
      {
        titre: 'Les recommandations passent par Facebook',
        texte: "Les groupes d'Albertville et de la combe tournent toute la journée. Ceux qui répondent citent les noms qu'ils ont vus récemment.",
        article: 'groupes-facebook-commune',
      },
      {
        titre: 'Instagram sert à vérifier que vous existez',
        texte: "On vous y regarde avant d'appeler. Une même vidéo verticale nourrit les deux réseaux, plus TikTok quand le métier s'y prête.",
        article: 'instagram-ou-facebook-entreprise-locale',
      },
      {
        titre: 'Le chantier de la semaine',
        texte: 'Un avant après en deux plans, la difficulté expliquée en quinze secondes. Les gens reconnaissent les rues, et ils partagent.',
      },
    ],
    faq: [
      {
        q: 'Vous intervenez seulement à Albertville ?',
        a: "Albertville est ma base, donc c'est là que le déplacement ne coûte rien à personne. J'interviens aussi dans toute la combe et la vallée : Ugine, Frontenex, Gilly-sur-Isère, Mercury, La Bâthie, et jusqu'en Tarentaise.",
      },
      {
        q: 'Combien coûte la gestion de mes réseaux ?',
        a: "890 € par mois, sans engagement : déplacement, tournage, montage, légendes et publication de 8 vidéos, 4 carrousels et 8 stories. Et à partir du troisième mois, je vous fais un site d'une page sans rien payer de plus. Si les 8 vidéos ne sortent pas dans le mois, le mois suivant ne vous est pas facturé. Vous voulez autre chose, plus de vidéos par exemple : vous m'écrivez et je vous réponds avec un prix.",
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
    h1Pre: 'Community manager à ',
    h1Highlight: 'Chambéry',
    lede:
      "Je ne recycle pas des images de banque. Je viens filmer dans votre entreprise une journée par mois, et le reste du mois se passe sans vous.",
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
    points: [
      {
        titre: 'Le seul bassin où la concurrence se voit',
        texte: "La restauration du centre et quelques instituts publient sérieusement. En dehors de ces métiers, le terrain reste aussi vide qu'ailleurs.",
      },
      {
        titre: 'Les professions libérales ne publient presque pas',
        texte: "Elles ont pourtant la matière : une question de client, une réponse claire, un exemple concret. Ce format convainc mieux qu'une plaquette.",
        article: 'therapeute-reseaux-sociaux-clients',
      },
      {
        titre: 'Nommer Cognin, Barberaz, Saint-Alban',
        texte: 'Les gens du bassin se disent de leur commune autant que de Chambéry. La nommer dans la vidéo capte une attention que vos concurrents laissent de côté.',
      },
      {
        titre: 'Instagram pour le centre, Facebook pour le quartier',
        texte: 'Instagram porte le commerce et le bien-être, Facebook les recommandations de quartier. On tourne une fois, on publie sur les deux.',
        article: 'quel-reseau-social-choisir-entreprise-locale',
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
    h1Pre: 'Community manager à ',
    h1Highlight: 'Annecy',
    lede:
      "Annecy est le bassin le plus exigeant de la région sur l'image. Alors je viens produire, une journée par mois, et je publie le reste du temps.",
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
    points: [
      {
        titre: 'Le niveau visuel le plus haut de la région',
        texte: "Beaucoup d'entreprises, beaucoup d'agences, beaucoup de gens qui produisent du contenu pour vivre. Une vidéo mal cadrée se remarque plus qu'en vallée.",
      },
      {
        titre: 'Le plus vrai passe devant le plus beau',
        texte: 'Au milieu des plans drone, un atelier en activité, une main qui travaille, une explication sans script se distinguent tout de suite.',
      },
      {
        titre: 'Viser la commune, pas la ville',
        texte: 'À Poisy, Sevrier ou Épagny, une vidéo qui dit le nom du village touche une audience bien moins disputée que tout Annecy.',
      },
      {
        titre: "Tourner en mars pour tout l'été",
        texte: "Une journée de tournage avant l'ouverture couvre la saison entière. Vous n'avez jamais à filmer pendant le coup de feu.",
        article: 'entreprise-saisonniere-communication',
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
    h1Pre: 'Community manager à ',
    h1Highlight: 'Aix-les-Bains',
    lede:
      "Je viens filmer chez vous une journée par mois, puis je publie 8 vidéos. Pour le soin et le bien-être, c'est le format qui rassure avant le premier rendez-vous.",
    travel: 'Environ cinquante minutes depuis Albertville.',
    nearby: ['Grésy-sur-Aix', 'Drumettaz-Clarafond', 'Mouxy', 'Tresserve', 'Brison-Saint-Innocent', 'Viviers-du-Lac', 'Le Bourget-du-Lac'],
    points: [
      {
        titre: 'La ville des praticiens et des thérapeutes',
        texte: "Le thermalisme et le lac ont installé une densité de soin qu'aucune autre ville de Savoie n'a. C'est exactement là que la vidéo change quelque chose.",
        article: 'therapeute-reseaux-sociaux-clients',
      },
      {
        titre: 'On choisit un praticien sur un visage',
        texte: 'Pas sur un prix. Une vidéo où vous répondez à une question courante montre votre voix et votre façon de travailler en quarante secondes.',
      },
      {
        titre: 'Filmer le lieu, calmement',
        texte: "Un cabinet, un institut, une salle de soin, sans musique ni effets. Ça répond à la question qu'on se pose avant de pousser la porte.",
      },
      {
        titre: 'Préparer la saison en hiver',
        texte: "De novembre à février, vous avez le temps que vous n'aurez plus en juin. Une journée de tournage couvre alors tout le printemps.",
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
      "Basé à Albertville, au milieu du département, je viens filmer chez vous une journée par mois. Entre deux tournages, vous n'avez rien à faire.",
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
    points: [
      {
        titre: 'Quatre marchés dans un département',
        texte: "Chambéry et Aix vivent du tertiaire et du soin, la combe du bâtiment et de l'industrie, la Tarentaise et la Maurienne de la saison.",
      },
      {
        titre: 'Presque personne ne publie de vidéo',
        texte: "Tourner, monter et publier chaque semaine saute dès qu'une semaine est chargée. C'est pour ça que tant de comptes savoyards s'arrêtent après six semaines.",
        article: 'deleguer-reseaux-sociaux',
      },
      {
        titre: 'Le bâtiment a la meilleure matière',
        texte: 'Un avant, un après, un geste technique visible. Deux plans et une phrase suffisent, le résultat parle de lui même.',
        article: 'reseaux-sociaux-artisan-savoie',
      },
      {
        titre: 'Nommer la commune, toujours',
        texte: 'Ugine, Moûtiers, Montmélian : le nom du lieu attire les gens du coin, et il dit à la plateforme à qui montrer la vidéo.',
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
      "Je viens filmer chez vous une journée par mois, et vos comptes tournent jusqu'à la suivante. Annecy, l'Arve, le Chablais et les Aravis.",
    travel: "De quarante-cinq minutes à une heure trente selon la vallée.",
    nearby: ['Annecy', 'Cluses', 'Sallanches', 'Thonon-les-Bains', 'Rumilly', 'La Roche-sur-Foron', 'Bonneville', 'Saint-Julien-en-Genevois'],
    points: [
      {
        titre: "Annecy et le Genevois se disputent l'attention",
        texte: 'Les entreprises y investissent dans leur image, parce que leurs clients comparent. Il faut viser précis : une prestation, une commune.',
      },
      {
        titre: 'Les vallées restent largement libres',
        texte: 'À Cluses, Sallanches ou Thonon, presque personne ne publie de vidéo. La régularité suffit à se détacher.',
      },
      {
        titre: "L'industrie, le contenu le plus sous exploité",
        texte: "Une pièce qui sort d'usinage, un contrôle au micron : des images que personne ne voit jamais, et que tout le monde regarde jusqu'au bout.",
      },
      {
        titre: 'Deux saisons à préparer',
        texte: "Dans le Chablais et les Aravis, ce qui se tourne en mai sert l'été, ce qui se tourne en octobre sert l'hiver.",
        article: 'entreprise-saisonniere-communication',
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
