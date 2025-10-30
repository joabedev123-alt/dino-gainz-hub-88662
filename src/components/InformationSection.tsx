import { Info } from "lucide-react";

export const InformationSection = () => {
  const informations = [
    "PAGAMENTO É ADIANTADO ATÉ A INÍCIO DA PRIMEIRA AULA",
    "NO CASO DE DOIS CLIENTES NO MESMO HORÁRIO, SERÁ CONCEDIDO 20% DE DESCONTO",
    "EM CASO DE VIAGEM DO CLIENTE, A GARANTIA DO HORÁRIO OCORRE MEDIANTE O PAGAMENTO, CASO CONTRÁRIO, O HORÁRIO FICARÁ DISPONÍVEL",
    "O DIA DE PAGAMENTO É ACORDADO ENTRE AS PARTES"
  ];

  return (
    <section id="informations" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4">
            INFORMAÇÕES
          </h2>
        </div>

        <div className="space-y-6">
          {informations.map((info, index) => (
            <div 
              key={index}
              className="bg-card border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-all duration-300 animate-fade-up flex items-start gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                <Info className="w-5 h-5 text-accent" />
              </div>
              <p className="font-inter text-muted-foreground leading-relaxed flex-1">
                {info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
