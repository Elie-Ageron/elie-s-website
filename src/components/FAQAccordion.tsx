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
      answer: 'Your website is your 24/7 salesperson — it works while you sleep. A poorly designed site drives potential clients away within seconds. A high-conversion design builds trust instantly, communicates your value clearly, and turns visits into inquiries. Every day without a strong online presence is revenue left on the table for competitors.',
    },
    {
      question: 'Why choose Élie Ageron for my project?',
      answer: 'I combine design expertise with a business-first mindset — every decision is driven by one goal: results for you. You work directly with me, not a junior outsourced team. I use modern technology, proven UX patterns, and SEO best practices to deliver a site that not only looks great but genuinely grows your business. And I deliver fast, without sacrificing quality.',
    },
    {
      question: 'What is the turnaround time?',
      answer: 'Most projects are delivered within 7 to 14 business days from the start of the project. The timeline depends on scope — a landing page is faster than a full multi-page site. I keep you updated throughout the process, and revisions are included so there are no surprises at the end.',
    },
    {
      question: 'Is my site optimized for mobile and search?',
      answer: 'Yes, always. Every site I build is fully mobile-first — meaning it\'s designed for smartphones before anything else, since that\'s where most of your visitors come from. On the SEO side, I handle technical foundations: page speed, structured data, semantic HTML, meta tags, and proper indexing — so Google can find and rank you from day one.',
    },
    {
      question: 'What happens after the site is launched?',
      answer: 'You own everything — the code, the domain, the content. I provide a handover walkthrough so you can manage your site independently. I also offer optional maintenance and update packages if you prefer to focus on your business and leave the tech side to me. Either way, I\'m always reachable after delivery if questions come up.',
    },
    {
      question: 'How much does a website cost?',
      answer: 'Prices start from €500 for a professional landing page and scale based on the number of pages, integrations, and complexity. I offer clear, fixed-price quotes with no hidden fees — what you see is what you pay. You can check the Pricing page for detailed packages, or book a free call to get a tailored estimate for your project.',
    },
  ],
  fr: [
    {
      question: 'Pourquoi investir dans un design professionnel maintenant ?',
      answer: 'Votre site web est votre commercial 24/7 — il travaille pendant que vous dormez. Un site mal conçu fait fuir vos visiteurs en quelques secondes. Un design à haute conversion inspire confiance immédiatement, communique votre valeur clairement et transforme les visites en demandes. Chaque jour sans une présence en ligne solide, c\'est du chiffre d\'affaires laissé à vos concurrents.',
    },
    {
      question: 'Pourquoi choisir Élie Ageron pour mon projet ?',
      answer: 'Je combine expertise design et vision business — chaque décision est orientée vers un seul objectif : vos résultats. Vous travaillez directement avec moi, pas une équipe sous-traitée. J\'utilise des technologies modernes, des patterns UX éprouvés et les meilleures pratiques SEO pour livrer un site qui ne fait pas que briller, mais qui fait vraiment grandir votre activité. Et je livre vite, sans sacrifier la qualité.',
    },
    {
      question: 'Quel est le délai de livraison ?',
      answer: 'La plupart des projets sont livrés en 7 à 14 jours ouvrés à partir du lancement. Le délai dépend de la portée — une landing page est plus rapide qu\'un site multi-pages complet. Je vous tiens informé tout au long du processus, et les révisions sont incluses pour qu\'il n\'y ait aucune mauvaise surprise à la fin.',
    },
    {
      question: 'Mon site sera-t-il optimisé mobile et SEO ?',
      answer: 'Oui, toujours. Chaque site que je crée est entièrement mobile-first — conçu pour smartphone avant tout, puisque c\'est là que viennent la majorité de vos visiteurs. Côté SEO, je gère les fondations techniques : vitesse de chargement, données structurées, HTML sémantique, balises meta et indexation correcte — pour que Google vous trouve et vous référence dès le premier jour.',
    },
    {
      question: 'Que se passe-t-il après la mise en ligne ?',
      answer: 'Vous êtes propriétaire de tout — le code, le domaine, le contenu. Je vous fournis un accompagnement à la prise en main pour que vous puissiez gérer votre site en autonomie. Je propose également des forfaits de maintenance si vous préférez vous concentrer sur votre activité et me laisser gérer la partie technique. Dans tous les cas, je reste disponible après la livraison si des questions se posent.',
    },
    {
      question: 'Combien coûte un site web ?',
      answer: 'Les tarifs démarrent à 500€ pour une landing page professionnelle et varient selon le nombre de pages, les intégrations et la complexité. Je propose des devis clairs et fixes, sans frais cachés — ce que vous voyez, c\'est ce que vous payez. Consultez la page Tarifs pour les formules détaillées, ou réservez un appel gratuit pour obtenir une estimation personnalisée.',
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
