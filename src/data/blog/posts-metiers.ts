import type { BlogPost } from './types';

/**
 * Cluster "par metier", hors montagne. Chaque article part d'un probleme
 * commercial propre au metier, pas d'un gabarit ou seul le nom change.
 */
export const metiersPosts: BlogPost[] = [
  {
    id: '66',
    slug: 'paysagiste-jardinier-visibilite',
    titleFr: 'Paysagiste et entretien d\'extérieur : remplir le carnet toute l\'année',
    excerptFr:
      "Le téléphone sonne en mars et se tait en novembre. Le problème n'est pas la saison, c'est le moment où vous devenez visible.",
    seoTitleFr: 'Paysagiste : Trouver des Clients en Ligne',
    seoDescFr:
      "Paysagiste ou jardinier en Savoie : comment être trouvé au moment où les gens cherchent, montrer son travail, et lisser les mois creux.",
    readTime: '9 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['paysagiste', 'jardinier', 'artisan', 'saison'],
    related: [
      'site-web-artisan',
      'creer-fiche-google-business',
      'entreprise-saisonniere-communication',
    ],
    faqFr: [
      {
        q: 'Quand faut-il être visible quand on est paysagiste ?',
        a: "Avant la saison, pas pendant. Les particuliers font leurs devis pour les gros travaux d'extérieur en fin d'hiver et au début du printemps. Être visible en juin, c'est arriver quand les carnets sont déjà pleins, chez vous comme chez vos concurrents.",
      },
      {
        q: 'Faut-il séparer l\'entretien et la création ?',
        a: "Oui, sur le site comme dans la communication. Ce ne sont ni les mêmes clients, ni les mêmes budgets, ni les mêmes questions. Une page par activité ressort mieux sur Google qu'une page qui mélange tout.",
      },
      {
        q: 'Les photos avant et après valent-elles vraiment le coup ?',
        a: "C'est le contenu le plus efficace du métier. Un terrain en friche transformé se comprend en une seconde, sans explication, et ça marche aussi bien sur un site que sur les réseaux. Prenez la photo avant, même quand vous n'y pensez pas.",
      },
    ],
    contentFr: `
Le paysage est un des rares métiers où l'on peut savoir à l'avance quand le téléphone va sonner. C'est un avantage énorme, et presque personne ne s'en sert.

## Le décalage qui coûte le plus cher

Un particulier qui veut refaire sa terrasse, poser une clôture ou reprendre un terrain en pente ne décide pas au moment des travaux. Il décide plusieurs mois avant, quand il regarde son jardin par la fenêtre en février et qu'il en a assez.

C'est à ce moment là qu'il tape "paysagiste" et le nom de sa commune. Si vous n'êtes pas visible en février, vous n'êtes pas dans la liste des trois entreprises qu'il va appeler.

Beaucoup de paysagistes font l'inverse : ils publient et ils s'occupent de leur visibilité en pleine saison, quand ils sont débordés et qu'ils n'ont plus de place. Le travail est fait au moment où il ne sert plus.

Le calendrier à retourner est le même que pour les autres activités saisonnières, et je l'ai détaillé dans [communiquer quand on vit d'une saison](/blog/entreprise-saisonniere-communication).

## Séparer vos deux métiers

Sur presque tous les sites de paysagistes que je regarde, une seule page annonce tout : création, entretien, élagage, clôture, terrasse, arrosage.

C'est un problème pour deux raisons.

Google a du mal à savoir sur quoi vous positionner. Une page qui parle de six choses ne ressort bien sur aucune.

Et le visiteur ne se reconnaît pas. Quelqu'un qui cherche un contrat d'entretien annuel n'a rien à voir avec quelqu'un qui veut une terrasse à quinze mille euros. Ce ne sont ni les mêmes questions, ni les mêmes budgets, ni le même rythme de décision.

Faites une page par activité réelle. Entretien de jardin, création et aménagement, élagage et abattage, clôtures et portails, terrasses et allées. Chacune répond aux questions de son client à elle.

C'est le principe de base d'un site d'artisan, et j'ai écrit le reste dans [le site web d'un artisan](/blog/site-web-artisan).

## Ce que veulent savoir vos clients avant d'appeler

Les questions sont toujours les mêmes, et elles sont rarement traitées.

Est ce que vous vous déplacez chez moi. Nommez les communes. Depuis Albertville, ça veut dire Ugine, Gilly, Frontenex, la combe de Savoie, le Beaufortain. Un nom de commune écrit noir sur blanc vaut mieux que "toute la Savoie".

Combien ça coûte à peu près. C'est la question numéro un et personne n'y répond. Vous n'êtes pas obligé de donner un tarif ferme : un ordre de grandeur au mètre carré, un prix de départ pour un passage d'entretien, ou une méthode de chiffrage font le travail. L'absence totale d'indication fait fuir autant les gens sérieux que les autres.

Est ce que vous évacuez les déchets verts. Question systématique, jamais traitée.

En combien de temps. Un délai honnête, y compris quand il est long. "Je suis complet jusqu'en mai" est une information utile, pas un aveu.

Est ce que je peux payer avec un crédit d'impôt ou une aide. Pour l'entretien chez les particuliers, les dispositifs existent et évoluent. Ne prenez pas le risque d'écrire une règle fiscale de mémoire : dites que le dispositif existe, expliquez ce que vous fournissez comme document, et renvoyez vers la source officielle.

Ces questions sortent de vos appels, pas de votre tête. La méthode complète est dans [quoi écrire sur son site](/blog/quoi-ecrire-sur-son-site).

## L'avant et après, votre meilleur contenu

Aucun métier ne se prête mieux à ça.

Un talus en friche devenu un jardin en terrasses se comprend en une seconde, sans un mot d'explication. C'est ce qui marche le mieux sur un site, sur une fiche Google et sur les réseaux, avec le même fichier.

Le problème, c'est la photo d'avant. Personne n'y pense, parce qu'au moment où vous arrivez sur le chantier, vous pensez au chantier.

Prenez l'habitude : première chose en descendant du camion, trois photos et dix secondes de vidéo, toujours depuis le même endroit. À la fin, vous refaites la même prise depuis exactement le même point. C'est ce qui rend la comparaison lisible.

Vous n'avez rien à monter tout de suite. Vous stockez, et vous en faites quelque chose l'hiver, quand vous avez le temps.

## La fiche Google, le levier le plus rentable de ce métier

Un paysagiste peut avoir une fiche Google sans local visible : vous déclarez une zone d'intervention et vous masquez votre adresse.

Ce qui compte particulièrement chez vous : la catégorie principale bien choisie, parce que Google fait la différence entre paysagiste, jardinier, élagueur et entreprise d'aménagement. Regardez celle des trois entreprises qui sortent en premier dans votre commune, elle est affichée sous leur nom.

Ensuite, listez vos prestations une par une dans la fiche. Peu de gens le font, et c'est ce qui vous fait apparaître sur des recherches précises comme "taille de haie" ou "pose de clôture" plutôt que sur le seul mot "paysagiste".

Et les photos, toujours les vôtres. Une fiche avec quarante photos de chantiers réels dans la vallée écrase une fiche avec trois images de catalogue. Le déroulé complet est dans [créer sa fiche Google Business](/blog/creer-fiche-google-business).

## Les avis, à demander sur le chantier

Le meilleur moment pour demander un avis, c'est la fin du chantier, quand le client regarde son jardin et qu'il est content. Pas trois semaines après par email.

Sur un métier où la confiance est en jeu et où on vous laisse entrer chez soi, trente avis récents dans votre vallée vous placent devant à peu près tout le monde. La méthode est dans [obtenir des avis Google](/blog/obtenir-avis-google).

## Lisser les mois creux

Novembre à février, c'est là que le carnet se vide, et c'est aussi là qu'il y a du travail à prendre si on le cherche.

Les prestations d'hiver existent et sont sous-vendues : élagage et abattage, qui se font justement hors sève, préparation des sols, plantation, clôtures, réfection d'allées, déneigement pour les copropriétés et les entreprises.

Les contrats d'entretien annuels, eux, lissent tout. Un client qui signe un contrat au printemps vous paie encore en janvier. C'est le levier le plus efficace du métier et il se vend mieux à l'écrit, sur une page qui explique ce qui est compris et à quel rythme, qu'à l'oral entre deux chantiers.

Et les professionnels. Copropriétés, gîtes, hôtels, entreprises, mairies : leur calendrier n'est pas celui des particuliers, et leurs budgets sont récurrents. Une page dédiée à ces clients là, qui parle de contrat, de planning et de facturation plutôt que de jardin de rêve, ne demande que deux heures d'écriture.

## Par où commencer

La fiche Google et les avis, tout de suite, c'est gratuit et c'est le plus rapide.

La photo d'avant systématique, dès demain matin, c'est une habitude à zéro euro.

Le site avec une page par activité, quand vous avez un moment cet hiver.

Et si vous voulez qu'on regarde ensemble ce qui manque chez vous, [écrivez moi](/contact). Je suis à Albertville, je me déplace dans la vallée.
    `,
  },
  {
    id: '67',
    slug: 'agent-immobilier-local-visibilite',
    titleFr: 'Agent immobilier indépendant : exister à côté des portails',
    excerptFr:
      "Vos annonces vivent sur des portails qui vendent aussi vos concurrents. Votre nom, lui, ne vit nulle part. C'est là que se joue la rentrée de mandats.",
    seoTitleFr: 'Agent Immobilier : Se Rendre Visible en Local',
    seoDescFr:
      "Agent ou mandataire immobilier en Savoie : comment exister en dehors des portails, rentrer des mandats et devenir la personne qu'on appelle en premier.",
    readTime: '9 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-12',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['agent immobilier', 'mandataire', 'immobilier', 'notoriété locale'],
    related: [
      'creer-fiche-google-business',
      'video-courte-entreprise-locale',
      'obtenir-avis-google',
    ],
    faqFr: [
      {
        q: 'Un agent immobilier a-t-il besoin d\'un site personnel ?',
        a: "Le portail de votre réseau vend le réseau, pas vous. Une page à votre nom, avec votre secteur, vos ventes et vos avis, est ce que trouve un vendeur qui vous cherche après avoir vu votre panneau ou entendu parler de vous.",
      },
      {
        q: 'Faut-il publier les biens sur les réseaux sociaux ?',
        a: "Un peu, mais ce n'est pas ce qui rentre des mandats. Les biens intéressent les acheteurs, qui sont déjà sur les portails. Ce qui intéresse les vendeurs, c'est ce que vous savez du marché de leur rue et la façon dont vous travaillez.",
      },
      {
        q: 'Peut-on avoir une fiche Google Business en tant que mandataire ?',
        a: "Oui, en déclarant une zone d'intervention plutôt qu'une adresse. Très peu de mandataires en ont une, alors que les avis Google pèsent lourd dans un métier où l'on choisit d'abord une personne.",
      },
    ],
    contentFr: `
Un mandataire de la combe de Savoie m'a posé le problème en une phrase : "j'ai des acheteurs, ce qui me manque c'est des biens à vendre."

C'est le vrai sujet du métier, et ce n'est pas un problème d'annonces. C'est un problème de notoriété.

## Vos annonces ne travaillent pas pour vous

Un bien mis en ligne sur un portail attire des acheteurs. Très bien, c'est son rôle.

Mais sur cette page, à côté de votre annonce, le portail affiche aussi celles de vos concurrents. Il capte le contact, il le qualifie, et il vend le même service à tout le monde. Vous louez de la visibilité sur un terrain qui n'est pas le vôtre.

Surtout : un vendeur ne cherche pas sur un portail. Il cherche une personne. Il tape le nom de sa commune et le mot "estimation", ou il demande autour de lui, ou il repère un nom qui revient sur les panneaux et dans les conversations.

C'est cette recherche là que vous devez gagner, et elle ne se gagne pas avec des annonces.

## Ce que cherche un vendeur

Mettez vous à sa place. Il hésite depuis six mois, il ne sait pas ce que vaut sa maison, et il a peur de se faire avoir sur les frais.

Il veut savoir combien ça vaut, ici, dans sa rue, pas dans le département.

Il veut savoir combien vous prenez, et il n'osera pas le demander au téléphone.

Il veut savoir ce que vous faites concrètement pour ce prix. Les photos, la diffusion, les visites, le suivi, l'accompagnement jusque chez le notaire.

Il veut savoir si vous vendez vraiment dans son secteur, ou si vous couvrez trois vallées en promettant à tout le monde d'être local.

Et il veut savoir à qui il a affaire. Dans ce métier, on choisit une personne avant de choisir une enseigne.

Aucune de ces cinq questions n'est traitée par une page d'annonces.

## La connaissance du terrain, votre seul avantage réel

Vous ne battrez jamais un portail sur les moyens. Vous le battez sur une chose qu'il n'aura jamais : vous savez ce qui se passe rue par rue.

Combien de temps met un T3 à partir à Albertville. Pourquoi les maisons de Gilly se vendent plus vite que celles d'à côté. Ce que le prix au mètre carré affiché sur les sites nationaux ne dit pas sur une commune de mille habitants. Quels travaux se rentabilisent avant une vente et lesquels ne se récupèrent jamais.

C'est ça, votre contenu. Pas les annonces.

Un point de marché par commune, écrit honnêtement, deux ou trois fois par an, vaut plus que cinquante publications de biens. C'est ce que lit un propriétaire qui hésite, et c'est aussi exactement ce que Google fait ressortir sur les recherches du type "prix immobilier" plus le nom d'une commune.

Un avertissement sur ce point : n'inventez aucun chiffre. Si vous citez un prix moyen ou un délai de vente, dites d'où il vient, et préférez vos propres transactions à des données recopiées ailleurs. Un chiffre faux se retourne contre vous dès le premier rendez vous.

## La vidéo, sur le bon sujet

Presque tous les agents qui font de la vidéo filment des biens. C'est joli, ça touche des acheteurs, et ça ne rentre pas de mandats.

Ce qui fonctionne pour rentrer des mandats, c'est de répondre à ce que les vendeurs se demandent.

Faut-il vendre avant d'acheter. Combien de temps prend une vente en ce moment dans le secteur. Quels papiers préparer avant de mettre en vente. Pourquoi un bien reste six mois sans visite. Ce qu'un acheteur regarde dans les trente premières secondes d'une visite. Ce que couvre vraiment une commission.

Trente secondes, filmées au téléphone, dans votre voiture ou devant un bien. Vous n'avez besoin d'aucun matériel, et les bases sont dans [la vidéo courte pour une entreprise locale](/blog/video-courte-entreprise-locale).

Un avantage propre à votre métier : votre visage est votre produit. Vous n'avez pas à hésiter à vous montrer, c'est précisément ce qu'on achète. Si l'exercice ne vient pas naturellement, [j'ai écrit là dessus](/blog/parler-face-camera-timide).

## La fiche Google et les avis

C'est le levier le plus sous-utilisé du métier, en particulier chez les mandataires indépendants.

Vous pouvez créer une fiche à votre nom professionnel, avec une zone d'intervention plutôt qu'une adresse. Le déroulé est dans [créer sa fiche Google Business](/blog/creer-fiche-google-business).

Et les avis pèsent lourd ici. Une vente est un moment fort, souvent émotionnel, et les gens acceptent volontiers de le raconter quand on leur demande au bon moment : le jour de la signature, pas six mois après.

Vingt avis détaillés à votre nom personnel valent plus que le classement national de votre réseau, parce que le vendeur qui vous cherche cherche vous.

## Le fichier, l'actif qu'on oublie

Vous avez croisé des dizaines de personnes qui ont dit "pas tout de suite" ou "peut-être dans deux ans".

Ces gens finissent par vendre. La question est de savoir qui ils appellent ce jour là.

Gardez la trace, notez la commune, le type de bien et l'échéance annoncée, et donnez leur des nouvelles deux fois par an. Pas une relance commerciale : un point sur leur secteur, ce qui s'est vendu, à quel rythme. C'est utile, ça se lit, et ça fait de vous la personne évidente le jour venu.

C'est la même logique de fichier client que je décris pour [la location saisonnière](/blog/location-saisonniere-reservation-directe), et c'est aussi peu coûteux.

## Par où commencer

Une fiche Google à votre nom et les avis de vos dernières ventes.

Une page à vous, avec votre secteur nommé commune par commune, vos ventes récentes, vos honoraires expliqués et une façon de vous joindre en un geste. Le format d'une page unique bien construite est décrit dans [ce qui fait une landing page efficace](/blog/landing-page-efficace).

Un point de marché écrit par commune, deux fois par an.

Une vidéo par semaine sur une question de vendeur, filmée au téléphone.

Rien là dedans ne demande un budget. Ça demande de la régularité, et c'est exactement ce que 90 % de vos concurrents ne feront pas. Si vous voulez qu'on en parle, [écrivez moi](/contact).
    `,
  },
  {
    id: '68',
    slug: 'commerce-centre-ville-visibilite',
    titleFr: 'Commerce de centre-ville : être trouvé avant que les gens sortent de chez eux',
    excerptFr:
      "Votre vitrine ne travaille que pour ceux qui passent devant. Aujourd'hui, la décision se prend en amont, sur un téléphone.",
    seoTitleFr: 'Commerce de Centre-Ville : Être Trouvé en Ligne',
    seoDescFr:
      "Boutique, salon ou commerce de proximité en Savoie : les réglages qui décident si quelqu'un pousse votre porte, à commencer par vos horaires.",
    readTime: '9 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-11',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['commerce', 'boutique', 'centre-ville', 'proximité'],
    related: [
      'creer-fiche-google-business',
      'fiche-google-business-optimiser',
      'coiffeur-esthetique-reseaux-sociaux',
    ],
    faqFr: [
      {
        q: 'Un commerce a-t-il besoin d\'un site web ?',
        a: "Pas toujours d'un site complet, mais toujours d'une présence à jour. Pour beaucoup de commerces de proximité, une fiche Google Business bien remplie et un compte actif font plus de travail qu'un site de huit pages laissé à l'abandon.",
      },
      {
        q: 'Quelle est l\'erreur la plus fréquente ?',
        a: "Des horaires faux sur la fiche Google. Quelqu'un qui se déplace et trouve porte close ne revient pas, et il le fait souvent savoir en avis. C'est le réglage le moins spectaculaire et le plus coûteux quand il est négligé.",
      },
      {
        q: 'Faut-il vendre en ligne ?',
        a: "Rarement, et pas pour concurrencer les grandes plateformes sur le prix. En revanche, permettre de réserver, de commander par message ou de vérifier une disponibilité avant de venir répond à un vrai besoin sans monter une boutique en ligne.",
      },
    ],
    contentFr: `
Il y a une phrase que j'entends souvent chez les commerçants d'Albertville et de Chambéry : "moi, mes clients passent devant, ils rentrent, je n'ai pas besoin d'internet."

C'était vrai. Ça l'est de moins en moins, et pour une raison précise : la décision de se déplacer se prend maintenant avant de sortir de chez soi.

## Le trajet réel d'un client

Quelqu'un cherche un cadeau, un article précis, un salon, une réparation. Il ne part pas en ville pour voir ce qui existe. Il tape sa recherche sur son téléphone, il regarde deux ou trois résultats sur la carte, il vérifie les horaires et les avis, et il se déplace vers celui qui a l'air ouvert et bien noté.

Votre vitrine ne joue qu'à la toute fin de ce parcours, et seulement s'il vous a choisi avant.

Autrement dit, la moitié de votre travail commercial se fait sur un écran que vous ne regardez jamais.

## L'erreur numéro un : les horaires

Ce n'est pas glamour, et c'est ce qui coûte le plus cher.

Une personne qui se déplace en centre-ville, qui trouve porte close alors que Google annonçait ouvert, ne revient pas. Et une partie de ces gens laissent un avis à une étoile, ce qui est le pire rendement possible : vous perdez le client et vous perdez la note.

Les points à tenir : les horaires réels, y compris la coupure du midi si vous en avez une, les jours de fermeture, et surtout les fermetures exceptionnelles. Vacances, jours fériés, inventaire, fermeture annuelle.

Google permet de renseigner des horaires spéciaux à l'avance. Faites le une fois par an, en janvier, pour tous les jours fériés. Vingt minutes qui vous évitent dix incidents.

## La fiche Google, votre vraie vitrine

Pour un commerce, la fiche Google Business est plus consultée que n'importe quel site.

Ce qui compte chez vous en particulier.

La catégorie principale, la plus précise possible. Google fait la différence entre boulangerie, pâtisserie et salon de thé, et vos clients aussi.

Les photos, nombreuses et récentes. La devanture, prise de la rue, pour qu'on vous reconnaisse en arrivant. L'intérieur, pour qu'on sache où l'on met les pieds. Les produits. Le fait de reconnaître une devanture depuis le trottoir n'a l'air de rien et change le taux de gens qui entrent.

Les prestations et les produits listés un par un. C'est ce qui vous fait apparaître sur une recherche précise plutôt que sur le seul nom de votre métier.

Les attributs, souvent oubliés : accès, paiement accepté, commande sur place, animaux acceptés, accessibilité. Ils répondent à des questions concrètes.

Le déroulé complet de la création est dans [créer sa fiche Google Business](/blog/creer-fiche-google-business), et le réglage fin dans [optimiser sa fiche](/blog/fiche-google-business-optimiser).

## Les avis, et surtout les réponses

Un commerce de centre-ville vit de sa réputation locale. Elle s'écrit maintenant en public.

Demandez systématiquement, au moment où le client est content, pas par email trois semaines après. Un petit support à la caisse avec un lien ou un code à scanner fait le travail sans que vous ayez à insister.

Et répondez à tout le monde, y compris aux mauvais avis. La méthode est dans [répondre à un avis négatif](/blog/repondre-avis-negatif-google) : vous n'écrivez pas pour la personne mécontente, vous écrivez pour les cinquante qui liront ensuite.

## Ce qu'il faut publier, et ce qui ne sert à rien

Ce qui ne sert à rien : les visuels de fêtes commerciales sans photo de votre boutique, les citations, les promotions annoncées à des gens qui ne vous connaissent pas.

Ce qui fonctionne pour un commerce de proximité.

L'arrivage. Ce qui vient de rentrer, filmé en dix secondes en le déballant. C'est le contenu le plus efficace du commerce, il crée une raison de venir cette semaine plutôt qu'un jour.

La personne. Vous, votre équipe, en train de travailler. Dans un centre-ville, on vient autant pour la relation que pour le produit.

Le savoir-faire. Comment choisir, comment entretenir, quelle taille prendre, ce qui se répare et ce qui ne se répare pas. Vous répondez déjà à ces questions dix fois par jour au comptoir.

La vie du centre-ville. Le marché, les travaux de la rue, un événement, la commerçante d'à côté. Les gens de la commune suivent ça, et ça vous relie au reste des commerces plutôt que de vous isoler.

Sur le rythme et les formats, tout est dans [stories ou reels](/blog/stories-ou-reels-entreprise) et [combien publier](/blog/combien-publier-reseaux-sociaux).

## Répondre aux messages, sans exception

Les gens posent leurs questions en message privé plutôt qu'au téléphone : est ce que vous avez ça en stock, est ce que vous êtes ouverts samedi, est ce que vous faites les retouches.

Un message sans réponse est un client qui va ailleurs, et c'est le client le plus facile puisqu'il est venu à vous. Deux créneaux de dix minutes par jour suffisent, et j'ai décrit le système dans [répondre aux commentaires et aux messages](/blog/repondre-commentaires-messages-prives).

## Faut-il vendre en ligne

Presque jamais, en tout cas pas pour affronter les grandes plateformes sur le prix et les délais. Vous perdriez sur les deux.

Ce qui a du sens, en revanche, c'est de retirer les frictions avant la visite : permettre de réserver un article, de prendre rendez vous, de commander par message et de venir chercher, ou simplement de vérifier une disponibilité.

Ce sont de petites choses qui transforment une hésitation en déplacement, et aucune ne demande une boutique en ligne.

## Par où commencer

Les horaires, aujourd'hui, y compris les fermetures des six prochains mois.

Les photos de la fiche, cette semaine, prises au téléphone en lumière du jour.

Les avis, en continu, avec une réponse à chacun.

Une publication par semaine, filmée pendant que vous travaillez.

C'est peu, c'est gratuit, et c'est déjà plus que ce que fait la majorité des commerces de la rue. Si vous tenez un commerce en Savoie et que vous voulez qu'on regarde ce qui manque, [écrivez moi](/contact).
    `,
  },
  {
    id: '69',
    slug: 'coach-sportif-trouver-clients',
    titleFr: 'Coach sportif, prof de yoga : trouver des clients sans vivre sur Instagram',
    excerptFr:
      "Le métier où l'on croit qu'il faut une grosse audience pour vivre. En réalité, il faut trente personnes qui habitent à vingt minutes.",
    seoTitleFr: 'Coach Sportif : Trouver des Clients en Local',
    seoDescFr:
      "Coach sportif ou professeur de yoga indépendant : comment remplir ses créneaux localement sans courir après les abonnés ni publier tous les jours.",
    readTime: '9 min',
    categoryFr: 'Réseaux sociaux',
    categorySlug: 'reseaux-sociaux',
    date: '2026-08-08',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['coach sportif', 'yoga', 'indépendant', 'clientèle locale'],
    related: [
      'therapeute-reseaux-sociaux-clients',
      'abonnes-ou-clients',
      'creer-fiche-google-business',
    ],
    faqFr: [
      {
        q: 'Faut-il beaucoup d\'abonnés pour vivre du coaching ?',
        a: "Non, et c'est le contresens le plus coûteux du métier. Un coach en présentiel remplit son planning avec quelques dizaines de clients qui habitent à côté. Une audience nationale ne se déplacera jamais dans votre salle.",
      },
      {
        q: 'Faut-il publier tous les jours ?',
        a: "Non. Deux publications par semaine, tenues six mois, produisent bien plus qu'un mois de publication quotidienne suivi de l'abandon. La régularité vaut mieux que l'intensité, surtout quand on donne déjà des cours toute la journée.",
      },
      {
        q: 'Faut-il afficher ses tarifs ?',
        a: "Oui, au moins un ordre de grandeur. C'est la première question de tout le monde, presque personne n'ose la poser, et l'absence de réponse fait perdre autant de gens sérieux que de curieux.",
      },
    ],
    contentFr: `
C'est le métier où j'ai vu le plus de gens se tromper de cible, et ils se trompent de bonne foi.

Ils regardent des comptes de coachs à cent mille abonnés, ils en concluent qu'il faut une audience pour vivre, et ils passent leurs soirées à produire du contenu pour des gens qui ne mettront jamais un pied dans leur salle.

## Le contresens de l'audience

Un coach à cent mille abonnés vend des programmes à distance. C'est un autre métier, avec un autre modèle économique.

Vous, si vous donnez des séances en présentiel à Albertville, Chambéry ou Annecy, vous n'avez pas besoin de cent mille personnes. Vous avez besoin de trente ou quarante personnes qui habitent à moins de vingt minutes de vous, qui vous connaissent et qui peuvent payer.

Ces deux objectifs demandent des contenus opposés. L'un demande du spectaculaire qui voyage loin. L'autre demande de la proximité qui reste près.

Le raisonnement complet est dans [des abonnés ou des clients](/blog/abonnes-ou-clients), et il s'applique à votre métier plus qu'à aucun autre.

## Ce qui vous fait choisir

Un client potentiel ne compare pas des exercices. Il se demande trois choses, dans cet ordre.

Est ce que je vais me sentir ridicule. C'est le frein numéro un, et il est rarement traité. Les gens qui n'ont pas fait de sport depuis dix ans ont peur du regard, pas de l'effort.

Est ce que cette personne comprend un cas comme le moi. Une reprise après grossesse, un mal de dos, soixante-dix ans, une blessure, un poids qui gêne, un emploi du temps impossible.

Est ce que ça va me coûter cher et combien de temps ça va prendre.

Répondez à ces trois questions et vous avez fait la moitié du travail. La plupart des comptes du secteur répondent à une quatrième question que personne ne pose : est ce que ce coach est en forme.

## Le contenu qui remplit un planning

Rassurer, avant tout le reste. Montrez de vrais débutants, de vraies premières séances, des gens qui n'ont pas le corps des photos de magazine. C'est ce qui fait écrire les gens.

Expliquer un geste précis. Comment se relever sans se faire mal, comment tenir une position, quelle erreur de posture revient tout le temps. Utile, court, réutilisable des années.

Répondre à une question de client. Vous en recevez toutes les semaines : est ce que je peux faire du sport avec de l'arthrose, combien de fois par semaine, faut-il être à jeun, à partir de quel âge. Chaque question est une vidéo.

Montrer le lieu. La salle, l'entrée, le parking, le vestiaire, le trajet depuis le centre. Ça enlève une friction dont personne ne parle : la peur d'arriver quelque part qu'on ne connaît pas.

Nommer les lieux à voix haute. Votre commune, votre salle, le parc où vous faites les séances en extérieur. C'est ce qui vous fait apparaître auprès des bonnes personnes, bien plus que n'importe quel hashtag.

Ce qui ne remplit pas un planning : les citations motivantes, les programmes génériques, les transformations spectaculaires sans contexte, et le contenu copié sur des comptes américains.

## La prudence sur les promesses

Deux règles à ne pas franchir, et pas seulement pour des raisons commerciales.

Ne promettez pas de résultat chiffré. Un poids perdu en un temps donné n'engage que ceux qui y croient, et ça se retourne contre vous.

Ne donnez pas d'avis médical. Douleur, pathologie, grossesse, rééducation : votre place est de renvoyer vers un professionnel de santé et d'adapter ensuite. C'est aussi ce qui vous distingue de la moitié du secteur.

La même prudence s'applique aux thérapeutes, et j'ai développé le sujet dans [thérapeute et réseaux sociaux](/blog/therapeute-reseaux-sociaux-clients).

## La fiche Google, encore une fois

Presque aucun coach indépendant n'en a une, et c'est un cadeau.

Quelqu'un qui tape "coach sportif" et le nom de sa commune voit une carte avec trois résultats. Si vous n'y êtes pas, vous n'existez pas pour cette personne, quel que soit votre compte Instagram.

Vous pouvez déclarer une zone d'intervention si vous vous déplacez, ou une adresse si vous avez une salle. Le déroulé est dans [créer sa fiche Google Business](/blog/creer-fiche-google-business).

Et demandez des avis. Vos clients vous voient chaque semaine, ils sont contents, ils disent oui presque toujours quand on demande de vive voix à la fin d'une séance.

## Une page, et les tarifs dessus

Vous n'avez pas besoin d'un gros site. Une page bien construite suffit, et il faut qu'elle contienne ce qu'un compte de réseau social ne peut pas contenir.

Vos diplômes et votre assurance professionnelle. Dans un métier où l'on confie son corps, ce sont des informations qui rassurent, et peu de gens les affichent.

Ce que vous proposez concrètement : individuel, petit groupe, à domicile, en extérieur, en visio.

Les tarifs, au moins en ordre de grandeur, et le fonctionnement des cartes ou des abonnements. C'est la question que tout le monde se pose et que peu osent poser.

Le lieu, les horaires, et un moyen de réserver ou d'écrire en un geste.

Le format d'une page unique qui fait ce travail est décrit dans [ce qui fait une landing page efficace](/blog/landing-page-efficace).

## Les prescripteurs, le levier oublié

Kinésithérapeutes, médecins généralistes, ostéopathes, diététiciennes, pharmacies, clubs, comités d'entreprise, mairies.

Ce sont eux qu'on interroge quand quelqu'un dit "il faudrait que je m'y remette". Un professionnel de santé qui vous connaît vous envoie plus de clients qu'un an de publications.

Ça se travaille simplement : se présenter, expliquer ce que vous faites et ce que vous ne faites pas, laisser de quoi vous recontacter. C'est du temps, pas de l'argent.

## Le rythme tenable

Deux publications par semaine, un message répondu dans la journée, un avis demandé par mois.

Tenu six mois, c'est largement au dessus de ce que fait la majorité des indépendants du secteur, qui alternent trois semaines intenses et deux mois de silence.

Si vous voulez que ce soit tenu sans y penser, c'est exactement ce que je fais pour mes clients : une journée de tournage sur place, puis six à douze publications qui sortent dans le mois. C'est décrit sur [la page réseaux sociaux](/reseaux-sociaux), et vous pouvez [m'écrire](/contact) si vous exercez en Savoie ou en Haute-Savoie.
    `,
  },
];
