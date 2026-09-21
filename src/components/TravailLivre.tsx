import { useLanguage } from '@/contexts/LanguageContext';
import CarrouselPlanches from '@/components/CarrouselPlanches';
import { publicationsLivrees, type PublicationLivree } from '@/data/publications-livrees';

/**
 * Le travail livre, regarde sur place.
 *
 * 🔴 **Ce bloc remplace `PublicationsReelles` sur `/reseaux-sociaux`.** Elie,
 * le 21 septembre 2026 : *« la, actuellement, il y a trois videos d'Isabelle.
 * Je veux que tu mettes les trois trucs que je t'ai envoyes : le carrousel ou
 * on peut defiler les photos, et les deux videos. »*
 *
 * L'ancien bloc montrait une vignette et renvoyait vers le Reel public. Le
 * nouveau joue le fichier sur la page et ne renvoie nulle part : voir
 * l'en-tete de `publications-livrees.ts` pour la raison.
 *
 * ⚠️ **`preload="none"` et une vignette.** Sans ca, deux fichiers de plus de
 * quatre megaoctets partiraient au chargement de la page, sur une page dont le
 * fil principal est deja le point faible du site. Ici, tant que personne ne
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
 * ⚠️ **Le carrousel est centre, pas cale en haut.** Il est en 4:5 quand les
 * videos sont en 9:16, donc il est plus court : aligne en haut, il laissait un
 * trou sous sa legende. Elie : *« baisse un peu le caroussel pour le
 * centrer. »*
 */

const Legende = ({ piece }: { piece: PublicationLivree }) => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  return (
    <div className="mt-3">
      <p className="text-sm font-semibold text-foreground">{piece.client}</p>
      <p className="text-sm text-muted-foreground">{fr ? piece.metierFr : piece.metierEn}</p>
    </div>
  );
};

const TravailLivre = ({ className = '' }: { className?: string }) => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  if (!publicationsLivrees.length) return null;

  return (
    <div className={className}>
      <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:items-center sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
        {publicationsLivrees.map((piece) => (
          <li key={piece.id} className="w-[68vw] shrink-0 snap-start sm:w-auto">
            {piece.type === 'video' ? (
              <video
                className="soft-shadow aspect-[9/16] w-full rounded-2xl border border-border bg-secondary object-cover"
                src={piece.fichier}
                poster={piece.poster}
                preload="none"
                controls
                playsInline
                title={fr ? piece.titreFr : piece.titreEn}
              >
                {fr
                  ? "Votre navigateur ne peut pas lire cette vidéo."
                  : 'Your browser cannot play this video.'}
              </video>
            ) : (
              <CarrouselPlanches
                images={piece.images}
                libelle={fr ? piece.titreFr : piece.titreEn}
                legende={(i, total) =>
                  fr
                    ? `${piece.titreFr}, planche ${i + 1} sur ${total}`
                    : `${piece.titreEn}, slide ${i + 1} of ${total}`
                }
              />
            )}
            <Legende piece={piece} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravailLivre;
