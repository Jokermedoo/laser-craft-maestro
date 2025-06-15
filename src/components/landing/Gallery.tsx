
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
    title: "نقش على الخشب",
    description: "أعمال نقش متقنة على الخشب"
  },
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png", 
    title: "تقطيع الأكريليك",
    description: "تقطيع دقيق للأكريليك"
  },
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
    title: "دروع تذكارية", 
    description: "دروع وميداليات مخصصة"
  },
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
    title: "لوحات إعلانية",
    description: "لوحات دعاية واعلان مميزة"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">معرض أعمالنا</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            شاهد مجموعة من أفضل أعمالنا المنجزة بأحدث تقنيات الليزر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="bg-background border-border hover-lift overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
