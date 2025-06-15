
import React from 'react';

const Header = () => {
  return (
    <header className="py-20 text-center container mx-auto px-4">
      <h1 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-wider">
        المعز لخدمات الليزر
      </h1>
      <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
        تفاصيل محفورة بالليزر... تحفتك تبقى قطعة فنية
      </p>
    </header>
  );
};

export default Header;
