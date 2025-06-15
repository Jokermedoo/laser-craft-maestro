import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageSquare, Phone } from 'lucide-react';
import { useScroll } from "@/hooks/use-scroll"
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

interface NavbarProps {
  whatsappNumber: string;
}

const Navbar = ({ whatsappNumber }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const scrolled = useScroll(50);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'معرض الأعمال', href: '/gallery' },
    { name: 'خطوات العمل', href: '/work-steps' },
    { name: 'أسئلة شائعة', href: '/faq' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-slate-900/70 backdrop-blur-sm border-purple-500/50" : "bg-transparent border-transparent"}`}>
      <div className="container max-w-screen-xl flex items-center justify-between py-4 px-6">
        <Link to="/" className="font-bold text-2xl text-white">
          المعز
        </Link>

        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.href} className="text-gray-300 hover:text-white transition-colors duration-200">
              {item.name}
            </Link>
          ))}
          <ThemeSwitcher />
          <Button asChild variant="outline">
            <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، لدي استفسار`} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4 ml-2" />
              تواصل عبر واتساب
            </a>
          </Button>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-900/95 backdrop-blur-sm text-white">
            <SheetHeader>
              <SheetTitle>القائمة</SheetTitle>
              <SheetDescription>
                تصفح خدماتنا ومنتجاتنا
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-lg hover:bg-slate-800 rounded-md px-4"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="py-2 px-4">
                <ThemeSwitcher />
              </div>
              <Button asChild className="w-full mt-4">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4 ml-2" />
                  تواصل عبر واتساب
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full mt-2">
                <a href="tel:+201141990282">
                  <Phone className="h-4 w-4 ml-2" />
                  اتصل بنا
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
