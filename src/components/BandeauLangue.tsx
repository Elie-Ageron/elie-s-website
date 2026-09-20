import { useEffect, useState } from 'react';
import { useLanguage, preferePeutEtreAnglais } from '@/contexts/LanguageContext';

/**
 * Propose l'anglais a qui lit l'anglais. Ne bascule rien tout seul.
 *
 * 🔴 **Pourquoi ce bandeau existe, et pourquoi il ne fait que proposer.**
 * Le site basculait en anglais quand le navigateur etait en anglais. Googlebot
 * explore depuis les Etats-Unis : c'est la version anglaise qui est entree
 * dans l'index, et le site est devenu introuvable sur les requetes francaises
 * de son propre bassin. Voir le commentaire de `detecterLangue` dans
 * `LanguageContext.tsx` pour la mesure.
 *
 * La langue servie est donc le francais, pour tout le monde. L'anglophone
 * garde un chemin d'un clic, et son choix est retenu.
 *
 * ⚠️ **Rien ne s'affiche avant le montage.** Le bandeau n'existe donc ni dans
 * le HTML pre-rendu ni pour un robot. C'est volontaire : ce qui est indexe ne
 * doit pas dependre de la langue du visiteur.
 *
 * ⚠️ Il est en bas et en `fixed`. En haut il pousserait la page vers le bas au
 * montage, et le CLS de l'accueil est a zero depuis le 16 septembre. Un
 * element hors flux ne peut decaler personne.
 */
const CLEF_REFUS = 'elie-langue-bandeau';

const BandeauLangue = () => {
  const { setLanguage } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!preferePeutEtreAnglais()) return;
    try {
      if (window.sessionStorage.getItem(CLEF_REFUS)) return;
    } catch {
      // Stockage bloque : on propose quand meme, il reste refusable.
    }
    setVisible(true);
  }, []);

  if (!visible) return null;

  const fermer = () => {
    setVisible(false);
    try {
      window.sessionStorage.setItem(CLEF_REFUS, '1');
    } catch {
      // Le refus vaut pour l'affichage en cours, c'est suffisant.
    }
  };

  return (
    <div
      role="region"
      aria-label="Language"
      lang="en"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 sm:px-6">
        <p className="text-sm text-muted-foreground">
          This site is written in French. An English version is available.
        </p>
        <div className="ml-auto flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              setLanguage('en');
              setVisible(false);
            }}
            className="inline-flex min-h-[24px] items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Read in English
          </button>
          <button
            type="button"
            onClick={fermer}
            className="inline-flex min-h-[24px] items-center text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default BandeauLangue;
