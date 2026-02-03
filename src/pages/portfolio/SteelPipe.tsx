import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Wrench, ShieldCheck, Zap, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SteelPipe = () => {
  const services = [
    {
      icon: Wrench,
      title: "Plomberie Générale",
      description: "Installation, réparation et entretien de tous vos équipements sanitaires.",
      features: ["Robinetterie", "Chauffe-eau", "Canalisations"]
    },
    {
      icon: Zap,
      title: "Urgences 24h/24",
      description: "Intervention rapide pour toutes vos urgences plomberie, 7 jours sur 7.",
      features: ["Fuites d'eau", "Débouchage", "Dégâts des eaux"]
    },
    {
      icon: ShieldCheck,
      title: "Rénovation",
      description: "Modernisation complète de vos installations avec garantie décennale.",
      features: ["Salle de bain", "Cuisine", "Chauffage"]
    }
  ];

  const stats = [
    { value: "15+", label: "Années d'expérience" },
    { value: "3000+", label: "Clients satisfaits" },
    { value: "30min", label: "Temps d'intervention" },
    { value: "100%", label: "Garantie satisfaction" }
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
    <div className="min-h-screen bg-[#0c1117] text-[#f5f5f5] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c1117]/90 backdrop-blur-md border-b border-[#1e90ff]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1e90ff] flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">STEEL & PIPE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-[#1e90ff] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#1e90ff] transition-colors">À propos</a>
            <a href="#testimonials" className="hover:text-[#1e90ff] transition-colors">Avis</a>
            <a href="#contact" className="hover:text-[#1e90ff] transition-colors">Contact</a>
          </div>
          <Button className="bg-[#1e90ff] hover:bg-[#1e90ff]/90 text-white font-semibold">
            <Phone className="w-4 h-4 mr-2" />
            Appeler maintenant
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1117] via-[#0c1117] to-[#1e90ff]/10" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#1e90ff]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1e90ff]/5 rounded-full blur-[100px]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#1e90ff 1px, transparent 1px), linear-gradient(90deg, #1e90ff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e90ff]/10 border border-[#1e90ff]/30 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-[#1e90ff]">Disponible 24h/24 - 7j/7</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Votre Expert
              <br />
              <span className="text-[#1e90ff]">Plomberie</span> à Paris
            </h1>
            <p className="text-lg text-[#f5f5f5]/70 mb-8 max-w-xl leading-relaxed">
              Intervention rapide, travail de qualité et prix transparents. 
              Steel & Pipe, c'est plus de 15 ans d'expertise au service de votre confort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#1e90ff] hover:bg-[#1e90ff]/90 text-white font-semibold px-8 py-6 text-base">
                <Phone className="w-5 h-5 mr-2" />
                01 23 45 67 89
              </Button>
              <Button size="lg" variant="outline" className="border-[#1e90ff]/50 text-[#1e90ff] hover:bg-[#1e90ff]/10 px-8 py-6 text-base">
                Devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-[#f5f5f5]/10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-[#f5f5f5]/70">Garantie décennale</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-[#f5f5f5]/70">Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-[#f5f5f5]/70">Sans engagement</span>
              </div>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#141b24] rounded-3xl p-8 border border-[#1e90ff]/20">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <p className="text-4xl font-bold text-[#1e90ff] mb-2">{stat.value}</p>
                    <p className="text-sm text-[#f5f5f5]/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -z-10 -inset-4 bg-[#1e90ff]/10 rounded-3xl blur-xl" />
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
            <p className="text-[#1e90ff] font-semibold text-sm mb-4 uppercase tracking-wider">Nos services</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Solutions Complètes</h2>
            <p className="text-[#f5f5f5]/60 max-w-2xl mx-auto">
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
                transition={{ delay: index * 0.15 }}
              >
                <Card className="bg-[#141b24] border-[#1e90ff]/10 hover:border-[#1e90ff]/40 transition-all duration-300 h-full group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-[#1e90ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#1e90ff]/20 transition-colors">
                      <service.icon className="w-7 h-7 text-[#1e90ff]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#f5f5f5]">{service.title}</h3>
                    <p className="text-[#f5f5f5]/60 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#f5f5f5]/70">
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
              <p className="text-[#1e90ff] font-semibold text-sm mb-4 uppercase tracking-wider">Pourquoi nous choisir</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">L'Excellence au Service de Votre Confort</h2>
              <p className="text-[#f5f5f5]/60 leading-relaxed mb-8">
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
                    <div className="w-6 h-6 rounded-full bg-[#1e90ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#1e90ff]" />
                    </div>
                    <p className="text-[#f5f5f5]/80">{item}</p>
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
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e90ff]/20 to-[#1e90ff]/5 border border-[#1e90ff]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Wrench className="w-24 h-24 text-[#1e90ff]/30 mx-auto mb-4" />
                  <p className="text-[#f5f5f5]/30 italic">Image de l'équipe</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#1e90ff]/10 rounded-full blur-[60px]" />
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
            <p className="text-[#1e90ff] font-semibold text-sm mb-4 uppercase tracking-wider">Témoignages</p>
            <h2 className="text-3xl md:text-5xl font-bold">Ils nous font confiance</h2>
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
                <Card className="bg-[#141b24] border-[#1e90ff]/10 h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                      ))}
                    </div>
                    <p className="text-[#f5f5f5]/70 leading-relaxed mb-6">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-[#f5f5f5]">{testimonial.name}</p>
                      <p className="text-sm text-[#f5f5f5]/50">{testimonial.location}</p>
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff]/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Une Urgence Plomberie ?</h2>
            <p className="text-xl text-[#f5f5f5]/70 mb-10">
              Nous intervenons en moins de 30 minutes, 24h/24 et 7j/7.
            </p>
            <Button size="lg" className="bg-[#1e90ff] hover:bg-[#1e90ff]/90 text-white font-bold px-12 py-7 text-lg">
              <Phone className="w-6 h-6 mr-3" />
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
            <p className="text-[#1e90ff] font-semibold text-sm mb-4 uppercase tracking-wider">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold">Nous Contacter</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <Card className="bg-[#141b24] border-[#1e90ff]/10">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#1e90ff]/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-[#1e90ff]" />
                </div>
                <p className="text-[#f5f5f5]/50 text-sm mb-2">Téléphone</p>
                <p className="font-semibold text-[#f5f5f5]">01 23 45 67 89</p>
              </CardContent>
            </Card>
            <Card className="bg-[#141b24] border-[#1e90ff]/10">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#1e90ff]/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[#1e90ff]" />
                </div>
                <p className="text-[#f5f5f5]/50 text-sm mb-2">Zone d'intervention</p>
                <p className="font-semibold text-[#f5f5f5]">Paris & Île-de-France</p>
              </CardContent>
            </Card>
            <Card className="bg-[#141b24] border-[#1e90ff]/10">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#1e90ff]/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-[#1e90ff]" />
                </div>
                <p className="text-[#f5f5f5]/50 text-sm mb-2">Disponibilité</p>
                <p className="font-semibold text-[#f5f5f5]">24h/24 - 7j/7</p>
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
            <span className="font-bold">STEEL & PIPE</span>
          </div>
          <p className="text-[#f5f5f5]/40 text-sm">© 2024 Steel & Pipe. Tous droits réservés.</p>
          <p className="text-[#f5f5f5]/40 text-sm">Site créé par <span className="text-[#1e90ff]">Elie Ageron</span></p>
        </div>
      </footer>

      {/* Back to portfolio link */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          variant="outline"
          className="bg-[#0c1117]/80 border-[#1e90ff]/30 text-[#1e90ff] hover:bg-[#1e90ff]/10 backdrop-blur-md"
          asChild
        >
          <a href="/portfolio">← Retour au portfolio</a>
        </Button>
      </div>
    </div>
  );
};

export default SteelPipe;
