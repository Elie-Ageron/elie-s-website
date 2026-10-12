import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { rouvrirBandeau } from '@/lib/consentement';

interface LegalPageProps {
  page: 'mentions' | 'privacy';
}

const LegalPage = ({ page }: LegalPageProps) => {
  const { language } = useLanguage();
  const isFr = language === 'fr';
  const isMentions = page === 'mentions';

  const title = isMentions
    ? isFr ? 'Mentions Légales | Elie Ageron' : 'Legal Notice | Elie Ageron'
    : isFr ? 'Politique de Confidentialité | Elie Ageron' : 'Privacy Policy | Elie Ageron';

  const canonical = isMentions
    ? 'https://elieageron.com/mentions-legales'
    : 'https://elieageron.com/politique-confidentialite';

  return (
    <>
      <Helmet>
        {/* Ces deux pages ecrivent leur <head> a la main, sans passer par
            `SEO.tsx`. La balise `lang` manquait donc : le corps etait traduit
            mais le document restait annonce en francais. */}
        <html lang={language} />
        <title>{title}</title>
        <meta
          name="description"
          content={
            isMentions
              ? isFr
                ? "Mentions légales du site elieageron.com : éditeur, adresse à Albertville, contact, hébergeur et propriété intellectuelle. Elie Ageron, web designer en Savoie."
                : "Legal notice for Elie Ageron Web Design - publisher, host, intellectual property."
              : isFr
              ? "Ce que deviennent vos données quand vous remplissez le formulaire de contact : ce qui est collecté, pourquoi, combien de temps, et comment le faire supprimer."
              : "Privacy policy for Elie Ageron Web Design - personal data, cookies, GDPR."
          }
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonical} />
        {/* Ces pages ne sont pas indexees, mais leur lien circule par message
            et par email : sans og:title, l'apercu de partage reprend celui de
            l'accueil et annonce autre chose que ce qu'on ouvre. */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Elie Ageron" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 py-24 sm:py-36 space-y-10">
        {isMentions ? (
          <>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              {isFr ? 'Mentions Légales' : 'Legal Notice'}
            </h1>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '1. Éditeur du site' : '1. Website Publisher'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? 'Le site elieageron.com est édité par Elie Ageron, auto-entrepreneur en web design.'
                  : 'The website elieageron.com is published by Elie Ageron, web designer and web partner.'}
              </p>
              <ul className="text-muted-foreground space-y-1 list-none">
                <li><strong className="text-foreground">{isFr ? 'Nom :' : 'Name:'}</strong> Elie Ageron</li>
                <li><strong className="text-foreground">{isFr ? 'Activité :' : 'Activity:'}</strong> {isFr ? 'Web Design & Optimisation Conversion' : 'Web Design & Conversion Optimization'}</li>
                <li><strong className="text-foreground">{isFr ? 'Adresse :' : 'Address:'}</strong> Albertville, Savoie, France</li>
                <li><strong className="text-foreground">Email :</strong> <a href="mailto:elie@elieageron.com" className="text-primary hover:underline">elie@elieageron.com</a></li>
                <li><strong className="text-foreground">{isFr ? 'Téléphone :' : 'Phone:'}</strong> <a href="tel:+33695555318" className="text-primary hover:underline">+33 6 95 55 53 18</a></li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '2. Hébergement' : '2. Hosting'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? 'Le site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.'
                  : 'The site is hosted by Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, United States.'}
                {' '}<a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '3. Propriété intellectuelle' : '3. Intellectual Property'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? "L'ensemble du contenu de ce site (textes, images, graphismes, logo, code) est la propriété exclusive d'Elie Ageron et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite."
                  : "All content on this site (text, images, graphics, logo, code) is the exclusive property of Elie Ageron and is protected by French and international intellectual property laws. Any reproduction, even partial, is prohibited without prior written authorization."}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '4. Limitation de responsabilité' : '4. Limitation of Liability'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? "Elie Ageron s'efforce de maintenir les informations de ce site à jour. Toutefois, la responsabilité du site ne saurait être engagée en cas d'inexactitude ou d'omission dans les informations présentées."
                  : "Elie Ageron strives to keep the information on this site up to date. However, the site cannot be held liable for any inaccuracy or omission in the information provided."}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '5. Droit applicable' : '5. Applicable Law'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? 'Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.'
                  : 'These legal notices are governed by French law. In the event of a dispute, the French courts will have exclusive jurisdiction.'}
              </p>
            </section>
          </>
        ) : (
          <>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              {isFr ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isFr ? 'Dernière mise à jour : octobre 2026' : 'Last updated: October 2026'}
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? "1. Ce que vous m'envoyez" : '1. What you send me'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? "Le formulaire d'audit gratuit demande le nom de votre entreprise et votre numéro de téléphone. Le formulaire de contact demande votre nom, votre adresse e-mail, votre téléphone si vous le donnez, et votre message. Ces informations arrivent dans un tableau Google et dans ma boîte mail. Elles servent à vous répondre et à suivre notre échange, rien d'autre. Je les garde 3 ans après notre dernier contact."
                  : 'The free audit form asks for your business name and phone number. The contact form asks for your name, email address, phone number if you give it, and your message. This information lands in a Google spreadsheet and in my inbox. It is used to reply to you and follow up on our conversation, nothing else. I keep it for 3 years after our last contact.'}
              </p>
            </section>

            <section id="cookies" className="space-y-3 scroll-mt-28">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? "2. Cookies et mesure d'audience" : '2. Cookies and analytics'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? 'Je mesure la fréquentation du site pour voir ce qui sert et ce qui bloque. Je ne fais pas de publicité, et je ne vends ni ne transmets ces données à qui que ce soit pour vous démarcher.'
                  : "I measure how the site is used to see what helps and what gets in the way. I don't run ads, and I don't sell or pass this data on to anyone to market to you."}
              </p>
              <h3 className="text-lg font-semibold text-foreground pt-2">
                {isFr ? 'Sans votre accord, et sans cookie' : 'Without your consent, and without cookies'}
              </h3>
              <p className="text-muted-foreground">
                {isFr
                  ? "Vercel Web Analytics compte les visites : pages vues, site d'où vous venez, pays, type d'appareil. Il ne dépose rien dans votre navigateur et ne permet pas de vous reconnaître d'une visite à l'autre. C'est pour cette raison qu'il ne demande pas d'accord."
                  : "Vercel Web Analytics counts visits: pages viewed, the site you came from, country, device type. It stores nothing in your browser and can't recognise you from one visit to the next. That's why it doesn't need your consent."}
              </p>
              <h3 className="text-lg font-semibold text-foreground pt-2">
                {isFr ? 'Seulement si vous cliquez sur « Accepter »' : 'Only if you click "Accept"'}
              </h3>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  {isFr
                    ? 'Google Analytics : le parcours sur le site, la durée des visites, la provenance, la ville approximative. Cookies _ga et _ga_*, gardés 13 mois au plus.'
                    : 'Google Analytics: how you move through the site, visit length, where you came from, approximate city. Cookies _ga and _ga_*, kept for 13 months at most.'}
                </li>
                <li>
                  {isFr
                    ? "Hotjar : les clics, le défilement, et des enregistrements de navigation qui montrent où l'on hésite. Ce que vous tapez dans les formulaires est masqué et n'est jamais enregistré. Cookies _cs_id (13 mois) et _cs_s (30 minutes)."
                    : 'Hotjar: clicks, scrolling, and session recordings that show where people hesitate. Anything you type into forms is masked and never recorded. Cookies _cs_id (13 months) and _cs_s (30 minutes).'}
                </li>
              </ul>
              <p className="text-muted-foreground">
                {isFr
                  ? "Votre choix est gardé 6 mois, puis je vous redemande. Vous pouvez changer d'avis à tout moment, et un refus efface les cookies déjà posés."
                  : 'Your choice is kept for 6 months, then I ask again. You can change your mind at any time, and declining deletes any cookies already set.'}
              </p>
              <button
                type="button"
                onClick={rouvrirBandeau}
                className="inline-flex min-h-[44px] items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                {isFr ? 'Changer mon choix' : 'Change my choice'}
              </button>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '3. Les autres services chargés par le site' : '3. Other services the site loads'}
              </h2>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  {isFr
                    ? "Calendly, l'outil de prise de rendez-vous, est préchargé pour s'ouvrir sans attendre. Il peut déposer ses propres cookies, selon sa politique de confidentialité."
                    : 'Calendly, the booking tool, is preloaded so it opens instantly. It may set its own cookies, under its own privacy policy.'}
                </li>
                <li>
                  {isFr
                    ? "Fontshare fournit la police du site. Comme pour toute ressource chargée depuis un autre serveur, votre adresse IP lui est transmise pour qu'il puisse l'envoyer."
                    : 'Fontshare serves the site font. As with any resource loaded from another server, your IP address is sent to it so it can deliver the file.'}
                </li>
                <li>
                  {isFr
                    ? "Votre navigateur garde aussi deux réglages qui ne servent qu'au site : la langue choisie et votre réponse sur les cookies. Ils ne quittent pas votre appareil."
                    : 'Your browser also keeps two settings used only by this site: your chosen language and your cookie answer. They never leave your device.'}
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '4. Où vont ces données' : '4. Where this data goes'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? "Le site est hébergé par Vercel. Google, Vercel et Calendly sont des sociétés américaines, adhérentes au cadre de protection des données UE / États-Unis (Data Privacy Framework). Hotjar appartient à Contentsquare, société française basée à Paris, qui héberge ses données dans l'Union européenne."
                  : 'The site is hosted by Vercel. Google, Vercel and Calendly are US companies certified under the EU-US Data Privacy Framework. Hotjar is owned by Contentsquare, a French company based in Paris that hosts its data in the European Union.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '5. Vos droits (RGPD)' : '5. Your Rights (GDPR)'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? 'Vous pouvez me demander de voir, corriger, supprimer ou récupérer vos données, ou vous opposer à leur utilisation. Écrivez-moi à'
                  : 'You can ask me to see, correct, delete or export your data, or object to its use. Write to me at'}
                {' '}<a href="mailto:elie@elieageron.com" className="text-primary hover:underline">elie@elieageron.com</a>
                {isFr
                  ? '. Je réponds en moins de 24 h. Si ma réponse ne vous convient pas, vous pouvez saisir la CNIL sur '
                  : '. I reply within 24 hours. If my answer does not satisfy you, you can contact the French data protection authority (CNIL) at '}
                <a href="https://www.cnil.fr/fr/plaintes" className="text-primary hover:underline" rel="noopener noreferrer" target="_blank">cnil.fr</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '6. Responsable du traitement' : '6. Data Controller'}
              </h2>
              <p className="text-muted-foreground">
                {isFr ? 'Responsable :' : 'Controller:'} Elie Ageron, elie@elieageron.com, Albertville, France
              </p>
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default LegalPage;
