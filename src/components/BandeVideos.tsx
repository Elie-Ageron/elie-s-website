import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { VideoBande } from '@/data/publications-livrees';

/**
 * Une bande de videos qui defile : trois a la fois sur grand ecran, une et un
 * bout de la suivante sur telephone.
 *
 * Nee le 11 octobre 2026, quand Elie a demande deux choses le meme jour :
 * *« ce serait bien que ce soit sur l'accueil, toutes ces videos-la »*, et une
 * quatrieme video pour la rangee du salon. Une grille de trois colonnes ne
 * tient ni l'un ni l'autre : a quatre il reste une case seule sur sa ligne, et
 * neuf videos sur l'accueil font trois rangees, soit deux mille pixels pour
 * une seule preuve. La bande garde la hauteur d'une rangee, quel que soit le
 * nombre de videos.
 *
 * ⚠️ **Les fleches sont au dessus de la bande, pas posees sur les videos.**
 * Sur une video, elles recouvriraient les controles du lecteur. Elles se
 * desactivent aux extremites, et disparaissent quand tout tient a l'ecran :
 * une fleche qui ne fait rien fait croire a un defaut.
 *
 * ⚠️ **`preload="none"` et une vignette, comme partout.** Rien ne se
 * telecharge avant un clic, sinon dix fichiers de plusieurs megaoctets
 * partiraient au chargement de l'accueil.
 *
 * ⚠️ **`tabIndex` et `aria-label` sur la liste.** Une zone qui defile sans
 * descendant focalisable est inatteignable au clavier, et axe ne compte pas
 * une `<video>` comme tel. Regle `scrollable-region-focusable`.
 */
const BandeVideos = ({
  videos,
  libelle,
  className = '',
}: {
  videos: VideoBande[];
  /** Nom de la zone pour un lecteur d'ecran. */
  libelle: string;
  className?: string;
}) => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const piste = useRef<HTMLUListElement>(null);
  const [debut, setDebut] = useState(true);
  const [fin, setFin] = useState(false);

  /* Relu a chaque defilement, y compris au doigt : sinon les fleches ne
     suivent que leurs propres clics. */
  const mesurer = useCallback(() => {
    const el = piste.current;
    if (!el) return;
    setDebut(el.scrollLeft <= 4);
    setFin(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    mesurer();
    const el = piste.current;
    if (!el) return;
    el.addEventListener('scroll', mesurer, { passive: true });
    window.addEventListener('resize', mesurer);
    return () => {
      el.removeEventListener('scroll', mesurer);
      window.removeEventListener('resize', mesurer);
    };
  }, [mesurer]);

  const glisser = (sens: -1 | 1) => {
    const el = piste.current;
    if (!el) return;
    el.scrollBy({ left: sens * el.clientWidth, behavior: 'smooth' });
  };

  const deborde = !(debut && fin);
  const fleche =
    'flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground ' +
    'transition hover:bg-secondary disabled:cursor-default disabled:opacity-30';

  return (
    <div className={className}>
      {deborde && (
        <div className="mb-5 hidden justify-end gap-3 sm:flex">
          <button
            type="button"
            onClick={() => glisser(-1)}
            disabled={debut}
            aria-label={fr ? 'Vidéos précédentes' : 'Previous videos'}
            className={fleche}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => glisser(1)}
            disabled={fin}
            aria-label={fr ? 'Vidéos suivantes' : 'Next videos'}
            className={fleche}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}

      <ul
        ref={piste}
        tabIndex={0}
        aria-label={libelle}
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:mx-0 sm:scroll-px-0 sm:gap-6 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((v) => (
          <li key={v.id} className="w-[68vw] shrink-0 snap-start sm:w-[calc((100%-3rem)/3)]">
            <video
              className="soft-shadow aspect-[9/16] w-full rounded-2xl border border-border bg-secondary object-cover"
              src={v.fichier}
              poster={v.poster}
              preload="none"
              controls
              playsInline
              title={fr ? v.titreFr : v.titreEn}
            >
              {fr ? 'Votre navigateur ne peut pas lire cette vidéo.' : 'Your browser cannot play this video.'}
            </video>
            <p className="mt-3 text-base font-semibold text-foreground">{v.nom}</p>
            <p className="text-base text-muted-foreground">{fr ? v.metierFr : v.metierEn}</p>
            {v.lien && (
              <a
                href={v.lien.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex min-h-[24px] items-center gap-1 text-base font-semibold text-primary underline-offset-4 hover:underline"
              >
                {fr ? v.lien.libelleFr : v.lien.libelleEn}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BandeVideos;
