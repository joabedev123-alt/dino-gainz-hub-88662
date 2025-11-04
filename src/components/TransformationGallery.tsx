import { useEffect, useState } from "react";
import transformation1 from "@/assets/transformation-new-1.png";
import transformation2 from "@/assets/transformation-new-2.png";
import transformation3 from "@/assets/transformation-new-3.jpg";
import transformation4 from "@/assets/transformation-new-4.png";
import transformation5 from "@/assets/transformation-new-5.png";
import transformation6 from "@/assets/imagem 2/001.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const transformations = [
  { image: transformation1, title: "ANTES E AGORA" },
  { image: transformation2, title: "ANTES E AGORA" },
  { image: transformation3, title: "ANTES E AGORA" },
  { image: transformation4, title: "ANTES E AGORA" },
  { image: transformation5, title: "ANTES E AGORA" },
  { image: transformation6, title: "ANTES E AGORA" },
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
                <div className="group relative overflow-hidden rounded-lg animate-fade-up">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
