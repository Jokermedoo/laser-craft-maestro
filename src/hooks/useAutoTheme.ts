
import { useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark' | 'auto';

export const useAutoTheme = () => {
  const [mode, setMode] = useState<ThemeMode>('auto');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      if (mode === 'auto') {
        const hour = new Date().getHours();
        // وضع النهار من 6 صباحاً إلى 6 مساءً
        const isDay = hour >= 6 && hour < 18;
        setCurrentTheme(isDay ? 'light' : 'dark');
      } else {
        setCurrentTheme(mode === 'light' ? 'light' : 'dark');
      }
    };

    updateTheme();
    
    // تحديث كل دقيقة في الوضع التلقائي
    if (mode === 'auto') {
      const interval = setInterval(updateTheme, 60000);
      return () => clearInterval(interval);
    }
  }, [mode]);

  const setThemeMode = (newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  const toggleTheme = () => {
    const newMode = currentTheme === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
  };

  return {
    mode,
    currentTheme,
    setThemeMode,
    toggleTheme
  };
};
