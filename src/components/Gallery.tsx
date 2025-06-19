
import React, { useState, useMemo } from 'react';
import GalleryCard from './gallery/GalleryCard';
import { galleryData, galleryCategories } from '@/data/gallery';
import { Button } from '@/components/ui/button';
import AnimatedContainer from './enhanced/AnimatedContainer';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredItems = useMemo(() => {
    return selectedCategory === 'الكل' 
      ? galleryData 
      : galleryData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="gallery" className="relative py-20 sm:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedContainer type="fade" delay={0.1}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-yellow-400 font-semibold text-base sm:text-lg mb-4 block">معرض الأعمال</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">أحدث أعمالنا</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              شاهد مجموعة من أفضل أعمالنا المنجزة بأحدث تقنيات الليزر
            </p>
          </div>
        </AnimatedContainer>

        <AnimatedContainer type="slide" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
            {galleryCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg scale-105'
                    : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                } font-bold transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-2`}
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <AnimatedContainer 
              key={item.id} 
              type="scale" 
              delay={0.3 + (index * 0.1)}
            >
              <GalleryCard 
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            </AnimatedContainer>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <AnimatedContainer type="fade" delay={0.5}>
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">لا توجد أعمال في هذه الفئة حالياً</p>
            </div>
          </AnimatedContainer>
        )}
      </div>
    </section>
  );
};

export default Gallery;
