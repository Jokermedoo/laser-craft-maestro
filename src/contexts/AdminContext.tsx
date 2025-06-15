
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AdminSettings, AdminContextType, ThemeSettings, HeroContent, Service, GalleryItem } from '@/types/admin';
import { defaultSettings } from '@/constants/defaultTheme';
import { useThemeOperations } from '@/hooks/useThemeOperations';

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<AdminSettings>(defaultSettings);
  const [previewMode, setPreviewMode] = useState(false);
  const themeOps = useThemeOperations();

  const updateTheme = (theme: Partial<ThemeSettings>) => {
    setSettings(prev => ({
      ...prev,
      theme: { ...prev.theme, ...theme }
    }));
  };

  const updateHero = (hero: Partial<HeroContent>) => {
    setSettings(prev => ({
      ...prev,
      hero: { ...prev.hero, ...hero }
    }));
  };

  const updateServices = (services: Service[]) => {
    setSettings(prev => ({ ...prev, services }));
  };

  const updateGallery = (gallery: GalleryItem[]) => {
    setSettings(prev => ({ ...prev, gallery }));
  };

  const updateCompanyInfo = (info: Partial<AdminSettings['companyInfo']>) => {
    setSettings(prev => ({
      ...prev,
      companyInfo: { ...prev.companyInfo, ...info }
    }));
  };

  const exportTheme = () => {
    themeOps.exportTheme(settings);
  };

  const importTheme = async (themeData: any) => {
    try {
      if (themeData.theme) {
        updateTheme(themeData.theme);
      }
    } catch (error) {
      console.error('خطأ في استيراد الثيم:', error);
    }
  };

  const resetTheme = () => {
    updateTheme(themeOps.resetTheme());
  };

  return (
    <AdminContext.Provider value={{
      settings,
      updateTheme,
      updateHero,
      updateServices,
      updateGallery,
      updateCompanyInfo,
      previewMode,
      setPreviewMode,
      exportTheme,
      importTheme,
      resetTheme
    }}>
      {children}
    </AdminContext.Provider>
  );
};
