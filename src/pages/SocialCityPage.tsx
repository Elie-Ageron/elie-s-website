import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, ArrowUpRight, Camera, Scissors, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FaqSection from '@/components/FaqSection';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SocialClientsSection from '@/components/SocialClientsSection';
import { getSocialCity, getRelatedSocialCities } from '@/data/social-cities';
import { getIndexEntry } from '@/data/blogIndex';
import { cities } from '@/data/cities';

/**
 * La page locale du pilier reseaux sociaux, une par bassin.
 *
 * Voir l'en-tete de `src/data/social-cities.ts` pour la raison d'etre de cette
 * famille de pages. En resume : les quinze pages locales existantes vendent
 * toutes un site web, et une recherche « community manager Albertville »
 * n'avait aucune page a atteindre sur ce site.
 *
 * ⚠️ **Le contenu est francais uniquement**, comme le `depthFr` des pages
 * locales. La balise `lang` est donc forcee a `fr` et ne suit pas le
 * selecteur de langue : servir du francais sous `lang="en"` est une erreur que
 * le projet a deja corrigee ailleurs.
 *
 * ⚠️ Pas de grille de cartes. Les angles de tournage et les articles sont des
 * listes editoriales separees par un filet, comme partout ailleurs sur le site.
 */

interface SocialCityPageProps {
  slug: string;
}

const etapes = [
  {
    icone: Camera,
    titre: 'Une journée de tournage chez vous',
    texte:
      "J'arrive avec le matériel et un plan de tournage préparé à l'avance. On tourne la matière du mois en une seule fois, pendant que vous travaillez.",
  },
  {
    icone: Scissors,
    titre: "Je monte, je sous-titre, j'écris",
    texte:
      "Format vertical, sous-titres incrustés, accroche travaillée sur les trois premières secondes, et les légendes rédigées. Vous n'ouvrez aucun logiciel.",
  },
  {
    icone: CalendarCheck,
    titre: 'Je publie pendant tout le mois',
    texte:
      "8 vidéos, 4 carrousels et 8 stories étalés sur Instagram, Facebook, TikTok ou YouTube Shorts. Vous les découvrez en ligne, ou la veille si vous préférez les voir avant.",
  },
];

const SocialCityPage = ({ slug }: SocialCityPageProps) => {
  const city = getSocialCity(slug);
  if (!city) return null;

  const baseUrl = 'https://elieageron.com';
  const canonical = `${baseUrl}/${city.slug}`;
  const related = getRelatedSocialCities(city);
  const webCity = city.webPage ? cities.find((c) => c.slug === city.webPage) : undefined;

  /** Articles choisis pour ce bassin. Les slugs sont valides par check:content. */
  const articles = city.articles
    .map((articleSlug) => {
      const post = getIndexEntry(articleSlug);
      return post ? { slug: articleSlug, title: post.title, excerpt: post.excerpt } : null;
    })
    .filter((p): p is { slug: string; title: string; excerpt: string } => p !== null);

  /* Meme entite entreprise que partout ailleurs, avec un areaServed cible.
     Ne jamais declarer une seconde entite : le site en a eu quatre en aout
     2026, et Google y voyait quatre entreprises distinctes. */
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: 'Elie Ageron Web Design',
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    description: city.seoDesc,
    telephone: '+33695555318',
    email: 'elie@elieageron.com',
    priceRange: '€€',
    // La fiche Google Business de l'entreprise, meme entite partout.
    hasMap: 'https://maps.google.com/?cid=10223724609164966776',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Albertville',
      addressRegion: 'Savoie',
      postalCode: '73200',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 45.6756, longitude: 6.3925 },
    areaServed: [
      { '@type': city.scope === 'area' ? 'AdministrativeArea' : 'City', name: city.name },
      ...city.nearby.map((name) => ({ '@type': 'City' as const, name })),
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: `Gestion de réseaux sociaux à ${city.name}`,
    serviceType: 'Gestion de réseaux sociaux',
    description:
      `Tournage vidéo sur place une journée par mois à ${city.name}, montage vertical, sous-titrage ` +
      "et publication de 8 vidéos courtes, 4 carrousels et 8 stories dans le mois. 890 € par mois, sans engagement, site web d'une page compris à partir du troisième mois.",
    url: canonical,
    provider: { '@id': `${baseUrl}/#business` },
    areaServed: { '@type': city.scope === 'area' ? 'AdministrativeArea' : 'City', name: city.name },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: 890,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: 890,
        unitCode: 'MON',
        billingIncrement: 1,
      },
      availability: 'https://schema.org/InStock',
      url: canonical,
    },
  };

  /* ⚠️ Les questions balisees sont exactement celles rendues plus bas par
     `FaqSection`. Une FAQPage dont les questions ne sont pas visibles a
     l'ecran est une infraction aux regles de Google, sanctionnee par une
     action manuelle. Le site en a servi une jusqu'au 14 septembre 2026. */
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonical}#faq`,
    mainEntity: city.faq.map((item) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Réseaux sociaux', item: `${baseUrl}/reseaux-sociaux` },
      { '@type': 'ListItem', position: 3, name: city.name, item: canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>{city.seoTitle}</title>
        <meta name="description" content={city.seoDesc} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="fr" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={city.seoTitle} />
        <meta property="og:description" content={city.seoDesc} />
        <meta property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Elie Ageron Web Design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={city.seoTitle} />
        <meta name="twitter:description" content={city.seoDesc} />
        <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
        <meta name="geo.region" content={city.departmentCode} />
        <meta name="geo.placename" content={city.name} />
        <meta name="geo.position" content={`${city.lat};${city.lng}`} />
        <meta name="ICBM" content={`${city.lat}, ${city.lng}`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ─────────── Hero ─────────── */}
      <section
        className="relative grain flex min-h-[78vh] items-center justify-center overflow-hidden px-4 sm:px-6"
        aria-labelledby="social-city-hero"
      >
        <div className="relative z-10 mx-auto max-w-3xl py-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {city.name}, {city.department}
          </motion.p>

          <motion.h1
            id="social-city-hero"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-title mb-7"
          >
            <span className="text-foreground">{city.h1Pre}</span>
            <span className="inline-block text-primary">{city.h1Highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {city.lede}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button variant="hero" size="xl" className="min-h-[56px] w-full px-8 text-base sm:w-auto" asChild>
              <Link to="/audit-gratuit">Mon audit gratuit</Link>
            </Button>
            <Button variant="ghost" size="xl" className="group min-h-[56px] w-full px-8 text-base text-muted-foreground hover:text-foreground sm:w-auto" asChild>
              <Link to="/reseaux-sociaux" className="flex items-center gap-2">
                Voir le détail de l&rsquo;offre
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {/* Sortie a faible engagement : sur une page locale, une partie des
              visiteurs preferent appeler plutot que remplir quoi que ce soit. */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Ou appelez directement le{' '}
            <a href="tel:+33695555318" className="font-medium text-primary underline underline-offset-4">
              06 95 55 53 18
            </a>
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <Clock className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            {city.travel}
          </motion.p>
        </div>
      </section>

      {/* ─────────── Le terrain, la partie qui distingue cette page ─────────── */}
      <section className="border-t border-border/50 py-20 sm:py-28" aria-labelledby="social-city-terrain">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="social-city-terrain" className="section-title text-foreground">
            <span>Ce que donnent les réseaux </span>
            <span className="text-primary">à {city.name}</span>
          </h2>
          <div className="mt-8 space-y-6">
            {city.terrain.map((paragraphe, i) => (
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

          <div className="mt-10 border-t border-border/60 pt-8">
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">Quelle plateforme, ici</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{city.platforms}</p>
          </div>
        </div>
      </section>

      {/* ─────────── Comment ca se passe ─────────── */}
      <section className="border-t border-border/50 bg-secondary/30 py-20 sm:py-28" aria-labelledby="social-city-comment">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="social-city-comment" className="section-title text-foreground">
            <span>Ce que ça vous demande, </span>
            <span className="text-primary">une journée par mois</span>
          </h2>

          <ol className="mt-10 divide-y divide-border/60 border-y border-border/60">
            {etapes.map((etape, i) => {
              const Icone = etape.icone;
              return (
                <li key={etape.titre} className="flex gap-5 py-7 sm:gap-7">
                  <span className="shrink-0 text-4xl font-semibold leading-none text-primary sm:text-5xl" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground sm:text-xl">
                      <Icone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      {etape.titre}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{etape.texte}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">890 € par mois, sans engagement</strong> : déplacement,
            tournage, montage, légendes et publication de 8 vidéos, 4 carrousels et 8 stories. Et à partir du
            troisième mois, je vous fais un site d'une page, sans rien payer de plus.
          </p>
        </div>
      </section>

      {/* ─────────── Quoi filmer ici ─────────── */}
      <section className="border-t border-border/50 py-20 sm:py-28" aria-labelledby="social-city-filmer">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="social-city-filmer" className="section-title text-foreground">
            <span>Ce qu&rsquo;on filme dans </span>
            <span className="text-primary">un métier d&rsquo;ici</span>
          </h2>
          <p className="section-lede mt-5">
            Les angles qui marchent ne sont pas les mêmes partout. Voilà ceux que je propose en premier sur ce
            secteur.
          </p>

          <ul className="mt-10 divide-y divide-border/60 border-y border-border/60">
            {city.filmer.map((bloc) => (
              <li key={bloc.title} className="py-7">
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">{bloc.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{bloc.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* La seule preuve publique du pilier : deux comptes reellement geres,
          tous les deux a Albertville, avec leurs liens verifiables. */}
      <SocialClientsSection />

      <FaqSection
        id="social-city-faq"
        className="border-t border-border/50 px-4 py-16 sm:px-6 sm:py-24"
        items={city.faq.map((item) => ({ question: item.q, answer: item.a }))}
        titre={
          <>
            <span className="text-foreground">Les questions qu&rsquo;on me pose </span>
            <span className="text-primary">à {city.name}.</span>
          </>
        }
      />

      {/* ─────────── Maillage vers le corpus ─────────── */}
      {articles.length > 0 && (
        <section className="border-t border-border/50 py-14 sm:py-20" aria-labelledby="social-city-articles">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 id="social-city-articles" className="text-2xl font-medium leading-tight text-foreground sm:text-3xl">
              À lire avant de vous lancer
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Choisis pour les métiers qu&rsquo;on trouve sur ce secteur. Tout est gratuit, et rien n&rsquo;y est
              réservé aux clients.
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

      {/* ─────────── Maillage local, et croise vers le pilier site web ─────────── */}
      <section className="border-t border-border/50 py-14 sm:py-20" aria-labelledby="social-city-related">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="social-city-related" className="text-lg font-semibold text-foreground sm:text-xl">
            Je filme aussi ici
          </h2>
          <ul className="mt-5 divide-y divide-border/60 border-y border-border/60">
            {related.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}`} className="group flex items-center justify-between gap-4 py-4">
                  <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                    {c.scope === 'area' ? `Réseaux sociaux en ${c.name}` : `Réseaux sociaux à ${c.name}`}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {webCity && (
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Vous cherchiez plutôt un site ?{' '}
              <Link to={`/${webCity.slug}`} className="font-medium text-primary underline underline-offset-4">
                Je fais aussi les sites {city.scope === 'area' ? `en ${city.name}` : `à ${city.name}`}
              </Link>
              , et les deux se font ensemble : les vidéos amènent les gens, le site les reçoit.
            </p>
          )}
        </div>
      </section>

      <ContactMethodsSection />
    </>
  );
};

export default SocialCityPage;
