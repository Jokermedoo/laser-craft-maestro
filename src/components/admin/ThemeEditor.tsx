
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Sparkles, Settings } from 'lucide-react';
import DragDropThemeEditor from './enhanced/DragDropThemeEditor';
import ComprehensiveThemeEditor from './enhanced/ComprehensiveThemeEditor';
import QuickThemePresets from './theme/QuickThemePresets';
import ColorPreview from './theme/ColorPreview';

const ThemeEditor = () => {
  const [activeTab, setActiveTab] = useState('comprehensive');

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Settings className="h-8 w-8 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">محرر الألوان والتصميم المتقدم</h2>
          <p className="text-gray-400">تخصيص شامل لجميع عناصر التصميم مع أدوات متقدمة</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
          <TabsTrigger value="comprehensive" className="data-[state=active]:bg-purple-600">
            <Settings className="h-4 w-4 ml-2" />
            التحرير الشامل
          </TabsTrigger>
          <TabsTrigger value="advanced" className="data-[state=active]:bg-purple-600">
            <Palette className="h-4 w-4 ml-2" />
            محرر الألوان المتقدم
          </TabsTrigger>
          <TabsTrigger value="quick" className="data-[state=active]:bg-purple-600">
            <Sparkles className="h-4 w-4 ml-2" />
            التخصيص السريع
          </TabsTrigger>
        </TabsList>

        <TabsContent value="comprehensive" className="mt-6">
          <ComprehensiveThemeEditor />
        </TabsContent>

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
