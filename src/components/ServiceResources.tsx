import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogCount, getIndexEntry } from '@/data/blogIndex';
import { getGuideBySlug } from '@/data/guides';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Bloc de ressources place sur les pages de service.
 *
 * Pourquoi : les 139 articles pointaient vers /services et /reseaux-sociaux,
 * mais ces pages ne renvoyaient vers aucun article. Le maillage ne circulait
 * que dans un sens, ce qui prive les pages commerciales du signal thematique
 * de tout le corpus, et prive le visiteur pas encore pret d'une etape suivante.
 *
 * Les titres sont lus depuis les donnees, donc ils ne peuvent pas devier.
 */

type Selection = {
  intro: string;
  guide: string;
  posts: string[];
};

const selections: Record<'services' | 'social', Selection> = {
  services: {
    intro:
      "Avant de me contacter, vous voulez peut-être savoir comment je raisonne. J'écris tout, sans rien garder pour moi : les prix, les délais, ce qui marche et ce qui ne sert à rien.",
    guide: 'creer-site-web-tpe',
    posts: [
      'combien-coute-un-site-web',
      'combien-de-temps-creer-site-web',
      'agence-web-freelance-ou-plateforme',
      'faire-son-site-soi-meme-ou-pro',
      'nom-de-domaine-hebergement-comprendre',
      'mon-site-ne-genere-aucun-contact',
      'etre-premier-google-dans-sa-ville',
      'travailler-avec-un-partenaire-web',
    ],
  },
  social: {
    intro:
      "Tout ce que je fais pour mes clients est expliqué en détail sur le blog. Les prix du marché, le rythme tenable, ce que l'algorithme récompense, et ce qui ne sert à rien.",
    guide: 'reseaux-sociaux-entreprise-locale',
    posts: [
      'prix-gestion-reseaux-sociaux',
      'deleguer-reseaux-sociaux',
      'combien-de-temps-resultats-reseaux-sociaux',
      'quel-reseau-social-choisir-entreprise-locale',
      'tourner-plusieurs-videos-une-journee',
      'transformer-vues-en-clients',
      'abonnes-ou-clients',
      'temps-par-semaine-communication',
    ],
  },
};

interface ServiceResourcesProps {
  variant: 'services' | 'social';
}

const ServiceResources = ({ variant }: ServiceResourcesProps) => {
  const { language } = useLanguage();
  if (language !== 'fr') return null;

  const selection = selections[variant];
  const guide = getGuideBySlug(selection.guide);
  const posts = selection.posts
    .map((slug) => {
      const post = getIndexEntry(slug);
      return post ? { slug, title: post.title, excerpt: post.excerpt } : null;
    })
    .filter((p): p is { slug: string; title: string; excerpt: string } => p !== null);

  if (posts.length === 0) return null;

  return (
    <section className="py-12 sm:py-20 border-t border-border/60" aria-labelledby="service-resources">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="service-resources"
            className="text-2xl sm:text-3xl font-medium leading-tight text-foreground"
          >
            Ce que je pense du sujet, en détail
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">{selection.intro}</p>
        </motion.div>

        {guide && (
          <Link
            to={`/guides/${guide.slug}`}
            className="group mt-7 flex items-start gap-3 rounded-xl border border-border/70 p-5 transition-colors hover:border-primary/50"
          >
            <span className="min-w-0">
              <span className="block text-xs font-medium uppercase tracking-wide text-primary">
                {guide.kicker}
              </span>
              <span className="mt-1 block font-medium text-foreground group-hover:text-primary transition-colors">
                {guide.title}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">{guide.readTime} de lecture</span>
            </span>
            <ArrowUpRight
              className="ml-auto mt-1 h-4 w-4 shrink-0 text-primary/50 transition-colors group-hover:text-primary"
              aria-hidden="true"
            />
          </Link>
        )}

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
            Les {blogCount} articles du blog
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ServiceResources;
