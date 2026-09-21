import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Une vraie vidéo qui tourne dans l'écran du téléphone.
 *
 * 🔴 **Elie, le 21 septembre 2026 :** *« tu peux même mettre directement une
 * vidéo, par exemple de Nouït ou d'Isabelle. Tu la mets sur le téléphone, et
 * quand la personne parle, la vidéo défile. Fais en sorte que ça ne lague
 * pas. »*
 *
 * ⚠️ **« Que ça ne lague pas » a dicté chacun des cinq choix ci dessous.**
 * Une vidéo en lecture automatique est la façon la plus simple de détruire une
 * page, et le fil principal de `/reseaux-sociaux` est déjà le point faible du
 * site.
 *
 * 1. **Un fichier dédié, pas celui du bloc de preuve.** Le master fait 151 Mo
 *    en 2160 x 3840. Celui ci est recadré en 4:5 à la taille réelle de
 *    l'écran, 480 x 600, seize secondes, CRF 32 : **772 ko.**
 * 2. **Aucune piste audio.** La vidéo est muette de toute façon, une piste
 *    inutilisée se télécharge et se décode quand même.
 * 3. **Rien ne part avant que le téléphone soit visible.** La `src` n'est
 *    posée qu'à l'intersection : tant que le visiteur n'a pas descendu
 *    jusque là, seule la vignette de 49 ko existe.
 * 4. **La lecture s'arrête dès que le téléphone sort de l'écran.** Un
 *    décodeur qui tourne sur un élément hors champ coûte exactement autant
 *    qu'à l'écran, et pour rien.
 * 5. **`prefers-reduced-motion` coupe la vidéo, pas le contenu.** On sert la
 *    vignette fixe. Une image qui bouge en boucle est précisément ce que ce
 *    réglage demande d'éviter.
 *
 * ⚠️ Le téléphone entier est `aria-hidden`, donc rien ici n'est annoncé. C'est
 * voulu : c'est une maquette, pas un lecteur. Ne pas y ajouter de contrôles,
 * ils deviendraient des commandes invisibles dans l'ordre de tabulation.
 */
const ApercuVideo = ({
  src,
  poster,
  className = '',
}: {
  src: string;
  poster: string;
  className?: string;
}) => {
  const reduit = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  /* 🔴 **Un `ref` et pas un `state` pour savoir si on est a l'ecran.**
     `onCanPlay` arrive apres coup et doit lire la valeur du moment, pas celle
     capturee au rendu ou l'ecouteur a ete cree. */
  const dansLEcran = useRef(false);

  useEffect(() => {
    if (reduit) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observateur = new IntersectionObserver(
      ([entree]) => {
        dansLEcran.current = entree.isIntersecting;
        if (entree.isIntersecting) {
          setVisible(true);
          /* 🔴 **Ce `play()` ne suffit pas au premier passage, et c'est le bug
             qui a coute le plus de temps ici.** `setVisible` ne pose la `src`
             qu'au rendu suivant : appelee maintenant, la lecture porte sur un
             element encore vide et ne fait rien, sans la moindre erreur.
             C'est `onCanPlay` qui demarre la premiere fois. Celui ci sert aux
             retours, quand la source est deja la.

             Le `catch` n'est pas decoratif : la promesse se rejette des qu'on
             quitte la vue pendant le chargement, et sans lui chaque
             aller-retour ecrit une erreur en console. */
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 }
    );

    observateur.observe(el);
    return () => observateur.disconnect();
  }, [reduit]);

  /**
   * 🔴 **C'est ici que la premiere lecture demarre, et nulle part ailleurs.**
   *
   * Deux tentatives ont echoue avant, pour la meme raison de fond : on peut
   * poser une source, elle n'existe pas encore pour le navigateur.
   *
   * 1. Appeler `play()` dans le rappel de l'observateur. `setVisible` ne pose
   *    la `src` qu'au rendu suivant : la lecture portait sur un element vide
   *    et ne faisait rien, **sans erreur**.
   * 2. Compter sur `onCanPlay`. Avec `preload="none"`, poser une `src` ne
   *    declenche aucun telechargement : rien n'est jamais pret, donc
   *    l'evenement n'arrive jamais.
   *
   * Cet effet s'execute apres que React a pose la `src`, et `play()` est ce
   * qui declenche le telechargement. La chaine est donc : le telephone entre
   * a l'ecran, la source est posee, la lecture demande les octets.
   *
   * ⚠️ Ne pas revenir a un `play()` dans l'observateur en croyant simplifier.
   */
  useEffect(() => {
    if (!visible || reduit) return;
    if (dansLEcran.current) ref.current?.play().catch(() => {});
  }, [visible, reduit]);

  if (reduit) {
    return (
      <img
        src={poster}
        alt=""
        className={`aspect-[4/5] w-full rounded-xl object-cover ${className}`}
        width={480}
        height={600}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <video
      ref={ref}
      /* La source n'apparait qu'une fois le telephone a l'ecran. */
      src={visible ? src : undefined}
      poster={poster}
      className={`aspect-[4/5] w-full rounded-xl object-cover ${className}`}
      muted
      loop
      playsInline
      preload="none"
      tabIndex={-1}
      /* La source vient d'etre posee : c'est ici que demarre la premiere
         lecture, et seulement si le telephone est toujours a l'ecran. */
      onCanPlay={() => {
        if (dansLEcran.current) ref.current?.play().catch(() => {});
      }}
    />
  );
};

export default ApercuVideo;
