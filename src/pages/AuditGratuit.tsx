import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Instagram, Monitor, Search, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import AuditForm from '@/components/AuditForm';
import InternalLinks from '@/components/InternalLinks';
import ScrollReveal from '@/components/animations/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * L'audit gratuit : l'aimant du funnel, enfin branche sur le site.
 *
 * Il existait deja sur le papier (15-CLIENTS/_MOI/03-funnel.md et
 * 05-pieces-du-funnel.md) mais le formulaire avait ete retire avec la page de
 * segment `/lieux-de-reception`. Les demandes passaient donc par /contact, qui
 * demande un message libre : beaucoup trop de friction pour une chose gratuite.
 *
 * Les trois interdits de l'audit, repris de la fiche et affiches en clair sur
 * la page parce qu'ils sont l'argument : ne rien vendre, ne jamais denigrer,
 * ne jamais depasser 5 minutes.
 *
 * Mise en page : claire et aeree. Un seul accent, le rose de la marque.
 * Une version en bandes sombres avec un accent jaune a ete essayee puis
 * retiree : ni le noir ni le jaune n'appartiennent a cette marque.
 */

/* ── Ce que je regarde ── */
const useChecks = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  return [
    {
      icon: MapPin,
      num: '01',
      title: fr ? 'Votre fiche Google' : 'Your Google listing',
      desc: fr
        ? "Les photos, la catégorie principale, la description, les horaires, le lien vers votre site, et surtout les avis : combien vous en avez, et si vous y répondez. C'est le premier endroit où on vous voit, souvent avant votre site."
        : 'Photos, main category, description, opening hours, the link to your site, and above all the reviews: how many you have, and whether you answer them. It is the first place people see you, often before your site.',
    },
    {
      icon: Instagram,
      num: '02',
      title: fr ? 'Vos réseaux sociaux' : 'Your social accounts',
      desc: fr
        ? "La date de votre dernière publication. Votre bio, lisible ou pas en trois secondes. Le lien. Les épinglés. Un compte laissé en plan ne dit pas rien du tout, il dit quelque chose, et ce quelque chose est faux."
        : 'The date of your last post. Your bio, readable in three seconds or not. The link. The pinned posts. An abandoned account does not say nothing, it says something, and that something is wrong.',
    },
    {
      icon: Monitor,
      num: '03',
      title: fr ? 'Votre site' : 'Your website',
      desc: fr
        ? "Combien de clics pour vous joindre. Ce qu'on comprend en cinq secondes. Ce que ça donne sur un téléphone, parce que c'est là que les trois quarts de vos visiteurs arrivent. Et le temps de chargement."
        : 'How many clicks to reach you. What a visitor understands in five seconds. What it looks like on a phone, because that is where three quarters of your visitors land. And the loading time.',
    },
    {
      icon: Search,
      num: '04',
      title: fr ? 'Ce que Google affiche' : 'What Google shows',
      desc: fr
        ? "Je tape votre métier plus votre commune, comme le ferait un client. Je regarde où vous sortez, qui sort devant vous, et ce que ces gens-là font que vous ne faites pas."
        : 'I type your trade plus your town, the way a customer would. I look at where you come out, who comes out ahead of you, and what those people do that you do not.',
    },
  ];
};

/* ── La trame de la vidéo, presentee comme un chapitrage ── */
const useChapters = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  return [
    { t: '0:00', label: fr ? "Qui je suis, et pourquoi j'ai fait ça" : 'Who I am, and why I did this' },
    { t: '0:15', label: fr ? 'Ce qui marche déjà chez vous' : 'What already works for you' },
    { t: '1:00', label: fr ? "Le premier endroit où vous perdez des demandes" : 'The first place you lose enquiries' },
    { t: '2:00', label: fr ? 'Le deuxième' : 'The second one' },
    { t: '3:00', label: fr ? 'Le troisième' : 'The third one' },
    { t: '3:30', label: fr ? "Si vous n'en corrigez qu'un, corrigez celui-là" : 'If you fix only one, fix this one' },
  ];
};

/* ── Les trois interdits ── */
const useNots = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  return [
    {
      title: fr ? 'Je ne vends rien dedans' : 'I do not sell anything in it',
      desc: fr
        ? "Pas un prix, pas une offre, pas un « si vous voulez aller plus loin ». La vidéo est à vous, vous en faites ce que vous voulez, y compris la donner à quelqu'un d'autre pour qu'il le fasse."
        : 'No price, no offer, no "if you want to go further". The video is yours, do what you like with it, including handing it to someone else to carry out.',
    },
    {
      title: fr ? 'Je ne critique pas votre travail' : 'I do not criticise your work',
      desc: fr
        ? "Je parle du parcours de votre visiteur, jamais de ce que vous avez fait. « Voilà où les gens décrochent » ouvre une porte. « Votre site est mauvais » la ferme, et je n'apprends rien à personne."
        : 'I talk about your visitor journey, never about what you built. "Here is where people drop off" opens a door. "Your site is bad" closes it and teaches nobody anything.',
    },
    {
      // ⚠️ Cet interdit disait « Je ne vous rappelle pas ». Le formulaire
      // demande maintenant un numero et Elie appelle pour livrer la video :
      // la promesse serait devenue fausse, et une promesse fausse sur la page
      // qui vend l'honnetete coute plus cher que tout. Ce qui reste vrai, et
      // qui rassure autant, c'est l'absence de relance.
      title: fr ? 'Je ne relance pas' : 'I do not chase you',
      desc: fr
        ? "Je vous appelle une fois, pour vous dire que la vidéo est prête et vous l'envoyer. Après ça, si vous ne me dites rien, vous n'entendez plus parler de moi. Pas de deuxième appel, pas de séquence d'emails."
        : 'I call you once, to tell you the video is ready and send it over. After that, if you say nothing, you never hear from me again. No second call, no email sequence.',
    },
  ];
};

/* ── FAQ ── */
const useFaq = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  return fr
    ? [
        {
          q: "C'est vraiment gratuit ? Où est le piège ?",
          a: "Il n'y en a pas. Un audit me prend trente à quarante-cinq minutes, et je le fais parce que c'est la façon la moins pénible de rencontrer des gens : je regarde leur entreprise avant de leur parler, au lieu de leur téléphoner à froid. Si ça vous parle, vous me recontactez. Si ça ne vous parle pas, j'aurai passé quarante-cinq minutes à apprendre un métier de plus.",
        },
        {
          q: 'Combien de temps avant de la recevoir ?',
          a: "48 heures ouvrées à partir de votre demande. Si je suis en tournage et que ça doit déborder, je vous préviens le jour même.",
        },
        {
          q: "Je n'ai pas de site, ça vaut quand même le coup ?",
          a: "Oui, et c'est même souvent le cas le plus utile. Sans site, tout se joue sur votre fiche Google et vos réseaux, et c'est exactement là que je regarde en premier. Vous saurez ce qui vous manque avant de dépenser un euro.",
        },
        {
          q: 'Vous allez vendre mon adresse ou m\'inscrire à une newsletter ?',
          a: "Non. Votre nom et votre contact servent à vous envoyer la vidéo, rien d'autre. Pas de liste, pas de revente, pas d'inscription automatique. Vous pouvez me demander de tout effacer quand vous voulez.",
        },
        {
          q: "Ça marche pour mon métier ?",
          a: "Je travaille surtout avec des artisans, des restaurateurs, des commerçants, des thérapeutes et des formateurs. Mais l'audit ne dépend pas du métier : je regarde votre fiche Google, vos réseaux et votre site, et ces trois choses se jugent de la même façon pour un plombier et pour une sophrologue. Si je trouve que vous n'avez rien à corriger, je vous le dirai aussi, et ça m'arrive.",
        },
        {
          q: 'Je suis loin, en dehors de la Savoie.',
          a: "Aucun problème pour l'audit, il se fait à distance. Si on travaille ensemble ensuite sur un site, la distance ne change rien non plus. C'est seulement pour la vidéo, où je me déplace filmer une journée par mois, que je reste sur la Savoie, la Haute-Savoie et le bassin annécien.",
        },
        {
          q: 'Et si je veux juste que vous fassiez les corrections ?',
          a: "Dites-le moi et on en parle vingt minutes. Je vous dis ce que je ferais, combien ça coûte, et vous décidez. Mais l'audit n'y oblige à rien : il est utile même si vous le donnez à quelqu'un d'autre.",
        },
      ]
    : [
        {
          q: 'Is it really free? What is the catch?',
          a: 'There is none. I take three clients at a time, so I have no interest in chasing everybody, only in the right people knowing I exist. An audit takes me thirty to forty-five minutes. If it speaks to you, you get back in touch. If it does not, I spent forty-five minutes learning another trade.',
        },
        {
          q: 'How long before I get it?',
          a: 'Two working days from your request. If I am out filming and it is going to run over, I tell you the same day.',
        },
        {
          q: 'I have no website. Is it still worth it?',
          a: 'Yes, and it is often the most useful case. Without a site, everything happens on your Google listing and your social accounts, which is exactly where I look first. You will know what you are missing before spending a euro.',
        },
        {
          q: 'Will you sell my address or add me to a newsletter?',
          a: 'No. Your name and contact are used to send you the video, nothing else. No list, no resale, no automatic signup. You can ask me to erase everything whenever you like.',
        },
        {
          q: 'Does it work for my line of work?',
          a: 'I mostly work with tradespeople, restaurant owners, shopkeepers, therapists and trainers. But the audit does not depend on the trade: I look at your Google listing, your social accounts and your website, and those three are judged the same way for a plumber and for a therapist. If I find nothing worth fixing, I will say so, and that does happen.',
        },
        {
          q: 'I am far away, outside Savoie.',
          a: 'No problem for the audit, it is done remotely. If we work on a website afterwards, distance changes nothing either. Only the video work, where I travel to film one day a month, stays within Savoie, Haute-Savoie and the Annecy area.',
        },
        {
          q: 'What if I just want you to fix the things you found?',
          a: 'Tell me and we talk it through for twenty minutes. I say what I would do, what it costs, and you decide. But the audit commits you to nothing: it is useful even if you hand it to someone else.',
        },
      ];
};

/* ── La maquette du lecteur, claire et sobre ── */
const AuditPlayerMockup = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_4px_hsl(var(--shadow-color)),0_24px_60px_hsl(var(--shadow-soft))]"
      aria-hidden="true"
    >
      {/* Barre de fenetre */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-muted" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted" />
        <span className="ml-3 truncate text-[11px] text-muted-foreground">
          {fr ? 'audit-boulangerie-martin.mp4' : 'audit-martin-bakery.mp4'}
        </span>
      </div>

      {/* Ecran : le site du prospect, en filaire */}
      <div className="relative aspect-video bg-secondary p-5">
        <div className="h-full rounded-lg border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
            <span className="ml-2 h-3 flex-1 rounded-full bg-secondary" />
          </div>
          <div className="space-y-2.5">
            <div className="h-3.5 w-2/5 rounded bg-muted" />
            <div className="h-2 w-3/5 rounded bg-secondary" />
            <div className="mt-4 flex gap-2">
              <div className="h-14 flex-1 rounded bg-secondary" />
              <div className="h-14 flex-1 rounded bg-secondary" />
              <div className="h-14 flex-1 rounded bg-secondary" />
            </div>
          </div>
        </div>

        {/* Les deux annotations, le seul endroit colore de la maquette */}
        <div className="absolute right-7 top-1/2 -rotate-2">
          <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground shadow-md">
            {fr ? 'dernier post : mars' : 'last post: March'}
          </span>
        </div>
        <div className="absolute bottom-12 left-9 rotate-1">
          <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground shadow-md">
            {fr ? '3 clics pour vous joindre' : '3 clicks to reach you'}
          </span>
        </div>

        {/* Bulle camera */}
        <div className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-sm">
          <Play className="h-4 w-4 text-primary" fill="currentColor" />
        </div>
      </div>

      {/* Barre de lecture */}
      <div className="flex items-center gap-3 px-4 py-3.5">
        <Play className="h-3.5 w-3.5 text-foreground" fill="currentColor" />
        <span className="text-[11px] tabular-nums text-muted-foreground">1:12</span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-1/4 rounded-full bg-primary" />
        </div>
        <span className="text-[11px] tabular-nums text-muted-foreground">4:03</span>
      </div>
    </div>
  );
};

const AuditGratuit = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const checks = useChecks();
  const chapters = useChapters();
  const nots = useNots();
  const faq = useFaq();

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://elieageron.com/audit-gratuit#service',
      name: fr ? 'Audit gratuit de présence en ligne' : 'Free online presence audit',
      serviceType: fr ? 'Audit de visibilité en ligne' : 'Online visibility audit',
      description: fr
        ? "Un enregistrement vidéo de 4 minutes qui passe en revue votre fiche Google, vos réseaux sociaux et votre site, livré sous 48 heures ouvrées. Gratuit et sans engagement."
        : 'A 4 minute video walkthrough of your Google listing, social accounts and website, delivered within 2 working days. Free and with no strings attached.',
      provider: { '@id': 'https://elieageron.com/#business' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Savoie' },
        { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
        { '@type': 'Country', name: 'France' },
      ],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://elieageron.com/audit-gratuit',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': 'https://elieageron.com/audit-gratuit#faq',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': 'https://elieageron.com/audit-gratuit#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: fr ? 'Accueil' : 'Home', item: 'https://elieageron.com/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: fr ? 'Audit gratuit' : 'Free audit',
          item: 'https://elieageron.com/audit-gratuit',
        },
      ],
    },
  ];

  return (
    <>
      <SEO page="audit" structuredData={structuredData} />

      {/* ═══ 1. HERO, bande encre ═══ */}
      <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 sm:pb-28 sm:pt-20">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/[0.06] blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            {/* Seule surcharge autorisee sur `hero-title` : la taille. Ce hero
                partage sa largeur avec le formulaire, donc il ne peut pas
                monter a 72 px comme celui de l'accueil. La graisse, elle, reste
                celle de la classe : c'est tout l'interet de la centraliser. */}
            <h1 className="hero-title" style={{ fontSize: 'clamp(1.6rem, 6.5vw, 3.4rem)' }}>
              {/* ⚠️ Aligne sur le bloc du milieu de l'accueil. Ce h1 disait
                  « et je vous envoie 4 minutes de video » : la duree decrit le
                  contenant, pas ce qu'on y trouve. Les deux endroits qui
                  vendent l'audit doivent dire la meme chose, sinon le visiteur
                  qui clique depuis l'accueil croit arriver ailleurs. */}
              {fr ? 'Recevez un audit complet de votre présence en ligne.' : 'Get a full audit of your online presence.'}
              <br />
              <span className="text-primary">
                {fr ? 'Gratuitement.' : 'For free.'}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {fr
                ? "Votre fiche Google, vos réseaux et votre site, passés en revue à l'écran avec votre nom prononcé. Les trois endroits où vous perdez des demandes sans le voir. Vous recevez la vidéo sous 48 heures, et vous en faites ce que vous voulez."
                : 'Your Google listing, your social accounts and your website, reviewed on screen with your name spoken out loud. The three places you lose enquiries without seeing it. You get the video within two working days and do what you like with it.'}
            </p>

            <div className="mt-10 max-w-md rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_hsl(var(--shadow-color)),0_12px_32px_hsl(var(--shadow-soft))] sm:p-8">
              <AuditForm tone="paper" source="hero" />
            </div>
          </div>

          <div className="lg:pl-4">
            <AuditPlayerMockup />
          </div>
        </div>
      </section>

      {/* ═══ 2. Les quatre faits, en une ligne ═══ */}
      <section className="border-y border-border px-4 py-6 sm:px-6">
        <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground sm:gap-x-14">
          <li>{fr ? '4 minutes de vidéo' : '4 minutes of video'}</li>
          <li>{fr ? 'Sous 48 heures' : 'Within 48 hours'}</li>
          <li>{fr ? 'Deux champs à remplir' : 'Two fields to fill'}</li>
          <li>{fr ? 'Aucune relance derrière' : 'No follow-up'}</li>
        </ul>
      </section>

      {/* ═══ 3. CE QUE JE REGARDE, bande papier ═══ */}
      <section className="px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal direction="up">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              {fr
                ? 'Quatre endroits, dans cet ordre, parce que c’est le chemin que prend un client.'
                : 'Four places, in this order, because that is the path a customer takes.'}
            </h2>
          </ScrollReveal>

          <div className="mt-14 space-y-12">
            {checks.map((check, i) => (
              <ScrollReveal key={check.num} direction="up" delay={i * 0.05}>
                <article className="flex gap-5 sm:gap-8">
                  <div className="shrink-0">
                    <span className="block font-heading text-3xl font-bold text-primary/25 sm:text-4xl">
                      {check.num}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2.5 text-xl font-semibold sm:text-2xl">
                      <check.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      {check.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">{check.desc}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. LA VIDEO, bande encre ═══ */}
      <section className="border-t border-border px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto grid max-w-5xl items-start gap-14 lg:grid-cols-2">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              {fr ? "J'enregistre mon écran en vous parlant, d'une traite." : 'I record my screen while talking to you, in one go.'}
            </h2>
            <p className="mt-5 text-muted-foreground">
              {fr
                ? "Un enregistrement d'écran où je navigue chez vous en parlant. Pas un PDF de vingt pages que personne n'ouvre, pas un score automatique sorti d'un outil. Quelqu'un qui a passé une demi-heure sur votre cas et qui vous dit ce qu'il a vu."
                : 'A screen recording where I navigate your pages while talking. Not a twenty page PDF nobody opens, not an automated score out of a tool. Someone who spent half an hour on your case telling you what they saw.'}
            </p>
            <p className="mt-4 text-muted-foreground">
              {fr
                ? "Ça ne dépasse jamais cinq minutes, parce qu'au-delà personne ne va au bout, et l'information la plus utile est toujours dans les trois dernières."
                : 'Never more than five minutes. Past that nobody finishes, and the most useful part is always in the last three.'}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.08}>
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-9">
              <p className="mb-6 text-sm font-medium text-foreground">
                {fr ? 'Le déroulé' : 'The running order'}
              </p>
              <ol className="space-y-4">
                {chapters.map((chapter) => (
                  <li key={chapter.t} className="flex items-baseline gap-4">
                    <span className="w-11 shrink-0 text-sm tabular-nums text-primary">{chapter.t}</span>
                    <span className="text-sm sm:text-base">{chapter.label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 5. CE QUE JE NE FAIS PAS, bande papier ═══ */}
      <section className="px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal direction="up">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              {fr
                ? 'Les trois règles que je me suis fixées, et pourquoi elles tiennent.'
                : 'The three rules I set myself, and why they hold.'}
            </h2>
          </ScrollReveal>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {nots.map((not, i) => (
              <ScrollReveal key={not.title} direction="up" delay={i * 0.05}>
                <article className="py-7">
                  <h3 className="text-lg font-semibold sm:text-xl">{not.title}</h3>
                  <p className="mt-2.5 text-muted-foreground">{not.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <p className="mt-10 text-sm text-muted-foreground">
              {fr ? (
                <>
                  Si après ça vous voulez qu'on en parle, tout est expliqué sur{' '}
                  <Link to="/reseaux-sociaux" className="text-primary underline underline-offset-4">
                    la page réseaux sociaux
                  </Link>{' '}
                  et sur{' '}
                  <Link to="/services" className="text-primary underline underline-offset-4">
                    la page services
                  </Link>
                  . Sinon vous gardez la vidéo, et c'est très bien comme ça.
                </>
              ) : (
                <>
                  If you want to talk afterwards, everything is laid out on{' '}
                  <Link to="/reseaux-sociaux" className="text-primary underline underline-offset-4">
                    the social media page
                  </Link>{' '}
                  and{' '}
                  <Link to="/services" className="text-primary underline underline-offset-4">
                    the services page
                  </Link>
                  . Otherwise you keep the video, and that is perfectly fine.
                </>
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 6. FAQ, bande encre ═══ */}
      <section className="border-t border-border px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal direction="up">
            <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
              {fr ? 'Les questions qui reviennent' : 'The questions that come up'}
            </h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══ 7. Dernier appel à l'action ═══ */}
      <section className="border-t border-border px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">
              {fr
                ? 'Vos prospects vont voir vos pages avant de vous appeler.'
                : 'Your prospects will look at your pages before calling you.'}
            </h2>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground sm:text-lg">
              {fr
                ? "Autant savoir ce qu'ils y trouvent. Il vous faut deux champs et quarante-huit heures."
                : 'You may as well know what they find there. It takes you two fields and forty-eight hours.'}
            </p>
            <p className="mt-7 text-sm text-muted-foreground">
              {fr
                ? "Elie Ageron, Albertville. Je filme en Savoie, en Haute-Savoie, et je travaille à distance ailleurs."
                : 'Elie Ageron, Albertville. I film across Savoie and Haute-Savoie, and work remotely elsewhere.'}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_hsl(var(--shadow-color)),0_12px_32px_hsl(var(--shadow-soft))] sm:p-8">
            <AuditForm tone="paper" source="cta-final" />
          </div>
        </div>
      </section>

      <InternalLinks currentPage="audit" />
    </>
  );
};

export default AuditGratuit;
