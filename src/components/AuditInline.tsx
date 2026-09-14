import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import AuditForm from '@/components/AuditForm';

/**
 * Le formulaire d'audit, une seconde fois, au milieu de l'accueil.
 *
 * 🔴 **Pourquoi il existe.** Le formulaire etait en onzieme position sur onze
 * blocs. Tout ce que le visiteur lisait se tenait entre lui et la seule action
 * voulue. Celui-ci tombe juste apres le prix plancher des reseaux sociaux,
 * c'est a dire au sommet de l'interet : la personne vient de lire ce qu'elle
 * recoit, combien ca coute, et elle se demande si ca vaut le coup pour elle.
 * C'est exactement la question a laquelle l'audit repond.
 *
 * Elie demandait la meme chose autrement : *« il faut qu'on comprenne de
 * maniere tres facile et effortless qu'il y a un form a remplir, que ca prend
 * deux secondes, que c'est gratuit et que ca apporte de la valeur. »*
 *
 * ⚠️ **Aucun lien sortant dans ce bloc.** Pas de « voir aussi », pas de
 * « reserver un appel », pas de numero. Les canaux directs vivent en fin de
 * page, dans `ContactMethodsSection`. Ici il n'y a qu'une chose a faire.
 *
 * La `source` differe de celle de la fin de page, pour savoir lequel des deux
 * emplacements recolte les demandes.
 */
const AuditInline = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  const reperes = fr ? ['Gratuit', 'Deux champs', 'Vidéo sous 48 h'] : ['Free', 'Two fields', 'Video within 48h'];

  return (
    <section className="px-4 pb-4 sm:px-6 sm:pb-10" aria-labelledby="audit-milieu-heading">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal direction="up">
          <div className="soft-shadow grid grid-cols-1 gap-12 rounded-3xl border border-border bg-card p-8 sm:p-14 lg:grid-cols-[1fr_24rem] lg:gap-16">
            <div>
              {/* ⚠️ Le titre disait « Avant de decider, voyez ce que ca
                  donnerait chez vous. » Elie : « ce titre est pas hyper
                  visible. Quand on arrive sur le form, en moins d'une seconde
                  on doit comprendre de quoi ca parle et pourquoi ils doivent
                  remplir. » Deux defauts : il etait plus petit que tous les
                  titres de la page, donc il se noyait, et « ca » ne nommait
                  rien. Celui-ci dit le geste puis le livrable, en deux phrases
                  courtes.

                  ⚠️ Le mot « audit » est evite ici. La relecture aveugle l'a
                  releve : pour un artisan, un audit est un controle. Le bouton
                  du formulaire le garde, parce qu'a ce stade la page a explique
                  de quoi il s'agit. */}
              {/* ⚠️ `section-title`, la meme classe que tous les titres du
                  site. Ce bloc portait sa propre echelle, plus petite : a
                  graisse egale, un titre plus petit se lit comme un titre plus
                  maigre, et Elie l'a vu tout de suite. Ne pas lui redonner une
                  taille a lui. */}
              <h2 id="audit-milieu-heading" className="section-title text-foreground">
                {/* ⚠️ Disait « Vous recevez 4 minutes de video ». Elie :
                    « 4 min de video est pas tres evocateur. En un coup d'oeil
                    ils doivent comprendre qu'ils recoivent une analyse de leur
                    presence web complete, et gratuitement. » La duree decrit le
                    contenant, pas ce qu'on y trouve.
                    Deuxieme essai : « Votre fiche Google, vos reseaux, votre
                    site. Analyses gratuitement. » Exact mais plat.
                    Troisieme : « Voyez votre entreprise comme un client la
                    voit. » Evocateur, mais Elie : « on comprend pas, la
                    personne doit comprendre que gratuitement elle recoit un
                    full audit. Fais simple. »
                    Lecon : sur le bloc qui porte le formulaire, l'image ne vaut
                    rien contre la clarte. Le titre nomme la chose et son prix,
                    le paragraphe dit le perimetre. Ne pas rechercher l'elegance
                    ici, elle a ete essayee trois fois. */}
                <span className="block">
                  {fr
                    ? 'Recevez un audit complet de votre présence en ligne.'
                    : 'Get a full audit of your online presence.'}
                </span>
                <span className="block text-primary">{fr ? 'Gratuitement.' : 'For free.'}</span>
              </h2>

              {/* Les reperes remontent au-dessus du paragraphe : « Gratuit »
                  doit se voir dans la meme seconde que le titre, pas apres
                  quatre lignes de texte. */}
              <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-2">
                {reperes.map((repere) => (
                  <li
                    key={repere}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-2 text-sm font-semibold text-foreground"
                  >
                    <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                    {repere}
                  </li>
                ))}
              </ul>

              <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
                {fr
                  ? "Votre fiche Google, vos réseaux et votre site, passés en revue un par un. Je vous montre ce qu'un client voit de vous aujourd'hui, ce qui le fait partir, et les trois choses que je corrigerais en premier."
                  : 'Your Google profile, your social accounts and your site, gone through one by one. I show you what a client sees of you today, what makes them leave, and the three things I would fix first.'}
              </p>
            </div>

            <AuditForm source="milieu-accueil" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AuditInline;
