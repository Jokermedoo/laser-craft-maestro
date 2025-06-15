
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();
  const whatsappNumber = "201021911335";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `مرحباً، اسمي ${formData.name}%0A` +
      `رقم الهاتف: ${formData.phone}%0A` +
      `البريد الإلكتروني: ${formData.email}%0A` +
      `الرسالة: ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "تم إرسال الرسالة!",
      description: "سيتم توجيهك إلى واتساب لإكمال التواصل.",
    });
    
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في تحقيق أفكاركم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">معلومات التواصل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">الهاتف</h4>
                    <p className="text-foreground/80" dir="ltr">+20 102 191 1335</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">البريد الإلكتروني</h4>
                    <p className="text-foreground/80">info@almaezlaser.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">العنوان</h4>
                    <p className="text-foreground/80">أرمنت الوابورات - الأقصر</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                      <Phone className="ml-2 h-5 w-5" />
                      تواصل عبر واتساب
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
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
                      name="email"
                      type="email"
                      placeholder="البريد الإلكتروني"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="اكتب رسالتك هنا..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="ml-2 h-5 w-5" />
                    إرسال الرسالة
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
