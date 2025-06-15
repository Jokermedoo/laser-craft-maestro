
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      image: "/lovable-uploads/65900846-b6de-40b4-b288-b1b78c510879.png",
      title: "نقش فني على الخشب",
      description: "أعمال نقش متقنة وفنية على الخشب الطبيعي",
      category: "نقش"
    },
    {
      image: "/lovable-uploads/a8b96219-ecf0-4f41-bfbd-bf9154d6ae6d.png", 
      title: "تقطيع دقيق للأكريليك",
      description: "تقطيع وتشكيل الأكريليك بدقة عالية",
      category: "تقطيع"
    },
    {
      image: "/lovable-uploads/63cf263a-71e9-4a5d-90d5-96cb9490e8ab.png",
      title: "دروع تذكارية مميزة", 
      description: "دروع وميداليات تذكارية بتصاميم احترافية",
      category: "دروع"
    },
    {
      image: "/lovable-uploads/7e58da88-2f6a-4421-be55-2dae8f38a583.png",
      title: "لوحات إعلانية احترافية",
      description: "لوحات دعاية وإعلان عالية الجودة",
      category: "لوحات"
    },
    {
      image: "/lovable-uploads/0c4893fc-ccab-42f0-83eb-17b007cc808f.png",
      title: "خط عربي بالليزر",
      description: "نقش الخط العربي بدقة متناهية",
      category: "خط عربي"
    }
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-yellow-400 font-semibold text-base sm:text-lg mb-4 block">معرض الأعمال</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">أحدث أعمالنا</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            شاهد مجموعة من أفضل أعمالنا المنجزة بأحدث تقنيات الليزر
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="h-12 w-12 text-white bg-yellow-400/20 rounded-full p-3 backdrop-blur-sm" />
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 text-base sm:text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
