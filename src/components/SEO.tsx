import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  page: 'home' | 'services' | 'social' | 'why' | 'process' | 'pricing' | 'portfolio' | 'contact' | 'getStarted' | 'blog' | 'apps' | 'guides' | 'about' | 'audit';
  /** Force la langue du document, pour les contenus servis en francais seul. */
  forceLang?: 'fr' | 'en';
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
    home: 'Elie Ageron, web design, web designer, conversion optimization, website, Savoie, Haute-Savoie, Albertville, Annecy, France',
    services: 'web partner, digital partner, web designer Savoie, web designer Annecy, Google Business, social media management, brand identity, local SEO, content writing, web agency Savoie Haute-Savoie',
    social: 'social media management Savoie, short form video production France, Instagram Reels for small business, TikTok content creation, social media content creator Annecy, done-for-you social media',
    why: 'why a website, need website 2025, website business benefits, online presence, digital visibility',
    process: 'web design process, how to build a website, website creation steps, web designer workflow',
    pricing: 'web design pricing, website cost, landing page price, showcase site price, affordable web design',
    portfolio: 'web design portfolio, website examples, web design case studies, client results',
    contact: 'contact web designer, book web design call, hire web designer France, web design consultation',
    getStarted: 'start a web project, website quote France, web design brief, request a proposal',
    blog: 'web design tips, conversion optimization, SEO guide, digital marketing, online business growth',
    apps: 'web app development, business dashboard, custom app, CRM development, SaaS development, business software',
    guides: 'social media guide for small business, smartphone video guide, local SEO guide, Google Business Profile, content marketing for local business',
    about: 'Elie Ageron, web designer Savoie, freelance web designer France, about, portfolio, Albertville',
    audit: 'free online presence audit, free website review, Google Business Profile audit, social media audit, free marketing audit France, Savoie',
  },
  fr: {
    home: 'Elie Ageron, web design, création site web, optimisation conversion, site internet, Savoie, Haute-Savoie, Albertville, Annecy',
    services: 'partenaire web, partenaire digital, web designer Savoie, web designer Annecy, fiche Google Business, gestion réseaux sociaux, identité de marque, référencement local, rédaction de contenu, agence web Savoie Haute-Savoie',
    social: 'gestion réseaux sociaux Savoie, création contenu vidéo Savoie, vidéo verticale Instagram, reels professionnels, community manager Albertville, community manager Annecy, création contenu TikTok, gestion Instagram artisan, vidéaste réseaux sociaux Haute-Savoie',
    why: 'pourquoi site web, besoin site internet 2025, bénéfices site web, présence en ligne, visibilité digitale',
    process: 'processus création site web, comment créer site internet, étapes création site web',
    pricing: 'tarif web design, prix site internet, coût landing page, tarif site vitrine, web design Savoie, web design Annecy',
    portfolio: 'portfolio web design, exemples sites web, réalisations web design, résultats clients',
    contact: 'contacter web designer, réserver appel web design, embaucher web designer France',
    getStarted: 'démarrer projet site web, demander un devis site internet, brief création site, devis web Savoie',
    blog: 'conseils réseaux sociaux, vidéo courte entreprise, conseils web design, optimisation conversion, guide SEO local, marketing digital local',
    apps: 'développement application web, dashboard entreprise, app sur mesure, CRM personnalisé, logiciel métier, outil interne',
    guides: 'guide réseaux sociaux entreprise, guide vidéo smartphone, guide référencement local, fiche Google Business, contenu vidéo TPE, guide SEO local Savoie',
    about: 'Elie Ageron, web designer Savoie, partenaire web Albertville, freelance création site web, qui suis-je',
    audit: 'audit gratuit présence en ligne, audit site web gratuit, audit fiche Google Business, audit réseaux sociaux gratuit, diagnostic visibilité Savoie, audit vidéo gratuit Albertville',
  },
};

// Optimized titles: ALL under 60 characters
const seoData = {
  en: {
    home: {
      title: 'Websites & Social Media Content | Elie Ageron',
      description: 'Social media from 890 €/month, websites from 500 €, live in 7 to 14 days. Based in Albertville, Savoie. Free presence audit within 48 hours.',
    },
    services: {
      title: 'Web Partner in Savoie | Elie Ageron',
      description: 'Websites from 500 €, social media from 890 €/month, plus Google Business, branding and local SEO. Web partner in Savoie. Free audit in 48 hours.',
    },
    social: {
      title: 'Social Media Content, Done For You | Elie Ageron',
      description: 'From 890 €/month: I film for one day at your place, then post 6 to 12 videos through the month. You touch nothing. Albertville and Savoie.',
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
      description: 'Custom quotes by Elie Ageron. Landing pages, showcase sites and full launch packs, priced around your project. No hidden fees.',
    },
    portfolio: {
      title: 'Portfolio & Case Studies | Elie Ageron',
      description: 'Explore Elie Ageron portfolio. See real results from businesses that increased conversions with our premium web design solutions.',
    },
    getStarted: {
      title: 'Start a Web Project | Elie Ageron',
      description: 'Describe your project in three minutes: your business, your town and what you are after. I get back to you within two working days with a quote.',
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
    guides: {
      title: 'Guides for Local Businesses | Elie Ageron',
      description: 'Long-form guides on social media, smartphone video and local SEO for small businesses. Practical, tested, and free to read.',
    },
    about: {
      title: 'About Elie Ageron | Web Designer',
      description: 'Web designer based in Albertville, Savoie. How I work, who I work with, and why I stay involved after a site goes live.',
    },
    audit: {
      title: 'Free Online Presence Audit | Elie Ageron',
      description: 'I review your Google listing, your socials and your site, then send you a 4 minute video within 48 hours. Free, no follow-up call. Two fields to fill.',
    },
  },
  fr: {
    home: {
      title: 'Site Web & Réseaux Sociaux Savoie | Elie Ageron',
      description: "Réseaux sociaux dès 890 €/mois, site web dès 500 €, en ligne en 7 à 14 jours. Albertville et Savoie. Audit gratuit de votre présence sous 48 h.",
    },
    services: {
      title: 'Partenaire Web en Savoie | Elie Ageron',
      description: "Site dès 500 €, réseaux sociaux dès 890 €/mois, plus fiche Google, marque et SEO local. Partenaire web en Savoie. Audit gratuit sous 48 h.",
    },
    social: {
      title: 'Gestion Réseaux Sociaux Savoie | Elie Ageron',
      description: "Dès 890 €/mois : je filme une journée chez vous, puis je publie 6 à 12 vidéos dans le mois. Vous ne touchez à rien. Albertville et Savoie.",
    },
    why: {
      title: 'Pourquoi un Site Web | Elie Ageron',
      description: "Ce qu'un site change concrètement pour une entreprise locale : être trouvé sur Google, rassurer avant l'appel, et recevoir des demandes le week-end.",
    },
    process: {
      title: 'Notre Processus Web | Elie Ageron',
      description: 'Découvrez comment Elie Ageron crée des sites haute conversion. De l\'appel au lancement, notre méthode assure votre succès.',
    },
    pricing: {
      title: 'Tarifs Web Design | Elie Ageron',
      description: 'Devis sur mesure. Landing pages, sites vitrines et packs lancement, chiffrés selon votre projet. Sans frais cachés.',
    },
    portfolio: {
      title: 'Portfolio & Réalisations | Elie Ageron',
      description: "Des sites livrés en 7 à 14 jours pour des entreprises de Savoie et de Haute-Savoie : ce qui a été fait, pourquoi, et ce que ça a changé pour elles.",
    },
    contact: {
      title: 'Contact Elie Ageron | Création Web',
      description: "Réponse sous 24 h, appel gratuit de trente minutes. Je vous dis franchement ce que je ferais à votre place, même si c'est de ne rien faire.",
    },
    getStarted: {
      title: 'Démarrer un Projet Web | Elie Ageron',
      description: "Décrivez votre projet en trois minutes : votre activité, votre ville et ce que vous cherchez. Je vous réponds sous 48 h ouvrées avec un chiffrage.",
    },
    blog: {
      title: 'Conseils Réseaux Sociaux & Web | Elie Ageron',
      description: 'Réseaux sociaux, vidéo courte, création de site et référencement local. Des conseils concrets pour faire venir des clients, sans jargon.',
    },
    apps: {
      title: 'Apps & Dashboards pour Entreprises | Elie Ageron',
      description: 'Développement d\'applications web sur mesure : dashboards, CRM, portails clients, automatisation. Des apps qui font vraiment travailler votre équipe.',
    },
    // Ces deux entrees manquaient cote francais alors que la version anglaise
    // les avait. Le site etant francais par defaut, /guides et /a-propos
    // levaient une TypeError et affichaient l'ecran d'erreur a tous les
    // visiteurs. Voir le garde-fou dans le composant plus bas.
    guides: {
      title: 'Guides Gratuits Visibilité Locale | Elie Ageron',
      description: "Quatre guides complets et gratuits : créer son site, sortir sur Google, tenir ses réseaux sociaux et filmer au smartphone. Tout est applicable seul.",
    },
    about: {
      title: 'Qui est Elie Ageron | Web Designer Savoie',
      description: "Web designer et partenaire web à Albertville, en Savoie. Mon parcours, ma façon de travailler, ce que je ne fais pas, et comment se passe un projet.",
    },
    audit: {
      title: 'Audit Gratuit de Votre Présence en Ligne',
      description: "Je regarde votre fiche Google, vos réseaux et votre site, et je vous envoie 4 minutes de vidéo sous 48 h. Gratuit, sans rappel derrière. Deux champs à remplir.",
    },
  },
};

const SEO = ({ page, forceLang, customTitle, customDescription, customCanonical, ogImage, ogType = 'website', articlePublishedTime, articleModifiedTime, articleSection, structuredData }: SEOProps) => {
  const { language: uiLanguage } = useLanguage();
  // Certains contenus (articles francais seuls) doivent rester annonces en fr.
  const language = forceLang ?? uiLanguage;
  /**
   * Garde-fou : une clef manquante dans seoData faisait planter la page entiere,
   * pas seulement ses balises. C'est arrive sur /guides et /a-propos, absents
   * du dictionnaire francais, qui affichaient l'ecran d'erreur a tous les
   * visiteurs. On retombe donc sur l'autre langue, puis sur l'accueil.
   */
  const data =
    seoData[language]?.[page] ??
    seoData[language === 'fr' ? 'en' : 'fr']?.[page] ??
    seoData[language].home;
  const baseUrl = 'https://elieageron.com';

  // Use custom values if provided, otherwise fall back to page defaults
  const title = customTitle || data.title;
  const description = customDescription || data.description;
  const keywords = pageKeywords[language]?.[page] ?? pageKeywords[language].home;
  
  const pathMap: Record<string, string> = {
    home: '',
    services: '/services',
    social: '/reseaux-sociaux',
    why: '/why-a-website',
    process: '/our-process',
    pricing: '/pricing',
    portfolio: '/portfolio',
    contact: '/contact',
    getStarted: '/get-started',
    blog: '/blog',
    apps: '/apps',
    guides: '/guides',
    about: '/a-propos',
    audit: '/audit-gratuit',
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
      
      {/* Canonical + hreflang: both languages live at the same URL */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
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
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Additional SEO */}
      <meta name="keywords" content={keywords} />
      <meta name="geo.region" content="FR-73" />
      <meta name="geo.placename" content="Albertville, Savoie" />

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
