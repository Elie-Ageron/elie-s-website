import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface InternalLinksProps {
  currentPage: 'why' | 'pricing';
}

const InternalLinks = ({ currentPage }: InternalLinksProps) => {
  const { language } = useLanguage();

  const links = {
    why: {
      to: '/pricing',
      icon: CreditCard,
      title: language === 'fr' ? 'Voir les Tarifs' : 'View Pricing',
      description: language === 'fr'
        ? 'Découvrez nos tarifs transparents et trouvez la solution parfaite pour votre budget.'
        : 'Explore our transparent pricing and find the perfect solution for your budget.',
    },
    pricing: {
      to: '/why-a-website',
      icon: Lightbulb,
      title: language === 'fr' ? 'Pourquoi un Site Web ?' : 'Why a Website?',
      description: language === 'fr'
        ? 'Découvrez comment un site professionnel peut transformer votre business.'
        : 'Learn how a professional website can transform your business.',
    },
  };

  const link = links[currentPage];

  return (
    <section className="py-12" aria-label="Related content">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 hover:neon-border transition-all duration-300"
        >
          <Link 
            to={link.to}
            className="flex items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/20 shrink-0">
                <link.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </div>
            <ArrowRight 
              className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
              aria-hidden="true" 
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InternalLinks;
