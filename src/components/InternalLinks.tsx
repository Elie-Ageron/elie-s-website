import { motion } from 'framer-motion';
import { ArrowRight, FileText, DollarSign, Briefcase, HelpCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface InternalLinksProps {
  currentPage: 'home' | 'why' | 'process' | 'pricing' | 'portfolio' | 'contact' | 'blog';
}

const InternalLinks = ({ currentPage }: InternalLinksProps) => {
  const { language } = useLanguage();

  const links = [
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
      id: 'pricing',
      path: '/pricing',
      icon: DollarSign,
      title: language === 'fr' ? 'Tarifs' : 'Pricing',
      desc: language === 'fr' ? 'Landing pages dès 500€' : 'Landing pages from €500',
      anchor: '#pricing-plans-heading',
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
      desc: language === 'fr' ? 'Stratégies web & SEO' : 'Web & SEO strategies',
      anchor: '',
    },
  ];

  // Filter out current page and limit to 3 links
  let filteredLinks = links.filter(link => link.id !== currentPage).slice(0, 3);

  // Smart linking: If on "why" page, prioritize pricing link with anchor
  if (currentPage === 'why') {
    const pricingLink = links.find(l => l.id === 'pricing');
    const otherLinks = links.filter(l => l.id !== 'pricing' && l.id !== currentPage).slice(0, 2);
    if (pricingLink) {
      filteredLinks = [pricingLink, ...otherLinks];
    }
  }

  return (
    <section className="py-12 sm:py-16" aria-label="Related content">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8"
        >
          {language === 'fr' ? 'Continuer votre exploration' : 'Continue exploring'}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {filteredLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`${link.path}${link.anchor}`}
                className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:neon-border transition-all block h-full"
                id={`internal-link-${link.id}`}
              >
                <div className="p-2 rounded-lg bg-primary/20 shrink-0" aria-hidden="true">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                    {link.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {link.desc}
                  </p>
                </div>
                <ArrowRight 
                  className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" 
                  aria-hidden="true" 
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
