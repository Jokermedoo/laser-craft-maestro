
import { useState, useEffect } from 'react';
import { AdminSettings } from '@/types/admin';

interface SavedConfig {
  id: string;
  name: string;
  settings: AdminSettings;
  timestamp: string;
  preview?: string;
}

export const useConfigManager = () => {
  const [savedConfigs, setSavedConfigs] = useState<SavedConfig[]>([]);
  const [currentConfig, setCurrentConfig] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('saved-configs');
    if (saved) {
      try {
        setSavedConfigs(JSON.parse(saved));
      } catch (error) {
        console.error('خطأ في تحميل التكوينات المحفوظة:', error);
      }
    }
  }, []);

  const saveConfig = (name: string, settings: AdminSettings) => {
    const config: SavedConfig = {
      id: `config-${Date.now()}`,
      name,
      settings,
      timestamp: new Date().toISOString(),
      preview: generatePreview(settings)
    };

    const updatedConfigs = [...savedConfigs, config];
    setSavedConfigs(updatedConfigs);
    localStorage.setItem('saved-configs', JSON.stringify(updatedConfigs));
    setCurrentConfig(config.id);

    return config.id;
  };

  const loadConfig = (configId: string): SavedConfig | null => {
    const config = savedConfigs.find(c => c.id === configId);
    if (config) {
      setCurrentConfig(configId);
      return config;
    }
    return null;
  };

  const deleteConfig = (configId: string) => {
    const updatedConfigs = savedConfigs.filter(c => c.id !== configId);
    setSavedConfigs(updatedConfigs);
    localStorage.setItem('saved-configs', JSON.stringify(updatedConfigs));
    
    if (currentConfig === configId) {
      setCurrentConfig(null);
    }
  };

  const duplicateConfig = (configId: string, newName: string) => {
    const config = savedConfigs.find(c => c.id === configId);
    if (config) {
      return saveConfig(newName, config.settings);
    }
    return null;
  };

  const generatePreview = (settings: AdminSettings): string => {
    // إنشاء معاينة مصغرة للتكوين
    return `linear-gradient(135deg, ${settings.theme.primaryColor} 0%, ${settings.theme.secondaryColor} 100%)`;
  };

  const exportConfig = (configId: string) => {
    const config = savedConfigs.find(c => c.id === configId);
    if (config) {
      const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${config.name}-config.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const importConfig = async (file: File): Promise<string | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const configData = JSON.parse(e.target?.result as string);
          if (configData.settings) {
            const newId = saveConfig(configData.name || 'تكوين مستورد', configData.settings);
            resolve(newId);
          } else {
            reject(new Error('ملف التكوين غير صالح'));
          }
        } catch (error) {
          reject(new Error('خطأ في قراءة ملف التكوين'));
        }
      };
      reader.readAsText(file);
    });
  };

  return {
    savedConfigs,
    currentConfig,
    saveConfig,
    loadConfig,
    deleteConfig,
    duplicateConfig,
    exportConfig,
    importConfig
  };
};
