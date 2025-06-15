
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Palette, Cog, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: "التواصل والاستشارة",
    description: "تواصل معنا عبر واتساب أو الهاتف وشاركنا فكرتك. فريقنا سيقدم لك الاستشارة المجانية ويساعدك في تطوير التصميم.",
    details: [
      "مناقشة الفكرة والمتطلبات",
      "اختيار الخامة المناسبة",
      "تحديد الأبعاد والمواصفات",
      "عرض أمثلة لأعمال مشابهة"
    ],
    step: "01"
  },
  {
    icon: Palette,
    title: "التصميم والموافقة",
    description: "نحول فكرتك إلى تصميم احترافي ونرسله لك للمراجعة. يمكنك طلب التعديلات حتى تحصل على التصميم المثالي.",
    details: [
      "إنشاء التصميم الأولي",
      "مراجعة التصميم معك",
      "إجراء التعديلات المطلوبة",
      "الموافقة النهائية على التصميم"
    ],
    step: "02"
  },
  {
    icon: Cog,
    title: "التنفيذ والإنتاج",
    description: "نبدأ في تنفيذ مشروعك باستخدام أحدث تقنيات الليزر وأجود الخامات. نحرص على الدقة والجودة في كل تفصيلة.",
    details: [
      "إعداد الماكينة والإعدادات",
      "اختبار على عينة صغيرة",
      "تنفيذ المشروع بالكامل",
      "فحص الجودة والمراجعة"
    ],
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "التسليم والمتابعة",
    description: "نتواصل معك عند انتهاء العمل لتحديد موعد الاستلام. نقدم لك ضمان الجودة ونتابع رضاك عن الخدمة.",
    details: [
      "إشعارك بانتهاء العمل",
      "فحص المنتج معك عند الاستلام",
      "تقديم نصائح العناية والصيانة",
      "ضمان الجودة والمتابعة"
    ],
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">كيف نعمل</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            عملية بسيطة ومنظمة لضمان حصولك على أفضل النتائج
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-primary transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{step.step}</span>
                </div>
                
                <CardContent className="p-8 pt-20">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/20 p-3 rounded-full ml-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full ml-3 flex-shrink-0"></div>
                        <span className="text-foreground/70 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                مستعد لبدء مشروعك؟
              </h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                العملية بسيطة وسريعة. تواصل معنا اليوم ودعنا نحول فكرتك إلى واقع بأعلى مستويات الجودة والإتقان.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
