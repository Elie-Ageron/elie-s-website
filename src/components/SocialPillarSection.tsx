import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import PostingCalendar from '@/components/PostingCalendar';

/**
 * Le bloc reseaux sociaux de l'accueil, pilier n°1.
 *
 * Place juste apres le hero, avant les sites : c'est l'offre recurrente, c'est
 * ce qu'Elie veut vendre en premier, et c'est la seule qui revient tous les
 * mois. Les sites restent le pilier n°2, plus bas.
 *
 * L'element physique de la section est le telephone avec le mois deja
 * programme. C'est la piece qu'Elie prefere dans toute la page, donc elle
 * grossit au lieu de retrecir : le mois occupe le haut, et l'apercu de la
 * publication occupe le bas en grand format vertical, a la place de la
 * vignette de 40 px qu'il etait.
 *
 * ⚠️ Le titre a ete raccourci de force. Il disait « Un compte laisse en plan ne
 * dit pas rien. Il dit quelque chose, et c'est faux. » : deux phrases, une
 * double negation, illisible en survol. La regle du site est desormais qu'on
 * doit comprendre toute l'offre en ne lisant que les titres noirs.
 *
 * ⚠️ Une bande de trois couvertures de video a ete posee ici puis retiree le
 * meme jour. Elie : « tu placardes les images de gens qui sourient alors qu'on
 * ne sait pas ce que ca apporte, on ne sait pas pourquoi elles sont la. On
 * n'essaie pas de les placarder a tout prix, on se tient discret ». Il avait
 * raison : la bande arrivait sans titre et sans question a laquelle repondre.
 * Une seule photo reste sur l'accueil, celle du telephone, et elle est a sa
 * place parce qu'elle montre le livrable dans son contexte. La bande vit sur
 * `/reseaux-sociaux`, sous un titre qui dit pourquoi elle est la.
 *
 * 890 € est le prix, plus un plancher : une offre unique depuis le 19
 * septembre 2026. Le detail vit sur `/reseaux-sociaux`, l'accueil porte le
 * montant et ce qu'il y a dedans. Sans engagement : c'est un argument
 * concurrentiel, l'agence qui vend le meme prix l'affiche en premier.
 */

const useSteps = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  return [
    {
      num: '1',
      title: fr ? 'Une journée chez vous' : 'One day at your place',
      desc: fr
        ? "J'arrive avec la caméra, les micros, la lumière et le plan de tournage déjà écrit. Vous n'avez rien à préparer et aucun texte à apprendre. C'est la seule journée du mois où vous me voyez."
        : 'I show up with the camera, mics, lights and the shooting plan already written. Nothing to prepare, no script to learn. It is the only day of the month you see me.',
    },
    {
      num: '2',
      title: fr ? 'Je monte et je sous-titre' : 'I edit and subtitle',
      desc: fr
        ? "De cette journée je sors 8 vidéos verticales. Chacune tient debout toute seule : une accroche dans les deux premières secondes, une idée, une fin qui donne envie de vous suivre."
        : 'From that day I pull 8 vertical videos. Each stands on its own: a hook in the first two seconds, one idea, an ending that makes people follow you.',
    },
    {
      num: '3',
      title: fr ? 'Je publie à votre place' : 'I post for you',
      desc: fr
        ? "Vos vidéos sortent tout au long du mois sur Instagram, Facebook, TikTok ou YouTube. Je choisis les horaires, j'écris les légendes et je gère les commentaires. Vous, vous répondez seulement aux gens qui veulent un rendez-vous."
        : 'Your videos go out through the month on Instagram, Facebook, TikTok or YouTube. I pick the timing, write the captions and handle the comments. You only answer the people who want an appointment.',
    },
  ];
};


const SocialPillarSection = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const steps = useSteps();

  const section = useRef<HTMLElement>(null);
  const moinsDeMouvement = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end start'] });
  const brut = useTransform(scrollYProgress, [0, 1], moinsDeMouvement ? [0, 0] : [36, -36]);
  const derive = useSpring(brut, { stiffness: 90, damping: 20, mass: 0.4 });

  return (
    <section
      ref={section}
      className="px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="social-pillar-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* ⚠️ Une seule grille pour toute la section, titre compris.
            Avant : le titre et les deux paragraphes occupaient toute la
            largeur, puis une seconde grille posait les etapes a gauche et le
            telephone a droite. Resultat, une zone vide de 450 px en haut a
            droite et le telephone repousse vers le bas. Elie : « le telephone,
            faut que tu le remontes pour qu'il soit a cote des trois points, il
            est trop bas ». Le telephone demarre maintenant au niveau du titre
            et se termine au-dessus du prix plancher. */}
        {/* 🔴 Sur telephone, le telephone arrivait en dernier.
            La grille empile ses colonnes : le visiteur lisait le titre, les
            deux chapos, les trois etapes et le bloc de fin, soit cinq ecrans,
            avant de voir la maquette. C'est la piece qu'Elie prefere dans la
            page, et c'est la seule qui montre le livrable au lieu de le
            decrire. Elle est maintenant le troisieme element, juste apres le
            chapo, sur l'appareil ou la plupart des gens arrivent.

            Les trois enfants sont places explicitement en `col-start` et
            `row-start` pour le bureau, ou rien ne bouge : titre puis etapes a
            gauche, telephone colle a droite sur les deux rangees. */}
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_340px] lg:gap-20">
          <div className="lg:col-start-1 lg:row-start-1">
            <ScrollReveal direction="up">
              <h2 id="social-pillar-heading" className="section-title">
                {fr ? 'Un jour de tournage. ' : 'One day of filming. '}
                <span className="text-primary">
                  {fr ? 'Un mois de publications.' : 'A month of posts.'}
                </span>
              </h2>
              <p className="section-lede mt-6">
                {fr
                  ? "Vos clients regardent votre page avant de vous appeler. Aujourd'hui, ce qu'ils y lisent, c'est une date. Je viens filmer une journée par mois, et vos comptes tournent jusqu'à la suivante."
                  : 'Your clients check your page before calling you. Right now, what they read there is a date. I come and film for one day a month, and your accounts run until the next one.'}
              </p>
              <p className="section-lede mt-4">
                {fr
                  ? 'Je travaille avec des artisans, des commerçants, des salons, des restaurants et des thérapeutes, entre Albertville, Chambéry et Annecy. Plus votre métier se voit, plus il est facile à filmer.'
                  : 'I work with tradespeople, shopkeepers, salons, restaurants and therapists, between Albertville, Chambéry and Annecy. The more physical your trade, the easier it is to film.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Le telephone derive au defilement, en plus d'etre colle en haut.
              Elie : « j'aimais bien quand le telephone a droite bouge en meme
              temps qu'on scrolle, c'est ca qui rend bien. » Le ressort evite
              l'effet saccade, et `useReducedMotion` coupe tout pour qui a
              demande moins d'animation.

              Il est le deuxieme enfant de la grille, donc deuxieme dans l'ordre
              de lecture sur telephone. Sur grand ecran, `row-span-2` le remet a
              cheval sur les deux rangees de la colonne de droite. */}
          <motion.div
            style={{ y: derive }}
            className="lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:row-span-2"
          >
            <PostingCalendar />
          </motion.div>

          <div className="lg:col-start-1 lg:row-start-2">
            <div className="space-y-12 sm:space-y-14">
              {steps.map((step, i) => (
                <ScrollReveal key={step.num} direction="up" delay={i * 0.05}>
                  <article className="flex gap-6 sm:gap-8">
                    <span
                      className="shrink-0 font-heading text-5xl font-bold leading-none text-primary sm:text-6xl"
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {/* La meme idee que sur `/reseaux-sociaux`, en deux phrases : ce que
                le visiteur fait pendant les trois etapes, c'est a dire rien, et
                le cadre qu'il pose au depart pour que ce rien soit confortable.
                Elie : « ajoute apres le point 3 que c'est effortless pour eux.
                Tout est gere pour eux, selon leurs preferences. » La version
                longue vit sur la page dediee, l'accueil garde le resume. */}
            <ScrollReveal direction="up">
              <div className="mt-12 border-t border-border pt-9 sm:mt-14">
                <p className="text-lg font-bold leading-snug tracking-tight text-foreground">
                  {fr
                    ? 'Votre part du travail tient dans une journée.'
                    : 'Your share of the work fits in a single day.'}
                </p>
                <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                  {fr
                    ? "Le reste du mois se passe sans vous. On fixe au départ ce dont vous voulez parler et ce que vous préférez garder pour vous, et je travaille dans ce cadre."
                    : 'The rest of the month happens without you. We agree up front on what you want to talk about and what you would rather keep to yourself, and I work inside that.'}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal direction="up">
          <div className="mt-16 flex flex-col gap-5 border-t border-border pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-heading text-3xl font-bold leading-none text-foreground sm:text-4xl">
                {fr ? '890 € par mois, sans engagement' : '€890 a month, no commitment'}
              </p>
              <p className="mt-2.5 text-sm text-muted-foreground">
                {fr
                  ? "Une journée de tournage chez vous, 8 vidéos, 4 carrousels et 8 stories publiés, déplacement compris."
                  : 'A full day of filming at your place, 8 videos, 4 carousels and 8 stories posted for you, travel included.'}
              </p>
              {/* 🔴 Sorti de la phrase du dessus le 21 septembre 2026. Il y
                  était en fin de ligne, à 14 px : la seule mention de tout
                  l'accueil, dans le plus petit texte de la page. Elie : *« ce
                  qu'on ne voit pas assez, c'est qu'au bout du troisième mois,
                  j'offre le site web. »* */}
              <p className="mt-3 text-base font-medium text-foreground">
                {fr ? 'Et au troisième mois, votre site web d’une page. ' : 'And from the third month, your one page website. '}
                <span className="text-primary">{fr ? 'Compris.' : 'Included.'}</span>
              </p>
            </div>
            <Link
              to="/reseaux-sociaux"
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {fr ? 'Comment ça marche' : 'How it works'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SocialPillarSection;
