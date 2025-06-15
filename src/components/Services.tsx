
import React from 'react';
import { Zap, Package, Trophy, Palette } from 'lucide-react';
import ServiceCard from './services/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "النقش بالليزر",
      description: "نقش دقيق على جميع أنواع الخامات بأعلى جودة وأدق التفاصيل",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Package,
      title: "التقطيع بالليزر", 
      description: "تقطيع الخامات بدقة متناهية وحواف نظيفة ومثالية",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Trophy,
      title: "الدروع والميداليات",
      description: "تصنيع دروع وميداليات تذكارية مخصصة للمناسبات",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Palette,
      title: "الرسم والحفر",
      description: "رسم وحفر التصاميم المعقدة والفنية بأحدث تقنيات الليزر",
      gradient: "from-pink-400 to-red-500"
    }
  ];

  return (
    <section id="services" className="relative py-32 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-yellow-400 font-semibold text-lg mb-4 block">خدماتنا</span>
          <h2 className="text-5xl font-bold text-white mb-8">خدماتنا المتميزة</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات الليزر المتخصصة بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
