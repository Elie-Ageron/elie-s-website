import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface InternalLinksProps {
  currentPage:
    | 'home'
    | 'services'
    | 'why'
    | 'process'
    | 'portfolio'
    | 'contact'
    | 'blog'
    | 'social'
    | 'guides'
    | 'about'
    | 'audit';
}

/**
 * Le renvoi vers trois autres pages, en pied de page.
 *
 * C'etaient trois cases a icone dans une bande grise, posees juste au-dessus
 * de la section de contact et souvent juste en dessous de « Par ou commencer ».
 * Trois blocs de navigation d'affilee en fin de page, dont deux qui se
 * ressemblent : Elie a dit « il y a trop de cases, on comprend rien ».
 *
 * C'est maintenant une ligne de liens, sans fond, sans icone et sans cadre.
 * Le maillage interne est identique, le poids visuel ne l'est pas : cette
 * section aide un visiteur perdu, elle ne doit pas concurrencer l'appel a
 * l'action qui la suit.
 */
const InternalLinks = ({ currentPage }: InternalLinksProps) => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  const links = [
    {
      id: 'social',
      path: '/reseaux-sociaux',
      title: fr ? 'Réseaux sociaux' : 'Social media',
      desc: fr ? 'Je filme, je monte, je publie tout le mois' : 'I film, edit and post all month long',
    },
    {
      id: 'services',
      path: '/services',
      title: fr ? 'Tous les services' : 'All services',
      desc: fr ? 'Site, réseaux, Google, marque, référencement' : 'Site, social, Google, branding, SEO',
    },
    {
      id: 'portfolio',
      path: '/portfolio',
      title: 'Portfolio',
      desc: fr ? 'Les sites livrés, et ce qui a changé après' : 'Sites delivered, and what changed after',
    },
    {
      id: 'guides',
      path: '/guides',
      title: fr ? 'Guides gratuits' : 'Free guides',
      desc: fr ? 'Réseaux, vidéo et Google, expliqués en entier' : 'Social, video and Google, explained in full',
    },
    {
      id: 'blog',
      path: '/blog',
      title: fr ? 'Le blog' : 'The blog',
      desc: fr ? 'Les réponses écrites, prix et délais compris' : 'Written answers, prices and timelines included',
    },
    {
      id: 'about',
      path: '/a-propos',
      title: fr ? 'À propos' : 'About',
      desc: fr ? 'Qui je suis et comment je travaille' : 'Who I am and how I work',
    },
    {
      id: 'why',
      path: '/why-a-website',
      title: fr ? 'Pourquoi un site ?' : 'Why a website?',
      desc: fr ? "Ce qu'un site change vraiment pour une TPE" : 'What a site actually changes for a small business',
    },
    {
      id: 'process',
      path: '/our-process',
      title: fr ? 'Le déroulé' : 'The process',
      desc: fr ? 'Du premier appel à la mise en ligne' : 'From the first call to launch',
    },
  ];

  /**
   * 🔴 **Le `slice(0, 3)` nu rendait les deux dernieres entrees inatteignables.**
   * La liste est fixe et l'ordre aussi : `why` et `process` sont en sixieme et
   * septieme position, donc ils n'apparaissaient sur **aucune** page du site.
   * `CLAUDE.md` les disait pourtant lies depuis `InternalLinks`, et c'est ce
   * qui a fait croire qu'on pouvait les retirer du pied de page sans risque.
   * Releve le 17 septembre 2026 par `npm run check:maillage`.
   *
   * On decale donc le point de depart selon la page courante. Chaque page
   * montre toujours les memes trois liens, le rendu reste stable entre le
   * pre-rendu et le navigateur, et sur l'ensemble du site les sept entrees
   * sortent toutes au moins une fois.
   */
  const candidats = links.filter((link) => link.id !== currentPage);
  const decalage =
    [...currentPage].reduce((somme, c) => somme + c.charCodeAt(0), 0) % Math.max(candidats.length, 1);
  const filteredLinks = Array.from(
    { length: Math.min(3, candidats.length) },
    (_, i) => candidats[(decalage + i) % candidats.length]
  );

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16" aria-label={fr ? 'Pages liées' : 'Related pages'}>
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-muted-foreground">{fr ? 'À voir aussi' : 'See also'}</p>

        <ul className="mt-4 border-t border-border">
          {filteredLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="border-b border-border"
            >
              <Link
                to={link.path}
                id={`internal-link-${link.id}`}
                className="group flex items-center justify-between gap-6 py-4"
              >
                <span className="min-w-0">
                  <span className="block font-semibold text-foreground transition-colors group-hover:text-primary">
                    {link.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{link.desc}</span>
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InternalLinks;
