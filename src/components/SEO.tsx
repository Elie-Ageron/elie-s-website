import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  page: 'home' | 'why' | 'process' | 'pricing' | 'portfolio' | 'contact';
}

const seoData = {
  en: {
    home: {
      title: 'Elie Ageron | Web Design & Conversion Optimization',
      description: 'Transform your online presence with Elie Ageron. Premium web design services that convert visitors into paying clients. Get a high-converting website in 7 days.',
    },
    why: {
      title: 'Elie Ageron | Why Your Business Needs a Professional Website',
      description: 'Discover why a professional website is essential for business growth. Elie Ageron Web Design helps you capture leads 24/7 and outperform competitors online.',
    },
    process: {
      title: 'Elie Ageron | Our Web Design Process & Methodology',
      description: 'Learn how Elie Ageron builds high-converting websites. From discovery call to launch, our proven web design process ensures your success online.',
    },
    pricing: {
      title: 'Elie Ageron | Web Design Pricing & Packages',
      description: 'Transparent web design pricing by Elie Ageron. Landing pages from 200€, 6-page authority sites from 1000€. No hidden fees, 100% satisfaction guaranteed.',
    },
    portfolio: {
      title: 'Elie Ageron | Web Design Portfolio & Case Studies',
      description: 'Explore Elie Ageron web design portfolio. See real results from businesses that increased conversions with our premium website solutions.',
    },
    contact: {
      title: 'Elie Ageron | Contact for Web Design Services',
      description: 'Get in touch with Elie Ageron for your web design project. Book a free strategy call and start converting more visitors into clients today.',
    },
  },
  fr: {
    home: {
      title: 'Elie Ageron | Création de Sites Web & Optimisation Conversion',
      description: 'Transformez votre présence en ligne avec Elie Ageron. Services de création de sites web premium qui convertissent les visiteurs en clients. Site haute conversion en 7 jours.',
    },
    why: {
      title: 'Elie Ageron | Pourquoi Votre Entreprise a Besoin d\'un Site Web',
      description: 'Découvrez pourquoi un site web professionnel est essentiel pour votre croissance. Elie Ageron Web Design vous aide à capturer des leads 24/7.',
    },
    process: {
      title: 'Elie Ageron | Notre Processus de Création Web',
      description: 'Découvrez comment Elie Ageron crée des sites web haute conversion. De l\'appel découverte au lancement, notre méthodologie assure votre succès en ligne.',
    },
    pricing: {
      title: 'Elie Ageron | Tarifs Création de Sites Web',
      description: 'Tarifs transparents par Elie Ageron. Landing pages dès 200€, sites vitrine 6 pages dès 1000€. Pas de frais cachés, satisfaction garantie 100%.',
    },
    portfolio: {
      title: 'Elie Ageron | Portfolio Web Design & Réalisations',
      description: 'Explorez le portfolio de Elie Ageron. Découvrez les résultats concrets d\'entreprises qui ont augmenté leurs conversions avec nos sites premium.',
    },
    contact: {
      title: 'Elie Ageron | Contact pour Création de Sites Web',
      description: 'Contactez Elie Ageron pour votre projet web. Réservez un appel stratégique gratuit et commencez à convertir plus de visiteurs en clients.',
    },
  },
};

const SEO = ({ page }: SEOProps) => {
  const { language } = useLanguage();
  const data = seoData[language][page];
  const baseUrl = 'https://elieageron.lovable.app';
  const currentPath = page === 'home' ? '' : `/${page === 'why' ? 'why-a-website' : page === 'process' ? 'our-process' : page}`;
  const canonicalUrl = `${baseUrl}${currentPath}`;
  const alternateUrl = `${baseUrl}${currentPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{data.title}</title>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />
      <meta name="author" content="Elie Ageron" />
      <meta name="robots" content="index, follow" />
      
      {/* Language */}
      <html lang={language} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={alternateUrl} />
      <link rel="alternate" hrefLang="fr" href={alternateUrl} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={`${baseUrl}/og-image.png`} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:site_name" content="Elie Ageron Web Design" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
      
      {/* Additional SEO */}
      <meta name="keywords" content="Elie Ageron, web design, création site web, website design, conversion optimization, landing page, site vitrine, France, web designer" />
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />
    </Helmet>
  );
};

export default SEO;
