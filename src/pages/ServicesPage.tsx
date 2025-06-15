
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionHeader from '@/components/shared/SectionHeader';
import PromoBanner from '@/components/marketing/PromoBanner';
import Stats from '@/components/marketing/Stats';
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Zap, Package, Trophy, Palette, Star, CheckCircle } from 'lucide-react';

const ServicesPageContent = () => {
  const { companyInfo } = useCompany();

  const services = [
    {
      icon: Zap,
      title: "النقش بالليزر على المعادن",
      description: "نقش دقيق ومتين على الذهب والفضة والنحاس والستانلس ستيل",
      features: ["دقة عالية", "مقاوم للتآكل", "تفاصيل دقيقة", "ضمان الجودة"],
      price: "ابتداءً من 50 جنيه",
      gradient: "from-yellow-400 to-orange-500",
      popular: true
    },
    {
      icon: Package,
      title: "التقطيع بالليزر للخامات",
      description: "تقطيع دقيق للأكريليك والخشب والجلد والقماش بأشكال معقدة",
      features: ["حواف نظيفة", "أشكال معقدة", "دقة متناهية", "سرعة عالية"],
      price: "ابتداءً من 30 جنيه",
      gradient: "from-blue-400 to-purple-500",
      popular: false
    },
    {
      icon: Trophy,
      title: "الدروع والميداليات التذكارية",
      description: "تصنيع دروع وميداليات مخصصة للفرق والمؤسسات والمناسبات",
      features: ["تصميم مخصص", "خامات فاخرة", "تشطيب مميز", "تسليم سريع"],
      price: "ابتداءً من 100 جنيه",
      gradient: "from-green-400 to-emerald-500",
      popular: false
    },
    {
      icon: Palette,
      title: "الرسم والحفر الفني",
      description: "رسم وحفر التصاميم الفنية والشعارات بأحدث تقنيات الليزر",
      features: ["إبداع فني", "تصاميم مبتكرة", "جودة احترافية", "أسعار منافسة"],
      price: "ابتداءً من 80 جنيه",
      gradient: "from-pink-400 to-red-500",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar whatsappNumber={companyInfo.whatsapp} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="container mx-auto px-6">
          <SectionHeader 
            subtitle="خدماتنا المتميزة"
            title="أفضل خدمات الليزر في صعيد مصر"
            description="نقدم خدمات ليزر متخصصة بأحدث التقنيات وأعلى معايير الجودة"
          />
        </div>
      </section>

      {/* Promo Banner */}
      <PromoBanner whatsappNumber={companyInfo.whatsapp} />

      {/* Services Grid */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border ${service.popular ? 'border-yellow-400/70 shadow-yellow-400/20 shadow-2xl' : 'border-purple-500/30'} hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm">
                    الأكثر طلباً ⭐
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-yellow-400 font-bold text-lg">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    asChild
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-bold py-3 transform hover:scale-105 transition-all duration-300`}
                  >
                    <a href={`https://wa.me/${companyInfo.whatsapp}?text=مرحباً، أريد الاستفسار عن خدمة ${service.title}`} target="_blank">
                      <MessageSquare className="ml-2 h-5 w-5" />
                      اطلب الخدمة الآن
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Why Choose Us */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              لماذا تختار <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">ورشة المعز؟</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold text-white mb-4">جودة مضمونة</h4>
                <p className="text-gray-300">ضمان على جميع الأعمال لمدة سنة كاملة</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold text-white mb-4">تقنية متطورة</h4>
                <p className="text-gray-300">أحدث ماكينات الليزر في الشرق الأوسط</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold text-white mb-4">خبرة عالية</h4>
                <p className="text-gray-300">فريق محترف بخبرة أكثر من 5 سنوات</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer whatsappNumber={companyInfo.whatsapp} />
    </div>
  );
};

const ServicesPage = () => {
  return (
    <CompanyProvider>
      <ServicesPageContent />
    </CompanyProvider>
  );
};

export default ServicesPage;
