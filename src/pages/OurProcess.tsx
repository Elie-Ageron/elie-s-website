import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedTimeline from '@/components/animations/AnimatedTimeline';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import InternalLinks from '@/components/InternalLinks';
import SEO from '@/components/SEO';

const OurProcess = () => {
  const { t, language } = useLanguage();

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: language === 'fr' ? 'Notre Processus de Création de Site Web' : 'Our Web Design Process',
    description: language === 'fr'
      ? 'Comment Elie Ageron crée votre site web haute conversion, de la découverte au lancement.'
      : 'How Elie Ageron builds your high-conversion website, from discovery to launch.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: language === 'fr' ? 'Appel de découverte' : 'Discovery call',
        text: language === 'fr'
          ? 'Nous discutons de vos objectifs, votre audience cible et votre vision.'
          : 'We discuss your goals, target audience, and vision.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: language === 'fr' ? 'Stratégie & Design' : 'Strategy & Design',
        text: language === 'fr'
          ? 'Création des maquettes et de la stratégie de contenu axée conversion.'
          : 'Creating wireframes and a conversion-focused content strategy.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: language === 'fr' ? 'Développement' : 'Development',
        text: language === 'fr'
          ? 'Développement du site avec les technologies modernes, optimisé SEO et mobile.'
          : 'Building the site with modern technologies, optimized for SEO and mobile.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: language === 'fr' ? 'Révision & Retours' : 'Review & Feedback',
        text: language === 'fr'
          ? "Vous examinez le site et nous affinons ensemble jusqu'à ce que ce soit parfait."
          : 'You review the site and we refine together until it is perfect.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: language === 'fr' ? 'Lancement' : 'Launch',
        text: language === 'fr'
          ? 'Mise en ligne du site avec support post-lancement inclus.'
          : 'Going live with post-launch support included.',
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: language === 'fr' ? 'Notre Processus' : 'Our Process', item: 'https://elieageron.com/our-process' },
    ],
  };

  return (
    <>
      <SEO page="process" structuredData={[howToSchema, breadcrumbSchema]} />
      
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 relative grain" aria-labelledby="process-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="process-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">{t('process.title1')}</span>{' '}
              <span className="text-primary">{t('process.title2')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('process.subtitle')}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 relative" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="sr-only">Web Design Process Steps</h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedTimeline />
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks currentPage="process" />

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default OurProcess;
