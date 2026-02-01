import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.book': 'Book a Call',

    // Hero
    'hero.headline': "Your website is losing you clients. Let's fix that.",
    'hero.subheadline': "High-converting sites designed to generate leads, boost your credibility, and multiply your revenue.",
    'hero.cta': 'Book your growth session',
    'hero.scroll': 'Scroll to discover',

    // Stats
    'stats.visibility': 'More visibility',
    'stats.conversion': 'Conversion rate',
    'stats.responsive': 'Responsive',

    // Services
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

    // Contact
    'contact.title': "Let's Build Something Great",
    'contact.subtitle': 'Ready to transform your online presence?',
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
    // Header
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'nav.book': 'Réserver un appel',

    // Hero
    'hero.headline': "Votre site vous fait perdre des clients. Changeons ça.",
    'hero.subheadline': "Des sites haute conversion conçus pour générer des leads, booster votre crédibilité et multiplier votre chiffre d'affaires.",
    'hero.cta': 'Réservez votre session croissance',
    'hero.scroll': 'Scrollez pour découvrir',

    // Stats
    'stats.visibility': 'Plus de visibilité',
    'stats.conversion': 'Taux de conversion',
    'stats.responsive': 'Responsive',

    // Services
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

    // Contact
    'contact.title': 'Construisons quelque chose de grand',
    'contact.subtitle': 'Prêt à transformer votre présence en ligne ?',
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
