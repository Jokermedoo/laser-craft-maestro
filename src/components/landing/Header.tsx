
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10"></div>
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 to-transparent"
      ></div>

      <div className="container mx-auto px-4 z-20 flex flex-col items-center">
        <img 
          src="/lovable-uploads/cda3356a-11e2-4bd5-a33f-f95254a654ed.png" 
          alt="المعز لخدمات الليزر لوجو" 
          className="mx-auto mb-8 w-40 h-40 md:w-56 md:h-56"
        />
        <h1 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          المعز لخدمات الليزر
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
          تفاصيل محفورة بالليزر... تحفتك تبقى قطعة فنية
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="text-lg py-8 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <a href="#gallery">
              شاهد أعمالنا
              <ArrowDown className="mr-3 h-6 w-6 animate-bounce" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
