export interface BlogPost {
  id: string;
  slug: string;
  titleFr: string;
  titleEn: string;
  excerptFr: string;
  excerptEn: string;
  contentFr: string;
  contentEn: string;
  readTime: string;
  categoryFr: string;
  categoryEn: string;
  date: string;
  lastModified?: string;
  author: string;
  image?: string;
}

// Add your blog posts here - the content supports Markdown formatting
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'pourquoi-site-web-2025',
    titleFr: 'Pourquoi Votre Entreprise a Besoin d\'un Site Web en 2025',
    titleEn: 'Why Your Business Needs a Website in 2025',
    excerptFr: 'Le monde a radicalement changé et la manière dont vos clients vous trouvent aussi. Un site web en 2025 n\'est plus une simple brochure numérique.',
    excerptEn: 'The world has radically changed and so has the way your customers find you. A website in 2025 is no longer just a digital brochure.',
    readTime: '5 min',
    categoryFr: 'Stratégie',
    categoryEn: 'Strategy',
    date: '2026-01-20',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=630&fit=crop',
    contentFr: `
## Votre jumeau digital

Le monde a radicalement changé ces dernières années et la manière dont vos clients vous trouvent aussi. Aujourd'hui, votre entreprise ne commence plus à votre porte d'entrée mais sur l'écran d'un smartphone. Un site web en 2025 n'est plus une simple brochure numérique, c'est votre **jumeau digital** qui travaille pour vous chaque seconde.

## Le premier réflexe de vos clients

Imaginez un client potentiel qui entend parler de vous. Son premier réflexe sera de taper votre nom sur Google. S'il ne trouve rien ou s'il tombe sur une page qui semble figée dans le temps, vous perdez immédiatement en crédibilité.

Un design moderne et fluide envoie un message inconscient de fiabilité. Vous montrez que vous êtes à jour, que vous investissez dans votre image et donc que vous prendrez soin de vos clients avec la même rigueur.

## Votre commercial le plus rentable

Au-delà de l'image, c'est une question de **rentabilité**. Un site internet bien conçu est votre commercial le plus rentable :

- Il ne prend pas de congés
- Il ne tombe jamais malade
- Il traite les demandes d'informations automatiquement

Grâce à des outils d'automatisation, chaque visiteur qui remplit un formulaire est instantanément pris en charge. Vous ne laissez plus aucune opportunité s'échapper par manque de temps.

## Reprenez le contrôle de votre narration

Enfin, votre site vous permet de reprendre le contrôle de votre narration. Sur les réseaux sociaux, vous dépendez d'un algorithme qui peut décider de vous cacher du jour au lendemain.

Sur votre site, **vous êtes chez vous**. Vous décidez :

- Du parcours de votre client
- De ce qu'il voit en premier
- De l'émotion que vous voulez lui transmettre

C'est l'actif le plus stable et le plus puissant pour votre croissance à long terme.

---

Prêt à créer votre jumeau digital ? [Réservez un appel gratuit](/contact) pour en discuter.
    `,
    contentEn: `
## Your digital twin

The world has radically changed in recent years and so has the way your customers find you. Today, your business no longer starts at your front door but on a smartphone screen. A website in 2025 is no longer just a digital brochure, it's your **digital twin** working for you every second.

## Your customers' first reflex

Imagine a potential customer who hears about you. Their first reflex will be to type your name on Google. If they find nothing or land on a page that seems frozen in time, you immediately lose credibility.

A modern, fluid design sends an unconscious message of reliability. You show that you're up to date, that you invest in your image and therefore that you'll take care of your customers with the same rigor.

## Your most profitable salesperson

Beyond image, it's a matter of **profitability**. A well-designed website is your most profitable salesperson:

- It never takes days off
- It never gets sick
- It handles information requests automatically

Thanks to automation tools, every visitor who fills out a form is instantly taken care of. You no longer let any opportunity slip away due to lack of time.

## Take back control of your narrative

Finally, your website allows you to take back control of your narrative. On social media, you depend on an algorithm that can decide to hide you overnight.

On your website, **you're at home**. You decide:

- Your customer's journey
- What they see first
- The emotion you want to convey

It's the most stable and powerful asset for your long-term growth.

---

Ready to create your digital twin? [Book a free call](/contact) to discuss.
    `,
  },
  {
    id: '2',
    slug: 'optimiser-taux-conversion',
    titleFr: 'Comment Optimiser Votre Taux de Conversion',
    titleEn: 'How to Optimize Your Conversion Rate',
    excerptFr: 'Attirer des visiteurs sur votre site est une première étape, mais si personne ne clique sur vos boutons d\'action, votre investissement est gâché.',
    excerptEn: 'Attracting visitors to your site is a first step, but if no one clicks on your action buttons, your investment is wasted.',
    readTime: '7 min',
    categoryFr: 'Conversion',
    categoryEn: 'Conversion',
    date: '2026-02-12',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
    contentFr: `
## La science de la conversion

Attirer des visiteurs sur votre site est une première étape cruciale, mais si personne ne clique sur vos boutons d'action, votre investissement est gâché. La conversion est une science qui mélange **psychologie, design et clarté**. Pour transformer un simple curieux en client payant, vous devez éliminer toute friction sur son parcours.

## Règle n°1 : La clarté du message

En arrivant sur votre page, un utilisateur doit comprendre **trois choses en moins de cinq secondes** :

1. Ce que vous proposez
2. Comment cela résout son problème
3. Ce qu'il doit faire ensuite

Si vos phrases sont trop complexes ou vos boutons cachés, l'utilisateur partira. La simplicité est la forme ultime de la sophistication en web design.

## Le pouvoir de la preuve sociale

La preuve sociale est votre deuxième levier le plus puissant. L'être humain est rassuré par le groupe.

En affichant des **témoignages authentiques**, des études de cas chiffrées et des logos de partenaires, vous réduisez le sentiment de risque chez votre prospect. Un avis client bien placé peut augmenter votre taux de conversion de manière spectaculaire parce qu'il valide votre expertise aux yeux de quelqu'un qui ne vous connaît pas encore.

## L'urgence et l'incitation

Ensuite, parlons de l'urgence et de l'incitation. Sans manipuler vos clients, vous devez leur donner une raison d'agir **maintenant** plutôt que demain.

Cela peut passer par :

- Une offre limitée
- Un audit gratuit
- Souligner le coût de l'inaction

Chaque élément de votre site doit diriger l'œil vers un seul objectif clair, qu'il s'agisse d'un appel via Calendly ou d'un achat direct.

## L'optimisation technique

Enfin, l'optimisation technique est inséparable de la conversion :

- Un site qui met plus de **3 secondes à charger** perd la moitié de ses visiteurs avant même qu'ils n'aient vu votre offre
- La fluidité sur mobile est **non négociable**
- Si votre formulaire de contact est difficile à remplir avec un pouce, vous perdez des ventes chaque jour

Chaque détail compte pour transformer une intention en action concrète.

---

Envie d'auditer votre taux de conversion ? [Discutons-en](/contact).
    `,
    contentEn: `
## The science of conversion

Attracting visitors to your site is a crucial first step, but if no one clicks on your action buttons, your investment is wasted. Conversion is a science that mixes **psychology, design and clarity**. To transform a simple curious person into a paying customer, you must eliminate all friction on their journey.

## Rule #1: Message clarity

When arriving on your page, a user must understand **three things in less than five seconds**:

1. What you offer
2. How it solves their problem
3. What they need to do next

If your sentences are too complex or your buttons hidden, the user will leave. Simplicity is the ultimate form of sophistication in web design.

## The power of social proof

Social proof is your second most powerful lever. Humans are reassured by the group.

By displaying **authentic testimonials**, case studies with numbers, and partner logos, you reduce the sense of risk in your prospect. A well-placed customer review can dramatically increase your conversion rate because it validates your expertise in the eyes of someone who doesn't know you yet.

## Urgency and incentive

Next, let's talk about urgency and incentive. Without manipulating your customers, you need to give them a reason to act **now** rather than tomorrow.

This can be through:

- A limited offer
- A free audit
- Highlighting the cost of inaction

Every element of your site should direct the eye towards a single clear objective, whether it's a call via Calendly or a direct purchase.

## Technical optimization

Finally, technical optimization is inseparable from conversion:

- A site that takes more than **3 seconds to load** loses half its visitors before they even see your offer
- Mobile fluidity is **non-negotiable**
- If your contact form is difficult to fill out with a thumb, you're losing sales every day

Every detail counts to transform intention into concrete action.

---

Want to audit your conversion rate? [Let's discuss](/contact).
    `,
  },
  {
    id: '3',
    slug: 'seo-local-guide-complet',
    titleFr: 'SEO Local : Le Guide Complet pour Dominer Google',
    titleEn: 'Local SEO: The Complete Guide to Dominate Google',
    excerptFr: 'Pour un commerce ou prestataire de services lié à une région, le SEO local est la stratégie la plus rentable pour apparaître en haut de Google.',
    excerptEn: 'For a business or service provider tied to a region, local SEO is the most profitable strategy to appear at the top of Google.',
    readTime: '10 min',
    categoryFr: 'SEO',
    categoryEn: 'SEO',
    date: '2026-03-08',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=630&fit=crop',
    contentFr: `
## Pourquoi le SEO local est crucial

Pour un commerce ou un prestataire de services lié à une région géographique, le SEO local est la stratégie la plus rentable. C'est ce qui vous permet d'apparaître en haut de la page quand un client cherche un service près de chez lui. C'est une bataille pour la visibilité qui se gagne sur plusieurs fronts.

## Votre présence sur les cartes

Tout commence par votre présence sur les cartes. Votre **fiche d'établissement Google** doit être impeccable :

- Photos de haute qualité
- Horaires à jour
- Flux régulier d'avis positifs

Google utilise ces signaux pour déterminer votre niveau de confiance. Plus vous répondez aux avis, plus vous montrez à l'algorithme que votre entreprise est vivante et engagée envers ses clients.

## L'ancrage local sur votre site

Sur votre site lui-même, la structure de vos pages doit refléter votre ancrage local. Cela signifie inclure le nom de votre **ville et de votre région** dans :

- Vos titres
- Vos descriptions
- Votre contenu de manière naturelle

Créer des pages spécifiques pour chaque zone que vous desservez permet de capturer des recherches très précises que vos concurrents nationaux ignorent souvent.

## Le contenu éducatif local

Le contenu éducatif est votre prochain pilier. En écrivant sur les besoins spécifiques des clients de votre région, vous devenez une **autorité locale**.

Par exemple, parler des défis spécifiques de l'immobilier dans votre ville ou des normes artisanales locales crée un lien de proximité immédiat. Google identifie ce contenu comme hautement pertinent pour les utilisateurs de votre zone.

## Les backlinks locaux

Les liens externes locaux sont souvent oubliés mais essentiels. Un lien provenant de :

- Un journal local
- Un annuaire de quartier
- Une association de commerçants

...a **plus de poids** pour votre SEO local qu'un lien générique provenant d'un site à l'autre bout du monde. Cela prouve votre importance au sein de votre communauté physique.

## L'expérience mobile

Enfin, la vitesse de chargement et l'expérience mobile sont critiques pour le référencement local. La plupart des recherches locales sont effectuées **en déplacement sur un smartphone**.

Si votre site n'est pas parfaitement adapté aux mobiles, Google vous pénalisera au profit d'un concurrent plus agile techniquement.

**Dominer le SEO local, c'est être là où vos clients sont, au moment précis où ils ont besoin de vous.**

---

Besoin d'aide pour votre SEO local ? [Contactez-moi](/contact).
    `,
    contentEn: `
## Why local SEO is crucial

For a business or service provider tied to a geographic region, local SEO is the most profitable strategy. It's what allows you to appear at the top of the page when a customer searches for a service near them. It's a battle for visibility that's won on multiple fronts.

## Your presence on maps

Everything starts with your presence on maps. Your **Google Business Profile** must be impeccable:

- High-quality photos
- Up-to-date hours
- Regular flow of positive reviews

Google uses these signals to determine your trust level. The more you respond to reviews, the more you show the algorithm that your business is alive and engaged with its customers.

## Local anchoring on your site

On your site itself, the structure of your pages must reflect your local anchoring. This means including the name of your **city and region** in:

- Your titles
- Your descriptions
- Your content naturally

Creating specific pages for each area you serve allows you to capture very precise searches that your national competitors often ignore.

## Local educational content

Educational content is your next pillar. By writing about the specific needs of customers in your region, you become a **local authority**.

For example, talking about the specific challenges of real estate in your city or local craft standards creates an immediate sense of proximity. Google identifies this content as highly relevant for users in your area.

## Local backlinks

Local external links are often forgotten but essential. A link from:

- A local newspaper
- A neighborhood directory
- A merchants' association

...has **more weight** for your local SEO than a generic link from a site on the other side of the world. It proves your importance within your physical community.

## Mobile experience

Finally, loading speed and mobile experience are critical for local SEO. Most local searches are done **on the go on a smartphone**.

If your site isn't perfectly adapted to mobile, Google will penalize you in favor of a more technically agile competitor.

**Dominating local SEO means being where your customers are, at the precise moment they need you.**

---

Need help with your local SEO? [Contact me](/contact).
    `,
  },
  {
    id: '4',
    slug: 'landing-page-efficace',
    titleFr: 'Anatomie d\'une Landing Page qui Convertit',
    titleEn: 'Anatomy of a High-Converting Landing Page',
    excerptFr: 'Une landing page est un instrument de précision. Pour qu\'elle soit efficace, elle doit suivre une hiérarchie visuelle et psychologique.',
    excerptEn: 'A landing page is a precision instrument. To be effective, it must follow a visual and psychological hierarchy.',
    readTime: '6 min',
    categoryFr: 'Design',
    categoryEn: 'Design',
    date: '2026-04-05',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop',
    contentFr: `
## Un instrument de précision

Une landing page est un instrument de précision. Contrairement à une page d'accueil classique, elle n'a qu'un seul but et une seule destination. Pour qu'elle soit efficace, elle doit suivre une **hiérarchie visuelle et psychologique** qui mène naturellement votre visiteur vers la conversion.

## La section Hero

Tout commence par l'en-tête, la **section hero**. C'est ici que vous faites votre promesse principale.

- Votre titre doit être percutant et centré sur le **bénéfice client**, pas sur vos caractéristiques techniques
- Un sous-titre doit soutenir cette promesse en apportant de la crédibilité
- Le bouton d'appel à l'action doit être visible **immédiatement**, sans avoir à faire défiler la page

## La section des bénéfices

Vient ensuite la section des bénéfices. Ne listez pas ce que vous faites, expliquez **ce que cela change pour votre client**.

Utilisez des visuels qui parlent d'eux-mêmes. Les images doivent montrer le résultat final que votre client souhaite atteindre. La clarté visuelle aide à maintenir l'attention et à guider la lecture vers les points les plus importants.

## La preuve sociale

La section de preuve sociale doit suivre rapidement. C'est le moment de montrer :

- Des visages humains
- Des citations de clients satisfaits
- Des résultats concrets

Plus vos témoignages sont **spécifiques**, plus ils sont efficaces. Un client qui explique comment il a gagné du temps ou de l'argent grâce à vous est votre meilleur argument de vente.

## Adresser les objections

Ensuite, vous devez adresser les objections. Anticipez les questions que vos prospects se posent et répondez-y directement.

Une section **FAQ bien pensée** ou un paragraphe rassurant sur votre garantie de service peut lever les derniers doutes. L'objectif est de rendre la décision de vous contacter aussi simple et évidente que possible.

## Le formulaire parfait

Enfin, votre formulaire ou votre widget de réservation doit être d'une **simplicité absolue**. Ne demandez que les informations strictement nécessaires.

Plus vous demandez de détails, plus vous risquez de perdre votre prospect à la dernière seconde. Assurez une transition fluide entre la landing page et le début de votre relation client.

---

Envie de créer une landing page qui convertit ? [Parlons de votre projet](/contact).
    `,
    contentEn: `
## A precision instrument

A landing page is a precision instrument. Unlike a classic homepage, it has only one goal and one destination. To be effective, it must follow a **visual and psychological hierarchy** that naturally leads your visitor to conversion.

## The Hero section

Everything starts with the header, the **hero section**. This is where you make your main promise.

- Your title must be impactful and focused on the **customer benefit**, not on your technical features
- A subtitle must support this promise by adding credibility
- The call-to-action button must be visible **immediately**, without having to scroll

## The benefits section

Next comes the benefits section. Don't list what you do, explain **what it changes for your customer**.

Use visuals that speak for themselves. Images should show the end result your customer wants to achieve. Visual clarity helps maintain attention and guide reading to the most important points.

## Social proof

The social proof section should follow quickly. It's time to show:

- Human faces
- Quotes from satisfied customers
- Concrete results

The more **specific** your testimonials are, the more effective they are. A customer who explains how they saved time or money thanks to you is your best sales argument.

## Addressing objections

Next, you need to address objections. Anticipate the questions your prospects are asking and answer them directly.

A **well-designed FAQ section** or a reassuring paragraph about your service guarantee can remove the last doubts. The goal is to make the decision to contact you as simple and obvious as possible.

## The perfect form

Finally, your form or booking widget must be **absolutely simple**. Only ask for strictly necessary information.

The more details you ask for, the more likely you are to lose your prospect at the last second. Ensure a smooth transition between the landing page and the start of your customer relationship.

---

Want to create a landing page that converts? [Let's talk about your project](/contact).
    `,
  },
  {
    id: '5',
    slug: 'combien-coute-un-site-web',
    titleFr: 'Combien coûte un site web ? La vraie réponse.',
    titleEn: 'How Much Does a Website Cost? The Real Answer.',
    excerptFr: 'Entre 0€ et 50 000€, la fourchette est large. Ce qui détermine le prix, ce ne sont pas les heures passées — c\'est ce que le site vous rapporte.',
    excerptEn: 'Between €0 and €50,000, the range is wide. What determines the price isn\'t the hours spent — it\'s what the site brings back to you.',
    readTime: '6 min',
    categoryFr: 'Stratégie',
    categoryEn: 'Strategy',
    date: '2026-04-12',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop',
    contentFr: `
## La question que tout le monde se pose

On me la pose plusieurs fois par semaine. Parfois au téléphone, parfois par WhatsApp : "C\'est quoi le budget pour un site web ?"

La réponse honnête, c\'est : ça dépend. Je sais que c\'est frustrant à entendre. Alors voilà une vraie réponse, avec des chiffres et sans langue de bois.

## Ce que vous allez trouver sur le marché

Un site web peut coûter 0€ ou 80 000€. Ces deux extrêmes existent vraiment, et entre les deux, il y a un spectre immense. Concrètement, voici comment ça se découpe.

**Les créateurs en ligne** (Wix, Squarespace, Webflow en mode sans-code) : de 0 à 30€ par mois. Vous faites tout vous-même avec des templates préfabriqués. Le résultat peut être propre si vous y consacrez du temps. Mais votre site ressemblera à celui de vos concurrents qui utilisent le même template, et le référencement reste limité — ce n\'est pas fait pour ça.

**Un freelance** : entre 500€ et 5 000€. C\'est là que se situent la plupart des petites entreprises. Un bon freelance s\'occupe du design, du développement et du référencement de base. La qualité varie énormément d\'un prestataire à l\'autre — c\'est pour ça que le portfolio et les avis clients comptent autant que le tarif affiché.

**Une agence** : à partir de 5 000€, souvent bien au-delà. Vous payez aussi les locaux, les commerciaux, les réunions de cadrage. Pour une TPE avec des besoins standard, c\'est souvent plus cher que nécessaire.

## Ce qui fait monter la facture

Le nombre de pages est le premier facteur. Une landing page unique — une seule page qui présente votre offre et pousse le visiteur à vous contacter — est bien moins coûteuse qu\'un site avec huit pages de contenu, un blog et des pages de service détaillées.

Les fonctionnalités spécifiques ajoutent aussi du temps, donc du coût. Un système de réservation en ligne, un espace client, une boutique e-commerce — chacun représente des heures de développement supplémentaires.

Et puis il y a le niveau de personnalisation. Un site conçu entièrement sur mesure, avec une identité visuelle unique, demande plus de travail qu\'un template modifié. C\'est souvent là que réside la vraie différence entre un site qui ressemble à n\'importe qui et un site qui ressemble à vous.

## Un site moins cher peut-il quand même bien fonctionner ?

Oui. Le prix ne garantit pas la qualité.

Un site à 800€ fait par quelqu\'un qui comprend la conversion et le référencement battra souvent un site à 5 000€ conçu par une agence qui se concentre sur l\'esthétique. Ce qui compte vraiment : est-ce que le visiteur comprend immédiatement ce que vous faites ? Est-ce qu\'il sait quoi faire pour vous contacter ? Est-ce que la page charge vite sur mobile ?

Si oui, le site fait son travail — quel que soit son prix.

## La vraie question à se poser

Ce n\'est pas "combien ça coûte" mais "combien ça va me rapporter".

Un site qui vous amène un client supplémentaire par mois est amorti en quelques semaines pour la plupart des activités. Un artisan qui facture 1 500€ de travaux n\'a besoin que d\'un seul nouveau chantier via Google pour rentabiliser sa présence en ligne.

Si vous démarrez avec un budget serré, une landing page bien conçue vaut mieux qu\'un site vitrine bâclé deux fois plus cher. L\'important, c\'est qu\'elle fasse son travail.

---

Vous voulez savoir ce qu\'un site peut réalistement changer pour votre activité ? [On en parle, c\'est gratuit.](/contact)
    `,
    contentEn: `
## The question everyone asks

I get it several times a week. Over the phone, on WhatsApp: "What\'s the budget for a website?"

The honest answer is: it depends. I know that\'s frustrating to hear. So here\'s a real answer, with real numbers.

## What you\'ll find on the market

A website can cost €0 or €80,000. Both extremes exist, and between them is an enormous range. Here\'s how it breaks down in practice.

**Online builders** (Wix, Squarespace, Webflow no-code): €0 to €30 per month. You do everything yourself with pre-made templates. The result can look decent if you invest the time. But your site will look like your competitors\' who used the same template, and SEO remains limited — it\'s not really built for that.

**A freelancer**: between €500 and €5,000. This is where most small businesses land. A good freelancer handles design, development and basic SEO. Quality varies enormously from one provider to another — which is why portfolio and client reviews matter as much as the listed price.

**An agency**: from €5,000, often much higher. You\'re also paying for offices, salespeople, and kickoff meetings. For a small business with standard needs, it\'s often more expensive than necessary.

## What drives the price up

The number of pages is the first factor. A single landing page is far less expensive than a site with eight content pages, a blog and detailed service pages.

Specific features add time, therefore cost. An online booking system, a client portal, an e-commerce shop — each represents additional development hours.

Then there\'s the level of customisation. A fully bespoke site, with a unique visual identity, requires more work than a modified template. This is often where the real difference lies between a site that looks like anyone else and one that looks like you.

## Can a cheaper site still perform well?

Yes. Price doesn\'t guarantee quality.

An €800 site built by someone who understands conversion and SEO will often outperform a €5,000 site designed by an agency focused on aesthetics. What actually matters: does the visitor immediately understand what you do? Do they know how to contact you? Does the page load quickly on mobile?

If yes, the site does its job — regardless of cost.

## The real question to ask

It\'s not "how much does it cost" but "how much will it bring back."

A site that brings you one extra client per month pays for itself within weeks for most businesses. A tradesperson who invoices €1,500 per job only needs one new project from Google to recoup their online investment.

If you\'re starting with a tight budget, a well-designed landing page beats a botched showcase site that costs twice as much. What matters is that it does its job.

---

Want to know what a site could realistically do for your business? [Let\'s talk — it\'s free.](/contact)
    `,
  },
  {
    id: '6',
    slug: 'site-web-artisan',
    titleFr: 'Artisan, avez-vous vraiment besoin d\'un site web ?',
    titleEn: 'Tradesperson: Do You Really Need a Website?',
    excerptFr: '"Mes clients, c\'est le bouche-à-oreille." C\'est vrai. Mais ce que vous ne voyez pas, c\'est le nombre de personnes qui vous ont cherché sur Google et n\'ont rien trouvé.',
    excerptEn: '"My clients come from word of mouth." True. But what you don\'t see is how many people searched for you on Google and found nothing.',
    readTime: '5 min',
    categoryFr: 'Stratégie',
    categoryEn: 'Strategy',
    date: '2026-04-19',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop',
    contentFr: `
## La phrase que j\'entends tout le temps

"Moi, j\'ai pas besoin d\'un site. Mes clients, c\'est le bouche-à-oreille."

Je l\'entends régulièrement, surtout chez les artisans bien installés. Et c\'est une vraie question, pas une mauvaise excuse. Si votre agenda est plein, pourquoi investir ?

Voilà pourquoi.

## Ce qui se passe avant que votre téléphone sonne

Un ami recommande votre travail à quelqu\'un. Super. Mais aujourd\'hui, avant d\'appeler, cette personne va faire une chose : elle va vous chercher sur Google.

Si elle ne trouve rien, elle hésite. Si elle trouve un site impossible à lire sur mobile ou qui date de 2014, elle passe à celui d\'à côté. Qui lui, a pris la peine de soigner sa présence.

Le bouche-à-oreille reste précieux — mais il ne garantit plus la conversion tout seul. Les gens vérifient. Toujours, et de plus en plus.

## La réalité de vos clients aujourd\'hui

Les 25-45 ans — ceux qui font appel à un artisan pour une rénovation, une installation, une mise aux normes — ne cherchent plus dans les pages jaunes. Ils cherchent sur Google, ils lisent des avis, ils regardent des photos de vos réalisations.

Si vous n\'êtes pas là, vous n\'existez pas pour eux. C\'est brutal à entendre, mais c\'est réversible en quelques semaines.

## Ce qu\'un site change vraiment au quotidien

La première chose, c\'est la crédibilité avant l\'appel. Un visiteur qui tombe sur un site propre, avec quelques photos de chantiers terminés et deux ou trois témoignages clients, vous fait confiance avant même de vous avoir au téléphone. Le ton de la conversation est différent. Vous partez avec un avantage.

Ensuite, il y a la disponibilité. Vous êtes sur un chantier de 8h à 18h, le téléphone dans la poche. Vous ne pouvez pas toujours décrocher. Votre formulaire de contact, lui, prend le message à votre place. Vous le trouvez le soir, vous rappelez. Aucun contact perdu.

Et puis, la visibilité locale. Avec un site bien fait, vous pouvez apparaître quand quelqu\'un cherche "électricien Annecy" ou "plombier Thônes" sur Google. Ces gens-là ont un problème maintenant et cherchent quelqu\'un maintenant. C\'est exactement là où vous voulez être.

## "Mais mes clients me connaissent déjà"

Oui. Et le jour où vous voudrez développer votre activité, recruter un apprenti ou vous installer dans une nouvelle zone, vous aurez besoin d\'un flux régulier de nouveaux contacts.

Le bouche-à-oreille ne se pilote pas. Il ne se développe pas à volonté. Un site, si.

Et même si vous ne cherchez pas à grandir : pensez à ce que vous perdez chaque mois. Les gens qui vous cherchent, qui ne vous trouvent pas, qui appellent quelqu\'un d\'autre. C\'est silencieux comme perte — mais c\'est réel.

## Ce dont vous avez besoin concrètement

Pour un artisan, c\'est souvent simple. Une page claire avec ce que vous faites, votre zone d\'intervention, vos réalisations en photo, et un moyen de vous contacter. Pas besoin d\'un site de dix pages.

Une landing page bien conçue suffit pour exister en ligne et commencer à capter des contacts. C\'est un investissement qui se rembourse souvent dès le premier nouveau chantier trouvé via Google — et après ça, il continue de travailler pour vous.

---

Vous êtes artisan et vous voulez savoir ce qu\'un site peut changer pour vous ? [On en parle en 30 minutes.](/contact)
    `,
    contentEn: `
## The phrase I hear all the time

"I don\'t need a website. My clients come from word of mouth."

I hear it regularly, especially from well-established tradespeople. And it\'s a genuine question, not a bad excuse. If your diary is full, why invest?

Here\'s why.

## What happens before your phone rings

A friend recommends your work to someone. Great. But today, before calling, that person will do one thing: search for you on Google.

If they find nothing, they hesitate. If they find a site that\'s impossible to read on mobile or looks like it\'s from ten years ago, they move on to whoever comes up next. The one who took the time to sort out their online presence.

Word of mouth is still valuable — but it no longer guarantees the conversion on its own. People check. Always, and increasingly.

## The reality of your clients today

The 25-45 year olds — those who hire tradespeople for renovations, installations, compliance work — no longer look in phone directories. They search on Google, read reviews, and look at photos of your completed jobs.

If you\'re not there, you don\'t exist for them. That\'s hard to hear, but it\'s fixable within a few weeks.

## What a website actually changes day to day

The first thing is credibility before the call. A visitor who lands on a clean site, with a few photos of finished work and two or three client testimonials, already trusts you before they\'ve spoken to you. The tone of the conversation is different. You start with an advantage.

Then there\'s availability. You\'re on a job from 8am to 6pm, phone in your pocket. You can\'t always answer. Your contact form takes the message for you. You find it in the evening, you call back. No contact lost.

And then there\'s local visibility. With a well-built site, you can appear when someone searches "electrician Annecy" or "plumber Chambéry" on Google. These people have a problem right now and are looking for someone right now. That\'s exactly where you want to be.

## "But my clients already know me"

Yes. And the day you want to grow your business, take on an apprentice, or move into a new area, you\'ll need a steady flow of new contacts.

Word of mouth can\'t be controlled or scaled on demand. A website can.

And even if you\'re not looking to grow: think about what you\'re losing every month. People searching for you, finding nothing, calling someone else. It\'s a silent loss — but it\'s real.

## What you actually need

For a tradesperson, it\'s often straightforward. One clear page with what you do, your service area, photos of your work, and a way to contact you. No need for a ten-page site.

A well-designed landing page is enough to exist online and start capturing contacts. It\'s an investment that typically pays for itself with the first new job found through Google — and after that, it keeps working for you.

---

You\'re a tradesperson and you want to know what a website could change for you? [Let\'s talk — 30 minutes.](/contact)
    `,
  },
  {
    id: '7',
    slug: 'pourquoi-site-pas-sur-google',
    titleFr: 'Mon site est en ligne depuis des semaines. Pourquoi je n\'apparais pas sur Google ?',
    titleEn: 'My Site Has Been Live for Weeks. Why Am I Not Showing on Google?',
    excerptFr: 'Vous avez lancé votre site, vous êtes content du résultat. Puis vous tapez votre activité sur Google... et rien. C\'est l\'une des frustrations les plus communes après une mise en ligne.',
    excerptEn: 'You launched your site, you\'re happy with the result. Then you type your business into Google... and nothing. It\'s one of the most common frustrations after going live.',
    readTime: '7 min',
    categoryFr: 'SEO',
    categoryEn: 'SEO',
    date: '2026-04-19',
    lastModified: '2026-04-19',
    author: 'Elie Ageron',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=630&fit=crop',
    contentFr: `
## Vous n\'êtes pas seul

Vous avez mis votre site en ligne. Vous êtes content du résultat. Et puis vous tapez le nom de votre activité sur Google et... vous ne vous trouvez pas.

C\'est l\'une des premières frustrations après une mise en ligne. Et c\'est presque toujours explicable — il y a rarement un mystère là-dedans. Voici les raisons les plus fréquentes, et ce que vous pouvez faire.

## Google ne sait pas encore que vous existez

C\'est souvent là que ça coince. Google ne parcourt pas automatiquement internet en temps réel. Si personne ne lui a signalé votre site, il peut mettre plusieurs semaines à vous trouver tout seul.

La solution : Google Search Console. C\'est un outil gratuit de Google. Vous soumettez votre sitemap (un fichier qui liste toutes les pages de votre site), et vous demandez l\'indexation manuelle de votre page d\'accueil. Ça prend dix minutes et ça accélère considérablement le processus.

Si vous ne l\'avez pas fait, faites-le aujourd\'hui — avant de chercher une autre explication.

## Être indexé et être visible sur Google, c\'est deux choses différentes

C\'est un point que beaucoup confondent. Google peut connaître l\'existence de votre site et quand même ne pas vous afficher en première page.

Pour se classer, Google évalue des centaines de critères. Les plus importants pour un nouveau site :

La pertinence du contenu. Vos textes parlent-ils des mots-clés que vos clients tapent vraiment ? "Plombier chauffagiste Annecy" doit apparaître naturellement dans vos titres et vos paragraphes — pas juste dans un code caché que personne ne lit.

L\'autorité de votre domaine. C\'est la confiance que Google vous accorde au fil du temps. Un site de trois semaines n\'a pas encore cette autorité. C\'est normal, ça se construit — avec du contenu, du temps, et des liens depuis d\'autres sites vers le vôtre.

La qualité technique. Vitesse de chargement, compatibilité mobile, structure de la page — Google prend en compte l\'expérience que vous offrez aux visiteurs pour décider si vous méritez d\'être en haut.

## Votre site est peut-être bloqué par erreur

Ça arrive plus souvent qu\'on ne le croit, surtout sur les sites récemment lancés. Pendant le développement, les développeurs activent parfois une option qui dit à Google de ne pas indexer le site (pour éviter d\'indexer une version incomplète). Si cette option a été oubliée après la mise en ligne, Google vous voit mais refuse d\'afficher vos pages.

Comment vérifier : dans Google Search Console, l\'onglet "Couverture" vous dira si vos pages sont exclues de l\'index. Vous pouvez aussi taper `site:votre-domaine.com` dans Google — si rien ne s\'affiche, c\'est un signal qu\'il y a un blocage.

C\'est un problème qui se règle en cinq minutes une fois qu\'on sait où chercher.

## Vous cherchez les mauvais mots-clés

C\'est subtil, mais très répandu. Vous tapez "création de site web" parce que c\'est ce que vous proposez. Mais vos clients, eux, tapent "faire un site pour mon salon de coiffure" ou "site internet pour boulangerie pas cher".

Le bon référencement, ça commence par comprendre ce que vos clients cherchent — pas ce que vous pensez qu\'ils cherchent. Ces deux choses ne sont pas toujours les mêmes.

## Ce qu\'il faut garder en tête

Un nouveau site bien construit met en général trois à six mois pour commencer à apparaître sur des mots-clés compétitifs. Ce n\'est pas un signe que quelque chose ne va pas. C\'est le temps que Google prend pour vous observer, vous analyser et décider de vous faire confiance.

Pendant ce temps, le meilleur que vous puissiez faire : soumettre votre sitemap, vérifier qu\'aucun blocage n\'est actif, et continuer à écrire du contenu qui répond aux vraies questions de vos clients. Chaque page bien rédigée est une porte d\'entrée supplémentaire depuis Google.

Le référencement, c\'est un travail de fond. Mais avec les bons fondamentaux en place, les résultats arrivent — et ils durent.

---

Votre site ne remonte pas sur Google et vous voulez comprendre pourquoi ? [Regardons ça ensemble.](/contact)
    `,
    contentEn: `
## You\'re not alone

You launched your site. You\'re happy with the result. Then you type your business into Google and... nothing.

It\'s one of the first frustrations after going live. And it\'s almost always explainable — there\'s rarely a real mystery. Here are the most common reasons, and what you can do.

## Google doesn\'t know you exist yet

This is often where it gets stuck. Google doesn\'t automatically crawl the entire internet in real time. If no one has signalled your site to it, it can take several weeks to find you on its own.

The solution: Google Search Console. It\'s a free Google tool. You submit your sitemap (a file listing all your site\'s pages) and request manual indexing for your homepage. It takes ten minutes and significantly speeds up the process.

If you haven\'t done this, do it today — before looking for any other explanation.

## Being indexed and being visible on Google are two different things

This is something many people confuse. Google can know your site exists and still not show you on page one.

To rank, Google evaluates hundreds of criteria. The most important for a new site:

Relevance of your content. Do your texts talk about the keywords your clients actually type? "Plumber Annecy" should appear naturally in your titles and paragraphs — not just hidden in code that no one reads.

Your domain authority. This is the trust Google grants you over time. A three-week-old site doesn\'t have this authority yet. That\'s normal — it builds with content, time, and links from other sites pointing to yours.

Technical quality. Loading speed, mobile compatibility, page structure — Google considers the experience you offer visitors when deciding whether you deserve to rank.

## Your site might be blocked by mistake

This happens more often than you\'d think, especially on recently launched sites. During development, developers sometimes activate an option telling Google not to index the site (to avoid indexing an incomplete version). If this option was forgotten after launch, Google sees you but refuses to display your pages.

How to check: in Google Search Console, the "Coverage" tab will tell you if your pages are excluded from the index. You can also type `site:your-domain.com` into Google — if nothing comes up, that\'s a signal there\'s a block in place.

It\'s a problem that takes five minutes to fix once you know where to look.

## You\'re searching for the wrong keywords

This is subtle but very common. You type "web design" because that\'s what you offer. But your clients type "website for my hairdressing salon" or "cheap website for bakery."

Good SEO starts with understanding what your clients are actually searching for — not what you think they\'re searching for. Those two things aren\'t always the same.

## What to keep in mind

A well-built new site generally takes three to six months to start appearing for competitive keywords. That\'s not a sign something is wrong. It\'s the time Google takes to observe you, analyse you, and decide to trust you.

In the meantime, the best you can do: submit your sitemap, check no blocks are active, and keep writing content that answers your clients\' real questions. Every well-written page is an additional entry point from Google.

SEO is a long game. But with the right foundations in place, results come — and they last.

---

Your site isn\'t showing on Google and you want to understand why? [Let\'s look at it together.](/contact)
    `,
  },
];

// Helper function to get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get localized content
export const getLocalizedPost = (post: BlogPost, language: 'fr' | 'en') => {
  return {
    ...post,
    title: language === 'fr' ? post.titleFr : post.titleEn,
    excerpt: language === 'fr' ? post.excerptFr : post.excerptEn,
    content: language === 'fr' ? post.contentFr : post.contentEn,
    category: language === 'fr' ? post.categoryFr : post.categoryEn,
  };
};
