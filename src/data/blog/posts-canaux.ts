import type { BlogPost } from './types';

/**
 * Canaux absents du site jusqu'ici : email, messagerie, prise de rendez-vous,
 * migration sans perte, et bilinguisme pour une clientele touristique.
 */
export const canauxPosts: BlogPost[] = [
  {
    id: '80',
    slug: 'newsletter-tpe-locale',
    titleFr: 'La liste d\'emails : le canal que personne ne peut vous retirer',
    excerptFr:
      "Vos abonnés appartiennent à une plateforme. Vos adresses email vous appartiennent. C'est toute la différence le jour où l'algorithme change.",
    seoTitleFr: 'Newsletter pour une TPE : par où Commencer',
    seoDescFr:
      "Constituer et utiliser une liste d'emails quand on est artisan, commerçant ou indépendant : ce qu'il faut écrire, à quel rythme, et le cadre légal.",
    readTime: '9 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['newsletter', 'email', 'fichier client', 'fidélisation'],
    related: [
      'location-saisonniere-reservation-directe',
      'entreprise-saisonniere-communication',
      'mentions-legales-rgpd-cookies-site',
    ],
    faqFr: [
      {
        q: 'Faut-il beaucoup d\'adresses pour que ça serve ?',
        a: "Non. Cent adresses de clients réels de votre zone valent plus que trois mille abonnés sur un réseau social, parce que ces gens vous connaissent déjà et que le message arrive directement chez eux.",
      },
      {
        q: 'Peut-on écrire à ses anciens clients sans leur accord ?',
        a: "Pour des clients existants, la relation commerciale antérieure autorise en général à communiquer sur des prestations similaires, à condition d'informer et de permettre le refus. Pour des prospects qui n'ont jamais rien demandé, il faut un consentement explicite. Dans tous les cas, chaque envoi doit contenir un lien de désinscription qui fonctionne.",
      },
      {
        q: 'À quel rythme envoyer ?',
        a: "Quatre à six fois par an suffit pour une entreprise locale, et c'est déjà beaucoup plus que ce que fait la concurrence. Un envoi utile deux fois par an vaut mieux qu'un envoi mensuel que personne n'ouvre.",
      },
    ],
    contentFr: `
Un compte Instagram peut être suspendu par erreur. Un algorithme peut changer et diviser votre portée par trois. Une plateforme peut décider que votre secteur ne l'intéresse plus.

Une liste d'adresses email, personne ne peut vous la retirer. C'est le seul canal que vous possédez réellement, et c'est celui que la quasi-totalité des petites entreprises n'a jamais commencé à construire.

## Pourquoi c'est sous-estimé

Le mot "newsletter" fait penser à des envois commerciaux qu'on supprime sans lire. C'est ce qui bloque tout le monde.

Sauf que ce dont je parle n'a rien à voir. Il s'agit d'écrire quatre fois par an à des gens qui vous ont déjà payé, pour leur dire quelque chose d'utile.

Une propriétaire de meublé qui écrit en octobre à ses locataires de l'an dernier remplit des semaines sans commission. Un paysagiste qui écrit en février à ses clients d'entretien remplit son printemps. Un garagiste qui rappelle la révision remplit son atelier de novembre.

Aucune de ces trois personnes ne fait de la publicité. Elles se rappellent au bon souvenir de gens qui les apprécient, au bon moment.

## Comment constituer la liste

La question est toujours "je pars de zéro, comment je fais". Vous partez rarement de zéro.

Vos clients passés. Vous avez leurs coordonnées dans vos devis, vos factures, vos échanges. C'est votre base de départ.

Vos demandes non abouties. Les gens qui ont demandé un devis et qui ne l'ont pas signé finissent souvent par faire les travaux, parfois deux ans plus tard. Ce sont des adresses précieuses.

À chaque nouveau client, dès maintenant. Notez l'adresse au moment du devis, pas plus tard. Une ligne dans un tableau suffit, il n'y a besoin d'aucun outil pour commencer.

Sur votre site, avec une bonne raison. Personne ne s'inscrit à une "newsletter". En revanche, les gens laissent leur adresse pour recevoir quelque chose de concret : le guide d'entretien de leur terrasse, la liste des aides en cours, le calendrier des disponibilités avant l'ouverture des réservations.

Et en physique, si vous avez un commerce. Un petit support à la caisse, une case sur le bon de commande.

## Le cadre légal, en clair

Je ne suis pas juriste, mais quelques principes sont stables.

Pour un client existant, la relation commerciale antérieure permet en général de communiquer sur des prestations similaires. Il faut l'informer et lui permettre de refuser.

Pour un prospect qui n'a jamais rien demandé, il faut un consentement explicite. Pas de case pré-cochée, pas d'inscription automatique parce que la personne a rempli un formulaire de contact.

Chaque envoi doit contenir un lien de désinscription qui fonctionne réellement, et une désinscription doit être immédiate.

Vous devez pouvoir dire ce que vous collectez, pourquoi, combien de temps, et comment quelqu'un fait supprimer ses données. C'est ce que couvre votre politique de confidentialité, décrite dans [mentions légales et RGPD](/blog/mentions-legales-rgpd-cookies-site).

Enfin, n'achetez jamais de fichier. C'est illégal dans la plupart des cas, ça ne marche pas, et ça abîme votre réputation d'expéditeur au point que vos emails légitimes finissent en indésirables.

## Quoi écrire

La règle qui change tout : chaque envoi doit être utile même pour quelqu'un qui n'achète rien.

Ce qui fonctionne.

Une information saisonnière que vous seul connaissez. Ce qu'il faut faire au jardin ce mois-ci, quand purger ses radiateurs, ce que change une nouvelle réglementation dans votre métier.

Un rappel avec une date. La révision, l'entretien annuel, l'ouverture des réservations, la fermeture de fin d'année.

Un chantier raconté. Deux photos, trois paragraphes, ce qui était compliqué. Les gens lisent ça beaucoup plus qu'on ne le croit.

Une réponse à une question fréquente, celle que vous entendez toutes les semaines.

Ce qui ne fonctionne pas : les promotions sèches, les vœux de saison sans contenu, et les messages qui ne parlent que de vous.

## Comment l'écrire

Comme un email, pas comme une brochure.

Un objet clair et concret. "Ce qu'il faut faire avant les premières gelées" bat "Newsletter de novembre".

Un texte court, en une seule colonne, lisible sur téléphone où la majorité des gens le liront.

Signé de votre nom, envoyé depuis une adresse à laquelle on peut répondre. C'est ce qui déclenche les réponses, et une réponse est le début d'un devis.

Un seul appel à l'action à la fin, ou aucun. Un email utile qui ne demande rien construit plus de confiance que trois relances.

## Le rythme

Quatre à six envois par an. Pas plus.

Une entreprise locale n'a pas la matière pour un envoi mensuel, et personne n'attend ça d'elle. Ce qui compte, c'est d'arriver au bon moment : avant la saison, avant l'échéance, avant la période de décision.

Le calendrier se cale sur votre activité, comme je l'ai décrit pour [les activités saisonnières](/blog/entreprise-saisonniere-communication).

## L'outil

Pour cent adresses, un outil gratuit d'envoi de campagnes suffit largement, et il gère la désinscription automatiquement, ce qui est le point important.

Ce qu'il ne faut pas faire : envoyer depuis votre boîte mail habituelle en mettant cent adresses en copie cachée. Vos emails finiront en indésirables, et vous exposez vos contacts à la moindre erreur de manipulation.

Ne cherchez pas l'outil parfait. Le facteur limitant n'est jamais l'outil, c'est le fait d'écrire.

## Le seul chiffre à regarder

Pas le taux d'ouverture, qui est devenu peu fiable.

Le nombre de réponses et le nombre de demandes reçues dans les jours qui suivent l'envoi. C'est ce qui paie vos factures.

Un envoi à cent vingt personnes qui produit trois demandes de devis est un très bon envoi, même si le tableau de bord affiche des chiffres modestes.

## Par où commencer cette semaine

Ouvrez un tableau, mettez trois colonnes : prénom, email, ce qu'ils ont acheté et quand.

Remplissez avec vos vingt derniers clients. Ça prend une heure.

Écrivez un email court et utile, envoyez le, et regardez ce qui revient.

Vous saurez en une semaine si ce canal marche chez vous, et ça ne vous aura rien coûté.
    `,
  },
  {
    id: '81',
    slug: 'whatsapp-business-entreprise-locale',
    titleFr: 'WhatsApp Business quand on est artisan ou commerçant',
    excerptFr:
      "Vos clients vous écrivent déjà dessus. Autant que ce ne soit pas votre numéro personnel, et que les demandes ne se perdent plus.",
    seoTitleFr: 'WhatsApp Business pour un Artisan',
    seoDescFr:
      "Séparer le pro du personnel, répondre plus vite, ne plus perdre de demandes : ce que WhatsApp Business change concrètement pour une TPE.",
    readTime: '8 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-12',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/reseaux-sociaux-entreprise-locale',
    tags: ['whatsapp', 'messagerie', 'réactivité', 'artisan'],
    related: [
      'repondre-commentaires-messages-prives',
      'formulaire-contact-qui-convertit',
      'transformer-vues-en-clients',
    ],
    faqFr: [
      {
        q: 'Faut-il un deuxième numéro pour WhatsApp Business ?',
        a: "C'est préférable mais pas obligatoire. L'application se configure sur un numéro distinct, ce qui sépare enfin le professionnel du personnel. Beaucoup d'artisans utilisent une seconde carte SIM ou une ligne dédiée peu coûteuse.",
      },
      {
        q: 'Est-ce vraiment mieux que les SMS ?',
        a: "Sur le plan pratique oui, parce que vous pouvez envoyer des photos, des documents et des vocaux sans coût, et parce que les échanges restent regroupés par client. Le vrai gain reste ailleurs : les messages d'absence et les réponses rapides évitent de perdre des demandes.",
      },
      {
        q: 'Est-ce adapté à tous les métiers ?',
        a: "À ceux où le client envoie des photos et où l'échange est rapide, oui : bâtiment, dépannage, coiffure, restauration, commerce. Pour une activité où chaque demande demande un dossier, un formulaire sur votre site reste plus adapté.",
      },
    ],
    contentFr: `
Ça se passe déjà, que vous l'ayez décidé ou non.

Un client prend en photo sa fuite et vous l'envoie sur votre numéro personnel, un dimanche soir. Vous répondez entre deux choses, l'échange se noie dans une conversation de famille, et trois semaines plus tard vous ne retrouvez plus l'adresse du chantier.

Le canal est bon. C'est l'organisation qui manque.

## Ce que l'application professionnelle change

WhatsApp Business est gratuite et se configure sur un numéro distinct de votre compte personnel. C'est déjà, à soi seul, un gain réel.

Elle ajoute ensuite quelques fonctions qui règlent des problèmes concrets.

Un profil d'entreprise, avec vos horaires, votre adresse ou votre zone, votre site et une description. Un client qui reçoit un message de vous voit à qui il parle.

Un message d'accueil, envoyé automatiquement à la première prise de contact. Vous y mettez ce qu'il faut vous fournir : commune, type d'intervention, photos. Vous gagnez un aller-retour sur chaque demande.

Un message d'absence, en dehors de vos horaires. C'est la fonction la plus utile de toutes : la personne qui écrit à vingt-deux heures sait qu'elle aura une réponse demain, au lieu de croire que vous l'ignorez.

Des réponses rapides enregistrées, pour les cinq questions que vous recevez sans arrêt : vos tarifs indicatifs, votre zone, vos délais actuels, ce qu'il faut prévoir avant votre venue.

Des étiquettes pour classer les conversations : nouveau contact, devis envoyé, chantier en cours, à relancer. C'est un mini fichier client qui ne demande aucun logiciel.

Un catalogue, utile surtout pour un commerce, moins pour un artisan.

## Pourquoi ça convertit mieux qu'un formulaire

Un formulaire demande un effort : lire, remplir des champs, attendre.

Un message se tape en dix secondes, avec une photo qui vaut trois paragraphes d'explication. Pour un métier où le client ne sait pas nommer son problème, la photo change tout : il ne sait pas dire "flexible de raccordement", il sait le montrer.

Et il y a un effet psychologique réel : écrire sur une messagerie engage moins que téléphoner. Une partie des gens qui n'auraient jamais appelé vous écrivent.

Ça ne remplace pas le formulaire de votre site, ça s'ajoute. Sur le formulaire lui-même, l'essentiel est dans [un formulaire de contact qui convertit](/blog/formulaire-contact-qui-convertit).

## Le piège à éviter

Ouvrir un canal supplémentaire et ne pas le tenir est pire que de ne pas l'ouvrir.

Un client qui écrit sur un numéro affiché publiquement et qui n'obtient rien pendant trois jours en tire une conclusion, et cette conclusion vous suit.

Donc : soit vous mettez un message d'absence honnête avec un délai réel, soit vous n'affichez pas ce canal.

Le système en deux créneaux de dix minutes par jour fonctionne aussi bien ici que sur les réseaux, et je l'ai décrit dans [répondre aux commentaires et aux messages](/blog/repondre-commentaires-messages-prives).

## Séparer le pro du personnel

C'est la vraie raison d'installer l'application professionnelle, et elle vaut à elle seule le déplacement.

Sur un numéro dédié, vous pouvez couper les notifications à dix-neuf heures sans rater un message de vos enfants. Vous pouvez partir en vacances avec un message d'absence. Vous pouvez, un jour, passer la main à quelqu'un sans lui donner votre téléphone personnel.

Une seconde carte SIM ou une ligne dédiée coûte quelques euros par mois. C'est un des meilleurs rapports entre coût et confort de travail que je connaisse.

## Où l'afficher

Sur votre site, avec un bouton qui ouvre directement la conversation, à côté du numéro de téléphone et non à la place.

Sur votre fiche Google Business, dans les champs prévus pour la prise de contact.

Sur vos réseaux sociaux, dans le lien du profil.

Sur vos devis et vos factures, comme moyen de vous joindre pour une question rapide.

## Ce qu'il ne faut pas en faire

Ne l'utilisez pas pour de la prospection non sollicitée. Écrire à des gens qui ne vous ont rien demandé sur une messagerie personnelle est intrusif, mal vu, et cela vous expose à des signalements qui peuvent bloquer votre compte.

Ne remplacez pas le devis écrit par un accord dans une conversation. Un chantier se contractualise, quelle que soit la sympathie de l'échange.

Et ne laissez pas les informations importantes vivre uniquement dans la messagerie. L'adresse, les mesures, les décisions doivent finir dans votre dossier, sinon vous les perdrez.

## Les groupes de commune, à part

Une remarque annexe mais utile en Savoie. Une part importante des recommandations locales circule dans des groupes de village, sur les messageries et sur Facebook.

Vous ne pouvez pas vous y faire de la publicité, et il ne faut pas essayer. En revanche, être la personne dont le nom revient quand quelqu'un demande "vous connaissez un bon" est le meilleur canal d'acquisition qui existe, et il se construit avec des chantiers propres et des clients contents, pas avec des messages.

## En résumé

Installez l'application professionnelle, sur un numéro dédié si possible.

Remplissez le profil, écrivez le message d'accueil et le message d'absence, enregistrez cinq réponses rapides.

Affichez le canal partout, et tenez le.

Une heure de configuration, une fois. C'est un des rares changements dont on voit l'effet dans la semaine.
    `,
  },
  {
    id: '82',
    slug: 'prendre-rendez-vous-en-ligne',
    titleFr: 'La prise de rendez-vous en ligne : pour qui ça vaut le coup',
    excerptFr:
      "Ce n'est pas un gadget pour les gros. Pour certains métiers, c'est ce qui récupère les demandes qui arrivent quand vous ne pouvez pas décrocher.",
    seoTitleFr: 'Prise de Rendez-vous en Ligne : pour Qui',
    seoDescFr:
      "Réservation en ligne pour un salon, un praticien, un garage ou un coach : ce que ça change vraiment, les pièges, et les métiers pour qui c'est inutile.",
    readTime: '8 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-10',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['rendez-vous', 'réservation', 'conversion', 'agenda'],
    related: [
      'formulaire-contact-qui-convertit',
      'coach-sportif-trouver-clients',
      'commerce-centre-ville-visibilite',
    ],
    faqFr: [
      {
        q: 'Quels métiers ont vraiment intérêt à la réservation en ligne ?',
        a: "Ceux dont la prestation est standardisée en durée et en prix : coiffure, esthétique, praticiens, coaching, garage, toilettage. Pour un métier qui chiffre après visite, un formulaire de demande vaut mieux qu'un agenda ouvert.",
      },
      {
        q: 'Que faire des rendez-vous non honorés ?',
        a: "Un rappel automatique la veille supprime une grande partie des oublis. Pour les récidives, un acompte au moment de la réservation reste le levier le plus efficace, à condition d'annoncer clairement les conditions d'annulation.",
      },
      {
        q: 'Faut-il ouvrir tout son agenda ?',
        a: "Non, et c'est l'erreur la plus fréquente. Ouvrez des créneaux choisis, en gardant de la marge pour les urgences et les habitués. Un agenda entièrement ouvert vous fait perdre la main sur votre semaine.",
      },
    ],
    contentFr: `
Un salon de coiffure d'Albertville m'a expliqué son problème : "on rate des clients parce qu'on a les mains dans les cheveux quand le téléphone sonne."

C'est exactement le cas d'usage. Ce n'est pas une question de modernité, c'est une question d'appels perdus.

## Le problème réel

Une partie de vos demandes arrive quand vous ne pouvez pas répondre. En intervention, en rendez vous, au volant, le soir, le dimanche.

Ces gens n'attendent pas. Ils appellent le suivant sur la liste, ou ils remettent à plus tard et oublient.

Vous ne saurez jamais combien vous en perdez, ce qui rend le problème invisible. C'est précisément ce qui le rend coûteux.

## Les métiers pour qui ça marche

Le critère est simple : votre prestation a-t-elle une durée et un prix connus à l'avance ?

Coiffure, barbier, esthétique, massage, ongles. Une coupe dure quarante-cinq minutes, tout le monde le sait.

Praticiens de santé et thérapeutes, dans le cadre de leur activité.

Coaching sportif, cours particuliers, séances individuelles.

Garage, contrôle, pneus, révision.

Toilettage, vétérinaire, pension.

Restaurants, pour la réservation de table.

Visites et essais, pour l'immobilier et l'automobile.

Dans tous ces cas, la personne sait ce qu'elle veut, elle veut juste un créneau, et lui demander de vous appeler pour ça est une friction inutile.

## Les métiers pour qui c'est inutile

Un artisan du bâtiment n'a rien à gagner à ouvrir un agenda. Chaque chantier est différent, le devis se fait après visite, et un créneau réservé en ligne pour "des travaux" ne veut rien dire.

Pour ces métiers, ce qui manque n'est pas un agenda, c'est un formulaire court et une réponse rapide. Le sujet est traité dans [un formulaire de contact qui convertit](/blog/formulaire-contact-qui-convertit).

Entre les deux, il existe un usage intermédiaire qui fonctionne bien : ouvrir des créneaux uniquement pour la visite de devis, avec une durée fixe de trente minutes. Vous ne réservez pas le chantier, vous réservez le rendez vous. C'est un vrai gain de temps sur les allers-retours.

## Les erreurs qui coûtent cher

Ouvrir tout l'agenda. Vous perdez la main sur votre semaine, vos journées se fragmentent, et vous n'avez plus de place pour les urgences ni pour les habitués. Ouvrez des créneaux choisis.

Ne pas synchroniser avec votre agenda personnel. Un double rendez vous, c'est un client mécontent et un avis négatif.

Ne pas prévenir. Un rappel automatique la veille supprime une grande partie des oublis. C'est le réglage qui a le meilleur rendement de tout l'outil.

Demander trop d'informations. Nom, téléphone, prestation. Le reste se demande sur place.

Cacher les prix. Si le tarif dépend de trop de choses, donnez une fourchette et dites qu'elle sera confirmée sur place. L'absence totale d'indication fait abandonner.

Oublier les fermetures. Congés, jours fériés, formations. Un créneau réservable un jour où vous êtes fermé produit exactement le même effet qu'un horaire faux sur votre fiche Google.

## Les annulations de dernière minute

C'est le vrai sujet des métiers à créneaux, et il n'a pas de solution parfaite.

Le rappel automatique la veille règle la majorité des oublis honnêtes.

Une politique d'annulation écrite, visible au moment de la réservation, cadre le reste. Elle doit être simple et compréhensible.

L'acompte est le levier le plus efficace pour les récidives et pour les prestations longues. Il change la nature de l'engagement. En contrepartie, il fait renoncer une partie des gens, donc c'est un arbitrage à faire selon votre taux de défection réel, pas selon l'agacement du moment.

Et gardez une liste d'attente : un créneau libéré la veille se remplit souvent en un message aux bonnes personnes.

## Où le mettre

Sur votre fiche Google Business, dans le champ prévu. C'est le premier endroit où les gens vous trouvent, et le bouton apparaît directement dans les résultats.

Sur votre site, visible dès la première page, pas caché dans une page contact.

Dans le lien de vos profils sociaux.

Dans votre message d'absence sur la messagerie, ce qui transforme une demande hors horaires en rendez vous pris.

## Ce que ça ne règle pas

Un agenda en ligne ne remplit pas un planning vide. Il capte des demandes qui existaient et qui se perdaient.

Si le téléphone ne sonne pas du tout, le problème est ailleurs : visibilité, avis, prix, ou une offre qui n'intéresse personne. Un bouton de réservation sur une page que personne ne visite ne produit rien.

L'ordre reste le même que partout : être trouvé, rassurer, puis faciliter le passage à l'acte. La réservation en ligne est la troisième marche, pas la première.

## L'outil

Il existe des outils gratuits ou peu coûteux qui font très bien ce travail, et certaines plateformes spécialisées par métier apportent en plus de la visibilité.

Une mise en garde sur ces dernières : regardez ce que vous payez, ce qu'elles prélèvent, et surtout si vous gardez le contact de vos clients. Une plateforme qui s'interpose entre vous et vos habitués vous loue une clientèle que vous aviez déjà. C'est le même raisonnement que pour [la location saisonnière et les plateformes de réservation](/blog/location-saisonniere-reservation-directe).

Si vous hésitez à en installer un, [écrivez moi](/contact) en me disant votre métier. Je vous dirai franchement si ça vaut le coup chez vous, y compris quand la réponse est non.
    `,
  },
  {
    id: '83',
    slug: 'refaire-son-site-sans-perdre-google',
    titleFr: 'Refaire son site sans perdre sa place sur Google',
    excerptFr:
      "Le moment le plus risqué de la vie d'un site. Trois entreprises sur dix perdent des positions pour une raison qui s'évitait en une heure.",
    seoTitleFr: 'Refonte de Site : Ne Pas Perdre Google',
    seoDescFr:
      "Redirections, adresses de pages, contenus à conserver : la méthode pour changer de site sans effacer des années de référencement.",
    readTime: '9 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-09',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['refonte', 'redirections', 'migration', 'référencement'],
    related: [
      'refonte-site-web-quand',
      'pourquoi-site-pas-sur-google',
      'recuperer-site-web-acces-perdus',
    ],
    faqFr: [
      {
        q: 'Qu\'est-ce qu\'une redirection et pourquoi c\'est essentiel ?',
        a: "C'est une instruction qui envoie automatiquement une ancienne adresse vers la nouvelle page équivalente. Sans elle, chaque ancienne page devient une erreur, et vous perdez à la fois les visiteurs et la position que Google lui avait accordée.",
      },
      {
        q: 'Faut-il garder les mêmes adresses de pages ?',
        a: "Quand c'est possible, oui : c'est le moyen le plus simple de ne rien perdre. Si vous devez les changer, chaque ancienne adresse doit pointer vers la page qui traite le même sujet, pas vers la page d'accueil.",
      },
      {
        q: 'Combien de temps dure la période instable ?',
        a: "Quelques semaines en général, le temps que Google réexplore le site et prenne en compte les redirections. Une baisse temporaire est normale, une baisse qui dure trois mois signale un problème à corriger.",
      },
    ],
    contentFr: `
Une refonte est le seul moment où un site correctement positionné peut tout perdre en une journée.

Ce n'est pas une fatalité et ça n'a rien de sorcier. C'est une checklist, et elle se fait avant, pas après.

## Ce qui se passe quand on rate la migration

Google connaît vos anciennes pages, avec leurs adresses exactes. Ces adresses sont ce qu'il a indexé, classé et éventuellement mis en avant.

Le jour où le nouveau site est mis en ligne avec des adresses différentes et sans redirection, chacune de ces pages devient une erreur.

Les visiteurs qui arrivent depuis Google tombent sur une page introuvable et repartent. Les liens que d'autres sites avaient faits vers vous ne mènent plus nulle part. Et Google, au bout de quelques passages, retire les pages de son index.

Vous ne perdez pas seulement du trafic. Vous perdez l'ancienneté, qui est ce qui coûte le plus cher à reconstruire.

## Étape 1 : inventorier avant de toucher à quoi que ce soit

Avant que l'ancien site disparaisse, listez ce qui existe.

Toutes les adresses de vos pages actuelles. Si vous avez accès à un outil de suivi, sortez la liste complète. Sinon, parcourez le site et notez chaque adresse, ainsi que le plan du site s'il existe.

Les pages qui reçoivent du trafic. C'est l'information la plus importante et beaucoup de gens la découvrent trop tard. Si vous avez un accès à la console de recherche Google, notez les pages et les requêtes qui vous amènent des visites.

Les contenus qui doivent survivre. Textes, photos, avis, mentions légales, articles.

Faites cette liste même si vous confiez la refonte à quelqu'un. C'est votre garantie.

## Étape 2 : décider du sort de chaque page

Trois cas, et un seul pose problème.

La page existe toujours à la même adresse : rien à faire.

La page existe mais change d'adresse : une redirection vers la nouvelle.

La page disparaît : une redirection vers la page la plus proche par le sujet.

Le piège classique consiste à rediriger toutes les anciennes pages vers la page d'accueil. C'est plus rapide à mettre en place et c'est presque aussi mauvais que ne rien faire : le visiteur ne trouve pas ce qu'il cherchait et repart, et Google traite ces redirections comme des pages supprimées.

Une redirection doit envoyer vers l'équivalent, pas vers le point de départ.

## Étape 3 : les redirections permanentes

Une redirection permanente indique que le déménagement est définitif, ce qui permet à Google de transférer la valeur de l'ancienne page vers la nouvelle.

Une redirection temporaire indique le contraire, et ce n'est pas ce que vous voulez lors d'une refonte.

C'est une distinction technique que votre prestataire connaît. La question à poser est simplement : est ce que les redirections sont permanentes.

Attention aussi aux chaînes de redirections, quand une page en appelle une autre qui en appelle une troisième. Ça arrive quand un site a été refait deux fois. Chaque étape doit pointer directement vers la destination finale.

## Étape 4 : les détails qui font perdre du monde

Le passage avec ou sans www, et le passage en https. Toutes les variantes doivent aboutir à une seule version, sans quoi Google voit plusieurs sites identiques.

Le fichier robots, qui bloque parfois l'exploration pendant la construction. Un site mis en ligne avec le blocage encore actif reste invisible, et c'est une des causes les plus fréquentes d'un site neuf qui n'apparaît nulle part. Le sujet est dans [pourquoi mon site n'apparaît pas sur Google](/blog/pourquoi-site-pas-sur-google).

Les balises canoniques, qui doivent pointer vers la bonne page.

Le plan du site, à régénérer et à soumettre après la mise en ligne.

Les emails, qui partagent la configuration technique du domaine et qui peuvent tomber lors d'une migration mal préparée. Le sujet est expliqué dans [nom de domaine et hébergement](/blog/nom-de-domaine-hebergement-comprendre).

## Étape 5 : ne pas jeter le contenu

C'est l'erreur silencieuse des refontes esthétiques.

Un nouveau site plus beau contient très souvent moins de texte que l'ancien. Les pages sont épurées, les paragraphes raccourcis, les questions supprimées parce qu'elles alourdissaient la maquette.

Ce texte supprimé était précisément ce qui vous faisait ressortir sur des recherches précises. Vous gagnez en élégance et vous perdez en visibilité, et personne ne fait le lien trois mois plus tard.

Si une page qui marchait doit être raccourcie, gardez le fond et déplacez le, ne le supprimez pas.

## Étape 6 : après la mise en ligne

Le jour même, testez une dizaine d'anciennes adresses à la main et vérifiez qu'elles arrivent au bon endroit.

Vérifiez que le site s'affiche correctement sur téléphone et que la vitesse tient, comme décrit dans [la vitesse sur mobile](/blog/vitesse-site-web-mobile).

Soumettez le nouveau plan du site dans la console de recherche.

Surveillez les erreurs signalées pendant les semaines suivantes, et corrigez au fur et à mesure. C'est là qu'on découvre les pages oubliées de l'inventaire.

Ne coupez pas l'ancien hébergement trop vite, tant que tout n'est pas vérifié.

## À quoi s'attendre

Une baisse temporaire de quelques semaines est normale, le temps que Google réexplore l'ensemble.

Une baisse qui dure au-delà de deux ou trois mois n'est pas normale et signale un problème : redirections manquantes, contenu supprimé, blocage d'exploration.

Le meilleur moment pour refaire un site est donc une période creuse, pas la veille de votre saison haute.

Et avant même de vous lancer, la vraie question est de savoir si la refonte est justifiée. Elle ne l'est pas toujours, et je l'explique dans [quand refaire son site](/blog/refonte-site-web-quand).
    `,
  },
  {
    id: '84',
    slug: 'site-bilingue-clientele-etrangere',
    titleFr: 'Faut-il un site en anglais quand on reçoit des clients étrangers',
    excerptFr:
      "En station, une part de la clientèle ne lit pas le français. Traduire tout le site est rarement la bonne réponse.",
    seoTitleFr: 'Site en Anglais : Utile ou Pas',
    seoDescFr:
      "Hébergement, commerce ou prestataire recevant une clientèle étrangère : quoi traduire, comment le faire proprement, et ce qui ne sert à rien.",
    readTime: '8 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-06',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['bilingue', 'anglais', 'tourisme', 'traduction'],
    related: [
      'hebergement-station-reseaux-sociaux',
      'location-saisonniere-reservation-directe',
      'combien-coute-un-site-web',
    ],
    faqFr: [
      {
        q: 'Faut-il traduire tout son site ?',
        a: "Rarement. Traduisez ce qui décide : la page d'accueil, la page de l'offre, les informations pratiques et le contact. Un blog traduit à moitié coûte plus cher qu'il ne rapporte et vieillit mal.",
      },
      {
        q: 'La traduction automatique suffit-elle ?',
        a: "Comme point de départ, oui. Publiée telle quelle, elle produit des formulations qui sonnent faux et qui abîment la confiance, exactement au moment où le visiteur vous compare à un concurrent. Faites relire par quelqu'un dont c'est la langue.",
      },
      {
        q: 'Faut-il une adresse séparée pour la version anglaise ?',
        a: "Une organisation claire, sous-dossier dédié ou page distincte, aide les moteurs à comprendre quelle version montrer à qui. Ce qui compte surtout, c'est que les deux versions soient identifiables et que le visiteur puisse basculer facilement.",
      },
    ],
    contentFr: `
La question revient chaque année chez les hébergeurs de Tarentaise et les commerces de station : est ce que ça vaut le coup de faire le site en anglais.

La réponse dépend d'un seul chiffre, et personne ne le regarde.

## Commencez par mesurer

Quelle part de votre chiffre d'affaires vient de clients qui ne lisent pas le français ?

Pas votre impression. Regardez vos réservations, vos factures, la provenance de vos demandes. Si vous avez un outil de mesure sur votre site, regardez la langue des visiteurs.

En dessous de dix pour cent, la traduction est un confort. Au-dessus d'un tiers, c'est un manque à gagner tous les jours.

Entre les deux, il existe une réponse intermédiaire que je recommande souvent : traduire une partie, pas tout.

## Ce qu'il faut traduire en priorité

L'ordre est toujours le même, et il suit le parcours de décision.

La page d'accueil, ou au minimum un bloc qui dit qui vous êtes, ce que vous proposez et où vous êtes.

La page de l'offre principale. L'hébergement, la prestation, la carte pour un restaurant.

Les informations pratiques. Comment venir, où se garer, l'accès depuis l'aéroport le plus proche, les horaires, ce qui est inclus, les tarifs. C'est là que se posent les vraies questions d'une clientèle étrangère, et c'est ce qui est le plus souvent absent.

Le contact et le formulaire, y compris les libellés des champs. Un formulaire en français sur une page en anglais fait abandonner.

Les conditions importantes : annulation, caution, arrivée tardive, animaux.

## Ce qu'il ne faut pas traduire

Le blog. Un contenu éditorial traduit demande à être maintenu dans les deux langues, et il vieillit deux fois plus vite. C'est le premier abandon dans tous les sites bilingues que je vois.

C'est d'ailleurs le choix que j'applique ici : ce site est bilingue sur ses pages principales, et les articles récents sont en français seul, parce que ma clientèle est en Savoie et en Haute-Savoie. Traduire soixante-dix articles pour un public que je ne sers pas serait du travail perdu.

Les pages secondaires que personne ne consulte.

Et les mentions légales, sauf obligation particulière : elles relèvent du droit français et se lisent dans la langue du droit applicable.

## La qualité de la traduction

La traduction automatique a beaucoup progressé, et elle constitue un excellent point de départ.

Publiée telle quelle, elle produit malgré tout des formulations qui sonnent faux, des faux amis, et un ton bizarre. Un lecteur natif le repère en deux phrases.

Le problème n'est pas esthétique. Ce visiteur est en train de décider s'il vous confie une semaine de vacances et plusieurs centaines d'euros. Un texte qui sonne mal introduit un doute au pire moment.

La solution est peu coûteuse : faites relire par quelqu'un dont c'est la langue maternelle. Une page relue coûte peu et se fait une fois.

Attention particulière au vocabulaire de votre métier, que les traducteurs automatiques rendent mal. Les termes de montagne, de restauration et d'hébergement ont un usage précis qu'un outil ne connaît pas.

## L'organisation technique

Quelques principes, sans entrer dans le détail.

Chaque version doit être identifiable, par un sous-dossier dédié ou une structure claire, pour que les moteurs sachent quelle version montrer à qui.

Le sélecteur de langue doit être visible en haut de page, avec le nom de la langue plutôt qu'un drapeau. Un drapeau désigne un pays, pas une langue, et l'anglais n'est pas seulement britannique.

Ne redirigez pas automatiquement selon la localisation du visiteur. Un Français en vacances à l'étranger doit pouvoir lire votre site en français.

Et gardez les deux versions synchronisées sur les informations qui changent : tarifs, horaires, disponibilités. Une version anglaise qui affiche les tarifs de l'an dernier est pire que pas de version anglaise.

## Ce qui compte parfois plus que le site

Pour une clientèle étrangère, plusieurs éléments pèsent autant que la traduction.

Les avis en anglais sur votre fiche Google. Quand un visiteur lit un avis dans sa langue, il est rassuré immédiatement. Demandez donc un avis à vos clients étrangers satisfaits, ce que presque personne ne fait.

Les photos, qui parlent toutes les langues et qui répondent à la moitié des questions.

Les informations d'accès, avec des distances et des temps de trajet chiffrés, depuis les aéroports et les gares. Une clientèle étrangère ne connaît pas la géographie de la vallée.

Une réponse rapide aux messages, dans un anglais simple. Personne n'attend un anglais parfait, on attend une réponse.

## Le raisonnement de fond

Traduire un site ne crée pas une clientèle. Ça enlève un obstacle pour une clientèle qui existe déjà.

Donc : si vous recevez déjà des étrangers, traduisez ce qui décide, proprement, et arrêtez vous là. Si vous n'en recevez pas et que vous espérez en attirer, la traduction n'est pas le levier, la visibilité l'est.

Pour un hébergement de montagne, le reste du raisonnement est dans [que publier hors saison](/blog/hebergement-station-reseaux-sociaux) et dans [la réservation directe](/blog/location-saisonniere-reservation-directe).
    `,
  },
];
