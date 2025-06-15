
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const GalleryCard = ({ image, title, description, category }: GalleryCardProps) => {
  return (
    <Card className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="h-12 w-12 text-white bg-yellow-400/20 rounded-full p-3 backdrop-blur-sm" />
        </div>
      </div>
      <CardContent className="p-4 sm:p-6">
        <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 text-base sm:text-lg">{title}</h3>
        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
