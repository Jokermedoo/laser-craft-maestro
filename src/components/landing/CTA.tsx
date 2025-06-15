
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Star, Clock } from 'lucide-react';

const CTA = () => {
  const whatsappNumber = "201021911335";

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 opacity-20">
          <Star className="h-16 w-16" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <Clock className="h-12 w-12" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            جاهز لتحويل فكرتك إلى واقع؟
          </h2>
          
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            لا تتردد في التواصل معنا الآن. فريقنا متاح على مدار الساعة لتقديم الاستشارات المجانية 
            ومساعدتك في تحقيق رؤيتك بأعلى جودة وأفضل الأسعار.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-lg"
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد بدء مشروع جديد معكم`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="ml-2 h-6 w-6" />
                ابدأ مشروعك الآن
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6"
            >
              <a href="tel:+201021911335">
                <Phone className="ml-2 h-6 w-6" />
                اتصل للاستفسار
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">استشارة مجانية</h3>
              <p className="opacity-90">نقدم استشارات مجانية لجميع المشاريع</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">متاح 24/7</h3>
              <p className="opacity-90">خدمة عملاء متاحة على مدار الساعة</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">جودة مضمونة</h3>
              <p className="opacity-90">ضمان كامل على جميع أعمالنا</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg opacity-95 mb-4">
              <strong>موقعنا:</strong> أرمنت الوابورات، محافظة الأقصر
            </p>
            <p className="text-lg opacity-95">
              <strong>للطلبات العاجلة:</strong> +20 102 191 1335
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
