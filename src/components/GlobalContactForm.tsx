import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/animations/ScrollReveal';

const GlobalContactForm = () => {
  const { t, language } = useLanguage();
  const fr = language === 'fr';
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxu13-AnjyCaXr818JdA-hCSohWEE2ii1ELGXM-PeQ_sGYYB8rvEhXr_NYh7YWedA4qyg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      toast({
        title: t('form.success'),
        description: fr
          ? 'Je réponds sous 48 h ouvrées. Sans nouvelles, écrivez à elie@elieageron.com.'
          : 'I reply within 2 working days. If you hear nothing, write to elie@elieageron.com.',
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: t('form.error.title'),
        description: t('form.error.desc'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative" aria-labelledby="global-form-heading">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10">
            <div className="text-center mb-8">
              <h2 id="global-form-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {t('globalForm.title')}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {t('globalForm.subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="global-name">{t('contact.name')}</Label>
                  <Input
                    id="global-name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={fr ? 'Votre nom' : 'Your name'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="global-email">{t('contact.email')}</Label>
                  <Input
                    id="global-email"
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={fr ? 'vous@exemple.fr' : 'you@example.com'}
                  />
                </div>
              </div>

              {/* Facultatif et annonce comme tel : une partie des clients locaux
                  preferent nettement etre rappeles qu'echanger par ecrit. */}
              <div className="space-y-2">
                <Label htmlFor="global-phone">
                  {fr ? 'Téléphone' : 'Phone'}{' '}
                  <span className="font-normal text-muted-foreground">
                    {fr ? '(facultatif, si vous préférez que je vous rappelle)' : '(optional, if you prefer a call back)'}
                  </span>
                </Label>
                <Input
                  id="global-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={30}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="global-message">{t('contact.project')}</Label>
                <Textarea
                  id="global-message"
                  required
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    fr
                      ? 'En deux lignes : votre activité, votre commune, et ce que vous cherchez.'
                      : 'In two lines: your business, your town, and what you are looking for.'
                  }
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    {t('contact.sending')}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    {t('contact.send')}
                  </span>
                )}
              </Button>

              {/* Reassurance et mention RGPD. C'est ce que je conseille aux
                  clients dans les articles : autant l'appliquer ici. */}
              <p className="text-center text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {fr ? (
                  <>
                    Je réponds sous 48 h ouvrées. Vos coordonnées servent uniquement à répondre à
                    votre demande, elles ne sont ni revendues ni utilisées pour de la prospection.{' '}
                    <a
                      href="/politique-confidentialite"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      En savoir plus
                    </a>
                    .
                  </>
                ) : (
                  <>
                    I reply within 2 working days. Your details are only used to answer your enquiry,
                    never sold and never used for cold outreach.
                  </>
                )}
              </p>

              <p className="text-center text-sm text-muted-foreground">
                {fr ? 'Vous préférez le téléphone ? ' : 'Prefer the phone? '}
                <a
                  href="tel:+33695555318"
                  className="font-medium text-primary hover:underline underline-offset-4"
                >
                  06 95 55 53 18
                </a>
                {fr ? ' ou ' : ' or '}
                <a
                  href="mailto:elie@elieageron.com"
                  className="font-medium text-primary hover:underline underline-offset-4"
                >
                  elie@elieageron.com
                </a>
              </p>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalContactForm;
