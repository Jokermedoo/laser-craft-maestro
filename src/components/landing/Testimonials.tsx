
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "أحمد محمد",
    role: "صاحب مطعم",
    content: "خدمة ممتازة وجودة عالية في نقش لوحة المطعم. النتيجة فاقت توقعاتي تماماً.",
    rating: 5
  },
  {
    name: "فاطمة علي", 
    role: "مصممة ديكور",
    content: "تعاملت معهم في عدة مشاريع والنتيجة دائماً مثالية. سرعة في التنفيذ ودقة في العمل.",
    rating: 5
  },
  {
    name: "محمود حسن",
    role: "مدير شركة",
    content: "أفضل ورشة ليزر في المحافظة. أسعار مناسبة وخدمة عملاء ممتازة.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">آراء العملاء</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            ما يقوله عملاؤنا الكرام عن خدماتنا وجودة أعمالنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border hover-lift">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-foreground/60 text-sm">{testimonial.role}</p>
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
