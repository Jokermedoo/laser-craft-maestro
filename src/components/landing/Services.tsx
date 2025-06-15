
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Scissors, 
  PaintBucket, 
  Award, 
  Gift, 
  Building2,
  MessageSquare 
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: "النقش بالليزر",
    description: "نقش دقيق على جميع الخامات بتقنيات متطورة",
    features: ["نقش على الخشب", "نقش على الأكريليك", "نقش على الجلد", "نقش على المعادن"],
    image: "/lovable-uploads/4a29ef11-1a3b-486a-8488-842236968ec9.png"
  },
  {
    icon: Scissors,
    title: "التقطيع بالليزر",
    description: "تقطيع احترافي بدقة عالية وحواف نظيفة",
    features: ["تقطيع الخشب", "تقطيع الأكريليك", "أشكال معقدة", "دقة متناهية"],
    image: "/lovable-uploads/5d4f3b7d-65b1-4f59-99dd-48df65451995.png"
  },
  {
    icon: PaintBucket,
    title: "الرسم والحفر",
    description: "رسم وحفر تفصيلي للوجوه والتصاميم المعقدة",
    features: ["حفر الصور", "رسم البورتريه", "تصاميم مخصصة", "تفاصيل دقيقة"],
    image: "/lovable-uploads/6ac486da-2b00-4592-a16f-71b3e942dae6.png"
  },
  {
    icon: Award,
    title: "الدروع والميداليات",
    description: "تصنيع دروع تكريمية وميداليات بتصاميم حصرية",
    features: ["دروع خشبية", "ميداليات أكريليك", "تصاميم مخصصة", "نقوش احترافية"],
    image: "/lovable-uploads/7c701768-3017-4860-b6f3-18600d898517.png"
  },
  {
    icon: Gift,
    title: "الهدايا المخصصة",
    description: "هدايا فريدة ومخصصة لجميع المناسبات",
    features: ["صناديق هدايا", "إكسسوارات مخصصة", "ذكريات خاصة", "تصاميم رومانسية"],
    image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png"
  },
  {
    icon: Building2,
    title: "الدعاية والإعلان",
    description: "لافتات ولوحات إعلانية احترافية",
    features: ["لافتات المحلات", "لوحات إعلانية", "شعارات الشركات", "تصاميم تجارية"],
    image: "/lovable-uploads/4a29ef11-1a3b-486a-8488-842236968ec9.png"
  }
];

const Services = () => {
  const whatsappNumber = "201021911335";

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">خدماتنا المتميزة</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات الليزر المتطورة لتلبية جميع احتياجاتكم الإبداعية والتجارية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-2 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-primary/90 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=أريد الاستفسار عن خدمة ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="ml-2 h-4 w-4" />
                    اطلب الخدمة
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              خدمات أخرى حسب الطلب
            </h3>
            <p className="text-foreground/80 mb-6">
              لديك فكرة مختلفة؟ نحن نتخصص في تنفيذ المشاريع المخصصة وغير التقليدية. 
              تواصل معنا وسنجد الحل المناسب لاحتياجاتك.
            </p>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=لدي مشروع مخصص أريد مناقشته معكم`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="ml-2 h-5 w-5" />
                مشروع مخصص
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
