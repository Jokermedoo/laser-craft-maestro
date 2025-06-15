
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  FileText, 
  Palette, 
  Zap, 
  CheckCircle, 
  Truck,
  ArrowRight,
  Clock,
  Star
} from 'lucide-react';
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';

const WorkStepsContent = () => {
  const { companyInfo } = useCompany();

  const steps = [
    {
      icon: MessageSquare,
      title: "التواصل والاستشارة",
      description: "تواصل معنا عبر واتساب أو الهاتف لمناقشة فكرتك ومتطلباتك",
      duration: "5-10 دقائق",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "تقديم العرض",
      description: "نقدم لك عرض سعر مفصل مع شرح الخدمات والمواد المطلوبة",
      duration: "30 دقيقة",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "التصميم والمراجعة",
      description: "نصمم العمل حسب طلبك ونرسل لك المعاينة للموافقة",
      duration: "1-2 ساعة",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "التنفيذ بالليزر",
      description: "نبدأ عملية النقش أو القطع بأحدث تقنيات الليزر",
      duration: "2-6 ساعات",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: CheckCircle,
      title: "مراجعة الجودة",
      description: "فحص دقيق للمنتج النهائي للتأكد من الجودة المطلوبة",
      duration: "30 دقيقة",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Truck,
      title: "التسليم",
      description: "تسليم العمل المنجز أو التوصيل حسب الاتفاق",
      duration: "فوري",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <AnimatedBackground />
      <Navbar whatsappNumber={companyInfo.whatsapp} />
      
      <section className="relative py-20 pt-32 z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              خطوات <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">العمل</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              من الفكرة إلى التنفيذ... تعرف على رحلة مشروعك معنا خطوة بخطوة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-r ${step.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mb-4 w-fit mx-auto">
                      الخطوة {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <div className="flex items-center justify-center text-yellow-400">
                      <Clock className="h-4 w-4 ml-2" />
                      <span className="text-sm">{step.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">لماذا تختار ورشة المعز؟</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-bold text-yellow-400 mb-2">سرعة التنفيذ</h4>
                  <p className="text-gray-300">إنجاز المشاريع في نفس اليوم</p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-yellow-400 mb-2">جودة عالية</h4>
                  <p className="text-gray-300">أحدث تقنيات الليزر والمعدات</p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-yellow-400 mb-2">أسعار تنافسية</h4>
                  <p className="text-gray-300">أفضل الأسعار في السوق</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">جاهز لبدء مشروعك؟</h3>
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <a href={`https://wa.me/${companyInfo.whatsapp}?text=مرحباً، أريد بدء مشروع جديد معكم`} target="_blank">
                <MessageSquare className="ml-3 h-6 w-6" />
                ابدأ مشروعك الآن
                <ArrowRight className="mr-3 h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer whatsappNumber={companyInfo.whatsapp} />
    </div>
  );
};

const WorkStepsPage = () => {
  return (
    <CompanyProvider>
      <WorkStepsContent />
    </CompanyProvider>
  );
};

export default WorkStepsPage;
