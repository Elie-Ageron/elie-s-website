import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header / Navigation
    'nav.why': 'Why a Website',
    'nav.process': 'Our Process',
    'nav.pricing': 'Pricing',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.book': 'Book a Call',

    // Home Page
    'hero.headline1': "Your website is losing you clients.",
    'hero.headline2': "Let's fix that.",
    'hero.badge': 'Online in 7-14 days - From $500',
    'hero.cta': "Let's talk - it's free 🚀",
    'hero.scroll': 'Scroll',
    'hero.proof.satisfaction': '100% Satisfied Clients',
    'hero.proof.quality': '5-Star Quality',
    'hero.proof.guarantee': 'Personalized Follow-up',
    'globalForm.title': 'Tell me about your project',
    'globalForm.subtitle': "A quick message and I get back to you within 24 hours, guaranteed.",
    'home.viewPricing': 'See Prices',
    'home.valueProps.title1': 'What changes when you',
    'home.valueProps.title2': 'have a real website',
    'home.valueProps.subtitle': 'Most businesses lose clients every day because they have no serious online presence. Here is what you gain.',
    'home.value1.title': 'More Clients',
    'home.value1.desc': 'People who search for your service on Google find you - not your competitor.',
    'home.value2.title': 'Instant Trust',
    'home.value2.desc': 'A professional site = people take you seriously before even contacting you.',
    'home.value3.title': 'You Work, It Sells',
    'home.value3.desc': 'Your site works day and night. It answers questions, convinces, and collects contacts - even while you sleep.',
    'home.cta.title': 'Ready to get more clients online?',
    'home.cta.subtitle': 'Book a free 30-min call. I look at your situation and tell you what concretely can be done for you.',
    'home.cta.button': 'Book my free call',
    
    // Home Contact Methods
    'home.contact.title1': 'Let\'s talk about',
    'home.contact.title2': 'your project',
    'home.contact.subtitle': 'No commitment, no sales pitch. Just a real conversation about what you need.',
    'home.contact.recommended': 'Recommended',
    'home.contact.call.title': 'Book a Free 30-min Call',
    'home.contact.call.desc': 'I look at your situation, answer your questions, and tell you what a website can realistically do for your business.',
    'home.contact.call.cta': 'Choose a time slot',
    'home.contact.whatsapp.desc': 'A quick question? A project idea? Message me on WhatsApp, I usually respond within minutes.',
    'home.contact.whatsapp.cta': 'Send a message',
    'home.contact.email.desc': "Prefer email? Tell me about your project, I reply within 24 hours.",

    // Stats / Value Props
    'stats.always.title': 'Clients even while sleeping',
    'stats.always.desc': 'Your site works 24/7 - it collects messages and requests even at 3am.',
    'stats.trust.title': 'They trust you before calling',
    'stats.trust.desc': 'A professional site is the #1 factor that makes people choose you over a competitor.',
    'stats.mobile.title': '7 in 10 visitors are on mobile',
    'stats.mobile.desc': 'Your site is perfect on phone, tablet, and computer. No one slips through the cracks.',
    'stats.cta': 'See how it works',
    'stats.cta.link': '/our-process',

    // Why a Website Page
    'why.title1': 'Without a website,',
    'why.title2': 'you\'re invisible',
    'why.subtitle': 'Today, the first thing anyone does before contacting a business is Google it. If you\'re not there - or if what they find doesn\'t inspire trust - they go to a competitor.',
    'why.benefit1.title': 'Found on Google',
    'why.benefit1.desc': 'When someone searches "plumber in Lyon" or "coach in Paris", they find you - not your competitor who has a better site.',
    'why.benefit2.title': 'Contacts even when you\'re closed',
    'why.benefit2.desc': 'Your contact form works at night, on weekends, on holidays. You wake up with messages waiting for you.',
    'why.benefit3.title': 'It pays for itself fast',
    'why.benefit3.desc': 'One or two new clients via your site and it\'s already paid for. Then it keeps working.',
    'why.benefit4.title': 'You look more serious than your competitors',
    'why.benefit4.desc': 'A professional site immediately gives confidence. It\'s the difference between someone who calls you and someone who goes elsewhere.',
    'why.comparison.title': 'The difference is clear',
    'why.comparison.without': 'Without a Website',
    'why.comparison.with': 'With a Professional Site',
    'why.without.item1': 'Lost clients who don\'t find you on Google',
    'why.without.item2': 'People don\'t trust you without an online presence',
    'why.without.item3': 'You depend only on word-of-mouth',
    'why.without.item4': 'No way to be contacted outside business hours',
    'why.with.item1': 'Visible on Google in your city and sector',
    'why.with.item2': 'Instant trust - people choose you with confidence',
    'why.with.item3': 'Clients arrive even when you\'re not looking',
    'why.with.item4': 'Contact form active 24/7, 365 days/year',
    'why.cta.title': 'Ready to be visible online?',
    'why.cta.subtitle': 'See the prices and choose what suits your project.',
    'why.cta.button': 'See Prices',

    // Our Process Page
    'process.title1': 'From zero to online',
    'process.title2': 'in 4 simple steps',
    'process.subtitle': 'No jargon, no surprise. Here is exactly how it works when you work with me.',
    'process.step1.title': 'Free Call (30 min)',
    'process.step1.desc': 'We talk about your business, your clients, your goals. I ask the right questions to understand what will really work for you.',
    'process.step2.title': 'I Design Your Site',
    'process.step2.desc': 'I create a design tailored to your image that makes visitors want to contact you. You validate, I adjust until it\'s perfect.',
    'process.step3.title': 'I Build and Optimize',
    'process.step3.desc': 'I develop the site, set up Google visibility (SEO), and make sure everything loads fast on all devices.',
    'process.step4.title': 'Launch - You\'re Online',
    'process.step4.desc': 'Your site goes live. I train you to use it, and I\'m available if you have questions.',
    'process.cta.title': 'Ready to get started?',
    'process.cta.subtitle': 'Book your free call. 30 minutes is enough to know if we\'re a good fit.',
    'process.cta.button': 'Book My Free Call',

    // Pricing Page
    'pricing.title1': 'Clear prices,',
    'pricing.title2': 'real results',
    'pricing.subtitle': 'No hidden fees. No jargon. Here is exactly what you get and what it costs.',
    'pricing.maintenance.toggle': 'Add Monthly Maintenance',
    'pricing.maintenance.desc': 'I take care of everything: updates, security, hosting. Your site always works perfectly.',
    'pricing.maintenance.custom': 'Custom',
    'pricing.guarantee.title': 'Not happy? I redo it.',
    'pricing.guarantee.desc': 'If the result doesn\'t suit you, I work on it again until you\'re 100% satisfied. No extra charge.',

    // Services (shared with pricing)
    'services.title': 'Choose your level of online presence',
    'services.subtitle': 'Whether you\'re starting out or launching everything - there\'s a solution for you.',
    'services.landing.title': 'Single-Page Site',
    'services.landing.price': '$500',
    'services.landing.desc': 'One clean, effective page to present your offer and get visitors to contact you.',
    'services.landing.feature1': 'Professional look on all devices (phone, tablet, computer)',
    'services.landing.feature2': 'Visible on Google in your city (basic SEO included)',
    'services.landing.feature3': 'Online in 7 to 14 business days',
    'services.landing.cta': 'Get started',
    
    'services.authority.title': 'Showcase Website',
    'services.authority.price': '$1500',
    'services.authority.desc': 'A real multi-page site so your clients find you on Google and choose you over competitors.',
    'services.authority.feature1': 'Several pages: home, services, about, contact',
    'services.authority.feature2': 'Solid Google SEO - you appear ahead of local competitors',
    'services.authority.feature3': 'Visitors can contact you directly from the site',
    'services.authority.feature4': 'Fast and perfect on mobile (7 in 10 visitors are on their phone)',
    'services.authority.cta': 'Get my site',
    'services.authority.popular': 'Most Popular',
    
    'services.custom.title': 'Full Launch Pack',
    'services.custom.price': '$3500',
    'services.custom.desc': 'For launching a brand new business: site + visual identity + everything to run your first ads.',
    'services.custom.feature1': 'Showcase site + visual identity (logo, colors, fonts)',
    'services.custom.feature2': 'Advanced Google SEO to dominate your market',
    'services.custom.feature3': 'You see how many visitors come to your site and what they do',
    'services.custom.feature4': 'Ready to run ads on Google, Facebook & Instagram from day 1',
    'services.custom.cta': "Let's talk",

    // Portfolio
    'portfolio.title1': 'Recent',
    'portfolio.title2': 'Projects',
    'portfolio.subtitle': 'Websites that convert visitors into clients',
    'portfolio.preview': 'Live Preview',
    'portfolio.luxura.name': 'Luxura Spa',
    'portfolio.luxura.category': 'Wellness & Beauty',
    'portfolio.luxura.desc': 'Minimalist, elegant design that captures the essence of luxury relaxation.',
    'portfolio.steel.name': 'Steel & Pipe Plumbing',
    'portfolio.steel.category': 'Home Services',
    'portfolio.steel.desc': 'Trust-focused, high-conversion site that generates 50+ leads monthly.',
    'portfolio.cta.title': 'Want Results Like These?',
    'portfolio.cta.subtitle': 'Let\'s discuss how we can transform your online presence.',
    'portfolio.cta.button': 'Book a Strategy Call',

    // Testimonials
    'testimonials.title1': 'What Clients',
    'testimonials.title2': 'Say',
    'testimonials.subtitle': 'Real results from real business owners',
    'testimonials.cta': 'See Our Work',
    'testimonials.cta.link': '/portfolio',
    'testimonial.1.text': "Honestly, I was hesitant but the result is insane. My store finally has a real presence online. Sales went up 30% in the first month.",
    'testimonial.1.author': 'Marc D.',
    'testimonial.1.role': 'Boutique Owner',
    'testimonial.1.date': 'Jan 2025',
    'testimonial.2.text': "I didn't know what to expect from a young designer, but Elie delivered beyond my expectations. Professional, fast, and the site actually converts!",
    'testimonial.2.author': 'Sophie L.',
    'testimonial.2.role': 'Real Estate Agent',
    'testimonial.2.date': 'Oct 2025',
    'testimonial.3.text': "Great investment for my business. Super fast results, we saw the difference in just a few weeks. I recommend without hesitation.",
    'testimonial.3.author': 'Thomas R.',
    'testimonial.3.role': 'Fitness Coach',
    'testimonial.3.date': 'Nov 2024',

    // Popup
    'popup.title': "How many clients did you lose this week?",
    'popup.subtitle': "Stop losing clients today.",
    'popup.cta': 'Book your free call',
    'popup.close': 'Maybe later',

    // Contact Page
    'contact.title1': "Let's talk",
    'contact.title2': "about your project",
    'contact.subtitle': 'Free call, no commitment. I answer your questions and tell you honestly what I can do for you.',
    'contact.calendly.title': 'Book a Free Call',
    'contact.calendly.desc': '30 minutes to talk about your project. I answer your questions and you leave with a clear idea of what to do.',
    'contact.calendly.button': 'Choose a time slot',
    'contact.form.title': 'Send a Message',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.project': 'Tell me about your project',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent! I\'ll get back to you soon.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with passion',

    // Portfolio Page - Extra
    'portfolio.badge': 'This could be your site',
    'portfolio.showcase.mywebglory.category': 'Premium Showcase Site',
    'portfolio.showcase.mywebglory.cta': 'Discover MyWebGlory',
    'portfolio.showcase.mywebglory.desc': 'A site designed to convert visitors into clients, with modern design and optimized user experience.',
    'portfolio.showcase.solarfusion.category': 'Solar Energy Company',
    'portfolio.showcase.solarfusion.cta': 'Discover Solar Fusion',
    'portfolio.showcase.solarfusion.desc': 'A professional site for a solar panel installer, designed to generate leads and build trust.',
  },
  fr: {
    // Header / Navigation
    'nav.why': 'Pourquoi un Site',
    'nav.process': 'Notre Méthode',
    'nav.pricing': 'Tarifs',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.book': 'Réserver un appel',

    // Home Page
    'hero.headline1': "Votre site vous fait perdre des clients.",
    'hero.headline2': "Changeons ça.",
    'hero.badge': 'En ligne en 7-14 jours - Dès 500€',
    'hero.cta': 'On en parle - c\'est gratuit 🚀',
    'hero.scroll': 'Défiler',
    'hero.proof.satisfaction': '100% Clients satisfaits',
    'hero.proof.quality': 'Qualité 5 étoiles',
    'hero.proof.guarantee': 'Suivi personnalisé',
    'globalForm.title': 'Parlez-moi de votre projet',
    'globalForm.subtitle': 'Un message suffit - je vous réponds sous 24h, garanti.',
    'home.viewPricing': 'Voir les tarifs',
    'home.valueProps.title1': 'Ce qui change quand vous avez',
    'home.valueProps.title2': 'un vrai site web',
    'home.valueProps.subtitle': 'La plupart des entreprises perdent des clients chaque jour parce qu\'elles n\'ont pas de présence en ligne sérieuse. Voici ce que vous gagnez.',
    'home.value1.title': 'Plus de clients',
    'home.value1.desc': 'Les gens qui cherchent votre service sur Google vous trouvent vous - pas votre concurrent.',
    'home.value2.title': 'Confiance immédiate',
    'home.value2.desc': 'Un site professionnel = les gens vous prennent au sérieux avant même de vous contacter.',
    'home.value3.title': 'Vous bossez, il vend',
    'home.value3.desc': 'Votre site travaille jour et nuit. Il répond aux questions, convainc, et collecte des contacts - même pendant que vous dormez.',
    'home.cta.title': 'Prêt à avoir plus de clients en ligne ?',
    'home.cta.subtitle': 'Réservez un appel gratuit de 30 min. J\'analyse votre situation et vous dis ce qu\'un site peut concrètement faire pour vous.',
    'home.cta.button': 'Réserver mon appel gratuit',
    
    // Home Contact Methods
    'home.contact.title1': 'On parle de',
    'home.contact.title2': 'votre projet ?',
    'home.contact.subtitle': 'Sans engagement, sans discours commercial. Juste une vraie conversation sur ce dont vous avez besoin.',
    'home.contact.recommended': 'Recommandé',
    'home.contact.call.title': 'Appel gratuit 30 min',
    'home.contact.call.desc': 'J\'analyse votre situation, je réponds à vos questions, et je vous dis ce qu\'un site peut concrètement apporter à votre activité.',
    'home.contact.call.cta': 'Choisir un créneau',
    'home.contact.whatsapp.desc': 'Une question rapide ? Une idée de projet ? Envoyez-moi un message WhatsApp, je réponds généralement en quelques minutes.',
    'home.contact.whatsapp.cta': 'Envoyer un message',
    'home.contact.email.desc': "Vous préférez l'email ? Parlez-moi de votre projet, je vous réponds sous 24h.",

    // Stats / Value Props
    'stats.always.title': 'Des clients même en dormant',
    'stats.always.desc': 'Votre site travaille 24h/24 - il collecte des messages et des demandes même à 3h du matin.',
    'stats.trust.title': 'Ils vous font confiance avant d\'appeler',
    'stats.trust.desc': 'Un site professionnel est le facteur n°1 qui pousse les gens à vous choisir plutôt qu\'un concurrent.',
    'stats.mobile.title': '7 visiteurs sur 10 sont sur mobile',
    'stats.mobile.desc': 'Votre site est parfait sur téléphone, tablette et ordinateur. Personne ne passe à travers les mailles.',
    'stats.cta': 'Voir comment ça marche',
    'stats.cta.link': '/our-process',

    // Why a Website Page
    'why.title1': 'Sans site web,',
    'why.title2': 'vous êtes invisible',
    'why.subtitle': 'Aujourd\'hui, la première chose que fait n\'importe qui avant de contacter une entreprise, c\'est la googler. Si vous n\'êtes pas là - ou si ce qu\'ils trouvent n\'inspire pas confiance - ils vont ailleurs.',
    'why.benefit1.title': 'Trouvé sur Google',
    'why.benefit1.desc': 'Quand quelqu\'un cherche « plombier à Lyon » ou « coach à Paris », c\'est vous qui apparaissez - pas votre concurrent qui a un meilleur site.',
    'why.benefit2.title': 'Des contacts même quand vous êtes fermé',
    'why.benefit2.desc': 'Votre formulaire de contact tourne la nuit, le week-end, les jours fériés. Vous vous réveillez avec des messages qui vous attendent.',
    'why.benefit3.title': 'Ça se rembourse vite',
    'why.benefit3.desc': 'Un ou deux nouveaux clients via votre site et c\'est déjà remboursé. Ensuite il continue de travailler.',
    'why.benefit4.title': 'Vous paraissez plus sérieux que vos concurrents',
    'why.benefit4.desc': 'Un site pro donne confiance immédiatement. C\'est la différence entre quelqu\'un qui vous appelle et quelqu\'un qui va ailleurs.',
    'why.comparison.title': 'La différence est claire',
    'why.comparison.without': 'Sans Site Web',
    'why.comparison.with': 'Avec un Site Professionnel',
    'why.without.item1': 'Des clients perdus qui ne vous trouvent pas sur Google',
    'why.without.item2': 'Les gens ne vous font pas confiance sans présence en ligne',
    'why.without.item3': 'Vous dépendez uniquement du bouche-à-oreille',
    'why.without.item4': 'Impossible d\'être contacté hors des horaires de bureau',
    'why.with.item1': 'Visible sur Google dans votre ville et secteur',
    'why.with.item2': 'Confiance immédiate - les gens vous choisissent avec sérénité',
    'why.with.item3': 'Des clients qui arrivent même quand vous ne cherchez pas',
    'why.with.item4': 'Formulaire de contact actif 24h/24, 365 jours/an',
    'why.cta.title': 'Prêt à être visible en ligne ?',
    'why.cta.subtitle': 'Regardez les tarifs et choisissez ce qui correspond à votre projet.',
    'why.cta.button': 'Voir les Tarifs',

    // Our Process Page
    'process.title1': 'De zéro à en ligne',
    'process.title2': 'en 4 étapes simples',
    'process.subtitle': 'Pas de jargon, pas de surprise. Voici exactement comment ça se passe quand vous travaillez avec moi.',
    'process.step1.title': 'Appel gratuit (30 min)',
    'process.step1.desc': 'On parle de votre activité, de vos clients, de vos objectifs. Je pose les bonnes questions pour comprendre ce qui va vraiment marcher pour vous.',
    'process.step2.title': 'Je crée votre design',
    'process.step2.desc': 'Je crée un design à votre image qui donne envie aux visiteurs de vous contacter. Vous validez, j\'ajuste jusqu\'à ce que ce soit parfait.',
    'process.step3.title': 'Je développe et optimise',
    'process.step3.desc': 'Je développe le site, je configure la visibilité Google (référencement), et je m\'assure que tout charge vite sur tous les appareils.',
    'process.step4.title': 'Lancement - vous êtes en ligne',
    'process.step4.desc': 'Votre site est mis en ligne. Je vous forme à l\'utiliser, et je suis disponible si vous avez des questions.',
    'process.cta.title': 'Prêt à vous lancer ?',
    'process.cta.subtitle': 'Réservez votre appel gratuit. 30 minutes suffisent pour savoir si on est faits pour travailler ensemble.',
    'process.cta.button': 'Réserver mon appel gratuit',

    // Pricing Page
    'pricing.title1': 'Des tarifs clairs,',
    'pricing.title2': 'des résultats réels',
    'pricing.subtitle': 'Pas de frais cachés. Pas de jargon. Voici exactement ce que vous obtenez et ce que ça coûte.',
    'pricing.maintenance.toggle': 'Ajouter la maintenance mensuelle',
    'pricing.maintenance.desc': 'Je m\'occupe de tout : mises à jour, sécurité, hébergement. Votre site fonctionne toujours parfaitement.',
    'pricing.maintenance.custom': 'Sur mesure',
    'pricing.guarantee.title': 'Pas satisfait ? Je refais.',
    'pricing.guarantee.desc': 'Si le résultat ne vous convient pas, je retravaille jusqu\'à ce que vous soyez 100% satisfait. Sans frais supplémentaires.',

    // Services (shared with pricing)
    'services.title': 'Choisissez votre niveau de présence en ligne',
    'services.subtitle': 'Que vous démarriez ou que vous lanciez tout - il y a une solution pour vous.',
    'services.landing.title': 'Site Une Page',
    'services.landing.price': '500€',
    'services.landing.desc': 'Une page claire et efficace pour présenter votre offre et pousser les visiteurs à vous contacter.',
    'services.landing.feature1': 'Look pro sur tous les appareils (téléphone, tablette, ordi)',
    'services.landing.feature2': 'Visible sur Google dans votre ville (référencement de base inclus)',
    'services.landing.feature3': 'En ligne en 7 à 14 jours ouvrés',
    'services.landing.cta': 'Commencer',
    
    'services.authority.title': 'Site Vitrine',
    'services.authority.price': '1500€',
    'services.authority.desc': 'Un vrai site plusieurs pages pour que vos clients vous trouvent sur Google et vous choisissent plutôt que la concurrence.',
    'services.authority.feature1': 'Plusieurs pages : accueil, services, à propos, contact',
    'services.authority.feature2': 'Référencement Google soigné - vous apparaissez devant vos concurrents locaux',
    'services.authority.feature3': 'Les visiteurs peuvent vous contacter directement depuis le site',
    'services.authority.feature4': 'Rapide et parfait sur mobile (7 visiteurs sur 10 sont sur téléphone)',
    'services.authority.cta': 'Avoir mon site',
    'services.authority.popular': 'Le plus populaire',
    
    'services.custom.title': 'Pack Lancement Complet',
    'services.custom.price': '3500€',
    'services.custom.desc': 'Pour créer une vraie entreprise : site + identité visuelle + tout ce qu\'il faut pour lancer vos premières pubs.',
    'services.custom.feature1': 'Site vitrine + identité visuelle (logo, couleurs, typographies)',
    'services.custom.feature2': 'Référencement Google avancé pour dominer votre marché',
    'services.custom.feature3': 'Vous voyez combien de visiteurs arrivent sur votre site et ce qu\'ils font',
    'services.custom.feature4': 'Prêt à lancer des pubs sur Google, Facebook et Instagram dès le jour 1',
    'services.custom.cta': 'On en parle',

    // Portfolio
    'portfolio.title1': 'Projets',
    'portfolio.title2': 'Récents',
    'portfolio.subtitle': 'Des sites qui convertissent les visiteurs en clients',
    'portfolio.preview': 'Aperçu Live',
    'portfolio.luxura.name': 'Luxura Spa',
    'portfolio.luxura.category': 'Bien-être & Beauté',
    'portfolio.luxura.desc': 'Design minimaliste et élégant qui capture l\'essence du luxe et de la relaxation.',
    'portfolio.steel.name': 'Steel & Pipe Plumbing',
    'portfolio.steel.category': 'Services à Domicile',
    'portfolio.steel.desc': 'Site axé confiance et haute conversion qui génère 50+ leads par mois.',
    'portfolio.cta.title': 'Vous Voulez des Résultats Similaires ?',
    'portfolio.cta.subtitle': 'Discutons de comment nous pouvons transformer votre présence en ligne.',
    'portfolio.cta.button': 'Réserver un Appel Stratégique',

    // Testimonials
    'testimonials.title1': 'Ce que disent',
    'testimonials.title2': 'mes clients',
    'testimonials.subtitle': 'Des résultats concrets pour de vrais entrepreneurs',
    'testimonials.cta': 'Voir nos réalisations',
    'testimonials.cta.link': '/portfolio',
    'testimonial.1.text': "Franchement, j'hésitais mais le résultat est dingue. Mon magasin a enfin une vraie présence sur le web. Les ventes ont augmenté dès le premier mois.",
    'testimonial.1.author': 'Marc D.',
    'testimonial.1.role': 'Gérant de boutique',
    'testimonial.1.date': 'Jan 2025',
    'testimonial.2.text': "Je ne savais pas à quoi m'attendre avec un jeune designer, mais Elie a dépassé mes attentes. Pro, rapide, je recommande !",
    'testimonial.2.author': 'Sophie L.',
    'testimonial.2.role': 'Agent immobilier',
    'testimonial.2.date': 'Oct 2025',
    'testimonial.3.text': "Très bon investissement pour ma boîte. Résultat super rapide, on a vu la différence en quelques semaines seulement. Je recommande sans hésiter.",
    'testimonial.3.author': 'Thomas R.',
    'testimonial.3.role': 'Coach fitness',
    'testimonial.3.date': 'Nov 2024',

    // Popup
    'popup.title': "Combien de clients avez-vous perdu cette semaine ?",
    'popup.subtitle': "Arrêtez de perdre des clients aujourd'hui.",
    'popup.cta': 'Réserver mon appel gratuit',
    'popup.close': 'Peut-être plus tard',

    // Contact Page
    'contact.title1': 'On parle de',
    'contact.title2': 'votre projet',
    'contact.subtitle': 'Appel gratuit, sans engagement. Je réponds à vos questions et vous dis honnêtement ce que je peux faire pour vous.',
    'contact.calendly.title': 'Réserver un appel gratuit',
    'contact.calendly.desc': '30 minutes pour parler de votre projet. Je réponds à vos questions et vous repartez avec une idée claire de quoi faire.',
    'contact.calendly.button': 'Choisir un créneau',
    'contact.form.title': 'Envoyer un Message',
    'contact.name': 'Votre nom',
    'contact.email': 'Votre email',
    'contact.project': 'Parlez-moi de votre projet',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi...',
    'contact.success': 'Message envoyé ! Je vous recontacte très vite.',

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.made': 'Fait avec passion',

    // Portfolio Page - Extra
    'portfolio.badge': 'Ce site pourrait être le vôtre',
    'portfolio.showcase.mywebglory.category': 'Site Vitrine Premium',
    'portfolio.showcase.mywebglory.cta': 'Découvrir MyWebGlory',
    'portfolio.showcase.mywebglory.desc': 'Un site conçu pour convertir les visiteurs en clients, avec un design moderne et une expérience utilisateur optimisée.',
    'portfolio.showcase.solarfusion.category': 'Énergie Solaire',
    'portfolio.showcase.solarfusion.cta': 'Découvrir Solar Fusion',
    'portfolio.showcase.solarfusion.desc': 'Un site professionnel pour un installateur de panneaux solaires, conçu pour générer des leads et inspirer confiance.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('fr')) {
      setLanguage('fr');
    } else {
      setLanguage('en');
    }
  }, []);

  const t = (key: string): string => {
    const langTranslations = translations[language];
    return (langTranslations as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
