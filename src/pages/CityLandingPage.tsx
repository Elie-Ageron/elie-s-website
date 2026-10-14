import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQAccordion from '@/components/FAQAccordion';
import FaqSection from '@/components/FaqSection';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import PortfolioShowcaseSection from '@/components/PortfolioShowcaseSection';
import { cities, getRelatedCities } from '@/data/cities';
import SectionLocale from '@/components/SectionLocale';

interface CityLandingPageProps {
  slug: string;
}

const CityLandingPage = ({ slug }: CityLandingPageProps) => {
  const { language } = useLanguage();

  const city = cities.find((c) => c.slug === slug);
  if (!city) return null;

  const d = city[language];
  /* « en Savoie », pas « a Savoie ». Les deux pages departement
     (`/web-designer-savoie`, `/creation-site-web-haute-savoie`) portaient le
     second dans quatre titres jusqu'au 12 octobre 2026. Le contenu long est en
     francais seulement, d'ou la preposition francaise. */
  /* On teste le nom, pas `scope` : `/web-designer-savoie` est une zone qui
     s'appelle « Albertville », et le drapeau aurait donne « en Albertville ». */
  /* Le lieu des titres est celui du h1, pas `name` : la page Savoie s'appelle
     « Albertville » (son adresse) et titrait « Le contexte à Albertville »
     au dessus d'un texte sur tout le departement. */
  const lieu = d.h1Highlight;
  const departement = /Savoie$/.test(lieu);
  const dans = departement ? `en ${lieu}` : `à ${lieu}`;
  const depth = city.depthFr;
  // Le contenu long n'existe qu'en francais : on ne le sert qu'en francais.
  const showDepth = language === 'fr' && Boolean(depth);
  const baseUrl = 'https://elieageron.com';
  const canonical = `${baseUrl}/${slug}`;
  const related = getRelatedCities(city);

  /* « de » s'elide devant une voyelle ou un h muet. Sans ca, les pages
     locales affichaient « Autour de Albertville », « Autour de Annecy »,
     « Autour de Aix-les-Bains » et « Autour de Ugine » : quatre fautes
     visibles sur quinze pages indexees. */
  const de = (nom: string) => (/^[aeiouyàâéèêëîïôöùûüh]/i.test(nom) ? `d'${nom}` : `de ${nom}`);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    // Meme entite entreprise que partout ailleurs, avec un areaServed cible.
    '@id': `${baseUrl}/#business`,
    name: 'Elie Ageron Web Design',
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    description: d.description,
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.6756,
      longitude: 6.3925,
    },
    areaServed: [
      { '@type': city.scope === 'area' ? 'AdministrativeArea' : 'City', name: d.name },
      ...(depth?.nearby ?? []).map((name) => ({ '@type': 'City' as const, name })),
    ],
    // Note globale portee uniquement par ReviewSchema (rendu par le Layout).
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Services Web Design' : 'Web Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Création de site web' : 'Website design',
          description:
            language === 'fr'
              ? `Site vitrine ou landing page pour les entreprises de ${d.name}`
              : `Showcase site or landing page for businesses in ${d.name}`,
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Contenu pour les réseaux sociaux' : 'Social media content',
          description:
            language === 'fr'
              ? `Tournage sur place et publication de vidéos courtes pour les entreprises de ${d.name}`
              : `On-site filming and short-form video publishing for businesses in ${d.name}`,
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Référencement local' : 'Local SEO',
          description:
            language === 'fr'
              ? `Fiche Google Business et visibilité locale ${dans}`
              : `Google Business Profile and local visibility in ${d.name}`,
        },
      ],
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: d.title.split('|')[0].trim(),
    description: d.description,
    serviceType: language === 'fr' ? 'Création de site web et contenu réseaux sociaux' : 'Web design and social media content',
    provider: { '@id': `${baseUrl}/#business` },
    areaServed: { '@type': city.scope === 'area' ? 'AdministrativeArea' : 'City', name: d.name },
    url: canonical,
  };

  const faqSchema =
    showDepth && depth!.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: depth!.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }
      : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: language === 'fr' ? 'Services' : 'Services', item: `${baseUrl}/services` },
      { '@type': 'ListItem', position: 3, name: d.breadcrumb, item: canonical },
    ],
  };


  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{d.title}</title>
        <meta name="description" content={d.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="fr" href={canonical} />
        <link rel="alternate" hrefLang="en" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={d.title} />
        <meta property="og:description" content={d.description} />
        <meta property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
        <meta property="og:site_name" content="Elie Ageron Web Design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={d.title} />
        <meta name="twitter:description" content={d.description} />
        <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
        <meta name="geo.region" content={city.departmentCode} />
        <meta name="geo.placename" content={d.name} />
        <meta name="geo.position" content={`${city.lat};${city.lng}`} />
        <meta name="ICBM" content={`${city.lat}, ${city.lng}`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      {/* Hero */}
      <section
        /* ⚠️ `min-h-[80vh]` et le centrage passent en `lg:`, comme les sept heros
           corriges le 22 septembre 2026 : cette famille avait ete oubliee. Sur
           telephone le hero laissait 135 px vides sous le bouton. */
        className="relative overflow-hidden grain px-4 sm:px-6 lg:min-h-[80svh] lg:flex lg:items-center lg:justify-center"
        aria-labelledby="city-hero-heading"
      >
        <div className="hidden lg:block absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto py-8 sm:py-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-8"
          >
            <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">
              {/* « Haute-Savoie, Haute-Savoie » sur la page departement, jusqu'au
                  12 octobre 2026. */}
              {d.name === city.department ? d.name : `${d.name}, ${city.department}`}
            </span>
          </motion.div>

          <motion.h1
            id="city-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-title mb-4 sm:mb-6"
          >
            <span className="text-foreground">{d.h1Pre}</span>
            <span className="inline-block text-primary">{d.h1Highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto font-medium text-balance"
          >
            {d.h2}
          </motion.p>

          {/* 🔴 L'intro (40 a 55 mots) est sortie du hero le 12 octobre 2026,
              sur les pages qui ont un contexte local : elle ouvre maintenant la
              section « Le contexte a ... », juste dessous. Elie, sur le hero de
              `/reseaux-sociaux`, qui avait la meme forme : *« c'est un enorme
              paragraphe et tu as deux boutons, donc ce n'est pas du tout assez
              aere. »* Ici c'etait un sous-titre, puis ce paragraphe, puis deux
              boutons et deux lignes.
              ⚠️ Depuis le 14 octobre 2026 la section de contexte n'existe plus :
              l'intro francaise n'est donc plus affichee. Ce qu'elle disait est
              repris dans les points de la section locale. Elle ne sert plus
              qu'au hero anglais. */}
          {showDepth ? (
            <div className="mb-8 sm:mb-10" />
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {d.intro}
            </motion.p>
          )}

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* 🔴 Ce bouton disait « Obtenir mon audit gratuit » et ouvrait
                Calendly, sur les quinze pages locales. Corrige le 11 octobre
                2026 : il mene a l'audit, comme le hero de l'accueil. */}
            <Button
              variant="hero"
              size="xl"
              className="min-h-[56px] px-8 text-base sm:text-lg w-full sm:w-auto active:scale-[0.98] transition-transform"
              asChild
            >
              <Link to="/audit-gratuit">
                {language === 'fr' ? 'Obtenir mon audit gratuit' : 'Get my free audit'}
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="min-h-[44px] sm:min-h-[56px] px-8 text-base text-muted-foreground hover:text-foreground group w-full sm:w-auto"
              asChild
            >
              <Link to="/services" className="flex items-center gap-2">
                {language === 'fr' ? 'Voir les services' : 'See services'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {/* Sortie a faible engagement : sur une page locale, une partie des
              visiteurs preferent appeler plutot que reserver un creneau. */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 text-sm text-muted-foreground"
          >
            {language === 'fr' ? 'Ou appelez directement le ' : 'Or call '}
            <a
              href="tel:+33695555318"
              className="font-medium text-primary hover:underline underline-offset-4"
            >
              06 95 55 53 18
            </a>
            {language === 'fr' ? '. Réponse en moins de 24 h aux messages.' : '. Messages answered within 24 hours.'}
          </motion.p>

          {showDepth && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            >
              <Clock className="hidden sm:block w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              {depth!.travel}
            </motion.p>
          )}

          {/* 🔴 Une bande de quatre pastilles vivait ici, sur les quinze pages
              locales : « 12+ clients accompagnes », « 100 % Satisfaits »,
              « Avis 5 etoiles », « Suivi personnalise ». Retiree le
              14 septembre 2026, pour trois raisons qui se cumulent.

              1. **Deux des quatre sont invendables.** « 100 % Satisfaits » ne
                 repose sur rien et se lit comme un slogan de prospectus ; Elie
                 refuse d'afficher un chiffre qu'il ne peut pas sourcer.
              2. **Elle repetait les deux lignes juste au-dessus**, qui disent
                 la meme chose en vrai : le numero direct, la reponse sous 24 h
                 et le temps de trajet depuis Albertville.
              3. Le label etait en `text-foreground/70`, soit une opacite sur du
                 texte, ce que la regle d'accessibilite du projet interdit.

              ⚠️ Ne pas la remplacer par une autre rangee de pastilles. Si une
              preuve manque sur ces pages, elle se pose en phrase. */}
        </div>
      </section>

      {/* 🔴 **L'ordre de cette page a ete refait le 14 octobre 2026.** Elie,
          sur `/creation-site-web-albertville` : *« t'as pas d'elements clairs.
          T'as quatre paragraphes enormes [...] Tu dis que c'est la fin de la
          page, mais apres t'as encore des paragraphes, des avis, des prix, un
          audit gratuit. On comprend rien. »*

          Mesure avant, a 390 px : quinze ecrans, dont six de texte continu
          avant le premier element concret. Les prix arrivaient au treizieme
          ecran, apres la FAQ, et aucun site realise n'etait montre.

          L'ordre retenu suit les questions de quelqu'un qui tape « creation
          site web + sa ville » : combien, qu'est-ce qu'il a deja fait, pourquoi
          lui plutot qu'un autre, qu'en disent ses clients. Le texte local reste
          sur la page, c'est lui qui la distingue d'une page satellite, mais en
          points courts et apres les preuves. La FAQ est le dernier bloc avant
          la fin de page commune, comme partout ailleurs sur le site. */}
      <ServicesSection />
      <PortfolioShowcaseSection contexte="sites" />

      {showDepth && (
        <SectionLocale
          id="city-local"
          altPortrait={`Elie Ageron, web designer installé à Albertville, qui se déplace ${dans}`}
          points={depth!.points}
          titre={
            <>
              <span className="text-foreground">{`Créer un site ${dans}, `}</span>
              <span className="block text-primary lg:inline">ce que ça change.</span>
            </>
          }
        >
          <h3 className="text-lg font-bold text-foreground">Les métiers que j&rsquo;accompagne ici</h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {depth!.sectors.map((secteur) => (
              <li key={secteur} className="flex items-center gap-2 text-base text-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {secteur}
              </li>
            ))}
          </ul>
        </SectionLocale>
      )}

      <TestimonialsSection />

      {/* Le second pilier, en deux phrases et un lien. C'etait un paragraphe de
          quatre a six lignes. Le site offert au troisieme mois est l'argument
          le plus fort de l'offre (`CLAUDE.md`, 21 septembre 2026), et il se lit
          aussi dans ce sens : quelqu'un qui vient pour un site peut l'avoir
          compris. Le lien mene a la page reseaux de la meme commune quand elle
          existe, sinon a la page pilier. */}
      {showDepth && (
        <section className="border-t border-border/50 px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="city-social">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h2 id="city-social" className="section-title">
              {/* Coupe imposee a toutes les largeurs : centre sur grand ecran,
                  le titre se cassait entre « chez » et « vous ». */}
              <span className="block text-foreground">Et si on filmait chez vous,</span>
              <span className="block text-primary">{`${dans} ?`}</span>
            </h2>
            <p className="section-lede mt-6 lg:mx-auto">{depth!.social}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-auto">
              <strong className="font-semibold text-foreground">890 € par mois, sans engagement.</strong> Une
              journée de tournage, 8 vidéos montées et publiées, et un site d&rsquo;une page compris à partir du
              troisième mois.
            </p>
            <Link
              to={depth!.socialPage ? `/${depth!.socialPage}` : '/reseaux-sociaux'}
              className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-foreground px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {depth!.socialPage ? `Voir l'offre réseaux sociaux ${dans}` : "Voir l'offre réseaux sociaux"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}

      {/* La zone, une seule fois. C'etaient deux sections, « Autour de » et
          « J'interviens aussi ici », dont la seconde tombait apres la FAQ. */}
      {(showDepth || related.length > 0) && (
        <section className="border-y border-border/50 bg-secondary/40 py-16" aria-labelledby="city-nearby">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 id="city-nearby" className="mb-4 text-2xl font-semibold leading-tight text-foreground lg:text-xl">
              {language === 'fr'
                ? departement
                  ? `Partout ${dans}`
                  : `Autour ${de(lieu)}`
                : 'I also work here'}
            </h2>
            {showDepth && (
              <p className="text-base leading-relaxed text-muted-foreground">
                {departement ? 'Je me déplace à ' : 'Je me déplace aussi à '}
                {depth!.nearby.slice(0, -1).join(', ')} et {depth!.nearby.slice(-1)}. Si
                votre commune n&rsquo;est pas dans la liste, demandez, elle est probablement sur ma route.
              </p>
            )}
            {related.length > 0 && (
              <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/${c.slug}`}
                      className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-primary"
                    >
                      <span className="font-medium">{c[language].breadcrumb}</span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-primary/50 transition-colors group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* FAQ locale, alignee sur le schema FAQPage. Dernier bloc avant la fin
          de page commune : plus rien ne vient apres elle. */}
      {showDepth ? (
        <FaqSection
          id="city-faq"
          className="px-4 py-20 sm:px-6"
          items={depth!.faq.map((item) => ({ question: item.q, answer: item.a }))}
          titre={
            <>
              <span className="text-foreground">Les questions qu&rsquo;on me pose </span>
              <span className="text-primary">{dans}.</span>
            </>
          }
        />
      ) : (
        <FAQAccordion />
      )}

      <ContactMethodsSection />
    </>
  );
};

export default CityLandingPage;
