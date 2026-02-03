import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqContent = {
  en: [
    {
      question: 'Why should I invest in a professional design now?',
      answer: 'Your website is your 24/7 salesperson. A high-conversion design ensures you stop losing leads to competitors with better online presence.',
    },
    {
      question: 'Why choose Élie Ageron for my project?',
      answer: 'I focus on ROI. My websites are built to turn visitors into paying customers using advanced psychological triggers and modern tech.',
    },
    {
      question: 'What is the turnaround time?',
      answer: 'Landing pages take 48 hours. Complete showcase sites are ready in 7 to 14 days.',
    },
    {
      question: 'Is my site optimized for mobile and search?',
      answer: 'Absolutely. Every project is mobile-first and includes elite SEO foundations to ensure visibility.',
    },
  ],
  fr: [
    {
      question: 'Pourquoi investir dans un design professionnel maintenant ?',
      answer: 'Votre site web est votre commercial 24/7. Un design haute conversion vous assure de ne plus perdre de leads au profit de concurrents mieux positionnés en ligne.',
    },
    {
      question: 'Pourquoi choisir Élie Ageron pour mon projet ?',
      answer: 'Je me concentre sur le ROI. Mes sites sont conçus pour transformer les visiteurs en clients payants grâce à des déclencheurs psychologiques avancés et des technologies modernes.',
    },
    {
      question: 'Quel est le délai de livraison ?',
      answer: 'Les landing pages sont livrées en 48 heures. Les sites vitrines complets sont prêts en 7 à 14 jours.',
    },
    {
      question: 'Mon site sera-t-il optimisé mobile et SEO ?',
      answer: 'Absolument. Chaque projet est mobile-first et inclut des fondations SEO élites pour garantir votre visibilité.',
    },
  ],
};

const FAQAccordion = () => {
  const { language, t } = useLanguage();
  const faqs = faqContent[language];

  return (
    <section className="py-12 sm:py-16 md:py-20" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-foreground">{language === 'fr' ? 'Questions' : 'Frequently Asked'}</span>{' '}
            <span className="text-primary">{language === 'fr' ? 'Fréquentes' : 'Questions'}</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {language === 'fr' 
              ? 'Tout ce que vous devez savoir avant de démarrer votre projet.'
              : 'Everything you need to know before starting your project.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary border border-border rounded-xl px-4 sm:px-6 overflow-hidden transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline hover:text-primary transition-colors py-4 sm:py-5 text-sm sm:text-base [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;
