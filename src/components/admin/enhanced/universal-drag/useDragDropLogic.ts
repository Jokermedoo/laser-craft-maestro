import { useState, useCallback, useMemo } from 'react';
import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { DraggableItem } from './types';

export const useDragDropLogic = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  // تحسين الحالة مع التخزين المؤقت
  const [colorItems, setColorItems] = useState<DraggableItem[]>(() => {
    const cached = localStorage.getItem('color-items');
    return cached ? JSON.parse(cached) : [
      { id: 'color-1', type: 'color', name: 'اللون الأساسي', value: '#8B5CF6', category: 'primary' },
      { id: 'color-2', type: 'color', name: 'اللون الثانوي', value: '#06B6D4', category: 'secondary' },
      { id: 'color-3', type: 'color', name: 'لون التمييز', value: '#F59E0B', category: 'accent' },
    ];
  });

  const [fontItems, setFontItems] = useState<DraggableItem[]>(() => {
    const cached = localStorage.getItem('font-items');
    return cached ? JSON.parse(cached) : [
      { id: 'font-1', type: 'font', name: 'الخط الأساسي', value: 'Cairo, sans-serif', category: 'primary' },
      { id: 'font-2', type: 'font', name: 'الخط الثانوي', value: 'Inter, sans-serif', category: 'secondary' },
    ];
  });

  const [layoutItems, setLayoutItems] = useState<DraggableItem[]>(() => {
    const cached = localStorage.getItem('layout-items');
    return cached ? JSON.parse(cached) : [
      { id: 'layout-1', type: 'layout', name: 'عرض الحاوية', value: '1200px', category: 'container' },
      { id: 'layout-2', type: 'layout', name: 'عرض الشريط الجانبي', value: '280px', category: 'sidebar' },
      { id: 'layout-3', type: 'layout', name: 'ارتفاع الهيدر', value: '80px', category: 'header' },
    ];
  });

  const [componentItems, setComponentItems] = useState<DraggableItem[]>(() => {
    const cached = localStorage.getItem('component-items');
    return cached ? JSON.parse(cached) : [
      { id: 'comp-1', type: 'component', name: 'البطاقات', value: 'cards', category: 'ui' },
      { id: 'comp-2', type: 'component', name: 'الأزرار', value: 'buttons', category: 'ui' },
      { id: 'comp-3', type: 'component', name: 'النماذج', value: 'forms', category: 'ui' },
    ];
  });

  const [iconItems, setIconItems] = useState<DraggableItem[]>(() => {
    const cached = localStorage.getItem('icon-items');
    return cached ? JSON.parse(cached) : [
      { id: 'icon-1', type: 'icon', name: 'أيقونة الرئيسية', value: 'Home', category: 'navigation' },
      { id: 'icon-2', type: 'icon', name: 'أيقونة الإعدادات', value: 'Settings', category: 'navigation' },
      { id: 'icon-3', type: 'icon', name: 'أيقونة المستخدم', value: 'User', category: 'user' },
      { id: 'icon-4', type: 'icon', name: 'أيقونة البحث', value: 'Search', category: 'action' },
    ];
  });

  const [animationItems, setAnimationItems] = useState<DraggableItem[]>(() => {
    const cached = localStorage.getItem('animation-items');
    return cached ? JSON.parse(cached) : [
      { id: 'anim-1', type: 'animation', name: 'حركة الدخول', value: 'fadeIn', category: 'entrance' },
      { id: 'anim-2', type: 'animation', name: 'حركة التحويم', value: 'scale', category: 'hover' },
      { id: 'anim-3', type: 'animation', name: 'حركة النقر', value: 'bounce', category: 'click' },
    ];
  });

  // حفظ التغييرات في التخزين المؤقت
  const saveToCache = useCallback((type: string, items: DraggableItem[]) => {
    localStorage.setItem(`${type}-items`, JSON.stringify(items));
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over || active.id === over.id) return;

    const activeItem = findItemById(active.id as string);
    if (!activeItem) return;

    switch (activeItem.type) {
      case 'color':
        setColorItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveToCache('color', newItems);
          return newItems;
        });
        break;
      case 'font':
        setFontItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveToCache('font', newItems);
          return newItems;
        });
        break;
      case 'layout':
        setLayoutItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveToCache('layout', newItems);
          return newItems;
        });
        break;
      case 'component':
        setComponentItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveToCache('component', newItems);
          return newItems;
        });
        break;
      case 'icon':
        setIconItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveToCache('icon', newItems);
          return newItems;
        });
        break;
      case 'animation':
        setAnimationItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveToCache('animation', newItems);
          return newItems;
        });
        break;
    }
  };

  // تحسين البحث مع useMemo
  const allItems = useMemo(() => 
    [...colorItems, ...fontItems, ...layoutItems, ...componentItems, ...iconItems, ...animationItems],
    [colorItems, fontItems, layoutItems, componentItems, iconItems, animationItems]
  );

  const findItemById = useCallback((id: string): DraggableItem | undefined => {
    return allItems.find(item => item.id === id);
  }, [allItems]);

  const updateItem = useCallback((id: string, newValue: any) => {
    const item = findItemById(id);
    if (!item) return;

    const updateFunction = (items: DraggableItem[]) => {
      const newItems = items.map(item => item.id === id ? { ...item, value: newValue } : item);
      return newItems;
    };

    switch (item.type) {
      case 'color':
        setColorItems(items => {
          const newItems = updateFunction(items);
          saveToCache('color', newItems);
          return newItems;
        });
        break;
      case 'font':
        setFontItems(items => {
          const newItems = updateFunction(items);
          saveToCache('font', newItems);
          return newItems;
        });
        break;
      case 'layout':
        setLayoutItems(items => {
          const newItems = updateFunction(items);
          saveToCache('layout', newItems);
          return newItems;
        });
        break;
      case 'component':
        setComponentItems(items => {
          const newItems = updateFunction(items);
          saveToCache('component', newItems);
          return newItems;
        });
        break;
      case 'icon':
        setIconItems(items => {
          const newItems = updateFunction(items);
          saveToCache('icon', newItems);
          return newItems;
        });
        break;
      case 'animation':
        setAnimationItems(items => {
          const newItems = updateFunction(items);
          saveToCache('animation', newItems);
          return newItems;
        });
        break;
    }
  }, [findItemById, saveToCache]);

  const addNewItem = useCallback((type: DraggableItem['type']) => {
    const newId = `${type}-${Date.now()}`;
    const newItem: DraggableItem = {
      id: newId,
      type,
      name: `عنصر جديد ${type}`,
      value: type === 'color' ? '#8B5CF6' : type === 'icon' ? 'Star' : 'default',
      category: 'custom'
    };

    switch (type) {
      case 'color':
        setColorItems(prev => {
          const newItems = [...prev, newItem];
          saveToCache('color', newItems);
          return newItems;
        });
        break;
      case 'font':
        setFontItems(prev => {
          const newItems = [...prev, newItem];
          saveToCache('font', newItems);
          return newItems;
        });
        break;
      case 'layout':
        setLayoutItems(prev => {
          const newItems = [...prev, newItem];
          saveToCache('layout', newItems);
          return newItems;
        });
        break;
      case 'component':
        setComponentItems(prev => {
          const newItems = [...prev, newItem];
          saveToCache('component', newItems);
          return newItems;
        });
        break;
      case 'icon':
        setIconItems(prev => {
          const newItems = [...prev, newItem];
          saveToCache('icon', newItems);
          return newItems;
        });
        break;
      case 'animation':
        setAnimationItems(prev => {
          const newItems = [...prev, newItem];
          saveToCache('animation', newItems);
          return newItems;
        });
        break;
    }
  }, [saveToCache]);

  const getAllElements = useCallback(() => allItems, [allItems]);

  const resetElements = useCallback(() => {
    const defaultColors = [
      { id: 'color-1', type: 'color', name: 'اللون الأساسي', value: '#8B5CF6', category: 'primary' },
      { id: 'color-2', type: 'color', name: 'اللون الثانوي', value: '#06B6D4', category: 'secondary' },
      { id: 'color-3', type: 'color', name: 'لون التمييز', value: '#F59E0B', category: 'accent' },
    ] as DraggableItem[];
    
    setColorItems(defaultColors);
    saveToCache('color', defaultColors);
  }, [saveToCache]);

  const randomizeElements = useCallback(() => {
    const shuffledColors = [...colorItems].sort(() => Math.random() - 0.5);
    const shuffledIcons = [...iconItems].sort(() => Math.random() - 0.5);
    const shuffledAnimations = [...animationItems].sort(() => Math.random() - 0.5);
    
    setColorItems(shuffledColors);
    setIconItems(shuffledIcons);
    setAnimationItems(shuffledAnimations);
    
    saveToCache('color', shuffledColors);
    saveToCache('icon', shuffledIcons);
    saveToCache('animation', shuffledAnimations);
  }, [colorItems, iconItems, animationItems, saveToCache]);

  return {
    activeId,
    colorItems,
    fontItems,
    layoutItems,
    componentItems,
    iconItems,
    animationItems,
    handleDragStart,
    handleDragEnd,
    findItemById,
    updateItem,
    addNewItem,
    getAllElements,
    resetElements,
    randomizeElements
  };
};
