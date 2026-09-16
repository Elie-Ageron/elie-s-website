import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.webp';
import { cities } from '@/data/cities';
import { socialCities } from '@/data/social-cities';
import { guides } from '@/data/guides';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: language === 'fr' ? 'Services' : 'Services', href: '/services' },
    { label: language === 'fr' ? 'Réseaux sociaux' : 'Social media', href: '/reseaux-sociaux' },
    { label: language === 'fr' ? 'Audit gratuit' : 'Free audit', href: '/audit-gratuit' },
    { label: language === 'fr' ? 'Pourquoi un site ?' : 'Why a website?', href: '/why-a-website' },
    { label: language === 'fr' ? 'Notre processus' : 'Our process', href: '/our-process' },
    { label: t('nav.portfolio'), href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: language === 'fr' ? 'Guides' : 'Guides', href: '/guides' },
    { label: language === 'fr' ? 'À propos' : 'About', href: '/a-propos' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <div className="relative z-10" role="contentinfo" aria-label="Site footer">
      <footer className="bg-secondary/40 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            {/* Le bandeau « Recevoir mon audit gratuit » a ete retire d'ici.
                Il arrivait juste sous la section de fin de page, qui porte
                maintenant le formulaire d'audit lui-meme : le visiteur voyait
                deux fois la meme proposition a trois cents pixels d'intervalle.
                Le lien « Audit gratuit » reste dans la colonne de navigation,
                et le bouton reste dans l'en-tete sur toutes les pages. */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
          >
            {/* Brand Column */}
            <div className="space-y-4">
              <Link to="/" className="inline-flex items-center gap-3 group" aria-label="Elie Ageron - Home">
                <img src={logo} alt="" className="w-8 h-8 rounded-lg" aria-hidden="true" />
                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Elie Ageron
                </span>
              </Link>
              {/* 🔴 Finissait par « Toute votre presence en ligne, geree par une
                  seule personne. » Elie avait fait retirer exactement cette
                  formule du titre de `/services` : *« ca fait un peu chelou, je
                  ferais pas confiance »*. Elle se voulait rassurante et elle
                  inquietait, parce qu'elle nomme une limite au lieu d'un
                  service. Elle avait survecu ici, donc sur les quatorze pages.

                  🔴 Et « Fait avec passion ❤️ » a saute avec elle : un coeur
                  rouge et un mot que tout le monde ecrit ne disent rien sur ce
                  qu'on achete, et ils sont a deux lignes du numero de
                  telephone, qui lui est verifiable. */}
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {language === 'fr'
                  ? "Votre partenaire web de A à Z : site internet, vidéos et publications pour vos réseaux sociaux, fiche Google, identité de marque. Basé à Albertville, en Savoie."
                  : 'Your all-in-one web partner: website, videos and posts for your social media, Google profile, brand identity. Based in Albertville, Savoie.'}
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {language === 'fr' ? 'Navigation' : 'Navigation'}
              </h3>
              <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="inline-flex items-center min-h-[24px] text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Contact
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:elie@elieageron.com"
                  className="inline-flex items-center gap-2.5 min-h-[24px] text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  elie@elieageron.com
                </a>
                <a
                  href="tel:+33695555318"
                  className="inline-flex items-center gap-2.5 min-h-[24px] text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  +33 6 95 55 53 18
                </a>
                <div className="inline-flex items-center gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <address style={{ fontStyle: 'normal' }}>
                    Albertville, Savoie, France
                  </address>
                </div>
                {/* 🔴 La fiche Google Business n'etait liee nulle part sur le
                    site, et declaree dans aucun schema. C'est le premier
                    levier en recherche locale, et c'est aussi le seul chemin
                    pour qu'un client satisfait laisse un avis sans qu'on ait
                    a lui envoyer un lien a la main. Ajoutee le 16 septembre
                    2026. */}
                <a
                  href="https://maps.google.com/?cid=10223724609164966776"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 min-h-[24px] text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Star className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {language === 'fr' ? 'Ma fiche Google' : 'My Google listing'}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Guides piliers : distribue l'autorite du pied de page vers les hubs de contenu */}
          {language === 'fr' && (
            <nav aria-label="Guides" className="mt-10 pt-8 border-t border-border/30">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Guides gratuits
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    to={`/guides/${guide.slug}`}
                    className="inline-flex items-center min-h-[24px] text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                  >
                    {guide.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}

          {/* Zones d'intervention : liens internes vers toutes les pages locales, pour le crawl */}
          <nav
            aria-label={language === 'fr' ? "Zones d'intervention" : 'Service areas'}
            className="mt-8 pt-8 border-t border-border/30"
          >
            {/* 🔴 Ce titre etait en capitales avec un interlettrage elargi, le
                patron que le reste du site a supprime partout ailleurs. Il
                avait survecu ici parce que personne ne regarde le pied de
                page. */}
            <h3 className="text-sm font-semibold text-foreground mb-2">
              {language === 'fr' ? "Zones d'intervention" : 'Service areas'}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {language === 'fr'
                ? 'Basé à Albertville, je me déplace dans toute la Savoie et le bassin annécien, et je travaille à distance partout en France.'
                : 'Based in Albertville, I travel across Savoie and the Annecy area, and work remotely all across France.'}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/${city.slug}`}
                  className="inline-flex items-center min-h-[24px] text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {city[language].breadcrumb}
                </Link>
              ))}
            </div>

            {/* Les pages locales du pilier n°2. Sans ce bloc, elles n'etaient
                liees depuis aucune page du site rendu : uniquement depuis le
                sitemap et le squelette de pre-rendu. Voir l'en-tete de
                `src/data/social-cities.ts`. */}
            <h3 className="mt-6 text-sm font-semibold text-foreground mb-3">
              {language === 'fr' ? 'Gestion de réseaux sociaux' : 'Social media management'}
            </h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {socialCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/${city.slug}`}
                  className="inline-flex items-center min-h-[24px] text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-border/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>© {currentYear} Elie Ageron. {t('footer.rights')}</span>
              <div className="flex items-center gap-4">
                <Link to="/mentions-legales" className="inline-flex items-center min-h-[24px] hover:text-primary transition-colors">
                  {language === 'fr' ? 'Mentions légales' : 'Legal Notice'}
                </Link>
                <Link to="/politique-confidentialite" className="inline-flex items-center min-h-[24px] hover:text-primary transition-colors">
                  {language === 'fr' ? 'Confidentialité' : 'Privacy'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
