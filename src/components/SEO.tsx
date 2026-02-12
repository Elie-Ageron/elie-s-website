import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  page: 'home' | 'why' | 'process' | 'pricing' | 'portfolio' | 'contact' | 'blog';
  customTitle?: string;
  customDescription?: string;
}

// Optimized titles: ALL under 60 characters
const seoData = {
  en: {
    home: {
      title: 'Elie Ageron | Web Design & Conversion Expert',
      description: 'Transform your online presence with Elie Ageron. Premium web design that converts visitors into clients. Delivered in 7–14 business days.',
    },
    why: {
      title: 'Why You Need a Website | Elie Ageron',
      description: 'Discover why a professional website is essential for growth. Capture leads 24/7 and outperform competitors with Elie Ageron Web Design.',
    },
    process: {
      title: 'Our Web Design Process | Elie Ageron',
      description: 'Learn how Elie Ageron builds high-converting websites. From discovery to launch, our proven process ensures your online success.',
    },
    pricing: {
      title: 'Web Design Pricing | Elie Ageron',
      description: 'Transparent pricing by Elie Ageron. Landing pages from €300, showcase sites from €1000. No hidden fees, 100% satisfaction guaranteed.',
    },
    portfolio: {
      title: 'Portfolio & Case Studies | Elie Ageron',
      description: 'Explore Elie Ageron portfolio. See real results from businesses that increased conversions with our premium web design solutions.',
    },
    contact: {
      title: 'Contact Elie Ageron | Web Design',
      description: 'Get in touch with Elie Ageron for your web project. Book a free strategy call and start converting more visitors into clients.',
    },
    blog: {
      title: 'Web Design Tips & Insights | Elie Ageron',
      description: 'Expert web design tips, conversion strategies, and digital marketing insights from Elie Ageron. Learn to grow your business online.',
    },
  },
  fr: {
    home: {
      title: 'Elie Ageron | Web Design & Conversion',
      description: 'Transformez votre présence en ligne avec Elie Ageron. Sites web premium qui convertissent. Livraison en 7–14 jours ouvrés.',
    },
    why: {
      title: 'Pourquoi un Site Web | Elie Ageron',
      description: 'Découvrez pourquoi un site professionnel est essentiel. Capturez des leads 24/7 avec Elie Ageron Web Design.',
    },
    process: {
      title: 'Notre Processus Web | Elie Ageron',
      description: 'Découvrez comment Elie Ageron crée des sites haute conversion. De l\'appel au lancement, notre méthode assure votre succès.',
    },
    pricing: {
      title: 'Tarifs Web Design | Elie Ageron',
      description: 'Tarifs transparents. Landing pages dès 300€, sites vitrines dès 1000€. Sans frais cachés, satisfaction garantie.',
    },
    portfolio: {
      title: 'Portfolio & Réalisations | Elie Ageron',
      description: 'Explorez le portfolio de Elie Ageron. Découvrez les résultats concrets de nos sites web premium.',
    },
    contact: {
      title: 'Contact Elie Ageron | Création Web',
      description: 'Contactez Elie Ageron pour votre projet. Réservez un appel gratuit et convertissez plus de visiteurs.',
    },
    blog: {
      title: 'Conseils Web Design | Elie Ageron',
      description: 'Conseils experts en web design, stratégies de conversion et marketing digital par Elie Ageron. Développez votre business.',
    },
  },
};

const SEO = ({ page, customTitle, customDescription }: SEOProps) => {
  const { language } = useLanguage();
  const data = seoData[language][page];
  const baseUrl = 'https://elieageron.com';
  
  // Use custom values if provided, otherwise fall back to page defaults
  const title = customTitle || data.title;
  const description = customDescription || data.description;
  
  const pathMap: Record<string, string> = {
    home: '',
    why: '/why-a-website',
    process: '/our-process',
    pricing: '/pricing',
    portfolio: '/portfolio',
    contact: '/contact',
    blog: '/blog',
  };
  
  const currentPath = pathMap[page] || '';
  const canonicalUrl = `${baseUrl}${currentPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Elie Ageron" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      
      {/* Language */}
      <html lang={language} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      
      {/* Open Graph / Facebook - Unique per page */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/og-image.png`} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:site_name" content="Elie Ageron Web Design" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
      
      {/* Additional SEO */}
      <meta name="keywords" content="Elie Ageron, web design, création site web, website, landing page, conversion, France" />
      <meta name="geo.region" content="FR-74" />
      <meta name="geo.placename" content="Annecy, Haute-Savoie" />
    </Helmet>
  );
};

export default SEO;
