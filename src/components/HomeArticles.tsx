import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts, getPostBySlug } from '@/data/blogPosts';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Six articles mis en avant depuis l'accueil.
 *
 * Pourquoi : l'accueil est la page la plus forte du site et elle ne renvoyait
 * vers aucun article. Elle passait donc son autorite aux pages de service et
 * aux pages locales, jamais au corpus, alors que ce sont les articles qui
 * captent les recherches formulees en question.
 *
 * Cote visiteur, c'est aussi la sortie la moins engageante de la page : celui
 * qui n'est pas pret a reserver un appel repart avec une reponse plutot qu'avec
 * rien.
 *
 * Choix editorial, pas les plus recents : les questions que les gens posent
 * avant de decider quoi que ce soit.
 */
const FEATURED = [
  'combien-coute-un-site-web',
  'etre-premier-google-dans-sa-ville',
  'prix-gestion-reseaux-sociaux',
  'mon-site-ne-genere-aucun-contact',
  'creer-fiche-google-business',
  'erreurs-visibilite-tpe-locale',
];

const HomeArticles = () => {
  const { language } = useLanguage();
  if (language !== 'fr') return null;

  const posts = FEATURED.map((slug) => {
    const post = getPostBySlug(slug);
    return post ? { slug, title: post.titleFr, excerpt: post.excerptFr } : null;
  }).filter((p): p is { slug: string; title: string; excerpt: string } => p !== null);

  if (posts.length === 0) return null;

  return (
    <section className="py-14 sm:py-20 border-t border-border/60" aria-labelledby="home-articles">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="home-articles"
            className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-foreground"
          >
            Ce qu&rsquo;on me demande le plus souvent
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            J&rsquo;écris les réponses en entier, prix et délais compris. Vous pouvez tout appliquer
            sans jamais me contacter, et beaucoup de gens le font.
          </p>
        </motion.div>

        <ul className="mt-8 border-y border-border/60 divide-y divide-border/60">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="group block py-5">
                <span className="block font-medium text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 min-h-[24px] text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Les {blogPosts.length} articles du blog
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomeArticles;
