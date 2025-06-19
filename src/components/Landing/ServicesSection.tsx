
import React, { useState, useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { servicesService, Service } from '@/services/servicesService';
import { Button } from '@/components/ui/button';
import Loader from '@/components/common/Loader';

interface ServicesSectionProps {
  whatsappNumber?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ whatsappNumber }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await servicesService.getAll();
      setServices(data);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleServiceInquiry = (serviceName: string) => {
    if (whatsappNumber) {
      const message = `مرحباً، أريد الاستفسار عن خدمة: ${serviceName}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  if (loading) {
    return (
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <Loader text="جاري تحميل الخدمات..." />
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            خدماتنا المميزة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات النقش والحفر بالليزر بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-800/50 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 ml-1" />
                  الأكثر طلباً
                </div>
              )}

              {/* Service Content */}
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                  <span className="text-2xl text-white">⚡</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Price */}
                {service.price && (
                  <div className="text-2xl font-bold text-yellow-400">
                    {service.price}
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  onClick={() => handleServiceInquiry(service.title)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group"
                >
                  اطلب الخدمة
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {services.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">لم يتم إضافة خدمات بعد</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
