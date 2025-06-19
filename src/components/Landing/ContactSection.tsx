
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { settingsService, CompanySettings } from '@/services/settingsService';
import { Button } from '@/components/ui/button';
import Input from '@/components/common/Input';
import Loader from '@/components/common/Loader';

interface ContactSectionProps {
  whatsappNumber?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ whatsappNumber }) => {
  const [settings, setSettings] = useState<CompanySettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await settingsService.get();
      setSettings(data);
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppContact = () => {
    const message = `مرحباً، اسمي ${formData.name}${formData.phone ? ` ورقم هاتفي ${formData.phone}` : ''}.\n\n${formData.message}`;
    const phoneNumber = whatsappNumber || settings?.whatsapp;
    
    if (phoneNumber) {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
      // Reset form
      setFormData({ name: '', phone: '', message: '' });
    }
  };

  const handlePhoneCall = () => {
    if (settings?.phone) {
      window.location.href = `tel:${settings.phone}`;
    }
  };

  const handleEmailContact = () => {
    if (settings?.email) {
      const subject = `استفسار من ${formData.name}`;
      const body = `اسمي: ${formData.name}\nرقم الهاتف: ${formData.phone}\n\nالرسالة:\n${formData.message}`;
      window.location.href = `mailto:${settings.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  if (loading) {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <Loader text="جاري تحميل بيانات التواصل..." />
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نحن هنا لمساعدتك في تحقيق أفكارك وتنفيذ مشاريعك بأعلى جودة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
            
            <div className="space-y-6">
              <Input
                label="الاسم"
                placeholder="اسمك الكريم"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-slate-700 border-gray-600 text-white"
              />
              
              <Input
                label="رقم الهاتف"
                placeholder="رقم هاتفك"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-slate-700 border-gray-600 text-white"
              />
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">الرسالة</label>
                <textarea
                  placeholder="اكتب رسالتك هنا..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full p-3 bg-slate-700 border border-gray-600 text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  onClick={handleWhatsAppContact}
                  disabled={!formData.name || !formData.message}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  واتساب
                </Button>
                
                <Button
                  onClick={handleEmailContact}
                  disabled={!formData.name || !formData.message}
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                >
                  <Send className="w-4 h-4 ml-2" />
                  إيميل
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h3>
              
              <div className="space-y-6">
                {settings?.address && (
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">العنوان</h4>
                      <p className="text-gray-300">{settings.address}</p>
                    </div>
                  </div>
                )}

                {settings?.phone && (
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <button
                      onClick={handlePhoneCall}
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform"
                    >
                      <Phone className="w-6 h-6 text-white" />
                    </button>
                    <div>
                      <h4 className="text-white font-semibold mb-1">الهاتف</h4>
                      <p className="text-gray-300">{settings.phone}</p>
                    </div>
                  </div>
                )}

                {settings?.email && (
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">البريد الإلكتروني</h4>
                      <p className="text-gray-300">{settings.email}</p>
                    </div>
                  </div>
                )}

                {settings?.working_hours && (
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">ساعات العمل</h4>
                      <p className="text-gray-300">{settings.working_hours}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-4">تواصل سريع</h4>
              <p className="text-green-100 mb-4">للاستفسارات العاجلة</p>
              <Button
                onClick={() => {
                  const phoneNumber = whatsappNumber || settings?.whatsapp;
                  if (phoneNumber) {
                    window.open(`https://wa.me/${phoneNumber}`, '_blank');
                  }
                }}
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                واتساب مباشر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
