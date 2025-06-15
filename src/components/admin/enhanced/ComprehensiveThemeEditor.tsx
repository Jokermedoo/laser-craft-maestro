
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAdmin } from '@/contexts/AdminContext';
import { 
  Palette, 
  Type, 
  Layout, 
  Sparkles, 
  Move, 
  Settings,
  Download,
  Upload,
  Wand2,
  RotateCcw
} from 'lucide-react';
import ColorEditor from './theme-editors/ColorEditor';
import FontEditor from './theme-editors/FontEditor';
import SpacingEditor from './theme-editors/SpacingEditor';
import EffectsEditor from './theme-editors/EffectsEditor';
import LayoutEditor from './theme-editors/LayoutEditor';
import AdvancedEditor from './theme-editors/AdvancedEditor';
import ThemePreview from './theme-editors/ThemePreview';
import { useThemeOperations } from '@/hooks/useThemeOperations';

const ComprehensiveThemeEditor = () => {
  const [activeTab, setActiveTab] = useState('colors');
  const { updateTheme, exportTheme, resetTheme } = useAdmin();
  const themeOps = useThemeOperations();

  const handleImportTheme = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        try {
          const theme = await themeOps.importTheme(file);
          updateTheme(theme);
        } catch (error) {
          console.error('خطأ في استيراد الثيم:', error);
        }
      }
    };
    input.click();
  };

  const generateRandomTheme = () => {
    const randomTheme = themeOps.generateRandomTheme();
    updateTheme(randomTheme);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Settings className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">محرر الثيم الشامل المتقدم</h2>
            <p className="text-gray-400">تخصيص كامل للواجهة مع مميزات متقدمة</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            onClick={generateRandomTheme}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Wand2 className="h-4 w-4" />
            <span>ثيم عشوائي</span>
          </button>
          <button
            onClick={resetTheme}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center space-x-2 rtl:space-x-reverse"
          >
            <RotateCcw className="h-4 w-4" />
            <span>إعادة تعيين</span>
          </button>
          <button
            onClick={exportTheme}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Download className="h-4 w-4" />
            <span>تصدير</span>
          </button>
          <button
            onClick={handleImportTheme}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Upload className="h-4 w-4" />
            <span>استيراد</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-6 bg-slate-800/50">
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
              <TabsTrigger value="advanced" className="data-[state=active]:bg-purple-600">
                <Settings className="h-4 w-4 ml-2" />
                متقدم
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

              <TabsContent value="advanced">
                <AdvancedEditor />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="xl:col-span-1">
          <ThemePreview />
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveThemeEditor;
