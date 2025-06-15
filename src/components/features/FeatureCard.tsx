
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: IconComponent, title, description, color }: FeatureCardProps) => {
  return (
    <Card className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700 text-center hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
      <CardContent className="p-8">
        <div className="w-20 h-20 rounded-2xl bg-slate-700/50 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/20 transition-all duration-500">
          <IconComponent className={`h-10 w-10 ${color} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
