import type { BlogPost } from './types';

/**
 * Cluster "structure du site" : les pages qui manquent presque toujours,
 * et ce qui se passe entre l'arrivee du visiteur et sa demande.
 */
export const vitrinePosts: BlogPost[] = [
  {
    id: '120',
    slug: 'page-accueil-trois-secondes',
    titleFr: 'Votre page d\'accueil a trois secondes pour se faire comprendre',
    excerptFr:
      "Un visiteur décide de rester ou de partir avant d'avoir lu une phrase entière. Ce qui doit tenir dans ces trois secondes.",
    seoTitleFr: 'La Page d\'Accueil qui Retient les Visiteurs',
    seoDescFr:
      "Ce qui doit apparaître en haut d'une page d'accueil de TPE pour qu'un visiteur comprenne en trois secondes et reste, au lieu de repartir.",
    readTime: '8 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-13',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['page accueil', 'conversion', 'structure', 'clarté'],
    related: [
      'mon-site-ne-genere-aucun-contact',
      'landing-page-efficace',
      'quoi-ecrire-sur-son-site',
    ],
    faqFr: [
      {
        q: 'Que doit contenir le haut d\'une page d\'accueil ?',
        a: "Ce que vous faites, pour qui, où, et comment vous joindre. Quatre informations, visibles sans faire défiler, sur un téléphone. Tout le reste peut attendre plus bas.",
      },
      {
        q: 'Faut-il une grande image en haut de page ?',
        a: "Seulement si elle montre votre travail réel. Une image décorative qui pousse le texte hors de l'écran coûte plus qu'elle ne rapporte, surtout sur un téléphone où la place est comptée.",
      },
      {
        q: 'Faut-il un slogan ?',
        a: "Un slogan mystérieux fait perdre du monde. Si vous en gardez un, ajoutez juste en dessous une phrase parfaitement explicite qui dit votre métier et votre zone.",
      },
    ],
    contentFr: `
Un visiteur arrive sur votre site, souvent depuis un téléphone, souvent en ayant cliqué sans réfléchir depuis une liste de résultats.

Il ne lit pas. Il balaye. Et en trois secondes environ, il décide de rester ou de repartir vers le résultat suivant.

C'est tout ce que vous avez, et c'est ce qui décide de tout le reste.

## Les quatre informations qui doivent tenir dans l'écran

Sans faire défiler, sur un téléphone, un visiteur doit trouver quatre choses.

Ce que vous faites, en mots simples. Pas votre secteur, votre prestation. "Je refais des salles de bain complètes" bat "solutions d'aménagement intérieur".

Pour qui. Particuliers, professionnels, les deux.

Où. Nommez la commune ou la vallée. C'est la deuxième question que se pose quelqu'un qui vous trouve sur Google, et elle est presque toujours absente.

Comment vous joindre. Un numéro cliquable, visible, en haut.

Si ces quatre éléments sont là, vous avez gagné le droit d'être lu. S'il en manque un, une partie des gens partent.

## Ce qui prend la place à tort

La grande image décorative qui occupe tout l'écran et repousse le texte hors de vue. Sur un ordinateur, elle a l'air élégante. Sur un téléphone, elle transforme votre page en écran d'attente.

Le slogan seul. "Donnons vie à vos projets" ne dit ni ce que vous faites, ni pour qui, ni où. Si vous y tenez, gardez-le, mais mettez la phrase explicite juste en dessous.

Le bandeau cookies qui recouvre tout, alors que le site n'a peut-être pas besoin d'en afficher un. Le sujet est traité dans [mentions légales et RGPD](/blog/mentions-legales-rgpd-cookies-site).

Le message de bienvenue. "Bienvenue sur notre site" occupe la ligne la plus précieuse de votre site pour ne rien dire.

L'animation d'introduction. Elle fait attendre quelqu'un qui n'a pas décidé de rester.

## L'ordre du reste de la page

Une fois le haut réglé, la suite suit un ordre assez constant, et il correspond à l'ordre des questions du visiteur.

La preuve. Des photos de votre travail réel, pas des images de banque. C'est ce qui répond à "est ce que ces gens savent faire". Le sujet est développé dans [quelles photos mettre sur son site](/blog/photos-pour-son-site-web).

Les prestations, une par bloc, avec un lien vers la page dédiée de chacune.

Les prix, au moins en ordre de grandeur. C'est la question numéro un, et l'arbitrage complet est dans [faut-il afficher ses prix](/blog/afficher-ses-prix-ou-pas).

La zone d'intervention, avec le nom des communes. Pas une carte décorative, une liste.

Les avis. Deux ou trois, avec un prénom et une commune.

Qui vous êtes. Une photo et trois phrases vraies, avec un lien vers la page dédiée. Voir [la page à propos](/blog/page-a-propos-qui-sert).

Ce qui se passe si on vous appelle. La première étape, le délai de réponse, ce qui est gratuit.

Et le moyen de vous joindre, répété en bas de page.

## Le test des cinq secondes

Faites-le faire par quelqu'un qui ne connaît pas votre métier.

Ouvrez votre page d'accueil sur un téléphone, laissez-la cinq secondes sous ses yeux, puis cachez l'écran et posez trois questions.

Qu'est ce que cette entreprise fait ? Où travaille-t-elle ? Comment la contacter ?

Si votre testeur ne répond pas aux trois, vos visiteurs non plus, et aucun travail de référencement ne compensera ça. C'est aussi la première chose que je regarde quand quelqu'un me dit que son site ne génère rien, ce que je détaille dans [mon site ne génère aucun contact](/blog/mon-site-ne-genere-aucun-contact).

## Le cas particulier des visiteurs qui n'arrivent pas par l'accueil

Un point que beaucoup de gens ignorent : une partie importante de vos visiteurs n'atterrissent jamais sur votre page d'accueil.

Ils arrivent depuis Google directement sur une page de prestation ou sur un article. Pour eux, cette page est la page d'accueil.

Conséquence pratique : les quatre informations de base doivent être accessibles depuis n'importe quelle page. Un en-tête qui contient le métier, la zone et le numéro règle le problème une fois pour toutes.

## L'erreur de vouloir tout dire

La tentation est de mettre en avant tout ce que vous savez faire, par peur de perdre une demande.

L'effet est inverse. Une page qui annonce huit spécialités ne convainc sur aucune, et le visiteur qui cherchait précisément la troisième ne la voit pas.

Mettez en avant ce qui représente l'essentiel de votre chiffre d'affaires, et donnez accès au reste par des liens. Vous ne perdez personne, et vous devenez lisible.

## Ce que ça change concrètement

Ce n'est pas un travail de design, c'est un travail de hiérarchie. Décider ce qui passe en premier, et accepter que le reste passe après.

Sur les sites que je reprends, c'est souvent la modification qui produit l'effet le plus rapide, avant même toute question de référencement. Le trafic ne change pas, le nombre de demandes si.
    `,
  },
  {
    id: '121',
    slug: 'page-realisations-portfolio-artisan',
    titleFr: 'La page réalisations : celle qui décide vraiment',
    excerptFr:
      "Un client compare trois entreprises. Il ne lit pas les trois sites, il regarde les trois pages de réalisations. C'est là que ça se joue.",
    seoTitleFr: 'La Page Réalisations qui Fait Signer',
    seoDescFr:
      "Comment construire une page de réalisations qui convainc : combien de projets, quel contexte donner, et l'erreur qui annule tout le travail.",
    readTime: '8 min',
    categoryFr: 'Conversion',
    categorySlug: 'conversion',
    date: '2026-08-12',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['réalisations', 'portfolio', 'preuve', 'photos'],
    related: [
      'photos-pour-son-site-web',
      'avant-apres-artisan-contenu',
      'menuisier-cuisiniste-visibilite',
    ],
    faqFr: [
      {
        q: 'Combien de réalisations faut-il montrer ?',
        a: "Une dizaine bien documentées valent mieux que cinquante photos en vrac. Ce qui convainc n'est pas le volume, c'est que le visiteur trouve un projet proche du sien et comprenne ce que vous y avez fait.",
      },
      {
        q: 'Faut-il indiquer le budget de chaque chantier ?',
        a: "Un ordre de grandeur transforme la page. C'est rare, ça répond à la question que tout le monde se pose, et ça filtre les demandes hors budget avant qu'elles ne vous coûtent une visite.",
      },
      {
        q: "Que faire quand on démarre et qu'on n'a rien à montrer ?",
        a: "Montrez ce que vous avez fait ailleurs, en le disant honnêtement, ou vos premiers chantiers même modestes. Une page avec trois projets réels vaut infiniment mieux qu'une page avec dix images de catalogue.",
      },
    ],
    contentFr: `
Quand quelqu'un compare trois entreprises, il ne lit pas les trois sites en entier. Il ouvre les trois pages de réalisations, il fait défiler, et il se fait une opinion.

C'est la page la plus regardée d'un site d'artisan, et c'est souvent la plus négligée : une galerie d'images sans légende, sans ordre et sans contexte.

## Ce que cherche le visiteur

Trois choses, dans cet ordre.

Un projet qui ressemble au sien. Une personne qui veut refaire sa salle de bain de cinq mètres carrés ne se projette pas dans une villa de trois cents mètres carrés. Elle cherche son cas.

La preuve que le travail est fini et propre. Les finitions, les jonctions, les angles. C'est ce que regardent les gens qui s'y connaissent un peu, et ils sont plus nombreux qu'on ne croit.

Une idée du budget. Question systématique, réponse presque toujours absente.

## La structure qui fonctionne

Une réalisation par bloc, avec cinq éléments.

Un titre concret. "Rénovation complète d'une salle de bain de 5 m² à Ugine" plutôt que "Projet 12".

Trois à six photos, dont une avant si vous l'avez. Le principe du même cadrage est expliqué dans [l'avant et après](/blog/avant-apres-artisan-contenu).

Deux ou trois phrases de contexte : la demande du client, la contrainte particulière, ce que vous avez proposé.

Les données factuelles : commune, durée du chantier, matériaux principaux, et l'ordre de grandeur du budget si vous l'affichez.

Un avis du client, s'il en a laissé un.

Dix réalisations documentées comme ça battent cinquante photos en vrac, et de loin.

## Classer, plutôt qu'empiler

Une galerie mélangée oblige le visiteur à chercher. Une partie abandonne.

Classez par type de projet, ou par prestation, ou par budget. Le classement le plus utile dépend de votre métier, mais il en faut un.

Et affichez le classement en haut, avec des liens qui mènent directement à chaque famille. Sur un téléphone, faire défiler quarante photos pour trouver la bonne n'arrive jamais.

## Le budget affiché, l'élément qui distingue

C'est le point où presque tout le monde recule, et c'est celui qui change le plus la page.

"Salle de bain de 5 m² refaite entièrement, sol et murs compris, environ X euros" répond à la question que le visiteur se posait, prouve que vous n'avez rien à cacher, et écarte les gens hors budget.

Vous n'êtes pas obligé de le faire sur toutes les réalisations. Deux ou trois suffisent à donner l'échelle.

Le raisonnement complet est dans [faut-il afficher ses prix](/blog/afficher-ses-prix-ou-pas).

## Les erreurs qui annulent le travail

Les photos de catalogue. Un visiteur les reconnaît en une seconde, et il en conclut que vous n'avez rien de personnel à montrer. C'est le contraire de ce que la page doit produire.

Les photos mal éclairées ou prises en désordre. Trente secondes de rangement avant la prise de vue valent mieux qu'une heure de retouche, et le détail est dans [photos professionnelles ou smartphone](/blog/photos-professionnelles-ou-smartphone).

Les réalisations sans contexte. Une belle image sans explication ne dit pas ce que vous avez fait exactement. Sur beaucoup de chantiers, l'essentiel du travail n'est pas visible.

Une page qui date. Une dernière réalisation de 2022 laisse penser que l'entreprise a ralenti.

Les images trop lourdes, qui ralentissent la page la plus consultée du site. Voir [la vitesse sur mobile](/blog/vitesse-site-web-mobile).

## Quand on démarre et qu'on n'a rien

C'est une vraie difficulté, et il y a trois sorties honnêtes.

Montrer ce que vous avez fait chez un employeur précédent, en le disant clairement et avec l'accord nécessaire.

Montrer vos premiers chantiers, même modestes. Une petite réalisation bien photographiée et bien expliquée vaut mieux que rien.

Documenter à partir de maintenant. Prenez la photo d'avant sur chaque chantier, systématiquement, et dans six mois vous aurez une page.

Ce qu'il ne faut pas faire : remplir avec des images qui ne sont pas les vôtres. Ça se voit, et c'est le meilleur moyen de perdre la confiance de quelqu'un qui allait vous appeler.

## Le lien avec le reste

Cette page n'est pas isolée. Chaque réalisation doit renvoyer vers la page de la prestation concernée, et chaque page de prestation doit renvoyer vers deux ou trois réalisations correspondantes.

C'est ce maillage qui permet au visiteur de circuler dans le sens de sa décision, et c'est aussi ce qui aide Google à comprendre de quoi vous parlez.

Et joignez ces réalisations à vos devis. Deux photos d'un chantier comparable dans un devis changent le taux de signature, comme expliqué dans [un devis qui se signe](/blog/devis-qui-se-signe).
    `,
  },
  {
    id: '122',
    slug: 'page-service-qui-ressort',
    titleFr: 'Une page par prestation, et pourquoi c\'est non négociable',
    excerptFr:
      "La liste de huit services en trois lignes chacun ne ressort sur rien. Huit pages sérieuses ressortent sur huit familles de recherches.",
    seoTitleFr: 'Une Page par Prestation : Comment Faire',
    seoDescFr:
      "Pourquoi une page dédiée par prestation change tout pour le référencement local, et ce qu'il faut mettre dedans pour qu'elle convertisse.",
    readTime: '8 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-11',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['pages services', 'structure', 'référencement', 'contenu'],
    related: [
      'trouver-mots-cles-clients',
      'concurrent-devant-moi-google',
      'quoi-ecrire-sur-son-site',
    ],
    faqFr: [
      {
        q: 'Combien de pages de prestation faut-il ?',
        a: "Une par prestation que vous vendez réellement et régulièrement. Pour la plupart des artisans, cela fait entre quatre et huit pages. Créer une page pour une prestation que vous faites une fois par an ne sert à rien.",
      },
      {
        q: 'Quelle longueur pour une page de prestation ?',
        a: "Assez pour répondre aux questions qu'un client se pose avant d'appeler, ce qui représente souvent 500 à 900 mots. Le volume compte moins que le fait de couvrir les objections réelles.",
      },
      {
        q: 'Faut-il créer une page par prestation et par commune ?',
        a: "Non, sauf si vous avez du contenu réellement propre à chaque commune. Multiplier les pages quasi identiques est détecté et peut dévaloriser tout le site.",
      },
    ],
    contentFr: `
C'est la correction qui produit le plus d'effet sur un site d'artisan, et elle ne demande aucune compétence technique.

Sur presque tous les sites que je regarde, il existe une page qui s'appelle "nos services" et qui liste huit prestations en trois lignes chacune.

Cette page ne ressort sur rien, et c'est mécanique.

## Pourquoi une page fourre-tout ne fonctionne pas

Google essaie de comprendre de quoi parle une page pour décider sur quelles recherches la montrer.

Une page qui parle de plomberie, de chauffage, de salle de bain, de dépannage, de pompe à chaleur et de rénovation ne parle vraiment d'aucun des six. Le signal est dilué.

Une page entièrement consacrée au remplacement de chaudière parle de remplacement de chaudière. Le signal est net.

Ce n'est pas une astuce de référencement, c'est la même logique du côté humain : un visiteur qui cherche précisément une chose veut une page qui traite précisément cette chose.

## Ce que doit contenir une page de prestation

Sept blocs, dans cet ordre.

Un titre qui est la formulation du client. Écrivez "remplacement de chaudière" si c'est ce que les gens tapent, pas "solutions de chauffage". La méthode pour trouver la bonne formulation est dans [trouver les mots que vos clients tapent](/blog/trouver-mots-cles-clients).

La réponse à la question, dès les deux premières phrases. Ce que vous faites, pour qui, dans quelle zone.

Le déroulé concret. Visite, devis, délai, intervention, mise en service. Les gens veulent savoir ce qui va se passer chez eux.

Le prix, en ordre de grandeur, avec ce qui le fait varier.

Deux ou trois réalisations correspondantes, avec des photos. Le format est décrit dans [la page réalisations](/blog/page-realisations-portfolio-artisan).

Les questions fréquentes sur cette prestation précise. Cinq questions, cinq réponses courtes. C'est le bloc le plus rentable de la page, et le plus souvent absent.

Un moyen de vous joindre, en un geste.

## Les questions, le vrai carburant

C'est le point qui distingue une page qui ressort d'une page qui existe.

Prenez la prestation, et écrivez toutes les questions qu'un client vous pose à son sujet. Faut-il vider la pièce, combien de temps sans eau, est ce que vous évacuez l'ancien matériel, quelles marques vous posez, y a-t-il une garantie, est ce que ça ouvre droit à une aide.

Chacune est un paragraphe, et l'ensemble fait naturellement une page complète, sans remplissage.

C'est aussi ce format que reprennent les moteurs de réponse quand ils citent une source, comme je l'explique dans [être cité par ChatGPT et les moteurs de réponse](/blog/chatgpt-perplexite-entreprise-locale).

## Combien de pages

Une par prestation que vous vendez réellement et régulièrement.

Pour la plupart des artisans, cela fait entre quatre et huit pages. Pas vingt.

Créer une page pour une prestation que vous faites une fois par an dilue votre site et ne rapporte rien. Mieux vaut la mentionner dans une page voisine.

## La question des communes

C'est là qu'il faut être prudent, parce que c'est là que les gens dérapent.

Créer une page par prestation multipliée par vingt communes produit quatre cents pages quasi identiques. Google détecte ce schéma, ignore les pages, et cela peut dévaloriser l'ensemble du site.

Ce qui fonctionne : nommer vos communes dans chaque page de prestation, et créer une page par commune uniquement quand vous avez du contenu réellement propre à écrire dessus. Le détail est dans [travailler sans local, comment définir sa zone](/blog/zone-de-chalandise-sans-local).

## Le maillage entre les pages

Chaque page de prestation renvoie vers deux ou trois réalisations correspondantes, vers la page contact, et vers les prestations voisines qui pourraient intéresser le même client.

La page d'accueil renvoie vers chaque page de prestation.

Ce réseau de liens fait deux choses : il aide le visiteur à circuler dans le sens de sa décision, et il indique à Google quelles pages comptent le plus chez vous.

## Le calendrier réaliste

Vous n'avez pas à tout écrire en une fois, et c'est même contre-productif.

Une page par mois, pendant six mois. Chacune écrite sérieusement, à partir des questions réelles de vos clients.

Au bout de six mois, vous avez un site qui couvre vos prestations principales, et Google a vu un site qui vit régulièrement plutôt qu'un site qui a déversé son contenu en un jour.

C'est le rythme que je conseille systématiquement, et c'est celui que la majorité des gens ne tiennent pas, ce qui laisse la place libre.
    `,
  },
  {
    id: '123',
    slug: 'site-multipage-ou-une-seule-page',
    titleFr: 'Un site d\'une seule page ou plusieurs : lequel pour vous',
    excerptFr:
      "La page unique a une vraie qualité et un défaut rédhibitoire selon les cas. Le critère qui tranche tient en une question.",
    seoTitleFr: 'Site d\'Une Page ou Plusieurs Pages',
    seoDescFr:
      "Page unique ou site multipage pour une petite entreprise : ce que chacun permet, ce qu'il coûte en visibilité, et comment choisir.",
    readTime: '7 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-09',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['one page', 'structure', 'landing page', 'arbitrage'],
    related: [
      'landing-page-efficace',
      'page-service-qui-ressort',
      'combien-coute-un-site-web',
    ],
    faqFr: [
      {
        q: 'Une page unique peut-elle bien se référencer ?',
        a: "Sur une seule famille de recherches, oui. Le problème apparaît quand vous vendez plusieurs prestations différentes : une page unique ne peut pas se positionner sur plusieurs sujets à la fois, chaque sujet dilue les autres.",
      },
      {
        q: 'Quand la page unique est-elle le bon choix ?',
        a: "Quand vous vendez une seule chose, quand vous démarrez, ou quand le site accompagne une campagne ou un événement précis. C'est aussi le format le plus rapide à produire.",
      },
      {
        q: 'Peut-on commencer par une page et étendre ensuite ?',
        a: "Oui, et c'est souvent la meilleure trajectoire. Vous mettez une page en ligne rapidement, vous apprenez ce que vos clients demandent, et vous ajoutez des pages sur les sujets qui reviennent.",
      },
    ],
    contentFr: `
La question revient à chaque projet, et la réponse tient à une seule chose : combien de sujets différents vous devez couvrir.

## Ce que fait bien une page unique

Elle est rapide à produire, donc rapide à mettre en ligne.

Elle raconte une histoire dans l'ordre, sans que le visiteur ait à naviguer. Sur un téléphone, faire défiler est plus naturel que cliquer, et le taux d'abandon est plus faible.

Elle concentre tout l'effort sur une seule action : vous appeler ou remplir le formulaire.

Elle coûte moins cher, ce qui n'est pas un détail quand on démarre.

Le format et ce qui le rend efficace sont détaillés dans [ce qui fait une landing page efficace](/blog/landing-page-efficace).

## Ce qu'elle fait mal

Elle ne peut se positionner que sur une famille de recherches.

Si vous vendez du dépannage, de la rénovation, de l'installation et de l'entretien, une page unique doit parler des quatre. Google ne saura pas sur laquelle vous placer, et vous ne ressortirez bien sur aucune. C'est le mécanisme expliqué dans [une page par prestation](/blog/page-service-qui-ressort).

Elle plafonne aussi en contenu. Une page qui essaie de tout traiter devient très longue et personne ne la lit jusqu'au bout.

Et elle ne permet pas d'ajouter du contenu au fil du temps, qui est le levier le plus rentable à long terme pour une entreprise locale.

## Le critère qui tranche

Posez-vous une seule question : est ce que mes clients cherchent plusieurs choses différentes ?

Si un moniteur de ski vend des cours particuliers et des sorties en groupe, c'est une variation d'un même sujet. Une page suffit.

Si un artisan vend du dépannage en urgence et de la rénovation complète, ce sont deux marchés opposés, avec deux clients différents et deux moments de décision différents. Une page ne peut pas faire les deux, et le sujet est développé dans [électricien, plombier, chauffagiste](/blog/electricien-plombier-chauffagiste-visibilite).

## Les cas clairs

Page unique : vous démarrez, vous vendez une seule prestation, votre visibilité passera surtout par votre fiche Google Business, ou le site accompagne un événement, une ouverture ou une offre limitée.

Site multipage : vous vendez plusieurs prestations distinctes, vous voulez que Google vous amène des visiteurs sur plusieurs sujets, ou vous comptez publier du contenu régulièrement.

Entre les deux, il existe une solution simple : une page principale complète, plus deux ou trois pages de prestation, plus les pages légales. Cinq à sept pages au total. C'est ce qui convient à la majorité des TPE, et c'est bien moins lourd que ce que les gens imaginent.

## La trajectoire que je conseille

Commencez par une page, mise en ligne vite.

Écoutez pendant trois à six mois ce que vos clients demandent au téléphone et par message.

Ajoutez ensuite une page par sujet qui revient, une par mois.

Cette trajectoire a deux avantages. Vous existez en ligne dès le premier mois, ce qui compte plus que la perfection. Et vous écrivez vos pages à partir de vraies questions plutôt que de suppositions, ce qui les rend nettement meilleures.

## Le point technique qui coince parfois

Sur une page unique, tout le contenu est à la même adresse. Vous ne pouvez donc pas envoyer quelqu'un directement sur une section précise depuis une publicité ou depuis votre fiche Google, sauf à utiliser des ancres.

Ce n'est pas bloquant, c'est juste moins net. Et cela devient gênant dès que vous voulez suivre ce qui intéresse les gens, puisque toutes les visites se comptent sur une seule page.

## Ce qui compte plus que le choix

Une page unique bien écrite, avec des prix, des photos réelles et un moyen de contact évident, bat un site de douze pages vides.

Le nombre de pages n'a jamais fait signer personne. Ce qui fait signer, c'est de répondre aux questions que le client se pose, et ça peut tenir sur une page comme sur huit.
    `,
  },
  {
    id: '124',
    slug: 'contenu-qui-vieillit-mise-a-jour',
    titleFr: 'Ce qui vieillit sur un site, et à quel rythme le reprendre',
    excerptFr:
      "Un site n'est pas un objet qu'on livre. Six choses y périment, et deux d'entre elles coûtent des clients tous les jours.",
    seoTitleFr: 'Mettre son Site à Jour : Quoi et Quand',
    seoDescFr:
      "Ce qui périme sur un site de TPE, ce qui coûte cher quand ce n'est pas repris, et une routine annuelle qui tient en deux heures.",
    readTime: '7 min',
    categoryFr: 'Site web',
    categorySlug: 'site-web',
    date: '2026-08-06',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/creer-site-web-tpe',
    tags: ['maintenance', 'mise à jour', 'fraîcheur', 'entretien'],
    related: [
      'refonte-site-web-quand',
      'site-pirate-que-faire',
      'search-console-pour-debutant',
    ],
    faqFr: [
      {
        q: 'Un site vitrine demande-t-il de l\'entretien ?',
        a: "Peu sur le plan technique s'il est bien construit, mais beaucoup sur le plan du contenu. Des tarifs périmés, des horaires faux ou des réalisations qui datent de trois ans coûtent des clients sans que rien ne le signale.",
      },
      {
        q: 'Faut-il republier régulièrement pour plaire à Google ?',
        a: "Publier pour publier ne sert à rien. En revanche, mettre à jour une page existante qui a vieilli est un des travaux les plus rentables : elle a déjà une position, et l'améliorer produit un effet plus rapide qu'une nouvelle page.",
      },
      {
        q: 'Quelle est la routine minimale ?',
        a: "Deux heures par an sur le contenu, avec une vérification des tarifs, des horaires, des réalisations, de l'équipe et des liens. Plus un contrôle des mises à jour techniques quelques fois par an selon le type de site.",
      },
    ],
    contentFr: `
Un site n'est pas une plaque de cuivre qu'on visse une fois sur la façade. C'est une vitrine, et une vitrine se refait.

Le problème est que rien ne vous signale qu'elle a vieilli. Aucune alerte, aucun message. Simplement des gens qui repartent.

## Les six choses qui périment

Les prix. Un tarif de 2023 sur un site en 2026 produit deux mauvais scénarios : soit le client arrive avec une attente fausse et se sent floué, soit il compare sur un chiffre qui vous dessert.

Les horaires et les périodes de fermeture. Sur le site comme sur la fiche Google, c'est ce qui produit le plus d'avis négatifs pour la plus petite négligence.

Les réalisations. Une galerie dont le dernier chantier date de trois ans laisse penser que l'activité a ralenti.

L'équipe. Des personnes parties depuis longtemps, ou des personnes arrivées et jamais ajoutées.

Les informations réglementaires : certifications, assurances, dispositifs d'aide, obligations. Une information périmée sur ces sujets vous met en difficulté au moment du devis.

Les liens. Un lien mort vers un partenaire, une plateforme qui a fermé, une page supprimée chez vous. Ça se vérifie et personne ne le fait.

## Les deux qui coûtent le plus

Sur les six, deux se paient immédiatement.

Les horaires faux, parce que quelqu'un se déplace pour rien et le fait savoir.

Les prix périmés, parce qu'ils cassent la confiance au moment où elle compte le plus.

Si vous ne devez vérifier que deux choses par an, vérifiez celles-là.

## La routine annuelle, deux heures

Une fois par an, à une date fixe, idéalement en période creuse.

Ouvrez chaque page et lisez-la comme si vous étiez un client.

Corrigez les prix, les horaires, les délais annoncés.

Ajoutez trois réalisations récentes et retirez les plus anciennes si elles ne vous représentent plus.

Mettez à jour la page à propos si l'équipe ou l'activité ont changé. Le contenu attendu est décrit dans [la page à propos](/blog/page-a-propos-qui-sert).

Cliquez sur tous les liens internes et externes.

Vérifiez la fiche Google Business en même temps, en particulier les horaires exceptionnels de l'année à venir.

Deux heures, une fois par an. C'est ridicule comparé au coût de ce que ça évite.

## La mise à jour d'une page qui marche déjà

C'est le travail le plus rentable du référencement, et le moins pratiqué.

Une page qui se positionne déjà en dixième position a fait le plus dur : Google la connaît et la juge pertinente. L'améliorer produit un effet beaucoup plus rapide que de créer une page neuve qui repart de zéro.

Comment repérer ces pages : la console de recherche vous montre celles qui apparaissent souvent avec peu de clics, et celles qui sont en position 5 à 15. Le mode d'emploi est dans [la console de recherche expliquée simplement](/blog/search-console-pour-debutant).

Ce qu'il faut leur ajouter : les questions que vous n'aviez pas traitées, un exemple chiffré, des photos récentes, et une reprise du titre s'il ne correspond pas à ce que les gens tapent.

## La partie technique

Elle dépend entièrement de la façon dont votre site est construit.

Un site sur un système très répandu avec des extensions demande des mises à jour régulières et des sauvegardes automatiques, sous peine de finir piraté. Le sujet est traité dans [votre site a été piraté](/blog/site-pirate-que-faire).

Un site plus simple, sans base de données ni modules, demande beaucoup moins d'entretien.

Dans les deux cas, sachez qui s'en occupe et à quelle fréquence. C'est une des questions à poser avant de choisir un prestataire, et elle est dans [agence, freelance ou plateforme](/blog/agence-web-freelance-ou-plateforme).

## Mettre à jour n'est pas refaire

Une confusion fréquente : parce que le site a vieilli, il faudrait tout refaire.

Dans la majorité des cas, non. Les corrections de contenu règlent le problème pour une fraction du coût, et elles produisent un effet plus rapide.

Les vrais motifs de refonte sont plus rares qu'on ne croit, et je les liste dans [quand refaire son site](/blog/refonte-site-web-quand).

## Le signe qui ne trompe pas

Ouvrez votre site maintenant, et demandez-vous si vous enverriez cette adresse à un prospect important, aujourd'hui, sans hésiter.

Si la réponse est non, ce n'est pas forcément qu'il faut tout refaire. C'est qu'il y a deux heures de travail à faire, et que ces deux heures vous coûtent des clients depuis un moment.
    `,
  },
];
