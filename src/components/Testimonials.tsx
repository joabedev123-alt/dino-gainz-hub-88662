import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Silva",
    text: "Em 4 meses consegui resultados que nunca imaginei. O protocolo é personalizado de verdade, não é aquele plano genérico. O acompanhamento faz toda diferença.",
    rating: 5,
  },
  {
    name: "Felipe Mendes",
    text: "Melhor investimento que já fiz na minha saúde. Perdi 12kg mantendo massa muscular e aprendi a treinar de verdade. Equipe totalmente presente.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    text: "Já tentei várias academias e personal trainers, mas aqui é diferente. O plano se adapta à minha rotina e os resultados aparecem mês a mês.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 max-w-4xl mx-auto leading-tight">
            MÉTODO TESTADO, RESULTADOS REAIS.<br />
            VEJA O QUE OS ALUNOS TÊM A DIZER.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-inter text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-bebas text-accent text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-inter font-semibold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
