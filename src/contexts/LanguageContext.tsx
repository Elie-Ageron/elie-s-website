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
    'hero.headline': "Your website is losing you clients. Let's fix that.",
    'hero.subheadline': "High-converting sites designed to generate leads, boost your credibility, and multiply your revenue.",
    'hero.cta': 'Book your growth session',
    'home.viewPricing': 'View Pricing',
    'home.value1.title': 'More Leads',
    'home.value1.desc': 'Turn visitors into qualified prospects automatically.',
    'home.value2.title': 'Higher Credibility',
    'home.value2.desc': 'Look professional and trustworthy from day one.',
    'home.value3.title': 'Faster Growth',
    'home.value3.desc': 'Scale your business with a 24/7 sales machine.',
    'home.cta.title': 'Ready to transform your business?',
    'home.cta.subtitle': 'Book a free strategy call and discover how a premium website can multiply your revenue.',
    'home.cta.button': 'Book your free call',
    
    // Home Contact Methods
    'home.contact.title': 'Choose Your Preferred Contact Method',
    'home.contact.subtitle': 'Multiple ways to reach out — pick what works best for you.',
    'home.contact.recommended': 'Recommended',
    'home.contact.call.title': 'Book a Strategy Call',
    'home.contact.call.desc': 'Schedule a free 30-minute call to discuss your project and get personalized recommendations.',
    'home.contact.call.cta': 'Open Calendar',
    'home.contact.whatsapp.desc': 'Message me directly for quick questions or to start a conversation. I typically respond within minutes.',
    'home.contact.whatsapp.cta': 'Chat Now',
    'home.contact.email.desc': "Prefer email? Send me a detailed message and I'll reply within 24 hours with a thoughtful response.",

    // Stats
    'stats.visibility': 'More visibility',
    'stats.conversion': 'Conversion rate',
    'stats.responsive': 'Responsive',

    // Why a Website Page
    'why.title': 'Why You Need a Premium Website',
    'why.subtitle': 'In 2024, your website is your most valuable employee. It works 24/7, never asks for a raise, and converts visitors into paying clients.',
    'why.benefit1.title': '24/7 Global Visibility',
    'why.benefit1.desc': 'Your business is accessible worldwide, anytime. No office hours, no geographic limits.',
    'why.benefit2.title': 'Automated Lead Generation',
    'why.benefit2.desc': 'Capture leads while you sleep. Your website qualifies prospects automatically.',
    'why.benefit3.title': 'Explosive ROI',
    'why.benefit3.desc': 'A well-designed site pays for itself within weeks through new client acquisition.',
    'why.benefit4.title': 'Instant Authority',
    'why.benefit4.desc': 'Stand out from competitors with a professional presence that builds trust instantly.',
    'why.comparison.title': 'The Reality Check',
    'why.comparison.without': 'Without a Website',
    'why.comparison.with': 'With Élie Ageron Design',
    'why.without.item1': 'Losing clients to competitors',
    'why.without.item2': 'No online presence = no trust',
    'why.without.item3': 'Manual lead generation only',
    'why.without.item4': 'Limited to local reach',
    'why.with.item1': 'Converting visitors 24/7',
    'why.with.item2': 'Professional, trust-building presence',
    'why.with.item3': 'Automated lead capture system',
    'why.with.item4': 'Global audience accessibility',
    'why.cta.title': 'Stop Losing Money',
    'why.cta.subtitle': 'See our transparent pricing and choose the perfect solution for your business.',
    'why.cta.button': 'View Pricing',

    // Our Process Page
    'process.title': 'How We Build Your Success',
    'process.subtitle': 'A proven methodology that transforms your vision into a high-converting digital asset.',
    'process.step1.title': 'Discovery Call',
    'process.step1.desc': 'We understand your business, goals, and target audience to craft the perfect strategy.',
    'process.step2.title': 'Strategic Design',
    'process.step2.desc': 'Custom designs that reflect your brand while maximizing user experience and conversions.',
    'process.step3.title': 'Conversion Optimization',
    'process.step3.desc': 'Every element is tested and refined to turn visitors into paying clients.',
    'process.step4.title': 'Launch & Growth',
    'process.step4.desc': 'Your site goes live with ongoing support to ensure continuous improvement.',
    'process.cta.title': 'Ready to Start?',
    'process.cta.subtitle': 'Book your discovery call and let\'s build something incredible together.',
    'process.cta.button': 'Book Discovery Call',

    // Pricing Page
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'No hidden fees. No surprises. Just premium quality at fair prices.',
    'pricing.maintenance.toggle': 'Include Monthly Maintenance',
    'pricing.maintenance.desc': 'Updates, security, hosting, and priority support included.',
    'pricing.maintenance.custom': 'Custom',
    'pricing.guarantee.title': '100% Satisfaction Guarantee',
    'pricing.guarantee.desc': 'If you\'re not completely satisfied with the final result, we\'ll work until you are—at no extra cost.',

    // Services (shared with pricing)
    'services.title': 'Invest in your digital presence',
    'services.subtitle': 'Premium solutions tailored to your ambitions',
    'services.landing.title': 'Landing Page',
    'services.landing.price': '200€',
    'services.landing.desc': 'Perfect for launching a product or testing a market.',
    'services.landing.feature1': 'High-conversion design',
    'services.landing.feature2': '48h delivery',
    'services.landing.feature3': 'Mobile optimized',
    'services.landing.cta': 'Get started',
    
    'services.authority.title': '6-Page Authority Site',
    'services.authority.price': '1000€',
    'services.authority.desc': 'Establish your brand as an industry leader.',
    'services.authority.feature1': 'Complete SEO optimization',
    'services.authority.feature2': 'Professional branding',
    'services.authority.feature3': 'Content strategy included',
    'services.authority.feature4': 'Analytics dashboard',
    'services.authority.cta': 'Build authority',
    'services.authority.popular': 'Most Popular',
    
    'services.custom.title': 'Custom Solution',
    'services.custom.price': 'On quote',
    'services.custom.desc': 'For complex needs and ambitious scaling.',
    'services.custom.feature1': 'Unlimited pages',
    'services.custom.feature2': 'Advanced integrations',
    'services.custom.feature3': 'Dedicated support',
    'services.custom.feature4': 'Custom functionality',
    'services.custom.cta': 'Contact me',

    // Portfolio
    'portfolio.title': 'Recent Projects',
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
    'testimonials.title': 'What Clients Say',
    'testimonials.subtitle': 'Real results from real business owners',
    'testimonial.1.text': "Honestly, I was hesitant but the result is insane. My store finally has a real presence online. Sales went up 40% in the first month.",
    'testimonial.1.author': 'Marc D.',
    'testimonial.1.role': 'Boutique Owner',
    'testimonial.2.text': "I didn't know what to expect from a young designer, but Élie delivered beyond my expectations. Professional, fast, and the site actually converts!",
    'testimonial.2.author': 'Sophie L.',
    'testimonial.2.role': 'Real Estate Agent',
    'testimonial.3.text': "Best investment I've made for my business. The ROI was visible within weeks. Can't recommend enough.",
    'testimonial.3.author': 'Thomas R.',
    'testimonial.3.role': 'Fitness Coach',

    // Popup
    'popup.title': "How many clients did you lose this week?",
    'popup.subtitle': "Stop losing clients today.",
    'popup.cta': 'Book your free call',
    'popup.close': 'Maybe later',

    // Contact Page
    'contact.title': "Let's Build Something Great",
    'contact.subtitle': 'Ready to transform your online presence? Choose your preferred contact method.',
    'contact.calendly.title': 'Book a Call',
    'contact.calendly.desc': 'Schedule a free 15-minute discovery call to discuss your project.',
    'contact.calendly.button': 'Open Calendly',
    'contact.form.title': 'Send a Message',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.project': 'Tell me about your project',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent! I\'ll get back to you soon.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with passion in France',
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
    'hero.headline': "Votre site vous fait perdre des clients. Changeons ça.",
    'hero.subheadline': "Des sites haute conversion conçus pour générer des leads, booster votre crédibilité et multiplier votre chiffre d'affaires.",
    'hero.cta': 'Réservez votre session croissance',
    'home.viewPricing': 'Voir les tarifs',
    'home.value1.title': 'Plus de Leads',
    'home.value1.desc': 'Transformez les visiteurs en prospects qualifiés automatiquement.',
    'home.value2.title': 'Crédibilité Accrue',
    'home.value2.desc': 'Affichez une image professionnelle dès le premier jour.',
    'home.value3.title': 'Croissance Rapide',
    'home.value3.desc': 'Développez votre business avec une machine de vente 24/7.',
    'home.cta.title': 'Prêt à transformer votre business ?',
    'home.cta.subtitle': 'Réservez un appel stratégique gratuit et découvrez comment un site premium peut multiplier votre CA.',
    'home.cta.button': 'Réserver mon appel gratuit',
    
    // Home Contact Methods
    'home.contact.title': 'Choisissez Votre Mode de Contact',
    'home.contact.subtitle': 'Plusieurs façons de me joindre — choisissez celle qui vous convient le mieux.',
    'home.contact.recommended': 'Recommandé',
    'home.contact.call.title': 'Réserver un Appel Stratégique',
    'home.contact.call.desc': 'Planifiez un appel gratuit de 30 minutes pour discuter de votre projet et obtenir des recommandations personnalisées.',
    'home.contact.call.cta': 'Ouvrir le Calendrier',
    'home.contact.whatsapp.desc': 'Envoyez-moi un message pour des questions rapides ou pour démarrer une conversation. Je réponds généralement en quelques minutes.',
    'home.contact.whatsapp.cta': 'Discuter Maintenant',
    'home.contact.email.desc': "Vous préférez l'email ? Envoyez-moi un message détaillé et je vous répondrai sous 24h avec une réponse réfléchie.",

    // Stats
    'stats.visibility': 'Plus de visibilité',
    'stats.conversion': 'Taux de conversion',
    'stats.responsive': 'Responsive',

    // Why a Website Page
    'why.title': 'Pourquoi Vous Avez Besoin d\'un Site Premium',
    'why.subtitle': 'En 2024, votre site web est votre employé le plus précieux. Il travaille 24/7, ne demande jamais d\'augmentation, et convertit les visiteurs en clients.',
    'why.benefit1.title': 'Visibilité Mondiale 24/7',
    'why.benefit1.desc': 'Votre entreprise est accessible partout, à tout moment. Pas d\'horaires, pas de limites géographiques.',
    'why.benefit2.title': 'Génération de Leads Automatisée',
    'why.benefit2.desc': 'Capturez des leads pendant que vous dormez. Votre site qualifie les prospects automatiquement.',
    'why.benefit3.title': 'ROI Explosif',
    'why.benefit3.desc': 'Un site bien conçu se rentabilise en quelques semaines grâce à l\'acquisition de nouveaux clients.',
    'why.benefit4.title': 'Autorité Instantanée',
    'why.benefit4.desc': 'Démarquez-vous de la concurrence avec une présence professionnelle qui inspire confiance.',
    'why.comparison.title': 'La Réalité',
    'why.comparison.without': 'Sans Site Web',
    'why.comparison.with': 'Avec Élie Ageron Design',
    'why.without.item1': 'Perdre des clients au profit des concurrents',
    'why.without.item2': 'Pas de présence en ligne = pas de confiance',
    'why.without.item3': 'Génération de leads manuelle uniquement',
    'why.without.item4': 'Limité à une portée locale',
    'why.with.item1': 'Conversion des visiteurs 24/7',
    'why.with.item2': 'Présence professionnelle et crédible',
    'why.with.item3': 'Système de capture de leads automatisé',
    'why.with.item4': 'Accessibilité à un public mondial',
    'why.cta.title': 'Arrêtez de Perdre de l\'Argent',
    'why.cta.subtitle': 'Découvrez nos tarifs transparents et choisissez la solution parfaite pour votre entreprise.',
    'why.cta.button': 'Voir les Tarifs',

    // Our Process Page
    'process.title': 'Comment Nous Construisons Votre Succès',
    'process.subtitle': 'Une méthodologie éprouvée qui transforme votre vision en un actif digital performant.',
    'process.step1.title': 'Appel Découverte',
    'process.step1.desc': 'Nous comprenons votre business, vos objectifs et votre audience pour créer la stratégie parfaite.',
    'process.step2.title': 'Design Stratégique',
    'process.step2.desc': 'Des designs sur-mesure qui reflètent votre marque tout en maximisant l\'expérience utilisateur.',
    'process.step3.title': 'Optimisation Conversion',
    'process.step3.desc': 'Chaque élément est testé et affiné pour transformer les visiteurs en clients payants.',
    'process.step4.title': 'Lancement & Croissance',
    'process.step4.desc': 'Votre site est mis en ligne avec un support continu pour une amélioration permanente.',
    'process.cta.title': 'Prêt à Commencer ?',
    'process.cta.subtitle': 'Réservez votre appel découverte et construisons quelque chose d\'incroyable ensemble.',
    'process.cta.button': 'Réserver l\'Appel Découverte',

    // Pricing Page
    'pricing.title': 'Tarifs Transparents',
    'pricing.subtitle': 'Pas de frais cachés. Pas de surprises. Juste de la qualité premium à des prix justes.',
    'pricing.maintenance.toggle': 'Inclure la Maintenance Mensuelle',
    'pricing.maintenance.desc': 'Mises à jour, sécurité, hébergement et support prioritaire inclus.',
    'pricing.maintenance.custom': 'Sur mesure',
    'pricing.guarantee.title': 'Garantie Satisfaction 100%',
    'pricing.guarantee.desc': 'Si vous n\'êtes pas entièrement satisfait du résultat final, nous travaillerons jusqu\'à ce que vous le soyez—sans frais supplémentaires.',

    // Services (shared with pricing)
    'services.title': 'Investissez dans votre présence digitale',
    'services.subtitle': 'Des solutions premium adaptées à vos ambitions',
    'services.landing.title': 'Landing Page',
    'services.landing.price': '200€',
    'services.landing.desc': 'Parfait pour lancer un produit ou tester un marché.',
    'services.landing.feature1': 'Design haute conversion',
    'services.landing.feature2': 'Livraison 48h',
    'services.landing.feature3': 'Optimisé mobile',
    'services.landing.cta': 'Commencer',
    
    'services.authority.title': 'Site Vitrine 6 Pages',
    'services.authority.price': '1000€',
    'services.authority.desc': 'Établissez votre marque comme leader de votre secteur.',
    'services.authority.feature1': 'Optimisation SEO complète',
    'services.authority.feature2': 'Branding professionnel',
    'services.authority.feature3': 'Stratégie de contenu incluse',
    'services.authority.feature4': 'Tableau de bord analytics',
    'services.authority.cta': 'Construire mon autorité',
    'services.authority.popular': 'Le plus populaire',
    
    'services.custom.title': 'Solution Sur-Mesure',
    'services.custom.price': 'Sur devis',
    'services.custom.desc': 'Pour les besoins complexes et les ambitions de scaling.',
    'services.custom.feature1': 'Pages illimitées',
    'services.custom.feature2': 'Intégrations avancées',
    'services.custom.feature3': 'Support dédié',
    'services.custom.feature4': 'Fonctionnalités custom',
    'services.custom.cta': 'Me contacter',

    // Portfolio
    'portfolio.title': 'Projets Récents',
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
    'testimonials.title': 'Ce que disent mes clients',
    'testimonials.subtitle': 'Des résultats concrets pour de vrais entrepreneurs',
    'testimonial.1.text': "Franchement, j'hésitais mais le résultat est dingue. Mon magasin a enfin une vraie gueule sur le web. Les ventes ont augmenté de 40% le premier mois.",
    'testimonial.1.author': 'Marc D.',
    'testimonial.1.role': 'Gérant de boutique',
    'testimonial.2.text': "Je ne savais pas à quoi m'attendre avec un jeune designer, mais Élie a dépassé mes attentes. Pro, rapide, et le site convertit vraiment !",
    'testimonial.2.author': 'Sophie L.',
    'testimonial.2.role': 'Agent immobilier',
    'testimonial.3.text': "Le meilleur investissement que j'ai fait pour mon business. Le ROI était visible en quelques semaines. Je recommande à 100%.",
    'testimonial.3.author': 'Thomas R.',
    'testimonial.3.role': 'Coach fitness',

    // Popup
    'popup.title': "Combien de clients avez-vous perdu cette semaine ?",
    'popup.subtitle': "Arrêtez de perdre des clients aujourd'hui.",
    'popup.cta': 'Réserver mon appel gratuit',
    'popup.close': 'Peut-être plus tard',

    // Contact Page
    'contact.title': 'Construisons quelque chose de grand',
    'contact.subtitle': 'Prêt à transformer votre présence en ligne ? Choisissez votre méthode de contact préférée.',
    'contact.calendly.title': 'Réserver un Appel',
    'contact.calendly.desc': 'Planifiez un appel découverte gratuit de 15 minutes pour discuter de votre projet.',
    'contact.calendly.button': 'Ouvrir Calendly',
    'contact.form.title': 'Envoyer un Message',
    'contact.name': 'Votre nom',
    'contact.email': 'Votre email',
    'contact.project': 'Parlez-moi de votre projet',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi...',
    'contact.success': 'Message envoyé ! Je vous recontacte très vite.',

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.made': 'Fait avec passion en France',
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
