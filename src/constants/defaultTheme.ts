
import { AdminSettings } from '@/types/admin';

export const defaultSettings: AdminSettings = {
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
    },
    advanced: {
      gradients: {
        primary: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
        secondary: 'linear-gradient(135deg, #06B6D4 0%, #F59E0B 100%)',
        accent: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      },
      glassmorphism: {
        blur: '10px',
        opacity: '0.1',
      },
      particles: {
        enabled: true,
        density: 50,
        color: '#8B5CF6',
      },
      darkMode: {
        enabled: true,
        autoSwitch: false,
      },
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
