
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Moon, Sun, Palette, Monitor, Settings, Download, Upload } from 'lucide-react';
import { useOptimizedTheme } from '@/hooks/useOptimizedTheme';
import AnimatedContainer from './enhanced/AnimatedContainer';

interface ThemeOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  className: string;
}

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

const ThemeSwitcher = memo(() => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { theme, saveTheme, applyPreset, resetTheme } = useOptimizedTheme();

  const themes: ThemeOption[] = [
    {
      id: 'dark',
      name: 'داكن',
      icon: Moon,
      className: 'bg-slate-900 text-white'
    },
    {
      id: 'light',
      name: 'فاتح',
      icon: Sun,
      className: 'bg-white text-slate-900'
    },
    {
      id: 'auto',
      name: 'تلقائي',
      icon: Monitor,
      className: 'bg-gradient-to-r from-slate-900 to-white text-white'
    }
  ];

  const colorPresets = [
    { name: 'البنفسجي الكلاسيكي', primary: '#8b5cf6', secondary: '#06b6d4', accent: '#f59e0b' },
    { name: 'الأخضر الطبيعي', primary: '#10b981', secondary: '#3b82f6', accent: '#f59e0b' },
    { name: 'الأحمر الناري', primary: '#ef4444', secondary: '#f97316', accent: '#eab308' },
    { name: 'الأزرق المحيطي', primary: '#0ea5e9', secondary: '#8b5cf6', accent: '#06b6d4' }
  ];

  const applyTheme = useCallback((themeId: string) => {
    const html = document.documentElement;
    
    switch (themeId) {
      case 'light':
        html.classList.remove('dark');
        html.classList.add('light');
        break;
      case 'dark':
        html.classList.remove('light');
        html.classList.add('dark');
        break;
      case 'auto':
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        html.classList.remove('light', 'dark');
        html.classList.add(prefersDark ? 'dark' : 'light');
        break;
    }
    
    localStorage.setItem('theme', themeId);
    setCurrentTheme(themeId);
  }, []);

  const handleColorChange = (colorType: keyof ColorPalette, value: string) => {
    saveTheme({ [colorType]: value });
  };

  const exportTheme = () => {
    const themeData = {
      ...theme,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(themeData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `theme-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importTheme = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        try {
          const text = await file.text();
          const importedTheme = JSON.parse(text);
          saveTheme(importedTheme);
        } catch (error) {
          console.error('خطأ في استيراد الثيم:', error);
        }
      }
    };
    input.click();
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme(systemPrefersDark ? 'dark' : 'light');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (currentTheme === 'auto') {
        applyTheme('auto');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [applyTheme, currentTheme]);

  if (isExpanded) {
    return (
      <AnimatedContainer type="scale" className="fixed top-20 right-4 z-50 w-80">
        <Card className="bg-slate-800/95 backdrop-blur-sm border border-purple-500/30 shadow-2xl">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-purple-400" />
                  <span className="text-white font-medium">إعدادات الثيم</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>

              {/* اختيار الثيم الأساسي */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">الوضع الأساسي</label>
                {themes.map((theme) => {
                  const IconComponent = theme.icon;
                  return (
                    <Button
                      key={theme.id}
                      variant={currentTheme === theme.id ? "default" : "ghost"}
                      onClick={() => applyTheme(theme.id)}
                      className={`w-full justify-start gap-2 ${
                        currentTheme === theme.id 
                          ? 'bg-purple-600 hover:bg-purple-700' 
                          : 'text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      {theme.name}
                    </Button>
                  );
                })}
              </div>

              {/* قوالب الألوان الجاهزة */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">قوالب الألوان</label>
                <div className="grid grid-cols-2 gap-2">
                  {colorPresets.map((preset, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => applyPreset(preset.name as any)}
                      className="text-xs bg-slate-700 border-gray-600 hover:bg-slate-600"
                    >
                      <div className="flex items-center gap-1">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: preset.primary }}
                        />
                        {preset.name}
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* تخصيص الألوان */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-300">تخصيص الألوان</label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
                
                {showColorPicker && (
                  <div className="space-y-3 p-3 bg-slate-900/50 rounded-lg">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-400">اللون الأساسي</label>
                        <input
                          type="color"
                          value={theme.primaryColor}
                          onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                          className="w-full h-8 rounded border-0"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">اللون الثانوي</label>
                        <input
                          type="color"
                          value={theme.secondaryColor}
                          onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                          className="w-full h-8 rounded border-0"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* أدوات إضافية */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportTheme}
                  className="flex-1 bg-slate-700 border-gray-600 text-green-400"
                >
                  <Download className="h-3 w-3 ml-1" />
                  تصدير
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={importTheme}
                  className="flex-1 bg-slate-700 border-gray-600 text-blue-400"
                >
                  <Upload className="h-3 w-3 ml-1" />
                  استيراد
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetTheme}
                  className="flex-1 bg-slate-700 border-gray-600 text-red-400"
                >
                  إعادة تعيين
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedContainer>
    );
  }

  const currentThemeData = themes.find(theme => theme.id === currentTheme) || themes[0];
  const IconComponent = currentThemeData.icon;

  return (
    <AnimatedContainer type="fade">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setIsExpanded(true)}
        className="relative hover:bg-purple-600/20 transition-all duration-300"
      >
        <IconComponent className="h-4 w-4" />
      </Button>
    </AnimatedContainer>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;
