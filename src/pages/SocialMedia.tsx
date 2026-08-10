import { motion } from 'framer-motion';
import { ArrowRight, Camera, Scissors, CalendarCheck, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import MagneticButton from '@/components/animations/MagneticButton';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import InternalLinks from '@/components/InternalLinks';
import ScrollArrow from '@/components/ScrollArrow';
import SEO from '@/components/SEO';

/**
 * Page dédiée au service réseaux sociaux (lancé en 2026).
 * Promesse : Elie vient filmer une journée, puis publie 6 à 12 vidéos
 * verticales dans le mois. Le client ne touche à rien.
 *
 * Périmètre et prix revus en août 2026. Deux choses à ne pas réintroduire :
 *  - la « demi-journée » de tournage : le tournage est une journée entière ;
 *  - une formule où le client filme lui-même. Elle a été écartée volontairement,
 *    pour la raison expliquée dans l'article « combien coûte la gestion des
 *    réseaux sociaux » : sans production sur place, il ne sort plus rien au bout
 *    de six semaines.
 * Le plancher public est « à partir de 890 € par mois ». Pas de grille complète
 * en ligne et pas de cartes : l'info est présentée en listes éditoriales.
 */

/* ── Étapes du mois type ── */
const useSteps = () => {
  const { language } = useLanguage();
  return [
    {
      icon: Camera,
      num: '01',
      when: language === 'fr' ? 'Début du mois' : 'Start of the month',
      title: language === 'fr' ? "J'arrive avec le plan et le matériel" : 'I show up with the plan and the gear',
      desc:
        language === 'fr'
          ? "Avant de venir, j'ai déjà écrit les sujets, les questions à vous poser et l'ordre de tournage. Vous n'avez rien à préparer, pas de script à apprendre. Je débarque avec la caméra, les micros, la lumière et le drone, et on tourne une journée. C'est la seule journée du mois où vous me voyez."
          : "Before I arrive, the topics, the questions I'll ask you and the shooting order are already written. Nothing to prepare on your side, no script to learn. I show up with the camera, the mics, the lights and the drone, and we shoot for a full day. That is the only day of the month you see me.",
    },
    {
      icon: Scissors,
      num: '02',
      when: language === 'fr' ? 'Les jours suivants' : 'The following days',
      title: language === 'fr' ? 'Je monte, je sous-titre, je découpe' : 'I edit, subtitle and cut it up',
      desc:
        language === 'fr'
          ? "De cette journée je sors 6 à 12 vidéos courtes, au format vertical, montées et sous-titrées. Chacune tient debout toute seule : une accroche dans les deux premières secondes, une idée claire, une fin qui donne envie de vous suivre."
          : "From that day I pull 6 to 12 short vertical videos, edited and subtitled. Each one stands on its own: a hook in the first two seconds, one clear idea, an ending that makes people want to follow you.",
    },
    {
      icon: CalendarCheck,
      num: '03',
      when: language === 'fr' ? 'Tout le reste du mois' : 'All the rest of the month',
      title: language === 'fr' ? 'Je publie, vous ne touchez à rien' : "I post, you don't lift a finger",
      desc:
        language === 'fr'
          ? "Vos vidéos sortent tout au long du mois sur Instagram, Facebook, TikTok ou YouTube Shorts, selon les réseaux qui comptent pour vous. Je choisis les horaires, j'écris les légendes, je gère les hashtags. Vous les voyez sortir sans avoir rien à faire, et le mois suivant on recommence."
          : "Your videos go out through the month on Instagram, Facebook, TikTok or YouTube Shorts, depending on which networks matter to you. I pick the timing, write the captions, handle the hashtags. You watch them go out without doing anything, and the next month we start again.",
    },
  ];
};

/* ── Ce qui est inclus ── */
const useIncluded = () => {
  const { language } = useLanguage();
  return language === 'fr'
    ? [
        'Un plan de tournage écrit avant chaque session',
        'Une journée de tournage chez vous ou sur le terrain',
        'Tout le matériel : caméra, micros, lumière, drone',
        'Montage vertical, sous-titres et musique',
        '6 à 12 vidéos publiées dans le mois',
        'Légendes et hashtags rédigés',
        'Publication sur les réseaux de votre choix',
        'Les fichiers vidéo vous appartiennent',
      ]
    : [
        'A written shooting plan before every session',
        'A full day of filming at your place or on location',
        'All the gear: camera, mics, lighting, drone',
        'Vertical editing, subtitles and music',
        '6 to 12 videos published over the month',
        'Captions and hashtags written for you',
        'Publishing on the networks you care about',
        'The video files are yours to keep',
      ];
};

/* ── FAQ (également envoyée à Google en FAQPage) ── */
const useFaq = () => {
  const { language } = useLanguage();
  return language === 'fr'
    ? [
        {
          q: "Je suis nul devant une caméra, ça va donner quoi ?",
          a: "C'est ce que tout le monde me dit avant le premier tournage, et c'est normal. C'est justement pour ça que j'arrive avec des questions préparées : vous répondez, vous parlez de votre métier, et moi je filme. On refait les prises autant de fois qu'il faut, personne ne verra les ratés. Au bout de vingt minutes, la plupart des gens oublient la caméra.",
        },
        {
          q: "Combien de temps je dois y consacrer chaque mois ?",
          a: "Une journée, une seule fois dans le mois. C'est tout. Le reste du temps vous ne faites rien : ni écrire, ni monter, ni publier, ni penser à ce que vous allez raconter. Si vous voulez valider les vidéos avant qu'elles sortent, on met ça en place, mais beaucoup de clients préfèrent me laisser publier directement.",
        },
        {
          q: "Je peux filmer moi-même et vous n'avez qu'à monter ?",
          a: "Je ne propose pas cette formule, et c'est volontaire. Presque tout le monde a l'intention de filmer, et presque personne ne le fait une fois la semaine chargée. Au bout de six semaines il n'y a plus de matière, je publie du remplissage, et vous payez pour un compte qui ne ressemble plus à rien. Je préfère venir une journée par mois et repartir avec de quoi tenir jusqu'à la suivante. C'est pour ça que le déplacement fait partie de l'offre, toujours.",
        },
        {
          q: "Ça marche pour mon métier ? Je ne suis pas une marque connue.",
          a: "Le format marche surtout pour les métiers où la confiance compte : formateurs, thérapeutes, coachs, artisans, salons, restaurants, professions du bâtiment. Les gens ne suivent pas un logo, ils suivent une personne qui explique bien son métier. Plus votre métier est concret, plus c'est facile à filmer.",
        },
        {
          q: "Combien de vues je peux espérer ?",
          a: "Personne ne peut vous garantir un chiffre, et méfiez-vous de ceux qui le font. Ce que je peux dire, c'est que la toute première publication faite pour une cliente a atteint 56 619 vues et lui a apporté 196 abonnés. C'est un très bon résultat, pas une moyenne, et je ne vous promets pas la même chose. Ce qui est reproductible, c'est la méthode et le rythme, pas le compteur.",
        },
        {
          q: "Sur quels réseaux vous publiez ?",
          a: "Instagram, Facebook, TikTok et YouTube Shorts. On choisit ensemble ceux qui ont du sens pour vous : un artisan du bâtiment et une thérapeute ne visent pas le même public au même endroit. Une même vidéo verticale peut sortir sur plusieurs réseaux, ce qui multiplie les chances sans multiplier le travail.",
        },
        {
          q: "Et si je veux aussi un site web ?",
          a: "C'est même le combo qui marche le mieux. Les réseaux créent l'attention, le site transforme cette attention en rendez-vous. Je fais les deux, donc tout parle d'une seule voix : même identité, mêmes messages, un seul interlocuteur. Regardez la page site web pour le détail.",
        },
        {
          q: "Combien ça coûte ?",
          a: "À partir de 890 euros par mois, journée de tournage comprise. Au-dessus, ça dépend du nombre de vidéos et du nombre de réseaux. Je ne mets pas la grille complète en ligne parce que je préfère vous donner un chiffre juste plutôt qu'un chiffre au hasard, mais vous savez au moins d'où ça part avant de m'appeler. Un appel de trente minutes suffit pour que je vous envoie un devis clair, sans engagement.",
        },
        {
          q: "Vous vous déplacez où ?",
          a: "Je suis basé à Albertville, en Savoie. Je me déplace pour tourner en Savoie, en Haute-Savoie et dans le bassin annécien sans supplément. Pour le reste de la France, on regroupe plusieurs sessions de tournage sur un même déplacement pour que ça reste raisonnable.",
        },
      ]
    : [
        {
          q: "I'm terrible on camera, how is this going to go?",
          a: "Everyone tells me that before the first shoot, and it's normal. That's exactly why I arrive with prepared questions: you answer, you talk about your work, and I film. We redo takes as many times as needed, nobody sees the bad ones. After twenty minutes, most people forget the camera is there.",
        },
        {
          q: 'How much of my time does this take each month?',
          a: "One day, once a month. That's it. The rest of the time you do nothing: no writing, no editing, no posting, no thinking about what to say. If you want to approve videos before they go out, we can set that up, but many clients prefer to let me publish directly.",
        },
        {
          q: 'Can I film it myself and you just edit?',
          a: "I do not offer that, and it is on purpose. Almost everyone intends to film, and almost nobody does once the week gets busy. After six weeks there is no footage left, I end up posting filler, and you are paying for an account that no longer looks like anything. I would rather come for one day a month and leave with enough to last until the next one. That is why the shoot is always part of the offer.",
        },
        {
          q: "Does this work for my line of work? I'm not a known brand.",
          a: 'The format works best for trades where trust matters: trainers, therapists, coaches, craftspeople, salons, restaurants, building trades. People do not follow a logo, they follow a person who explains their work well. The more hands-on your work, the easier it is to film.',
        },
        {
          q: 'How many views can I expect?',
          a: "Nobody can guarantee you a number, and be wary of anyone who does. What I can say is that the very first post I published for a client reached 56,619 views and brought her 196 followers. That is a very good result, not an average, and I am not promising you the same. What is repeatable is the method and the rhythm, not the counter.",
        },
        {
          q: 'Which networks do you post on?',
          a: 'Instagram, Facebook, TikTok and YouTube Shorts. We pick the ones that make sense for you together: a builder and a therapist are not reaching the same audience in the same place. One vertical video can go out on several networks, which multiplies the chances without multiplying the work.',
        },
        {
          q: 'What if I also want a website?',
          a: 'That is actually the combination that works best. Social creates the attention, the site turns that attention into bookings. I do both, so everything speaks with one voice: same identity, same messages, one person to talk to.',
        },
        {
          q: 'How much does it cost?',
          a: 'From 890 euros a month, filming day included. Above that it depends on the number of videos and the number of networks. I do not put the full grid online because I would rather give you a fair number than a random one, but at least you know where it starts before calling me. A thirty-minute call is enough for me to send you a clear quote, no strings attached.',
        },
        {
          q: 'Where do you travel?',
          a: "I'm based in Albertville, Savoie. I travel to film across Savoie, Haute-Savoie and the Annecy area at no extra cost. For the rest of France, we group several shooting sessions into one trip to keep it reasonable.",
        },
      ];
};

const SocialMedia = () => {
  const { language } = useLanguage();
  const { openCalendly } = useCalendly();
  const steps = useSteps();
  const included = useIncluded();
  const faq = useFaq();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: language === 'fr' ? 'Réseaux sociaux' : 'Social media',
        item: 'https://elieageron.com/reseaux-sociaux',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://elieageron.com/reseaux-sociaux#service',
    name:
      language === 'fr'
        ? 'Création de contenu et gestion de réseaux sociaux'
        : 'Social media content creation and management',
    serviceType: language === 'fr' ? 'Gestion de réseaux sociaux' : 'Social media management',
    description:
      language === 'fr'
        ? "Tournage vidéo sur place une journée par mois, puis montage vertical, sous-titrage et publication de 6 à 12 vidéos courtes dans le mois sur Instagram, Facebook, TikTok et YouTube Shorts."
        : 'On-site video shoot one day a month, then vertical editing, subtitling and publishing of 6 to 12 short videos over the month on Instagram, Facebook, TikTok and YouTube Shorts.',
    url: 'https://elieageron.com/reseaux-sociaux',
    provider: { '@id': 'https://elieageron.com/#person' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: 890,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: 890,
        minPrice: 890,
        unitCode: 'MON',
        billingIncrement: 1,
      },
      availability: 'https://schema.org/InStock',
      url: 'https://elieageron.com/reseaux-sociaux',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Savoie' },
      { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
      { '@type': 'Country', name: 'France' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Prestations réseaux sociaux' : 'Social media services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Journée de tournage' : 'Filming session',
          description:
            language === 'fr'
              ? "Plan de tournage préparé, matériel fourni, une journée de captation sur place chaque mois."
              : 'Prepared shooting plan, gear provided, one full day of on-site filming every month.',
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Montage vidéo vertical' : 'Vertical video editing',
          description:
            language === 'fr'
              ? 'Montage court format 9:16, sous-titres incrustés, musique et accroche travaillée.'
              : 'Short 9:16 editing, burned-in subtitles, music and a worked hook.',
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Publication mensuelle' : 'Monthly publishing',
          description:
            language === 'fr'
              ? '6 à 12 publications dans le mois sur Instagram, Facebook, TikTok ou YouTube Shorts, légendes incluses.'
              : '6 to 12 posts over the month on Instagram, Facebook, TikTok or YouTube Shorts, captions included.',
        },
      ],
    },
  };

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
      <SEO page="social" structuredData={[serviceSchema, breadcrumbSchema, faqSchema]} />

      {/* ─────────── Hero ─────────── */}
      <section
        className="relative grain min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
        aria-labelledby="social-hero-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-primary/8 rounded-full blur-[110px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 -mt-20 sm:-mt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-7 text-xs sm:text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
              {language === 'fr' ? 'Vidéo et réseaux sociaux, clé en main' : 'Video and social media, done for you'}
            </span>

            <h1
              id="social-hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]"
            >
              <span className="text-foreground">
                {language === 'fr' ? 'On filme une journée.' : 'We film for one day.'}
              </span>
              <br />
              <span className="text-primary">
                {language === 'fr' ? 'Un mois de posts.' : 'A month of posts.'}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === 'fr'
                ? "J'arrive avec le matériel et un plan de tournage déjà prêt. On tourne, je monte, et je publie 6 à 12 vidéos sur vos réseaux pendant tout le mois. Vous, vous ne touchez à rien."
                : "I show up with the gear and a shooting plan already written. We film, I edit, and I post 6 to 12 videos on your accounts across the month. You touch nothing."}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticButton>
                <Button variant="hero" size="lg" className="group w-full sm:w-auto" onClick={openCalendly}>
                  <span className="flex items-center gap-2">
                    {language === 'fr' ? 'En parler 30 min, gratuitement' : 'Talk it through, free 30 min'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Button>
              </MagneticButton>
              <Button variant="neonOutline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/get-started">{language === 'fr' ? 'Décrire mon projet' : 'Describe my project'}</Link>
              </Button>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-medium">
              {language === 'fr'
                ? 'Sans engagement · Réponse sous 24h · Savoie, Haute-Savoie et France'
                : 'No commitment · Reply within 24h · Savoie, Haute-Savoie and across France'}
            </p>
          </motion.div>

          <ScrollArrow />
        </div>
      </section>

      {/* ─────────── Preuve chiffrée ─────────── */}
      <section className="py-16 sm:py-24 bg-secondary/30 border-y border-border/50" aria-labelledby="social-proof-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-6"
          >
            {language === 'fr' ? 'Ce que ça donne' : 'What it looks like'}
          </motion.p>

          <motion.h2
            id="social-proof-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-foreground leading-[0.95] tracking-tight"
          >
            <span className="block text-6xl sm:text-7xl md:text-8xl text-primary tabular-nums">56 619</span>
            <span className="mt-3 block text-2xl sm:text-3xl md:text-4xl">
              {language === 'fr' ? 'vues dès la première publication.' : 'views on the very first post.'}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-7 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {language === 'fr'
              ? "C'est la toute première publication que j'ai faite pour une cliente formatrice en rééducation de l'écriture. Pas la dixième, pas celle d'après six mois de rodage : la première. Elle a aussi ramené 196 abonnés, et 99 % des vues venaient de gens qui ne la suivaient pas encore. Elle n'a rien fait d'autre que répondre à mes questions devant une caméra."
              : "That was the very first post I published for a client who teaches handwriting rehabilitation. Not the tenth, not one after six months of practice: the first. It also brought her 196 followers, and 99% of the views came from people who were not following her yet. All she did was answer my questions in front of a camera."}
          </motion.p>

          {/* Mention legale : ce chiffre est un exemple reel, pas une promesse commerciale. */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {language === 'fr'
              ? "Résultat obtenu chez une cliente sur une publication précise (Reel Facebook, août 2026). C'est un exemple, pas une moyenne et pas une garantie : les résultats dépendent de votre activité, de votre audience et des plateformes, et aucun nombre de vues ne peut être promis."
              : 'Result measured for one client on one specific post (Facebook Reel, August 2026). It is an example, not an average and not a guarantee: results depend on your business, your audience and the platforms, and no view count can be promised.'}
          </motion.p>
        </div>
      </section>

      {/* ─────────── Le problème ─────────── */}
      <section className="py-16 sm:py-24" aria-labelledby="social-problem-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="social-problem-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-7"
          >
            {language === 'fr' ? 'Vous savez qu’il faut poster.' : 'You know you should be posting.'}{' '}
            <span className="text-primary">
              {language === 'fr' ? "Le problème n'a jamais été là." : 'That was never the problem.'}
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              {language === 'fr'
                ? "Le problème, c'est le dimanche soir devant votre téléphone, à chercher quoi raconter. C'est la vidéo tournée trois fois puis supprimée parce que le son était mauvais. C'est le compte qui repart pendant deux semaines, puis s'arrête pendant trois mois."
                : "The problem is Sunday night, phone in hand, trying to think of something to say. It's the video you shot three times then deleted because the audio was bad. It's the account that comes alive for two weeks, then goes quiet for three months."}
            </p>
            <p>
              {language === 'fr'
                ? "Ce n'est pas un manque de volonté. C'est que créer du contenu régulièrement, c'est un vrai métier, et vous en avez déjà un."
                : "It's not a lack of will. Creating content consistently is an actual job, and you already have one."}
            </p>
            <p className="text-foreground font-medium">
              {language === 'fr'
                ? "Alors je prends ce métier-là, et vous gardez le vôtre."
                : 'So I take that job, and you keep yours.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────── Comment ça marche ─────────── */}
      <section className="py-16 sm:py-24 bg-secondary/30" aria-labelledby="social-how-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
          >
            <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
            {language === 'fr' ? 'Un mois type' : 'A typical month'}
          </motion.span>

          <motion.h2
            id="social-how-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-12 sm:mb-16 max-w-2xl"
          >
            {language === 'fr' ? 'Comment ça se passe, concrètement' : 'How it actually works'}
          </motion.h2>

          <ol className="space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className={`grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-3 py-8 sm:py-10 ${
                    index === 0 ? '' : 'border-t border-border/60'
                  }`}
                >
                  <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 shrink-0">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="font-heading text-sm font-bold text-primary tabular-nums">{step.num}</span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      {step.when}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-snug">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ─────────── Ce qui est inclus ─────────── */}
      <section className="py-16 sm:py-24" aria-labelledby="social-included-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <h2
                id="social-included-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-5"
              >
                {language === 'fr' ? 'Ce qui est compris' : "What's included"}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {language === 'fr'
                  ? "Un seul montant par mois, tout dedans. Pas de ligne surprise sur la facture, pas de supplément pour un sous-titre ou une légende."
                  : 'One monthly amount, everything in it. No surprise line on the invoice, no extra charge for a subtitle or a caption.'}
              </p>
              <p className="mt-5 text-sm text-muted-foreground">
                {language === 'fr'
                  ? 'À partir de 890 € par mois, journée de tournage comprise. Au-dessus, ça dépend du nombre de vidéos et de réseaux, et on le fixe ensemble sur un appel.'
                  : 'From €890 a month, filming day included. Above that it depends on the number of videos and networks, and we set it together on a call.'}
              </p>
            </motion.div>

            <ul className="lg:col-span-7 -my-1">
              {included.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className={`flex items-start gap-4 py-4 ${index === 0 ? '' : 'border-t border-border/60'}`}
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/12 shrink-0">
                    <Check className="h-3 w-3 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] sm:text-base text-foreground/85 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────── Le combo site + réseaux ─────────── */}
      <section className="py-16 sm:py-24 bg-secondary/30 border-y border-border/50" aria-labelledby="social-combo-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            id="social-combo-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6"
          >
            {language === 'fr' ? 'Les réseaux amènent les gens. ' : 'Social brings people in. '}
            <span className="text-primary">
              {language === 'fr' ? 'Le site les transforme en clients.' : 'The site turns them into clients.'}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {language === 'fr'
              ? "Une vidéo à 56 000 vues sans rien derrière, c'est de l'attention qui retombe. C'est exactement ce qui s'est passé : beaucoup de vues, et aucune page pour recevoir les gens. Avec un site qui explique ce que vous faites et propose un rendez-vous, cette attention devient des clients. C'est pour ça que je fais les deux."
              : "A video at 56,000 views with nothing behind it is attention that fades. That is exactly what happened: plenty of views, and no page to receive anyone. With a site that explains what you do and offers a booking, that attention becomes clients. That is why I do both."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 min-h-[24px] text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              {language === 'fr' ? 'Voir tous les services' : 'See all services'}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 min-h-[24px] text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {language === 'fr' ? 'Voir mes réalisations' : 'See my work'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="py-16 sm:py-24" aria-labelledby="social-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="social-faq-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center leading-tight mb-10 sm:mb-14"
          >
            {language === 'fr' ? 'Les questions ' : 'The questions '}
            <span className="text-primary">{language === 'fr' ? "qu'on me pose" : 'people ask me'}</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`social-faq-${index}`}
                  className="bg-secondary border border-border rounded-xl px-4 sm:px-6 overflow-hidden transition-all duration-300 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline hover:text-primary transition-colors py-4 sm:py-5 text-sm sm:text-base [&[data-state=open]]:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ─────────── CTA final ─────────── */}
      <section className="py-12 sm:py-20" aria-label={language === 'fr' ? 'Passer à l’action' : 'Call to action'}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
              <span className="text-foreground">{language === 'fr' ? 'On tourne quand ?' : 'When do we shoot?'}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {language === 'fr'
                ? "Trente minutes au téléphone. Vous me racontez votre activité, je vous dis ce que je filmerais et à quelle fréquence. Si ça ne colle pas, je vous le dis aussi."
                : "Thirty minutes on the phone. You tell me about your business, I tell you what I would film and how often. If it is not a fit, I will say so too."}
            </p>
            <MagneticButton>
              <Button variant="hero" size="lg" className="group" onClick={openCalendly}>
                <span className="flex items-center gap-2">
                  {language === 'fr' ? 'Réserver mon appel gratuit' : 'Book my free call'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <InternalLinks currentPage="social" />
      <ContactMethodsSection />
    </>
  );
};

export default SocialMedia;
