import andersonChampion from "@/assets/anderson-champion.jpg";

export const AppProtocol = () => {
  return (
    <section id="sobre" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-lg group animate-fade-up">
            <img 
              src={andersonChampion} 
              alt="Anderson Silva - Ganho de Massa e Definição" 
              className="w-full h-[500px] object-contain bg-secondary transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              SOBRE ANDERSON SILVA
            </h2>
            <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>
                Personal trainer certificado com anos de experiência em transformação corporal e desenvolvimento atlético. 
                Especializado em treino de força, hipertrofia e condicionamento físico.
              </p>
              <p>
                Minha metodologia combina treino personalizado, nutrição estratégica e acompanhamento constante 
                para garantir que você alcance seus objetivos de forma sustentável e definitiva.
              </p>
              <p>
                Não é só sobre levantar peso ou seguir dieta. É sobre criar um estilo de vida que te leve 
                ao seu melhor físico e mental, com resultados reais e duradouros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
