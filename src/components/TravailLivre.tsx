import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CarrouselPlanches from '@/components/CarrouselPlanches';
import { clientesLivrees, videosSalon, type PublicationLivree } from '@/data/publications-livrees';

/**
 * Le travail livre, regarde sur place, range par cliente.
 *
 * 🔴 **Ce bloc remplace `PublicationsReelles` sur `/reseaux-sociaux`.** Elie,
 * le 21 septembre 2026 : *« la, actuellement, il y a trois videos d'Isabelle.
 * Je veux que tu mettes les trois trucs que je t'ai envoyes : le carrousel ou
 * on peut defiler les photos, et les deux videos. »*
 *
 * 🔴 **Le 10 octobre 2026, il passe a une rangee par cliente**, avec son logo
 * et le lien vers ses comptes en tete. Elie : *« le lien vers leur compte,
 * comme ca, c'est carre. »* Une rangee par personne dit d'ou vient chaque
 * video sans la repeter sous chaque piece, et le lien se pose une fois, a
 * cote du nom, la ou on le cherche. Voir l'en-tete de
 * `publications-livrees.ts` pour le retour du lien.
 *
 * ⚠️ **`preload="none"` et une vignette.** Sans ca, six fichiers de plusieurs
 * megaoctets partiraient au chargement de la page, sur une page dont le fil
 * principal est deja le point faible du site. Ici, tant que personne ne
 * clique, seule la vignette est telechargee.
 *
 * ⚠️ **Les controles sont ceux du navigateur.** Un lecteur maison serait une
 * surface de bugs et un probleme d'accessibilite pour rien : la lecture, le
 * son et le plein ecran sont deja la, au clavier comme a la souris.
 *
 * ⚠️ Le carrousel a son propre composant, `CarrouselPlanches` : fleches sur
 * grand ecran, doigt sur telephone, et la barre de defilement retiree. Elie :
 * *« met des fleches a gauche et a droite pour slide. pas un curseur. et sur
 * tel le doigt. »*
 *
 * ⚠️ **Les titres de rangee sont en `text-2xl sm:text-3xl`, pas en `text-lg`.**
 * Elie, le 10 octobre 2026, sur celui du salon : *« titre trop petit on le
 * voit pas mdr. »* A 18 px il avait la taille du texte courant, et sans logo a
 * cote rien ne le signalait. Les noms des clientes ont suivi : les trois
 * rangees se lisent au meme niveau.
 *
 * ⚠️ **`scroll-px-4` sur les rangees qui defilent.** Sans lui, l'aimant du
 * defilement alignait la premiere piece sur le bord de l'ecran, pas sur la
 * marge de 16 px : elle collait au bord des le premier geste.
 *
 * ⚠️ **Le carrousel est centre, pas cale en haut.** Il est en 4:5 quand les
 * videos sont en 9:16, donc il est plus court : aligne en haut, il laissait un
 * trou sous lui. Elie : *« baisse un peu le caroussel pour le centrer. »*
 */

const Piece = ({ piece }: { piece: PublicationLivree }) => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  if (piece.type === 'video') {
    return (
      <video
        className="soft-shadow aspect-[9/16] w-full rounded-2xl border border-border bg-secondary object-cover"
        src={piece.fichier}
        poster={piece.poster}
        preload="none"
        controls
        playsInline
        title={fr ? piece.titreFr : piece.titreEn}
      >
        {fr ? 'Votre navigateur ne peut pas lire cette vidéo.' : 'Your browser cannot play this video.'}
      </video>
    );
  }

  return (
    <CarrouselPlanches
      images={piece.images}
      libelle={fr ? piece.titreFr : piece.titreEn}
      legende={(i, total) =>
        fr ? `${piece.titreFr}, planche ${i + 1} sur ${total}` : `${piece.titreEn}, slide ${i + 1} of ${total}`
      }
    />
  );
};

/* Les classes Tailwind doivent etre ecrites en entier pour etre generees :
   pas de `sm:col-span-${n}` construit a la volee. */
const SPAN_TEXTE: Record<number, string> = { 1: 'sm:col-span-2', 2: 'sm:col-span-1' };
const SPAN_LISTE: Record<number, string> = { 1: 'sm:col-span-1 sm:grid-cols-1', 2: 'sm:col-span-2 sm:grid-cols-2' };

/**
 * La rangee du salon de l'habitat. Pas de logo ni de lien : ce sont des
 * exposants filmes, pas des clientes. Le nom de chaque entreprise est sous sa
 * video, puisque l'en-tete ne peut pas tous les porter.
 *
 * ⚠️ **Tant qu'il y a moins de trois videos, le texte prend la place des
 * cases vides.** Une rangee d'une video sous un en-tete laissait deux tiers de
 * la largeur vides, ce qui se lit comme un oubli. A trois et plus, le texte
 * repasse en tete, comme les rangees des clientes.
 */
const RangeeSalon = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const n = videosSalon.length;
  if (!n) return null;
  const enTete = n >= 3;

  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-6">
      <div className={enTete ? 'sm:col-span-3' : `${SPAN_TEXTE[n]} sm:pr-6`}>
        <h4 className="text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
          {fr ? "Salon Habitat & Déco d'Albertville" : 'Albertville home and decor fair'}
        </h4>
        <p className="mt-3 max-w-md text-base text-muted-foreground">
          {fr
            ? "Une journée sur place, en octobre 2026. J'ai interviewé les exposants sur leur stand, puis monté leur vidéo dans la foulée."
            : 'One day on site, in October 2026. I interviewed exhibitors on their stands, then edited their videos straight after.'}
        </p>
      </div>

      <ul
        tabIndex={0}
        aria-label={fr ? 'Vidéos tournées au salon' : 'Videos filmed at the fair'}
        className={`-mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:mx-0 sm:grid sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 ${
          enTete ? 'sm:col-span-3 sm:grid-cols-3' : `sm:mt-0 ${SPAN_LISTE[n]}`
        }`}
      >
        {videosSalon.map((v) => (
          <li key={v.id} className="w-[68vw] shrink-0 snap-start sm:w-auto">
            <video
              className="soft-shadow aspect-[9/16] w-full rounded-2xl border border-border bg-secondary object-cover"
              src={v.fichier}
              poster={v.poster}
              preload="none"
              controls
              playsInline
              title={
                v.questionFr
                  ? `${v.entreprise} : ${fr ? v.questionFr : v.questionEn}`
                  : fr
                    ? `${v.entreprise}, interview au salon`
                    : `${v.entreprise}, interview at the fair`
              }
            >
              {fr ? 'Votre navigateur ne peut pas lire cette vidéo.' : 'Your browser cannot play this video.'}
            </video>
            <p className="mt-3 text-base font-semibold text-foreground">{v.entreprise}</p>
            <p className="text-base text-muted-foreground">{fr ? v.metierFr : v.metierEn}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TravailLivre = ({ className = '' }: { className?: string }) => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  if (!clientesLivrees.length) return null;

  return (
    <div className={`space-y-14 sm:space-y-16 ${className}`}>
      {clientesLivrees.map((cliente) => (
        <div key={cliente.id}>
          {/* L'en-tete de la rangee : qui, quel metier, et ou aller voir. */}
          {/* Le logo et le nom restent soudes : en ligne souple, un metier
              long faisait passer le nom sous le logo sur telephone, et le
              logo restait seul sur sa ligne. Seuls les liens descendent. */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-5">
              <img
                src={cliente.logo}
                alt={`Logo ${cliente.marque}`}
                width={96}
                height={56}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto shrink-0 object-contain sm:h-14"
              />
              <div className="min-w-0">
                <h4 className="text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">{cliente.nom}</h4>
                <p className="text-base text-muted-foreground">{fr ? cliente.metierFr : cliente.metierEn}</p>
              </div>
            </div>
            <p className="flex w-full flex-wrap gap-x-6 gap-y-2 sm:ml-auto sm:w-auto">
              {cliente.liens.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[24px] items-center gap-1 text-base font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {fr ? `Son ${l.reseau}` : `Her ${l.reseau}`}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </p>
          </div>

          {/* ⚠️ `tabIndex` et `aria-label` : sur telephone la rangee defile.
              Une rangee faite uniquement de videos n'a aucun descendant que
              axe tienne pour focalisable, donc elle etait inatteignable au
              clavier. Regle `scrollable-region-focusable`, gravite serious,
              meme correction que le carrousel d'avis. */}
          <ul
            tabIndex={0}
            aria-label={fr ? `Publications livrées pour ${cliente.nom}` : `Posts delivered for ${cliente.nom}`}
            className="-mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:mx-0 sm:grid sm:grid-cols-3 sm:items-center sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {cliente.pieces.map((piece) => (
              <li key={piece.id} className="w-[68vw] shrink-0 snap-start sm:w-auto">
                <Piece piece={piece} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      <RangeeSalon />
    </div>
  );
};

export default TravailLivre;
