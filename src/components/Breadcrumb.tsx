import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  name: string;
  href: string;
}

const Breadcrumb = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const baseUrl = 'https://elieageron.com';

  const pathMap: Record<string, { en: string; fr: string }> = {
    '/why-a-website': { en: 'Why a Website', fr: 'Pourquoi un Site' },
    '/our-process': { en: 'Our Process', fr: 'Notre Méthode' },
    '/pricing': { en: 'Pricing', fr: 'Tarifs' },
    '/portfolio': { en: 'Portfolio', fr: 'Portfolio' },
    '/contact': { en: 'Contact', fr: 'Contact' },
    '/blog': { en: 'Blog', fr: 'Blog' },
    '/web-designer-annecy': { en: 'Web Designer Annecy', fr: 'Web Designer Annecy' },
    '/web-designer-grenoble': { en: 'Web Designer Grenoble', fr: 'Web Designer Grenoble' },
    '/web-designer-chambery': { en: 'Web Designer Chambéry', fr: 'Web Designer Chambéry' },
    '/creation-site-web-haute-savoie': { en: 'Web Design Haute-Savoie', fr: 'Création Site Web Haute-Savoie' },
  };

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const currentPage = pathMap[location.pathname];
  if (!currentPage) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { name: language === 'fr' ? 'Accueil' : 'Home', href: '/' },
    { name: currentPage[language], href: location.pathname },
  ];

  // JSON-LD Schema for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href === '/' ? '' : item.href}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Breadcrumb" 
        className="max-w-6xl mx-auto px-6 py-4"
      >
        <ol 
          className="flex items-center gap-2 text-sm text-muted-foreground"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbs.map((item, index) => (
            <li 
              key={item.href}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              )}
              {index === 0 ? (
                <Link
                  to={item.href}
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                  itemProp="item"
                >
                  <Home className="w-4 h-4" aria-hidden="true" />
                  <span itemProp="name" className="sr-only md:not-sr-only">
                    {item.name}
                  </span>
                  <meta itemProp="position" content={String(index + 1)} />
                </Link>
              ) : (
                <span 
                  className="text-foreground font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.name}
                  <meta itemProp="position" content={String(index + 1)} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
