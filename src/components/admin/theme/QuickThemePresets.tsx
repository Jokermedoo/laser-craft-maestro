
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

const QuickThemePresets = () => {
  const { updateTheme } = useAdmin();

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
  );
};

export default QuickThemePresets;
