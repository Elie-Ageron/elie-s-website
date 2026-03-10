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
    'hero.headline1': "Your business deserves",
    'hero.headline2': "a real online presence.",
    'hero.badge': 'Online in 7–14 days · From $500',
    'hero.cta': "Let's talk, it's free",
    'hero.scroll': 'Scroll',
    'hero.proof.satisfaction': '100% Satisfied Clients',
    'hero.proof.quality': '5-Star Quality',
    'hero.proof.guarantee': 'Personal Follow-up',
    'globalForm.title': 'Tell me about your situation',
    'globalForm.subtitle': "One message is enough. I get back to you within 24 hours, always.",
    'home.viewPricing': 'See Prices',
    'home.valueProps.title1': 'What a real website',
    'home.valueProps.title2': 'does for your business',
    'home.valueProps.subtitle': 'Many businesses could reach more clients online with a stronger web presence. Here\'s what a well-built site actually changes.',
    'home.value1.title': 'Found by the right people',
    'home.value1.desc': 'Every day, people search for exactly what you offer. A well-positioned site makes sure it\'s your name they find.',
    'home.value2.title': 'Credibility from the first visit',
    'home.value2.desc': 'A professional site builds trust before anyone reaches out. Visitors arrive already confident in who you are.',
    'home.value3.title': 'Your site works while you rest',
    'home.value3.desc': 'While you work, sleep, or take a weekend, your site is answering questions, presenting your services, and bringing in new inquiries.',
    'home.cta.title': 'Ready to grow your online presence?',
    'home.cta.subtitle': 'Free 30-min call. We look at your situation together and I tell you honestly what I can do for you.',
    'home.cta.button': 'Book my free call',
    
    // Home Contact Methods
    'home.contact.title1': "Let's talk,",
    'home.contact.title2': 'no commitment',
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
    'stats.trust.desc': 'People Google before they call. A professional site is what turns a curious visitor into someone who reaches out.',
    'stats.mobile.title': '7 in 10 visitors are on mobile',
    'stats.mobile.desc': 'If your site isn\'t optimized for mobile, most visitors leave before reading a word. Every site I build looks great on every screen.',
    'stats.cta': 'Discover the process',
    'stats.cta.link': '/our-process',

    // Why a Website Page
    'why.title1': 'Without a website,',
    'why.title2': "you\'re hard to find.",
    'why.subtitle': 'Before contacting anyone, people look them up online. What they find - or don\'t find - shapes the decision.',
    'why.benefit1.title': 'Visible where your clients are searching',
    'why.benefit1.desc': 'When someone searches for your service in your area, your name comes up first. That\'s a new contact you wouldn\'t have had otherwise.',
    'why.benefit2.title': 'Inquiries outside of business hours',
    'why.benefit2.desc': 'Your contact form is always open. You can wake up to new messages waiting for you, without any extra effort on your part.',
    'why.benefit3.title': 'A solid return on investment',
    'why.benefit3.desc': 'One or two new clients from your site and it\'s already paid for itself. After that, it keeps working for you.',
    'why.benefit4.title': 'You build trust before the first conversation',
    'why.benefit4.desc': 'A professional site signals credibility immediately. People know they\'re dealing with someone serious before they even make contact.',
    'why.comparison.title': 'The difference is clear',
    'why.comparison.without': 'Without a Website',
    'why.comparison.with': 'With a Professional Site',
    'why.without.item1': 'Hard to find on Google, even for people looking for you',
    'why.without.item2': 'No online presence means less trust before the first call',
    'why.without.item3': 'Entirely dependent on referrals and word-of-mouth',
    'why.without.item4': 'No way to be reached outside of working hours',
    'why.with.item1': 'Visible on Google in your city and sector',
    'why.with.item2': 'Instant credibility: visitors trust you before reaching out',
    'why.with.item3': 'New inquiries coming in even when you\'re not working',
    'why.with.item4': 'Reachable 24/7, without any extra effort on your part',
    'why.cta.title': 'Ready to be more visible online?',
    'why.cta.subtitle': 'Browse the plans and pick what fits your situation.',
    'why.cta.button': 'See Prices',

    // Our Process Page
    'process.title1': 'From first conversation',
    'process.title2': 'to live website, in 4 steps',
    'process.subtitle': 'No jargon, no surprises. Here\'s exactly how we work together.',
    'process.step1.title': 'Free 30-min Call',
    'process.step1.desc': 'We talk about your business, your clients, your goals. I ask the right questions so I understand what will actually work for you, not just what looks good.',
    'process.step2.title': 'I Design Your Site',
    'process.step2.desc': 'I build a design tailored to your brand that gives visitors a reason to get in touch. You validate, I adjust until it\'s exactly right.',
    'process.step3.title': 'I Build & Optimize Everything',
    'process.step3.desc': 'I develop the site, set up your Google visibility (SEO), and make sure everything loads fast on every device.',
    'process.step4.title': 'Launch',
    'process.step4.desc': 'Your site goes live. I walk you through everything, and stay available if you have questions down the line.',
    'process.cta.title': "It's more straightforward than you'd think.",
    'process.cta.subtitle': 'One free 30-min call. We look at your situation together and you leave with a clear idea of what to do.',
    'process.cta.button': 'Book My Free Call',

    // Pricing Page
    'pricing.title1': 'Simple pricing,',
    'pricing.title2': 'real results.',
    'pricing.subtitle': 'No hidden fees, no surprises. Here\'s exactly what each plan includes.',
    'pricing.maintenance.toggle': 'Add Monthly Maintenance',
    'pricing.maintenance.desc': 'I handle everything: updates, security, hosting. Your site always runs perfectly, without you thinking about it.',
    'pricing.maintenance.custom': 'Custom',
    'pricing.guarantee.title': 'Not satisfied? I keep working.',
    'pricing.guarantee.desc': 'If the result doesn\'t feel right, I rework it until you\'re fully happy with what you have. No extra cost.',

    // Services (shared with pricing)
    'services.title': 'The plan that fits your needs',
    'services.title1': 'The plan that',
    'services.title2': 'fits your needs',
    'services.subtitle': 'Whether you\'re just getting started or building everything at once, there\'s an option that fits where you are.',
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
    'services.custom.desc': 'Launching your business and want to do it right from day one? Identity, site, SEO, ads-ready. Everything is included.',
    'services.custom.feature1': 'Showcase site + visual identity (logo, colors, fonts)',
    'services.custom.feature2': 'Advanced Google SEO to rank ahead in your sector',
    'services.custom.feature3': 'See exactly how many visitors come and what they do',
    'services.custom.feature4': 'Ready to run ads on Google, Facebook & Instagram from day 1',
    'services.custom.cta': "Let's talk",
    'pricing.quote.title': 'Something more specific?',
    'pricing.quote.title1': 'Something',
    'pricing.quote.title2': 'more specific?',
    'pricing.quote.desc': 'Your project doesn\'t fit neatly into a plan? No problem. Tell me what you need and I\'ll put together a quote around it.',
    'pricing.quote.cta': 'Get a custom quote',
    'pricing.quote.q1': 'Already have a site and want to rebuild it?',
    'pricing.quote.q2': 'E-commerce, booking system, member area?',
    'pricing.quote.q3': 'Need something completely custom?',
    'pricing.quote.q4': 'Not sure yet what you need?',

    // Portfolio
    'portfolio.title1': 'Real projects,',
    'portfolio.title2': 'measurable results',
    'portfolio.subtitle': 'See what it looks like when a website actually works.',
    'portfolio.preview': 'Live Preview',
    'portfolio.luxura.name': 'Luxura Spa',
    'portfolio.luxura.category': 'Wellness & Beauty',
    'portfolio.luxura.desc': 'Elegant, high-converting design that communicates luxury before a single word is read.',
    'portfolio.steel.name': 'Steel & Pipe Plumbing',
    'portfolio.steel.category': 'Home Services',
    'portfolio.steel.desc': 'Built to generate trust and calls. Brings in 50+ leads every month.',
    'portfolio.cta.title': 'Your business could look like this too.',
    'portfolio.cta.subtitle': 'Let\'s talk about what we can realistically build for you.',
    'portfolio.cta.button': 'Book a Free Strategy Call',

    // Testimonials
    'testimonials.title1': 'They were in your position.',
    'testimonials.title2': 'Now they have results.',
    'testimonials.subtitle': 'Real feedback from business owners who went through the process.',
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
    'testimonial.3.text': "Best investment I made for my business this year. We saw real results in just a few weeks. If you\'re still unsure, it\'s genuinely worth it.",
    'testimonial.3.author': 'Thomas R.',
    'testimonial.3.role': 'Fitness Coach',
    'testimonial.3.date': 'Nov 2024',

    // Popup
    'popup.title': "Most people search online before reaching out to a business.",
    'popup.subtitle': "Are they finding you? Let's find out.",
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
    'hero.headline1': "Votre business mérite",
    'hero.headline2': "une vraie présence en ligne.",
    'hero.badge': 'En ligne en 7-14 jours · Dès 500€',
    'hero.cta': 'Discutons-en, c\'est gratuit',
    'hero.scroll': 'Défiler',
    'hero.proof.satisfaction': '100% Clients satisfaits',
    'hero.proof.quality': 'Qualité 5 étoiles',
    'hero.proof.guarantee': 'Suivi personnalisé',
    'globalForm.title': 'Parlez-moi de votre projet',
    'globalForm.subtitle': 'Un message suffit. Je vous réponds sous 24h.',
    'home.viewPricing': 'Voir les tarifs',
    'home.valueProps.title1': 'L\'impact',
    'home.valueProps.title2': 'd\'un vrai site web',
    'home.valueProps.subtitle': 'Beaucoup d\'entreprises pourraient toucher plus de clients en ligne, simplement avec une meilleure présence. Voici trois différences concrètes.',
    'home.value1.title': 'Plus de clients',
    'home.value1.desc': 'Les gens qui cherchent votre service sur Google vous trouvent en premier.',
    'home.value2.title': 'Confiance immédiate',
    'home.value2.desc': 'Un site professionnel = les gens vous prennent au sérieux avant même de vous contacter.',
    'home.value3.title': 'Vous travaillez, il vend',
    'home.value3.desc': 'Votre site travaille jour et nuit. Il répond aux questions, convainc, et collecte des contacts - même pendant que vous dormez.',
    'home.cta.title': 'Prêt à avoir plus de clients en ligne ?',
    'home.cta.subtitle': 'Réservez un appel gratuit de 30 min. J\'analyse votre situation et je vous dis ce qu\'un site peut concrètement faire pour vous.',
    'home.cta.button': 'Réserver mon appel gratuit',
    
    // Home Contact Methods
    'home.contact.title1': 'Discutons',
    'home.contact.title2': 'sans engagement',
    'home.contact.subtitle': 'Choisissez comment vous souhaitez échanger. Pas de discours de vente, juste une conversation directe.',
    'home.contact.recommended': 'Recommandé',
    'home.contact.call.title': 'Appel gratuit 30 min',
    'home.contact.call.desc': 'Nous analysons ensemble votre situation, je vous indique clairement ce qui peut vous apporter des clients et comment.',
    'home.contact.call.cta': 'Choisir un créneau',
    'home.contact.whatsapp.desc': 'Une question ? Une idée de projet ? Envoyez-moi un message, je réponds en général dans la minute.',
    'home.contact.whatsapp.cta': 'Envoyer un message',
    'home.contact.email.desc': "Vous préférez écrire ? Décrivez-moi votre situation, je reviens avec des idées concrètes sous 24h.",

    // Stats / Value Props
    'stats.always.title': 'Des clients, même la nuit',
    'stats.always.desc': 'Votre site ne prend pas de congé. Pendant que vous vous reposez, il collecte des demandes, répond aux questions, et vous trouve de nouveaux clients.',
    'stats.trust.title': 'Ils vous font confiance avant d\'appeler',
    'stats.trust.desc': 'Les gens se renseignent en ligne avant de contacter. Un site professionnel est ce qui transforme un visiteur curieux en quelqu\'un qui prend contact.',
    'stats.mobile.title': '7 visiteurs sur 10 sont sur mobile',
    'stats.mobile.desc': 'Si votre site n\'est pas optimisé pour mobile, la plupart de vos visiteurs repartent sans rien lire. Chaque site que je crée est parfait sur tous les écrans.',
    'stats.cta': 'Découvrir la méthode',
    'stats.cta.link': '/our-process',

    // Why a Website Page
    'why.title1': 'Sans site web,',
    'why.title2': 'vous passez inaperçu',
    'why.subtitle': 'Aujourd\'hui, avant de contacter un professionnel, les gens le cherchent en ligne. Ce qu\'ils trouvent - ou ne trouvent pas - fait toute la différence.',
    'why.benefit1.title': 'Trouvé sur Google',
    'why.benefit1.desc': 'Quand quelqu\'un cherche « plombier à Lyon » ou « coach à Paris », c\'est vous qui apparaissez en premier - pas votre concurrent.',
    'why.benefit2.title': 'Des contacts même quand vous êtes fermé',
    'why.benefit2.desc': 'Votre formulaire de contact tourne la nuit, le week-end, les jours fériés. Vous vous réveillez avec des messages qui vous attendent.',
    'why.benefit3.title': 'Un investissement rapidement rentabilisé',
    'why.benefit3.desc': 'Un ou deux nouveaux clients via votre site et c\'est déjà remboursé. Ensuite il continue de travailler.',
    'why.benefit4.title': 'Vous gagnez la confiance avant même le premier contact',
    'why.benefit4.desc': 'Un site professionnel inspire confiance immédiatement. Les visiteurs arrivent déjà convaincus de qui vous êtes.',
    'why.comparison.title': 'La différence est concrète',
    'why.comparison.without': 'Sans Site Web',
    'why.comparison.with': 'Avec un Site Professionnel',
    'why.without.item1': 'Difficile à trouver pour quelqu\'un qui vous cherche',
    'why.without.item2': 'Moins de crédibilité sans présence en ligne visible',
    'why.without.item3': 'Entièrement dépendant du bouche-à-oreille',
    'why.without.item4': 'Injoignable en dehors des horaires de travail',
    'why.with.item1': 'Visible sur Google dans votre ville et secteur',
    'why.with.item2': 'Crédibilité immédiate, les visiteurs vous font confiance avant de contacter',
    'why.with.item3': 'Des demandes qui arrivent même quand vous ne travaillez pas',
    'why.with.item4': 'Joignable 24h/24, sans effort supplémentaire de votre part',
    'why.cta.title': 'Prêt à améliorer votre présence en ligne ?',
    'why.cta.subtitle': 'Regardez les formules et choisissez celle qui correspond à votre projet.',
    'why.cta.button': 'Voir les Tarifs',

    // Our Process Page
    'process.title1': 'De zéro à en ligne',
    'process.title2': 'en 4 étapes simples',
    'process.subtitle': 'Pas de jargon, pas de surprise. Voici exactement comment cela se déroule lorsque vous travaillez avec moi.',
    'process.step1.title': 'Appel gratuit (30 min)',
    'process.step1.desc': 'Nous échangeons sur votre activité, vos clients, vos objectifs. Je pose les bonnes questions pour comprendre ce qui fonctionnera réellement pour vous.',
    'process.step2.title': 'Je crée votre design',
    'process.step2.desc': 'Je crée un design à votre image qui donne envie aux visiteurs de vous contacter. Vous validez, j\'ajuste jusqu\'à ce que ce soit parfait.',
    'process.step3.title': 'Je développe et optimise',
    'process.step3.desc': 'Je développe le site, je configure la visibilité Google (référencement), et je m\'assure que tout charge vite sur tous les appareils.',
    'process.step4.title': 'Lancement - vous êtes en ligne',
    'process.step4.desc': 'Votre site est mis en ligne. Je vous forme à l\'utiliser, et je suis disponible si vous avez des questions.',
    'process.cta.title': 'Prêt à vous lancer ?',
    'process.cta.subtitle': 'Réservez votre appel gratuit. 30 minutes suffisent pour déterminer si nous sommes en adéquation pour travailler ensemble.',
    'process.cta.button': 'Réserver mon appel gratuit',

    // Pricing Page
    'pricing.title1': 'Des tarifs clairs,',
    'pricing.title2': 'des résultats concrets.',
    'pricing.subtitle': 'Pas de frais cachés, pas de surprises. Voici exactement ce que chaque formule inclut.',
    'pricing.maintenance.toggle': 'Ajouter la maintenance mensuelle',
    'pricing.maintenance.desc': 'Je m\'occupe de tout : mises à jour, sécurité, hébergement. Votre site tourne toujours parfaitement, sans que vous y pensiez.',
    'pricing.maintenance.custom': 'Sur mesure',
    'pricing.guarantee.title': 'Pas satisfait ? Je retravaille.',
    'pricing.guarantee.desc': 'Si le résultat ne vous convient pas, je refais jusqu\'\u00e0 ce que vous soyez pleinement satisfait. Sans frais supplémentaires.',

    // Services (shared with pricing)
    'services.title': 'Choisissez la formule adaptée à votre projet',
    'services.title1': 'La formule',
    'services.title2': "qu'il vous faut",
    'services.subtitle': 'Que vous démarriez ou que vous construisiez tout d\'un coup, il y a une option qui correspond à où vous en êtes.',
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
    'services.custom.desc': 'Vous lancez votre activité et voulez bien faire les choses dès le départ ? Identité, site, SEO, prêt pour les pubs. Tout est inclus.',
    'services.custom.feature1': 'Site vitrine + identité visuelle (logo, couleurs, typographies)',
    'services.custom.feature2': 'Référencement Google avancé pour apparaître en tête dans votre secteur',
    'services.custom.feature3': 'Vous voyez combien de visiteurs arrivent sur votre site et ce qu\'ils font',
    'services.custom.feature4': 'Prêt à lancer des pubs sur Google, Facebook et Instagram dès le jour 1',
    'services.custom.cta': 'Discutons-en',
    'pricing.quote.title': 'Besoins spécifiques ?',
    'pricing.quote.title1': 'Besoins',
    'pricing.quote.title2': 'spécifiques ?',
    'pricing.quote.desc': 'Votre projet ne rentre pas exactement dans une formule ? Pas de problème. Décrivez-moi ce dont vous avez besoin et je vous prépare un devis adapté.',
    'pricing.quote.cta': 'Obtenir un devis sur mesure',
    'pricing.quote.q1': 'Vous avez déjà un site et voulez le refaire ?',
    'pricing.quote.q2': 'E-commerce, prise de rendez-vous, espace membre ?',
    'pricing.quote.q3': 'Vous avez besoin de quelque chose de vraiment sur mesure ?',
    'pricing.quote.q4': 'Pas encore sûr de ce qu\'il vous faut ?',

    // Portfolio
    'portfolio.title1': 'Des projets réels,',
    'portfolio.title2': 'des résultats mesurables',
    'portfolio.subtitle': 'Découvrez ce qu\'un site performant peut accomplir pour votre activité.',
    'portfolio.preview': 'Aperçu Live',
    'portfolio.luxura.name': 'Luxura Spa',
    'portfolio.luxura.category': 'Bien-être & Beauté',
    'portfolio.luxura.desc': 'Un design élégant et ultra-convertissant qui transmet le luxe avant même qu\'on lise un mot.',
    'portfolio.steel.name': 'Steel & Pipe Plumbing',
    'portfolio.steel.category': 'Services à Domicile',
    'portfolio.steel.desc': 'Construit pour générer de la confiance et des appels. Plus de 50 contacts par mois.',
    'portfolio.cta.title': 'Votre activité peut ressembler à ça.',
    'portfolio.cta.subtitle': 'Parlons de ce qu\'on peut concrètement construire pour vous.',
    'portfolio.cta.button': 'Réserver mon appel gratuit',

    // Testimonials
    'testimonials.title1': 'Ils étaient à votre place.',
    'testimonials.title2': 'Aujourd\'hui, ils ont des résultats.',
    'testimonials.subtitle': 'Des retours honnêtes de gens qui sont passés par là.',
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
    'testimonial.3.text': "Meilleur investissement de l'année pour mon entreprise. Nous avons constaté la différence en quelques semaines. Si vous hésitez encore, c'est une décision qui en vaut vraiment la peine.",
    'testimonial.3.author': 'Thomas R.',
    'testimonial.3.role': 'Coach fitness',
    'testimonial.3.date': 'Nov 2024',

    // Popup
    'popup.title': "La majorité des gens cherchent un professionnel en ligne avant de prendre contact.",
    'popup.subtitle': "Est-ce qu'il vous trouve ? Voyons ça ensemble.",
    'popup.cta': 'Réserver mon appel gratuit',
    'popup.close': 'Pas maintenant',

    // Contact Page
    'contact.title1': 'Parlons de',
    'contact.title2': 'votre situation',
    'contact.subtitle': 'Gratuit, sans engagement. J\'écoute ce dont vous avez besoin et je vous dis honnêtement ce que je peux faire, et ce que je ne peux pas.',
    'contact.calendly.title': 'Réserver un appel gratuit',
    'contact.calendly.desc': 'Nous analysons votre situation ensemble. Vous repartez avec une idée claire de ce qu\'il vous faut, que vous travailliez avec moi ou non.',
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
