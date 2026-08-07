import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Chiffres réels + argument central, en colonnes éditoriales (pas de cartes).
const StatsSection = () => {
  const { t, language } = useLanguage();

  const facts = [
    {
      value: language === 'fr' ? '7 à 14 jours' : '7 to 14 days',
      desc:
        language === 'fr'
          ? 'entre le brief et la mise en ligne de votre site.'
          : 'from the brief to your site going live.',
    },
    {
      value: '< 24 h',
      desc:
        language === 'fr'
          ? 'pour une réponse à votre demande, gratuite et sans engagement.'
          : 'to get a reply to your request, free, no commitment.',
    },
    {
      value: language === 'fr' ? '1 interlocuteur' : '1 contact',
      desc:
        language === 'fr'
          ? 'du brief à la maintenance : vous parlez toujours à la même personne.'
          : 'from brief to maintenance: you always talk to the same person.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative" aria-labelledby="stats-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            {language === 'fr' ? 'Ce que ça change' : 'Why it matters'}
          </span>
          <h2
            id="stats-heading"
            className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.1] text-balance"
          >
            {language === 'fr' ? 'Vos clients vous cherchent sur Google ' : 'Your clients Google you '}
            <span className="text-primary">
              {language === 'fr' ? "avant de vous appeler." : 'before they call you.'}
            </span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {language === 'fr'
              ? "Un site professionnel transforme cette recherche en prise de contact, même la nuit, même le week-end, et surtout sur mobile, où naviguent 7 visiteurs sur 10."
              : 'A professional website turns that search into an inquiry, at night, on weekends, and above all on mobile, where 7 out of 10 visitors browse.'}
          </p>
        </motion.div>

        {/* Facts, editorial columns with thin rules */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-12 sm:mt-16">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.value}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="border-t border-border/60 pt-5"
            >
              <p className="text-3xl sm:text-4xl font-medium text-foreground tabular-nums">{fact.value}</p>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{fact.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 sm:mt-14 flex justify-center"
        >
          <Button asChild variant="hero" size="lg" className="group">
            <Link to="/our-process" className="flex items-center gap-2">
              {t('stats.cta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
