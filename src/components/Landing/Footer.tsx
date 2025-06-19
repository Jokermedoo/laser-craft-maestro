
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { settingsService, CompanySettings } from '@/services/settingsService';

interface FooterProps {
  companyName: string;
  whatsappNumber?: string;
}

const Footer: React.FC<FooterProps> = ({ companyName, whatsappNumber }) => {
  const [settings, setSettings] = useState<CompanySettings | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await settingsService.get();
      setSettings(data);
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const currentYear = new Date().getFullYear();

  const handleSocialClick = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = whatsappNumber || settings?.whatsapp;
    if (phoneNumber) {
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-purple-500/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">م</span>
              </div>
              <h3 className="text-xl font-bold text-white">{companyName}</h3>
            </div>
            {settings?.description && (
              <p className="text-gray-300 text-sm leading-relaxed">
                {settings.description}
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">روابط سريعة</h4>
            <div className="space-y-2">
              {[
                { label: 'الرئيسية', href: '#hero' },
                { label: 'عن الورشة', href: '#about' },
                { label: 'الخدمات', href: '#services' },
                { label: 'معرض الأعمال', href: '#gallery' },
                { label: 'التواصل', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">معلومات التواصل</h4>
            <div className="space-y-3">
              {settings?.address && (
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{settings.address}</span>
                </div>
              )}
              {settings?.phone && (
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{settings.phone}</span>
                </div>
              )}
              {settings?.email && (
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{settings.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">تابعنا</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              {settings?.facebook_url && (
                <button
                  onClick={() => handleSocialClick(settings.facebook_url!)}
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </button>
              )}
              {settings?.instagram_url && (
                <button
                  onClick={() => handleSocialClick(settings.instagram_url!)}
                  className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </button>
              )}
              {settings?.youtube_url && (
                <button
                  onClick={() => handleSocialClick(settings.youtube_url!)}
                  className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </button>
              )}
            </div>

            {/* WhatsApp Contact */}
            {(whatsappNumber || settings?.whatsapp) && (
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 rtl:space-x-reverse transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">تواصل عبر واتساب</span>
              </button>
            )}

            {/* Working Hours */}
            {settings?.working_hours && (
              <div className="text-gray-300 text-sm">
                <span className="font-medium">ساعات العمل:</span>
                <br />
                {settings.working_hours}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {companyName}. جميع الحقوق محفوظة.
          </p>
          {settings?.website && (
            <p className="text-gray-500 text-xs mt-2">
              {settings.website}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
