import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

import portfolioNaura from '@/assets/portfolio-naura.webp';
import portfolioSolarFusion from '@/assets/portfolio-solar-fusion.webp';

/**
 * Le pilier n°2 de l'accueil : les sites.
 *
 * Deux corrections de septembre 2026.
 *
 * 1. Le titre disait « Quelques sites que j'ai crees recemment ». Juste apres
 *    une section entiere sur les reseaux sociaux, la page changeait de sujet
 *    sans prevenir. Le titre fait maintenant la jonction, et il reprend mot
 *    pour mot la promesse du hero.
 * 2. Il y avait deux projets dans une grille de deux colonnes precedee d'un
 *    projet pleine largeur : la case en bas a droite restait vide. La cellule
 *    libre porte desormais le renvoi vers le portfolio complet, ce qui
 *    supprime aussi le bouton centre qui suivait.
 */
const PortfolioShowcaseSection = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  const projects = [
    {
      image: portfolioNaura,
      name: 'Naura Conseils Finance',
      url: 'https://naura-finances.fr',
      category: fr ? 'Courtage et financement, Savoie' : 'Mortgage and financing, Savoie',
      desc: fr
        ? 'Site vitrine pour une conseillère en financement, pensé pour rassurer et déclencher des demandes de rendez-vous.'
        : 'Showcase site for a financing advisor, built to reassure visitors and generate appointment requests.',
      alt: fr
        ? 'Site vitrine Naura Conseils Finance, conseillère en financement et courtage en Savoie, créé par Elie Ageron'
        : 'Naura Conseils Finance showcase website, financing and mortgage advisor in Savoie, designed by Elie Ageron',
      featured: true,
    },
    {
      image: portfolioSolarFusion,
      name: 'Solar Fusion',
      url: 'https://solar-fusion.fr',
      category: fr ? 'Installateur solaire' : 'Solar installer',
      desc: fr
        ? 'Site professionnel pour un installateur de panneaux solaires.'
        : 'Professional website for a solar panel installer.',
      alt: fr
        ? 'Site web Solar Fusion, installateur de panneaux solaires, créé par Elie Ageron'
        : 'Solar Fusion website, solar panel installer, designed by Elie Ageron',
      featured: false,
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const Caption = ({ project }: { project: (typeof projects)[number] }) => (
    <div className="mt-5 flex items-start justify-between gap-4">
      <div className="min-w-0 text-left">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
            {project.name}
          </h3>
          <span className="text-sm text-muted-foreground">{project.category}</span>
        </div>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
      </div>
      <ArrowUpRight
        className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </div>
  );

  const ProjectImage = ({ project }: { project: (typeof projects)[number] }) => (
    <div className="soft-shadow overflow-hidden rounded-2xl border border-border">
      <img
        src={project.image}
        alt={project.alt}
        className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
        width={1200}
        height={675}
        loading="lazy"
        decoding="async"
      />
    </div>
  );

  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          {/* ⚠️ Centre, titre et chapo compris. Elie : « la c'est une toute
              nouvelle section, il faut le centrer. Tu mets "Si le site ne suit
              pas" sur la ligne d'en dessous, "je le refais". En dessous de ce
              titre, pareil, centre. » Le `block` force la coupure a l'endroit
              voulu au lieu de la laisser au navigateur. */}
          <h2 id="work-heading" className="section-title mx-auto max-w-3xl">
            <span className="block">{fr ? 'Si le site ne suit pas,' : 'If the site cannot keep up,'}</span>
            <span className="block text-primary">{fr ? 'je le refais.' : 'I rebuild it.'}</span>
          </h2>
          <p className="section-lede mx-auto mt-6 text-center">
            {fr
              ? "Une vidéo qui marche renvoie du monde quelque part. Si ce quelque part date de 2018, la vidéo travaille dans le vide. Voilà deux sites que j'ai livrés cette année."
              : 'A video that works sends people somewhere. If that somewhere dates from 2018, the video works for nothing. Here are two sites I delivered this year.'}
          </p>
        </motion.div>

        {featured.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
              <ProjectImage project={project} />
              <Caption project={project} />
            </a>
          </motion.div>
        ))}

        {/* Le second projet, et le renvoi vers le portfolio dans la cellule
            qui restait vide. */}
        <div className="mt-14 grid grid-cols-1 items-start gap-x-10 gap-y-12 sm:mt-16 md:grid-cols-2">
          {others.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
                <ProjectImage project={project} />
                <Caption project={project} />
              </a>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:pt-10"
          >
            <p className="font-heading text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              {fr ? 'Site une page, vitrine, ou refonte complète.' : 'One page, showcase site, or full rebuild.'}
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              {fr
                ? 'Le portfolio complet montre le reste, avec à chaque fois ce que le client vendait et ce qui a changé une fois le site en ligne.'
                : 'The full portfolio shows the rest, each time with what the client sold and what changed once the site went live.'}
            </p>
            <Link
              to="/portfolio"
              className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-foreground px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {fr ? 'Voir le portfolio' : 'See the portfolio'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcaseSection;
