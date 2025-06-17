
import React, { memo } from 'react';

const AnimatedBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-0 will-change-transform pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      {/* تحسين العناصر المتحركة للأداء */}
      <div className="hidden md:block absolute top-0 left-1/4 w-60 h-60 bg-purple-500/8 rounded-full mix-blend-multiply filter blur-2xl animate-pulse opacity-60"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/4 w-60 h-60 bg-yellow-500/8 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000 opacity-60"></div>
      
      {/* جزيئات محسنة بأداء أفضل */}
      <div className="hidden sm:block absolute top-20 left-10 w-1 h-1 bg-yellow-400/40 rounded-full animate-ping"></div>
      <div className="hidden lg:block absolute bottom-32 left-1/4 w-1 h-1 bg-yellow-300/30 rounded-full animate-bounce"></div>
      <div className="hidden xl:block absolute top-1/2 right-10 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-500"></div>
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;
