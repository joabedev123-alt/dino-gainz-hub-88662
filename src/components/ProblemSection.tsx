import { AlertCircle, Target, Users, TrendingUp, Clock, Zap } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      number: "1️⃣",
      icon: AlertCircle,
      text: "Você tá treinando firme, se dedicando de verdade, e mesmo assim o corpo não responde?",
      solution: "O problema não é esforço — é direção. Quando você tem o método certo, cada treino vira evolução."
    },
    {
      number: "2️⃣",
      icon: Target,
      text: "Já seguiu dieta achando que era a solução e no fim só se frustrou?",
      solution: "O corpo que você quer não vem de fórmula genérica. Vem de estratégia feita pra você, com base no seu shape e objetivo."
    },
    {
      number: "3️⃣",
      icon: Users,
      text: "Tá tentando fazer tudo sozinho achando que vai dar resultado?",
      solution: "Sem acompanhamento, até quem tem foco se perde. Com suporte certo, a constância vira resultado."
    },
    {
      number: "4️⃣",
      icon: TrendingUp,
      text: "Se olha no espelho e sente que o físico não muda, mesmo se esforçando todo dia?",
      solution: "Então o plano precisa mudar. Não existe estagnação pra quem segue uma estratégia com ajustes certos."
    },
    {
      number: "5️⃣",
      icon: Clock,
      text: "Já sentiu que tá fazendo tudo certo, mas o resultado não vem na velocidade que queria?",
      solution: "Não é só treino — é quem você adia ser. Meu método cria hábitos e disciplina."
    },
    {
      number: "6️⃣",
      icon: Zap,
      text: "Já parou pra pensar quanto tempo e energia você tá desperdiçando tentando do seu jeito?",
      solution: "Cada mês sem resultado é investimento jogado fora. Mas com acompanhamento certo, cada treino se paga no espelho."
    }
  ];

  return (
    <section id="problems" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-up">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4">
            VOCÊ SE IDENTIFICA COM ISSO?
          </h2>
        </div>
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card border border-accent/30 rounded-lg p-6 sm:p-8 md:p-10 hover:border-accent/60 transition-all duration-300 hover:shadow-lg animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0 flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl">{problem.number}</div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <p className="font-inter text-base sm:text-lg md:text-xl text-foreground leading-relaxed font-medium">
                    {problem.text}
                  </p>
                  <div className="flex items-center gap-2 text-accent/60">
                    <div className="h-px flex-1 bg-accent/30"></div>
                  </div>
                  <p className="font-inter text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    {problem.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div 
          className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/40 rounded-lg p-6 sm:p-8 md:p-10 animate-fade-up group hover:border-accent/60 transition-all duration-300 hover:shadow-xl"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="text-3xl sm:text-4xl flex-shrink-0">🔥</div>
            <div className="flex-1">
              <h3 className="font-bebas text-xl sm:text-2xl md:text-3xl tracking-wide text-accent mb-3 sm:mb-4">
                Fechamento:
              </h3>
              <p className="font-inter text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
                O shape que você sonha não é impossível — só tá faltando o método AST, guiado por resultado, disciplina e estratégia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

