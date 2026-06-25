import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import InternalLinks from '@/components/InternalLinks';
import SEO from '@/components/SEO';
import ScrollArrow from '@/components/ScrollArrow';

const Contact = () => {
  const { language } = useLanguage();

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact - Elie Ageron Web Design',
    description: language === 'fr'
      ? 'Contactez Elie Ageron pour votre projet web. Sans appel, sans engagement.'
      : 'Contact Elie Ageron for your web project. No call, no commitment.',
    url: 'https://elieageron.com/contact',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://elieageron.com/contact' },
    ],
  };

  return (
    <>
      <SEO page="contact" structuredData={[contactPageSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section className="relative grain min-h-screen flex items-center justify-center" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10 -mt-36">
          <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">{language === 'fr' ? 'Parlons de' : "Let's talk about"}</span>{' '}
              <span className="inline-block text-primary">{language === 'fr' ? 'votre projet.' : 'your project.'}</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {language === 'fr'
                ? "Vous avez une idée, un projet, une question. Il y a une option pour chaque situation."
                : "You have an idea, a project, a question. There's an option for every situation."}
            </p>
          </motion.header>
          <ScrollArrow />
        </div>
      </section>

      {/* Main options */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-20" aria-labelledby="contact-options-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="contact-options-heading" className="sr-only">
            {language === 'fr' ? 'Options de contact' : 'Contact options'}
          </h2>
          <div className="space-y-4">

            {/* Primary — Get started form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Link
                to="/get-started"
                className="block glass-card neon-border rounded-2xl sm:rounded-3xl p-6 sm:p-10 group hover:scale-[1.01] transition-transform active:scale-[0.99]"
                aria-label={language === 'fr' ? 'Démarrer mon projet sans appel' : 'Start my project, no call needed'}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <div className="p-4 rounded-2xl bg-primary/20 w-fit shrink-0">
                    <FileText className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {language === 'fr' ? 'Recommandé' : 'Recommended'}
                      </span>
                      <span className="text-xs text-muted-foreground/70">
                        {language === 'fr' ? 'Sans appel · 4 étapes · 5 min' : 'No call · 4 steps · 5 min'}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      {language === 'fr' ? 'Démarrer mon projet' : 'Start my project'}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {language === 'fr'
                        ? "Coiffeur, coach, restaurant, artisan, PME : remplissez le formulaire en 4 étapes. Je construis votre site, vous le validez, vous le gardez si ça vous convient."
                        : "Hairdresser, coach, restaurant, craftsman, SMB: fill in the 4-step form. I build your site, you review it, you keep it if you like it."}
                    </p>
                  </div>
                  <ArrowRight
                    className="w-6 h-6 text-primary shrink-0 group-hover:translate-x-1 transition-transform hidden sm:block"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex items-center gap-2 mt-5 text-primary font-semibold text-sm sm:hidden">
                  {language === 'fr' ? 'Remplir le formulaire' : 'Fill in the form'}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            </motion.div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-border/50" />
              <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">
                {language === 'fr' ? 'ou' : 'or'}
              </span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            {/* Secondary — Direct contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <a
                href="https://wa.me/33695555318"
                className="glass-card rounded-2xl p-5 sm:p-6 flex gap-4 items-start hover:border-green-500/40 border border-border/40 transition-colors group active:scale-[0.98]"
                aria-label="Contact via WhatsApp"
              >
                <div className="p-3 rounded-xl bg-green-500/10 shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {language === 'fr'
                      ? 'Réponse rapide, généralement en quelques minutes.'
                      : 'Quick response, usually within minutes.'}
                  </p>
                  <div className="flex items-center gap-1.5 text-green-600 font-medium text-sm group-hover:gap-2.5 transition-all">
                    {language === 'fr' ? 'Écrire maintenant' : 'Write now'}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </a>

              <a
                href="mailto:elie@elieageron.com"
                className="glass-card rounded-2xl p-5 sm:p-6 flex gap-4 items-start hover:border-primary/40 border border-border/40 transition-colors group active:scale-[0.98]"
                aria-label="Contact via email"
              >
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {language === 'fr'
                      ? 'Pour les questions rapides, réponse sous 24h.'
                      : 'For quick questions, response within 24h.'}
                  </p>
                  <div className="flex items-center gap-1.5 text-primary font-medium text-sm group-hover:gap-2.5 transition-all">
                    elie@elieageron.com
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Event producer nudge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-muted-foreground/60 pt-2"
            >
              {language === 'fr' ? "Producteur d'événements ? " : 'Event producer? '}
              <Link to="/event-production#apply" className="text-primary hover:underline underline-offset-4 font-medium">
                {language === 'fr' ? 'Formulaire dédié ici →' : 'Dedicated form here →'}
              </Link>
            </motion.p>

          </div>
        </div>
      </section>

      <InternalLinks currentPage="contact" />
    </>
  );
};

export default Contact;
