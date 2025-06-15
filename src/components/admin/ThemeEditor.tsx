
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Sparkles, Settings, Move, Zap, Grid, Star, Activity, Layout } from 'lucide-react';
import DragDropThemeEditor from './enhanced/DragDropThemeEditor';
import ComprehensiveThemeEditor from './enhanced/ComprehensiveThemeEditor';
import UniversalDragDropEditor from './enhanced/UniversalDragDropEditor';
import AdvancedAnimationEditor from './enhanced/AdvancedAnimationEditor';
import ResponsiveLayoutEditor from './enhanced/ResponsiveLayoutEditor';
import ThemeMarketplace from './enhanced/ThemeMarketplace';
import PerformanceMonitor from './enhanced/PerformanceMonitor';
import QuickThemePresets from './theme/QuickThemePresets';
import ColorPreview from './theme/ColorPreview';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';

const ThemeEditor = () => {
  const [activeTab, setActiveTab] = useState('comprehensive');

  // إعداد اختصارات لوحة المفاتيح
  useAdminShortcuts({
    save: () => console.log('حفظ التكوين'),
    preview: () => setActiveTab('performance'),
    export: () => console.log('تصدير الثيم'),
    reset: () => console.log('إعادة تعيين'),
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Settings className="h-8 w-8 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">محرر الألوان والتصميم المتقدم</h2>
          <p className="text-gray-400">تخصيص شامل لجميع عناصر التصميم مع أدوات متقدمة</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-8 bg-slate-800/50">
          <TabsTrigger value="comprehensive" className="data-[state=active]:bg-purple-600">
            <Settings className="h-4 w-4 ml-2" />
            التحرير الشامل
          </TabsTrigger>
          <TabsTrigger value="universal" className="data-[state=active]:bg-purple-600">
            <Move className="h-4 w-4 ml-2" />
            السحب والإفلات
          </TabsTrigger>
          <TabsTrigger value="animations" className="data-[state=active]:bg-purple-600">
            <Zap className="h-4 w-4 ml-2" />
            الحركات المتقدمة
          </TabsTrigger>
          <TabsTrigger value="layout" className="data-[state=active]:bg-purple-600">
            <Layout className="h-4 w-4 ml-2" />
            التخطيط المتجاوب
          </TabsTrigger>
          <TabsTrigger value="marketplace" className="data-[state=active]:bg-purple-600">
            <Star className="h-4 w-4 ml-2" />
            متجر القوالب
          </TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-purple-600">
            <Activity className="h-4 w-4 ml-2" />
            مراقب الأداء
          </TabsTrigger>
          <TabsTrigger value="advanced" className="data-[state=active]:bg-purple-600">
            <Palette className="h-4 w-4 ml-2" />
            محرر الألوان
          </TabsTrigger>
          <TabsTrigger value="quick" className="data-[state=active]:bg-purple-600">
            <Sparkles className="h-4 w-4 ml-2" />
            التخصيص السريع
          </TabsTrigger>
        </TabsList>

        <TabsContent value="comprehensive" className="mt-6">
          <ComprehensiveThemeEditor />
        </TabsContent>

        <TabsContent value="universal" className="mt-6">
          <UniversalDragDropEditor />
        </TabsContent>

        <TabsContent value="animations" className="mt-6">
          <AdvancedAnimationEditor />
        </TabsContent>

        <TabsContent value="layout" className="mt-6">
          <ResponsiveLayoutEditor />
        </TabsContent>

        <TabsContent value="marketplace" className="mt-6">
          <ThemeMarketplace />
        </TabsContent>

        <TabsContent value="performance" className="mt-6">
          <PerformanceMonitor />
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          <DragDropThemeEditor />
        </TabsContent>

        <TabsContent value="quick" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <QuickThemePresets />
            <ColorPreview />
          </div>
        </TabsContent>
      </Tabs>

      {/* شريط المساعدة للاختصارات */}
      <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 text-xs text-gray-400">
        <div className="grid grid-cols-2 gap-2">
          <div>Ctrl+S: حفظ</div>
          <div>Ctrl+P: معاينة</div>
          <div>Ctrl+E: تصدير</div>
          <div>Ctrl+Shift+R: إعادة تعيين</div>
        </div>
      </div>
    </div>
  );
};

export default ThemeEditor;
