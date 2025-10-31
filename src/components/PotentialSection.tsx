import andersonChampion from "@/assets/anderson-champion-new.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import { Dumbbell, Library } from "lucide-react";

export const PotentialSection = () => {
  return (
    <section id="potential" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-up">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4">
            DESTRAVE O SEU POTENCIAL
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Você tem força de vontade. Com orientação certa, os resultados vêm.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16 max-w-xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-lg group animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <img 
              src={andersonChampion} 
              alt="Anderson Silva Campeão" 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-card border border-accent/30 rounded-lg p-6 sm:p-8 hover:border-accent/60 transition-colors">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="font-bebas text-lg sm:text-xl md:text-2xl tracking-wide text-accent">
                VOCÊ É RECONHECIDO
              </h3>
            </div>
            <p className="font-inter text-sm sm:text-base text-muted-foreground leading-relaxed">
              Seu progresso é celebrado. Aqui você faz parte de um time que valoriza cada vitória e te mantém motivado sempre.
            </p>
          </div>

          <div className="bg-card border border-accent/30 rounded-lg p-6 sm:p-8 hover:border-accent/60 transition-colors">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Library className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="font-bebas text-lg sm:text-xl md:text-2xl tracking-wide text-accent">
                BIBLIOTECA DE EXERCÍCIOS
              </h3>
            </div>
            <p className="font-inter text-sm sm:text-base text-muted-foreground leading-relaxed">
              Acesso completo a vídeos demonstrativos e técnicas para executar cada movimento com perfeição e segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
