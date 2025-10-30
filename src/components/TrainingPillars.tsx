import { Target, Eye, Shield, Heart } from "lucide-react";

export const TrainingPillars = () => {
  const pillars = [
    {
      icon: Target,
      title: "TREINO FOCADO NO OBJETIVO PRINCIPAL",
      description: "Cada exercício é planejado estrategicamente para alcançar suas metas específicas"
    },
    {
      icon: Eye,
      title: "CONSCIÊNCIA CORPORAL",
      description: "Desenvolva conexão mente-músculo e entenda cada movimento do seu corpo"
    },
    {
      icon: Shield,
      title: "SEGURANÇA NA EXECUÇÃO DOS EXERCÍCIOS",
      description: "Técnica perfeita e execução segura em todos os movimentos"
    },
    {
      icon: Heart,
      title: "BEM ESTAR E EMAGRECIMENTO",
      description: "Resultados sustentáveis que transformam seu corpo e sua vida"
    }
  ];

  return (
    <section id="pillars" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4">
            PILARES DO TREINAMENTO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-card border border-accent/30 rounded-lg p-8 hover:border-accent/60 transition-all duration-300 hover:shadow-lg animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bebas text-2xl tracking-wide text-accent">
                  {pillar.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
