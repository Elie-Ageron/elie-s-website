import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ScrollArrow = () => {
  const { language } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="mt-10 sm:mt-12 flex flex-col items-center gap-2 cursor-pointer group mx-auto"
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      aria-label={language === 'fr' ? 'Découvrir' : 'Discover'}
    >
      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
        {language === 'fr' ? 'Découvrir' : 'Discover'}
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <ArrowDown className="w-5 h-5 text-primary" />
      </motion.div>
    </motion.button>
  );
};

export default ScrollArrow;
