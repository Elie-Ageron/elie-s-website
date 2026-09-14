import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import eliePortrait from '@/assets/elie-ageron-portrait.webp';

/**
 * Qui est derriere tout ca.
 *
 * Remontee en septembre 2026, du bas de page vers le milieu. Elle etait
 * coincee entre la FAQ et trois sections d'appel a l'action : personne ne
 * lisait la seule partie de la page qui repond a la question qu'un artisan se
 * pose en premier, a savoir qui je vais avoir au telephone.
 *
 * 🔴 **Deux titres ont ete rejetes ici, ne pas y revenir.**
 *
 * | Titre | Verdict d'Elie |
 * |---|---|
 * | « Un projet a la fois. Le votre. » | *« c'est faux, je fais plusieurs projets »* |
 * | « Je ne peux pas prendre trente clients. » | *« c'est quoi ca ? C'est pourri, c'est tellement nul »* |
 * | « Je suis a Albertville, et je viens chez vous. » | *« ce texte doit pas trop limiter en geographie »* |
 *
 * Les deux cherchaient un argument de rarete. Le second etait vrai mais il
 * s'ouvrait sur une limite, donc il vendait ce qu'Elie ne sait pas faire au
 * lieu de ce qu'il fait. Ce qu'il a demande a la place : *« un truc qui me
 * presente, que je suis a Albertville, que j'aide les gens a avoir du reseau.
 * C'est pas complique. »*
 *
 * **La section presente une personne et ce qu'elle apporte.** Elie : *« il doit
 * surtout me presenter, et dire a celui qui lit comment je peux l'aider avec
 * son entreprise. »*
 *
 * ⚠️ **La geographie reste, mais en dernier et sans borne.** Un titre qui
 * annonce Albertville disqualifie tout lecteur qui n'est pas de la vallee,
 * alors que la zone declaree va jusqu'a la France entiere. La ville vit
 * maintenant dans la derniere phrase, avec « en Savoie comme ailleurs ».
 * Le SEO local n'y perd rien : Albertville, Chambery et Annecy sont nommes
 * plus haut dans la section reseaux sociaux, et sur les quinze pages locales.
 *
 * Le texte parlait aussi uniquement de sites (« du brief a la mise en ligne »,
 * « un site concu pour convertir »), reste de l'epoque ou le site etait le
 * pilier n°1. Il couvre maintenant les deux offres.
 *
 * La colonne de texte a ete elargie : le titre tombait dans trois cinquiemes
 * de la largeur et se cassait sur quatre lignes contre le bord gauche.
 */
const PersonalIntroSection = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            /* 🔴 Le portrait portait `order-2` : sur telephone il arrivait
               apres le titre, les deux paragraphes et le lien, donc apres tout
               le texte. Cette section a ete remontee juste avant le formulaire
               pour que le visage tombe avant la demande de numero ; le laisser
               en dernier annulait le deplacement sur l'appareil ou la plupart
               des gens arrivent. L'ordre du DOM suffit : photo, puis nom. Sur
               grand ecran `md:col-span-4` le remet a gauche, rien ne change. */
            className="md:col-span-4"
          >
            <img
              src={eliePortrait}
              alt={
                fr
                  ? 'Elie Ageron, web designer et créateur de contenu à Albertville, en Savoie'
                  : 'Elie Ageron, web designer and content creator in Albertville, Savoie'
              }
              className="soft-shadow mx-auto aspect-[4/5] w-full max-w-[240px] rounded-2xl object-cover sm:max-w-[280px] md:mx-0 md:max-w-none"
              width={320}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8"
          >
            <h2 id="intro-heading" className="section-title">
              <span className="text-foreground">{fr ? "Je m'appelle Elie Ageron. " : 'My name is Elie Ageron. '}</span>
              <span className="text-primary">
                {fr ? 'Je rends votre métier visible.' : 'I make your trade visible.'}
              </span>
            </h2>

            <p className="section-lede mt-6 max-w-xl">
              {fr
                ? "Je filme, je monte et je publie pour des entreprises qui n'ont ni le temps ni l'envie de s'en occuper, et je construis les sites sur lesquels ces vidéos renvoient. Autrement dit : vous faites votre métier, et moi je m'occupe de ce que les gens trouvent quand ils cherchent votre nom."
                : 'I film, edit and post for businesses that have neither the time nor the appetite for it, and I build the sites those videos point to. Put simply: you do your job, and I take care of what people find when they look you up.'}
            </p>
            <p className="section-lede mt-4 max-w-xl">
              {fr
                ? "C'est moi qui filme, moi qui monte, et moi qui écris le site. Vous avez mon numéro, pas un formulaire de support. Je suis basé à Albertville et je me déplace pour tourner, en Savoie comme ailleurs."
                : 'I film, I edit, and I write the site. You get my phone number, not a support form. I am based in Albertville and I travel to film, in Savoie and beyond.'}
            </p>

            {/* ⚠️ C'etait un bouton cercle de bordure, en 52 px de haut. Depuis
                que cette section est remontee juste avant le formulaire, ce
                bouton etait le dernier element avant la demande : une sortie
                du site, dessinee comme une action principale, a l'endroit
                precis ou on demande un numero. Il reste disponible pour qui
                veut en savoir plus, en lien de texte. */}
            <Link
              to="/a-propos"
              className="mt-7 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {fr ? 'Comment je travaille' : 'How I work'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntroSection;
