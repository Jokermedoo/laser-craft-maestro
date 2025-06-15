
import React from 'react';
import { Clock, Shield, Star, Truck } from 'lucide-react';
import FeatureCard from './features/FeatureCard';

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
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
