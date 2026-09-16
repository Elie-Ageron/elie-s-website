import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './animations/ScrollReveal';

/**
 * Les trois formules de site, sur l'accueil.
 *
 * Refonte de septembre 2026 : c'etaient trois cartes de verre identiques avec
 * une pastille « le plus populaire » et un bouton chacune, soit le patron de
 * grille de tarifs qu'on voit sur toutes les pages SaaS. La grille est devenue
 * trois colonnes editoriales separees par un filet, avec un seul bouton en
 * dessous. Rien n'a change cote contenu.
 *
 * Les prix planchers restent affiches : tous les concurrents locaux en
 * annoncent un dans leur extrait Google, et un prix qu'il faut demander est un
 * prix qu'on peut negocier.
 *
 * Les trois faits de livraison en bas viennent de l'ancienne section « Vos
 * clients vous cherchent sur Google ». Ils y etaient incomprehensibles : le
 * titre parlait de recherche Google et les chiffres parlaient de delais. Ici
 * ils repondent a la question que la grille de prix vient de poser.
 */
const ServicesSection = () => {
  const { t, language } = useLanguage();
  const fr = language === 'fr';

  const formules = [
    {
      title: t('services.landing.title'),
      tagline: t('services.landing.tag'),
      description: t('services.landing.desc'),
      features: [t('services.landing.feature1'), t('services.landing.feature2'), t('services.landing.feature3')],
      price: t('services.landing.price'),
    },
    {
      title: t('services.authority.title'),
      tagline: t('services.authority.tag'),
      description: t('services.authority.desc'),
      features: [
        t('services.authority.feature1'),
        t('services.authority.feature2'),
        t('services.authority.feature3'),
        t('services.authority.feature4'),
      ],
      price: t('services.authority.price'),
    },
    {
      title: t('services.custom.title'),
      tagline: t('services.custom.tag'),
      description: t('services.custom.desc'),
      features: [
        t('services.custom.feature1'),
        t('services.custom.feature2'),
        t('services.custom.feature3'),
        t('services.custom.feature4'),
        t('services.custom.feature5'),
        t('services.custom.feature6'),
      ],
      price: t('services.custom.price'),
    },
  ];

  const faits = [
    {
      valeur: fr ? '7 à 14 jours' : '7 to 14 days',
      desc: fr ? 'de production, une fois vos textes et vos photos reçus.' : 'of production, once your copy and photos are in.',
    },
    {
      valeur: fr ? 'Moins de 24 h' : 'Under 24 h',
      desc: fr ? 'pour une réponse à votre demande.' : 'to get a reply to your request.',
    },
    {
      valeur: fr ? 'Un interlocuteur' : 'One contact',
      desc: fr ? 'du brief à la maintenance, toujours moi.' : 'from brief to maintenance, always me.',
    },
  ];

  return (
    <section id="services" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal direction="up" className="mb-12 sm:mb-16">
          <h2 className="section-title max-w-2xl">
            <span className="text-foreground">{t('services.title1')}</span>{' '}
            <span className="text-primary">{t('services.title2')}</span>
          </h2>
          <p className="section-lede mt-6">{t('services.subtitle')}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {formules.map((formule, index) => (
            <motion.div
              key={formule.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="border-t-2 border-foreground pt-6"
            >
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{formule.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{formule.tagline}</p>

              <p className="mt-5 font-heading text-3xl font-bold tabular-nums text-primary">{formule.price}</p>

              <p className="mt-4 leading-relaxed text-muted-foreground">{formule.description}</p>

              <ul className="mt-6 space-y-3">
                {formule.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <ScrollReveal direction="up">
          <div className="mt-12 flex flex-col items-start gap-5 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-muted-foreground">{t('services.quote.note')}</p>
            <Link
              to="/get-started"
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t('services.quote.link')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Les faits de livraison, en pied de section. */}
        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:mt-16 sm:grid-cols-3">
          {faits.map((fait, index) => (
            <motion.div
              key={fait.valeur}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
            >
              <p className="font-heading text-2xl font-bold tracking-tight text-foreground">{fait.valeur}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{fait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
