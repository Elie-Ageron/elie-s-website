import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import { guides } from '@/data/guides';
import { getActiveCategories } from '@/data/blogPosts';

const baseUrl = 'https://elieageron.com';

/**
 * Index des pages piliers. Sert de point d'entree editorial et distribue
 * l'autorite vers les guides et vers les categories du blog.
 */
const GuidesIndex = () => {
  const categories = getActiveCategories('fr');

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${baseUrl}/guides#collection`,
    name: 'Guides pour entreprises locales',
    description:
      'Guides longs sur les réseaux sociaux, la vidéo au smartphone et le référencement local pour une TPE ou un artisan.',
    inLanguage: 'fr-FR',
    url: `${baseUrl}/guides`,
    isPartOf: { '@id': `${baseUrl}/#website` },
    hasPart: guides.map((guide) => ({
      '@type': 'Article',
      '@id': `${baseUrl}/guides/${guide.slug}#article`,
      headline: guide.title,
      description: guide.excerpt,
      url: `${baseUrl}/guides/${guide.slug}`,
      dateModified: guide.updated,
      author: { '@type': 'Person', name: 'Elie Ageron' },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/guides` },
    ],
  };

  return (
    <>
      <SEO page="guides" forceLang="fr" structuredData={[collectionSchema, breadcrumbSchema]} />

      <section className="relative grain pt-10 sm:pt-16 pb-10 sm:pb-14" aria-labelledby="guides-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-10 right-[10%] w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              Guides
            </span>
            <h1 id="guides-heading" className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-balance">
              {guides.length} guides, et de quoi vous en sortir seul.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Ce que je ferais à votre place, expliqué de bout en bout. Vous pouvez tout appliquer sans moi. Si
              vous préférez déléguer, c'est aussi possible, mais ce n'est pas le sujet de ces pages.
            </p>
          </motion.header>
        </div>
      </section>

      <section className="pb-6" aria-labelledby="guides-list">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="guides-list" className="sr-only">
            Liste des guides
          </h2>
          <ul className="border-y border-border/60 divide-y divide-border/60">
            {guides.map((guide, i) => (
              <motion.li
                key={guide.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: Math.min(i * 0.06, 0.2), duration: 0.4 }}
              >
                <Link
                  to={`/guides/${guide.slug}`}
                  className="group block py-8 sm:py-10 sm:px-4 sm:-mx-4 rounded-2xl transition-colors duration-300 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-primary">{guide.kicker}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {guide.readTime}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{guide.chapters.length} chapitres</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium leading-tight text-balance group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{guide.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 min-h-[24px] text-sm font-medium text-primary">
                    Lire le guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Distribution vers les categories du blog */}
      <section className="py-12 sm:py-16" aria-labelledby="guides-categories">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="guides-categories" className="text-lg sm:text-xl font-semibold text-foreground mb-2">
            Ou parcourez les articles par thème
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Les guides posent la méthode. Les articles creusent un point précis.
          </p>
          <ul className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  to={`/blog/categorie/${category.slug}`}
                  className="inline-flex items-center gap-2 min-h-[36px] px-4 rounded-full border border-border/70 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {category.fr}
                  <span className="text-xs text-primary/70">{category.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactMethodsSection />
    </>
  );
};

export default GuidesIndex;
