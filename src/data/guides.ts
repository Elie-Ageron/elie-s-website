/**
 * Pages piliers. Chaque guide est un hub : il traite un sujet de bout en bout
 * et renvoie vers les articles satellites qui approfondissent chaque chapitre.
 * Les articles renvoient a leur tour vers le pilier via leur champ `pillar`.
 */

export interface GuideChapter {
  title: string;
  body: string[];
  /** Slugs d'articles de blog qui approfondissent ce chapitre. */
  articles?: string[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface Guide {
  slug: string;
  /** Libelle court utilise dans les listes et le fil d'ariane. */
  label: string;
  kicker: string;
  title: string;
  seoTitle: string;
  seoDesc: string;
  excerpt: string;
  readTime: string;
  updated: string;
  chapters: GuideChapter[];
  faq: GuideFaq[];
  /** Pages de service vers lesquelles le guide envoie. */
  ctaTo: string;
  ctaLabel: string;
}

export const guides: Guide[] = [
  {
    slug: 'reseaux-sociaux-entreprise-locale',
    label: 'Réseaux sociaux pour une entreprise locale',
    kicker: 'Guide complet',
    title: 'Les réseaux sociaux pour une entreprise locale',
    seoTitle: 'Réseaux Sociaux Entreprise Locale : le Guide',
    seoDesc:
      "Le guide complet des réseaux sociaux pour une TPE ou un artisan : choisir sa plateforme, tenir un rythme, mesurer, et transformer des vues en clients.",
    excerpt:
      "Tout ce qu'il faut décider, dans l'ordre, pour qu'une présence sur les réseaux amène réellement des clients à une entreprise locale. Sans jargon et sans promesse en l'air.",
    readTime: '15 min',
    updated: '2026-08-07',
    ctaTo: '/reseaux-sociaux',
    ctaLabel: 'Voir comment je gère les réseaux de mes clients',
    chapters: [
      {
        title: 'Commencez par décider, pas par publier',
        body: [
          "La raison pour laquelle la plupart des entreprises abandonnent les réseaux sociaux au bout de deux mois n'est pas le manque de résultats. C'est qu'elles n'ont jamais rien décidé. Elles ont ouvert trois comptes, publié au coup par coup, et laissé la charge s'ajouter à une semaine déjà pleine.",
          "Une présence qui tient repose sur quatre décisions prises une seule fois : une plateforme principale, un rythme réaliste, une rotation de formats, et une façon de mesurer. Une fois ces quatre points arrêtés, le travail hebdomadaire devient de l'exécution, et l'exécution se tient.",
          "Le reste de ce guide suit cet ordre. Il est volontairement séquentiel : chaque étape suppose la précédente.",
        ],
        articles: [
          'quel-reseau-social-choisir-entreprise-locale',
          'instagram-ou-facebook-entreprise-locale',
          'tiktok-entreprise-locale',
        ],
      },
      {
        title: 'Choisir une plateforme, et une seule au début',
        body: [
          "Il n'existe pas de meilleure plateforme. Il existe celle où vos clients passent du temps, et les autres. Pour trancher, regardez l'âge réel de vos clients payants, la nature de votre métier, et la vitesse à laquelle vos clients décident.",
          "Une clientèle de plus de 45 ans sur un métier local penche vers Facebook, notamment parce que les groupes de commune y sont un canal de recommandation très actif. Une clientèle de 25 à 45 ans sur un métier visuel penche vers Instagram, qui distribue mieux vers des inconnus géographiquement proches. TikTok se justifie quand vous vendez à distance ou quand vos clients ont moins de trente ans.",
          "La deuxième plateforme viendra plus tard, et elle vous coûtera presque rien, parce que vous republierez ce que vous avez déjà tourné. Le coût d'une présence, ce n'est pas la publication, c'est la production.",
        ],
        articles: ['quel-reseau-social-choisir-entreprise-locale', 'compte-instagram-professionnel-reglages'],
      },
      {
        title: 'Régler correctement son compte, une fois pour toutes',
        body: [
          "Ces réglages agissent en permanence, sur chaque visiteur, tous les jours. Une bio mal écrite ou un champ nom mal rempli vous fait perdre un pourcentage de gens en continu, sans que rien ne le signale.",
          "Le champ nom d'Instagram, en particulier, est le seul pris en compte par la recherche interne. Écrire votre métier et votre ville dedans est un des rares réglages qui a un effet direct et mesurable sur le nombre de gens qui vous trouvent sans vous chercher.",
          "Comptez vingt minutes pour tout mettre à plat, et n'y revenez plus.",
        ],
        articles: ['compte-instagram-professionnel-reglages'],
      },
      {
        title: 'Tenir un rythme que vous garderez le mois où tout ira mal',
        body: [
          "Deux publications par semaine pendant six mois battent quinze publications en trois semaines suivies du silence. Ce n'est pas une question d'algorithme, c'est une question d'accumulation : les gens ont besoin de vous voir plusieurs fois avant de vous contacter.",
          "Le seul moyen fiable de tenir ce rythme est de supprimer la décision quotidienne. Vous planifiez un mois en une heure, vous tournez tout en une demi-journée, vous montez groupé, et vous programmez. Ensuite vous n'ouvrez plus l'application que pour répondre aux commentaires.",
          "C'est exactement le fonctionnement que j'utilise avec mes clients, et c'est ce qui rend la régularité possible quand on a déjà un métier à plein temps.",
        ],
        articles: [
          'calendrier-editorial-reseaux-sociaux',
          'combien-publier-reseaux-sociaux',
          'tourner-plusieurs-videos-une-journee',
        ],
      },
      {
        title: 'Produire du contenu que les gens regardent vraiment',
        body: [
          "Les trois premières secondes décident de la portée totale de la vidéo. Tout le reste est un multiplicateur, l'accroche est un interrupteur. Si personne ne reste, il n'y a rien à multiplier.",
          "Ensuite viennent le son, qui compte plus que l'image, et les sous-titres, sans lesquels une part importante de votre audience ne comprend rien. Ce sont les deux investissements les plus rentables de toute la production, et ils coûtent respectivement le prix d'un micro cravate et trois minutes de relecture.",
          "Le fond, lui, se trouve dans votre quotidien. Les questions que vos clients vous posent au téléphone constituent une réserve inépuisable de sujets que vous n'avez pas à inventer.",
        ],
        articles: [
          'accroche-video-3-secondes',
          'idees-contenu-reseaux-sociaux',
          'sous-titres-videos',
          'son-video-smartphone',
        ],
      },
      {
        title: 'Comprendre ce que la plateforme récompense',
        body: [
          "Le mécanisme est le même partout. Votre vidéo est montrée à un petit groupe. Si les gens restent, elle est montrée à un groupe plus large. S'ils partent, la diffusion s'arrête. Le comportement des spectateurs commande tout le reste.",
          "C'est pour cette raison que les hashtags ont perdu presque tout leur poids : les plateformes transcrivent l'audio, lisent le texte à l'écran et reconnaissent les lieux. Dire votre métier et votre ville à voix haute pèse aujourd'hui plus lourd qu'une liste de mots dièse.",
          "Il reste un usage défendable des hashtags, et c'est le local : votre commune, votre vallée, votre département. Peu utilisés, réellement consultés, et cohérents avec votre ancrage.",
        ],
        articles: [
          'algorithme-reseaux-sociaux-comprendre',
          'hashtags-encore-utiles',
          'pourquoi-mes-videos-ne-font-pas-de-vues',
        ],
      },
      {
        title: 'Mesurer les bons chiffres, ignorer les autres',
        body: [
          "Le nombre d'abonnés est le chiffre le plus regardé et le moins utile. Un compte de 600 abonnés locaux vaut mieux qu'un compte de 10 000 abonnés dispersés, parce que seuls les premiers peuvent acheter chez vous.",
          "Quatre indicateurs suffisent : la rétention sur les premières secondes, la part de non abonnés touchés, les enregistrements et partages, et les visites de profil rapportées aux vues. Aucun n'est visible depuis l'extérieur, ce qui explique probablement qu'on en parle si peu.",
          "Le seul chiffre qui compte vraiment, lui, ne se trouve dans aucune application : combien de demandes vous sont venues des réseaux ce mois-ci. Ajoutez la question dans votre formulaire de contact et notez la réponse.",
        ],
        articles: ['statistiques-instagram-comprendre', 'abonnes-ou-clients', 'combien-de-temps-resultats-reseaux-sociaux'],
      },
      {
        title: 'Transformer des vues en demandes',
        body: [
          "Beaucoup de comptes font des vues et zéro demande. Entre la vidéo et le message, il y a un parcours, et ce parcours a presque toujours les mêmes trous.",
          "La vidéo ne dit pas votre métier ni votre ville. Rien n'indique quoi faire ensuite. Le profil ne prend pas le relais. Ou la destination du lien est lente et compliquée. Quatre corrections, une heure de travail, et l'effet porte sur toutes vos publications futures.",
          "Sachez aussi que la conversion est lente par nature. Beaucoup de gens vous suivent pendant des mois avant d'écrire, simplement parce qu'ils n'ont pas encore de projet. Ce délai ne se raccourcit pas, il se prépare.",
        ],
        articles: ['transformer-vues-en-clients', 'reseaux-sociaux-ou-site-web', 'deleguer-reseaux-sociaux'],
      },
      {
        title: 'Diffuser partout à partir d\'une seule production',
        body: [
          "Une fois la vidéo montée et sous-titrée, la publier sur une plateforme de plus prend cinq minutes. C'est le meilleur rapport effort résultat de tout le sujet.",
          "La seule précaution technique sérieuse est le filigrane : n'utilisez jamais le bouton de téléchargement d'une plateforme, exportez toujours un fichier propre depuis votre logiciel de montage. Le logo d'un concurrent réduit la diffusion.",
          "Un tournage, un montage, quatre points de sortie. C'est de la distribution, pas de la dispersion.",
        ],
        articles: ['publier-meme-video-plusieurs-plateformes', 'montage-video-verticale-debutant'],
      },
      {
        title: 'Le cas de votre métier',
        body: [
          "Les principes ne changent pas, les formats qui fonctionnent le mieux, si. Un salon de coiffure a un avantage énorme avec l'avant après. Un restaurant gagne à filmer le geste plutôt que l'assiette. Un thérapeute doit lever une barrière de confiance que les métiers manuels n'ont pas.",
          "Ces articles reprennent le guide en l'appliquant à des situations précises, avec les contraintes propres à chacune, y compris juridiques quand il s'agit de filmer des clients.",
        ],
        articles: [
          'reseaux-sociaux-artisan-savoie',
          'restaurant-reseaux-sociaux',
          'coiffeur-esthetique-reseaux-sociaux',
          'therapeute-reseaux-sociaux-clients',
        ],
      },
      {
        title: 'Faire soi-même ou déléguer',
        body: [
          "Faire soi-même représente environ une journée par mois en tournage et montage groupés. La vraie question n'est pas de savoir si vous en êtes capable, c'est de savoir si vous le ferez encore au huitième mois, entre les chantiers, les devis et la comptabilité.",
          "Déléguer se chiffre selon un seul critère : qui produit les images. Une prestation où vous fournissez la matière coûte peu et s'arrête généralement au bout de six semaines faute de matière. Une prestation avec tournage sur place coûte davantage et résout le problème réel.",
          "Quel que soit votre choix, engagez-vous sur six mois. En dessous, vous dépenserez sans jamais atteindre le point où ça commence à produire.",
        ],
        articles: ['prix-gestion-reseaux-sociaux', 'deleguer-reseaux-sociaux', 'parler-face-camera-timide'],
      },
    ],
    faq: [
      {
        q: 'Par quoi commencer quand on part de zéro ?',
        a: "Par choisir une seule plateforme et écrire dix questions que vos clients vous posent au téléphone. Vous avez vos dix premières vidéos et vous n'avez rien inventé.",
      },
      {
        q: 'Combien de temps avant des résultats ?',
        a: "Trois à six mois de publication régulière avant que les demandes deviennent prévisibles. Le creux se situe entre la sixième et la dixième semaine, et c'est là que la plupart des gens abandonnent.",
      },
      {
        q: 'Faut-il être sur plusieurs réseaux ?',
        a: "Pas au début. Une plateforme tenue correctement vaut mieux que quatre comptes abandonnés. Ajoutez les autres quand la production tourne, en republiant le même contenu.",
      },
      {
        q: 'Les réseaux sociaux remplacent-ils un site web ?',
        a: "Non, ils font un métier différent. Les réseaux créent l'envie chez des gens qui ne cherchaient rien, le site et la fiche Google captent ceux qui cherchent déjà. Et votre audience sur une plateforme ne vous appartient pas.",
      },
      {
        q: 'Faut-il montrer son visage ?',
        a: "C'est plus efficace, notamment dans les métiers de service où l'on fait entrer quelqu'un chez soi. Ce n'est pas obligatoire : filmer ses mains au travail, les matières et les résultats fonctionne très bien.",
      },
    ],
  },
  {
    slug: 'video-smartphone-entreprise',
    label: 'Filmer avec un smartphone',
    kicker: 'Guide technique',
    title: 'Filmer des vidéos pour son entreprise avec un smartphone',
    seoTitle: 'Filmer avec un Smartphone : Guide Complet',
    seoDesc:
      "Son, lumière, cadrage, accroche, montage, sous-titres, export : tout ce qu'il faut savoir pour produire des vidéos courtes propres avec un téléphone.",
    excerpt:
      "La partie technique, dans l'ordre où elle compte réellement. Spoiler : le son passe avant l'image, et l'accroche passe avant les deux.",
    readTime: '13 min',
    updated: '2026-08-07',
    ctaTo: '/reseaux-sociaux',
    ctaLabel: 'Faire filmer par quelqu\'un dont c\'est le métier',
    chapters: [
      {
        title: 'L\'ordre des priorités, contre-intuitif mais vérifiable',
        body: [
          "Presque tout le monde commence par l'image. C'est l'erreur la plus coûteuse, parce que l'image est le facteur le plus tolérant de la chaîne.",
          "L'ordre réel est le suivant : l'accroche décide de votre portée, le son décide de la tolérance du spectateur, les sous-titres décident de la compréhension d'une part importante de votre audience, et l'image arrive après. Un plan légèrement flou avec un son propre se regarde jusqu'au bout. Une image parfaite avec un son qui résonne se coupe en deux secondes.",
          "Si vous n'avez qu'un budget, mettez-le dans un micro cravate sans fil, pas dans un éclairage.",
        ],
        articles: ['accroche-video-3-secondes', 'son-video-smartphone'],
      },
      {
        title: 'Les trois premières secondes',
        body: [
          "Votre vidéo est montrée à un petit échantillon. La plateforme regarde combien de gens restent. La courbe de rétention d'une vidéo moyenne s'effondre dans la première seconde puis se stabilise, ce qui veut dire que votre portée totale se joue avant que votre sujet ait commencé.",
          "Les ouvertures qui tuent une vidéo sont toujours les mêmes : une salutation, un logo animé, une annonce de ce que vous allez dire, un plan large silencieux. Elles s'adressent à quelqu'un qui aurait déjà décidé de regarder.",
          "La règle la plus utile de toutes : coupez au montage la première phrase que vous aviez prévue. Dans neuf cas sur dix, la vraie accroche est la deuxième.",
        ],
        articles: ['accroche-video-3-secondes', 'pourquoi-mes-videos-ne-font-pas-de-vues'],
      },
      {
        title: 'Le son',
        body: [
          "Le micro d'un téléphone est correct, son problème est sa position. À trente centimètres il fait un travail honnête, à deux mètres il capte autant la pièce que vous.",
          "Un micro cravate sans fil règle la question définitivement, quelle que soit la distance de la caméra. Prenez-en un livré avec une bonnette anti-vent, parce qu'une vidéo tournée dehors sans protection est souvent inutilisable et que vous ne vous en apercevez qu'au montage.",
          "La pièce compte autant que le micro. Des murs nus et du carrelage donnent un son de cage d'escalier. Une pièce meublée, une position éloignée des murs et un micro proche de la bouche règlent l'essentiel.",
        ],
        articles: ['son-video-smartphone', 'filmer-avec-son-telephone'],
      },
      {
        title: 'La lumière, gratuite si on sait où se mettre',
        body: [
          "Mettez-vous face à une fenêtre. Cette seule règle résout la grande majorité des problèmes d'image, et un téléphone ancien bien éclairé bat un téléphone récent en contre-jour.",
          "L'erreur inverse, la plus fréquente, consiste à se placer dos à la fenêtre pour montrer la vue. Le téléphone expose alors pour l'extérieur et votre visage devient une silhouette.",
          "Dehors, évitez le plein midi, qui creuse les ombres. Un ciel couvert est une excellente nouvelle : les nuages transforment le ciel en une source diffuse géante.",
        ],
        articles: ['lumiere-video-smartphone', 'filmer-avec-son-telephone'],
      },
      {
        title: 'Être à l\'aise, ou s\'en passer',
        body: [
          "Parler à une caméra est difficile parce qu'il n'y a aucun retour. Personne ne hoche la tête, personne ne relance, et votre cerveau interprète le silence comme du désintérêt.",
          "Trois choses aident vraiment : parler à une personne précise plutôt qu'à un public, filmer en marchant ou en travaillant plutôt qu'immobile, et n'écrire que la première phrase au lieu d'apprendre un texte.",
          "Et si vous ne voulez toujours pas apparaître, ne vous forcez pas. Les mains au travail, l'avant après et la voix en fond sur des images fonctionnent très bien, en particulier dans les métiers manuels.",
        ],
        articles: ['parler-face-camera-timide', 'tourner-plusieurs-videos-une-journee'],
      },
      {
        title: 'Tourner groupé',
        body: [
          "Filmer une vidéo demande une mise en route qui coûte à peu près le même temps que vous en fassiez une ou dix. Sur une seule vidéo, cette mise en route représente l'essentiel du travail. Sur dix, elle devient négligeable.",
          "Une demi-journée préparée donne huit à douze vidéos, soit un mois entier de publication. Sans préparation, la même demi-journée en donne trois ou quatre, parce que le temps part en réflexion.",
          "Deux astuces qui rendent l'illusion crédible : trois hauts différents changés toutes les trois vidéos, et deux lieux de tournage. Personne ne devinera que tout a été tourné le même matin.",
        ],
        articles: ['tourner-plusieurs-videos-une-journee', 'calendrier-editorial-reseaux-sociaux'],
      },
      {
        title: 'Monter sans y passer la soirée',
        body: [
          "L'ordre des opérations compte plus que la maîtrise du logiciel. Cinq passes, du plus grossier au plus fin, sans jamais revenir en arrière : couper le gras, resserrer, sous-titrer, habiller légèrement, exporter.",
          "L'habillage est l'endroit où les débutants perdent une heure. Limitez-vous à un texte d'accroche, une musique très basse sans paroles, et éventuellement deux plans d'illustration. Les transitions animées et les sous-titres qui rebondissent en changeant de couleur donnent une impression d'approximation sur un compte d'entreprise.",
          "Créez un modèle une seule fois, avec votre police, votre taille et votre position de sous-titres. Vos vidéos deviennent reconnaissables en une demi-seconde, ce qui compte réellement dans la construction d'une marque locale.",
        ],
        articles: ['montage-video-verticale-debutant', 'sous-titres-videos'],
      },
      {
        title: 'Exporter et diffuser',
        body: [
          "Vertical, 1080 par 1920 pixels, 30 images par seconde, sans filigrane. Ce fichier devient votre fichier maître, celui que vous enverrez sur toutes les plateformes.",
          "Gardez une marge de sécurité : rien d'important dans les 15 % du bas ni dans les 15 % de droite, parce que chaque plateforme superpose sa propre interface. Vos sous-titres se placent aux deux tiers de la hauteur.",
          "Ne republiez jamais un fichier téléchargé depuis une plateforme concurrente. Le filigrane est détecté et la diffusion réduite.",
        ],
        articles: ['publier-meme-video-plusieurs-plateformes', 'montage-video-verticale-debutant'],
      },
    ],
    faq: [
      {
        q: 'Quel matériel acheter en premier ?',
        a: "Un micro cravate sans fil avec sa bonnette anti-vent. Il améliore davantage la perception de qualité que n'importe quel accessoire d'image au même prix.",
      },
      {
        q: 'Faut-il filmer en 4K ?',
        a: "Non. Le 1080p à 30 images par seconde suffit largement, les fichiers sont quatre fois plus légers et les plateformes recompressent de toute façon.",
      },
      {
        q: 'Combien de temps prend une vidéo de trente secondes ?',
        a: "Quarante minutes les premières fois, quinze à vingt minutes en régime de croisière. Groupez le montage pour réduire encore ce temps.",
      },
      {
        q: 'Faut-il un trépied ?',
        a: "Utile pour parler face caméra, inutile pour filmer un geste ou un chantier. Un support stable de fortune fait souvent l'affaire au début.",
      },
    ],
  },
  {
    slug: 'visibilite-google-locale',
    label: 'Être visible sur Google localement',
    kicker: 'Guide référencement',
    title: 'Être visible sur Google quand on est une entreprise locale',
    seoTitle: 'Visibilité Google Locale : le Guide Complet',
    seoDesc:
      "Fiche Google Business, avis, pages par ville, site rapide : la méthode complète pour sortir sur Google quand quelqu'un cherche votre métier près de chez vous.",
    excerpt:
      "Comment fonctionne réellement une recherche locale, et dans quel ordre travailler pour que votre entreprise apparaisse quand on cherche votre métier dans votre ville.",
    readTime: '14 min',
    updated: '2026-08-07',
    ctaTo: '/services',
    ctaLabel: 'Voir tous les services',
    chapters: [
      {
        title: 'Une recherche locale, ce n\'est pas une liste',
        body: [
          "Quand quelqu'un tape votre métier suivi de votre ville, il ne voit pas une liste de sites. Il voit trois zones empilées qui obéissent à des règles différentes : les annonces payantes, un bloc carte avec trois entreprises, puis les résultats classiques.",
          "Beaucoup d'entreprises travaillent la mauvaise zone pendant des mois. Elles investissent dans leur site alors que l'essentiel du trafic local part dans le bloc carte, qui ne se gagne pas avec un site mais avec une fiche Google et des avis.",
          "Le bloc carte est aussi le plus accessible pour une petite structure, parce que la concurrence y est géographique. Vous ne vous battez pas contre des annuaires nationaux, vous vous battez contre les quatre autres entreprises de votre commune.",
        ],
        articles: ['etre-premier-google-dans-sa-ville', 'pourquoi-site-pas-sur-google'],
      },
      {
        title: 'La fiche Google Business, avant tout le reste',
        body: [
          "Elle est gratuite, elle s'affiche au-dessus de tous les résultats classiques, et la plupart des entreprises la remplissent à moitié puis n'y touchent plus.",
          "Trois réglages pèsent plus que les autres : la catégorie principale, qui doit être exactement votre métier dans les termes de Google et non une catégorie plus large ; la description, qui doit nommer vos communes en toutes lettres ; et les photos, qu'il faut ajouter au moins une fois par mois.",
          "Deux erreurs coûtent particulièrement cher. Mettre un mot clé dans le nom de l'entreprise est une infraction explicite, régulièrement signalée par les concurrents. Et abandonner la fiche après l'avoir créée : une fiche complète mais figée depuis deux ans perd du terrain face à une fiche moins complète mais entretenue.",
        ],
        articles: ['fiche-google-business-optimiser'],
      },
      {
        title: 'Les avis, le nerf de la guerre',
        body: [
          "Les avis agissent à deux endroits : ils font monter votre fiche dans le bloc carte, et ils convainquent ceux qui hésitaient. Le nombre compte autant que la note, et une fiche à 4,7 avec quarante avis emporte la décision face à une fiche à 5,0 avec deux avis.",
          "Le seul point qui compte vraiment est le moment de la demande. Demandez quand la personne exprime sa satisfaction, pas trois jours plus tard par email. Ce moment se présente plusieurs fois par semaine dans presque tous les métiers.",
          "Répondre est aussi important que collecter, en particulier sur les avis négatifs. Le lecteur d'un avis négatif ne cherche pas qui a raison, il cherche comment vous réagissez quand ça se passe mal. C'est une information qu'il ne peut obtenir nulle part ailleurs.",
        ],
        articles: ['obtenir-avis-google'],
      },
      {
        title: 'Des pages qui répondent à des recherches réelles',
        body: [
          "Sur les résultats classiques, les premières positions d'une recherche générique sont souvent occupées par des annuaires à gros budget. Ça ne veut pas dire qu'il faut abandonner, ça veut dire qu'il faut viser ailleurs.",
          "Les recherches précises restent largement disponibles. Une prestation nommée exactement, un problème particulier, une commune de la couronne : ces requêtes font moins de volume individuellement, elles convertissent bien mieux, et elles s'atteignent en quelques mois.",
          "Concrètement, cela veut dire une page par prestation importante et une page par ville où vous travaillez réellement, avec du contenu propre à chacune. Une page dupliquée où seul le nom de la commune change est détectée sans difficulté.",
        ],
        articles: ['etre-premier-google-dans-sa-ville', 'seo-local-guide-complet', 'quoi-ecrire-sur-son-site'],
      },
      {
        title: 'Écrire pour vos clients, ce qui revient à écrire pour Google',
        body: [
          "Ces deux objectifs ne s'opposent pas. Google essaie de répondre à des questions, vos clients posent des questions. Une page qui répond clairement, avec le vocabulaire réel des gens et le nom de votre ville, est exactement ce que Google cherche à mettre en avant.",
          "L'exercice qui débloque tout : écrivez les vingt questions que vos clients vous posent au téléphone. Chacune est un paragraphe, certaines sont une page entière. Vous n'avez rien à inventer, seulement à transcrire.",
          "Le bourrage de mots clés, lui, ne fonctionne plus depuis longtemps et peut vous desservir.",
        ],
        articles: ['quoi-ecrire-sur-son-site', 'photos-pour-son-site-web'],
      },
      {
        title: 'La technique qui compte, et celle qui ne compte pas',
        body: [
          "La vitesse sur mobile est le point technique le plus rentable, parce que la plupart des recherches locales se font sur un téléphone, souvent en déplacement et avec une connexion moyenne. Les images non optimisées expliquent la majorité des cas.",
          "Ce qui compte peu, en revanche : le design, le nombre de pages, les animations. Un site un peu daté mais clair et rapide convertit mieux qu'un site magnifique où l'on ne comprend rien.",
          "Enfin, la cohérence de vos informations sur le web pèse plus qu'on ne le croit. Un numéro de téléphone différent sur trois annuaires crée une incertitude qui vous coûte des positions.",
        ],
        articles: ['vitesse-site-web-mobile', 'mon-site-ne-genere-aucun-contact'],
      },
      {
        title: 'L\'ordre dans lequel travailler',
        body: [
          "Pour une entreprise locale qui part de rien, la séquence ne change pas. La fiche Google Business d'abord, parce que c'est gratuit et que c'est le levier le plus rapide. Les avis ensuite, avec une routine de demande installée dans le quotidien.",
          "Le site vient en troisième, avec une page par prestation et une page par ville. Puis les mentions cohérentes sur les annuaires et les sites locaux, où une association sportive ou un office de tourisme pèsent plus lourd qu'on ne l'imagine.",
          "Le contenu régulier arrive en dernier. Écrire des articles avant d'avoir une fiche Google correcte est l'erreur la plus fréquente que je rencontre.",
        ],
        articles: ['pourquoi-site-pas-sur-google', 'mon-site-ne-genere-aucun-contact', 'refonte-site-web-quand'],
      },
      {
        title: 'Combien de temps, honnêtement',
        body: [
          "Le bloc carte peut bouger en quelques semaines si votre fiche était mal remplie. C'est le seul endroit du référencement où l'on voit parfois un effet rapide.",
          "Les résultats classiques demandent trois à six mois, parfois davantage sur une ville disputée. Il n'y a pas de raccourci, et toute personne qui vous en promet un devrait vous inquiéter.",
          "Un dernier avertissement : si vous refaites votre site, conservez les adresses de vos pages ou mettez en place des redirections. C'est le moment où l'on perd en une journée ce qui s'est construit en quatre ans, et personne ne le mentionne dans les devis.",
        ],
        articles: ['refonte-site-web-quand', 'combien-coute-un-site-web'],
      },
    ],
    faq: [
      {
        q: 'Le référencement local est-il payant ?',
        a: "Non. La fiche Google Business, les avis et les pages locales sont gratuits. La publicité locale existe en parallèle mais elle s'arrête le jour où vous cessez de payer.",
      },
      {
        q: 'Faut-il un site pour apparaître sur Google localement ?',
        a: "Une fiche Google fonctionne sans site et peut suffire à apparaître dans le bloc carte. Un site reste utile pour expliquer ce que la fiche ne peut pas contenir et pour capter les recherches précises.",
      },
      {
        q: 'Combien de pages par ville faut-il créer ?',
        a: "Une par commune où vous travaillez réellement et où vous pouvez écrire quelque chose de spécifique. Créer vingt pages pour vingt communes où vous n'allez jamais dilue votre pertinence.",
      },
      {
        q: 'Que faire en premier avec un budget limité ?',
        a: "La fiche Google Business et les avis. Pour une entreprise locale, ces deux leviers produisent souvent des demandes plus rapidement que le site, et ils ne coûtent que du temps.",
      },
    ],
  },
  {
    slug: 'creer-site-web-tpe',
    label: 'Créer le site web de sa petite entreprise',
    kicker: 'Guide création',
    title: 'Créer le site web de sa petite entreprise',
    seoTitle: 'Créer un Site Web pour une TPE : le Guide',
    seoDesc:
      "Prix, délais, contenu, nom de domaine, obligations légales : tout ce qu'il faut décider pour créer un site vitrine qui amène des demandes, dans l'ordre.",
    excerpt:
      "Les décisions à prendre, dans l'ordre, pour qu'un site vitrine d'artisan ou de TPE serve réellement à quelque chose. Ce qui coûte cher, ce qui prend du temps, et ce que personne ne vous dit avant de signer.",
    readTime: '16 min',
    updated: '2026-08-13',
    ctaTo: '/services',
    ctaLabel: 'Voir comment je travaille',
    chapters: [
      {
        title: 'Décidez ce que le site doit produire, avant tout le reste',
        body: [
          "La question la plus fréquente au premier appel est \"combien ça coûte\". C'est légitime, et c'est la deuxième question. La première est : qu'est ce que ce site doit faire arriver dans votre semaine.",
          "Il n'existe pas beaucoup de réponses possibles. Un site vitrine sert à recevoir des demandes de devis, à rassurer quelqu'un qu'on vous a recommandé, à filtrer les gens hors budget avant l'appel, ou à faire connaître une activité qui démarre. Chacune de ces réponses donne un site différent.",
          "Un site qui doit rassurer met en avant des réalisations, des avis et un visage. Un site qui doit générer des demandes met en avant un formulaire court et une promesse claire. Un site qui doit filtrer affiche des ordres de grandeur de prix. Ce sont trois sites qui coûtent la même chose et qui ne se ressemblent pas.",
          "Décidez ça d'abord, en une phrase. Tout le reste du guide découle de cette phrase.",
        ],
        articles: ['pourquoi-site-web-2025', 'reseaux-sociaux-ou-site-web'],
      },
      {
        title: 'Ce que coûte réellement un site, et pourquoi les écarts sont énormes',
        body: [
          "Entre une offre à trois cents euros et un devis à huit mille, ce n'est pas le même produit, et ce n'est pas non plus une histoire de marge. Ce qui fait le prix, c'est la part de décisions que quelqu'un prend à votre place.",
          "Une offre à bas prix installe un gabarit et y met vos textes. Vous fournissez la stratégie, la structure, les mots. Une prestation complète comprend l'écriture, la structure, la mise en ligne, la vitesse et le raccordement à votre visibilité locale.",
          "L'erreur classique consiste à comparer des devis sur le nombre de pages. Le nombre de pages ne coûte presque rien. Ce qui coûte, c'est le temps passé à décider ce qu'il y a dedans.",
          "Il y a aussi ce qui n'apparaît sur aucun devis : le nom de domaine, l'hébergement, les emails professionnels, et le suivi après la livraison. Demandez ces quatre lignes systématiquement.",
        ],
        articles: ['combien-coute-un-site-web', 'agence-web-freelance-ou-plateforme'],
      },
      {
        title: 'Le faire soi-même, ou le faire faire',
        body: [
          "Les constructeurs de site tiennent leur promesse : vous aurez quelque chose en ligne sans coder. Ce qu'ils ne font pas, c'est décider de ce qui doit être écrit, dans quel ordre, et pour répondre à quelle objection.",
          "Le calcul honnête inclut votre temps. Comptez vingt à quarante heures pour un premier site de cinq pages, textes compris, quand on n'a jamais fait. Prises sur des soirées et des week-ends, ces heures ont un coût réel.",
          "Faire soi-même est le bon choix quand la trésorerie est à zéro, quand l'activité est encore floue, ou quand le besoin se limite à une carte de visite en ligne. C'est un mauvais choix quand le site est votre canal d'acquisition principal, quand vous vendez cher, ou quand vous n'aurez jamais le temps de le finir.",
          "Il existe un montage intermédiaire que je recommande souvent : faire construire la structure et les textes, puis gérer soi-même ce qui bouge, les réalisations et les actualités. Vous payez une fois ce que vous ne savez pas faire, et vous gardez la main sur les dix minutes par mois.",
        ],
        articles: ['faire-son-site-soi-meme-ou-pro', 'agence-web-freelance-ou-plateforme'],
      },
      {
        title: 'Le contenu est le vrai chantier',
        body: [
          "Sur un projet de site vitrine, la partie technique se déroule sans surprise. Ce qui prend du temps calendaire, c'est de rassembler les textes, les photos et les décisions. C'est aussi ce qui décide si le site rapporte quelque chose.",
          "La méthode qui débloque tout le monde tient en une phrase : notez les vingt questions que vos clients vous posent au téléphone. Pas celles que vous aimeriez qu'ils posent, celles qu'ils posent vraiment. Chacune devient un paragraphe, et certaines une page entière.",
          "Les six trous que je retrouve le plus souvent : ce que vous faites en une phrase compréhensible, où vous intervenez avec le nom des communes, un ordre de grandeur de prix, ce qui se passe concrètement si on vous appelle, à quoi ressemble le travail fini, et qui vous êtes.",
          "Pour les photos, une seule règle : les vôtres, même imparfaites, valent mieux que des images de banque. Un visiteur reconnaît une photo générique en une seconde et il en tire une conclusion sur vous.",
        ],
        articles: ['quoi-ecrire-sur-son-site', 'photos-pour-son-site-web'],
      },
      {
        title: 'La structure qui transforme un visiteur en demande',
        body: [
          "Un site vitrine de TPE n'a pas besoin de quinze pages. Il a besoin d'une page d'accueil qui dit qui vous êtes et ce que vous faites en trois secondes, d'une page par prestation principale, d'une page de réalisations, d'une page de contact et des pages légales.",
          "Le point de fuite le plus fréquent est le formulaire. Chaque champ supplémentaire fait perdre des gens. Nom, moyen de contact, message : trois champs suffisent dans la quasi-totalité des cas, et vous poserez le reste au téléphone.",
          "Deuxième point de fuite : le numéro de téléphone qui n'est pas cliquable sur mobile, ou qui n'apparaît qu'en bas de la page de contact. Sur un métier local, l'appel reste le canal majoritaire.",
          "Si votre besoin se limite à une offre unique, une page bien construite fait souvent mieux qu'un site complet. C'est le format que je conseille pour une ouverture, un lancement ou une activité qui démarre.",
        ],
        articles: ['landing-page-efficace', 'formulaire-contact-qui-convertit', 'mon-site-ne-genere-aucun-contact'],
      },
      {
        title: 'Nom de domaine et hébergement : sachez ce qui vous appartient',
        body: [
          "C'est le chapitre le plus ennuyeux et celui qui coince le plus de gens. Le nom de domaine est votre adresse, l'hébergement est le terrain, le site est le bâtiment. Les trois sont indépendants et se changent séparément.",
          "Une seule règle, non négociable : le nom de domaine doit être enregistré à votre nom ou à celui de votre société, avec votre adresse email. Un prestataire peut le gérer, il ne doit pas en être titulaire.",
          "Les deux scénarios qui arrivent quand cette règle n'est pas respectée : vous voulez changer de prestataire et vous ne pouvez pas emmener votre adresse, ou le prestataire disparaît et le domaine expire sans que personne s'en aperçoive.",
          "La vérification prend cinq minutes avec un outil public de consultation des domaines. Faites la ce soir si vous avez un doute.",
        ],
        articles: ['nom-de-domaine-hebergement-comprendre'],
      },
      {
        title: 'Les obligations légales, en une heure',
        body: [
          "Trois sujets distincts qu'on mélange sans arrêt. Les mentions légales identifient l'éditeur du site et sont obligatoires dès qu'il présente une activité professionnelle. La politique de confidentialité décrit les données que vous collectez. Le bandeau cookies ne concerne que ce que votre site dépose dans le navigateur.",
          "Un site vitrine sans traceur tiers n'a pas besoin de bandeau. Beaucoup en affichent un par mimétisme, tout en oubliant les mentions légales, ce qui revient à faire l'inverse de ce qu'il faut.",
          "Le point le plus souvent absent des mentions légales est le nom de l'hébergeur. Votre prestataire vous le donne en une minute.",
          "Le risque n'est pas un contrôle surprise. Il apparaît le jour où quelqu'un a un motif de vous chercher des ennuis, et il se neutralise en une heure de travail, une seule fois.",
        ],
        articles: ['mentions-legales-rgpd-cookies-site'],
      },
      {
        title: 'Combien de temps ça prend vraiment',
        body: [
          "Trois à huit semaines pour un site vitrine de cinq à dix pages. La fourchette est large parce qu'elle dépend surtout de vous : la vitesse à laquelle vous fournissez le contenu et validez les étapes.",
          "Le déroulé habituel : un échange de cadrage, une à deux semaines pour rassembler la matière, une à deux semaines de construction, un tour de retours groupés, puis la mise en ligne et les vérifications sur téléphone.",
          "Les trois causes de dérapage, dans l'ordre : le contenu qui n'arrive jamais, les décideurs multiples qui ne tranchent pas, et le périmètre qui gonfle en cours de route.",
          "Une seule chose accélère réellement un projet : arriver avec les textes écrits et les photos triées. Demander à aller vite sans changer cette condition reporte simplement le temps sur les corrections d'après mise en ligne.",
        ],
        articles: ['combien-de-temps-creer-site-web'],
      },
      {
        title: 'Après la mise en ligne, être trouvé',
        body: [
          "Un site neuf n'apparaît pas sur Google le lendemain. Il faut qu'il soit découvert, exploré, puis jugé pertinent, et ça se compte en semaines ou en mois selon la concurrence sur vos requêtes.",
          "Pour une entreprise locale, l'ordre efficace est contre-intuitif : la fiche Google Business et les avis produisent des demandes plus vite que le site lui-même, parce que le bloc carte capte une grande partie des recherches par métier et par ville.",
          "Le site reste indispensable pour les recherches précises, celles qui contiennent une question plutôt qu'un métier. C'est là que les articles et les pages de prestation travaillent pour vous, y compris longtemps après avoir été écrits.",
          "Vérifiez enfin la vitesse sur un vrai téléphone, en connexion mobile, pas sur votre ordinateur en fibre. C'est la condition la plus souvent négligée et la plus facile à mesurer.",
        ],
        articles: ['pourquoi-site-pas-sur-google', 'etre-premier-google-dans-sa-ville', 'vitesse-site-web-mobile'],
      },
      {
        title: 'Quand refaire, et quand surtout ne pas refaire',
        body: [
          "Refaire un site qui n'en avait pas besoin produit un client déçu six mois plus tard, quand les demandes n'ont pas augmenté. Avant d'engager une refonte, il faut savoir ce qui ne marche pas et pourquoi.",
          "Les vrais motifs de refonte : le site n'est pas utilisable sur téléphone, il est lent au point de faire fuir, vous n'osez pas envoyer son adresse à un prospect, ou vous ne pouvez plus le modifier faute d'accès.",
          "Les faux motifs : il a trois ans, il ne vous plaît plus, un concurrent a fait le sien. Aucun de ces trois n'a d'effet sur vos demandes.",
          "Très souvent, le problème se règle avec des corrections ciblées : réécrire la page d'accueil, ajouter les prix, raccourcir le formulaire, remplacer les photos. C'est moins spectaculaire et beaucoup plus rentable.",
        ],
        articles: ['refonte-site-web-quand', 'mon-site-ne-genere-aucun-contact'],
      },
    ],
    faq: [
      {
        q: 'Par quoi commencer quand on part de zéro ?',
        a: "Par la liste des vingt questions que vos clients vous posent au téléphone, et par la fiche Google Business, qui est gratuite et qui produit des demandes avant même que le site existe. Le choix de l'outil vient bien après.",
      },
      {
        q: 'Combien de pages faut-il pour un site vitrine ?',
        a: "Cinq à dix suffisent dans la grande majorité des cas : accueil, une page par prestation principale, réalisations, contact, et les pages légales. Le nombre de pages ne coûte presque rien, leur contenu si.",
      },
      {
        q: 'Un site suffit-il pour être visible ?',
        a: "Non, pas seul et pas tout de suite. Pour une entreprise locale, la fiche Google Business et les avis apportent souvent les premières demandes, et le site prend le relais sur les recherches précises et sur la confiance.",
      },
      {
        q: 'Faut-il afficher ses prix ?',
        a: "Au minimum un ordre de grandeur ou une méthode de chiffrage. L'absence totale d'indication fait fuir les visiteurs sérieux, parce qu'elle laisse craindre le pire et qu'un concurrent, lui, aura donné un chiffre.",
      },
      {
        q: 'Que se passe-t-il après la livraison ?',
        a: "Un site vitrine bien construit demande peu d'entretien, mais zéro suivi n'est pas une bonne réponse non plus. Sachez à l'avance qui répond si le site tombe, qui met à jour, et combien coûte une modification.",
      },
    ],
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((guide) => guide.slug === slug);

/** Guide pilier associe a un article, via son champ `pillar`. */
export const getGuideByPath = (path?: string): Guide | undefined =>
  path ? guides.find((guide) => `/guides/${guide.slug}` === path) : undefined;
