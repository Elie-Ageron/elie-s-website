import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Wrench, ShieldCheck, Zap, CheckCircle, Star, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import plumbingHero from '@/assets/plumbing-hero.jpg';
import plumbingBathroom from '@/assets/plumbing-bathroom.jpg';

const SteelPipe = () => {
  const [showBanner, setShowBanner] = useState(true);

  const services = [
    {
      icon: Wrench,
      title: "PLOMBERIE GÉNÉRALE",
      description: "Installation, réparation et entretien de tous vos équipements sanitaires.",
      features: ["Robinetterie", "Chauffe-eau", "Canalisations"]
    },
    {
      icon: Zap,
      title: "URGENCES 24H/24",
      description: "Intervention rapide pour toutes vos urgences plomberie, 7 jours sur 7.",
      features: ["Fuites d'eau", "Débouchage", "Dégâts des eaux"]
    },
    {
      icon: ShieldCheck,
      title: "RÉNOVATION",
      description: "Modernisation complète de vos installations avec garantie décennale.",
      features: ["Salle de bain", "Cuisine", "Chauffage"]
    }
  ];

  const stats = [
    { value: "15+", label: "ANNÉES D'EXPÉRIENCE" },
    { value: "3000+", label: "CLIENTS SATISFAITS" },
    { value: "30min", label: "TEMPS D'INTERVENTION" },
    { value: "100%", label: "GARANTIE SATISFACTION" }
  ];

  const testimonials = [
    {
      name: "Jean-Pierre M.",
      location: "Paris 15ème",
      text: "Intervention ultra rapide pour une fuite en pleine nuit. Professionnel, efficace et tarifs honnêtes.",
      rating: 5
    },
    {
      name: "Catherine B.",
      location: "Boulogne",
      text: "Excellente rénovation de notre salle de bain. Travail soigné et respect des délais.",
      rating: 5
    },
    {
      name: "Marc D.",
      location: "Neuilly",
      text: "Équipe sérieuse et compétente. Je recommande sans hésitation pour tous travaux de plomberie.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c1117] text-[#f5f5f5] overflow-x-hidden" style={{ fontFamily: "'Inter', 'Roboto', sans-serif" }}>
      {/* Promo Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-[#1e90ff] text-white py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 relative">
            <Wrench className="w-5 h-5 hidden sm:block" />
            <p className="text-sm sm:text-base font-bold tracking-wide text-center uppercase">
              🔧 Ce site pourrait être le vôtre. <a href="https://elieageron.lovable.app/contact" className="underline hover:no-underline">Contactez-moi</a> pour créer votre site pro.
            </p>
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Fermer la bannière"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed left-0 right-0 z-50 bg-[#0c1117]/95 backdrop-blur-md border-b border-[#1e90ff]/20 transition-all ${showBanner ? 'top-[44px]' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1e90ff] flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight uppercase">STEEL & PIPE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="#services" className="hover:text-[#1e90ff] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#1e90ff] transition-colors">À propos</a>
            <a href="#testimonials" className="hover:text-[#1e90ff] transition-colors">Avis</a>
            <a href="#contact" className="hover:text-[#1e90ff] transition-colors">Contact</a>
          </div>
          <Button className="bg-[#1e90ff] hover:bg-[#1e90ff]/90 text-white font-black uppercase tracking-wide">
            <Phone className="w-4 h-4 mr-2" />
            Appeler
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center overflow-hidden ${showBanner ? 'pt-[44px]' : ''}`}>
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={plumbingHero} 
            alt="Professional plumber working on steel pipes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1117] via-[#0c1117]/80 to-transparent" />
          <div className="absolute inset-0 bg-[#0c1117]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e90ff]/20 border border-[#1e90ff]/40 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-[#1e90ff] uppercase tracking-wider">Disponible 24h/24</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-none uppercase tracking-tight">
              Votre Expert
              <br />
              <span className="text-[#1e90ff]">Plomberie</span>
              <br />
              à Paris
            </h1>
            <p className="text-lg text-[#f5f5f5]/70 mb-8 max-w-xl leading-relaxed font-medium">
              Intervention rapide, travail de qualité et prix transparents. 
              Steel & Pipe, c'est plus de 15 ans d'expertise au service de votre confort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#1e90ff] hover:bg-[#1e90ff]/90 text-white font-black px-8 py-7 text-lg uppercase tracking-wider">
                <Phone className="w-5 h-5 mr-2" />
                01 23 45 67 89
              </Button>
              <Button size="lg" variant="outline" className="border-[#1e90ff]/50 text-[#1e90ff] hover:bg-[#1e90ff]/10 px-8 py-7 text-lg font-bold uppercase tracking-wide bg-transparent">
                Devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-[#f5f5f5]/10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-[#f5f5f5]/70 font-bold uppercase">Garantie décennale</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-[#f5f5f5]/70 font-bold uppercase">Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-[#f5f5f5]/70 font-bold uppercase">Sans engagement</span>
              </div>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="bg-[#141b24] rounded-2xl p-8 border-2 border-[#1e90ff]/30">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <p className="text-5xl font-black text-[#1e90ff] mb-2">{stat.value}</p>
                    <p className="text-xs text-[#f5f5f5]/60 font-bold tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -z-10 -inset-4 bg-[#1e90ff]/20 rounded-2xl blur-xl" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#0a0f14]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#1e90ff] font-black text-sm mb-4 uppercase tracking-widest">Nos services</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Solutions Complètes</h2>
            <p className="text-[#f5f5f5]/60 max-w-2xl mx-auto font-medium">
              De l'urgence à la rénovation, nous intervenons pour tous vos besoins en plomberie.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#141b24] border-2 border-[#1e90ff]/10 hover:border-[#1e90ff]/50 transition-all duration-300 h-full group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-[#1e90ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#1e90ff]/20 transition-colors">
                      <service.icon className="w-8 h-8 text-[#1e90ff]" />
                    </div>
                    <h3 className="text-lg font-black mb-3 text-[#f5f5f5] uppercase tracking-wide">{service.title}</h3>
                    <p className="text-[#f5f5f5]/60 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[#f5f5f5]/70 font-bold">
                          <CheckCircle className="w-4 h-4 text-[#1e90ff]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#1e90ff] font-black text-sm mb-4 uppercase tracking-widest">Pourquoi nous choisir</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-none">L'Excellence<br />au Service de<br />Votre Confort</h2>
              <p className="text-[#f5f5f5]/60 leading-relaxed mb-8 font-medium">
                Chez Steel & Pipe, nous combinons expertise technique, réactivité et transparence 
                pour vous offrir un service irréprochable. Notre équipe de plombiers qualifiés 
                intervient dans tout Paris et sa banlieue.
              </p>
              
              <div className="space-y-4">
                {[
                  "Intervention en moins de 30 minutes en cas d'urgence",
                  "Devis détaillé et transparent avant chaque intervention",
                  "Techniciens certifiés et régulièrement formés",
                  "Garantie pièces et main d'œuvre sur tous nos travaux"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-[#1e90ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#1e90ff]" />
                    </div>
                    <p className="text-[#f5f5f5]/80 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-[#1e90ff]/20">
                <img 
                  src={plumbingBathroom} 
                  alt="Modern luxury bathroom renovation by Steel & Pipe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#1e90ff] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-black text-white">15+</p>
                  <p className="text-xs font-bold text-white/80 uppercase">Ans</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-[#0a0f14]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#1e90ff] font-black text-sm mb-4 uppercase tracking-widest">Témoignages</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Ils nous font confiance</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#141b24] border-2 border-[#1e90ff]/10 h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                      ))}
                    </div>
                    <p className="text-[#f5f5f5]/70 leading-relaxed mb-6 text-lg">"{testimonial.text}"</p>
                    <div>
                      <p className="font-black text-[#f5f5f5] uppercase">{testimonial.name}</p>
                      <p className="text-sm text-[#1e90ff] font-bold">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff]/30 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Une Urgence<br />Plomberie ?</h2>
            <p className="text-xl text-[#f5f5f5]/70 mb-10 font-medium">
              Nous intervenons en moins de 30 minutes, 24h/24 et 7j/7.
            </p>
            <Button size="lg" className="bg-[#1e90ff] hover:bg-[#1e90ff]/90 text-white font-black px-14 py-8 text-xl uppercase tracking-wider">
              <Phone className="w-7 h-7 mr-3" />
              01 23 45 67 89
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#0a0f14]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#1e90ff] font-black text-sm mb-4 uppercase tracking-widest">Contact</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Nous Contacter</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <Card className="bg-[#141b24] border-2 border-[#1e90ff]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-[#1e90ff]/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-[#1e90ff]" />
                </div>
                <p className="text-[#f5f5f5]/50 text-xs mb-2 font-bold uppercase tracking-wider">Téléphone</p>
                <p className="font-black text-[#f5f5f5] text-lg">01 23 45 67 89</p>
              </CardContent>
            </Card>
            <Card className="bg-[#141b24] border-2 border-[#1e90ff]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-[#1e90ff]/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-[#1e90ff]" />
                </div>
                <p className="text-[#f5f5f5]/50 text-xs mb-2 font-bold uppercase tracking-wider">Zone d'intervention</p>
                <p className="font-black text-[#f5f5f5] text-lg">Paris & Île-de-France</p>
              </CardContent>
            </Card>
            <Card className="bg-[#141b24] border-2 border-[#1e90ff]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-[#1e90ff]/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-[#1e90ff]" />
                </div>
                <p className="text-[#f5f5f5]/50 text-xs mb-2 font-bold uppercase tracking-wider">Disponibilité</p>
                <p className="font-black text-[#f5f5f5] text-lg">24h/24 - 7j/7</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1e90ff]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1e90ff] flex items-center justify-center">
              <Wrench className="w-4 h-4 text-white" />
            </div>
            <span className="font-black uppercase tracking-tight">STEEL & PIPE</span>
          </div>
          <p className="text-[#f5f5f5]/40 text-sm font-medium">© 2024 Steel & Pipe. Tous droits réservés.</p>
          <p className="text-[#f5f5f5]/40 text-sm font-medium">Site créé par <a href="https://elieageron.lovable.app" className="text-[#1e90ff] hover:underline">Elie Ageron</a></p>
        </div>
      </footer>

      {/* Back to portfolio link */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          variant="outline"
          className="bg-[#0c1117]/90 border-[#1e90ff]/30 text-[#1e90ff] hover:bg-[#1e90ff]/10 backdrop-blur-md font-bold uppercase tracking-wide text-sm"
          asChild
        >
          <a href="https://elieageron.lovable.app/portfolio">← Retour au portfolio</a>
        </Button>
      </div>
    </div>
  );
};

export default SteelPipe;
