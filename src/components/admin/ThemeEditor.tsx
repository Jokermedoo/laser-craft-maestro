
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Sparkles, Wand2 } from 'lucide-react';
import DragDropThemeEditor from './enhanced/DragDropThemeEditor';
import QuickThemePresets from './theme/QuickThemePresets';
import ColorPreview from './theme/ColorPreview';

const ThemeEditor = () => {
  const [activeTab, setActiveTab] = useState('advanced');

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Palette className="h-8 w-8 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">محرر الألوان والتصميم</h2>
          <p className="text-gray-400">تخصيص ألوان الموقع بشكل مباشر مع أدوات متقدمة</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
          <TabsTrigger value="advanced" className="data-[state=active]:bg-purple-600">
            <Wand2 className="h-4 w-4 ml-2" />
            المحرر المتقدم
          </TabsTrigger>
          <TabsTrigger value="quick" className="data-[state=active]:bg-purple-600">
            <Sparkles className="h-4 w-4 ml-2" />
            التخصيص السريع
          </TabsTrigger>
        </TabsList>

        <TabsContent value="advanced" className="mt-6">
          <DragDropThemeEditor />
        </TabsContent>

        <TabsContent value="quick" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <QuickThemePresets />
            <ColorPreview />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ThemeEditor;
