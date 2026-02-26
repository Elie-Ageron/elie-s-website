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
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission — will be connected to Google Sheets later
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: '✨ ' + t('globalForm.success'),
      description: formData.name,
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 sm:py-20 relative" aria-labelledby="global-form-heading">
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
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
                  />
                </div>
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
                  placeholder="..."
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
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalContactForm;
