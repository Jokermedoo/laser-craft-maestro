
export interface SectionConfig {
  id: string;
  name: string;
  component: string;
  enabled: boolean;
  order: number;
  props?: Record<string, any>;
}

export const defaultSectionsConfig: SectionConfig[] = [
  {
    id: 'hero',
    name: 'القسم الرئيسي',
    component: 'Hero',
    enabled: true,
    order: 1
  },
  {
    id: 'about',
    name: 'من نحن',
    component: 'About',
    enabled: true,
    order: 2
  },
  {
    id: 'services',
    name: 'الخدمات',
    component: 'Services',
    enabled: true,
    order: 3
  },
  {
    id: 'gallery',
    name: 'معرض الأعمال',
    component: 'Gallery',
    enabled: true,
    order: 4
  },
  {
    id: 'contact',
    name: 'التواصل',
    component: 'Contact',
    enabled: true,
    order: 5
  },
  {
    id: 'footer',
    name: 'الفوتر',
    component: 'Footer',
    enabled: true,
    order: 6
  }
];
