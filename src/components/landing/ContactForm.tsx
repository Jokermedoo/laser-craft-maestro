
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const whatsappNumber = "201021911335";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
      });
      return;
    }

    const whatsappMessage = `مرحباً، أنا ${formData.name}
الهاتف: ${formData.phone}
الخدمة المطلوبة: ${formData.service || 'غير محدد'}
الرسالة: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "تم إرسال طلبكم بنجاح",
      description: "سيتم تحويلكم إلى واتساب لإتمام المحادثة",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            نحن هنا لمساعدتكم في تحقيق رؤيتكم. تواصلوا معنا الآن للحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* معلومات التواصل */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">واتساب</h3>
                    <p className="text-foreground/70">للرد السريع</p>
                  </div>
                </div>
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="ml-2 h-4 w-4" />
                    {whatsappNumber}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">الهاتف</h3>
                    <p className="text-foreground/70">للاتصال المباشر</p>
                  </div>
                </div>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="tel:+201021911335">
                    <Phone className="ml-2 h-4 w-4" />
                    +20 102 191 1335
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">العنوان</h3>
                    <p className="text-foreground/70">موقع الورشة</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  أرمنت الوابورات، محافظة الأقصر، مصر
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">ساعات العمل</h3>
                    <p className="text-foreground/70">أوقات الدوام</p>
                  </div>
                </div>
                <div className="text-foreground/80 space-y-1">
                  <p>السبت - الخميس: 9:00 ص - 9:00 م</p>
                  <p>الجمعة: 2:00 م - 9:00 م</p>
                  <p className="text-primary font-medium">واتساب: 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* نموذج التواصل */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">أرسل رسالة</h3>
                <p className="text-foreground/70">
                  املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        الاسم *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="اكتب اسمك الكامل"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        رقم الهاتف *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="01xxxxxxxxx"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      الخدمة المطلوبة
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">اختر الخدمة</option>
                      <option value="النقش بالليزر">النقش بالليزر</option>
                      <option value="التقطيع بالليزر">التقطيع بالليزر</option>
                      <option value="الرسم والحفر">الرسم والحفر</option>
                      <option value="الدروع والميداليات">الدروع والميداليات</option>
                      <option value="الهدايا المخصصة">الهدايا المخصصة</option>
                      <option value="الدعاية والإعلان">الدعاية والإعلان</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      تفاصيل المشروع *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="صف لنا مشروعك بالتفصيل: نوع الخامة، المقاسات، التصميم المطلوب، الكمية، الميزانية المتاحة..."
                      required
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="ml-2 h-5 w-5" />
                    إرسال عبر واتساب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
