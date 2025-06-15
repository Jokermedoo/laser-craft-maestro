
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionHeader from '@/components/shared/SectionHeader';
import GalleryCard from '@/components/gallery/GalleryCard';
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';
import { Button } from '@/components/ui/button';

const GalleryPageContent = () => {
  const { companyInfo } = useCompany();
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'نقش', 'تقطيع', 'دروع', 'لوحات', 'خط عربي', 'هدايا'];

  const galleryItems = [
    {
      image: "/lovable-uploads/65900846-b6de-40b4-b288-b1b78c510879.png",
      title: "نقش فني على الخشب الطبيعي",
      description: "أعمال نقش متقنة وفنية على الخشب الطبيعي بتصاميم مخصصة",
      category: "نقش"
    },
    {
      image: "/lovable-uploads/a8b96219-ecf0-4f41-bfbd-bf9154d6ae6d.png", 
      title: "تقطيع دقيق للأكريليك",
      description: "تقطيع وتشكيل الأكريليك بدقة عالية وحواف نظيفة",
      category: "تقطيع"
    },
    {
      image: "/lovable-uploads/63cf263a-71e9-4a5d-90d5-96cb9490e8ab.png",
      title: "دروع تذكارية مميزة", 
      description: "دروع وميداليات تذكارية بتصاميم احترافية للمناسبات",
      category: "دروع"
    },
    {
      image: "/lovable-uploads/7e58da88-2f6a-4421-be55-2dae8f38a583.png",
      title: "لوحات إعلانية احترافية",
      description: "لوحات دعاية وإعلان عالية الجودة للشركات والمحلات",
      category: "لوحات"
    },
    {
      image: "/lovable-uploads/0c4893fc-ccab-42f0-83eb-17b007cc808f.png",
      title: "خط عربي بالليزر",
      description: "نقش الخط العربي بدقة متناهية وجمال فني رائع",
      category: "خط عربي"
    },
    // إضافة المزيد من الأعمال
    {
      image: "/lovable-uploads/65900846-b6de-40b4-b288-b1b78c510879.png",
      title: "صناديق هدايا مخصصة",
      description: "صناديق هدايا منقوشة بالليزر للمناسبات الخاصة",
      category: "هدايا"
    },
    {
      image: "/lovable-uploads/a8b96219-ecf0-4f41-bfbd-bf9154d6ae6d.png",
      title: "تقطيع أشكال معقدة",
      description: "تقطيع أشكال هندسية معقدة بدقة فائقة",
      category: "تقطيع"
    },
    {
      image: "/lovable-uploads/63cf263a-71e9-4a5d-90d5-96cb9490e8ab.png",
      title: "كؤوس وجوائز",
      description: "كؤوس وجوائز للبطولات والمسابقات",
      category: "دروع"
    }
  ];

  const filteredItems = selectedCategory === 'الكل' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar whatsappNumber={companyInfo.whatsapp} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="container mx-auto px-6">
          <SectionHeader 
            subtitle="معرض أعمالنا"
            title="مجموعة من أفضل إنجازاتنا"
            description="استكشف مجموعة متنوعة من أعمالنا المميزة بتقنيات الليزر المتطورة"
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative pb-10 z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                    : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                } font-bold transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative pb-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <GalleryCard 
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">لا توجد أعمال في هذه الفئة حالياً</p>
            </div>
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
