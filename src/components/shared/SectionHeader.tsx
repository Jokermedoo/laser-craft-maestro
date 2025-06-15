
import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({ subtitle, title, description, className = '' }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-16 sm:mb-20 ${className}`}>
      <span className="text-yellow-400 font-semibold text-base sm:text-lg mb-4 block">{subtitle}</span>
      <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">{title}</h2>
      {description && (
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
