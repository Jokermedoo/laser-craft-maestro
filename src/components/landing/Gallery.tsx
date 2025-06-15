
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Star } from 'lucide-react';

const galleryItems = [
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
    title: "نقش فني على الخشب",
    description: "أعمال نقش متقنة وفنية على الخشب الطبيعي",
    category: "نقش خشبي"
  },
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png", 
    title: "تقطيع دقيق للأكريليك",
    description: "تقطيع وتشكيل الأكريليك بدقة عالية",
    category: "أكريليك"
  },
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
    title: "دروع تذكارية مميزة", 
    description: "دروع وميداليات تذكارية بتصاميم احترافية",
    category: "دروع"
  },
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
    title: "لوحات إعلانية احترافية",
    description: "لوحات دعاية وإعلان عالية الجودة",
    category: "إعلانات"
  },
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
    title: "هدايا شخصية مخصصة",
    description: "هدايا مخصصة بأسماء وتصاميم فريدة",
    category: "هدايا"
  },
  {
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
    title: "أعمال معدنية دقيقة",
    description: "نقش وحفر على المعادن بدقة متناهية",
    category: "معادن"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6">معرض أعمالنا المتميزة</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            شاهد مجموعة من أفضل أعمالنا المنجزة بأحدث تقنيات الليزر وأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="bg-card border-border hover-lift overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                </div>
                <h3 className="font-bold text-foreground mb-3 text-xl">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
