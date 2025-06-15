import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  fonts: {
    primary: string;
    secondary: string;
    size: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  animations: {
    duration: string;
    easing: string;
    hover: {
      scale: string;
      transition: string;
    };
  };
  layout: {
    containerWidth: string;
    sidebarWidth: string;
    headerHeight: string;
  };
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
    textColor: '#FFFFFF',
    fonts: {
      primary: 'Cairo, sans-serif',
      secondary: 'Inter, sans-serif',
      size: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      }
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    },
    animations: {
      duration: '300ms',
      easing: 'ease-in-out',
      hover: {
        scale: '1.05',
        transition: 'all 300ms ease-in-out',
      }
    },
    layout: {
      containerWidth: '1200px',
      sidebarWidth: '280px',
      headerHeight: '80px',
    }
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
