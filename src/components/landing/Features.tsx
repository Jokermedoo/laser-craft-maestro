
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Star, Truck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "سرعة في التنفيذ",
    description: "نلتزم بالمواعيد المحددة ونسلم الأعمال في الوقت المناسب"
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "ضمان شامل على جميع الأعمال مع إمكانية الإعادة في حالة عدم الرضا"
  },
  {
    icon: Star,
    title: "خبرة متقدمة",
    description: "أكثر من 5 سنوات من الخبرة في مجال خدمات الليزر"
  },
  {
    icon: Truck,
    title: "خدمة التوصيل",
    description: "نوصل أعمالكم إلى أي مكان داخل محافظة الأقصر مجاناً"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">لماذا تختارنا؟</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            نتميز بمجموعة من المزايا التي تجعلنا الخيار الأول لخدمات الليزر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover-lift text-center">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
