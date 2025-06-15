
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useAdmin } from '@/contexts/AdminContext';
import { Sparkles, Eye, Layers, Palette } from 'lucide-react';

const AdvancedEditor = () => {
  const { settings, updateTheme } = useAdmin();

  const updateAdvanced = (key: string, value: any) => {
    updateTheme({
      advanced: {
        ...settings.theme.advanced,
        [key]: value
      }
    });
  };

  const updateGradient = (type: string, value: string) => {
    updateTheme({
      advanced: {
        ...settings.theme.advanced,
        gradients: {
          ...settings.theme.advanced.gradients,
          [type]: value
        }
      }
    });
  };

  const updateGlassmorphism = (key: string, value: string) => {
    updateTheme({
      advanced: {
        ...settings.theme.advanced,
        glassmorphism: {
          ...settings.theme.advanced.glassmorphism,
          [key]: value
        }
      }
    });
  };

  const updateParticles = (key: string, value: any) => {
    updateTheme({
      advanced: {
        ...settings.theme.advanced,
        particles: {
          ...settings.theme.advanced.particles,
          [key]: value
        }
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* التدرجات المتقدمة */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Palette className="h-5 w-5 ml-2" />
              التدرجات المتقدمة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(settings.theme.advanced.gradients).map(([type, gradient]) => (
              <div key={type} className="space-y-2">
                <Label className="text-gray-300 capitalize">{type}</Label>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div
                    className="w-12 h-12 rounded-lg border-2 border-white/20"
                    style={{ background: gradient }}
                  />
                  <Input
                    value={gradient}
                    onChange={(e) => updateGradient(type, e.target.value)}
                    className="flex-1 bg-slate-700 border-gray-600 text-white"
                    placeholder="linear-gradient(...)"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* تأثير الزجاج */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Layers className="h-5 w-5 ml-2" />
              تأثير الزجاج (Glassmorphism)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-gray-300">قوة الضبابية</Label>
              <Slider
                value={[parseInt(settings.theme.advanced.glassmorphism.blur)]}
                onValueChange={(value) => updateGlassmorphism('blur', `${value[0]}px`)}
                min={0}
                max={30}
                step={1}
                className="w-full"
              />
              <span className="text-sm text-gray-400">{settings.theme.advanced.glassmorphism.blur}</span>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">الشفافية</Label>
              <Slider
                value={[parseFloat(settings.theme.advanced.glassmorphism.opacity) * 100]}
                onValueChange={(value) => updateGlassmorphism('opacity', `${value[0] / 100}`)}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
              <span className="text-sm text-gray-400">{Math.round(parseFloat(settings.theme.advanced.glassmorphism.opacity) * 100)}%</span>
            </div>

            {/* معاينة تأثير الزجاج */}
            <div 
              className="p-4 rounded-lg border border-white/20 text-white text-center relative overflow-hidden"
              style={{
                backgroundColor: `rgba(139, 92, 246, ${settings.theme.advanced.glassmorphism.opacity})`,
                backdropFilter: `blur(${settings.theme.advanced.glassmorphism.blur})`,
                background: `linear-gradient(135deg, rgba(139, 92, 246, ${settings.theme.advanced.glassmorphism.opacity}) 0%, rgba(6, 182, 212, ${settings.theme.advanced.glassmorphism.opacity}) 100%)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
              <div className="relative">
                <h4 className="font-bold mb-2">تأثير الزجاج</h4>
                <p className="text-sm opacity-90">معاينة للتأثير المطبق</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* الجسيمات المتحركة */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Sparkles className="h-5 w-5 ml-2" />
            الجسيمات المتحركة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-gray-300">تفعيل الجسيمات</Label>
            <Switch
              checked={settings.theme.advanced.particles.enabled}
              onCheckedChange={(enabled) => updateParticles('enabled', enabled)}
            />
          </div>

          {settings.theme.advanced.particles.enabled && (
            <>
              <div className="space-y-2">
                <Label className="text-gray-300">كثافة الجسيمات</Label>
                <Slider
                  value={[settings.theme.advanced.particles.density]}
                  onValueChange={(value) => updateParticles('density', value[0])}
                  min={10}
                  max={200}
                  step={10}
                  className="w-full"
                />
                <span className="text-sm text-gray-400">{settings.theme.advanced.particles.density}</span>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">لون الجسيمات</Label>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div
                    className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
                    style={{ backgroundColor: settings.theme.advanced.particles.color }}
                    onClick={() => {
                      const input = document.createElement('input');
                      input.type = 'color';
                      input.value = settings.theme.advanced.particles.color;
                      input.onchange = (e) => updateParticles('color', (e.target as HTMLInputElement).value);
                      input.click();
                    }}
                  />
                  <Input
                    value={settings.theme.advanced.particles.color}
                    onChange={(e) => updateParticles('color', e.target.value)}
                    className="flex-1 bg-slate-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* إعدادات الوضع المظلم */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Eye className="h-5 w-5 ml-2" />
            إعدادات الوضع المظلم
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-gray-300">تفعيل الوضع المظلم</Label>
            <Switch
              checked={settings.theme.advanced.darkMode.enabled}
              onCheckedChange={(enabled) => updateAdvanced('darkMode', { ...settings.theme.advanced.darkMode, enabled })}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-gray-300">التبديل التلقائي</Label>
            <Switch
              checked={settings.theme.advanced.darkMode.autoSwitch}
              onCheckedChange={(autoSwitch) => updateAdvanced('darkMode', { ...settings.theme.advanced.darkMode, autoSwitch })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedEditor;
