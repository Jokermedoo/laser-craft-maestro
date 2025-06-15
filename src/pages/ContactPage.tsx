
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionHeader from '@/components/shared/SectionHeader';
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPageContent = () => {
  const { companyInfo } = useCompany();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'النقش بالليزر',
    'التقطيع بالليزر',
    'الدروع والميداليات',
    'الرسم والحفر',
    'لوحات إعلانية',
    'هدايا مخصصة',
    'أخرى'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحباً، اسمي ${formData.name}
الهاتف: ${formData.phone}
الخدمة المطلوبة: ${formData.service}
التفاصيل: ${formData.message}`;
    
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "تم إرسال الرسالة",
      description: "سيتم تحويلك إلى واتساب لإكمال المحادثة",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar whatsappNumber={companyInfo.whatsapp} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="container mx-auto px-6">
          <SectionHeader 
            subtitle="تواصل معنا"
            title="ابدأ مشروعك الآن"
            description="نحن هنا لمساعدتك في تحقيق رؤيتك وتحويل أفكارك إلى واقع ملموس"
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative pb-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">الاسم *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="ادخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">رقم الهاتف *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="01xxxxxxxxx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">الخدمة المطلوبة</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    >
                      <option value="">اختر الخدمة</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">تفاصيل المشروع</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none resize-none"
                      placeholder="اكتب تفاصيل مشروعك هنا..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 text-lg"
                  >
                    <MessageSquare className="ml-2 h-5 w-5" />
                    إرسال عبر واتساب
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              
              {/* Phone Numbers */}
              <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl">أرقام الهاتف</h4>
                      <p className="text-gray-300">{companyInfo.phone}</p>
                      <p className="text-gray-300">{companyInfo.secondaryPhone}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <Button asChild variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                      <a href={`tel:${companyInfo.phone}`}>اتصل على الرقم الأول</a>
                    </Button>
                    <Button asChild variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                      <a href={`tel:${companyInfo.secondaryPhone}`}>اتصل على الرقم الثاني</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl">واتساب</h4>
                      <p className="text-gray-300">متاح 24/7</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold">
                    <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank">
                      <MessageCircle className="ml-2 h-5 w-5" />
                      فتح محادثة واتساب
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Location & Hours */}
              <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xl">موقعنا</h4>
                        <p className="text-gray-300">{companyInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-600 pt-6">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                        <Clock className="h-6 w-6 text-yellow-400" />
                        <h5 className="font-bold text-white">ساعات العمل</h5>
                      </div>
                      <div className="space-y-2 text-gray-300">
                        <p>السبت - الخميس: 9 صباحاً - 9 مساءً</p>
                        <p>الجمعة: 2 ظهراً - 9 مساءً</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer whatsappNumber={companyInfo.whatsapp} />
    </div>
  );
};

const ContactPage = () => {
  return (
    <CompanyProvider>
      <ContactPageContent />
    </CompanyProvider>
  );
};

export default ContactPage;
