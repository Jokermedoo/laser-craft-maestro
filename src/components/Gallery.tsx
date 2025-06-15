
import React from 'react';
import GalleryCard from './gallery/GalleryCard';

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
            <GalleryCard 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
