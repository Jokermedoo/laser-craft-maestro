
export interface ThemeSettings {
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
  advanced: {
    gradients: {
      primary: string;
      secondary: string;
      accent: string;
    };
    glassmorphism: {
      blur: string;
      opacity: string;
    };
    particles: {
      enabled: boolean;
      density: number;
      color: string;
    };
    darkMode: {
      enabled: boolean;
      autoSwitch: boolean;
    };
  };
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface AdminSettings {
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

export interface AdminContextType {
  settings: AdminSettings;
  updateTheme: (theme: Partial<ThemeSettings>) => void;
  updateHero: (hero: Partial<HeroContent>) => void;
  updateServices: (services: Service[]) => void;
  updateGallery: (gallery: GalleryItem[]) => void;
  updateCompanyInfo: (info: Partial<AdminSettings['companyInfo']>) => void;
  previewMode: boolean;
  setPreviewMode: (mode: boolean) => void;
  exportTheme: () => void;
  importTheme: (themeData: any) => void;
  resetTheme: () => void;
}
