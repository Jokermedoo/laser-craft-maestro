
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Palette, Settings, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "تواصل معنا",
    description: "أرسل لنا فكرتك أو التصميم المطلوب عبر واتساب أو اتصل بنا مباشرة لمناقشة التفاصيل",
    step: "01"
  },
  {
    icon: Palette,
    title: "التصميم والتطوير",
    description: "فريقنا يعمل على تطوير التصميم وتحسينه ليناسب تقنية الليزر والخامة المختارة",
    step: "02"
  },
  {
    icon: Settings,
    title: "التنفيذ والإنتاج",
    description: "نبدأ في تنفيذ المشروع باستخدام أحدث ماكينات الليزر مع مراقبة دقيقة للجودة",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "التسليم والضمان",
    description: "نسلمك المنتج النهائي مع ضمان الجودة ومتابعة ما بعد البيع لضمان رضاك التام",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">كيف نعمل؟</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            عملية بسيطة وواضحة من الفكرة إلى التسليم النهائي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-2 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 relative">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 right-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                
                <div className="flex justify-center mb-4 mt-2">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              مستعد لبدء مشروعك؟
            </h3>
            <p className="text-foreground/80 mb-6">
              تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك القادم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/201021911335"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <MessageSquare className="ml-2 h-5 w-5" />
                ابدأ الآن عبر واتساب
              </a>
              <a
                href="tel:+201021911335"
                className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                اتصل بنا مباشرة
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
