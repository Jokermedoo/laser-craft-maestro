
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { Palette, Copy, RefreshCw, Wand2 } from 'lucide-react';

const ColorEditor = () => {
  const { settings, updateTheme } = useAdmin();
  const [colorHistory, setColorHistory] = useState<string[]>([]);

  const colorVariables = [
    { key: 'primaryColor', label: 'اللون الأساسي', description: 'لون العناصر الرئيسية والأزرار' },
    { key: 'secondaryColor', label: 'اللون الثانوي', description: 'لون العناصر الثانوية' },
    { key: 'accentColor', label: 'لون التمييز', description: 'لون التركيز والتنبيهات' },
    { key: 'backgroundColor', label: 'لون الخلفية', description: 'لون خلفية الموقع الرئيسية' },
    { key: 'textColor', label: 'لون النص', description: 'لون النصوص الأساسية' },
  ];

  const updateColor = (key: string, value: string) => {
    // حفظ في التاريخ
    const currentColor = (settings.theme as any)[key];
    if (!colorHistory.includes(currentColor)) {
      setColorHistory(prev => [currentColor, ...prev].slice(0, 10));
    }
    
    updateTheme({ [key]: value } as any);
  };

  const generateRandomPalette = () => {
    const hue = Math.floor(Math.random() * 360);
    const colors = {
      primaryColor: `hsl(${hue}, 70%, 50%)`,
      secondaryColor: `hsl(${(hue + 120) % 360}, 60%, 55%)`,
      accentColor: `hsl(${(hue + 240) % 360}, 80%, 60%)`,
      backgroundColor: `hsl(${hue}, 20%, 8%)`,
      textColor: `hsl(${hue}, 10%, 95%)`,
    };
    updateTheme(colors);
  };

  const predefinedPalettes = [
    {
      name: 'البنفسجي الملكي',
      colors: {
        primaryColor: '#8B5CF6',
        secondaryColor: '#06B6D4',
        accentColor: '#F59E0B',
        backgroundColor: '#0F172A',
        textColor: '#FFFFFF'
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
    },
    {
      name: 'الأحمر الناري',
      colors: {
        primaryColor: '#EF4444',
        secondaryColor: '#F97316',
        accentColor: '#FBBF24',
        backgroundColor: '#7F1D1D',
        textColor: '#FEF2F2'
      }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* محرر الألوان الأساسي */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Palette className="h-5 w-5 ml-2" />
              الألوان الأساسية
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {colorVariables.map((colorVar) => (
              <div key={colorVar.key} className="space-y-2">
                <Label className="text-gray-300">{colorVar.label}</Label>
                <p className="text-xs text-gray-400">{colorVar.description}</p>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div
                    className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
                    style={{ backgroundColor: (settings.theme as any)[colorVar.key] }}
                    onClick={() => {
                      const input = document.createElement('input');
                      input.type = 'color';
                      input.value = (settings.theme as any)[colorVar.key];
                      input.onchange = (e) => updateColor(colorVar.key, (e.target as HTMLInputElement).value);
                      input.click();
                    }}
                  />
                  <Input
                    type="text"
                    value={(settings.theme as any)[colorVar.key]}
                    onChange={(e) => updateColor(colorVar.key, e.target.value)}
                    className="flex-1 bg-slate-700 border-gray-600 text-white"
                  />
                  <Button
                    onClick={() => navigator.clipboard.writeText((settings.theme as any)[colorVar.key])}
                    size="sm"
                    variant="outline"
                    className="border-gray-600 hover:bg-gray-600"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            <Button
              onClick={generateRandomPalette}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Wand2 className="h-4 w-4 ml-2" />
              توليد لوحة عشوائية
            </Button>
          </CardContent>
        </Card>

        {/* القوالب الجاهزة */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">القوالب الجاهزة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {predefinedPalettes.map((palette, index) => (
              <div key={index} className="p-4 bg-slate-700/50 rounded-lg">
                <h4 className="text-white font-medium mb-3">{palette.name}</h4>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    {Object.values(palette.colors).map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-8 h-8 rounded border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <Button
                    onClick={() => updateTheme(palette.colors)}
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
      </div>

      {/* تاريخ الألوان */}
      {colorHistory.length > 0 && (
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <RefreshCw className="h-5 w-5 ml-2" />
              تاريخ الألوان
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {colorHistory.map((color, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded cursor-pointer border-2 border-white/20 hover:border-white/50"
                  style={{ backgroundColor: color }}
                  onClick={() => navigator.clipboard.writeText(color)}
                  title={`انقر للنسخ: ${color}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ColorEditor;
