
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Timer, Gift, Star } from 'lucide-react';

interface PromoBannerProps {
  whatsappNumber: string;
}

const PromoBanner = ({ whatsappNumber }: PromoBannerProps) => {
  return (
    <section className="relative py-16 z-10">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 backdrop-blur-sm border border-yellow-400/50 overflow-hidden">
          <CardContent className="p-8 md:p-12 relative">
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              عرض محدود!
            </div>
            
            <div className="text-center">
              <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-6">
                <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  عرض خاص!
                </h2>
                <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
              </div>
              
              <p className="text-2xl md:text-3xl text-white mb-4 font-bold">
                خصم <span className="text-yellow-400 text-4xl">25%</span> على جميع خدمات النقش بالليزر
              </p>
              
              <div className="flex justify-center items-center space-x-4 rtl:space-x-reverse mb-8">
                <Timer className="h-6 w-6 text-red-400" />
                <p className="text-xl text-gray-300">
                  العرض ساري حتى نهاية الشهر فقط!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Gift className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-2">هدية مجانية</h4>
                  <p className="text-sm text-gray-300">حقيبة حماية مجانية مع كل طلب</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-2">جودة مضمونة</h4>
                  <p className="text-sm text-gray-300">ضمان على العمل لمدة سنة كاملة</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Timer className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-2">تسليم سريع</h4>
                  <p className="text-sm text-gray-300">إنجاز العمل في نفس اليوم</p>
                </div>
              </div>
              
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 animate-pulse"
              >
                <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفادة من العرض الخاص بخصم 25%`} target="_blank">
                  <Gift className="ml-3 h-6 w-6" />
                  احجز العرض الآن قبل انتهاء الوقت!
                  <Sparkles className="mr-3 h-6 w-6" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PromoBanner;
