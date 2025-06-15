
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { Layout, Monitor, Sidebar } from 'lucide-react';

const LayoutEditor = () => {
  const { settings, updateTheme } = useAdmin();

  const updateLayout = (key: string, value: number) => {
    updateTheme({
      layout: {
        ...settings.theme.layout,
        [key]: `${value}px`
      }
    });
  };

  const layoutItems = [
    { 
      key: 'containerWidth', 
      label: 'عرض الحاوية الرئيسية', 
      min: 800, 
      max: 1600, 
      step: 50,
      description: 'العرض الأقصى للمحتوى الرئيسي'
    },
    { 
      key: 'sidebarWidth', 
      label: 'عرض الشريط الجانبي', 
      min: 200, 
      max: 400, 
      step: 10,
      description: 'عرض الشريط الجانبي في لوحة الإدارة'
    },
    { 
      key: 'headerHeight', 
      label: 'ارتفاع الهيدر', 
      min: 60, 
      max: 120, 
      step: 5,
      description: 'ارتفاع شريط التنقل العلوي'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* محرر أبعاد التخطيط */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Layout className="h-5 w-5 ml-2" />
              أبعاد التخطيط
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {layoutItems.map((item) => (
              <div key={item.key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-300">{item.label}</Label>
                    <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                  </div>
                  <span className="text-sm text-gray-400">
                    {settings.theme.layout[item.key as keyof typeof settings.theme.layout]}
                  </span>
                </div>
                <Slider
                  value={[parseInt(settings.theme.layout[item.key as keyof typeof settings.theme.layout])]}
                  onValueChange={(value) => updateLayout(item.key, value[0])}
                  min={item.min}
                  max={item.max}
                  step={item.step}
                  className="w-full"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* معاينة التخطيط */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Monitor className="h-5 w-5 ml-2" />
              معاينة التخطيط
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* معاينة الهيدر */}
              <div className="space-y-2">
                <Label className="text-gray-300 text-sm">الهيدر</Label>
                <div 
                  className="w-full bg-purple-600/30 border border-purple-500/50 rounded flex items-center justify-center text-white text-sm"
                  style={{ height: settings.theme.layout.headerHeight }}
                >
                  هيدر ({settings.theme.layout.headerHeight})
                </div>
              </div>

              {/* معاينة الحاوية الرئيسية */}
              <div className="space-y-2">
                <Label className="text-gray-300 text-sm">الحاوية الرئيسية</Label>
                <div className="w-full bg-slate-700/30 rounded p-4 overflow-x-auto">
                  <div 
                    className="bg-blue-600/30 border border-blue-500/50 rounded mx-auto flex items-center justify-center text-white text-sm min-h-[100px]"
                    style={{ 
                      maxWidth: settings.theme.layout.containerWidth,
                      width: '100%'
                    }}
                  >
                    المحتوى الرئيسي ({settings.theme.layout.containerWidth})
                  </div>
                </div>
              </div>

              {/* معاينة الشريط الجانبي */}
              <div className="space-y-2">
                <Label className="text-gray-300 text-sm">التخطيط مع الشريط الجانبي</Label>
                <div className="flex bg-slate-700/30 rounded overflow-hidden">
                  <div 
                    className="bg-green-600/30 border-l border-green-500/50 flex items-center justify-center text-white text-xs flex-shrink-0"
                    style={{ 
                      width: settings.theme.layout.sidebarWidth,
                      minHeight: '80px'
                    }}
                  >
                    <div className="transform rotate-90 whitespace-nowrap">
                      شريط جانبي ({settings.theme.layout.sidebarWidth})
                    </div>
                  </div>
                  <div className="flex-1 bg-orange-600/30 border border-orange-500/50 flex items-center justify-center text-white text-sm min-h-[80px]">
                    المحتوى الرئيسي
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* معاينة شاملة مصغرة */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">معاينة شاملة مصغرة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 rounded-lg p-4 scale-75 origin-top-left">
            {/* الهيدر */}
            <div 
              className="w-full bg-purple-600 rounded-t flex items-center justify-center text-white text-xs mb-2"
              style={{ 
                height: `${parseInt(settings.theme.layout.headerHeight) / 4}px`,
                minHeight: '20px'
              }}
            >
              الهيدر
            </div>
            
            {/* المحتوى */}
            <div className="flex gap-2">
              {/* الشريط الجانبي */}
              <div 
                className="bg-green-600 rounded flex items-center justify-center text-white text-xs"
                style={{ 
                  width: `${parseInt(settings.theme.layout.sidebarWidth) / 4}px`,
                  minWidth: '40px',
                  height: '120px'
                }}
              >
                <span className="transform rotate-90 text-xs">شريط</span>
              </div>
              
              {/* المحتوى الرئيسي */}
              <div className="flex-1 bg-blue-600 rounded flex items-center justify-center text-white text-xs" style={{ height: '120px' }}>
                <div className="text-center">
                  <div>المحتوى الرئيسي</div>
                  <div className="text-xs opacity-75 mt-1">
                    عرض أقصى: {settings.theme.layout.containerWidth}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LayoutEditor;
