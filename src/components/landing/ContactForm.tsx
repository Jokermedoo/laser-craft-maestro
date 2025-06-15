
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
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
الرسالة: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "تم إرسال الرسالة",
      description: "سيتم توجيهك إلى واتساب لإكمال المحادثة",
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تحقيق رؤيتك. تواصل معنا الآن للحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="الاسم الكامل"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
                
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background border border-border rounded-md text-foreground"
                  >
                    <option value="">اختر الخدمة المطلوبة</option>
                    <option value="نقش بالليزر">نقش بالليزر</option>
                    <option value="تقطيع بالليزر">تقطيع بالليزر</option>
                    <option value="دروع وميداليات">دروع وميداليات</option>
                    <option value="لوحات إعلانية">لوحات إعلانية</option>
                    <option value="هدايا مخصصة">هدايا مخصصة</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="تفاصيل المشروع أو الخدمة المطلوبة"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-background border-border"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <MessageSquare className="ml-2 h-5 w-5" />
                  إرسال عبر واتساب
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-bold text-foreground">واتساب</h4>
                    <p className="text-foreground/70">+20 102 191 1335</p>
                  </div>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    تواصل عبر واتساب
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-bold text-foreground">الهاتف</h4>
                    <p className="text-foreground/70">+20 102 191 1335</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+201021911335">
                    اتصل الآن
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-bold text-foreground">الموقع</h4>
                    <p className="text-foreground/70">أرمنت الوابورات، محافظة الأقصر</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-bold text-foreground">ساعات العمل</h4>
                    <p className="text-foreground/70">السبت - الخميس: 9ص - 9م</p>
                    <p className="text-foreground/70">الجمعة: 2م - 9م</p>
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
