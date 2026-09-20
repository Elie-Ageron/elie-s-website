import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';

/**
 * Les comptes reellement geres, en bas de `/portfolio`.
 *
 * ⚠️ Elle a vecu une demi-journee sur l'accueil, puis Elie l'a fait descendre
 * ici : « ca ne fait pas assez longtemps que je gere et ca ne fait pas une
 * tres belle vitrine ». Une preuve trop jeune posee en haut de l'accueil
 * affaiblit la page au lieu de la porter. Sur le portfolio elle est a sa
 * place, apres les sites, comme une seconde categorie de realisations.
 *
 * ⚠️ **Ne pas la remonter sur l'accueil** avant que les comptes aient un an et
 * une grille qui tient debout toute seule.
 *
 * Regle : aucun chiffre de performance ici. Ni vues, ni abonnes, ni
 * progression. Elie ne vend pas sur des resultats clients, et un compteur
 * au-dessus d'un nom se lit comme une promesse. Ce qu'on montre, c'est le
 * travail : allez voir les comptes.
 *
 * ⚠️ Chaque ligne ajoutee ici demande l'accord du client concerne. Ce ne sont
 * pas des logos, ce sont des personnes nommees avec leur metier.
 */

type Compte = {
  nom: string;
  initiales: string;
  metierFr: string;
  metierEn: string;
  lieu: string;
  depuisFr: string;
  depuisEn: string;
  /** `labelEn` n'est la que pour les libelles ecrits, jamais pour un nom de reseau. */
  liens: { label: string; labelEn?: string; href: string }[];
};

const COMPTES: Compte[] = [
  {
    nom: 'Nouït',
    initiales: 'N',
    metierFr: 'Médium et praticienne en soins énergétiques',
    metierEn: 'Medium and energy practitioner',
    lieu: 'Albertville',
    depuisFr: 'Instagram, Facebook et YouTube, depuis août 2026',
    depuisEn: 'Instagram, Facebook and YouTube, since August 2026',
    liens: [
      { label: 'Instagram', href: 'https://www.instagram.com/inevolve_intuition' },
      { label: 'Facebook', href: 'https://www.facebook.com/inevolveintuition' },
    ],
  },
  {
    nom: 'Isabelle Ageron-Vicat',
    initiales: 'I',
    metierFr: "Formatrice en rééducation de l'écriture",
    metierEn: 'Handwriting remediation trainer',
    lieu: 'Albertville',
    depuisFr: 'Facebook, Instagram et LinkedIn, depuis août 2026',
    depuisEn: 'Facebook, Instagram and LinkedIn, since August 2026',
    liens: [
      { label: 'Facebook', href: 'https://www.facebook.com/isabelleageronvicat/' },
      { label: 'LinkedIn', href: 'https://fr.linkedin.com/in/isabelle-ageron-vicat-2b57ba78' },
      { label: 'Son site', labelEn: 'Her website', href: 'https://isabelle-ageronvicat.fr' },
    ],
  },
];

const SocialClientsSection = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28" aria-labelledby="comptes-heading">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal direction="up">
          <h2 id="comptes-heading" className="section-title max-w-2xl">
            {fr ? 'Deux comptes que ' : 'Two accounts '}
            <span className="text-primary">{fr ? 'je gère en ce moment.' : 'I run right now.'}</span>
          </h2>
          <p className="section-lede mt-6">
            {fr
              ? "Tout ce qui sort sur ces comptes depuis cet été vient d'une journée de tournage par mois. Elles n'ont ni filmé, ni monté, ni publié. C'est le meilleur aperçu du travail, allez voir."
              : 'Everything posted on these accounts since this summer comes from one day of filming a month. They did not film, edit or post any of it. Go and look, it is the best preview of the work.'}
          </p>
        </ScrollReveal>

        {/* ⚠️ Le ScrollReveal va DANS le <li>, jamais entre le <ul> et lui :
            un div intercale casse la liste pour un lecteur d'ecran, qui
            n'annonce plus ni le nombre d'elements ni leur rang. Regles axe
            `list` et `listitem`, gravite serious. */}
        <ul className="mt-12 sm:mt-14">
          {COMPTES.map((c, i) => (
            <li
              key={c.nom}
              className={`py-7 sm:py-8 ${i === 0 ? 'border-t border-border' : 'border-y border-border'}`}
            >
              <ScrollReveal direction="up" delay={i * 0.06}>
                <div className="flex items-start gap-5 sm:items-center sm:gap-7">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xl font-bold text-primary-foreground sm:h-16 sm:w-16 sm:text-2xl"
                    aria-hidden="true"
                  >
                    {c.initiales}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{c.nom}</h3>
                    <p className="mt-1 text-muted-foreground">
                      {fr ? c.metierFr : c.metierEn}
                      {', '}
                      {c.lieu}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{fr ? c.depuisFr : c.depuisEn}</p>

                    <p className="mt-3.5 flex flex-wrap gap-x-6 gap-y-2">
                      {c.liens.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[24px] items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                        >
                          {fr ? l.label : l.labelEn ?? l.label}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialClientsSection;
