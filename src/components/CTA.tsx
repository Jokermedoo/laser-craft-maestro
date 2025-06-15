
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Sparkles, Gift, Timer } from 'lucide-react';

interface CTAProps {
  whatsappNumber: string;
}

const CTA = ({ whatsappNumber }: CTAProps) => {
  return (
    <section className="relative py-32 z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
            🔥 عرض ساخن!
          </div>
          
          <div className="flex justify-center items-center space-x-4 rtl:space-x-reverse mb-8">
            <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
            <h2 className="text-4xl md:text-6xl font-bold">
              احصل على خصم <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-6xl md:text-8xl">25%</span>
            </h2>
            <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
          </div>
          
          <p className="text-2xl md:text-3xl mb-6 font-bold text-white">
            على أول طلب لك معنا!
          </p>
          
          <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-10">
            <Timer className="h-6 w-6 text-red-400 animate-pulse" />
            <p className="text-xl text-gray-300">
              العرض محدود - اطلب الآن قبل انتهاء الوقت!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Gift className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2 text-lg">استشارة مجانية</h4>
              <p className="text-gray-300">نساعدك في اختيار أفضل حل لمشروعك</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Sparkles className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2 text-lg">جودة مضمونة</h4>
              <p className="text-gray-300">ضمان سنة كاملة على جميع الأعمال</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Timer className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2 text-lg">تسليم سريع</h4>
              <p className="text-gray-300">إنجاز معظم الأعمال في نفس اليوم</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-red-500/25 transform hover:scale-110 transition-all duration-300 rounded-2xl animate-pulse"
            >
              <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفادة من عرض خصم 25% على أول طلب`} target="_blank">
                <MessageSquare className="ml-3 h-6 w-6" />
                احجز العرض الآن واحصل على الخصم!
                <Gift className="mr-3 h-6 w-6" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-xl px-12 py-8 backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              <a href="tel:+201141990282">
                <Phone className="ml-3 h-6 w-6" />
                اتصل للاستفسار الفوري
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-8">
            * العرض ساري حتى نهاية الشهر الحالي أو حتى نفاد الكمية
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
