
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
      
      {/* تقليل عدد العناصر المتحركة للهواتف */}
      <div className="hidden md:block absolute top-0 left-1/4 w-72 h-72 bg-purple-500/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      <div className="hidden md:block absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      
      {/* جزيئات أقل للهواتف */}
      <div className="hidden sm:block absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-40"></div>
      <div className="hidden sm:block absolute top-1/2 right-20 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-30"></div>
      <div className="hidden lg:block absolute bottom-32 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-50"></div>
    </div>
  );
};

export default AnimatedBackground;
