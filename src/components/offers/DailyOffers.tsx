
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  Clock, 
  Star, 
  MessageSquare, 
  Sparkles,
  Zap,
  Heart,
  Award
} from 'lucide-react';

interface DailyOffersProps {
  whatsappNumber: string;
}

const DailyOffers = ({ whatsappNumber }: DailyOffersProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const offers = [
    {
      id: 1,
      title: "عرض الأحد الذهبي",
      description: "خصم 30% على جميع أعمال النقش على الذهب والفضة",
      discount: "30%",
      originalPrice: "200",
      newPrice: "140",
      day: 0, // الأحد
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-600/20 to-orange-600/20",
      borderColor: "border-yellow-500/50"
    },
    {
      id: 2,
      title: "اثنين الخشب المميز",
      description: "خصم 25% على جميع أعمال النقش والحفر على الخشب",
      discount: "25%",
      originalPrice: "150",
      newPrice: "112",
      day: 1, // الاثنين
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-500/50"
    },
    {
      id: 3,
      title: "ثلاثاء الأكريليك",
      description: "خصم 20% على قطع وتشكيل الأكريليك الملون",
      discount: "20%",
      originalPrice: "180",
      newPrice: "144",
      day: 2, // الثلاثاء
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/50"
    },
    {
      id: 4,
      title: "أربعاء الكميات",
      description: "خصم إضافي 15% عند طلب أكثر من 10 قطع",
      discount: "35%",
      originalPrice: "100",
      newPrice: "65",
      day: 3, // الأربعاء
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-500/50"
    },
    {
      id: 5,
      title: "خميس الهدايا",
      description: "خصم 25% على جميع الهدايا المخصصة والتذكارية",
      discount: "25%",
      originalPrice: "120",
      newPrice: "90",
      day: 4, // الخميس
      icon: Gift,
      color: "from-red-500 to-rose-500",
      bgColor: "from-red-600/20 to-rose-600/20",
      borderColor: "border-red-500/50"
    },
    {
      id: 6,
      title: "جمعة الليزر الفائق",
      description: "خصم 40% على الأعمال المعقدة والتفاصيل الدقيقة",
      discount: "40%",
      originalPrice: "300",
      newPrice: "180",
      day: 5, // الجمعة
      icon: Star,
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-600/20 to-blue-600/20",
      borderColor: "border-indigo-500/50"
    },
    {
      id: 7,
      title: "سبت الشركات",
      description: "خصم خاص للشركات والمؤسسات على الطلبات الكبيرة",
      discount: "35%",
      originalPrice: "500",
      newPrice: "325",
      day: 6, // السبت
      icon: Award,
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-600/20 to-green-600/20",
      borderColor: "border-teal-500/50"
    }
  ];

  const today = new Date().getDay();
  const todayOffer = offers.find(offer => offer.day === today) || offers[0];
  const nextOffer = offers.find(offer => offer.day === (today + 1) % 7) || offers[0];

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleOfferClick = (offer: typeof todayOffer) => {
    const message = `مرحباً، أريد الاستفادة من ${offer.title} بخصم ${offer.discount}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-lg mb-4 block">عروض محدودة الوقت</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            عرض <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">اليوم</span>
          </h2>
        </div>

        {/* عرض اليوم الحالي */}
        <Card className={`mb-12 bg-gradient-to-br ${todayOffer.bgColor} backdrop-blur-sm border-2 ${todayOffer.borderColor} relative overflow-hidden`}>
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            عرض اليوم!
          </div>
          
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`bg-gradient-to-r ${todayOffer.color} p-4 rounded-2xl w-fit mb-6`}>
                  <todayOffer.icon className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {todayOffer.title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {todayOffer.description}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <Badge className={`bg-gradient-to-r ${todayOffer.color} text-white text-lg px-4 py-2`}>
                    خصم {todayOffer.discount}
                  </Badge>
                  <div className="text-white">
                    <span className="text-2xl font-bold">{todayOffer.newPrice} جنيه</span>
                    <span className="text-lg text-gray-400 line-through mr-2">{todayOffer.originalPrice}</span>
                  </div>
                </div>
                
                <Button
                  onClick={() => handleOfferClick(todayOffer)}
                  size="lg"
                  className={`bg-gradient-to-r ${todayOffer.color} hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6`}
                >
                  <MessageSquare className="ml-2 h-5 w-5" />
                  احجز العرض الآن
                </Button>
              </div>
              
              <div className="text-center">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8">
                  <Clock className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-4">ينتهي العرض خلال:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">{timeLeft.hours.toString().padStart(2, '0')}</div>
                      <div className="text-gray-300">ساعة</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                      <div className="text-gray-300">دقيقة</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                      <div className="text-gray-300">ثانية</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* عرض الغد */}
        <Card className={`bg-gradient-to-br ${nextOffer.bgColor} backdrop-blur-sm border ${nextOffer.borderColor}`}>
          <CardContent className="p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">عرض الغد</h4>
            <div className="flex items-center justify-center gap-4">
              <div className={`bg-gradient-to-r ${nextOffer.color} p-3 rounded-xl`}>
                <nextOffer.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-right">
                <h5 className="text-xl font-bold text-white">{nextOffer.title}</h5>
                <p className="text-gray-300">{nextOffer.description}</p>
              </div>
              <Badge className={`bg-gradient-to-r ${nextOffer.color} text-white`}>
                خصم {nextOffer.discount}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* جميع العروض الأسبوعية */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">العروض الأسبوعية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <Card key={offer.id} className={`bg-gradient-to-br ${offer.bgColor} backdrop-blur-sm border ${offer.borderColor} hover:scale-105 transition-all duration-300 ${offer.day === today ? 'ring-2 ring-yellow-400' : ''}`}>
                <CardContent className="p-6">
                  <div className={`bg-gradient-to-r ${offer.color} p-3 rounded-xl w-fit mb-4`}>
                    <offer.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{offer.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{offer.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={`bg-gradient-to-r ${offer.color} text-white`}>
                      {offer.discount}
                    </Badge>
                    {offer.day === today && (
                      <Badge className="bg-yellow-400 text-black animate-pulse">
                        اليوم!
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyOffers;
