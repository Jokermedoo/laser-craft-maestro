
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Check, Phone } from 'lucide-react';

const pricingPlans = [
  {
    category: "النقش والحفر",
    items: [
      { service: "نقش الأسماء على الخشب", price: "من 50 جنيه", description: "نقش اسم واحد على قطعة خشب صغيرة" },
      { service: "حفر شعار على الأكريليك", price: "من 100 جنيه", description: "حفر شعار بسيط على لوحة أكريليك" },
      { service: "نقش على الجلد", price: "من 75 جنيه", description: "نقش على قطع الجلد الصغيرة" }
    ]
  },
  {
    category: "التقطيع والتشكيل",
    items: [
      { service: "تقطيع الخشب", price: "من 25 جنيه/متر", description: "تقطيع الخشب حسب التصميم المطلوب" },
      { service: "تقطيع الأكريليك", price: "من 30 جنيه/متر", description: "تقطيع دقيق للأكريليك بحواف ناعمة" },
      { service: "تشكيل ديكورات", price: "حسب التصميم", description: "قطع ديكور مخصصة حسب الطلب" }
    ]
  },
  {
    category: "المشاريع الخاصة",
    items: [
      { service: "لافتات الدعاية", price: "من 500 جنيه", description: "لافتات احترافية للمحلات والشركات" },
      { service: "الهدايا المخصصة", price: "من 150 جنيه", description: "هدايا فريدة بالأسماء والتواريخ" },
      { service: "التحف والأنتيكات", price: "حسب التعقيد", description: "قطع فنية وتحف مخصصة" }
    ]
  }
];

const features = [
  "استشارة تصميم مجانية",
  "ضمان الجودة لمدة شهر",
  "إمكانية رؤية عينة قبل التنفيذ",
  "دقة عالية في التنفيذ",
  "استخدام خامات عالية الجودة",
  "التزام بالمواعيد المحددة"
];

const Pricing = () => {
  const whatsappNumber = "201021911335";

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">أسعارنا</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            أسعار تنافسية مع جودة استثنائية - اطلب عرض سعر مخصص لمشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="bg-background border-2 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  {plan.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-border/50 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">{item.service}</h4>
                      <span className="text-primary font-bold text-lg whitespace-nowrap mr-2">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background border-2 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                ما نقدمه مع كل خدمة
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary ml-3 flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-foreground/80 mb-6">
                  الأسعار المذكورة إرشادية وقد تختلف حسب حجم وتعقيد المشروع
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Phone className="ml-2 h-5 w-5" />
                    احصل على عرض سعر مخصص
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
