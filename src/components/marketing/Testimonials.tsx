
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "أحمد محمد السعيد",
    role: "صاحب محل ذهب",
    content: "أفضل ورشة ليزر في الصعيد! النقش دقيق جداً والأسعار معقولة. أنصح بها بشدة لكل من يريد عمل مميز.",
    rating: 5,
    image: "👨‍💼"
  },
  {
    name: "فاطمة علي حسن", 
    role: "مهندسة ديكور",
    content: "تعاملت معهم في عدة مشاريع والنتيجة دائماً مبهرة. سرعة في التنفيذ ودقة في التفاصيل وخدمة عملاء ممتازة.",
    rating: 5,
    image: "👩‍💼"
  },
  {
    name: "محمود حسن عبدالله",
    role: "مدير شركة إعلان",
    content: "أفضل استثمار! اللوحات الإعلانية التي عملوها لنا جذبت عملاء كثيرين. جودة عالية وإبداع في التنفيذ.",
    rating: 5,
    image: "👨‍💻"
  },
  {
    name: "نورا أحمد محمد",
    role: "صاحبة متجر هدايا",
    content: "الهدايا المخصصة التي ينفذونها تحفة فنية حقيقية. العملاء مبسوطين جداً والمبيعات زادت بفضل الجودة العالية.",
    rating: 5,
    image: "👩‍🎨"
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-lg mb-4 block">شهادات العملاء</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ما يقوله <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">عملاؤنا</span> عنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            أكثر من 1000 عميل راضٍ عن خدماتنا المتميزة وجودة أعمالنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-yellow-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
