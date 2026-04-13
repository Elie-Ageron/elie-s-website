import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

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
        <title>{title}</title>
        <meta
          name="description"
          content={
            isMentions
              ? isFr
                ? "Mentions légales d'Elie Ageron Web Design - éditeur, hébergeur, propriété intellectuelle."
                : "Legal notice for Elie Ageron Web Design - publisher, host, intellectual property."
              : isFr
              ? "Politique de confidentialité d'Elie Ageron Web Design - données personnelles, cookies, RGPD."
              : "Privacy policy for Elie Ageron Web Design - personal data, cookies, GDPR."
          }
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 py-20 sm:py-28 space-y-10">
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
                  : 'The website elieageron.com is published by Elie Ageron, freelance web designer.'}
              </p>
              <ul className="text-muted-foreground space-y-1 list-none">
                <li><strong className="text-foreground">{isFr ? 'Nom :' : 'Name:'}</strong> Elie Ageron</li>
                <li><strong className="text-foreground">{isFr ? 'Activité :' : 'Activity:'}</strong> {isFr ? 'Web Design & Optimisation Conversion' : 'Web Design & Conversion Optimization'}</li>
                <li><strong className="text-foreground">{isFr ? 'Adresse :' : 'Address:'}</strong> Annecy, Haute-Savoie, France</li>
                <li><strong className="text-foreground">Email :</strong> <a href="mailto:web@elieageron.com" className="text-primary hover:underline">web@elieageron.com</a></li>
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
              {isFr ? 'Dernière mise à jour : mars 2026' : 'Last updated: March 2026'}
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '1. Données collectées' : '1. Data Collected'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? 'Lors de votre utilisation du formulaire de contact, nous collectons les données suivantes : nom, adresse e-mail, numéro de téléphone (optionnel) et le message envoyé. Ces données sont utilisées uniquement pour répondre à votre demande.'
                  : 'When you use the contact form, we collect the following data: name, email address, phone number (optional) and the message sent. This data is used solely to respond to your inquiry.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '2. Finalité du traitement' : '2. Purpose of Processing'}
              </h2>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>{isFr ? 'Répondre aux demandes de contact et de devis' : 'Responding to contact and quote requests'}</li>
                <li>{isFr ? 'Assurer le suivi de la relation commerciale' : 'Managing the commercial relationship'}</li>
                <li>{isFr ? 'Améliorer les performances du site (analytics)' : 'Improving site performance (analytics)'}</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '3. Cookies et analytics' : '3. Cookies & Analytics'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? "Ce site utilise des outils d'analyse d'audience (analytics) pour mesurer la fréquentation. Ces outils peuvent déposer des cookies anonymes sur votre navigateur. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur."
                  : 'This site uses audience analytics tools to measure traffic. These tools may place anonymous cookies in your browser. You can disable cookies in your browser settings.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '4. Durée de conservation' : '4. Data Retention'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? 'Les données collectées via le formulaire de contact sont conservées pendant 3 ans à compter du dernier contact, conformément à la législation française.'
                  : 'Data collected via the contact form is retained for 3 years from the last contact, in accordance with French legislation.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '5. Vos droits (RGPD)' : '5. Your Rights (GDPR)'}
              </h2>
              <p className="text-muted-foreground">
                {isFr
                  ? "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition au traitement de vos données personnelles. Pour exercer ces droits, contactez-nous à :"
                  : 'Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase, port and object to the processing of your personal data. To exercise these rights, contact us at:'}
                {' '}<a href="mailto:web@elieageron.com" className="text-primary hover:underline">web@elieageron.com</a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {isFr ? '6. Responsable du traitement' : '6. Data Controller'}
              </h2>
              <p className="text-muted-foreground">
                {isFr ? 'Responsable :' : 'Controller:'} Elie Ageron - web@elieageron.com - Annecy, France
              </p>
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default LegalPage;
