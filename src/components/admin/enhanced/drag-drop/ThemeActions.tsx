
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Upload, Wand2 } from 'lucide-react';
import { ColorItem } from './SortableColorItem';

interface ThemeActionsProps {
  colors: ColorItem[];
  onGenerateRandom: () => void;
  onExport: () => void;
  onImport: (colors: ColorItem[]) => void;
}

const ThemeActions = ({ colors, onGenerateRandom, onExport, onImport }: ThemeActionsProps) => {
  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const themeData = JSON.parse(e.target?.result as string);
            if (themeData.colors) {
              onImport(themeData.colors);
            }
          } catch (error) {
            console.error('خطأ في استيراد الثيم:', error);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <Button onClick={onGenerateRandom} variant="outline" size="sm">
        <Wand2 className="h-4 w-4 ml-2" />
        ثيم عشوائي
      </Button>
      <Button onClick={onExport} variant="outline" size="sm">
        <Download className="h-4 w-4 ml-2" />
        تصدير
      </Button>
      <Button onClick={handleImport} variant="outline" size="sm">
        <Upload className="h-4 w-4 ml-2" />
        استيراد
      </Button>
    </div>
  );
};

export default ThemeActions;
