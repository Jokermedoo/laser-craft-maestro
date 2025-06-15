
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "أحمد محمد",
    role: "صاحب محل تجاري",
    content: "الجودة ممتازة والدقة في العمل لا تضاهى. صنعوا لي لافتة محلي وأصبحت معلم مميز في المنطقة. أنصح بشدة بالتعامل معهم.",
    rating: 5,
    location: "الأقصر"
  },
  {
    name: "فاطمة السيد",
    role: "عميلة - هدايا مخصصة",
    content: "طلبت هدايا مخصصة لحفل زفافي وكانت النتيجة أكثر من رائعة. الفريق محترف جداً وملتزم بالمواعيد. شكراً لكم على الإبداع.",
    rating: 5,
    location: "قنا"
  },
  {
    name: "محمود عبدالله",
    role: "مهندس ديكور",
    content: "أتعامل معهم في مشاريع الديكور الداخلي. الدقة والجودة العالية في قطع الأكريليك والخشب تجعلهم الخيار الأول لي دائماً.",
    rating: 5,
    location: "أسوان"
  },
  {
    name: "نورهان أحمد",
    role: "مديرة شركة",
    content: "صنعوا لنا درع الشركة وميداليات التكريم. العمل احترافي والتصميم فريد. سعداء جداً بالتعامل معكم.",
    rating: 5,
    location: "الأقصر"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">آراء عملائنا</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            نفخر بثقة عملائنا وآرائهم الإيجابية في خدماتنا المتميزة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-2 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary ml-3" />
                  <div className="flex space-x-1 rtl:space-x-reverse">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground/90 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center ml-4">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-foreground/70 text-sm">{testimonial.role}</p>
                    <p className="text-primary text-sm">{testimonial.location}</p>
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
