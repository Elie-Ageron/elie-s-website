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
    'hero.headline1': "You're losing clients every day.",
    'hero.headline2': "You just don't see it yet.",
    'hero.badge': 'Online in 7–14 days · From $500',
    'hero.cta': "Let's fix this, it's free 🚀",
    'hero.scroll': 'Scroll',
    'hero.proof.satisfaction': '100% Satisfied Clients',
    'hero.proof.quality': '5-Star Quality',
    'hero.proof.guarantee': 'Results Guaranteed',
    'globalForm.title': 'Tell me about your situation',
    'globalForm.subtitle': "One message is enough. I get back to you within 24 hours, always.",
    'home.viewPricing': 'See Prices',
    'home.valueProps.title1': 'Can your future clients',
    'home.valueProps.title2': 'find you online?',
    'home.valueProps.subtitle': 'If they Google your service and you\'re not there, they go straight to your competitor. Here\'s what changes when you have a site that actually works.',
    'home.value1.title': 'Clients who look and find you',
    'home.value1.desc': 'Every day, people search for exactly what you offer. The question is: do they find you, or the person down the street?',
    'home.value2.title': 'They trust you before they even call',
    'home.value2.desc': 'Without a professional site, you\'re invisible. With the right one, people already say \'yes\' before they pick up the phone.',
    'home.value3.title': 'Your best salesperson never sleeps',
    'home.value3.desc': 'While you sleep, eat, and work, your site answers questions, builds trust, and brings you new contacts. 24/7, no days off.',
    'home.cta.title': 'Tired of watching competitors grow?',
    'home.cta.subtitle': 'Free 30-min call. We look at your situation together and I tell you honestly what I can do for you.',
    'home.cta.button': 'Yes, I want more clients',
    
    // Home Contact Methods
    'home.contact.title1': 'Ready to stop',
    'home.contact.title2': 'losing clients?',
    'home.contact.subtitle': 'No sales pitch, no pressure. Just an honest conversation about what you actually need.',
    'home.contact.recommended': 'Recommended',
    'home.contact.call.title': 'Book a Free 30-min Call',
    'home.contact.call.desc': 'We look at your situation together. I\'ll tell you honestly what can bring you more clients and exactly how.',
    'home.contact.call.cta': 'Choose a time slot',
    'home.contact.whatsapp.desc': 'A quick question? A project idea? Drop me a message. I usually reply within minutes.',
    'home.contact.whatsapp.cta': 'Send a message',
    'home.contact.email.desc': "Prefer email? Tell me about your situation and I'll come back with concrete ideas within 24 hours.",

    // Stats / Value Props
    'stats.always.title': 'Clients even while you sleep',
    'stats.always.desc': 'Your site never takes a day off. While you rest, it collects inquiries, builds trust, and finds new clients for you.',
    'stats.trust.title': 'They trust you before calling',
    'stats.trust.desc': 'People Google first, decide second. If your site doesn\'t inspire confidence in 3 seconds, they\'re already on your competitor\'s page.',
    'stats.mobile.title': '7 in 10 visitors are on mobile',
    'stats.mobile.desc': 'If your site looks bad on phones, you lose 70% of visitors before they read a single line. Ours look sharp on every screen.',
    'stats.cta': 'See how it works',
    'stats.cta.link': '/our-process',

    // Why a Website Page
    'why.title1': 'Your competitor has a website.',
    'why.title2': 'Do you?',
    'why.subtitle': 'Before anyone calls a business, they Google it. If you\'re not showing up, or if what they find doesn\'t look trustworthy, they\'re already calling someone else. That\'s money walking out the door.',
    'why.benefit1.title': 'Visible where your clients are searching',
    'why.benefit1.desc': 'When someone Googles your service in your city, your name comes up, not your competitor\'s. That\'s a client you would have lost.',
    'why.benefit2.title': 'Inquiries even at 3am',
    'why.benefit2.desc': 'Your contact form never closes. You wake up with new messages waiting, without lifting a finger the night before.',
    'why.benefit3.title': 'Pays for itself with one client',
    'why.benefit3.desc': 'One new client from your site covers the investment. Everything after that is pure profit, and it keeps working.',
    'why.benefit4.title': 'You instantly look 10x more professional',
    'why.benefit4.desc': 'People decide in 3 seconds. A sharp site says "I\'m serious, you can trust me". Without one, your competitor is saying that instead of you.',
    'why.comparison.title': 'The gap is real',
    'why.comparison.without': 'Without a Website',
    'why.comparison.with': 'With a Professional Site',
    'why.without.item1': 'Clients go to a competitor because they can\'t find you',
    'why.without.item2': 'Zero credibility: people scroll right past you',
    'why.without.item3': 'You\'re 100% dependent on word-of-mouth (which dries up)',
    'why.without.item4': 'Unreachable the moment you stop working',
    'why.with.item1': 'Found on Google by people who want exactly what you offer',
    'why.with.item2': 'Instant credibility: people choose you before they even call',
    'why.with.item3': 'Clients come in while you sleep, eat, and take weekends',
    'why.with.item4': 'Reachable 24/7, without any extra effort from you',
    'why.cta.title': 'You want results like this too?',
    'why.cta.subtitle': 'Browse the plans and pick what fits your situation.',
    'why.cta.button': 'See Prices',

    // Our Process Page
    'process.title1': 'From "invisible online"',
    'process.title2': 'to "clients are calling" in 4 steps',
    'process.subtitle': 'No jargon, no surprises. Here\'s exactly how we work, and why it gets results.',
    'process.step1.title': 'Free 30-min Call',
    'process.step1.desc': 'We talk about your business, your clients, your goals. I ask the right questions so I understand what will actually bring you results, not just a pretty site.',
    'process.step2.title': 'I Design Your Site',
    'process.step2.desc': 'I build a design made for your brand that makes visitors want to contact you, not just look. You validate, I adjust until it\'s exactly right.',
    'process.step3.title': 'I Build & Optimize Everything',
    'process.step3.desc': 'I develop the site, set up your Google visibility (SEO), and make sure everything loads in a flash, on every device.',
    'process.step4.title': 'Launch: Now You\'re In the Game',
    'process.step4.desc': 'Your site goes live. I walk you through it, and I stay available so you\'re never left hanging. The phone can start ringing now.',
    'process.cta.title': 'It\'s simpler than you think.',
    'process.cta.subtitle': 'One free 30-min call. We assess your situation and you leave with a clear picture of exactly what you need.',
    'process.cta.button': 'Book My Free Call',

    // Pricing Page
    'pricing.title1': 'Invest once.',
    'pricing.title2': 'Gain clients for years.',
    'pricing.subtitle': 'No hidden fees, no surprises. Here\'s exactly what you get, and what it\'s going to bring you.',
    'pricing.maintenance.toggle': 'Add Monthly Maintenance',
    'pricing.maintenance.desc': 'I handle everything: updates, security, hosting. Your site always runs perfectly, without you thinking about it.',
    'pricing.maintenance.custom': 'Custom',
    'pricing.guarantee.title': 'Not happy? I redo it. Simple.',
    'pricing.guarantee.desc': 'If the result doesn\'t feel right, I keep working until you\'re 100% satisfied. No extra charge, no negotiation.',

    // Services (shared with pricing)
    'services.title': 'Pick your path to more clients',
    'services.subtitle': 'Whether you\'re getting started or going all-in, there\'s a solution that fits.',
    'services.landing.title': 'Single-Page Site',
    'services.landing.price': '$500',
    'services.landing.desc': 'Everything you need on one sharp page, so visitors find you, trust you, and reach out to you.',
    'services.landing.feature1': 'Looks great on every device (phone, tablet, desktop)',
    'services.landing.feature2': 'Visible on Google in your area (basic SEO included)',
    'services.landing.feature3': 'Live in 7 to 14 business days',
    'services.landing.cta': 'Get started',
    
    'services.authority.title': 'Showcase Website',
    'services.authority.price': '$1500',
    'services.authority.desc': 'Your full online presence. Clients find you on Google, see you\'re the real deal, and choose you over the competitor down the street.',
    'services.authority.feature1': 'Multiple pages: home, services, about, contact',
    'services.authority.feature2': 'Serious Google SEO: you rank ahead of local competitors',
    'services.authority.feature3': 'Visitors can reach you directly from the site',
    'services.authority.feature4': 'Fast and flawless on mobile (7 in 10 visitors are on their phone)',
    'services.authority.cta': 'Get my site',
    'services.authority.popular': 'Most Popular',
    
    'services.custom.title': 'Full Launch Pack',
    'services.custom.price': '$3500',
    'services.custom.desc': 'Launching your business and want to do it right from day one? Identity, site, SEO, ads-ready. Everything\'s included. All you have to bring is yourself.',
    'services.custom.feature1': 'Showcase site + visual identity (logo, colors, fonts)',
    'services.custom.feature2': 'Advanced Google SEO to dominate your market',
    'services.custom.feature3': 'See exactly how many visitors come and what they do',
    'services.custom.feature4': 'Ready to run ads on Google, Facebook & Instagram from day 1',
    'services.custom.cta': "Let's talk",
    'pricing.quote.title': 'Something more specific?',
    'pricing.quote.title1': 'Something',
    'pricing.quote.title2': 'more specific?',
    'pricing.quote.desc': 'Your project doesn\'t fit a box? Perfect. Those are usually the most interesting ones. Tell me what you need and I\'ll build a custom quote around it.',
    'pricing.quote.cta': 'Get a custom quote',
    'pricing.quote.q1': 'Already have a site and want to rebuild it?',
    'pricing.quote.q2': 'E-commerce, booking system, member area?',
    'pricing.quote.q3': 'Need something completely custom?',
    'pricing.quote.q4': 'Not sure yet what you need?',

    // Portfolio
    'portfolio.title1': 'Real sites,',
    'portfolio.title2': 'real results',
    'portfolio.subtitle': 'See what it looks like when a website actually works.',
    'portfolio.preview': 'Live Preview',
    'portfolio.luxura.name': 'Luxura Spa',
    'portfolio.luxura.category': 'Wellness & Beauty',
    'portfolio.luxura.desc': 'Elegant, high-converting design that communicates luxury before a single word is read.',
    'portfolio.steel.name': 'Steel & Pipe Plumbing',
    'portfolio.steel.category': 'Home Services',
    'portfolio.steel.desc': 'Built to generate trust and calls. Brings in 50+ leads every month.',
    'portfolio.cta.title': 'Your business deserves this too.',
    'portfolio.cta.subtitle': 'Let\'s talk about what we can realistically build for you.',
    'portfolio.cta.button': 'Book a Free Strategy Call',

    // Testimonials
    'testimonials.title1': 'They were where',
    'testimonials.title2': 'you are right now.',
    'testimonials.subtitle': 'Real people. Real businesses. Real results.',
    'testimonials.cta': 'See the Work',
    'testimonials.cta.link': '/portfolio',
    'testimonial.1.text': "I was hesitant. And then I saw the result. My store finally has a real presence online. Sales jumped 30% in the very first month. Wish I\'d done it sooner.",
    'testimonial.1.author': 'Marc D.',
    'testimonial.1.role': 'Boutique Owner',
    'testimonial.1.date': 'Jan 2025',
    'testimonial.2.text': "I didn't know what to expect, but Elie went way beyond what I hoped for. The site is fast, beautiful, and it actually brings in leads. That\'s what matters.",
    'testimonial.2.author': 'Sophie L.',
    'testimonial.2.role': 'Real Estate Agent',
    'testimonial.2.date': 'Oct 2025',
    'testimonial.3.text': "Best investment I made for my business this year. We saw real results in just a few weeks. If you\'re on the fence, just do it.",
    'testimonial.3.author': 'Thomas R.',
    'testimonial.3.role': 'Fitness Coach',
    'testimonial.3.date': 'Nov 2024',

    // Popup
    'popup.title': "You lost clients this week. You just don't know it yet.",
    'popup.subtitle': "One free call can change that.",
    'popup.cta': 'Book my free call',
    'popup.close': 'Not right now',

    // Contact Page
    'contact.title1': "Let's talk",
    'contact.title2': "about your situation",
    'contact.subtitle': 'Free, no commitment. I listen to what you need and tell you honestly what I can do, and what I can\'t.',
    'contact.calendly.title': 'Book a Free 30-min Call',
    'contact.calendly.desc': 'We look at your situation together. You leave with a clear idea of what to do, whether you work with me or not.',
    'contact.calendly.button': 'Choose a slot',
    'contact.form.title': 'Send Me a Message',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.project': 'Tell me about your situation',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent! I\'ll get back to you within 24 hours.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with passion',

    // Portfolio Page - Extra
    'portfolio.badge': 'This could be your site',
    'portfolio.showcase.mywebglory.category': 'Premium Showcase Site',
    'portfolio.showcase.mywebglory.cta': 'Discover MyWebGlory',
    'portfolio.showcase.mywebglory.desc': 'Built to convert visitors into clients. Modern design, intuitive flow, and every element designed to get people to reach out.',
    'portfolio.showcase.solarfusion.category': 'Solar Energy Company',
    'portfolio.showcase.solarfusion.cta': 'Discover Solar Fusion',
    'portfolio.showcase.solarfusion.desc': 'A site that positions Solar Fusion as the obvious choice in their market, and keeps generating leads week after week.',
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
    'home.value1.desc': 'Les gens qui cherchent votre service sur Google vous trouvent - pas votre concurrent.',
    'home.value2.title': 'Confiance immédiate',
    'home.value2.desc': 'Un site professionnel = les gens vous prennent au sérieux avant même de vous contacter.',
    'home.value3.title': 'Vous bossez, il vend',
    'home.value3.desc': 'Votre site travaille jour et nuit. Il répond aux questions, convainc, et collecte des contacts - même pendant que vous dormez.',
    'home.cta.title': 'Prêt à avoir plus de clients en ligne ?',
    'home.cta.subtitle': 'Réservez un appel gratuit de 30 min. J\'analyse votre situation et je vous dis ce qu\'un site peut concrètement faire pour vous.',
    'home.cta.button': 'Réserver mon appel gratuit',
    
    // Home Contact Methods
    'home.contact.title1': 'Prêts à arrêter',
    'home.contact.title2': 'de perdre des clients ?',
    'home.contact.subtitle': 'Choisissez comment vous voulez qu\'on se parle. Pas de discours de vente, juste une vraie conversation.',
    'home.contact.recommended': 'Recommandé',
    'home.contact.call.title': 'Appel gratuit 30 min',
    'home.contact.call.desc': 'On regarde ensemble votre situation, je vous dis franchement ce qui peut vous apporter des clients et comment.',
    'home.contact.call.cta': 'Choisir un créneau',
    'home.contact.whatsapp.desc': 'Une question ? Une idée de projet ? Envoyez-moi un message, je réponds en général dans la minute.',
    'home.contact.whatsapp.cta': 'Envoyer un message',
    'home.contact.email.desc': "Vous préférez écrire ? Décrivez-moi votre situation, je reviens avec des idées concrètes sous 24h.",

    // Stats / Value Props
    'stats.always.title': 'Des clients même en dormant',
    'stats.always.desc': 'Votre site ne prend pas de congé. Pendant que vous vous reposez, il collecte des demandes, répond aux questions, et vous trouve de nouveaux clients.',
    'stats.trust.title': 'Ils vous font confiance avant d\'appeler',
    'stats.trust.desc': 'Les gens googlisent d\'abord, décident ensuite. Si votre site n\'inspire pas confiance en 3 secondes, ils sont déjà sur la page de votre concurrent.',
    'stats.mobile.title': '7 visiteurs sur 10 sont sur mobile',
    'stats.mobile.desc': 'Si votre site est moche sur téléphone, vous perdez 70% de vos visiteurs avant qu\'ils lisent une seule ligne. Les nôtres sont impeccables sur tous les écrans.',
    'stats.cta': 'Voir comment ça marche',
    'stats.cta.link': '/our-process',

    // Why a Website Page
    'why.title1': 'Sans site web,',
    'why.title2': 'vous êtes invisible',
    'why.subtitle': 'Aujourd\'hui, la première chose que fait n\'importe qui avant de contacter une entreprise, c\'est la googler. Si vous n\'êtes pas là - ou si ce qu\'ils trouvent n\'inspire pas confiance - ils vont ailleurs.',
    'why.benefit1.title': 'Trouvé sur Google',
    'why.benefit1.desc': 'Quand quelqu\'un cherche « plombier à Lyon » ou « coach à Paris », c\'est vous qui apparaissez en premier - pas votre concurrent.',
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
    'why.with.item2': 'Confiance immédiate - les gens vous choisissent sans hésiter',
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
    'pricing.title1': 'Investissez une fois.',
    'pricing.title2': 'Récoltez des clients longtemps.',
    'pricing.subtitle': 'Pas de surprise, pas de jargon. Voici exactement ce que vous obtenez, et ce que ça va vous rapporter.',
    'pricing.maintenance.toggle': 'Ajouter la maintenance mensuelle',
    'pricing.maintenance.desc': 'Je m\'occupe de tout : mises à jour, sécurité, hébergement. Votre site tourne toujours parfaitement, sans que vous y pensiez.',
    'pricing.maintenance.custom': 'Sur mesure',
    'pricing.guarantee.title': 'Pas satisfait ? Je refais. Point.',
    'pricing.guarantee.desc': 'Si le résultat n\'est pas à la hauteur, je retravaille jusqu\'\u00e0 ce que vous soyez 100% satisfait. Sans frais supplémentaires, sans discussion.',

    // Services (shared with pricing)
    'services.title': 'Choisissez votre niveau de présence en ligne',
    'services.subtitle': 'Que vous démarriez ou que vous lanciez tout - il y a une solution pour vous.',
    'services.landing.title': 'Site Une Page',
    'services.landing.price': '500€',
    'services.landing.desc': 'Une page claire et efficace pour présenter votre offre et pousser les visiteurs à vous contacter.',
    'services.landing.feature1': 'S\'affiche parfaitement sur tous les appareils (téléphone, tablette, ordinateur)',
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
    'pricing.quote.title': 'Besoins spécifiques ?',
    'pricing.quote.title1': 'Besoins',
    'pricing.quote.title2': 'spécifiques ?',
    'pricing.quote.desc': 'Votre projet ne rentre pas dans ces formules ? Dites-moi ce qu\'il vous faut et je vous prépare un devis sur mesure, sans engagement.',
    'pricing.quote.cta': 'Obtenir un devis sur mesure',
    'pricing.quote.q1': 'Vous avez déjà un site et voulez le refaire ?',
    'pricing.quote.q2': 'E-commerce, prise de rendez-vous, espace membre ?',
    'pricing.quote.q3': 'Vous avez besoin de quelque chose de vraiment sur mesure ?',
    'pricing.quote.q4': 'Pas encore sûr de ce qu\'il vous faut ?',

    // Portfolio
    'portfolio.title1': 'Des vrais sites,',
    'portfolio.title2': 'de vrais résultats',
    'portfolio.subtitle': 'Voyez à quoi ça ressemble quand un site travaille vraiment.',
    'portfolio.preview': 'Aperçu Live',
    'portfolio.luxura.name': 'Luxura Spa',
    'portfolio.luxura.category': 'Bien-être & Beauté',
    'portfolio.luxura.desc': 'Un design élégant et ultra-convertissant qui transmet le luxe avant même qu\'on lise un mot.',
    'portfolio.steel.name': 'Steel & Pipe Plumbing',
    'portfolio.steel.category': 'Services à Domicile',
    'portfolio.steel.desc': 'Construit pour générer de la confiance et des appels. Plus de 50 contacts par mois.',
    'portfolio.cta.title': 'Votre activité mérite ça aussi.',
    'portfolio.cta.subtitle': 'Parlons de ce qu\'on peut concrètement construire pour vous.',
    'portfolio.cta.button': 'Réserver mon appel gratuit',

    // Testimonials
    'testimonials.title1': 'Ils étaient exactement',
    'testimonials.title2': 'où vous en êtes.',
    'testimonials.subtitle': 'De vraies personnes. De vraies activités. De vrais résultats.',
    'testimonials.cta': 'Voir nos réalisations',
    'testimonials.cta.link': '/portfolio',
    'testimonial.1.text': "J'hésitais, et maintenant je regrette de ne pas l'avoir fait plus tôt. Mon magasin a enfin une vraie présence en ligne. Les ventes ont augmenté dès le premier mois.",
    'testimonial.1.author': 'Marc D.',
    'testimonial.1.role': 'Gérant de boutique',
    'testimonial.1.date': 'Jan 2025',
    'testimonial.2.text': "Je ne savais pas à quoi m'attendre, mais Elie a largement dépassé ce que j'espérais. Le site est beau, rapide, et il génère vraiment des demandes. C'est ça qui compte.",
    'testimonial.2.author': 'Sophie L.',
    'testimonial.2.role': 'Agent immobilier',
    'testimonial.2.date': 'Oct 2025',
    'testimonial.3.text': "Meilleur investissement de l'année pour ma boite. On a vu la différence en quelques semaines. Si vous hésitez encore, arrêtez d'hésiter.",
    'testimonial.3.author': 'Thomas R.',
    'testimonial.3.role': 'Coach fitness',
    'testimonial.3.date': 'Nov 2024',

    // Popup
    'popup.title': "Vous avez perdu des clients cette semaine. Vous ne le savez pas encore.",
    'popup.subtitle': "Un appel de 30 min peut changer ça.",
    'popup.cta': 'Réserver mon appel gratuit',
    'popup.close': 'Pas maintenant',

    // Contact Page
    'contact.title1': 'On parle de',
    'contact.title2': 'votre situation',
    'contact.subtitle': 'Gratuit, sans engagement. J\'écoute ce dont vous avez besoin et je vous dis honnêtement ce que je peux faire, et ce que je ne peux pas.',
    'contact.calendly.title': 'Réserver un appel gratuit',
    'contact.calendly.desc': 'On regarde votre situation ensemble. Vous repartez avec une idée claire de ce qu\'il vous faut, que vous travailliez avec moi ou pas.',
    'contact.calendly.button': 'Choisir un créneau',
    'contact.form.title': 'Envoyez-moi un message',
    'contact.name': 'Votre nom',
    'contact.email': 'Votre email',
    'contact.project': 'Décrivez-moi votre situation',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi...',
    'contact.success': 'Message envoyé ! Je vous recontacte sous 24h.',

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.made': 'Fait avec passion',

    // Portfolio Page - Extra
    'portfolio.badge': 'Ce site pourrait être le vôtre',
    'portfolio.showcase.mywebglory.category': 'Site Vitrine Premium',
    'portfolio.showcase.mywebglory.cta': 'Découvrir MyWebGlory',
    'portfolio.showcase.mywebglory.desc': 'Conçu pour convertir les visiteurs en clients. Design moderne, navigation fluide, et chaque élément pensé pour pousser à l\'action.',
    'portfolio.showcase.solarfusion.category': 'Énergie Solaire',
    'portfolio.showcase.solarfusion.cta': 'Découvrir Solar Fusion',
    'portfolio.showcase.solarfusion.desc': 'Un site qui positionne Solar Fusion comme l\'évidence dans son secteur, et génère des contacts semaine après semaine.',
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
