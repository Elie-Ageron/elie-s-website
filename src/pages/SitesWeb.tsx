import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import ServicesSection from '@/components/ServicesSection';
import PortfolioShowcaseSection from '@/components/PortfolioShowcaseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection, { type FaqEntree } from '@/components/FaqSection';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import ScrollArrow from '@/components/ScrollArrow';
import SEO from '@/components/SEO';

/**
 * La page du pilier n°1 : la création de site web.
 *
 * 🔴 **Créée le 12 octobre 2026.** Elie, sur l'accueil : *« les prix des
 * sites web, je pense qu'il ne faut pas que ce soit sur l'accueil. Il faut que
 * ce soit sur une autre page. L'accueil est déjà hyper long. »* Puis, au choix
 * de la destination : *« fais une page site web. »*
 *
 * Les deux piliers sont de rang égal depuis août 2026, et seul le second avait
 * sa page (`/reseaux-sociaux`). Le premier n'existait que comme une section de
 * l'accueil, une ancre de `/services` et quinze pages de villes. Celle-ci est
 * leur page pilier : **elle porte l'offre, les pages de villes portent le
 * lieu.** Même règle que pour les réseaux : ne pas mettre de nom de commune
 * dans son titre, sinon elle se bat contre `/web-designer-savoie` et
 * `/creation-site-web-albertville` sur la même requête.
 *
 * Elle remplace l'ancienne page Tarifs (`/pricing`, retirée en juillet 2026),
 * vers laquelle l'adresse redirige maintenant. On ne l'a pas restaurée : elle
 * portait des cartes de verre, des pastilles « le plus populaire » et des
 * icônes de couronne, c'est à dire tout ce qu'Elie appelle *« vraiment
 * intelligence artificielle »*.
 *
 * ⚠️ **Écrite pour le téléphone d'abord**, le même jour qu'une passe sur tout
 * le site contre les paragraphes trop longs. Un titre, une phrase, et le
 * détail seulement dans les étapes et la FAQ, que le visiteur ouvre s'il veut.
 *
 * ⚠️ **Rien ici n'est inventé.** Les prix et les délais sont ceux de
 * `ServicesSection` et de la FAQ de l'accueil, les étapes résument
 * `/our-process`, et le site compris dans l'offre réseaux vient de
 * `CLAUDE.md`. Aucune position Google n'est promise.
 */

const useEtapes = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  return [
    {
      num: '1',
      titre: fr ? 'On en parle trente minutes' : 'We talk for thirty minutes',
      texte: fr
        ? "Votre métier, vos clients, ce que le site doit leur faire faire. L'appel est gratuit."
        : 'Your trade, your clients, what the site should get them to do. The call is free.',
    },
    {
      num: '2',
      titre: fr ? 'Je dessine, vous validez' : 'I design, you approve',
      texte: fr
        ? "Vous voyez le site avant qu'il parte en ligne, et j'ajuste jusqu'à ce qu'il vous ressemble."
        : 'You see the site before it goes live, and I adjust it until it looks like you.',
    },
    {
      num: '3',
      titre: fr ? 'Il part en ligne' : 'It goes live',
      texte: fr
        ? 'Rapide sur téléphone, référencement de base fait, et je vous montre comment vous en servir.'
        : 'Fast on a phone, basic search setup done, and I show you how to use it.',
    },
  ];
};

const useFaq = (): FaqEntree[] => {
  const { language } = useLanguage();
  return language === 'fr'
    ? [
        {
          question: 'Combien coûte un site web ?',
          answer:
            "Un site d'une page démarre à 500 €, un site vitrine à 1 500 €, le pack lancement complet à 3 500 €. Ce sont des prix de départ : le vôtre dépend du nombre de pages et des textes à écrire, et il est fixé par écrit avant qu'on commence. Pas de frais cachés.",
          article: 'combien-coute-un-site-web',
        },
        {
          question: 'En combien de temps mon site est en ligne ?',
          answer:
            'Entre 7 et 14 jours ouvrés après réception de vos textes et de vos photos. Une page va plus vite qu’un site de six pages, et les corrections sont comprises.',
        },
        {
          question: "Je n'ai pas de textes. Vous les écrivez ?",
          answer:
            "Oui. C'est même ce qui fait le plus bouger le prix, donc on le décide ensemble au moment du devis. Dans le pack lancement, les textes sont compris.",
        },
        {
          question: 'Mon site sera visible sur Google ?',
          answer:
            "Le référencement de base est compris : votre métier et votre commune sont écrits là où Google les cherche, et le site est rapide sur téléphone. Je ne promets aucune position, personne ne peut le faire honnêtement. Sur une recherche locale, votre fiche Google et vos avis comptent autant que le site.",
        },
        {
          question: "J'ai déjà un site. Vous pouvez le refaire ?",
          answer:
            "Oui, c'est une refonte. On garde ce qui marche déjà, et je vous dis par écrit ce qui change et combien ça coûte avant de toucher à quoi que ce soit.",
        },
        {
          question: 'Et après la mise en ligne ?',
          answer:
            "Le site est à vous, nom de domaine compris. La maintenance démarre à 0 € par mois : le suivi est une option, pas une obligation. Et je reste joignable si une question arrive après.",
        },
      ]
    : [
        {
          question: 'How much does a website cost?',
          answer:
            'A one page site starts at €500, a showcase site at €1,500, the full launch pack at €3,500. These are starting prices: yours depends on the number of pages and the copy to write, and it is fixed in writing before we start. No hidden fees.',
        },
        {
          question: 'How long until my site is live?',
          answer:
            'Between 7 and 14 business days once I have your copy and your photos. One page goes faster than a six page site, and revisions are included.',
        },
        {
          question: 'I have no copy. Do you write it?',
          answer:
            'Yes. It is what moves the price the most, so we decide it together when I quote. In the launch pack, the copy is included.',
        },
        {
          question: 'Will my site show up on Google?',
          answer:
            'Basic search setup is included: your trade and your town are written where Google looks for them, and the site is fast on a phone. I do not promise any ranking, nobody honestly can. On a local search, your Google profile and your reviews count as much as the site.',
        },
        {
          question: 'I already have a site. Can you rebuild it?',
          answer:
            'Yes, that is a rebuild. We keep what already works, and I tell you in writing what changes and what it costs before touching anything.',
        },
        {
          question: 'What happens after launch?',
          answer:
            'The site is yours, domain name included. Upkeep starts at €0 a month: ongoing care is an option, not a requirement. And I stay reachable if a question comes up later.',
        },
      ];
};

/** Un lieu de la phrase des zones, qui est aussi le lien vers sa page locale. */
const Lieu = ({ to, children }: { to: string; children: string }) => (
  <Link to={to} className="text-foreground underline underline-offset-4 hover:text-primary">
    {children}
  </Link>
);

const SitesWeb = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const { openCalendly } = useCalendly();
  const etapes = useEtapes();
  const faq = useFaq();

  const base = 'https://elieageron.com';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${base}/creation-site-web#service`,
    name: fr ? 'Création de site web' : 'Website design',
    serviceType: fr ? 'Création de site web' : 'Website design',
    description: fr
      ? "Site d'une page dès 500 €, site vitrine dès 1 500 €, pack lancement complet dès 3 500 €. En ligne 7 à 14 jours ouvrés après réception des contenus, référencement de base compris."
      : 'One page site from €500, showcase site from €1,500, full launch pack from €3,500. Live 7 to 14 business days after the content is in, basic search setup included.',
    url: `${base}/creation-site-web`,
    provider: { '@id': `${base}/#person` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Savoie' },
      { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
      { '@type': 'Country', name: 'France' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: fr ? 'Formules de site web' : 'Website plans',
      itemListElement: [
        { nom: fr ? 'Site une page' : 'One page site', prix: 500 },
        { nom: fr ? 'Site vitrine' : 'Showcase site', prix: 1500 },
        { nom: fr ? 'Pack lancement complet' : 'Full launch pack', prix: 3500 },
      ].map(({ nom, prix }) => ({
        '@type': 'Offer',
        name: nom,
        priceCurrency: 'EUR',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: prix, priceCurrency: 'EUR' },
        url: `${base}/creation-site-web`,
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: fr ? 'Accueil' : 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: fr ? 'Sites web' : 'Websites', item: `${base}/creation-site-web` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const apparition = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <>
      <SEO page="sites" structuredData={[serviceSchema, breadcrumbSchema, faqSchema]} />

      {/* ─────────── Hero ───────────
          Même gabarit que `/reseaux-sociaux`, avec ce que la relecture du
          12 octobre 2026 a demandé à celui-là : une phrase sous le titre, pas
          un paragraphe, et un seul bouton plein. Le second appel est un lien,
          comme sur l'accueil. */}
      <section
        className="relative grain overflow-hidden px-4 py-6 sm:px-6 sm:py-12 lg:flex lg:min-h-[100svh] lg:items-center lg:justify-center lg:py-0"
        aria-labelledby="sites-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center lg:-mt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground sm:mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {fr ? 'Création de site web' : 'Website design'}
            </span>

            {/* « Ce qu'on comprend en cinq secondes » est le critère que
                l'audit gratuit applique déjà aux sites des autres
                (`/audit-gratuit`, section « Votre site »). C'est une promesse
                de clarté, pas un chiffre de performance. */}
            <h1 id="sites-hero-heading" className="hero-title mb-5 sm:mb-6">
              <span className="text-foreground">
                {fr ? 'Un site qui dit ce que vous faites' : 'A website that says what you do'}
              </span>
              <br />
              <span className="text-primary">{fr ? 'en cinq secondes.' : 'in five seconds.'}</span>
            </h1>

            <p className="mx-auto max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {fr
                ? 'Une page dès 500 €, un site vitrine dès 1 500 €. Le prix est écrit avant qu’on commence.'
                : 'One page from €500, a showcase site from €1,500. The price is in writing before we start.'}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-6">
              <Button variant="hero" size="lg" className="w-full px-8 text-base sm:w-auto" asChild>
                <Link to="/get-started">
                  {fr ? 'Demander un devis' : 'Request a quote'}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline-offset-[6px] transition-colors hover:text-foreground hover:underline"
              >
                {fr ? 'Réserver un appel gratuit' : 'Book a free call'}
              </button>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              {fr ? 'Réponse en moins de 24 h' : 'Reply within 24 hours'}
            </p>
          </motion.div>

          <ScrollArrow />
        </div>
      </section>

      {/* Les trois formules et les délais. C'est la raison de la visite :
          quelqu'un qui cherche un site veut d'abord un prix. Le même composant
          sert les quinze pages de villes. */}
      <ServicesSection />

      {/* ─────────── Le déroulé ─────────── */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 sm:py-32" aria-labelledby="sites-deroule-heading">
        <div className="mx-auto max-w-4xl">
          <motion.h2 {...apparition} id="sites-deroule-heading" className="section-title max-w-2xl">
            <span className="text-foreground">{fr ? 'Trois étapes, ' : 'Three steps, '}</span>
            <span className="text-primary">{fr ? 'et vous êtes en ligne.' : 'and you are live.'}</span>
          </motion.h2>

          <ol className="mt-12 sm:mt-16">
            {etapes.map((etape, index) => (
              <motion.li
                key={etape.num}
                {...apparition}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className={`grid grid-cols-[auto_1fr] gap-x-6 py-8 sm:gap-x-8 sm:py-10 ${index === 0 ? '' : 'border-t border-border/60'}`}
              >
                <span
                  className="w-7 font-heading text-5xl font-bold leading-none text-primary tabular-nums sm:w-9 sm:text-6xl"
                  aria-hidden="true"
                >
                  {etape.num}
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-xl font-bold leading-snug text-foreground sm:text-2xl">{etape.titre}</h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">{etape.texte}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* ⚠️ Ce lien est un des points d'entrée de `/our-process` depuis le
              site rendu, avec le « Voir le déroulé » des formules. Ne pas
              l'enlever sans relancer `npm run check:maillage`. */}
          <Link
            to="/our-process"
            className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-base font-semibold text-primary underline-offset-4 hover:underline sm:min-h-[24px] lg:text-sm"
          >
            {fr ? 'Voir le déroulé en détail' : 'See the process in detail'}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <PortfolioShowcaseSection contexte="sites" />

      {/* Les quatre avis parlent tous de sites web : ici, ils sont chez eux. */}
      <TestimonialsSection />

      {/* ─────────── Le lien avec les vidéos ───────────
          Le site offert au troisième mois est l'argument le plus fort de
          l'offre réseaux (`CLAUDE.md`, 21 septembre 2026). Il se lit aussi
          dans l'autre sens : quelqu'un qui vient pour un site doit savoir
          qu'il peut l'avoir compris. */}
      <section className="px-4 py-20 sm:px-6 sm:py-32" aria-labelledby="sites-combo-heading">
        <div className="mx-auto max-w-3xl lg:text-center">
          <motion.h2 {...apparition} id="sites-combo-heading" className="section-title">
            <span className="text-foreground">{fr ? 'Un site a besoin de visites. ' : 'A site needs visitors. '}</span>
            <span className="block text-primary lg:inline">
              {fr ? 'Les vidéos, je les fais aussi.' : 'I make the videos too.'}
            </span>
          </motion.h2>
          <motion.p {...apparition} transition={{ delay: 0.1 }} className="section-lede mt-6 lg:mx-auto">
            {fr
              ? "Avec l'offre réseaux sociaux à 890 € par mois, un site d'une page est compris dès le troisième mois."
              : 'With the €890 a month social media offer, a one page site is included from the third month.'}
          </motion.p>
          <motion.div {...apparition} transition={{ delay: 0.15 }} className="mt-8">
            <Link
              to="/reseaux-sociaux"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-foreground px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {fr ? "Voir l'offre réseaux sociaux" : 'See the social media offer'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FaqSection
        id="sites-faq-heading"
        className="border-t border-border/50 px-4 py-20 sm:px-6 sm:py-28"
        items={faq}
        titre={
          <>
            <span className="text-foreground">{fr ? 'Les questions ' : 'The questions '}</span>
            <span className="text-primary">{fr ? "qu'on me pose." : 'people ask me.'}</span>
          </>
        }
      />

      {/* Les pages de villes, nommées dans une phrase. C'est leur page pilier :
          elle doit pouvoir mener à chacune des six que le pied de page nomme. */}
      <section className="border-t border-border/50 px-4 py-12 sm:px-6 sm:py-16" aria-labelledby="sites-zones">
        <div className="mx-auto max-w-4xl">
          <h2 id="sites-zones" className="text-xl font-semibold text-foreground">
            {fr ? 'Où je travaille.' : 'Where I work.'}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            {fr ? 'Basé à ' : 'Based in '}
            <Lieu to="/creation-site-web-albertville">Albertville</Lieu>
            {fr ? ', je fais des sites pour des entreprises de ' : ', I build sites for businesses in '}
            <Lieu to="/creation-site-web-chambery">Chambéry</Lieu>,{' '}
            <Lieu to="/web-designer-annecy">Annecy</Lieu>
            {fr ? ' et ' : ' and '}
            <Lieu to="/creation-site-web-aix-les-bains">Aix-les-Bains</Lieu>
            {fr ? ', et plus largement de ' : ', and more widely across '}
            <Lieu to="/web-designer-savoie">Savoie</Lieu>
            {fr ? ' et de ' : ' and '}
            <Lieu to="/creation-site-web-haute-savoie">Haute-Savoie</Lieu>
            {fr ? '. À distance, partout en France.' : '. Remotely, anywhere in France.'}
          </p>
        </div>
      </section>

      <ContactMethodsSection />
    </>
  );
};

export default SitesWeb;
