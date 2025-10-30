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
  { image: transformation1, title: "ANTES E AGORA" },
  { image: transformation2, title: "ANTES E AGORA" },
  { image: transformation3, title: "ANTES E AGORA" },
  { image: transformation4, title: "ANTES E AGORA" },
  { image: transformation5, title: "ANTES E AGORA" },
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
    <section id="transformations" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {transformations.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-lg animate-fade-up">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-[500px] object-contain bg-secondary/20 transition-transform duration-500 group-hover:scale-105"
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
