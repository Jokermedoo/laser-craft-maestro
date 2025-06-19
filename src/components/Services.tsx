
import React from 'react';
import ServiceCard from './services/ServiceCard';
import { homeServicesData } from '@/data/services';
import AnimatedContainer from './enhanced/AnimatedContainer';

const Services = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedContainer type="fade" delay={0.1}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-yellow-400 font-semibold text-base sm:text-lg mb-4 block">خدماتنا</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">خدماتنا المتميزة</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من خدمات الليزر المتخصصة بأعلى معايير الجودة
            </p>
          </div>
        </AnimatedContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {homeServicesData.map((service, index) => (
            <AnimatedContainer 
              key={index} 
              type="scale" 
              delay={0.2 + (index * 0.1)}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                gradient={service.gradient}
              />
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
