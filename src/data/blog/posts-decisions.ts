import type { BlogPost } from './types';

/**
 * Cluster "decisions techniques et arbitrages" : les questions qu'on se pose
 * une fois que le site existe ou qu'on hesite entre deux chemins.
 */
export const decisionsPosts: BlogPost[] = [
  {
    id: '70',
    slug: 'recuperer-site-web-acces-perdus',
    titleFr: 'Récupérer un site dont on a perdu les accès',
    excerptFr:
      "Le prestataire ne répond plus, personne ne sait où est hébergé le site, et l'échéance du domaine approche. Voilà l'ordre dans lequel s'y prendre.",
    seoTitleFr: 'Récupérer un Site : Accès et Domaine Perdus',
    seoDescFr:
      "Prestataire injoignable, accès perdus, domaine à un autre nom : la méthode pour récupérer la main sur son site, et ce qui est réellement récupérable.",
    readTime: '9 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['accès perdus', 'nom de domaine', 'prestataire', 'récupération'],
    related: [
      'nom-de-domaine-hebergement-comprendre',
      'agence-web-freelance-ou-plateforme',
      'refonte-site-web-quand',
    ],
    faqFr: [
      {
        q: 'Que faire si le prestataire ne répond plus ?',
        a: "Commencez par identifier qui est titulaire du nom de domaine et où le site est hébergé, ce qui est consultable publiquement. C'est ce qui détermine si vous pouvez reprendre la main directement ou s'il faut passer par une procédure auprès du bureau d'enregistrement.",
      },
      {
        q: 'Peut-on récupérer un domaine enregistré au nom d\'un prestataire ?',
        a: "Souvent oui, mais pas toujours simplement. Le bureau d'enregistrement dispose d'une procédure de contestation, et il faut apporter la preuve que le nom correspond à votre entreprise ou à votre marque. Comptez du temps, et parfois l'aide d'un juriste.",
      },
      {
        q: 'Vaut-il mieux refaire le site que le récupérer ?',
        a: "Si le site est ancien et que vous vouliez le refaire de toute façon, oui, à condition de récupérer le nom de domaine. C'est lui qui porte votre visibilité, pas les fichiers du site.",
      },
    ],
    contentFr: `
C'est un appel que je reçois plusieurs fois par an, et le ton est toujours le même : un mélange d'agacement et d'inquiétude.

Le site est en ligne, il faudrait juste changer un numéro de téléphone, et la personne qui l'a fait ne répond plus depuis huit mois.

## D'abord, séparer les trois choses

Avant de paniquer, sachez ce que vous cherchez à récupérer, parce que ce ne sont pas les mêmes démarches.

Le nom de domaine, votre adresse. C'est le seul élément vraiment critique, et j'explique pourquoi dans [nom de domaine et hébergement](/blog/nom-de-domaine-hebergement-comprendre).

L'hébergement, l'endroit où vivent les fichiers.

Le site lui-même, c'est-à-dire les fichiers, les textes et les photos.

Le domaine se récupère et se transfère. Le site, dans le pire des cas, se refait. Beaucoup de gens s'accrochent au troisième et négligent le premier, ce qui est exactement l'inverse de la bonne priorité.

## Étape 1 : savoir ce qui est public

Vous pouvez obtenir une partie de l'information sans l'accord de personne, en cinq minutes.

Cherchez "whois" suivi de votre nom de domaine, ouvrez un des outils publics de consultation, et regardez trois choses : la date d'expiration, le bureau d'enregistrement, et le titulaire quand il n'est pas masqué.

La date d'expiration est l'information la plus urgente. Si elle approche et que personne ne renouvelle, le domaine tombe, et un domaine tombé peut être racheté par n'importe qui. C'est le scénario le plus grave de tout cet article.

Ensuite, cherchez qui héberge le site. Des outils publics permettent de le savoir, et un développeur vous le dit en deux minutes.

## Étape 2 : fouiller vos propres archives

Avant de conclure que vous n'avez rien, cherchez sérieusement.

Dans vos emails, les mots "domaine", "renouvellement", "hébergement", "facture", "mot de passe", "identifiants", ainsi que le nom du prestataire et le nom des hébergeurs courants.

Dans votre comptabilité, les prélèvements récurrents de quelques euros par mois ou de quelques dizaines d'euros par an. Ils vous disent chez qui vous avez un compte, ce qui est déjà une porte d'entrée.

Chez votre expert-comptable, qui archive parfois des factures que vous avez perdues.

Il arrive régulièrement que les accès existent et dorment dans une boîte mail, sous un intitulé que personne n'avait relié au site.

## Étape 3 : contacter, dans le bon ordre

Le prestataire d'abord, une dernière fois, par écrit, en étant précis et courtois : vous demandez le transfert du nom de domaine et les accès à l'hébergement, et vous fixez une échéance raisonnable. Gardez une trace écrite, elle servira à l'étape suivante.

Le bureau d'enregistrement ensuite. Si le domaine n'est pas à votre nom, expliquez la situation : ils ont une procédure, ils la connaissent, et vous ne serez pas le premier. On vous demandera des justificatifs prouvant que le nom correspond à votre entreprise.

L'hébergeur enfin. Même logique : ils ont l'habitude des entreprises qui ont perdu le contact avec leur prestataire, et ils vous diront ce qu'il faut fournir.

Soyez factuel avec eux. Ce ne sont pas eux qui vous ont mis dans cette situation, et un ton agressif ralentit tout.

## Étape 4 : sauvegarder ce qui est visible

Même sans accès, votre site est public. Tout ce qui s'affiche peut être récupéré.

Enregistrez chaque page dans votre navigateur, copiez tous les textes dans un document, et téléchargez les photos que vous voulez garder. Si les photos originales sont perdues, celles du site restent exploitables, en qualité réduite.

Notez aussi les adresses exactes de toutes vos pages. Cette liste vous servira à construire les redirections le jour où vous referez le site, et c'est ce qui vous évitera de perdre les positions déjà acquises sur Google.

Faites cette sauvegarde même si vous pensez récupérer les accès. Elle prend une heure et elle vous met à l'abri.

## Étape 5 : décider entre récupérer et refaire

Une fois le domaine sécurisé, la question devient purement pratique.

Si le site est correct et récent, récupérez les accès et faites le évoluer.

Si le site date, s'il n'est pas utilisable sur téléphone, ou si vous vouliez le refaire de toute façon, ne perdez pas trois mois à récupérer des fichiers dont vous ne ferez rien. Refaites le proprement, avec les textes que vous avez sauvegardés, et branchez le sur le même nom de domaine.

Dans ce second cas, le plan de redirections n'est pas optionnel. Chaque ancienne adresse doit pointer vers la page équivalente du nouveau site, sinon vous perdez ce que Google avait mis des années à vous accorder. C'est un des points que je détaille dans [quand refaire son site](/blog/refonte-site-web-quand).

## Le cas du site chez un prestataire disparu

Il arrive que le site soit hébergé dans un compte que vous ne pourrez jamais rouvrir, parce que le prestataire a cessé son activité ou n'est plus joignable.

Dans ce cas, le site continue de fonctionner tant que quelqu'un paie l'hébergement, puis il s'arrête sans prévenir. Vous ne pouvez rien y faire.

La seule action utile est donc de sécuriser le domaine et de préparer le remplacement avant la coupure, plutôt que d'attendre. Un site qui disparaît du jour au lendemain, sans redirection, coûte cher en visibilité et met des mois à se rattraper.

## Ne jamais se remettre dans cette situation

Trois règles, à appliquer chez le prochain prestataire, quel qu'il soit.

Le nom de domaine est enregistré à votre nom, avec votre adresse email à vous. C'est non négociable, et un refus sur ce point est un motif suffisant pour ne pas travailler ensemble.

Vous recevez les accès par écrit à la livraison, même si vous ne vous en servez jamais. Rangez les au même endroit que vos papiers importants.

Vous savez où le site est hébergé et combien ça coûte. Une ligne dans un tableau suffit.

Ces trois règles font partie de ce que je vérifie systématiquement, et elles font partie des questions à poser avant de signer, listées dans [agence, freelance ou plateforme](/blog/agence-web-freelance-ou-plateforme).

Si vous êtes bloqué en ce moment, [envoyez moi le nom de votre domaine](/contact). Je regarde ce qui est public et je vous dis en une réponse où vous en êtes réellement, sans que ça vous engage.
    `,
  },
  {
    id: '71',
    slug: 'site-vitrine-ou-boutique-en-ligne',
    titleFr: 'Site vitrine ou boutique en ligne : lequel vous faut-il',
    excerptFr:
      "Ajouter un panier semble anodin. C'est en réalité changer de métier, et beaucoup de gens s'en aperçoivent trop tard.",
    seoTitleFr: 'Site Vitrine ou Boutique en Ligne : Choisir',
    seoDescFr:
      "Faut-il vendre en ligne quand on est un commerce ou un artisan de Savoie ? Ce que change vraiment un panier, et les solutions intermédiaires.",
    readTime: '9 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-12',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['e-commerce', 'boutique en ligne', 'site vitrine', 'arbitrage'],
    related: [
      'combien-coute-un-site-web',
      'commerce-centre-ville-visibilite',
      'faire-son-site-soi-meme-ou-pro',
    ],
    faqFr: [
      {
        q: 'Une boutique en ligne coûte-t-elle beaucoup plus cher ?',
        a: "La construction coûte plus cher, mais ce n'est pas le principal écart. Le vrai coût est ensuite : gestion des stocks, photos et fiches produits, expéditions, retours, service client, obligations légales renforcées. C'est du travail permanent, pas un investissement ponctuel.",
      },
      {
        q: 'Peut-on vendre sans monter une boutique complète ?',
        a: "Oui, et c'est souvent le bon choix. Réservation, prise de commande par message, paiement d'acompte par lien, click and collect : ces solutions couvrent la majorité des besoins d'un commerce local sans les contraintes d'un site marchand.",
      },
      {
        q: 'Un artisan a-t-il intérêt à vendre en ligne ?',
        a: "Rarement pour ses prestations, qui se chiffrent après visite. Cela peut avoir du sens pour des produits standardisés, des pièces ou des formations, à condition de traiter ça comme une activité à part avec son propre temps de gestion.",
      },
    ],
    contentFr: `
"Tant qu'à faire un site, autant pouvoir vendre dessus, non ?"

La question revient souvent, et ma réponse déçoit régulièrement : dans la plupart des cas, non.

Pas parce que c'est difficile à construire. Parce qu'une boutique en ligne n'est pas un site avec un bouton en plus, c'est une activité nouvelle.

## Ce qu'un panier vous ajoute réellement

La partie technique est la plus simple de l'histoire. Ce qui change, c'est tout ce qui vient après.

Les fiches produits. Chaque référence demande des photos correctes, une description, des dimensions, un prix, un stock. Multipliez par le nombre d'articles et vous obtenez le vrai chantier.

Le stock. Un article vendu en ligne alors qu'il vient de partir en boutique produit un client mécontent et un remboursement. Tenir un stock synchronisé demande une organisation, pas une intention.

L'expédition. Emballage, pesée, tarifs, transporteur, suivi, colis perdus. C'est du temps tous les jours, pas une fois par mois.

Les retours et le droit de rétractation. Un client peut changer d'avis dans un délai légal, et vous devez avoir prévu ce que ça implique, y compris pour les frais.

Le service client. Où est ma commande, la taille ne va pas, l'article est arrivé cassé. Ces messages arrivent le soir et le week-end.

Les obligations légales. Conditions générales de vente, information précontractuelle, affichage des prix et des frais avant validation, droit de rétractation. On sort du cadre d'un site vitrine, dont le minimum est décrit dans [mentions légales et RGPD](/blog/mentions-legales-rgpd-cookies-site).

## La question qui tranche

Elle tient en une ligne : est ce que quelqu'un qui ne vous connaît pas a une raison d'acheter ce produit chez vous plutôt qu'ailleurs, sur internet, sans vous parler.

Si la réponse est le prix ou la rapidité, oubliez. Vous ne battrez pas les grandes plateformes sur ces deux terrains, et vous vous épuiserez à essayer.

Si la réponse est que le produit est unique, local, fabriqué par vous, introuvable ailleurs, ou qu'il s'accompagne d'un conseil que personne d'autre ne donne, alors il y a peut-être quelque chose à construire.

Entre les deux, il y a une réponse honnête que peu de gens acceptent d'entendre : vous n'avez pas besoin de vendre en ligne, vous avez besoin qu'on vous trouve.

## Ce qui manque vraiment à la plupart des commerces

Quand un commerçant me parle de boutique en ligne, je commence toujours par regarder ce qui existe déjà.

Neuf fois sur dix, les horaires de la fiche Google sont faux, il n'y a pas de photo de la devanture, les avis n'ont pas de réponse, et personne ne répond aux messages.

Corriger ces quatre points rapporte davantage, tout de suite, que n'importe quel panier. Ça ne coûte rien et ça prend une semaine. Le détail est dans [commerce de centre-ville](/blog/commerce-centre-ville-visibilite).

## Les solutions intermédiaires, largement sous-utilisées

Entre le site vitrine et la boutique complète, il existe des options qui règlent le besoin réel sans la charge.

Le retrait en magasin sur commande. Le client réserve ou commande, il paie sur place, vous n'expédiez rien. Vous supprimez d'un coup l'expédition, les retours et une bonne partie des obligations liées à la vente à distance.

La commande par message. Beaucoup de commerces prennent déjà des commandes par téléphone ou par messagerie. Formaliser ce canal, l'afficher clairement et y répondre vite fait le travail, sans aucun développement.

La prise de rendez vous en ligne. Pour un salon, un praticien, un garage, un coach, c'est ce qui manque, pas un panier.

L'acompte payé en ligne. Un lien de paiement pour bloquer une date ou valider un devis, sans monter de boutique.

Le catalogue sans prix ni panier. Vous montrez ce que vous faites, les gens vous écrivent. C'est ce qui convient à la plupart des artisans dont chaque projet est chiffré après visite.

## Les cas où la boutique se justifie

Elle a du sens quand plusieurs conditions sont réunies en même temps.

Le produit est standardisé, transportable, et il ne demande pas d'essayage ni de conseil complexe.

Vous avez du volume, ou une marge suffisante pour absorber le temps de gestion.

Quelqu'un, chez vous, s'en occupe. Pas "on verra", pas "je le ferai le soir". Une boutique sans personne dédiée s'arrête au bout de six mois avec des commandes non traitées, ce qui est pire que de ne pas en avoir.

Vous avez déjà une demande. Des gens vous demandent déjà s'ils peuvent commander à distance. C'est le meilleur signal qui existe, et il vaut mieux que n'importe quelle étude.

## Le test à faire avant de dépenser

Avant de construire quoi que ce soit, faites l'expérience à la main pendant deux mois.

Annoncez que vous prenez les commandes par message ou par téléphone, avec un retrait sur place ou un envoi que vous gérez vous même.

Comptez les demandes. Notez le temps que ça vous prend. Regardez si ce sont vraiment de nouveaux clients ou vos clients habituels qui commandent autrement.

Deux mois plus tard, vous saurez si une boutique se justifie, et vous saurez surtout ce qu'elle doit contenir. Ça vous évitera de payer pour des fonctions que vous n'utiliserez jamais, ce qui est le principal poste de gaspillage sur ce type de projet.

## Ma position

Je fais des sites vitrines et des pages qui amènent des demandes. Quand un client a réellement besoin d'une boutique complète, je le dis, et j'oriente vers les bons outils plutôt que d'improviser un chantier que je ne suivrais pas correctement.

Ce que je fais, en revanche, c'est enlever les frictions : rendre le contact évident, permettre de réserver, afficher les bons prix et les bons horaires, et rendre visible sur Google. Pour la plupart des commerces et des artisans de Savoie, c'est là que se trouve le chiffre d'affaires manquant.

Si vous hésitez entre les deux, [écrivez moi](/contact) en décrivant ce que vous vendez. Je vous dirai franchement ce que je ferais à votre place.
    `,
  },
  {
    id: '72',
    slug: 'accessibilite-site-web-tpe',
    titleFr: 'L\'accessibilité d\'un site, sans le jargon',
    excerptFr:
      "On en parle comme d'une contrainte légale. C'est d'abord une question de clients qui repartent parce qu'ils n'arrivent pas à lire.",
    seoTitleFr: 'Accessibilité d\'un Site Web : l\'Essentiel',
    seoDescFr:
      "Contrastes, tailles de texte, images, formulaires : les corrections d'accessibilité qui changent vraiment quelque chose sur un site de TPE.",
    readTime: '8 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-10',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['accessibilité', 'contraste', 'lisibilité', 'ergonomie'],
    related: [
      'vitesse-site-web-mobile',
      'mon-site-ne-genere-aucun-contact',
      'formulaire-contact-qui-convertit',
    ],
    faqFr: [
      {
        q: 'L\'accessibilité est-elle obligatoire pour un site vitrine ?',
        a: "Le cadre légal vise principalement le secteur public et, depuis 2025, certains services et sites marchands, avec des seuils qui exemptent une grande partie des microentreprises. Les règles évoluent, donc vérifiez votre cas plutôt que de vous fier à une règle générale.",
      },
      {
        q: 'Combien de personnes sont concernées ?',
        a: "Bien plus qu'on ne l'imagine, parce que ça ne concerne pas que le handicap déclaré. Une presbytie, un téléphone en plein soleil, une main occupée ou une connexion faible produisent les mêmes difficultés, et ça touche une part importante de vos visiteurs.",
      },
      {
        q: 'Faut-il un outil ou un audit coûteux ?',
        a: "Pas pour commencer. Les quatre corrections les plus rentables se font à l'œil et avec un vérificateur de contraste gratuit : lisibilité du texte, taille des zones cliquables, description des images, et libellés de formulaire.",
      },
    ],
    contentFr: `
Le mot fait peur parce qu'il est associé à des normes, des sigles et des audits.

Je vais le prendre par l'autre bout : l'accessibilité, c'est le fait que quelqu'un arrive à lire votre page et à cliquer sur le bon bouton. Vu comme ça, ça concerne tout le monde.

## Ce n'est pas une question de handicap déclaré

L'erreur de cadrage habituelle consiste à penser à une petite minorité.

En réalité, les mêmes obstacles gênent des gens dans des situations très ordinaires.

Un client de soixante ans qui a besoin de lunettes pour lire et qui ne les a pas sur lui.

Quelqu'un qui consulte votre site dehors, en plein soleil, où un gris clair sur blanc devient invisible.

Une personne qui tient son téléphone d'une main dans le bus et qui rate un bouton de dix pixels.

Un visiteur sur une connexion faible, dont les images n'arrivent pas, et qui ne comprend rien à la page.

Ce sont vos clients. Si votre site les fait repartir, le sujet n'est pas réglementaire, il est commercial.

## Le cadre légal, en deux phrases honnêtes

Les obligations françaises et européennes visent d'abord les services publics, puis, depuis 2025, certains services numériques et sites marchands. Des seuils de taille et de chiffre d'affaires exemptent une grande partie des microentreprises.

Les textes évoluent, et je ne suis pas juriste. Si vous vendez en ligne ou si vous fournissez un service numérique, renseignez vous sur votre situation précise plutôt que de vous fier à un article de blog, y compris celui-ci.

Pour un site vitrine d'artisan ou de TPE, le sujet reste donc surtout une question de bon sens commercial. Ce qui suit s'applique dans tous les cas.

## Les quatre corrections qui comptent

Elles se font sans outil compliqué et couvrent l'essentiel des problèmes réels.

### Le contraste du texte

C'est le premier défaut sur les sites que j'audite, et de loin.

Le gris clair sur fond blanc est à la mode depuis dix ans. Il rend une maquette élégante sur l'écran d'un graphiste de trente ans, dans une pièce à l'éclairage contrôlé. Sur le téléphone d'un client de soixante ans, dehors, il disparaît.

La vérification est gratuite : cherchez un vérificateur de contraste en ligne, entrez la couleur de votre texte et celle du fond, et regardez le rapport. En dessous de 4,5 pour 1 sur du texte courant, c'est trop clair.

Ce site respecte cette règle, et ça m'a obligé à assombrir les textes secondaires. La page est un peu moins éthérée et beaucoup plus lisible. C'est un bon échange.

### La taille des zones cliquables

Un lien ou un bouton isolé doit pouvoir être touché avec un pouce, sans viser.

Les fautifs habituels : les icônes de réseaux sociaux en pied de page, les croix de fermeture, les flèches de carrousel, les menus déroulants trop serrés.

Le test est immédiat. Prenez votre téléphone, tenez le d'une main, et essayez de cliquer sur tout ce qui est cliquable. Ce que vous ratez, un client le ratera aussi, et lui ne recommencera pas trois fois.

### La description des images

Chaque image doit avoir un texte de remplacement qui décrit ce qu'elle montre.

Ça sert aux personnes qui utilisent un lecteur d'écran. Ça sert aussi quand une image ne charge pas, et ça aide Google à comprendre votre page, ce qui est un bénéfice secondaire non négligeable.

La règle pratique : décrivez ce qu'on voit, pas le nom du fichier. "Terrasse en bois de vingt mètres carrés réalisée à Ugine" plutôt que "IMG_4471". Les images purement décoratives, elles, doivent être marquées comme telles pour ne pas encombrer la lecture.

### Les formulaires

Trois défauts fréquents, tous coûteux.

Le libellé qui n'existe que comme texte gris à l'intérieur du champ, et qui disparaît dès qu'on commence à taper. La personne ne sait plus ce qu'elle remplit.

Le message d'erreur qui n'indique pas quel champ pose problème, ou qui efface tout ce qui avait été saisi.

Les champs obligatoires signalés uniquement par une couleur. Une couleur seule n'est pas une information pour tout le monde.

Un formulaire court, avec des libellés visibles et des erreurs claires, convertit mieux pour tout le monde. C'est le sujet de [un formulaire de contact qui convertit](/blog/formulaire-contact-qui-convertit).

## Le reste, par ordre d'utilité

Ne jamais transmettre une information par la seule couleur. Ajoutez un mot, une icône, un soulignement.

Garder une hiérarchie de titres cohérente. Un seul titre principal par page, puis des sous-titres dans l'ordre. Ça structure la lecture pour un lecteur d'écran comme pour un humain pressé, et Google s'en sert aussi.

Permettre de naviguer au clavier. Passez sur votre page en appuyant sur la touche de tabulation : vous devez voir où vous êtes à chaque étape. Si l'indicateur a été supprimé pour des raisons esthétiques, c'est une mauvaise décision.

Sous-titrer les vidéos. La majorité des gens regardent sans le son, et c'est vrai sur un site comme sur les réseaux, comme je l'ai écrit dans [les sous-titres](/blog/sous-titres-videos).

Éviter les animations qui bougent en permanence, et respecter le réglage de réduction des animations quand le visiteur l'a activé sur son téléphone.

## Le test de dix minutes

À faire aujourd'hui sur votre propre site.

Ouvrez le sur votre téléphone, dehors, en plein jour. Ce que vous n'arrivez pas à lire est un problème.

Augmentez la taille du texte dans les réglages de votre téléphone et rechargez. La mise en page doit tenir.

Naviguez d'une seule main, avec le pouce. Comptez ce que vous ratez.

Coupez le son sur une vidéo. Comprenez-vous encore le message.

Aucun de ces tests ne demande de compétence technique, et chacun révèle des choses qu'un audit payant vous facturerait.

## Pourquoi ça se recoupe avec le reste

Un site accessible est presque toujours un site plus rapide, plus clair et qui convertit mieux. Ce n'est pas une coïncidence : les deux visent la même chose, enlever ce qui gêne entre le visiteur et l'information.

C'est aussi pour ça que je ne traite pas l'accessibilité comme une case à cocher en fin de projet. Un texte lisible, des boutons touchables et des images décrites font partie du travail normal.

Si vous voulez que je regarde votre site sur ces points, [envoyez moi l'adresse](/contact). Je vous renvoie ce que je vois, sans jargon.
    `,
  },
  {
    id: '73',
    slug: 'trouver-mots-cles-clients',
    titleFr: 'Trouver les mots que vos clients tapent réellement',
    excerptFr:
      "Vous employez le vocabulaire de votre métier. Vos clients emploient celui de leur problème. Tout l'écart est là.",
    seoTitleFr: 'Trouver les Mots-clés de ses Clients',
    seoDescFr:
      "Comment savoir ce que vos clients tapent sur Google, sans outil payant, et quoi en faire concrètement sur votre site et vos vidéos.",
    readTime: '9 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-09',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['mots-clés', 'recherche', 'intention', 'contenu'],
    related: [
      'etre-premier-google-dans-sa-ville',
      'quoi-ecrire-sur-son-site',
      'combien-de-temps-referencement-google',
    ],
    faqFr: [
      {
        q: 'Faut-il un outil payant pour trouver ses mots-clés ?',
        a: "Non, pas pour une entreprise locale. Les suggestions de Google, les questions associées, vos propres appels et les avis de vos concurrents donnent une matière plus fiable que n'importe quel outil, parce qu'elle vient de vrais clients de votre zone.",
      },
      {
        q: 'Vaut-il mieux viser un mot très recherché ou précis ?',
        a: "Précis, presque toujours. Une recherche très générale est disputée par des acteurs nationaux et attire des gens loin de la décision. Une recherche précise attire moins de monde, mais des gens qui vont acheter.",
      },
      {
        q: 'Combien de mots-clés par page ?',
        a: "Un sujet par page, pas un mot par page. Une page qui traite bien une question ressort sur des dizaines de formulations différentes de cette même question, sans que vous ayez à les lister.",
      },
    ],
    contentFr: `
Un chauffagiste me disait qu'il voulait sortir sur "installation de systèmes thermodynamiques".

Personne ne tape ça. Les gens tapent "chauffe-eau qui ne chauffe plus", "remplacer une vieille chaudière", ou "combien coûte une pompe à chaleur".

Tout l'écart entre un site qui ramène des demandes et un site qui dort tient dans cette différence de vocabulaire.

## Trois familles de recherches

Elles n'ont pas la même valeur, et il faut savoir laquelle vous visez.

Les recherches d'information. "Pourquoi mon radiateur fait du bruit". La personne cherche à comprendre. Elle n'achète pas aujourd'hui, mais elle se souviendra de qui lui a expliqué.

Les recherches de comparaison. "Pompe à chaleur ou chaudière gaz", "prix remplacement chaudière". La personne compare, elle est proche de décider.

Les recherches d'action. "Chauffagiste Albertville", "dépannage chaudière en urgence". La personne veut appeler quelqu'un maintenant.

La plus grosse erreur consiste à ne travailler que la troisième famille, parce qu'elle paraît la plus rentable. Elle est aussi la plus disputée, et elle représente une petite part du volume total. Les deux premières amènent des gens plus tôt, moins cher, et vous placent en position de conseiller plutôt que de fournisseur.

## Les sources gratuites, dans l'ordre d'utilité

### Vos propres appels

C'est la meilleure source, et elle est déjà chez vous.

Notez pendant deux semaines les mots exacts que les gens emploient au téléphone. Pas votre reformulation, leurs mots à eux, y compris quand ils sont approximatifs.

Un client qui dit "le truc qui fuit sous l'évier" vous donne une formulation qu'aucun outil ne vous fournira, et c'est très probablement ce qu'il a tapé avant d'appeler.

C'est aussi la méthode de base pour écrire les pages d'un site, comme je l'explique dans [quoi écrire sur son site](/blog/quoi-ecrire-sur-son-site).

### Les suggestions de Google

Ouvrez une navigation privée, tapez votre métier, et regardez ce que Google propose avant même que vous ayez fini.

Ces suggestions viennent de recherches réelles. Faites la même chose en tapant votre métier suivi de "pourquoi", "comment", "combien", "quel", et le nom de votre commune.

### Les questions associées

Sur une page de résultats, un bloc propose des questions que d'autres gens ont posées. Dépliez en une : d'autres apparaissent.

En dix minutes vous obtenez trente questions réelles, formulées par des humains. Chacune est un paragraphe, une page ou une vidéo.

### Le bas de la page de résultats

Tout en bas, Google propose des recherches associées. Même principe, autre angle.

### Les avis de vos concurrents

Source largement ignorée, et excellente.

Lisez les avis Google de trois concurrents de votre zone, les bons et les mauvais. Vous verrez les mots que les clients emploient, ce qu'ils ont apprécié, et surtout ce qui les a énervés.

Ce qui revient dans les reproches est une page à écrire chez vous. Si trois avis parlent de devis jamais envoyés, une page qui promet un devis sous quarante-huit heures fait mieux que n'importe quelle optimisation.

### Les groupes de commune

Sur Facebook, les groupes d'entraide de village et de vallée sont pleins de "quelqu'un connaît un bon", suivi d'un métier et d'un contexte.

Vous y lisez le vocabulaire exact et les critères de choix réels des gens de votre zone. Pour une entreprise locale de Savoie, c'est plus utile qu'un outil de mots-clés international.

## Ce qui compte plus que le volume

On m'objecte souvent qu'une expression est trop peu recherchée pour valoir une page.

Deux réponses.

D'abord, les volumes affichés par les outils sont peu fiables à l'échelle d'une commune. Une expression annoncée à dix recherches par mois peut en faire davantage localement, et dix recherches par mois de gens qui veulent un devis valent mieux que mille curieux.

Ensuite, une page bien écrite ne ressort pas sur une expression, elle ressort sur des dizaines de formulations voisines que vous n'aviez pas prévues. C'est le cas de la plupart des articles de ce site : ils reçoivent des visites sur des questions que je n'avais pas listées.

Le seul volume qui compte, c'est le nombre d'appels que vous recevez.

## Quoi en faire, concrètement

Une page par sujet, pas par mot. Regroupez les questions qui appellent la même réponse, et faites en une page qui répond vraiment.

Utilisez les mots de vos clients dans les titres. Si les gens disent "chauffe-eau", écrivez "chauffe-eau", pas "production d'eau chaude sanitaire".

Répondez à la question dans les deux premières phrases. C'est ce que veut le lecteur, et c'est aussi ce que reprennent les moteurs de réponse quand ils citent une page.

Créez une page par commune uniquement si vous avez quelque chose de spécifique à y écrire. Vingt pages identiques avec le nom de la ville changé sont détectées et ignorées, quand elles ne dévalorisent pas le site entier.

Et surtout, n'écrivez pas pour placer un mot. Un texte bourré de répétitions est illisible, donc les gens partent, donc Google en tire les conséquences. La méthode fiable reste d'écrire pour la personne qui va lire.

## Le rythme

Deux ou trois questions traitées par mois suffisent. Tenu un an, ça fait trente pages qui répondent chacune à une vraie recherche, et qui continuent de travailler des années après.

Les délais avant que ça produise quelque chose sont détaillés dans [combien de temps avant d'être référencé](/blog/combien-de-temps-referencement-google). Ce n'est pas rapide, et c'est ce qui décourage la plupart des gens, ce qui laisse la place libre à ceux qui tiennent.
    `,
  },
  {
    id: '74',
    slug: 'google-ads-ou-referencement-naturel',
    titleFr: 'Google Ads ou référencement naturel : où mettre son argent',
    excerptFr:
      "Je ne fais pas de publicité en ligne, donc je n'ai rien à vous vendre là dessus. Voilà comment je poserais l'arbitrage.",
    seoTitleFr: 'Google Ads ou Référencement Naturel',
    seoDescFr:
      "Publicité Google ou référencement naturel pour une TPE de Savoie : ce que chacun coûte, ce qu'il rapporte, et dans quel ordre les envisager.",
    readTime: '8 min',
    categoryFr: 'Stratégie',
    categorySlug: 'strategie',
    date: '2026-08-06',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['google ads', 'publicité', 'seo', 'budget'],
    related: [
      'combien-de-temps-referencement-google',
      'etre-premier-google-dans-sa-ville',
      'creer-fiche-google-business',
    ],
    faqFr: [
      {
        q: 'La publicité Google fait-elle monter le référencement naturel ?',
        a: "Non. Ce sont deux systèmes séparés, et payer pour des annonces n'améliore pas votre position dans les résultats naturels. En revanche, une campagne montre quels mots amènent réellement des demandes, ce qui aide à décider quelles pages écrire.",
      },
      {
        q: 'Faut-il un budget minimum pour Google Ads ?',
        a: "Il faut surtout assez de budget pour apprendre avant de conclure. Une campagne à quelques dizaines d'euros par mois produit trop peu de données pour savoir si elle fonctionne, et beaucoup de gens s'arrêtent en pensant que ça ne marche pas.",
      },
      {
        q: 'Que se passe-t-il quand on arrête de payer ?',
        a: "La visibilité s'arrête le jour même. C'est la différence de fond avec le référencement naturel et les avis, qui continuent de travailler après l'arrêt de l'effort.",
      },
    ],
    contentFr: `
Autant le dire tout de suite : je ne fais pas de publicité Google ni Meta. Ce n'est pas dans mes compétences et je préfère l'annoncer plutôt que d'improviser.

Ça me met dans une position confortable pour en parler, puisque je n'ai rien à vous vendre dessus.

## Deux choses qui n'ont rien à voir

La publicité achète une place, immédiatement, pour la durée où vous payez. Vous décidez le matin, vous apparaissez l'après-midi, et vous disparaissez le jour où vous coupez.

Le référencement naturel gagne une place, lentement, et la garde ensuite sans paiement récurrent. Il demande du temps et du contenu, pas un budget mensuel.

L'un est une location, l'autre est une construction. Ce n'est ni mieux ni moins bien, ce sont deux natures de dépense différentes.

Et non, payer des annonces ne fait pas monter vos résultats naturels. Les deux systèmes sont séparés.

## Ce que la publicité fait bien

Elle est immédiate. C'est son vrai avantage, et il est réel.

Elle est utile quand vous ouvrez et que personne ne vous connaît. Quand vous avez une offre limitée dans le temps. Quand vous lancez une activité nouvelle et que vous voulez savoir si le marché existe avant d'y consacrer six mois.

Elle est aussi utile comme outil de mesure. Une campagne de quelques semaines vous dit quels mots amènent des appels, ce qui vous évite d'écrire dix pages sur un sujet dont personne ne veut. C'est un usage souvent négligé et intelligent.

## Ce que la publicité fait mal

Elle s'arrête net. Le jour où vous coupez, la visibilité disparaît, et vous n'avez rien accumulé.

Elle coûte de plus en plus cher à mesure que d'autres enchérissent sur les mêmes mots.

Elle ne répare rien. Envoyer des gens payants vers une page qui ne convertit pas revient à remplir un seau percé, et c'est le scénario le plus fréquent chez les TPE. Les causes sont dans [mon site ne génère aucun contact](/blog/mon-site-ne-genere-aucun-contact).

Et elle demande de la compétence. Une campagne mal réglée dépense un budget sur des recherches hors sujet ou hors zone. C'est précisément pour ça que je n'en fais pas.

## L'ordre que je conseille pour une TPE locale

Ce n'est pas neutre, et je l'assume.

D'abord, la fiche Google Business et les avis. Gratuit, rapide, et c'est ce qui produit le plus de demandes pour une entreprise locale. Voir [créer sa fiche Google Business](/blog/creer-fiche-google-business).

Ensuite, un site qui répond aux questions de vos clients et qui rend le contact évident. Sans ça, tout ce que vous ferez ensuite fuira.

Ensuite, du contenu régulier sur les questions réelles de votre zone. Lent au démarrage, cumulatif ensuite.

Et seulement après, éventuellement, de la publicité, si vous avez un besoin de vitesse précis et un budget que vous pouvez tenir plusieurs mois.

Beaucoup de gens font l'inverse. Ils achètent du trafic avant d'avoir un endroit correct où l'envoyer, et ils concluent que la publicité ne marche pas.

## Les cas où je conseille clairement la publicité

Une ouverture avec une date. Vous ne pouvez pas attendre six mois que Google vous découvre.

Un métier d'urgence, où les gens tapent et appellent dans la minute. Dépannage, serrurerie, remorquage. La position immédiate a une valeur réelle.

Un marché de niche où votre clientèle est trop petite ou trop dispersée pour que le référencement local suffise.

Un test avant investissement. Trois semaines de campagne pour savoir si une demande existe, avant d'engager un chantier de contenu.

## Les cas où je déconseille

Vous n'avez pas encore de fiche Google correcte. Corrigez d'abord ce qui est gratuit.

Votre site ne dit ni vos prix, ni votre zone, ni comment vous joindre. Vous paieriez pour des gens qui repartent.

Vous ne pouvez pas tenir le budget plus de deux mois. Une campagne arrêtée trop tôt ne vous apprend rien et l'argent est perdu.

Vous comptez sur la publicité pour compenser un problème de fond. Un délai de réponse de trois jours ou des avis à deux étoiles ne se règlent pas avec un budget d'annonces.

## Si vous vous lancez quand même

Quelques repères que je donne systématiquement.

Limitez la zone géographique très strictement. Payer pour des clics venant de Lyon quand vous travaillez autour d'Albertville est le gaspillage le plus courant.

Excluez les recherches inutiles. Les mots "gratuit", "emploi", "salaire", "définition" attirent des gens qui n'achèteront jamais.

Envoyez les gens sur une page dédiée à ce qu'annonce la publicité, pas sur votre page d'accueil. Le format qui fonctionne est décrit dans [ce qui fait une landing page efficace](/blog/landing-page-efficace).

Mesurez les appels, pas les clics. Un tableau de bord plein de clics ne dit rien sur votre chiffre d'affaires.

Et méfiez vous des appels de démarchage qui promettent de gérer vos annonces avec une garantie de résultat. Personne ne garantit un résultat sur une enchère, et Google ne vous appellera pas pour vous vendre ça.

## Ce que je fais, moi

Je travaille sur ce qui reste quand on arrête de payer : le site, le contenu, la fiche Google, les avis, et [la production de vidéos tous les mois](/reseaux-sociaux).

C'est plus lent, et c'est ce qui fait qu'une entreprise locale finit par ne plus avoir besoin d'acheter sa visibilité. Quand un client a réellement besoin de publicité, je le dis et j'oriente vers quelqu'un dont c'est le métier. Vous pouvez [m'écrire](/contact) si vous voulez qu'on en parle franchement.
    `,
  },
];
