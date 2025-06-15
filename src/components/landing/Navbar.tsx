
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { title: 'الرئيسية', href: '#top' },
  { title: 'عن الورشة', href: '#about' },
  { title: 'خدماتنا', href: '#services' },
  { title: 'أعمالنا', href: '#gallery' },
  { title: 'لماذا نحن؟', href: '#features' },
  { title: 'اتصل بنا', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "201021911335";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img 
              src="/lovable-uploads/cda3356a-11e2-4bd5-a33f-f95254a654ed.png" 
              alt="المعز لوجو" 
              className="h-12 w-12" 
            />
            <span className="text-xl font-bold text-primary whitespace-nowrap">المعز لليزر</span>
          </a>

          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.title}
              </a>
            ))}
             <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Phone className="ml-2 h-4 w-4" />
                    اطلب الآن
                </a>
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 pb-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors text-lg text-center py-2"
              >
                {link.title}
              </a>
            ))}
            <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
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
