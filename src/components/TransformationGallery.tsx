import { useEffect, useState } from "react";
import transformation1 from "@/assets/transformation-new-1.png";
import transformation2 from "@/assets/transformation-new-2.png";
import transformation3 from "@/assets/transformation-new-3.jpg";
import transformation4 from "@/assets/transformation-new-4.png";
import transformation5 from "@/assets/transformation-new-5.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const transformations = [
  { 
    image: transformation1, 
    title: "ANTES E AGORA",
    comment: "Em 3 meses consegui resultados que nunca imaginei! O acompanhamento do Anderson fez toda diferença. Recomendo demais!",
    clientName: "Carlos Roberto"
  },
  { 
    image: transformation2, 
    title: "ANTES E AGORA",
    comment: "Perdi 15kg mantendo massa muscular. O protocolo personalizado funcionou perfeitamente para mim. Muito satisfeito!",
    clientName: "Fernando Lima"
  },
  { 
    image: transformation3, 
    title: "ANTES E AGORA",
    comment: "Melhor investimento que já fiz na minha saúde. Os resultados apareceram rápido e de forma saudável. Profissional excelente!",
    clientName: "Marcos Silva"
  },
  { 
    image: transformation4, 
    title: "ANTES E AGORA",
    comment: "Não acreditava que seria possível transformar meu corpo dessa forma. Anderson me mostrou que com dedicação tudo é possível!",
    clientName: "Rafael Santos"
  },
  { 
    image: transformation5, 
    title: "ANTES E AGORA",
    comment: "Aprendi a treinar de verdade e a ter disciplina. Resultados que vão além da estética, ganhei qualidade de vida completa!",
    clientName: "Lucas Oliveira"
  },
];

export const TransformationGallery = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="transformations" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {transformations.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-lg animate-fade-up bg-card border border-border hover:border-accent/50 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent absolute bottom-0 left-0 right-0">
                    <div className="space-y-2 sm:space-y-3">
                      <p className="font-inter text-xs sm:text-sm md:text-base text-white leading-relaxed">
                        "{item.comment}"
                      </p>
                      <p className="font-bebas text-sm sm:text-base md:text-lg text-accent tracking-wide">
                        — {item.clientName}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
