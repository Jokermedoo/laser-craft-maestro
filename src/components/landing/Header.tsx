
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Star, Award } from 'lucide-react';

const Header = () => {
  const whatsappNumber = "201021911335";

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-primary/15 text-primary px-6 py-3 rounded-full text-lg font-bold mb-6 animate-fade-in">
            <Award className="ml-2 h-5 w-5" />
            الورشة الأولى في صعيد مصر لخدمات الليزر
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up">
            <span className="text-primary">المعز</span> لخدمات الليزر
          </h1>
          
          <p className="text-2xl text-foreground/90 leading-relaxed max-w-3xl mx-auto animate-fade-in">
            ورشة متخصصة في تنفيذ أعمال ليزر احترافية على جميع الخامات
            <br />
            <span className="text-primary font-semibold">نقش • حفر • رسم • تقطيع</span>
            <br />
            بدقة متناهية وجودة عالية تفوق التوقعات
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-10 py-8 rounded-xl font-bold shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدمات الليزر`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="ml-3 h-6 w-6" />
                اطلب خدمتك الآن عبر واتساب
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xl px-10 py-8 rounded-xl font-bold transition-all duration-300"
            >
              <a href="tel:+201021911335">
                <Phone className="ml-3 h-6 w-6" />
                اتصل الآن
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-border">
            <div className="text-center p-6 bg-card/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">1000+</h3>
              <p className="text-foreground/80 text-lg">عميل راضٍ ومميز</p>
            </div>
            <div className="text-center p-6 bg-card/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
              <p className="text-foreground/80 text-lg">سنوات خبرة متخصصة</p>
            </div>
            <div className="text-center p-6 bg-card/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-foreground/80 text-lg">خدمة عملاء متميزة</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
