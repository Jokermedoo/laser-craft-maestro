
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';

const CTA = () => {
  const whatsappNumber = "201021911335";

  return (
    <section id="contact" className="py-20 text-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-foreground mb-4">هل لديك فكرة؟ دعنا نساعدك في تنفيذها!</h2>
        <p className="text-lg text-foreground/80 mb-8">تواصل معنا عبر واتساب لمناقشة تصميمك والحصول على عرض سعر.</p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-8 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Phone className="ml-3 h-6 w-6" />
                اطلب الآن على واتساب
            </a>
        </Button>
        <div className="mt-12 flex justify-center items-center text-foreground/80">
            <MapPin className="h-5 w-5 ml-2 text-primary" />
            <span>الاستلام من الورشة: الأقصر - أرمنت الوابورات</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
