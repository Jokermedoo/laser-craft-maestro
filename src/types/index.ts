
import { LucideIcon } from 'lucide-react';

// أنواع البيانات العامة
export interface BaseItem {
  id: string;
  title: string;
  description: string;
}

// أنواع بيانات المعرض
export interface GalleryItem extends BaseItem {
  image: string;
  category: string;
  featured?: boolean;
}

// أنواع بيانات الخدمات
export interface Service extends BaseItem {
  icon: LucideIcon;
  features: string[];
  price: string;
  gradient: string;
  popular?: boolean;
}

export interface SimpleService {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

// أنواع بيانات الشركة
export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  workingHours: string;
}

// أنواع النوافذ والمكونات
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide' | 'scale' | 'bounce';
}

// أنواع الثيمات
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  fontSize: number;
  borderRadius: number;
  animations: boolean;
}

// أنواع الأداء
export interface PerformanceMetrics {
  score: number;
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  bundleSize: number;
}

// أنواع الإشعارات
export interface NotificationData {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  timestamp: Date;
  read?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// أنواع الإدارة
export interface AdminSettings {
  theme: ThemeConfig;
  notifications: NotificationData[];
  performance: PerformanceMetrics;
}

export type ThemeMode = 'light' | 'dark' | 'auto';
export type AnimationType = 'fade' | 'slide' | 'scale' | 'bounce';
export type NotificationType = 'success' | 'error' | 'warning' | 'info';
