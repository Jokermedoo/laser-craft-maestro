
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  Timer, 
  Star, 
  MessageSquare, 
  Sparkles,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  originalPrice: string;
  salePrice: string;
  timeLeft: number; // in seconds
  features: string[];
  category: string;
  isLimited: boolean;
  maxCustomers?: number;
  currentCustomers?: number;
}

interface SpecialOffersProps {
  whatsappNumber: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "عرض نهاية الأسبوع",
    description: "خصم كبير على جميع خدمات النقش الخشبي",
    discount: "30%",
    originalPrice: "200",
    salePrice: "140",
    timeLeft: 2 * 24 * 60 * 60, // 2 days
    features: ["نقش خشبي", "تشطيب ممتاز", "تسليم سريع"],
    category: "خشب",
    isLimited: true,
    maxCustomers: 20,
    currentCustomers: 12
  },
  {
    id: 2,
    title: "عرض العملاء الجدد",
    description: "خصم خاص للعملاء الجدد على أول طلب",
    discount: "40%",
    originalPrice: "300",
    salePrice: "180",
    timeLeft: 7 * 24 * 60 * 60, // 7 days
    features: ["للعملاء الجدد", "جميع الخدمات", "استشارة مجانية"],
    category: "عام",
    isLimited: true,
    maxCustomers: 50,
    currentCustomers: 23
  },
  {
    id: 3,
    title: "عرض الكمية",
    description: "اطلب 3 قطع واحصل على الرابعة مجاناً",
    discount: "25%",
    originalPrice: "400",
    salePrice: "300",
    timeLeft: 5 * 24 * 60 * 60, // 5 days
    features: ["للكميات الكبيرة", "جودة مضمونة", "توفير كبير"],
    category: "كمية",
    isLimited: false
  }
];

const SpecialOffers = ({ whatsappNumber }: SpecialOffersProps) => {
  const [currentOffers, setCurrentOffers] = useState(offers);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffers(prevOffers => 
        prevOffers.map(offer => ({
          ...offer,
          timeLeft: Math.max(0, offer.timeLeft - 1)
        })).filter(offer => offer.timeLeft > 0)
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const mins = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    if (days > 0) {
      return `${days}د ${hours}س`;
    } else if (hours > 0) {
      return `${hours}س ${mins}د`;
    } else {
      return `${mins}د ${secs}ث`;
    }
  };

  const getProgressPercentage = (current: number, max: number) => {
    return (current / max) * 100;
  };

  if (currentOffers.length === 0) {
    return null;
  }

  return (
    <section className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
            <span className="text-yellow-400 font-semibold text-lg">عروض خاصة محدودة</span>
            <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            وفر أكثر مع <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">عروضنا الحصرية</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentOffers.map((offer) => (
            <Card key={offer.id} className="bg-gradient-to-br from-red-600/20 via-orange-500/20 to-yellow-400/20 backdrop-blur-sm border-2 border-yellow-400/50 overflow-hidden relative group hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400"></div>
              
              {offer.isLimited && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white animate-pulse z-10">
                  <Timer className="h-3 w-3 ml-1" />
                  محدود
                </Badge>
              )}

              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex justify-center items-center gap-2 mb-3">
                    <TrendingUp className="h-6 w-6 text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">{offer.title}</h3>
                    <Award className="h-6 w-6 text-yellow-400" />
                  </div>
                  <p className="text-gray-300 mb-4">{offer.description}</p>
                </div>

                {/* Discount Badge */}
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-2xl inline-block">
                    <span className="text-3xl font-bold">خصم {offer.discount}</span>
                  </div>
                </div>

                {/* Price Comparison */}
                <div className="text-center mb-6">
                  <div className="flex justify-center items-center gap-4">
                    <span className="text-gray-400 line-through text-xl">{offer.originalPrice} جنيه</span>
                    <span className="text-yellow-400 text-3xl font-bold">{offer.salePrice} جنيه</span>
                  </div>
                  <p className="text-green-400 text-sm font-bold mt-2">
                    وفر {parseInt(offer.originalPrice) - parseInt(offer.salePrice)} جنيه!
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Timer className="h-4 w-4 text-red-400 animate-pulse" />
                      <span className="text-white text-sm font-bold">ينتهي خلال:</span>
                    </div>
                    <div className="text-2xl font-bold text-yellow-400 font-mono">
                      {formatTime(offer.timeLeft)}
                    </div>
                  </div>
                </div>

                {/* Limited Offer Progress */}
                {offer.isLimited && offer.maxCustomers && offer.currentCustomers && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>تم الحجز</span>
                      <span>{offer.currentCustomers}/{offer.maxCustomers}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${getProgressPercentage(offer.currentCustomers, offer.maxCustomers)}%` }}
                      ></div>
                    </div>
                    <p className="text-red-400 text-xs mt-2 font-bold">
                      متبقي {offer.maxCustomers - offer.currentCustomers} مكان فقط!
                    </p>
                  </div>
                )}

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-2">
                    {offer.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-lg py-6 rounded-xl shadow-2xl hover:shadow-red-500/25 transform group-hover:scale-105 transition-all duration-300 animate-pulse"
                >
                  <a href={`https://wa.me/${whatsappNumber}?text=🔥 مرحباً، أريد الاستفادة من ${offer.title} - خصم ${offer.discount}!`} target="_blank">
                    <MessageSquare className="h-5 w-5 ml-2" />
                    احجز العرض فوراً!
                    <Zap className="h-5 w-5 mr-2" />
                  </a>
                </Button>

                <p className="text-center text-xs text-gray-400 mt-3">
                  * العرض قابل للانتهاء في أي وقت
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            لا تفوت هذه الفرصة الذهبية - العروض محدودة الوقت والكمية!
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold"
          >
            <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد معرفة المزيد عن العروض الخاصة المتاحة`} target="_blank">
              <Gift className="h-5 w-5 ml-2" />
              استفسر عن المزيد من العروض
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
