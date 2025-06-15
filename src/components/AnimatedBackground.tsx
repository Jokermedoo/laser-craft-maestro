
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      
      {/* إضافة جزيئات ذهبية متحركة */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-70"></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-amber-400 rounded-full animate-ping delay-500 opacity-50"></div>
    </div>
  );
};

export default AnimatedBackground;
