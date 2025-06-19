
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoaderProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ 
  text = 'جاري التحميل...', 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className="flex items-center space-x-2 rtl:space-x-reverse text-white">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-purple-400`} />
        {text && <span className="mr-2">{text}</span>}
      </div>
    </div>
  );
};

export default Loader;
