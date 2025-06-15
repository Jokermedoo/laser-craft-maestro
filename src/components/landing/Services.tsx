
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Package, Trophy, Palette } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: "النقش بالليزر",
    description: "نقش دقيق على جميع أنواع الخامات بأعلى جودة وأدق التفاصيل مع ضمان النتائج المثالية"
  },
  {
    icon: Package,
    title: "التقطيع بالليزر", 
    description: "تقطيع الخامات بدقة متناهية وحواف نظيفة ومثالية للمشاريع الاحترافية"
  },
  {
    icon: Trophy,
    title: "الدروع والميداليات",
    description: "تصنيع دروع وميداليات تذكارية مخصصة للمناسبات والإنجازات بتصاميم فريدة"
  },
  {
    icon: Palette,
    title: "الرسم والحفر",
    description: "رسم وحفر التصاميم المعقدة والفنية بأحدث تقنيات الليزر عالية الدقة"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6">خدماتنا المتميزة</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات الليزر المتخصصة بأعلى معايير الجودة العالمية
            وأحدث التقنيات في عالم النقش والحفر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover-lift group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
