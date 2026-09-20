import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FaqSection from '@/components/FaqSection';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import { getServicePage, getRelatedServices } from '@/data/service-pages';
import { useLanguage } from '@/contexts/LanguageContext';
import { getIndexEntry } from '@/data/blogIndex';

/**
 * Une page par service, rendue depuis `src/data/service-pages.ts`.
 *
 * Voir l'en-tete du fichier de donnees pour la raison d'etre : cinq des sept
 * services d'Elie n'existaient que comme des ancres de `/services`, et une
 * ancre n'a ni balise title, ni canonical, ni classement propre.
 *
 * ⚠️ **Contenu francais uniquement**, comme les pages locales. La balise `lang`
 * est donc forcee a `fr` : servir du francais sous `lang="en"` est une erreur
 * que le projet a deja corrigee ailleurs.
 *
 * ⚠️ La section « ce que ce service ne fait pas » n'est pas une precaution
 * juridique, c'est un argument. Un prestataire qui nomme ses limites est le
 * seul a qui on croit quand il nomme ses competences.
 */

interface ServicePageProps {
  slug: string;
}

const ServicePage = ({ slug }: ServicePageProps) => {
  const { language } = useLanguage();
  const service = getServicePage(slug);
  if (!service) return null;

  const baseUrl = 'https://elieageron.com';
  const canonical = `${baseUrl}/${service.slug}`;
  const related = getRelatedServices(service);

  const articles = service.articles
    .map((articleSlug) => {
      const post = getIndexEntry(articleSlug);
      return post ? { slug: articleSlug, title: post.title, excerpt: post.excerpt } : null;
    })
    .filter((p): p is { slug: string; title: string; excerpt: string } => p !== null);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: `${service.name} · Elie Ageron`,
    serviceType: service.serviceType,
    description: service.seoDesc,
    url: canonical,
    // Meme entite entreprise que partout ailleurs. Ne jamais en declarer une
    // seconde : le site en a eu quatre en aout 2026, et Google y voyait quatre
    // entreprises distinctes.
    provider: { '@id': `${baseUrl}/#business` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Savoie' },
      { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
      { '@type': 'Country', name: 'France' },
    ],
    ...(service.prixSchema
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: service.prixSchema,
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'EUR',
              minPrice: service.prixSchema,
            },
            availability: 'https://schema.org/InStock',
            url: canonical,
          },
        }
      : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: service.livrables.map((l) => ({
        '@type': 'Offer',
        name: l.title,
        description: l.body,
      })),
    },
  };

  /* ⚠️ Les questions balisees sont exactement celles rendues plus bas. Une
     FAQPage dont les questions ne sont pas visibles a l'ecran est une
     infraction aux regles de Google, sanctionnee par une action manuelle. */
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonical}#faq`,
    mainEntity: service.faq.map((item) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>{service.seoTitle}</title>
        <meta name="description" content={service.seoDesc} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="fr" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={service.seoTitle} />
        <meta property="og:description" content={service.seoDesc} />
        <meta property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Elie Ageron Web Design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.seoTitle} />
        <meta name="twitter:description" content={service.seoDesc} />
        <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
        <meta name="geo.region" content="FR-73" />
        <meta name="geo.placename" content="Albertville" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ─────────── Hero ─────────── */}
      <section className="grain relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 sm:px-6" aria-labelledby="service-hero">
        <div className="relative z-10 mx-auto max-w-3xl py-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-7 text-sm text-muted-foreground"
          >
            <Link to="/services" className="underline-offset-4 hover:text-primary hover:underline">
              Services
            </Link>
            <span aria-hidden="true"> · </span>
            {service.name}
          </motion.p>

          <motion.h1
            id="service-hero"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-title mb-7"
          >
            <span className="text-foreground">{service.h1Pre}</span>
            <span className="inline-block text-primary">{service.h1Highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {service.lede}
          </motion.p>

          {/* ⚠️ Cette page n'existe qu'en francais, et `/services` l'annonce
              maintenant avant le clic. On le redit ici pour celui qui arrive
              par un lien ou par Google, avec une sortie vers la page qui, elle,
              est traduite. Deux phrases, pas une banniere. */}
          {language === 'en' && (
            <p lang="en" className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              This page is written in French. Everything I do is described in English on the{' '}
              <Link to="/services" className="text-primary underline-offset-4 hover:underline">
                services page
              </Link>
              .
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button variant="hero" size="xl" className="min-h-[56px] w-full px-8 text-base sm:w-auto" asChild>
              <Link to="/audit-gratuit">Mon audit gratuit</Link>
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="group min-h-[56px] w-full px-8 text-base text-muted-foreground hover:text-foreground sm:w-auto"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Décrire mon besoin
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            <strong className="font-semibold text-foreground">{service.prix}</strong>
            <span aria-hidden="true"> · </span>
            Ou appelez le{' '}
            <a href="tel:+33695555318" className="font-medium text-primary underline-offset-4 hover:underline">
              06 95 55 53 18
            </a>
          </motion.p>
        </div>
      </section>

      {/* ─────────── Le probleme reel ─────────── */}
      <section className="border-t border-border/50 py-20 sm:py-28" aria-labelledby="service-probleme">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="service-probleme" className="section-title text-foreground">
            <span>Ce qui cloche, </span>
            <span className="text-primary">presque à chaque fois</span>
          </h2>
          <div className="mt-8 space-y-6">
            {service.probleme.map((paragraphe, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraphe}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Ce qui est livre ─────────── */}
      <section className="border-t border-border/50 bg-secondary/30 py-20 sm:py-28" aria-labelledby="service-livrables">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="service-livrables" className="section-title text-foreground">
            <span>Ce que vous avez </span>
            <span className="text-primary">à la fin</span>
          </h2>

          <ul className="mt-10 divide-y divide-border/60 border-y border-border/60">
            {service.livrables.map((bloc) => (
              <li key={bloc.title} className="flex gap-4 py-7 sm:gap-6">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">{bloc.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{bloc.body}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Un service qui ne dit pas ses limites se vend mal. Celui-ci les dit. */}
          <div className="mt-10 border-t border-border/60 pt-8">
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">Ce que ça ne fait pas</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.limites}</p>
          </div>
        </div>
      </section>

      <FaqSection
        id="service-faq"
        className="border-t border-border/50 px-4 py-16 sm:px-6 sm:py-24"
        items={service.faq.map((item) => ({ question: item.q, answer: item.a }))}
        titre={
          <>
            <span className="text-foreground">Les questions qu&rsquo;on me pose </span>
            <span className="text-primary">là-dessus.</span>
          </>
        }
      />

      {/* ─────────── Maillage vers le corpus ─────────── */}
      {articles.length > 0 && (
        <section className="border-t border-border/50 py-14 sm:py-20" aria-labelledby="service-articles">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 id="service-articles" className="text-2xl font-medium leading-tight text-foreground sm:text-3xl">
              Si vous préférez le faire vous-même
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Tout est expliqué en détail dans ces articles, gratuitement. Rien n&rsquo;y est réservé aux
              clients, et vous n&rsquo;avez pas besoin de moi pour les appliquer.
            </p>
            <ul className="mt-7 divide-y divide-border/60 border-y border-border/60">
              {articles.map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="group block py-5">
                    <span className="block font-medium text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground line-clamp-2">{post.excerpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ─────────── Les autres services ─────────── */}
      <section className="border-t border-border/50 py-14 sm:py-20" aria-labelledby="service-related">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="service-related" className="text-lg font-semibold text-foreground sm:text-xl">
            Ça va souvent avec
          </h2>
          <ul className="mt-5 divide-y divide-border/60 border-y border-border/60">
            {related.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="group flex items-center justify-between gap-4 py-4">
                  <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                    {s.name}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">
            Tout ça se fait aussi ensemble, avec un seul interlocuteur.{' '}
            <Link to="/services" className="font-medium text-primary underline-offset-4 hover:underline">
              Voir les sept prestations
            </Link>
            .
          </p>
        </div>
      </section>

      <ContactMethodsSection />
    </>
  );
};

export default ServicePage;
