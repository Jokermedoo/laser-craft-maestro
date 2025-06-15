
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();
  const whatsappNumber = "201021911335";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `مرحباً، اسمي ${formData.name}
الهاتف: ${formData.phone}
البريد: ${formData.email}
الخدمة المطلوبة: ${formData.service}
تفاصيل المشروع: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "تم إرسال الرسالة بنجاح",
      description: "سيتم توجيهك إلى واتساب لإكمال المحادثة مع فريقنا",
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6">تواصل معنا الآن</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في تحقيق رؤيتك وتحويل أفكارك إلى واقع ملموس. 
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مفصل
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Card className="bg-card border-border shadow-2xl">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <Send className="h-8 w-8 text-primary ml-3" />
                <h3 className="text-3xl font-bold text-foreground">أرسل لنا رسالة</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">الاسم الكامل *</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="اكتب اسمك الكامل"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-lg py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">رقم الهاتف *</label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف أو الواتساب"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-lg py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني (اختياري)"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border text-lg py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">الخدمة المطلوبة *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-background border border-border rounded-md text-foreground text-lg"
                  >
                    <option value="">اختر الخدمة المطلوبة</option>
                    <option value="نقش بالليزر">نقش بالليزر</option>
                    <option value="تقطيع بالليزر">تقطيع بالليزر</option>
                    <option value="دروع وميداليات">دروع وميداليات</option>
                    <option value="لوحات إعلانية">لوحات إعلانية</option>
                    <option value="هدايا مخصصة">هدايا مخصصة</option>
                    <option value="استشارة مجانية">استشارة مجانية</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">تفاصيل المشروع</label>
                  <Textarea
                    name="message"
                    placeholder="اكتب تفاصيل مشروعك أو الخدمة المطلوبة..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-background border-border text-lg"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-8 rounded-xl font-bold"
                >
                  <MessageSquare className="ml-3 h-6 w-6" />
                  إرسال الرسالة عبر واتساب
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-card border-border hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                  <div className="bg-green-600 p-4 rounded-full">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-xl">واتساب</h4>
                    <p className="text-foreground/70 text-lg">+20 102 191 1335</p>
                  </div>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    تواصل فوري عبر واتساب
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                  <div className="bg-primary p-4 rounded-full">
                    <Phone className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-xl">الهاتف</h4>
                    <p className="text-foreground/70 text-lg">+20 102 191 1335</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full text-lg py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="tel:+201021911335">
                    اتصل الآن
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="bg-blue-600 p-4 rounded-full">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-xl">موقعنا</h4>
                    <p className="text-foreground/70 text-lg">أرمنت الوابورات، محافظة الأقصر</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="bg-orange-600 p-4 rounded-full">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-xl">ساعات العمل</h4>
                    <p className="text-foreground/70">السبت - الخميس: 9ص - 9م</p>
                    <p className="text-foreground/70">الجمعة: 2م - 9م</p>
                    <p className="text-primary font-medium mt-2">واتساب متاح 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
