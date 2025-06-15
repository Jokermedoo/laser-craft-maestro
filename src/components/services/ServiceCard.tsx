
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const ServiceCard = ({ icon: IconComponent, title, description, gradient }: ServiceCardProps) => {
  return (
    <Card className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1">
      <CardContent className="p-8 text-center">
        <div className={`bg-gradient-to-r ${gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
          <IconComponent className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
