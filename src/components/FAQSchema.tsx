import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQSchemaProps {
  page: 'pricing' | 'why';
}

const faqData = {
  en: {
    pricing: [
      {
        question: 'How much does a landing page cost?',
        answer: 'A high-conversion landing page by Elie Ageron starts at $300, delivered within 48 hours. This includes mobile optimization and conversion-focused design.',
      },
      {
        question: 'What is included in the 4-page showcase site?',
        answer: 'The 4-page showcase site at $1000 includes complete SEO optimization, professional branding, content strategy, and an analytics dashboard to track your results.',
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
        answer: 'Landing pages take 48 hours. Complete showcase sites are ready in 7 to 14 days.',
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
        answer: 'Landing pages take 48 hours. Complete showcase sites are ready in 7 to 14 days.',
      },
      {
        question: 'Is my site optimized for mobile and search?',
        answer: 'Absolutely. Every project is mobile-first and includes elite SEO foundations to ensure visibility.',
      },
    ],
  },
  fr: {
    pricing: [
      {
        question: 'Combien coûte une landing page ?',
        answer: 'Une landing page haute conversion par Elie Ageron commence à 300€, livrée en 48 heures. Cela inclut l\'optimisation mobile et un design axé conversion.',
      },
      {
        question: 'Qu\'est-ce qui est inclus dans le site vitrine 4 pages ?',
        answer: 'Le site vitrine 4 pages à 1000€ inclut l\'optimisation SEO complète, le branding professionnel, la stratégie de contenu et un tableau de bord analytics pour suivre vos résultats.',
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
        answer: 'Les landing pages sont livrées en 48 heures. Les sites vitrines complets sont prêts en 7 à 14 jours.',
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
        answer: 'Les landing pages sont livrées en 48 heures. Les sites vitrines complets sont prêts en 7 à 14 jours.',
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
