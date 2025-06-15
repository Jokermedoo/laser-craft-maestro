
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  { src: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png", alt: "مشاريع ليزر متنوعة" },
  { src: "/lovable-uploads/4a29ef11-1a3b-486a-8488-842236968ec9.png", alt: "درع خشبي مخصص" },
  { src: "/lovable-uploads/5d4f3b7d-65b1-4f59-99dd-48df65451995.png", alt: "صناديق هدايا بالليزر" },
  { src: "/lovable-uploads/6ac486da-2b00-4592-a16f-71b3e942dae6.png", alt: "قطع ديكور أكريليك" },
  { src: "/lovable-uploads/7c701768-3017-4860-b6f3-18600d898517.png", alt: "حفر على الخشب" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">بعض أعمالنا</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-2 border-border rounded-xl group relative aspect-square">
                    <CardContent className="p-0 h-full flex items-center justify-center bg-card">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </CardContent>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <p className="text-white text-lg font-semibold text-center">{image.alt}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-foreground border-foreground/50 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="text-foreground border-foreground/50 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
