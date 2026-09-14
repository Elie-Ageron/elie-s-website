import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getIndexEntry } from '@/data/blogIndex';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * La FAQ du site, une seule fois.
 *
 * 🔴 **Il y en avait quatre, avec quatre presentations differentes.**
 *
 * | Page | Ce qu'elle affichait |
 * |---|---|
 * | Accueil | Un accordeon, questions repliees |
 * | `/services` | Une liste `dl` entierement depliee, des paragraphes |
 * | `/reseaux-sociaux` | Un autre accordeon, avec ses propres classes |
 * | Pages locales | Une liste `dl` depliee, encore d'autres classes |
 *
 * Elie : *« c'est des paragraphes de texte, pas des questions ou tu peux
 * cliquer. C'est bizarre. Il faut que ce soit pareil partout, la FAQ. Les
 * questions sont pas pareilles, mais le format est pareil partout, donc les
 * gens, peu importe ou ils sont sur le site, s'y retrouvent. »*
 *
 * **Les questions changent d'une page a l'autre, la presentation jamais.**
 * Toute nouvelle FAQ passe par ce composant. Ne pas recoder un accordeon.
 *
 * Le format retenu est l'accordeon : une liste depliee de six reponses longues
 * fait defiler pendant deux ecrans et noie la question suivante. Referme, le
 * visiteur voit les six questions d'un coup et ouvre la sienne.
 */

export type FaqEntree = {
  question: string;
  answer: string;
  /** Slug d'article de blog qui developpe la reponse. Optionnel. */
  article?: string;
};

type FaqSectionProps = {
  items: FaqEntree[];
  /** Le titre de section. Passer le JSX pour garder l'accent rose. */
  titre: ReactNode;
  /** L'identifiant du `<h2>`, pour le `aria-labelledby` de la section. */
  id?: string;
  lede?: ReactNode;
  /** Affiche le renvoi vers le blog sous la liste. Reserve a l'accueil. */
  lienBlog?: boolean;
  className?: string;
};

const FaqSection = ({
  items,
  titre,
  id = 'faq-heading',
  lede,
  lienBlog = false,
  className = 'px-4 py-20 sm:px-6 sm:py-28',
}: FaqSectionProps) => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  if (!items.length) return null;

  return (
    <section className={className} aria-labelledby={id}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <h2 id={id} className="section-title">
            {titre}
          </h2>
          {lede && <p className="section-lede mt-5">{lede}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full border-t border-border">
            {items.map((item, index) => {
              const article = item.article ? getIndexEntry(item.article) : null;
              return (
                <AccordionItem key={item.question} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="py-5 text-left text-base font-bold tracking-tight text-foreground transition-colors hover:text-primary hover:no-underline sm:text-lg [&[data-state=open]]:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                    {article && item.article && (
                      <Link
                        to={`/blog/${item.article}`}
                        className="mt-4 inline-flex min-h-[24px] items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        {fr ? 'Lire la réponse complète' : 'Read the full answer'}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

        {lienBlog && fr && (
          <p className="mt-8">
            <Link
              to="/blog"
              className="inline-flex min-h-[24px] items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Toutes les réponses écrites, sur le blog
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default FaqSection;
