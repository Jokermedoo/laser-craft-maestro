
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { Move, Square } from 'lucide-react';

const SpacingEditor = () => {
  const { settings, updateTheme } = useAdmin();

  const updateSpacing = (key: string, value: number) => {
    updateTheme({
      spacing: {
        ...settings.theme.spacing,
        [key]: `${value}rem`
      }
    });
  };

  const updateBorderRadius = (key: string, value: number) => {
    const radiusValue = key === 'full' ? '9999px' : `${value}rem`;
    updateTheme({
      borderRadius: {
        ...settings.theme.borderRadius,
        [key]: radiusValue
      }
    });
  };

  const spacingItems = [
    { key: 'xs', label: 'صغير جداً', min: 0.1, max: 1, step: 0.05 },
    { key: 'sm', label: 'صغير', min: 0.2, max: 1.5, step: 0.05 },
    { key: 'md', label: 'متوسط', min: 0.5, max: 2, step: 0.1 },
    { key: 'lg', label: 'كبير', min: 1, max: 3, step: 0.1 },
    { key: 'xl', label: 'كبير جداً', min: 1.5, max: 4, step: 0.1 },
  ];

  const borderRadiusItems = [
    { key: 'sm', label: 'صغير', min: 0.1, max: 0.5, step: 0.05 },
    { key: 'md', label: 'متوسط', min: 0.2, max: 1, step: 0.05 },
    { key: 'lg', label: 'كبير', min: 0.3, max: 1.5, step: 0.05 },
    { key: 'xl', label: 'كبير جداً', min: 0.5, max: 2, step: 0.1 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* محرر المسافات */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Move className="h-5 w-5 ml-2" />
              المسافات والهوامش
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {spacingItems.map((item) => (
              <div key={item.key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-gray-300">{item.label}</Label>
                  <span className="text-sm text-gray-400">
                    {settings.theme.spacing[item.key as keyof typeof settings.theme.spacing]}
                  </span>
                </div>
                <Slider
                  value={[parseFloat(settings.theme.spacing[item.key as keyof typeof settings.theme.spacing])]}
                  onValueChange={(value) => updateSpacing(item.key, value[0])}
                  min={item.min}
                  max={item.max}
                  step={item.step}
                  className="w-full"
                />
                <div className="flex items-center justify-center p-4 bg-slate-700/30 rounded">
                  <div 
                    className="bg-purple-500 h-8"
                    style={{ 
                      width: settings.theme.spacing[item.key as keyof typeof settings.theme.spacing],
                      minWidth: '4px'
                    }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* محرر الحدود المستديرة */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Square className="h-5 w-5 ml-2" />
              الحدود المستديرة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {borderRadiusItems.map((item) => (
              <div key={item.key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-gray-300">{item.label}</Label>
                  <span className="text-sm text-gray-400">
                    {settings.theme.borderRadius[item.key as keyof typeof settings.theme.borderRadius]}
                  </span>
                </div>
                <Slider
                  value={[parseFloat(settings.theme.borderRadius[item.key as keyof typeof settings.theme.borderRadius])]}
                  onValueChange={(value) => updateBorderRadius(item.key, value[0])}
                  min={item.min}
                  max={item.max}
                  step={item.step}
                  className="w-full"
                />
                <div className="flex items-center justify-center p-4 bg-slate-700/30 rounded">
                  <div 
                    className="bg-purple-500 w-16 h-16"
                    style={{ 
                      borderRadius: settings.theme.borderRadius[item.key as keyof typeof settings.theme.borderRadius]
                    }}
                  />
                </div>
              </div>
            ))}
            
            {/* الاستدارة الكاملة */}
            <div className="space-y-3">
              <Label className="text-gray-300">دائري كامل</Label>
              <div className="flex items-center justify-center p-4 bg-slate-700/30 rounded">
                <div 
                  className="bg-purple-500 w-16 h-16"
                  style={{ borderRadius: settings.theme.borderRadius.full }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* معاينة شاملة للمسافات */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">معاينة التخطيط</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div 
              className="bg-purple-600/20 border border-purple-500/30 text-white text-center"
              style={{ 
                padding: settings.theme.spacing.lg,
                borderRadius: settings.theme.borderRadius.lg 
              }}
            >
              <h3 className="font-bold">صندوق كبير</h3>
              <p style={{ marginTop: settings.theme.spacing.sm }}>
                مع هوامش كبيرة وحدود مستديرة
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {['sm', 'md', 'lg'].map((size) => (
                <div 
                  key={size}
                  className="bg-blue-600/20 border border-blue-500/30 text-white text-center"
                  style={{ 
                    padding: settings.theme.spacing[size as keyof typeof settings.theme.spacing],
                    borderRadius: settings.theme.borderRadius[size as keyof typeof settings.theme.borderRadius]
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4 rtl:space-x-reverse">
              {['sm', 'md', 'lg', 'xl'].map((size) => (
                <div 
                  key={size}
                  className="bg-green-600/20 border border-green-500/30 text-white text-center p-2 text-sm"
                  style={{ 
                    borderRadius: settings.theme.borderRadius[size as keyof typeof settings.theme.borderRadius]
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpacingEditor;
