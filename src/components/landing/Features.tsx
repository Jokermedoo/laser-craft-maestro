
import { CheckCircle } from 'lucide-react';
import React from 'react';

const features = [
  { name: 'جودة ودقة لا تضاهى: نستخدم أحدث ماكينات الليزر لضمان أعلى مستويات الدقة.' },
  { name: 'تصاميم مبتكرة ومخصصة: فريقنا جاهز لتحويل أفكارك إلى تصاميم فريدة.' },
  { name: 'تنوع في الخامات: نعمل بخبرة على الخشب، الأكريليك، الجلد، والمزيد.' },
  { name: 'سرعة في التنفيذ: نلتزم بتسليم طلباتكم في أسرع وقت مع الحفاظ على الجودة.' },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">لماذا تختارنا؟</h2>
        <div className="max-w-3xl mx-auto">
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
