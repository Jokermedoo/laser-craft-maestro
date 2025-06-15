
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Clock, CheckCircle } from 'lucide-react';

const CTA = () => {
  const whatsappNumber = "201021911335";

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d9ae3b' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            جاهز لتحويل فكرتك إلى واقع؟
          </h2>
          
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            لا تتردد في التواصل معنا اليوم واحصل على استشارة مجانية لمشروعك القادم.
            فريقنا المحترف جاهز لمساعدتك في تحقيق رؤيتك بأعلى مستويات الجودة والدقة.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-foreground">استشارة مجانية</span>
            </div>
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              <Clock className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-foreground">رد سريع خلال ساعات</span>
            </div>
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-foreground">عرض سعر مخصص</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=أريد بدء مشروع جديد مع المعز لليزر`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="ml-2 h-5 w-5" />
                ابدأ مشروعك الآن
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
            >
              <a href="tel:+201021911335">
                <Phone className="ml-2 h-5 w-5" />
                اتصل للاستفسار
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              طرق التواصل السريع
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-foreground/80">واتساب: +20 102 191 1335</span>
              </div>
              <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-foreground/80">هاتف: +20 102 191 1335</span>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/60">
              🏆 معتمدون من أكثر من 1000 عميل راضٍ | ⭐ تقييم 5 نجوم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
