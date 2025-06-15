
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Download, RotateCcw, Wand2 } from 'lucide-react';

interface ElementPreviewProps {
  elements: any[];
  onExport: () => void;
  onReset: () => void;
  onRandomize: () => void;
}

const ElementPreview = ({ elements, onExport, onReset, onRandomize }: ElementPreviewProps) => {
  return (
    <Card className="bg-slate-800/50 border-purple-500/30 sticky top-4">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Eye className="h-5 w-5 ml-2" />
          معاينة العناصر
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* معاينة مصغرة للواجهة */}
        <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-purple-900 rounded-lg border border-purple-500/30 overflow-hidden">
          <div className="p-4 h-full flex flex-col">
            {/* هيدر مصغر */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-4 bg-purple-400 rounded opacity-80"></div>
              <div className="flex space-x-1 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              </div>
            </div>
            
            {/* محتوى مصغر */}
            <div className="flex-1 space-y-2">
              <div className="w-3/4 h-3 bg-white/60 rounded"></div>
              <div className="w-1/2 h-2 bg-white/40 rounded"></div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="h-8 bg-purple-400/50 rounded"></div>
                <div className="h-8 bg-blue-400/50 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-700/50 p-2 rounded">
            <div className="text-purple-400 font-medium">عدد العناصر</div>
            <div className="text-white text-lg">{elements.length}</div>
          </div>
          <div className="bg-slate-700/50 p-2 rounded">
            <div className="text-green-400 font-medium">العناصر النشطة</div>
            <div className="text-white text-lg">{elements.filter(e => e.active !== false).length}</div>
          </div>
        </div>

        {/* قائمة العناصر */}
        <div className="space-y-2 max-h-32 overflow-y-auto">
          <h4 className="text-white text-sm font-medium">العناصر المرتبة</h4>
          {elements.map((element, index) => (
            <div key={element.id} className="flex items-center justify-between text-xs">
              <span className="text-gray-300">{index + 1}. {element.name}</span>
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: element.type === 'color' ? element.value : '#8B5CF6' }}
              />
            </div>
          ))}
        </div>

        {/* أزرار التحكم */}
        <div className="space-y-2">
          <Button 
            onClick={onRandomize}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            size="sm"
          >
            <Wand2 className="h-4 w-4 ml-2" />
            ترتيب عشوائي
          </Button>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={onReset}
              variant="outline"
              className="border-red-500/50 text-red-400 hover:bg-red-600/20"
              size="sm"
            >
              <RotateCcw className="h-3 w-3 ml-1" />
              إعادة تعيين
            </Button>
            <Button 
              onClick={onExport}
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-600/20"
              size="sm"
            >
              <Download className="h-3 w-3 ml-1" />
              تصدير
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ElementPreview;
