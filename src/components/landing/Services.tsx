
import { Gem, Cog, Heart } from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: Gem,
    title: 'نقش ورسم دقيق',
    description: 'نحول أفكارك ورسوماتك إلى نقوش فنية على مختلف الخامات بدقة متناهية.'
  },
  {
    icon: Cog,
    title: 'تقطيع احترافي',
    description: 'قص بالليزر للأكريليك، الخشب، والجلود لتصنيع قطع مخصصة لمشاريعك.'
  },
  {
    icon: Heart,
    title: 'هدايا شخصية',
    description: 'نصنع هدايا فريدة من نوعها بلمسة شخصية، من أسماء محفورة إلى صور وتصاميم خاصة.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => (
            <div key={index} className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <service.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-foreground/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
