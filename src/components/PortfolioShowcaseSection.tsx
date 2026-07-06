import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

import portfolioNaura from '@/assets/portfolio-naura.webp';
import portfolioSolarFusion from '@/assets/portfolio-solar-fusion.webp';
import portfolioMyDrop from '@/assets/portfolio-mydrop.webp';

// Section "Réalisations" de la home — la preuve avant le discours.
// Traitement éditorial : grands visuels + légendes, pas de grille de cartes.
const PortfolioShowcaseSection = () => {
  const { language } = useLanguage();

  const projects = [
    {
      image: portfolioNaura,
      name: 'Naura Conseils Finance',
      url: 'https://naura-finances.fr',
      category: language === 'fr' ? 'Courtage & financement · Savoie' : 'Mortgage & financing · Savoie',
      desc:
        language === 'fr'
          ? 'Site vitrine élégant pour une conseillère en financement, pensé pour rassurer et générer des demandes de rendez-vous.'
          : 'Elegant showcase site for a financing advisor, built to reassure visitors and generate appointment requests.',
      alt:
        language === 'fr'
          ? 'Site vitrine Naura Conseils Finance, conseillère en financement et courtage en Savoie, créé par Elie Ageron'
          : 'Naura Conseils Finance showcase website, financing and mortgage advisor in Savoie, designed by Elie Ageron',
      featured: true,
    },
    {
      image: portfolioSolarFusion,
      name: 'Solar Fusion',
      url: 'https://solar-fusion.fr',
      category: language === 'fr' ? 'Installateur solaire' : 'Solar installer',
      desc:
        language === 'fr'
          ? 'Site professionnel pour un installateur de panneaux solaires.'
          : 'Professional website for a solar panel installer.',
      alt:
        language === 'fr'
          ? 'Site web Solar Fusion, installateur de panneaux solaires, créé par Elie Ageron'
          : 'Solar Fusion website, solar panel installer, designed by Elie Ageron',
      featured: false,
    },
    {
      image: portfolioMyDrop,
      name: 'MyDrop',
      url: 'https://mydropai.com',
      category: language === 'fr' ? 'Plateforme SaaS · IA' : 'SaaS platform · AI',
      desc:
        language === 'fr'
          ? 'Site de lancement pour une plateforme de gestion des réseaux sociaux par IA.'
          : 'Launch website for an AI-powered social media management platform.',
      alt:
        language === 'fr'
          ? 'Site web MyDrop, plateforme SaaS de gestion des réseaux sociaux par IA, créé par Elie Ageron'
          : 'MyDrop website, AI social media management SaaS platform, designed by Elie Ageron',
      featured: false,
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const Caption = ({ project }: { project: (typeof projects)[number] }) => (
    <div className="mt-4 flex items-start justify-between gap-4">
      <div className="min-w-0 text-left">
        <div className="flex items-baseline gap-2.5 flex-wrap">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <span className="text-xs sm:text-sm text-muted-foreground/80">{project.category}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-xl">{project.desc}</p>
      </div>
      <ArrowUpRight
        className="w-5 h-5 shrink-0 mt-1 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300"
        aria-hidden="true"
      />
    </div>
  );

  const ProjectImage = ({ project }: { project: (typeof projects)[number] }) => (
    <div className="rounded-2xl overflow-hidden border border-border/60 soft-shadow">
      <img
        src={project.image}
        alt={project.alt}
        className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.015]"
        width={1200}
        height={675}
        loading="lazy"
        decoding="async"
      />
    </div>
  );

  return (
    <section className="py-20 sm:py-28 relative" aria-labelledby="work-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header — centered like the rest of the site */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            {language === 'fr' ? 'Réalisations récentes' : 'Recent work'}
          </span>
          <h2
            id="work-heading"
            className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.1] text-balance"
          >
            {language === 'fr' ? 'Quelques sites que ' : 'A few sites '}
            <span className="text-primary">{language === 'fr' ? "j'ai créés récemment." : 'I built recently.'}</span>
          </h2>
        </motion.div>

        {/* Featured project — full width */}
        {featured.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group">
              <ProjectImage project={project} />
              <Caption project={project} />
            </a>
          </motion.div>
        ))}

        {/* Two supporting projects — side by side, no boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-12 sm:mt-16">
          {others.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group">
                <ProjectImage project={project} />
                <Caption project={project} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Full portfolio link */}
        <div className="mt-12 flex justify-center">
          <Button variant="neonOutline" size="lg" asChild>
            <Link to="/portfolio" className="flex items-center gap-2">
              {language === 'fr' ? 'Voir toutes les réalisations' : 'See all projects'}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcaseSection;
