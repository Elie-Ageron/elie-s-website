import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

/**
 * Page d'essai, locale uniquement.
 *
 * Elle n'existe qu'en developpement : la route n'est enregistree dans App.tsx
 * que si `import.meta.env.DEV` est vrai. Ce fichier ne part donc jamais dans le
 * lot de production, et il n'est ni dans le sitemap ni dans le pre-rendu.
 *
 * ── Passe 5 ──
 * Elie rouvre la question de la couleur : il craint que la terre lise « bas de
 * gamme », et il veut voir d'autres familles. On elargit donc au lieu de
 * resserrer.
 *
 * Quatorze accents, toutes familles confondues. Chacun a sa propre section
 * courte, montee aux tailles reelles du site : les vignettes reduites ne
 * permettaient pas de juger, une couleur ne se lit pas a 14 pixels de haut.
 *
 * Acquis et non rejoue : fond creme, General Sans, beaucoup d'espace.
 *
 * Tous les accents passent le contraste AA en blanc sur aplat (4,5:1 minimum).
 * L'ocre est a 36 % de luminosite pour cette raison : plus clair, le libelle du
 * bouton passait sous le seuil.
 */

const FOND = 'hsl(30 20% 98%)';
const ENCRE = 'hsl(30 10% 15%)';
const DOUX = 'hsl(30 5% 38%)';
const TRAIT = 'hsl(30 10% 88%)';
const POLICE = "'General Sans', system-ui, sans-serif";

interface Accent {
  cle: string;
  nom: string;
  famille: string;
  note: string;
  valeur: string;
  voile: string;
}

const ACCENTS: Accent[] = [
  /* ── Terres ── */
  {
    cle: 'T1',
    nom: 'Brique',
    famille: 'Terres',
    note: 'Ton favori. Assez saturée pour lire comme un pigment, pas comme de la boue.',
    valeur: 'hsl(14 58% 42%)',
    voile: 'hsl(14 45% 96%)',
  },
  {
    cle: 'T2',
    nom: 'Brique tempérée',
    famille: 'Terres',
    note: 'Le milieu entre la brique et la version sourde, comme tu l’as demandé.',
    valeur: 'hsl(13 49% 41%)',
    voile: 'hsl(13 38% 96%)',
  },
  {
    cle: 'T3',
    nom: 'Rouge anglais',
    famille: 'Terres',
    note: 'Vers le rouge plutôt que vers l’orange. Le moins terreux des trois.',
    valeur: 'hsl(6 48% 38%)',
    voile: 'hsl(6 38% 96%)',
  },
  {
    cle: 'T4',
    nom: 'Ocre',
    famille: 'Terres',
    note: 'Jaune-brun profond. Le plus risqué du lot pour l’effet bas de gamme.',
    valeur: 'hsl(38 65% 36%)',
    voile: 'hsl(38 50% 96%)',
  },

  /* ── Rouges et roses ── */
  {
    cle: 'R1',
    nom: 'Carmin',
    famille: 'Rouges et roses',
    note: 'Un vrai rouge. Aucun risque de lire terreux.',
    valeur: 'hsl(358 64% 44%)',
    voile: 'hsl(358 50% 96%)',
  },
  {
    cle: 'R2',
    nom: 'Bordeaux',
    famille: 'Rouges et roses',
    note: 'Rouge sombre. La couleur du vin et des reliures.',
    valeur: 'hsl(345 52% 30%)',
    voile: 'hsl(345 35% 96%)',
  },
  {
    cle: 'R3',
    nom: 'Rose actuel',
    famille: 'Rouges et roses',
    note: 'Ce que tu as aujourd’hui, pour repère.',
    valeur: 'hsl(340 65% 47%)',
    voile: 'hsl(340 50% 97%)',
  },

  /* ── Froids ── */
  {
    cle: 'B1',
    nom: 'Bleu encre',
    famille: 'Froids',
    note: 'Le bleu profond des marques sérieuses. Trois concurrents à Albertville sont déjà en bleu.',
    valeur: 'hsl(222 60% 35%)',
    voile: 'hsl(222 45% 96%)',
  },
  {
    cle: 'B2',
    nom: 'Bleu pétrole',
    famille: 'Froids',
    note: 'Bleu-vert sombre. Plus rare et plus habillé qu’un bleu franc.',
    valeur: 'hsl(198 70% 28%)',
    voile: 'hsl(198 45% 96%)',
  },
  {
    cle: 'B3',
    nom: 'Bleu vif',
    famille: 'Froids',
    note: 'Le bleu qui claque. Beaucoup plus jeune, beaucoup moins sobre.',
    valeur: 'hsl(226 72% 42%)',
    voile: 'hsl(226 55% 96%)',
  },
  {
    cle: 'V1',
    nom: 'Vert forêt',
    famille: 'Froids',
    note: 'Sombre et calme. Le plus inattendu chez un web designer.',
    valeur: 'hsl(158 44% 24%)',
    voile: 'hsl(158 30% 96%)',
  },
  {
    cle: 'V2',
    nom: 'Olive',
    famille: 'Froids',
    note: 'Vert-kaki. Chaud pour un vert, et rare.',
    valeur: 'hsl(82 32% 28%)',
    voile: 'hsl(82 25% 96%)',
  },

  /* ── Autres ── */
  {
    cle: 'A1',
    nom: 'Prune',
    famille: 'Autres',
    note: 'Violet sombre. Entre le rouge et le bleu, sans être ni l’un ni l’autre.',
    valeur: 'hsl(292 40% 34%)',
    voile: 'hsl(292 30% 96%)',
  },
  {
    cle: 'A2',
    nom: 'Encre seule',
    famille: 'Autres',
    note: 'Aucune couleur d’accent. Le contraste vient de la graisse et du vide. Le réglage le plus sobre qui existe.',
    valeur: 'hsl(30 12% 13%)',
    voile: 'hsl(30 12% 96%)',
  },
];

const FAMILLES = ['Terres', 'Rouges et roses', 'Froids', 'Autres'];

/* ══════════ Une section courte, a la taille reelle du site ══════════ */

const SectionCourte = ({ a }: { a: Accent }) => (
  <section>
    {/* L'etiquette */}
    <div
      style={{
        background: 'hsl(0 0% 12%)',
        color: '#fff',
        padding: '0.9rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.9rem',
        flexWrap: 'wrap',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <strong style={{ fontSize: '1.1rem', lineHeight: 1, minWidth: '1.9rem' }}>{a.cle}</strong>
      <span
        style={{ width: 22, height: 22, borderRadius: 6, background: a.valeur, flexShrink: 0 }}
        aria-hidden="true"
      />
      <strong style={{ fontSize: '0.9375rem' }}>{a.nom}</strong>
      <code style={{ opacity: 0.6, fontSize: '0.75rem' }}>{a.valeur}</code>
      <span style={{ opacity: 0.72, fontSize: '0.8125rem' }}>{a.note}</span>
    </div>

    {/* Le morceau de site, aux vraies tailles */}
    <div style={{ background: FOND, color: ENCRE, fontFamily: POLICE, padding: '4.5rem 2rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(2.1rem, 4.4vw, 3.1rem)',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: 1.09,
            margin: 0,
            textWrap: 'balance',
          }}
        >
          Vos r&eacute;seaux tournent tout le mois.
          <br />
          <span style={{ color: a.valeur }}>Sans que vous y pensiez.</span>
        </h2>

        <p
          style={{
            color: DOUX,
            maxWidth: '33rem',
            margin: '1.9rem auto 0',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
          }}
        >
          Je viens filmer une journ&eacute;e par mois chez vous, puis je monte, j&rsquo;&eacute;cris
          et je publie. Albertville, Savoie et Haute-Savoie.
        </p>

        <div
          style={{
            marginTop: '2.25rem',
            display: 'flex',
            gap: '1.75rem',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: a.valeur,
              color: '#fff',
              padding: '0.95rem 1.9rem',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '0.9375rem',
            }}
          >
            Recevoir mon audit gratuit
            <ArrowRight size={16} />
          </span>
          <span style={{ color: DOUX, fontSize: '0.9375rem' }}>R&eacute;server un appel gratuit</span>
        </div>

        {/* Le prix et le bouton contour, sur le voile de l'accent */}
        <div
          style={{
            marginTop: '3.25rem',
            paddingTop: '2.5rem',
            borderTop: `1px solid ${TRAIT}`,
            display: 'flex',
            gap: '1.75rem',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontSize: '1.6rem', fontWeight: 600, letterSpacing: '-0.025em', margin: 0 }}>
            &Agrave; partir de <span style={{ color: a.valeur }}>890 &euro;</span> par mois
          </p>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: `1px solid ${a.valeur}`,
              color: a.valeur,
              padding: '0.8rem 1.5rem',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '0.9rem',
            }}
          >
            Comment &ccedil;a marche
            <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </div>
  </section>
);

/* ══════════ La page ══════════ */

const Labo = () => (
  <>
    <Helmet>
      <title>Labo de style, passe 5 (local)</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <div style={{ background: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ padding: '4rem 2rem 2.5rem', maxWidth: '52rem', margin: '0 auto' }}>
        <p style={{ color: 'hsl(14 58% 42%)', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>
          Page locale, jamais publi&eacute;e
        </p>
        <h1 style={{ fontSize: '2.25rem', margin: '0.5rem 0 0', color: 'hsl(0 0% 10%)' }}>
          Quatorze couleurs, toutes familles
        </h1>
        <p style={{ color: 'hsl(0 0% 40%)', marginTop: '0.75rem', lineHeight: 1.65 }}>
          Une section courte par couleur, aux vraies tailles du site. Fond cr&egrave;me, General
          Sans et m&ecirc;me espacement partout : seule la couleur change. Chacune montre les quatre
          endroits o&ugrave; l&rsquo;accent se voit vraiment, le bout de titre, le bouton plein, le
          bouton contour et le prix.
        </p>
        <p style={{ color: 'hsl(0 0% 40%)', marginTop: '0.75rem', lineHeight: 1.65 }}>
          Sur ta question du marron : le risque est r&eacute;el. Une terre part en bas de gamme
          quand elle est d&eacute;satur&eacute;e vers le gris-brun. Compare T4 (ocre) et T1 : m&ecirc;me
          famille, et l&rsquo;une des deux salit.
        </p>
      </header>

      {FAMILLES.map((famille) => (
        <div key={famille}>
          <h2
            style={{
              fontSize: '1.05rem',
              margin: 0,
              padding: '2.5rem 2rem 1rem',
              maxWidth: '52rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              color: 'hsl(0 0% 10%)',
            }}
          >
            {famille}
          </h2>
          {ACCENTS.filter((a) => a.famille === famille).map((a) => (
            <SectionCourte key={a.cle} a={a} />
          ))}
        </div>
      ))}

      <footer style={{ padding: '4rem 2rem 6rem', maxWidth: '52rem', margin: '0 auto' }}>
        <p style={{ color: 'hsl(0 0% 40%)', lineHeight: 1.65 }}>
          Le code du site est actuellement en T1. Donne-moi un code (T1, B2, A2 et ainsi de suite) et
          je fige tout : les jetons, les 143 couvertures d&rsquo;articles, le logo, le favicon, les
          six ic&ocirc;nes d&rsquo;application et l&rsquo;image de partage.
        </p>
      </footer>
    </div>
  </>
);

export default Labo;
