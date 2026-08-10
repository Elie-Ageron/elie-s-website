import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Plane, MapPin, CalendarCheck, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
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
 * Page dédiée au segment « lieux de réception » : domaines de mariage, salles,
 * hôtellerie de charme, en Savoie, Haute-Savoie et autour d'Annecy.
 *
 * Elle est volontairement FRANCAIS SEUL (`forceLang="fr"`) : le segment est
 * strictement local et l'anglais n'y a aucun public.
 *
 * C'est la seule page du site qui AFFICHE une grille de prix complète.
 * `/services` garde la règle « aucun prix affiché » (sur-mesure, land & expand).
 * Ici l'offre est productisée sur un seul segment, donc le prix filtre en amont
 * au lieu de faire perdre un rendez-vous.
 *
 * Ordre des sections : il suit les 5 questions qu'un exploitant se pose, dans
 * l'ordre où il se les pose. Ne pas réordonner sans raison.
 *   1. c'est pour moi ?   2. ça ressemble à quoi ?   3. combien ?
 *   4. ça se passe comment ?   5. pourquoi lui ?
 *
 * FILM_VITRINE : tant qu'aucun film de lieu n'existe, la section vidéo ne se
 * rend pas. On ne met pas de vidéo d'attente, une mauvaise démo coûte plus cher
 * que pas de démo. Renseigner l'objet le jour où le premier lieu est filmé.
 */

const FILM_VITRINE: { src: string; poster: string; lieu: string } | null = null;

/* ── Ce que contient la Fondation ── */
const fondation = [
  {
    titre: 'Le film de votre lieu, 60 à 90 secondes',
    benefice:
      "Vous avez enfin quelque chose à mettre en haut de votre page qui ne soit pas une photo. Il sert sur votre site, sur votre fiche Google, en épinglé, et sur vos annonces.",
  },
  {
    titre: 'Votre fiche Google reprise en entier',
    benefice:
      "Photos, catégories, description, horaires, protocole de réponse aux avis. Quand quelqu'un tape le nom de votre commune et le mot mariage, vous existez.",
  },
  {
    titre: 'La page où atterrissent les gens',
    benefice:
      "Ceux qui vous découvrent arrivent quelque part au lieu de se perdre. Une page qui montre le lieu, dit l'essentiel et propose de vous joindre.",
  },
  {
    titre: 'Votre profil Instagram remis à plat',
    benefice:
      "Bio, lien, épinglés, à la une. En trois secondes on sait qui vous êtes, où vous êtes et ce que vous proposez.",
  },
  {
    titre: 'Les images fixes de la journée',
    benefice:
      "Les vues aériennes prises au drone et des images tirées des rushes, retouchées. De quoi tenir plusieurs semaines sans rien payer de plus.",
  },
];

/* ── Les 3 formules d'abonnement ── */
const formules = [
  {
    nom: 'Socle',
    prix: '890 €',
    tournage: '1 journée par mois',
    videos: '6 vidéos montées et publiées',
    inclus: ['Légendes et calendrier', 'Publication à votre place'],
    exclus: ['Stories', 'Images fixes', 'Entretien de la fiche Google'],
    vedette: false,
  },
  {
    nom: 'Signature',
    prix: '1 290 €',
    tournage: '1 journée par mois',
    videos: '8 vidéos montées et publiées',
    inclus: [
      'Légendes et calendrier',
      'Publication à votre place',
      'Stories',
      'Images fixes du tournage',
      'Entretien de la fiche Google',
      'Point mensuel avec les chiffres',
    ],
    exclus: ['Réponses aux messages'],
    vedette: true,
  },
  {
    nom: 'Régie',
    prix: '1 890 €',
    tournage: '1 journée et demie par mois',
    videos: '12 vidéos montées et publiées',
    inclus: [
      'Tout ce que contient Signature',
      'Je réponds aussi à vos messages et commentaires',
      'Un nouveau film du lieu chaque trimestre',
    ],
    exclus: [],
    vedette: false,
  },
];

/* ── FAQ, également envoyée à Google en FAQPage ── */
const faq = [
  {
    q: 'Pourquoi la Fondation est obligatoire avant l’abonnement ?',
    a: "Parce qu'envoyer du monde vers un chemin cassé ne sert à rien, et j'ai vu ce que ça donne. Une vidéo que j'ai publiée pour une cliente a fait plus de 56 000 vues, et il n'y avait aucune page derrière pour recevoir ces gens. L'attention est retombée. Donc on répare d'abord la fiche Google, la page et le profil, et seulement ensuite on y envoie du monde. Si vous voulez l'abonnement seul, je vous dirai non.",
  },
  {
    q: 'Combien de temps ça me prend, à moi ?',
    a: "Une journée par mois, et c'est le seul moment où vous êtes impliqué. Vous n'avez ni script à apprendre ni matériel à sortir. J'arrive avec les questions déjà écrites, vous y répondez, on refait les prises autant de fois qu'il faut. Le reste du mois, vous n'ouvrez jamais l'application.",
  },
  {
    q: 'Je ne suis pas à l’aise devant une caméra.',
    a: "C'est ce que tout le monde me dit, et sur un lieu de réception ça compte moins qu'ailleurs : le héros de la vidéo, c'est le domaine, pas vous. Une bonne partie du tournage se passe sans que vous apparaissiez. Quand vous parlez, ce sont des réponses à des questions, jamais un texte à réciter.",
  },
  {
    q: 'Vous filmez pendant les réceptions ?',
    a: "Rarement, et jamais sans accord écrit. Un mariage appartient aux mariés, pas au lieu, et le droit à l'image de leurs invités s'applique. On filme surtout le lieu hors événement, à la bonne heure, quand il est le plus beau. Si vous voulez des images d'ambiance en réception, ça se prépare avec les mariés très en amont.",
  },
  {
    q: 'Le drone, c’est autorisé chez moi ?',
    a: "Ça dépend de votre zone, et je le vérifie avant de venir sur la carte officielle des restrictions. Certains secteurs proches d'un aérodrome ou d'un couloir aérien sont limités. Dans tous les cas je ne survole jamais un rassemblement de personnes, donc jamais vos invités.",
  },
  {
    q: 'Vous faites aussi de la photo ?',
    a: "Pas au sens d'un reportage photo, et je préfère vous le dire avant que vous le demandiez. Vous récupérez les vues aériennes prises au drone et des images tirées des rushes, retouchées. C'est fait pour vos réseaux et votre site, pas pour de l'impression grand format. Je ne remplace pas votre photographe, je comble le trou entre deux de ses passages.",
  },
  {
    q: 'Vous vous déplacez jusqu’où ?',
    a: "Je suis basé à Albertville. Je me déplace dans un rayon d'environ une heure : Annecy et son lac, Aix-les-Bains, Chambéry, le Beaufortain, la Tarentaise, les Bauges, la Maurienne et la Combe de Savoie. Au delà, la journée de tournage devient un aller-retour trop long pour rester mensuel.",
  },
  {
    q: 'Combien de vues je peux espérer ?',
    a: "Personne ne peut vous garantir un chiffre, et méfiez-vous de ceux qui le font. Ce que je garantis, c'est le livrable et le rythme : le film, la fiche, la page, et les vidéos publiées chaque mois. Le reste dépend de votre lieu, de votre marché et de la saison.",
  },
];

/**
 * Formulaire d'audit, deux champs et pas un de plus.
 *
 * C'est la voie lente du funnel : celui qui n'est pas pret a reserver un appel
 * doit pouvoir demander quelque chose sans avoir a se justifier. Chaque champ
 * ajoute ici coute des demandes. Le lien du site n'est pas demande : il se
 * retrouve en dix secondes a partir du nom du lieu.
 *
 * Poste vers le meme endpoint Google Apps Script que le formulaire de contact
 * global, pour que les demandes arrivent la ou Elie regarde deja.
 */
const FORM_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxu13-AnjyCaXr818JdA-hCSohWEE2ii1ELGXM-PeQ_sGYYB8rvEhXr_NYh7YWedA4qyg/exec';

const AuditForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lieu, setLieu] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: lieu,
          email,
          message: `DEMANDE D'AUDIT (page lieux de réception)\nLieu : ${lieu}`,
        }),
      });

      toast({
        title: 'Demande reçue',
        description: 'Vous recevez votre audit en vidéo sous 48 h. Rien d’autre à faire.',
      });

      setLieu('');
      setEmail('');
    } catch (error) {
      console.error('Audit form error:', error);
      toast({
        title: 'L’envoi a échoué',
        description: 'Écrivez-moi directement à elie@elieageron.com, ça marchera.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="audit-lieu">Le nom de votre lieu</Label>
          <Input
            id="audit-lieu"
            required
            value={lieu}
            onChange={(e) => setLieu(e.target.value)}
            placeholder="Domaine de …"
            autoComplete="organization"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="audit-email">Où je vous l’envoie</Label>
          <Input
            id="audit-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vous@votredomaine.fr"
            autoComplete="email"
          />
        </div>
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isSubmitting}>
        <span className="flex items-center justify-center gap-2">
          {isSubmitting ? 'Envoi…' : 'Recevoir mon audit'}
          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </span>
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Deux champs, rien d’autre. Je trouve votre site tout seul. Vous recevez la vidéo sous 48 h,
        et je ne vous rappelle pas derrière si vous ne le demandez pas.
      </p>
    </form>
  );
};

const LieuxDeReception = () => {
  const { openCalendly } = useCalendly();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://elieageron.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Vidéo pour lieux de réception',
        item: 'https://elieageron.com/lieux-de-reception',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://elieageron.com/lieux-de-reception#service',
    name: 'Vidéo et réseaux sociaux pour lieux de réception',
    serviceType: 'Production vidéo et gestion de réseaux sociaux pour domaines et salles de réception',
    description:
      "Film du lieu au drone, fiche Google, page de destination et publication mensuelle pour les domaines de mariage, salles de réception et hôtels de charme de Savoie, Haute-Savoie et du bassin annécien.",
    url: 'https://elieageron.com/lieux-de-reception',
    provider: { '@id': 'https://elieageron.com/#person' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Savoie' },
      { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
      { '@type': 'City', name: 'Annecy' },
      { '@type': 'City', name: 'Chambéry' },
      { '@type': 'City', name: 'Aix-les-Bains' },
      { '@type': 'City', name: 'Albertville' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Formules pour lieux de réception',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'La Fondation',
          description:
            "Film du lieu de 60 à 90 secondes, fiche Google Business reprise, page de destination, profil Instagram remis à plat, images fixes. Une seule fois, sans engagement.",
          priceCurrency: 'EUR',
          price: 1490,
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Abonnement Socle',
          description: 'Une journée de tournage par mois, 6 vidéos montées et publiées.',
          priceCurrency: 'EUR',
          price: 890,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'EUR',
            price: 890,
            unitCode: 'MON',
          },
        },
        {
          '@type': 'Offer',
          name: 'Abonnement Signature',
          description:
            'Une journée de tournage par mois, 8 vidéos montées et publiées, stories, images fixes, entretien de la fiche Google.',
          priceCurrency: 'EUR',
          price: 1290,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'EUR',
            price: 1290,
            unitCode: 'MON',
          },
        },
        {
          '@type': 'Offer',
          name: 'Abonnement Régie',
          description:
            "Une journée et demie de tournage par mois, 12 vidéos, réponses aux messages, un nouveau film du lieu chaque trimestre.",
          priceCurrency: 'EUR',
          price: 1890,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'EUR',
            price: 1890,
            unitCode: 'MON',
          },
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
      <SEO
        page="lieux"
        forceLang="fr"
        structuredData={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      {/* ─────────── 1. C'est pour moi ? ─────────── */}
      <section
        className="relative grain min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
        aria-labelledby="lieux-hero-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-primary/8 rounded-full blur-[110px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 -mt-20 sm:-mt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-7 text-xs sm:text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
              Domaines, salles de réception et hôtels de charme
            </span>

            <h1
              id="lieux-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08]"
            >
              <span className="text-foreground">Vous ne vendrez jamais un samedi de plus.</span>
              <br />
              <span className="text-primary">La question, c’est à combien vous vendez celui-là.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Je filme les lieux de réception en Savoie, en Haute-Savoie et autour d’Annecy. Une
              journée de tournage par mois, et vos réseaux tournent sans vous.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticButton>
                <Button variant="hero" size="lg" className="group w-full sm:w-auto" onClick={openCalendly}>
                  <span className="flex items-center gap-2">
                    Réserver un appel de 20 min
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Button>
              </MagneticButton>
              <Button variant="neonOutline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#audit">Recevoir un audit gratuit</a>
              </Button>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-medium">
              Tarifs affichés plus bas · 3 lieux accompagnés à la fois · Albertville et 1 h autour
            </p>
          </motion.div>

          <ScrollArrow />
        </div>
      </section>

      {/* ─────────── 2. Ça ressemble à quoi ? ─────────── */}
      {FILM_VITRINE && (
        <section className="py-16 sm:py-24 bg-secondary/30 border-y border-border/50" aria-labelledby="lieux-film-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 id="lieux-film-heading" className="sr-only">
              Un film de lieu
            </h2>
            <video
              className="w-full rounded-2xl border border-border/60"
              src={FILM_VITRINE.src}
              poster={FILM_VITRINE.poster}
              controls
              playsInline
              preload="none"
            />
            <p className="mt-4 text-sm text-muted-foreground text-center">
              {FILM_VITRINE.lieu}, filmé sur une journée.
            </p>
          </div>
        </section>
      )}

      {/* ─────────── Le problème ─────────── */}
      <section className="py-16 sm:py-24" aria-labelledby="lieux-probleme-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="lieux-probleme-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-7"
          >
            Votre nombre de dates est fini.{' '}
            <span className="text-primary">Votre marge, non.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Vous avez un nombre de dates vendables par an, et ce nombre ne bougera pas. Vous ne
              pouvez pas en produire une de plus. Il ne vous reste donc que deux leviers : rendre
              ces dates plus désirables, et remplir la semaine.
            </p>
            <p>
              Pendant ce temps, votre compte est vivant en juillet, quand vous n’avez plus rien à
              vendre, et muet en janvier, quand tout se décide. Vos plus belles images montrent le
              mariage de quelqu’un d’autre, prises par le photographe des mariés. Et vous passez
              encore des après-midis à faire visiter à des couples qui découvrent le tarif à la fin.
            </p>
            <p className="text-foreground font-medium">
              Ce n’est pas un problème de volonté. En saison, vous êtes là sept jours sur sept.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────── 4. Ça se passe comment ? ─────────── */}
      <section className="py-16 sm:py-24 bg-secondary/30" aria-labelledby="lieux-fondation-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
          >
            <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
            On commence toujours par là
          </motion.span>

          <motion.h2
            id="lieux-fondation-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5 max-w-2xl"
          >
            La Fondation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            Une journée chez vous, une seule fois, et le chemin existe. Ensuite seulement on y
            envoie du monde. C’est un forfait unique, sans engagement, et c’est le préalable à tout
            le reste.
          </motion.p>

          <ul className="-my-1">
            {fondation.map((item, index) => (
              <motion.li
                key={item.titre}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className={`grid sm:grid-cols-[auto_1fr] gap-x-4 gap-y-2 py-6 ${
                  index === 0 ? '' : 'border-t border-border/60'
                }`}
              >
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/12 shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 leading-snug">{item.titre}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{item.benefice}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-border/60 pt-8"
          >
            <span className="text-4xl sm:text-5xl font-bold text-primary tabular-nums">1 490 €</span>
            <span className="text-base text-muted-foreground">une seule fois, sans engagement</span>
          </motion.div>
        </div>
      </section>

      {/* ─────────── 3. Combien ? ─────────── */}
      <section className="py-16 sm:py-24" aria-labelledby="lieux-tarifs-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="lieux-tarifs-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4"
          >
            Ensuite, tous les mois
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            Trois mois minimum, parce qu’en dessous personne ne peut juger un résultat, moi compris.
            Je viens filmer, je monte, j’écris et je publie. Vous n’ouvrez jamais l’application.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5">
            {formules.map((f, index) => (
              <motion.div
                key={f.nom}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                  f.vedette ? 'border-primary/60 bg-primary/[0.04]' : 'border-border/70 bg-secondary/30'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-lg font-bold text-foreground">{f.nom}</h3>
                  {f.vedette && (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      le plus pris
                    </span>
                  )}
                </div>

                <p className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums leading-none">
                  {f.prix}
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/ mois</span>
                </p>

                <p className="mt-4 text-sm text-foreground/85 leading-relaxed">
                  {f.tournage}
                  <br />
                  <span className="font-semibold">{f.videos}</span>
                </p>

                <ul className="mt-5 space-y-2.5 text-sm">
                  {f.inclus.map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-foreground/85">
                      <Check className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                      <span className="leading-relaxed">{line}</span>
                    </li>
                  ))}
                  {f.exclus.map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-muted-foreground">
                      <span className="mt-1.5 h-px w-3.5 bg-muted-foreground/50 shrink-0" aria-hidden="true" />
                      <span className="leading-relaxed line-through decoration-muted-foreground/40">{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-sm text-muted-foreground max-w-2xl"
          >
            Les prix sont affichés parce que vous avez le droit de savoir avant de m’appeler.
            Ils ne se négocient pas, mais le périmètre, oui : si Signature ne rentre pas, on part
            sur Socle.
          </motion.p>
        </div>
      </section>

      {/* ─────────── Pourquoi le drone change quelque chose ─────────── */}
      <section className="py-16 sm:py-24 bg-secondary/30 border-y border-border/50" aria-labelledby="lieux-drone-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="lieux-drone-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-10"
          >
            Ce que vos photos ne montrent pas
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Plane,
                titre: 'L’ampleur',
                texte:
                  "Une photo cadre un angle. Une approche au drone montre le parc, la vue et la distance entre les bâtiments. Les couples arrivent en visite en sachant déjà ce qu’ils vont voir.",
              },
              {
                icon: MapPin,
                titre: 'Le lieu, pas l’événement',
                texte:
                  "Les images de vos réceptions montrent le mariage des autres. Un film de lieu montre le vôtre, et il reste valable des années.",
              },
              {
                icon: CalendarCheck,
                titre: 'La bonne heure',
                texte:
                  "Un domaine filmé à midi est plat. Filmé en fin de journée, il change de nature. C’est gratuit, et presque personne ne le fait.",
              },
            ].map((b, index) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.titre}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.07, duration: 0.45 }}
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{b.titre}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{b.texte}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── 5. Pourquoi lui ? ─────────── */}
      <section className="py-16 sm:py-24" aria-labelledby="lieux-pourqui-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="lieux-pourqui-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-7"
          >
            Pour qui ce <span className="text-primary">n’est pas</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Si vous vendez très peu de dates dans l’année, ce n’est pas rentable pour vous et je
              vous le dirai au téléphone plutôt que de vous faire signer.
            </p>
            <p>
              Si vous cherchez quelqu’un qui monte des vidéos que vous filmez vous-même, ce n’est pas
              ce que je fais. Presque tout le monde a l’intention de filmer, et presque personne ne
              le fait une fois la semaine chargée. Au bout de six semaines il n’y a plus de matière
              et le compte retombe. Je préfère venir.
            </p>
            <p className="text-foreground font-medium">
              Et je ne prends que trois lieux à la fois. Ce n’est pas une posture commerciale, c’est
              ma capacité réelle : filmer une journée par mois chez chacun et suivre les résultats
              prend du temps, et au delà de trois la qualité tombe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-10 rounded-2xl border border-border/70 bg-secondary/40 p-6 sm:p-7"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">Ce que je ne promets pas</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Un nombre de vues, un nombre de réservations, un délai pour que ça marche. Personne ne
              peut le garantir et je préfère vous le dire avant que vous me le demandiez. Ce que je
              garantis, c’est le livrable, le rythme et la qualité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="py-16 sm:py-24 bg-secondary/30 border-y border-border/50" aria-labelledby="lieux-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="lieux-faq-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center leading-tight mb-10 sm:mb-14"
          >
            Les questions <span className="text-primary">qu’on me pose</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`lieux-faq-${index}`}
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

      {/* ─────────── CTA final, deux sorties ─────────── */}
      {/* Voie rapide : l'appel, pour ceux qui sont prets.
          Voie lente : l'audit, pour ceux qui veulent voir avant.
          Les deux sont toujours presentes ensemble. Jamais un seul bouton. */}
      <section id="audit" className="py-12 sm:py-20 scroll-mt-24" aria-label="Passer à l’action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight text-foreground">
              Deux façons de commencer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Si vous savez déjà que ça vous intéresse, prenez vingt minutes au téléphone.
            </p>

            <MagneticButton>
              <Button variant="hero" size="lg" className="group w-full sm:w-auto" onClick={openCalendly}>
                <span className="flex items-center gap-2">
                  Réserver mes 20 minutes
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Button>
            </MagneticButton>

            <div className="mt-14 pt-12 border-t border-border/60">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ou regardez d’abord ce que je vois chez vous
              </h3>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Je passe une demi-heure sur votre fiche Google, votre profil et la page où
                atterrissent les gens, et je vous enregistre quatre minutes de vidéo : ce qui marche
                déjà, et les trois endroits où vous perdez des demandes sans le voir. C’est gratuit
                et vous en faites ce que vous voulez.
              </p>
              <div className="max-w-xl mx-auto">
                <AuditForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <InternalLinks currentPage="lieux" />
      <ContactMethodsSection />
    </>
  );
};

export default LieuxDeReception;
