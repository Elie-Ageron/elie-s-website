import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Leaf, Sparkles, Heart, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LuxuraSpa = () => {
  const services = [
    {
      icon: Leaf,
      title: "Massage Thérapeutique",
      description: "Un voyage sensoriel pour libérer les tensions et retrouver l'harmonie corps-esprit.",
      price: "À partir de 120€"
    },
    {
      icon: Sparkles,
      title: "Soin Visage Premium",
      description: "Des soins sur-mesure utilisant les actifs les plus précieux pour une peau éclatante.",
      price: "À partir de 95€"
    },
    {
      icon: Heart,
      title: "Rituel Duo",
      description: "Partagez un moment d'exception à deux dans notre suite privée.",
      price: "À partir de 280€"
    }
  ];

  const testimonials = [
    {
      name: "Marie L.",
      text: "Une expérience inoubliable. Le personnel est aux petits soins et l'ambiance est divine.",
      rating: 5
    },
    {
      name: "Sophie D.",
      text: "Je reviens chaque mois depuis 2 ans. C'est devenu mon rituel bien-être essentiel.",
      rating: 5
    },
    {
      name: "Isabelle M.",
      text: "Le massage aux pierres chaudes était absolument parfait. Je recommande vivement.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-[0.3em] text-[#d4af37]">LUXURA</div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wider">
            <a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#d4af37] transition-colors">Notre Spa</a>
            <a href="#testimonials" className="hover:text-[#d4af37] transition-colors">Avis</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
          </div>
          <Button className="bg-[#d4af37] text-[#0a0a0a] hover:bg-[#d4af37]/90 text-sm tracking-wider">
            Réserver
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[#0a0a0a]/60" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#d4af37] tracking-[0.4em] text-sm mb-6 uppercase">Bienvenue chez</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] mb-6">
              LUXURA
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#f5f5f5]/70 mb-4 tracking-wider">
              Spa & Centre de Bien-être
            </p>
            <p className="text-lg text-[#f5f5f5]/50 max-w-2xl mx-auto mb-12 leading-relaxed">
              Évadez-vous dans un havre de paix où chaque détail est pensé pour votre sérénité. 
              Découvrez l'art du bien-être dans un cadre d'exception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#d4af37] text-[#0a0a0a] hover:bg-[#d4af37]/90 px-10 py-6 text-base tracking-wider">
                Découvrir nos soins
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 px-10 py-6 text-base tracking-wider">
                Réserver maintenant
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-[#d4af37]/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#d4af37] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#d4af37] tracking-[0.3em] text-sm mb-4 uppercase">Nos prestations</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-6">L'Excellence du Bien-être</h2>
            <p className="text-[#f5f5f5]/60 max-w-2xl mx-auto">
              Des soins d'exception réalisés par nos experts pour une expérience sensorielle unique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-[#141414] border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-500 group h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                      <service.icon className="w-8 h-8 text-[#d4af37]" />
                    </div>
                    <h3 className="text-xl font-light tracking-wider mb-4 text-[#f5f5f5]">{service.title}</h3>
                    <p className="text-[#f5f5f5]/60 mb-6 leading-relaxed">{service.description}</p>
                    <p className="text-[#d4af37] font-medium">{service.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#d4af37] tracking-[0.3em] text-sm mb-4 uppercase">Notre histoire</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6">Un Sanctuaire d'Exception</h2>
              <p className="text-[#f5f5f5]/60 leading-relaxed mb-6">
                Depuis 2015, Luxura Spa incarne l'excellence du bien-être à la française. 
                Notre philosophie : créer un espace où le temps s'arrête, où chaque sens est éveillé, 
                où votre bien-être devient notre unique priorité.
              </p>
              <p className="text-[#f5f5f5]/60 leading-relaxed mb-8">
                Nos thérapeutes, formés aux techniques les plus prestigieuses, vous accompagnent 
                dans un voyage sensoriel personnalisé. Chaque soin est une invitation à la sérénité.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-light text-[#d4af37]">2500+</p>
                  <p className="text-sm text-[#f5f5f5]/50 mt-1">Clients satisfaits</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#d4af37]">15+</p>
                  <p className="text-sm text-[#f5f5f5]/50 mt-1">Soins exclusifs</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#d4af37]">8</p>
                  <p className="text-sm text-[#f5f5f5]/50 mt-1">Années d'excellence</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Sparkles className="w-16 h-16 text-[#d4af37]/40 mx-auto mb-4" />
                    <p className="text-[#f5f5f5]/40 italic">Image du spa</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-[60px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#d4af37] tracking-[0.3em] text-sm mb-4 uppercase">Témoignages</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider">Ce que disent nos clients</h2>
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
                <Card className="bg-[#141414] border-[#d4af37]/10 h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                      ))}
                    </div>
                    <p className="text-[#f5f5f5]/70 italic leading-relaxed mb-6">"{testimonial.text}"</p>
                    <p className="text-[#d4af37] font-medium">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#d4af37] tracking-[0.3em] text-sm mb-4 uppercase">Contact</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-12">Réservez Votre Moment</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#d4af37]" />
              </div>
              <p className="text-[#f5f5f5]/60 text-sm mb-2">Téléphone</p>
              <p className="text-[#f5f5f5]">+33 1 23 45 67 89</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#d4af37]" />
              </div>
              <p className="text-[#f5f5f5]/60 text-sm mb-2">Adresse</p>
              <p className="text-[#f5f5f5]">42 Avenue des Champs-Élysées, Paris</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#d4af37]" />
              </div>
              <p className="text-[#f5f5f5]/60 text-sm mb-2">Horaires</p>
              <p className="text-[#f5f5f5]">Lun-Sam: 9h-21h</p>
            </div>
          </motion.div>

          <Button size="lg" className="bg-[#d4af37] text-[#0a0a0a] hover:bg-[#d4af37]/90 px-12 py-6 text-base tracking-wider">
            Prendre rendez-vous
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-light tracking-[0.3em] text-[#d4af37]">LUXURA</div>
          <p className="text-[#f5f5f5]/40 text-sm">© 2024 Luxura Spa. Tous droits réservés.</p>
          <p className="text-[#f5f5f5]/40 text-sm">Site créé par <span className="text-[#d4af37]">Elie Ageron</span></p>
        </div>
      </footer>

      {/* Back to portfolio link */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          variant="outline"
          className="bg-[#0a0a0a]/80 border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 backdrop-blur-md"
          asChild
        >
          <a href="/portfolio">← Retour au portfolio</a>
        </Button>
      </div>
    </div>
  );
};

export default LuxuraSpa;
