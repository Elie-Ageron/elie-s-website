import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getIndexEntry } from '@/data/blogIndex';
import eliePortrait from '@/assets/elie-ageron-portrait.webp';

/**
 * La section locale des pages de villes et des pages reseaux locales.
 *
 * 🔴 **Ecrite le 14 octobre 2026**, a la place de sept a dix paragraphes de
 * contexte par page. Elie, sur `/creation-site-web-albertville` : *« t'as pas
 * d'elements clairs. T'as quatre paragraphes enormes avec un texte sur le
 * contexte a Albertville, donc on comprend rien. Personne va lire ca. »*
 *
 * Le texte local reste : c'est lui qui distingue ces vingt et une pages d'une
 * page satellite ou seul le nom de la commune change. Il change de forme :
 * trois ou quatre points, un titre qui se lit seul, deux phrases au plus.
 *
 * ⚠️ **Le visage avant le texte**, comme dans la presentation de l'accueil.
 * Elie, le 21 septembre : *« il y a quelqu'un qui sourit [...] il y a des
 * elements reels, c'est pas que du texte. »* Sur une page locale, la premiere
 * question est de savoir qui va venir.
 *
 * ⚠️ **Une seule definition pour les deux familles de pages.** Deux copies
 * derivent au premier changement, c'est arrive avec le telephone de l'accueil.
 */

export type PointLocal = {
  titre: string;
  texte: string;
  /** Slug de l'article qui developpe le point. */
  article?: string;
};

type SectionLocaleProps = {
  id: string;
  /** Le titre de section. Passer le JSX pour garder l'accent rose. */
  titre: ReactNode;
  points: PointLocal[];
  altPortrait: string;
  /** Ce qui suit la liste, sous un filet. */
  children?: ReactNode;
};

const SectionLocale = ({ id, titre, points, altPortrait, children }: SectionLocaleProps) => (
  <section className="border-t border-border/50 px-4 py-20 sm:px-6 sm:py-28" aria-labelledby={id}>
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4">
          <img
            src={eliePortrait}
            alt={altPortrait}
            className="soft-shadow aspect-[4/5] w-full max-w-[200px] rounded-2xl object-cover sm:max-w-[240px] md:sticky md:top-28 md:max-w-none"
            width={320}
            height={400}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="md:col-span-8">
          <h2 id={id} className="section-title">
            {titre}
          </h2>

          <ol className="mt-10 sm:mt-12">
            {points.map((point, i) => {
              const article = point.article ? getIndexEntry(point.article) : null;
              return (
                <motion.li
                  key={point.titre}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: Math.min(i * 0.06, 0.24), duration: 0.4 }}
                  className={`grid grid-cols-[auto_1fr] gap-x-5 py-7 sm:gap-x-7 ${i === 0 ? '' : 'border-t border-border/60'}`}
                >
                  <span
                    className="w-7 font-heading text-5xl font-bold leading-none text-primary tabular-nums sm:w-9"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-xl font-bold leading-snug text-foreground">{point.titre}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{point.texte}</p>
                    {/* Le lien contextuel remplace la liste d'articles qui
                        tombait apres la FAQ et faisait croire a une seconde fin
                        de page. Au plus un par point, et pas sur tous. */}
                    {article && (
                      <Link
                        to={`/blog/${point.article}`}
                        className="mt-3 inline-flex min-h-[44px] items-start gap-1.5 text-base font-medium text-primary underline-offset-4 hover:underline sm:min-h-[24px] lg:text-sm"
                      >
                        <span>À lire : {article.title}</span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ol>

          {children && <div className="mt-4 border-t border-border/60 pt-8">{children}</div>}
        </div>
      </div>
    </div>
  </section>
);

export default SectionLocale;
