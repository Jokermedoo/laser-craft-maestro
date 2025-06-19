
import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  companyName: string;
  whatsappNumber?: string;
}

const Header: React.FC<HeaderProps> = ({ companyName, whatsappNumber }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'عن الورشة', href: '#about' },
    { label: 'الخدمات', href: '#services' },
    { label: 'معرض الأعمال', href: '#gallery' },
    { label: 'التواصل', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    }
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/30 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">م</span>
            </div>
            <h1 className="text-xl font-bold text-white">{companyName}</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {whatsappNumber && (
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                واتساب
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/30">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {whatsappNumber && (
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white mx-4"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  واتساب
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
