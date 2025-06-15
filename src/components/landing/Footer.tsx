
import React from 'react';
import { MessageSquare, Phone, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "201021911335";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* معلومات الورشة */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <img 
                src="/lovable-uploads/cda3356a-11e2-4bd5-a33f-f95254a654ed.png" 
                alt="المعز لوجو" 
                className="h-10 w-10" 
              />
              <h3 className="text-2xl font-bold text-primary">المعز لليزر</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              ورشة متخصصة في تقديم أفضل خدمات الليزر في صعيد مصر. 
              نحول أفكاركم إلى واقع بدقة وجودة عالية.
            </p>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm">أكثر من 1000 عميل راضٍ</span>
            </div>
          </div>

          {/* خدماتنا */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary">خدماتنا</h4>
            <ul className="space-y-2 text-background/80">
              <li>النقش بالليزر</li>
              <li>التقطيع بالليزر</li>
              <li>الرسم والحفر</li>
              <li>الدروع والميداليات</li>
              <li>الهدايا المخصصة</li>
              <li>الدعاية والإعلان</li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary">تواصل معنا</h4>
            <div className="space-y-3">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rtl:space-x-reverse text-background/80 hover:text-primary transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span>واتساب: {whatsappNumber}</span>
              </a>
              
              <a 
                href="tel:+201021911335"
                className="flex items-center space-x-3 rtl:space-x-reverse text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>هاتف: +20 102 191 1335</span>
              </a>
              
              <div className="flex items-start space-x-3 rtl:space-x-reverse text-background/80">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>أرمنت الوابورات، محافظة الأقصر، مصر</span>
              </div>
            </div>
          </div>

          {/* ساعات العمل */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary">ساعات العمل</h4>
            <div className="space-y-2 text-background/80">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Clock className="h-4 w-4" />
                <span>السبت - الخميس</span>
              </div>
              <p className="mr-6">9:00 ص - 9:00 م</p>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Clock className="h-4 w-4" />
                <span>الجمعة</span>
              </div>
              <p className="mr-6">2:00 م - 9:00 م</p>
              
              <div className="mt-4 p-3 bg-primary/20 rounded-lg">
                <p className="text-sm font-medium">خدمة واتساب متاحة 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* خط الفاصل */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              جميع الحقوق محفوظة © {currentYear} المعز لخدمات الليزر
            </p>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدماتكم`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2 rtl:space-x-reverse"
              >
                <MessageSquare className="h-4 w-4" />
                <span>تواصل الآن</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
