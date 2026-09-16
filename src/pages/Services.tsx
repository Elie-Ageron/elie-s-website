import { motion } from 'framer-motion';
import { ArrowRight, Check, Handshake, Sparkles, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import MagneticButton from '@/components/animations/MagneticButton';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import FaqSection from '@/components/FaqSection';
import InternalLinks from '@/components/InternalLinks';
import ScrollArrow from '@/components/ScrollArrow';
import SEO from '@/components/SEO';
import ServiceMockup from '@/components/ServiceMockups';
import ServiceHeroMorph from '@/components/ServiceHeroMorph';
import { services, type ServiceItem } from '@/data/services';

/* One full-width, alternating section per service. */
const ServiceSection = ({ service, index }: { service: ServiceItem; index: number }) => {
  const { language } = useLanguage();
  const reversed = index % 2 === 1;
  const num = String(index + 1).padStart(2, '0');

  const visual = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center pt-2 pb-8 sm:py-10 px-6"
    >
      {/* Soft glow for depth, no surrounding box */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-[90px]" aria-hidden="true" />
      <div className="relative z-10">
        <ServiceMockup id={service.id} />
      </div>
    </motion.div>
  );

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
      className="flex flex-col justify-center"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-heading text-sm font-bold text-primary">{num}</span>
        <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {service.kicker[language]}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-[1.1] mb-4">
        {service.title[language]}
      </h2>

      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 max-w-xl">
        {service.desc[language]}
      </p>

      <ul className="space-y-3.5">
        {service.bullets[language].map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-base text-foreground">
            <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/12 flex-shrink-0">
              <Check className="w-3 h-3 text-primary" aria-hidden="true" />
            </span>
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-5">
        {service.soon ? (
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/70 text-sm font-medium text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            {language === 'fr' ? 'Bientôt disponible' : 'Coming soon'}
          </span>
        ) : service.to ? (
          <Link
            to={service.to}
            className="inline-flex items-center gap-2 min-h-[24px] text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            {service.ctaLabel
              ? service.ctaLabel[language]
              : language === 'fr'
              ? 'En savoir plus'
              : 'Learn more'}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 min-h-[24px] text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            {language === 'fr' ? 'En parler' : "Let's talk about it"}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </motion.div>
  );

  return (
    <section
      id={service.anchor}
      className={`scroll-mt-28 py-16 sm:py-24 ${index % 2 === 1 ? 'bg-secondary/30' : ''}`}
      aria-labelledby={`${service.anchor}-title`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Content first in the DOM so mobile shows the heading, then its mockup right below */}
          <div className={reversed ? 'lg:order-2' : ''} id={`${service.anchor}-title`}>
            {content}
          </div>
          <div className={reversed ? 'lg:order-1' : ''}>{visual}</div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { language } = useLanguage();

  const whyPartner = [
    {
      icon: Handshake,
      title: { fr: 'Un seul interlocuteur', en: 'One point of contact' },
      desc: {
        fr: "Fini de jongler entre un graphiste, une agence SEO et un community manager. Tout passe par moi.",
        en: 'No more juggling a designer, an SEO agency and a community manager. Everything goes through me.',
      },
    },
    {
      icon: Sparkles,
      title: { fr: 'Une image cohérente', en: 'A coherent image' },
      desc: {
        fr: "Site, réseaux, photos, Google : tout parle d'une seule voix, avec la même identité du premier au dernier détail.",
        en: 'Site, socials, photos, Google: everything speaks with one voice, the same identity from first to last detail.',
      },
    },
    {
      icon: Clock,
      title: { fr: 'Vous gagnez du temps', en: 'You save time' },
      desc: {
        fr: "Vous restez concentré sur votre métier. Je m'occupe de toute votre présence en ligne, mois après mois.",
        en: 'You stay focused on your craft. I handle your entire online presence, month after month.',
      },
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: language === 'fr' ? 'Partenaire Web - Elie Ageron' : 'Web Partner - Elie Ageron',
    description: language === 'fr'
      ? "Partenaire web complet en Savoie et Haute-Savoie : sites web, Google Business, réseaux sociaux, identité de marque, référencement local, avis clients et rédaction de contenu."
      : 'All-in-one web partner in Savoie & Haute-Savoie: websites, Google Business, social media, brand identity, local SEO, reviews and content writing.',
    url: 'https://elieageron.com/services',
    provider: { '@type': 'Person', name: 'Elie Ageron', url: 'https://elieageron.com' },
    areaServed: 'FR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Services Partenaire Web' : 'Web Partner Services',
      itemListElement: services
        .filter((s) => !s.soon)
        .map((s) => ({
          '@type': 'Offer',
          name: s.title[language],
          description: s.short[language],
        })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://elieageron.com/services' },
    ],
  };

  /**
   * Objections reelles, posees juste avant le dernier appel a l'action.
   *
   * Double effet : elles repondent a ce qui bloque au moment de decider, et
   * elles font exister la page sur des recherches formulees en question, que
   * la page ne captait pas du tout jusqu'ici.
   */
  const faq = [
    {
      q: 'Combien coûte un site avec vous ?',
      a: "Tout est chiffré sur devis, après un appel gratuit, parce que les écarts entre deux projets sont trop importants pour qu'un chiffre isolé ait un sens. En revanche je n'ai rien à cacher sur la méthode : j'ai écrit un article entier qui donne les ordres de grandeur du marché et ce qui fait varier le prix.",
    },
    {
      q: 'Combien de temps avant que mon site soit en ligne ?',
      a: "Trois à huit semaines entre le premier échange et la mise en ligne. La production, elle, prend 7 à 14 jours ouvrés : le reste du délai, c'est le temps qu'il vous faut pour fournir vos textes et vos photos. Une page unique sort en quelques jours quand le contenu existe déjà.",
    },
    {
      q: 'À qui appartient le site une fois livré ?',
      a: "À vous, entièrement. Le nom de domaine est enregistré à votre nom dès le départ, avec votre adresse email, et vous recevez tous les accès à la livraison. Si vous décidez un jour de travailler avec quelqu'un d'autre, vous partez avec votre site, votre adresse et vos emails.",
    },
    {
      q: 'Faut-il s\'engager sur une durée ?',
      a: "Non pour la création d'un site, qui est une prestation ponctuelle. Pour l'accompagnement dans la durée et la production de contenu, on cale ensemble un rythme, et ce qui est fait chaque mois est écrit noir sur blanc plutôt que laissé au flou.",
    },
    {
      q: 'Vous vous déplacez où ?',
      a: "Je suis basé à Albertville, en Savoie. Je me déplace dans toute la Savoie, en Haute-Savoie et dans le bassin annécien pour les rendez-vous de cadrage et les tournages. Le reste du travail se gère très bien à distance, y compris plus loin en France.",
    },
    {
      q: 'Est-ce que vous faites de la publicité Google ou Meta ?',
      a: "Non, et je préfère le dire. Ce n'est pas mon métier, et je n'improvise pas sur un budget qui n'est pas le mien. Je travaille sur ce qui reste quand on arrête de payer : le site, le contenu, la fiche Google, les avis. Quand un client a réellement besoin de publicité, j'oriente vers quelqu'un dont c'est le métier.",
    },
    {
      q: 'Vous garantissez la première place sur Google ?',
      a: "Personne ne peut le garantir, ni moi ni personne, parce que personne ne contrôle le classement de Google. Ce que je peux faire, c'est le travail qui produit ce résultat, vous dire des délais honnêtes, et mesurer ce qui compte réellement : le nombre de demandes que vous recevez.",
    },
    {
      q: 'Et si je ne sais pas encore ce dont j\'ai besoin ?',
      a: "C'est le cas le plus fréquent, et c'est exactement à ça que sert l'appel gratuit de trente minutes. Il m'arrive régulièrement de conclure que la priorité est ailleurs, ou qu'il vaut mieux commencer par ce qui ne coûte rien. Je le dis quand c'est le cas.",
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <SEO
        page="services"
        structuredData={
          language === 'fr'
            ? [serviceSchema, breadcrumbSchema, faqSchema]
            : [serviceSchema, breadcrumbSchema]
        }
      />

      {/* Hero */}
      <section className="relative grain min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="services-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-primary/8 rounded-full blur-[110px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 -mt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* 🔴 Le point portait `animate-pulse` et la pastille `glass-card`.
                Elie a banni les deux : « pas de badge qui pulse », et le verre
                depoli decoratif fait partie de ce qu'il appelle
                « vraiment intelligence artificielle ». Un point qui clignote en
                boucle sous un titre attire l'oeil sans rien annoncer, et il ne
                s'arrete jamais. La pastille prend le meme fond que celles du
                reste du site. */}
            <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {language === 'fr' ? 'Votre partenaire web tout-en-un' : 'Your all-in-one web partner'}
            </span>
            <h1 id="services-hero-heading" className="hero-title mb-6">
              {/* ⚠️ Disait « Tout votre digital, gere par une seule personne. »
                  Elie : « ca fait un peu chelou, je ferais pas confiance. Dans
                  ce titre on veut dire toute votre presence en ligne geree au
                  meme endroit. » « Une seule personne » se voulait rassurant et
                  inquietait : un lecteur y lit qu'une personne seule ne peut pas
                  tout faire. Ce qui rassure vraiment, c'est de n'avoir qu'un
                  endroit, pas d'avoir affaire a un individu. */}
              <span className="text-foreground">
                {language === 'fr' ? 'Toute votre présence en ligne,' : 'Your whole online presence,'}
              </span>
              <br />
              <span className="text-primary">{language === 'fr' ? 'au même endroit.' : 'in one place.'}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === 'fr'
                ? "Un site web qui vous ramène des clients, des vidéos qui tournent sur vos réseaux, une fiche Google qui remonte. Au lieu d'un site livré puis oublié, je m'occupe de votre présence en ligne mois après mois. Pour des artisans, des commerçants, des thérapeutes et des formateurs de Savoie et de Haute-Savoie."
                : 'A website that brings you clients, videos running on your social accounts, a Google profile that climbs. Instead of a site delivered and forgotten, I look after your online presence month after month. For tradespeople, shopkeepers, therapists and trainers across Savoie and Haute-Savoie.'}
            </p>

            {/* Service pills, preview the breadth */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.anchor}`}
                  className="px-3.5 py-1.5 rounded-full bg-card/70 border border-border/70 text-xs sm:text-sm text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors backdrop-blur-sm"
                >
                  {s.title[language]}
                </a>
              ))}
            </div>

            {/* L'audit gratuit passe devant : deux champs valent mieux qu'un brief
                en quatre etapes pour quelqu'un qui decouvre la page. Le brief
                reste accessible juste a cote, pour qui sait deja ce qu'il veut. */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <MagneticButton>
                <Button variant="hero" size="lg" className="group" asChild>
                  <Link to="/audit-gratuit" className="flex items-center gap-2">
                    {language === 'fr' ? 'Recevoir mon audit gratuit' : 'Get my free audit'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </Button>
              </MagneticButton>
              <Link
                to="/get-started"
                className="inline-flex min-h-[44px] items-center text-sm text-muted-foreground underline-offset-[6px] transition-colors hover:text-foreground hover:underline sm:text-base"
              >
                {language === 'fr' ? 'Décrire mon projet' : 'Describe my project'}
              </Link>
            </div>
          </motion.div>
          <ScrollArrow />
        </div>
      </section>

      {/* Morph showcase, a forgotten site is rebuilt, live, as you scroll */}
      <ServiceHeroMorph />

      {/* Services intro */}
      <section className="py-20 sm:py-32" aria-labelledby="services-intro-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
          >
            <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
            {language === 'fr' ? 'Ce que je fais' : 'What I do'}
          </motion.span>

          <motion.h2
            id="services-intro-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
          >
            {language === 'fr' ? 'Mes services' : 'My services'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            {language === 'fr'
              ? "Deux gros morceaux : votre site web et vos réseaux sociaux. Autour, tout ce qui les rend efficaces, de votre fiche Google au référencement. Réuni au même endroit, géré par une seule personne."
              : 'Two big pieces: your website and your social media. Around them, everything that makes them work, from your Google profile to SEO. All in one place, handled by one person.'}
          </motion.p>
        </div>
      </section>

      {/* Per-service sections */}
      <div>
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Why a partner */}
      <section className="py-20 sm:py-32" aria-labelledby="why-partner-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="why-partner-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-12 max-w-2xl sm:mb-16"
          >
            {/* ⚠️ Ce titre a d'abord ete « Un seul prestataire, pas cinq. »
                C'est la cadence « affirmation, courte negation », le tic
                d'ecriture le plus reconnaissable d'un texte genere. Employee
                une fois c'est une voix, employee a chaque section c'est une
                signature. Le titre dit maintenant la meme chose sans se
                retourner contre lui-meme. */}
            {language === 'fr' ? "Vous n'avez " : 'You only have '}
            <span className="text-primary">
              {language === 'fr' ? "qu'un numéro à appeler." : 'one number to call.'}
            </span>
          </motion.h2>

          {/* Trois colonnes editoriales. C'etaient trois cartes de verre
              centrees avec une pastille d'icone : le meme bloc que sur toutes
              les pages du web, et une case de plus dans une page qui en avait
              deja trop. */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {whyPartner.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t-2 border-foreground pt-6"
                >
                  <Icon className="mb-4 h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">{item.title[language]}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted-foreground">{item.desc[language]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objections, juste avant la fin de page.
          ⚠️ C'etait une liste `dl` entierement depliee. Voir la note de
          `FaqSection` : la presentation de la FAQ est la meme sur les quatre
          pages qui en portent une, seules les questions changent. */}
      {language === 'fr' && (
        <FaqSection
          id="services-faq"
          className="border-t border-border px-4 py-16 sm:px-6 sm:py-24"
          items={faq.map((item) => ({ question: item.q, answer: item.a }))}
          titre={
            <>
              <span className="text-foreground">Les questions qu&rsquo;on me pose </span>
              <span className="text-primary">avant de se décider.</span>
            </>
          }
          lede={
            <>
              Une question qui n&rsquo;est pas là ?{' '}
              <Link to="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
                Posez-la moi
              </Link>
              , ou appelez le{' '}
              <a
                href="tel:+33695555318"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                06 95 55 53 18
              </a>
              .
            </>
          }
        />
      )}

      {/* ⚠️ `ServiceResources` a ete retire ici aussi. Voir la note dans
          `SocialMedia.tsx` : un bloc de liens bruts vers le blog en fin de
          page n'apporte rien au visiteur et brouille la sortie. */}

      <InternalLinks currentPage="services" />

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default Services;
