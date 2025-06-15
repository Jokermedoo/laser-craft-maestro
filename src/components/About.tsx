
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <span className="text-yellow-400 font-semibold text-base sm:text-lg mb-2 block">من نحن؟</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
                ورشة <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">المعز</span>
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 sm:mb-8"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              <span className="text-yellow-400 font-bold">ورشة المعز لخدمات الليزر</span> هي الرائدة في مجال 
              النقش والحفر والتقطيع بالليزر في صعيد مصر ومحافظة الأقصر.
            </p>
            
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 leading-relaxed">
              نتخصص في تقديم خدمات عالية الجودة باستخدام أحدث التقنيات والماكينات المتطورة،
              مع فريق من الخبراء المتخصصين.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-white mb-2 text-base sm:text-lg">فريق محترف</h3>
                  <p className="text-gray-400 text-sm">خبرة أكثر من 5 سنوات</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Target className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-white mb-2 text-base sm:text-lg">دقة عالية</h3>
                  <p className="text-gray-400 text-sm">نتائج مثالية في كل مرة</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <img 
                src="/lovable-uploads/65900846-b6de-40b4-b288-b1b78c510879.png" 
                alt="ورشة المعز" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-purple-500/30"
                loading="lazy"
              />
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse">
                متاح الآن
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
