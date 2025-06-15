
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock, MessageCircle, Mail, User, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const whatsappNumber = "201021911335";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const whatsappMessage = `مرحباً، أريد طلب خدمة:\n\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالإيميل: ${formData.email}\nنوع الخدمة: ${formData.service}\nالرسالة: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "تم إرسال الطلب بنجاح!",
        description: "سيتم تحويلك إلى واتساب لإكمال المحادثة.",
      });
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            املأ النموذج أدناه وسنتواصل معك خلال أقل من ساعة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-background border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Phone className="h-7 w-7 text-primary ml-3" />
                  معلومات الاتصال
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary ml-3" />
                  <div>
                    <p className="font-semibold text-foreground">رقم الهاتف</p>
                    <p className="text-foreground/70" dir="ltr">+20 102 191 1335</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary ml-3" />
                  <div>
                    <p className="font-semibold text-foreground">واتساب</p>
                    <p className="text-foreground/70" dir="ltr">+20 102 191 1335</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary ml-3" />
                  <div>
                    <p className="font-semibold text-foreground">العنوان</p>
                    <p className="text-foreground/70">الأقصر - أرمنت الوابورات</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary ml-3" />
                  <div>
                    <p className="font-semibold text-foreground">ساعات العمل</p>
                    <p className="text-foreground/70">السبت - الخميس: 9:00 ص - 8:00 م</p>
                    <p className="text-foreground/70">الجمعة: 2:00 م - 8:00 م</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="ml-2 h-5 w-5" />
                تواصل مباشر عبر واتساب
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="bg-background border-2 border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Mail className="h-7 w-7 text-primary ml-3" />
                أرسل طلبك
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    <User className="inline h-4 w-4 ml-1" />
                    الاسم *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="اكتب اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    <Phone className="inline h-4 w-4 ml-1" />
                    رقم الهاتف *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="رقم الهاتف للتواصل"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    <Mail className="inline h-4 w-4 ml-1" />
                    الإيميل (اختياري)
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="البريد الإلكتروني"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    <FileText className="inline h-4 w-4 ml-1" />
                    نوع الخدمة المطلوبة *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">اختر نوع الخدمة</option>
                    <option value="نقش-على-الخشب">نقش على الخشب</option>
                    <option value="حفر-على-الأكريليك">حفر على الأكريليك</option>
                    <option value="تقطيع-خامات">تقطيع الخامات</option>
                    <option value="لافتات-دعائية">لافتات دعائية</option>
                    <option value="هدايا-مخصصة">هدايا مخصصة</option>
                    <option value="ديكورات">ديكورات وتحف</option>
                    <option value="أخرى">خدمة أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    <MessageCircle className="inline h-4 w-4 ml-1" />
                    تفاصيل المشروع *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full"
                    placeholder="اشرح لنا تفاصيل مشروعك والمتطلبات الخاصة..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
