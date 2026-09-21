import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Un carrousel de planches, avec des flèches.
 *
 * 🔴 **Elie, le 21 septembre 2026 :** *« met des flèches à gauche et à droite
 * pour slide. pas un curseur. et sur tel le doigt. »*
 *
 * La barre de défilement du navigateur était visible sous les planches. Elle
 * dit « ça défile », mais elle se manipule mal à la souris et elle n'a rien à
 * faire dans une maquette de publication.
 *
 * ⚠️ **Le doigt continue de marcher.** Les flèches s'ajoutent au défilement
 * tactile, elles ne le remplacent pas : c'est le même conteneur, avec le même
 * `snap`. Elles sont simplement masquées sur téléphone, où elles prendraient
 * la place de deux planches pour rien.
 *
 * ⚠️ **Les flèches se désactivent aux extrémités.** Une flèche qui ne fait
 * rien est pire que pas de flèche : elle fait croire que la page a un défaut.
 */
const CarrouselPlanches = ({
  images,
  libelle,
  legende,
}: {
  images: string[];
  libelle: string;
  /** Construit le texte alternatif de chaque planche. */
  legende: (index: number, total: number) => string;
}) => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const piste = useRef<HTMLDivElement>(null);
  const [debut, setDebut] = useState(true);
  const [fin, setFin] = useState(false);

  /* On relit les bornes a chaque defilement, y compris au doigt : sinon les
     fleches se desactivent en fonction de leurs propres clics seulement, et
     elles mentent des qu'on fait glisser. */
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

  const fleche =
    'absolute top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border ' +
    'bg-background/90 text-foreground shadow-md backdrop-blur-sm transition ' +
    'hover:bg-background disabled:cursor-default disabled:opacity-0 sm:flex h-9 w-9';

  return (
    <div className="relative">
      <div
        ref={piste}
        tabIndex={0}
        role="region"
        aria-label={libelle}
        /* `scrollbar-width` pour Firefox, le pseudo-element pour les autres :
           la barre est retiree, le defilement reste. */
        className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl border border-border [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, i) => (
          <img
            key={image}
            src={image}
            alt={legende(i, images.length)}
            className="aspect-[4/5] w-full shrink-0 snap-center object-cover"
            width={1080}
            height={1350}
            /* La premiere planche est ce que le visiteur voit sans rien faire. */
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => glisser(-1)}
        disabled={debut}
        aria-label={fr ? 'Planche précédente' : 'Previous slide'}
        className={`${fleche} left-2`}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => glisser(1)}
        disabled={fin}
        aria-label={fr ? 'Planche suivante' : 'Next slide'}
        className={`${fleche} right-2`}
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default CarrouselPlanches;
