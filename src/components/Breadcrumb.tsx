import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  name: string;
  href: string;
}

/**
 * Fil d'Ariane visuel uniquement. Le schéma BreadcrumbList JSON-LD est émis par
 * chaque page (via SEO structuredData) : le dupliquer ici créait deux entités
 * BreadcrumbList concurrentes sur la même page.
 */
const Breadcrumb = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const pathMap: Record<string, { en: string; fr: string }> = {
    '/services': { en: 'Services', fr: 'Services' },
    '/reseaux-sociaux': { en: 'Social Media', fr: 'Réseaux Sociaux' },
    '/why-a-website': { en: 'Why a Website', fr: 'Pourquoi un Site' },
    '/our-process': { en: 'Our Process', fr: 'Notre Méthode' },
    '/portfolio': { en: 'Portfolio', fr: 'Portfolio' },
    '/contact': { en: 'Contact', fr: 'Contact' },
    '/blog': { en: 'Blog', fr: 'Blog' },
    '/web-designer-savoie': { en: 'Web Designer Savoie', fr: 'Web Designer Savoie' },
    '/web-designer-annecy': { en: 'Web Designer Annecy', fr: 'Web Designer Annecy' },
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

  return (
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
                  className="inline-flex items-center gap-1 min-h-[24px] min-w-[24px] hover:text-primary transition-colors"
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
  );
};

export default Breadcrumb;
