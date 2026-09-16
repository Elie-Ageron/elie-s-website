import type { BlogPost } from './types';

/**
 * Les trous du cluster reseaux sociaux releves le 16 septembre 2026.
 *
 * Elie : « je veux que quand les gens cherchent comment etre viral, comment
 * faire ci, reseaux sociaux Albertville, ils me trouvent. »
 *
 * Trois requetes tres cherchees n'avaient aucune page sur le site :
 *
 *   devenir viral          une seule mention en passant dans tout le corpus
 *   shadowban              zero
 *   publicite payante      citee dans quatorze articles, aucun ne la traite
 *
 * Releve de la page de resultats sur « comment devenir viral sur Instagram
 * entreprise » : elle est tenue par des blogs d'editeurs internationaux
 * traduits en francais (tagembed, pathsocial, shopify). Aucun ne repond du
 * point de vue d'une entreprise locale francaise, pour qui une vidéo vue a
 * Lille ne vaut rien.
 *
 * ⚠️ L'article sur la publicite est le plus utile des trois pour la
 * credibilite du site : Elie ne vend pas de publicite, donc il peut dire
 * quand elle vaut le coup sans se faire suspecter. Ne jamais le transformer
 * en argumentaire contre la publicite.
 */
export const socialPostsD: BlogPost[] = [
  {
    id: '140',
    slug: 'devenir-viral-entreprise-locale',
    titleFr: 'Devenir viral quand on est une entreprise locale',
    excerptFr:
      "C'est la demande qui revient le plus souvent, et c'est presque toujours la mauvaise. Une vidéo vue par la France entière ne remplit pas un carnet de commandes en Savoie.",
    seoTitleFr: 'Devenir Viral : la Réponse Honnête',
    seoDescFr:
      "Pourquoi une vidéo virale ne rapporte presque rien à une entreprise locale, ce qui déclenche vraiment de la portée, et le seul chiffre à regarder.",
    readTime: '7 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    categorySlug: 'reseaux-sociaux',
    date: '2026-09-16',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['viralité', 'portée', 'vues', 'audience locale'],
    related: [
      'pourquoi-mes-videos-ne-font-pas-de-vues',
      'transformer-vues-en-clients',
      'abonnes-ou-clients',
      'accroche-video-3-secondes',
    ],
    faqFr: [
      {
        q: 'Comment faire une vidéo virale pour son entreprise ?',
        a: "Personne ne sait déclencher la viralité à la demande, et quiconque prétend le contraire vend quelque chose. Ce qui se pilote, c'est la régularité et la qualité de l'accroche. La grosse portée arrive parfois, en sous-produit.",
      },
      {
        q: 'Une vidéo virale rapporte-t-elle des clients ?',
        a: "Rarement, pour une entreprise locale. Une vidéo vue deux cent mille fois dans toute la France touche peut-être trois cents personnes dans votre zone. Deux mille vues locales valent mieux, et elles se produisent chaque semaine.",
      },
      {
        q: 'Quel chiffre regarder si ce ne sont pas les vues ?',
        a: "Le nombre de visites sur votre profil et le nombre de clics vers votre site ou votre numéro. Ce sont les seuls qui précèdent un appel. Les vues et les abonnés ne précèdent rien.",
      },
    ],
    contentFr: `
C'est la phrase que j'entends le plus souvent au premier rendez-vous. Pas toujours dans ces mots-là, mais l'idée y est : est-ce qu'on peut faire une vidéo qui explose.

La réponse honnête tient en deux temps. Non, personne ne sait déclencher ça à la demande. Et surtout, ce n'est pas ce que vous voulez.

## Ce que le mot veut dire, et ce qu'il vaut chez vous

Une vidéo devient virale quand la plateforme décide de la montrer très au-delà de votre audience habituelle. Elle sort de votre commune, de votre département, et parfois du pays.

Pour un compte qui vend en ligne, c'est excellent : chaque personne touchée est un client possible, où qu'elle habite.

Pour vous, non. Si vous posez du carrelage à Albertville, une vue à Lille ne vaut rien. Elle ne vaut même pas zéro, elle vaut moins : elle fait monter votre nombre de vues, elle vous donne le sentiment que ça marche, et elle ne fera jamais sonner votre téléphone.

## Une vidéo à deux cent mille vues qui ne rapporte rien

Le calcul est simple et il refroidit tout le monde.

La France compte soixante-huit millions d'habitants. Votre zone de chalandise, si vous êtes artisan en vallée, en compte peut-être quarante mille. Soit six dix-millièmes du pays.

Deux cent mille vues réparties au hasard sur la France, ça fait environ cent vingt personnes chez vous. Sur lesquelles une poignée a besoin de votre métier en ce moment.

Une vidéo à deux mille vues bien locales fait mieux. Et elle est beaucoup plus facile à obtenir.

## Ce qui déclenche vraiment une grosse portée

Les plateformes fonctionnent toutes pareil. Votre vidéo est montrée à un petit échantillon. Si les gens restent, l'échantillon s'élargit. S'ils partent, ça s'arrête.

Donc ce qui fait la portée, c'est le temps de visionnage, et rien d'autre ne pèse autant. Pas les hashtags, pas l'heure de publication, pas la légende.

Les trois premières secondes décident de tout le reste. C'est le seul endroit du travail où l'effort a un rendement démesuré, et c'est aussi le seul sur lequel vous avez la main. [L'accroche mérite qu'on y passe du temps](/blog/accroche-video-3-secondes), bien plus que le montage.

## Le seul chiffre qui compte quand on est local

Ouvrez vos statistiques et cherchez deux lignes : les visites de profil, et les clics sur le lien ou le bouton d'appel.

Ce sont les seules qui décrivent quelqu'un qui a fait un pas vers vous. Une vue, c'est un pouce qui n'a pas encore bougé. Un abonné, c'est quelqu'un qui reviendra peut-être. Une visite de profil, c'est quelqu'un qui vérifie qui vous êtes, et ça, ça précède un appel.

[Les quatre chiffres qui servent vraiment](/blog/statistiques-instagram-comprendre) sont d'ailleurs rarement ceux qu'on regarde en premier.

## Ce que je fais à la place

Je vise la répétition, pas le coup d'éclat.

Deux à trois vidéos par semaine, toutes ancrées quelque part : le nom d'une commune, un repère qu'on reconnaît, un chantier qu'on peut situer. La plateforme comprend vite à qui montrer ça, parce que les gens qui restent jusqu'au bout sont toujours les mêmes, et ils habitent à côté.

Au bout de quelques mois, il se passe une chose beaucoup plus utile qu'une vidéo virale : vous devenez la personne que les gens du coin voient passer chaque semaine. Le jour où ils ont besoin de votre métier, ils n'ouvrent pas Google. Ils pensent à vous.

C'est lent, ce n'est pas spectaculaire, et ça remplit un carnet.

## Si vous voulez quand même tenter le coup

Rien ne l'interdit, et ça arrive. Une de mes clientes a fait une très grosse sortie sur sa toute première publication, sans que rien ne le laisse prévoir.

Ce qu'il faut savoir avant : une grosse vidéo ne construit rien toute seule. Les comptes qui ont explosé une fois et qui se sont arrêtés là sont retombés en six semaines. La portée gagnée ne se garde pas, elle se réalimente.

Et si ça arrive, la seule chose qui compte est d'avoir un endroit où envoyer les gens. Un profil complet, un site qui existe, un numéro visible. Sinon vous aurez eu de l'audience et rien d'autre. C'est tout le sujet de [transformer des vues en demandes](/blog/transformer-vues-en-clients).
`,
  },
  {
    id: '141',
    slug: 'publicite-instagram-facebook-tpe',
    titleFr: 'Faut-il payer de la publicité sur Instagram et Facebook',
    excerptFr:
      "Je ne vends pas de publicité, donc je n'ai aucun intérêt à vous dire oui. Voilà quand ça vaut le coup, quand ça n'en vaut pas, et ce que je ferais avec le même budget.",
    seoTitleFr: 'Publicité Instagram et Facebook pour une TPE',
    seoDescFr:
      "Quand la publicité payante sert vraiment une entreprise locale, pourquoi le bouton Booster gaspille presque toujours, et l'alternative à budget égal.",
    readTime: '8 min',
    categoryFr: 'Stratégie',
    categoryEn: 'Strategy',
    categorySlug: 'strategie',
    date: '2026-09-16',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['publicité', 'budget', 'Meta', 'acquisition'],
    related: [
      'budget-communication-tpe',
      'google-ads-ou-referencement-naturel',
      'mesurer-si-sa-communication-rapporte',
      'combien-de-temps-resultats-reseaux-sociaux',
    ],
    faqFr: [
      {
        q: 'La publicité Facebook et Instagram est-elle rentable pour une petite entreprise ?',
        a: "Elle l'est quand vous avez une offre datée et une raison d'agir maintenant : une ouverture, une promotion, un événement, une place qui se libère. Elle ne l'est presque jamais pour de la notoriété générale, parce qu'il faut tenir des mois pour que ça compte.",
      },
      {
        q: "Le bouton Booster d'une publication, ça marche ?",
        a: "C'est le moyen le plus rapide de dépenser sans savoir ce que vous achetez. Il optimise la portée, pas les demandes, et il ne vous laisse presque aucun réglage. Passer par le gestionnaire de publicités prend une heure de plus et change le résultat.",
      },
      {
        q: 'Quel budget minimum pour tester ?',
        a: "En dessous de dix euros par jour sur trois semaines, vous n'aurez pas assez de données pour distinguer un bon message d'un mauvais. Soit environ deux cents euros pour un test qui vous apprend quelque chose.",
      },
    ],
    contentFr: `
Je ne vends pas de publicité. Ce n'est pas un choix de posture, c'est que je ne la maîtrise pas assez pour la facturer, et je préfère le dire que l'apprendre sur le budget de quelqu'un.

Ça veut dire que je n'ai aucun intérêt à vous répondre oui. C'est précisément pour ça que cet article existe.

## Ce que la publicité fait bien

Elle achète de l'attention immédiatement. C'est sa seule vraie qualité, et elle est énorme quand le temps compte.

Vous ouvrez un commerce dans trois semaines. Vous avez une session de formation qui démarre le 12 et six places à remplir. Vous lancez un produit saisonnier qui n'a de sens que maintenant. Dans ces cas-là, rien d'autre ne va assez vite. Le référencement met des mois, une chaîne de vidéos met des semaines, et votre ouverture, elle, a une date.

Elle permet aussi de viser précisément : une commune, un rayon de quinze kilomètres, une tranche d'âge. Pour une entreprise locale, c'est le réglage qui change tout, et c'est celui que le bouton rapide ne vous laisse pas régler.

## Ce qu'elle ne fait pas

Elle ne construit rien qui reste. Le jour où vous arrêtez de payer, la visibilité s'arrête le même jour. Pas le mois suivant, le jour même.

C'est la différence de nature avec une chaîne de vidéos ou un site bien référencé, qui continuent de travailler quand vous ne payez plus. L'un est une location, l'autre est un achat.

Elle ne répare pas non plus un problème de fond. Si votre profil est vide, si votre site ne dit pas clairement ce que vous faites, si vous n'avez aucun avis, la publicité amène des gens sur quelque chose qui ne convainc pas. Vous payez pour montrer un problème à plus de monde.

## Le piège du bouton qui propose de booster

C'est le chemin que tout le monde prend, parce qu'il apparaît sous chaque publication et qu'il demande trois clics.

Le problème n'est pas qu'il soit mauvais en soi. C'est qu'il optimise la portée, c'est-à-dire le nombre de personnes touchées, alors que vous voulez des demandes. Ce sont deux objectifs différents, et la plateforme fait très bien celui que vous lui donnez.

Le gestionnaire de publicités, lui, vous laisse choisir. Il est moins agréable, il demande une heure pour comprendre où sont les réglages, et il permet de dire : je veux des messages, pas des vues. La différence de résultat ne se discute pas.

## Quand ça vaut le coup, concrètement

Il y a une condition et elle est simple à vérifier : **est-ce qu'il y a une raison d'agir maintenant ?**

Une date, une offre limitée, une saison qui démarre, une place qui se libère. Si oui, la publicité a du sens, et deux cents euros bien ciblés sur trois semaines peuvent vous apprendre beaucoup.

Deuxième condition : il faut avoir quelque chose de correct au bout du clic. Une page qui parle de cette offre précise, pas votre page d'accueil. Quelqu'un qui clique sur une annonce pour une session de formation et qui atterrit sur un site générique repart aussitôt.

## Quand ça n'en vaut pas la peine

Quand l'objectif est « me faire connaître ». C'est un objectif sans fin, donc un budget sans fin, et vous saurez au bout de six mois que vous avez dépensé sans pouvoir dire ce que ça a donné.

Quand vous n'avez pas encore de présence de base. Une fiche Google incomplète et trois photos, ça se répare gratuitement et ça rapporte davantage. [Les erreurs de visibilité les plus courantes](/blog/erreurs-visibilite-tpe-locale) coûtent souvent plus cher que l'absence de publicité.

Et quand vous ne pouvez pas mesurer. Si vous ne savez pas combien d'appels vous recevez aujourd'hui, vous ne saurez pas non plus si la publicité en a ajouté. [Mesurer avant de dépenser](/blog/mesurer-si-sa-communication-rapporte) n'est pas une précaution, c'est ce qui rend la dépense lisible.

## Ce que je ferais avec le même budget

Prenons deux cents euros, qui est le ticket d'entrée d'un test sérieux.

Sur un mois de publicité, ça donne six euros par jour, une portée locale honnête, et zéro trace le mois suivant.

Sur autre chose, ça donne un micro-cravate correct, deux heures de tournage groupé, et huit à dix vidéos qui restent en ligne et qui continuent d'être servies pendant des mois. Ce n'est pas plus rapide. C'est cumulatif.

Mon avis, et c'est un avis : si vous démarrez, mettez l'argent dans ce qui reste. Gardez la publicité pour le jour où vous aurez une date à défendre. Elle sera là, elle marchera, et vous saurez alors sur quoi l'envoyer.
`,
  },
  {
    id: '142',
    slug: 'shadowban-instagram-realite',
    titleFr: "Le shadowban : ce qui existe et ce qui n'existe pas",
    excerptFr:
      "Dès qu'un compte perd de la portée, le mot revient. Il recouvre une vraie mécanique et beaucoup de légendes, et confondre les deux fait perdre des mois.",
    seoTitleFr: 'Shadowban Instagram : Mythe ou Réalité',
    seoDescFr:
      "Ce qu'Instagram limite réellement, ce qui relève de la légende, comment vérifier en cinq minutes, et les vraies causes d'une chute de portée.",
    readTime: '7 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    categorySlug: 'reseaux-sociaux',
    date: '2026-09-16',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['shadowban', 'portée', 'algorithme', 'sanctions'],
    related: [
      'algorithme-reseaux-sociaux-comprendre',
      'pourquoi-mes-videos-ne-font-pas-de-vues',
      'hashtags-encore-utiles',
      'acheter-abonnes-pourquoi-non',
    ],
    faqFr: [
      {
        q: 'Le shadowban existe-t-il vraiment sur Instagram ?',
        a: "Pas sous la forme qu'on lui prête. Instagram ne masque pas secrètement un compte entier. En revanche, la plateforme limite la diffusion de publications précises dans les espaces de recommandation, et elle le dit dans les paramètres.",
      },
      {
        q: 'Comment savoir si je suis limité ?',
        a: "Ouvrez les paramètres du compte professionnel et cherchez la section sur l'état du compte. Elle indique si une publication est exclue des recommandations et pourquoi. Si elle affiche que tout va bien, votre problème de portée vient d'ailleurs.",
      },
      {
        q: 'Combien de temps dure une limitation ?',
        a: "Quand elle est réelle et liée à une publication, elle se lève en supprimant ou en corrigeant la publication en cause. Il n'y a pas de purgatoire de quatorze jours : c'est une légende recopiée de forum en forum.",
      },
    ],
    contentFr: `
Le mot arrive toujours au même moment. Un compte qui tournait correctement fait soudain trois fois moins de vues pendant deux semaines, et quelqu'un finit par dire : tu t'es fait shadowban.

C'est rassurant, parce que ça déplace la cause à l'extérieur. Et c'est presque toujours faux.

## D'où vient le mot

Il vient des forums, bien avant Instagram. L'idée : la plateforme vous rend invisible sans vous prévenir, vous continuez de publier dans le vide, et personne ne vous le dit.

Le problème, c'est que cette description ne correspond à rien de ce que font réellement les plateformes aujourd'hui. Elle a survécu parce qu'elle explique une expérience vraie, la chute de portée, avec une cause fausse.

## Ce qui existe réellement

Instagram limite bel et bien la diffusion de certaines publications, et la plateforme ne s'en cache pas.

Une publication peut être **exclue des espaces de recommandation**, c'est-à-dire de l'onglet Explorer et des suggestions. Elle reste visible pour vos abonnés, elle n'est simplement plus proposée à des inconnus. Pour un compte qui vit de la découverte, l'effet ressemble beaucoup à une disparition.

Les motifs sont listés : contenu sensible, allégations de santé non vérifiables, sollicitations d'engagement du type demandez à vos amis de commenter, contenu recopié d'une autre plateforme avec son filigrane.

Et surtout, **c'est affiché**. Dans un compte professionnel, la section sur l'état du compte vous dit si une publication est concernée et laquelle. Ce n'est donc pas secret, ce qui contredit toute la définition du mot.

## Ce qui n'existe pas

Le bannissement invisible d'un compte entier, sans notification et sans motif, pendant deux semaines. Ça, non.

La liste de hashtags interdits qui contaminerait un compte pour un mois. Non plus. [Les hashtags ne portent presque plus la diffusion](/blog/hashtags-encore-utiles), donc ils ne peuvent pas la couper.

Le quota de publications par jour au-delà duquel on serait puni. Non. Ce qui existe, c'est que publier cinq fois par jour divise l'attention disponible entre vos propres publications.

Et la solution qui circule le plus, arrêter de publier pendant trois jours pour se laver, ne repose sur rien. Elle a même l'effet inverse : un compte qui se tait perd sa régularité, et la régularité est un des rares signaux qui comptent.

## Comment vérifier en cinq minutes

Trois gestes, dans cet ordre.

Ouvrez les paramètres du compte professionnel et regardez l'état du compte. S'il signale une publication exclue, vous avez votre réponse, et le motif avec.

Demandez à quelqu'un qui ne vous suit pas de chercher votre nom de compte. S'il vous trouve, vous n'êtes pas masqué.

Regardez la répartition de vos vues dans les statistiques : quelle part vient de vos abonnés, quelle part de la découverte. Si la part venant des abonnés est stable et que celle venant de la découverte s'est effondrée, c'est bien un problème de recommandation. Si les deux baissent ensemble, ce n'est pas une limitation, c'est votre contenu.

## Les vraies causes d'une chute de portée

Dans presque tous les cas que j'ai vus, c'est l'une de celles-là.

Le rythme a cassé. Trois semaines sans rien publier, puis une reprise : la portée met des semaines à revenir, parce que la plateforme a arrêté de tester vos vidéos sur des inconnus.

Le sujet a glissé. Vous parliez de votre métier, vous vous êtes mis à parler de vous, et l'audience qui restait jusqu'au bout n'est plus la même.

Les débuts se sont ramollis. Ça arrive quand on prend de l'assurance : on se présente, on met du contexte, et on perd les gens avant la troisième seconde. C'est de loin la cause la plus fréquente, et elle est détaillée dans [pourquoi vos vidéos ne font pas de vues](/blog/pourquoi-mes-videos-ne-font-pas-de-vues).

Ou tout simplement, vous comparez une bonne semaine à une semaine normale. La portée varie beaucoup d'une vidéo à l'autre, et une seule grosse sortie décale la moyenne pendant un mois.

## Ce qu'il ne faut surtout pas faire

Supprimer des publications anciennes pour nettoyer. Elles continuent d'être servies, parfois des mois plus tard, et vous détruisez de la portée acquise.

Changer de nom de compte pour repartir de zéro. Vous perdez ce qui était référencé sous l'ancien nom, et vous ne gagnez rien.

Acheter de l'engagement pour relancer la machine. C'est le seul moyen fiable de vraiment vous faire limiter, et [ce qui se passe ensuite est difficile à réparer](/blog/acheter-abonnes-pourquoi-non).

La bonne réaction est ennuyeuse : continuez à publier au même rythme, et retravaillez vos trois premières secondes. Ça remonte en trois à quatre semaines.
`,
  },
];
