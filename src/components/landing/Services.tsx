
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Laser, Package, Trophy, Palette } from 'lucide-react';

const services = [
  {
    icon: Laser,
    title: "النقش بالليزر",
    description: "نقش دقيق على جميع أنواع الخامات بأعلى جودة وأدق التفاصيل"
  },
  {
    icon: Package,
    title: "التقطيع بالليزر", 
    description: "تقطيع الخامات بدقة متناهية وحواف نظيفة ومثالية"
  },
  {
    icon: Trophy,
    title: "الدروع والميداليات",
    description: "تصنيع دروع وميداليات تذكارية للمناسبات والإنجازات"
  },
  {
    icon: Palette,
    title: "الرسم والحفر",
    description: "رسم وحفر التصاميم المعقدة بأحدث تقنيات الليزر"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">خدماتنا</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات الليزر المتخصصة بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover-lift">
              <CardContent className="p-6 text-center">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
