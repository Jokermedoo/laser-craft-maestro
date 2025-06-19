
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionHeader from '@/components/shared/SectionHeader';
import GalleryCard from '@/components/gallery/GalleryCard';
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';
import { Button } from '@/components/ui/button';
import { galleryData, galleryCategories } from '@/data/gallery';
import AnimatedContainer from '@/components/enhanced/AnimatedContainer';

const GalleryPageContent = () => {
  const { companyInfo } = useCompany();
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredItems = useMemo(() => {
    return selectedCategory === 'الكل' 
      ? galleryData 
      : galleryData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar whatsappNumber={companyInfo.whatsapp} />
      
      {/* Hero Section */}
      <AnimatedContainer type="fade" delay={0.1}>
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 z-10">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeader 
              subtitle="معرض أعمالنا"
              title="مجموعة من أفضل إنجازاتنا"
              description="استكشف مجموعة متنوعة من أعمالنا المميزة بتقنيات الليزر المتطورة"
            />
          </div>
        </section>
      </AnimatedContainer>

      {/* Category Filter */}
      <AnimatedContainer type="slide" delay={0.2}>
        <section className="relative pb-8 sm:pb-10 z-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
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
          </div>
        </section>
      </AnimatedContainer>

      {/* Gallery Grid */}
      <section className="relative pb-16 sm:pb-20 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <AnimatedContainer 
                key={item.id} 
                type="scale" 
                delay={0.3 + (index * 0.05)}
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
              <div className="text-center py-16 sm:py-20">
                <p className="text-gray-400 text-lg sm:text-xl">لا توجد أعمال في هذه الفئة حالياً</p>
              </div>
            </AnimatedContainer>
          )}
        </div>
      </section>

      <Footer whatsappNumber={companyInfo.whatsapp} />
    </div>
  );
};

const GalleryPage = () => {
  return (
    <CompanyProvider>
      <GalleryPageContent />
    </CompanyProvider>
  );
};

export default GalleryPage;
