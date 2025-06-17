
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Moon, Sun, Palette, Monitor } from 'lucide-react';

interface ThemeOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  className: string;
}

const ThemeSwitcher = memo(() => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  const [isExpanded, setIsExpanded] = useState(false);

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

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme(systemPrefersDark ? 'dark' : 'light');
    }

    // مراقبة تغيير النظام
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (currentTheme === 'auto') {
        applyTheme('auto');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [applyTheme, currentTheme]);

  const getCurrentTheme = () => {
    return themes.find(theme => theme.id === currentTheme) || themes[0];
  };

  const toggleExpanded = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const handleThemeSelect = useCallback((themeId: string) => {
    applyTheme(themeId);
    setIsExpanded(false);
  }, [applyTheme]);

  if (isExpanded) {
    return (
      <Card className="fixed top-20 right-4 z-50 bg-slate-800/95 backdrop-blur-sm border border-purple-500/30">
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="h-4 w-4 text-purple-400" />
              <span className="text-white text-sm font-medium">اختر الثيم</span>
            </div>
            {themes.map((theme) => {
              const IconComponent = theme.icon;
              return (
                <Button
                  key={theme.id}
                  variant={currentTheme === theme.id ? "default" : "ghost"}
                  onClick={() => handleThemeSelect(theme.id)}
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
            <Button
              variant="ghost"
              onClick={toggleExpanded}
              className="w-full text-gray-400 hover:bg-slate-700"
            >
              إغلاق
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentThemeData = getCurrentTheme();
  const IconComponent = currentThemeData.icon;

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleExpanded}
      className="relative"
    >
      <IconComponent className="h-4 w-4" />
    </Button>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;
