import type { BlogPost } from './types';

/**
 * Cluster "problemes concrets" : afficher ses prix, rater moins d'appels,
 * site pirate, emails en indesirables, filmer avec son equipe.
 */
export const pratiquePosts: BlogPost[] = [
  {
    id: '115',
    slug: 'afficher-ses-prix-ou-pas',
    titleFr: 'Faut-il afficher ses prix sur son site',
    excerptFr:
      "La question qui divise le plus, et sur laquelle je change d'avis selon les métiers. Voilà comment je tranche à chaque fois.",
    seoTitleFr: 'Faut-il Afficher ses Prix sur son Site',
    seoDescFr:
      "Afficher ou non ses tarifs quand on est artisan, commerçant ou indépendant : les cas où ça rapporte, ceux où ça coûte, et les solutions intermédiaires.",
    readTime: '8 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['prix', 'tarifs', 'transparence', 'conversion'],
    related: [
      'combien-coute-un-site-web',
      'devis-qui-se-signe',
      'quoi-ecrire-sur-son-site',
    ],
    faqFr: [
      {
        q: 'Afficher ses prix fait-il fuir les clients ?',
        a: "Ça fait fuir ceux qui n'avaient pas le budget, ce qui est un gain de temps, pas une perte. Ce qui fait fuir les clients solvables, c'est l'absence totale d'indication, parce qu'elle leur laisse imaginer le pire.",
      },
      {
        q: 'Comment afficher un prix quand tout est sur mesure ?',
        a: "En donnant un point de départ, une fourchette ou une méthode de chiffrage, avec ce qui fait varier le montant. Vous n'êtes jamais obligé de donner un prix ferme pour donner une information utile.",
      },
      {
        q: 'Un concurrent peut-il utiliser mes prix contre moi ?',
        a: "Il connaît déjà vos prix : il a vu vos devis chez des clients communs. Ce que l'affichage change, c'est que vos clients potentiels les connaissent aussi, et ce sont eux qui décident.",
      },
    ],
    contentFr: `
C'est la question sur laquelle j'ai le plus d'échanges tendus, et je vais donner ma position franchement, y compris quand elle me met en contradiction avec ce que je fais sur mon propre site.

## Ce qui se passe quand il n'y a rien

Un visiteur arrive, il lit, il est intéressé, il cherche un ordre de grandeur, il ne trouve rien.

Trois réactions possibles, et une seule vous est favorable.

Il vous appelle pour demander. C'est ce que vous espériez, et ça concerne une minorité des gens.

Il imagine le pire et il part. Sans indication, un visiteur suppose que c'est cher, parce que c'est ce que suppose tout le monde.

Il va voir un concurrent qui, lui, a donné un chiffre, et il l'utilise comme référence. Vous avez perdu la comparaison sans y avoir participé.

## L'argument de la fuite, examiné

L'objection habituelle est que le prix fait fuir. Elle est vraie et elle est mal interprétée.

Les gens qui fuient devant un prix affiché sont ceux dont le budget ne correspond pas. Ces gens-là ne vous auraient pas acheté de toute façon. Ils vous auraient simplement coûté un appel, une visite et un devis.

Faites le calcul : trois visites de devis inutiles par mois, c'est une journée de travail perdue. Sur un an, c'est plus de dix journées.

Afficher un ordre de grandeur ne fait pas fuir les clients. Il fait fuir les non-clients, ce qui n'est pas la même chose.

## Ce que vous pouvez afficher, même en sur mesure

Vous n'avez presque jamais le choix entre un tarif ferme et rien du tout. Il existe cinq niveaux intermédiaires.

Un point de départ. "Une salle de bain complète démarre autour de X euros."

Une fourchette. "La plupart de nos chantiers se situent entre X et Y."

Un prix unitaire. "Compter environ X euros du mètre carré posé, selon le matériau."

Une méthode de chiffrage. "Le prix dépend de trois choses : la surface, l'état du support et le matériau choisi. Voilà comment chacune joue."

Un exemple chiffré. "Voici un chantier réel que nous avons fait à Ugine : trente mètres carrés, tel matériau, tel montant."

Ce dernier format est le plus convaincant de tous, et presque personne ne l'utilise.

## Les métiers où il faut afficher

Ceux dont la prestation est standardisée : coiffure, esthétique, garage, entretien, coaching, cours, restauration. Ne pas afficher y est perçu comme une anomalie.

Ceux où les gens comparent activement avant d'appeler. Si votre recherche principale contient le mot "prix" ou "tarif", vos clients cherchent une réponse. La méthode pour le vérifier est dans [trouver les mots que vos clients tapent](/blog/trouver-mots-cles-clients).

Ceux où vous êtes plus cher que la moyenne. C'est contre-intuitif et c'est le cas où l'affichage sert le plus : il vous permet d'expliquer pourquoi, au lieu de laisser le client découvrir l'écart au moment du devis et partir sans explication.

Ceux qui reçoivent beaucoup de demandes hors budget. Le filtre vous rend des journées.

## Les métiers où c'est plus discutable

Les projets dont les écarts sont énormes d'un chantier à l'autre, où un chiffre isolé induirait en erreur.

Les prestations où la valeur dépend fortement du contexte du client.

Les marchés professionnels où la négociation fait partie du processus.

Même dans ces cas, l'absence totale d'information reste rarement la bonne réponse. Il vaut mieux expliquer la méthode de chiffrage que de ne rien dire.

## Mon propre cas, pour être honnête

Sur ce site, je n'affiche pas de prix pour les sites web. Je l'assume et je vais expliquer pourquoi, parce que c'est exactement le raisonnement à tenir.

Les écarts entre deux projets sont trop importants pour qu'un chiffre isolé ait un sens. Une page unique et un site complet avec rédaction, structure et suivi n'ont pas le même coût, et donner un seul montant tromperait tout le monde.

En revanche, j'explique en détail ce qui fait varier le prix, ce qui est inclus, et comment je chiffre. J'ai écrit [un article entier sur le coût réel d'un site](/blog/combien-coute-un-site-web) qui donne des ordres de grandeur et les variables.

Et sur mon offre de réseaux sociaux, où la prestation est standardisée, j'affiche un plancher : à partir de 890 euros par mois. Parce que là, un chiffre a un sens.

C'est ça, la règle : affichez dès que le chiffre est informatif, expliquez quand il ne l'est pas.

## Où le mettre

Pas uniquement sur une page tarifs que personne n'ouvre.

Sur la page de chaque prestation, à l'endroit où la personne se pose la question.

Dans vos réponses aux messages, plutôt que de renvoyer systématiquement vers un devis. Le sujet est traité dans [répondre aux commentaires et aux messages](/blog/repondre-commentaires-messages-prives).

Sur votre fiche Google Business, dans la description des prestations quand c'est possible.

Et dans le devis lui-même, avec le détail par poste, comme décrit dans [un devis qui se signe](/blog/devis-qui-se-signe).

## Le test à faire ce soir

Ouvrez votre site, mettez-vous à la place de quelqu'un qui ne vous connaît pas, et cherchez combien ça coûte.

Si vous ne trouvez rien en trente secondes, vos visiteurs non plus.

Si vous trouvez, demandez-vous si l'information est utile. "Sur devis" n'est pas une information, c'est une absence d'information avec deux mots dessus.
    `,
  },
  {
    id: '116',
    slug: 'rater-moins-d-appels',
    titleFr: 'Rater moins d\'appels quand on travaille avec les mains',
    excerptFr:
      "Le levier le plus rentable de toute cette liste, et il ne demande ni site, ni budget, ni compétence technique.",
    seoTitleFr: 'Rater Moins d\'Appels Quand on est Artisan',
    seoDescFr:
      "Les appels manqués sont la première fuite de clients chez les artisans. Cinq façons de les récupérer sans être collé au téléphone.",
    readTime: '7 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-12',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['appels', 'réactivité', 'artisan', 'organisation'],
    related: [
      'whatsapp-business-entreprise-locale',
      'formulaire-contact-qui-convertit',
      'electricien-plombier-chauffagiste-visibilite',
    ],
    faqFr: [
      {
        q: 'Que faire quand on ne peut pas décrocher ?',
        a: "Rappeler dans la journée, et le faire savoir. Un message d'accueil qui annonce un délai de rappel réel retient une grande partie des gens, alors qu'une sonnerie dans le vide en fait partir la majorité.",
      },
      {
        q: 'Faut-il un secrétariat téléphonique ?',
        a: "Cela se justifie quand le volume d'appels manqués dépasse ce que vous pouvez rappeler, et quand un chantier moyen vaut nettement plus que le coût mensuel du service. Faites le calcul avec vos chiffres avant de vous engager.",
      },
      {
        q: 'Un formulaire remplace-t-il le téléphone ?',
        a: "Non, il le complète. Sur un métier local, l'appel reste majoritaire, en particulier chez les clients de plus de cinquante ans. Un formulaire capte ceux qui n'osent pas appeler, ce qui n'est pas le même public.",
      },
    ],
    contentFr: `
On peut passer six mois à travailler son référencement, publier trois fois par semaine, refaire son site, et perdre la moitié du bénéfice sur un point que personne ne regarde : le téléphone qui sonne dans une poche, sous une combinaison, à côté d'une disqueuse.

C'est le levier le plus rentable de tout ce que j'écris ici, et il ne coûte rien.

## Ce que fait quelqu'un qui n'a pas de réponse

Il appelle le suivant. C'est tout.

Sur un besoin urgent, il appelle dans la minute. Sur un projet réfléchi, il appelle deux ou trois entreprises dans la même demi-heure, parce qu'il a enfin trouvé le temps de s'en occuper.

Celui qui décroche prend le rendez vous. Les autres reçoivent parfois un rappel poli qui dit que c'est déjà réglé.

Vous ne saurez jamais combien vous en perdez. C'est ce qui rend cette fuite si coûteuse : elle est invisible.

## Le message d'accueil, dix minutes une fois

Le répondeur par défaut de votre opérateur ne dit rien d'utile et incite à raccrocher.

Enregistrez un message court, avec votre voix, qui contient trois choses : qui vous êtes, quand vous rappelez, et quoi faire en attendant.

"Bonjour, Julien Bernard, plomberie. Je suis en intervention, je rappelle tous les soirs entre 18 et 19 heures. Si c'est urgent, envoyez-moi un message avec votre commune et une photo, je regarde entre deux chantiers."

Ce message fait deux choses. Il retient la personne, parce qu'elle sait quand elle aura une réponse. Et il oriente vers un canal que vous pouvez traiter plus facilement.

Et si vous annoncez un délai, tenez-le. Un délai annoncé et raté est pire qu'un répondeur muet.

## Le créneau de rappel

Bloquez un moment fixe, tous les jours ouvrés, pour rappeler les numéros manqués.

Vingt minutes suffisent. L'important est que ce soit à heure fixe, sinon ça ne se fait pas.

Un rappel le soir même transforme une grande partie des appels manqués en demandes. Un rappel trois jours après ne transforme presque rien.

## Le canal écrit, en parallèle

Une partie de vos clients préfèrent écrire, en particulier les moins de quarante ans et les gens qui appellent depuis leur lieu de travail.

Une messagerie professionnelle avec un message d'absence honnête capte ces gens-là, et elle a un avantage énorme sur votre métier : le client peut envoyer une photo. Le détail est dans [WhatsApp Business quand on est artisan](/blog/whatsapp-business-entreprise-locale).

Et un formulaire court sur votre site, avec trois champs, capte ceux qui n'osent pas déranger. Voir [un formulaire de contact qui convertit](/blog/formulaire-contact-qui-convertit).

Ces canaux ne remplacent pas le téléphone. Ils récupèrent des gens qui, sinon, seraient partis.

## Le numéro cliquable, partout

Sur mobile, un numéro doit se composer d'un seul appui.

Vérifiez-le sur votre site, en haut de chaque page, pas seulement sur la page contact. Vérifiez-le sur votre fiche Google Business. Vérifiez-le dans votre signature d'email.

C'est un détail de quelques minutes qui produit un effet immédiat, et je le trouve manquant sur une majorité des sites d'artisans que je regarde.

## Les solutions quand le volume dépasse

Si vous ratez plus d'appels que vous ne pouvez en rappeler, il existe des sorties.

Un secrétariat téléphonique externalisé, qui prend les messages et filtre. Faites le calcul avec vos chiffres : si un chantier moyen vaut plusieurs milliers d'euros et que le service en coûte quelques dizaines par mois, l'arbitrage est vite fait.

Un renvoi vers un proche ou un salarié pendant les heures de chantier.

Un numéro dédié aux clients existants, séparé de celui affiché publiquement, pour ne pas noyer les urgences dans les nouvelles demandes.

Et la solution la moins chère : accepter de ne pas être joignable, mais le dire clairement et tenir le délai annoncé.

## Ce qui compte plus que la rapidité

Une nuance importante : rappeler vite ne sert à rien si la conversation ne mène nulle part.

Ayez sous la main votre disponibilité réelle, votre zone, vos ordres de grandeur de prix, et de quoi noter. Un appel où vous dites "je vous rappelle pour vous dire si je peux" est un appel à moitié perdu.

Et notez chaque demande, même celles que vous refusez. Ce sont ces notes qui vous diront, dans six mois, d'où viennent vos clients et ce que vous ratez. Voir [savoir si votre communication rapporte](/blog/mesurer-si-sa-communication-rapporte).

## Le test d'une semaine

Pendant sept jours, notez chaque appel manqué et ce qu'il est devenu.

Rappelé le jour même et abouti. Rappelé trop tard et perdu. Jamais rappelé.

À la fin de la semaine, vous aurez un chiffre. Pour beaucoup d'artisans, ce chiffre est le plus gros levier de leur année, et il ne demande aucun investissement.
    `,
  },
  {
    id: '117',
    slug: 'site-pirate-que-faire',
    titleFr: 'Votre site a été piraté : les premières heures',
    excerptFr:
      "Redirections bizarres, pages inconnues, avertissement de Google. Ce qu'il faut faire, dans l'ordre, et ce qu'il ne faut surtout pas faire.",
    seoTitleFr: 'Site Piraté : que Faire en Premier',
    seoDescFr:
      "Site infecté, pages inconnues, alerte Google : la marche à suivre pour reprendre la main, nettoyer, et éviter que ça recommence.",
    readTime: '8 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-10',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['piratage', 'sécurité', 'maintenance', 'urgence'],
    related: [
      'recuperer-site-web-acces-perdus',
      'search-console-pour-debutant',
      'faire-son-site-soi-meme-ou-pro',
    ],
    faqFr: [
      {
        q: 'Comment savoir si son site est piraté ?',
        a: "Les signaux les plus courants : des pages que vous n'avez pas créées apparaissent dans Google, le site redirige ailleurs depuis un téléphone, un avertissement s'affiche dans le navigateur, ou votre hébergeur vous signale une activité anormale.",
      },
      {
        q: 'Faut-il tout supprimer et repartir de zéro ?',
        a: "Pas avant d'avoir fait une copie complète de l'état actuel. Supprimer immédiatement détruit les traces qui permettent de comprendre par où l'intrusion est passée, et donc d'éviter qu'elle recommence.",
      },
      {
        q: "Combien de temps pour que Google retire l'avertissement ?",
        a: "En général quelques jours après le nettoyage et la demande de réexamen, si le site est réellement propre. Une demande faite sur un site encore infecté rallonge le délai.",
      },
    ],
    contentFr: `
Ça arrive surtout aux sites construits sur des systèmes très répandus et laissés sans mise à jour pendant des années. Ce n'est presque jamais une attaque ciblée : c'est un programme automatique qui parcourt le web à la recherche d'une faille connue.

Le résultat est le même : votre site devient une plateforme pour autre chose, et Google finit par le signaler.

## Reconnaître le problème

Les signes les plus fréquents.

Des pages que vous n'avez jamais créées apparaissent dans les résultats de Google quand vous cherchez votre site.

Le site redirige vers autre chose, souvent uniquement depuis un téléphone ou uniquement quand on arrive depuis un moteur de recherche. C'est fait exprès pour que vous ne le voyiez pas.

Le navigateur affiche un avertissement rouge.

Votre hébergeur vous écrit pour signaler une activité anormale, ou suspend le compte.

Vos emails partent en indésirables chez tout le monde, parce que le serveur a servi à envoyer du courrier indésirable.

Le site est brutalement très lent.

## Ce qu'il ne faut pas faire

Supprimer tout et réinstaller dans la panique. Vous détruisez les traces qui permettent de comprendre par où c'est entré, et vous réinstallerez souvent sur la même faille.

Se contenter de supprimer les pages visibles. Le problème est presque toujours ailleurs, dans des fichiers modifiés ou dans un compte administrateur créé par l'attaquant.

Restaurer une sauvegarde sans savoir depuis quand l'intrusion date. Vous risquez de restaurer une version déjà infectée.

Ignorer, en se disant que ça ne se voit pas. Google finit par écarter le site de ses résultats, et récupérer ensuite prend des semaines.

## La marche à suivre

Prévenez votre hébergeur en premier. La plupart ont une procédure, des outils d'analyse, et parfois un service de nettoyage. Ils voient aussi les journaux d'accès, qui indiquent par où l'intrusion est passée.

Faites une copie complète de l'état actuel : fichiers et base de données. Même infectée, elle sert à comprendre.

Changez tous les mots de passe : hébergement, administration du site, base de données, comptes de messagerie liés, et le compte de messagerie personnel qui sert à récupérer les accès. Utilisez des mots de passe différents partout, et activez la double authentification là où elle existe.

Regardez la console de recherche Google, dans la section sécurité. Elle vous dira si Google a détecté quelque chose et quel type de problème. Si vous ne l'avez pas installée, c'est le moment, et le mode d'emploi est dans [la console de recherche expliquée simplement](/blog/search-console-pour-debutant).

Nettoyez, ou faites nettoyer. Si votre site tourne sur un système répandu, il existe des outils spécialisés et des prestataires dont c'est le métier. Sur un site simple, restaurer une sauvegarde antérieure à l'infection puis mettre tout à jour suffit souvent.

Mettez tout à jour ensuite : le système, les extensions, les thèmes. Supprimez ce que vous n'utilisez pas, c'est là que sont la plupart des failles.

Demandez enfin le réexamen à Google, une fois seulement que le site est propre. Une demande faite trop tôt rallonge le délai.

## Prévenir, ce qui est beaucoup moins cher

Les mises à jour. C'est la cause la plus fréquente de très loin : un système laissé en version d'il y a trois ans, avec une faille publiquement documentée.

Les sauvegardes automatiques, stockées ailleurs que sur le serveur du site. Une sauvegarde qui vit sur la machine piratée ne sert à rien.

Le tri des extensions. Chaque module ajouté est une porte de plus. Supprimez ce qui ne sert pas, plutôt que de le désactiver.

Des mots de passe uniques et longs, avec double authentification sur l'hébergement et sur l'administration.

Et le certificat de sécurité à jour, celui qui met le petit cadenas. Il ne protège pas d'un piratage, mais son absence fait fuir les visiteurs et déclenche un avertissement.

## Le lien avec le choix de départ

C'est un des arguments que je donne quand on me demande la différence entre les solutions.

Un système très répandu et très extensible est aussi une cible permanente, et il demande un entretien réel. Un site plus simple, sans base de données ni extensions, offre beaucoup moins de prise.

Ce n'est pas une raison suffisante pour choisir l'un plutôt que l'autre, mais c'est un coût caché à intégrer dans la comparaison. Le reste des critères est dans [faire son site soi-même ou passer par quelqu'un](/blog/faire-son-site-soi-meme-ou-pro).

## Ce que ça coûte vraiment

Le nettoyage, si vous le confiez.

Les jours pendant lesquels le site est inaccessible ou signalé comme dangereux.

Les positions perdues sur Google, qui mettent parfois des semaines à revenir.

Et la confiance des gens qui ont vu l'avertissement.

Comparé à ça, une mise à jour trimestrielle et une sauvegarde automatique coûtent presque rien. C'est exactement le genre de chose que personne ne fait tant que ce n'est pas arrivé.
    `,
  },
  {
    id: '118',
    slug: 'emails-pro-en-indesirables',
    titleFr: 'Vos emails arrivent en indésirables : pourquoi et comment le régler',
    excerptFr:
      "Vos devis n'arrivent pas. Le client pense que vous ne répondez pas. Le problème est technique, invisible, et il se corrige.",
    seoTitleFr: 'Emails en Spam : Pourquoi et Comment Régler',
    seoDescFr:
      "Devis et réponses qui atterrissent en indésirables : les causes techniques, ce qu'il faut demander à son prestataire, et les réflexes qui évitent ça.",
    readTime: '8 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-09',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['email', 'délivrabilité', 'spam', 'technique'],
    related: [
      'nom-de-domaine-hebergement-comprendre',
      'newsletter-tpe-locale',
      'formulaire-contact-qui-convertit',
    ],
    faqFr: [
      {
        q: 'Pourquoi mes emails arrivent-ils en indésirables ?',
        a: "Le plus souvent parce que votre nom de domaine n'a pas les enregistrements techniques qui prouvent que vous êtes autorisé à envoyer en son nom. Sans eux, les messageries traitent vos messages comme suspects.",
      },
      {
        q: 'Est-ce que ça se corrige facilement ?',
        a: "Oui, en général en une intervention. Il s'agit d'ajouter trois enregistrements dans la configuration du domaine. Votre hébergeur ou votre prestataire fait ça en une demi-heure, et l'effet est durable.",
      },
      {
        q: 'Faut-il utiliser une adresse Gmail à la place ?',
        a: "C'est un contournement, pas une solution. Une adresse à votre nom de domaine inspire plus confiance et ne change pas quand vous changez de fournisseur. Mieux vaut la configurer correctement que d'y renoncer.",
      },
    ],
    contentFr: `
Il existe une panne qu'on ne soupçonne jamais et qui fait perdre des chantiers en silence. Vous envoyez vos devis, personne ne répond, et quand vous rappelez, le client dit n'avoir rien reçu.

Les devis arrivent dans le dossier des indésirables, parfois depuis des années.

## Pourquoi c'est un vrai sujet commercial

Un devis qui n'arrive pas produit exactement le même effet qu'un devis jamais envoyé, avec en plus le sentiment, chez le client, que vous ne le rappelez pas.

C'est la fuite la plus silencieuse qui existe, parce que rien ne vous signale le problème. Vous croyez avoir envoyé, le client croit que vous n'avez rien fait, et personne ne comprend.

## La cause principale, en français simple

Quand vous envoyez un email depuis une adresse à votre nom de domaine, la messagerie qui le reçoit se pose une question : est ce que cet expéditeur est bien autorisé à envoyer au nom de ce domaine ?

Pour y répondre, elle regarde des informations publiées dans la configuration technique de votre domaine. Il en existe trois, qui fonctionnent ensemble : l'une déclare quels serveurs ont le droit d'envoyer pour vous, la deuxième signe vos messages, la troisième dit ce qu'il faut faire quand les deux premières échouent.

Quand ces informations sont absentes ou incorrectes, vos messages ne sont pas rejetés, ils sont considérés comme douteux. Et un message douteux part en indésirables.

Les grandes messageries ont durci ces exigences ces dernières années. Ce qui passait il y a cinq ans ne passe plus.

## Ce que vous avez à faire

Vous n'avez pas à comprendre le détail technique. Vous avez à poser la bonne question.

Écrivez à votre hébergeur ou à la personne qui gère votre domaine : "est ce que mon domaine a des enregistrements SPF, DKIM et DMARC correctement configurés pour l'envoi de mes emails, et si non, pouvez-vous les mettre en place ?"

C'est une demande standard. Un hébergeur sérieux la traite en une demi-heure, et beaucoup proposent une configuration automatique.

Il existe aussi des outils gratuits en ligne qui testent votre configuration : vous envoyez un email à une adresse fournie, et l'outil vous renvoie un diagnostic. Faites ce test avant et après.

## Les autres causes, moins fréquentes

Une adresse d'expédition qui ne correspond pas au domaine réel de l'envoi. C'est le cas classique du formulaire de contact du site configuré pour envoyer en se faisant passer pour l'adresse du visiteur. Le formulaire doit envoyer depuis une adresse à vous, et mettre celle du visiteur en champ de réponse.

Une pièce jointe volumineuse, ou certains types de fichiers.

Un contenu qui ressemble à du courrier indésirable : tout en majuscules, plusieurs points d'exclamation, un message qui ne contient qu'une image et un lien.

Une adresse hébergée chez un fournisseur d'accès plutôt que sur votre domaine, avec une réputation dégradée.

Un serveur déjà utilisé par quelqu'un d'autre pour envoyer du courrier indésirable, sur un hébergement mutualisé.

Et parfois, un piratage : un site infecté qui a servi à envoyer des milliers de messages abîme durablement la réputation du domaine. Le sujet est traité dans [votre site a été piraté](/blog/site-pirate-que-faire).

## Les réflexes utiles

Utilisez une adresse à votre nom de domaine, pas une adresse de fournisseur d'accès. Elle inspire plus confiance et elle ne change pas quand vous déménagez. Le sujet est dans [nom de domaine et hébergement](/blog/nom-de-domaine-hebergement-comprendre).

Écrivez un objet clair et précis. "Devis salle de bain, 12 rue des Écoles" passe mieux et se retrouve mieux que "Votre devis".

Évitez d'envoyer un message qui ne contient qu'un lien de téléchargement, sans un mot.

Pour un envoi à plusieurs personnes, passez par un outil dédié plutôt que par votre boîte habituelle. C'est le point traité dans [la liste d'emails](/blog/newsletter-tpe-locale).

Et surtout, prévenez. Quand vous envoyez un devis important, un message ou un appel qui dit "je viens de vous envoyer le devis, regardez dans vos indésirables si vous ne le voyez pas" règle le problème immédiatement, en attendant la correction technique.

## Le test à faire aujourd'hui

Envoyez un devis type à trois adresses : une chez un grand fournisseur de messagerie, une chez un autre, et une adresse professionnelle d'un ami.

Regardez où il arrive.

Si un seul des trois le trouve en indésirables, vous avez un problème de configuration, et il vous coûte des chantiers depuis probablement longtemps.
    `,
  },
  {
    id: '119',
    slug: 'filmer-avec-son-equipe',
    titleFr: 'Filmer avec ses salariés sans mettre personne mal à l\'aise',
    excerptFr:
      "Vos salariés sont votre meilleur contenu et votre plus grosse résistance. La question du consentement se règle avant la caméra.",
    seoTitleFr: 'Filmer avec ses Salariés : Comment Faire',
    seoDescFr:
      "Impliquer son équipe dans les vidéos de l'entreprise : le cadre à poser, l'accord à demander, et comment filmer ceux qui ne veulent pas parler.",
    readTime: '8 min',
    categoryFr: 'Vidéo',
    categorySlug: 'video',
    date: '2026-08-07',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/video-smartphone-entreprise',
    tags: ['équipe', 'salariés', 'droit à l\'image', 'tournage'],
    related: [
      'parler-face-camera-timide',
      'recruter-avec-son-site-et-ses-reseaux',
      'temoignage-client-video',
    ],
    faqFr: [
      {
        q: 'Peut-on filmer un salarié sans son accord ?',
        a: "Non. Le droit à l'image s'applique, et le lien de subordination rend la question plus délicate encore : un salarié doit pouvoir refuser sans conséquence. Demandez un accord écrit, et acceptez le refus.",
      },
      {
        q: 'Que faire si personne ne veut être filmé ?',
        a: "Filmez les mains, les gestes, le matériel et le travail, sans visage. Ces images sont souvent les plus efficaces, et elles suppriment la question du consentement à l'image tout en gardant la preuve du savoir-faire.",
      },
      {
        q: 'Que se passe-t-il quand un salarié part ?',
        a: "Prévoyez le cas dès l'accord initial, en indiquant ce que vous ferez des images. Le plus simple est de s'engager à retirer les vidéos où la personne est identifiable si elle le demande après son départ.",
      },
    ],
    contentFr: `
Une entreprise de cinq personnes a un avantage énorme sur une grosse structure : on peut voir les gens qui travaillent.

C'est aussi ce qui coince le plus, parce que personne n'a envie d'être filmé, et parce que le sujet touche à quelque chose de sensible entre un employeur et ses salariés.

## Le cadre, avant la caméra

Un salarié n'est pas un figurant. Le lien de subordination fait qu'un refus n'est jamais totalement libre s'il est demandé au débotté, devant les autres, un jour de tournage.

Trois principes qui règlent la quasi-totalité des situations.

Demandez à l'avance, individuellement, pas en réunion. Une personne à qui on demande devant l'équipe dira oui sans le penser.

Demandez un accord écrit, même simple. Un message qui dit à quoi servent les images, où elles seront publiées, et pour combien de temps.

Acceptez le refus sans conséquence et sans commentaire. C'est le point le plus important, et c'est aussi ce qui fait que les autres accepteront volontiers.

Prévoyez enfin ce qui se passe au départ de la personne. Le plus simple est de vous engager à retirer les vidéos où elle est identifiable si elle le demande.

## Ce qui débloque les gens

La résistance vient rarement d'un principe. Elle vient de la peur de mal parler, de mal paraître, ou d'être moqué.

Ce qui la fait tomber, dans l'ordre.

Ne pas demander de parler. La grande majorité des gens acceptent d'être filmés en train de travailler, et refusent de parler face caméra.

Filmer pendant le travail réel, pas en mise en scène. Personne n'aime jouer un rôle, tout le monde est à l'aise en faisant son métier.

Montrer le résultat avant publication, et accepter de couper. Une seule fois suffit à installer la confiance pour la suite.

Commencer par le plus volontaire de l'équipe. Les autres suivent quand ils voient que ça se passe bien et que la vidéo est correcte.

Ne jamais publier une prise ratée pour faire rire, même bienveillante. Une seule fois et vous ne filmerez plus personne.

## Ce qu'on peut filmer sans visage

C'est la sortie la plus élégante, et souvent la meilleure sur le plan du contenu.

Les mains qui travaillent. Un geste précis, une découpe, un réglage, une soudure. Ce sont les images les plus regardées dans les métiers manuels.

Le matériel et l'atelier.

Le travail en train de se faire, filmé de dos ou de loin.

Le résultat.

Ces contenus prouvent le savoir-faire aussi bien qu'un visage, et ils suppriment la question du consentement à l'image. Les bases de tournage sont dans [filmer avec son téléphone](/blog/filmer-avec-son-telephone).

## Quand un salarié accepte de parler

C'est le format le plus puissant, en particulier pour le recrutement.

Trois règles pour que ce soit réussi.

Une question simple, préparée à l'avance mais pas la réponse. "Qu'est ce que tu fais dans une journée type" produit des réponses meilleures que n'importe quel script.

Un tournage court. Cinq minutes maximum, sinon la personne se crispe.

Un montage bienveillant. Coupez les hésitations gênantes, gardez celles qui rendent humain.

L'usage en recrutement est développé dans [recruter quand on est une petite entreprise](/blog/recruter-avec-son-site-et-ses-reseaux). Un salarié qui explique pourquoi il est là depuis six ans convainc plus qu'une annonce.

## Le cas des chantiers chez des clients

Deux accords à obtenir, pas un.

Celui du salarié pour son image.

Celui du client pour son domicile, ses biens et les personnes présentes.

Demandez le second au moment du devis, pas le jour du chantier. Une ligne dans le document suffit, et la plupart des gens acceptent quand on précise qu'aucun nom ni aucune adresse ne seront donnés.

Évitez dans le cadre les objets personnels, les papiers, les photos de famille, et les enfants.

## Ce que ça apporte à l'équipe

Un point souvent négligé : bien fait, ce travail est valorisant.

Voir son métier montré correctement, avec des vues et des commentaires positifs, produit un effet réel sur des gens dont le travail est rarement regardé.

Plusieurs artisans m'ont dit que leurs salariés étaient devenus les premiers pourvoyeurs d'idées de contenu au bout de quelques mois, après avoir été les plus réticents au départ.

L'inverse est vrai aussi : un tournage subi, imposé, ou une vidéo où quelqu'un se sent ridicule, abîme quelque chose qui ne se répare pas facilement.

C'est pour ça que le cadre se pose avant, une fois, sérieusement. Ensuite tout devient simple.
    `,
  },
];
