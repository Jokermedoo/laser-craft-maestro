
import { ThemeSettings } from '@/types/admin';
import { defaultSettings } from '@/constants/defaultTheme';

export const useThemeOperations = () => {
  const exportTheme = (settings: any) => {
    const themeData = {
      name: 'ثيم مخصص شامل',
      version: '2.0',
      theme: settings.theme,
      timestamp: new Date().toISOString(),
      metadata: {
        exportedBy: 'ورشة المعز - محرر الثيمات المتقدم',
        features: ['colors', 'fonts', 'spacing', 'effects', 'layout', 'advanced']
      }
    };
    
    const blob = new Blob([JSON.stringify(themeData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `theme-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importTheme = (file: File): Promise<ThemeSettings> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const themeData = JSON.parse(e.target?.result as string);
          if (themeData.theme) {
            resolve(themeData.theme);
          } else {
            reject(new Error('ملف الثيم غير صالح'));
          }
        } catch (error) {
          reject(new Error('خطأ في قراءة ملف الثيم'));
        }
      };
      reader.readAsText(file);
    });
  };

  const resetTheme = (): ThemeSettings => {
    return defaultSettings.theme;
  };

  const generateRandomTheme = (): Partial<ThemeSettings> => {
    const hue = Math.floor(Math.random() * 360);
    return {
      primaryColor: `hsl(${hue}, 70%, 50%)`,
      secondaryColor: `hsl(${(hue + 120) % 360}, 60%, 55%)`,
      accentColor: `hsl(${(hue + 240) % 360}, 80%, 60%)`,
      backgroundColor: `hsl(${hue}, 20%, 8%)`,
      textColor: `hsl(${hue}, 10%, 95%)`,
      advanced: {
        gradients: {
          primary: `linear-gradient(135deg, hsl(${hue}, 70%, 50%) 0%, hsl(${(hue + 60) % 360}, 60%, 55%) 100%)`,
          secondary: `linear-gradient(135deg, hsl(${(hue + 120) % 360}, 60%, 55%) 0%, hsl(${(hue + 180) % 360}, 80%, 60%) 100%)`,
          accent: `linear-gradient(135deg, hsl(${(hue + 240) % 360}, 80%, 60%) 0%, hsl(${(hue + 300) % 360}, 70%, 50%) 100%)`,
        },
        particles: {
          enabled: true,
          density: Math.floor(Math.random() * 100) + 20,
          color: `hsl(${hue}, 70%, 50%)`,
        }
      }
    };
  };

  return {
    exportTheme,
    importTheme,
    resetTheme,
    generateRandomTheme
  };
};
