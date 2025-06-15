
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAdmin } from '@/contexts/AdminContext';
import { Sparkles, Zap, Clock } from 'lucide-react';

const EffectsEditor = () => {
  const { settings, updateTheme } = useAdmin();

  const updateShadow = (key: string, value: string) => {
    updateTheme({
      shadows: {
        ...settings.theme.shadows,
        [key]: value
      }
    });
  };

  const updateAnimation = (key: string, value: string | number) => {
    updateTheme({
      animations: {
        ...settings.theme.animations,
        [key]: typeof value === 'number' ? `${value}ms` : value
      }
    });
  };

  const updateHoverEffect = (key: string, value: string | number) => {
    updateTheme({
      animations: {
        ...settings.theme.animations,
        hover: {
          ...settings.theme.animations.hover,
          [key]: typeof value === 'number' ? value.toString() : value
        }
      }
    });
  };

  const shadowPresets = [
    { name: 'صغير', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
    { name: 'متوسط', value: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
    { name: 'كبير', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
    { name: 'عملاق', value: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
    { name: 'ملون', value: '0 10px 30px rgb(139 92 246 / 0.3)' },
    { name: 'دافع', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  ];

  const easingOptions = [
    { name: 'خطي', value: 'linear' },
    { name: 'سهل', value: 'ease' },
    { name: 'سهل للداخل', value: 'ease-in' },
    { name: 'سهل للخارج', value: 'ease-out' },
    { name: 'سهل للداخل والخارج', value: 'ease-in-out' },
    { name: 'مخصص', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* محرر الظلال */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Sparkles className="h-5 w-5 ml-2" />
              الظلال والتأثيرات
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.keys(settings.theme.shadows).map((shadowKey) => (
              <div key={shadowKey} className="space-y-3">
                <Label className="text-gray-300">ظل {shadowKey}</Label>
                <Select
                  value={settings.theme.shadows[shadowKey as keyof typeof settings.theme.shadows]}
                  onValueChange={(value) => updateShadow(shadowKey, value)}
                >
                  <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-gray-600">
                    {shadowPresets.map((preset) => (
                      <SelectItem key={preset.value} value={preset.value} className="text-white hover:bg-slate-600">
                        {preset.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex items-center justify-center p-6 bg-slate-700/30 rounded">
                  <div 
                    className="w-20 h-20 bg-purple-500 rounded-lg"
                    style={{ 
                      boxShadow: settings.theme.shadows[shadowKey as keyof typeof settings.theme.shadows]
                    }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* محرر الحركات */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Zap className="h-5 w-5 ml-2" />
              الحركات والانتقالات
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label className="text-gray-300">مدة الانتقال</Label>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Slider
                  value={[parseInt(settings.theme.animations.duration)]}
                  onValueChange={(value) => updateAnimation('duration', value[0])}
                  min={100}
                  max={1000}
                  step={50}
                  className="flex-1"
                />
                <span className="text-sm text-gray-400 min-w-fit">
                  {settings.theme.animations.duration}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-gray-300">نوع الانتقال</Label>
              <Select
                value={settings.theme.animations.easing}
                onValueChange={(value) => updateAnimation('easing', value)}
              >
                <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-gray-600">
                  {easingOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-white hover:bg-slate-600">
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-gray-300">تأثير التكبير عند التمرير</Label>
              <Slider
                value={[parseFloat(settings.theme.animations.hover.scale)]}
                onValueChange={(value) => updateHoverEffect('scale', value[0])}
                min={1}
                max={1.2}
                step={0.01}
                className="w-full"
              />
              <span className="text-sm text-gray-400">
                {settings.theme.animations.hover.scale}
              </span>
            </div>

            {/* معاينة التأثيرات */}
            <div className="space-y-3">
              <Label className="text-gray-300">معاينة التأثيرات</Label>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="bg-purple-600 text-white p-4 rounded-lg text-center cursor-pointer select-none"
                  style={{
                    transition: settings.theme.animations.hover.transition,
                    boxShadow: settings.theme.shadows.md
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `scale(${settings.theme.animations.hover.scale})`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  مررني عليّ
                </div>
                <div 
                  className="bg-blue-600 text-white p-4 rounded-lg text-center cursor-pointer select-none"
                  style={{
                    transition: `all ${settings.theme.animations.duration} ${settings.theme.animations.easing}`,
                    boxShadow: settings.theme.shadows.lg
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = settings.theme.shadows.xl;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = settings.theme.shadows.lg;
                  }}
                >
                  تأثير الارتفاع
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* معاينة شاملة للتأثيرات */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Clock className="h-5 w-5 ml-2" />
            معاينة شاملة للتأثيرات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.keys(settings.theme.shadows).map((shadowKey) => (
              <div 
                key={shadowKey}
                className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 rounded-lg text-center cursor-pointer select-none"
                style={{
                  boxShadow: settings.theme.shadows[shadowKey as keyof typeof settings.theme.shadows],
                  transition: `all ${settings.theme.animations.duration} ${settings.theme.animations.easing}`,
                  borderRadius: settings.theme.borderRadius.lg
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `scale(${settings.theme.animations.hover.scale})`;
                  e.currentTarget.style.boxShadow = settings.theme.shadows.xl;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = settings.theme.shadows[shadowKey as keyof typeof settings.theme.shadows];
                }}
              >
                <h4 className="font-bold mb-2">ظل {shadowKey}</h4>
                <p className="text-sm opacity-90">
                  مررني عليّ لرؤية التأثير
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EffectsEditor;
