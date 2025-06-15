
import React, { useState, useEffect } from 'react';
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
  X,
  ArrowRight,
  Play,
  Sparkles
} from 'lucide-react';

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
      description: "نقش دقيق على جميع أنواع الخامات بأعلى جودة وأدق التفاصيل",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Package,
      title: "التقطيع بالليزر", 
      description: "تقطيع الخامات بدقة متناهية وحواف نظيفة ومثالية",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Trophy,
      title: "الدروع والميداليات",
      description: "تصنيع دروع وميداليات تذكارية مخصصة للمناسبات",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Palette,
      title: "الرسم والحفر",
      description: "رسم وحفر التصاميم المعقدة والفنية بأحدث تقنيات الليزر",
      gradient: "from-pink-400 to-red-500"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "سرعة في التنفيذ",
      description: "نلتزم بالمواعيد المحددة ونسلم الأعمال في الوقت المناسب",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "ضمان شامل على جميع الأعمال مع إمكانية الإعادة",
      color: "text-green-500"
    },
    {
      icon: Star,
      title: "خبرة متقدمة",
      description: "أكثر من 5 سنوات من الخبرة المتخصصة في مجال الليزر",
      color: "text-yellow-500"
    },
    {
      icon: Truck,
      title: "خدمة التوصيل",
      description: "نوصل أعمالكم إلى أي مكان داخل محافظة الأقصر مجاناً",
      color: "text-purple-500"
    }
  ];

  const galleryItems = [
    {
      image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
      title: "نقش فني على الخشب",
      description: "أعمال نقش متقنة وفنية على الخشب الطبيعي",
      category: "نقش"
    },
    {
      image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png", 
      title: "تقطيع دقيق للأكريليك",
      description: "تقطيع وتشكيل الأكريليك بدقة عالية",
      category: "تقطيع"
    },
    {
      image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
      title: "دروع تذكارية مميزة", 
      description: "دروع وميداليات تذكارية بتصاميم احترافية",
      category: "دروع"
    },
    {
      image: "/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png",
      title: "لوحات إعلانية احترافية",
      description: "لوحات دعاية وإعلان عالية الجودة",
      category: "لوحات"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="relative">
                <img 
                  src="/lovable-uploads/cda3356a-11e2-4bd5-a33f-f95254a654ed.png" 
                  alt="المعز لوجو" 
                  className="h-14 w-14 rounded-full border-2 border-yellow-400 shadow-lg" 
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">المعز لليزر</span>
                <p className="text-xs text-gray-300">ورشة متخصصة</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group">
                الرئيسية
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group">
                عن الورشة
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group">
                خدماتنا
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#gallery" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group">
                أعمالنا
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group">
                اتصل بنا
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button asChild className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="ml-2 h-4 w-4" />
                  اطلب الآن
                </a>
              </Button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-white p-2 rounded-lg bg-purple-600/20 backdrop-blur-sm"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
            <div className="container mx-auto px-6 py-6 space-y-4">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">الرئيسية</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">عن الورشة</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">خدماتنا</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">أعمالنا</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">اتصل بنا</a>
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
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
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-lg">
              <Sparkles className="ml-3 h-6 w-6 animate-pulse" />
              الورشة الأولى في صعيد مصر لخدمات الليزر
              <Award className="mr-3 h-6 w-6" />
            </div>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 animate-fade-in delay-300">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">المعز</span>
            <br />
            <span className="text-white">لخدمات الليزر</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-500">
            ورشة متخصصة في تنفيذ أعمال ليزر احترافية على جميع الخامات
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold text-2xl">نقش • حفر • رسم • تقطيع</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in delay-700">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدمات الليزر`} target="_blank">
                <MessageSquare className="ml-3 h-6 w-6" />
                اطلب خدمتك الآن
                <ArrowRight className="mr-3 h-6 w-6" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-xl px-12 py-8 rounded-2xl font-bold backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
            >
              <a href="tel:+201021911335">
                <Phone className="ml-3 h-6 w-6" />
                اتصل الآن
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in delay-1000">
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">1000+</h3>
                <p className="text-gray-300 text-lg">عميل راضٍ</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">5+</h3>
                <p className="text-gray-300 text-lg">سنوات خبرة</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">24/7</h3>
                <p className="text-gray-300 text-lg">خدمة عملاء</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <span className="text-yellow-400 font-semibold text-lg mb-2 block">من نحن؟</span>
                <h2 className="text-5xl font-bold text-white mb-6">
                  ورشة <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">المعز</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                <span className="text-yellow-400 font-bold">ورشة المعز لخدمات الليزر</span> هي الرائدة في مجال 
                النقش والحفر والتقطيع بالليزر في صعيد مصر ومحافظة الأقصر.
              </p>
              
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                نتخصص في تقديم خدمات عالية الجودة باستخدام أحدث التقنيات والماكينات المتطورة،
                مع فريق من الخبراء المتخصصين.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-bold text-white mb-2">فريق محترف</h3>
                    <p className="text-gray-400 text-sm">خبرة أكثر من 5 سنوات</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-bold text-white mb-2">دقة عالية</h3>
                    <p className="text-gray-400 text-sm">نتائج مثالية في كل مرة</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <img 
                  src="/lovable-uploads/271295b7-7e99-47e1-b4c6-b33a750033ad.png" 
                  alt="ورشة المعز" 
                  className="relative w-full h-auto rounded-3xl shadow-2xl border border-purple-500/30"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  متاح الآن
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-yellow-400 font-semibold text-lg mb-4 block">خدماتنا</span>
            <h2 className="text-5xl font-bold text-white mb-8">خدماتنا المتميزة</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات الليزر المتخصصة بأعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-r ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-32 z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-yellow-400 font-semibold text-lg mb-4 block">معرض الأعمال</span>
            <h2 className="text-5xl font-bold text-white mb-8">أحدث أعمالنا</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              شاهد مجموعة من أفضل أعمالنا المنجزة بأحدث تقنيات الليزر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Play className="h-12 w-12 text-white bg-yellow-400/20 rounded-full p-3 backdrop-blur-sm" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-yellow-400 font-semibold text-lg mb-4 block">مميزاتنا</span>
            <h2 className="text-5xl font-bold text-white mb-8">لماذا تختارنا؟</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نتميز بمجموعة من المزايا الفريدة التي تجعلنا الخيار الأول
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700 text-center hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 rounded-2xl bg-slate-700/50 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/20 transition-all duration-500">
                      <IconComponent className={`h-10 w-10 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-yellow-400 font-semibold text-lg mb-4 block">تواصل معنا</span>
            <h2 className="text-5xl font-bold text-white mb-8">ابدأ مشروعك الآن</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في تحقيق رؤيتك وتحويل أفكارك إلى واقع ملموس
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl">واتساب</h4>
                      <p className="text-gray-300">+20 102 191 1335</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold transform hover:scale-105 transition-all duration-300">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank">
                      تواصل عبر واتساب
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl">الهاتف</h4>
                      <p className="text-gray-300">+20 102 191 1335</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold transform hover:scale-105 transition-all duration-300">
                    <a href="tel:+201021911335">
                      اتصل الآن
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl">موقعنا</h4>
                      <p className="text-gray-300">أرمنت الوابورات، محافظة الأقصر</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm p-10 rounded-3xl border border-purple-500/30">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">ساعات العمل</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Clock className="h-6 w-6 text-yellow-400" />
                    <span className="text-white font-medium">السبت - الخميس</span>
                  </div>
                  <span className="text-yellow-400 font-bold">9ص - 9م</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Clock className="h-6 w-6 text-yellow-400" />
                    <span className="text-white font-medium">الجمعة</span>
                  </div>
                  <span className="text-yellow-400 font-bold">2م - 9م</span>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl border border-yellow-400/30">
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                    <MessageSquare className="h-6 w-6 text-yellow-400" />
                    <p className="text-yellow-400 font-bold text-lg">واتساب متاح 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-10">
              جاهز لتحويل فكرتك إلى <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">واقع مبهر؟</span>
            </h2>
            
            <p className="text-xl mb-16 max-w-4xl mx-auto leading-relaxed text-gray-300">
              لا تتردد في التواصل معنا الآن. فريقنا المتخصص متاح لتقديم 
              <span className="font-bold text-yellow-400"> الاستشارات المجانية</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300 rounded-2xl"
              >
                <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد بدء مشروع جديد معكم`} target="_blank">
                  <MessageSquare className="ml-3 h-6 w-6" />
                  ابدأ مشروعك الآن
                  <Sparkles className="mr-3 h-6 w-6" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-xl px-12 py-8 backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300 rounded-2xl"
              >
                <a href="tel:+201021911335">
                  <Phone className="ml-3 h-6 w-6" />
                  اتصل للاستفسار
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900/80 backdrop-blur-sm border-t border-purple-500/20 py-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                <img 
                  src="/lovable-uploads/cda3356a-11e2-4bd5-a33f-f95254a654ed.png" 
                  alt="المعز لوجو" 
                  className="h-12 w-12 rounded-full border-2 border-yellow-400" 
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">المعز لليزر</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                ورشة متخصصة في تقديم أفضل خدمات الليزر في صعيد مصر
              </p>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-400">أكثر من 1000 عميل راضٍ</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">خدماتنا</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">النقش بالليزر</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">التقطيع بالليزر</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">الرسم والحفر</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">الدروع والميداليات</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">تواصل معنا</h4>
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-yellow-400 transition-colors group"
                >
                  <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>واتساب: {whatsappNumber}</span>
                </a>
                
                <a 
                  href="tel:+201021911335"
                  className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-yellow-400 transition-colors group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>هاتف: +20 102 191 1335</span>
                </a>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse text-gray-400">
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <span>أرمنت الوابورات، الأقصر</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500">
              جميع الحقوق محفوظة © 2024 المعز لخدمات الليزر
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
