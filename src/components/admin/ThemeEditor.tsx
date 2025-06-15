
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAdmin } from '@/contexts/AdminContext';
import { Palette, Sparkles, Wand2 } from 'lucide-react';
import DragDropThemeEditor from './enhanced/DragDropThemeEditor';

const ThemeEditor = () => {
  const { settings, updateTheme } = useAdmin();
  const [activeTab, setActiveTab] = useState('advanced');

  const colorPresets = [
    {
      name: 'البنفسجي الكلاسيكي',
      colors: {
        primaryColor: '#8B5CF6',
        secondaryColor: '#06B6D4',
        accentColor: '#F59E0B',
        backgroundColor: '#0F172A',
        textColor: '#FFFFFF'
      }
    },
    {
      name: 'الأزرق الملكي',
      colors: {
        primaryColor: '#3B82F6',
        secondaryColor: '#10B981',
        accentColor: '#F59E0B',
        backgroundColor: '#1E293B',
        textColor: '#F8FAFC'
      }
    },
    {
      name: 'الأخضر الطبيعي',
      colors: {
        primaryColor: '#10B981',
        secondaryColor: '#3B82F6',
        accentColor: '#F59E0B',
        backgroundColor: '#064E3B',
        textColor: '#ECFDF5'
      }
    }
  ];

  const applyPreset = (preset: typeof colorPresets[0]) => {
    updateTheme(preset.colors);
  };

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
            {/* القوالب السريعة */}
            <Card className="bg-slate-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Sparkles className="h-5 w-5 ml-2" />
                  قوالب الألوان الجاهزة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {colorPresets.map((preset, index) => (
                  <div key={index} className="p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="text-white font-medium mb-3">{preset.name}</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        {Object.values(preset.colors).slice(0, 4).map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-8 h-8 rounded-full border-2 border-white/20"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <Button
                        onClick={() => applyPreset(preset)}
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        تطبيق
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* معاينة الألوان */}
            <Card className="bg-slate-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">معاينة الألوان الحالية</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="p-6 rounded-lg"
                  style={{ 
                    backgroundColor: settings.theme.backgroundColor,
                    color: settings.theme.textColor 
                  }}
                >
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ color: settings.theme.primaryColor }}
                  >
                    ورشة المعز لخدمات الليزر
                  </h3>
                  <p className="mb-4">
                    هذا نص تجريبي لمعاينة الألوان المختارة على الموقع
                  </p>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <button 
                      className="px-6 py-2 rounded-lg font-medium"
                      style={{ backgroundColor: settings.theme.primaryColor, color: settings.theme.textColor }}
                    >
                      زر أساسي
                    </button>
                    <button 
                      className="px-6 py-2 rounded-lg font-medium"
                      style={{ backgroundColor: settings.theme.secondaryColor, color: settings.theme.textColor }}
                    >
                      زر ثانوي
                    </button>
                    <button 
                      className="px-6 py-2 rounded-lg font-medium"
                      style={{ backgroundColor: settings.theme.accentColor, color: settings.theme.backgroundColor }}
                    >
                      زر التمييز
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ThemeEditor;
