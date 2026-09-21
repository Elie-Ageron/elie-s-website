import { ArrowUpRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { publicationsReelles } from '@/data/publications-reelles';

/**
 * ⚠️ **Ce composant n'est plus monte nulle part depuis le 21 septembre 2026.**
 * `TravailLivre` l'a remplace sur `/reseaux-sociaux`. Elie voulait montrer le
 * travail sans renvoyer vers un compte qui demarre : *« sans le lien vers le
 * reseau social de la personne, parce que les reseaux, ils n'ont pas encore
 * beaucoup de resultats. »*
 *
 * Il est garde tel quel, avec ses donnees et ses vignettes, parce que la page
 * Facebook d'Isabelle est reelle et active : le jour ou un compte client aura
 * de quoi soutenir un lien sortant, c'est ce bloc qu'on remonte. A supprimer
 * si Elie tranche que les liens ne reviennent pas.
 */

/**
 * Trois videos reellement en ligne, cliquables.
 *
 * Elle remplace la bande de couvertures generees a cet endroit : une image
 * d'illustration montre a quoi ca ressemble, un lien vers la vraie publication
 * prouve que ca existe. Le visiteur peut verifier en un clic, et c'est la
 * seule preuve du service qui ne repose pas sur ma parole.
 *
 * ⚠️ Aucun compteur de vues, alors que Facebook en affiche sous chaque Reel.
 * Voir la note de `src/data/publications-reelles.ts`.
 *
 * Le titre de chaque video est deja grave dans la vignette, donc aucun texte
 * n'est pose par-dessus : il ferait doublon et se superposerait mal.
 * Format 9:16, celui de la publication, et pas un recadrage.
 */
const PublicationsReelles = ({ className = '' }: { className?: string }) => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  if (!publicationsReelles.length) return null;
  const compte = publicationsReelles[0];

  return (
    <div className={className}>
      <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
        {publicationsReelles.map((pub) => (
          <li key={pub.id} className="w-[62vw] shrink-0 snap-start sm:w-auto">
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              title={fr ? pub.titreFr : pub.titreEn}
            >
              <div className="soft-shadow relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={pub.image}
                  alt={
                    fr
                      ? `Vidéo publiée pour ${pub.nomCompte} : ${pub.titreFr}`
                      : `Video published for ${pub.nomCompte}: ${pub.titreEn}`
                  }
                  className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  width={540}
                  height={960}
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm"
                  aria-hidden="true"
                >
                  <Play className="h-3.5 w-3.5 fill-white text-white" />
                </span>
              </div>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                {fr ? 'Voir la vidéo' : 'Watch the video'}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </p>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-6 leading-relaxed text-muted-foreground">
        {fr ? 'Tournées, montées et publiées pour ' : 'Filmed, edited and posted for '}
        <a
          href={compte.compte}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[24px] items-center font-semibold text-primary underline-offset-4 hover:underline"
        >
          {compte.nomCompte}
        </a>
        {/* Seule la premiere lettre passe en minuscule. Un `toLowerCase()` sur
            toute la chaine ecrivait « albertville ». */}
        {(() => {
          const metier = fr ? compte.metierFr : compte.metierEn;
          return `, ${metier.charAt(0).toLowerCase()}${metier.slice(1)}.`;
        })()}
      </p>
    </div>
  );
};

export default PublicationsReelles;
