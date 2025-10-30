import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-anderson-gym.jpg";
import logoAnderson from "@/assets/logo-anderson-new.png";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'center 30%' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90"></div>
      </div>
      
      <Navbar />

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-20 mb-12 animate-fade-up">
        <div className="text-center">
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none mb-6 tracking-tight">
            TREINADOR<br />
            ANDERSON SILVA
          </h1>
          <p className="font-bebas text-2xl md:text-3xl lg:text-4xl text-accent mb-12 tracking-wide">
            A GENTE MONTA O PLANO. VOCÊ SÓ PRECISA SEGUIR.
          </p>
          <Button variant="gold" size="default" className="text-base px-6 py-4 h-auto gap-2">
            COMEÇAR AGORA
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
