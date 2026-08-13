import type { BlogPost } from './types';

/**
 * Cluster "visibilite Google" : les etapes que les articles existants
 * supposaient deja faites. Creation de fiche, avis negatifs, Maps, delais
 * de referencement et annuaires. Rattaches a /guides/visibilite-google-locale.
 */
export const googlePosts: BlogPost[] = [
  {
    id: '53',
    slug: 'creer-fiche-google-business',
    titleFr: 'Créer sa fiche Google Business quand on part de zéro',
    excerptFr:
      "Le levier le plus rentable pour une entreprise locale, et il est gratuit. Voilà comment le mettre en place proprement en une heure.",
    seoTitleFr: 'Créer sa Fiche Google Business : le Guide',
    seoDescFr:
      "Créer sa fiche Google Business étape par étape : catégorie, adresse ou zone d'intervention, vérification, photos. Le levier local le plus rentable et gratuit.",
    readTime: '9 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-01',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['google business', 'fiche google', 'référencement local', 'création'],
    related: [
      'fiche-google-business-optimiser',
      'apparaitre-sur-google-maps',
      'obtenir-avis-google',
    ],
    faqFr: [
      {
        q: 'La fiche Google Business est-elle gratuite ?',
        a: "Oui, entièrement. La création, la vérification, les photos, les avis et les publications ne coûtent rien. Les appels et les emails proposant de gérer votre fiche contre paiement ne viennent pas de Google.",
      },
      {
        q: 'Peut-on créer une fiche sans local commercial ?',
        a: "Oui. Si vous vous déplacez chez vos clients, vous déclarez une zone d'intervention et vous masquez votre adresse. C'est le cas de la majorité des artisans et des prestataires de services.",
      },
      {
        q: 'Combien de temps prend la vérification ?',
        a: "De quelques minutes à deux semaines selon la méthode proposée. La vidéo et le téléphone sont immédiats ou presque, le courrier postal prend une à deux semaines. Vous n'avez pas le choix de la méthode, Google la propose selon votre profil.",
      },
    ],
    contentFr: `
Si vous n'avez qu'une heure à consacrer à votre visibilité ce mois-ci, mettez la ici.

Pour une entreprise locale, la fiche Google Business rapporte des demandes plus vite qu'un site, plus vite que les réseaux sociaux, et elle ne coûte rien. Je le dis alors que mon métier est de faire des sites : c'est la première chose que je regarde chez un nouveau client, et c'est souvent la première chose qu'on corrige.

## Ce que c'est, concrètement

Quand quelqu'un cherche votre métier suivi de votre ville, Google affiche un bloc avec une carte et trois entreprises. Ces trois entreprises sont des fiches Google Business.

Ce bloc capte une part énorme des clics sur une recherche locale, parce qu'il est en haut et qu'il donne tout de suite ce que la personne cherche : un nom, une note, un horaire, un bouton pour appeler.

Sans fiche, vous n'existez pas dans ce bloc, quel que soit votre site.

## Étape 1 : vérifiez qu'une fiche n'existe pas déjà

Ça arrive plus souvent qu'on ne croit. Google crée parfois des fiches automatiquement à partir de données publiques, et il arrive qu'un ancien associé ou un prestataire en ait créé une.

Tapez le nom de votre entreprise sur Google Maps. Si une fiche apparaît, ne la recréez pas : vous vous retrouveriez avec deux fiches en concurrence, ce qui affaiblit les deux. Réclamez la propriété de celle qui existe.

## Étape 2 : le nom, exactement comme sur vos papiers

Mettez le nom réel de votre entreprise. Rien d'autre.

La tentation est forte d'écrire "Dupont Plomberie Chauffage Albertville Dépannage 24h". Ça viole les règles de Google, ça peut faire suspendre la fiche, et ce n'est pas ce qui vous fait ressortir. La catégorie s'en charge.

## Étape 3 : la catégorie principale, le choix le plus important

C'est le réglage qui pèse le plus lourd sur votre visibilité, et celui que les gens bâclent en trente secondes.

Google propose une liste fermée de catégories. Vous en choisissez une principale, puis des secondaires. La principale détermine en grande partie les recherches sur lesquelles vous pouvez apparaître.

La méthode : cherchez sur Google Maps votre métier dans votre ville, ouvrez les trois fiches qui sortent en premier, et regardez leur catégorie. Elle est affichée sous le nom. Vous saurez en deux minutes ce qui fonctionne réellement chez vous.

Prenez la catégorie la plus précise qui décrit votre activité principale, pas la plus large. "Électricien" bat "entreprise de bâtiment" si vous êtes électricien.

Ajoutez ensuite des catégories secondaires pour ce que vous faites vraiment. Pas pour ce que vous pourriez faire un jour.

## Étape 4 : adresse ou zone d'intervention

Deux cas de figure.

Vous avez un local où les clients viennent : salon, cabinet, boutique, restaurant. Vous saisissez l'adresse et elle s'affiche publiquement.

Vous vous déplacez chez vos clients : artisan, dépanneur, paysagiste, thérapeute à domicile. Vous déclarez une zone d'intervention et vous masquez votre adresse. C'est prévu, c'est légitime, et c'est le cas de la plupart des artisans.

Sur la zone d'intervention, restez réaliste. Déclarer toute la région Auvergne-Rhône-Alpes ne vous fait pas apparaître partout, ça dilue votre pertinence. Déclarez les communes où vous allez vraiment. Depuis Albertville, ça veut dire la vallée, la Tarentaise, le Beaufortain, la combe de Savoie, pas Lyon.

## Étape 5 : la vérification

Google veut s'assurer que l'entreprise existe et que c'est bien vous.

Selon votre profil, il proposera une vérification par vidéo, par téléphone, par email ou par courrier postal. Vous ne choisissez pas la méthode.

La vidéo est devenue fréquente : on vous demande de filmer sans coupure votre lieu d'activité, un élément qui prouve que vous y travaillez, et un document au nom de l'entreprise. Préparez tout avant de commencer l'enregistrement, parce qu'on ne peut pas s'y reprendre à trois fois.

Le courrier prend une à deux semaines et arrive avec un code à saisir. Surveillez la boîte aux lettres, ces courriers passent pour de la publicité.

## Étape 6 : remplir sérieusement

Une fiche vérifiée mais vide ne sert pas à grand chose. Le minimum sérieux :

Les horaires, y compris les fermetures exceptionnelles. Une fiche avec des horaires faux génère des avis négatifs, ce qui est le pire rendement possible.

Le lien vers votre site, s'il existe. Si vous n'en avez pas, mettez au minimum une page de contact quelque part.

La description, en évitant l'auto-promotion creuse. Dites ce que vous faites, où, et pour qui.

Les prestations. Google permet de lister vos services un par un, avec une description pour chacun. Peu de monde le fait, et c'est un des rares champs qui aide sur des recherches précises.

Les photos. Une dizaine, prises par vous, de vos vrais chantiers ou de votre vrai local. La façade, l'intérieur, le travail fini, l'équipe. Pas d'images de banque, elles se repèrent immédiatement.

## Étape 7 : les avis, tout de suite

Une fiche vérifiée sans avis ne monte pas. Les avis sont le carburant du bloc carte.

Commencez le jour même, avec vos clients récents et satisfaits. La méthode qui marche, le moment où demander, et ce qu'il ne faut surtout pas faire sont détaillés dans [obtenir des avis Google](/blog/obtenir-avis-google).

## Ce qui se passe ensuite

Une fiche neuve met quelques semaines à trouver sa place. Elle ne sortira pas premier le lendemain, surtout dans une ville où d'autres ont dix ans d'ancienneté et cent avis.

Ce qui la fait monter, dans l'ordre : la proximité entre la personne qui cherche et vous, la pertinence de votre catégorie, et votre notoriété, où les avis pèsent lourd. Le détail est dans [être premier sur Google dans sa ville](/blog/etre-premier-google-dans-sa-ville).

Une fois la fiche en place, l'étape suivante est de l'optimiser vraiment : [j'ai écrit un article entier là dessus](/blog/fiche-google-business-optimiser), et le [guide complet de la visibilité locale](/guides/visibilite-google-locale) remet tout dans l'ordre.

Un dernier point. Vous allez recevoir des appels de gens qui prétendent appeler de la part de Google et proposent de gérer votre fiche contre un abonnement. Google ne fait pas ça. Raccrochez.

Si vous voulez que je regarde votre fiche et que je vous dise ce qui manque, [écrivez moi](/contact). Ça prend dix minutes et ça ne coûte rien.
    `,
  },
  {
    id: '54',
    slug: 'repondre-avis-negatif-google',
    titleFr: 'Répondre à un avis négatif sur Google',
    excerptFr:
      "Le premier réflexe est toujours le mauvais. Ce que vous écrivez n'est pas pour la personne qui se plaint, c'est pour les cinquante qui vont lire.",
    seoTitleFr: 'Répondre à un Avis Négatif sur Google',
    seoDescFr:
      "Comment répondre à un avis négatif sans aggraver les choses, quoi faire face à un faux avis, et pourquoi une mauvaise note peut vous servir.",
    readTime: '9 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-04',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['avis google', 'e-réputation', 'avis négatif', 'faux avis'],
    related: [
      'obtenir-avis-google',
      'fiche-google-business-optimiser',
      'creer-fiche-google-business',
    ],
    faqFr: [
      {
        q: 'Peut-on faire supprimer un avis négatif ?',
        a: "Pas parce qu'il est négatif. Vous pouvez le signaler s'il enfreint les règles de Google : propos haineux, contenu hors sujet, conflit d'intérêts, ou avis d'une personne qui n'a jamais été cliente. Google tranche seul et ne motive pas toujours sa décision.",
      },
      {
        q: 'Faut-il répondre à tous les avis négatifs ?',
        a: "Oui, et rapidement. Une réponse calme et factuelle est lue par tous les visiteurs suivants. L'absence de réponse laisse la version du client comme seule version disponible.",
      },
      {
        q: 'Un avis négatif fait-il baisser mon référencement ?',
        a: "Un avis isolé au milieu d'avis positifs ne change presque rien, et une note parfaite paraît suspecte. Ce qui compte, c'est la moyenne, le volume et la régularité dans le temps.",
      },
    ],
    contentFr: `
Il y a un moment très précis où il ne faut pas répondre : dans l'heure qui suit.

Vous venez de le lire, c'est injuste ou exagéré, vous avez la réponse parfaite en tête, et cette réponse est presque toujours celle qui va vous coûter des clients.

## Pour qui vous écrivez vraiment

C'est la seule chose à retenir de cet article.

Vous n'écrivez pas pour la personne mécontente. Elle est partie, elle ne changera probablement pas d'avis, et vous ne la reverrez pas.

Vous écrivez pour les cinquante personnes qui liront cet échange dans les mois qui viennent, au moment où elles hésitent entre vous et un concurrent. Elles ne connaissent ni vous ni le client. Elles vont juger la façon dont vous réagissez quand ça se passe mal.

Une réponse calme et concrète face à un client agressif vous fait gagner des clients. Une réponse sèche face à un client de mauvaise foi vous en fait perdre, même quand vous avez raison.

## La structure qui fonctionne

Quatre temps, courts.

Remerciez du retour, sans ironie. Une seule ligne.

Montrez que vous avez compris le problème précis. Pas "nous sommes désolés que votre expérience n'ait pas été à la hauteur", qui ne veut rien dire. Plutôt "vous avez attendu trois semaines pour un devis, c'est trop long, vous avez raison".

Donnez un fait ou une explication, sans vous justifier pendant dix lignes. Si vous avez fait une erreur, dites le. Ça désarme complètement.

Proposez de continuer ailleurs. Un numéro, une adresse email. Ça montre que vous voulez régler, et ça sort le conflit de la place publique.

Trois à cinq lignes. Au delà, vous avez l'air de plaider.

## Un exemple

Avis : "Rendez vous à 8h, arrivé à 10h30 sans prévenir. Travail correct mais aucun respect du client."

Mauvaise réponse : "Bonjour, nous avions eu une urgence chez un autre client, ce que vous comprendrez sans doute. Nous faisons de notre mieux."

Bonne réponse : "Bonjour Monsieur X, vous avez raison sur le fond, deux heures et demie de retard sans un appel, ce n'est pas acceptable. J'étais sur un dépannage qui a débordé et j'aurais dû vous prévenir, c'est ma responsabilité. Merci pour ce que vous dites du travail. Je vous appelle cette semaine, et je serai joignable au 06 XX pour la suite."

La différence n'est pas la politesse. C'est qu'on reconnaît le fait précis au lieu de le contourner.

## Ce qu'il ne faut jamais faire

Contester les faits publiquement. Même quand le client se trompe, l'échange contradictoire vous dessert. Un lecteur extérieur ne peut pas trancher, il retient juste qu'il y a eu une dispute.

Donner des détails sur la prestation ou la situation personnelle du client. Selon ce que vous racontez, vous ouvrez un autre problème.

Répondre avec le même texte à tous les avis. Ça se voit en trois secondes et ça annule l'effet.

Ignorer. C'est la solution la plus fréquente et la plus coûteuse. Sans réponse, la version du client est la seule version disponible.

Demander à la personne de retirer son avis dans la réponse publique. Ça se fait en privé, si ça se fait.

## Face à un faux avis

Ça existe, notamment les avis de concurrents et les avis déposés sur la mauvaise entreprise.

Vous ne pouvez pas supprimer un avis vous-même. Vous pouvez le signaler à Google, en indiquant en quoi il enfreint les règles : contenu hors sujet, propos injurieux, publicité, conflit d'intérêts, avis d'une personne qui n'a jamais été cliente.

Un signalement invoquant une règle précise a nettement plus de chances d'aboutir qu'un signalement disant seulement que l'avis est faux. Soyez factuel : pas de trace de cette personne dans vos clients, aucun rendez vous à la date évoquée, prestation que vous ne proposez même pas.

Google tranche seul, ne motive pas toujours sa décision, et met parfois plusieurs semaines. Ne comptez pas dessus.

En attendant, répondez publiquement, calmement, quelque chose comme : "Bonjour, je ne retrouve aucune intervention à votre nom dans mes dossiers. Il y a peut-être une confusion avec une autre entreprise. Contactez moi au 06 XX, je regarde avec vous."

Cette réponse est lue par tout le monde et elle fait le travail, même si l'avis reste en ligne.

## La vraie parade est en amont

Un avis à une étoile sur douze avis fait mal. Le même avis sur cent-vingt avis ne se voit presque pas.

C'est le seul levier que vous contrôlez vraiment : demander des avis en continu, à chaque client satisfait, plutôt que d'y penser une fois par an. La méthode complète est dans [obtenir des avis Google](/blog/obtenir-avis-google).

Et non, une moyenne de 5,0 n'est pas le bon objectif. Une fiche à 4,6 avec cent-quarante avis inspire davantage confiance qu'une fiche à 5,0 avec neuf avis. Les gens savent qu'une note parfaite est rarement naturelle.

## Ce qu'un avis négatif vous apprend

Le point que personne n'aime entendre : la plupart des avis négatifs disent quelque chose de vrai, même mal dit.

Le retard, le devis qui traîne, le téléphone auquel personne ne répond, le chantier laissé sale. Ce sont des problèmes d'organisation qui coûtent bien plus cher en clients perdus qu'en étoiles perdues.

Quand le même reproche revient deux fois, ce n'est plus un client difficile. C'est un signal.

Si votre fiche Google a pris quelques mauvais avis et que vous ne savez pas par où reprendre, [envoyez moi le lien](/contact). Je regarde l'ensemble, la structure de la fiche et ce qui fait fuir les gens, et je vous dis ce qui se corrige en premier.
    `,
  },
  {
    id: '55',
    slug: 'apparaitre-sur-google-maps',
    titleFr: 'Mon entreprise n\'apparaît pas sur Google Maps',
    excerptFr:
      "Vous vous cherchez, vous ne vous trouvez pas. Les six causes possibles, dans l'ordre où il faut les vérifier.",
    seoTitleFr: 'Apparaître sur Google Maps : les 6 Causes',
    seoDescFr:
      "Votre entreprise ne sort pas sur Google Maps ? Les six causes réelles, dans l'ordre de vérification, et pourquoi vous chercher vous-même fausse le test.",
    readTime: '8 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-06',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['google maps', 'bloc carte', 'visibilité locale', 'fiche google'],
    related: [
      'creer-fiche-google-business',
      'etre-premier-google-dans-sa-ville',
      'fiche-google-business-optimiser',
    ],
    faqFr: [
      {
        q: 'Pourquoi je vois ma fiche mais pas mes clients ?',
        a: "Parce que Google personnalise les résultats selon votre position et votre historique. Depuis votre atelier, avec votre compte connecté, vous apparaissez toujours. Testez en navigation privée, déconnecté, et depuis une autre commune.",
      },
      {
        q: 'À quelle distance une fiche peut-elle apparaître ?',
        a: "La proximité entre la personne qui cherche et votre adresse pèse énormément. En pratique, une fiche sort surtout dans un rayon de quelques kilomètres, et bien au delà seulement si elle est nettement plus établie que ses concurrentes.",
      },
      {
        q: 'Faut-il un local pour apparaître sur Maps ?',
        a: "Non. Une entreprise qui se déplace déclare une zone d'intervention et masque son adresse. Elle apparaît alors sur les recherches faites dans cette zone, sans point précis affiché sur la carte.",
      },
    ],
    contentFr: `
C'est un des messages que je reçois le plus souvent. "Je suis sur Google Maps, mais quand un client cherche mon métier, je ne sors pas."

Dans presque tous les cas, la cause est dans cette liste, et elle se vérifie en vingt minutes.

## Avant tout : vous ne pouvez pas vous tester vous-même

Google personnalise fortement les résultats locaux. Depuis votre atelier, avec votre compte connecté et votre historique, votre fiche sort toujours. Ce test ne prouve rien.

Pour voir ce que voit un client : ouvrez une fenêtre de navigation privée, déconnectez vous, et si possible faites le depuis une autre commune ou depuis le téléphone de quelqu'un d'autre.

Beaucoup de gens s'inquiètent pour rien, et beaucoup d'autres se croient visibles alors qu'ils ne le sont que depuis leur propre canapé.

## Cause 1 : la fiche n'est pas vérifiée

Une fiche créée mais non vérifiée existe à peine. Elle peut apparaître si on tape votre nom exact, et pas ailleurs.

Vérifiez dans votre espace de gestion qu'aucun bandeau ne demande une action. Si la vérification a échoué ou a été abandonnée, tout le reste est inutile tant que ce n'est pas réglé. Le déroulé est dans [créer sa fiche Google Business](/blog/creer-fiche-google-business).

## Cause 2 : la catégorie principale est à côté

C'est la cause la plus fréquente chez les gens qui ont pourtant une fiche complète.

Google associe des recherches à des catégories. Si votre catégorie principale est "entreprise de construction" alors que vos clients tapent "carreleur", vous ne sortez pas sur "carreleur", peu importe la qualité de votre fiche.

La vérification prend cinq minutes. Cherchez votre métier dans votre ville sur Maps, ouvrez les trois premières fiches, regardez la catégorie affichée sous leur nom. Si ce n'est pas la vôtre, vous avez trouvé votre problème.

## Cause 3 : la proximité

Le facteur le plus puissant du bloc carte, et le seul que vous ne contrôlez pas.

Google privilégie ce qui est proche de la personne qui cherche. Si vous êtes à Ugine et que quelqu'un cherche depuis Chambéry, vous ne sortirez pas, sauf à être beaucoup plus établi que les entreprises chambériennes.

Ce n'est pas un bug, c'est le service qui fonctionne comme prévu : les gens veulent quelqu'un près de chez eux.

Deux conséquences pratiques. Ne vous comparez qu'à ce qui se passe dans votre zone réelle. Et pour être visible dans une commune éloignée où vous travaillez vraiment, le levier n'est plus la fiche mais une page dédiée sur votre site, avec du contenu propre à cette commune. C'est ce que je fais sur les [pages locales de ce site](/creation-site-web-albertville).

## Cause 4 : pas assez d'avis, ou plus d'avis récents

Entre deux entreprises également proches et également pertinentes, le nombre et la fraîcheur des avis départagent.

Une fiche avec trois avis datant de 2023 perd contre une fiche avec quarante avis dont trois du mois dernier. La régularité compte autant que le total.

C'est le levier le plus accessible pour une petite entreprise, parce qu'il ne dépend que de votre organisation. La méthode est ici : [obtenir des avis Google](/blog/obtenir-avis-google).

## Cause 5 : la fiche est incomplète

Google fait remonter ce qu'il comprend. Une fiche sans horaires, sans photos, sans prestations décrites et sans description lui donne peu de matière.

Les champs qui pèsent : la catégorie principale et les secondaires, les prestations listées une par une, les horaires à jour, les photos récentes, et le lien vers le site.

Ce sont trente minutes de travail, une seule fois. Le détail est dans [optimiser sa fiche Google Business](/blog/fiche-google-business-optimiser).

## Cause 6 : la fiche est suspendue ou en doublon

Deux situations plus rares mais bloquantes.

La suspension arrive après un signalement ou une infraction aux règles : nom bourré de mots-clés, adresse fausse, activité qui ne correspond pas. La fiche disparaît des résultats. Il faut corriger le motif puis demander un rétablissement, et ça prend du temps.

Le doublon arrive quand deux fiches existent pour la même entreprise, souvent parce qu'une a été créée automatiquement et l'autre par vous. Les deux se font concurrence et aucune ne monte. Il faut signaler le doublon pour qu'elles soient fusionnées.

Tapez le nom de votre entreprise sur Maps et regardez s'il n'y a pas deux résultats.

## L'ordre de vérification

Une fiche vérifiée, une seule fiche, pas de suspension. Puis la catégorie principale. Puis les avis. Puis le remplissage. Et si tout est bon, la réponse est probablement la proximité, et le travail se déplace alors vers votre site.

## Le cas des entreprises sans local

Si vous vous déplacez chez vos clients, vous n'avez pas de point affiché sur la carte, et c'est normal. Vous apparaissez sur les recherches faites dans votre zone d'intervention déclarée.

L'erreur classique consiste à déclarer une zone énorme en espérant couvrir plus large. L'effet est inverse : ça dilue votre pertinence sur les communes où vous travaillez vraiment. Déclarez ce que vous faites réellement.

Si vous avez fait le tour de cette liste sans trouver, [envoyez moi le nom de votre entreprise et votre commune](/contact). Je regarde depuis chez moi, ce qui donne déjà un point de comparaison honnête, et je vous dis ce que je vois.
    `,
  },
  {
    id: '56',
    slug: 'combien-de-temps-referencement-google',
    titleFr: 'Combien de temps avant d\'être référencé sur Google',
    excerptFr:
      "La question qu'on pose au mauvais moment, avec des réponses commerciales partout. Voilà les délais réels, levier par levier.",
    seoTitleFr: 'Combien de Temps pour Être Référencé sur Google',
    seoDescFr:
      "Fiche Google, site neuf, article de blog, page locale : les délais réels avant de voir des résultats sur Google, et ce qui les raccourcit vraiment.",
    readTime: '8 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-09',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['délai seo', 'référencement', 'indexation', 'résultats'],
    related: [
      'pourquoi-site-pas-sur-google',
      'etre-premier-google-dans-sa-ville',
      'creer-fiche-google-business',
    ],
    faqFr: [
      {
        q: 'Combien de temps pour qu\'un site neuf apparaisse sur Google ?',
        a: "Quelques jours à quelques semaines pour être simplement indexé, c'est-à-dire trouvable en tapant son nom exact. Ressortir sur des recherches concurrentielles prend plutôt trois à six mois, parfois davantage.",
      },
      {
        q: 'Peut-on accélérer le référencement en payant ?',
        a: "Vous pouvez payer de la publicité, qui donne de la visibilité immédiate et s'arrête le jour où vous cessez de payer. Le référencement naturel, lui, ne s'achète pas : personne ne peut faire monter un site plus vite en facturant davantage.",
      },
      {
        q: 'Pourquoi mon concurrent est-il devant alors que son site est moins beau ?',
        a: "Parce que Google ne juge pas l'esthétique. Il regarde l'ancienneté, le contenu qui répond réellement aux recherches, les avis, et les sites qui parlent de lui. Un site laid mais ancien et bien rempli bat un beau site vide.",
      },
    ],
    contentFr: `
"Dans combien de temps je serai sur Google ?"

La question est posée à peu près à chaque premier rendez vous, et elle mérite une réponse honnête, parce que le marché est plein de réponses commerciales.

Personne ne peut vous garantir une position. Ni moi, ni une agence, ni quelqu'un qui vous appelle en prétendant travailler avec Google. Ce qu'on peut faire, c'est vous donner des ordres de grandeur observés.

## Deux choses qu'on confond

Être indexé, c'est exister dans la base de Google. On le vérifie en tapant le nom exact de son entreprise, ou l'adresse du site. Ça prend quelques jours à quelques semaines pour un site neuf.

Être positionné, c'est sortir sur une recherche que les gens tapent réellement, du type "plombier Albertville". C'est un tout autre calendrier.

Beaucoup de gens s'alarment parce qu'ils ne sont pas positionnés au bout de trois semaines, alors qu'ils sont simplement au tout début du processus normal. Les causes de non-indexation, elles, sont détaillées dans [pourquoi mon site n'apparaît pas sur Google](/blog/pourquoi-site-pas-sur-google).

## Les délais, levier par levier

La fiche Google Business : c'est le plus rapide. Une fois la fiche vérifiée, elle peut apparaître dans le bloc carte en quelques jours à quelques semaines. Pour une entreprise locale, c'est de loin le meilleur rendement à court terme, et c'est gratuit. Voir [créer sa fiche Google Business](/blog/creer-fiche-google-business).

Une page de site sur une recherche peu concurrencée, du type "réparation de volet roulant Ugine" : souvent un à trois mois.

Une page sur une recherche concurrentielle, du type "plombier Chambéry" : trois à six mois pour commencer à bouger, davantage si les entreprises déjà en place ont dix ans d'ancienneté et deux cents avis.

Un article de blog sur une question précise : deux à quatre mois avant de prendre sa position, puis il travaille pendant des années. C'est le levier le plus lent au démarrage et le plus rentable dans la durée.

Une refonte de site déjà positionné : la position peut bouger dans les deux sens pendant quelques semaines, le temps que Google réévalue. Un plan de redirections correct limite fortement la casse.

## Pourquoi c'est si long

Trois raisons, aucune n'est un mystère.

Google doit découvrir la page, puis l'explorer, puis décider où la classer. Ces étapes prennent chacune leur temps sur un site neuf, parce qu'un site neuf n'a pas encore d'historique.

Ensuite, votre page ne s'ajoute pas à une liste, elle doit déplacer quelqu'un. Les entreprises déjà en place ont de l'ancienneté et des signaux accumulés. Il faut faire mieux qu'elles, pas juste faire correctement.

Enfin, Google observe les gens. Il regarde si les visiteurs qui arrivent sur votre page y trouvent ce qu'ils cherchaient. Ce jugement demande du trafic, donc du temps.

## Ce qui raccourcit vraiment les délais

Répondre à des questions précises plutôt qu'à des mots génériques. "Combien coûte le remplacement d'un chauffe-eau" se gagne beaucoup plus vite que "plombier". Et la personne qui tape la première recherche est plus près d'acheter.

Publier régulièrement plutôt qu'en une fois. Dix pages publiées en un an valent mieux que dix pages publiées le même jour, parce que Google voit un site qui vit.

Travailler la fiche Google et les avis en parallèle. Ils produisent des demandes pendant que le site monte lentement.

Vérifier la vitesse sur mobile. Ça ne fait pas monter à soi seul, mais un site lent fait repartir les visiteurs, et Google le remarque. Voir [la vitesse sur mobile](/blog/vitesse-site-web-mobile).

Faire parler de vous ailleurs. Une mention sur le site d'un partenaire, d'une association locale, d'un fournisseur ou d'un journal de commune vaut plus que dix modifications de balises.

## Ce qui ne marche pas

Acheter des liens. C'est le meilleur moyen de se faire sanctionner, et une sanction efface le travail de plusieurs années.

Répéter le mot-clé partout. Ça ne fonctionne plus depuis longtemps et ça rend les pages illisibles, donc contre-productives.

Créer vingt pages identiques en changeant le nom de la commune. Google identifie ce schéma et ignore les pages, quand il ne dévalorise pas le site entier.

Changer de prestataire tous les trois mois. Chaque changement remet le compteur à zéro.

## Ce qu'il faut regarder en attendant

Au début, ne regardez pas votre position. Elle bouge tous les jours, elle dépend de qui cherche et d'où, et vous allez vous rendre malheureux.

Regardez plutôt trois choses : le nombre de pages de votre site connues de Google, le nombre de recherches qui vous affichent, même en vingtième position, et le nombre d'appels ou de demandes reçus dans le mois.

La troisième est la seule qui paie vos factures.

## Mon avis, en tant que prestataire

Quand quelqu'un me dit qu'il veut être premier dans trois semaines, je réponds que ce n'est pas possible, et je propose autre chose : la fiche Google et les avis d'abord, parce que c'est là que le résultat arrive vite, puis le site et le contenu, qui prennent le relais au bout de quelques mois.

C'est aussi pour ça que je travaille dans la durée plutôt qu'en projet ponctuel. Un site livré et abandonné se fait rattraper par ceux qui continuent à publier. Le [guide de la visibilité locale](/guides/visibilite-google-locale) détaille l'ordre complet, et vous pouvez [m'écrire](/contact) si vous voulez un avis sur votre situation précise.
    `,
  },
  {
    id: '57',
    slug: 'annuaires-locaux-visibilite',
    titleFr: 'Les annuaires en ligne servent-ils encore à quelque chose',
    excerptFr:
      "Pages Jaunes, annuaires de ville, plateformes de mise en relation. Ce qui vaut encore le coup, ce qui vous coûte de l'argent pour rien.",
    seoTitleFr: 'Annuaires en Ligne : Lesquels Valent le Coup',
    seoDescFr:
      "Pages Jaunes, annuaires locaux, plateformes de mise en relation : lesquels aident vraiment un artisan à être visible, et lesquels vous facturent du vent.",
    readTime: '8 min',
    categoryFr: 'Référencement local',
    categorySlug: 'seo-local',
    date: '2026-08-12',
    author: 'Elie Ageron',
    frOnly: true,
    pillar: '/guides/visibilite-google-locale',
    tags: ['annuaires', 'citations locales', 'pages jaunes', 'NAP'],
    related: [
      'creer-fiche-google-business',
      'etre-premier-google-dans-sa-ville',
      'seo-local-guide-complet',
    ],
    faqFr: [
      {
        q: 'Faut-il payer un abonnement Pages Jaunes ?',
        a: "La fiche gratuite a son intérêt pour la cohérence de vos informations. Les formules payantes se justifient rarement pour un artisan aujourd'hui, parce que le trafic est parti vers la recherche Google et le bloc carte. Demandez le nombre de contacts générés avant de signer.",
      },
      {
        q: 'Combien d\'annuaires faut-il ?',
        a: "Une dizaine bien choisis et cohérents valent mieux que cent inscriptions automatiques. L'objectif n'est pas le volume, c'est que vos informations soient identiques partout.",
      },
      {
        q: 'Les annuaires améliorent-ils le référencement ?',
        a: "Indirectement. Ils confirment l'existence et l'adresse de votre entreprise, ce qui conforte votre fiche Google. Ils apportent rarement des visites directes, sauf les annuaires sectoriels très ciblés.",
      },
    ],
    contentFr: `
Question posée par un menuisier de la vallée : "on m'appelle tous les mois pour des annuaires, à quatre cents euros l'année. Je prends ou pas ?"

Réponse courte : dans son cas, non. Réponse longue, parce que le sujet n'est pas complètement noir ou blanc.

## À quoi servent les annuaires aujourd'hui

Il y a vingt ans, les gens ouvraient un annuaire pour trouver un plombier. Aujourd'hui ils tapent "plombier" plus leur ville sur Google, et ils cliquent dans le bloc carte.

Le trafic direct des annuaires s'est effondré, et ce n'est un secret pour personne.

Il leur reste une utilité réelle, mais indirecte : ils confirment que votre entreprise existe, à cette adresse, avec ce téléphone. Quand la même information se retrouve sur plusieurs sites indépendants, Google gagne en confiance sur votre fiche.

C'est ce qu'on appelle les citations locales. Ce n'est pas spectaculaire, c'est une brique de fond.

## La règle qui compte plus que le choix des annuaires

Vos informations doivent être strictement identiques partout : nom exact, adresse exacte, téléphone exact.

Pas "Plomberie Dupont" ici et "Dupont Plomberie Chauffage" là. Pas une adresse avec "rue" ici et "r." ailleurs. Pas un ancien numéro qui traîne sur trois sites.

Les informations contradictoires sont pires que l'absence d'information : elles créent un doute que rien ne vient lever, et le doute se paie en visibilité.

C'est aussi la raison pour laquelle une inscription en masse sur deux cents annuaires est une mauvaise idée. Vous perdez le contrôle de ce qui est écrit où, et vous ne pourrez plus corriger le jour où vous déménagez.

## Ce qui vaut vraiment le coup

Votre fiche Google Business, avant tout le reste. Ce n'est pas un annuaire, c'est le canal principal, et tout le monde le sait. Si elle n'est pas faite, [commencez par là](/blog/creer-fiche-google-business).

Les annuaires officiels de votre secteur. L'annuaire de votre chambre de métiers ou de commerce, les répertoires professionnels, les listes d'entreprises certifiées ou labellisées. Ils sont crédibles, gratuits ou déjà payés par votre cotisation, et ils inspirent confiance aux gens qui vérifient.

Les annuaires de votre métier. Un ostéopathe sur un annuaire de praticiens, un artisan sur un annuaire de sa fédération, un gîte sur une plateforme touristique. Ceux là apportent parfois de vraies demandes, parce que les gens y vont avec une intention précise.

Les sites de votre territoire. L'office de tourisme, la page économie de la mairie, l'association de commerçants, la communauté de communes. Souvent gratuits, souvent bien vus de Google, et rarement demandés parce que personne n'y pense.

Vos partenaires et fournisseurs. Beaucoup de fabricants ont une page de revendeurs ou d'installateurs agréés. C'est un des liens les plus faciles à obtenir, et personne ne le demande.

## Ce qui ne vaut souvent pas le coup

Les abonnements annuaires classiques à plusieurs centaines d'euros. Ils ont pu fonctionner, ils fonctionnent nettement moins. Avant de signer, posez une question simple : combien de contacts m'a apporté cette formule l'an dernier, et comment le mesurez-vous. Si la réponse est vague, vous avez votre réponse.

Les annuaires génériques créés uniquement pour référencer des entreprises. On les reconnaît à leur absence totale de contenu propre et à leur design de 2009. Ils n'apportent ni visite ni crédibilité.

Les services d'inscription automatique sur des centaines de sites. Ils créent exactement le désordre que je décrivais plus haut.

Les plateformes de mise en relation qui vous vendent des devis à l'unité. Elles fonctionnent pour certains, et il faut savoir ce qu'on achète : vous payez pour être mis en concurrence sur le prix, souvent avec quatre autres artisans, sur un client qui n'a pas choisi de vous appeler. C'est un canal, ce n'est pas de la visibilité, et ça ne vous appartient pas.

## Les appels et les emails de démarchage

Vous en recevez, tout le monde en reçoit. Quelques repères.

Google ne vous appellera pas pour vous vendre votre fiche. Elle est gratuite.

Aucun prestataire ne peut garantir la première place. Personne ne contrôle le classement.

Une facture pour une inscription que vous n'avez jamais demandée n'est pas une facture. Ne payez pas, et vérifiez ce que vous avez signé.

Un abonnement de plusieurs années sur un site que vous ne possédez pas est un mauvais échange. Ce que vous construisez doit rester chez vous.

## Ce que je fais chez mes clients

Je consacre une heure à la cohérence : le même nom, la même adresse, le même téléphone, partout, en corrigeant les vieilles fiches qui traînent.

J'inscris ensuite l'entreprise sur les cinq à dix endroits qui font sens pour son métier et son territoire, et je m'arrête là.

Le temps restant part sur ce qui rapporte davantage : les avis, le contenu du site et [les pages locales](/creation-site-web-albertville). Cinquante annuaires supplémentaires ne pèseront jamais autant que trente avis récents.

Le [guide complet de la visibilité locale](/guides/visibilite-google-locale) remet ces leviers dans l'ordre, et si vous avez un démarchage en cours et un doute, [envoyez moi le devis](/contact). Je vous dis ce qu'il contient réellement.
    `,
  },
];
