
import React from 'react';
import { MessageSquare, Phone, MapPin, Star } from 'lucide-react';

interface FooterProps {
  whatsappNumber: string;
}

const Footer = ({ whatsappNumber }: FooterProps) => {
  return (
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
  );
};

export default Footer;
