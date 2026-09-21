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
import FaqSection from '@/components/FaqSection';
import PostingCalendar from '@/components/PostingCalendar';
import TravailLivre from '@/components/TravailLivre';
import InternalLinks from '@/components/InternalLinks';
import ScrollArrow from '@/components/ScrollArrow';
import SEO from '@/components/SEO';
import { socialCities } from '@/data/social-cities';

/**
 * Page dédiée au service réseaux sociaux (lancé en 2026).
 * Promesse : Elie vient filmer une journée, puis publie 8 vidéos
 * verticales dans le mois. Le client ne touche à rien.
 *
 * Périmètre et prix revus en août 2026. Deux choses à ne pas réintroduire :
 *  - la « demi-journée » de tournage : le tournage est une journée entière ;
 *  - une formule où le client filme lui-même. Elle a été écartée volontairement,
 *    pour la raison expliquée dans l'article « combien coûte la gestion des
 *    réseaux sociaux » : sans production sur place, il ne sort plus rien au bout
 *    de six semaines.
 * ⚠️ Révisé le 19 septembre 2026 : une seule offre, un seul prix, plus de
 * plancher. Elie : « il faut que j'enlève à partir de 890 € par mois. Il faut
 * que je dise : pour 890 € par mois, ça, ça, ça. » Le « à partir de » se
 * comparait au 390 € d'une agence qui ne se déplace pas, et perdait avant
 * qu'on ait lu la liste. La liste, elle, gagne.
 *
 * 🔴 Et l'engagement de trois mois a sauté. Elie : « le truc d'engagement, ça
 * fait scam un peu non ? » Le concurrent direct au même prix affiche « sans
 * engagement » en argument de vente. La mécanique est inversée : on ne retient
 * plus celui qui part, on récompense celui qui reste. Le site compris à partir
 * du troisième mois retient mieux qu'une clause, parce que c'est un gain perdu
 * et pas une pénalité.
 *
 * Les trois éléments en plus, et ce qu'ils coûtent réellement :
 *  - deux jours de tournage le premier mois : 7 h une seule fois, et Elie
 *    démarre avec deux mois de matière d'avance ;
 *  - le site à partir du troisième mois : ~18 h, après 2 670 € encaissés.
 *    C'est le seul cadeau que ni un community manager ni un studio vidéo ne
 *    peut copier ;
 *  - la garantie de publication : zéro coût tant qu'il livre, et c'est la
 *    seule garantie honnête possible ici. Jamais de garantie de résultat, de
 *    vues ou d'abonnés.
 * La grille complète (1 290 / 1 890) reste hors ligne : qui veut autre chose
 * écrit un message.
 */

/* ── Étapes du mois type ── */
const useSteps = () => {
  const { language } = useLanguage();
  return [
    {
      icon: Camera,
      num: '1',
      when: language === 'fr' ? 'Début du mois' : 'Start of the month',
      title: language === 'fr' ? "J'arrive avec le plan et le matériel" : 'I show up with the plan and the gear',
      desc:
        language === 'fr'
          ? "Avant de venir, j'ai déjà écrit les sujets, les questions à vous poser et l'ordre de tournage. Vous n'avez rien à préparer, pas de script à apprendre. Je débarque avec la caméra, les micros, la lumière et le drone, et on tourne une journée. C'est la seule journée du mois où vous me voyez."
          : "Before I arrive, the topics, the questions I'll ask you and the shooting order are already written. Nothing to prepare on your side, no script to learn. I show up with the camera, the mics, the lights and the drone, and we shoot for a full day. That is the only day of the month you see me.",
    },
    {
      icon: Scissors,
      num: '2',
      when: language === 'fr' ? 'Les jours suivants' : 'The following days',
      title: language === 'fr' ? 'Je monte, je sous-titre, je découpe' : 'I edit, subtitle and cut it up',
      desc:
        language === 'fr'
          ? "De cette journée je sors 8 vidéos courtes, au format vertical, montées et sous-titrées. Chacune tient debout toute seule : une accroche dans les deux premières secondes, une idée claire, une fin qui donne envie de vous suivre."
          : "From that day I pull 8 short vertical videos, edited and subtitled. Each one stands on its own: a hook in the first two seconds, one clear idea, an ending that makes people want to follow you.",
    },
    {
      icon: CalendarCheck,
      num: '3',
      when: language === 'fr' ? 'Tout le reste du mois' : 'All the rest of the month',
      title: language === 'fr' ? 'Je publie tout le mois' : 'I post all month long',
      desc:
        language === 'fr'
          ? "Vos vidéos sortent tout au long du mois sur Instagram, Facebook, TikTok ou YouTube Shorts, selon les réseaux qui comptent pour vous. Je choisis les horaires, j'écris les légendes, je gère les hashtags. Vous les voyez sortir, et si un sujet vous vient entre deux tournages, vous me l'envoyez et je l'ajoute au lot."
          : "Your videos go out through the month on Instagram, Facebook, TikTok or YouTube Shorts, depending on which networks matter to you. I pick the timing, write the captions, handle the hashtags. You watch them go out without doing anything, and the next month we start again.",
    },
  ];
};

/* ── Ce qui est inclus ── */
const useIncluded = () => {
  const { language } = useLanguage();
  return language === 'fr'
    ? [
        { label: 'Une journée de tournage', detail: 'chez vous, tous les mois' },
        { label: 'Le déplacement', detail: 'compris en Savoie et Haute-Savoie' },
        { label: 'Tout le matériel', detail: 'caméra, micros, lumière, drone' },
        { label: '8 vidéos montées', detail: 'verticales et sous-titrées' },
        { label: '4 carrousels', detail: 'photos et texte, tirés de la journée' },
        { label: '8 stories', detail: 'publiées au fil du mois' },
        { label: 'La publication', detail: 'Instagram, Facebook, TikTok, YouTube Shorts' },
        { label: 'Les légendes et le calendrier', detail: 'écrits et posés par moi' },
        { label: 'Les photos de la journée', detail: 'à vous, pour votre site et vos réseaux' },
        { label: 'Un point par mois', detail: "ce qui a marché, ce qu'on filme ensuite" },
      ]
    : [
        { label: 'A full day of filming', detail: 'at your place, every month' },
        { label: 'Travel', detail: 'included across Savoie and Haute-Savoie' },
        { label: 'All the gear', detail: 'camera, mics, lighting, drone' },
        { label: '8 edited videos', detail: 'vertical and subtitled' },
        { label: '4 carousels', detail: 'photos and text, from the shooting day' },
        { label: '8 stories', detail: 'posted through the month' },
        { label: 'Publishing', detail: 'Instagram, Facebook, TikTok, YouTube Shorts' },
        { label: 'Captions and calendar', detail: 'written and scheduled by me' },
        { label: 'The photos from the day', detail: 'yours, for your site and your feeds' },
        { label: 'A monthly review', detail: 'what worked, what we film next' },
      ];
};

/* ── Les trois choses en plus ──
   Elles remplacent la remise et le « mois offert » : a 890 € Elie est deja le
   moins cher de sa categorie a perimetre egal (un studio qui vend le meme
   modele affiche 3 500 €/mois), donc baisser le prix n'aurait rien prouve et
   aurait coute sa marge. Chacune a un cout maitrise et une valeur percue
   haute, et aucune n'est une promesse de resultat. */
const useBonus = () => {
  const { language } = useLanguage();
  return language === 'fr'
    ? [
        {
          num: '1',
          title: 'Le premier mois, je filme deux jours',
          desc: "Au lieu d'un. Vous démarrez avec deux mois de matière d'avance, et une journée reportée pour cause de chantier ou de grippe ne fait plus tomber le rythme. C'est le seul mois où vous me voyez deux fois.",
        },
        {
          num: '2',
          title: 'À partir du troisième mois, je vous fais votre site',
          desc: "Un site d'une page, écrit et dessiné pour votre activité. Compris, vous ne payez pas plus. C'est mon autre métier, et une vidéo qui marche a besoin d'un endroit où envoyer les gens.",
        },
        {
          num: '3',
          title: 'Si les 8 vidéos ne sortent pas, le mois suivant est gratuit',
          desc: "C'est la seule chose que je peux vous garantir sans mentir : la régularité ne dépend que de moi. Le nombre de vues dépend de votre marché, et personne ne peut vous le promettre.",
        },
      ]
    : [
        {
          num: '1',
          title: 'The first month, I film for two days',
          desc: 'Instead of one. You start with two months of material in hand, so a day pushed back by a job or a bad flu no longer breaks the rhythm. It is the only month you see me twice.',
        },
        {
          num: '2',
          title: 'From the third month, I build your website',
          desc: 'A one page site, written and designed for your trade. Included, you pay nothing more. It is my other trade, and a video that works needs somewhere to send people.',
        },
        {
          num: '3',
          title: 'If the 8 videos do not go out, the next month is free',
          desc: 'It is the only thing I can guarantee without lying: consistency depends on me alone. View counts depend on your market, and nobody can promise you those.',
        },
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
          q: "Et si je ne suis pas content ?",
          a: "Vous arrêtez le mois suivant, il n'y a rien à résilier. Et il y a une chose sur laquelle je m'engage par écrit : si les 8 vidéos du mois ne sont pas publiées, le mois suivant ne vous est pas facturé. C'est la seule garantie que je peux tenir honnêtement, parce que la régularité ne dépend que de moi. Le nombre de vues, lui, dépend de votre marché : personne ne peut vous le garantir, et méfiez-vous de ceux qui le font.",
        },
        {
          q: "Combien ça coûte ?",
          a: "890 euros par mois, et c'est le seul chiffre. Dedans : la journée de tournage, le déplacement, le matériel, les 8 vidéos montées et sous-titrées, les 4 carrousels, les 8 stories, les légendes, la publication sur vos réseaux, les photos de la journée et un point mensuel. Pas de frais de démarrage, pas de supplément, pas de ligne surprise sur la facture. Si vous voulez autre chose que cette offre, plus de vidéos ou un tournage plus long par exemple, écrivez-moi et je vous réponds avec un prix.",
        },
        {
          q: "Il y a un engagement ?",
          a: "Non. Vous payez au mois, et vous arrêtez quand vous voulez, sans préavis à respecter ni contrat de douze mois à faire signer. Ce que je demande, c'est de me laisser trois mois avant de juger : le premier mois sert à constituer la matière, et on ne voit rien d'un compte en quatre semaines. C'est aussi pour ça que le site n'arrive qu'au troisième mois. Mais c'est vous qui décidez, chaque mois.",
        },
        {
          q: "Le site est vraiment compris ?",
          a: "Oui, à partir du troisième mois, et sans rien payer de plus. Un site d'une page, écrit et dessiné pour votre activité. C'est compris parce que ça me sert autant qu'à vous : une vidéo qui marche envoie des gens quelque part, et s'il n'y a rien au bout, tout le travail du mois retombe. Un site à quinze pages, c'est un devis à part.",
        },
        {
          q: "Vous vous déplacez où ?",
          a: "Je suis basé à Albertville, en Savoie. Je me déplace pour tourner en Savoie, en Haute-Savoie et dans le bassin annécien sans supplément. Pour le reste de la France, on regroupe plusieurs sessions de tournage sur un même déplacement pour que ça reste raisonnable.",
        },
        {
          // Ajoutee apres relecture aveugle. La therapeute de Chambery : « on
          // me dit que je n'ouvre jamais l'application. Une patiente qui ecrit
          // en message prive pour un rendez-vous, elle tombe sur qui ? Pour un
          // cabinet, c'est la question numero un. » Elle n'etait traitee nulle
          // part, et « vous n'ouvrez jamais l'application » la posait sans y
          // repondre.
          q: "Qui répond aux messages privés ?",
          a: "Vous. Je publie et je gère les commentaires généraux, mais tout ce qui ressemble à une demande de rendez-vous vous revient : c'est votre métier, pas le mien, et une réponse de ma part se verrait tout de suite. Je vous préviens quand une publication part, pour que vous sachiez qu'il va y avoir du monde dans la boîte de réception ce jour là.",
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
          q: 'What if I am not happy?',
          a: 'You stop the following month, there is nothing to cancel. And there is one thing I commit to in writing: if the 8 videos for the month are not published, the next month is not invoiced. That is the only guarantee I can honestly hold, because consistency depends on me alone. View counts depend on your market: nobody can guarantee those, and be wary of anyone who does.',
        },
        {
          q: 'How much does it cost?',
          a: '890 euros a month, and that is the only figure. It covers the filming day, the travel, the gear, 8 edited and subtitled videos, 4 carousels, 8 stories, the captions, publishing on your networks, the photos from the day and a monthly review. No setup fee, no extras, no surprise line on the invoice. If you want something other than this offer, more videos or a longer shoot for instance, write to me and I will come back with a price.',
        },
        {
          q: 'Is there a commitment?',
          a: 'No. You pay monthly and you stop whenever you want, with no notice period and no twelve-month contract to sign. What I do ask is that you give it three months before judging: the first month builds the material, and nothing shows on an account in four weeks. That is also why the website only comes in the third month. But the call is yours, every month.',
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
  const bonus = useBonus();
  const faq = useFaq();

  /** Un nom de zone, dans la phrase, qui est aussi le lien vers sa page locale. */
  const zoneSociale = (i: number) => {
    const city = socialCities[i];
    if (!city) return null;
    return (
      <Link
        to={`/${city.slug}`}
        className="text-foreground underline underline-offset-4 hover:text-primary"
      >
        {city.name}
      </Link>
    );
  };

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
        ? "890 € par mois, sans engagement : une journée de tournage sur place chaque mois, puis montage vertical, sous-titrage et publication de 8 vidéos courtes dans le mois sur Instagram, Facebook, TikTok et YouTube Shorts. Site web compris à partir du troisième mois."
        : '€890 a month, no commitment: one full day of on-site filming every month, then vertical editing, subtitling and publishing of 8 short videos over the month on Instagram, Facebook, TikTok and YouTube Shorts. Website included from the third month.',
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
              ? '8 publications dans le mois sur Instagram, Facebook, TikTok ou YouTube Shorts, légendes incluses.'
              : '8 posts over the month on Instagram, Facebook, TikTok or YouTube Shorts, captions included.',
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
            {/* 🔴 Le point portait `animate-pulse` et la pastille `glass-card`.
                Elie a banni les deux : « pas de badge qui pulse », et le verre
                depoli decoratif fait partie de ce qu'il appelle
                « vraiment intelligence artificielle ». Un point qui clignote en
                boucle sous un titre attire l'oeil sans rien annoncer, et il ne
                s'arrete jamais. La pastille prend le meme fond que celles du
                reste du site. */}
            <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {language === 'fr' ? 'Vidéo et réseaux sociaux, clé en main' : 'Video and social media, done for you'}
            </span>

            <h1
              id="social-hero-heading"
              className="hero-title mb-6"
            >
              <span className="text-foreground">
                {language === 'fr' ? 'On filme une journée.' : 'We film for one day.'}
              </span>
              <br />
              <span className="text-primary">
                {/* « posts » remplace par « publications » : le reste du site
                    dit publications, et le mot anglais detonne sur une page
                    qui s'adresse a des artisans de Savoie. */}
                {language === 'fr' ? 'Un mois de publications.' : 'A month of posts.'}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === 'fr'
                ? "J'arrive avec le matériel et un plan de tournage déjà prêt. On tourne, je monte, et je publie 8 vidéos sur vos réseaux pendant tout le mois. 890 € par mois, sans engagement. Artisans, restaurateurs, thérapeutes et formateurs, en Savoie et en Haute-Savoie."
                : "I show up with the gear and a shooting plan already written. We film, I edit, and I post 8 videos on your accounts across the month. €890 a month, no commitment. Tradespeople, restaurant owners, therapists and trainers, across Savoie and Haute-Savoie."}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticButton>
                <Button variant="hero" size="lg" className="group w-full sm:w-auto" asChild>
                  <Link to="/audit-gratuit">
                    <span className="flex items-center gap-2">
                      {language === 'fr' ? 'Recevoir mon audit gratuit' : 'Get my free audit'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </Link>
                </Button>
              </MagneticButton>
              <Button variant="neonOutline" size="lg" className="w-full sm:w-auto" onClick={openCalendly}>
                {language === 'fr' ? 'Réserver un appel' : 'Book a call'}
              </Button>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-medium">
              {language === 'fr'
                ? 'Gratuit · Deux champs · Vidéo sous 48 h · Savoie, Haute-Savoie et France'
                : 'Free · Two fields · Video within 48h · Savoie, Haute-Savoie and across France'}
            </p>
          </motion.div>

          <ScrollArrow />
        </div>
      </section>

      {/* ⚠️ « Le probleme » est passe devant « Preuve, en prose ».
          Elie : « j'aime bien le truc, vous savez qu'il faut poster, le
          probleme n'a jamais ete la. Ca faut que ce soit tout en haut, la
          premiere section. » Il a raison : cette section nomme l'objection
          que le visiteur a deja en tete, donc elle doit tomber avant qu'on lui
          raconte une histoire de cliente. */}
      {/* ─────────── Le problème ─────────── */}
      {/* 🔴 Le telephone est arrive ici le 21 septembre 2026. Elie : *« si je
          vais voir la page d'accueil, il y a un telephone, il y a quelqu'un
          qui sourit. Il y a des elements reels, c'est pas que du texte. Dans
          la page reseaux sociaux, il faut ameliorer ca. »* La page qui vend le
          service n'avait aucune piece physique avant la mi-page, alors que
          l'accueil en a trois dans son premier tiers. */}
      <section className="py-20 sm:py-32" aria-labelledby="social-problem-heading">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
          <motion.h2
            id="social-problem-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-foreground mb-7"
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

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <PostingCalendar apercu="video" />
          </motion.div>
        </div>
      </section>

      {/* 🔴 Il y avait ici la section « Vous repondez, je fais le reste »,
          qui racontait les 56 619 vues de la premiere publication d'une
          cliente, suivies d'un disclaimer de trois lignes.
          Elie l'a fait retirer le 14 septembre 2026. Elle cumulait trois
          defauts : un chiffre de performance en argument de vente, ce qu'il
          refuse depuis le debut ; un disclaimer qui annulait le chiffre juste
          apres l'avoir donne ; et une cliente decrite comme anonyme alors
          qu'elle est nommee plus bas sur la meme page.
          ⚠️ Ne pas la reintroduire, et ne pas replacer ce chiffre ailleurs. */}

      {/* ─────────── Comment ça marche ─────────── */}
      <section className="py-20 sm:py-32 bg-secondary/30" aria-labelledby="social-how-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="social-how-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-foreground mb-12 sm:mb-16 max-w-2xl"
          >
            {language === 'fr' ? 'Comment ça se passe, concrètement' : 'How it actually works'}
          </motion.h2>

          <ol className="space-y-0">
            {steps.map((step, index) => {
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
                  {/* ⚠️ C'etait une pastille d'icone de 44 px et le numero en
                      text-sm en dessous. Elie : « pourquoi ils sont en
                      minuscules comme ca, et les petites icones ils sont tout
                      petits. » Le numero est maintenant le repere, a la meme
                      echelle que sur l'accueil, et l'icone a disparu : elle ne
                      disait rien que le titre ne disait deja. */}
                  <span
                    className="font-heading text-5xl font-bold leading-none text-primary tabular-nums sm:text-6xl"
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>

                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">{step.when}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-snug">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>

          {/* Le paiement de la liste, demande par Elie le 14 septembre 2026 :
              « ajoute apres le point 3 que c'est effortless pour eux, ils ont
              rien a preparer, a apprendre, a bosser. Tout est gere pour eux,
              selon leurs preferences. »

              ⚠️ Ce n'est volontairement pas une quatrieme etape numerotee. Les
              trois numeros sont une chronologie (le jour du tournage, les jours
              d'apres, le reste du mois) ; ce bloc ne raconte pas un quatrieme
              moment, il dit ce que le visiteur fait pendant les trois. Lui
              donner un « 4 » casserait la lecture du deroule.

              ⚠️ La seconde moitie est la part « selon leurs preferences », et
              elle compte autant que la premiere. « Je m'occupe de tout » tout
              seul se lit comme une perte de controle : le visiteur imagine ses
              videos publiees sans lui. Le cadre pose au depart, et le choix de
              voir ou non les videos avant leur sortie, rendent l'absence de
              travail supportable. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="border-t border-border/60 pt-8 sm:pt-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
              {language === 'fr'
                ? "Votre part du travail tient dans une journée."
                : 'Your share of the work fits in a single day.'}
            </h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl">
              {language === 'fr'
                ? "Le reste du mois se passe sans vous. Vous n'avez aucun outil à installer, aucun calendrier à tenir, aucune légende à écrire."
                : 'The rest of the month happens without you. There is no tool to install, no calendar to keep, no caption to write.'}
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
              {language === 'fr'
                ? "On fixe au départ ce dont vous voulez parler et ce que vous préférez garder pour vous, et je travaille dans ce cadre. Si vous voulez voir les vidéos avant qu'elles sortent, je vous les envoie la veille. Sinon, vous les découvrez en ligne comme tout le monde."
                : 'We agree up front on what you want to talk about and what you would rather keep to yourself, and I work inside that. If you want to see the videos before they go out, I send them the day before. Otherwise you find them online like everyone else.'}
            </p>
          </motion.div>

          {/* Ce que la journee produit. Une liste d'etapes decrit le service,
              deux videos et un carrousel le montrent.

              🔴 Le 21 septembre 2026, ce bloc a change de nature. Il montrait
              trois vignettes qui renvoyaient vers les Reels publics d'une
              cliente. Elie : *« sans le lien vers le reseau social de la
              personne, parce que les reseaux, ils n'ont pas encore beaucoup de
              resultats. »* Les fichiers sont donc servis par le site et se
              regardent sur place. Voir `publications-livrees.ts`.

              ⚠️ La meme bande avait ete posee sur l'accueil et retiree tout de
              suite : elle arrivait sans titre, donc sans raison d'etre la. Ici
              elle repond a la question que la liste d'etapes vient de poser, et
              le titre au-dessus le dit. Une image de gens qui sourient ne se
              pose jamais toute seule. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 border-t border-border/60 pt-12"
          >
            {/* Le titre etait en `text-xl`, plus petit que tous les titres de
                la page. Il porte une preuve verifiable, il merite l'echelle
                normale. */}
            <h3 className="section-title">
              <span className="text-foreground">
                {language === 'fr' ? 'Deux vidéos et un carrousel, ' : 'Two videos and a carousel, '}
              </span>
              <span className="text-primary">{language === 'fr' ? 'montés et livrés.' : 'edited and delivered.'}</span>
            </h3>
            <p className="section-lede mt-5">
              {language === 'fr'
                ? "Format vertical, le sujet en une phrase posée sur l'image, et la personne qui parle de son métier. Lancez la lecture, ou faites glisser le carrousel."
                : 'Vertical format, the topic in one line over the image, and someone talking about their trade. Press play, or swipe the carousel.'}
            </p>
            <TravailLivre className="mt-8" />
          </motion.div>
        </div>
      </section>

      {/* ─────────── Ce qui est inclus ─────────── */}
      <section className="py-20 sm:py-32" aria-labelledby="social-included-heading">
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
                className="section-title mb-5"
              >
                <span className="text-foreground">
                  {language === 'fr' ? 'Pour 890 € par mois, ' : 'For €890 a month, '}
                </span>
                <span className="text-primary">
                  {language === 'fr' ? 'vous avez tout ça.' : 'you get all of this.'}
                </span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {language === 'fr'
                  ? "Un seul montant, et c'est le seul. Pas de frais de démarrage, pas de supplément pour un sous-titre ou une légende, pas de ligne surprise sur la facture."
                  : 'One amount, and it is the only one. No setup fee, no extra charge for a subtitle or a caption, no surprise line on the invoice.'}
              </p>
              {/* ⚠️ « Sans engagement » est un argument concurrentiel, pas une
                  formalite : l'agence qui vend le meme prix l'affiche en
                  premier. Ne pas le rentrer dans une note de bas de section. */}
              <p className="mt-5 text-base font-medium text-foreground">
                {language === 'fr'
                  ? 'Sans engagement. Vous payez au mois, vous arrêtez quand vous voulez.'
                  : 'No commitment. You pay monthly, you stop whenever you want.'}
              </p>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                {language === 'fr' ? (
                  <>
                    Vous voulez autre chose : plus de vidéos, un tournage plus long, vos messages
                    privés gérés ?{' '}
                    <Link to="/contact" className="font-medium text-primary underline underline-offset-4">
                      Écrivez-moi
                    </Link>
                    , je vous réponds avec un prix.
                  </>
                ) : (
                  <>
                    Want something else: more videos, a longer shoot, your inbox handled?{' '}
                    <Link to="/contact" className="font-medium text-primary underline underline-offset-4">
                      Write to me
                    </Link>{' '}
                    and I will come back with a price.
                  </>
                )}
              </p>
            </motion.div>

            {/* ⚠️ La liste etait en 15 px, gris a 85 %, avec une pastille de
                20 px devant chaque ligne. Elie : « c'est du petit texte la
                qu'on a du mal a voir ». Elle est maintenant a la taille du
                corps de texte, en couleur pleine, et la coche fait 18 px. */}
            <ul className="lg:col-span-7">
              {included.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="flex items-start gap-4 border-t border-border py-5"
                >
                  <Check className="mt-1 h-[18px] w-[18px] shrink-0 text-primary" aria-hidden="true" />
                  {/* Le libelle porte l'information, le detail la precise.
                      Elie : « mets les elements importants en gras, comme
                      journee de tournage, materiel, et a cote en police fine le
                      detail. » Sur une liste de huit lignes de meme graisse,
                      l'oeil doit tout lire pour savoir ce qu'il y a dedans.
                      ⚠️ Cette forme est reservee aux listes de specifications.
                      Dans la prose du blog, la liste a en-tete gras reste
                      interdite et `check:writing` la signale. */}
                  <span className="text-base leading-relaxed sm:text-lg">
                    <span className="font-bold text-foreground">{item.label}</span>
                    <span className="text-muted-foreground">, {item.detail}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────── Les trois choses en plus ───────────
          ⚠️ Liste editoriale separee par des filets, numeros en `text-5xl`.
          Pas de grille de cartes : on ne compare rien ici, on enumere. Et un
          numero est un repere, donc il se voit (regle 2 des retours d'Elie).
          🔴 Ne jamais transformer ca en offre de lancement ni en compte a
          rebours : les trois sont permanentes, c'est ce qui les rend credibles. */}
      <section className="py-20 sm:py-32 bg-secondary/30 border-y border-border/50" aria-labelledby="social-bonus-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.h2
            id="social-bonus-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-5"
          >
            <span className="text-foreground">
              {language === 'fr' ? 'Et trois choses en plus, ' : 'And three more things, '}
            </span>
            <span className="text-primary">
              {language === 'fr' ? 'au même prix.' : 'at the same price.'}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-lede"
          >
            {language === 'fr'
              ? "Elles ne sont pas une promotion de lancement et elles ne s'arrêtent pas. Elles font partie de l'offre."
              : 'They are not a launch promotion and they do not expire. They are part of the offer.'}
          </motion.p>

          <ul className="mt-12">
            {bonus.map((item, index) => (
              <motion.li
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="flex flex-col gap-3 border-t border-border py-8 sm:flex-row sm:gap-8"
              >
                <span
                  className="text-5xl font-semibold leading-none text-primary sm:w-20 sm:shrink-0"
                  aria-hidden="true"
                >
                  {item.num}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────── Le combo site + réseaux ───────────
          🔴 Ce paragraphe disait : « Une video a 56 000 vues sans rien
          derriere [...] C'est exactement ce qui s'est passe : beaucoup de vues,
          et aucune page pour recevoir les gens. » Deux relectures aveugles sur
          deux l'ont releve : le seul resultat chiffre du site etait presente
          comme n'ayant rapporte aucun client. L'ebeniste sceptique : « c'est
          moi qui aurais du dire ca, pas lui. » La therapeute : « donc a 890 €
          seul, il ne se passe rien ? »
          L'argument site + reseaux reste, l'aveu qui detruisait la preuve est
          parti. Ne pas le reintroduire pour faire honnete : l'honnetete du site
          vit dans les trois interdits de l'audit, pas dans l'auto-sabotage. */}
      <section className="py-20 sm:py-32" aria-labelledby="social-combo-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            id="social-combo-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-foreground mb-6"
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
              ? "Une vidéo qui marche envoie des gens quelque part. S'il n'y a rien au bout, l'attention retombe et vous ne vous en apercevez même pas. C'est pour ça que le site est dans l'offre et pas en supplément : une page qui explique ce que vous faites et qui propose un rendez-vous transforme cette attention en demandes. Je fais les deux métiers, donc tout parle d'une seule voix et vous n'avez qu'un interlocuteur."
              : 'A video that works sends people somewhere. If there is nothing at the end of it, the attention fades and you never even notice. That is why the site is part of the offer and not an add-on: a page that explains what you do and offers a booking turns that attention into enquiries. I do both trades, so everything speaks with one voice and you only have one person to deal with.'}
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
      {/* ⚠️ C'etait un troisieme accordeon, avec ses propres classes : fond
          gris, coins arrondis, bordure rose a l'ouverture. Voir la note de
          `FaqSection`, la presentation est la meme sur les quatre pages. */}
      <FaqSection
        id="social-faq-heading"
        items={faq.map((item) => ({ question: item.q, answer: item.a }))}
        titre={
          <>
            <span className="text-foreground">{language === 'fr' ? 'Les questions ' : 'The questions '}</span>
            <span className="text-primary">{language === 'fr' ? "qu'on me pose." : 'people ask me.'}</span>
          </>
        }
      />

      {/* Il y avait ici un dernier appel a l'action, « On tourne quand ? »,
          avant le maillage, les liens internes et la section de contact. La
          section de contact porte maintenant le formulaire d'audit : une page
          se termine par une seule proposition, sur tout le site. */}

      {/* ⚠️ Il y avait ici `ServiceResources`, un bloc de liens vers le blog
          et le guide pilier. Elie : « le truc de blog, ca fait plein de liens,
          comprends rien, c'est moche, faut enlever ». Le maillage vers le
          corpus passe par la FAQ de l'accueil, par le pied de page et par
          `InternalLinks`, qui suffisent : le rapport Liens de la Search
          Console ne perd rien. */}

      {/* Les six pages locales du pilier réseaux, nommées dans une phrase.
          🔴 Elles étaient liées depuis le pied de page, dans un mur de dix
          étiquettes qu'Elie a fait retirer le 17 septembre 2026. Leur place
          est ici : c'est leur page pilier, et un lecteur qui descend jusque
          là cherche justement à savoir si Elie se déplace chez lui.
          ⚠️ C'est le seul point d'entrée du site rendu vers ces six pages.
          Ne pas le supprimer sans leur en donner un autre. */}
      {language === 'fr' && (
        <section className="border-t border-border/50 py-12 sm:py-16" aria-labelledby="social-zones">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 id="social-zones" className="text-lg font-semibold text-foreground sm:text-xl">
              Où je viens tourner.
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Je tourne sur place à {zoneSociale(0)}, {zoneSociale(1)}, {zoneSociale(2)} et{' '}
              {zoneSociale(3)}, et je me déplace dans toute la {zoneSociale(4)} et la{' '}
              {zoneSociale(5)}. Le trajet ne se facture pas, mais il se planifie : une vallée à
              monter, c&rsquo;est la journée entière.
            </p>
          </div>
        </section>
      )}

      <InternalLinks currentPage="social" />
      <ContactMethodsSection />
    </>
  );
};

export default SocialMedia;
