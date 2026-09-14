import { useState } from 'react';
import { Heart, MessageCircle, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Publication } from '@/data/publications';

/**
 * Une couverture de video verticale, telle qu'elle apparait dans un fil.
 *
 * C'est la seule piece du site qui montre le livrable au lieu de le decrire.
 * Elle sert dans le telephone de l'accueil et dans les bandes de publications.
 *
 * Le repli compte autant que l'image : tant que la photo n'est pas deposee dans
 * `public/publications/`, le degrade reste et la mise en page ne bouge pas d'un
 * pixel. C'est ce qui permet a Elie d'ajouter les photos une par une sans
 * jamais casser la page.
 *
 * Toujours utilise a l'interieur d'un conteneur `aria-hidden` : ces images
 * illustrent le service, elles ne representent pas des clients reels.
 */
const PostCover = ({
  publication,
  className = '',
  taille = 'normale',
}: {
  publication: Publication;
  className?: string;
  /** `grande` pour le telephone, `normale` pour une bande. */
  taille?: 'normale' | 'grande';
}) => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const [photo, setPhoto] = useState(true);

  const grande = taille === 'grande';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/80 via-primary/50 to-foreground ${className}`}
    >
      <div className="aspect-[4/5] w-full">
        {photo && (
          <img
            src={publication.image}
            alt=""
            className="h-full w-full object-cover"
            onError={() => setPhoto(false)}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent ${
          grande ? 'px-3.5 pb-3 pt-12' : 'px-3 pb-3 pt-10'
        }`}
      >
        <p className={`font-semibold leading-snug text-white ${grande ? 'text-[13px]' : 'text-xs'}`}>
          {fr ? publication.titreFr : publication.titreEn}
        </p>
        <div className="mt-1.5 flex items-center gap-3 text-white/85">
          <span className="flex items-center gap-1 text-[10px] tabular-nums">
            <Heart className="h-3 w-3" /> {publication.mentions}
          </span>
          <span className="flex items-center gap-1 text-[10px] tabular-nums">
            <MessageCircle className="h-3 w-3" /> {publication.commentaires}
          </span>
        </div>
      </div>

      <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm">
        <Play className="h-3 w-3 fill-white text-white" />
      </span>
    </div>
  );
};

export default PostCover;
