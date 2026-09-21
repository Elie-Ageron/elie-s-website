import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * La vidéo de l'écran du téléphone : arrêtée, avec un bouton.
 *
 * 🔴 **Elie, le 21 septembre 2026 :** *« met la vidéo de Nouït sur le tel en
 * pause, et avec un bouton play, si ils veulent regarder, ils cliquent dessus
 * et ils ont aussi le son comme ça. et la vidéo est un peu flou. »*
 *
 * Elle démarrait toute seule, muette, en boucle. Ce qui change :
 *
 * | | Avant | Après |
 * |---|---|---|
 * | Départ | automatique à l'écran | au clic |
 * | Son | aucune piste | piste AAC, audible |
 * | Fichier | 480 x 600, CRF 32, 16 s, 772 ko | 600 x 750, CRF 27, 42 s, 6,6 Mo |
 *
 * 🔴 **Le flou venait du débit, pas de la définition.** 480 px de large pour
 * un écran de 294 px, c'est déjà du sur-échantillonnage. C'est le CRF 32 qui
 * lissait les détails du jardin et du visage. CRF 27 les rend.
 *
 * ⚠️ **6,6 Mo, et c'est assumé, parce que rien ne part avant le clic.** La
 * `src` n'est posée qu'au clic, donc un visiteur qui ne regarde pas ne
 * télécharge que la vignette de 73 ko. C'est le même contrat qu'avant, avec un
 * déclencheur plus honnête : le visiteur demande, on livre.
 *
 * ⚠️ **Plus d'`IntersectionObserver`, plus de `prefers-reduced-motion`.** Sans
 * lecture automatique, les deux n'ont plus d'objet : une image fixe tant qu'on
 * ne demande rien, c'est exactement ce que ce réglage veut.
 *
 * ⚠️ **Ce bloc ne doit pas vivre sous un `aria-hidden`.** Il porte un bouton
 * réel et une vidéo réelle. Un élément focalisable sous `aria-hidden` est la
 * violation axe `aria-hidden-focus`, gravité serious, déjà rencontrée sur
 * `CalendlyPopup` : le visiteur au clavier tabule dans une commande qu'aucun
 * lecteur d'écran n'annonce.
 */
const ApercuVideo = ({
  src,
  poster,
  titre,
  className = '',
}: {
  src: string;
  poster: string;
  titre: string;
  className?: string;
}) => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const ref = useRef<HTMLVideoElement>(null);
  const [lance, setLance] = useState(false);

  const demarrer = () => {
    setLance(true);
    /* La `src` arrive au rendu suivant : on attend qu'elle soit posée avant de
       demander la lecture, sinon `play()` porte sur un élément vide et ne fait
       rien, sans la moindre erreur. Voir la note de `CLAUDE.md` sur
       `preload="none"`. */
    requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      el.load();
      el.play().catch(() => {});
    });
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={ref}
        src={lance ? src : undefined}
        poster={poster}
        className="aspect-[4/5] w-full rounded-xl bg-secondary object-cover"
        preload="none"
        playsInline
        controls={lance}
        title={titre}
      >
        {fr ? "Votre navigateur ne peut pas lire cette vidéo." : 'Your browser cannot play this video.'}
      </video>

      {!lance && (
        <button
          type="button"
          onClick={demarrer}
          aria-label={fr ? `Lire la vidéo : ${titre}` : `Play the video: ${titre}`}
          /* Le bouton couvre toute la vignette : sur un écran de 294 px, une
             cible de 56 px entourée de zones mortes se rate au doigt. */
          className="group absolute inset-0 flex items-center justify-center rounded-xl"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Play className="ml-0.5 h-6 w-6 fill-primary-foreground text-primary-foreground" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
};

export default ApercuVideo;
