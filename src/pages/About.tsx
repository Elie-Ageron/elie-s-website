import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { guides } from '@/data/guides';

const baseUrl = 'https://elieageron.com';

/**
 * Page A propos. Signal E-E-A-T principal du site : elle rattache tous les
 * articles signes a une personne reelle, situee, joignable, dont on peut
 * verifier ce qu'elle fait et ce qu'elle ne fait pas.
 */
const About = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  // L'entite Person est definie une seule fois, dans JsonLd.tsx (@id #person).
  // Ici on ne fait que l'enrichir des proprietes propres a cette page, pour
  // eviter deux definitions concurrentes de la meme personne.
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    jobTitle: fr ? 'Web designer et partenaire web' : 'Web designer and web partner',
    worksFor: { '@id': `${baseUrl}/#organization` },
    knowsLanguage: ['fr', 'en'],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Savoie' },
      { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
      { '@type': 'Country', name: 'France' },
    ],
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/a-propos#profilepage`,
    url: `${baseUrl}/a-propos`,
    name: fr ? 'À propos de Elie Ageron' : 'About Elie Ageron',
    inLanguage: fr ? 'fr-FR' : 'en-US',
    isPartOf: { '@id': `${baseUrl}/#website` },
    mainEntity: { '@id': `${baseUrl}/#person` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: fr ? 'Accueil' : 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: fr ? 'À propos' : 'About', item: `${baseUrl}/a-propos` },
    ],
  };

  const sections = fr
    ? [
        {
          title: 'Ce que je fais, concrètement',
          body: [
            "Deux choses, de poids égal. Je construis des sites pour des entreprises qui n'ont pas de service communication, et je produis le contenu vidéo de leurs réseaux sociaux. Pour ce second point, je viens filmer une demi-journée par mois sur place, puis je monte, je sous-titre, j'écris et je publie deux à trois vidéos par semaine. Le client ne touche à rien.",
            "Autour de ces deux piliers, je m'occupe de ce qui les rend utiles : la fiche Google Business, la collecte et les réponses aux avis, le référencement local, les textes, et l'identité de marque quand il en faut une.",
          ],
        },
        {
          title: 'Avec qui je travaille',
          body: [
            "Des TPE, des artisans, des thérapeutes, des formateurs et des PME locales. Des structures où la personne qui décide est aussi celle qui fait le travail, et qui n'a donc pas trois heures par semaine à consacrer à sa communication.",
            "Je travaille avec un petit nombre de clients à la fois. Ce n'est pas une posture commerciale : filmer sur place une demi-journée par mois et suivre les résultats prend du temps, et au delà d'un certain nombre la qualité tombe.",
          ],
        },
        {
          title: 'Ce que je ne fais pas',
          body: [
            "La publicité Google et Meta. Je ne la maîtrise pas assez pour facturer un budget publicitaire à quelqu'un, donc je ne la propose pas. Si c'est ce qu'il vous faut, je vous le dirai et je ne vous vendrai pas autre chose à la place.",
            "La photo et la vidéo professionnelle au sens production. Je filme au format vertical pour les réseaux, ce qui est un métier différent d'un tournage d'entreprise avec équipe et éclairage.",
            "Et je ne promets jamais un nombre de clients, d'abonnés ou de vues. Personne ne peut le promettre. Ce que je peux garantir, c'est un volume de production et une régularité.",
          ],
        },
        {
          title: 'Pourquoi Albertville',
          body: [
            "J'ai quitté la Haute-Savoie pour la vallée d'Albertville, et ça change concrètement ma façon de travailler. Depuis ici, la Tarentaise, le Beaufortain et la combe de Savoie sont à moins de trente minutes, Chambéry, Aix-les-Bains et la Maurienne à moins d'une heure, Annecy à quarante-cinq minutes.",
            "Ça veut dire que je peux venir voir un atelier, filmer un chantier et repartir le jour même. C'est la principale différence entre moi et un prestataire à distance, et c'est aussi ce qui rend possible le format de tournage mensuel.",
          ],
        },
        {
          title: 'Comment je travaille',
          body: [
            "Le premier rendez-vous est gratuit et il n'engage à rien, y compris quand je conclus que vous n'avez pas besoin de moi. Ça arrive régulièrement : il m'est souvent plus utile de dire à quelqu'un que sa fiche Google mal remplie lui coûte plus cher que l'absence de site.",
            "Le devis arrive sous 48 heures et il est ferme. Les prix ne sont pas affichés sur le site parce que les écarts entre deux projets sont trop importants pour qu'un chiffre isolé veuille dire quelque chose, mais j'explique toujours comment je chiffre.",
            "Après la mise en ligne, je reste. Un site livré et laissé seul se dégrade en dix-huit mois. C'est la raison pour laquelle je parle de partenariat plutôt que de prestation.",
          ],
        },
        {
          title: 'Ce que j\'écris ici',
          body: [
            "Tout ce que vous lisez sur ce blog vient de ce que je vois chez mes clients. Quand je ne sais pas, je le dis. Quand un chiffre circule sans source vérifiable, je ne le reprends pas.",
            "Un seul chiffre revient régulièrement dans mes pages : 56 619 vues et 196 abonnés obtenus par une cliente formatrice dès sa toute première publication, un Reel Facebook d'août 2026. Il est exact et vérifié dans son tableau de bord. Je l'accompagne systématiquement de la même précision : c'est un exemple, pas une moyenne et pas une promesse. La plupart des premières publications font quelques centaines de vues, et c'est un démarrage parfaitement sain.",
          ],
        },
      ]
    : [
        {
          title: 'What I actually do',
          body: [
            'Two things, equally weighted. I build websites for businesses with no communications team, and I produce the video content for their social media. For the second, I come and film on site for half a day each month, then edit, subtitle, write and publish two to three videos a week. The client touches nothing.',
            'Around those two pillars I handle what makes them work: the Google Business Profile, review collection and replies, local SEO, copy, and brand identity when one is needed.',
          ],
        },
        {
          title: 'Who I work with',
          body: [
            'Small businesses, tradespeople, therapists, trainers and local companies. Places where the person who decides is also the person doing the work, and therefore has no three hours a week to spend on communication.',
            'I work with a small number of clients at a time. That is not a sales posture: filming on site every month and tracking results takes time, and past a certain number the quality drops.',
          ],
        },
        {
          title: 'What I do not do',
          body: [
            'Google and Meta advertising. I do not know it well enough to charge someone for an ad budget, so I do not offer it. If that is what you need, I will say so rather than sell you something else.',
            'Professional photo and video production. I film vertical content for social media, which is a different job from a corporate shoot with a crew and lighting.',
            'And I never promise a number of clients, followers or views. Nobody can. What I can commit to is a volume of production and a rhythm.',
          ],
        },
        {
          title: 'Why Albertville',
          body: [
            'I left Haute-Savoie for the Albertville valley, and it changes how I work. From here, the Tarentaise, the Beaufortain and the Combe de Savoie are under thirty minutes away, Chambéry, Aix-les-Bains and the Maurienne under an hour, Annecy forty-five minutes.',
            'It means I can visit a workshop, film a job site and be back the same day. That is the main difference between me and a remote supplier, and it is what makes the monthly filming format possible.',
          ],
        },
        {
          title: 'How I work',
          body: [
            'The first meeting is free and commits you to nothing, including when I conclude you do not need me. That happens regularly: it is often more useful to tell someone their half-filled Google profile costs them more than the missing website.',
            'The quote arrives within 48 hours and it is firm. Prices are not displayed on the site because the gap between two projects is too wide for a single figure to mean anything, but I always explain how I price.',
            'After launch, I stay. A site delivered and left alone degrades within eighteen months. That is why I talk about a partnership rather than a one-off job.',
          ],
        },
        {
          title: 'What I write here',
          body: [
            'Everything on this blog comes from what I see with clients. When I do not know, I say so. When a figure circulates without a verifiable source, I do not repeat it.',
            'One figure comes up regularly across these pages: 56,619 views and 196 followers earned by a trainer client on her very first post, a Facebook Reel from August 2026. It is accurate and verified in her dashboard. I always attach the same caveat: it is an example, not an average and not a promise. Most first posts get a few hundred views, and that is a perfectly healthy start.',
          ],
        },
      ];

  return (
    <>
      <SEO page="about" structuredData={[personSchema, profilePageSchema, breadcrumbSchema]} />

      <section className="relative grain pt-10 sm:pt-16 pb-10 sm:pb-14" aria-labelledby="about-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-10 right-[12%] w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Albertville, Savoie
            </span>
            <h1 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-balance">
              {fr ? 'Elie Ageron, ' : 'Elie Ageron, '}
              <span className="text-primary">
                {fr ? 'partenaire web en Savoie.' : 'web partner in Savoie.'}
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {fr
                ? "Je construis des sites pour des entreprises locales et je m'occupe de leurs réseaux sociaux. Une demi-journée de tournage par mois chez elles, et deux à trois publications par semaine ensuite, sans qu'elles aient à filmer ou monter quoi que ce soit."
                : 'I build websites for local businesses and run their social media. Half a day of filming on site each month, then two to three posts a week, without them having to film or edit anything.'}
            </p>
          </motion.header>
        </div>
      </section>

      <section className="pb-6" aria-labelledby="about-sections">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="about-sections" className="sr-only">
            {fr ? 'Mon travail en détail' : 'My work in detail'}
          </h2>
          <div className="border-t border-border/60">
            {sections.map((section, i) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4 }}
                className="py-9 sm:py-11 border-b border-border/60"
                aria-labelledby={`about-section-${i}`}
              >
                <span className="text-xs font-mono text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                <h3
                  id={`about-section-${i}`}
                  className="mt-1 text-xl sm:text-2xl font-medium leading-snug text-balance"
                >
                  {section.title}
                </h3>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-base text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      {/* Guides, preuve d'expertise accessible sans rendez-vous */}
      <section className="py-12 sm:py-16" aria-labelledby="about-guides">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="about-guides" className="text-lg sm:text-xl font-semibold text-foreground mb-2">
            {fr ? 'Ce que je sais, en accès libre' : 'What I know, freely available'}
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            {fr
              ? "Ces guides contiennent la méthode complète. Vous pouvez tout appliquer sans jamais me contacter."
              : 'These guides contain the full method. You can apply all of it without ever contacting me.'}
          </p>
          <ul className="border-y border-border/60 divide-y divide-border/60">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  to={`/guides/${guide.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-4 hover:text-primary transition-colors"
                >
                  <span className="font-medium">{guide.title}</span>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 text-primary/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TestimonialsSection />

      {/* Coordonnees en texte brut, coherentes avec la fiche Google */}
      <section className="py-12 sm:py-16 border-t border-border/60" aria-labelledby="about-contact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="about-contact" className="text-lg sm:text-xl font-semibold text-foreground mb-5">
            {fr ? 'Me joindre' : 'Get in touch'}
          </h2>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <a
                href="mailto:elie@elieageron.com"
                className="min-h-[24px] inline-flex items-center hover:text-primary underline-offset-4 hover:underline"
              >
                elie@elieageron.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <a
                href="tel:+33695555318"
                className="min-h-[24px] inline-flex items-center hover:text-primary underline-offset-4 hover:underline"
              >
                06 95 55 53 18
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span>Albertville, Savoie (73)</span>
            </li>
          </ul>
        </div>
      </section>

      <ContactMethodsSection />
    </>
  );
};

export default About;
