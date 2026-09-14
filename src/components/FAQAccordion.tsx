import { useLanguage } from '@/contexts/LanguageContext';
import { faqHome } from '@/data/faq';
import FaqSection from '@/components/FaqSection';

/**
 * La FAQ de l'accueil.
 *
 * Elle ne fait plus que choisir ses questions et son titre : la presentation
 * vit dans `FaqSection`, partagee avec `/services`, `/reseaux-sociaux` et les
 * pages locales. Voir la note de ce composant pour savoir pourquoi.
 *
 * Le contenu vit dans `src/data/faq.ts` et sert aussi au schema FAQPage : une
 * FAQ balisee doit etre visible a l'ecran, donc les deux ne peuvent pas
 * diverger.
 *
 * C'est la seule porte vers le blog depuis l'accueil. Avant, une seconde liste
 * de questions intitulee « Ce qu'on me demande le plus souvent » suivait la
 * FAQ : deux FAQ l'une derriere l'autre, et personne ne comprenait la
 * difference. Les articles sont maintenant accroches aux reponses qu'ils
 * developpent, via le champ `article`.
 */
const FAQAccordion = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  return (
    <FaqSection
      id="faq-heading"
      items={faqHome[language]}
      lienBlog
      titre={
        <>
          <span className="text-foreground">{fr ? "Ce qu'on me demande " : 'What people ask '}</span>
          <span className="text-primary">{fr ? 'le plus souvent.' : 'me the most.'}</span>
        </>
      }
      lede={
        fr
          /* ⚠️ Disait « et vous pouvez tout appliquer sans jamais me
             contacter ». C'etait vrai et bien intentionne, mais c'etait la
             derniere phrase lue avant le seul formulaire de la page : elle
             donnait au visiteur la permission de partir au moment precis ou on
             lui demandait de rester. */
          ? "Les prix et les délais sont dedans. Quand la réponse est plus longue que quelques lignes, j'ai écrit l'article en entier, et il est en accès libre."
          : 'Prices and timelines are in there. When the answer runs longer than a few lines I wrote the whole article, and it is free to read.'
      }
    />
  );
};

export default FAQAccordion;
