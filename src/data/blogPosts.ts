import type { BlogPost, CategorySlug } from './blog/types';
import { blogCategories, getCategory, getCategorySlug } from './blog/types';
import { socialPostsA } from './blog/posts-social-a';
import { socialPostsB } from './blog/posts-social-b';
import { videoPosts } from './blog/posts-video';
import { localPosts } from './blog/posts-local';
import { webPosts } from './blog/posts-web';
import { creationPosts } from './blog/posts-creation';
import { googlePosts } from './blog/posts-google';
import { tourismePosts } from './blog/posts-tourisme';
import { socialPostsC } from './blog/posts-social-c';
import { metiersPosts } from './blog/posts-metiers';
import { decisionsPosts } from './blog/posts-decisions';

export type { BlogPost, BlogCategory, CategorySlug, BlogFaqItem } from './blog/types';
export { blogCategories, getCategory, getCategorySlug } from './blog/types';

/**
 * Articles bilingues publies avant le pivot "reseaux sociaux" d'aout 2026.
 * Les articles plus recents vivent dans src/data/blog/ et sont en francais seul.
 */
const legacyPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'pourquoi-site-web-2025',
    titleFr: 'Pourquoi votre entreprise a besoin d\'un site web en 2025',
    titleEn: 'Why your business needs a website in 2025',
    excerptFr: "On vous recommande à quelqu'un. Cette personne tape votre nom sur Google avant de vous appeler. Ce qu'elle trouve à cet instant décide de la suite.",
    excerptEn: 'Someone recommends you. That person types your name into Google before calling. What they find at that moment decides the rest.',
    seoTitleFr: 'Pourquoi un Site Web en 2025 | Elie Ageron',
    seoTitleEn: 'Why You Need a Website in 2025 | Elie Ageron',
    seoDescFr: 'Votre entreprise ne commence plus à votre porte mais sur un écran. Ce qu\'un site change concrètement pour une activité locale.',
    seoDescEn: 'Your business no longer starts at your front door but on a screen. What a website concretely changes for a local business.',
    readTime: '5 min',
    categoryFr: 'Stratégie',
    categoryEn: 'Strategy',
    date: '2026-01-20',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    contentFr: `
## On vous cherche sur Google avant de vous appeler

Quelqu'un vous recommande à un ami. Cet ami ne décroche pas son téléphone tout de suite : il tape d'abord votre nom sur Google. C'est devenu le réflexe par défaut, pour un couvreur comme pour un cabinet de conseil.

Ce qu'il trouve à cet instant décide de la suite. S'il ne trouve rien, ou une page qui date visiblement d'il y a huit ans, le doute s'installe. Personne ne se dit "ce site est vieux donc le travail est mauvais". Mais l'hésitation suffit pour qu'il regarde aussi le concurrent d'à côté, et là vous jouez à armes inégales.

## Un site ne vend pas, il rassure

C'est la nuance que la plupart des gens ratent. Votre site ne convaincra personne qui n'avait aucun besoin. Il rassure quelqu'un qui hésitait déjà.

Il répond aux questions que les gens n'osent pas poser au téléphone : combien ça coûte à peu près, combien de temps ça prend, à quoi ressemble le travail fini, est-ce que vous intervenez dans ma commune. Quelqu'un qui a lu tout ça avant d'appeler arrive avec un projet clair et beaucoup moins de méfiance. L'appel dure dix minutes au lieu de quarante.

## Il travaille quand vous ne pouvez pas

Une bonne partie des demandes tombent le soir et le week-end, quand les gens ont enfin le temps de s'occuper de leurs projets. Vous, à ce moment-là, vous êtes à table.

Un formulaire récupère la demande, l'horodate et vous l'envoie. Ça paraît banal. C'est pourtant exactement là que les clients se perdent : celui qui n'arrive pas à vous joindre un dimanche soir appelle quelqu'un d'autre le lundi matin.

## Vous êtes chez vous, pas locataire

Sur Instagram ou Facebook, votre audience ne vous appartient pas. Un changement d'algorithme, un compte suspendu par erreur, et des années de travail deviennent inaccessibles du jour au lendemain. J'ai vu des comptes disparaître sans que personne n'obtienne jamais d'explication de la plateforme.

Votre site, personne ne peut vous le retirer. Vous décidez de ce qu'on voit en premier, dans quel ordre, et de ce qui se passe quand quelqu'un veut vous écrire.

## Ce que ça change, honnêtement

Ne comptez pas sur un site pour transformer votre activité tout seul. Ce qu'il fait, c'est arrêter les fuites. Les gens qui vous cherchaient et ne vous ont pas trouvé. Ceux qui hésitaient et que rien n'a rassurés. Ceux qui ont voulu vous écrire à 23h.

Mises bout à bout sur une année, ces fuites coûtent nettement plus cher que le site.

---

Envie d'en parler ? [Réservez un appel gratuit](/contact), on regarde où vous en êtes.
    `,
    contentEn: `
## People look you up before they call

Someone recommends you to a friend. That friend does not pick up the phone straight away: they type your name into Google first. It has become the default reflex, for a roofer as much as for a consultancy.

What they find at that moment decides the rest. Nothing at all, or a page that visibly dates from eight years ago, and the doubt sets in. Nobody thinks "this site is old so the work must be bad". But the hesitation is enough for them to check the competitor too, and then you are not on equal footing.

## A website does not sell, it reassures

That is the nuance most people miss. Your site will not convince anyone who had no need. It reassures someone who was already hesitating.

It answers the questions people do not dare ask on the phone: roughly what does it cost, how long does it take, what does the finished work look like, do you even cover my area. Someone who has read all that before calling arrives with a clear project and far less suspicion. The call takes ten minutes instead of forty.

## It works when you cannot

A good share of enquiries land in the evening and at weekends, when people finally have time for their own projects. You, at that moment, are having dinner.

A form catches the enquiry, timestamps it and sends it to you. It sounds mundane. It is exactly where clients get lost: the person who cannot reach you on a Sunday evening calls someone else on Monday morning.

## You own the place, you are not renting

On Instagram or Facebook, your audience does not belong to you. An algorithm change, an account suspended by mistake, and years of work become unreachable overnight. I have watched accounts disappear without anyone ever getting an explanation out of the platform.

Nobody can take your website away. You decide what people see first, in what order, and what happens when someone wants to get in touch.

## What it actually changes

Do not count on a website to transform your business on its own. What it does is stop the leaks. The people who looked for you and did not find you. The ones who hesitated and were never reassured. The ones who wanted to write to you at 11pm.

Added up across a year, those leaks cost considerably more than the site.

---

Want to talk it through? [Book a free call](/contact) and we will look at where you stand.
    `,
  },
  {
    id: '2',
    slug: 'optimiser-taux-conversion',
    titleFr: 'Comment optimiser votre taux de conversion',
    titleEn: 'How to optimise your conversion rate',
    excerptFr: "Avoir du trafic et n'avoir aucun contact, c'est le pire des deux mondes : vous payez la visibilité sans en récolter les clients. Voilà par où je commence.",
    excerptEn: 'Getting traffic and getting no enquiries is the worst of both worlds: you pay for the visibility without collecting the clients. Here is where I start.',
    seoTitleFr: 'Optimiser son Taux de Conversion | Elie Ageron',
    seoTitleEn: 'Optimise Your Conversion Rate | Elie Ageron',
    seoDescFr: 'Attirer des visiteurs ne sert à rien si personne ne vous contacte. Les leviers concrets pour transformer le trafic en clients.',
    seoDescEn: 'Traffic is useless if nobody contacts you. The concrete levers that turn visitors into clients.',
    readTime: '7 min',
    categoryFr: 'Conversion',
    categoryEn: 'Conversion',
    date: '2026-02-12',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    pillar: '/guides/creer-site-web-tpe',
    contentFr: `
## Le problème n'est presque jamais le trafic

Quand un client me dit que son site ne marche pas, on regarde les statistiques ensemble. Neuf fois sur dix il y a du monde qui passe. Ce qui manque, c'est la suite.

Un visiteur qui repart sans rien faire n'a pas trouvé ce qu'il cherchait, ou il l'a trouvé mais quelque chose l'a arrêté. Ce quelque chose est toujours réparable, et c'est rarement là où on le croit.

## Ce qu'on doit comprendre en cinq secondes

Ouvrez votre page d'accueil sur un téléphone et lisez le premier écran, celui qu'on voit sans faire défiler. Est-ce qu'un inconnu comprend ce que vous faites et pour qui ?

La plupart des sites ratent ça. Ils écrivent "Bienvenue chez nous" ou "L'excellence au service de vos projets". Ça ne veut rien dire. "Couvreur à Albertville, devis sous 48h", c'est laid dans une réunion marketing et ça convertit trois fois mieux.

Le test que j'utilise : montrez votre premier écran à quelqu'un qui ne connaît pas votre métier, pendant cinq secondes, puis demandez-lui ce que vous vendez. S'il hésite, réécrivez.

## Les avis, mais les vrais

Un visiteur qui hésite cherche une confirmation extérieure. Il ne vous croira pas sur parole, il croira quelqu'un comme lui.

Ce qui fonctionne : un avis avec un prénom, un nom d'entreprise et une phrase précise sur ce qui a été fait. Ce qui ne fonctionne pas : "Super travail, je recommande", signé M. D. Un avis vague fait plus de mal que pas d'avis du tout, parce qu'il a l'air inventé.

Placez-en un juste à côté du bouton de contact, pas dans une section dédiée en bas de page que personne n'atteint.

## Rendez le contact ridiculement facile

C'est l'endroit où je récupère le plus de conversions chez mes clients, et c'est le moins glamour.

Un formulaire à neuf champs perd des gens à chaque ligne. Nom, email, message : ça suffit pour commencer une conversation. Vous poserez le reste des questions au téléphone, et vous aurez au moins quelqu'un au bout du fil.

Affichez aussi votre numéro en clair, cliquable, en haut de page. Beaucoup de gens préfèrent appeler et ne rempliront jamais un formulaire. Chez plusieurs de mes clients artisans, le téléphone reste le premier canal, loin devant.

## La vitesse et le pouce

Un site lent perd des visiteurs avant même d'avoir dit bonjour. Au-delà de trois secondes de chargement sur mobile, une bonne partie des gens sont déjà repartis, et vous ne les verrez jamais dans vos statistiques de conversion parce qu'ils n'ont jamais vraiment chargé la page.

Testez votre site sur votre propre téléphone, en 4G, pas en wifi chez vous. Puis essayez de remplir votre formulaire avec un seul pouce, debout. Si c'est pénible pour vous, imaginez pour quelqu'un qui ne tient pas particulièrement à vous contacter.

## Ne changez qu'une chose à la fois

Dernier point, celui que tout le monde saute. Si vous modifiez le titre, les couleurs et le formulaire le même jour, vous ne saurez jamais ce qui a marché.

Changez une chose, laissez tourner deux à trois semaines, regardez. C'est lent, c'est ennuyeux, et c'est la seule façon d'apprendre quelque chose sur vos visiteurs.

---

Envie qu'on regarde votre site ensemble ? [Écrivez-moi](/contact), je vous dis ce que je changerais en premier.
    `,
    contentEn: `
## The problem is almost never traffic

When a client tells me their site is not working, we look at the analytics together. Nine times out of ten, people are coming. What is missing is what happens next.

A visitor who leaves without doing anything either did not find what they came for, or found it and something stopped them. That something is always fixable, and it is rarely where people assume.

## What has to be clear in five seconds

Open your homepage on a phone and read the first screen, the one you see without scrolling. Would a stranger understand what you do and who you do it for?

Most sites fail this. They write "Welcome" or "Excellence at the service of your projects". That means nothing. "Roofer in Albertville, quote within 48h" is ugly in a marketing meeting and converts three times better.

The test I use: show your first screen to someone who does not know your trade, for five seconds, then ask what you sell. If they hesitate, rewrite it.

## Reviews, but real ones

A hesitating visitor is looking for outside confirmation. They will not take your word for it, they will take the word of someone like them.

What works: a review with a first name, a company, and a specific sentence about what was done. What does not work: "Great work, highly recommend", signed M. D. A vague review does more harm than none at all, because it looks invented.

Put one right next to the contact button, not in a dedicated section at the bottom of the page that nobody reaches.

## Make getting in touch ridiculously easy

This is where I recover the most conversions for clients, and it is the least glamorous.

A nine-field form loses people on every line. Name, email, message: that is enough to start a conversation. You will ask the rest on the phone, and at least you will have someone on the phone.

Show your number in plain text, tappable, at the top of the page. Plenty of people would rather call and will never fill in a form. For several of my trade clients the phone is still the first channel by a wide margin.

## Speed and thumbs

A slow site loses visitors before it has said hello. Past three seconds of load time on mobile, a good share of people have already gone, and you will never see them in your conversion stats because the page never really loaded for them.

Test your site on your own phone, on mobile data, not on your home wifi. Then try filling in your own form with one thumb, standing up. If it annoys you, imagine someone who is not especially keen to contact you.

## Change one thing at a time

Last point, the one everyone skips. If you change the headline, the colours and the form on the same day, you will never know what worked.

Change one thing, let it run two or three weeks, look at the numbers. It is slow, it is boring, and it is the only way to learn anything about your visitors.

---

Want me to look at your site with you? [Write to me](/contact) and I will tell you what I would change first.
    `,
  },
  {
    id: '3',
    slug: 'seo-local-guide-complet',
    titleFr: 'SEO local : le guide complet pour être trouvé près de chez vous',
    titleEn: 'Local SEO: the complete guide to getting found nearby',
    excerptFr: "Quand quelqu'un cherche votre métier dans votre ville, il y a trois résultats visibles avant de faire défiler. Voilà comment en occuper un.",
    excerptEn: 'When someone searches your trade in your town, three results are visible before they scroll. Here is how to occupy one of them.',
    seoTitleFr: 'Guide du SEO Local | Elie Ageron',
    seoTitleEn: 'Local SEO Complete Guide | Elie Ageron',
    seoDescFr: 'Apparaître quand un client cherche votre métier dans votre ville. Fiche Google, avis, mots-clés locaux : la méthode complète.',
    seoDescEn: 'Show up when a client searches your trade in your town. Google profile, reviews, local keywords: the full method.',
    readTime: '10 min',
    categoryFr: 'SEO',
    categoryEn: 'SEO',
    date: '2026-03-08',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    contentFr: `
## Ce que voit vraiment quelqu'un qui cherche "plombier Albertville"

Ouvrez votre téléphone et tapez votre métier plus votre ville. Regardez ce qui remplit l'écran avant que vous ayez besoin de faire défiler.

En haut, une ou deux annonces payantes. Juste en dessous, une carte avec trois fiches d'établissement. Et seulement après, les premiers résultats classiques. Autrement dit, sur un écran de téléphone, la bataille se joue sur ces trois fiches, pas sur la première position "organique" dont tout le monde parle.

C'est pour ça que je commence toujours par la fiche Google, jamais par le site.

## La fiche Google, dans l'ordre d'importance

Quatre choses comptent vraiment, et pas à parts égales.

La catégorie principale, d'abord. C'est le champ le plus lourd de toute la fiche et beaucoup de gens le remplissent mal. Un artisan qui pose des fenêtres et se classe en "entreprise de construction" au lieu de "installateur de fenêtres" perd des recherches tous les jours. Prenez la catégorie la plus précise qui existe, même si elle vous semble réductrice.

Les avis ensuite. Le nombre compte, la fraîcheur compte encore plus. Vingt avis dont le dernier date de trois ans pèsent moins que huit avis étalés sur les six derniers mois. Google veut savoir si vous êtes toujours en activité.

Les photos, surtout les vôtres. Les photos prises par les clients et par vous ont plus de poids que des visuels de banque d'images, et elles se voient tout de suite dans les résultats.

Les horaires, enfin. Des horaires faux, ou vides pendant les jours fériés, dégradent la fiche. C'est bête et ça se corrige en cinq minutes.

## Les avis : demandez-les au bon moment

Presque personne ne laisse un avis spontanément. Il faut demander, et le moment fait tout.

Le bon moment, c'est juste après la livraison, quand le client est content et que le travail est frais. Pas trois semaines plus tard par email groupé.

La méthode qui marche le mieux chez mes clients : un SMS, le jour même, avec le lien direct vers le formulaire d'avis. Pas "laissez-nous un avis sur Google", mais un lien qui ouvre directement la fenêtre. Chaque clic supplémentaire divise le taux de réponse.

Et répondez à tous les avis, y compris les mauvais, surtout les mauvais. Une réponse calme et factuelle à un avis à deux étoiles rassure plus que dix avis parfaits.

## Sur votre site : nommez les lieux

Google doit pouvoir relier votre site à un endroit précis. Ça veut dire écrire le nom de votre ville et de vos communes d'intervention dans vos titres et vos textes, sans que ça devienne illisible.

Une page par zone importante fonctionne bien, à condition qu'elle contienne du vrai contenu. Une page "plombier à Ugine" qui reprend mot pour mot la page "plombier à Albertville" en changeant juste le nom de la ville ne sert à rien et peut même vous pénaliser. Si vous n'avez rien de spécifique à dire sur une commune, ne faites pas la page.

Ajoutez aussi vos coordonnées complètes en pied de page, écrites exactement comme sur votre fiche Google. Même orthographe, même format de téléphone. Cette cohérence est un signal que Google vérifie.

## Les liens locaux valent plus que les liens lointains

Un lien depuis le site de la mairie, d'une association de commerçants, d'un club sportif que vous sponsorisez ou du journal local vaut plus, pour votre référencement local, qu'un lien acheté sur un site généraliste à l'autre bout du pays.

Ce ne sont pas des liens qu'on achète, ce sont des liens qu'on obtient en existant dans sa commune. Sponsoriser un club, participer à un événement, se faire référencer dans un annuaire d'artisans local. C'est lent et ça ne se délègue pas vraiment.

## Le mobile n'est pas un détail

La quasi-totalité des recherches locales se font sur un téléphone, souvent en déplacement, parfois avec une connexion moyenne. Si votre site met cinq secondes à s'afficher, la personne est déjà revenue sur la carte pour appeler le suivant.

Testez votre propre site en 4G, pas depuis votre wifi. C'est souvent une surprise désagréable.

## Combien de temps avant de voir quelque chose

La fiche Google bouge vite : quelques semaines après une bonne optimisation, on voit généralement les appels augmenter.

Le site, c'est plus long. Comptez trois à six mois pour qu'une page locale commence à se positionner sur des requêtes disputées. Ce n'est pas anormal, c'est le temps que met Google à vous observer.

---

Besoin d'un coup de main sur votre visibilité locale ? [Écrivez-moi](/contact), on regarde votre fiche et votre site ensemble.
    `,
    contentEn: `
## What someone searching "plumber Albertville" actually sees

Open your phone and type your trade plus your town. Look at what fills the screen before you need to scroll.

At the top, one or two paid ads. Just below, a map with three business listings. And only after that, the first classic results. In other words, on a phone screen the fight happens over those three listings, not over the first organic position everyone talks about.

That is why I always start with the Google profile, never with the site.

## The Google profile, in order of weight

Four things really matter, and not equally.

The primary category first. It is the heaviest field on the whole profile and plenty of people fill it in badly. A tradesperson who fits windows and files under "construction company" instead of "window installer" loses searches every day. Pick the most precise category that exists, even if it feels narrow.

Reviews next. The count matters, freshness matters more. Twenty reviews whose most recent is three years old weigh less than eight spread over the last six months. Google wants to know whether you are still trading.

Photos, especially your own. Pictures taken by you and by customers carry more weight than stock visuals, and they show up immediately in results.

Opening hours last. Wrong hours, or blanks over public holidays, degrade the profile. It is a silly problem and it takes five minutes to fix.

## Reviews: ask at the right moment

Almost nobody leaves a review spontaneously. You have to ask, and the timing is everything.

The right moment is right after delivery, while the client is happy and the work is fresh. Not three weeks later in a bulk email.

The method that works best for my clients: a text message, same day, with the direct link to the review form. Not "please leave us a Google review", but a link that opens the window straight away. Every extra click halves the response rate.

And reply to every review, including the bad ones, especially the bad ones. A calm, factual reply to a two-star review reassures more than ten perfect ones.

## On your site: name the places

Google needs to connect your site to a specific place. That means writing your town and the areas you cover into your titles and your text, without making it unreadable.

One page per important area works well, provided it contains real content. A "plumber in Ugine" page that copies the "plumber in Albertville" page word for word with the town swapped is useless and can even hurt you. If you have nothing specific to say about a town, do not build the page.

Also put your full contact details in the footer, written exactly as they appear on your Google profile. Same spelling, same phone format. That consistency is a signal Google checks.

## Local links beat distant ones

A link from the town hall website, a traders' association, a sports club you sponsor or the local paper is worth more, for local search, than a bought link on a generic site across the country.

These are not links you buy, they are links you earn by existing in your community. Sponsor a club, turn up at an event, get listed in a local trade directory. It is slow and it does not really delegate.

## Mobile is not a detail

Nearly all local searches happen on a phone, often on the move, sometimes on a mediocre connection. If your site takes five seconds to appear, the person is already back on the map calling the next name.

Test your own site on mobile data, not on your home wifi. It is often an unpleasant surprise.

## How long before you see anything

The Google profile moves fast: a few weeks after a proper cleanup, calls usually go up.

The site takes longer. Expect three to six months before a local page starts ranking on contested searches. That is not a fault, it is the time Google takes to observe you.

---

Want a hand with your local visibility? [Write to me](/contact) and we will look at your profile and your site together.
    `,
  },
  {
    id: '4',
    slug: 'landing-page-efficace',
    titleFr: 'Anatomie d\'une landing page qui convertit',
    titleEn: 'Anatomy of a landing page that converts',
    excerptFr: "Une page, un objectif, aucune sortie de secours. Voilà comment je les construis, bloc par bloc, et les erreurs que je vois le plus souvent.",
    excerptEn: 'One page, one goal, no emergency exits. Here is how I build them, block by block, and the mistakes I see most often.',
    seoTitleFr: 'Anatomie d\'une Landing Page | Elie Ageron',
    seoTitleEn: 'Anatomy of a Landing Page | Elie Ageron',
    seoDescFr: 'Ce qui fait qu\'une page unique convertit ou pas : la promesse, la preuve, l\'appel à l\'action. Structure détaillée, section par section.',
    seoDescEn: 'What makes a single page convert or not: the promise, the proof, the call to action. Section by section breakdown.',
    readTime: '6 min',
    categoryFr: 'Design',
    categoryEn: 'Design',
    date: '2026-04-05',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    pillar: '/guides/creer-site-web-tpe',
    contentFr: `
## Une page d'accueil et une landing page ne font pas le même métier

Une page d'accueil accueille tout le monde et laisse choisir. Une landing page ne laisse pas choisir : elle a un seul objectif, et tout ce qui n'y mène pas est du bruit.

C'est pour ça qu'on y enlève le menu de navigation. Ça surprend souvent mes clients la première fois. Mais chaque lien vers une autre page est une porte de sortie, et les gens sortent.

## Le premier écran fait le tri

Vous avez à peu près trois secondes avant que la personne décide de rester ou de partir. Sur cet écran il faut trois choses, et rien d'autre.

Une phrase qui dit ce que vous faites et pour qui. Pas votre slogan, votre promesse. "Rénovation de salle de bain à Albertville, chantier livré en 10 jours" bat "Votre bien-être, notre passion" à chaque fois.

Une deuxième phrase qui rend la première crédible. Un délai, un chiffre, une garantie, une zone d'intervention.

Un bouton, visible sans faire défiler. Un seul. Deux boutons de même poids visuel, c'est déjà une hésitation offerte au visiteur.

## Parlez du résultat, pas de la méthode

L'erreur la plus fréquente sur les pages que je reprends : une liste de ce que fait le prestataire, alors que le visiteur veut savoir ce que ça change pour lui.

"Nous utilisons une technique d'enduit à la chaux" ne dit rien à personne. "Vos murs ne moisissent plus, même dans une pièce sans fenêtre" parle à quelqu'un qui a un problème d'humidité.

Écrivez d'abord la phrase du côté du client, ajoutez la technique ensuite si elle rassure.

## La preuve doit être vérifiable

Un témoignage anonyme ne vaut rien. Un prénom, un nom d'entreprise, une ville, idéalement une photo ou un logo, et une phrase qui décrit un résultat précis.

Placez le meilleur avis juste après le premier écran, pas en bas de page. Les gens décident tôt, et la preuve sert à confirmer une intuition, pas à conclure une démonstration.

Si vous n'avez pas encore d'avis, ne mettez rien. Une section "Ils nous font confiance" avec trois logos inventés se voit immédiatement et coûte plus cher qu'un vide.

## Répondez aux objections avant qu'on les pose

Listez les cinq questions que vos prospects posent systématiquement au téléphone. Le prix, le délai, ce qui se passe si ça ne convient pas, qui fait le travail réellement, ce qu'il faut préparer de leur côté.

Mettez-les en fin de page, en questions et réponses. Chaque objection levée sur la page est un appel qui commence sans méfiance.

## Le formulaire tue plus de conversions que le design

Trois champs. Nom, moyen de contact, message. C'est tout ce dont vous avez besoin pour démarrer une conversation.

À chaque champ ajouté, une partie des gens abandonne. Le budget, le type de projet, comment ils vous ont connu, tout ça se demande au téléphone, quand la personne est déjà engagée.

Et affichez votre numéro à côté. Une bonne partie des visiteurs ne remplira jamais de formulaire mais appellera volontiers.

## Ce que je vérifie avant de livrer

Je relis la page sur un téléphone, en tenant compte du fait que le bouton principal doit rester atteignable au pouce. Je vérifie qu'il n'y a qu'un seul appel à l'action répété plusieurs fois, et pas cinq propositions différentes. Et je fais lire la première phrase à quelqu'un d'extérieur au projet.

Si cette personne ne peut pas me dire ce que vend la page, je réécris avant de livrer.

---

Envie d'une page qui fait ce travail-là ? [Parlons de votre projet](/contact).
    `,
    contentEn: `
## A homepage and a landing page do different jobs

A homepage welcomes everyone and lets them choose. A landing page does not let anyone choose: it has one goal, and anything that does not lead there is noise.

That is why we remove the navigation menu. It surprises my clients the first time. But every link to another page is an exit, and people take exits.

## The first screen does the sorting

You have roughly three seconds before someone decides to stay or leave. That screen needs three things and nothing else.

A sentence saying what you do and who for. Not your slogan, your promise. "Bathroom renovation in Albertville, delivered in 10 days" beats "Your wellbeing, our passion" every time.

A second sentence that makes the first one credible. A lead time, a number, a guarantee, a service area.

One button, visible without scrolling. One. Two buttons of equal visual weight is a hesitation you handed the visitor for free.

## Talk about the outcome, not the method

The most common mistake on pages I take over: a list of what the provider does, when the visitor wants to know what changes for them.

"We use a lime plaster technique" means nothing to anyone. "Your walls stop growing mould, even in a room with no window" speaks to someone with a damp problem.

Write the client-side sentence first, add the technique afterwards if it reassures.

## Proof has to be checkable

An anonymous testimonial is worth nothing. A first name, a company, a town, ideally a photo or a logo, and a sentence describing a specific outcome.

Put your best review right after the first screen, not at the bottom. People decide early, and proof confirms a hunch rather than closing an argument.

If you do not have reviews yet, put nothing. A "trusted by" strip with three invented logos is spotted instantly and costs more than an empty space.

## Answer objections before they are raised

List the five questions prospects always ask on the phone. Price, timeline, what happens if they are unhappy, who actually does the work, what they need to prepare.

Put them at the bottom of the page as questions and answers. Every objection handled on the page is a call that starts without suspicion.

## The form kills more conversions than the design

Three fields. Name, a way to reach them, message. That is everything you need to start a conversation.

With every extra field, a share of people give up. Budget, project type, how they heard about you: ask all of that on the phone, once the person is already engaged.

And show your phone number next to it. A good share of visitors will never fill a form but will happily call.

## What I check before delivering

I reread the page on a phone, keeping in mind that the main button has to stay reachable with a thumb. I check there is one call to action repeated several times rather than five different offers. And I get someone outside the project to read the first sentence.

If that person cannot tell me what the page is selling, I rewrite before delivering.

---

Want a page that does that job? [Let's talk about your project](/contact).
    `,
  },
  {
    id: '5',
    slug: 'combien-coute-un-site-web',
    titleFr: 'Combien coûte un site web ? La vraie réponse',
    titleEn: 'How much does a website cost? The real answer',
    excerptFr: 'Entre 0€ et 50 000€, la fourchette est large. Ce qui détermine le prix, ce ne sont pas les heures passées, c\'est ce que le site vous rapporte.',
    excerptEn: 'Between €0 and €50,000, the range is wide. What determines the price isn\'t the hours spent, it\'s what the site brings back to you.',
    seoTitleFr: 'Combien Coûte un Site Web ? | Elie Ageron',
    seoTitleEn: 'How Much Does a Website Cost? | Elie Ageron',
    seoDescFr: 'Les vrais écarts entre un site à 500 et un site à 5000 euros, et comment savoir de quel côté vous avez besoin d\'être.',
    seoDescEn: 'The real gap between a 500 and a 5000 euro website, and how to know which side you need to be on.',
    readTime: '6 min',
    categoryFr: 'Stratégie',
    categoryEn: 'Strategy',
    date: '2026-04-12',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    pillar: '/guides/creer-site-web-tpe',
    contentFr: `
## La question que tout le monde se pose

On me la pose plusieurs fois par semaine. Parfois au téléphone, parfois par WhatsApp : "C'est quoi le budget pour un site web ?"

La réponse honnête, c'est : ça dépend. Je sais que c'est frustrant à entendre. Alors voilà une vraie réponse, avec des chiffres et sans langue de bois.

## Ce que vous allez trouver sur le marché

Un site web peut coûter 0€ ou 80 000€. Ces deux extrêmes existent vraiment, et entre les deux, il y a un spectre immense. Concrètement, voici comment ça se découpe.

Les créateurs en ligne comme Wix, Squarespace ou Webflow en mode sans-code coûtent de 0 à 30€ par mois. Vous faites tout vous-même avec des templates préfabriqués. Le résultat peut être propre si vous y consacrez du temps. Mais votre site ressemblera à celui de vos concurrents qui utilisent le même template, et le référencement reste limité. Ce n'est pas fait pour ça.

Un freelance facture entre 500€ et 5 000€. C'est là que se situent la plupart des petites entreprises. Un bon freelance s'occupe du design, du développement et du référencement de base. La qualité varie énormément d'un prestataire à l'autre, et c'est pour ça que le portfolio et les avis clients comptent autant que le tarif affiché.

Une agence démarre à 5 000€ et monte souvent bien au-delà. Vous payez aussi les locaux, les commerciaux, les réunions de cadrage. Pour une TPE avec des besoins standard, c'est souvent plus cher que nécessaire.

## Ce qui fait monter la facture

Le nombre de pages est le premier facteur. Une landing page unique (une seule page qui présente votre offre et pousse le visiteur à vous contacter) est bien moins coûteuse qu'un site avec huit pages de contenu, un blog et des pages de service détaillées.

Les fonctionnalités spécifiques ajoutent aussi du temps, donc du coût. Un système de réservation en ligne, un espace client, une boutique e-commerce : chacun représente des heures de développement supplémentaires.

Et puis il y a le niveau de personnalisation. Un site conçu entièrement sur mesure, avec une identité visuelle unique, demande plus de travail qu'un template modifié. C'est souvent là que réside la vraie différence entre un site qui ressemble à n'importe qui et un site qui ressemble à vous.

## Un site moins cher peut-il quand même bien fonctionner ?

Oui. Le prix ne garantit pas la qualité.

Un site à 800€ fait par quelqu'un qui comprend la conversion et le référencement battra souvent un site à 5 000€ conçu par une agence qui se concentre sur l'esthétique. Ce qui compte vraiment : est-ce que le visiteur comprend immédiatement ce que vous faites ? Est-ce qu'il sait quoi faire pour vous contacter ? Est-ce que la page charge vite sur mobile ?

Si oui, le site fait son travail, quel que soit son prix.

## La vraie question à se poser

Ce n'est pas "combien ça coûte" mais "combien ça va me rapporter".

Un site qui vous amène un client supplémentaire par mois est amorti en quelques semaines pour la plupart des activités. Un artisan qui facture 1 500€ de travaux n'a besoin que d'un seul nouveau chantier via Google pour rentabiliser sa présence en ligne.

Si vous démarrez avec un budget serré, une landing page bien conçue vaut mieux qu'un site vitrine bâclé deux fois plus cher. L'important, c'est qu'elle fasse son travail.

---

Vous voulez savoir ce qu'un site peut réalistement changer pour votre activité ? [On en parle, c'est gratuit.](/contact)
    `,
    contentEn: `
## The question everyone asks

I get it several times a week. Over the phone, on WhatsApp: "What's the budget for a website?"

The honest answer is: it depends. I know that's frustrating to hear. So here's a real answer, with real numbers.

## What you'll find on the market

A website can cost €0 or €80,000. Both extremes exist, and between them is an enormous range. Here's how it breaks down in practice.

**Online builders** (Wix, Squarespace, Webflow no-code): €0 to €30 per month. You do everything yourself with pre-made templates. The result can look decent if you invest the time. But your site will look like your competitors' who used the same template, and SEO remains limited. It's not really built for that.

**A freelancer**: between €500 and €5,000. This is where most small businesses land. A good freelancer handles design, development and basic SEO. Quality varies enormously from one provider to another, which is why portfolio and client reviews matter as much as the listed price.

**An agency**: from €5,000, often much higher. You're also paying for offices, salespeople, and kickoff meetings. For a small business with standard needs, it's often more expensive than necessary.

## What drives the price up

The number of pages is the first factor. A single landing page is far less expensive than a site with eight content pages, a blog and detailed service pages.

Specific features add time, therefore cost. An online booking system, a client portal, an e-commerce shop: each represents additional development hours.

Then there's the level of customisation. A fully bespoke site, with a unique visual identity, requires more work than a modified template. This is often where the real difference lies between a site that looks like anyone else and one that looks like you.

## Can a cheaper site still perform well?

Yes. Price doesn't guarantee quality.

An €800 site built by someone who understands conversion and SEO will often outperform a €5,000 site designed by an agency focused on aesthetics. What actually matters: does the visitor immediately understand what you do? Do they know how to contact you? Does the page load quickly on mobile?

If yes, the site does its job, regardless of cost.

## The real question to ask

It's not "how much does it cost" but "how much will it bring back."

A site that brings you one extra client per month pays for itself within weeks for most businesses. A tradesperson who invoices €1,500 per job only needs one new project from Google to recoup their online investment.

If you're starting with a tight budget, a well-designed landing page beats a botched showcase site that costs twice as much. What matters is that it does its job.

---

Want to know what a site could realistically do for your business? [Let's talk, it's free.](/contact)
    `,
  },
  {
    id: '6',
    slug: 'site-web-artisan',
    titleFr: 'Artisan, avez-vous vraiment besoin d\'un site web ?',
    titleEn: 'Tradesperson: do you really need a website?',
    excerptFr: '"Mes clients, c\'est le bouche-à-oreille." C\'est vrai. Mais ce que vous ne voyez pas, c\'est le nombre de personnes qui vous ont cherché sur Google et n\'ont rien trouvé.',
    excerptEn: '"My clients come from word of mouth." True. But what you don\'t see is how many people searched for you on Google and found nothing.',
    seoTitleFr: 'Site Web pour Artisan | Elie Ageron',
    seoTitleEn: 'Website for a Craftsperson | Elie Ageron',
    seoDescFr: 'Bouche à oreille, fiche Google, site internet : ce dont un artisan a vraiment besoin pour remplir son carnet de commandes.',
    seoDescEn: 'Word of mouth, Google profile, website: what a craftsperson actually needs to fill their order book.',
    readTime: '5 min',
    categoryFr: 'Stratégie',
    categoryEn: 'Strategy',
    date: '2026-04-19',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    pillar: '/guides/creer-site-web-tpe',
    contentFr: `
## La phrase que j'entends tout le temps

"Moi, j'ai pas besoin d'un site. Mes clients, c'est le bouche-à-oreille."

Je l'entends régulièrement, surtout chez les artisans bien installés. Et c'est une vraie question, pas une mauvaise excuse. Si votre agenda est plein, pourquoi investir ?

Voilà pourquoi.

## Ce qui se passe avant que votre téléphone sonne

Un ami recommande votre travail à quelqu'un. Super. Mais aujourd'hui, avant d'appeler, cette personne va faire une chose : elle va vous chercher sur Google.

Si elle ne trouve rien, elle hésite. Si elle trouve un site impossible à lire sur mobile ou qui date de 2014, elle passe à celui d'à côté. Qui lui, a pris la peine de soigner sa présence.

Le bouche-à-oreille reste précieux, mais il ne garantit plus la conversion tout seul. Les gens vérifient. Toujours, et de plus en plus.

## La réalité de vos clients aujourd'hui

Les 25-45 ans, ceux qui font appel à un artisan pour une rénovation, une installation, une mise aux normes, ne cherchent plus dans les pages jaunes. Ils cherchent sur Google, ils lisent des avis, ils regardent des photos de vos réalisations.

Si vous n'êtes pas là, vous n'existez pas pour eux. C'est brutal à entendre, mais c'est réversible en quelques semaines.

## Ce qu'un site change vraiment au quotidien

La première chose, c'est la crédibilité avant l'appel. Un visiteur qui tombe sur un site propre, avec quelques photos de chantiers terminés et deux ou trois témoignages clients, vous fait confiance avant même de vous avoir au téléphone. Le ton de la conversation est différent. Vous partez avec un avantage.

Ensuite, il y a la disponibilité. Vous êtes sur un chantier de 8h à 18h, le téléphone dans la poche. Vous ne pouvez pas toujours décrocher. Votre formulaire de contact, lui, prend le message à votre place. Vous le trouvez le soir, vous rappelez. Aucun contact perdu.

Et puis, la visibilité locale. Avec un site bien fait, vous pouvez apparaître quand quelqu'un cherche "électricien Annecy" ou "plombier Albertville" sur Google. Ces gens-là ont un problème maintenant et cherchent quelqu'un maintenant. C'est exactement là où vous voulez être.

## "Mais mes clients me connaissent déjà"

Oui. Et le jour où vous voudrez développer votre activité, recruter un apprenti ou vous installer dans une nouvelle zone, vous aurez besoin d'un flux régulier de nouveaux contacts.

Le bouche-à-oreille ne se pilote pas. Il ne se développe pas à volonté. Un site, si.

Et même si vous ne cherchez pas à grandir : pensez à ce que vous perdez chaque mois. Les gens qui vous cherchent, qui ne vous trouvent pas, qui appellent quelqu'un d'autre. C'est une perte silencieuse. Mais elle est bien réelle.

## Ce dont vous avez besoin concrètement

Pour un artisan, c'est souvent simple. Une page claire avec ce que vous faites, votre zone d'intervention, vos réalisations en photo, et un moyen de vous contacter. Pas besoin d'un site de dix pages.

Une landing page bien conçue suffit pour exister en ligne et commencer à capter des contacts. C'est un investissement qui se rembourse souvent dès le premier nouveau chantier trouvé via Google. Après ça, il continue de travailler pour vous.

---

Vous êtes artisan et vous voulez savoir ce qu'un site peut changer pour vous ? [On en parle en 30 minutes.](/contact)
    `,
    contentEn: `
## The phrase I hear all the time

"I don't need a website. My clients come from word of mouth."

I hear it regularly, especially from well-established tradespeople. And it's a genuine question, not a bad excuse. If your diary is full, why invest?

Here's why.

## What happens before your phone rings

A friend recommends your work to someone. Great. But today, before calling, that person will do one thing: search for you on Google.

If they find nothing, they hesitate. If they find a site that's impossible to read on mobile or looks like it's from ten years ago, they move on to whoever comes up next. The one who took the time to sort out their online presence.

Word of mouth is still valuable, but it no longer guarantees conversion on its own. People check. Always, and increasingly.

## The reality of your clients today

The 25-45 year olds, those who hire tradespeople for renovations, installations or compliance work, no longer look in phone directories. They search on Google, read reviews, and look at photos of your completed jobs.

If you're not there, you don't exist for them. That's hard to hear, but it's fixable within a few weeks.

## What a website actually changes day to day

The first thing is credibility before the call. A visitor who lands on a clean site, with a few photos of finished work and two or three client testimonials, already trusts you before they've spoken to you. The tone of the conversation is different. You start with an advantage.

Then there's availability. You're on a job from 8am to 6pm, phone in your pocket. You can't always answer. Your contact form takes the message for you. You find it in the evening, you call back. No contact lost.

And then there's local visibility. With a well-built site, you can appear when someone searches "electrician Annecy" or "plumber Chambéry" on Google. These people have a problem right now and are looking for someone right now. That's exactly where you want to be.

## "But my clients already know me"

Yes. And the day you want to grow your business, take on an apprentice, or move into a new area, you'll need a steady flow of new contacts.

Word of mouth can't be controlled or scaled on demand. A website can.

And even if you're not looking to grow: think about what you're losing every month. People searching for you, finding nothing, calling someone else. It's a real loss, even if you never see it.

## What you actually need

For a tradesperson, it's often straightforward. One clear page with what you do, your service area, photos of your work, and a way to contact you. No need for a ten-page site.

A well-designed landing page is enough to exist online and start capturing contacts. It's an investment that typically pays for itself with the first new job found through Google. After that, it keeps working for you.

---

You're a tradesperson and want to know what a website could change for you? [Let's talk, 30 minutes, free.](/contact)
    `,
  },
  {
    id: '7',
    slug: 'pourquoi-site-pas-sur-google',
    titleFr: 'Mon site est en ligne depuis des semaines. Pourquoi je n\'apparais pas sur Google ?',
    titleEn: 'My site has been live for weeks. Why am I not showing on Google?',
    excerptFr: 'Vous avez lancé votre site, vous êtes content du résultat. Puis vous tapez votre activité sur Google... et rien. C\'est l\'une des frustrations les plus communes après une mise en ligne.',
    excerptEn: 'You launched your site, you\'re happy with the result. Then you type your business into Google... and nothing. It\'s one of the most common frustrations after going live.',
    seoTitleFr: 'Site Absent de Google : Pourquoi | Elie Ageron',
    seoTitleEn: 'Site Not Showing on Google | Elie Ageron',
    seoDescFr: 'Votre site est en ligne depuis des semaines et reste introuvable. Les causes réelles, dans l\'ordre, et comment les vérifier.',
    seoDescEn: 'Your site has been live for weeks and still cannot be found. The real causes, in order, and how to check them.',
    readTime: '7 min',
    categoryFr: 'SEO',
    categoryEn: 'SEO',
    date: '2026-04-19',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    contentFr: `
## Vous n'êtes pas seul

Vous avez mis votre site en ligne. Vous êtes content du résultat. Et puis vous tapez le nom de votre activité sur Google et... vous ne vous trouvez pas.

C'est l'une des premières frustrations après une mise en ligne. Et c'est presque toujours explicable. Il y a rarement un vrai mystère là-dedans. Voici les raisons les plus fréquentes, et ce que vous pouvez faire.

## Google ne sait pas encore que vous existez

C'est souvent là que ça coince. Google ne parcourt pas automatiquement internet en temps réel. Si personne ne lui a signalé votre site, il peut mettre plusieurs semaines à vous trouver tout seul.

La solution : Google Search Console. C'est un outil gratuit de Google. Vous soumettez votre sitemap (un fichier qui liste toutes les pages de votre site), et vous demandez l'indexation manuelle de votre page d'accueil. Ça prend dix minutes et ça accélère considérablement le processus.

Si vous ne l'avez pas fait, faites-le aujourd'hui, avant de chercher une autre explication.

## Être indexé et être visible sur Google, c'est deux choses différentes

C'est un point que beaucoup confondent. Google peut connaître l'existence de votre site et quand même ne pas vous afficher en première page.

Pour se classer, Google évalue des centaines de critères. Les plus importants pour un nouveau site :

La pertinence du contenu. Vos textes parlent-ils des mots-clés que vos clients tapent vraiment ? "Plombier chauffagiste Annecy" doit apparaître naturellement dans vos titres et vos paragraphes, pas juste dans un code caché que personne ne lit.

L'autorité de votre domaine. C'est la confiance que Google vous accorde au fil du temps. Un site de trois semaines n'a pas encore cette autorité. C'est normal, ça se construit avec du contenu, du temps, et des liens depuis d'autres sites vers le vôtre.

La qualité technique. Vitesse de chargement, compatibilité mobile, structure de la page : Google prend en compte l'expérience que vous offrez aux visiteurs pour décider si vous méritez d'être en haut.

## Votre site est peut-être bloqué par erreur

Ça arrive plus souvent qu'on ne le croit, surtout sur les sites récemment lancés. Pendant le développement, les développeurs activent parfois une option qui dit à Google de ne pas indexer le site (pour éviter d'indexer une version incomplète). Si cette option a été oubliée après la mise en ligne, Google vous voit mais refuse d'afficher vos pages.

Comment vérifier : dans Google Search Console, l'onglet "Couverture" vous dira si vos pages sont exclues de l'index. Vous pouvez aussi taper "site:votre-domaine.com" dans Google. Si rien ne s'affiche, c'est un signal qu'il y a un blocage.

C'est un problème qui se règle en cinq minutes une fois qu'on sait où chercher.

## Vous cherchez les mauvais mots-clés

C'est subtil, mais très répandu. Vous tapez "création de site web" parce que c'est ce que vous proposez. Mais vos clients, eux, tapent "faire un site pour mon salon de coiffure" ou "site internet pour boulangerie pas cher".

Le bon référencement, ça commence par comprendre ce que vos clients cherchent vraiment, pas ce que vous pensez qu'ils cherchent. Ces deux choses ne sont pas toujours les mêmes.

## Ce qu'il faut garder en tête

Un nouveau site bien construit met en général trois à six mois pour commencer à apparaître sur des mots-clés compétitifs. Ce n'est pas un signe que quelque chose ne va pas. C'est le temps que Google prend pour vous observer, vous analyser et décider de vous faire confiance.

Pendant ce temps, le meilleur que vous puissiez faire : soumettre votre sitemap, vérifier qu'aucun blocage n'est actif, et continuer à écrire du contenu qui répond aux vraies questions de vos clients. Chaque page bien rédigée est une porte d'entrée supplémentaire depuis Google.

Le référencement, c'est un travail de fond. Mais avec les bons fondamentaux en place, les résultats arrivent. Et ils durent.

---

Votre site ne remonte pas sur Google et vous voulez comprendre pourquoi ? [Regardons ça ensemble.](/contact)
    `,
    contentEn: `
## You're not alone

You launched your site. You're happy with the result. Then you type your business into Google and... nothing.

It's one of the first frustrations after going live. And it's almost always explainable. There's rarely a real mystery. Here are the most common reasons, and what you can do.

## Google doesn't know you exist yet

This is often where it gets stuck. Google doesn't automatically crawl the entire internet in real time. If no one has signalled your site to it, it can take several weeks to find you on its own.

The solution: Google Search Console. It's a free Google tool. You submit your sitemap (a file listing all your site's pages) and request manual indexing for your homepage. It takes ten minutes and significantly speeds up the process.

If you haven't done this, do it today, before looking for any other explanation.

## Being indexed and being visible on Google are two different things

This is something many people confuse. Google can know your site exists and still not show you on page one.

To rank, Google evaluates hundreds of criteria. The most important for a new site:

Relevance of your content. Do your texts talk about the keywords your clients actually type? "Plumber Annecy" should appear naturally in your titles and paragraphs, not just hidden in code that no one reads.

Your domain authority. This is the trust Google grants you over time. A three-week-old site doesn't have this authority yet. That's normal. It builds with content, time, and links from other sites pointing to yours.

Technical quality. Loading speed, mobile compatibility, page structure: Google considers the experience you offer visitors when deciding whether you deserve to rank.

## Your site might be blocked by mistake

This happens more often than you'd think, especially on recently launched sites. During development, developers sometimes activate an option telling Google not to index the site (to avoid indexing an incomplete version). If this option was forgotten after launch, Google sees you but refuses to display your pages.

How to check: in Google Search Console, the "Coverage" tab will tell you if your pages are excluded from the index. You can also type "site:your-domain.com" into Google. If nothing comes up, that's a signal there's a block in place.

It's a problem that takes five minutes to fix once you know where to look.

## You're searching for the wrong keywords

This is subtle but very common. You type "web design" because that's what you offer. But your clients type "website for my hairdressing salon" or "cheap website for bakery."

Good SEO starts with understanding what your clients are actually searching for, not what you think they're searching for. Those two things aren't always the same.

## What to keep in mind

A well-built new site generally takes three to six months to start appearing for competitive keywords. That's not a sign something is wrong. It's the time Google takes to observe you, analyse you, and decide to trust you.

In the meantime, the best you can do: submit your sitemap, check no blocks are active, and keep writing content that answers your clients' real questions. Every well-written page is an additional entry point from Google.

SEO is a long game. But with the right foundations in place, results come. And they last.

---

Your site isn't showing on Google and you want to understand why? [Let's look at it together.](/contact)
    `,
  },
  {
    id: '8',
    slug: 'reseaux-sociaux-artisan-savoie',
    titleFr: 'Artisan en Savoie : les réseaux sociaux servent-ils vraiment à quelque chose ?',
    titleEn: 'Craftsperson in Savoie: are social media actually worth it?',
    excerptFr: "La plupart des artisans que je rencontre pensent que les réseaux sociaux, c'est pour les autres. Voilà ce que j'ai constaté sur le terrain, et ce que ça change vraiment sur un carnet de commandes.",
    excerptEn: "Most craftspeople I meet think social media is for other people. Here is what I have seen on the ground, and what it actually changes for a booking calendar.",
    seoTitleFr: 'Réseaux Sociaux Artisan Savoie | Elie Ageron',
    seoTitleEn: 'Social Media for Trades in Savoie | Elie Ageron',
    seoDescFr: 'Ce que les réseaux changent vraiment pour un artisan en Savoie, ce qui marche sur le terrain et ce qui fait perdre du temps.',
    seoDescEn: 'What social media actually changes for a craftsperson in Savoie, what works on the ground and what wastes time.',
    readTime: '6 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    date: '2026-05-14',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## "Instagram, franchement, je vois pas l'intérêt"

C'est la première phrase d'un charpentier de la vallée quand on a commencé à parler de réseaux sociaux. Et il avait raison sur un point : passer une heure par jour à faire défiler son téléphone pour récolter trois likes, ça ne remplit aucun carnet de commandes.

Mais ce n'est pas de ça qu'on parle.

## Ce que les gens font vraiment avant de vous appeler

Un client potentiel entend parler de vous par un voisin. Avant de décrocher son téléphone, il fait deux choses. Il tape votre nom sur Google. Et il regarde s'il vous trouve sur Instagram ou Facebook.

Sur Google, il vérifie que vous êtes sérieux. Sur les réseaux, il cherche autre chose : à quoi ressemble votre travail, et à quoi vous ressemblez, vous. C'est un réflexe de contrôle avant l'appel. Une page avec trois chantiers récents et votre visage dessus enlève un doute que ni votre site ni vos avis Google ne peuvent enlever complètement.

Quand il n'y a rien, ça ne vous disqualifie pas. Ça laisse juste la place à celui d'à côté qui, lui, a posté.

## Pourquoi ça marche mieux pour un métier manuel que pour à peu près tout le monde

Un consultant qui veut faire des vidéos doit inventer un sujet. Vous, vous avez une charpente qui se monte, un mur qui tombe, une machine qui découpe. Vous filmez ce que vous faites déjà.

C'est un avantage énorme et la plupart des artisans ne le voient pas. Les métiers concrets sont les plus faciles à filmer, parce que le sujet est là, sous les yeux, en train de se produire. Une pose de fenêtre en accéléré, c'est trente secondes de contenu que personne n'a besoin d'écrire.

Les vidéos qui marchent le mieux chez mes clients artisans sont toujours les mêmes :

- Un avant / après, sans commentaire, juste le chantier
- Un geste technique montré de près, filmé une seule fois, sans montage compliqué
- Une réponse à une question que les clients posent tout le temps ("pourquoi ça coûte ça ?")

Rien de spectaculaire. Ce sont juste des choses vraies.

## Le local, c'est votre vrai atout

On vous a probablement raconté qu'il fallait viser un million de vues. Pour vous, c'est presque le contraire.

Une vidéo qui fait 4 000 vues dont 3 000 dans un rayon de trente kilomètres autour d'Albertville vaut infiniment plus qu'une vidéo à 200 000 vues éparpillées dans toute la France. Vous ne cherchez pas de la célébrité, vous cherchez les vingt personnes de votre vallée qui vont refaire leur toiture cette année.

Les algorithmes d'Instagram et de TikTok montrent en priorité vos vidéos à des comptes géographiquement proches quand votre contenu est ancré localement : un lieu reconnaissable, un accent, un nom de commune dans la légende. Utilisez-le.

## Combien de temps ça prend, honnêtement

Si vous le faites seul et correctement : deux à trois heures par semaine, entre filmer, monter et publier. C'est ça le vrai coût, et c'est ce qui fait que la plupart des artisans arrêtent au bout de six semaines.

Ce n'est pas un manque de motivation. C'est qu'après une journée de chantier, personne n'a envie d'ouvrir une appli de montage.

Il y a trois issues possibles. Vous tenez le rythme (rare). Vous arrêtez (le plus fréquent). Ou vous déléguez, ce qui est exactement le service que je propose : je viens filmer une journée, et vos vidéos sortent tout le mois sans que vous y pensiez.

## Si vous voulez essayer seul d'abord

Faites-le, sincèrement. C'est la meilleure façon de savoir si ça vous plaît.

Commencez par un seul réseau, celui où sont déjà vos clients. En Savoie, pour un artisan, c'est presque toujours Facebook et Instagram avant TikTok. Publiez deux fois par semaine pendant deux mois, sans exception. Filmez à la verticale. Ajoutez des sous-titres, parce que la majorité des gens regardent sans le son.

Et regardez ce qui se passe au bout de huit semaines. Pas au bout de deux : les huit premières publications ne servent qu'à ce que l'algorithme comprenne qui vous êtes et à qui vous montrer.

---

Vous voulez que quelqu'un s'en occupe à votre place ? [Voici comment je travaille sur les réseaux sociaux](/reseaux-sociaux), ou [écrivez-moi directement](/contact).
    `,
    contentEn: `
## "Honestly, I don't see the point of Instagram"

That was the first thing a carpenter from the valley said when we started talking about social media. He was right about one thing: scrolling for an hour a day to collect three likes fills no order book.

But that is not what we are talking about.

## What people actually do before they call you

A potential client hears about you from a neighbour. Before picking up the phone, they do two things. They type your name into Google. And they check whether they can find you on Instagram or Facebook.

On Google they are checking that you are legitimate. On social they are looking for something else: what your work looks like, and what you look like. It is a verification reflex before the call. A page with three recent jobs and your face on it removes a doubt that neither your site nor your Google reviews can fully remove.

When there is nothing, it does not disqualify you. It just leaves room for the person next door who did post.

## Why it works better for a hands-on trade than for almost anyone else

A consultant who wants to make videos has to invent a subject. You have a roof frame going up, a wall coming down, a machine cutting. You film what you are already doing.

That is a huge advantage and most craftspeople never see it. Physical trades are the easiest to film, because the subject is right there, happening. A window installation sped up is thirty seconds of content nobody had to write.

The videos that work best for my trade clients are always the same ones:

- A before and after, no commentary, just the job
- A technical move filmed close up, one take, no fancy editing
- An answer to a question clients ask constantly ("why does it cost that much?")

Nothing spectacular. Just true things.

## Local is your real advantage

Someone probably told you the goal is a million views. For you it is almost the opposite.

A video with 4,000 views, 3,000 of them within twenty miles of Albertville, is worth far more than a video with 200,000 views scattered across the country. You are not chasing fame. You are after the twenty people in your valley redoing their roof this year.

Instagram and TikTok show your videos first to geographically close accounts when your content is locally anchored: a recognisable place, an accent, a town name in the caption. Use that.

## How long it takes, honestly

Doing it yourself and doing it properly: two to three hours a week, between filming, editing and posting. That is the real cost, and it is why most craftspeople quit after six weeks.

It is not a motivation problem. It is that after a day on site, nobody wants to open an editing app.

There are three outcomes. You keep the rhythm (rare). You stop (most common). Or you hand it off, which is exactly the service I offer: I come and film for one day, and your videos go out all month without you thinking about it.

## If you want to try it yourself first

Do it, genuinely. It is the best way to find out whether you enjoy it.

Start with one network, the one your clients already use. In Savoie, for a trade business, that is almost always Facebook and Instagram before TikTok. Post twice a week for two months, no exceptions. Film vertically. Add subtitles, because most people watch with the sound off.

Then look at what happens after eight weeks. Not after two: the first eight posts only exist so the algorithm works out who you are and who to show you to.

---

Want someone to handle it for you? [Here is how I work on social media](/reseaux-sociaux), or [write to me directly](/contact).
    `,
  },
  {
    id: '9',
    slug: 'video-courte-entreprise-locale',
    titleFr: 'Pourquoi la vidéo courte marche si bien pour une petite entreprise locale',
    titleEn: 'Why short-form video works so well for a small local business',
    excerptFr: "La toute première publication faite pour une cliente a atteint 56 619 vues. Voilà pourquoi ce format donne autant à des structures qui n'ont ni budget pub ni notoriété.",
    excerptEn: "The very first post I published for a client reached 56,619 views. Here is why this format gives so much to businesses with no ad budget and no name recognition.",
    seoTitleFr: 'Vidéo Courte pour Entreprise Locale | Elie Ageron',
    seoTitleEn: 'Short Video for Local Business | Elie Ageron',
    seoDescFr: '56 619 vues sur la toute première publication faite pour une cliente. Pourquoi le format vertical donne autant aux structures sans budget publicitaire.',
    seoDescEn: '56,619 views on the first post published for a client. Why vertical video gives so much to businesses with no ad budget.',
    readTime: '7 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    date: '2026-05-28',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## 56 619 vues, et c'était la première publication

La toute première vidéo que j'ai publiée pour une cliente, formatrice en rééducation de l'écriture, a fait 56 619 vues. Pas la dixième, pas celle d'après six mois de rodage : la première. Elle a été tournée un matin chez elle, avec une caméra sur un trépied et un micro accroché à son pull. Elle répondait à une question qu'on lui pose depuis dix ans.

À dire tout de suite, parce que ça compte : ce n'est pas un résultat normal et personne ne peut vous le promettre. C'est un très bon coup, pas une moyenne.

Elle n'a pas de budget publicitaire. Elle n'était connue de personne en dehors de sa commune. Elle a juste dit quelque chose de vrai, face caméra, en quarante secondes.

C'est ce qui rend ce format différent de tout ce qui existait avant.

## Avant, il fallait déjà être connu pour être vu

Sur Facebook en 2018, votre publication était montrée à vos abonnés. Pas d'abonnés, pas de vues. Pour élargir, il fallait payer.

Les formats courts verticaux ont cassé ça. Instagram Reels, TikTok et YouTube Shorts ne montrent pas d'abord votre vidéo à vos abonnés. Ils la montrent à un petit échantillon de gens qui ne vous connaissent pas, mesurent leur réaction, et élargissent si la réaction est bonne.

Concrètement, une entreprise avec 80 abonnés peut toucher 50 000 personnes. Ça ne serait pas arrivé il y a huit ans.

## Ce que l'algorithme regarde vraiment

Trois choses, dans cet ordre d'importance.

Est-ce que les gens regardent jusqu'au bout ? C'est le signal le plus lourd. Une vidéo de 20 secondes regardée entièrement bat une vidéo de 90 secondes abandonnée à la moitié. C'est pour ça que la durée idéale est courte, pas parce que les gens seraient devenus incapables de concentration.

Est-ce qu'ils la regardent deux fois ? Une vidéo qui se reboucle sans qu'on s'en rende compte est un excellent signal.

Est-ce qu'ils l'envoient à quelqu'un ? Un partage en message privé vaut beaucoup plus qu'un like. Un like coûte zéro effort. Envoyer une vidéo à sa sœur signifie que le contenu a servi à quelque chose.

Les likes et les commentaires comptent, mais moins qu'on le croit.

## Pourquoi les petites structures partent avec un avantage

Une grande marque tourne ses vidéos avec une agence, un script validé par trois personnes et un plateau. Le résultat ressemble à une publicité, et tout le monde le sent en une seconde. Résultat, les gens passent.

Vous, vous n'avez pas de service communication. Vous parlez comme vous parlez. Vous êtes filmé dans votre atelier, dans votre cabinet, dans votre cuisine. Sur ces plateformes, ce défaut apparent est l'atout principal, parce que l'attention va à ce qui a l'air vrai.

Je le vois à chaque tournage. Les prises où le client oublie qu'il est filmé et se met à expliquer son métier avec ses mains font systématiquement plus de vues que les prises parfaites.

## Ce que ça rapporte concrètement

Il faut être clair : les vues ne sont pas des clients.

Une vidéo à 56 000 vues ne remplit pas un agenda toute seule. Ce qu'elle fait, c'est autre chose, et c'est plus lent.

Elle vous rend familier. Quelqu'un vous voit trois fois en deux mois sans jamais vous chercher activement. Le jour où il a besoin de votre métier, votre nom est déjà là. Il ne compare pas trois prestataires : il vous écrit.

C'est le mécanisme qui fait vendre, et il ne se mesure pas dans les statistiques d'Instagram. Il se mesure quand un nouveau client vous dit au téléphone "je vous suis depuis quelques mois".

## Ce qu'il faut derrière

Une vidéo qui marche envoie des gens quelque part. Si ce quelque part est un profil vide sans lien, sans adresse et sans moyen de vous joindre, l'attention retombe en une journée.

C'est pour ça que je fais les sites et les réseaux ensemble. Les réseaux amènent les gens, le site les transforme en rendez-vous. Séparés, les deux fonctionnent moins bien.

## Le vrai facteur limitant

Ce n'est ni le matériel, ni le talent, ni l'algorithme. C'est la régularité.

Une vidéo isolée ne fait rien, même si elle marche. Ce qui produit un effet, c'est 8 à 12 vidéos publiées sur deux mois, sans trou. C'est là que la plupart des gens décrochent, parce que personne n'a le temps de faire ça en plus de son métier.

Ma réponse à ce problème est simple : je viens filmer une journée, et j'ai de quoi publier pendant un mois entier.

---

Envie de voir ce que ça donnerait chez vous ? [Le détail de la prestation est ici](/reseaux-sociaux).
    `,
    contentEn: `
## 56,619 views, and it was the first post

The very first video I published for a client, a handwriting rehabilitation trainer, got 56,619 views. Not the tenth, not one after six months of practice: the first. It was shot one morning at her place, with a camera on a tripod and a mic clipped to her jumper. She was answering a question people have been asking her for ten years.

Worth saying straight away, because it matters: that is not a normal result and nobody can promise it to you. It was a very good hit, not an average.

She has no advertising budget. Nobody outside her town had heard of her. She just said something true, to camera, in forty seconds.

That is what makes this format different from everything before it.

## You used to need an audience to get an audience

On Facebook in 2018, your post was shown to your followers. No followers, no views. To go wider, you paid.

Short vertical formats broke that. Instagram Reels, TikTok and YouTube Shorts do not show your video to your followers first. They show it to a small sample of people who do not know you, measure the reaction, and widen if the reaction is good.

In practice, a business with 80 followers can reach 50,000 people. That would not have happened eight years ago.

## What the algorithm actually looks at

Three things, in this order of weight.

Do people watch to the end? That is the heaviest signal. A 20 second video watched fully beats a 90 second video abandoned halfway. That is why short works, not because attention spans collapsed.

Do they watch it twice? A video that loops without the viewer noticing is an excellent signal.

Do they send it to someone? A share in a private message is worth far more than a like. A like costs nothing. Sending a video to your sister means the content was useful.

Likes and comments count, but less than people think.

## Why small businesses start with an advantage

A big brand shoots with an agency, a script approved by three people and a lit set. The result looks like an ad, and everyone feels it within a second. So people scroll past.

You have no communications department. You talk the way you talk. You get filmed in your workshop, your practice, your kitchen. On these platforms that apparent weakness is the main asset, because attention goes to what looks true.

I see it on every shoot. The takes where the client forgets the camera and starts explaining their work with their hands consistently outperform the perfect ones.

## What it actually brings in

Let me be clear: views are not clients.

A video at 56,000 views does not fill a calendar on its own. What it does is something else, and it is slower.

It makes you familiar. Someone sees you three times in two months without ever searching for you. The day they need your trade, your name is already there. They do not compare three providers, they message you.

That is the mechanism that sells, and it does not show up in Instagram statistics. It shows up when a new client says on the phone, "I have been following you for a few months."

## What you need behind it

A video that works sends people somewhere. If that somewhere is an empty profile with no link, no address and no way to reach you, the attention drops within a day.

That is why I do sites and social together. Social brings people in, the site turns them into appointments. Separately, both work less well.

## The real limiting factor

It is not the gear, the talent or the algorithm. It is consistency.

A single video does nothing, even a successful one. What produces an effect is 8 to 12 videos published across two months with no gaps. That is where most people drop off, because nobody has time to do that on top of running a business.

My answer to that problem is simple: I come and film for one day, and I have enough to publish for a full month.

---

Want to see what it would look like for you? [The full service is here](/reseaux-sociaux).
    `,
  },
  {
    id: '10',
    slug: 'combien-publier-reseaux-sociaux',
    titleFr: 'Combien de fois faut-il publier par semaine ? La réponse honnête',
    titleEn: 'How often should you post per week? The honest answer',
    excerptFr: "Tout le monde vous donne un chiffre différent. Voici ce que je constate réellement chez mes clients, et pourquoi le rythme compte moins que la constance.",
    excerptEn: "Everyone gives you a different number. Here is what I actually see with my clients, and why the rhythm matters less than the consistency.",
    seoTitleFr: 'Combien Publier par Semaine ? | Elie Ageron',
    seoTitleEn: 'How Often Should You Post? | Elie Ageron',
    seoDescFr: 'Deux à trois fois par semaine, et voici pourquoi. Le rythme qui tient dans la durée quand les réseaux ne sont pas votre métier.',
    seoDescEn: 'Two to three times a week, and here is why. The rhythm that holds when social media is not your actual job.',
    readTime: '5 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    date: '2026-06-09',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## La réponse courte : deux à trois fois par semaine

Si vous voulez un chiffre et rien d'autre, le voilà. C'est ce que je mets en place chez la majorité de mes clients, et c'est ce qui tient dans la durée.

Maintenant, pourquoi ce chiffre, et pourquoi les autres réponses que vous avez lues sont souvent fausses.

## Pourquoi pas une fois par jour

Vous avez sûrement lu qu'il fallait publier quotidiennement. C'est un conseil qui vient de comptes dont le métier est de créer du contenu. Pour eux, c'est logique : c'est leur activité principale.

Pour une thérapeute, un artisan ou un restaurateur, publier tous les jours veut dire une seule chose : arrêter au bout de trois semaines. J'ai vu ce scénario un nombre incalculable de fois. Deux semaines d'enthousiasme, une semaine de traîne, puis un compte figé pendant huit mois.

Un compte abandonné fait plus de mal qu'un compte lent. Un visiteur qui tombe sur une dernière publication datant de novembre se demande si vous êtes encore en activité.

## Pourquoi pas une fois par semaine non plus

En dessous de deux publications hebdomadaires, deux choses se produisent.

L'algorithme n'a pas assez de matière pour comprendre à qui vous montrer. Chaque vidéo repart quasiment de zéro. Vous restez coincé dans le premier palier de diffusion sans jamais en sortir.

Et les gens vous oublient entre deux publications. La familiarité, celle qui fait qu'on pense à vous le jour où on a besoin de votre métier, se construit par répétition rapprochée. Une fois tous les dix jours, c'est trop espacé pour laisser une trace.

## Le seul chiffre qui compte vraiment

Ce n'est pas la fréquence, c'est le nombre de semaines consécutives sans trou.

Trois publications par semaine pendant six semaines puis plus rien : effet quasi nul. Deux publications par semaine pendant huit mois : votre compte devient un vrai canal d'acquisition.

C'est frustrant à entendre parce que ça veut dire que rien ne se passe vite. Mais c'est comme ça que ça fonctionne. Les résultats visibles arrivent généralement entre la sixième et la dixième semaine, jamais avant.

## Ce qui bloque les gens en réalité

Ce n'est presque jamais le fait de publier. Appuyer sur un bouton prend trente secondes.

Ce qui bloque, c'est de trouver quoi dire, puis de filmer, puis de monter. Trois obstacles empilés, à chaque publication, pour toujours.

C'est exactement le raisonnement qui m'a poussé à construire ma prestation comme je l'ai construite. Au lieu de répartir l'effort sur tout le mois, on le concentre sur une journée : un seul tournage produit six à douze vidéos, et il n'y a plus rien à décider ni à faire pendant quatre semaines.

## Est-ce qu'il faut publier à la même heure

C'est la question qu'on me pose le plus souvent, et c'est celle qui compte le moins.

Les plateformes ne diffusent plus par ordre chronologique depuis longtemps. Une vidéo publiée à 9h peut trouver son public à 22h ou trois jours plus tard. J'ai vu des vidéos redémarrer après une semaine complète de silence.

Publiez quand ça vous arrange. L'heure exacte ne fera pas la différence entre 300 vues et 30 000.

## Ce que je conseille si vous démarrez seul

Deux publications par semaine, les mêmes jours, pendant deux mois. Notez la date de départ quelque part.

Ne changez rien avant huit semaines. Pas de refonte de stratégie au bout de dix jours parce que la troisième vidéo a fait 84 vues. C'est normal, ça arrive à tout le monde, et ça ne veut rien dire à ce stade.

Au bout de huit semaines, regardez les trois vidéos qui ont le mieux marché, comprenez ce qu'elles ont en commun, et faites-en plus.

---

Si tenir ce rythme vous semble impossible avec votre activité, [c'est exactement le problème que je résous](/reseaux-sociaux).
    `,
    contentEn: `
## The short answer: two to three times a week

If you want a number and nothing else, there it is. It is what I set up for most of my clients, and it is what holds up over time.

Now, why that number, and why the other answers you have read are often wrong.

## Why not once a day

You have probably read that you need to post daily. That advice comes from accounts whose job is creating content. For them it makes sense: it is their main activity.

For a therapist, a builder or a restaurant owner, posting daily means one thing: stopping after three weeks. I have watched that play out more times than I can count. Two weeks of enthusiasm, one week of dragging, then a frozen account for eight months.

An abandoned account does more damage than a slow one. A visitor who lands on a last post dated November wonders whether you are still trading.

## Why not once a week either

Below two posts a week, two things happen.

The algorithm does not have enough material to work out who to show you to. Each video restarts from almost nothing. You stay stuck in the first distribution tier without ever getting out.

And people forget you between posts. Familiarity, the kind that makes someone think of you the day they need your trade, is built through close repetition. Once every ten days is too spread out to leave a trace.

## The only number that really matters

It is not the frequency, it is the number of consecutive weeks without a gap.

Three posts a week for six weeks then nothing: almost no effect. Two posts a week for eight months: your account becomes a real acquisition channel.

That is frustrating to hear, because it means nothing happens quickly. But that is how it works. Visible results usually land somewhere between week six and week ten, never before.

## What actually stops people

It is almost never the posting. Pressing a button takes thirty seconds.

What stops people is finding something to say, then filming it, then editing it. Three obstacles stacked, on every post, forever.

That is exactly the reasoning behind how I built my service. Instead of spreading the effort across the month, we concentrate it into one day: one shoot produces six to twelve videos, and there is nothing left to decide or do for four weeks.

## Do you have to post at the same time

That is the question I get most often, and the one that matters least.

Platforms stopped serving content chronologically a long time ago. A video posted at 9am can find its audience at 10pm or three days later. I have seen videos take off after a full week of silence.

Post when it suits you. The exact hour will not be the difference between 300 views and 30,000.

## What I recommend if you are starting alone

Two posts a week, the same days, for two months. Write the start date down somewhere.

Change nothing before eight weeks. No strategy overhaul after ten days because the third video got 84 views. That is normal, it happens to everyone, and it means nothing at that stage.

After eight weeks, look at the three videos that performed best, work out what they have in common, and make more of those.

---

If keeping that rhythm feels impossible alongside your actual job, [that is exactly the problem I solve](/reseaux-sociaux).
    `,
  },
  {
    id: '11',
    slug: 'filmer-avec-son-telephone',
    titleFr: 'Filmer soi-même avec son téléphone : ce qui marche vraiment',
    titleEn: 'Filming it yourself on a phone: what actually works',
    excerptFr: "Vous n'avez pas besoin d'une caméra à 3 000 euros. Vous avez besoin de régler quatre choses, et trois d'entre elles n'ont rien à voir avec l'image.",
    excerptEn: "You do not need a 3,000 euro camera. You need to fix four things, and three of them have nothing to do with the picture.",
    seoTitleFr: 'Filmer avec son Téléphone | Elie Ageron',
    seoTitleEn: 'Filming on Your Phone | Elie Ageron',
    seoDescFr: 'Le son, la lumière, le cadre et les deux premières secondes. Quatre réglages qui comptent plus que le prix de votre caméra.',
    seoDescEn: 'Sound, light, framing and the first two seconds. Four settings that matter more than the price of your camera.',
    readTime: '6 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    date: '2026-06-22',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## Le matériel n'est pas votre problème

Je tourne avec du matériel professionnel parce que c'est mon métier et que ça me fait gagner du temps au montage. Mais je vois passer chaque semaine des vidéos filmées au téléphone qui font dix fois plus de vues que des productions léchées.

Un iPhone ou un Android récent filme mieux que les caméras qu'on utilisait il y a dix ans. Ce n'est pas là que ça coince.

Ce qui coince, c'est le son, la lumière, le cadre et surtout les deux premières secondes.

## Le son avant tout le reste

Une image moyenne avec un bon son passe. Un bon son avec une image moyenne passe aussi. Une belle image avec un son pourri, personne ne reste.

Le micro de votre téléphone est fait pour parler à quelqu'un à vingt centimètres, pas pour capter une voix à deux mètres dans un atelier. Si vous filmez à distance, il vous faut autre chose.

Le moins cher qui fonctionne : des écouteurs filaires avec micro, cachés sous un vêtement. Ça coûte quinze euros et ça change tout. Au-dessus, un petit micro-cravate sans fil se trouve autour de cinquante euros et se branche directement sur le téléphone.

Évitez de filmer près d'une route, d'un frigo ou d'une ventilation. Ces bruits sont inaudibles pour vous sur le moment et insupportables à l'écoute.

## La lumière, c'est une fenêtre

Pas besoin de panneaux LED. Mettez-vous face à une fenêtre, en journée. Pas dos à la fenêtre, sinon vous êtes une silhouette noire.

Si vous filmez dehors, évitez le plein soleil de midi qui creuse des ombres sous les yeux. Un ciel légèrement couvert donne la meilleure lumière qui existe, et il y en a beaucoup en Savoie.

En intérieur le soir, allumez tout et rapprochez-vous d'une source. Une vidéo sombre et granuleuse est le signal le plus fiable pour faire passer quelqu'un à la suivante.

## Le cadre : vertical, et à hauteur d'yeux

Filmez à la verticale. Tout le monde le sait et beaucoup le font encore à l'horizontale par réflexe.

Posez le téléphone sur quelque chose à hauteur de vos yeux. Un téléphone tenu à bout de bras en contre-plongée donne une image qui ne ressemble à rien de professionnel. Une pile de livres fait parfaitement l'affaire, un trépied à vingt euros aussi.

Laissez un peu d'espace au-dessus de la tête, mais pas trop. Et surtout, laissez de la place en bas : les plateformes affichent votre légende et vos boutons par-dessus le tiers inférieur de l'image.

## Les deux premières secondes décident de tout

C'est le point que presque personne ne travaille, et c'est celui qui compte le plus.

Les gens font défiler leur écran très vite. Si votre vidéo commence par "bonjour à tous, alors aujourd'hui je vais vous parler de", vous avez perdu 70 pour cent de l'audience avant même d'avoir dit votre sujet.

Commencez par la phrase qui donne envie de rester. Le problème, la question, l'erreur. Les présentations viennent après, si elles viennent.

Comparez :

- "Bonjour, je suis Marie, thérapeute à Albertville, et aujourd'hui je voulais aborder le sujet du sommeil"
- "Si vous vous réveillez systématiquement à 3h du matin, ce n'est probablement pas votre stress"

La deuxième version, c'est la même vidéo. Elle fait cinq fois plus de vues.

## Les sous-titres ne sont pas optionnels

La majorité des gens regardent sans le son, dans une salle d'attente ou dans un lit à côté de quelqu'un qui dort.

Sans sous-titres, ils passent. Instagram et TikTok en génèrent automatiquement et ils sont devenus corrects. Vérifiez-les quand même, ils écorchent systématiquement les noms propres et le vocabulaire technique de votre métier.

## Ce que vous ne pourrez pas faire seul

Vous pouvez très bien filmer et publier vous-même. Ce qui est difficile à tenir, c'est le reste : trouver un sujet chaque semaine, garder le même niveau quand la semaine a été chargée, et surtout ne pas s'arrêter au bout de deux mois.

C'est un travail de régularité plus que de technique. Si vous voulez tester par vous-même, allez-y avec ces réglages, ils suffisent largement. Si vous savez déjà que vous ne tiendrez pas, ne perdez pas six semaines à le vérifier.

---

[Voici comment je gère ça pour mes clients](/reseaux-sociaux), une journée par mois.
    `,
    contentEn: `
## The gear is not your problem

I shoot with professional equipment because it is my job and it saves me time in the edit. But every week I watch phone-shot videos outperform polished productions by ten to one.

A recent iPhone or Android films better than the cameras we used ten years ago. That is not where it breaks down.

What breaks down is the sound, the light, the framing, and above all the first two seconds.

## Sound before everything else

An average picture with good sound passes. Good sound with an average picture also passes. A beautiful picture with bad sound and nobody stays.

Your phone mic is built for talking to someone twenty centimetres away, not for catching a voice two metres off in a workshop. If you film from a distance, you need something else.

The cheapest thing that works: wired earphones with a mic, hidden under clothing. Fifteen euros, and it changes everything. Above that, a small wireless lav mic runs around fifty euros and plugs straight into the phone.

Avoid filming near a road, a fridge or a ventilation unit. Those sounds are inaudible to you in the moment and unbearable on playback.

## Light means a window

You do not need LED panels. Stand facing a window, during the day. Not with your back to it, or you become a black silhouette.

Outdoors, avoid harsh midday sun that carves shadows under the eyes. A slightly overcast sky is the best light there is, and there is plenty of it in Savoie.

Indoors in the evening, turn everything on and get close to a source. A dark, grainy video is the most reliable signal to scroll to the next one.

## Framing: vertical, at eye level

Film vertically. Everyone knows this and plenty of people still shoot horizontally out of habit.

Rest the phone on something at your eye level. A phone held at arm's length pointing up gives an image that looks like nothing professional. A stack of books works fine, so does a twenty euro tripod.

Leave a little space above the head, but not much. And leave room at the bottom: platforms lay your caption and buttons over the lower third of the frame.

## The first two seconds decide everything

This is the part almost nobody works on, and the one that matters most.

People scroll fast. If your video opens with "hi everyone, so today I want to talk about", you have lost 70 percent of the audience before you even said the topic.

Start with the line that makes people stay. The problem, the question, the mistake. Introductions come after, if at all.

Compare:

- "Hi, I'm Marie, a therapist in Albertville, and today I wanted to cover the subject of sleep"
- "If you wake up at 3am every single night, it is probably not your stress"

The second version is the same video. It gets five times the views.

## Subtitles are not optional

Most people watch with the sound off, in a waiting room or in bed next to someone asleep.

Without subtitles they scroll. Instagram and TikTok generate them automatically and they have got decent. Check them anyway, they mangle proper nouns and trade vocabulary every time.

## What you will not manage alone

You can absolutely film and post yourself. What is hard to sustain is the rest: finding a subject every week, keeping the same standard when the week has been brutal, and above all not stopping after two months.

It is a consistency job more than a technical one. If you want to test it yourself, go ahead with these settings, they are plenty. If you already know you will not keep it up, do not spend six weeks proving it.

---

[Here is how I handle it for clients](/reseaux-sociaux), one day a month.
    `,
  },
  {
    id: '12',
    slug: 'therapeute-reseaux-sociaux-clients',
    titleFr: 'Thérapeute, coach, praticien : comment les réseaux vous amènent des clients',
    titleEn: 'Therapist, coach, practitioner: how social media brings you clients',
    excerptFr: "Dans les métiers de l'accompagnement, personne ne choisit un praticien sur une plaquette. On choisit quelqu'un dont on a l'impression de connaître la voix. C'est exactement ce que la vidéo permet.",
    excerptEn: "In care and coaching work, nobody picks a practitioner from a brochure. People pick someone whose voice they feel they already know. That is exactly what video allows.",
    seoTitleFr: 'Thérapeute : Réseaux et Clients | Elie Ageron',
    seoTitleEn: 'Therapists: Social Media Clients | Elie Ageron',
    seoDescFr: 'Personne ne choisit un praticien sur une plaquette. Comment la vidéo installe la confiance avant même le premier rendez-vous.',
    seoDescEn: 'Nobody picks a practitioner from a brochure. How video builds trust before the first appointment even happens.',
    readTime: '7 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    date: '2026-07-02',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## Votre métier se vend différemment des autres

Quand quelqu'un cherche un plombier, il compare des devis et des délais. Quand quelqu'un cherche un thérapeute, il cherche une personne à qui il va pouvoir raconter des choses qu'il n'a jamais dites à personne.

Ça ne se décide pas sur une page "à propos". Ça se décide sur une impression, presque toujours avant le premier contact.

C'est pour ça que les métiers de l'accompagnement sont ceux où la vidéo change le plus de choses. Vous n'avez rien à vendre au sens classique. Vous avez juste à laisser les gens vous entendre parler.

## Ce que les gens vérifient avant de prendre rendez-vous

Je travaille avec une cliente dans un métier d'accompagnement et j'ai regardé de près ce que faisaient les personnes qui finissaient par la contacter.

Le parcours ressemble presque toujours à ça. Elles voient une vidéo. Elles ne font rien. Elles en revoient une deuxième deux semaines plus tard. Elles vont sur le profil, elles font défiler quatre ou cinq vidéos d'un coup. Puis, souvent des semaines après, elles cliquent sur le lien et prennent rendez-vous.

Personne ne prend rendez-vous après une vidéo. Ce qui déclenche, c'est le moment où la personne se dit "je vois comment elle parle, je crois que je pourrais lui parler".

## Ce qu'il faut publier (et ce qui ne sert à rien)

Ce qui fonctionne, dans l'ordre :

Répondre à une question précise que vos patients vous posent tout le temps. Pas une question générale sur votre discipline, une vraie question posée en cabinet, avec les mots des gens.

Nommer un symptôme que la personne vit sans savoir le nommer. Ce sont les vidéos qui déclenchent le plus de partages en message privé, parce que quelqu'un pense immédiatement à un proche.

Dire ce que vous ne faites pas. Poser une limite claire rassure énormément. "Je ne peux pas vous aider si vous cherchez ça" installe plus de confiance que n'importe quelle liste de compétences.

Ce qui ne sert à rien : les citations sur fond de coucher de soleil, les listes de vos formations, et les publications qui annoncent que vous avez de la place cette semaine. Ce dernier point mérite un mot : ces publications ne font aucune vue, parce que l'algorithme comprend que c'est de la promotion et arrête la diffusion.

## Le sujet du secret professionnel

C'est la première objection que j'entends, et elle est légitime.

Vous ne parlez jamais d'un cas. Jamais. Même anonymisé, même flouté, même avec l'accord de la personne. Ce n'est pas une question de risque juridique, c'est une question de ce que ça dit de vous à tous vos autres patients qui regardent.

Ce que vous pouvez faire : parler de mécanismes généraux, de ce que vous observez souvent, de ce qui est documenté dans votre discipline. La formulation "beaucoup de gens vivent ça" fonctionne parfaitement et ne trahit personne.

## Sur la caméra, quand on n'aime pas ça

Presque tous mes clients me disent qu'ils détestent se voir. Ils le disent avant le premier tournage, ils ne le disent plus après le troisième.

Deux choses aident vraiment.

La première : ne pas écrire de texte à réciter. Un script appris par cœur s'entend immédiatement et enlève exactement ce qui rendait la vidéo intéressante. Quand je filme, je pose des questions et la personne répond, comme dans une conversation. Ça donne des hésitations, des reprises, des "enfin je veux dire". Ce sont ces moments-là qui font que quelqu'un vous fait confiance.

La deuxième : accepter que les premières vidéos ne seront pas terribles. Elles ne le sont jamais. Ce n'est pas grave, presque personne ne les verra, et vous serez bien meilleur au bout de dix.

## Combien de temps avant que ça donne quelque chose

Comptez deux à trois mois avant les premiers rendez-vous qui viennent clairement des réseaux.

Ça paraît long. C'est le temps qu'il faut pour que les mêmes personnes vous croisent assez souvent pour passer de "tiens, c'est intéressant" à "je prends rendez-vous". Vous ne pouvez pas raccourcir ce délai, vous pouvez seulement ne pas l'interrompre.

Le piège classique : arrêter à la sixième semaine parce que rien ne s'est passé. C'est précisément le moment où ça commence.

## Ce qui doit exister à côté

Vos vidéos doivent mener quelque part. Un profil avec un lien vers une page qui explique où vous êtes, ce que vous faites, combien ça coûte et comment prendre rendez-vous.

Sans ça, vous faites un travail de notoriété gratuit dont vous ne récupérez qu'une partie. Beaucoup de gens qui vous découvrent ne vous écriront jamais en message privé, mais cliqueront volontiers sur un lien pour lire tranquillement.

---

Si vous voulez que quelqu'un vienne filmer et publie à votre place, [voilà comment ça se passe](/reseaux-sociaux). Et si vous n'avez pas encore de page pour recevoir ces gens, [on peut aussi s'en occuper](/services).
    `,
    contentEn: `
## Your work sells differently

When someone looks for a plumber, they compare quotes and lead times. When someone looks for a therapist, they are looking for a person they will be able to tell things they have never told anyone.

That is not decided on an "about" page. It is decided on an impression, almost always before the first contact.

That is why care and coaching work is where video changes the most. You have nothing to sell in the usual sense. You just need to let people hear you talk.

## What people check before booking

I work with a client in a care-adjacent field and I looked closely at what the people who ended up contacting her actually did.

The path almost always looks like this. They see one video. They do nothing. They see a second one two weeks later. They go to the profile and scroll through four or five videos in one go. Then, often weeks later, they click the link and book.

Nobody books after one video. What triggers it is the moment someone thinks, "I can see how she talks, I think I could talk to her."

## What to post, and what is a waste of time

What works, in order:

Answering a specific question your patients ask constantly. Not a general question about your discipline, a real question asked in your room, in the words people actually use.

Naming a symptom someone lives with without being able to name it. Those are the videos that trigger the most private shares, because someone immediately thinks of a relative.

Saying what you do not do. Setting a clear limit is enormously reassuring. "I cannot help you if you are looking for that" builds more trust than any list of qualifications.

What does not work: quotes over sunset backgrounds, lists of your training, and posts announcing you have slots free this week. That last one deserves a note: those posts get no views, because the algorithm recognises promotion and stops distribution.

## About confidentiality

That is the first objection I hear, and it is a fair one.

You never talk about a case. Ever. Not anonymised, not blurred, not with permission. It is not a legal risk question, it is a question of what it tells every other patient watching.

What you can do: talk about general mechanisms, about what you see often, about what is documented in your field. The phrasing "a lot of people experience this" works perfectly and betrays nobody.

## On camera, when you hate being on camera

Almost every client tells me they hate seeing themselves. They say it before the first shoot. They stop saying it after the third.

Two things genuinely help.

First: do not write a script to recite. A memorised script is audible immediately and strips out exactly what made the video interesting. When I film, I ask questions and the person answers, like a conversation. That produces hesitations, restarts, "well, what I mean is". Those moments are what make someone trust you.

Second: accept that the first videos will not be good. They never are. It does not matter, almost nobody will see them, and you will be far better by the tenth.

## How long before it produces anything

Expect two to three months before the first bookings that clearly came from social.

That sounds long. It is the time it takes for the same people to cross paths with you often enough to move from "that's interesting" to "I'm booking". You cannot shorten that window, you can only avoid interrupting it.

The classic trap: stopping at week six because nothing has happened. That is precisely when it starts.

## What needs to exist alongside

Your videos have to lead somewhere. A profile with a link to a page explaining where you are, what you do, what it costs and how to book.

Without that, you are doing free awareness work and only collecting part of the return. Plenty of people who discover you will never send a private message, but will happily click a link and read in their own time.

---

If you want someone to come film and post for you, [here is how it works](/reseaux-sociaux). And if you do not yet have a page to receive those people, [we can handle that too](/services).
    `,
  },
  {
    id: '13',
    slug: 'idees-contenu-reseaux-sociaux',
    titleFr: "Vous ne savez pas quoi publier ? Voici comment je trouve les sujets",
    titleEn: "Don't know what to post? Here is how I find the subjects",
    excerptFr: "Le manque d'idées est la première raison pour laquelle les gens abandonnent leurs réseaux. Pourtant les sujets sont déjà là, dans vos conversations de la semaine dernière.",
    excerptEn: "Running out of ideas is the number one reason people abandon their social accounts. Yet the subjects are already there, in last week's conversations.",
    seoTitleFr: 'Idées de Contenu Réseaux Sociaux | Elie Ageron',
    seoTitleEn: 'Social Media Content Ideas | Elie Ageron',
    seoDescFr: 'Ne cherchez pas des idées, collectez des questions. La méthode que j\'utilise pour sortir vingt sujets de tournage par client.',
    seoDescEn: 'Do not look for ideas, collect questions. The method I use to pull twenty filming subjects out of every client.',
    readTime: '6 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    date: '2026-07-10',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## Le vrai problème n'est pas le manque d'idées

Quand un client me dit qu'il ne sait pas quoi publier, ce n'est presque jamais vrai. Il sait des dizaines de choses que ses clients ignorent. Le problème, c'est qu'il les trouve évidentes.

C'est le piège du métier qu'on exerce depuis quinze ans. Ce qui vous semble banal est exactement ce que les gens cherchent sur Google à minuit.

Ma méthode tient en une phrase : je ne cherche pas des idées, je collecte des questions.

## La source numéro un : ce qu'on vous demande

Sur une semaine, notez toutes les questions qu'on vous pose. Au téléphone, en rendez-vous, en devis, sur le pas de la porte.

Vous allez en récolter entre dix et vingt-cinq. Chacune est une vidéo.

Le point important : utilisez les mots de la personne qui a posé la question, pas votre vocabulaire professionnel. Un client ne dit pas "quelle est la durée d'amortissement d'une isolation extérieure". Il dit "au bout de combien de temps je m'y retrouve". Cette deuxième formulation fera dix fois plus de vues, parce que c'est celle que les gens tapent et pensent.

## La source numéro deux : ce qui vous agace

Ce que les gens croient à tort sur votre métier. L'erreur que vous voyez tout le temps. Le conseil qui circule et qui est faux.

Ces vidéos marchent bien parce qu'elles créent une réaction. Quelqu'un qui n'est pas d'accord commente, ce qui pousse la diffusion. Quelqu'un qui découvre qu'il faisait faux enregistre la vidéo.

Attention à un point : soyez en désaccord avec une idée, jamais avec des personnes. La différence entre "beaucoup de gens croient que" et "les gens sont idiots de croire que" est mince à écrire et énorme à l'écoute.

## La source numéro trois : ce que vous faites déjà

Vous ne racontez rien, vous montrez. Un geste, un chantier, une préparation, un avant / après.

Pour les métiers manuels c'est presque trop facile. Pour les métiers de bureau il faut chercher un peu, mais il y a toujours quelque chose : un dossier qu'on ouvre, un outil qu'on utilise, un lieu où on se déplace.

Ces vidéos n'apportent pas beaucoup de nouveaux abonnés, mais elles rassurent énormément les gens qui hésitent déjà à vous contacter.

## Le tri : garder les questions à réponse courte

Toutes les questions ne font pas de bonnes vidéos.

Si la réponse honnête est "ça dépend, il faudrait qu'on en parle", passez. Ça donne une vidéo floue qui ne satisfait personne.

Gardez celles où vous pouvez donner une réponse nette en trente à cinquante secondes. Une idée par vidéo. La tentation de tout dire en une fois est la principale cause de vidéos qui font 200 vues.

## Comment j'organise ça chez mes clients

Avant chaque tournage, j'arrive avec une liste écrite. Quinze à vingt sujets, classés, avec pour chacun la question de départ et l'angle.

Sur place, je ne donne pas le script à la personne. Je pose la question et je la laisse répondre. C'est la différence entre une vidéo qui sonne comme un communiqué et une vidéo qui sonne comme quelqu'un qui parle.

D'une journée, je sors six à douze vidéos exploitables. Ça couvre un mois complet de publications, et le mois suivant on recommence avec la liste suivante.

## Ce qu'il ne faut pas faire

Ne cherchez pas des idées sur les comptes des autres. Vous allez copier des formats qui marchent pour eux et qui ne veulent rien dire pour votre métier.

Ne planifiez pas trois mois de contenu à l'avance dans un tableau. Personne ne tient ce genre de plan, et les meilleures vidéos viennent d'une question posée la veille.

Et ne gardez pas vos meilleures idées "pour plus tard, quand j'aurai plus d'abonnés". Publiez-les maintenant. Ce sont elles qui vous donneront ces abonnés.

---

Si vous préférez ne pas gérer cette partie du tout, [c'est exactement ce que je fais](/reseaux-sociaux) : j'arrive avec les sujets, on filme, et vos vidéos sortent tout le mois.
    `,
    contentEn: `
## The real problem is not a lack of ideas

When a client tells me they do not know what to post, it is almost never true. They know dozens of things their clients do not. The problem is that they find those things obvious.

That is the trap of doing a job for fifteen years. What feels mundane to you is exactly what people are searching for on Google at midnight.

My method fits in one sentence: I do not look for ideas, I collect questions.

## Source number one: what people ask you

Over one week, write down every question you get asked. On the phone, in meetings, during quotes, on the doorstep.

You will collect somewhere between ten and twenty-five. Each one is a video.

The important part: use the words of the person who asked, not your professional vocabulary. A client does not say "what is the amortisation period on external wall insulation". They say "how long before I get my money back". That second phrasing will get ten times the views, because it is the one people type and think.

## Source number two: what annoys you

What people wrongly believe about your trade. The mistake you see constantly. The advice going around that is simply wrong.

These videos work because they create a reaction. Someone who disagrees comments, which pushes distribution. Someone who realises they were doing it wrong saves the video.

One caution: disagree with an idea, never with people. The gap between "a lot of people believe that" and "people are stupid to believe that" is small to write and enormous to listen to.

## Source number three: what you are already doing

You are not explaining, you are showing. A movement, a job site, a preparation, a before and after.

For hands-on trades it is almost too easy. For desk work you have to look a bit harder, but there is always something: a file being opened, a tool being used, a place you travel to.

These videos do not bring many new followers, but they strongly reassure people already hesitating to contact you.

## The filter: keep the questions with short answers

Not every question makes a good video.

If the honest answer is "it depends, we would need to talk", skip it. That produces a vague video that satisfies nobody.

Keep the ones where you can give a clean answer in thirty to fifty seconds. One idea per video. The urge to say everything at once is the main cause of videos that get 200 views.

## How I organise this for clients

Before every shoot I arrive with a written list. Fifteen to twenty subjects, sorted, each with its starting question and its angle.

On the day, I do not hand the person a script. I ask the question and let them answer. That is the difference between a video that sounds like a press release and a video that sounds like a person talking.

From one day I get six to twelve usable videos. That covers a full month of posting, and the next month we start again with the next list.

## What not to do

Do not hunt for ideas on other people's accounts. You will copy formats that work for them and mean nothing for your trade.

Do not plan three months of content in a spreadsheet. Nobody sticks to that kind of plan, and the best videos come from a question asked yesterday.

And do not save your best ideas "for later, when I have more followers". Post them now. They are what will get you those followers.

---

If you would rather not handle this part at all, [that is exactly what I do](/reseaux-sociaux): I arrive with the subjects, we film, and your videos go out all month.
    `,
  },
  {
    id: '14',
    slug: 'pourquoi-mes-videos-ne-font-pas-de-vues',
    titleFr: 'Pourquoi vos vidéos ne font pas de vues',
    titleEn: 'Why your videos are not getting views',
    excerptFr: "Neuf fois sur dix, ce n'est ni l'algorithme ni la qualité de l'image. Ce sont cinq erreurs très concrètes, et elles se corrigent toutes en une semaine.",
    excerptEn: "Nine times out of ten it is neither the algorithm nor the image quality. It is five very concrete mistakes, and all of them can be fixed in a week.",
    seoTitleFr: 'Mes Vidéos ne Font pas de Vues | Elie Ageron',
    seoTitleEn: 'My Videos Get No Views | Elie Ageron',
    seoDescFr: 'Cinq causes concrètes, et aucune n\'est l\'algorithme. Comment les repérer dans vos statistiques et les corriger cette semaine.',
    seoDescEn: 'Five concrete causes, and none of them is the algorithm. How to spot them in your stats and fix them this week.',
    readTime: '6 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    date: '2026-07-18',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## D'abord : combien de vidéos avez-vous publiées ?

Avant de chercher une cause, posez-vous cette question. Si la réponse est moins de dix, il n'y a rien à corriger. Vous n'avez pas encore assez publié pour que quoi que ce soit se déclenche.

Les plateformes ont besoin de plusieurs vidéos pour comprendre votre sujet et identifier une audience. Sur les premières, la diffusion est volontairement minuscule.

Si vous en êtes à quinze ou vingt vidéos et que ça ne bouge toujours pas, alors oui, il y a une cause. Elle est presque toujours dans cette liste.

## 1. Votre début est trop lent

C'est la cause numéro un, et de très loin.

Une vidéo qui commence par "bonjour à tous, j'espère que vous allez bien, aujourd'hui je voulais vous parler de" perd la moitié de son audience avant la troisième seconde. La plateforme mesure ça, en conclut que la vidéo n'intéresse personne et arrête la diffusion.

Regardez vos statistiques de rétention. Si la courbe s'effondre dans les deux premières secondes, votre problème est là et nulle part ailleurs.

La correction : supprimez toute introduction. Commencez directement par la phrase la plus intéressante de la vidéo, même si ça vous semble abrupt.

## 2. Vous parlez à tout le monde

"Comment bien communiquer" ne s'adresse à personne. "Pourquoi votre devis de charpente vous semble trop cher" s'adresse à quelqu'un de précis, qui va s'arrêter net.

Plus votre sujet est resserré, plus les vues sont nombreuses. C'est contre-intuitif et pourtant c'est ce que je constate systématiquement. Un sujet large ne crée aucune réaction, et sans réaction il n'y a pas de diffusion.

## 3. Vos vidéos sont trop longues pour ce qu'elles racontent

Le problème n'est pas la durée en soi, c'est le rapport entre la durée et le contenu.

Une vidéo de 25 secondes qui dit une chose utile sera regardée en entier. La même chose étalée sur 90 secondes sera abandonnée à mi-parcours, et le pourcentage de visionnage complet est le signal le plus important pour la diffusion.

Coupez tout ce qui n'est pas nécessaire. Les respirations, les répétitions, la conclusion qui résume ce que vous venez de dire. Une idée, la réponse, fin.

## 4. Vous publiez trop irrégulièrement

Trois vidéos en une semaine puis rien pendant trois semaines : les plateformes redémarrent presque de zéro à chaque reprise.

La régularité pèse plus que le volume. Deux vidéos par semaine sans interruption battent largement dix vidéos publiées en rafale une fois par mois.

## 5. Vos vidéos ressemblent à des publicités

Dès qu'une vidéo ressemble à une annonce, la diffusion s'arrête. C'est un choix des plateformes : elles vendent de la publicité, elles n'ont aucun intérêt à en distribuer gratuitement.

Les signaux qui déclenchent ça : un logo en gros au début, une offre commerciale, "contactez-moi vite", "il me reste deux places", une musique de spot publicitaire.

Vous pouvez tout à fait parler de ce que vous vendez. Mais faites-le en expliquant quelque chose d'utile, pas en le vendant.

## Le cas particulier : une vidéo qui explose et rien après

Ça arrive souvent et ça déstabilise. Une vidéo fait 40 000 vues, la suivante en fait 600.

C'est normal. Une vidéo qui sort du lot a été montrée à un public très large, dont la plupart ne s'intéressent pas vraiment à votre métier. Ces gens ne reviennent pas. Vos vidéos suivantes retournent à votre audience réelle.

Ne changez rien après un pic. Continuez exactement comme avant. Le pic était un bonus, pas un nouveau niveau de départ.

## Ce qu'il ne faut surtout pas faire

Ne supprimez pas les vidéos qui ont peu marché. Ça ne "nettoie" rien, et une vidéo peut redémarrer des semaines plus tard.

N'achetez jamais d'abonnés. Vous vous retrouvez avec une audience qui ne réagit à rien, ce qui fait chuter tous vos taux et détruit votre diffusion pour de bon.

Et ne changez pas de stratégie toutes les deux semaines. La plupart des gens abandonnent une approche juste avant qu'elle commence à fonctionner.

---

Si vous voulez arrêter de deviner, [je m'occupe de tout ça](/reseaux-sociaux) : le sujet, le tournage, le montage et la publication.
    `,
    contentEn: `
## First: how many videos have you posted?

Before hunting for a cause, ask yourself that. If the answer is fewer than ten, there is nothing to fix. You have not posted enough for anything to kick in.

Platforms need several videos to understand your subject and identify an audience. On the first ones, distribution is deliberately tiny.

If you are at fifteen or twenty videos and still nothing moves, then yes, there is a cause. It is almost always on this list.

## 1. Your opening is too slow

This is cause number one, by a wide margin.

A video that starts with "hi everyone, hope you are doing well, today I wanted to talk about" loses half its audience before the third second. The platform measures that, concludes the video interests nobody, and stops distributing it.

Look at your retention graph. If the curve collapses in the first two seconds, your problem is there and nowhere else.

The fix: delete every introduction. Start straight on the most interesting sentence in the video, even if it feels abrupt.

## 2. You are talking to everyone

"How to communicate well" speaks to nobody. "Why your roofing quote looks too expensive" speaks to a specific person, who stops dead.

The tighter your subject, the more views you get. It is counterintuitive and yet it is what I see every single time. A broad subject creates no reaction, and without reaction there is no distribution.

## 3. Your videos are too long for what they say

The problem is not length itself, it is the ratio between length and content.

A 25 second video that says one useful thing gets watched fully. The same thing stretched over 90 seconds gets abandoned halfway, and completion rate is the most important signal for distribution.

Cut everything unnecessary. The breaths, the repetitions, the closing that summarises what you just said. One idea, the answer, done.

## 4. You post too irregularly

Three videos in one week then nothing for three weeks: platforms restart from almost zero every time you come back.

Consistency weighs more than volume. Two videos a week without gaps comfortably beats ten videos dumped once a month.

## 5. Your videos look like adverts

The moment a video looks like an ad, distribution stops. That is a platform choice: they sell advertising, they have no interest in giving it away.

The signals that trigger it: a big logo at the start, a commercial offer, "message me quickly", "two slots left", advert-style music.

You can absolutely talk about what you sell. Just do it by explaining something useful rather than selling it.

## The special case: one video explodes, then nothing

This happens often and it throws people. One video gets 40,000 views, the next gets 600.

That is normal. A breakout video was shown to a very wide audience, most of whom do not actually care about your trade. Those people do not come back. Your following videos return to your real audience.

Change nothing after a spike. Carry on exactly as before. The spike was a bonus, not a new baseline.

## What you should definitely not do

Do not delete videos that underperformed. It does not "clean" anything, and a video can take off weeks later.

Never buy followers. You end up with an audience that reacts to nothing, which tanks all your rates and destroys your distribution for good.

And do not change strategy every two weeks. Most people abandon an approach right before it starts working.

---

If you want to stop guessing, [I handle all of it](/reseaux-sociaux): the subject, the shoot, the edit and the posting.
    `,
  },
  {
    id: '15',
    slug: 'reseaux-sociaux-ou-site-web',
    titleFr: 'Réseaux sociaux ou site web : par quoi commencer avec un budget limité ?',
    titleEn: 'Social media or a website: where to start on a limited budget?',
    excerptFr: "Je fais les deux, donc je n'ai aucun intérêt à vous vendre l'un plutôt que l'autre. Voici comment je tranche quand un client ne peut en financer qu'un seul.",
    excerptEn: "I do both, so I have no reason to push one over the other. Here is how I decide when a client can only fund one of them.",
    seoTitleFr: 'Réseaux Sociaux ou Site Web ? | Elie Ageron',
    seoTitleEn: 'Social Media or a Website? | Elie Ageron',
    seoDescFr: 'Le site capte une demande qui existe, les réseaux en créent une. Comment choisir quand le budget ne permet que l\'un des deux.',
    seoDescEn: 'A site captures existing demand, social creates it. How to choose when the budget only covers one of them.',
    readTime: '6 min',
    categoryFr: 'Stratégie',
    categoryEn: 'Strategy',
    date: '2026-07-31',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## La question revient à chaque appel

"J'ai un budget pour une chose. Je fais quoi en premier ?"

Je fais les deux prestations, donc je n'ai rien à gagner à vous orienter vers l'une ou l'autre. Voici comment je tranche réellement, et ça dépend surtout de la façon dont les gens vous trouvent aujourd'hui.

## Ce que chacun fait, et ce qu'il ne fait pas

Un site web capte une demande qui existe déjà. Quelqu'un cherche "plombier Albertville" à 22h un dimanche. Il a un problème, il cherche une solution, il vous trouve. Votre site n'a pas à convaincre qu'il faut un plombier, il doit convaincre que c'est vous.

Les réseaux sociaux créent une demande qui n'existait pas encore. Personne ne se lève en cherchant une thérapeute. Mais quelqu'un tombe sur une vidéo qui décrit exactement ce qu'il vit, et l'idée s'installe.

Ce sont deux mécaniques opposées. L'une récolte, l'autre sème.

## Commencez par le site si...

Votre métier fait l'objet de recherches Google explicites. Plombier, électricien, garagiste, avocat, dentiste, serrurier, couvreur. Les gens tapent votre métier plus une ville, et ils tapent souvent en urgence.

Dans ces cas-là, un site correct plus une fiche Google Business bien remplie rapportent plus vite que six mois de vidéos. La demande est là, il suffit d'être visible et crédible au moment où elle se manifeste.

Autre cas : vous vendez cher et le client compare avant de s'engager. Un architecte, une agence, un artisan sur des chantiers à cinq chiffres. Les gens vont vouloir lire, voir des réalisations, comprendre votre méthode. Ça ne se fait pas dans un carrousel Instagram.

## Commencez par les réseaux si...

Personne ne cherche votre métier par son nom. Sophrologue, coach, naturopathe, praticien en discipline peu connue, artisan sur un produit de niche. Vous pouvez être premier sur Google pour un mot-clé que trente personnes tapent par mois. Ça ne changera rien.

Là, il faut aller chercher les gens avant qu'ils sachent qu'ils vous cherchent. C'est exactement ce que fait la vidéo courte.

Autre cas : votre métier repose entièrement sur la confiance dans la personne. Les gens ne choisissent pas votre prestation, ils vous choisissent vous. Une page web ne transmet pas ça aussi bien que quelqu'un qui parle pendant quarante secondes.

## Le cas où la réponse est claire : vous avez déjà un site qui ne sert à rien

Beaucoup de gens ont un site fait il y a six ans, jamais mis à jour, qui reçoit douze visites par mois.

Refaire ce site n'apportera rien tant que personne n'y va. Douze visiteurs sur un beau site restent douze visiteurs. Dans cette situation, il vaut mieux commencer par créer du trafic, donc par les réseaux, et refaire le site ensuite quand il y aura des gens à recevoir.

L'inverse existe aussi : un compte Instagram actif avec 2 000 abonnés qui pointe vers rien du tout. Là, c'est le site qui manque, et il manque cruellement.

## Ce que je fais quand le budget est vraiment serré

Une landing page simple plus une fiche Google Business optimisée. C'est le socle minimum, ça coûte peu, et ça reste utile quoi qu'il arrive ensuite.

Ensuite seulement, on ajoute les réseaux. Comme ça les vidéos ont un endroit où envoyer les gens dès la première publication, et rien n'est perdu.

L'ordre inverse marche moins bien. Faire six mois de vidéos sans destination, c'est construire une audience qu'on n'arrive pas à convertir, et c'est frustrant.

## La vraie différence : le rythme du retour

Un site produit son effet vite puis se stabilise. Vous le mettez en ligne, vous apparaissez sur Google en quelques semaines, et ça continue de tourner sans que vous y touchiez.

Les réseaux produisent leur effet lentement et de façon cumulative. Rien pendant deux mois, puis ça monte, puis ça ne redescend plus tant que vous publiez.

Si vous avez besoin de clients le mois prochain, le site. Si vous construisez sur un an, les réseaux. Si vous pouvez faire les deux, faites les deux, parce que c'est là qu'ils deviennent vraiment intéressants : les vidéos amènent le trafic, le site le transforme.

---

Pas sûr de votre cas ? [Racontez-moi votre situation](/contact), je vous dirai honnêtement par quoi commencer, même si la réponse est "pas encore par moi".
    `,
    contentEn: `
## The question comes up on every call

"I have a budget for one thing. Which do I do first?"

I offer both services, so I have nothing to gain by steering you either way. Here is how I actually decide, and it mostly depends on how people find you today.

## What each one does, and what it does not

A website captures demand that already exists. Someone searches "plumber Albertville" at 10pm on a Sunday. They have a problem, they want a solution, they find you. Your site does not have to argue that plumbers are necessary, it has to argue that you are the right one.

Social media creates demand that did not exist yet. Nobody wakes up looking for a therapist. But someone comes across a video describing exactly what they are living through, and the idea takes root.

Two opposite mechanics. One harvests, the other sows.

## Start with the site if...

Your trade is the subject of explicit Google searches. Plumber, electrician, mechanic, lawyer, dentist, locksmith, roofer. People type your trade plus a town, and they often type it urgently.

In those cases, a decent site plus a well-filled Google Business profile pay off faster than six months of video. The demand is there, you just need to be visible and credible when it shows up.

Another case: you sell at a high price and clients compare before committing. An architect, an agency, a builder working on five-figure jobs. People will want to read, see previous work, understand your method. That does not happen in an Instagram carousel.

## Start with social if...

Nobody searches for your trade by name. Sophrologist, coach, naturopath, practitioner in a little-known discipline, maker of a niche product. You can rank first on Google for a keyword thirty people type a month. It will change nothing.

Here you have to reach people before they know they are looking for you. That is exactly what short video does.

Another case: your work rests entirely on trust in you as a person. People do not choose your service, they choose you. A web page does not carry that as well as someone talking for forty seconds.

## The case where the answer is obvious: you already have a site that does nothing

Plenty of people have a site built six years ago, never updated, getting twelve visits a month.

Rebuilding that site changes nothing while nobody goes there. Twelve visitors on a beautiful site are still twelve visitors. In that situation it is better to start by creating traffic, so social, and rebuild the site afterwards when there are people to receive.

The reverse also exists: an active Instagram account with 2,000 followers pointing to nothing at all. There the site is what is missing, and it is badly missed.

## What I do when the budget is genuinely tight

A simple landing page plus an optimised Google Business profile. That is the minimum foundation, it costs little, and it stays useful whatever comes next.

Only then do we add social. That way videos have somewhere to send people from the very first post, and nothing is wasted.

The reverse order works less well. Six months of videos with no destination builds an audience you cannot convert, and that is frustrating.

## The real difference: the pace of the return

A site produces its effect quickly then plateaus. You put it live, you show up on Google within a few weeks, and it keeps working without you touching it.

Social produces its effect slowly and cumulatively. Nothing for two months, then it climbs, then it stops coming back down as long as you keep posting.

If you need clients next month, the site. If you are building across a year, social. If you can do both, do both, because that is where they get genuinely interesting: video brings the traffic, the site converts it.

---

Not sure which case you are in? [Tell me about your situation](/contact) and I will honestly say where to start, even if the answer is "not with me yet".
    `,
  },
  {
    id: '16',
    slug: 'deleguer-reseaux-sociaux',
    titleFr: 'Déléguer ses réseaux sociaux : comment ça se passe concrètement',
    titleEn: 'Handing off your social media: how it actually works',
    excerptFr: "Beaucoup de gens imaginent qu'ils vont devoir fournir des idées, valider des textes et se filmer eux-mêmes. Voilà à quoi ressemble vraiment un mois quand quelqu'un s'en occupe.",
    excerptEn: "Most people assume they will have to supply ideas, approve captions and film themselves. Here is what a month actually looks like when someone else handles it.",
    seoTitleFr: 'Déléguer ses Réseaux Sociaux | Elie Ageron',
    seoTitleEn: 'Outsourcing Your Social Media | Elie Ageron',
    seoDescFr: 'Une journée de tournage par mois, et plus rien à faire. Le déroulé réel d\'une prestation réseaux sociaux, côté client.',
    seoDescEn: 'Half a day of filming a month, then nothing to do. What a done-for-you social media service really looks like.',
    readTime: '6 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    date: '2026-08-05',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## Ce que les gens imaginent, et ce que c'est vraiment

Quand je parle de déléguer les réseaux sociaux, la plupart des gens pensent à ce qu'ils ont déjà vu : un community manager à qui il faut envoyer des photos, valider des textes, expliquer son métier par mail, et qui publie des visuels qui ne ressemblent à rien de ce qu'ils font.

C'est le modèle classique, et il demande presque autant de travail au client qu'à celui qui gère.

Ce que je fais est différent sur un point : je viens sur place, je filme, et le reste ne vous concerne plus.

## Le mois type, du côté du client

Une journée dans le mois. C'est le seul moment où vous êtes impliqué.

Vous n'avez rien à préparer avant. Pas de sujets à trouver, pas de texte à écrire, pas de tenue particulière à prévoir au-delà de ce que vous portez normalement pour travailler. J'arrive avec la liste des sujets déjà écrite, la caméra, les micros et la lumière.

On tourne. Je pose des questions, vous répondez. On refait autant de prises qu'il faut. La plupart des gens sont crispés les vingt premières minutes puis oublient la caméra.

Ensuite vous retournez travailler, et pendant les quatre semaines suivantes vos vidéos sortent, six à douze dans le mois, sans que vous ayez à y penser.

## Ce qui se passe de mon côté entre deux tournages

Le montage, d'abord. D'une journée je sors six à douze vidéos verticales. Chacune est coupée pour tenir seule : une accroche dans les deux premières secondes, une idée, une fin nette.

Le sous-titrage ensuite, avec relecture. Les sous-titres automatiques massacrent systématiquement le vocabulaire technique et les noms propres, donc je repasse dessus à la main.

Puis la publication. Je choisis les jours, j'écris les légendes, je gère les hashtags. Et je regarde ce qui marche pour orienter la liste de sujets du mois suivant.

## La question de la validation

C'est le point que les gens veulent souvent régler dès le début, et je comprends pourquoi. Il s'agit de votre image.

Deux fonctionnements possibles. Soit je vous envoie les vidéos montées et vous validez avant publication. Soit vous me laissez publier directement.

En pratique, la plupart des clients commencent par valider pendant un mois ou deux, puis arrêtent d'eux-mêmes parce que ça devient une contrainte inutile. Mais c'est vous qui décidez, et vous pouvez revenir en arrière quand vous voulez.

## Ce que vous gardez

Les fichiers vidéo sont à vous. Bruts et montés. Si on arrête de travailler ensemble, vous partez avec tout et vous pouvez continuer à les utiliser.

Les comptes restent les vôtres. Je publie dessus, je n'en prends jamais la propriété. Si un jour vous voulez reprendre la main, il n'y a aucune procédure à lancer.

## Ce que ça ne fait pas

Ce n'est pas de la publicité payante. Je ne fais pas de Google Ads ni de Meta Ads, ce n'est pas ma compétence et je préfère le dire plutôt que de le faire moyennement.

Ce n'est pas non plus une garantie de résultat chiffré. Personne ne peut vous promettre un nombre de vues, et je ne le ferai pas. Ce que je peux dire, c'est ce qui s'est passé chez une cliente formatrice : 56 619 vues et 196 abonnés dès la première publication. C'est un très bon démarrage, pas une moyenne à attendre.

Et ce n'est pas immédiat. Les deux premiers mois servent surtout à installer la régularité. Les résultats visibles arrivent après.

## Combien ça coûte

Ça dépend du nombre de vidéos, du nombre de réseaux et de la fréquence de tournage. Je n'affiche pas de grille parce que je préfère vous donner un chiffre juste après avoir compris votre activité.

Un appel de trente minutes suffit. Vous me racontez ce que vous faites, je vous dis ce que je filmerais et à quel rythme, et vous recevez un devis clair. Si je pense que ça n'a pas de sens pour vous, je vous le dis aussi.

---

[Le détail complet de la prestation est ici](/reseaux-sociaux), ou [écrivez-moi directement](/contact).
    `,
    contentEn: `
## What people imagine, and what it really is

When I talk about handing off social media, most people picture what they have already seen: a community manager you have to send photos to, approve captions for, explain your trade to by email, and who posts graphics that look nothing like what you do.

That is the classic model, and it demands almost as much work from the client as from the person managing it.

What I do differs on one point: I come to you, I film, and the rest stops being your problem.

## A typical month, from the client side

Half a day in the month. That is the only moment you are involved.

Nothing to prepare beforehand. No subjects to find, no captions to write, no special outfit beyond what you normally wear to work. I arrive with the subject list already written, the camera, the mics and the lights.

We film. I ask questions, you answer. We redo takes as many times as needed. Most people are tense for the first twenty minutes then forget the camera is there.

Then you go back to work, and for the next four weeks your videos go out 2 to 3 times a week without you thinking about it.

## What happens on my side between shoots

Editing first. From one day I get six to twelve vertical videos. Each one is cut to stand alone: a hook in the first two seconds, one idea, a clean ending.

Subtitling next, with a proofread. Automatic subtitles butcher technical vocabulary and proper nouns every time, so I go over them by hand.

Then publishing. I pick the days, write the captions, handle the hashtags. And I watch what performs to shape the subject list for the following month.

## The approval question

This is the point people usually want settled up front, and I understand why. It is your image.

Two ways to run it. Either I send you the edited videos and you approve before publishing, or you let me publish directly.

In practice, most clients approve for a month or two, then stop on their own because it becomes a pointless chore. But it is your call, and you can switch back whenever you want.

## What you keep

The video files are yours. Raw and edited. If we stop working together, you leave with everything and can keep using it.

The accounts stay yours. I post on them, I never take ownership. If one day you want to take back control, there is no process to start.

## What it does not do

This is not paid advertising. I do not run Google Ads or Meta Ads, it is not my skill and I would rather say so than do it badly.

It is also not a guaranteed number. Nobody can promise you a view count, and I will not. What I can tell you is what happened with one client, a handwriting trainer: 56,619 views and 196 followers on the very first post. That is a strong start, not an average to expect.

And it is not immediate. The first two months mostly serve to establish the rhythm. Visible results come after.

## What it costs

It depends on the number of videos, the number of networks and how often we film. I do not publish a price grid because I would rather give you a fair number after understanding your business.

A thirty-minute call is enough. You tell me what you do, I tell you what I would film and at what pace, and you get a clear quote. If I think it does not make sense for you, I will say that too.

---

[The full service is detailed here](/reseaux-sociaux), or [write to me directly](/contact).
    `,
  },
  {
    id: '17',
    slug: 'algorithme-reseaux-sociaux-comprendre',
    titleFr: "Comprendre l'algorithme sans devenir fou",
    titleEn: 'Understanding the algorithm without losing your mind',
    excerptFr: "On lui prête des intentions, des humeurs et des punitions. En réalité il fait une seule chose, et une fois qu'on l'a compris on arrête de perdre du temps sur de fausses astuces.",
    excerptEn: "People credit it with intentions, moods and punishments. In reality it does one thing, and once you understand that you stop wasting time on fake tricks.",
    seoTitleFr: 'Comprendre l\'Algorithme Social | Elie Ageron',
    seoTitleEn: 'Understanding the Algorithm | Elie Ageron',
    seoDescFr: 'Il ne vous punit pas, il mesure. Les signaux qui comptent vraiment, ceux qui ne servent à rien, et ce qui coupe la diffusion.',
    seoDescEn: 'It is not punishing you, it is measuring. The signals that matter, the ones that do not, and what kills your reach.',
    readTime: '6 min',
    categoryFr: 'Réseaux sociaux',
    categoryEn: 'Social media',
    date: '2026-07-24',
    lastModified: '2026-08-07',
    author: 'Elie Ageron',
    contentFr: `
## L'algorithme ne vous en veut pas

Je l'entends à chaque fois : "l'algorithme m'a puni", "Instagram bloque mon compte", "ils ne me montrent plus depuis que j'ai mis un lien".

Il n'y a personne derrière. Un algorithme de recommandation fait une seule chose : il essaie de deviner combien de temps vous allez rester sur l'application, et il montre en priorité ce qui maximise ce temps.

Tout le reste découle de ça. Une fois qu'on a compris ce mécanisme, la plupart des "astuces" qui circulent tombent d'elles-mêmes.

## Comment une vidéo est diffusée, étape par étape

Vous publiez. La plateforme montre votre vidéo à un petit groupe, quelques centaines de personnes, mélange d'abonnés et de comptes proches de votre thématique.

Elle mesure ce que ce groupe fait. Combien regardent jusqu'au bout. Combien la revoient. Combien l'envoient à quelqu'un. Combien s'arrêtent pour commenter.

Si les chiffres sont bons par rapport à la moyenne de la plateforme, elle élargit à un groupe plus grand. Elle remesure. Elle élargit encore, ou elle s'arrête.

Il n'y a pas de décision, pas de sanction, pas de mémoire des vidéos précédentes. Chaque vidéo repart avec ses propres chances.

## Le classement des signaux, du plus lourd au plus léger

Le taux de visionnage complet arrive en tête. C'est le signal roi. Une vidéo courte regardée entièrement bat systématiquement une vidéo longue abandonnée en route.

Les revisionnages viennent juste après. Une vidéo qui reboucle sans que la personne s'en aperçoive envoie un signal très fort.

Les partages en message privé pèsent ensuite. Envoyer une vidéo à quelqu'un demande un effort réel, donc la plateforme y accorde beaucoup de valeur.

Les enregistrements comptent aussi, moins fort mais dans la même logique.

Les commentaires et les likes ferment la marche. Ce sont les signaux les plus visibles et les moins déterminants, ce qui explique pourquoi tant de comptes avec beaucoup de likes stagnent.

## Les fausses astuces qui coûtent du temps

L'heure de publication. Ça n'a plus d'importance depuis que la diffusion n'est plus chronologique. Une vidéo peut démarrer trois jours après sa mise en ligne.

Le nombre de hashtags. Vous en verrez qui jurent qu'il en faut trente, d'autres exactement cinq. Les hashtags aident à catégoriser un contenu, ils ne créent pas de vues. Trois ou quatre pertinents suffisent.

Le fait de mettre un lien en commentaire plutôt qu'en bio. Cette croyance vient d'une époque révolue de Facebook. Elle ne change rien aujourd'hui.

Répondre à tous les commentaires dans l'heure. Ça fait plaisir aux gens, ce qui est déjà une bonne raison, mais ça ne relance pas la diffusion.

## Ce qui coupe vraiment la diffusion

Trois choses le font, et elles sont concrètes.

Un contenu qui ressemble à une publicité. Les plateformes vendent de l'espace publicitaire, elles n'ont aucune raison d'en distribuer gratuitement. Une offre commerciale explicite fait chuter la portée immédiatement.

Une musique protégée utilisée sur un compte professionnel. Ça peut bloquer la vidéo dans certains pays sans aucune notification. Utilisez les bibliothèques proposées par la plateforme.

Un contenu réutilisé depuis une autre plateforme avec son filigrane visible. Une vidéo TikTok republiée telle quelle sur Instagram avec le logo dans le coin est activement déclassée.

## Pourquoi ça vaut le coup de ne pas s'y intéresser

Le point important : vous ne pouvez pas optimiser pour un système qui change plusieurs fois par an et dont personne ne connaît le détail.

Ce qui ne change pas, en revanche, c'est ce que les gens veulent regarder. Une vidéo qui commence fort, qui dit une chose utile et qui se termine avant d'ennuyer marchera toujours, quelle que soit la version de l'algorithme.

Concentrez-vous là-dessus. C'est moins excitant que de chercher une faille, mais c'est la seule chose qui tient dans le temps.

## Le cas des périodes creuses

Il arrive que tout ralentisse pendant deux ou trois semaines sans raison identifiable. Ça arrive à tout le monde, y compris à des comptes qui font des millions de vues.

Ne changez rien pendant ces périodes. La réaction la plus courante est de tout modifier d'un coup, ce qui rend impossible de comprendre ce qui marchait avant.

Publiez, attendez, continuez.

---

Si tout ça vous semble un travail à plein temps, [c'est parce que ça en est un](/reseaux-sociaux). C'est exactement pour ça que je le fais à la place de mes clients.
    `,
    contentEn: `
## The algorithm is not out to get you

I hear it every time: "the algorithm punished me", "Instagram is blocking my account", "they stopped showing me since I added a link".

There is nobody behind it. A recommendation algorithm does one thing: it tries to guess how long you will stay in the app, and it prioritises whatever maximises that time.

Everything else follows from that. Once you understand the mechanism, most of the "tricks" going around collapse on their own.

## How a video gets distributed, step by step

You post. The platform shows your video to a small group, a few hundred people, a mix of followers and accounts close to your topic.

It measures what that group does. How many watch to the end. How many rewatch. How many send it to someone. How many stop to comment.

If the numbers are good relative to the platform average, it widens to a bigger group. It measures again. It widens again, or it stops.

There is no decision, no punishment, no memory of your previous videos. Every video starts with its own odds.

## The signals ranked, heaviest to lightest

Completion rate comes first. It is the king signal. A short video watched fully consistently beats a long video abandoned partway.

Rewatches come next. A video that loops without the viewer noticing sends a very strong signal.

Private shares follow. Sending a video to someone takes real effort, so the platform values it highly.

Saves count too, less strongly but on the same logic.

Comments and likes bring up the rear. They are the most visible signals and the least decisive, which explains why so many accounts with plenty of likes go nowhere.

## The fake tricks that cost you time

Posting time. It stopped mattering when distribution stopped being chronological. A video can take off three days after it goes up.

The number of hashtags. You will find people swearing you need thirty, others exactly five. Hashtags help categorise content, they do not create views. Three or four relevant ones are enough.

Putting the link in a comment rather than the bio. That belief comes from a long-gone era of Facebook. It changes nothing today.

Replying to every comment within the hour. People appreciate it, which is already a good reason, but it does not restart distribution.

## What actually kills distribution

Three things do, and they are concrete.

Content that looks like an advert. Platforms sell ad space, they have no reason to give it away. An explicit commercial offer drops your reach immediately.

Copyrighted music on a business account. It can block the video in certain countries with no notification at all. Use the libraries the platform provides.

Content reused from another platform with a visible watermark. A TikTok video reposted as is on Instagram with the logo in the corner is actively demoted.

## Why it is worth not caring too much

Here is the point: you cannot optimise for a system that changes several times a year and whose details nobody knows.

What does not change is what people want to watch. A video that opens strongly, says one useful thing and ends before it gets boring will always work, whatever version of the algorithm is running.

Focus there. It is less exciting than hunting for a loophole, but it is the only thing that holds up over time.

## About quiet stretches

Sometimes everything slows down for two or three weeks for no identifiable reason. It happens to everyone, including accounts pulling millions of views.

Change nothing during those stretches. The most common reaction is to alter everything at once, which makes it impossible to work out what was working before.

Post, wait, carry on.

---

If all of this sounds like a full-time job, [that is because it is one](/reseaux-sociaux). Which is exactly why I do it instead of my clients.
    `,
  },
];

/**
 * Catalogue complet, trie du plus recent au plus ancien.
 * L'ordre du tableau pilote toutes les listes du site.
 */
export const blogPosts: BlogPost[] = [
  ...legacyPosts,
  ...socialPostsA,
  ...socialPostsB,
  ...videoPosts,
  ...localPosts,
  ...webPosts,
  ...creationPosts,
  ...googlePosts,
  ...tourismePosts,
  ...socialPostsC,
  ...metiersPosts,
  ...decisionsPosts,
].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : Number(b.id) - Number(a.id)));

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

/**
 * Visuel de partage. Par defaut le visuel editorial genere par
 * scripts/generate-blog-covers.mjs, servi depuis le domaine plutot que
 * hotlinke sur une banque d'images.
 */
export const getPostImage = (post: BlogPost): string =>
  post.image ?? `https://elieageron.com/blog/covers/${post.slug}.png`;

/**
 * Articles visibles dans une langue donnee. Les articles `frOnly` sont masques
 * en anglais : servir du francais sous `lang="en"` ferait plus de mal que bien.
 */
export const getPostsForLanguage = (language: 'fr' | 'en'): BlogPost[] =>
  language === 'fr' ? blogPosts : blogPosts.filter((post) => !post.frOnly);

export const getPostsByCategory = (
  slug: CategorySlug,
  language: 'fr' | 'en' = 'fr'
): BlogPost[] => getPostsForLanguage(language).filter((post) => getCategorySlug(post) === slug);

/** Categories qui contiennent au moins un article dans la langue demandee. */
export const getActiveCategories = (language: 'fr' | 'en' = 'fr') =>
  blogCategories
    .map((category) => ({
      ...category,
      count: getPostsByCategory(category.slug, language).length,
    }))
    .filter((category) => category.count > 0);

/**
 * Lectures suivantes. On respecte d'abord la liste `related` ecrite a la main,
 * puis on complete par proximite : meme categorie, puis tags partages.
 */
export const getRelatedPosts = (
  post: BlogPost,
  language: 'fr' | 'en' = 'fr',
  limit = 3
): BlogPost[] => {
  const pool = getPostsForLanguage(language).filter((p) => p.slug !== post.slug);
  const picked: BlogPost[] = [];

  const push = (candidate?: BlogPost) => {
    if (candidate && picked.length < limit && !picked.some((p) => p.slug === candidate.slug)) {
      picked.push(candidate);
    }
  };

  (post.related ?? []).forEach((slug) => push(pool.find((p) => p.slug === slug)));

  const category = getCategorySlug(post);
  pool
    .filter((p) => getCategorySlug(p) === category)
    .forEach(push);

  const tags = new Set(post.tags ?? []);
  if (tags.size > 0) {
    pool
      .filter((p) => (p.tags ?? []).some((tag) => tags.has(tag)))
      .forEach(push);
  }

  pool.forEach(push);

  return picked;
};

/**
 * Ajoute le suffixe de marque tant que la balise title reste sous 60 caracteres.
 * Les titres deja signes ou trop longs sont laisses tels quels.
 */
const withBrand = (title: string): string => {
  const suffix = ' | Elie Ageron';
  if (title.includes('Elie Ageron')) return title;
  return title.length + suffix.length <= 60 ? title + suffix : title;
};

/** Contenu localise, avec repli sur le francais pour les articles `frOnly`. */
export const getLocalizedPost = (post: BlogPost, language: 'fr' | 'en') => {
  const useEnglish = language === 'en' && !post.frOnly;

  const title = useEnglish ? post.titleEn ?? post.titleFr : post.titleFr;
  const excerpt = useEnglish ? post.excerptEn ?? post.excerptFr : post.excerptFr;

  return {
    ...post,
    title,
    excerpt,
    content: useEnglish ? post.contentEn ?? post.contentFr : post.contentFr,
    category: useEnglish ? post.categoryEn ?? post.categoryFr : post.categoryFr,
    categorySlug: getCategorySlug(post),
    categoryLabel: useEnglish ? getCategory(getCategorySlug(post)).en : getCategory(getCategorySlug(post)).fr,
    // Balise title complete (suffixe marque compris) et meta description.
    // Les articles ont un titre editorial long ; ces champs gardent le SEO
    // sous les limites de Google sans raccourcir le H1.
    seoTitle: withBrand((useEnglish ? post.seoTitleEn : post.seoTitleFr) ?? title),
    seoDesc: (useEnglish ? post.seoDescEn : post.seoDescFr) ?? excerpt,
    /** Langue reelle du contenu servi, utilisee pour la balise html lang. */
    contentLanguage: (useEnglish ? 'en' : 'fr') as 'fr' | 'en',
  };
};
