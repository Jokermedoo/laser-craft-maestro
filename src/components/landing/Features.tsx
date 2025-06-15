
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Star, Truck, Phone, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "سرعة في التنفيذ",
    description: "نلتزم بالمواعيد المحددة ونسلم الأعمال في الوقت المناسب دون تأخير"
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "ضمان شامل على جميع الأعمال مع إمكانية الإعادة في حالة عدم الرضا التام"
  },
  {
    icon: Star,
    title: "خبرة متقدمة",
    description: "أكثر من 5 سنوات من الخبرة المتخصصة في مجال خدمات الليزر المتقدمة"
  },
  {
    icon: Truck,
    title: "خدمة التوصيل",
    description: "نوصل أعمالكم إلى أي مكان داخل محافظة الأقصر مجاناً وبأمان"
  },
  {
    icon: Phone,
    title: "دعم فني مستمر",
    description: "فريق دعم فني متاح 24/7 لتقديم المساعدة والاستشارات المجانية"
  },
  {
    icon: Award,
    title: "أسعار تنافسية",
    description: "أفضل الأسعار في السوق مع الحفاظ على أعلى مستويات الجودة"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6">لماذا تختارنا؟</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            نتميز بمجموعة من المزايا الفريدة التي تجعلنا الخيار الأول والأمثل لخدمات الليزر في المنطقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-background border-border hover-lift text-center group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">{feature.description}</p>
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
