
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Eye, ExternalLink, Smartphone, Monitor, Tablet } from 'lucide-react';
import { useState } from 'react';

const LivePreview = () => {
  const { settings } = useAdmin();
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getPreviewUrl = () => {
    // في التطبيق الحقيقي، هذا سيكون رابط الموقع مع المعاملات
    return `${window.location.origin}?preview=true`;
  };

  const viewModeStyles = {
    desktop: 'w-full h-[800px]',
    tablet: 'w-[768px] h-[1024px] mx-auto',
    mobile: 'w-[375px] h-[667px] mx-auto'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Eye className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">المعاينة المباشرة</h2>
            <p className="text-gray-400">معاينة الموقع مع التغييرات المطبقة</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* أدوات المعاينة */}
          <div className="flex bg-slate-800 rounded-lg p-1">
            <Button
              onClick={() => setViewMode('desktop')}
              variant={viewMode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              className="px-3"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => setViewMode('tablet')}
              variant={viewMode === 'tablet' ? 'default' : 'ghost'}
              size="sm"
              className="px-3"
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => setViewMode('mobile')}
              variant={viewMode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              className="px-3"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>
          
          <Button 
            onClick={() => window.open(getPreviewUrl(), '_blank')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ExternalLink className="h-4 w-4 ml-2" />
            فتح في نافذة جديدة
          </Button>
        </div>
      </div>

      {/* معاينة الإعدادات الحالية */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white text-sm">الألوان الحالية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">أساسي</span>
                <div 
                  className="w-6 h-6 rounded border"
                  style={{ backgroundColor: settings.theme.primaryColor }}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">ثانوي</span>
                <div 
                  className="w-6 h-6 rounded border"
                  style={{ backgroundColor: settings.theme.secondaryColor }}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">تمييز</span>
                <div 
                  className="w-6 h-6 rounded border"
                  style={{ backgroundColor: settings.theme.accentColor }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white text-sm">المحتوى الحالي</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-gray-400">العنوان:</span>
                <p className="text-white truncate">{settings.hero.title}</p>
              </div>
              <div>
                <span className="text-gray-400">الوصف:</span>
                <p className="text-white truncate">{settings.hero.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white text-sm">إحصائيات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">الخدمات:</span>
                <span className="text-white">{settings.services.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">المعرض:</span>
                <span className="text-white">{settings.gallery.length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* إطار المعاينة */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">معاينة الموقع - {viewMode === 'desktop' ? 'حاسوب' : viewMode === 'tablet' ? 'تابلت' : 'جوال'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-lg overflow-auto">
            <div className={viewModeStyles[viewMode]}>
              <iframe
                src={getPreviewUrl()}
                className="w-full h-full border rounded-lg"
                title="معاينة الموقع"
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              معاينة مباشرة للموقع مع الإعدادات الحالية. التغييرات ستظهر فوراً.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* اختبار سرعة الموقع */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">اختبار الأداء</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-600/20 rounded-lg">
              <div className="text-2xl font-bold text-green-400">95</div>
              <div className="text-green-300 text-sm">سرعة التحميل</div>
            </div>
            <div className="text-center p-4 bg-blue-600/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">98</div>
              <div className="text-blue-300 text-sm">تجربة المستخدم</div>
            </div>
            <div className="text-center p-4 bg-yellow-600/20 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400">92</div>
              <div className="text-yellow-300 text-sm">إمكانية الوصول</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LivePreview;
