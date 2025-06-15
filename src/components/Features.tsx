
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Star, Truck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "سرعة في التنفيذ",
      description: "نلتزم بالمواعيد المحددة ونسلم الأعمال في الوقت المناسب",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "ضمان شامل على جميع الأعمال مع إمكانية الإعادة",
      color: "text-green-500"
    },
    {
      icon: Star,
      title: "خبرة متقدمة",
      description: "أكثر من 5 سنوات من الخبرة المتخصصة في مجال الليزر",
      color: "text-yellow-500"
    },
    {
      icon: Truck,
      title: "خدمة التوصيل",
      description: "نوصل أعمالكم إلى أي مكان داخل محافظة الأقصر مجاناً",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="relative py-32 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-yellow-400 font-semibold text-lg mb-4 block">مميزاتنا</span>
          <h2 className="text-5xl font-bold text-white mb-8">لماذا تختارنا؟</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نتميز بمجموعة من المزايا الفريدة التي تجعلنا الخيار الأول
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700 text-center hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-2xl bg-slate-700/50 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/20 transition-all duration-500">
                    <IconComponent className={`h-10 w-10 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
