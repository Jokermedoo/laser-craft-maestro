
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Star } from 'lucide-react';

const Header = () => {
  const whatsappNumber = "201021911335";

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9ae3b' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start space-x-2 rtl:space-x-reverse mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground/80 text-sm">تقييم 5 نجوم من عملائنا</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              المعز لخدمات
              <span className="text-primary block">الليزر</span>
            </h1>
            
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              ورشة متخصصة في تنفيذ أرقى وأدق التصميمات بالليزر على جميع الخامات.
              نحول أفكاركم إلى واقع ملموس بجودة استثنائية ودقة متناهية.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3"
              >
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=أريد الاستفسار عن خدمات الليزر`}
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
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3"
              >
                <a href="tel:+201021911335">
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل بنا
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-foreground/70">عميل راضٍ</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-foreground/70">مشروع منجز</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-foreground/70">سنوات خبرة</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-primary/20 rounded-full w-96 h-96 mx-auto flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png" 
                  alt="أعمال ليزر متنوعة" 
                  className="w-80 h-80 object-cover rounded-full border-4 border-primary/30"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 right-10 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                دقة 100%
              </div>
              <div className="absolute bottom-10 left-10 bg-card border border-primary px-4 py-2 rounded-full text-sm font-semibold text-foreground shadow-lg">
                جودة عالية
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
