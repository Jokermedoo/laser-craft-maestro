
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye } from 'lucide-react';
import { ColorItem } from './SortableColorItem';

interface ColorPreviewPanelProps {
  colors: ColorItem[];
}

const ColorPreviewPanel = ({ colors }: ColorPreviewPanelProps) => {
  const getColorByCategory = (category: string) => {
    return colors.find(c => c.category === category)?.value || '#000000';
  };

  return (
    <Card className="bg-slate-800/50 border-purple-500/30 mt-4">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Eye className="h-5 w-5 ml-2" />
          معاينة سريعة
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="p-4 rounded-lg border"
          style={{ 
            backgroundColor: getColorByCategory('background'),
            color: getColorByCategory('text'),
            borderColor: getColorByCategory('primary')
          }}
        >
          <h3 
            className="font-bold mb-2"
            style={{ color: getColorByCategory('primary') }}
          >
            عنوان تجريبي
          </h3>
          <p className="text-sm mb-3">
            هذا نص تجريبي لمعاينة الألوان
          </p>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <button 
              className="px-3 py-1 rounded text-xs font-medium"
              style={{ 
                backgroundColor: getColorByCategory('primary'),
                color: getColorByCategory('background')
              }}
            >
              زر أساسي
            </button>
            <button 
              className="px-3 py-1 rounded text-xs font-medium"
              style={{ 
                backgroundColor: getColorByCategory('secondary'),
                color: getColorByCategory('text')
              }}
            >
              زر ثانوي
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPreviewPanel;
