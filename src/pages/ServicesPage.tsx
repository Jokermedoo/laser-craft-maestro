
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/services/ServiceCard';
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';
import { Zap, Package, Trophy, Palette, Star, Clock, Shield, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesPageContent = () => {
  const { companyInfo } = useCompany();

  const mainServices = [
    {
      icon: Zap,
      title: "النقش بالليزر",
      description: "نقش دقيق على جميع أنواع الخامات بأعلى جودة وأدق التفاصيل مع إمكانية النقش على الخشب، الأكريليك، المعادن، والجلود",
      gradient: "from-yellow-400 to-orange-500",
      details: ["نقش على الخشب الطبيعي", "نقش على الأكريليك والبلاستيك", "نقش على المعادن", "نقش الخط العربي", "نقش الصور والتصاميم"]
    },
    {
      icon: Package,
      title: "التقطيع بالليزر", 
      description: "تقطيع الخامات بدقة متناهية وحواف نظيفة ومثالية مع ضمان الجودة والدقة في جميع الأشكال والتصاميم",
      gradient: "from-blue-400 to-purple-500",
      details: ["تقطيع الأكريليك", "تقطيع الخشب", "تقطيع الورق والكرتون", "تقطيع القماش", "تقطيع أشكال معقدة"]
    },
    {
      icon: Trophy,
      title: "الدروع والميداليات",
      description: "تصنيع دروع وميداليات تذكارية مخصصة للمناسبات والبطولات والتكريمات الخاصة",
      gradient: "from-green-400 to-emerald-500",
      details: ["دروع التكريم", "ميداليات البطولات", "جوائز تذكارية", "دروع الشركات", "تصاميم مخصصة"]
    },
    {
      icon: Palette,
      title: "الرسم والحفر",
      description: "رسم وحفر التصاميم المعقدة والفنية بأحدث تقنيات الليزر مع إمكانية تنفيذ أي تصميم مهما كان معقداً",
      gradient: "from-pink-400 to-red-500",
      details: ["حفر التصاميم ثلاثية الأبعاد", "رسم الشعارات", "حفر النصوص", "تصاميم فنية معقدة", "حفر الزخارف"]
    }
  ];

  const additionalServices = [
    { title: "لوحات إعلانية", description: "تصميم وتنفيذ لوحات دعاية وإعلان احترافية" },
    { title: "بطاقات عمل", description: "بطاقات عمل مميزة بالليزر" },
    { title: "هدايا مخصصة", description: "هدايا شخصية منقوشة بالليزر" },
    { title: "لوحات تذكارية", description: "لوحات تذكارية للمناسبات الخاصة" }
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
            title="مجموعة شاملة من خدمات الليزر"
            description="نقدم أفضل خدمات الليزر في صعيد مصر بأعلى معايير الجودة والدقة"
          />
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-r ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-white mb-12">خدمات إضافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-slate-800/30 backdrop-blur-sm border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <SectionHeader 
            subtitle="كيف نعمل"
            title="خطوات تنفيذ مشروعك"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "التواصل", desc: "تواصل معنا عبر واتساب أو الهاتف" },
              { step: "2", title: "التصميم", desc: "نناقش التصميم ونقدم اقتراحات" },
              { step: "3", title: "التنفيذ", desc: "نبدأ العمل بأحدث تقنيات الليزر" },
              { step: "4", title: "التسليم", desc: "نسلم العمل في الموعد المحدد" }
            ].map((process, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">{process.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                  <p className="text-gray-400">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
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
