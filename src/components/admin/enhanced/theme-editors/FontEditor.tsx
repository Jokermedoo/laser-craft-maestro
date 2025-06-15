
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { Type, Download } from 'lucide-react';

const FontEditor = () => {
  const { settings, updateTheme } = useAdmin();

  const fontFamilies = [
    { name: 'Cairo', value: 'Cairo, sans-serif', type: 'arabic' },
    { name: 'Tajawal', value: 'Tajawal, sans-serif', type: 'arabic' },
    { name: 'Almarai', value: 'Almarai, sans-serif', type: 'arabic' },
    { name: 'Amiri', value: 'Amiri, serif', type: 'arabic' },
    { name: 'Inter', value: 'Inter, sans-serif', type: 'latin' },
    { name: 'Roboto', value: 'Roboto, sans-serif', type: 'latin' },
    { name: 'Poppins', value: 'Poppins, sans-serif', type: 'latin' },
    { name: 'Montserrat', value: 'Montserrat, sans-serif', type: 'latin' },
  ];

  const updateFontSize = (size: string, value: number) => {
    updateTheme({
      fonts: {
        ...settings.theme.fonts,
        size: {
          ...settings.theme.fonts.size,
          [size]: `${value}rem`
        }
      }
    });
  };

  const updateFontFamily = (type: 'primary' | 'secondary', family: string) => {
    updateTheme({
      fonts: {
        ...settings.theme.fonts,
        [type]: family
      }
    });
  };

  const fontSizes = [
    { key: 'xs', label: 'صغير جداً', min: 0.5, max: 1, step: 0.05 },
    { key: 'sm', label: 'صغير', min: 0.7, max: 1.2, step: 0.05 },
    { key: 'base', label: 'عادي', min: 0.8, max: 1.5, step: 0.05 },
    { key: 'lg', label: 'كبير', min: 1, max: 2, step: 0.05 },
    { key: 'xl', label: 'كبير جداً', min: 1.2, max: 2.5, step: 0.05 },
    { key: '2xl', label: 'عملاق', min: 1.4, max: 3, step: 0.1 },
    { key: '3xl', label: 'ضخم', min: 1.6, max: 4, step: 0.1 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* اختيار الخطوط */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Type className="h-5 w-5 ml-2" />
              عائلات الخطوط
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-gray-300 mb-2 block">الخط الأساسي</Label>
              <Select
                value={settings.theme.fonts.primary}
                onValueChange={(value) => updateFontFamily('primary', value)}
              >
                <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-gray-600">
                  <div className="text-gray-300 text-xs p-2 border-b border-gray-600">الخطوط العربية</div>
                  {fontFamilies.filter(f => f.type === 'arabic').map((font) => (
                    <SelectItem key={font.value} value={font.value} className="text-white hover:bg-slate-600">
                      <span style={{ fontFamily: font.value }}>{font.name}</span>
                    </SelectItem>
                  ))}
                  <div className="text-gray-300 text-xs p-2 border-b border-gray-600">الخطوط اللاتينية</div>
                  {fontFamilies.filter(f => f.type === 'latin').map((font) => (
                    <SelectItem key={font.value} value={font.value} className="text-white hover:bg-slate-600">
                      <span style={{ fontFamily: font.value }}>{font.name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-gray-300 mb-2 block">الخط الثانوي</Label>
              <Select
                value={settings.theme.fonts.secondary}
                onValueChange={(value) => updateFontFamily('secondary', value)}
              >
                <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-gray-600">
                  {fontFamilies.map((font) => (
                    <SelectItem key={font.value} value={font.value} className="text-white hover:bg-slate-600">
                      <span style={{ fontFamily: font.value }}>{font.name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <div 
                className="p-4 rounded-lg border border-gray-600 bg-slate-700/30"
                style={{ fontFamily: settings.theme.fonts.primary }}
              >
                <h3 className="text-lg text-white mb-2">معاينة الخط الأساسي</h3>
                <p className="text-gray-300 text-sm">
                  هذا نص تجريبي لمعاينة الخط الأساسي المختار. يمكنك رؤية كيف يبدو النص بهذا الخط.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* أحجام الخطوط */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">أحجام الخطوط</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {fontSizes.map((size) => (
              <div key={size.key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-gray-300">{size.label}</Label>
                  <span className="text-sm text-gray-400">
                    {settings.theme.fonts.size[size.key as keyof typeof settings.theme.fonts.size]}
                  </span>
                </div>
                <Slider
                  value={[parseFloat(settings.theme.fonts.size[size.key as keyof typeof settings.theme.fonts.size])]}
                  onValueChange={(value) => updateFontSize(size.key, value[0])}
                  min={size.min}
                  max={size.max}
                  step={size.step}
                  className="w-full"
                />
                <div 
                  className="text-white text-center p-2 bg-slate-700/30 rounded"
                  style={{ 
                    fontSize: settings.theme.fonts.size[size.key as keyof typeof settings.theme.fonts.size],
                    fontFamily: settings.theme.fonts.primary 
                  }}
                >
                  نموذج نص ({size.label})
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* معاينة شاملة للخطوط */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">معاينة شاملة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4" style={{ fontFamily: settings.theme.fonts.primary }}>
            <h1 
              className="text-white font-bold"
              style={{ fontSize: settings.theme.fonts.size['3xl'] }}
            >
              عنوان رئيسي كبير
            </h1>
            <h2 
              className="text-gray-200 font-semibold"
              style={{ fontSize: settings.theme.fonts.size['2xl'] }}
            >
              عنوان فرعي متوسط
            </h2>
            <h3 
              className="text-gray-300 font-medium"
              style={{ fontSize: settings.theme.fonts.size.xl }}
            >
              عنوان صغير
            </h3>
            <p 
              className="text-gray-300"
              style={{ fontSize: settings.theme.fonts.size.base }}
            >
              هذا نص عادي لمعاينة الخط في حجمه الطبيعي. يمكنك رؤية كيف تبدو الفقرات والنصوص الطويلة بالخط المختار.
            </p>
            <p 
              className="text-gray-400"
              style={{ fontSize: settings.theme.fonts.size.sm }}
            >
              نص صغير للتفاصيل والملاحظات الإضافية.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FontEditor;
