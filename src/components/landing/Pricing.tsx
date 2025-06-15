
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare } from 'lucide-react';

const pricingTiers = [
  {
    name: "الباقة الأساسية",
    description: "مثالية للأفراد والمشاريع الصغيرة",
    features: [
      "نقش بسيط على الخشب أو الأكريليك",
      "حجم حتى 20×20 سم",
      "تصميم بسيط",
      "تسليم خلال 3 أيام",
      "ضمان الجودة"
    ],
    priceRange: "50 - 150 جنيه",
    popular: false
  },
  {
    name: "الباقة المتوسطة",
    description: "الأنسب للهدايا والمشاريع المتوسطة",
    features: [
      "نقش وحفر متقدم",
      "حجم حتى 40×40 سم",
      "تصميم مخصص",
      "ألوان متعددة",
      "تسليم خلال 5 أيام",
      "تغليف هدايا مجاني"
    ],
    priceRange: "150 - 400 جنيه",
    popular: true
  },
  {
    name: "الباقة المتقدمة",
    description: "للشركات والمشاريع الكبيرة",
    features: [
      "جميع أنواع الليزر",
      "أحجام كبيرة",
      "تصميم احترافي",
      "كميات كبيرة",
      "أولوية في التنفيذ",
      "خدمة ما بعد البيع"
    ],
    priceRange: "400+ جنيه",
    popular: false
  }
];

const Pricing = () => {
  const whatsappNumber = "201021911335";

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">باقات الأسعار</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            اختر الباقة المناسبة لمشروعك. جميع الأسعار تشمل التصميم والتنفيذ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative bg-card border-2 transition-all duration-300 hover:shadow-lg ${
                tier.popular 
                  ? 'border-primary shadow-primary/10 transform scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                    الأكثر طلباً
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-foreground mb-2">{tier.name}</CardTitle>
                <p className="text-foreground/70 text-sm mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-primary">{tier.priceRange}</div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground/80">
                      <CheckCircle className="h-5 w-5 text-primary ml-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-background border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=أريد الاستفسار عن ${tier.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="ml-2 h-4 w-4" />
                    اطلب الآن
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              تحتاج عرض سعر مخصص؟
            </h3>
            <p className="text-foreground/80 mb-6">
              للمشاريع الخاصة أو الكميات الكبيرة، تواصل معنا للحصول على عرض سعر مفصل ومخصص لاحتياجاتك
            </p>
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
                احصل على عرض مخصص
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
