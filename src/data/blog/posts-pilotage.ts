import type { BlogPost } from './types';

/**
 * Cluster "pilotage" : moteurs de reponse, mesure du retour, budget temps,
 * utilite d'un blog, et temoignages clients.
 */
export const pilotagePosts: BlogPost[] = [
  {
    id: '90',
    slug: 'chatgpt-perplexite-entreprise-locale',
    titleFr: 'Être cité par ChatGPT et les moteurs de réponse',
    excerptFr:
      "Une partie de vos clients ne cherchent plus, ils demandent. Et l'outil répond avec une poignée de sources, sans liste de résultats.",
    seoTitleFr: 'Être Cité par ChatGPT et les IA de Recherche',
    seoDescFr:
      "Comment une entreprise locale peut apparaître dans les réponses de ChatGPT, Perplexity ou les résumés Google, et ce qui ne sert à rien.",
    readTime: '9 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['chatgpt', 'moteurs de réponse', 'IA', 'citations'],
    related: [
      'trouver-mots-cles-clients',
      'etre-premier-google-dans-sa-ville',
      'creer-fiche-google-business',
    ],
    faqFr: [
      {
        q: 'Faut-il faire quelque chose de spécial pour être cité par une IA ?',
        a: "Pas vraiment de technique à part. Ce qui est cité, ce sont des pages qui répondent à une question précise, dès les premières phrases, avec des faits vérifiables. C'est aussi ce qui marche sur Google, donc le travail se recoupe largement.",
      },
      {
        q: 'Est-ce que ça amène vraiment des clients ?',
        a: "Peu de volume aujourd'hui pour une entreprise locale, mais des visiteurs très avancés dans leur décision. Ce n'est pas un canal prioritaire, c'est un bénéfice secondaire d'un contenu bien écrit.",
      },
      {
        q: 'Le fichier llms.txt sert-il à quelque chose ?',
        a: "C'est une convention proposée, pas un standard reconnu par tous. Le mettre en place coûte quelques minutes et ne peut pas nuire, mais il ne remplace pas le fait d'avoir des pages claires et lisibles sans JavaScript.",
      },
    ],
    contentFr: `
Une partie de vos futurs clients ne tape plus une requête dans une barre de recherche. Ils posent une question à un assistant, et ils reçoivent une réponse en trois paragraphes avec deux ou trois sources.

Il n'y a plus dix résultats. Il y en a un, éventuellement accompagné de liens.

Pour une entreprise locale de Savoie, ce n'est pas encore un canal majeur. C'est en revanche un bon révélateur : ce qui vous fait citer par ces outils est exactement ce qui vous fait ressortir sur Google.

## Ce que font ces outils

Ils lisent des pages web, ils en extraient ce qui répond à la question, et ils recomposent une réponse.

Trois conséquences pratiques.

Ils citent des passages, pas des sites. Une page qui répond nettement à une question précise a plus de chances d'être reprise qu'une page d'accueil qui parle de tout.

Ils privilégient ce qui est factuel et daté. Un prix, un délai, une méthode, une liste d'étapes.

Ils ont besoin de lire votre page. Si votre site ne s'affiche qu'après exécution d'un script, une partie de ces outils ne verront rien du tout.

## Le point technique qui compte vraiment

Beaucoup de sites modernes sont construits de telle façon que le contenu n'existe qu'une fois le navigateur ayant tout exécuté.

Google finit par y arriver, avec du retard. Les moteurs de réponse, souvent, non. Ils demandent la page, reçoivent une coquille vide, et passent.

C'est le seul vrai sujet technique de cet article, et c'est aussi celui que personne ne vérifie. Le test est simple : demandez à votre prestataire si le contenu de vos pages est présent dans le code source servi, avant exécution des scripts. Si la réponse est non, vous êtes invisible pour une partie de ces outils.

C'est d'ailleurs pour cette raison que ce site est pré-rendu : chaque page existe en HTML complet, lisible sans rien exécuter.

## Comment écrire une page qui se fait citer

Rien de tout ça n'est une astuce. C'est du bon sens éditorial, appliqué avec un peu de discipline.

Répondez à la question dans les deux premières phrases. Le paragraphe d'introduction qui tourne autour du sujet est un réflexe d'écriture scolaire, et il vous coûte la citation. Dites la réponse, puis expliquez.

Utilisez un titre qui est la question. Si les gens demandent "combien coûte un site web pour un artisan", c'est ce titre là qu'il faut, pas "nos tarifs".

Donnez des faits. Une fourchette de prix, un délai en semaines, un nombre d'étapes, une date. Une page pleine d'adjectifs n'a rien à extraire.

Traitez une question par page. Une page qui répond à six questions est diluée pour tout le monde.

Ajoutez une section de questions fréquentes, avec des réponses courtes et complètes. C'est le format le plus directement réutilisable par ces outils, et il sert aussi vos lecteurs pressés.

Datez ce qui peut vieillir, et mettez à jour. Un contenu daté de trois ans sur un sujet mouvant est écarté.

## Ce qui compte pour une entreprise locale

Quand quelqu'un demande à un assistant de recommander un professionnel dans une commune, la réponse s'appuie largement sur ce qui est public et cohérent à votre sujet.

Concrètement, cela veut dire les mêmes fondamentaux que pour Google.

Une fiche Google Business complète, avec des informations exactes. Voir [créer sa fiche Google Business](/blog/creer-fiche-google-business).

Des avis nombreux et récents, dont le contenu textuel dit ce que vous faites bien.

Les mêmes nom, adresse et téléphone partout, sans contradiction. Le sujet est traité dans [les annuaires en ligne](/blog/annuaires-locaux-visibilite).

Des pages qui nomment explicitement vos communes et vos prestations, plutôt que "toute la région" et "tous travaux".

Il n'y a pas de raccourci spécifique aux IA. Il y a la même exigence, appliquée plus strictement.

## Ce qui ne sert pas à grand-chose

Le fichier llms.txt, dont on parle beaucoup. C'est une convention proposée, pas un standard adopté par tous les acteurs. Le mettre en place prend quelques minutes et ne nuit pas. Il ne remplace ni des pages lisibles, ni du contenu utile. J'en ai un sur ce site, et je ne lui attribue aucun miracle.

Les balises ou mentions destinées à flatter un modèle. Ça ne fonctionne pas et ça abîme la lecture humaine.

Bloquer les robots des IA. Certains le font par principe. C'est un choix légitime, il faut simplement savoir qu'il vous retire des réponses.

## Faut-il s'en occuper maintenant

Honnêtement, pas en priorité si vous êtes une TPE locale.

Le volume reste faible comparé à une recherche Google classique et au bloc carte. Un artisan d'Albertville recevra plus de demandes d'une fiche Google bien tenue que de toutes les IA réunies.

En revanche, le travail se recoupe presque entièrement. Écrire des pages qui répondent à des questions précises, avec des faits, vous sert sur les deux terrains à la fois. Vous n'avez donc pas à choisir, et c'est le seul point vraiment intéressant de ce sujet.

## Une vérification que vous pouvez faire ce soir

Posez la question à un de ces assistants : "je cherche un [votre métier] à [votre commune], que me conseilles-tu".

Regardez ce qui sort, et surtout d'où viennent les informations. Vous verrez souvent des annuaires, des avis, et parfois des pages de concurrents.

Ce que vous découvrirez, c'est ce que ces outils savent de votre marché local. Si vous n'apparaissez nulle part, ce n'est pas un problème d'IA. C'est que vous n'êtes visible nulle part ailleurs non plus, et c'est là qu'il faut travailler.
    `,
  },
  {
    id: '91',
    slug: 'mesurer-si-sa-communication-rapporte',
    titleFr: 'Savoir si votre communication rapporte quelque chose',
    excerptFr:
      "La plupart des indépendants ne savent pas d'où viennent leurs clients. Une question posée systématiquement règle 80 % du problème.",
    seoTitleFr: 'Savoir si sa Communication Rapporte',
    seoDescFr:
      "Comment mesurer ce que rapportent votre site, vos réseaux et votre fiche Google, sans outil compliqué et sans se mentir sur les chiffres.",
    readTime: '8 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-12',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['mesure', 'attribution', 'résultats', 'pilotage'],
    related: [
      'statistiques-instagram-comprendre',
      'abonnes-ou-clients',
      'transformer-vues-en-clients',
    ],
    faqFr: [
      {
        q: 'Quel est le moyen le plus simple de savoir d\'où viennent ses clients ?',
        a: "Leur demander. Une question posée systématiquement à chaque nouveau contact, notée dans un tableau, donne en trois mois une information plus fiable que n'importe quel outil de mesure.",
      },
      {
        q: 'Les statistiques des réseaux sociaux servent-elles à quelque chose ?',
        a: "À ajuster la production, oui. À savoir si ça rapporte, non. Les vues et les abonnés ne disent rien sur votre chiffre d'affaires, et beaucoup de comptes très suivis ne génèrent aucune demande.",
      },
      {
        q: 'Au bout de combien de temps peut-on juger ?',
        a: "Six mois minimum sur du contenu et du référencement naturel. Juger au bout de six semaines conduit presque toujours à arrêter juste avant que ça commence à produire.",
      },
    ],
    contentFr: `
Je pose toujours la même question aux gens qui m'appellent : comment vos clients actuels vous ont-ils trouvé ?

Neuf fois sur dix, la réponse est "le bouche à oreille, je crois". C'est une intuition, pas une information, et elle est souvent fausse.

## Pourquoi c'est un vrai problème

Sans cette information, vous ne savez pas où mettre votre temps ni votre argent.

Vous continuez à payer un canal qui ne rapporte rien. Vous abandonnez celui qui commençait à marcher. Vous concluez qu'un site ne sert à rien alors que la moitié de vos clients l'ont consulté avant d'appeler.

Et vous n'avez aucun moyen de trancher, parce que vous n'avez rien mesuré.

## La méthode la plus efficace est aussi la plus bête

Demandez.

À chaque nouveau contact, une seule question : "juste par curiosité, comment vous m'avez trouvé ?"

Notez la réponse dans un tableau, avec la date et si ça a débouché. Trois colonnes suffisent.

En trois mois vous aurez une image de votre acquisition plus fiable que n'importe quel tableau de bord, parce qu'elle porte sur des gens qui ont réellement payé.

Deux précisions pratiques. Posez la question tôt dans l'échange, pas à la fin, sinon vous oublierez. Et acceptez les réponses floues : "je crois que je vous ai vu sur internet" est déjà une information, ça exclut le bouche à oreille pur.

## Ce que les gens répondent, et comment le lire

Les réponses tombent presque toujours dans cinq catégories.

Une recommandation. Quelqu'un a parlé de vous. C'est votre meilleur canal, et il se travaille : la qualité du travail, les avis, et le fait de rester dans la tête des gens.

Google. La personne a cherché votre métier et vous a trouvé. Cela veut dire que votre fiche ou votre site fonctionne.

Les réseaux sociaux. La personne vous suit ou vous a vu passer.

Un panneau, un véhicule, un salon, un marché. Le physique existe encore, et il est souvent sous-estimé.

Une combinaison. C'est le cas le plus fréquent, et le plus mal compris : on vous a recommandé, puis la personne a vérifié sur Google, puis elle a regardé vos photos, puis elle a appelé.

Ce dernier point est important. Le bouche à oreille et internet ne s'opposent pas, ils s'enchaînent. Un site et des avis ne remplacent pas la recommandation, ils la transforment en appel.

## Les chiffres qui comptent vraiment

Trois indicateurs suffisent pour une TPE, et vous pouvez les tenir sur une feuille.

Le nombre de demandes reçues dans le mois, tous canaux confondus. C'est le seul chiffre qui bouge quand votre communication marche.

Le nombre de devis signés sur les demandes reçues. S'il est bas, le problème n'est pas la visibilité, il est dans le prix, le délai de réponse ou l'offre.

Le chiffre d'affaires par client, pour savoir combien vaut réellement une demande. Un artisan qui gagne quatre mille euros par chantier n'a pas besoin de beaucoup de demandes.

Tout le reste est du confort.

## Les chiffres qui trompent

Les vues et les abonnés. Un compte peut faire des dizaines de milliers de vues sans produire un seul appel, en particulier quand l'audience n'habite pas dans votre zone. C'est le sujet de [des abonnés ou des clients](/blog/abonnes-ou-clients).

Les visites sur le site prises isolément. Cent visites de gens hors zone valent moins que dix visites locales.

Le taux d'ouverture des emails, devenu peu fiable techniquement.

Le classement sur un mot-clé, qui varie selon qui cherche et depuis où. Regardez les demandes, pas les positions.

## Les outils, dans l'ordre d'utilité

Votre tableau de suivi manuel. Le plus utile de tous, et il coûte zéro.

Les statistiques de votre fiche Google Business. Elles indiquent combien de personnes ont vu la fiche, appelé, demandé l'itinéraire ou cliqué vers le site. Pour une entreprise locale, ce sont les chiffres les plus directement liés à des demandes réelles.

La console de recherche Google, gratuite, qui montre sur quelles requêtes vous apparaissez et lesquelles amènent des clics. C'est aussi ce qui vous dit quelles questions écrire ensuite.

Un outil de mesure d'audience sur le site, si vous en voulez un. Choisissez en un qui se configure sans nécessiter de bandeau de consentement si votre besoin se limite à savoir combien de gens passent et par quelles pages, comme évoqué dans [mentions légales et RGPD](/blog/mentions-legales-rgpd-cookies-site).

Les statistiques des réseaux, en dernier, et pour une seule chose : savoir quels sujets retiennent l'attention, afin d'en produire davantage. Le détail est dans [comprendre ses statistiques](/blog/statistiques-instagram-comprendre).

## Le piège du délai

Le référencement naturel et le contenu mettent des mois à produire. Les délais réels sont dans [combien de temps avant d'être référencé](/blog/combien-de-temps-referencement-google).

Juger au bout de six semaines conduit à arrêter juste avant que ça commence, ce que font la plupart des gens. C'est d'ailleurs la raison pour laquelle ceux qui tiennent finissent seuls sur le terrain.

Fixez vous six mois avant de conclure quoi que ce soit sur un canal lent, et jugez les canaux rapides, comme la fiche Google et les avis, sur quelques semaines.

## Le rendez-vous trimestriel avec soi-même

Une heure, quatre fois par an, avec votre tableau sous les yeux.

D'où sont venues les demandes de ce trimestre. Combien ont abouti. Qu'est ce qui a changé depuis le trimestre précédent. Qu'est ce que j'arrête, et qu'est ce que je continue.

C'est peu de travail et c'est ce qui sépare une communication pilotée d'une communication faite au feeling. La plupart des entreprises que je croise n'ont jamais fait cet exercice une seule fois.
    `,
  },
  {
    id: '92',
    slug: 'temps-par-semaine-communication',
    titleFr: 'Combien de temps y consacrer quand on a déjà un métier',
    excerptFr:
      "La bonne réponse n'est pas beaucoup. C'est peu, toujours au même moment, pendant longtemps.",
    seoTitleFr: 'Combien de Temps pour sa Communication',
    seoDescFr:
      "Le budget temps réaliste d'un artisan ou d'une TPE pour son site, sa fiche Google et ses réseaux, et comment le tenir toute l'année.",
    readTime: '8 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-11',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['organisation', 'temps', 'régularité', 'charge de travail'],
    related: [
      'calendrier-editorial-reseaux-sociaux',
      'deleguer-reseaux-sociaux',
      'tourner-plusieurs-videos-une-journee',
    ],
    faqFr: [
      {
        q: 'Combien d\'heures par semaine faut-il vraiment ?',
        a: "Deux à trois heures par semaine suffisent pour une entreprise locale, à condition qu'elles soient groupées et toujours placées au même moment. Le problème n'est presque jamais le volume d'heures, c'est leur irrégularité.",
      },
      {
        q: 'Vaut-il mieux faire beaucoup une fois ou peu régulièrement ?',
        a: "Peu régulièrement, sans hésitation. Trois semaines intenses suivies de deux mois de silence produisent moins qu'un rythme modeste tenu six mois, parce que l'effet vient de l'accumulation et de la répétition.",
      },
      {
        q: 'À partir de quand faut-il déléguer ?',
        a: "Quand le temps que ça vous prend vaut plus que ce que ça coûterait de le confier, ou quand vous constatez que vous n'arrivez pas à tenir le rythme trois mois de suite. La deuxième raison est la plus fréquente.",
      },
    ],
    contentFr: `
La question que les gens n'osent pas poser, parce qu'ils redoutent la réponse : concrètement, ça va me prendre combien de temps ?

La réponse honnête est deux à trois heures par semaine. Ce qui surprend, c'est que le problème n'est presque jamais ce volume. C'est la régularité.

## Le vrai obstacle

Personne n'abandonne parce que trois heures par semaine sont impossibles à trouver. On abandonne parce qu'on décide chaque semaine si on le fait.

Une tâche qui se redécide en permanence perd contre une urgence, et il y a toujours une urgence.

La seule chose qui tienne, c'est un créneau fixe, au même moment, traité comme un rendez vous client. Le mardi de 17 h à 18 h. Le samedi matin après le café. Peu importe lequel, du moment qu'il ne bouge pas.

## Le budget type d'une TPE locale

Voilà comment je répartirais trois heures par semaine, en régime de croisière.

Une heure de production de contenu. Filmer, photographier, écrire. C'est le poste le plus lourd, et il se groupe : une session mensuelle plus longue vaut mieux que quatre sessions hebdomadaires.

Trente minutes de montage et de programmation. Groupé aussi.

Vingt minutes de réponses. Commentaires, messages, avis. À faire tous les jours en deux fois dix minutes plutôt qu'une fois par semaine, parce que le délai de réponse compte, comme expliqué dans [répondre aux commentaires et aux messages](/blog/repondre-commentaires-messages-prives).

Trente minutes sur le site ou la fiche Google. Une page à améliorer, des photos à ajouter, des horaires à mettre à jour, une question fréquente à traiter.

Vingt minutes de demandes d'avis. Ce sont les vingt minutes les plus rentables de la liste.

Et une heure par trimestre pour regarder ce que ça donne, comme décrit dans [savoir si votre communication rapporte](/blog/mesurer-si-sa-communication-rapporte).

## Grouper, toujours

Le principe qui change tout : ne faites jamais une chose à la fois.

Une session de tournage d'une demi-journée par mois produit de quoi publier plusieurs semaines, alors que tourner une vidéo par semaine coûte quatre fois plus de temps pour le même résultat. La méthode est dans [tourner plusieurs vidéos en une journée](/blog/tourner-plusieurs-videos-une-journee).

Même chose pour l'écriture : une session de deux heures qui produit quatre textes bat quatre sessions de trente minutes.

La raison est le temps de mise en route. Sortir le matériel, se remettre dans le sujet, retrouver où on en était : ça coûte vingt minutes à chaque fois, et ces vingt minutes disparaissent quand on groupe.

## Le mois type

Une demi-journée, une fois par mois : tournage, photos, écriture. C'est le gros morceau.

Une heure dans la foulée : montage, programmation, calendrier.

Puis vingt minutes par jour ouvré pour les réponses et les avis.

Ce rythme représente environ dix heures par mois. C'est une journée et demie, et c'est ce qui suffit pour une entreprise locale, à condition de le tenir.

## Ce qu'on peut supprimer sans rien perdre

Si vous n'avez pas dix heures par mois, supprimez dans cet ordre.

Le blog. Il apporte beaucoup à long terme et rien à court terme. C'est le premier à sacrifier quand le temps manque.

La deuxième plateforme. Une seule tenue vaut mieux que deux à moitié.

Le montage sophistiqué. Une vidéo brute publiée bat une vidéo parfaite jamais finie.

Les publications de fiche Google, qui sont un travail de finition.

Ce qu'on ne supprime jamais : les réponses aux messages, les demandes d'avis, et l'exactitude des horaires. Ce sont les trois choses qui coûtent des clients quand elles sont négligées.

## Les périodes creuses

Si votre activité est saisonnière, ne cherchez pas un rythme constant toute l'année.

Pendant la saison haute, réduisez à l'essentiel et captez de la matière sans rien monter.

Pendant le creux, remontez le rythme et préparez la saison suivante.

C'est le calendrier inversé de [communiquer quand on vit d'une saison](/blog/entreprise-saisonniere-communication), et il rend le tout beaucoup plus tenable.

## Quand ça ne tient pas

Soyez honnête avec vous-même. Si vous avez essayé trois fois et abandonné trois fois, la quatrième tentative avec plus de volonté ne marchera pas mieux.

À ce moment là, il y a trois sorties.

Réduire l'ambition. Une publication par semaine, tenue, vaut mieux que trois abandonnées. Personne ne vous impose un rythme.

Concentrer sur ce qui rapporte le plus vite. Pour une entreprise locale, c'est la fiche Google et les avis, pas les réseaux sociaux.

Déléguer la production. C'est le poste le plus lourd et le seul qui demande vraiment du matériel et une méthode. Les critères pour choisir sont dans [déléguer ses réseaux sociaux](/blog/deleguer-reseaux-sociaux).

C'est d'ailleurs le raisonnement derrière ma façon de travailler : une journée de tournage sur place chez le client, puis les publications sortent dans le mois sans qu'il ait à y penser. Ce n'est pas parce que les gens sont incapables de le faire, c'est parce que la production est la partie qui ne tient jamais sur la durée quand on a déjà un métier à plein temps.

## Le seul chiffre à retenir

Six mois. C'est la durée en dessous de laquelle il ne se passe rien de mesurable, et au-delà de laquelle presque tout le monde a arrêté.

Deux heures par semaine pendant six mois battent dix heures par semaine pendant un mois. Ce n'est pas une leçon de morale, c'est la mécanique de l'accumulation.
    `,
  },
  {
    id: '93',
    slug: 'faut-il-un-blog-quand-on-est-artisan',
    titleFr: 'Un blog quand on est artisan : est-ce que ça sert vraiment',
    excerptFr:
      "Réponse courte : oui, mais pas comme vous l'imaginez, et sûrement pas avec des articles d'actualité.",
    seoTitleFr: 'Faut-il un Blog Quand on est Artisan',
    seoDescFr:
      "Ce qu'un blog rapporte réellement à une entreprise locale, combien d'articles il faut, et pourquoi la plupart des blogs d'artisans ne servent à rien.",
    readTime: '8 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-09',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['blog', 'contenu', 'référencement', 'longue traîne'],
    related: [
      'trouver-mots-cles-clients',
      'quoi-ecrire-sur-son-site',
      'combien-de-temps-referencement-google',
    ],
    faqFr: [
      {
        q: 'Combien d\'articles faut-il pour que ça serve ?',
        a: "Une quinzaine d'articles qui répondent chacun à une vraie question donnent déjà des résultats mesurables. En dessous de cinq, l'effet est négligeable. Ce qui compte est que chaque article traite une question précise, pas le total.",
      },
      {
        q: 'Faut-il publier des actualités de l\'entreprise ?',
        a: "Non, personne ne les cherche. Un article ne vaut que s'il répond à une question que quelqu'un tape. Les nouvelles de l'entreprise ont leur place sur les réseaux ou sur la fiche Google, pas dans un blog.",
      },
      {
        q: 'Un blog remplace-t-il les réseaux sociaux ?',
        a: "Non, ils font deux choses différentes. Le blog capte des gens qui cherchent activement une réponse. Les réseaux touchent des gens qui ne cherchaient rien. Les deux se nourrissent : un article donne dix idées de vidéos.",
      },
    ],
    contentFr: `
Je vais commencer par ce qui ne marche pas, parce que c'est ce que contient la quasi-totalité des blogs d'entreprises locales.

"Toute l'équipe vous souhaite une bonne année." "Nous avons reçu notre nouvelle machine." "Retour sur le salon de la semaine dernière."

Personne ne cherche ça sur Google. Ces articles ne seront jamais lus par un inconnu, et c'est exactement le seul intérêt d'un blog.

## Ce qu'un blog fait réellement

Il capte des gens qui cherchent une réponse et qui ne vous connaissent pas.

Quelqu'un tape "pourquoi ma chaudière fait du bruit". Il tombe sur votre article. Il lit, il comprend, il voit que vous êtes à vingt minutes de chez lui. Il ne vous appelle peut-être pas aujourd'hui. Il vous appellera quand ça cassera.

C'est ça, le mécanisme. Il est lent, il est cumulatif, et il ne s'arrête pas : un article écrit il y a deux ans continue d'amener des gens sans que vous fassiez quoi que ce soit.

C'est le seul travail de communication dont l'effet ne disparaît pas quand vous arrêtez.

## Pourquoi ça marche pour une entreprise locale

L'objection classique est que vous ne pouvez pas rivaliser avec les gros sites nationaux. C'est vrai sur les sujets généraux, et faux sur ce qui vous concerne.

Un site national écrit "comment choisir sa pompe à chaleur". Vous écrivez "pompe à chaleur en Savoie : ce que change l'altitude et le froid en hiver". Il ne peut pas écrire ça, et c'est exactement ce que cherche quelqu'un qui habite à mille mètres.

Votre avantage n'est pas le volume, c'est la précision et le terrain.

## Les sujets qui marchent

Ils viennent tous du même endroit : ce qu'on vous demande déjà.

Les questions de prix. "Combien coûte", suivi de votre prestation. Ce sont les recherches les plus fréquentes et les moins traitées, parce que tout le monde a peur d'afficher un chiffre. Une fourchette avec une explication vous met immédiatement devant.

Les problèmes et les symptômes. Ce qui amène les gens à vous appeler, décrit avec leurs mots à eux.

Les comparaisons. Tel matériau contre tel autre, telle solution contre telle autre. Les gens comparent avant d'acheter et cherchent un avis qui n'est pas celui d'un vendeur.

Les questions de déroulement. Combien de temps ça prend, faut-il vider la pièce, est ce qu'on peut rester chez soi pendant les travaux, quelles autorisations.

Les spécificités locales. Le climat, l'altitude, les règles d'urbanisme locales, les aides du département ou de la commune. C'est votre terrain exclusif.

La méthode pour trouver les formulations exactes est dans [trouver les mots que vos clients tapent](/blog/trouver-mots-cles-clients).

## Combien d'articles

Une quinzaine d'articles qui répondent chacun correctement à une vraie question produisent des résultats mesurables.

En dessous de cinq, l'effet est négligeable, ce qui explique pourquoi tant de gens concluent que ça ne marche pas.

Le rythme raisonnable est un à deux articles par mois. En un an, vous avez votre socle. En deux ans, vous avez un actif qui travaille tous les jours.

Ne publiez pas quinze articles le même jour : un site qui vit régulièrement est mieux traité qu'un site qui déverse puis se tait.

## La longueur

Assez long pour répondre vraiment, assez court pour être lu.

En pratique, entre huit cents et mille cinq cents mots pour un sujet de TPE. Le nombre de mots n'est pas un objectif : une réponse complète en six cents mots vaut mieux qu'un délayage à deux mille.

Le vrai critère : est ce qu'un lecteur repart avec sa réponse, sans avoir besoin d'ouvrir un autre site.

## L'erreur qui annule tout le travail

Écrire pour Google au lieu d'écrire pour un lecteur.

Répéter le mot-clé dans chaque paragraphe, empiler les synonymes, produire des textes creux. Ça se voit, les gens partent, et Google mesure qu'ils partent.

L'autre version de la même erreur consiste à faire écrire des articles génériques par un outil, sans les relire ni y mettre votre expérience. Le résultat ressemble à tous les autres, n'apporte rien, et n'a aucune raison d'être choisi.

Ce qui rend un article d'artisan meilleur qu'un article générique, c'est précisément ce que vous seul savez : le chantier où ça s'est mal passé, le prix réel, la contrainte que personne n'anticipe. Ce sont vos anecdotes qui font la différence, pas votre style.

## Le lien avec le reste

Un article donne dix idées de vidéos. Chaque sous-titre est un sujet de trente secondes.

Une vidéo donne un article. Vous avez déjà dit le contenu, il ne reste qu'à l'écrire.

Une question posée en message privé donne les deux.

C'est ce qui rend l'ensemble tenable : vous ne produisez pas trois choses différentes, vous déclinez la même matière. La logique est la même que dans [publier la même vidéo sur plusieurs plateformes](/blog/publier-meme-video-plusieurs-plateformes).

## Quand ne pas faire de blog

Si vous n'avez pas le temps, ne commencez pas. Trois articles abandonnés valent moins que zéro, parce qu'un blog visiblement mort donne l'image d'une entreprise qui l'est aussi.

Si vous n'avez pas encore de fiche Google correcte ni d'avis, faites ça d'abord. Le rendement n'a rien à voir à court terme.

Si votre métier ne génère aucune question, ce qui est rare mais existe.

Dans tous les autres cas, c'est le travail le plus rentable à long terme que je connaisse pour une entreprise locale. Il est juste lent, et c'est pour ça que le terrain reste libre.
    `,
  },
  {
    id: '94',
    slug: 'temoignage-client-video',
    titleFr: 'Obtenir un témoignage client en vidéo, sans mettre personne mal à l\'aise',
    excerptFr:
      "C'est le contenu le plus convaincant qui existe, et celui que presque personne ne demande. Voilà comment le faire sans que ça sonne faux.",
    seoTitleFr: 'Témoignage Client en Vidéo : Comment Faire',
    seoDescFr:
      "Demander, filmer et utiliser un témoignage client en vidéo : le moment, les questions à poser, et ce qui rend un témoignage crédible.",
    readTime: '8 min',
    categoryFr: 'Vidéo',
    categorySlug: 'video',
    date: '2026-08-08',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/video-smartphone-entreprise',
    tags: ['témoignage', 'preuve sociale', 'vidéo', 'confiance'],
    related: [
      'obtenir-avis-google',
      'filmer-avec-son-telephone',
      'parler-face-camera-timide',
    ],
    faqFr: [
      {
        q: 'Quel est le meilleur moment pour demander ?',
        a: "À la fin de la prestation, quand le client est satisfait et que le résultat est sous ses yeux. Une demande faite trois semaines après par message obtient beaucoup moins de oui, et un témoignage moins précis.",
      },
      {
        q: 'Que faire si le client refuse d\'être filmé ?',
        a: "Proposez l'audio seul, ou un témoignage écrit accompagné d'une photo de la réalisation. Et proposez toujours l'avis Google en repli : c'est moins spectaculaire et ça travaille tous les jours.",
      },
      {
        q: 'Faut-il préparer les réponses à l\'avance ?',
        a: "Donnez les questions à l'avance, jamais les réponses. Un client qui récite un texte se voit immédiatement, et un témoignage qui sonne faux fait plus de mal que pas de témoignage du tout.",
      },
    ],
    contentFr: `
Un client qui dit du bien de vous en vidéo vaut plus que tout ce que vous pourriez écrire sur vous-même.

Ce n'est pas une opinion, c'est mécanique : vous êtes juge et partie, lui non.

Et pourtant presque personne ne demande, parce que c'est gênant.

## Pourquoi c'est gênant, et pourquoi ça ne devrait pas l'être

La peur est de mettre le client dans l'embarras, ou de paraître insistant.

En réalité, quand une prestation s'est bien passée, les gens sont contents de rendre service. Beaucoup sont même flattés qu'on le leur demande.

Ce qui met mal à l'aise, ce n'est pas la demande. C'est une demande floue, faite au mauvais moment, sans dire combien de temps ça prend ni ce qu'on va en faire.

## Le moment

À la fin de la prestation, quand le résultat est sous les yeux du client et qu'il vient de vous dire qu'il est content.

C'est le seul bon moment, et c'est celui que tout le monde laisse passer parce qu'on est en train de ranger le matériel.

Trois semaines après, par message, vous obtiendrez trois fois moins de oui et un témoignage beaucoup plus vague, parce que la personne aura oublié les détails.

## La demande qui fonctionne

Quatre éléments, dans cet ordre.

Le contexte : "vous avez l'air content du résultat, ça me fait plaisir."

La demande, précise : "est ce que vous accepteriez de le dire en vidéo, deux minutes, avec mon téléphone ?"

La levée du frein : "je vous pose trois questions, vous répondez comme vous voulez, et si ça ne vous plaît pas on efface."

L'usage : "ça me sert sur mon site et mes réseaux, pour que les gens voient de vrais chantiers."

Cette dernière phrase compte. Les gens acceptent beaucoup plus facilement quand ils savent ce que devient la vidéo.

## Les questions à poser

Trois questions suffisent, et ce sont toujours les mêmes.

Quel était le problème avant que vous m'appeliez ? Cette question est la plus importante, parce que c'est elle qui permet au spectateur de se reconnaître. Un futur client ne s'identifie pas à votre solution, il s'identifie au problème.

Comment ça s'est passé ? Laissez raconter, n'interrompez pas.

Qu'est ce que vous diriez à quelqu'un qui hésite ? C'est la phrase que vous utiliserez.

Donnez ces questions à l'avance, oralement, une minute avant de filmer. Ne donnez jamais les réponses : un client qui récite se voit à la première seconde, et un témoignage qui sonne faux fait plus de mal que pas de témoignage.

## Filmer correctement

Le téléphone à l'horizontale ou à la verticale selon l'usage prévu, tenu stable ou posé.

La personne devant sa réalisation, pas devant un mur blanc. Le décor prouve autant que les mots.

Le soleil ou la fenêtre derrière vous, jamais derrière la personne, sinon elle sera en ombre chinoise.

Le son est le point critique. Approchez vous, coupez ce qui bruite, et si vous filmez dehors, trouvez un endroit abrité du vent. Un micro-cravate à quelques dizaines d'euros change tout et sert des années. Le détail est dans [le son d'une vidéo au smartphone](/blog/son-video-smartphone).

Filmez large et laissez tourner. Vous couperez après.

## Le montage

Coupez au début et à la fin, gardez les meilleurs passages, et ne cherchez pas la perfection.

Une hésitation, un rire, une phrase mal construite rendent le témoignage plus crédible, pas moins. Ce qui tue un témoignage, c'est qu'il ait l'air écrit.

Mettez des sous-titres, parce que la majorité des gens regardent sans le son. Voir [les sous-titres](/blog/sous-titres-videos).

Ajoutez à l'écran le prénom, la commune et la prestation. "Sylvie, Ugine, rénovation de salle de bain" ancre le témoignage dans le réel et vous sert localement.

Visez une minute. Si vous avez trois minutes de bon, faites deux versions : une courte pour les réseaux, une longue pour le site.

## L'accord, par écrit

Demandez une autorisation écrite, même simple. Un message qui dit que la personne accepte que la vidéo soit utilisée sur votre site et vos réseaux suffit dans la plupart des cas.

Précisez ce que vous montrez : prénom seulement ou nom complet, commune, éventuellement le lieu.

Et respectez un retrait si la personne le demande plus tard. C'est rare, et c'est la moindre des choses.

## Où l'utiliser

Sur la page de la prestation concernée, pas seulement sur une page de témoignages que personne n'ouvre.

Dans vos devis. Joindre un lien vers le témoignage d'un client au projet comparable change le taux de signature.

Sur vos réseaux, en version courte.

Sur votre fiche Google Business, dans les vidéos.

Et si le client accepte, demandez lui aussi un avis Google dans la foulée. Il vient de formuler ce qu'il pense, il n'a plus qu'à l'écrire, et l'avis travaillera tous les jours de son côté. La méthode est dans [obtenir des avis Google](/blog/obtenir-avis-google).

## Si le client refuse

Ça arrive, et il ne faut jamais insister.

Proposez l'audio seul, avec des photos de la réalisation par-dessus. Beaucoup de gens acceptent quand on ne filme pas leur visage.

Ou un témoignage écrit, que vous affichez avec une photo du chantier.

Ou simplement l'avis Google, qui reste le repli le plus utile.

Un refus n'est pas un problème. Ne pas demander en est un.
    `,
  },
];
