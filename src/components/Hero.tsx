
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Phone, ArrowRight, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  whatsappNumber: string;
}

const Hero = ({ whatsappNumber }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-lg">
            <Sparkles className="ml-3 h-6 w-6 animate-pulse" />
            الورشة الأولى في صعيد مصر لخدمات الليزر
            <Award className="mr-3 h-6 w-6" />
          </div>
        </div>
        
        <h1 className="text-6xl lg:text-8xl font-bold mb-8 animate-fade-in delay-300">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">المعز</span>
          <br />
          <span className="text-white">لخدمات الليزر</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-500">
          ورشة متخصصة في تنفيذ أعمال ليزر احترافية على جميع الخامات
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold text-2xl">نقش • حفر • رسم • تقطيع</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in delay-700">
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدمات الليزر`} target="_blank">
              <MessageSquare className="ml-3 h-6 w-6" />
              اطلب خدمتك الآن
              <ArrowRight className="mr-3 h-6 w-6" />
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-xl px-12 py-8 rounded-2xl font-bold backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
          >
            <a href="tel:+201021911335">
              <Phone className="ml-3 h-6 w-6" />
              اتصل الآن
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in delay-1000">
          <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">1000+</h3>
              <p className="text-gray-300 text-lg">عميل راضٍ</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">5+</h3>
              <p className="text-gray-300 text-lg">سنوات خبرة</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">24/7</h3>
              <p className="text-gray-300 text-lg">خدمة عملاء</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
