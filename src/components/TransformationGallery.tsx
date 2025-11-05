import { useEffect, useState } from "react";
import { Star } from "lucide-react";
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
    rating: 5
  },
  { 
    image: transformation2, 
    title: "ANTES E AGORA",
    comment: "Evolução real! O protocolo personalizado me ajudou a mudar corpo e mente. Hoje treino com prazer e vejo resultado de verdade",
    rating: 5
  },
  { 
    image: transformation3, 
    title: "ANTES E AGORA",
    comment: "Melhor investimento que já fiz na minha saúde. Os resultados apareceram rápido e de forma saudável. Profissional excelente!",
    rating: 5
  },
  { 
    image: transformation4, 
    title: "ANTES E AGORA",
    comment: "Não acreditava que seria possível transformar meu corpo dessa forma. Anderson me mostrou que com dedicação tudo é possível!",
    rating: 5
  },
  { 
    image: transformation5, 
    title: "ANTES E AGORA",
    comment: "Aprendi a treinar de verdade e a ter disciplina. Resultados que vão além da estética, ganhei qualidade de vida completa!",
    rating: 5
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
                <div className="group relative overflow-hidden rounded-lg animate-fade-up bg-card border border-border hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6 bg-gradient-to-t from-black/95 via-black/80 to-black/60 min-h-[100px] sm:min-h-[110px] md:min-h-[120px] flex flex-col justify-end">
                    <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                      <p className="font-inter text-[11px] xs:text-xs sm:text-sm md:text-base text-white leading-relaxed line-clamp-3 sm:line-clamp-none">
                        "{item.comment}"
                      </p>
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-accent text-accent flex-shrink-0" />
                        ))}
                      </div>
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
