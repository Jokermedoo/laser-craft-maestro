
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare } from 'lucide-react';

const pricingPlans = [
  {
    name: "الباقة الأساسية",
    description: "مثالية للأفراد والمشاريع الصغيرة",
    features: [
      "نقش على قطعة واحدة",
      "تصميم بسيط مجاني",
      "خامة واحدة (خشب أو أكريليك)",
      "مقاس حتى 20×20 سم",
      "تسليم خلال 3 أيام"
    ],
    popular: false,
    cta: "ابدأ الآن"
  },
  {
    name: "الباقة المتوسطة",
    description: "الأنسب للشركات الناشئة والمحلات",
    features: [
      "نقش على 5 قطع",
      "تصميم متقدم مجاني",
      "خامتين مختلفتين",
      "مقاس حتى 40×40 سم",
      "تسليم خلال يومين",
      "خدمة عملاء مميزة"
    ],
    popular: true,
    cta: "الأكثر طلباً"
  },
  {
    name: "الباقة المتقدمة",
    description: "للشركات الكبيرة والمشاريع الضخمة",
    features: [
      "نقش غير محدود",
      "تصاميم حصرية متعددة",
      "جميع الخامات المتاحة",
      "أي مقاس مطلوب",
      "تسليم خلال 24 ساعة",
      "مدير حساب مخصص",
      "ضمان ممتد",
      "خصومات على الطلبات المستقبلية"
    ],
    popular: false,
    cta: "تواصل معنا"
  }
];

const Pricing = () => {
  const whatsappNumber = "201021911335";

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">باقات أسعارنا</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            اختر الباقة التي تناسب احتياجاتك وميزانيتك - جميع الأسعار قابلة للتفاوض
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-background border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border hover:border-primary'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    الأكثر شيوعاً
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/70">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 rtl:space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-background border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=أريد الاستفسار عن ${plan.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="ml-2 h-4 w-4" />
                    {plan.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              أسعار خاصة ومرونة في التعامل
            </h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              نحن نتفهم أن كل مشروع له ظروفه الخاصة، لذلك نقدم أسعاراً مرنة ومخصصة 
              تناسب ميزانيتكم. تواصلوا معنا للحصول على عرض سعر مفصل ومخصص لمشروعكم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=أريد عرض سعر مخصص لمشروعي`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="ml-2 h-5 w-5" />
                  احصل على عرض سعر مجاني
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="tel:+201021911335">
                  اتصل للاستفسار
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
