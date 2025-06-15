
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface AdminSettings {
  theme: ThemeSettings;
  hero: HeroContent;
  services: Service[];
  gallery: GalleryItem[];
  companyInfo: {
    name: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
  };
}

interface AdminContextType {
  settings: AdminSettings;
  updateTheme: (theme: Partial<ThemeSettings>) => void;
  updateHero: (hero: Partial<HeroContent>) => void;
  updateServices: (services: Service[]) => void;
  updateGallery: (gallery: GalleryItem[]) => void;
  updateCompanyInfo: (info: Partial<AdminSettings['companyInfo']>) => void;
  previewMode: boolean;
  setPreviewMode: (mode: boolean) => void;
}

const defaultSettings: AdminSettings = {
  theme: {
    primaryColor: '#8B5CF6',
    secondaryColor: '#06B6D4',
    accentColor: '#F59E0B',
    backgroundColor: '#0F172A',
    textColor: '#FFFFFF'
  },
  hero: {
    title: 'ورشة المعز لخدمات الليزر',
    subtitle: 'الرائدة في مجال النقش بالليزر',
    description: 'نحن متخصصون في تقديم أفضل خدمات النقش والحفر بالليزر بأحدث التقنيات وأعلى مستويات الجودة',
    buttonText: 'تواصل معنا الآن'
  },
  services: [],
  gallery: [],
  companyInfo: {
    name: 'ورشة المعز لخدمات الليزر',
    phone: '+201141990282',
    whatsapp: '201141990282',
    email: 'info@almaez-laser.com',
    address: 'أرمنت الوابورات، الأقصر'
  }
};

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

  return (
    <AdminContext.Provider value={{
      settings,
      updateTheme,
      updateHero,
      updateServices,
      updateGallery,
      updateCompanyInfo,
      previewMode,
      setPreviewMode
    }}>
      {children}
    </AdminContext.Provider>
  );
};
