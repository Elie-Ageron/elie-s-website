import type { BlogPost } from './blog/types';
import { blogIndex, getIndexEntry, type BlogIndexEntry } from './blogIndex';

/**
 * Charge le texte d'UN article, et seulement le fichier qui le porte.
 *
 * 🔴 **Le probleme que ce module resout.** Les 139 articles vivent dans 25
 * fichiers, mais `blogPosts.ts` les importe tous pour construire le corpus
 * agrege. N'importe quelle page qui touchait a ce module emportait donc le
 * texte integral des 139 articles, soit 1,1 Mo compile.
 *
 * Mesure du 16 septembre 2026, en production, sur un telephone en 4G lente :
 * `/blog/prix-gestion-reseaux-sociaux` telechargeait 594 ko de JavaScript,
 * affichait son premier texte a 7,2 s et bloquait le fil principal 1,9 s. Pour
 * lire un article de sept minutes.
 *
 * Ici, `blogIndex` dit dans quel fichier vit l'article demande, et on n'importe
 * que celui-la. Le plus gros fait dix-sept articles, la plupart en font cinq.
 *
 * ⚠️ **Ne jamais importer `blogPosts` depuis une page.** Ce module et
 * `blogIndex` couvrent tous les besoins : l'un le texte d'un article, l'autre
 * tout le reste. `blogPosts` ne sert plus qu'aux scripts et aux contrôles.
 */

/* Vite analyse ce motif au build et fabrique un lot par fichier. Il doit rester
   litteral : une variable ici et le decoupage ne se fait plus. */
const modules = import.meta.glob<Record<string, unknown>>('./blog/posts-*.ts');

/** Le premier export du fichier qui est un tableau d'articles. */
const extraire = (mod: Record<string, unknown>, slug: string): BlogPost | undefined => {
  for (const valeur of Object.values(mod)) {
    if (!Array.isArray(valeur)) continue;
    const trouve = (valeur as BlogPost[]).find((p) => p && p.slug === slug);
    if (trouve) return trouve;
  }
  return undefined;
};

export const loadPost = async (slug: string): Promise<BlogPost | undefined> => {
  const entree = getIndexEntry(slug);
  if (!entree) return undefined;
  const charger = modules[`./${entree.module}.ts`];
  if (!charger) {
    // L'index a ete genere pour un fichier qui n'existe plus. Mieux vaut le
    // dire dans la console que rendre une page blanche sans explication.
    console.error(`blogContent : module introuvable pour ${slug} (${entree.module})`);
    return undefined;
  }
  return extraire(await charger(), slug);
};

/**
 * Lectures suivantes, calculees sur l'index et non sur le corpus.
 *
 * Meme regle qu'avant : on respecte d'abord la liste `related` ecrite a la
 * main, puis on complete par proximite, meme categorie puis etiquettes
 * partagees. La difference est qu'aucun texte d'article n'est charge pour ca.
 */
export const getRelatedFromIndex = (
  entree: BlogIndexEntry,
  related: string[] | undefined,
  language: 'fr' | 'en',
  limite = 3
): BlogIndexEntry[] => {
  const pool = blogIndex.filter((e) => e.slug !== entree.slug && (language === 'fr' || !e.frOnly));
  const choisis: BlogIndexEntry[] = [];
  const pousser = (candidat?: BlogIndexEntry) => {
    if (candidat && choisis.length < limite && !choisis.some((c) => c.slug === candidat.slug)) {
      choisis.push(candidat);
    }
  };

  (related ?? []).forEach((slug) => pousser(pool.find((p) => p.slug === slug)));
  pool.filter((p) => p.category === entree.category).forEach(pousser);

  const etiquettes = new Set(entree.tags);
  if (etiquettes.size > 0) {
    pool.filter((p) => p.tags.some((t) => etiquettes.has(t))).forEach(pousser);
  }
  pool.forEach(pousser);

  return choisis;
};
