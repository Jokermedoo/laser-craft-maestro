
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "201021911335";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <img 
                src="/lovable-uploads/cda3356a-11e2-4bd5-a33f-f95254a654ed.png" 
                alt="المعز لوجو" 
                className="h-12 w-12" 
              />
              <h3 className="text-2xl font-bold text-primary">المعز لخدمات الليزر</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-md">
              ورشة متخصصة في تنفيذ أرقى وأدق التصميمات بالليزر على جميع الخامات. 
              نحول أفكاركم إلى واقع ملموس بجودة استثنائية ودقة متناهية.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="#" 
                className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors"
                aria-label="فيسبوك"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors"
                aria-label="إنستجرام"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/80 hover:text-primary transition-colors">عن الورشة</a></li>
              <li><a href="#services" className="text-foreground/80 hover:text-primary transition-colors">خدماتنا</a></li>
              <li><a href="#gallery" className="text-foreground/80 hover:text-primary transition-colors">أعمالنا</a></li>
              <li><a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">الأسعار</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-foreground/80" dir="ltr">+20 102 191 1335</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-foreground/80">info@almaezlaser.com</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground/80">أرمنت الوابورات - الأقصر</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              © {currentYear} المعز لخدمات الليزر. جميع الحقوق محفوظة.
            </p>
            <p className="text-foreground/60 text-sm mt-2 md:mt-0">
              صُنع بـ ❤️ في مصر
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
