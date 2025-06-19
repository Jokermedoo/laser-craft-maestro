
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
import { MessageSquare, Star, CheckCircle } from 'lucide-react';
import { servicesData } from '@/data/services';
import AnimatedContainer from '@/components/enhanced/AnimatedContainer';

const ServicesPageContent = () => {
  const { companyInfo } = useCompany();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar whatsappNumber={companyInfo.whatsapp} />
      
      {/* Hero Section */}
      <AnimatedContainer type="fade" delay={0.1}>
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 z-10">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeader 
              subtitle="خدماتنا المتميزة"
              title="أفضل خدمات الليزر في صعيد مصر"
              description="نقدم خدمات ليزر متخصصة بأحدث التقنيات وأعلى معايير الجودة"
            />
          </div>
        </section>
      </AnimatedContainer>

      {/* Promo Banner */}
      <AnimatedContainer type="slide" delay={0.2}>
        <PromoBanner whatsappNumber={companyInfo.whatsapp} />
      </AnimatedContainer>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <AnimatedContainer 
                key={service.id} 
                type="scale" 
                delay={0.3 + (index * 0.1)}
              >
                <Card className={`relative bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border ${
                  service.popular 
                    ? 'border-yellow-400/70 shadow-yellow-400/20 shadow-2xl' 
                    : 'border-purple-500/30'
                } hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105`}>
                  {service.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 sm:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
                      الأكثر طلباً ⭐
                    </div>
                  )}
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 sm:rtl:space-x-reverse mb-6">
                      <div className={`bg-gradient-to-r ${service.gradient} p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 w-fit mb-4 sm:mb-0`}>
                        <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-yellow-400 font-bold text-base sm:text-lg">{service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                    
                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-bold py-2 sm:py-3 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base`}
                    >
                      <a href={`https://wa.me/${companyInfo.whatsapp}?text=مرحباً، أريد الاستفسار عن خدمة ${service.title}`} target="_blank">
                        <MessageSquare className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                        اطلب الخدمة الآن
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedContainer type="fade" delay={0.7}>
        <Stats />
      </AnimatedContainer>

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
