import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { faqHome } from '@/data/faq';

interface FAQSchemaProps {
  /* Une seule valeur, et c'est volontaire. Voir la note ci-dessous. */
  page: 'home';
}

/**
 * Le schema FAQPage de l'accueil.
 *
 * ── Ce composant portait trois jeux de questions, il n'en porte plus qu'un ──
 *
 * 🔴 **Nettoyage du 14 septembre 2026.** Il contenait aussi un jeu `pricing`
 * (huit questions, plus appele nulle part depuis le retrait de la page Tarifs)
 * et un jeu `why`, monte sur `/why-a-website`. Cette page affiche
 * `FAQAccordion`, c'est a dire les questions de l'accueil : les huit questions
 * envoyees a Google n'existaient donc sur aucun ecran. Une FAQPage dont les
 * questions ne sont pas visibles est une infraction aux regles de Google, et
 * le motif d'exclusion est une penalite manuelle, pas un simple non-affichage.
 *
 * Ce qu'elles affirmaient, en passant, et qui contredisait tout le reste du
 * site : « une garantie satisfaction 100 % », « 40 % de leads en plus des le
 * premier mois », « 81 % des consommateurs », « tous les projets livres en 7 a
 * 14 jours ouvres », « des fondations SEO elites ». Aucun de ces chiffres n'a
 * de source, et Elie refuse de promettre du resultat depuis le debut. Elles
 * parlaient en plus au pluriel (« nos clients », « nous travaillerons ») alors
 * que le site entier est ecrit a la premiere personne du singulier.
 *
 * ⚠️ **Le contenu vient de `src/data/faq.ts`**, la meme source que
 * `FAQAccordion`. Les deux versions avaient deja diverge une premiere fois.
 * Ne jamais recopier une question ici : ce qui est balise doit etre ce qui est
 * affiche, sinon la regle tombe.
 *
 * ⚠️ **Un seul FAQPage par URL, et un seul sur tout le site pour ces
 * questions.** Monter ce composant sur une seconde page en ferait un doublon
 * de celui de l'accueil.
 */
const FAQSchema = ({ page }: FAQSchemaProps) => {
  const { language } = useLanguage();
  const faqs = page === 'home' ? faqHome[language] : [];

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
