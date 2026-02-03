import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Leaf, Sparkles, Heart, Star, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import spaHero from '@/assets/spa-hero.jpg';
import spaTreatment from '@/assets/spa-treatment.jpg';

const LuxuraSpa = () => {
  const [showBanner, setShowBanner] = useState(true);

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
    <div className="min-h-screen bg-[#faf8f5] text-[#2a2a2a] overflow-x-hidden" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      {/* Promo Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#d4af37] via-[#c5a028] to-[#d4af37] text-[#0a0a0a] py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 relative">
            <Sparkles className="w-5 h-5 hidden sm:block" />
            <p className="text-sm sm:text-base font-medium tracking-wide text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ✨ Ce site pourrait être le vôtre. <a href="https://elieageron.lovable.app/contact" className="underline hover:no-underline font-semibold">Contactez-moi</a> pour créer votre site de rêve.
            </p>
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute right-2 p-1 hover:bg-[#0a0a0a]/10 rounded-full transition-colors"
              aria-label="Fermer la bannière"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#d4af37]/20 transition-all ${showBanner ? 'top-[44px]' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl tracking-[0.3em] text-[#8b7355]" style={{ fontWeight: 300 }}>LUXURA</div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-[0.15em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
            <a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#d4af37] transition-colors">Notre Spa</a>
            <a href="#testimonials" className="hover:text-[#d4af37] transition-colors">Avis</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
          </div>
          <Button className="bg-[#8b7355] text-[#faf8f5] hover:bg-[#7a6548] text-xs tracking-[0.2em] uppercase px-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Réserver
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${showBanner ? 'pt-[44px]' : ''}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={spaHero} 
            alt="Luxura Spa interior with massage tables and zen atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]/30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-[#d4af37] tracking-[0.5em] text-xs mb-8 uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>Bienvenue chez</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 text-[#f5f5f5]" style={{ fontWeight: 300, letterSpacing: '0.15em' }}>
              LUXURA
            </h1>
            <p className="text-xl md:text-2xl text-[#f5f5f5]/90 mb-4 tracking-[0.2em]" style={{ fontWeight: 300 }}>
              Spa & Centre de Bien-être
            </p>
            <p className="text-base text-[#f5f5f5]/70 max-w-xl mx-auto mb-12 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Évadez-vous dans un havre de paix où chaque détail est pensé pour votre sérénité. 
              Découvrez l'art du bien-être dans un cadre d'exception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c5a028] px-10 py-6 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Découvrir nos soins
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#f5f5f5]/50 text-[#f5f5f5] hover:bg-[#f5f5f5]/10 px-10 py-6 text-xs tracking-[0.2em] uppercase bg-transparent" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Réserver maintenant
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 border border-[#f5f5f5]/40 rounded-full flex justify-center pt-2">
            <div className="w-0.5 h-2 bg-[#d4af37] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[#8b7355] tracking-[0.4em] text-xs mb-4 uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>Nos prestations</p>
            <h2 className="text-4xl md:text-5xl tracking-wide mb-6 text-[#2a2a2a]" style={{ fontWeight: 300 }}>L'Excellence du Bien-être</h2>
            <p className="text-[#6a6a6a] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Des soins d'exception réalisés par nos experts pour une expérience sensorielle unique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="bg-[#fff] border-[#e8e4de] hover:border-[#d4af37]/40 transition-all duration-500 group h-full shadow-sm hover:shadow-lg">
                  <CardContent className="p-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f5f1eb] flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-colors">
                      <service.icon className="w-7 h-7 text-[#8b7355]" />
                    </div>
                    <h3 className="text-xl tracking-wide mb-4 text-[#2a2a2a]" style={{ fontWeight: 400 }}>{service.title}</h3>
                    <p className="text-[#6a6a6a] mb-6 leading-relaxed text-sm" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>{service.description}</p>
                    <p className="text-[#8b7355] text-sm tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>{service.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-28 px-6 bg-[#f5f1eb]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#8b7355] tracking-[0.4em] text-xs mb-4 uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>Notre histoire</p>
              <h2 className="text-4xl md:text-5xl tracking-wide mb-8 text-[#2a2a2a]" style={{ fontWeight: 300 }}>Un Sanctuaire d'Exception</h2>
              <p className="text-[#6a6a6a] leading-relaxed mb-6 text-lg" style={{ fontWeight: 300 }}>
                Depuis 2015, Luxura Spa incarne l'excellence du bien-être à la française. 
                Notre philosophie : créer un espace où le temps s'arrête, où chaque sens est éveillé, 
                où votre bien-être devient notre unique priorité.
              </p>
              <p className="text-[#6a6a6a] leading-relaxed mb-10" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                Nos thérapeutes, formés aux techniques les plus prestigieuses, vous accompagnent 
                dans un voyage sensoriel personnalisé. Chaque soin est une invitation à la sérénité.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="border-r border-[#d4af37]/30 last:border-r-0">
                  <p className="text-4xl text-[#8b7355] mb-1" style={{ fontWeight: 300 }}>2500+</p>
                  <p className="text-xs text-[#6a6a6a] tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Clients satisfaits</p>
                </div>
                <div className="border-r border-[#d4af37]/30 last:border-r-0">
                  <p className="text-4xl text-[#8b7355] mb-1" style={{ fontWeight: 300 }}>15+</p>
                  <p className="text-xs text-[#6a6a6a] tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Soins exclusifs</p>
                </div>
                <div>
                  <p className="text-4xl text-[#8b7355] mb-1" style={{ fontWeight: 300 }}>8</p>
                  <p className="text-xs text-[#6a6a6a] tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Années d'excellence</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src={spaTreatment} 
                  alt="Woman receiving a relaxing facial treatment at Luxura Spa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#d4af37]/30" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#d4af37]/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-28 px-6 bg-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[#d4af37] tracking-[0.4em] text-xs mb-4 uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>Témoignages</p>
            <h2 className="text-4xl md:text-5xl tracking-wide text-[#f5f5f5]" style={{ fontWeight: 300 }}>Ce que disent nos clients</h2>
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
                <Card className="bg-[#363636] border-[#4a4a4a] h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                      ))}
                    </div>
                    <p className="text-[#e0e0e0]/80 italic leading-relaxed mb-6 text-lg" style={{ fontWeight: 300 }}>"{testimonial.text}"</p>
                    <p className="text-[#d4af37] tracking-wide text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>{testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#8b7355] tracking-[0.4em] text-xs mb-4 uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>Contact</p>
            <h2 className="text-4xl md:text-5xl tracking-wide mb-16 text-[#2a2a2a]" style={{ fontWeight: 300 }}>Réservez Votre Moment</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="flex flex-col items-center p-8 bg-[#fff] rounded-sm shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#f5f1eb] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-[#8b7355]" />
              </div>
              <p className="text-[#8b7355] text-xs mb-2 tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Téléphone</p>
              <p className="text-[#2a2a2a] text-lg" style={{ fontWeight: 300 }}>+33 1 23 45 67 89</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-[#fff] rounded-sm shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#f5f1eb] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#8b7355]" />
              </div>
              <p className="text-[#8b7355] text-xs mb-2 tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Adresse</p>
              <p className="text-[#2a2a2a] text-lg" style={{ fontWeight: 300 }}>42 Avenue des Champs-Élysées, Paris</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-[#fff] rounded-sm shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#f5f1eb] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#8b7355]" />
              </div>
              <p className="text-[#8b7355] text-xs mb-2 tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Horaires</p>
              <p className="text-[#2a2a2a] text-lg" style={{ fontWeight: 300 }}>Lun-Sam: 9h-21h</p>
            </div>
          </motion.div>

          <Button size="lg" className="bg-[#8b7355] text-[#faf8f5] hover:bg-[#7a6548] px-14 py-6 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Prendre rendez-vous
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#2a2a2a] border-t border-[#3a3a3a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl tracking-[0.3em] text-[#d4af37]" style={{ fontWeight: 300 }}>LUXURA</div>
          <p className="text-[#888] text-sm" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>© 2024 Luxura Spa. Tous droits réservés.</p>
          <p className="text-[#888] text-sm" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>Site créé par <a href="https://elieageron.lovable.app" className="text-[#d4af37] hover:underline">Elie Ageron</a></p>
        </div>
      </footer>

      {/* Back to portfolio link */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          variant="outline"
          className="bg-[#faf8f5]/90 border-[#8b7355]/30 text-[#8b7355] hover:bg-[#f5f1eb] backdrop-blur-md text-xs tracking-wide uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          asChild
        >
          <a href="https://elieageron.lovable.app/portfolio">← Retour au portfolio</a>
        </Button>
      </div>
    </div>
  );
};

export default LuxuraSpa;
