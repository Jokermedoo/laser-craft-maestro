
import React, { memo } from 'react';

const AnimatedBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-0 will-change-transform">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
      
      {/* تقليل عدد العناصر المتحركة وتحسين الأداء */}
      <div className="hidden md:block absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
      
      {/* جزيئات محسنة */}
      <div className="hidden sm:block absolute top-20 left-10 w-1 h-1 bg-yellow-400/60 rounded-full animate-ping"></div>
      <div className="hidden lg:block absolute bottom-32 left-1/4 w-1 h-1 bg-yellow-300/40 rounded-full animate-bounce"></div>
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;
