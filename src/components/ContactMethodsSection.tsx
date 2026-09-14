import { Calendar, Check, MessageCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import AuditForm from '@/components/AuditForm';

interface ContactMethodsSectionProps {
  showTitle?: boolean;
  compact?: boolean;
}

/**
 * La fin de page, sur les quatorze pages du site.
 *
 * ── Deux refontes le meme jour ────────────────────────────────────────────
 *
 * 1. C'etaient quatre cartes de verre avec une icone chacune et une pastille
 *    « recommande » qui pulsait en boucle. Quatre propositions de meme poids,
 *    donc aucune. Elles arrivaient en plus apres « Par ou commencer ? » et
 *    « Continuer votre exploration », soit trois blocs d'appel a l'action
 *    d'affilee.
 * 2. La premiere correction posait le formulaire nu dans une colonne, avec les
 *    canaux directs dans l'autre. Elie : « le form n'est pas beau, on comprend
 *    rien, la mise en page c'est clairement a ameliorer. » Il avait raison :
 *    deux champs flottant dans du vide ne disent pas ce qu'on demande ni ce
 *    qu'on recoit.
 *
 * ── Ce qui est en place ───────────────────────────────────────────────────
 *
 * A gauche, **ce que le visiteur recoit**, quatre lignes. A droite, le
 * formulaire **dans un panneau delimite**, parce qu'un formulaire a besoin
 * d'un contenant : c'est ce qui dit « c'est ici qu'on remplit ». Un panneau
 * n'est pas une grille de cartes, la regle contre les cartes ne s'applique
 * pas ici. Les canaux directs passent en dessous, sur une seule ligne.
 *
 * Les props sont conservees parce que quatorze pages appellent ce composant,
 * mais `compact` ne joue que sur l'espacement vertical.
 */
const ContactMethodsSection = ({ showTitle = true, compact = false }: ContactMethodsSectionProps) => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const { openCalendly } = useCalendly();

  const contenu = fr
    ? [
        'Votre fiche Google, ce qui y manque et ce que ça vous coûte.',
        'Vos réseaux, vus par quelqu’un qui ne vous connaît pas.',
        'Votre site, le premier écran et ce qu’il fait comprendre.',
        'Votre position sur « votre métier + votre commune ».',
      ]
    : [
        'Your Google profile, what is missing and what it costs you.',
        'Your social accounts, seen by someone who does not know you.',
        'Your website, the first screen and what it gets across.',
        'Where you rank on your trade plus your town.',
      ];

  const canaux = [
    { icon: Phone, texte: '06 95 55 53 18', href: 'tel:+33695555318' },
    { icon: MessageCircle, texte: 'WhatsApp', href: 'https://wa.me/33695555318' },
    { icon: Mail, texte: 'elie@elieageron.com', href: 'mailto:elie@elieageron.com' },
  ];

  return (
    <section
      className={`px-4 sm:px-6 ${compact ? 'py-16 sm:py-24' : 'py-24 sm:py-36'}`}
      aria-labelledby="fin-de-page-heading"
    >
      <div className="mx-auto max-w-5xl">
        {showTitle && (
          <ScrollReveal direction="up" className="mb-10 sm:mb-14">
            {/* ⚠️ Le titre disait « Je regarde votre presence en ligne. C'est
                gratuit. » Elie : « on peut faire mieux sur ce titre la, en
                montrant bien la valeur que je vais rapporter. » Il avait
                raison : il decrivait mon action, pas ce que le visiteur y
                gagne. La gratuite est passee en premier mot du chapo, ou elle
                leve l'objection sans occuper la moitie du titre. */}
            <h2 id="fin-de-page-heading" className="section-title max-w-3xl">
              <span className="text-foreground">
                {fr ? 'Ce que vos clients voient de vous, ' : 'What your clients see of you, '}
              </span>
              <span className="text-primary">
                {/* « des appels » a ete remplace par « des clients » : un
                    restaurant perd des couverts, un therapeute perd des
                    rendez-vous. Le mot d'origine ne parlait qu'aux artisans,
                    soit la moitie de la clientele visee. */}
                {fr ? 'et ce qui vous coûte des clients.' : 'and what is costing you clients.'}
              </span>
            </h2>
            <p className="section-lede mt-6">
              {fr
                /* ⚠️ Disait « je vous renvoie quatre minutes de video ». Meme
                   correction que sur le hero et sur `AuditInline` : la duree
                   decrit le contenant, pas ce qu'on y trouve. Elle garde sa
                   place dans la fiche technique de `/audit-gratuit`, pas dans
                   la phrase qui vend. Ce bloc est en pied des quatorze pages,
                   donc c'etait la formulation la plus repandue du site. */
                ? "C'est gratuit et je ne vends rien dedans. Je passe une trentaine de minutes sur votre fiche Google, vos réseaux et votre site, puis je vous envoie l'analyse en vidéo sous 48 h ouvrées."
                : 'It is free and I sell nothing in it. I spend about thirty minutes on your Google profile, your social accounts and your site, then send you the whole review as a video within two business days.'}
            </p>
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_26rem] lg:gap-16">
          <ScrollReveal direction="up">
            <p className="text-lg font-bold tracking-tight text-foreground">
              {fr ? 'Ce que vous recevez' : 'What you get'}
            </p>
            <ul className="mt-5 space-y-4">
              {contenu.map((ligne) => (
                <li key={ligne} className="flex gap-3.5 leading-relaxed text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {ligne}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-muted-foreground">
              {fr ? 'Vous avez déjà un projet précis ? ' : 'Already have a specific project? '}
              <Link
                to="/contact"
                className="inline-flex min-h-[24px] items-center font-semibold text-primary underline-offset-4 hover:underline"
              >
                {fr ? 'Décrivez-le moi' : 'Tell me about it'}
              </Link>
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.08}>
            {/* ⚠️ Le panneau doit se lire en une seconde. Elie : « il faut
                qu'on comprenne de maniere tres facile et effortless qu'il y a
                un form a remplir, que ca prend deux secondes, que c'est
                gratuit et que ca apporte de la valeur. Comme ca les gens se
                disent : ah OK, pourquoi pas le faire. »

                Les trois reperes au-dessus des champs repondent aux trois
                questions dans l'ordre ou elles se posent : combien ca coute,
                combien ca me prend, quand je recois. Ils sont au-dessus du
                premier champ parce qu'une note posee sous le bouton arrive
                apres la decision. */}
            <div className="soft-shadow rounded-3xl border border-border bg-card p-6 sm:p-8">
              {/* 🔴 L'accroche a ete testee en relecture aveugle, puis changee.
                  Elie avait propose « vous voulez savoir si vos concurrents
                  sont meilleurs ». Version posee sur la page, elle a braque les
                  trois profils de relecture sur trois :
                  le plombier (« elle me dit que je perds, alors que je refuse
                  des chantiers »), la restauratrice (« je sais deja pourquoi,
                  ca me rappelle juste que je suis en retard »), et le visiteur
                  sans contexte (« c'est l'ouverture d'un demarcheur »).
                  Une accroche qui presuppose une defaite ferme la porte avant
                  d'avoir montre quoi que ce soit. Celle-ci decrit simplement le
                  geste, et le geste est deja la promesse. */}
              <p className="text-lg font-bold leading-snug tracking-tight text-foreground">
                {fr
                  ? 'Je tape le nom de votre entreprise sur Google, et je vous dis ce que je vois.'
                  : 'I type your business name into Google, and I tell you what I see.'}
              </p>

              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {(fr
                  ? ['Gratuit', 'Deux champs', 'Vidéo sous 48 h']
                  : ['Free', 'Two fields', 'Video within 48h']
                ).map((repere) => (
                  <li
                    key={repere}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {repere}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <AuditForm source="fin-de-page" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Les canaux directs, sur une ligne. Ils ne concurrencent pas le
            formulaire, ils rattrapent celui qui prefere appeler. */}
        <ScrollReveal direction="up" delay={0.12}>
          {/* ⚠️ Centre et a la taille du corps de texte. Elie : « c'est un peu
              petit et c'est pas centre, il faut que ce soit centre ». C'etait
              une ligne en `text-sm` alignee a gauche sous une grille centree. */}
          <div className="mt-12 border-t border-border pt-8 text-center sm:mt-14">
            <p className="text-base text-muted-foreground">{fr ? 'Ou directement' : 'Or directly'}</p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex min-h-[40px] items-center gap-2.5 text-base font-semibold text-foreground transition-colors hover:text-primary"
              >
                <Calendar className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
                {fr ? 'Réserver un appel' : 'Book a call'}
              </button>

              {canaux.map((canal) => (
                <a
                  key={canal.href}
                  href={canal.href}
                  className="inline-flex min-h-[40px] items-center gap-2.5 text-base font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <canal.icon className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
                  {canal.texte}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactMethodsSection;
