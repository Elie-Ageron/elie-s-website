import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Calendar, Share2, RefreshCw } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import AuthorCard from '@/components/AuthorCard';
import {
  getPostBySlug,
  getLocalizedPost,
  getRelatedPosts,
  getCategory,
  getCategorySlug,
  getPostImage,
} from '@/data/blogPosts';
import { getGuideByPath } from '@/data/guides';
import { useMemo } from 'react';

const baseUrl = 'https://elieageron.com';

// Rendu markdown minimal : titres, listes, separateurs, gras et liens internes.
const renderContent = (content: string) => {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let key = 0;
  let listItems: JSX.Element[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc pl-5 my-5 space-y-2">
          {[...listItems]}
        </ul>
      );
      listItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={key++} className="text-2xl md:text-3xl font-medium text-foreground mt-12 mb-4 leading-tight text-balance">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={key++} className="text-xl md:text-2xl font-semibold text-foreground mt-9 mb-3 leading-snug">
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.trim() === '---') {
      flushList();
      elements.push(<hr key={key++} className="my-10 border-border/60" />);
    } else if (line.startsWith('- ')) {
      listItems.push(
        <li key={key++} className="text-muted-foreground leading-relaxed">
          {renderInlineFormatting(line.replace('- ', ''))}
        </li>
      );
    } else if (line.trim() === '') {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={key++} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
          {renderInlineFormatting(line)}
        </p>
      );
    }
  }

  flushList();
  return elements;
};

// Gras et liens internes en ligne.
const renderInlineFormatting = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const linkParts = part.split(linkRegex);

    if (linkParts.length > 1) {
      const result: (string | JSX.Element)[] = [];
      for (let j = 0; j < linkParts.length; j += 3) {
        if (linkParts[j]) result.push(linkParts[j]);
        if (linkParts[j + 1] && linkParts[j + 2]) {
          result.push(
            <Link
              key={`${i}-${j}`}
              to={linkParts[j + 2]}
              className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              {linkParts[j + 1]}
            </Link>
          );
        }
      }
      return <span key={i}>{result}</span>;
    }

    return part;
  });
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const { openCalendly } = useCalendly();

  const rawPost = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug]);
  const post = useMemo(
    () => (rawPost ? getLocalizedPost(rawPost, language) : null),
    [rawPost, language]
  );

  const relatedPosts = useMemo(
    () => (rawPost ? getRelatedPosts(rawPost, language, 3).map((p) => getLocalizedPost(p, language)) : []),
    [rawPost, language]
  );

  if (!rawPost || !post) {
    return <Navigate to="/blog" replace />;
  }

  // Les articles francais seuls restent annonces en fr, quelle que soit l'interface.
  const contentLang = post.contentLanguage;
  const fr = contentLang === 'fr';
  const canonical = `${baseUrl}/blog/${rawPost.slug}`;
  const categorySlug = getCategorySlug(rawPost);
  const category = getCategory(categorySlug);
  const categoryLabel = fr ? category.fr : category.en;
  const pillar = getGuideByPath(rawPost.pillar);
  const faq = fr ? rawPost.faqFr ?? [] : [];
  const wordCount = post.content.split(/\s+/).filter(Boolean).length;

  /**
   * Appel a l'action de fin d'article, contextualise par categorie.
   *
   * Avant, les 139 articles se terminaient sur le meme bouton Calendly, sans
   * lien reel : rien pour les crawleurs, et une seule sortie possible, la plus
   * engageante de toutes. Quelqu'un qui vient de lire un article technique
   * n'est pas pret a reserver trente minutes, mais il clique volontiers vers
   * la page qui traite son sujet.
   */
  const cta = useMemo(() => {
    const social = {
      title: 'Vous n’avez pas le temps de tenir ce rythme ?',
      body: 'Je viens filmer une journée par mois chez vous, et vos publications sortent ensuite sans que vous ayez à y penser. À partir de 890 euros par mois.',
      to: '/reseaux-sociaux',
      label: 'Voir comment ça se passe',
    };
    const site = {
      title: 'Vous voulez que quelqu’un s’en occupe ?',
      body: 'Je crée des sites qui répondent aux questions de vos clients et qui amènent des demandes, en Savoie et en Haute-Savoie. Chiffré sur devis, après un appel.',
      to: '/services',
      label: 'Voir ce que je fais',
    };
    const map: Record<string, typeof site> = {
      'reseaux-sociaux': social,
      video: social,
      'seo-local': {
        title: 'Vous voulez sortir sur Google dans votre commune ?',
        body: 'Fiche Google, avis, pages locales et contenu : c’est le travail que je fais pour mes clients de Savoie et de Haute-Savoie, dans la durée.',
        to: '/services',
        label: 'Voir ce que je fais',
      },
      'site-web': site,
      conversion: site,
      strategie: site,
    };
    return map[categorySlug] ?? site;
  }, [categorySlug]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(fr ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url: window.location.href });
      } catch {
        // L'utilisateur a annule le partage.
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonical}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: rawPost.date,
    dateModified: rawPost.lastModified || rawPost.date,
    author: { '@type': 'Person', '@id': `${baseUrl}/#person`, name: 'Elie Ageron', url: `${baseUrl}/a-propos` },
    publisher: { '@id': `${baseUrl}/#organization` },
    image: getPostImage(rawPost),
    url: canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    inLanguage: fr ? 'fr-FR' : 'en-US',
    articleSection: categoryLabel,
    keywords: (rawPost.tags ?? []).join(', ') || undefined,
    wordCount,
    // Rattache l'article a son guide pilier quand il en a un, au site sinon.
    isPartOf: pillar
      ? { '@id': `${baseUrl}/guides/${pillar.slug}#article` }
      : { '@id': `${baseUrl}/#website` },
    // Passages lisibles a voix haute, utiles aux assistants vocaux et aux moteurs IA.
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#post-title', '#post-excerpt'],
    },
  };

  const faqSchema =
    faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }
      : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: fr ? 'Accueil' : 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: categoryLabel,
        item: `${baseUrl}/blog/categorie/${categorySlug}`,
      },
      { '@type': 'ListItem', position: 4, name: post.title, item: canonical },
    ],
  };

  const schemas = faqSchema
    ? [blogPostingSchema, faqSchema, breadcrumbSchema]
    : [blogPostingSchema, breadcrumbSchema];

  return (
    <>
      <SEO
        page="blog"
        forceLang={contentLang}
        customTitle={post.seoTitle}
        customDescription={post.seoDesc}
        customCanonical={canonical}
        ogImage={getPostImage(rawPost)}
        ogType="article"
        articlePublishedTime={rawPost.date}
        articleModifiedTime={rawPost.lastModified || rawPost.date}
        articleSection={categoryLabel}
        structuredData={schemas}
      />

      {/* En-tete */}
      <header className="py-8 sm:py-12 relative grain">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Fil d'ariane visible, aligne sur le schema BreadcrumbList */}
            <nav aria-label={fr ? "Fil d'ariane" : 'Breadcrumb'} className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/blog" className="inline-flex items-center gap-1.5 min-h-[24px] hover:text-primary underline-offset-4 hover:underline">
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    to={`/blog/categorie/${categorySlug}`}
                    className="min-h-[24px] inline-flex items-center text-primary hover:underline underline-offset-4"
                  >
                    {categoryLabel}
                  </Link>
                </li>
              </ol>
            </nav>

            <h1
              id="post-title"
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground leading-[1.12] text-balance"
            >
              {post.title}
            </h1>

            <p id="post-excerpt" className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime={rawPost.date}>{formatDate(rawPost.date)}</time>
              </span>
              {rawPost.lastModified && rawPost.lastModified !== rawPost.date && (
                <span className="inline-flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4" aria-hidden="true" />
                  {fr ? 'Mis à jour le ' : 'Updated '}
                  <time dateTime={rawPost.lastModified}>{formatDate(rawPost.lastModified)}</time>
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {post.readTime}
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-3 -mx-3 hover:text-primary transition-colors sm:ml-auto"
                aria-label={fr ? 'Partager cet article' : 'Share this article'}
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
                {fr ? 'Partager' : 'Share'}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Renvoi vers le guide pilier, en tete d'article */}
      {pillar && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to={`/guides/${pillar.slug}`}
            className="group flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/40 p-4 hover:border-primary/40 transition-colors"
          >
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wide text-primary">
                {fr ? 'Extrait du guide' : 'Part of the guide'}
              </span>
              <span className="mt-1 block font-medium group-hover:text-primary transition-colors">
                {pillar.title}
              </span>
            </span>
            <ArrowUpRight
              className="w-4 h-4 shrink-0 mt-1 ml-auto text-primary/50 group-hover:text-primary transition-colors"
              aria-hidden="true"
            />
          </Link>
        </div>
      )}

      {/* Corps de l'article */}
      <article className="py-8 sm:py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {renderContent(post.content)}
          </motion.div>
        </div>
      </article>

      {/* FAQ, alignee sur le schema FAQPage */}
      {faq.length > 0 && (
        <section className="py-10 sm:py-14 border-t border-border/60" aria-labelledby="post-faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id="post-faq" className="text-2xl sm:text-3xl font-medium leading-tight mb-7">
              Questions fréquentes
            </h2>
            <dl className="divide-y divide-border/60 border-y border-border/60">
              {faq.map((item) => (
                <div key={item.q} className="py-6">
                  <dt className="text-base sm:text-lg font-semibold text-foreground">{item.q}</dt>
                  <dd className="mt-2 text-base text-muted-foreground leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Appel a l'action */}
      <section className="pb-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 sm:p-8 text-center"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground leading-snug">
              {fr ? cta.title : 'Want to talk it through?'}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              {fr
                ? cta.body
                : 'Thirty minutes, free, no strings. I will tell you honestly what I would do in your place, including when the answer is to do nothing.'}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto min-h-[52px] active:scale-[0.98] transition-transform"
                onClick={openCalendly}
              >
                {fr ? 'Réserver un appel gratuit' : 'Book a free call'}
              </Button>
              {fr && (
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-h-[52px]">
                  <Link to={cta.to}>{cta.label}</Link>
                </Button>
              )}
            </div>
            {fr && (
              <p className="mt-5 text-sm text-muted-foreground">
                Trente minutes, gratuit, sans engagement. Vous préférez écrire ?{' '}
                <Link to="/contact" className="font-medium text-primary hover:underline underline-offset-4">
                  Envoyez-moi un message
                </Link>
                , ou appelez le{' '}
                <a
                  href="tel:+33695555318"
                  className="font-medium text-primary hover:underline underline-offset-4"
                >
                  06 95 55 53 18
                </a>
                .
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <AuthorCard />

      {/* Lectures suivantes */}
      {relatedPosts.length > 0 && (
        <section className="py-10 sm:py-14 border-t border-border/60" aria-labelledby="related-posts">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id="related-posts" className="text-lg sm:text-xl font-semibold text-foreground mb-5">
              {fr ? 'À lire ensuite' : 'Read next'}
            </h2>
            <ul className="border-y border-border/60 divide-y divide-border/60">
              {relatedPosts.map((related) => (
                <li key={related.id}>
                  <Link
                    to={`/blog/${related.slug}`}
                    className="group grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 py-5 transition-colors"
                  >
                    <span className="sm:col-span-3 text-sm text-primary font-medium">{related.categoryLabel}</span>
                    <span className="sm:col-span-9 min-w-0">
                      <span className="block font-medium group-hover:text-primary transition-colors">
                        {related.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground line-clamp-2">
                        {related.excerpt}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link
                to={`/blog/categorie/${categorySlug}`}
                className="inline-flex items-center gap-1.5 min-h-[24px] text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                {fr ? `Tous les articles ${categoryLabel.toLowerCase()}` : `All ${categoryLabel.toLowerCase()} articles`}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </section>
      )}

      <ContactMethodsSection />
    </>
  );
};

export default BlogPost;
