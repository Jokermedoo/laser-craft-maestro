
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  whatsappNumber: string;
}

const Contact = ({ whatsappNumber }: ContactProps) => {
  return (
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
  );
};

export default Contact;
