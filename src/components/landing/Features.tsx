
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, Heart, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "دقة متناهية",
    description: "نستخدم أحدث تقنيات الليزر لضمان الحصول على نتائج دقيقة ومثالية في كل مرة."
  },
  {
    icon: Zap,
    title: "سرعة في التنفيذ",
    description: "فريق عمل محترف وأدوات متطورة تضمن تسليم مشاريعكم في الوقت المحدد."
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "نقدم ضمان شامل على جميع أعمالنا مع خدمة ما بعد البيع المتميزة."
  },
  {
    icon: Heart,
    title: "خدمة عملاء مميزة",
    description: "فريق دعم متاح دائماً لمساعدتكم ومتابعة مشاريعكم خطوة بخطوة."
  },
  {
    icon: Clock,
    title: "توفر على مدار الساعة",
    description: "يمكنكم التواصل معنا في أي وقت عبر واتساب للاستشارات والطلبات العاجلة."
  },
  {
    icon: Star,
    title: "تصاميم حصرية",
    description: "نبتكر تصاميم فريدة ومخصصة تناسب احتياجاتكم وتعكس هويتكم المميزة."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">لماذا تختار المعز؟</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            نتميز بخدمات عالية الجودة ومميزات فريدة تجعلنا الخيار الأول لعملائنا
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ما يميزنا عن المنافسين
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-foreground">أسعار تنافسية</span>
            </div>
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-foreground">خبرة محلية</span>
            </div>
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-foreground">تقنيات حديثة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
