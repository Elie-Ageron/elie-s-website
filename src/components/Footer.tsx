import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-foreground">
              <span className="text-primary">É</span>lie Ageron
            </span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} {t('footer.rights')}
            </span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {t('footer.made')}
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
