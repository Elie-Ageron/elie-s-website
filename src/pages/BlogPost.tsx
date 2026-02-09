import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import { getPostBySlug, getLocalizedPost, blogPosts } from '@/data/blogPosts';
import { useMemo } from 'react';

// Simple markdown-like renderer
const renderContent = (content: string) => {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-muted-foreground ml-4 mb-2">
          {renderInlineFormatting(line.replace('- ', ''))}
        </li>
      );
    } else if (line.trim() === '') {
      // Skip empty lines
    } else {
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed mb-4">
          {renderInlineFormatting(line)}
        </p>
      );
    }
  }

  return elements;
};

// Handle inline formatting like **bold** and [links](/path)
const renderInlineFormatting = (text: string) => {
  // Handle bold
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
    }
    
    // Handle links
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
              className="text-primary hover:underline"
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

  const post = useMemo(() => {
    if (!slug) return null;
    const rawPost = getPostBySlug(slug);
    if (!rawPost) return null;
    return getLocalizedPost(rawPost, language);
  }, [slug, language]);

  // Get related posts (excluding current)
  const relatedPosts = useMemo(() => {
    return blogPosts
      .filter(p => p.slug !== slug)
      .slice(0, 2)
      .map(p => getLocalizedPost(p, language));
  }, [slug, language]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const rawPost = slug ? getPostBySlug(slug) : null;

  const blogPostingSchema = rawPost && post ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: rawPost.date,
    dateModified: rawPost.date,
    author: {
      '@type': 'Person',
      name: 'Elie Ageron',
      url: 'https://elieageron.lovable.app/',
    },
    publisher: {
      '@type': 'Person',
      name: 'Elie Ageron',
      url: 'https://elieageron.lovable.app/',
    },
    image: 'https://elieageron.lovable.app/og-image.png',
    url: `https://elieageron.lovable.app/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://elieageron.lovable.app/blog/${slug}`,
    },
    inLanguage: language === 'fr' ? 'fr-FR' : 'en-US',
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
  } : null;

  return (
    <>
      <SEO 
        page="blog"
        customTitle={`${post?.title} | Elie Ageron`}
        customDescription={post?.excerpt}
      />
      {blogPostingSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(blogPostingSchema)}
          </script>
        </Helmet>
      )}
      
      {/* Hero */}
      <section className="py-10 sm:py-12 md:py-16 relative grain" aria-labelledby="post-title">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back button - Touch optimized */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 min-h-[44px] text-muted-foreground hover:text-primary active:text-primary transition-colors mb-6 sm:mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {language === 'fr' ? 'Retour aux articles' : 'Back to articles'}
            </Link>

            {/* Category */}
            <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-3 sm:mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 id="post-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta - Stack on mobile */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-muted-foreground mb-6 sm:mb-8">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" aria-hidden="true" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {post.readTime}
              </span>
              <button 
                onClick={handleShare}
                className="flex items-center gap-1.5 min-h-[44px] px-3 -mx-3 hover:text-primary active:text-primary transition-colors ml-auto"
                aria-label={language === 'fr' ? 'Partager cet article' : 'Share this article'}
              >
                <Share2 className="w-4 h-4" />
                {language === 'fr' ? 'Partager' : 'Share'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="py-6 sm:py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mt-10 sm:mt-12 text-center"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3 leading-snug">
              {language === 'fr' 
                ? 'Prêt à transformer votre présence en ligne ?' 
                : 'Ready to transform your online presence?'}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
              {language === 'fr'
                ? 'Discutons de votre projet et voyons comment je peux vous aider.'
                : 'Let\'s discuss your project and see how I can help.'}
            </p>
            <Button asChild variant="hero" size="lg" className="min-h-[52px] active:scale-[0.98] transition-transform">
              <a href="https://calendly.com/elie-ageron/30min" target="_blank" rel="noopener noreferrer">
                {language === 'fr' ? 'Réserver un appel gratuit' : 'Book a free call'}
              </a>
            </Button>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-10 sm:py-12 md:py-16" aria-labelledby="related-posts">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 id="related-posts" className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
              {language === 'fr' ? 'Articles similaires' : 'Related articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 group hover:neon-border transition-all active:scale-[0.98]"
                >
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-2 sm:mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <ContactMethodsSection />
    </>
  );
};

export default BlogPost;
