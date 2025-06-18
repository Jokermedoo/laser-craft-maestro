
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Palette, Type, Image, Save } from 'lucide-react';
import { SiteConfig } from '@/hooks/useSiteBuilder';
import { useSmartNotifications } from '@/hooks/useSmartNotifications';

interface SiteConfigurationPanelProps {
  config: SiteConfig;
  onChange: (config: Partial<SiteConfig>) => void;
}

const SiteConfigurationPanel = ({ config, onChange }: SiteConfigurationPanelProps) => {
  const [localConfig, setLocalConfig] = useState(config);
  const { showSuccess } = useSmartNotifications();

  const handleSave = () => {
    onChange(localConfig);
    showSuccess('تم حفظ إعدادات الموقع بنجاح');
  };

  const updateConfig = (field: keyof SiteConfig, value: any) => {
    setLocalConfig(prev => ({ ...prev, [field]: value }));
  };

  const updateColors = (colorKey: string, value: string) => {
    setLocalConfig(prev => ({
      ...prev,
      colors: { ...prev.colors, [colorKey]: value }
    }));
  };

  const updateFonts = (fontKey: string, value: string) => {
    setLocalConfig(prev => ({
      ...prev,
      fonts: { ...prev.fonts, [fontKey]: value }
    }));
  };

  const updateMetadata = (metaKey: string, value: string) => {
    setLocalConfig(prev => ({
      ...prev,
      metadata: { ...prev.metadata, [metaKey]: value }
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Settings className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">إعدادات الموقع</h2>
            <p className="text-gray-400">تخصيص المعلومات الأساسية والألوان والخطوط</p>
          </div>
        </div>
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 mr-2" />
          حفظ الإعدادات
        </Button>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
          <TabsTrigger value="basic" className="data-[state=active]:bg-purple-600">
            <Settings className="h-4 w-4 ml-2" />
            أساسي
          </TabsTrigger>
          <TabsTrigger value="colors" className="data-[state=active]:bg-purple-600">
            <Palette className="h-4 w-4 ml-2" />
            الألوان
          </TabsTrigger>
          <TabsTrigger value="fonts" className="data-[state=active]:bg-purple-600">
            <Type className="h-4 w-4 ml-2" />
            الخطوط
          </TabsTrigger>
          <TabsTrigger value="media" className="data-[state=active]:bg-purple-600">
            <Image className="h-4 w-4 ml-2" />
            الوسائط
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">المعلومات الأساسية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-gray-300">اسم الموقع</Label>
                <Input
                  value={localConfig.name}
                  onChange={(e) => updateConfig('name', e.target.value)}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="اسم موقعك"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">عنوان الصفحة</Label>
                <Input
                  value={localConfig.metadata.title}
                  onChange={(e) => updateMetadata('title', e.target.value)}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="عنوان الصفحة الذي يظهر في المتصفح"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">وصف الموقع</Label>
                <Textarea
                  value={localConfig.metadata.description}
                  onChange={(e) => updateMetadata('description', e.target.value)}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="وصف مختصر عن موقعك"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">الكلمات المفتاحية</Label>
                <Input
                  value={localConfig.metadata.keywords}
                  onChange={(e) => updateMetadata('keywords', e.target.value)}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="كلمات مفتاحية مفصولة بفواصل"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="colors" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">ألوان الموقع</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-300">اللون الأساسي</Label>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Input
                      type="color"
                      value={localConfig.colors.primary}
                      onChange={(e) => updateColors('primary', e.target.value)}
                      className="w-16 h-10 p-1 bg-slate-700 border-gray-600"
                    />
                    <Input
                      value={localConfig.colors.primary}
                      onChange={(e) => updateColors('primary', e.target.value)}
                      className="flex-1 bg-slate-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">اللون الثانوي</Label>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Input
                      type="color"
                      value={localConfig.colors.secondary}
                      onChange={(e) => updateColors('secondary', e.target.value)}
                      className="w-16 h-10 p-1 bg-slate-700 border-gray-600"
                    />
                    <Input
                      value={localConfig.colors.secondary}
                      onChange={(e) => updateColors('secondary', e.target.value)}
                      className="flex-1 bg-slate-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">لون التمييز</Label>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Input
                      type="color"
                      value={localConfig.colors.accent}
                      onChange={(e) => updateColors('accent', e.target.value)}
                      className="w-16 h-10 p-1 bg-slate-700 border-gray-600"
                    />
                    <Input
                      value={localConfig.colors.accent}
                      onChange={(e) => updateColors('accent', e.target.value)}
                      className="flex-1 bg-slate-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">لون الخلفية</Label>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Input
                      type="color"
                      value={localConfig.colors.background}
                      onChange={(e) => updateColors('background', e.target.value)}
                      className="w-16 h-10 p-1 bg-slate-700 border-gray-600"
                    />
                    <Input
                      value={localConfig.colors.background}
                      onChange={(e) => updateColors('background', e.target.value)}
                      className="flex-1 bg-slate-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">لون النص</Label>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Input
                      type="color"
                      value={localConfig.colors.text}
                      onChange={(e) => updateColors('text', e.target.value)}
                      className="w-16 h-10 p-1 bg-slate-700 border-gray-600"
                    />
                    <Input
                      value={localConfig.colors.text}
                      onChange={(e) => updateColors('text', e.target.value)}
                      className="flex-1 bg-slate-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fonts" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">خطوط الموقع</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-gray-300">الخط الأساسي</Label>
                <Input
                  value={localConfig.fonts.primary}
                  onChange={(e) => updateFonts('primary', e.target.value)}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="Cairo, sans-serif"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">الخط الثانوي</Label>
                <Input
                  value={localConfig.fonts.secondary}
                  onChange={(e) => updateFonts('secondary', e.target.value)}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="Inter, sans-serif"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">الشعار والأيقونات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-gray-300">رابط الشعار</Label>
                <Input
                  value={localConfig.logo}
                  onChange={(e) => updateConfig('logo', e.target.value)}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="https://example.com/logo.png"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">رابط الأيقونة المفضلة</Label>
                <Input
                  value={localConfig.favicon}
                  onChange={(e) => updateConfig('favicon', e.target.value)}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="https://example.com/favicon.ico"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteConfigurationPanel;
