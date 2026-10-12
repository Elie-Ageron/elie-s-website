import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { rouvrirBandeau } from '@/lib/consentement';
import logo from '@/assets/logo.webp';
import { cities } from '@/data/cities';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: language === 'fr' ? 'Services' : 'Services', href: '/services' },
    { label: language === 'fr' ? 'Réseaux sociaux' : 'Social media', href: '/reseaux-sociaux' },
    { label: language === 'fr' ? 'Audit gratuit' : 'Free audit', href: '/audit-gratuit' },
    { label: t('nav.portfolio'), href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: language === 'fr' ? 'Guides' : 'Guides', href: '/guides' },
    { label: language === 'fr' ? 'À propos' : 'About', href: '/a-propos' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  /**
   * Les six bassins que le pied de page nomme, et seulement eux.
   *
   * 🔴 **Elie, le 17 septembre 2026 :** *« le footer est méga long. simplifie.
   * pas besoin de mettre chaque page local. »* Il y avait ici quarante huit
   * liens, dont trois murs d'étiquettes empilés : quinze villes, cinq
   * prestations, dix pages réseaux.
   *
   * Ce qui est parti, et pourquoi rien n'est orphelin :
   * - Les cinq pages de prestation. `/services` les lie déjà une par une,
   *   depuis la section de chaque service. Le pied de page les répétait.
   * - Les neuf autres villes. Chaque page locale propose ses trois voisines
   *   (`getRelatedCities`), donc les six d'ici ouvrent sur les quinze.
   * - Les pages réseaux locales. Elles sont nommées dans une phrase de
   *   `/reseaux-sociaux`, qui est leur page pilier et leur vraie place.
   *
   * ⚠️ Avant de retirer une de ces six, vérifier avec
   * `node scripts/check-maillage-pages.mjs` que les villes restent toutes
   * atteignables. C'est le seul point d'entrée du site rendu vers cette
   * famille de pages.
   *
   * ⚠️ Le libelle est ecrit ici, pas lu dans les donnees de la ville. Le champ
   * `breadcrumb` porte le libelle de recherche, « Creation Site Web
   * Albertville », qui donne « Base a Creation Site Web Albertville » une fois
   * pose dans une phrase. Et `name` ne va pas non plus : la page departement
   * `web-designer-savoie` a pour `name` **Albertville**, parce que c'est son
   * adresse postale.
   */
  const bassins: [string, string][] = [
    ['creation-site-web-albertville', 'Albertville'],
    ['creation-site-web-chambery', 'Chambéry'],
    ['web-designer-annecy', 'Annecy'],
    ['creation-site-web-aix-les-bains', 'Aix-les-Bains'],
    ['web-designer-savoie', 'Savoie'],
    ['creation-site-web-haute-savoie', 'Haute-Savoie'],
  ].filter(([slug]) => cities.some((c) => c.slug === slug)) as [string, string][];

  /** Un nom de zone, dans la phrase, qui est aussi le lien vers sa page. */
  const zone = (i: number) => {
    const entree = bassins[i];
    if (!entree) return null;
    return (
      <Link
        to={`/${entree[0]}`}
        className="whitespace-nowrap text-foreground underline underline-offset-4 hover:text-primary"
      >
        {entree[1]}
      </Link>
    );
  };

  /**
   * 🔴 **Le pied de page a ete resserre une seconde fois le 11 octobre 2026.**
   * Elie, en descendant l'accueil : *« en dessous, tu as un gros pied de page.
   * Ca fait trop d'elements a la fin. On ne sait pas quoi faire, on ne sait
   * pas ou aller. »*
   *
   * Il empilait cinq etages : trois colonnes (marque, huit liens en pile,
   * quatre lignes de contact), la rangee des quatre guides, la phrase des
   * zones, puis la barre legale. Il en garde trois :
   *
   *   1. la marque a gauche, la navigation a droite, sur une ligne ;
   *   2. la phrase des zones, et le contact sur une seule ligne ;
   *   3. la barre legale.
   *
   * Ce qui est parti : la rangee des guides (l'entree « Guides » de la
   * navigation mene a l'index, qui les lie tous les quatre) et l'icone devant
   * chaque ligne de contact. Le NAP reste entier : email, telephone, commune.
   *
   * ⚠️ Sur telephone, la navigation passe en deux colonnes avec des cibles de
   * 44 px : une pile de huit liens de 24 px faisait la moitie de la hauteur du
   * pied de page, et un pouce rate une cible de 24 px.
   */
  return (
    <div className="relative z-10" role="contentinfo" aria-label="Site footer">
      <footer className="bg-secondary/40 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-24 sm:pb-8 sm:pt-14">
          {/* Le bandeau « Recevoir mon audit gratuit » a ete retire d'ici le
              13 septembre 2026 : la section de fin de page porte le formulaire
              lui-meme, juste au-dessus. */}

          <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-sm">
              <Link to="/" className="inline-flex items-center gap-3 group" aria-label="Elie Ageron - Home">
                <img src={logo} alt="" width={32} height={32} className="w-8 h-8 rounded-lg" aria-hidden="true" />
                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Elie Ageron
                </span>
              </Link>
              {/* 🔴 Finissait par « Toute votre presence en ligne, geree par une
                  seule personne. » Elie avait fait retirer exactement cette
                  formule du titre de `/services` : *« ca fait un peu chelou, je
                  ferais pas confiance »*. Elle nomme une limite au lieu d'un
                  service. « Fait avec passion ❤️ » a saute avec elle. */}
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {language === 'fr'
                  ? 'Site internet, vidéos et publications pour vos réseaux sociaux, fiche Google, identité de marque.'
                  : 'Website, videos and posts for your social media, Google profile, brand identity.'}
              </p>
            </div>

            <nav aria-label="Footer navigation" className="lg:pt-1">
              <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="inline-flex items-center min-h-[44px] sm:min-h-[28px] text-base text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-8 pt-7 border-t border-border/40 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            {/* Zones d'intervention : une phrase, pas trois murs d'etiquettes.
                Les noms de communes portent les liens. Voir la note sur
                `bassins` en haut du composant. */}
            <nav aria-label={language === 'fr' ? "Zones d'intervention" : 'Service areas'}>
              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                {language === 'fr' ? (
                  <>
                    Basé à {zone(0)}, j&rsquo;interviens à {zone(1)}, {zone(2)} et {zone(3)}, et plus
                    largement en {zone(4)} et en {zone(5)}. À distance, partout en France.
                  </>
                ) : (
                  <>
                    Based in {zone(0)}, I work in {zone(1)}, {zone(2)} and {zone(3)}, and across{' '}
                    {zone(4)} and {zone(5)}. Remotely, anywhere in France.
                  </>
                )}
              </p>
            </nav>

            {/* Le contact, sur une ligne. La commune reste ecrite en clair
                dans la barre du bas : c'est le NAP que Google rapproche de la
                fiche. */}
            <address className="not-italic flex flex-wrap items-center gap-x-6 gap-y-0 lg:justify-end lg:shrink-0">
              <a
                href="tel:+33695555318"
                className="inline-flex items-center min-h-[40px] sm:min-h-[24px] text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                06 95 55 53 18
              </a>
              <a
                href="mailto:elie@elieageron.com"
                className="inline-flex items-center min-h-[40px] sm:min-h-[24px] text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                elie@elieageron.com
              </a>
              {/* 🔴 La fiche Google Business n'etait liee nulle part sur le
                  site avant le 16 septembre 2026. C'est le premier levier en
                  recherche locale, et le chemin le plus court pour laisser un
                  avis. */}
              <a
                href="https://maps.google.com/?cid=10223724609164966776"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center min-h-[40px] sm:min-h-[24px] text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {language === 'fr' ? 'Ma fiche Google' : 'My Google listing'}
              </a>
            </address>
          </div>

          <div className="mt-7 pt-6 border-t border-border/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-sm sm:text-xs text-muted-foreground">
              <span>© {currentYear} Elie Ageron, Albertville, Savoie. {t('footer.rights')}</span>
              <div className="flex items-center gap-5">
                <Link to="/mentions-legales" className="inline-flex items-center min-h-[44px] sm:min-h-[24px] hover:text-primary transition-colors">
                  {language === 'fr' ? 'Mentions légales' : 'Legal Notice'}
                </Link>
                <Link to="/politique-confidentialite" className="inline-flex items-center min-h-[44px] sm:min-h-[24px] hover:text-primary transition-colors">
                  {language === 'fr' ? 'Confidentialité' : 'Privacy'}
                </Link>
                <button type="button" onClick={rouvrirBandeau} className="inline-flex items-center min-h-[44px] sm:min-h-[24px] hover:text-primary transition-colors">
                  Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
