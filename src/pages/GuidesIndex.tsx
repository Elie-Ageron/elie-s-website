import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import { guides } from '@/data/guides';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link as RouterLink } from 'react-router-dom';
// Cette page n'affiche aucun article : elle compte des categories.
import { getActiveCategoriesFromIndex } from '@/data/blogIndex';

const baseUrl = 'https://elieageron.com';

/**
 * Index des pages piliers. Sert de point d'entree editorial et distribue
 * l'autorite vers les guides et vers les categories du blog.
 *
 * 🔴 **Cette page etait en francais dur, `forceLang="fr"` compris, alors
 * qu'elle est dans le menu principal.** Un visiteur anglophone qui cliquait
 * « Guides » tombait sur quatre pavés qu'il ne pouvait pas lire, sous un
 * document qui se declarait `lang="fr"` au milieu d'un site annonce en
 * anglais. Releve le 20 septembre 2026, c'etait le seul vrai trou du menu.
 *
 * Le corps des guides reste en francais, et la page le dit en une ligne. Une
 * page pilier ecrite pour « reseaux sociaux entreprise locale » n'a rien a
 * gagner a etre traduite ; ce qui manquait, c'est qu'on sache quoi y trouver.
 */
const GuidesIndex = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const categories = getActiveCategoriesFromIndex(fr ? 'fr' : 'en');

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
      {/* Plus de `forceLang` : le corps de la page suit maintenant la langue
          de l'interface, donc l'annoncer en francais serait faux. */}
      <SEO page="guides" structuredData={[collectionSchema, breadcrumbSchema]} />

      <section className="relative grain pt-10 sm:pt-16 pb-10 sm:pb-14" aria-labelledby="guides-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-10 right-[10%] w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 id="guides-heading" className="hero-title">
              {fr
                ? `${guides.length} guides, et de quoi vous en sortir seul.`
                : `${guides.length} guides, and enough to do it on your own.`}
            </h1>
            {/* 🔴 Disait « Vous pouvez tout appliquer sans moi. Si vous
                préférez déléguer, c'est aussi possible, mais ce n'est pas le
                sujet de ces pages. » La relecture aveugle avait fait retirer la
                même formule sur la FAQ de l'accueil : elle donne au lecteur la
                permission de partir. Et la seconde phrase le pousse dehors deux
                fois. La gratuité se dit sans inviter personne à s'en aller. */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {fr
                ? "Ce que je ferais à votre place, expliqué de bout en bout, avec les décisions dans l'ordre où elles se posent. Rien n'y est réservé aux clients."
                : 'What I would do in your place, explained end to end, with the decisions in the order they come up. None of it is held back for clients.'}
            </p>
            {/* ⚠️ Dit en haut de page, pas au clic. Un anglophone qui decouvre
                la langue du guide apres l'avoir ouvert a perdu son temps, et
                c'est exactement le genre de detail qui fait « ca marche pas ». */}
            {!fr && (
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                The guides themselves are written in French. If English is easier, the{' '}
                <RouterLink to="/services" className="text-primary underline-offset-4 hover:underline">
                  services page
                </RouterLink>{' '}
                covers the same ground in short.
              </p>
            )}
          </motion.header>
        </div>
      </section>

      <section className="pb-6" aria-labelledby="guides-list">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="guides-list" className="sr-only">
            {fr ? 'Liste des guides' : 'Guide list'}
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
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{fr ? guide.kicker : guide.kickerEn}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {guide.readTime}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {guide.chapters.length} {fr ? 'chapitres' : 'chapters'}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium leading-tight text-balance group-hover:text-primary transition-colors">
                    {fr ? guide.title : guide.titleEn}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {fr ? guide.excerpt : guide.excerptEn}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 min-h-[24px] text-sm font-medium text-primary">
                    {fr ? 'Lire le guide' : 'Read the guide'}
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
            {fr ? 'Ou parcourez les articles par thème' : 'Or browse the articles by topic'}
          </h2>
          <p className="mb-5 text-base text-muted-foreground">
            {fr
              ? 'Les guides posent la méthode. Les articles creusent un point précis.'
              : 'The guides lay out the method. The articles dig into one point at a time.'}
          </p>
          <ul className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  to={`/blog/categorie/${category.slug}`}
                  className="inline-flex items-center gap-2 min-h-[36px] px-4 rounded-full border border-border/70 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {fr ? category.fr : category.en}
                  <span className="text-xs text-primary">{category.count}</span>
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
