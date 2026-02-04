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
    date: '2025-02-04',
    author: 'Elie Ageron',
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
    date: '2025-02-03',
    author: 'Elie Ageron',
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
    date: '2025-02-02',
    author: 'Elie Ageron',
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
    date: '2025-02-01',
    author: 'Elie Ageron',
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
