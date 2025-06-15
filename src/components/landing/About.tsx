
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">من نحن؟</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              ورشة المعز لخدمات الليزر هي الرائدة في مجال النقش والحفر والتقطيع بالليزر في صعيد مصر. 
              نتخصص في تقديم خدمات عالية الجودة باستخدام أحدث التقنيات والماكينات المتطورة.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-background border-border">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">فريق محترف</h3>
                  <p className="text-foreground/70 text-sm">خبرة أكثر من 5 سنوات</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">دقة عالية</h3>
                  <p className="text-foreground/70 text-sm">نتائج مثالية في كل مرة</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">جودة مضمونة</h3>
                  <p className="text-foreground/70 text-sm">ضمان شامل على الأعمال</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">موقع مميز</h3>
                  <p className="text-foreground/70 text-sm">أرمنت الوابورات، الأقصر</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png" 
              alt="ورشة المعز لخدمات الليزر" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
