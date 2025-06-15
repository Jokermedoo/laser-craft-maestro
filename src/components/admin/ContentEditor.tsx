
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { FileText, Save } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const ContentEditor = () => {
  const { settings, updateHero } = useAdmin();
  const [heroContent, setHeroContent] = useState(settings.hero);

  const handleSave = () => {
    updateHero(heroContent);
    console.log('تم حفظ المحتوى بنجاح');
  };

  const handleChange = (field: string, value: string) => {
    setHeroContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <FileText className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">محرر المحتوى</h2>
            <p className="text-gray-400">تعديل النصوص والعناوين الرئيسية</p>
          </div>
        </div>
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 ml-2" />
          حفظ التغييرات
        </Button>
      </div>

      {/* محرر القسم الرئيسي */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">القسم الرئيسي (Hero Section)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-gray-300">العنوان الرئيسي</Label>
            <Input
              value={heroContent.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="bg-slate-700 border-gray-600 text-white text-lg font-bold"
              placeholder="العنوان الرئيسي للموقع"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">العنوان الفرعي</Label>
            <Input
              value={heroContent.subtitle}
              onChange={(e) => handleChange('subtitle', e.target.value)}
              className="bg-slate-700 border-gray-600 text-white"
              placeholder="العنوان الفرعي"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">الوصف</Label>
            <Textarea
              value={heroContent.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="bg-slate-700 border-gray-600 text-white min-h-32"
              placeholder="وصف تفصيلي عن الخدمات والشركة"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">نص الزر</Label>
            <Input
              value={heroContent.buttonText}
              onChange={(e) => handleChange('buttonText', e.target.value)}
              className="bg-slate-700 border-gray-600 text-white"
              placeholder="نص الزر الرئيسي"
            />
          </div>
        </CardContent>
      </Card>

      {/* معاينة المحتوى */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">معاينة المحتوى</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 rounded-lg text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {heroContent.title}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-6">
              {heroContent.subtitle}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {heroContent.description}
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
              {heroContent.buttonText}
            </button>
          </div>
        </CardContent>
      </Card>

      {/* إعدادات إضافية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">إعدادات المحتوى المتقدمة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-gray-300">سرعة الكتابة المتحركة (مللي ثانية)</Label>
              <Input
                type="number"
                defaultValue="100"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">تأخير ظهور المحتوى (مللي ثانية)</Label>
              <Input
                type="number"
                defaultValue="500"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <input type="checkbox" id="autoplay" className="w-4 h-4 text-purple-600" />
            <Label htmlFor="autoplay" className="text-gray-300">تشغيل الحركات تلقائياً</Label>
          </div>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <input type="checkbox" id="particles" className="w-4 h-4 text-purple-600" />
            <Label htmlFor="particles" className="text-gray-300">إظهار الجزيئات المتحركة</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentEditor;
