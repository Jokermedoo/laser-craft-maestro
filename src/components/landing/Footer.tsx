
import React from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "201021911335";
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: 'الرئيسية', href: '#top' },
    { title: 'عن الورشة', href: '#about' },
    { title: 'خدماتنا', href: '#services' },
    { title: 'أعمالنا', href: '#gallery' },
    { title: 'الأسعار', href: '#pricing' },
    { title: 'اتصل بنا', href: '#contact' }
  ];

  const services = [
    'النقش على الخشب',
    'الحفر على الأكريليك',
    'تقطيع الخامات',
    'لافتات الدعاية',
    'الهدايا المخصصة',
    'الديكورات والتحف'
  ];

  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img 
                src="/lovable-uploads/cda3356a-11e2-4bd5-a33f-f95254a654ed.png" 
                alt="المعز لوجو" 
                className="h-12 w-12" 
              />
              <div>
                <h3 className="text-xl font-bold text-primary">المعز لليزر</h3>
                <p className="text-foreground/70 text-sm">خدمات الليزر الاحترافية</p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm">
              ورشة متخصصة في تنفيذ أرقى وأدق التصميمات بالليزر. نحن لا نصنع منتجات، بل نبدع قطعًا فنية تجسد رؤيتك بأحدث التقنيات وأجود الخامات.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Youtube className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-foreground/70 text-sm">• {service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">معلومات الاتصال</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary ml-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground/70 text-sm" dir="ltr">+20 102 191 1335</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm"
                  >
                    واتساب
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary ml-3 mt-0.5 flex-shrink-0" />
                <p className="text-foreground/70 text-sm">
                  الأقصر - أرمنت الوابورات
                </p>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary ml-3 mt-0.5 flex-shrink-0" />
                <div className="text-foreground/70 text-sm">
                  <p>السبت - الخميس: 9:00 ص - 8:00 م</p>
                  <p>الجمعة: 2:00 م - 8:00 م</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-right">
              <p className="text-foreground/70 text-sm">
                &copy; {currentYear} المعز لخدمات الليزر. جميع الحقوق محفوظة.
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-foreground/70 text-sm">
                تم التطوير بواسطة فريق المعز التقني
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
