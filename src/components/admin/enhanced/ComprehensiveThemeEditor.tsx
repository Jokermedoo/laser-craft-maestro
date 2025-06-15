
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdmin } from '@/contexts/AdminContext';
import { 
  Palette, 
  Type, 
  Layout, 
  Sparkles, 
  Move, 
  Settings,
  Eye,
  Download,
  Upload
} from 'lucide-react';
import ColorEditor from './theme-editors/ColorEditor';
import FontEditor from './theme-editors/FontEditor';
import SpacingEditor from './theme-editors/SpacingEditor';
import EffectsEditor from './theme-editors/EffectsEditor';
import LayoutEditor from './theme-editors/LayoutEditor';
import ThemePreview from './theme-editors/ThemePreview';

const ComprehensiveThemeEditor = () => {
  const [activeTab, setActiveTab] = useState('colors');
  const { settings, updateTheme } = useAdmin();

  const exportTheme = () => {
    const themeData = {
      name: 'ثيم مخصص شامل',
      theme: settings.theme,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(themeData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'comprehensive-theme.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importTheme = () => {
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
            if (themeData.theme) {
              updateTheme(themeData.theme);
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Settings className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">محرر الثيم الشامل</h2>
            <p className="text-gray-400">تخصيص جميع عناصر التصميم بشكل متقدم</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            onClick={exportTheme}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Download className="h-4 w-4" />
            <span>تصدير الثيم</span>
          </button>
          <button
            onClick={importTheme}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Upload className="h-4 w-4" />
            <span>استيراد ثيم</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* محررات الثيم */}
        <div className="xl:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5 bg-slate-800/50">
              <TabsTrigger value="colors" className="data-[state=active]:bg-purple-600">
                <Palette className="h-4 w-4 ml-2" />
                الألوان
              </TabsTrigger>
              <TabsTrigger value="fonts" className="data-[state=active]:bg-purple-600">
                <Type className="h-4 w-4 ml-2" />
                الخطوط
              </TabsTrigger>
              <TabsTrigger value="spacing" className="data-[state=active]:bg-purple-600">
                <Move className="h-4 w-4 ml-2" />
                المسافات
              </TabsTrigger>
              <TabsTrigger value="effects" className="data-[state=active]:bg-purple-600">
                <Sparkles className="h-4 w-4 ml-2" />
                التأثيرات
              </TabsTrigger>
              <TabsTrigger value="layout" className="data-[state=active]:bg-purple-600">
                <Layout className="h-4 w-4 ml-2" />
                التخطيط
              </TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <TabsContent value="colors">
                <ColorEditor />
              </TabsContent>
              
              <TabsContent value="fonts">
                <FontEditor />
              </TabsContent>
              
              <TabsContent value="spacing">
                <SpacingEditor />
              </TabsContent>
              
              <TabsContent value="effects">
                <EffectsEditor />
              </TabsContent>
              
              <TabsContent value="layout">
                <LayoutEditor />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* معاينة مباشرة */}
        <div className="xl:col-span-1">
          <ThemePreview />
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveThemeEditor;
