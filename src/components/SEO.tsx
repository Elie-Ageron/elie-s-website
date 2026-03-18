import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  page: 'home' | 'why' | 'process' | 'pricing' | 'portfolio' | 'contact' | 'blog' | 'apps';
  customTitle?: string;
  customDescription?: string;
  customCanonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  structuredData?: object | object[];
}

const pageKeywords = {
  en: {
    home: 'Elie Ageron, web design, web designer, conversion optimization, website, Annecy, Haute-Savoie, France',
    why: 'why a website, need website 2025, website business benefits, online presence, digital visibility',
    process: 'web design process, how to build a website, website creation steps, web designer workflow',
    pricing: 'web design pricing, website cost, landing page price, showcase site price, affordable web design',
    portfolio: 'web design portfolio, website examples, web design case studies, client results',
    contact: 'contact web designer, book web design call, hire web designer France, web design consultation',
    blog: 'web design tips, conversion optimization, SEO guide, digital marketing, online business growth',
    apps: 'web app development, business dashboard, custom app, CRM development, SaaS development, business software',
  },
  fr: {
    home: 'Elie Ageron, web design, création site web, optimisation conversion, site internet, Annecy, Haute-Savoie',
    why: 'pourquoi site web, besoin site internet 2025, bénéfices site web, présence en ligne, visibilité digitale',
    process: 'processus création site web, comment créer site internet, étapes création site web',
    pricing: 'tarif web design, prix site internet, coût landing page, tarif site vitrine, web design Annecy',
    portfolio: 'portfolio web design, exemples sites web, réalisations web design, résultats clients',
    contact: 'contacter web designer, réserver appel web design, embaucher web designer France',
    blog: 'conseils web design, optimisation conversion, guide SEO local, marketing digital, croissance business',
    apps: 'développement application web, dashboard entreprise, app sur mesure, CRM personnalisé, logiciel métier, outil interne',
  },
};

// Optimized titles: ALL under 60 characters
const seoData = {
  en: {
    home: {
      title: 'Elie Ageron | Web Design & Conversion Expert',
      description: 'Transform your online presence with Elie Ageron. Premium web design that converts visitors into clients. Delivered in 7-14 business days.',
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
      description: 'Transparent pricing by Elie Ageron. Landing pages from €500, showcase sites from €1500. No hidden fees, 100% satisfaction guaranteed.',
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
    apps: {
      title: 'Business Apps & Dashboards | Elie Ageron',
      description: 'Custom web app development: dashboards, CRMs, client portals, automation. Apps built to streamline your business processes.',
    },
  },
  fr: {
    home: {
      title: 'Elie Ageron | Web Design & Conversion',
      description: 'Transformez votre présence en ligne avec Elie Ageron. Sites web premium qui convertissent. Livraison en 7-14 jours ouvrés.',
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
      description: 'Tarifs transparents. Landing pages dès 500€, sites vitrines dès 1500€. Sans frais cachés, satisfaction garantie.',
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
    apps: {
      title: 'Apps & Dashboards pour Entreprises | Elie Ageron',
      description: 'Développement d\'applications web sur mesure : dashboards, CRM, portails clients, automatisation. Des apps qui font vraiment travailler votre équipe.',
    },
  },
};

const SEO = ({ page, customTitle, customDescription, customCanonical, ogImage, ogType = 'website', articlePublishedTime, articleModifiedTime, articleSection, structuredData }: SEOProps) => {
  const { language } = useLanguage();
  const data = seoData[language][page];
  const baseUrl = 'https://elieageron.com';
  
  // Use custom values if provided, otherwise fall back to page defaults
  const title = customTitle || data.title;
  const description = customDescription || data.description;
  const keywords = pageKeywords[language][page];
  
  const pathMap: Record<string, string> = {
    home: '',
    why: '/why-a-website',
    process: '/our-process',
    pricing: '/pricing',
    portfolio: '/portfolio',
    contact: '/contact',
    blog: '/blog',
    apps: '/apps',
  };
  
  const currentPath = pathMap[page] || '';
  const canonicalUrl = customCanonical || `${baseUrl}${currentPath}`;
  const ogImageUrl = ogImage || `${baseUrl}/og-image.png`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Elie Ageron" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Language */}
      <html lang={language} />
      
      {/* Canonical - simplified hreflang: same URL serves both languages */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Open Graph / Facebook - Unique per page */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:site_name" content="Elie Ageron Web Design" />

      {/* Article-specific OG tags */}
      {ogType === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {ogType === 'article' && (
        <meta property="article:author" content="https://elieageron.com" />
      )}
      {ogType === 'article' && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@elieageron" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:creator" content="@elieageron" />
      
      {/* Additional SEO */}
      <meta name="keywords" content={keywords} />
      <meta name="geo.region" content="FR-74" />
      <meta name="geo.placename" content="Annecy, Haute-Savoie" />

      {/* Page-specific structured data */}
      {structuredData && (
        Array.isArray(structuredData)
          ? structuredData.map((data, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(data)}
              </script>
            ))
          : (
              <script type="application/ld+json">
                {JSON.stringify(structuredData)}
              </script>
            )
      )}
    </Helmet>
  );
};

export default SEO;
