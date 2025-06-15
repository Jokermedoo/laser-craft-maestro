
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Eye, Download, Share } from 'lucide-react';

const ThemePreview = () => {
  const { settings } = useAdmin();

  const exportThemeCSS = () => {
    const cssVariables = `
:root {
  /* الألوان */
  --primary-color: ${settings.theme.primaryColor};
  --secondary-color: ${settings.theme.secondaryColor};
  --accent-color: ${settings.theme.accentColor};
  --background-color: ${settings.theme.backgroundColor};
  --text-color: ${settings.theme.textColor};
  
  /* الخطوط */
  --font-primary: ${settings.theme.fonts.primary};
  --font-secondary: ${settings.theme.fonts.secondary};
  --font-size-xs: ${settings.theme.fonts.size.xs};
  --font-size-sm: ${settings.theme.fonts.size.sm};
  --font-size-base: ${settings.theme.fonts.size.base};
  --font-size-lg: ${settings.theme.fonts.size.lg};
  --font-size-xl: ${settings.theme.fonts.size.xl};
  --font-size-2xl: ${settings.theme.fonts.size['2xl']};
  --font-size-3xl: ${settings.theme.fonts.size['3xl']};
  
  /* المسافات */
  --spacing-xs: ${settings.theme.spacing.xs};
  --spacing-sm: ${settings.theme.spacing.sm};
  --spacing-md: ${settings.theme.spacing.md};
  --spacing-lg: ${settings.theme.spacing.lg};
  --spacing-xl: ${settings.theme.spacing.xl};
  
  /* الحدود المستديرة */
  --radius-sm: ${settings.theme.borderRadius.sm};
  --radius-md: ${settings.theme.borderRadius.md};
  --radius-lg: ${settings.theme.borderRadius.lg};
  --radius-xl: ${settings.theme.borderRadius.xl};
  --radius-full: ${settings.theme.borderRadius.full};
  
  /* الظلال */
  --shadow-sm: ${settings.theme.shadows.sm};
  --shadow-md: ${settings.theme.shadows.md};
  --shadow-lg: ${settings.theme.shadows.lg};
  --shadow-xl: ${settings.theme.shadows.xl};
  
  /* الحركات */
  --animation-duration: ${settings.theme.animations.duration};
  --animation-easing: ${settings.theme.animations.easing};
  --hover-scale: ${settings.theme.animations.hover.scale};
  --hover-transition: ${settings.theme.animations.hover.transition};
  
  /* التخطيط */
  --container-width: ${settings.theme.layout.containerWidth};
  --sidebar-width: ${settings.theme.layout.sidebarWidth};
  --header-height: ${settings.theme.layout.headerHeight};
}
    `.trim();

    const blob = new Blob([cssVariables], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'theme-variables.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <Card className="bg-slate-800/50 border-purple-500/30 sticky top-4">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Eye className="h-5 w-5 ml-2" />
            معاينة مباشرة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* معاينة مصغرة للموقع */}
          <div 
            className="w-full rounded-lg overflow-hidden border"
            style={{ 
              backgroundColor: settings.theme.backgroundColor,
              borderColor: settings.theme.primaryColor,
              fontFamily: settings.theme.fonts.primary
            }}
          >
            {/* هيدر مصغر */}
            <div 
              className="p-3 flex items-center justify-between text-white"
              style={{ 
                backgroundColor: settings.theme.primaryColor,
                height: `${Math.min(parseInt(settings.theme.layout.headerHeight) / 2, 40)}px`
              }}
            >
              <div style={{ fontSize: settings.theme.fonts.size.sm }} className="font-bold">
                الشعار
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-white/30 rounded-full" />
                <div className="w-2 h-2 bg-white/30 rounded-full" />
                <div className="w-2 h-2 bg-white/30 rounded-full" />
              </div>
            </div>

            {/* محتوى مصغر */}
            <div 
              className="p-4 space-y-3"
              style={{ color: settings.theme.textColor }}
            >
              <h2 
                className="font-bold"
                style={{ 
                  fontSize: settings.theme.fonts.size.lg,
                  color: settings.theme.primaryColor 
                }}
              >
                عنوان رئيسي
              </h2>
              <p style={{ fontSize: settings.theme.fonts.size.sm }}>
                نص وصفي قصير للمعاينة
              </p>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <button 
                  className="px-3 py-1 rounded text-xs font-medium"
                  style={{ 
                    backgroundColor: settings.theme.primaryColor,
                    color: settings.theme.backgroundColor,
                    borderRadius: settings.theme.borderRadius.md,
                    fontSize: settings.theme.fonts.size.xs
                  }}
                >
                  زر أساسي
                </button>
                <button 
                  className="px-3 py-1 rounded text-xs font-medium"
                  style={{ 
                    backgroundColor: settings.theme.secondaryColor,
                    color: settings.theme.textColor,
                    borderRadius: settings.theme.borderRadius.md,
                    fontSize: settings.theme.fonts.size.xs
                  }}
                >
                  زر ثانوي
                </button>
              </div>
            </div>
          </div>

          {/* ملخص الثيم */}
          <div className="space-y-3">
            <h4 className="text-white font-medium text-sm">ملخص الثيم الحالي</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="space-y-1">
                <div className="text-gray-400">الخط الأساسي:</div>
                <div className="text-white truncate" style={{ fontFamily: settings.theme.fonts.primary }}>
                  {settings.theme.fonts.primary.split(',')[0]}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-gray-400">الحجم الأساسي:</div>
                <div className="text-white">{settings.theme.fonts.size.base}</div>
              </div>
              <div className="space-y-1">
                <div className="text-gray-400">مدة الحركة:</div>
                <div className="text-white">{settings.theme.animations.duration}</div>
              </div>
              <div className="space-y-1">
                <div className="text-gray-400">عرض الحاوية:</div>
                <div className="text-white">{settings.theme.layout.containerWidth}</div>
              </div>
            </div>
          </div>

          {/* لوحة الألوان */}
          <div className="space-y-2">
            <h4 className="text-white font-medium text-sm">لوحة الألوان</h4>
            <div className="grid grid-cols-5 gap-1">
              {[
                settings.theme.primaryColor,
                settings.theme.secondaryColor,
                settings.theme.accentColor,
                settings.theme.backgroundColor,
                settings.theme.textColor
              ].map((color, index) => (
                <div
                  key={index}
                  className="w-full h-8 rounded border border-white/20"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* أزرار التصدير */}
          <div className="space-y-2">
            <Button 
              onClick={exportThemeCSS}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              size="sm"
            >
              <Download className="h-4 w-4 ml-2" />
              تصدير CSS
            </Button>
            <Button 
              onClick={() => {
                const themeData = {
                  name: 'ثيم مخصص',
                  theme: settings.theme,
                  timestamp: new Date().toISOString()
                };
                navigator.clipboard.writeText(JSON.stringify(themeData, null, 2));
              }}
              variant="outline"
              className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-600/20"
              size="sm"
            >
              <Share className="h-4 w-4 ml-2" />
              نسخ JSON
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThemePreview;
