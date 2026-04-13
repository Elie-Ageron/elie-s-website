import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQSchemaProps {
  page: 'pricing' | 'why' | 'home';
}

const faqData = {
  en: {
    home: [
      {
        question: 'Why should I invest in a professional design now?',
        answer: 'Your website is your 24/7 salesperson. A high-conversion design builds trust instantly, communicates your value clearly, and turns visits into inquiries. Every day without a strong online presence is revenue left on the table for competitors.',
      },
      {
        question: 'Why choose Élie Ageron for my project?',
        answer: 'I combine design expertise with a business-first mindset. You work directly with me, not a junior outsourced team. I use modern technology, proven UX patterns, and SEO best practices to deliver a site that genuinely grows your business.',
      },
      {
        question: 'What is the turnaround time?',
        answer: 'Most projects are delivered within 7 to 14 business days. A landing page is faster than a full multi-page site. Revisions are included so there are no surprises at the end.',
      },
      {
        question: 'Is my site optimized for mobile and search?',
        answer: 'Yes, always. Every site is fully mobile-first and includes SEO foundations: page speed, structured data, semantic HTML, meta tags, and proper indexing so Google can find and rank you from day one.',
      },
      {
        question: 'How much does a website cost?',
        answer: 'Prices start from €500 for a professional landing page. I offer clear, fixed-price quotes with no hidden fees. Check the Pricing page for detailed packages or book a free call for a tailored estimate.',
      },
      {
        question: 'What happens after the site is launched?',
        answer: 'You own everything: the code, the domain, the content. I provide a handover walkthrough so you can manage your site independently. Optional maintenance packages are available if you prefer to focus on your business.',
      },
    ],
    pricing: [
      {
        question: 'How much does a landing page cost?',
        answer: 'A high-conversion landing page by Elie Ageron starts at $500, delivered within 7 to 14 business days. This includes mobile optimization and conversion-focused design.',
      },
      {
        question: 'What is included in the 4-page showcase site?',
        answer: 'The 4-page showcase site at $1500 includes complete SEO optimization, professional branding, content strategy, and an analytics dashboard to track your results.',
      },
      {
        question: 'Do you offer monthly maintenance?',
        answer: 'Yes, optional monthly maintenance starts at $50/month for landing pages and $100/month for showcase sites. This includes updates, security, hosting, and priority support.',
      },
      {
        question: 'Is there a satisfaction guarantee?',
        answer: "Absolutely! Elie Ageron offers a 100% satisfaction guarantee. If you're not completely satisfied with the final result, we'll work until you are, at no extra cost.",
      },
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
        answer: 'All projects are delivered in 7 to 14 business days, depending on scope and complexity.',
      },
      {
        question: 'Is my site optimized for mobile and search?',
        answer: 'Absolutely. Every project is mobile-first and includes elite SEO foundations to ensure visibility.',
      },
    ],
    why: [
      {
        question: 'Why do I need a professional website?',
        answer: 'A professional website is your 24/7 sales machine. It builds credibility, captures leads automatically, and allows you to reach a global audience without geographic limits.',
      },
      {
        question: 'How much business am I losing without a website?',
        answer: 'Studies show that 81% of consumers research online before buying. Without a professional website, you are invisible to these potential customers and losing them to competitors.',
      },
      {
        question: 'How quickly will I see ROI from my website?',
        answer: 'A well-designed website by Elie Ageron typically pays for itself within weeks through new client acquisition. Our clients often see a 40%+ increase in leads within the first month.',
      },
      {
        question: 'Can a website really generate leads while I sleep?',
        answer: 'Yes! Your website works 24/7 across all time zones. With automated lead capture forms and conversion-optimized design, it qualifies prospects even when you are offline.',
      },
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
        answer: 'All projects are delivered in 7 to 14 business days, depending on scope and complexity.',
      },
      {
        question: 'Is my site optimized for mobile and search?',
        answer: 'Absolutely. Every project is mobile-first and includes elite SEO foundations to ensure visibility.',
      },
    ],
  },
  fr: {
    home: [
      {
        question: 'Pourquoi investir dans un design professionnel maintenant ?',
        answer: 'Votre site web est votre commercial 24/7. Un design à haute conversion inspire confiance immédiatement, communique votre valeur clairement et transforme les visites en demandes. Chaque jour sans une présence en ligne solide, c\'est du chiffre d\'affaires laissé à vos concurrents.',
      },
      {
        question: 'Pourquoi choisir Élie Ageron pour mon projet ?',
        answer: 'Je combine expertise design et vision business. Vous travaillez directement avec moi, pas une équipe sous-traitée. J\'utilise des technologies modernes, des patterns UX éprouvés et les meilleures pratiques SEO pour livrer un site qui fait vraiment grandir votre activité.',
      },
      {
        question: 'Quel est le délai de livraison ?',
        answer: 'La plupart des projets sont livrés en 7 à 14 jours ouvrés. Le délai dépend de la portée du projet. Les révisions sont incluses pour qu\'il n\'y ait aucune mauvaise surprise.',
      },
      {
        question: 'Mon site sera-t-il optimisé mobile et SEO ?',
        answer: 'Oui, toujours. Chaque site est entièrement mobile-first et inclut les fondations SEO : vitesse de chargement, données structurées, HTML sémantique, balises meta et indexation correcte pour que Google vous référence dès le premier jour.',
      },
      {
        question: 'Combien coûte un site web ?',
        answer: 'Les tarifs démarrent à 500€ pour une landing page professionnelle. Je propose des devis clairs et fixes, sans frais cachés. Consultez la page Tarifs pour les formules détaillées ou réservez un appel gratuit.',
      },
      {
        question: 'Que se passe-t-il après la mise en ligne ?',
        answer: 'Vous êtes propriétaire de tout : le code, le domaine, le contenu. Je vous fournis un accompagnement à la prise en main. Des forfaits de maintenance sont disponibles si vous préférez vous concentrer sur votre activité.',
      },
    ],
    pricing: [
      {
        question: 'Combien coûte une landing page ?',
        answer: 'Une landing page haute conversion par Elie Ageron commence à 500€, livrée en 7 à 14 jours ouvrés. Cela inclut l\'optimisation mobile et un design axé conversion.',
      },
      {
        question: 'Qu\'est-ce qui est inclus dans le site vitrine 4 pages ?',
        answer: 'Le site vitrine 4 pages à 1500€ inclut l\'optimisation SEO complète, le branding professionnel, la stratégie de contenu et un tableau de bord analytics pour suivre vos résultats.',
      },
      {
        question: 'Proposez-vous une maintenance mensuelle ?',
        answer: 'Oui, la maintenance mensuelle optionnelle commence à 50€/mois pour les landing pages et 100€/mois pour les sites vitrines. Cela inclut les mises à jour, la sécurité, l\'hébergement et le support prioritaire.',
      },
      {
        question: 'Y a-t-il une garantie de satisfaction ?',
        answer: 'Absolument ! Elie Ageron offre une garantie satisfaction 100%. Si vous n\'êtes pas entièrement satisfait du résultat final, nous travaillerons jusqu\'à ce que vous le soyez, sans frais supplémentaires.',
      },
      {
        question: 'Pourquoi investir dans un design professionnel maintenant ?',
        answer: 'Votre site web est votre commercial 24/7. Il vous assure de ne plus perdre de leads au profit de concurrents mieux positionnés en ligne.',
      },
      {
        question: 'Pourquoi choisir Élie Ageron pour mon projet ?',
        answer: 'Livraison rapide, prix bas, et des sites conçus pour transformer les visiteurs en clients payants.',
      },
      {
        question: 'Quel est le délai de livraison ?',
        answer: 'Tous les projets sont livrés en 7 à 14 jours ouvrés, selon la portée et la complexité.',
      },
      {
        question: 'Mon site sera-t-il optimisé mobile et SEO ?',
        answer: 'Absolument. Chaque projet est mobile-first et inclut des fondations SEO élites pour garantir votre visibilité.',
      },
    ],
    why: [
      {
        question: 'Pourquoi ai-je besoin d\'un site web professionnel ?',
        answer: 'Un site web professionnel est votre machine de vente 24/7. Il construit la crédibilité, capture les leads automatiquement et vous permet d\'atteindre une audience mondiale sans limites géographiques.',
      },
      {
        question: 'Combien de business perds-je sans site web ?',
        answer: 'Les études montrent que 81% des consommateurs font des recherches en ligne avant d\'acheter. Sans site web professionnel, vous êtes invisible pour ces clients potentiels et les perdez au profit des concurrents.',
      },
      {
        question: 'En combien de temps verrai-je le retour sur investissement ?',
        answer: 'Un site bien conçu par Elie Ageron se rentabilise généralement en quelques semaines grâce à l\'acquisition de nouveaux clients. Nos clients voient souvent une augmentation de 40%+ des leads dès le premier mois.',
      },
      {
        question: 'Un site peut-il vraiment générer des leads pendant mon sommeil ?',
        answer: 'Oui ! Votre site travaille 24/7 sur tous les fuseaux horaires. Avec les formulaires de capture automatisés et un design optimisé pour la conversion, il qualifie les prospects même quand vous êtes hors ligne.',
      },
      {
        question: 'Pourquoi investir dans un design professionnel maintenant ?',
        answer: 'Votre site web est votre commercial 24/7. Il vous assure de ne plus perdre de leads au profit de concurrents mieux positionnés en ligne.',
      },
      {
        question: 'Pourquoi choisir Élie Ageron pour mon projet ?',
        answer: 'Livraison rapide, prix bas, et des sites conçus pour transformer les visiteurs en clients payants.',
      },
      {
        question: 'Quel est le délai de livraison ?',
        answer: 'Tous les projets sont livrés en 7 à 14 jours ouvrés, selon la portée et la complexité.',
      },
      {
        question: 'Mon site sera-t-il optimisé mobile et SEO ?',
        answer: 'Absolument. Chaque projet est mobile-first et inclut des fondations SEO élites pour garantir votre visibilité.',
      },
    ],
  },
};

const FAQSchema = ({ page }: FAQSchemaProps) => {
  const { language } = useLanguage();
  const faqs = faqData[language][page];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
