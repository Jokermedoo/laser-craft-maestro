
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';

interface CTAProps {
  whatsappNumber: string;
}

const CTA = ({ whatsappNumber }: CTAProps) => {
  return (
    <section className="relative py-32 z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-10">
            جاهز لتحويل فكرتك إلى <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">واقع مبهر؟</span>
          </h2>
          
          <p className="text-xl mb-16 max-w-4xl mx-auto leading-relaxed text-gray-300">
            لا تتردد في التواصل معنا الآن. فريقنا المتخصص متاح لتقديم 
            <span className="font-bold text-yellow-400"> الاستشارات المجانية</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد بدء مشروع جديد معكم`} target="_blank">
                <MessageSquare className="ml-3 h-6 w-6" />
                ابدأ مشروعك الآن
                <Sparkles className="mr-3 h-6 w-6" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-xl px-12 py-8 backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              <a href="tel:+201021911335">
                <Phone className="ml-3 h-6 w-6" />
                اتصل للاستفسار
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
