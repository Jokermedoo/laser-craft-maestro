
import { useCallback } from 'react';
import { DraggableItem } from '../types';

export const useItemStorage = () => {
  const getStoredItems = useCallback((type: string): DraggableItem[] => {
    const cached = localStorage.getItem(`${type}-items`);
    return cached ? JSON.parse(cached) : getDefaultItems(type);
  }, []);

  const saveItems = useCallback((type: string, items: DraggableItem[]) => {
    localStorage.setItem(`${type}-items`, JSON.stringify(items));
  }, []);

  const getDefaultItems = (type: string): DraggableItem[] => {
    switch (type) {
      case 'color':
        return [
          { id: 'color-1', type: 'color', name: 'اللون الأساسي', value: '#8B5CF6', category: 'primary' },
          { id: 'color-2', type: 'color', name: 'اللون الثانوي', value: '#06B6D4', category: 'secondary' },
          { id: 'color-3', type: 'color', name: 'لون التمييز', value: '#F59E0B', category: 'accent' },
        ];
      case 'font':
        return [
          { id: 'font-1', type: 'font', name: 'الخط الأساسي', value: 'Cairo, sans-serif', category: 'primary' },
          { id: 'font-2', type: 'font', name: 'الخط الثانوي', value: 'Inter, sans-serif', category: 'secondary' },
        ];
      case 'layout':
        return [
          { id: 'layout-1', type: 'layout', name: 'عرض الحاوية', value: '1200px', category: 'container' },
          { id: 'layout-2', type: 'layout', name: 'عرض الشريط الجانبي', value: '280px', category: 'sidebar' },
          { id: 'layout-3', type: 'layout', name: 'ارتفاع الهيدر', value: '80px', category: 'header' },
        ];
      case 'component':
        return [
          { id: 'comp-1', type: 'component', name: 'البطاقات', value: 'cards', category: 'ui' },
          { id: 'comp-2', type: 'component', name: 'الأزرار', value: 'buttons', category: 'ui' },
          { id: 'comp-3', type: 'component', name: 'النماذج', value: 'forms', category: 'ui' },
        ];
      case 'icon':
        return [
          { id: 'icon-1', type: 'icon', name: 'أيقونة الرئيسية', value: 'Home', category: 'navigation' },
          { id: 'icon-2', type: 'icon', name: 'أيقونة الإعدادات', value: 'Settings', category: 'navigation' },
          { id: 'icon-3', type: 'icon', name: 'أيقونة المستخدم', value: 'User', category: 'user' },
          { id: 'icon-4', type: 'icon', name: 'أيقونة البحث', value: 'Search', category: 'action' },
        ];
      case 'animation':
        return [
          { id: 'anim-1', type: 'animation', name: 'حركة الدخول', value: 'fadeIn', category: 'entrance' },
          { id: 'anim-2', type: 'animation', name: 'حركة التحويم', value: 'scale', category: 'hover' },
          { id: 'anim-3', type: 'animation', name: 'حركة النقر', value: 'bounce', category: 'click' },
        ];
      default:
        return [];
    }
  };

  return { getStoredItems, saveItems, getDefaultItems };
};
