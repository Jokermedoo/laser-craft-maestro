
import React from 'react';
import { ArrowDown, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  companyName: string;
  description: string;
  whatsappNumber?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  companyName,
  description,
  whatsappNumber
}) => {
  const handleWhatsAppClick = () => {
    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {companyName}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse mb-12">
          {whatsappNumber && (
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-6 h-6 ml-2" />
              تواصل معنا الآن
            </Button>
          )}
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            شاهد أعمالنا
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown 
            className="w-8 h-8 text-purple-400 mx-auto cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
