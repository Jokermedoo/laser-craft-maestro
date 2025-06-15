
import { CheckCircle } from 'lucide-react';
import React from 'react';

const features = [
  { name: 'قص دقيق وجودة عالية' },
  { name: 'تنفيذ مخصص حسب الطلب (أسماء، شعارات، رسومات)' },
  { name: 'أفكار هدايا فريدة لكل مناسبة' },
  { name: 'نعمل على مختلف الخامات: خشب، أكريليك، جلد، وغيرها' },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-black/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">لماذا تختارنا؟</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <p className="mr-4 text-lg text-foreground/90">{feature.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
