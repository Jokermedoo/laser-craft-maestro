
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Tablet, Smartphone, Grid, Maximize, Settings } from 'lucide-react';

interface BreakpointConfig {
  name: string;
  width: number;
  icon: React.ElementType;
  active: boolean;
}

interface LayoutConfig {
  columns: number;
  gap: number;
  padding: number;
  margin: number;
}

const ResponsiveLayoutEditor = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('desktop');
  const [breakpoints, setBreakpoints] = useState<Record<string, BreakpointConfig>>({
    desktop: { name: 'حاسوب', width: 1200, icon: Monitor, active: true },
    tablet: { name: 'تابلت', width: 768, icon: Tablet, active: true },
    mobile: { name: 'جوال', width: 375, icon: Smartphone, active: true }
  });

  const [layouts, setLayouts] = useState<Record<string, LayoutConfig>>({
    desktop: { columns: 12, gap: 24, padding: 32, margin: 16 },
    tablet: { columns: 8, gap: 16, padding: 24, margin: 12 },
    mobile: { columns: 4, gap: 12, padding: 16, margin: 8 }
  });

  const updateLayout = (breakpoint: string, field: keyof LayoutConfig, value: number) => {
    setLayouts(prev => ({
      ...prev,
      [breakpoint]: { ...prev[breakpoint], [field]: value }
    }));
  };

  const currentLayout = layouts[currentBreakpoint];
  const CurrentIcon = breakpoints[currentBreakpoint].icon;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Grid className="h-8 w-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">محرر التخطيط المتجاوب</h2>
            <p className="text-gray-400">تخصيص التخطيط لجميع أحجام الشاشات</p>
          </div>
        </div>
        
        {/* أزرار الشاشات */}
        <div className="flex bg-slate-800 rounded-lg p-1">
          {Object.entries(breakpoints).map(([key, breakpoint]) => {
            const Icon = breakpoint.icon;
            return (
              <Button
                key={key}
                onClick={() => setCurrentBreakpoint(key)}
                variant={currentBreakpoint === key ? 'default' : 'ghost'}
                size="sm"
                className="px-4"
              >
                <Icon className="h-4 w-4 ml-2" />
                {breakpoint.name}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* إعدادات التخطيط */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <CurrentIcon className="h-5 w-5 ml-2" />
              إعدادات {breakpoints[currentBreakpoint].name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-gray-300">عدد الأعمدة: {currentLayout.columns}</Label>
              <Slider
                value={[currentLayout.columns]}
                onValueChange={([value]) => updateLayout(currentBreakpoint, 'columns', value)}
                min={1}
                max={24}
                step={1}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">الفجوات: {currentLayout.gap}px</Label>
              <Slider
                value={[currentLayout.gap]}
                onValueChange={([value]) => updateLayout(currentBreakpoint, 'gap', value)}
                min={0}
                max={48}
                step={4}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">الحشو الداخلي: {currentLayout.padding}px</Label>
              <Slider
                value={[currentLayout.padding]}
                onValueChange={([value]) => updateLayout(currentBreakpoint, 'padding', value)}
                min={0}
                max={64}
                step={4}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">الهوامش: {currentLayout.margin}px</Label>
              <Slider
                value={[currentLayout.margin]}
                onValueChange={([value]) => updateLayout(currentBreakpoint, 'margin', value)}
                min={0}
                max={32}
                step={2}
                className="w-full"
              />
            </div>

            <div className="pt-4 border-t border-gray-600">
              <Label className="text-gray-300 block mb-2">عرض الشاشة</Label>
              <div className="text-2xl font-bold text-purple-400">
                {breakpoints[currentBreakpoint].width}px
              </div>
            </div>
          </CardContent>
        </Card>

        {/* معاينة التخطيط */}
        <Card className="lg:col-span-2 bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">معاينة التخطيط</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 p-4 rounded-lg border border-gray-600 overflow-auto">
              <div 
                className="mx-auto bg-white/5 rounded border border-gray-600"
                style={{
                  width: `${Math.min(breakpoints[currentBreakpoint].width, 800)}px`,
                  padding: `${currentLayout.padding}px`,
                  margin: `${currentLayout.margin}px`
                }}
              >
                {/* شبكة المعاينة */}
                <div 
                  className="grid"
                  style={{
                    gridTemplateColumns: `repeat(${currentLayout.columns}, 1fr)`,
                    gap: `${currentLayout.gap}px`
                  }}
                >
                  {Array.from({ length: currentLayout.columns }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-purple-500/30 border border-purple-400/50 rounded h-16 flex items-center justify-center text-xs text-purple-200"
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>

                {/* مثال على المحتوى */}
                <div className="mt-6 space-y-4">
                  <div 
                    className="grid"
                    style={{
                      gridTemplateColumns: currentBreakpoint === 'mobile' ? '1fr' : 
                                         currentBreakpoint === 'tablet' ? 'repeat(2, 1fr)' : 
                                         'repeat(3, 1fr)',
                      gap: `${currentLayout.gap}px`
                    }}
                  >
                    <div className="bg-blue-500/20 border border-blue-400/50 rounded p-4">
                      <div className="h-4 bg-blue-400 rounded mb-2"></div>
                      <div className="h-2 bg-blue-300 rounded mb-1"></div>
                      <div className="h-2 bg-blue-300 rounded w-2/3"></div>
                    </div>
                    <div className="bg-green-500/20 border border-green-400/50 rounded p-4">
                      <div className="h-4 bg-green-400 rounded mb-2"></div>
                      <div className="h-2 bg-green-300 rounded mb-1"></div>
                      <div className="h-2 bg-green-300 rounded w-3/4"></div>
                    </div>
                    {currentBreakpoint !== 'mobile' && (
                      <div className="bg-yellow-500/20 border border-yellow-400/50 rounded p-4">
                        <div className="h-4 bg-yellow-400 rounded mb-2"></div>
                        <div className="h-2 bg-yellow-300 rounded mb-1"></div>
                        <div className="h-2 bg-yellow-300 rounded w-1/2"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* معلومات التخطيط */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-slate-700/50 p-3 rounded">
                <div className="text-sm text-gray-400">الأعمدة</div>
                <div className="text-lg font-bold text-white">{currentLayout.columns}</div>
              </div>
              <div className="bg-slate-700/50 p-3 rounded">
                <div className="text-sm text-gray-400">الفجوات</div>
                <div className="text-lg font-bold text-white">{currentLayout.gap}px</div>
              </div>
              <div className="bg-slate-700/50 p-3 rounded">
                <div className="text-sm text-gray-400">الحشو</div>
                <div className="text-lg font-bold text-white">{currentLayout.padding}px</div>
              </div>
              <div className="bg-slate-700/50 p-3 rounded">
                <div className="text-sm text-gray-400">الهوامش</div>
                <div className="text-lg font-bold text-white">{currentLayout.margin}px</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* أدوات إضافية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">أدوات متقدمة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="border-gray-600">
              <Maximize className="h-4 w-4 ml-2" />
              نسخ التخطيط
            </Button>
            <Button variant="outline" className="border-gray-600">
              <Settings className="h-4 w-4 ml-2" />
              نقاط التوقف المخصصة
            </Button>
            <Button variant="outline" className="border-gray-600">
              <Grid className="h-4 w-4 ml-2" />
              قوالب جاهزة
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResponsiveLayoutEditor;
