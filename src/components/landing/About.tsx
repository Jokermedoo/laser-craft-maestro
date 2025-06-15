
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">عن ورشة المعز</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            ورشة المعز لخدمات الليزر هي مؤسسة رائدة في مجال النقش والحفر والتقطيع بالليزر. 
            نقدم خدمات متميزة ومبتكرة للأفراد والشركات بأحدث التقنيات وأعلى معايير الجودة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-card border-border text-center hover:border-primary transition-colors">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">1000+</h3>
              <p className="text-foreground/80">عميل راضٍ</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center hover:border-primary transition-colors">
            <CardContent className="p-6">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">5000+</h3>
              <p className="text-foreground/80">مشروع منجز</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center hover:border-primary transition-colors">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">99%</h3>
              <p className="text-foreground/80">معدل الرضا</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center hover:border-primary transition-colors">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">5+</h3>
              <p className="text-foreground/80">سنوات خبرة</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">رؤيتنا ورسالتنا</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">رؤيتنا</h4>
                <p className="text-foreground/80 leading-relaxed">
                  أن نكون الرواد في مجال خدمات الليزر في مصر والشرق الأوسط، 
                  ونساهم في تطوير الصناعات الإبداعية من خلال تقديم حلول مبتكرة وعالية الجودة.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">رسالتنا</h4>
                <p className="text-foreground/80 leading-relaxed">
                  نلتزم بتقديم خدمات ليزر متميزة تلبي احتياجات عملائنا وتفوق توقعاتهم، 
                  من خلال فريق مهني مدرب وتقنيات حديثة تضمن الدقة والجودة في كل مشروع.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png" 
              alt="ورشة المعز" 
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
