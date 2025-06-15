
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, MapPin, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-6">من نحن؟</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div>
            
            <p className="text-xl text-foreground/90 leading-relaxed">
              <span className="text-primary font-bold">ورشة المعز لخدمات الليزر</span> هي الرائدة والأولى في مجال 
              النقش والحفر والتقطيع بالليزر في صعيد مصر ومحافظة الأقصر.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              نتخصص في تقديم خدمات عالية الجودة باستخدام أحدث التقنيات والماكينات المتطورة،
              مع فريق من الخبراء المتخصصين الذين يضمنون تحقيق رؤيتكم بأفضل الطرق الممكنة.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <Card className="bg-background border-border hover-lift">
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2 text-lg">فريق محترف</h3>
                  <p className="text-foreground/70">خبرة أكثر من 5 سنوات متخصصة</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border hover-lift">
                <CardContent className="p-6 text-center">
                  <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2 text-lg">دقة عالية</h3>
                  <p className="text-foreground/70">نتائج مثالية في كل مرة</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border hover-lift">
                <CardContent className="p-6 text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2 text-lg">جودة مضمونة</h3>
                  <p className="text-foreground/70">ضمان شامل على جميع الأعمال</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border hover-lift">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2 text-lg">موقع مميز</h3>
                  <p className="text-foreground/70">أرمنت الوابورات، الأقصر</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-3xl">
              <img 
                src="/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png" 
                alt="ورشة المعز لخدمات الليزر" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 -z-10"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
          <div className="bg-background p-8 rounded-2xl border border-border">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">سرعة التنفيذ</h3>
            <p className="text-foreground/70 text-lg">التزام كامل بالمواعيد المحددة</p>
          </div>
          
          <div className="bg-background p-8 rounded-2xl border border-border">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">أمان وثقة</h3>
            <p className="text-foreground/70 text-lg">تعامل آمن وموثوق مع العملاء</p>
          </div>
          
          <div className="bg-background p-8 rounded-2xl border border-border">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">جوائز وتقدير</h3>
            <p className="text-foreground/70 text-lg">معتمدون من عملائنا المميزين</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
