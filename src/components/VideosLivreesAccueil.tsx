import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import BandeVideos from '@/components/BandeVideos';
import { INSTAGRAM_ELIE, videosAccueil } from '@/data/publications-livrees';

/**
 * Les videos livrees, sur l'accueil, juste apres l'offre reseaux.
 *
 * Elie, le 11 octobre 2026 : *« ce serait bien que ce soit sur l'accueil,
 * toutes ces videos-la, les videos Nouit, Isabelle, etc. Ca fait la preuve
 * sociale en plus. »*
 *
 * ⚠️ **Ce n'est pas le retour de `SocialClientsSection`.** Celle-la, Elie
 * l'avait fait descendre de l'accueil le 13 septembre : deux noms et des
 * liens, pour des comptes qui demarraient, *« ca ne fait pas une tres belle
 * vitrine »*. Ici on montre le travail lui meme, qui se regarde sur place, et
 * un des comptes a depuis passe plusieurs videos au dela de 80 000 vues.
 *
 * ⚠️ **Le titre dit pourquoi les visages sont la**, c'est la regle des photos
 * de publication : une image se pose sous un titre qui l'explique, ou elle ne
 * se pose pas.
 *
 * ⚠️ **Deux sorties seulement, sous la bande** : la page reseaux, qui montre
 * tout et donne le prix, et le compte Instagram d'Elie, qu'il veut faire
 * connaitre (*« comme ca, ils vont voir mon Insta aussi »*). Aucune dans la
 * bande elle meme, sauf le lien d'une video qui est sortie sur son compte.
 */
const VideosLivreesAccueil = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  if (!videosAccueil.length) return null;

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="videos-livrees-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="videos-livrees-heading" className="section-title max-w-3xl">
          {fr ? "Quelques vidéos que j'ai livrées " : 'A few videos I delivered '}
          <span className="text-primary">{fr ? 'récemment.' : 'recently.'}</span>
        </h2>
        <p className="section-lede mt-6">
          {fr
            ? "Pour deux clientes d'Albertville, une formatrice et une thérapeute, et pour des exposants du salon de l'habitat. Lancez la lecture, le son est là."
            : 'For two clients in Albertville, a trainer and a therapist, and for exhibitors at the local home fair. Press play, the sound is on.'}
        </p>

        <BandeVideos
          className="mt-10"
          videos={videosAccueil}
          libelle={fr ? 'Vidéos livrées récemment' : 'Recently delivered videos'}
        />

        <p className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <Link
            to="/reseaux-sociaux"
            className="inline-flex min-h-[24px] items-center gap-1.5 text-base font-semibold text-primary underline-offset-4 hover:underline"
          >
            {fr ? 'Voir comment je travaille, et le prix' : 'See how I work, and the price'}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={INSTAGRAM_ELIE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[24px] items-center gap-1 text-base font-semibold text-primary underline-offset-4 hover:underline"
          >
            {fr ? 'Mon Instagram' : 'My Instagram'}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default VideosLivreesAccueil;
