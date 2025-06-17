
import { useState, useEffect, useCallback, useMemo } from 'react';

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  borderRadius: number;
  fontSize: number;
  animations: boolean;
}

const defaultTheme: ThemeConfig = {
  primaryColor: '#8b5cf6',
  secondaryColor: '#06b6d4',
  backgroundColor: '#0f172a',
  textColor: '#ffffff',
  borderRadius: 8,
  fontSize: 14,
  animations: true
};

export const useOptimizedTheme = () => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);
  const [isLoading, setIsLoading] = useState(true);

  // تحميل الثيم من التخزين المحلي
  useEffect(() => {
    const savedTheme = localStorage.getItem('optimized_theme');
    if (savedTheme) {
      try {
        const parsedTheme = JSON.parse(savedTheme);
        setTheme({ ...defaultTheme, ...parsedTheme });
      } catch (error) {
        console.warn('Error parsing saved theme:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // حفظ الثيم عند التغيير
  const saveTheme = useCallback((newTheme: Partial<ThemeConfig>) => {
    const updatedTheme = { ...theme, ...newTheme };
    setTheme(updatedTheme);
    localStorage.setItem('optimized_theme', JSON.stringify(updatedTheme));
  }, [theme]);

  // تطبيق الثيم على CSS variables
  const applyTheme = useCallback((themeConfig: ThemeConfig) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', themeConfig.primaryColor);
    root.style.setProperty('--secondary-color', themeConfig.secondaryColor);
    root.style.setProperty('--background-color', themeConfig.backgroundColor);
    root.style.setProperty('--text-color', themeConfig.textColor);
    root.style.setProperty('--border-radius', `${themeConfig.borderRadius}px`);
    root.style.setProperty('--font-size', `${themeConfig.fontSize}px`);
    
    // تطبيق أو إيقاف الحركات
    if (!themeConfig.animations) {
      root.style.setProperty('--animation-duration', '0s');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
    }
  }, []);

  // تطبيق الثيم عند التحميل أو التغيير
  useEffect(() => {
    if (!isLoading) {
      applyTheme(theme);
    }
  }, [theme, isLoading, applyTheme]);

  // ثيمات جاهزة
  const presetThemes = useMemo(() => ({
    dark: {
      ...defaultTheme,
      primaryColor: '#8b5cf6',
      backgroundColor: '#0f172a',
      textColor: '#ffffff'
    },
    light: {
      ...defaultTheme,
      primaryColor: '#6366f1',
      backgroundColor: '#ffffff',
      textColor: '#1f2937'
    },
    purple: {
      ...defaultTheme,
      primaryColor: '#a855f7',
      secondaryColor: '#ec4899',
      backgroundColor: '#1e1b4b'
    },
    blue: {
      ...defaultTheme,
      primaryColor: '#3b82f6',
      secondaryColor: '#06b6d4',
      backgroundColor: '#0c4a6e'
    }
  }), []);

  const applyPreset = useCallback((presetName: keyof typeof presetThemes) => {
    const preset = presetThemes[presetName];
    saveTheme(preset);
  }, [presetThemes, saveTheme]);

  const resetTheme = useCallback(() => {
    setTheme(defaultTheme);
    localStorage.removeItem('optimized_theme');
    applyTheme(defaultTheme);
  }, [applyTheme]);

  return {
    theme,
    isLoading,
    saveTheme,
    applyTheme,
    presetThemes,
    applyPreset,
    resetTheme
  };
};
