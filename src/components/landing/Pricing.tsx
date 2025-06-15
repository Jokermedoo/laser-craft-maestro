
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageSquare } from 'lucide-react';

const pricingPlans = [
  {
    name: "باقة البداية",
    price: "50",
    period: "للقطعة الواحدة",
    description: "مثالية للمشاريع الصغيرة والتجارب الأولى",
    features: [
      "نقش على قطعة واحدة",
      "خامة واحدة فقط", 
      "تصميم بسيط",
      "جودة عالية"
    ],
    buttonText: "اطلب الآن",
    popular: false
  },
  {
    name: "باقة المتقدمة", 
    price: "150",
    period: "للعشر قطع",
    description: "الأنسب للشركات والمشاريع المتوسطة",
    features: [
      "نقش على 10 قطع",
      "خامات متعددة",
      "تصميمات معقدة", 
      "خدمة التوصيل مجاناً",
      "ضمان شامل"
    ],
    buttonText: "الأكثر طلباً",
    popular: true
  },
  {
    name: "باقة الشركات",
    price: "حسب الطلب",
    period: "للكميات الكبيرة",
    description: "حلول شاملة للشركات والمؤسسات",
    features: [
      "كميات غير محدودة",
      "جميع أنواع الخامات",
      "تصميم مخصص",
      "خدمة عملاء مخصصة",
      "أسعار تنافسية",
      "عقود طويلة المدى"
    ],
    buttonText: "تواصل معنا",
    popular: false
  }
];

const Pricing = () => {
  const whatsappNumber = "201021911335";

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">باقات الأسعار</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            اختر الباقة المناسبة لاحتياجاتك مع أفضل الأسعار في السوق
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card border-border hover-lift ${
                plan.popular ? 'border-primary border-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                    الأكثر طلباً
                  </span>
                </div>
              )}
              
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/70 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.price !== "حسب الطلب" && <span className="text-foreground/70"> جنيه</span>}
                  <p className="text-foreground/60 text-sm mt-1">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary'
                  }`}
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن ${plan.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="ml-2 h-4 w-4" />
                    {plan.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
