/**
 * La FAQ de l'accueil, source unique.
 *
 * Elle etait ecrite deux fois : une fois dans `FAQAccordion.tsx` pour l'ecran,
 * une fois dans `FAQSchema.tsx` pour Google. Les deux versions avaient deja
 * commence a diverger, et une FAQPage dont les questions ne sont pas visibles
 * sur la page est une infraction aux regles de Google. Les deux composants
 * lisent maintenant ce fichier.
 *
 * Deux corrections de septembre 2026 :
 *
 * 1. Les six questions parlaient toutes de sites web, alors que le pilier n°1
 *    du site est la gestion des reseaux sociaux. Un visiteur venu pour les
 *    reseaux ne trouvait aucune reponse sur les reseaux.
 * 2. Le blog etait affiche juste en dessous, sous le titre « Ce qu'on me
 *    demande le plus souvent », avec sa propre liste de questions. La page
 *    presentait donc deux FAQ l'une derriere l'autre. Les articles sont
 *    maintenant accroches aux reponses qu'ils developpent, via `article`.
 */

export type FaqItem = {
  question: string;
  answer: string;
  /** Slug d'article de blog qui developpe la reponse. Optionnel. */
  article?: string;
};

export const faqHome: { fr: FaqItem[]; en: FaqItem[] } = {
  fr: [
    {
      question: 'Combien coûte la gestion de mes réseaux sociaux ?',
      answer:
        "À partir de 890 € par mois, engagement de trois mois. Le déplacement, la journée de tournage, le montage, les sous-titres, l'écriture des légendes et la publication sont compris. Il n'y a pas de frais de démarrage et pas de matériel à acheter de votre côté. Le chiffre final dépend du nombre de plateformes et du volume de vidéos.",
      article: 'prix-gestion-reseaux-sociaux',
    },
    {
      question: "Je n'ai rien à dire devant une caméra, ça va donner quoi ?",
      answer:
        "C'est la phrase que j'entends le plus souvent, et personne n'a jamais eu de texte à apprendre. J'arrive avec les questions écrites, je les pose, vous répondez comme vous le feriez à un client dans votre atelier. Le montage fait le reste. Ce qui est ennuyeux pour vous parce que vous le faites tous les jours est précisément ce que les gens n'ont jamais vu.",
    },
    {
      question: 'Combien coûte un site web professionnel ?',
      answer:
        "Un site une page démarre à 500 €, un site vitrine de plusieurs pages à 1 500 €, et le pack lancement complet à 3 500 €. Ce sont des planchers, pas un catalogue : le chiffre exact tombe après un appel, une fois que je sais combien de pages il vous faut et ce qu'il faut écrire. Le devis est fixe et il n'y a pas de frais cachés.",
      article: 'combien-coute-un-site-web',
    },
    {
      question: 'En combien de temps mon site est-il en ligne ?',
      answer:
        "Entre 7 et 14 jours ouvrés à partir du moment où vous me donnez les textes et les photos. Une page unique va plus vite qu'un site de six pages. Les corrections sont comprises, donc il n'y a pas de mauvaise surprise au moment de la mise en ligne.",
    },
    {
      question: 'Comment on fait pour sortir en premier sur Google dans ma ville ?',
      answer:
        "Sur une recherche locale, ce qui décide, c'est votre fiche Google Business et vos avis, avant votre site. Une fiche complète, des photos récentes, une réponse sous chaque avis, et le site derrière qui parle bien de votre commune. Je m'occupe de la fiche et du site, la collecte des avis se fait avec vous parce que ce sont vos clients.",
      article: 'etre-premier-google-dans-sa-ville',
    },
    {
      question: "Que se passe-t-il si j'arrête au bout de trois mois ?",
      answer:
        "Vous gardez tout. Les vidéos montées, les fichiers sources, les comptes, le site, le nom de domaine. Rien n'est hébergé chez moi et rien n'est bloqué par un abonnement. Je vous fais une prise en main pour que vous puissiez continuer seul, et je reste joignable si une question arrive après.",
    },
  ],
  en: [
    {
      question: 'How much does managing my social accounts cost?',
      answer:
        'From 890 € a month, on a three month commitment. Travel, the filming day, editing, subtitles, captions and posting are all included. There is no setup fee and no equipment to buy on your side. The final figure depends on how many platforms and how many videos.',
      article: 'prix-gestion-reseaux-sociaux',
    },
    {
      question: 'I have nothing to say on camera. How is that going to work?',
      answer:
        'That is the sentence I hear the most, and nobody has ever had a script to learn. I arrive with the questions written down, I ask them, and you answer the way you would answer a client in your workshop. Editing does the rest. What feels boring to you because you do it every day is exactly what other people have never seen.',
    },
    {
      question: 'How much does a professional website cost?',
      answer:
        'A one page site starts at 500 €, a multi page showcase site at 1,500 €, and the full launch pack at 3,500 €. Those are starting prices, not a catalogue: the exact figure comes after a call, once I know how many pages you need and what has to be written. The quote is fixed and there are no hidden fees.',
      article: 'combien-coute-un-site-web',
    },
    {
      question: 'How long until my site is live?',
      answer:
        'Between 7 and 14 business days from the moment you hand over the text and the photos. A single page goes faster than a six page site. Revisions are included, so there is no surprise at launch.',
    },
    {
      question: 'How do I rank first on Google in my town?',
      answer:
        'On a local search, what decides is your Google Business profile and your reviews, before your website. A complete profile, recent photos, a reply under every review, and a site behind it that actually talks about your town. I handle the profile and the site, and we collect reviews together because they are your clients.',
      article: 'etre-premier-google-dans-sa-ville',
    },
    {
      question: 'What happens if I stop after three months?',
      answer:
        'You keep everything. The edited videos, the source files, the accounts, the site, the domain name. Nothing is hosted on my side and nothing is locked behind a subscription. I walk you through it so you can carry on alone, and I stay reachable if a question comes up later.',
    },
  ],
};
