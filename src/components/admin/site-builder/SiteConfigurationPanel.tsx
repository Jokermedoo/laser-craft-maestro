
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Palette, Type, Globe } from 'lucide-react';
import { SiteConfig } from '@/hooks/useSiteBuilder';

interface SiteConfigurationPanelProps {
  config: SiteConfig;
  onChange: (config: Partial<SiteConfig>) => void;
}

const SiteConfigurationPanel = ({ config, onChange }: SiteConfigurationPanelProps) => {
  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange({ logo: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* إعدادات الموقع الأساسية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            إعدادات الموقع
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-gray-300">اسم الموقع</Label>
            <Input
              value={config.name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="bg-slate-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label className="text-gray-300">عنوان الصفحة</Label>
            <Input
              value={config.metadata.title}
              onChange={(e) => onChange({ 
                metadata: { ...config.metadata, title: e.target.value }
              })}
              className="bg-slate-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label className="text-gray-300">وصف الموقع</Label>
            <Textarea
              value={config.metadata.description}
              onChange={(e) => onChange({ 
                metadata: { ...config.metadata, description: e.target.value }
              })}
              className="bg-slate-700 border-gray-600 text-white"
              rows={3}
            />
          </div>

          <div>
            <Label className="text-gray-300">كلمات مفتاحية</Label>
            <Input
              value={config.metadata.keywords}
              onChange={(e) => onChange({ 
                metadata: { ...config.metadata, keywords: e.target.value }
              })}
              className="bg-slate-700 border-gray-600 text-white"
              placeholder="منفصلة بفواصل"
            />
          </div>
        </CardContent>
      </Card>

      {/* الشعار والهوية البصرية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Upload className="h-5 w-5 mr-2" />
            الشعار والهوية
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-gray-300">الشعار</Label>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="bg-slate-700 border-gray-600 text-white"
              />
              <Input
                placeholder="أو رابط الشعار"
                value={config.logo}
                onChange={(e) => onChange({ logo: e.target.value })}
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
            {config.logo && (
              <div className="mt-2">
                <img 
                  src={config.logo} 
                  alt="الشعار" 
                  className="w-20 h-20 object-contain bg-white rounded p-2"
                />
              </div>
            )}
          </div>

          <div>
            <Label className="text-gray-300">الخط الأساسي</Label>
            <select
              value={config.fonts.primary}
              onChange={(e) => onChange({ 
                fonts: { ...config.fonts, primary: e.target.value }
              })}
              className="w-full bg-slate-700 border border-gray-600 rounded px-3 py-2 text-white"
            >
              <option value="Cairo, sans-serif">Cairo</option>
              <option value="Amiri, serif">Amiri</option>
              <option value="Tajawal, sans-serif">Tajawal</option>
              <option value="Almarai, sans-serif">Almarai</option>
            </select>
          </div>

          <div>
            <Label className="text-gray-300">الخط الثانوي</Label>
            <select
              value={config.fonts.secondary}
              onChange={(e) => onChange({ 
                fonts: { ...config.fonts, secondary: e.target.value }
              })}
              className="w-full bg-slate-700 border border-gray-600 rounded px-3 py-2 text-white"
            >
              <option value="Inter, sans-serif">Inter</option>
              <option value="Roboto, sans-serif">Roboto</option>
              <option value="Open Sans, sans-serif">Open Sans</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* الألوان */}
      <Card className="bg-slate-800/50 border-purple-500/30 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Palette className="h-5 w-5 mr-2" />
            نظام الألوان
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <Label className="text-gray-300">اللون الأساسي</Label>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <input
                  type="color"
                  value={config.colors.primary}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, primary: e.target.value }
                  })}
                  className="w-10 h-10 border border-gray-600 rounded"
                />
                <Input
                  value={config.colors.primary}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, primary: e.target.value }
                  })}
                  className="bg-slate-700 border-gray-600 text-white text-xs"
                />
              </div>
            </div>

            <div>
              <Label className="text-gray-300">اللون الثانوي</Label>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <input
                  type="color"
                  value={config.colors.secondary}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, secondary: e.target.value }
                  })}
                  className="w-10 h-10 border border-gray-600 rounded"
                />
                <Input
                  value={config.colors.secondary}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, secondary: e.target.value }
                  })}
                  className="bg-slate-700 border-gray-600 text-white text-xs"
                />
              </div>
            </div>

            <div>
              <Label className="text-gray-300">لون التمييز</Label>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <input
                  type="color"
                  value={config.colors.accent}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, accent: e.target.value }
                  })}
                  className="w-10 h-10 border border-gray-600 rounded"
                />
                <Input
                  value={config.colors.accent}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, accent: e.target.value }
                  })}
                  className="bg-slate-700 border-gray-600 text-white text-xs"
                />
              </div>
            </div>

            <div>
              <Label className="text-gray-300">لون الخلفية</Label>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <input
                  type="color"
                  value={config.colors.background}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, background: e.target.value }
                  })}
                  className="w-10 h-10 border border-gray-600 rounded"
                />
                <Input
                  value={config.colors.background}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, background: e.target.value }
                  })}
                  className="bg-slate-700 border-gray-600 text-white text-xs"
                />
              </div>
            </div>

            <div>
              <Label className="text-gray-300">لون النص</Label>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <input
                  type="color"
                  value={config.colors.text}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, text: e.target.value }
                  })}
                  className="w-10 h-10 border border-gray-600 rounded"
                />
                <Input
                  value={config.colors.text}
                  onChange={(e) => onChange({ 
                    colors: { ...config.colors, text: e.target.value }
                  })}
                  className="bg-slate-700 border-gray-600 text-white text-xs"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteConfigurationPanel;
