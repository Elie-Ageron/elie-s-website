import type { BlogPost } from './types';

/**
 * Cluster "metiers de la montagne". Veine locale la moins concurrencee de
 * Savoie : location saisonniere, hebergement de station, encadrement sportif,
 * et la contrainte commune a tous, la saisonnalite.
 */
export const tourismePosts: BlogPost[] = [
  {
    id: '58',
    slug: 'location-saisonniere-reservation-directe',
    titleFr: 'Location saisonnière : sortir de la dépendance aux plateformes',
    excerptFr:
      "Chaque réservation passe par un intermédiaire qui prend sa part et garde le contact du client. Voilà comment reprendre une partie du volume en direct.",
    seoTitleFr: 'Location Saisonnière : la Réservation Directe',
    seoDescFr:
      "Reprendre des réservations en direct quand on loue un meublé en Savoie : site, fiche Google, avis et fichier client. Ce qui fonctionne réellement.",
    readTime: '10 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['location saisonnière', 'meublé de tourisme', 'réservation directe', 'montagne'],
    related: [
      'entreprise-saisonniere-communication',
      'hebergement-station-reseaux-sociaux',
      'creer-fiche-google-business',
    ],
    faqFr: [
      {
        q: 'Faut-il quitter les plateformes de réservation ?',
        a: "Non, et ce serait risqué. Elles apportent de la visibilité et des premiers clients. L'objectif raisonnable est de reprendre une part du volume en direct, surtout les clients qui reviennent, pas de tout couper d'un coup.",
      },
      {
        q: 'Un site suffit-il pour recevoir des réservations directes ?',
        a: "Un site seul ne suffit pas : il faut aussi que les gens vous trouvent. En pratique, le trio qui fonctionne est un site avec un calendrier à jour, une fiche Google Business, et un fichier de clients passés que vous recontactez avant l'ouverture des réservations.",
      },
      {
        q: 'Peut-on proposer un tarif moins cher en direct ?',
        a: "Les plateformes encadrent contractuellement ce que vous pouvez afficher ailleurs, et les règles varient selon les plateformes et les périodes. Une solution courante consiste à garder le même tarif et à offrir quelque chose en direct plutôt qu'à casser le prix.",
      },
    ],
    contentFr: `
Une propriétaire de la Tarentaise m'a montré ses chiffres l'hiver dernier. Son appartement était plein, elle était contente, et quand on a mis à plat ce que prenaient les plateformes sur une saison complète, le montant valait plusieurs semaines de location.

Ce n'est pas un scandale. Les plateformes apportent de la visibilité, et cette visibilité a un prix. Le problème commence quand elles sont votre seul canal, parce qu'alors ce n'est plus un prix, c'est une dépendance.

## Ce que vous perdez sans le voir

La commission, tout le monde la connaît. Elle se répète à chaque nuitée, chaque année, y compris sur les clients qui reviennent pour la troisième fois.

Le contact, presque personne n'y pense. Le client réserve, il séjourne, il repart, et vous n'avez ni son email ni son téléphone. L'année suivante, il repasse par la plateforme, et vous repayez pour un client que vous aviez déjà.

Le classement, enfin. Votre visibilité dépend d'un algorithme que vous ne contrôlez pas et qui peut changer d'une saison à l'autre. Un ajustement des règles, et les réservations chutent sans que vous ayez rien changé.

## L'objectif réaliste

Je ne conseille à personne de couper les plateformes. Ce serait risquer une saison entière pour une question de principe.

L'objectif tenable est de reprendre progressivement une part du volume en direct, en commençant par la plus facile à reprendre : les clients qui sont déjà venus.

Un client qui a passé une semaine chez vous, qui a aimé, et à qui vous écrivez en octobre pour lui proposer ses dates avant tout le monde, n'a aucune raison de repasser par un intermédiaire.

## Le fichier client, l'actif que personne ne construit

C'est le point de départ, et il ne coûte rien.

À chaque séjour, récupérez un email et un prénom. Le moment naturel est l'arrivée ou la remise des clés, avec une raison concrète : envoyer les informations pratiques, le code du portail, les bonnes adresses du coin, la carte des pistes.

Notez ensuite ce qui vous servira plus tard : combien ils étaient, avec ou sans enfants, quelle semaine, ce qu'ils ont demandé. Un tableau suffit, il n'y a pas besoin d'outil.

En octobre, vous écrivez à toute votre liste avant l'ouverture des réservations. Pas une promotion, un message simple : voilà les semaines encore libres cet hiver, dites moi si vous voulez que je vous en bloque une.

C'est la chose la plus rentable de tout cet article, et elle demande une heure par an.

## Le site : ce qu'il doit contenir

Un site de location n'a pas besoin d'être beau, il a besoin de répondre à ce que les gens vérifient avant de réserver.

Un calendrier de disponibilités à jour. C'est la première chose que cherche un visiteur, et un calendrier faux ou absent fait repartir tout le monde vers les plateformes.

Les tarifs par période. Semaine de vacances scolaires, semaine creuse, week-end, court séjour si vous en faites.

Les photos, nombreuses, réelles, prises en lumière du jour. Toutes les pièces, y compris la salle de bain et le coin cuisine. Ce que les gens veulent voir, c'est ce que les annonces cachent d'habitude.

Les informations qui décident : distance réelle aux pistes ou au centre, à pied et en minutes, place de parking ou non, casier à skis, wifi, animaux acceptés, étage et ascenseur, ce qu'il faut apporter.

Les questions pratiques auxquelles vous répondez déjà par message dix fois par saison. Elles font le meilleur contenu, et c'est aussi ce que Google comprend le mieux. J'ai détaillé cette méthode dans [quoi écrire sur son site](/blog/quoi-ecrire-sur-son-site).

Un moyen de vous joindre visible partout, et un formulaire court. Trois champs suffisent : nom, contact, dates souhaitées.

Un mot sur le prix : afficher vos tarifs est une bonne idée, mais regardez ce que prévoient vos contrats de plateforme, car ils encadrent souvent ce que vous pouvez afficher ailleurs. Beaucoup de propriétaires gardent le même tarif et offrent autre chose en direct : le ménage de fin de séjour, une arrivée plus souple, un panier de produits locaux.

## La fiche Google Business

Un meublé de tourisme peut avoir une fiche Google Business, et très peu en ont une.

C'est un avantage rare : dans la plupart des stations, la concurrence sur ce canal est presque inexistante, alors que sur les plateformes vous êtes en concurrence avec deux cents annonces.

Le déroulé de création est ici : [créer sa fiche Google Business](/blog/creer-fiche-google-business). Deux points spécifiques à la location : choisissez la catégorie la plus précise que Google propose pour votre type d'hébergement, et remplissez sérieusement les photos et la description.

Ensuite, demandez des avis Google à vos locataires satisfaits, en plus des avis qu'ils laissent sur les plateformes. Ce sont deux systèmes séparés, et les avis Google, eux, vous appartiennent au sens où ils restent visibles quoi qu'il arrive à votre annonce. La méthode est dans [obtenir des avis Google](/blog/obtenir-avis-google).

## Les réseaux sociaux, pour ce qu'ils font vraiment

Une location saisonnière ne se vend pas par un compte Instagram, et je préfère le dire.

Ce que les réseaux font bien, c'est entretenir le lien avec les gens qui sont déjà venus, et donner envie à leur entourage. Une photo de la neige fraîche du matin, l'ouverture des remontées, le lac en juillet, la fête du village. Ce sont des contenus qui coûtent trente secondes et qui rappellent votre existence au bon moment.

Le bon moment, justement, est le sujet de [communiquer quand on vit d'une saison](/blog/entreprise-saisonniere-communication).

## Les obligations à ne pas oublier

Selon votre commune, la location d'un meublé de tourisme suppose une déclaration en mairie et parfois un numéro d'enregistrement à faire figurer sur vos annonces. Les règles varient beaucoup d'une commune à l'autre, en particulier dans les stations, et elles évoluent.

Renseignez vous directement auprès de votre mairie plutôt qu'auprès d'un forum : c'est elle qui applique les règles chez vous.

Sur le site, les mentions légales et la politique de confidentialité s'appliquent comme pour n'importe quelle activité professionnelle, et vous collectez des données personnelles dès que vous avez un formulaire. Le nécessaire est décrit dans [mentions légales et RGPD](/blog/mentions-legales-rgpd-cookies-site).

## Par où commencer si vous n'avez rien

Dans cet ordre, sur trois mois avant la saison.

Le fichier client, tout de suite, même s'il ne contient que dix adresses.

La fiche Google Business, une heure.

Le site, avec calendrier, photos et tarifs, sur quelques semaines.

Les avis Google, en continu, à chaque départ satisfait.

Le direct ne remplacera pas les plateformes en une saison. Il représentera peut-être un cinquième de vos réservations la première année, et ce cinquième est celui sur lequel vous ne payez pas de commission et dont vous gardez le contact.

Si vous louez en Savoie ou en Haute-Savoie et que vous voulez qu'on regarde ce que ça donnerait chez vous, [écrivez moi](/contact). Je suis basé à Albertville, la Tarentaise et le Beaufortain sont à côté.
    `,
  },
  {
    id: '59',
    slug: 'hebergement-station-reseaux-sociaux',
    titleFr: 'Hôtel, gîte, chambre d\'hôtes : que publier hors saison',
    excerptFr:
      "Le compte s'anime en février et se tait le reste de l'année. C'est précisément l'inverse de ce qu'il faudrait faire.",
    seoTitleFr: 'Hébergement de Montagne : Que Publier',
    seoDescFr:
      "Hôtel, gîte ou chambre d'hôtes en station : quoi publier, à quel moment de l'année, et pourquoi les mois creux sont les plus utiles.",
    readTime: '9 min',
    categoryFr: 'Réseaux sociaux',
    categorySlug: 'reseaux-sociaux',
    date: '2026-08-11',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['hôtel', 'gîte', 'chambre d\'hôtes', 'montagne', 'saison'],
    related: [
      'entreprise-saisonniere-communication',
      'location-saisonniere-reservation-directe',
      'restaurant-reseaux-sociaux',
    ],
    faqFr: [
      {
        q: 'Quand faut-il publier pour la saison d\'hiver ?',
        a: "Les recherches et les réservations démarrent bien avant les premières neiges. Publier à partir de la fin de l'été vous place dans le champ de vision des gens au moment où ils choisissent, alors que publier en février ne fait que confirmer un choix déjà fait.",
      },
      {
        q: 'Faut-il montrer les chambres ou les alentours ?',
        a: "Les deux, mais pas au même moment. Les alentours donnent envie de venir dans la vallée, les chambres rassurent quelqu'un qui compare déjà des hébergements. Le premier travaille en amont, le second au moment de la décision.",
      },
      {
        q: 'Faut-il publier en anglais aussi ?',
        a: "Si une part réelle de votre clientèle est étrangère, une légende bilingue courte suffit dans la plupart des cas. Ce n'est pas la peine de tenir deux comptes séparés tant que votre volume ne le justifie pas.",
      },
    ],
    contentFr: `
Il y a un schéma que je vois sur presque tous les comptes d'hébergements de montagne. Trente publications entre décembre et mars, plus rien d'avril à novembre.

C'est compréhensible : en saison, il se passe des choses, et hors saison on a autre chose à faire. C'est aussi exactement l'inverse du bon calendrier.

## Le décalage que personne ne corrige

Quand vous publiez en février, vos chambres sont pleines. Les gens qui vous découvrent à ce moment là ne peuvent pas venir, et ils vous auront oublié en octobre.

Quand vous vous taisez en septembre, vous êtes absent au moment précis où les familles regardent les dates, comparent les hébergements et bloquent leurs vacances.

Un contenu publié ne travaille pas au moment où il est publié. Il travaille au moment où quelqu'un le voit et prend une décision. C'est ce décalage qu'il faut viser.

## Le calendrier inversé

Voilà comment je le pose avec un hébergement de montagne.

De septembre à novembre, vous préparez l'hiver. C'est votre période la plus importante, celle où vous devez être visible, et paradoxalement celle où vous avez le plus de temps.

De décembre à mars, vous produisez de la matière. Vous n'avez pas le temps de publier proprement, mais vous avez sous les yeux tout ce qu'il faudra montrer plus tard. Filmez, photographiez, stockez.

En avril et mai, vous préparez l'été. Mêmes mécanismes, autre saison.

De juin à août, vous produisez à nouveau, et vous entretenez le lien.

Autrement dit : on communique en creux, on récolte la matière en pleine saison. Le principe s'applique à toutes les activités saisonnières, et je l'ai détaillé dans [communiquer quand on vit d'une saison](/blog/entreprise-saisonniere-communication).

## Quoi filmer pendant la saison, pour l'utiliser après

La règle est simple : quand il se passe quelque chose de beau, sortez le téléphone, même si vous ne savez pas encore quoi en faire.

La première neige sur les toits, au petit matin.

Le petit déjeuner en train d'être dressé, la vue depuis la salle, la lumière de sept heures.

Une chambre refaite, portes ouvertes, en dix secondes de travelling lent.

Le chien de la maison, les habitués qui reviennent, l'ambiance du salon quand il neige dehors.

Le trajet depuis la sortie de route jusqu'à votre portail, filmé une fois. Vous le réutiliserez pendant des années, et il répond à une vraie question.

Rangez tout dans un dossier par mois. En septembre, vous aurez de quoi publier tout l'automne sans rien produire de neuf.

## Ce qui donne envie, et ce qui rassure

Deux familles de contenu, deux fonctions différentes.

Ce qui donne envie parle de la vallée, pas de vous. Le lac, les alpages, le col qui rouvre, le marché du village, la première neige, une randonnée que vous conseillez. Ces contenus voyagent loin parce qu'ils intéressent des gens qui ne vous cherchent pas encore.

Ce qui rassure parle de vous et de la pratique. La chambre en entier sans montage flatteur, le parking, la distance réelle aux remontées, le petit déjeuner, ce qui est inclus, comment on récupère les clés en arrivant à vingt-deux heures.

L'erreur classique est de ne faire que le premier, parce que c'est plus joli. Un compte magnifique qui ne montre jamais une chambre en entier laisse un doute, et le doute fait choisir l'hébergement d'à côté.

## Ce qui marche particulièrement en montagne

Les conditions du jour. La météo, l'enneigement, l'état de la route, l'ouverture des remontées. C'est de l'information utile, les gens la cherchent, et elle vous positionne comme quelqu'un du coin.

Les conseils de terrain. Où se garer un samedi de vacances, quelle piste prendre en fin de journée quand le soleil est bas, quel restaurant ouvre le lundi, quelle randonnée avec des enfants de six ans. Personne ne connaît ça mieux que vous.

Les coulisses de l'intersaison. Les travaux, le grand ménage, la commande de bois, le jardin. Ça humanise, et ça montre qu'il y a quelqu'un derrière l'établissement.

Ce qui ne marche pas : les promotions sèches et les visuels de dernière minute. Une remise annoncée à un public qui ne vous connaît pas ne convainc personne, et elle abîme la valeur perçue auprès de ceux qui ont payé plein tarif.

## Le lien avec le reste

Les réseaux ne prennent pas de réservation. Ils entretiennent l'envie et la mémoire.

Ce qui transforme, c'est ce qui se passe ensuite : une fiche Google Business complète, des avis récents, un site où l'on voit les disponibilités et les tarifs. Si ce socle n'est pas en place, publier revient à remplir un seau percé.

Pour un hébergement, la fiche Google est particulièrement importante parce que beaucoup de gens cherchent directement sur la carte. Le déroulé est dans [créer sa fiche Google Business](/blog/creer-fiche-google-business), et la reprise de réservations en direct dans [location saisonnière](/blog/location-saisonniere-reservation-directe).

## Le rythme réaliste

Deux publications par semaine hors saison, une par semaine en pleine saison. C'est tout, et c'est déjà mieux que ce que fait la grande majorité des établissements de la vallée.

Ce rythme ne tient que si la matière est déjà tournée. C'est tout l'intérêt de filmer en saison pour publier après : la partie difficile est faite au moment où vous êtes de toute façon sur place.

C'est exactement le principe sur lequel je travaille avec mes clients : une journée de tournage sur place, puis les publications s'étalent sur le mois. Le fonctionnement est décrit sur [la page réseaux sociaux](/reseaux-sociaux).

Si vous tenez un hébergement en Tarentaise, en Beaufortain ou dans la combe de Savoie et que le compte dort dix mois par an, [écrivez moi](/contact). Je suis à Albertville, on peut en parler sur place.
    `,
  },
  {
    id: '60',
    slug: 'moniteur-guide-montagne-visibilite',
    titleFr: 'Moniteur, guide, accompagnateur : se rendre visible en indépendant',
    excerptFr:
      "Quand on travaille pour soi, la moitié de la clientèle vient du bouche à oreille. L'autre moitié se cherche, et elle se cherche en ligne.",
    seoTitleFr: 'Moniteur et Guide : Se Rendre Visible en Ligne',
    seoDescFr:
      "Moniteur de ski, guide ou accompagnateur en indépendant : comment se rendre trouvable en ligne, fidéliser ses clients et remplir ses semaines creuses.",
    readTime: '9 min',
    categoryFr: 'Réseaux sociaux',
    categorySlug: 'reseaux-sociaux',
    date: '2026-08-10',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['moniteur de ski', 'guide de montagne', 'accompagnateur', 'indépendant'],
    related: [
      'entreprise-saisonniere-communication',
      'parler-face-camera-timide',
      'creer-fiche-google-business',
    ],
    faqFr: [
      {
        q: 'Faut-il un site quand on travaille surtout par recommandation ?',
        a: "Une page suffit souvent, mais elle est utile. Quand quelqu'un vous recommande, la personne cherche votre nom avant d'appeler. Ne rien trouver, ou trouver un compte inactif, refroidit une recommandation déjà acquise.",
      },
      {
        q: 'Peut-on avoir une fiche Google Business sans local ?',
        a: "Oui. Vous déclarez une zone d'intervention plutôt qu'une adresse, ce qui correspond exactement à un métier qui s'exerce sur le terrain. Peu de moniteurs et de guides indépendants en ont une, ce qui laisse la place libre.",
      },
      {
        q: 'Que publier quand on ne veut pas se filmer ?',
        a: "Le terrain, pas votre visage. Les conditions du jour, un passage, un point de vue, un geste technique montré en gros plan, la préparation du matériel. Votre voix suffit largement, et elle porte davantage qu'un plan de vous face caméra.",
      },
    ],
    contentFr: `
Un accompagnateur de moyenne montagne me disait l'an dernier qu'il ne comprenait pas : ses clients étaient ravis, ils revenaient, et pourtant ses semaines de novembre et de mai étaient vides.

Son problème n'était pas la qualité de son travail. C'était que personne ne pouvait le trouver s'il n'était pas déjà recommandé.

## Deux moitiés de clientèle

Quand on exerce en indépendant sur un métier d'encadrement, la clientèle se répartit toujours en deux.

Celle qui vient par recommandation. Un ancien client, un hébergeur, un office de tourisme, un collègue qui n'était pas disponible. C'est la meilleure clientèle, et elle ne se commande pas.

Celle qui cherche. Quelqu'un qui arrive dans la vallée, qui tape un besoin sur son téléphone, et qui prend le premier qui répond correctement.

La plupart des indépendants travaillent uniquement avec la première et ne s'occupent jamais de la seconde. C'est précisément là que sont les semaines creuses.

## Être trouvable, avant d'être suivi

Il y a un ordre, et il n'est pas celui auquel on pense.

D'abord, être trouvable quand on vous cherche par votre nom. Quelqu'un vous a recommandé, la personne tape votre nom et votre prénom sur son téléphone dans la voiture. Si elle ne trouve rien, ou un compte abandonné en 2023, la recommandation perd de sa force.

Ensuite, être trouvable quand on cherche votre prestation. "Guide randonnée raquettes Beaufortain", "moniteur de ski particulier Les Saisies", "accompagnateur sortie famille Tarentaise". Ce sont des recherches réelles, faites par des gens qui vont réserver dans les jours qui suivent.

Enfin seulement, être suivi. L'audience vient après, et elle sert surtout à faire revenir les gens.

## La fiche Google Business, très peu utilisée dans ce métier

C'est l'anomalie la plus rentable de ce secteur : presque personne n'en a.

Vous n'avez pas besoin de local. Vous déclarez une zone d'intervention, vous masquez votre adresse, et vous apparaissez sur les recherches faites dans les communes où vous travaillez. Le déroulé complet est dans [créer sa fiche Google Business](/blog/creer-fiche-google-business).

Ce qui compte particulièrement pour vous : la catégorie la plus précise possible, la liste de vos prestations une par une avec leur description, et des photos réelles de sorties.

Puis les avis. Un client à qui vous avez fait passer une bonne journée en montagne dit oui neuf fois sur dix si vous demandez au bon moment, c'est-à-dire à la fin de la sortie, quand tout le monde est content, pas trois semaines après par email. La méthode est dans [obtenir des avis Google](/blog/obtenir-avis-google).

Trente avis dans votre vallée vous placent devant à peu près tout le monde, parce que la concurrence sur ce canal est quasi nulle.

## Une page, pas forcément un site

Vous n'avez sans doute pas besoin de huit pages. Vous avez besoin d'une page qui répond à ce qu'un client se demande avant de vous appeler.

Qui vous êtes et vos diplômes, clairement affichés. Dans un métier où la sécurité est en jeu, c'est la première chose que les gens vérifient.

Ce que vous proposez concrètement, avec les niveaux. Une sortie découverte, une journée en autonomie, une semaine, un cours particulier, un groupe.

Les tarifs, au moins en ordre de grandeur. C'est la question que tout le monde se pose et que peu osent poser.

Les zones où vous intervenez, avec les noms des massifs et des communes.

Ce qu'il faut prévoir comme matériel et comme condition physique. Ça vous évite des sorties mal calibrées.

Comment vous joindre, en un geste, avec un numéro cliquable sur mobile.

Le format d'une page unique bien construite est décrit dans [ce qui fait une landing page efficace](/blog/landing-page-efficace).

## Le contenu, sans se mettre en scène

La plupart des gens de ce métier n'ont aucune envie de faire des vidéos face caméra. Ce n'est pas un problème, parce que ce n'est pas ce qui fonctionne le mieux pour vous.

Ce qui fonctionne, c'est le terrain.

Les conditions du jour, filmées en dix secondes avec votre voix par dessus. L'état de la neige, la visibilité, ce qui est praticable et ce qui ne l'est pas. C'est de l'information utile, elle est consultée, et elle prouve votre présence sur le terrain mieux que n'importe quel discours.

Un geste technique en gros plan. Comment chausser des crampons, régler des bâtons, lire une pente, préparer un sac. Les mains suffisent.

Un passage, un point de vue, un lever de jour. Sans commentaire, avec le son du vent.

Une question de client, avec la réponse. Est ce qu'il faut savoir skier pour faire des raquettes, à partir de quel âge, que se passe-t-il s'il fait mauvais.

Votre voix porte plus loin que votre visage, et si vous voulez quand même vous montrer un peu, [j'ai écrit sur le fait de parler face caméra quand ça ne vient pas naturellement](/blog/parler-face-camera-timide).

## Les semaines creuses

C'est le vrai sujet économique du métier, et il se traite en amont.

Constituez une liste de vos clients passés, avec leur email et ce qu'ils ont fait avec vous. Écrivez leur avant la saison, pas pendant. Un message court qui dit quelles dates sont encore libres et ce que vous proposez à cette période.

Travaillez vos prescripteurs locaux : hébergeurs, offices de tourisme, loueurs de matériel, restaurants. Ce sont eux qu'on interroge en premier quand un vacancier cherche quelqu'un. Une page de partenaires sur leur site, avec un lien vers vous, vaut mieux que dix inscriptions dans des annuaires.

Et publiez en creux, pas en pleine saison. Le raisonnement complet est dans [communiquer quand on vit d'une saison](/blog/entreprise-saisonniere-communication).

Je travaille depuis Albertville, donc la Tarentaise, le Beaufortain et la combe de Savoie sont à moins d'une heure. Si vous exercez dans le coin et que vous voulez qu'on regarde ce qui manque, [écrivez moi](/contact).
    `,
  },
  {
    id: '61',
    slug: 'entreprise-saisonniere-communication',
    titleFr: 'Communiquer quand on vit d\'une saison',
    excerptFr:
      "Vous êtes débordé quand il faudrait être visible, et disponible quand plus personne ne cherche. Voilà comment retourner ce calendrier.",
    seoTitleFr: 'Communiquer Quand on Vit d\'une Saison',
    seoDescFr:
      "Activité saisonnière en montagne : quand publier, quoi préparer pendant les mois pleins, et comment remplir les périodes creuses sans casser ses prix.",
    readTime: '9 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-07',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['saisonnalité', 'montagne', 'calendrier', 'anticipation'],
    related: [
      'location-saisonniere-reservation-directe',
      'hebergement-station-reseaux-sociaux',
      'calendrier-editorial-reseaux-sociaux',
    ],
    faqFr: [
      {
        q: 'Quand faut-il commencer à communiquer pour une saison ?',
        a: "Plusieurs mois avant, au moment où les gens choisissent leurs dates, pas au moment où ils partent. Pour l'hiver en montagne, cela veut dire travailler dès la fin de l'été. Le contenu publié en pleine saison arrive après la décision.",
      },
      {
        q: 'Faut-il baisser ses prix pour remplir les périodes creuses ?',
        a: "C'est le premier réflexe et rarement le bon. Une remise attire des clients qui ne reviendront qu'à ce prix, et elle dévalorise ce que les autres ont payé. Changer l'offre, en proposant autre chose plutôt que moins cher, tient mieux dans la durée.",
      },
      {
        q: 'Que faire de son compte pendant les mois vides ?',
        a: "Le faire vivre à petit rythme avec la matière tournée en saison. Un compte silencieux six mois repart de zéro à chaque reprise, alors qu'un compte qui publie une fois par semaine reste présent dans le fil de ses abonnés.",
      },
    ],
    contentFr: `
En Savoie, une bonne partie des entreprises vit sur quatre à six mois. Hébergeurs, moniteurs, loueurs, restaurateurs de station, artisans dont le carnet suit la saison, guides, commerces de village.

Toutes se heurtent au même mur : au moment où il faudrait être visible, on n'a pas une minute, et au moment où on a du temps, plus personne ne cherche.

## Le décalage à comprendre une fois pour toutes

Un client décide bien avant de consommer.

Une famille qui part au ski en février a choisi sa station et son hébergement à l'automne. Un couple qui vient randonner en juillet a bloqué ses dates au printemps. Un particulier qui fait refaire sa terrasse en juin a demandé ses devis en mars.

Votre communication doit donc arriver au moment de la décision, pas au moment de la présence.

Publier en pleine saison ne fait pas de mal, mais ça touche des gens qui ont déjà choisi. C'est agréable, ça ne remplit pas le carnet.

## Le calendrier retourné

La règle tient en une phrase : on communique quand c'est calme, on produit la matière quand c'est plein.

Pendant la saison, vous êtes sur le terrain, entouré de tout ce qu'il faudrait montrer. Vous n'avez pas le temps de publier, mais vous avez le temps de filmer trente secondes entre deux choses. Faites uniquement ça : capter, stocker, ne rien monter.

Pendant le creux, vous avez du temps et rien à montrer en direct. C'est là que vous sortez le dossier de la saison passée, que vous montez, que vous publiez, et que vous préparez la saison suivante.

Ce n'est pas de la tricherie. Personne n'attend un direct permanent, et une belle image de janvier publiée en octobre fait exactement son travail : donner envie d'y être.

## Ce qu'il faut capter pendant les mois pleins

Une règle pratique : trois captures par semaine, dix à trente secondes chacune, sans montage.

Ce qui est beau et que vous ne verrez plus avant un an. La première neige, le brouillard qui se lève sur la vallée, la salle pleine un vendredi soir, le sommet à sept heures du matin.

Ce que vous expliquez oralement dix fois par semaine. Les questions de clients sont votre meilleur stock de sujets, et elles ne coûtent rien à collecter puisque vous y répondez déjà.

Le travail lui-même. Le geste, la préparation, ce qui se passe avant l'arrivée des clients.

Rangez par mois dans un dossier sur le téléphone. En intersaison, vous ouvrez ce dossier et vous avez de quoi publier deux mois.

## Les trois périodes de l'année

La période de décision, quelques mois avant la saison. C'est votre priorité absolue. Vous publiez le plus régulièrement, vous relancez vos anciens clients, vous vérifiez que votre site et votre fiche Google sont à jour, avec les bons horaires et les bons tarifs.

La période de saison. Rythme réduit, une publication par semaine suffit. Vous captez beaucoup, vous publiez peu. Vous répondez vite aux messages, parce que c'est le moment où une réponse rapide se transforme directement en réservation.

La période creuse d'après saison. C'est le moment du bilan et des chantiers de fond : réécrire une page du site, refaire les photos, demander les avis que vous avez oublié de demander, remettre à jour votre fichier client. Personne ne le voit, et c'est ce qui fait la différence l'année suivante.

## Remplir les creux sans casser les prix

Le réflexe est la remise. Elle a deux défauts : elle attire des gens qui ne reviendront qu'à ce prix, et elle abîme la valeur perçue auprès de ceux qui ont payé plein tarif.

Ce qui fonctionne mieux, c'est de changer l'offre plutôt que le prix.

Une clientèle différente. Un hébergement plein de familles en février peut viser les groupes, les randonneurs ou les télétravailleurs en octobre. Ce n'est pas le même produit ni le même argument.

Un format différent. Des séjours plus courts, des prestations plus légères, des créneaux en semaine.

Une raison de venir hors saison qui n'existe pas en saison. Le calme, les prix des remontées, la place sur les sentiers, le fait de vous avoir pour vous tout seul. Ce sont de vrais arguments, et ils ne coûtent rien.

Et le levier le plus efficace de tous : écrire directement aux gens qui sont déjà venus. Une liste d'emails de clients passés vaut plus que n'importe quelle campagne, parce que ces gens vous connaissent déjà et n'ont pas besoin d'être convaincus.

## Ce qui doit être en place avant tout

La communication saisonnière n'a de sens que si le socle tient.

Une fiche Google Business à jour, en particulier les horaires et les fermetures d'intersaison. Une fiche qui indique "ouvert" alors que vous êtes fermés depuis six semaines génère des avis négatifs, et c'est le pire rendement possible. Voir [créer sa fiche Google Business](/blog/creer-fiche-google-business).

Un site où les tarifs et les disponibilités de la saison à venir sont visibles au moment où les gens décident, pas trois semaines avant l'ouverture.

Des avis récents. Un avis de l'hiver dernier vaut mieux que dix avis de 2022, et la fraîcheur compte dans le classement. Voir [obtenir des avis Google](/blog/obtenir-avis-google).

Un fichier de clients passés, même sommaire. C'est l'actif le moins cher et le plus rentable d'une activité saisonnière.

## Le plan sur douze mois

Quatre mois avant la saison : mise à jour du site et de la fiche Google, message aux anciens clients, reprise du rythme de publication avec la matière de l'an dernier.

Deux mois avant : rythme soutenu, contenus qui rassurent, tarifs et disponibilités visibles.

Pendant la saison : rythme réduit, réponses rapides, captation intensive, demandes d'avis à chaque client satisfait.

Après la saison : bilan, chantiers de fond, tri de la matière captée.

Ce plan tient en quelques heures par mois hors saison. C'est ce qui le rend applicable, et c'est aussi pour ça que je le préfère aux stratégies qui demandent une publication quotidienne.

C'est le principe sur lequel je travaille avec mes clients : une journée de tournage sur place, puis les publications s'étalent sur les semaines qui suivent. Pour une activité saisonnière, ça veut dire tourner en pleine saison et diffuser pendant le creux. Le fonctionnement est décrit sur [la page réseaux sociaux](/reseaux-sociaux).

Si vous vivez d'une saison en Savoie ou en Haute-Savoie et que vous voulez poser ce calendrier sur votre année à vous, [écrivez moi](/contact).
    `,
  },
];
