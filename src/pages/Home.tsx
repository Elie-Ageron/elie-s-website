import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/HeroSection';
import SocialPillarSection from '@/components/SocialPillarSection';
import AuditInline from '@/components/AuditInline';
import PersonalIntroSection from '@/components/PersonalIntroSection';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import ServicesSection from '@/components/ServicesSection';
import ServicesEcosystem from '@/components/ServicesEcosystem';
import PortfolioShowcaseSection from '@/components/PortfolioShowcaseSection';
import FAQAccordion from '@/components/FAQAccordion';
import SEO from '@/components/SEO';
import FAQSchema from '@/components/FAQSchema';
import InternalLinks from '@/components/InternalLinks';

/**
 * L'accueil.
 *
 * ── La regle de montage, refaite le 13 septembre 2026 ──────────────────────
 *
 * La page doit se comprendre en ne lisant que les titres noirs. C'est ce que
 * fait un visiteur qui descend vite, et c'est la seule chose que fait un
 * visiteur qui ne connait pas Elie. Lus a la suite, les titres racontent
 * l'offre en entier :
 *
 *   Vos reseaux tournent tout le mois sans que vous y pensiez
 *   Un jour de tournage. Un mois de publications.
 *   Avant de decider, voyez ce que ca donnerait chez vous.
 *   Ils etaient a votre place. Ils ont accepte d'en parler.
 *   Je ne peux pas prendre trente clients.
 *   Si le site ne suit pas, je le refais.
 *   La formule qu'il vous faut
 *   Un seul interlocuteur pour tout le reste.
 *   Ce qu'on me demande le plus souvent.
 *   Je regarde votre presence en ligne. C'est gratuit.
 *
 * ── Trois sections ont disparu, et il ne faut pas les remettre ─────────────
 *
 * 1. `StatsSection`. Son titre parlait de recherche Google et ses trois
 *    chiffres parlaient de delais de livraison : les deux n'avaient aucun
 *    rapport. Les chiffres vivent maintenant sous les formules de site, ou ils
 *    repondent a la question qu'on vient de se poser.
 * 2. `RoutingSection` (« Par ou commencer ? »). Elle proposait trois chemins,
 *    plus un quatrieme en dessous, entre deux autres blocs d'appel a l'action.
 *    Une page qui demande par ou commencer a la fin n'a pas commence.
 * 3. `HomeArticles`. Elle affichait une seconde liste de questions juste sous
 *    la FAQ : la page semblait porter deux FAQ. Les articles sont accroches
 *    aux reponses de la FAQ qu'ils developpent.
 * 4. `SocialClientsSection`. Les deux comptes reseaux geres ont ete montes
 *    puis descendus sur `/portfolio` le meme jour. Elie : « ca ne fait pas
 *    assez longtemps que je gere et ca ne fait pas une tres belle vitrine ».
 *    Une preuve trop jeune affaiblit la page au lieu de la porter.
 *
 * ── L'ordre ───────────────────────────────────────────────────────────────
 *
 * Les reseaux sociaux passent devant les sites : c'est l'offre recurrente,
 * c'est celle qu'Elie veut vendre, et c'est la seule qui revient chaque mois.
 * La preuve suit immediatement l'offre (les comptes geres, puis les avis), et
 * la presentation d'Elie remonte juste apres, avant de changer de sujet.
 *
 * ── La direction visuelle ─────────────────────────────────────────────────
 *
 * Claire et aeree. Une tentative de bandes sombres alternees a ete faite puis
 * retiree : fond noir et accent jaune, aucun des deux n'appartient a la
 * marque. Le rythme vient de l'espace et de la taille du texte.
 */
const Home = () => {
  return (
    <>
      {/* Le BreadcrumbList de l'accueil est déjà émis par JsonLd.tsx (Layout). */}
      <SEO page="home" />
      <FAQSchema page="home" />

      {/* La promesse, et l'audit gratuit */}
      <HeroSection />

      {/* Pilier n°1 : les réseaux sociaux, et comment ça se passe */}
      <SocialPillarSection />

      {/* Le formulaire, au sommet de l'interet : juste apres le prix.
          Il etait en onzieme position sur onze. Voir la note de `AuditInline`. */}
      <AuditInline />

      {/* La preuve humaine */}
      <TestimonialsSection />

      {/* Qui est en face */}
      <PersonalIntroSection />

      {/* Pilier n°2 : les sites livrés */}
      <PortfolioShowcaseSection />

      {/* Les formules de site, et les délais */}
      <ServicesSection />

      {/* Tout le reste de la présence en ligne */}
      <ServicesEcosystem />

      {/* Les objections, et la porte vers le blog */}
      <FAQAccordion />

      {/* Le renvoi discret vers trois autres pages, avant la fin */}
      <InternalLinks currentPage="home" />

      {/* Une seule fin de page : l'audit gratuit. Meme ordre sur les 14 pages */}
      <ContactMethodsSection />
    </>
  );
};

export default Home;
