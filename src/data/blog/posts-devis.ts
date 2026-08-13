import type { BlogPost } from './types';

/**
 * Cluster "moment de la decision" : le devis, sa relance, les avis hors
 * Google, les photos, et le choix du nom d'entreprise.
 */
export const devisPosts: BlogPost[] = [
  {
    id: '105',
    slug: 'devis-qui-se-signe',
    titleFr: 'Un devis qui se signe : ce qui se joue dans le document',
    excerptFr:
      "Vous avez gagné la visite, vous avez chiffré juste, et le client signe ailleurs. Le devis est le dernier document que personne ne travaille.",
    seoTitleFr: 'Faire un Devis qui se Signe',
    seoDescFr:
      "Le devis est le dernier document avant la décision, et presque personne ne le soigne. Ce qui fait signer, au-delà du montant.",
    readTime: '9 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['devis', 'conversion', 'vente', 'artisan'],
    related: [
      'relancer-un-devis-sans-insister',
      'formulaire-contact-qui-convertit',
      'temoignage-client-video',
    ],
    faqFr: [
      {
        q: 'Le prix est-il le principal critère de choix ?',
        a: "Beaucoup moins qu'on ne le croit. Quand un client compare trois devis, il choisit très souvent celui qu'il comprend, envoyé par la personne qui a répondu le plus vite et qui a l'air la plus fiable. Le prix départage en dernier.",
      },
      {
        q: 'Faut-il détailler chaque ligne ?',
        a: "Assez pour que le client comprenne ce qu'il achète et puisse comparer, pas au point de fournir un métré complet à un concurrent. Une ligne par poste, avec ce qui est compris et ce qui ne l'est pas, est le bon niveau.",
      },
      {
        q: 'En combien de temps faut-il envoyer un devis ?',
        a: "Le plus vite possible, et de toute façon dans le délai que vous avez annoncé. Un devis envoyé sous 48 heures est très souvent en tête, simplement parce que les deux autres ne sont pas encore arrivés.",
      },
    ],
    contentFr: `
Tout le travail de visibilité sert à obtenir une demande. Le devis est ce qui la transforme en argent, et c'est le document le moins soigné de toute la chaîne.

On peut être très bien référencé, recevoir des demandes en quantité, et n'en transformer qu'une petite partie. Le problème n'est presque jamais le prix.

## Ce que fait un client avec trois devis

Il les pose côte à côte, souvent le soir, souvent à deux.

Il essaie de comparer, et il n'y arrive pas, parce que les trois ne décrivent pas les mêmes choses ni dans le même ordre.

Alors il fait ce que tout le monde fait dans cette situation : il choisit celui qu'il comprend, envoyé par la personne qui lui a fait la meilleure impression.

Le prix intervient, mais rarement en premier. Le devis le plus cher gagne régulièrement quand il est le plus clair.

## La rapidité, avant tout le reste

Un devis envoyé sous 48 heures est très souvent en tête, pour une raison mécanique : les deux autres ne sont pas encore arrivés.

Le client a le vôtre sous les yeux, il commence à se projeter, et les suivants arrivent en position de challenger.

À l'inverse, un devis promis pour vendredi et envoyé trois semaines plus tard part avec un handicap que le prix ne rattrape pas. Le client a eu le temps de se dire que vous n'étiez pas fiable, et il n'aura pas tort.

Si vous ne pouvez pas tenir un délai, annoncez-en un autre. Un délai long et respecté vaut mieux qu'un délai court et raté.

## Ce que doit contenir le devis

Au-delà des mentions obligatoires, cinq choses qui changent tout.

Un rappel de la demande, en une ou deux phrases, avec les mots du client. "Vous souhaitez refaire la salle de bain du premier étage, avec remplacement de la baignoire par une douche." Ça prouve que vous avez écouté, et c'est ce qui vous distingue le plus.

Le détail par poste, avec des libellés compréhensibles. "Dépose de l'existant et évacuation" plutôt qu'une ligne unique de forfait.

Ce qui n'est pas compris. C'est le point qui évite les litiges et qui, paradoxalement, rassure le plus. Un client qui voit écrit noir sur blanc ce qui n'est pas dans le prix a confiance dans le reste.

Le déroulé et le délai. Quand vous pouvez commencer, combien de temps ça prend, et dans quel ordre.

Les conditions : acompte, modalités de paiement, durée de validité du devis, garanties et assurances.

## Ce qui fait la différence, et que personne n'ajoute

Deux photos d'un chantier comparable que vous avez réalisé. Une avant, une après. C'est le contenu le plus convaincant que vous ayez, et il ne coûte rien à joindre. La méthode est dans [l'avant et après](/blog/avant-apres-artisan-contenu).

Un ou deux avis de clients, ou le lien vers un témoignage. Le devis est exactement le moment où le client cherche des raisons de vous faire confiance. Voir [obtenir un témoignage client en vidéo](/blog/temoignage-client-video).

Une option chiffrée à part. Proposer une variante, une finition supérieure ou un poste supplémentaire déplace la question de "est ce que je prends" vers "qu'est ce que je prends".

Un mot personnel. Trois lignes écrites par vous, pas un modèle. "J'ai bien noté la contrainte de la fenêtre, j'ai prévu de traiter ce point de cette façon."

## L'envoi

Ne vous contentez pas d'un fichier joint sans un mot.

Un message court accompagne le devis : vous rappelez la demande, vous signalez le point qui mérite attention, vous donnez le délai de validité, et vous dites explicitement que vous êtes disponible pour en parler.

Cette dernière phrase compte. Beaucoup de clients ont une question et n'osent pas rappeler, alors ils choisissent quelqu'un d'autre. Une invitation explicite débloque une partie d'entre eux.

Et prévenez que vous relancerez. "Si je n'ai pas de nouvelles d'ici dix jours, je vous passe un coup de fil." Ça transforme la relance en engagement pris, et non en harcèlement. Le sujet est développé dans [relancer un devis sans insister](/blog/relancer-un-devis-sans-insister).

## Les erreurs qui coûtent des chantiers

Le forfait unique sans détail. Le client ne peut ni comprendre ni comparer, donc il compare sur le seul chiffre lisible : le total.

Le jargon technique. Vos confrères comprennent, votre client non, et il n'osera pas demander.

Le document manuscrit photographié de travers. Ce n'est pas une question d'esthétique : c'est ce que le client interprète sur votre façon de travailler.

L'absence de date de validité. Sur des matériaux dont les prix bougent, c'est un problème pour vous. Et pour le client, une date crée une raison de décider.

Le devis qui arrive sans un mot, en pièce jointe muette.

## Le refus, une information gratuite

Quand un devis n'est pas signé, demandez pourquoi. Un message simple, sans reproche : "je comprends, ça m'aiderait de savoir ce qui a fait la différence."

Une partie des gens répondent, et ce qu'ils disent vaut de l'or.

Vous découvrirez souvent que ce n'était pas le prix. C'était un délai trop long, une question restée sans réponse, ou un devis reçu trop tard. Ce sont des choses que vous pouvez corriger.

Notez ces réponses, comme vous notez d'où viennent vos clients. La méthode est dans [savoir si votre communication rapporte](/blog/mesurer-si-sa-communication-rapporte).

## Le calcul qui remet les choses en place

Si vous signez un devis sur cinq et que vous passez à un sur trois, vous augmentez votre chiffre d'affaires de plus de moitié sans une seule demande supplémentaire.

Aucun travail de visibilité ne produit ce résultat aussi vite et aussi bon marché. C'est pour ça que je regarde toujours le devis avant de parler de référencement quand une entreprise reçoit déjà des demandes.
    `,
  },
  {
    id: '106',
    slug: 'relancer-un-devis-sans-insister',
    titleFr: 'Relancer un devis sans passer pour un vendeur',
    excerptFr:
      "La moitié des devis sans réponse ne sont pas des refus. Ce sont des gens débordés qui ont oublié, et qui attendent qu'on les relance.",
    seoTitleFr: 'Relancer un Devis Sans Insister',
    seoDescFr:
      "Quand et comment relancer un devis resté sans réponse, avec des formulations qui n'ont pas l'air d'une relance commerciale.",
    readTime: '7 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-12',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['relance', 'devis', 'suivi', 'commercial'],
    related: [
      'devis-qui-se-signe',
      'repondre-commentaires-messages-prives',
      'newsletter-tpe-locale',
    ],
    faqFr: [
      {
        q: 'Au bout de combien de temps relancer ?',
        a: "Une semaine à dix jours après l'envoi pour la première relance. Assez pour laisser le temps de recevoir les autres devis, assez peu pour que le sujet soit encore présent dans la tête du client.",
      },
      {
        q: 'Combien de relances au maximum ?',
        a: "Deux, plus une dernière très espacée qui annonce que vous n'insisterez plus. Au-delà, vous n'obtiendrez rien de plus et vous laisserez une mauvaise impression.",
      },
      {
        q: 'Faut-il relancer par téléphone ou par écrit ?',
        a: "Un appel obtient plus de réponses, un écrit dérange moins. La combinaison qui marche est un écrit d'abord, puis un appel si l'écrit reste sans réponse.",
      },
    ],
    contentFr: `
Il y a une position que j'entends souvent, et elle se tient en apparence : si le client veut vraiment, il rappellera.

Le problème est ce qu'elle laisse derrière. Des devis envoyés, quelques-uns signés, et aucune idée de ce qui s'est passé pour tous les autres.

## Ce que le silence veut vraiment dire

Un devis sans réponse, dans la majorité des cas, n'est pas un refus.

C'est une personne débordée qui a lu le devis dans le tram, qui s'est dit qu'elle en parlerait à son conjoint, et qui a oublié.

C'est quelqu'un qui attend un troisième devis avant de trancher.

C'est un couple qui n'est pas d'accord et qui repousse la conversation.

C'est quelqu'un qui a une question et qui n'ose pas rappeler pour si peu.

Dans tous ces cas, la relance est un service rendu, pas une pression. Et le refus pur et simple, celui où la personne a déjà signé ailleurs, ne représente qu'une partie des silences.

## Annoncer la relance dès l'envoi

C'est la seule astuce qui change tout, et elle est gratuite.

Dans le message qui accompagne le devis, ajoutez : "si je n'ai pas de nouvelles d'ici une dizaine de jours, je vous passe un coup de fil pour savoir où vous en êtes."

À partir de là, votre relance n'est plus une relance. C'est un engagement que vous tenez, ce qui est exactement l'image que vous voulez donner.

Et beaucoup de gens répondent avant, justement parce qu'ils savent que vous allez appeler.

## Le calendrier

Première relance, une semaine à dix jours après l'envoi. Assez pour que la personne ait reçu les autres devis, assez peu pour que le sujet soit encore chaud.

Deuxième relance, deux à trois semaines plus tard, avec un angle différent.

Troisième et dernière, un ou deux mois après, en annonçant que c'est la dernière.

Puis vous arrêtez, et vous basculez la personne dans votre liste de contacts, à qui vous écrirez deux ou trois fois par an. Une partie de ces gens achèteront dans dix-huit mois, et ils vous rappelleront si vous êtes resté dans leur mémoire. Le sujet est dans [la liste d'emails](/blog/newsletter-tpe-locale).

## Ce qu'il faut dire

La règle : chaque relance apporte quelque chose. Une relance qui dit seulement "avez-vous réfléchi" met la personne en position de devoir se justifier, et elle n'y répond pas.

Première relance, la question ouverte.

"Bonjour, je reviens vers vous pour le devis de la salle de bain. Est ce qu'il y a des points sur lesquels vous voulez que je revienne ? Je peux ajuster si quelque chose ne correspond pas."

Ce qui marche ici : vous ne demandez pas une décision, vous proposez de l'aide, et vous ouvrez la porte à une objection.

Deuxième relance, l'information utile.

"Bonjour, deux choses. J'ai une disponibilité qui se libère en octobre si ça vous intéresse. Et j'ai terminé un chantier similaire à Ugine la semaine dernière, je vous mets deux photos si ça peut aider."

Ce qui marche : vous donnez une raison légitime d'écrire, et vous apportez de la preuve au moment où le client hésite.

Dernière relance, la sortie propre.

"Bonjour, je ne vais pas vous relancer davantage. Si le projet se refait un jour, vous savez où me trouver, et le devis reste valable en base de discussion. Bonne continuation."

Cette dernière obtient un taux de réponse étonnamment élevé, parce qu'elle libère la personne de la culpabilité de ne pas avoir répondu.

## Ce qu'il ne faut pas faire

Relancer tous les trois jours. Vous passez d'une entreprise sérieuse à une entreprise qui a besoin de travail.

Faire semblant que le prix baisse. Une remise spontanée à la deuxième relance dit au client que votre premier prix était gonflé, et elle abîme votre position sur tous les chantiers suivants.

Culpabiliser. "J'ai passé deux heures à faire ce devis" n'a jamais fait signer personne.

Relancer sans trace. Notez chaque envoi et chaque relance dans un tableau, sinon vous relancerez deux fois les mêmes et jamais les autres.

## Le suivi, en trois colonnes

Un tableau suffit : nom, date d'envoi du devis, date de la dernière relance, statut.

Regardez-le une fois par semaine, dix minutes.

C'est le système de suivi commercial le plus simple qui existe, et il fait mieux que la majorité des outils, parce qu'il est réellement tenu.

## Quand la personne dit non

Demandez pourquoi, sans insister et sans discuter la réponse.

Une partie des gens répondent, et vous découvrirez souvent que ce n'était pas le prix : un délai trop long, un doute non levé, ou simplement un devis reçu avant les autres chez un concurrent.

Remerciez, et gardez le contact. Un chantier perdu aujourd'hui est parfois un chantier gagné dans deux ans, et les gens se souviennent de ceux qui ont bien pris un refus.
    `,
  },
  {
    id: '107',
    slug: 'avis-clients-autres-plateformes',
    titleFr: 'Les avis ailleurs que sur Google : lesquels comptent',
    excerptFr:
      "Google reste le seul indispensable. Les autres ont leur utilité, à condition de savoir laquelle et de ne pas s'éparpiller.",
    seoTitleFr: 'Avis Clients : Quelles Plateformes Comptent',
    seoDescFr:
      "Facebook, plateformes sectorielles, sites d'avis : lesquelles valent le coup pour une entreprise locale, et comment ne pas se disperser.",
    readTime: '7 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-10',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['avis', 'e-réputation', 'plateformes', 'confiance'],
    related: [
      'obtenir-avis-google',
      'repondre-avis-negatif-google',
      'annuaires-locaux-visibilite',
    ],
    faqFr: [
      {
        q: 'Faut-il être présent sur toutes les plateformes d\'avis ?',
        a: "Non. Google d'abord, puis au maximum une ou deux plateformes propres à votre secteur. Disperser les demandes d'avis sur cinq sites revient à en avoir peu partout au lieu de beaucoup à l'endroit qui compte.",
      },
      {
        q: 'Peut-on demander un avis sur plusieurs plateformes ?',
        a: "Vous pouvez, mais évitez de demander deux choses à la même personne : le taux de réponse chute. Choisissez la plateforme la plus utile pour ce client précis et demandez une seule chose.",
      },
      {
        q: 'Que valent les avis sur son propre site ?',
        a: "Ils rassurent le visiteur, et c'est déjà utile. Ils n'ont en revanche aucune valeur de preuve indépendante, puisque vous choisissez ce que vous affichez. Ils complètent les avis publics, ils ne les remplacent pas.",
      },
    ],
    contentFr: `
La question revient souvent : faut-il aussi collecter des avis ailleurs que sur Google ?

La réponse courte est que Google reste le seul indispensable, et que les autres se justifient au cas par cas.

Le sujet voisin, celui des annuaires et des citations locales, est traité à part dans [les annuaires en ligne servent-ils encore](/blog/annuaires-locaux-visibilite) : ce sont deux choses différentes qu'on confond souvent.

## Pourquoi Google domine

C'est le seul endroit où les avis apparaissent directement dans les résultats de recherche et sur la carte, au moment exact où quelqu'un choisit entre trois entreprises.

Ils pèsent aussi dans le classement du bloc carte, ce qui n'est le cas d'aucune autre plateforme.

Et ils sont gratuits, sans abonnement ni intermédiaire.

Si vous ne devez en travailler qu'un, c'est celui-là, et la méthode est dans [obtenir des avis Google](/blog/obtenir-avis-google).

## Le piège de la dispersion

L'erreur classique consiste à vouloir être présent partout.

Vous obtenez alors huit avis sur Google, six sur une plateforme sectorielle, quatre sur un réseau social et trois ailleurs. Nulle part vous n'atteignez le volume qui rassure, alors que vingt-et-un avis au même endroit auraient fait le travail.

Les avis ne s'additionnent pas d'une plateforme à l'autre dans la tête du visiteur. Il regarde un endroit.

## Les plateformes secondaires, et quand elles servent

Facebook. Utile si votre clientèle y est active et si vous y êtes présent de toute façon. Les recommandations dans les groupes de commune ont un poids réel en Savoie, souvent plus que la note de votre page.

Les plateformes sectorielles. Pour l'hébergement, la restauration, la santé, l'artisanat via certains réseaux professionnels, il existe des sites où vos clients vont naturellement. Là, la présence est justifiée parce que les gens y cherchent activement.

Les plateformes de mise en relation, qui hébergent leurs propres avis. Attention à ce qu'elles impliquent : les avis y sont attachés à votre profil sur leur site, pas à votre entreprise. Vous les perdez le jour où vous partez, et vous avez financé leur construction.

Les sites d'avis généralistes. Ils ont du sens pour une entreprise nationale ou pour un service en ligne. Pour un artisan de vallée, l'intérêt est marginal.

## Les avis affichés sur votre propre site

Ils ont une utilité réelle : ils rassurent le visiteur au moment où il lit une page de prestation.

Ils n'ont en revanche aucune valeur de preuve indépendante, puisque c'est vous qui choisissez ce que vous affichez. Personne n'est dupe, et ce n'est pas grave.

Deux façons de les rendre plus crédibles : reprendre le texte exact d'un avis public en indiquant sa source, ou publier des témoignages avec prénom, commune et prestation, voire en vidéo. Le format vidéo est détaillé dans [obtenir un témoignage client en vidéo](/blog/temoignage-client-video).

Ce qui décrédibilise : trois témoignages anonymes, tous enthousiastes, sans aucun détail. Le visiteur suppose qu'ils sont inventés, et il a souvent raison.

## Ce qui est interdit, et le rappel utile

N'achetez pas d'avis. La publication de faux avis de consommateurs est sanctionnée en droit français au titre des pratiques commerciales trompeuses, c'est détectable par les plateformes, et une entreprise prise en défaut perd bien plus que ce qu'elle avait gagné.

Ne filtrez pas les clients pour ne solliciter que ceux dont vous êtes sûr d'avoir un bon retour, en les triant par une enquête préalable. Les plateformes l'interdisent et la pratique est mal vue.

N'écrivez pas d'avis sous un faux nom, ni sur votre entreprise ni sur celle d'un concurrent.

Ne conditionnez pas un avantage à un avis positif. Demander un avis honnête est légitime, acheter une note ne l'est pas.

## La stratégie simple

Google, systématiquement, à chaque client satisfait, au bon moment.

Une seule plateforme secondaire, choisie parce que vos clients y vont vraiment.

Des avis publics repris sur votre site, aux endroits où ils servent.

Et des réponses à tous les avis, partout où ils apparaissent. La façon de traiter un retour négatif est dans [répondre à un avis négatif](/blog/repondre-avis-negatif-google).

C'est peu, c'est tenable, et c'est déjà davantage que la quasi-totalité de vos concurrents.
    `,
  },
  {
    id: '108',
    slug: 'photos-professionnelles-ou-smartphone',
    titleFr: 'Photos professionnelles ou smartphone : où mettre l\'argent',
    excerptFr:
      "Un téléphone récent suffit pour la plus grande partie des besoins d'une TPE. Reste une poignée de cas où il ne suffit pas.",
    seoTitleFr: 'Photos Pro ou Smartphone : que Choisir',
    seoDescFr:
      "Quand un smartphone suffit et quand un photographe se justifie pour une petite entreprise, et comment obtenir de bonnes images sans budget.",
    readTime: '8 min',
    categoryFr: 'Vidéo',
    categorySlug: 'video',
    date: '2026-08-09',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/video-smartphone-entreprise',
    tags: ['photo', 'smartphone', 'budget', 'image'],
    related: [
      'photos-pour-son-site-web',
      'filmer-avec-son-telephone',
      'lumiere-video-smartphone',
    ],
    faqFr: [
      {
        q: 'Un smartphone suffit-il pour les photos d\'un site ?',
        a: "Pour des photos de chantier, de produit et d'ambiance, oui, à condition de soigner la lumière et le cadrage. Un téléphone récent produit des images largement suffisantes pour un site et pour les réseaux sociaux.",
      },
      {
        q: 'Quand un photographe se justifie-t-il ?',
        a: "Pour les portraits d'équipe, pour un intérieur difficile à cadrer, pour des produits sur fond neutre, et pour les images qui vont durer plusieurs années. Ce sont des cas où le résultat dépend d'une compétence, pas d'un matériel.",
      },
      {
        q: 'Quelle est l\'erreur photo la plus fréquente ?',
        a: "La lumière. Photographier à contre-jour, avec le flash, ou sous un éclairage artificiel jaune ruine une image que le meilleur appareil ne rattrapera pas. La lumière du jour, indirecte, règle la majorité des problèmes.",
      },
    ],
    contentFr: `
La question se pose à peu près à chaque projet : faut-il payer un photographe, ou est ce que le téléphone suffit ?

Ma réponse est presque toujours un partage, et je la donne d'autant plus librement que je ne fais pas de photographie professionnelle.

Cet article traite l'arbitrage de budget. Pour savoir quelles images mettre, à quel endroit et pourquoi, c'est [quelles photos mettre sur son site](/blog/photos-pour-son-site-web).

## Ce que le téléphone fait très bien

Les photos de chantier, avant, pendant et après. Ce sont vos images les plus utiles et les plus convaincantes, et elles ne demandent aucune compétence particulière. La méthode est dans [l'avant et après](/blog/avant-apres-artisan-contenu).

Les images de réalisations terminées, en lumière du jour.

Les détails, les matières, les finitions, les gestes.

Les photos pour les réseaux sociaux, où l'authenticité fonctionne mieux que la perfection.

Les images pour votre fiche Google Business.

Ça fait déjà l'essentiel de vos besoins. Un téléphone récent produit des images largement suffisantes pour un écran, et la différence avec un appareil professionnel disparaît en grande partie une fois l'image affichée sur un site.

## Ce qui compte plus que le matériel

La lumière, très loin devant tout le reste.

Photographiez en lumière du jour, pas à contre-jour. Ouvrez les rideaux, éteignez les plafonniers qui jaunissent, et sortez si vous le pouvez. Une image prise à midi sous un ciel légèrement couvert est meilleure que la même prise le soir sous une ampoule, quel que soit l'appareil.

N'utilisez pas le flash intégré. Il écrase les volumes et donne une teinte désagréable.

Le cadrage ensuite. Enlevez ce qui traîne avant de photographier. Un chantier fini avec un bidon et une bâche au premier plan annule le travail. Trente secondes de rangement valent mieux qu'une heure de retouche.

Tenez le téléphone droit. Les lignes verticales penchées sont le défaut le plus visible sur les photos d'intérieur et de bâtiment.

Nettoyez l'objectif. Ça paraît idiot, et c'est une cause de flou et de voile bien plus fréquente qu'on ne l'imagine.

Prenez-en beaucoup. Vingt photos du même sujet coûtent le même prix qu'une, et vous en garderez trois.

Les mêmes principes s'appliquent à la vidéo, et le détail est dans [filmer avec son téléphone](/blog/filmer-avec-son-telephone) et [la lumière en vidéo](/blog/lumiere-video-smartphone).

## Ce que le téléphone fait mal

Les intérieurs sombres et exigus. Une salle de bain sans fenêtre, une cave, un local commercial mal éclairé : c'est là qu'un photographe équipé fait une vraie différence.

Les portraits. Un portrait réussi ne dépend pas de l'appareil, il dépend de quelqu'un qui sait mettre les gens à l'aise et gérer la lumière sur un visage. C'est un métier.

Les produits sur fond neutre, avec une lumière homogène et sans reflet.

Les photos d'architecture avec beaucoup de perspective, où les corrections optiques comptent.

Et les images qui vont durer. Une photo d'équipe et une image d'ambiance servent pendant des années, sur le site, les documents, les supports imprimés. Sur ces images-là, la dépense s'amortit.

## Ce que je conseille en pratique

Faites vous-même toutes les photos de production : chantiers, réalisations, détails, coulisses. Elles doivent être nombreuses, régulières et récentes, et personne ne peut les prendre à votre place puisque vous êtes seul sur place.

Payez un photographe une fois, pour un lot précis : portraits, une ou deux images d'ambiance, et les intérieurs difficiles. Une demi-journée suffit dans la plupart des cas.

Réutilisez ces images pendant trois ou quatre ans, et refaites la séance quand l'équipe ou le local ont changé.

C'est le partage qui donne le meilleur résultat pour le budget, et il évite les deux extrêmes : le site entièrement composé de photos floues, et la séance photo à mille euros dont on ne se sert que sur la page d'accueil.

## Ce qu'il ne faut jamais faire

Utiliser des images de banque pour illustrer votre travail. Un visiteur reconnaît une photo générique en une seconde, et il en tire une conclusion sur vous : soit vous n'avez rien à montrer, soit vous cachez quelque chose.

C'est particulièrement vrai pour les métiers manuels, où la preuve visuelle est l'argument principal. Le raisonnement complet est dans [quelles photos mettre sur son site](/blog/photos-pour-son-site-web).

Prendre des photos chez un client sans son accord. Demandez au moment du devis, pas à la fin.

Publier des images très lourdes sans les redimensionner. Une photo de dix mégaoctets sur une page ralentit tout le site, et la vitesse compte réellement sur mobile. Voir [la vitesse sur mobile](/blog/vitesse-site-web-mobile).

## Le test simple

Regardez vos photos actuelles sur un téléphone, pas sur un grand écran.

Est ce qu'on comprend ce qui est montré en une seconde ? Est ce que c'est bien éclairé ? Est ce qu'il y a du désordre dans le cadre ? Est ce que ça donne envie ?

Si la réponse est non sur plusieurs images, le problème n'est probablement pas votre appareil. Il est dans la lumière et dans le rangement, et les deux sont gratuits.
    `,
  },
  {
    id: '109',
    slug: 'choisir-nom-entreprise-visibilite',
    titleFr: 'Choisir le nom de son entreprise, en pensant à après',
    excerptFr:
      "Un nom se dicte au téléphone des milliers de fois, se cherche sur Google, et se floque sur un camion. Trois contraintes qu'on oublie au moment de choisir.",
    seoTitleFr: "Choisir le Nom de son Entreprise",
    seoDescFr:
      "Les critères pratiques d'un bon nom d'entreprise locale : dictée au téléphone, disponibilité du domaine, recherche Google et lisibilité.",
    readTime: '8 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-06',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['nom', 'marque', 'création entreprise', 'domaine'],
    related: [
      'se-faire-connaitre-quand-on-demarre',
      'nom-de-domaine-hebergement-comprendre',
      'identite-visuelle-tpe',
    ],
    faqFr: [
      {
        q: 'Faut-il mettre son métier dans le nom de l\'entreprise ?',
        a: "C'est un avantage pratique réel : les gens comprennent tout de suite ce que vous faites, sur un camion comme dans une liste de résultats. L'inconvénient est de vous enfermer si votre activité évolue.",
      },
      {
        q: 'Faut-il mettre le nom de sa ville dedans ?',
        a: "Ça aide localement et ça coince si vous déménagez ou si vous élargissez votre zone. Pour une entreprise ancrée durablement, c'est souvent un bon choix. Sinon, mieux vaut le dire sur le site plutôt que dans le nom.",
      },
      {
        q: 'Que vérifier avant de déposer un nom ?',
        a: "Sa disponibilité juridique, celle du nom de domaine, ce que donne une recherche Google du nom, et sa lisibilité à voix haute. Les quatre en même temps, avant de faire imprimer quoi que ce soit.",
      },
    ],
    contentFr: `
Un nom d'entreprise se choisit en une soirée et se garde vingt ans.

Il sera dicté au téléphone des milliers de fois, tapé dans une barre de recherche, imprimé sur un camion, et lu par des gens qui ne vous connaissent pas.

Voilà les critères pratiques que je regarderais, en dehors de toute question de goût.

## Le test du téléphone

Le plus important, et le plus négligé.

Dites votre nom à voix haute au téléphone à quelqu'un qui ne le connaît pas. S'il faut épeler, vous venez de perdre.

Les pièges habituels : les jeux de mots à l'écrit qui ne s'entendent pas, les orthographes fantaisistes, les lettres doublées, les mots étrangers, les tirets et les chiffres.

Vous allez donner votre adresse de site à des clients pendant des années. Si chaque fois vous devez dire "avec deux L et un tiret", vous perdrez des gens en route, et certains n'arriveront jamais chez vous.

## Le test de la recherche

Tapez le nom envisagé sur Google, avant de décider.

Deux choses à regarder.

Est ce que quelqu'un l'utilise déjà, dans votre secteur ou ailleurs ? Un nom déjà porté par une entreprise connue vous condamne à ne jamais ressortir sur votre propre nom.

Est ce que le nom est un mot courant ? "Horizon", "Élan", "Sommet" sont jolis et impossibles à référencer, parce que vous vous battez contre des millions de pages qui emploient ce mot pour autre chose.

Un nom un peu distinctif, même modeste, vaut mieux qu'un beau mot générique. C'est vrai pour Google comme pour la mémoire des gens.

## Le nom de domaine, à vérifier en même temps

Avant de valider un nom, vérifiez que le domaine correspondant est libre.

Cela paraît évident et c'est régulièrement oublié. Découvrir après avoir fait imprimer les cartes que votre adresse doit comporter un tiret ou un mot supplémentaire est une mauvaise façon de commencer.

Réservez le domaine dès que le nom est arrêté, avant même l'immatriculation. Ça coûte une quinzaine d'euros et ça vous garantit la cohérence.

Et enregistrez-le à votre nom, pas à celui d'un prestataire. La raison est expliquée dans [nom de domaine et hébergement](/blog/nom-de-domaine-hebergement-comprendre).

## Le métier dans le nom

Avantage réel : les gens comprennent immédiatement ce que vous faites. "Bernard Menuiserie" est lisible sur un camion, dans une liste de résultats et dans une conversation.

Inconvénient : vous vous enfermez. Un menuisier qui se met à faire de l'agencement complet et de la pose de cuisines traîne un nom qui raconte une histoire plus étroite que la sienne.

Mon avis pour une TPE locale : mettre le métier est souvent un bon choix, parce que la clarté vaut plus que la flexibilité future dans un marché de proximité. Si votre activité est susceptible de bouger fortement, gardez un nom plus large et précisez le métier partout ailleurs.

## La ville dans le nom

Même logique.

Ça aide localement, ça vous ancre, et ça rassure sur votre proximité.

Ça coince si vous déménagez ou si vous élargissez votre zone. Une entreprise nommée d'après une commune paraît moins légitime à trente kilomètres.

Un compromis fréquent : le nom d'une vallée ou d'un massif plutôt que d'une commune précise. Plus large, tout aussi ancré.

## Votre propre nom

C'est un choix courant et souvent bon pour une activité de service à une personne.

Avantages : c'est unique, c'est facile à protéger, ça correspond à ce que les gens achètent réellement dans une petite structure, et ça se recommande naturellement.

Inconvénients : c'est plus difficile à céder, ça peut compliquer l'embauche, et si votre nom est difficile à orthographier, vous revenez au problème du téléphone.

C'est le choix que j'ai fait pour ce site. Mes clients achètent quelqu'un, pas une enseigne, et ça règle la question de la lisibilité et de l'unicité en même temps.

## Les vérifications avant de déposer

Quatre, à faire dans la même heure.

La disponibilité juridique du nom, y compris au regard des marques déposées dans votre domaine. Une recherche dans les bases officielles est le minimum, et un conseil en propriété industrielle est utile si vous investissez beaucoup dans la marque.

La disponibilité du nom de domaine.

Ce que donne une recherche Google, y compris les sens involontaires dans d'autres langues.

La disponibilité du nom d'utilisateur sur les plateformes où vous serez présent, pour garder la même identité partout.

## Ce qui compte moins qu'on ne croit

L'originalité absolue. Un nom simple et lisible bat un nom brillant que personne ne retient.

La signification profonde. Personne ne vous demandera jamais l'histoire derrière votre nom, sauf votre entourage.

La sonorité anglaise, sauf si votre marché l'est. En vallée, un nom français inspire souvent plus de confiance.

## Et si le nom est déjà pris et déjà en place

Ne changez pas un nom qui fonctionne pour des raisons esthétiques. Un changement de nom vous coûte votre notoriété accumulée, vos avis, vos positions sur Google et vos supports.

S'il faut vraiment changer, faites-le en gardant le lien : redirections depuis l'ancien domaine, information à vos clients, et transition annoncée. Le sujet technique est traité dans [refaire son site sans perdre sa place sur Google](/blog/refaire-son-site-sans-perdre-google).
    `,
  },
];
