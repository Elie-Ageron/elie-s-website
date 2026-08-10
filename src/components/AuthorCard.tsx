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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-4">
            {fr ? 'Écrit par' : 'Written by'}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <img
              src={portrait}
              alt={fr ? 'Elie Ageron, web designer en Savoie' : 'Elie Ageron, web designer in Savoie'}
              width={72}
              height={72}
              loading="lazy"
              decoding="async"
              className="w-[72px] h-[72px] rounded-full object-cover border border-border/60 shrink-0"
            />
            <div className="min-w-0">
              <h2 id="author-heading" className="text-lg font-semibold text-foreground">
                Elie Ageron
              </h2>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                {fr ? 'Albertville, Savoie' : 'Albertville, Savoie, France'}
              </p>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                {fr
                  ? "Je construis des sites pour des artisans, des commerçants et des indépendants, et je m'occupe de leurs réseaux sociaux : je viens filmer une journée par mois, je monte et je publie. Tout ce que j'écris ici vient de ce que je vois chez mes clients, pas de théorie."
                  : 'I build websites for tradespeople, shop owners and independents, and I run their social media: I come and film for a full day each month, then edit and publish. Everything here comes from what I see with clients, not from theory.'}
              </p>
              <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link
                  to="/a-propos"
                  className="inline-flex items-center gap-1.5 min-h-[24px] text-primary font-medium hover:underline underline-offset-4"
                >
                  {fr ? 'En savoir plus sur moi' : 'More about me'}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center min-h-[24px] text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
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
