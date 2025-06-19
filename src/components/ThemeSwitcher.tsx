
import React, { useState, useEffect } from 'react';
import { Palette, Sun, Moon, Monitor } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

interface Theme {
  name: string;
  colors: ColorPalette;
  mode: 'light' | 'dark' | 'auto';
}

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>({
    name: 'dark-purple',
    colors: {
      primary: '#8B5CF6',
      secondary: '#F59E0B',
      accent: '#EF4444',
      background: '#0F172A'
    },
    mode: 'dark'
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const themes: Theme[] = [
    {
      name: 'dark-purple',
      colors: { primary: '#8B5CF6', secondary: '#F59E0B', accent: '#EF4444', background: '#0F172A' },
      mode: 'dark'
    },
    {
      name: 'dark-blue',
      colors: { primary: '#3B82F6', secondary: '#10B981', accent: '#F59E0B', background: '#1E293B' },
      mode: 'dark'
    },
    {
      name: 'light-elegant',
      colors: { primary: '#6366F1', secondary: '#EC4899', accent: '#8B5CF6', background: '#F8FAFC' },
      mode: 'light'
    },
    {
      name: 'sunset',
      colors: { primary: '#F59E0B', secondary: '#EF4444', accent: '#8B5CF6', background: '#1C1917' },
      mode: 'dark'
    }
  ];

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.colors.primary);
    root.style.setProperty('--theme-secondary', theme.colors.secondary);
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--theme-background', theme.colors.background);
    
    // Apply mode class
    document.body.classList.remove('light', 'dark');
    if (theme.mode !== 'auto') {
      document.body.classList.add(theme.mode);
    }
    
    setCurrentTheme(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  const handleCustomColorChange = (colorType: keyof ColorPalette, color: string) => {
    const newTheme = {
      ...currentTheme,
      colors: {
        ...currentTheme.colors,
        [colorType]: color
      }
    };
    applyTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme);
        applyTheme(theme);
      } catch (error) {
        console.error('Error parsing saved theme:', error);
      }
    }
  }, []);

  if (!isExpanded) {
    return (
      <Button
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-4 left-4 z-50 rounded-full w-12 h-12 bg-purple-600 hover:bg-purple-700 shadow-lg"
        size="sm"
      >
        <Palette className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 left-4 z-50 w-80 bg-slate-900/95 border-purple-500/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-white flex items-center justify-between text-sm">
          <span className="flex items-center">
            <Palette className="h-4 w-4 mr-2" />
            تخصيص الثيم
          </span>
          <Button
            onClick={() => setIsExpanded(false)}
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white h-6 w-6 p-0"
          >
            ×
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Theme Mode Selector */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-300">وضع العرض</label>
          <div className="flex space-x-1 rtl:space-x-reverse">
            {[
              { mode: 'light' as const, icon: Sun, label: 'فاتح' },
              { mode: 'dark' as const, icon: Moon, label: 'داكن' },
              { mode: 'auto' as const, icon: Monitor, label: 'تلقائي' }
            ].map(({ mode, icon: Icon, label }) => (
              <Button
                key={mode}
                onClick={() => applyTheme({ ...currentTheme, mode })}
                variant={currentTheme.mode === mode ? "default" : "outline"}
                size="sm"
                className={`flex-1 h-8 text-xs ${
                  currentTheme.mode === mode
                    ? 'bg-purple-600 text-white'
                    : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon className="h-3 w-3 mr-1" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Preset Themes */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-300">الثيمات الجاهزة</label>
          <div className="grid grid-cols-2 gap-2">
            {themes.map((theme) => (
              <Button
                key={theme.name}
                onClick={() => applyTheme(theme)}
                variant="outline"
                className={`h-12 p-2 ${
                  currentTheme.name === theme.name
                    ? 'border-purple-500 bg-purple-900/50'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="flex space-x-1 rtl:space-x-reverse">
                  <div 
                    className="w-3 h-3 rounded-full border" 
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                  <div 
                    className="w-3 h-3 rounded-full border" 
                    style={{ backgroundColor: theme.colors.secondary }}
                  />
                  <div 
                    className="w-3 h-3 rounded-full border" 
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Custom Colors */}
        <div className="space-y-3">
          <label className="text-xs font-medium text-gray-300">ألوان مخصصة</label>
          <div className="space-y-2">
            {(Object.keys(currentTheme.colors) as Array<keyof ColorPalette>).map((colorKey) => (
              <div key={colorKey} className="flex items-center justify-between">
                <span className="text-xs text-gray-400 capitalize">
                  {colorKey === 'primary' ? 'أساسي' :
                   colorKey === 'secondary' ? 'ثانوي' :
                   colorKey === 'accent' ? 'مميز' : 'خلفية'}
                </span>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <input
                    type="color"
                    value={currentTheme.colors[colorKey]}
                    onChange={(e) => handleCustomColorChange(colorKey, e.target.value)}
                    className="w-8 h-6 rounded border border-gray-600 cursor-pointer"
                  />
                  <span className="text-xs text-gray-500 font-mono w-16">
                    {currentTheme.colors[colorKey]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <Button
          onClick={() => applyTheme(themes[0])}
          variant="outline"
          size="sm"
          className="w-full text-xs border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          إعادة تعيين
        </Button>
      </CardContent>
    </Card>
  );
};

export default ThemeSwitcher;
