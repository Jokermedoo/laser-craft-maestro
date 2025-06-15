
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Package, Trophy, Palette } from 'lucide-react';

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
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1">
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-r ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
