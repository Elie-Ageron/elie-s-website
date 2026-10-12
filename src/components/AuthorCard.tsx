import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import portrait from '@/assets/elie-ageron-portrait.webp';

/**
 * Encart auteur affiche en bas des articles et des guides.
 * Signal E-E-A-T : il relie chaque contenu a une personne reelle, situee,
 * et cree un lien interne systematique vers la page A propos.
 */
const AuthorCard = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  return (
    <section className="py-10 sm:py-14" aria-labelledby="author-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="border-y border-border/60 py-8">
          <p className="mb-4 text-sm font-semibold text-primary">
            {fr ? 'Écrit par' : 'Written by'}
          </p>
          {/* Sous `sm`, la photo et le nom sur la meme ligne, comme une signature.
              La carte s'empilait (photo seule, puis nom, puis lieu) et prenait
              63 % d'un ecran de telephone, sur 146 pages. `contents` fait des
              enfants du bloc texte des cases de la grille. */}
          <div className="grid grid-cols-[56px_1fr] items-center gap-x-4 sm:flex sm:flex-row sm:items-start sm:gap-5">
            <img
              src={portrait}
              alt={fr ? 'Elie Ageron, web designer en Savoie' : 'Elie Ageron, web designer in Savoie'}
              width={72}
              height={72}
              loading="lazy"
              decoding="async"
              className="row-span-2 w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full object-cover border border-border/60 shrink-0"
            />
            <div className="contents sm:block sm:min-w-0">
              <h2 id="author-heading" className="col-start-2 self-end text-lg font-semibold text-foreground">
                Elie Ageron
              </h2>
              <p className="col-start-2 self-start mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                {fr ? 'Albertville, Savoie' : 'Albertville, Savoie, France'}
              </p>
              <p className="col-span-2 mt-4 sm:mt-3 text-base text-muted-foreground leading-relaxed">
                {fr
                  /* 50 mots ramenes a 32 le 12 octobre 2026 : six lignes sur
                     telephone, en bas des 142 articles et des quatre guides. */
                  ? "Je fais des sites pour des artisans, des commerçants et des indépendants, et je filme leurs vidéos pour les réseaux. Ce que j'écris ici vient de ce que je vois chez eux."
                  : 'I build websites for tradespeople, shop owners and independents, and film their videos for social media. What I write here comes from what I see with them.'}
              </p>
              <p className="col-span-2 mt-4 flex flex-wrap gap-x-5 gap-y-1 text-base sm:gap-y-2 lg:text-sm">
                <Link
                  to="/a-propos"
                  className="inline-flex items-center gap-1.5 min-h-[44px] lg:min-h-[24px] text-primary font-medium hover:underline underline-offset-4"
                >
                  {fr ? 'En savoir plus sur moi' : 'More about me'}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center min-h-[44px] lg:min-h-[24px] text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                >
                  {fr ? 'Me poser une question' : 'Ask me a question'}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorCard;
