import type { BlogPost } from './types';

/**
 * Cluster "terrain" : ce qui se joue hors de l'ecran. Identite visuelle,
 * supports physiques, recommandation organisee, salons, et le cas du
 * concurrent qui passe devant.
 */
export const terrainPosts: BlogPost[] = [
  {
    id: '95',
    slug: 'identite-visuelle-tpe',
    titleFr: 'Logo et identité visuelle : ce dont une TPE a réellement besoin',
    excerptFr:
      "Beaucoup de gens commencent par là et y mettent trop d'argent. D'autres n'y mettent rien et le paient ailleurs. Voilà le juste milieu.",
    seoTitleFr: 'Logo et Identité Visuelle pour une TPE',
    seoDescFr:
      "Ce qu'il faut vraiment comme logo, couleurs et cohérence visuelle quand on est artisan ou indépendant, et à quel moment s'en occuper.",
    readTime: '8 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['logo', 'identité visuelle', 'charte', 'cohérence'],
    related: [
      'se-faire-connaitre-quand-on-demarre',
      'supports-physiques-vehicule-panneaux',
      'photos-pour-son-site-web',
    ],
    faqFr: [
      {
        q: 'Faut-il un logo pour démarrer ?',
        a: "Il faut quelque chose de propre, pas forcément quelque chose de définitif. Un nom écrit dans une typographie choisie, avec une couleur, suffit largement les premiers mois et vous évite de figer une identité avant de savoir ce que vous vendez.",
      },
      {
        q: 'Combien coûte un logo pour une petite entreprise ?',
        a: "Les écarts sont énormes, de quelques dizaines d'euros pour un modèle générique à plusieurs milliers pour une identité complète. Pour une TPE, le budget utile se situe entre les deux, et ce qui compte est de repartir avec des fichiers exploitables et des règles simples.",
      },
      {
        q: 'Qu\'est-ce qui compte le plus visuellement ?',
        a: "La cohérence, très loin devant la beauté du logo. Le même nom, les mêmes couleurs et les mêmes photos partout produisent plus d'effet qu'un logo remarquable utilisé de six façons différentes.",
      },
    ],
    contentFr: `
Deux erreurs opposées, et je vois les deux à parts égales.

La première : dépenser deux mille euros en identité de marque avant d'avoir un seul client, parce que ça donne l'impression d'avancer.

La seconde : ne jamais s'en occuper, et se retrouver trois ans plus tard avec un logo étiré sur le camion, une autre couleur sur les cartes, et un nom écrit de quatre façons différentes.

## Ce qu'un logo fait, et ne fait pas

Un logo ne vend rien. Personne n'a jamais appelé un plombier à cause de son logo.

Ce qu'il fait, c'est vous rendre reconnaissable. Quelqu'un qui a vu votre camionnette, puis votre panneau de chantier, puis votre publication, doit relier les trois sans y penser.

C'est tout, et c'est déjà beaucoup. La reconnaissance répétée est ce qui transforme une entreprise inconnue en entreprise dont on se souvient au moment du besoin.

## Le minimum sérieux

Trois éléments, pas plus.

Un nom écrit toujours de la même façon. Même orthographe, même espacement, même casse. C'est le point le plus violé et le moins cher à corriger.

Une couleur principale, plus un neutre. Pas cinq. Une couleur que vous utilisez partout, sur le camion comme sur le site.

Une typographie, ou deux au maximum. Une pour les titres, une pour le texte.

Avec ces trois éléments et rien d'autre, vous êtes déjà plus cohérent que la majorité des petites entreprises de votre secteur.

## Ce qui compte plus que le logo

La cohérence. Un logo moyen utilisé partout de la même façon produit plus d'effet qu'un logo remarquable décliné n'importe comment.

La lisibilité. Votre logo doit rester lisible en petit, sur un fond clair comme sur un fond sombre, et en une seule couleur. Un dégradé compliqué qui devient une bouillie une fois imprimé sur une chemise de travail ne vous sert à rien.

Vos photos. Sur un site d'artisan, elles pèsent infiniment plus que le logo. Des photos de vos vrais chantiers, prises correctement, font plus pour votre image que n'importe quelle identité graphique. Le sujet est dans [quelles photos mettre sur son site](/blog/photos-pour-son-site-web).

Votre nom, s'il est prononçable au téléphone sans épeler. C'est une décision de marque bien plus importante qu'un symbole.

## Le bon moment

Pas au démarrage, sauf si le budget est confortable.

Quand on se lance, ce qui compte est d'exister, d'obtenir des premiers clients et des premiers avis. Une identité provisoire propre suffit largement, et j'ai décrit l'ordre complet dans [se faire connaître quand on démarre](/blog/se-faire-connaitre-quand-on-demarre).

Le bon moment arrive quand trois signaux se présentent en même temps : vous savez précisément ce que vous vendez et à qui, vous commencez à investir dans des supports durables comme un véhicule floqué ou une enseigne, et votre identité actuelle vous gêne quand vous l'envoyez à un prospect.

Refaire une identité coûte, mais refaire un floquage de camion coûte plus cher. Faites l'identité avant les supports lourds, pas après.

## Les fichiers que vous devez avoir

C'est le point pratique que personne ne vérifie et qui coince toujours au mauvais moment.

Votre logo en version vectorielle, c'est-à-dire un fichier qui s'agrandit sans perdre en qualité. Sans ça, aucun imprimeur ni aucun poseur d'adhésif ne pourra travailler proprement.

Une version en couleur, une version en noir, une version en blanc.

Une version horizontale et une version compacte ou carrée, pour les photos de profil et les tampons.

Les références exactes de vos couleurs, pour l'écran et pour l'impression.

Et le nom des typographies, avec leur licence.

Exigez ces fichiers à la livraison, quel que soit le prestataire. Un logo livré en une seule image basse définition est un logo que vous devrez refaire.

## Les options, honnêtement

Le faire soi-même avec un outil en ligne. Ça donne quelque chose de correct pour démarrer, à condition de rester très simple : le nom, une typographie propre, une couleur. Les modèles génériques avec un symbole, en revanche, se reconnaissent et ressemblent à ceux de dix autres entreprises.

Un générateur automatique. Rapide et peu cher. Le problème est double : vous ne récupérez pas toujours les fichiers exploitables, et vous n'avez aucune garantie d'exclusivité.

Un graphiste indépendant. C'est le rapport le plus juste pour une TPE. Vous obtenez quelque chose de propre, adapté à vos usages réels, avec les fichiers qui vont bien.

Une agence de branding complète. Justifié quand la marque est le produit. Rarement le cas d'un artisan de vallée.

## Ce que je fais de mon côté

Je travaille l'identité avec un designer, mon frère, plutôt que de bricoler seul un domaine qui n'est pas exactement le mien. Le logo, la charte et la cohérence entre le site, les supports et les vidéos sont traités ensemble, parce que c'est là que le résultat se joue.

Ce que je conseille le plus souvent : quelque chose de sobre, lisible en petit, qui tient sur un adhésif de camion comme sur une photo de profil, et qu'on n'aura pas envie de refaire dans deux ans.

Si vous hésitez sur ce dont vous avez besoin, [écrivez moi](/contact). Il m'arrive régulièrement de répondre que votre logo actuel est suffisant et qu'il vaut mieux mettre l'argent ailleurs.
    `,
  },
  {
    id: '96',
    slug: 'concurrent-devant-moi-google',
    titleFr: 'Pourquoi mon concurrent passe devant moi sur Google',
    excerptFr:
      "Son site est moins beau, son travail n'est pas meilleur, et pourtant il sort premier. Il y a toujours une raison, et elle est identifiable.",
    seoTitleFr: 'Pourquoi mon Concurrent est Devant sur Google',
    seoDescFr:
      "Les sept raisons réelles qui font qu'un concurrent vous passe devant sur Google, et comment vérifier laquelle vous concerne.",
    readTime: '9 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-12',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['concurrence', 'classement', 'analyse', 'référencement'],
    related: [
      'etre-premier-google-dans-sa-ville',
      'apparaitre-sur-google-maps',
      'combien-de-temps-referencement-google',
    ],
    faqFr: [
      {
        q: 'Peut-on savoir ce que fait un concurrent ?',
        a: "Une grande partie est publique : sa fiche Google, ses avis, ses catégories, ses pages, ses contenus, la date de son site. Une demi-heure d'observation suffit à comprendre l'essentiel de ce qui le place devant vous.",
      },
      {
        q: 'Faut-il copier ce que fait le concurrent qui gagne ?',
        a: "Comprendre, oui. Copier, non. Reproduire ses pages vous met au mieux à égalité avec du retard, alors qu'il existe presque toujours des recherches qu'il ne traite pas et sur lesquelles vous pouvez passer devant vite.",
      },
      {
        q: 'L\'ancienneté est-elle rattrapable ?',
        a: "Oui, mais pas sur le même terrain. Vous ne rattraperez pas dix ans d'ancienneté sur une recherche générique. Vous pouvez le dépasser en quelques mois sur des recherches précises qu'il n'a jamais traitées.",
      },
    ],
    contentFr: `
C'est une des phrases que j'entends le plus souvent, et elle est toujours dite avec le même agacement : "son site est moins bien que le mien, et il est devant."

C'est vrai, et ce n'est pas injuste. Google ne classe pas l'esthétique. Il y a toujours une raison, et dans presque tous les cas elle est visible en trente minutes.

## Avant tout : vérifiez qu'il est vraiment devant

Google personnalise les résultats selon votre position et votre historique. Depuis votre bureau, avec votre compte connecté, vous ne voyez pas ce que voient vos clients.

Ouvrez une navigation privée, déconnectez-vous, et si possible faites le test depuis une autre commune ou le téléphone de quelqu'un d'autre.

Beaucoup de gens s'inquiètent d'un classement qu'ils sont seuls à voir.

## Raison 1 : il est plus proche

Sur une recherche locale, la proximité entre la personne qui cherche et l'entreprise pèse énormément, surtout dans le bloc carte.

Si votre concurrent est en centre-ville et que vous êtes à six kilomètres, il sortira devant vous pour tous les gens du centre, et vous devant lui pour ceux de votre quartier.

Ce n'est pas rattrapable, et ce n'est pas grave : ce que ça veut dire, c'est que vous ne vous battez pas sur le même territoire. Le mécanisme complet est dans [mon entreprise n'apparaît pas sur Google Maps](/blog/apparaitre-sur-google-maps).

## Raison 2 : il a plus d'avis, et des avis plus récents

C'est la cause la plus fréquente après la proximité, et la plus facile à vérifier : ouvrez sa fiche et comptez.

Quatre-vingt-dix avis dont douze du dernier trimestre battent trente avis dont le dernier date de l'an dernier. Le volume compte, la fraîcheur aussi.

C'est aussi la cause la plus rattrapable, parce qu'elle ne dépend que de votre organisation. Demander un avis à chaque client satisfait pendant six mois change complètement la donne. La méthode est dans [obtenir des avis Google](/blog/obtenir-avis-google).

## Raison 3 : sa catégorie est mieux choisie

Ouvrez sa fiche Google et regardez la catégorie affichée sous son nom. Comparez avec la vôtre.

Si vous êtes en "entreprise de bâtiment" et lui en "carreleur", il sortira sur "carreleur" et pas vous, quel que soit votre travail.

C'est un réglage de deux minutes qui règle parfois des mois de questionnement.

## Raison 4 : il a une page dédiée, vous avez une ligne

Vérifiez sur quelle page de son site Google l'envoie.

Neuf fois sur dix, c'est une page entière consacrée à la prestation recherchée. Chez vous, la même prestation est une ligne dans une liste de huit.

Une page qui traite un sujet bat une page qui le mentionne. C'est le principe le plus constant du référencement, et c'est du travail d'écriture, pas de technique.

## Raison 5 : il est là depuis plus longtemps

L'ancienneté d'un domaine et l'accumulation de signaux comptent réellement.

Vous ne rattraperez pas dix ans sur une recherche générique très disputée. Continuer à s'entêter dessus est le meilleur moyen de perdre deux ans.

Ce que vous pouvez faire, c'est le contourner : viser les recherches précises qu'il n'a jamais traitées. Il y en a toujours, et elles convertissent mieux. La méthode est dans [trouver les mots que vos clients tapent](/blog/trouver-mots-cles-clients).

## Raison 6 : d'autres sites parlent de lui

Une mention sur le site d'un fournisseur, d'une fédération, d'une association locale, d'un journal de commune ou d'un partenaire compte comme un signal de confiance.

Vérifiez ce que vous trouvez en cherchant son nom d'entreprise entre guillemets. Vous verrez sur quels sites il apparaît.

C'est souvent là qu'est l'écart, et c'est rattrapable : ce type de mention se demande, et personne ne le fait. Le sujet est traité dans [les annuaires en ligne](/blog/annuaires-locaux-visibilite).

## Raison 7 : son site est plus rapide ou plus utilisable sur mobile

Moins spectaculaire que les autres, mais réel. Un site lent fait repartir les visiteurs, et Google mesure ce comportement.

Testez le vôtre sur un téléphone, en connexion mobile, pas sur votre ordinateur en fibre. Le détail est dans [la vitesse sur mobile](/blog/vitesse-site-web-mobile).

## L'observation en trente minutes

Prenez le concurrent qui vous passe devant et notez, dans cet ordre.

Sa distance au centre de la zone que vous visez.

Son nombre d'avis, sa note, la date du dernier.

Sa catégorie principale.

La page sur laquelle Google envoie les gens, et ce qu'elle contient.

Depuis combien de temps son site existe.

Ce qu'on trouve en cherchant son nom entre guillemets.

En une demi-heure vous saurez ce qui vous sépare, et surtout si l'écart se comble en trois mois ou en trois ans.

## Ce qu'il faut en faire

Ne copiez pas. Reproduire ses pages vous met au mieux à égalité, avec du retard.

Corrigez ce qui est corrigeable vite : catégorie, avis, page dédiée, vitesse.

Et cherchez ce qu'il ne fait pas. Dans la quasi-totalité des cas, il existe des questions que vos clients tapent et que personne dans votre commune ne traite. C'est là que le terrain est libre, et c'est là que vous passerez devant en quelques mois plutôt qu'en quelques années.

Dernier point, et il compte : le classement n'est pas l'objectif. Le nombre de demandes reçues l'est. Un concurrent premier sur une recherche que personne ne tape est premier sur rien. La façon de mesurer ce qui compte vraiment est dans [savoir si votre communication rapporte](/blog/mesurer-si-sa-communication-rapporte).
    `,
  },
  {
    id: '97',
    slug: 'supports-physiques-vehicule-panneaux',
    titleFr: 'Camionnette, panneaux, cartes : le physique compte encore',
    excerptFr:
      "En vallée, un véhicule bien floqué reste un des meilleurs supports publicitaires qui existent. À condition qu'on puisse le lire à 50 km/h.",
    seoTitleFr: 'Floquage, Panneaux et Cartes : ce qui Marche',
    seoDescFr:
      "Véhicule floqué, panneau de chantier, carte de visite : ce qui fonctionne encore hors ligne pour une entreprise locale, et comment le relier au reste.",
    readTime: '8 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-11',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['floquage', 'panneaux', 'print', 'local'],
    related: [
      'identite-visuelle-tpe',
      'obtenir-avis-google',
      'se-faire-connaitre-quand-on-demarre',
    ],
    faqFr: [
      {
        q: 'Un véhicule floqué rapporte-t-il vraiment ?',
        a: "Pour une entreprise qui circule dans une zone restreinte, c'est un des meilleurs rapports entre coût et exposition. Le même véhicule est vu des centaines de fois par les mêmes personnes, ce qui crée la familiarité qui précède l'appel.",
      },
      {
        q: 'Que faut-il écrire sur une camionnette ?',
        a: "Le métier, la zone et le téléphone, en très gros. Le nom de l'entreprise arrive après. Un passant qui ne peut pas lire votre numéro en trois secondes ne retiendra rien du tout.",
      },
      {
        q: 'Les cartes de visite servent-elles encore ?',
        a: "Oui, mais comme support de transition. Elles servent à laisser une trace après un contact réel, pas à prospecter. Ajoutez de quoi vous retrouver en ligne dessus, c'est là que se fait la vérification.",
      },
    ],
    contentFr: `
Dans une vallée, il y a un support publicitaire dont personne ne parle et qui bat souvent tout le reste : la camionnette garée devant un chantier, tous les jours, pendant trois semaines.

Le numérique n'a pas remplacé le physique en local. Il l'a complété, et les deux fonctionnent nettement mieux ensemble que séparément.

## Pourquoi ça marche encore ici

Dans un bassin de vingt ou trente mille habitants, les mêmes personnes croisent les mêmes véhicules tous les jours.

Cette répétition crée exactement ce que cherche n'importe quelle campagne publicitaire : la familiarité. Quand la chaudière lâche, le nom qui remonte est celui qu'on a vu cinquante fois sans y prêter attention.

C'est aussi un support qu'on paie une fois et qui travaille pendant des années.

## Le véhicule

Les règles sont simples et presque toutes violées.

Le métier en premier, en très gros. "Plombier chauffagiste" doit se lire de loin. C'est l'information qui déclenche la mémorisation, pas votre nom.

Le téléphone ensuite, aussi gros que possible. Un numéro qu'on ne peut pas lire à cinquante kilomètres heure ne sert à rien.

La zone, en une ligne. "Albertville et la combe de Savoie" indique tout de suite si vous êtes concerné.

Le nom de l'entreprise en dernier, et c'est contre-intuitif. Personne ne cherche votre nom, on cherche votre métier.

Ce qu'il faut éviter : les textes en petit qu'on ne lit qu'à l'arrêt, les listes de dix prestations, les visuels chargés, et l'adresse email écrite en tout petit sur la portière arrière.

Un détail utile : mettez quelque chose à l'arrière du véhicule. C'est ce que les gens regardent le plus longtemps, dans les embouteillages et aux feux.

## Le panneau de chantier

C'est le support le plus sous-utilisé du bâtiment.

Un panneau posé pendant trois semaines devant une maison en travaux est vu par tous les voisins, qui sont exactement les gens susceptibles d'avoir le même besoin. La rue où vous travaillez est votre meilleure zone de prospection, et elle est gratuite.

Demandez l'accord du client, et gardez le même format que le véhicule : métier, téléphone, zone.

Et si vous le pouvez, ajoutez une mention de ce qui est fait ici. "Réfection complète de toiture" transforme un panneau en démonstration.

## Les cartes de visite

Elles servent encore, mais pas à ce qu'on croit.

Elles ne prospectent pas. Elles laissent une trace après un contact réel, et elles servent surtout à ce que la personne vous retrouve trois semaines plus tard, quand elle aura enfin le temps.

Deux choses à mettre dessus qui manquent presque toujours : de quoi vous retrouver en ligne, et une raison de vous rappeler. Une carte qui indique votre métier et votre zone est plus utile qu'une carte qui indique seulement votre nom.

Le format d'un petit code à scanner qui mène directement à votre fiche Google ou à votre page de contact fonctionne bien, à condition qu'il mène quelque part d'utile.

## Le lien avec le numérique

C'est le point que la plupart des entreprises ratent, et c'est celui qui multiplie l'effet de tout le reste.

Quelqu'un voit votre camionnette. Il retient votre métier et vaguement votre nom. Puis, au moment du besoin, il ne cherche pas votre numéro sur la portière : il tape votre nom sur Google.

Ce qu'il trouve à cet instant décide de la suite. Une fiche Google complète avec des avis récents transforme la reconnaissance en appel. Rien du tout, ou une fiche vide, annule le bénéfice de trois ans de floquage.

Autrement dit, le physique génère la notoriété, et le numérique la convertit. Si vous investissez dans l'un sans l'autre, vous payez deux fois pour un seul résultat.

Le minimum à avoir en face : une fiche Google Business complète, décrite dans [créer sa fiche Google Business](/blog/creer-fiche-google-business), et des avis, décrits dans [obtenir des avis Google](/blog/obtenir-avis-google).

## Ce qui ne marche plus très bien

Les flyers en boîte aux lettres pour un service qui ne s'achète pas dans l'instant. Le taux de retour est très faible, et le papier part souvent à la poubelle sans être lu.

Les annonces dans les journaux gratuits, sauf sur une clientèle âgée et pour un métier de proximité immédiate.

Les objets publicitaires, sauf pour fidéliser des clients existants.

Ce n'est pas absolu, et certains métiers font exception. Mais avant de dépenser en print, vérifiez que votre fiche Google est complète : le rendement n'a rien à voir.

## Les supports qui restent excellents

L'enseigne, si vous avez un local. Elle travaille en permanence, y compris quand vous êtes fermé.

Le véhicule, pour les métiers qui se déplacent.

La tenue de travail avec le nom de l'entreprise, qui vous rend identifiable sur un chantier et dans une file de supermarché.

Le panneau de chantier.

Et le plus efficace de tous : le client content qui parle de vous. Ce n'est pas un support, c'est le résultat de tout le reste, et il se travaille aussi.

## Comment décider

Une question suffit : est ce que ce support sera vu plusieurs fois par les mêmes personnes de ma zone ?

Si oui, il vaut probablement le coup. Si non, mettez l'argent ailleurs.

C'est ce critère qui explique pourquoi une camionnette bat un flyer, et pourquoi une enseigne bat une annonce ponctuelle.
    `,
  },
  {
    id: '98',
    slug: 'parrainage-bouche-a-oreille',
    titleFr: 'Organiser le bouche à oreille au lieu de l\'attendre',
    excerptFr:
      "C'est votre premier canal d'acquisition et le seul que vous ne pilotez pas. Trois habitudes suffisent à le rendre régulier.",
    seoTitleFr: 'Organiser le Bouche à Oreille',
    seoDescFr:
      "Recommandation, parrainage, prescripteurs : comment rendre régulier le canal qui vous amène déjà le plus de clients, sans rien payer.",
    readTime: '8 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-10',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['recommandation', 'parrainage', 'prescripteurs', 'réseau'],
    related: [
      'obtenir-avis-google',
      'newsletter-tpe-locale',
      'mesurer-si-sa-communication-rapporte',
    ],
    faqFr: [
      {
        q: 'Faut-il payer les gens qui recommandent ?',
        a: "Pas nécessairement, et pour beaucoup de métiers ce n'est pas souhaitable. Une recommandation rémunérée perd une partie de sa valeur, et certains prescripteurs professionnels ne peuvent pas l'accepter. Un geste symbolique ou une réciprocité fonctionne souvent mieux.",
      },
      {
        q: 'Comment demander une recommandation sans être gênant ?',
        a: "En la rendant précise. \"Si vous connaissez quelqu'un qui a le même problème de toiture, parlez lui de moi\" obtient beaucoup plus de résultats que \"n'hésitez pas à me recommander\", qui ne donne aucune consigne.",
      },
      {
        q: 'Qui sont les meilleurs prescripteurs ?',
        a: "Ceux qui voient vos clients avant vous : les métiers adjacents au vôtre, les commerçants du même quartier, les professionnels de santé pour les métiers du bien-être, les hébergeurs pour les activités touristiques.",
      },
    ],
    contentFr: `
Quand je demande à un artisan d'où viennent ses clients, la réponse est presque toujours le bouche à oreille.

Quand je demande ce qu'il fait pour le provoquer, la réponse est presque toujours rien.

C'est le premier canal d'acquisition de la majorité des petites entreprises, et le seul que personne ne pilote.

## Pourquoi ça ne se déclenche pas tout seul

Vos clients contents ne parlent pas de vous par mauvaise volonté. Ils ne le font pas parce que l'occasion ne se présente pas et parce qu'ils ne savent pas quoi dire.

Une personne satisfaite ne va pas spontanément faire votre promotion. Elle en parlera si quelqu'un pose la question au bon moment, et si elle se souvient de votre nom à cet instant.

Tout le travail consiste à agir sur ces deux points : leur donner de quoi dire, et rester présent dans leur mémoire.

## Habitude 1 : demander, précisément

La formule "n'hésitez pas à me recommander" ne produit rien, parce qu'elle ne donne aucune consigne.

Ce qui fonctionne est précis et situé : "si vous entendez quelqu'un parler d'un problème d'humidité comme le vôtre, dites lui de m'appeler."

La personne sait alors quoi dire, à qui, et dans quelle situation. Ça multiplie les chances qu'elle y pense au bon moment.

Le moment de la demande compte aussi : la fin de la prestation, quand le client est content et que le résultat est sous ses yeux. C'est aussi le moment de demander l'avis Google, et les deux se demandent dans la même phrase.

## Habitude 2 : rester dans la mémoire

Un client content vous oublie en six mois. Ce n'est pas de l'ingratitude, c'est normal.

Ce qui le fait se souvenir : un email deux ou trois fois par an avec une information utile, une publication qu'il croise, votre camionnette dans le quartier, un passage sur un marché.

C'est là que la liste d'emails prend tout son sens, et j'ai développé le sujet dans [la liste d'emails](/blog/newsletter-tpe-locale). Quelques envois par an suffisent à rester la personne à qui on pense.

## Habitude 3 : construire des prescripteurs

C'est le levier le plus puissant, et le plus négligé.

Un prescripteur, c'est quelqu'un qui rencontre vos futurs clients avant vous, dans un contexte où votre nom peut sortir naturellement.

Pour un artisan du bâtiment : les autres corps de métier, les architectes, les agents immobiliers, les fournisseurs, les syndics.

Pour un thérapeute ou un coach : les médecins, les kinés, les pharmacies, les autres praticiens.

Pour une activité touristique : les hébergeurs, les offices de tourisme, les loueurs de matériel, les restaurants.

Pour un commerce : les commerçants voisins, qui envoient des gens toute la journée.

La démarche est simple et personne ne la fait : vous vous présentez, vous expliquez ce que vous faites et surtout ce que vous ne faites pas, et vous laissez de quoi vous joindre. Un contact par mois suffit pour construire un réseau réel en un an.

## La réciprocité plutôt que la commission

Le réflexe est de proposer un pourcentage. C'est rarement la meilleure idée.

Une recommandation rémunérée perd de sa valeur aux yeux de celui qui la reçoit. Et certains professionnels, notamment dans la santé, ne peuvent pas l'accepter.

Ce qui fonctionne mieux : renvoyer des clients en retour. Un plombier qui envoie du monde à un carreleur reçoit du monde du carreleur. C'est le système le plus stable, parce qu'il repose sur un intérêt mutuel plutôt que sur une transaction.

Autre chose qui marche : rendre service sans contrepartie. Dépanner un confrère débordé, donner un conseil gratuit, recommander quelqu'un même quand ça ne vous rapporte rien. Ces gestes se rendent, avec un décalage.

## Le parrainage entre clients, quand il a du sens

Pour certaines activités, une mécanique explicite fonctionne : un geste pour le client qui recommande et pour celui qui arrive.

C'est adapté aux prestations récurrentes, comme l'entretien, le coaching, les soins, l'abonnement. Ça l'est beaucoup moins aux prestations uniques et chères, où ça peut sembler déplacé.

Si vous en mettez un en place, gardez le simple, annoncez le clairement, et honorez le sans que le client ait à réclamer.

## Ce qui tue le bouche à oreille

Un devis promis et jamais envoyé. C'est de loin la première cause de mauvaise réputation dans le bâtiment, avant même la qualité du travail.

Un téléphone auquel personne ne répond, et pas de rappel.

Un chantier laissé sale.

Un dépassement de budget non annoncé.

Aucun de ces points n'est un problème de communication. Ce sont des problèmes d'organisation, et ils coûtent plus cher que n'importe quelle absence de site.

## La partie numérique du bouche à oreille

Une recommandation ne se termine plus par un appel. Elle se termine par une vérification en ligne.

Quelqu'un vous recommande, la personne tape votre nom sur son téléphone, et ce qu'elle trouve confirme ou annule la recommandation.

C'est pour ça que la fiche Google, les avis et un site à jour ne s'opposent pas au bouche à oreille : ils le rendent efficace. Une recommandation suivie de rien du tout perd une partie de sa force.

## Le suivi

Notez d'où viennent vos clients, systématiquement. Une colonne dans un tableau.

Au bout de six mois, vous saurez qui vous envoie du monde. Et vous saurez qui remercier, ce que presque personne ne fait et qui produit beaucoup.

La méthode complète de suivi est dans [savoir si votre communication rapporte](/blog/mesurer-si-sa-communication-rapporte).
    `,
  },
  {
    id: '99',
    slug: 'salons-marches-professionnels',
    titleFr: 'Salons, marchés et foires : les rentabiliser vraiment',
    excerptFr:
      "Trois jours debout, un stand payé, et rien derrière. Le problème n'est presque jamais le salon, c'est ce qui se passe la semaine suivante.",
    seoTitleFr: 'Salons et Marchés : les Rentabiliser',
    seoDescFr:
      "Comment préparer, tenir et surtout exploiter un salon ou un marché quand on est une petite entreprise locale, sans perdre son temps.",
    readTime: '8 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-08',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['salon', 'marché', 'foire', 'prospection'],
    related: [
      'parrainage-bouche-a-oreille',
      'newsletter-tpe-locale',
      'mesurer-si-sa-communication-rapporte',
    ],
    faqFr: [
      {
        q: 'Un salon est-il rentable pour une petite entreprise ?',
        a: "Cela dépend entièrement du suivi. Un stand qui produit quarante contacts jamais rappelés ne rapporte rien, quel que soit le salon. La rentabilité se joue dans les deux semaines qui suivent, pas pendant l'événement.",
      },
      {
        q: 'Que faut-il récupérer sur un stand ?',
        a: "Un moyen de recontacter, et une note sur le besoin de la personne. Une carte de visite sans contexte est inutilisable trois semaines plus tard. Écrivez deux mots au dos, tout de suite.",
      },
      {
        q: 'Faut-il faire des offres spéciales salon ?',
        a: "Sur des prestations chères et longues, rarement : personne ne signe une rénovation sur un stand. Une raison de vous recontacter, comme une visite ou un diagnostic offert avec une date, fonctionne mieux qu'une remise.",
      },
    ],
    contentFr: `
Un artisan me disait qu'il ne faisait plus de salons : trois jours debout, huit cents euros de stand, et rien derrière.

En creusant, j'ai découvert qu'il avait rapporté une trentaine de cartes de visite et qu'il n'en avait rappelé aucune.

Le salon n'était pas le problème.

## Ce qu'un salon peut réellement faire

Il ne vend pas, sauf pour des produits à panier faible et décision immédiate.

Ce qu'il fait bien, c'est trois choses.

Il crée du contact humain avec des gens qui ne vous auraient jamais appelé. Sur un métier où la confiance est le verrou, dix minutes de conversation valent dix pages de site.

Il vous fait rencontrer des prescripteurs. Les autres exposants sont souvent des métiers adjacents au vôtre, et ce sont eux qui vous enverront des clients pendant les deux ans qui suivent. Beaucoup d'exposants sous-estiment complètement ce bénéfice.

Il produit de la matière. Trois jours d'événement, c'est de quoi alimenter vos publications pendant un mois.

## La préparation, deux semaines avant

Annoncez votre présence. À vos clients existants, sur vos réseaux, dans un email. Une partie de votre trafic sur le stand doit venir de gens qui savaient que vous seriez là.

Fixez un objectif chiffré et unique. Pas "faire connaître l'entreprise", qui ne se mesure pas. Plutôt "repartir avec vingt-cinq contacts qualifiés" ou "obtenir cinq rendez-vous à domicile".

Préparez de quoi noter. C'est le point le plus important de cet article et le moins glamour : un carnet ou une application, avec un format fixe. Nom, contact, besoin, échéance.

Préparez ce que vous montrez. Sur un stand, personne ne lit. Des photos grand format de vos réalisations, un échantillon qu'on peut toucher, une vidéo qui tourne en boucle. Le concret retient, le texte non.

## Pendant : la seule règle qui compte

Ne restez pas assis derrière une table.

Un exposant assis, sur son téléphone, derrière un stand fermé, ne parlera à personne. C'est le comportement le plus fréquent et il annule l'investissement.

Restez debout, devant la table, et posez une question ouverte aux gens qui ralentissent. Pas "je peux vous renseigner", qui appelle un non. Plutôt une question sur eux : "vous êtes en projet ou vous regardez ?"

Et notez immédiatement après chaque conversation. Pas le soir, pas le lendemain : dans la minute. Une carte de visite sans contexte est inutilisable trois semaines plus tard, et vous aurez oublié qui était qui dès la fin de la journée.

## Après : là où tout se joue

C'est l'étape que presque tout le monde saute, et c'est la seule qui produit du chiffre d'affaires.

Dans les 48 heures, écrivez à tout le monde. Un message court, personnalisé avec ce que vous avez noté : "on a parlé de votre terrasse et du problème d'évacuation, voilà comment je procéderais."

Cette personnalisation change tout. Un message générique envoyé à quarante personnes obtient deux réponses. Un message qui rappelle la conversation en obtient dix fois plus.

Dans les deux semaines, rappelez ceux qui avaient un projet daté.

Puis ajoutez tout le monde à votre liste d'emails, en le disant, et écrivez leur deux ou trois fois par an. Une partie de vos contacts de salon achètera dans dix-huit mois, et ce sont ceux que tout le monde perd. Le sujet est dans [la liste d'emails](/blog/newsletter-tpe-locale).

## Les autres exposants

Consacrez une heure, avant l'ouverture ou pendant un creux, à faire le tour des stands.

Repérez les métiers complémentaires du vôtre, présentez-vous, échangez vos coordonnées, et dites explicitement ce que vous cherchez et ce que vous pouvez leur envoyer.

C'est souvent le meilleur retour d'un salon, et il ne coûte rien de plus. La logique complète est dans [organiser le bouche à oreille](/blog/parrainage-bouche-a-oreille).

## La matière à rapporter

Filmez et photographiez pendant l'événement, même sans savoir quoi en faire.

Le montage du stand, l'ambiance, une démonstration, une question qu'on vous a posée trois fois dans la journée. Vous aurez de quoi publier pendant plusieurs semaines, à un moment où vous n'aurez pas le temps de produire.

Les questions récurrentes du salon sont particulièrement précieuses : ce sont des sujets validés par des dizaines de personnes en trois jours.

## Les marchés, un cas à part

Pour un producteur ou un commerce, le marché n'est pas un événement, c'est un point de vente régulier.

La logique change : ce qui compte est la régularité, l'annonce de votre présence chaque semaine, et le fait que les gens sachent où vous trouver et quand.

C'est aussi le meilleur endroit pour demander des avis Google, parce que vous voyez les mêmes personnes toutes les semaines et que la relation existe déjà.

## Comment décider si ça vaut le coup

Trois questions avant de payer un stand.

Est ce que mes clients y seront, ou seulement mes confrères ?

Est ce que j'ai deux semaines disponibles après pour faire le suivi ? Si non, ne payez pas le stand : sans suivi, l'argent est perdu d'avance.

Combien de contrats faut-il pour rentabiliser ? Sur un métier à panier élevé, un seul chantier peut suffire, ce qui change complètement l'arbitrage.

Et mesurez, comme pour le reste : notez d'où viennent vos clients pendant les douze mois suivants. Vous saurez alors si vous y retournez, au lieu de le décider au feeling. La méthode est dans [savoir si votre communication rapporte](/blog/mesurer-si-sa-communication-rapporte).
    `,
  },
];
