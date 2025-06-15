
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Star, Clock, Award, Heart } from 'lucide-react';

const CTA = () => {
  const whatsappNumber = "201021911335";

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 opacity-20">
          <Star className="h-20 w-20 animate-pulse" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <Award className="h-16 w-16 animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <Heart className="h-32 w-32" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            جاهز لتحويل فكرتك إلى <span className="text-yellow-300">واقع مبهر؟</span>
          </h2>
          
          <p className="text-2xl mb-12 opacity-95 leading-relaxed max-w-4xl mx-auto">
            لا تتردد في التواصل معنا الآن. فريقنا المتخصص متاح على مدار الساعة لتقديم 
            <span className="font-bold text-yellow-300"> الاستشارات المجانية </span>
            ومساعدتك في تحقيق رؤيتك بأعلى جودة وأفضل الأسعار في السوق.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold text-2xl px-12 py-8 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 rounded-2xl"
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد بدء مشروع جديد معكم والحصول على استشارة مجانية`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="ml-3 h-8 w-8" />
                ابدأ مشروعك الآن مجاناً
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-3 border-white text-white hover:bg-white hover:text-primary font-bold text-2xl px-12 py-8 rounded-2xl transition-all duration-300"
            >
              <a href="tel:+201021911335">
                <Phone className="ml-3 h-8 w-8" />
                اتصل للاستفسار
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-lg rounded-3xl p-10 mb-16">
            <div className="text-center">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">استشارة مجانية فورية</h3>
              <p className="opacity-90 text-lg">نقدم استشارات مجانية لجميع المشاريع مع تقدير التكلفة</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">متاح 24/7</h3>
              <p className="opacity-90 text-lg">خدمة عملاء متاحة على مدار الساعة طوال أيام الأسبوع</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">جودة مضمونة 100%</h3>
              <p className="opacity-90 text-lg">ضمان كامل على جميع أعمالنا مع إعادة مجانية</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">🏆 الورشة الأولى في صعيد مصر</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <p><strong>📍 موقعنا:</strong> أرمنت الوابورات، محافظة الأقصر</p>
              <p><strong>📞 للطلبات العاجلة:</strong> +20 102 191 1335</p>
              <p><strong>⏰ ساعات العمل:</strong> السبت-الخميس 9ص-9م</p>
              <p><strong>💬 واتساب:</strong> متاح 24 ساعة يومياً</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
