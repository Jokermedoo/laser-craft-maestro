
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock, 
  Star,
  Zap,
  Package,
  Trophy,
  Palette,
  Shield,
  Truck,
  Award,
  Heart,
  Users,
  Target,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "201021911335";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Zap,
      title: "النقش بالليزر",
      description: "نقش دقيق على جميع أنواع الخامات بأعلى جودة وأدق التفاصيل"
    },
    {
      icon: Package,
      title: "التقطيع بالليزر", 
      description: "تقطيع الخامات بدقة متناهية وحواف نظيفة ومثالية"
    },
    {
      icon: Trophy,
      title: "الدروع والميداليات",
      description: "تصنيع دروع وميداليات تذكارية مخصصة للمناسبات"
    },
    {
      icon: Palette,
      title: "الرسم والحفر",
      description: "رسم وحفر التصاميم المعقدة والفنية بأحدث تقنيات الليزر"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "سرعة في التنفيذ",
      description: "نلتزم بالمواعيد المحددة ونسلم الأعمال في الوقت المناسب"
    },
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "ضمان شامل على جميع الأعمال مع إمكانية الإعادة"
    },
    {
      icon: Star,
      title: "خبرة متقدمة",
      description: "أكثر من 5 سنوات من الخبرة المتخصصة في مجال الليزر"
    },
    {
      icon: Truck,
      title: "خدمة التوصيل",
      description: "نوصل أعمالكم إلى أي مكان داخل محافظة الأقصر مجاناً"
    }
  ];

  const galleryItems = [
    {
      image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
      title: "نقش فني على الخشب",
      description: "أعمال نقش متقنة وفنية على الخشب الطبيعي"
    },
    {
      image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png", 
      title: "تقطيع دقيق للأكريليك",
      description: "تقطيع وتشكيل الأكريليك بدقة عالية"
    },
    {
      image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
      title: "دروع تذكارية مميزة", 
      description: "دروع وميداليات تذكارية بتصاميم احترافية"
    },
    {
      image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
      title: "لوحات إعلانية احترافية",
      description: "لوحات دعاية وإعلان عالية الجودة"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <img 
                src="/lovable-uploads/cda3356a-11e2-4bd5-a33f-f95254a654ed.png" 
                alt="المعز لوجو" 
                className="h-12 w-12" 
              />
              <span className="text-xl font-bold text-primary">المعز لليزر</span>
            </div>

            <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">الرئيسية</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">عن الورشة</a>
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">خدماتنا</a>
              <a href="#gallery" className="text-foreground/80 hover:text-primary transition-colors">أعمالنا</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">اتصل بنا</a>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="ml-2 h-4 w-4" />
                  اطلب الآن
                </a>
              </Button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-foreground"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background/95 pb-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors text-lg text-center py-2">الرئيسية</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors text-lg text-center py-2">عن الورشة</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors text-lg text-center py-2">خدماتنا</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors text-lg text-center py-2">أعمالنا</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors text-lg text-center py-2">اتصل بنا</a>
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="ml-2 h-5 w-5" />
                  اطلب الآن على واتساب
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-primary/10 pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-primary/15 text-primary px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Award className="ml-2 h-5 w-5" />
            الورشة الأولى في صعيد مصر لخدمات الليزر
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="text-primary">المعز</span> لخدمات الليزر
          </h1>
          
          <p className="text-xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            ورشة متخصصة في تنفيذ أعمال ليزر احترافية على جميع الخامات
            <br />
            <span className="text-primary font-semibold">نقش • حفر • رسم • تقطيع</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-xl px-10 py-8 rounded-xl font-bold"
            >
              <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدمات الليزر`} target="_blank">
                <MessageSquare className="ml-3 h-6 w-6" />
                اطلب خدمتك الآن
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xl px-10 py-8 rounded-xl font-bold"
            >
              <a href="tel:+201021911335">
                <Phone className="ml-3 h-6 w-6" />
                اتصل الآن
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card/50 rounded-2xl">
              <h3 className="text-3xl font-bold text-primary mb-2">1000+</h3>
              <p className="text-foreground/80">عميل راضٍ</p>
            </div>
            <div className="text-center p-6 bg-card/50 rounded-2xl">
              <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
              <p className="text-foreground/80">سنوات خبرة</p>
            </div>
            <div className="text-center p-6 bg-card/50 rounded-2xl">
              <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-foreground/80">خدمة عملاء</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">من نحن؟</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              
              <p className="text-xl text-foreground/90 mb-6 leading-relaxed">
                <span className="text-primary font-bold">ورشة المعز لخدمات الليزر</span> هي الرائدة في مجال 
                النقش والحفر والتقطيع بالليزر في صعيد مصر ومحافظة الأقصر.
              </p>
              
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                نتخصص في تقديم خدمات عالية الجودة باستخدام أحدث التقنيات والماكينات المتطورة،
                مع فريق من الخبراء المتخصصين.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-background border-border">
                  <CardContent className="p-6 text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-foreground mb-2">فريق محترف</h3>
                    <p className="text-foreground/70 text-sm">خبرة أكثر من 5 سنوات</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-background border-border">
                  <CardContent className="p-6 text-center">
                    <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-foreground mb-2">دقة عالية</h3>
                    <p className="text-foreground/70 text-sm">نتائج مثالية في كل مرة</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png" 
                alt="ورشة المعز" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">خدماتنا المتميزة</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات الليزر المتخصصة بأعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">معرض أعمالنا</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              شاهد مجموعة من أفضل أعمالنا المنجزة بأحدث تقنيات الليزر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="bg-background border-border overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">لماذا تختارنا؟</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              نتميز بمجموعة من المزايا الفريدة التي تجعلنا الخيار الأول
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-card border-border text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">تواصل معنا الآن</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في تحقيق رؤيتك وتحويل أفكارك إلى واقع ملموس
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <Card className="bg-background border-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className="bg-green-600 p-4 rounded-full">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xl">واتساب</h4>
                      <p className="text-foreground/70">+20 102 191 1335</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank">
                      تواصل عبر واتساب
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className="bg-primary p-4 rounded-full">
                      <Phone className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xl">الهاتف</h4>
                      <p className="text-foreground/70">+20 102 191 1335</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="tel:+201021911335">
                      اتصل الآن
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-blue-600 p-4 rounded-full">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xl">موقعنا</h4>
                      <p className="text-foreground/70">أرمنت الوابورات، محافظة الأقصر</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">ساعات العمل</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground">السبت - الخميس: 9ص - 9م</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground">الجمعة: 2م - 9م</span>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-primary font-medium">واتساب متاح 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            جاهز لتحويل فكرتك إلى <span className="text-yellow-300">واقع مبهر؟</span>
          </h2>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            لا تتردد في التواصل معنا الآن. فريقنا المتخصص متاح لتقديم 
            <span className="font-bold text-yellow-300"> الاستشارات المجانية</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold text-xl px-10 py-6 shadow-2xl"
            >
              <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد بدء مشروع جديد معكم`} target="_blank">
                <MessageSquare className="ml-3 h-6 w-6" />
                ابدأ مشروعك الآن
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-xl px-10 py-6"
            >
              <a href="tel:+201021911335">
                <Phone className="ml-3 h-6 w-6" />
                اتصل للاستفسار
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <img 
                  src="/lovable-uploads/cda3356a-11e2-4bd5-a33f-f95254a654ed.png" 
                  alt="المعز لوجو" 
                  className="h-10 w-10" 
                />
                <h3 className="text-xl font-bold text-primary">المعز لليزر</h3>
              </div>
              <p className="text-background/80 mb-4">
                ورشة متخصصة في تقديم أفضل خدمات الليزر في صعيد مصر
              </p>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm">أكثر من 1000 عميل راضٍ</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-primary">خدماتنا</h4>
              <ul className="space-y-2 text-background/80">
                <li>النقش بالليزر</li>
                <li>التقطيع بالليزر</li>
                <li>الرسم والحفر</li>
                <li>الدروع والميداليات</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-primary">تواصل معنا</h4>
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  className="flex items-center space-x-3 rtl:space-x-reverse text-background/80 hover:text-primary transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>واتساب: {whatsappNumber}</span>
                </a>
                
                <a 
                  href="tel:+201021911335"
                  className="flex items-center space-x-3 rtl:space-x-reverse text-background/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>هاتف: +20 102 191 1335</span>
                </a>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse text-background/80">
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <span>أرمنت الوابورات، الأقصر</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/60">
              جميع الحقوق محفوظة © 2024 المعز لخدمات الليزر
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
