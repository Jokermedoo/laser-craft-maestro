
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Timer, Zap, Gift, Star, MessageSquare, Crown, Sparkles } from 'lucide-react';

interface FlashOfferBannerProps {
  whatsappNumber: string;
}

const FlashOfferBanner = ({ whatsappNumber }: FlashOfferBannerProps) => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsVisible(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-4 right-4 z-50 md:left-8 md:right-8 lg:left-auto lg:right-8 lg:w-96">
      <Card className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 border-2 border-yellow-300 shadow-2xl animate-pulse">
        <CardContent className="p-4 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-2 left-2 animate-spin">
              <Star className="h-4 w-4 text-white" />
            </div>
            <div className="absolute top-2 right-2 animate-bounce">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <div className="absolute bottom-2 left-2 animate-pulse">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="absolute bottom-2 right-2 animate-spin">
              <Zap className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="relative z-10">
            {/* Close button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-0 right-0 text-white hover:text-gray-200 text-xl font-bold"
            >
              ×
            </button>

            {/* Flash offer header */}
            <div className="text-center mb-3">
              <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-2">
                <Zap className="h-5 w-5 text-white animate-bounce" />
                <h3 className="text-lg font-bold text-white">⚡ عرض البرق ⚡</h3>
                <Zap className="h-5 w-5 text-white animate-bounce" />
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mb-2">
                <p className="text-2xl font-bold text-white">
                  خصم <span className="text-yellow-200 text-3xl">40%</span>
                </p>
                <p className="text-sm text-white">على جميع خدمات النقش بالليزر</p>
              </div>
            </div>

            {/* Countdown timer */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 mb-3">
              <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-2">
                <Timer className="h-4 w-4 text-red-300 animate-pulse" />
                <span className="text-white text-sm font-bold">ينتهي العرض خلال:</span>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 font-mono">
                  {formatTime(timeLeft)}
                </div>
                <div className="text-xs text-white opacity-80">دقيقة : ثانية</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
              <div className="bg-white/15 rounded p-2 text-center">
                <Gift className="h-3 w-3 text-white mx-auto mb-1" />
                <span className="text-white font-bold">هدية مجانية</span>
              </div>
              <div className="bg-white/15 rounded p-2 text-center">
                <Star className="h-3 w-3 text-white mx-auto mb-1" />
                <span className="text-white font-bold">ضمان سنة</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              asChild
              className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold text-sm py-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <a href={`https://wa.me/${whatsappNumber}?text=🔥 مرحباً، أريد الاستفادة من عرض البرق خصم 40% المحدود لـ30 دقيقة فقط!`} target="_blank">
                <MessageSquare className="h-4 w-4 ml-2" />
                احجز العرض الآن!
                <Zap className="h-4 w-4 mr-2" />
              </a>
            </Button>

            <p className="text-center text-xs text-white mt-2 opacity-80">
              * العرض ساري لأول 20 عميل فقط
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlashOfferBanner;
