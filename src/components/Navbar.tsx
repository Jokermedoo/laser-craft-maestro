
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  whatsappNumber: string;
}

const Navbar = ({ whatsappNumber }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl border-b border-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse">
            <div className="relative">
              <img 
                src="/lovable-uploads/8421f051-5940-44f7-ac37-3f81bfa87243.png" 
                alt="المعز لوجو" 
                className="h-10 w-10 sm:h-14 sm:w-14 rounded-full border-2 border-yellow-400 shadow-lg" 
                loading="eager"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">المعز لليزر</span>
              <p className="text-xs text-gray-300 hidden sm:block">ورشة متخصصة</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 rtl:space-x-reverse">
            <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group text-sm lg:text-base">
              الرئيسية
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group text-sm lg:text-base">
              عن الورشة
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group text-sm lg:text-base">
              خدماتنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group text-sm lg:text-base">
              أعمالنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group text-sm lg:text-base">
              اتصل بنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button asChild className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm px-4 py-2">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Phone className="ml-2 h-4 w-4" />
                اطلب الآن
              </a>
            </Button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white p-2 rounded-lg bg-purple-600/20 backdrop-blur-sm"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">الرئيسية</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">عن الورشة</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">خدماتنا</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">أعمالنا</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg py-2">اتصل بنا</a>
            <Button asChild size="lg" className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold mt-4">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Phone className="ml-2 h-5 w-5" />
                اطلب الآن على واتساب
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
