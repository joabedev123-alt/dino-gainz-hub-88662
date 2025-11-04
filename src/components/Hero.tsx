import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-anderson-gym.png";
import logoAnderson from "@/assets/logo-anderson-new.png";
import { Navbar } from "./Navbar";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "559784594321";
    const message = "Olá! Gostaria de saber mais sobre os treinos.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Imagem desfocada de fundo para preencher as laterais */}
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover object-center"
          style={{ 
            filter: 'blur(20px)',
            objectPosition: 'center center',
            transform: 'scale(1.1)',
            transformOrigin: 'center center'
          }}
        />
        {/* Imagem principal nítida */}
        <img 
          src={heroBg} 
          alt="Anderson Silva treinando na academia" 
          className="absolute w-full h-full object-contain object-center"
          style={{ 
            objectPosition: 'center 70%',
            top: '70px',
            left: '0',
            right: '0',
            height: 'calc(100% - 70px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90"></div>
      </div>
      
      <Navbar />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 animate-fade-up">
        <div className="text-center">
          <h1 className="font-bebas text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-none mb-4 sm:mb-6 tracking-tight">
            TREINADOR<br />
            ANDERSON SILVA
          </h1>
          <p className="font-bebas text-lg sm:text-xl md:text-2xl lg:text-3xl text-accent mb-8 sm:mb-12 tracking-wide px-2">
            A GENTE MONTA O PLANO. VOCÊ SÓ PRECISA SEGUIR.
          </p>
          <Button 
            variant="gold" 
            size="default" 
            className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 h-auto gap-2"
            onClick={handleWhatsAppClick}
          >
            COMEÇAR AGORA
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
