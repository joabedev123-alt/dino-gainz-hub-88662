import andersonChampion from "@/assets/anderson-champion-new.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import { Dumbbell, Library } from "lucide-react";

export const PotentialSection = () => {
  return (
    <section id="potential" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4">
            DESTRAVE O SEU POTENCIAL
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Você tem força de vontade. Com orientação certa, os resultados vêm.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 max-w-xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-lg group animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <img 
              src={andersonChampion} 
              alt="Anderson Silva Campeão" 
              className="w-full h-[500px] object-contain bg-secondary transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-card border border-accent/30 rounded-lg p-8 hover:border-accent/60 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bebas text-2xl tracking-wide text-accent">
                VOCÊ É RECONHECIDO
              </h3>
            </div>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Seu progresso é celebrado. Aqui você faz parte de um time que valoriza cada vitória e te mantém motivado sempre.
            </p>
          </div>

          <div className="bg-card border border-accent/30 rounded-lg p-8 hover:border-accent/60 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Library className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bebas text-2xl tracking-wide text-accent">
                BIBLIOTECA DE EXERCÍCIOS
              </h3>
            </div>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Acesso completo a vídeos demonstrativos e técnicas para executar cada movimento com perfeição e segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
