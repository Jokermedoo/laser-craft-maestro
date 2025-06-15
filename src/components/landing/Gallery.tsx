
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png", alt: "عمل ليزر 1" },
  { src: "/lovable-uploads/4a29ef11-1a3b-486a-8488-842236968ec9.png", alt: "عمل ليزر 2" },
  { src: "/lovable-uploads/5d4f3b7d-65b1-4f59-99dd-48df65451995.png", alt: "عمل ليزر 3" },
  { src: "/lovable-uploads/6ac486da-2b00-4592-a16f-71b3e942dae6.png", alt: "عمل ليزر 4" },
  { src: "/lovable-uploads/7c701768-3017-4860-b6f3-18600d898517.png", alt: "عمل ليزر 5" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">بعض أعمالنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden border-2 border-border rounded-xl group relative aspect-square">
              <CardContent className="p-0 h-full">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </CardContent>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-lg font-semibold text-center">{image.alt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
