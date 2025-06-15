
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, FileImage, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "تواصل معنا",
    description: "تواصل معنا عبر واتساب أو الهاتف وأرسل لنا فكرتك أو تصميمك",
    step: "1"
  },
  {
    icon: FileImage, 
    title: "مراجعة التصميم",
    description: "نراجع التصميم معك ونقدم الاستشارة المناسبة والسعر المناسب",
    step: "2"
  },
  {
    icon: Zap,
    title: "التنفيذ السريع", 
    description: "نبدأ العمل فوراً باستخدام أحدث تقنيات الليزر والخامات عالية الجودة",
    step: "3"
  },
  {
    icon: CheckCircle,
    title: "التسليم والضمان",
    description: "نسلم العمل في الموعد المحدد مع ضمان كامل على الجودة",
    step: "4"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">كيف نعمل؟</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            عملية بسيطة وسريعة لتحويل أفكارك إلى واقع ملموس
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-background border-border hover-lift relative">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                
                <step.icon className="h-12 w-12 text-primary mx-auto mb-4 mt-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
