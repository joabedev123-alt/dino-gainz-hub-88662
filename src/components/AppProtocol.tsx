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
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              SOBRE ANDERSON SILVA
            </h2>
            <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>
                Sou Anderson Silva, treinador esportivo, natural de Manaus, Amazonas, com mais de 10 anos de experiência na área. Sou atleta há mais de 6 anos, com foco principalmente no fisiculturismo. Minha paixão pela saúde e pelo condicionamento físico me levou a desenvolver técnicas personalizadas de treinamento, combinando minha experiência como atleta e treinador para ajudar meus clientes a alcançarem seus objetivos de forma eficaz e sustentável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
