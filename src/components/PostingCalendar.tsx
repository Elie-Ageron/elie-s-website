import { useLanguage } from '@/contexts/LanguageContext';
import PostCover from '@/components/PostCover';
import ApercuVideo from '@/components/ApercuVideo';
import { parId } from '@/data/publications';

/**
 * Le telephone avec le mois deja programme.
 *
 * 🔴 **Extrait de `SocialPillarSection` le 21 septembre 2026** pour que
 * `/reseaux-sociaux` puisse l'afficher aussi. Elie : *« si je vais voir la
 * page d'accueil, il y a un telephone, il y a quelqu'un qui sourit. Juste en
 * dessous, il y a ma tete, encore quelqu'un qui sourit. Il y a des elements
 * reels, c'est pas que du texte. Dans la page reseaux sociaux, il faut
 * ameliorer ca. »*
 *
 * C'est la piece qu'Elie prefere dans l'accueil, et la page qui vend le
 * service n'en avait aucune. **Une seule definition pour les deux pages** :
 * un second exemplaire aurait derive au premier changement de perimetre.
 *
 * ⚠️ Le nombre de publications affiche suit l'offre. Il est passe de 6 a 8 le
 * 20 septembre 2026, avec le reste du site.
 */
/* ── L'element physique : le mois deja programme, dans un telephone ── */
/**
 * ⚠️ **L'apercu differe selon la page, et c'est voulu.** L'accueil garde la
 * couverture de la coiffeuse, qu'Elie juge bonne a cet endroit. Sur
 * `/reseaux-sociaux`, c'est une vraie video qui tourne : la page qui vend le
 * service doit montrer le service, pas une illustration.
 */
const PostingCalendar = ({ apercu = 'image' }: { apercu?: 'image' | 'video' }) => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  const postDays = [2, 5, 9, 13, 16, 20, 23, 27];

  return (
    /* 🔴 `aria-hidden` seulement quand le telephone ne contient qu'une
       maquette. Avec la variante video il porte un bouton reel : un element
       focalisable sous `aria-hidden` est la violation axe `aria-hidden-focus`,
       gravite serious, deja rencontree sur `CalendlyPopup`. Les parties
       decoratives restent masquees une par une, plus bas. */
    <div
      className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]"
      aria-hidden={apercu === 'video' ? undefined : true}
    >
      <div className="rounded-[2.4rem] border-[7px] border-foreground bg-foreground p-1 shadow-2xl">
        <div className="overflow-hidden rounded-[1.9rem] bg-background">
          {/* Barre d'etat */}
          <div aria-hidden="true" className="flex items-center justify-between px-5 pb-1.5 pt-3.5">
            <span className="text-[10px] font-semibold tabular-nums text-foreground">9:41</span>
            <span className="h-4 w-20 rounded-full bg-foreground" />
            <span className="flex gap-0.5">
              <span className="h-1.5 w-1.5 rounded-sm bg-foreground/60" />
              <span className="h-1.5 w-3 rounded-sm bg-foreground/60" />
            </span>
          </div>

          {/* En-tete */}
          <div aria-hidden="true" className="border-b border-border px-5 py-3.5">
            <p className="text-[11px] font-medium text-muted-foreground">
              {fr ? 'Votre mois' : 'Your month'}
            </p>
            <p className="mt-0.5 text-base font-bold text-foreground">
              {fr ? '8 publications programmées' : '8 posts scheduled'}
            </p>
          </div>

          {/* Grille du mois */}
          <div aria-hidden="true" className="px-5 py-4">
            <div className="mb-2 grid grid-cols-7 gap-1.5 text-center">
              {(fr ? ['L', 'M', 'M', 'J', 'V', 'S', 'D'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S']).map((d, i) => (
                <span key={`${d}-${i}`} className="text-[9px] font-medium text-muted-foreground">
                  {d}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                const isPost = postDays.includes(day);
                return (
                  <span
                    key={day}
                    className={`flex aspect-square items-center justify-center rounded-md text-[9px] font-semibold tabular-nums ${
                      isPost ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {day}
                  </span>
                );
              })}
            </div>
          </div>

          {/* L'apercu de publication, en grand */}
          <div className="border-t border-border px-3 pb-3 pt-3">
            {apercu === 'video' ? (
              <ApercuVideo
                src="/publications/videos/apercu-telephone.mp4"
                poster="/publications/videos/apercu-telephone.webp"
                titre={
                  fr
                    ? 'Nouït, thérapeute et conseil à Albertville'
                    : 'Nouït, therapist and counsellor in Albertville'
                }
              />
            ) : (
              <PostCover publication={parId('coiffure')} taille="grande" />
            )}
            <p className="mt-2.5 px-1 text-[10px] text-muted-foreground">
              {fr ? 'Publié mardi, 18:30' : 'Posted Tuesday, 6:30pm'}
            </p>
          </div>
        </div>
      </div>

      {/* Badge physique, colle de travers sur le coin */}
      <div aria-hidden="true" className="absolute -right-3 -top-3 rotate-6 rounded-lg bg-primary px-3 py-1.5 shadow-lg">
        <span className="text-[11px] font-semibold text-primary-foreground">
          {fr ? 'Vous : rien à faire' : 'You: nothing to do'}
        </span>
      </div>
    </div>
  );
};

export default PostingCalendar;
