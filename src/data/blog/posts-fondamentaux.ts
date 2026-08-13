import type { BlogPost } from './types';

/**
 * Cluster "fondamentaux mal compris" : les notions que tout le monde emploie
 * sans les avoir jamais definies, et qui font prendre de mauvaises decisions.
 */
export const fondamentauxPosts: BlogPost[] = [
  {
    id: '135',
    slug: 'seo-explique-a-un-artisan',
    titleFr: 'Le référencement expliqué à quelqu\'un qui n\'y connaît rien',
    excerptFr:
      "Trois mécanismes, pas plus. Une fois qu'on les a compris, on arrête de se faire vendre n'importe quoi.",
    seoTitleFr: 'Le Référencement Expliqué Simplement',
    seoDescFr:
      "Ce que fait Google, en trois mécanismes compréhensibles sans jargon, et ce que ça implique concrètement pour une entreprise locale.",
    readTime: '9 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['seo', 'bases', 'vulgarisation', 'google'],
    related: [
      'etre-premier-google-dans-sa-ville',
      'combien-de-temps-referencement-google',
      'trouver-mots-cles-clients',
    ],
    faqFr: [
      {
        q: 'Le référencement, c\'est quoi exactement ?',
        a: "L'ensemble de ce qui fait qu'une page apparaît, ou non, quand quelqu'un tape une recherche. Ce n'est ni un logiciel ni un abonnement : c'est le résultat de ce que contient votre site, de ce que d'autres disent de vous, et de ce que fait votre fiche Google.",
      },
      {
        q: 'Peut-on payer pour être mieux référencé naturellement ?',
        a: "Non. Vous pouvez payer quelqu'un pour faire le travail, mais le classement naturel ne s'achète pas auprès de Google. Ce qui s'achète, ce sont les annonces, qui sont un espace séparé et qui s'arrêtent quand vous cessez de payer.",
      },
      {
        q: 'Faut-il un spécialiste pour s\'en occuper ?',
        a: "Pas pour l'essentiel. Une fiche Google complète, des avis, des pages qui répondent aux questions de vos clients et un site rapide couvrent la majorité du sujet pour une entreprise locale, et rien de tout ça ne demande de compétence technique.",
      },
    ],
    contentFr: `
Le mot fait peur, et c'est en grande partie parce qu'on l'entoure de jargon.

Je vais l'expliquer comme je le fais à un client au premier rendez vous, sans acronyme. Une fois qu'on a compris trois mécanismes, on arrête de se faire vendre n'importe quoi.

Cet article explique le fonctionnement. Pour la méthode à appliquer ensuite, étape par étape, c'est [le guide du référencement local](/blog/seo-local-guide-complet).

## Mécanisme 1 : Google doit trouver vos pages

Google parcourt le web en suivant des liens, de page en page, en permanence.

Pour qu'il connaisse une de vos pages, il faut qu'il puisse y arriver. En pratique, cela veut dire que la page existe à une adresse stable, qu'un lien y mène depuis ailleurs sur votre site, et que rien ne l'empêche d'entrer.

C'est là que se produisent les accidents les plus bêtes : un site mis en ligne avec le blocage d'exploration encore actif, une page orpheline vers laquelle aucun lien ne pointe, une adresse qui change sans redirection.

Quand une page n'est pas connue, aucune optimisation ne sert à rien. C'est la première chose à vérifier, et les causes sont listées dans [pourquoi mon site n'apparaît pas sur Google](/blog/pourquoi-site-pas-sur-google).

## Mécanisme 2 : Google doit comprendre de quoi elles parlent

Une fois la page trouvée, Google lit son contenu et essaie de déterminer le sujet.

Il regarde le titre, les intertitres, le texte, les images et leur description, et les liens qui pointent vers cette page.

C'est pour cette raison qu'une page qui traite un seul sujet ressort mieux qu'une page qui en traite huit. Le signal est net dans un cas, dilué dans l'autre. C'est le raisonnement complet de [une page par prestation](/blog/page-service-qui-ressort).

Et c'est aussi pour cette raison que le vocabulaire compte. Si vos clients disent "chauffe-eau" et que vous écrivez "production d'eau chaude sanitaire", Google associe votre page à une expression que personne ne tape. La méthode pour trouver les bons mots est dans [trouver les mots que vos clients tapent](/blog/trouver-mots-cles-clients).

## Mécanisme 3 : Google doit vous juger meilleur que les autres

C'est l'étape où presque tout se joue, et celle qu'on explique le moins.

Votre page ne s'ajoute pas à une liste : elle doit déplacer quelqu'un. Pour trancher entre plusieurs pages qui parlent du même sujet, Google tient compte de plusieurs signaux.

L'antériorité du site et tout ce qu'il a accumulé au fil du temps. Google conteste que l'âge du domaine soit un facteur en soi, mais un site installé depuis des années part rarement avec un handicap.

Ce que d'autres sites disent de vous. Une mention sur le site d'un fournisseur, d'une fédération, d'un journal de commune compte comme un signal de confiance.

Le comportement des gens, dans une mesure que personne ne connaît précisément. Google ne détaille pas ce qu'il regarde, et il vaut mieux retenir le principe que la mécanique : une page qui déçoit ses visiteurs finit rarement par monter.

Et pour une recherche locale, la proximité géographique, qui pèse énormément.

## Le cas particulier du local, qui change tout

Sur une recherche du type métier plus commune, la page de résultats se compose de zones différentes.

Des annonces payantes en haut, qui sont un espace séparé.

Un bloc avec une carte et trois entreprises, qui capte une part énorme des clics et qui ne se gagne pas avec un site : il se gagne avec une fiche Google Business et des avis.

Puis les résultats classiques, où votre site joue.

Beaucoup d'entreprises travaillent la mauvaise zone pendant des mois. Elles investissent dans leur site alors que l'essentiel de leur clientèle passe par le bloc carte. L'ordre efficace est décrit dans [être premier sur Google dans sa ville](/blog/etre-premier-google-dans-sa-ville).

## Ce que ça implique en pratique

Trois conséquences, qui découlent directement des trois mécanismes.

Vous ne pouvez pas acheter un classement naturel. Vous pouvez payer quelqu'un pour faire le travail, et vous pouvez acheter des annonces, qui sont autre chose. Toute promesse de première place garantie est une invention.

Ça prend du temps, parce que les trois étapes prennent du temps et parce qu'il faut déplacer des entreprises installées. Les ordres de grandeur réels sont dans [combien de temps avant d'être référencé](/blog/combien-de-temps-referencement-google).

Et l'essentiel n'est pas technique. Pour une entreprise locale, ce qui compte le plus est une fiche complète, des avis, des pages qui répondent vraiment, et un site utilisable sur téléphone. Rien là-dedans ne demande de compétence particulière.

## Les mots qu'on va vous dire, traduits

Balises title et meta description : le titre et le texte qui s'affichent dans les résultats. Ils décident du clic, ils s'écrivent en français normal, et ils comptent beaucoup.

Backlinks ou netlinking : le fait que d'autres sites parlent de vous. Ça se gagne en étant mentionné par des partenaires, des fournisseurs et des acteurs locaux. Ça ne s'achète pas sans risque de sanction.

Contenu dupliqué : deux pages qui disent la même chose. C'est ce qui arrive quand on crée vingt pages en changeant seulement le nom de la commune.

Données structurées : une façon d'écrire dans le code ce que vous êtes, pour que Google le comprenne sans ambiguïté. Utile, invisible, et ça ne fait pas apparaître d'étoiles, comme expliqué dans [avoir des étoiles dans les résultats Google](/blog/etoiles-avis-resultats-google).

Core Web Vitals : des mesures de vitesse et de stabilité d'affichage. Concrètement, est ce que la page se charge vite et sans sauter sur un téléphone. Voir [la vitesse sur mobile](/blog/vitesse-site-web-mobile).

## Les signaux d'alerte quand on vous vend du référencement

Une garantie de position. Personne ne contrôle le classement.

Un discours entièrement technique, sans jamais parler de ce qu'il y aura dans vos pages. Le contenu est ce qui décide.

Une proposition de "soumission à mille moteurs de recherche". Ça n'existe plus depuis très longtemps.

L'achat de liens présenté comme une accélération. C'est le meilleur moyen de se faire sanctionner, et une sanction efface des années de travail.

Aucune question sur votre métier, vos clients et votre zone. Sans ces informations, personne ne peut travailler votre visibilité locale.

## Par où commencer si vous partez de zéro

La fiche Google Business et les avis, qui produisent le plus vite et ne coûtent que du temps.

Des pages qui répondent aux questions que vos clients vous posent déjà au téléphone.

Un site rapide et utilisable sur téléphone.

Et de la régularité, pendant au moins six mois avant de juger quoi que ce soit.

C'est tout, et c'est déjà davantage que ce que fait la grande majorité des entreprises de votre commune.
    `,
  },
  {
    id: '136',
    slug: 'difference-site-fiche-google-reseaux',
    titleFr: 'Site, fiche Google, réseaux : qui fait quoi exactement',
    excerptFr:
      "Trois outils, trois rôles différents, et une confusion qui fait dépenser au mauvais endroit.",
    seoTitleFr: 'Site, Fiche Google et Réseaux : Qui Fait Quoi',
    seoDescFr:
      "Ce que fait chaque canal, ce qu'il ne fait pas, et dans quel ordre les mettre en place quand on est une petite entreprise locale.",
    readTime: '8 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-11',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['canaux', 'stratégie', 'priorités', 'bases'],
    related: [
      'reseaux-sociaux-ou-site-web',
      'creer-fiche-google-business',
      'budget-communication-tpe',
    ],
    faqFr: [
      {
        q: 'Faut-il les trois ?',
        a: "À terme oui, mais pas en même temps. Pour une entreprise locale, la fiche Google produit le plus vite, le site prend le relais sur les recherches précises et la confiance, et les réseaux entretiennent la présence dans la durée.",
      },
      {
        q: 'Peut-on se passer de site quand on a une fiche Google ?',
        a: "Pour une activité très simple, temporairement oui. La fiche ne permet pas d'expliquer une prestation complexe, d'afficher des tarifs détaillés ni de capter les recherches sous forme de question, et elle ne vous appartient pas.",
      },
      {
        q: 'Les réseaux sociaux remplacent-ils un site ?',
        a: "Non, et pour une raison structurelle : vous n'y possédez rien. Un compte peut être suspendu, un algorithme peut changer. Un site est le seul endroit dont vous gardez le contrôle.",
      },
    ],
    contentFr: `
Il y a une conversation que j'ai à peu près à chaque premier rendez vous, et elle commence toujours par la même confusion : ces trois choses sont perçues comme trois façons de faire la même chose.

Ce sont trois outils qui font trois travaux différents.

## La fiche Google Business : être trouvé quand on cherche votre métier

Rôle : apparaître dans le bloc carte quand quelqu'un tape votre métier suivi de sa commune, et permettre de vous appeler en un geste.

Ce qu'elle fait bien. Elle capte une part énorme des recherches locales, elle affiche votre note et vos avis, elle donne les horaires et l'itinéraire, et elle est gratuite.

Ce qu'elle ne fait pas. Elle ne permet pas d'expliquer une prestation complexe, elle n'affiche pas de tarifs détaillés, et surtout elle ne vous appartient pas : elle peut être suspendue, comme décrit dans [fiche Google suspendue](/blog/fiche-google-suspendue-que-faire).

C'est le canal qui produit le plus vite pour une entreprise locale, et c'est pour ça que je le mets toujours en premier. Le déroulé est dans [créer sa fiche Google Business](/blog/creer-fiche-google-business).

## Le site : rassurer, expliquer, et capter les questions

Rôle : recevoir les gens qui vous ont trouvé ailleurs, répondre à ce qu'ils se demandent avant d'appeler, et capter les recherches formulées en question.

Ce qu'il fait bien. Il explique, il montre vos réalisations, il donne vos prix et votre zone, il travaille la nuit et le week-end, et il vous appartient entièrement.

Ce qu'il ne fait pas. Il ne vous fait pas apparaître dans le bloc carte, et il met des mois à se positionner sur des recherches disputées.

C'est aussi lui qui transforme une recommandation en appel. Quelqu'un vous recommande, la personne cherche votre nom, et ce qu'elle trouve à cet instant confirme ou refroidit.

## Les réseaux sociaux : entretenir la présence

Rôle : rester dans la tête des gens de votre zone, et se faire découvrir par des gens qui ne vous cherchaient pas.

Ce qu'ils font bien. Ils montrent votre travail en mouvement, ils humanisent, ils font circuler le bouche à oreille, et ils touchent des gens qui n'ont pas encore de besoin identifié.

Ce qu'ils ne font pas. Ils captent très mal les gens qui ont un besoin maintenant, parce que ces gens vont sur Google, pas sur un fil d'actualité. Et vous n'y possédez rien.

Le raisonnement complet sur l'arbitrage entre les deux derniers est dans [réseaux sociaux ou site web](/blog/reseaux-sociaux-ou-site-web).

## Le tableau mental à garder

Quelqu'un qui a un besoin maintenant vous trouve par la fiche Google.

Quelqu'un qui hésite se décide sur le site.

Quelqu'un qui n'a pas encore de besoin vous découvre sur les réseaux et se souvient de vous plus tard.

Les trois ne se remplacent pas, ils se relaient. Et chacun est le point d'entrée d'un type de client différent.

## L'ordre de mise en place

Pour une entreprise locale qui part de zéro, l'ordre est presque toujours le même.

La fiche Google et les avis. Gratuit, rapide, et c'est ce qui produit les premières demandes.

Une page ou un site, pour rassurer et expliquer. Vous n'avez pas besoin de dix pages tout de suite : le format se choisit avec [site d'une page ou plusieurs](/blog/site-multipage-ou-une-seule-page).

Un réseau social, un seul, tenu régulièrement.

Et le reste vient après, quand ces trois-là fonctionnent. Le raisonnement de budget est dans [combien mettre par an dans sa visibilité](/blog/budget-communication-tpe).

## Les erreurs de répartition les plus fréquentes

Mettre tout son budget dans un beau site alors que la fiche Google est vide. Le site reçoit les visiteurs, encore faut-il qu'il en arrive.

Publier trois fois par semaine sur les réseaux avec des horaires faux sur la fiche Google. Vous entretenez une audience et vous faites se déplacer des gens devant une porte fermée.

Croire qu'un compte Instagram suffit. Il ne capte pas les gens qui cherchent, et il ne vous appartient pas.

Négliger les avis parce que ce n'est pas un canal. C'est pourtant ce qui décide dans les trois cas : ils font monter la fiche, ils rassurent sur le site, et ils crédibilisent ce que vous publiez.

## Le point commun des trois

Ils envoient tous vers la même chose : un moyen de vous joindre.

Un numéro cliquable, un formulaire court, une messagerie à laquelle vous répondez. Si ce dernier maillon est cassé, les trois canaux travaillent dans le vide.

C'est le point que je vérifie en premier chez quelqu'un qui me dit que rien ne marche, et c'est souvent là qu'est le problème. Voir [mon site ne génère aucun contact](/blog/mon-site-ne-genere-aucun-contact) et [rater moins d'appels](/blog/rater-moins-d-appels).
    `,
  },
  {
    id: '137',
    slug: 'ce-que-google-ne-controle-pas',
    titleFr: 'Ce que personne ne contrôle sur Google, et ce que vous contrôlez',
    excerptFr:
      "Une bonne partie de l'agacement vient de là : on s'épuise sur ce qu'on ne maîtrise pas, et on néglige ce qui dépend entièrement de soi.",
    seoTitleFr: 'Ce que Vous Contrôlez Vraiment sur Google',
    seoDescFr:
      "La liste de ce qui dépend de vous et de ce qui n'en dépend pas dans votre visibilité en ligne, pour arrêter de dépenser au mauvais endroit.",
    readTime: '7 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-09',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['contrôle', 'attentes', 'priorités', 'google'],
    related: [
      'seo-explique-a-un-artisan',
      'concurrent-devant-moi-google',
      'combien-de-temps-referencement-google',
    ],
    faqFr: [
      {
        q: 'Peut-on garantir une position sur Google ?',
        a: "Non, et c'est le premier signal d'alerte quand quelqu'un vous le promet. Le classement dépend de facteurs qui changent en permanence et qui ne sont contrôlés par personne d'autre que Google.",
      },
      {
        q: 'Qu\'est-ce qui dépend entièrement de vous ?',
        a: "L'exactitude de vos informations, le contenu de vos pages, la collecte d'avis, la vitesse de réponse aux demandes, et la régularité. Ce sont aussi, par coïncidence, les leviers les plus efficaces.",
      },
      {
        q: 'Que faire quand une mise à jour de Google fait chuter le site ?',
        a: "Attendre quelques semaines avant de réagir, vérifier que rien n'a changé chez vous, et regarder si la baisse touche tout le site ou quelques pages. Les réactions précipitées aggravent presque toujours la situation.",
      },
    ],
    contentFr: `
Une bonne partie de la frustration autour du référencement vient d'un malentendu sur ce qui est pilotable.

On s'épuise sur des choses qu'on ne maîtrise pas, on paie pour qu'on nous les promette, et on néglige celles qui dépendent entièrement de soi.

## Ce que vous ne contrôlez pas

Votre position. Elle dépend de ce que font vos concurrents, de qui cherche, depuis où, sur quel appareil, et des règles de Google. Deux personnes assises côte à côte peuvent voir des résultats différents.

La proximité. Sur une recherche locale, c'est le facteur le plus lourd, et vous ne déplacez pas votre atelier pour ça.

Les mises à jour de Google. Elles arrivent plusieurs fois par an et redistribuent les cartes sans prévenir.

Les décisions sur votre fiche : une suspension, un doublon fusionné, un avis signalé qui reste en ligne. Vous pouvez demander, vous ne décidez pas.

Ce que vos concurrents font. Un nouvel arrivant qui investit sérieusement peut vous passer devant.

Ce qu'un client écrit dans un avis. Vous pouvez répondre, pas effacer.

## Ce que vous contrôlez entièrement

L'exactitude de vos informations. Horaires, adresse, téléphone, prestations, zone, tarifs. Partout, et à jour. C'est gratuit et c'est ce qui coûte le plus cher quand c'est négligé.

Ce que contiennent vos pages. Les questions traitées, les prix affichés, les photos, la clarté. C'est ce qui décide si le visiteur reste ou repart, et une page qui déçoit ses visiteurs finit rarement par progresser.

La collecte d'avis. Le nombre, la régularité, la fraîcheur. Personne d'autre que vous ne peut demander à vos clients.

Votre réactivité. Répondre à un message dans la journée, rappeler un appel manqué le soir même, envoyer un devis sous quarante-huit heures. Aucun algorithme n'intervient là-dedans.

La vitesse et l'utilisabilité de votre site sur un téléphone.

Et la régularité, sur la durée. C'est le seul levier que presque personne ne tient, et c'est précisément pour ça qu'il fonctionne.

## Le déséquilibre à corriger

Regardez cette liste et posez-vous une question simple : sur quoi passez-vous votre énergie et votre argent ?

Beaucoup d'entreprises paient pour essayer d'influencer la première colonne, et laissent la seconde en friche.

Une fiche avec des horaires faux, aucun avis depuis dix-huit mois, un formulaire à huit champs, des messages sans réponse, et un budget mensuel pour du référencement. C'est plus fréquent qu'on ne l'imagine.

## Ce que ça change dans le choix d'un prestataire

Le raisonnement donne un critère net.

Quelqu'un qui vous garantit une position vend ce qu'il ne contrôle pas.

Quelqu'un qui vous parle de ce qu'il va écrire, de ce qu'il va corriger, de la façon dont il va vous rendre joignable et mesurer les demandes reçues, vend ce qu'il contrôle.

Les questions à poser sont listées dans [agence, freelance ou plateforme](/blog/agence-web-freelance-ou-plateforme).

## Quand une mise à jour fait chuter le site

Ça arrive, y compris sans avoir rien fait de mal.

Trois réflexes, dans l'ordre.

Attendez. Les positions bougent pendant plusieurs semaines après un changement, dans les deux sens. Réagir à chaud conduit à défaire ce qui marchait.

Vérifiez que rien n'a changé chez vous. Un site refait, une migration, des pages supprimées, un blocage d'exploration. C'est là qu'est la cause le plus souvent, bien plus que dans une mise à jour.

Regardez si la baisse touche tout le site ou quelques pages. Le diagnostic n'est pas le même, et la console de recherche vous le dit. Voir [la console de recherche expliquée simplement](/blog/search-console-pour-debutant).

## L'indicateur qui remet tout à sa place

Ne regardez pas votre position, regardez le nombre de demandes reçues dans le mois.

Une position qui baisse sur une recherche que personne ne tape ne change rien à votre chiffre d'affaires. Un appel de plus par semaine change votre année.

C'est le seul tableau de bord qui compte, et la façon de le tenir est dans [savoir si votre communication rapporte](/blog/mesurer-si-sa-communication-rapporte).

## Le raisonnement en une phrase

Travaillez ce qui dépend de vous, avec régularité, et acceptez que le reste bouge.

C'est moins satisfaisant qu'une garantie, et c'est la seule approche qui tient sur plusieurs années.
    `,
  },
  {
    id: '138',
    slug: 'erreurs-visibilite-tpe-locale',
    titleFr: 'Les dix erreurs que je retrouve chez presque toutes les TPE',
    excerptFr:
      "Ce ne sont pas des erreurs de stratégie. Ce sont dix choses concrètes, corrigeables en une journée, qui coûtent des clients tous les mois.",
    seoTitleFr: 'Les 10 Erreurs de Visibilité des TPE',
    seoDescFr:
      "Les dix problèmes que je retrouve le plus souvent chez les artisans et TPE de Savoie, et le temps qu'il faut pour corriger chacun.",
    readTime: '9 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-07',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['erreurs', 'diagnostic', 'checklist', 'corrections'],
    related: [
      'mon-site-ne-genere-aucun-contact',
      'difference-site-fiche-google-reseaux',
      'rater-moins-d-appels',
    ],
    faqFr: [
      {
        q: 'Quelle est l\'erreur la plus coûteuse ?',
        a: "Les demandes sans réponse, appels manqués et messages ignorés compris. C'est une perte sèche sur des clients qui étaient déjà venus à vous, et rien ne vous signale le problème.",
      },
      {
        q: 'Combien de temps pour corriger l\'essentiel ?',
        a: "Une journée pour les huit premières erreurs de cette liste. Ce sont des corrections d'information et d'organisation, pas des chantiers techniques.",
      },
      {
        q: 'Par où commencer si on n\'a qu\'une heure ?',
        a: "Les horaires de la fiche Google, le numéro de téléphone cliquable sur le site, et la demande d'un avis à votre prochain client satisfait. Trois gestes, une heure, un effet immédiat.",
      },
    ],
    contentFr: `
Quand je regarde le dispositif d'une petite entreprise, je retrouve à peu près toujours les mêmes problèmes.

Ce ne sont pas des erreurs de stratégie. Ce sont des choses concrètes, corrigeables vite, qui coûtent des clients tous les mois sans que rien ne le signale.

C'est une liste de vérification transversale. Pour un diagnostic centré sur le site seul, c'est [mon site ne génère aucun contact](/blog/mon-site-ne-genere-aucun-contact).

## 1. Les horaires faux sur la fiche Google

De loin le plus coûteux par rapport à l'effort de correction.

Une personne se déplace, trouve porte close, et ne revient pas. Une partie de ces gens laissent un avis à une étoile, donc vous perdez le client et la note.

Correction : dix minutes, plus dix minutes une fois par an pour saisir les fermetures à l'avance.

## 2. Le numéro de téléphone non cliquable sur mobile

Sur un métier local, l'appel reste le canal majoritaire, et la majorité des visiteurs sont sur un téléphone.

Un numéro qu'il faut recopier à la main fait perdre une partie des gens.

Correction : quelques minutes, sur toutes les pages et pas seulement la page contact.

## 3. Aucune indication de prix

C'est la question numéro un de tous vos visiteurs, et le silence complet fait fuir autant les gens solvables que les autres.

Vous n'êtes pas obligé de donner un tarif ferme. Une fourchette, un point de départ ou une méthode de chiffrage font le travail. L'arbitrage complet est dans [faut-il afficher ses prix](/blog/afficher-ses-prix-ou-pas).

Correction : une heure d'écriture.

## 4. La zone d'intervention jamais nommée

"Toute la Savoie" ne dit rien à personne et ne ressort sur rien. Quelqu'un à Ugine ne se reconnaît pas dedans.

Écrivez la liste des communes réelles.

Correction : dix minutes.

## 5. Les demandes sans réponse

Appels manqués jamais rappelés, messages privés non ouverts, formulaires qui arrivent dans une boîte que personne ne regarde.

C'est la fuite la plus importante et la plus invisible, parce que ces gens ne vous relanceront pas. Les deux articles sur le sujet sont [rater moins d'appels](/blog/rater-moins-d-appels) et [répondre aux commentaires et aux messages](/blog/repondre-commentaires-messages-prives).

Correction : deux créneaux de dix minutes par jour, tous les jours.

## 6. Aucun avis, ou aucun avis récent

Trois avis datant de 2023 pèsent moins qu'on ne le croit : la fraîcheur compte, en plus du nombre.

C'est le levier le plus puissant pour une entreprise locale, et il ne dépend que de votre organisation.

Correction : une phrase à dire à chaque fin de prestation. Voir [obtenir des avis Google](/blog/obtenir-avis-google).

## 7. Des photos qui ne sont pas les vôtres

Un visiteur reconnaît une image de banque en une seconde, et il en tire une conclusion : soit vous n'avez rien à montrer, soit vous cachez quelque chose.

Sur un métier manuel, la preuve visuelle est votre argument principal.

Correction : une prise de vue par chantier, en commençant demain. Le sujet est dans [quelles photos mettre sur son site](/blog/photos-pour-son-site-web).

## 8. Une page fourre-tout au lieu de pages de prestation

Huit services listés en trois lignes chacun ne ressortent sur rien, et le visiteur qui cherchait le troisième ne le voit pas.

Correction : une page par mois pendant six mois, comme décrit dans [une page par prestation](/blog/page-service-qui-ressort).

## 9. Un site lent ou pénible sur téléphone

Images non redimensionnées, texte trop clair, boutons trop petits, bandeau qui recouvre tout.

Le test se fait en deux minutes : ouvrez votre site sur votre téléphone, dehors, en connexion mobile. Voir [la vitesse sur mobile](/blog/vitesse-site-web-mobile) et [l'accessibilité sans jargon](/blog/accessibilite-site-web-tpe).

Correction : quelques heures, une fois.

## 10. Le nom de domaine qui n'est pas à votre nom

Ce n'est pas une erreur de visibilité, c'est une bombe à retardement.

Le jour où vous voulez changer de prestataire, ou le jour où il disparaît, vous découvrez que vous ne possédez pas votre adresse. J'y consacre [un article entier](/blog/nom-de-domaine-hebergement-comprendre).

Correction : cinq minutes de vérification, et une demande de transfert si nécessaire.

## Ce que ça donne mis bout à bout

Huit de ces dix corrections se font en une journée. Aucune ne demande de compétence technique. Aucune ne coûte d'argent.

Et pourtant, sur les entreprises que je regarde, il est rare qu'il n'y en ait pas plusieurs en même temps.

C'est aussi une bonne nouvelle : cela veut dire qu'il reste énormément de marge sans rien dépenser, et que vos concurrents ont exactement les mêmes.

## L'ordre si vous n'avez qu'une heure

Les horaires de la fiche Google.

Le numéro cliquable sur le site.

Et demander un avis à votre prochain client satisfait.

Trois gestes, une heure, et un effet visible dans la semaine.
    `,
  },
  {
    id: '139',
    slug: 'travailler-avec-un-partenaire-web',
    titleFr: 'Ce que ça change de travailler dans la durée plutôt qu\'au projet',
    excerptFr:
      "Un site livré et abandonné se fait rattraper. Voilà pourquoi je travaille en partenariat, et dans quels cas ça ne se justifie pas.",
    seoTitleFr: 'Partenaire Web ou Prestation Ponctuelle',
    seoDescFr:
      "Faire faire son site une fois ou travailler dans la durée avec quelqu'un : ce que chaque formule apporte réellement, et à qui elle convient.",
    readTime: '8 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-05',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['partenariat', 'suivi', 'prestataire', 'durée'],
    related: [
      'agence-web-freelance-ou-plateforme',
      'contenu-qui-vieillit-mise-a-jour',
      'deleguer-reseaux-sociaux',
    ],
    faqFr: [
      {
        q: 'Un site livré une fois suffit-il ?',
        a: "Pour une carte de visite en ligne, souvent oui. Dès que le site est un canal d'acquisition, il se fait rattraper par ceux qui continuent à publier et à corriger, parce que la visibilité se construit dans la durée.",
      },
      {
        q: 'Qu\'est-ce qu\'un partenariat implique concrètement ?',
        a: "Un point régulier, des corrections au fil de l'eau, du contenu publié, et quelqu'un qui répond quand quelque chose casse. Ce n'est pas un abonnement d'hébergement déguisé : ce qui est fait doit être visible et mesurable.",
      },
      {
        q: 'Comment savoir si ça vaut le coup pour vous ?',
        a: "Regardez ce que vaut un client chez vous, et combien de demandes supplémentaires vous rembourseraient la dépense. Si un seul chantier de plus dans l'année couvre le coût, la question se pose sérieusement.",
      },
    ],
    contentFr: `
Je vais parler de ma propre façon de travailler, ce qui n'est pas neutre. Autant l'annoncer, et donner aussi les cas où elle ne se justifie pas.

## Ce qui se passe après une livraison

Un site est livré. Il est propre, il correspond à ce qui était demandé, tout le monde est content.

Puis rien ne bouge pendant deux ans.

Les tarifs affichés deviennent faux. Les réalisations datent. Une prestation nouvelle n'apparaît nulle part. Les horaires ne sont pas à jour. Les avis se sont arrêtés. Les pages n'ont pas gagné de position parce que personne n'a écrit une ligne.

Pendant ce temps, un concurrent qui publie une page par mois passe devant, sans avoir un meilleur site.

Ce n'est pas une faute du prestataire, ni du client. C'est simplement ce qui arrive à un site laissé seul, et je le décris dans [ce qui vieillit sur un site](/blog/contenu-qui-vieillit-mise-a-jour).

## Pourquoi la visibilité se construit dans la durée

Ce n'est pas une règle publiée par Google, c'est ce que je constate.

Une page met des mois à trouver sa position. En pratique, dix pages étalées sur un an donnent de meilleurs résultats que dix pages publiées le même jour, ne serait-ce que parce qu'elles sont écrites à partir de questions réelles au lieu d'être imaginées d'un coup.

Les avis pèsent par leur volume et leur fraîcheur, ce qui suppose une collecte continue.

Le contenu qui répond aux questions de vos clients est ce qui capte les recherches précises, et il s'accumule.

Une intervention ponctuelle ne peut pas produire ça, quelle que soit sa qualité.

## Ce que je fais concrètement dans la durée

Le site, d'abord, puisque c'est le socle.

Puis ce qui le fait vivre : les pages ajoutées au fil des questions réelles, les corrections, la fiche Google, les avis, et la production de contenu vidéo tous les mois, décrite sur [la page réseaux sociaux](/reseaux-sociaux).

Et un point régulier sur ce qui rentre : combien de demandes, d'où elles viennent, ce qui marche et ce qu'on arrête. La méthode est celle de [savoir si votre communication rapporte](/blog/mesurer-si-sa-communication-rapporte).

## Les cas où ça ne se justifie pas

Je le dis assez souvent pour que ça vaille la peine d'être écrit.

Vous démarrez et la trésorerie est à zéro. Faites votre fiche Google, demandez vos premiers avis, mettez une page en ligne vous-même, et revenez plus tard. Le déroulé est dans [se faire connaître quand on démarre](/blog/se-faire-connaitre-quand-on-demarre).

Votre besoin est une carte de visite en ligne, et l'essentiel de votre visibilité passera par la fiche Google.

Vous êtes déjà complet et vous ne cherchez pas plus de demandes. Dans ce cas, la seule chose à faire est de garder les informations à jour.

Vous voulez maîtriser vous-même. C'est légitime, et beaucoup de gens y arrivent très bien. Le tout est de tenir dans la durée, ce qui est la vraie difficulté.

## Ce qu'il faut vérifier avant de s'engager avec qui que ce soit

Ce n'est pas propre à moi, c'est valable pour n'importe quel prestataire qui propose du récurrent.

Ce qui est fait chaque mois, écrit noir sur blanc. Un abonnement dont le contenu est flou est presque toujours un abonnement d'hébergement déguisé.

À qui appartient le nom de domaine. Non négociable, et expliqué dans [nom de domaine et hébergement](/blog/nom-de-domaine-hebergement-comprendre).

Ce qui vous reste si vous arrêtez. Le site, les textes, les photos, les comptes.

La durée d'engagement et les conditions de sortie.

Ce qu'on vous montre comme résultat. Pas des vues, pas des positions : des demandes reçues.

Les questions complètes sont dans [agence, freelance ou plateforme](/blog/agence-web-freelance-ou-plateforme).

## Le calcul honnête

Regardez ce que vaut un client chez vous, et combien de demandes supplémentaires par an rembourseraient la dépense.

Sur un métier où un chantier moyen se compte en milliers d'euros, un seul client de plus dans l'année suffit souvent. Sur un métier à panier faible, il en faut beaucoup plus, et la réponse est peut-être non.

Ce calcul, faites-le avec vos chiffres, pas avec ceux d'un argumentaire. Le raisonnement complet est dans [combien mettre par an dans sa visibilité](/blog/budget-communication-tpe).

## Ma position

Je préfère travailler avec peu de clients dans la durée plutôt qu'avec beaucoup en ponctuel. Pas par principe commercial : parce que c'est la seule façon dont j'ai vu la visibilité d'une petite entreprise se construire réellement.

Et quand quelqu'un n'en a pas besoin, je le dis. Ça m'arrive régulièrement, et ça reste le meilleur argument que j'aie.

Si vous voulez qu'on regarde votre situation, [écrivez moi](/contact). Je suis à Albertville, je me déplace en Savoie et en Haute-Savoie.
    `,
  },
];
