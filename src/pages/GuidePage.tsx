import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock, RefreshCw } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import AuthorCard from '@/components/AuthorCard';
import { getGuideBySlug, guides } from '@/data/guides';
import { getPostBySlug, getLocalizedPost } from '@/data/blogPosts';

const baseUrl = 'https://elieageron.com';

/**
 * Page pilier. Contenu long en francais, avec renvoi vers les articles
 * satellites de chaque chapitre. Le maillage descend d'ici vers le blog,
 * et remonte du blog vers ici via le champ `pillar` des articles.
 */
const GuidePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuideBySlug(slug) : undefined;

  if (!guide) return <Navigate to="/guides" replace />;

  const canonical = `${baseUrl}/guides/${guide.slug}`;
  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonical}#article`,
    headline: guide.seoTitle,
    name: guide.title,
    description: guide.seoDesc,
    inLanguage: 'fr-FR',
    datePublished: '2026-08-07',
    dateModified: guide.updated,
    author: { '@type': 'Person', name: 'Elie Ageron', url: `${baseUrl}/a-propos` },
    publisher: { '@id': `${baseUrl}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    url: canonical,
    image: `${baseUrl}/blog/covers/guides-${guide.slug}.png`,
    articleSection: guide.label,
    about: guide.chapters.map((chapter) => ({ '@type': 'Thing', name: chapter.title })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonical}#faq`,
    mainEntity: guide.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/guides` },
      { '@type': 'ListItem', position: 3, name: guide.label, item: canonical },
    ],
  };

  return (
    <>
      <SEO
        page="guides"
        forceLang="fr"
        customTitle={guide.seoTitle}
        customDescription={guide.seoDesc}
        customCanonical={canonical}
        ogImage={`${baseUrl}/blog/covers/guides-${guide.slug}.png`}
        ogType="article"
        articleModifiedTime={guide.updated}
        structuredData={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative grain pt-10 sm:pt-16 pb-10" aria-labelledby="guide-title">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-10 right-[12%] w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <nav aria-label="Fil d'ariane" className="mb-6 text-sm text-muted-foreground">
            <Link to="/guides" className="hover:text-primary underline-offset-4 hover:underline">
              Guides
            </Link>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              {guide.kicker}
            </span>
            <h1
              id="guide-title"
              className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-balance"
            >
              {guide.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{guide.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {guide.readTime} de lecture
              </span>
              <span className="inline-flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4" aria-hidden="true" />
                Mis à jour le{' '}
                <time dateTime={guide.updated}>
                  {new Date(guide.updated).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sommaire, utile pour la lecture et pour les liens de sections dans les SERP */}
      <section className="pb-8" aria-labelledby="guide-toc">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="guide-toc" className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">
            Au programme
          </h2>
          <ol className="border-y border-border/60 divide-y divide-border/60">
            {guide.chapters.map((chapter, i) => (
              <li key={chapter.title}>
                <a
                  href={`#chapitre-${i + 1}`}
                  className="group flex items-baseline gap-4 py-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-xs font-mono text-primary/70 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="min-h-[24px]">{chapter.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Chapitres */}
      <article className="pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {guide.chapters.map((chapter, i) => {
            const articles = (chapter.articles ?? [])
              .map((articleSlug) => {
                const raw = getPostBySlug(articleSlug);
                return raw ? getLocalizedPost(raw, 'fr') : null;
              })
              .filter(Boolean);

            return (
              <motion.section
                key={chapter.title}
                id={`chapitre-${i + 1}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4 }}
                className="scroll-mt-24 py-10 sm:py-12 border-t border-border/60"
                aria-labelledby={`chapitre-titre-${i + 1}`}
              >
                <span className="text-xs font-mono text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                <h2
                  id={`chapitre-titre-${i + 1}`}
                  className="mt-1 text-2xl sm:text-3xl font-medium leading-tight text-balance"
                >
                  {chapter.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {chapter.body.map((paragraph, j) => (
                    <p key={j} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {articles.length > 0 && (
                  <div className="mt-7 pl-4 sm:pl-6 border-l-2 border-primary/30">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground mb-3">
                      Pour aller plus loin
                    </h3>
                    <ul className="space-y-2">
                      {articles.map((article) => (
                        <li key={article!.slug}>
                          <Link
                            to={`/blog/${article!.slug}`}
                            className="group inline-flex items-baseline gap-1.5 min-h-[24px] text-primary hover:underline underline-offset-4"
                          >
                            {article!.title}
                            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.section>
            );
          })}
        </div>
      </article>

      {/* FAQ, alignee sur le schema FAQPage */}
      <section className="py-12 sm:py-16 border-t border-border/60" aria-labelledby="guide-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="guide-faq" className="text-2xl sm:text-3xl font-medium leading-tight mb-8">
            Questions fréquentes
          </h2>
          <dl className="divide-y divide-border/60 border-y border-border/60">
            {guide.faq.map((item) => (
              <div key={item.q} className="py-6">
                <dt className="text-base sm:text-lg font-semibold text-foreground">{item.q}</dt>
                <dd className="mt-2 text-base text-muted-foreground leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA vers la page de service */}
      <section className="py-12 sm:py-16" aria-labelledby="guide-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <h2 id="guide-cta" className="text-xl sm:text-2xl font-semibold leading-snug">
              Vous préférez que quelqu'un s'en occupe ?
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              C'est mon métier. Je viens filmer une demi-journée par mois chez mes clients, je monte, je
              sous-titre et je publie, et je m'occupe aussi de leur site et de leur fiche Google.
            </p>
            <p className="mt-5 flex flex-wrap gap-4">
              <Link
                to={guide.ctaTo}
                className="inline-flex items-center gap-1.5 min-h-[24px] text-primary font-medium hover:underline underline-offset-4"
              >
                {guide.ctaLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 min-h-[24px] text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
              >
                Ou poser une question directement
              </Link>
            </p>
          </div>
        </div>
      </section>

      <AuthorCard />

      {/* Autres guides */}
      {otherGuides.length > 0 && (
        <section className="py-12 sm:py-16 border-t border-border/60" aria-labelledby="guide-others">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id="guide-others" className="text-lg sm:text-xl font-semibold text-foreground mb-5">
              Les autres guides
            </h2>
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {otherGuides.map((g) => (
                <li key={g.slug}>
                  <Link
                    to={`/guides/${g.slug}`}
                    className="group grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 py-5 hover:text-primary transition-colors"
                  >
                    <span className="sm:col-span-4 text-sm text-primary font-medium">{g.kicker}</span>
                    <span className="sm:col-span-8">
                      <span className="font-medium block">{g.title}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{g.excerpt}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ContactMethodsSection />
    </>
  );
};

export default GuidePage;
