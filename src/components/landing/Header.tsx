
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Star } from 'lucide-react';

const Header = () => {
  const whatsappNumber = "201021911335";

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right space-y-8">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="ml-2 h-4 w-4" />
              الورشة الأولى في صعيد مصر
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-primary">المعز</span> لخدمات الليزر
            </h1>
            
            <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              ورشة متخصصة في تنفيذ شغل ليزر احترافي على جميع الخامات – 
              نقش، حفر، رسم، وتقطيع بدقة متناهية وجودة عالية تفوق التوقعات.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدمات الليزر`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="ml-2 h-5 w-5" />
                  اطلب الآن عبر واتساب
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                <a href="tel:+201021911335">
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل الآن
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">1000+</h3>
                <p className="text-foreground/70">عميل راضٍ</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">5+</h3>
                <p className="text-foreground/70">سنوات خبرة</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">24/7</h3>
                <p className="text-foreground/70">خدمة العملاء</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png" 
                alt="أعمال ليزر متميزة من ورشة المعز" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 -z-10"></div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg">
              <Star className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
