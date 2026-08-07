import { motion } from 'framer-motion';
import { ArrowRight, FileText, Briefcase, HelpCircle, BookOpen, Share2, LayoutGrid, MapPin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface InternalLinksProps {
  currentPage: 'home' | 'services' | 'why' | 'process' | 'portfolio' | 'contact' | 'blog' | 'social' | 'guides' | 'about';
}

const InternalLinks = ({ currentPage }: InternalLinksProps) => {
  const { language } = useLanguage();

  const links = [
    {
      id: 'services',
      path: '/services',
      icon: LayoutGrid,
      title: language === 'fr' ? 'Tous les services' : 'All services',
      desc: language === 'fr' ? 'Site, réseaux, Google, branding, SEO' : 'Site, social, Google, branding, SEO',
      anchor: '',
    },
    {
      id: 'social',
      path: '/reseaux-sociaux',
      icon: Share2,
      title: language === 'fr' ? 'Réseaux sociaux' : 'Social media',
      desc: language === 'fr' ? 'Je filme, je monte, je publie tout le mois' : 'I film, edit and post all month long',
      anchor: '',
    },
    {
      id: 'guides',
      path: '/guides',
      icon: GraduationCap,
      title: language === 'fr' ? 'Guides gratuits' : 'Free guides',
      desc: language === 'fr' ? 'Réseaux, vidéo et Google, expliqués' : 'Social, video and Google, explained',
      anchor: '',
    },
    {
      id: 'about',
      path: '/a-propos',
      icon: MapPin,
      title: language === 'fr' ? 'À propos' : 'About',
      desc: language === 'fr' ? 'Qui je suis et comment je travaille' : 'Who I am and how I work',
      anchor: '',
    },
    {
      id: 'why',
      path: '/why-a-website',
      icon: HelpCircle,
      title: language === 'fr' ? 'Pourquoi un site ?' : 'Why a website?',
      desc: language === 'fr' ? 'Découvrez l\'impact d\'un site pro' : 'Discover the impact of a pro site',
      anchor: '',
    },
    {
      id: 'process',
      path: '/our-process',
      icon: FileText,
      title: language === 'fr' ? 'Notre processus' : 'Our process',
      desc: language === 'fr' ? 'Comment nous créons votre site' : 'How we build your site',
      anchor: '',
    },
    {
      id: 'portfolio',
      path: '/portfolio',
      icon: Briefcase,
      title: language === 'fr' ? 'Portfolio' : 'Portfolio',
      desc: language === 'fr' ? 'Nos réalisations clients' : 'Our client projects',
      anchor: '',
    },
    {
      id: 'blog',
      path: '/blog',
      icon: BookOpen,
      title: language === 'fr' ? 'Blog & Conseils' : 'Blog & Tips',
      desc: language === 'fr' ? 'Stratégies web, réseaux & SEO' : 'Web, social & SEO strategies',
      anchor: '',
    },
  ];

  // Filter out current page and limit to 3 links
  const filteredLinks = links.filter(link => link.id !== currentPage).slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-secondary/50 border-y border-border/50" aria-label="Related content">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg font-semibold text-foreground text-center mb-6 sm:mb-8"
        >
          {language === 'fr' ? 'Continuer votre exploration' : 'Continue exploring'}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
          {filteredLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Link
                to={`${link.path}${link.anchor}`}
                className="group flex items-start gap-3.5 p-3.5 sm:p-4 h-full rounded-xl transition-colors duration-300 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                id={`internal-link-${link.id}`}
              >
                <span
                  className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <link.icon className="w-[18px] h-[18px]" strokeWidth={2} />
                </span>
                <div className="flex-1 min-w-0">
                  <span className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                      {link.title}
                    </h3>
                    <ArrowRight
                      className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform duration-300 shrink-0"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    {link.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
