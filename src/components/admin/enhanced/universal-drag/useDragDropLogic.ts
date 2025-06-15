
import { useState } from 'react';
import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { DraggableItem } from './types';

export const useDragDropLogic = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  const [colorItems, setColorItems] = useState<DraggableItem[]>([
    { id: 'color-1', type: 'color', name: 'اللون الأساسي', value: '#8B5CF6', category: 'primary' },
    { id: 'color-2', type: 'color', name: 'اللون الثانوي', value: '#06B6D4', category: 'secondary' },
    { id: 'color-3', type: 'color', name: 'لون التمييز', value: '#F59E0B', category: 'accent' },
  ]);

  const [fontItems, setFontItems] = useState<DraggableItem[]>([
    { id: 'font-1', type: 'font', name: 'الخط الأساسي', value: 'Cairo, sans-serif', category: 'primary' },
    { id: 'font-2', type: 'font', name: 'الخط الثانوي', value: 'Inter, sans-serif', category: 'secondary' },
  ]);

  const [layoutItems, setLayoutItems] = useState<DraggableItem[]>([
    { id: 'layout-1', type: 'layout', name: 'عرض الحاوية', value: '1200px', category: 'container' },
    { id: 'layout-2', type: 'layout', name: 'عرض الشريط الجانبي', value: '280px', category: 'sidebar' },
    { id: 'layout-3', type: 'layout', name: 'ارتفاع الهيدر', value: '80px', category: 'header' },
  ]);

  const [componentItems, setComponentItems] = useState<DraggableItem[]>([
    { id: 'comp-1', type: 'component', name: 'البطاقات', value: 'cards', category: 'ui' },
    { id: 'comp-2', type: 'component', name: 'الأزرار', value: 'buttons', category: 'ui' },
    { id: 'comp-3', type: 'component', name: 'النماذج', value: 'forms', category: 'ui' },
  ]);

  const [iconItems, setIconItems] = useState<DraggableItem[]>([
    { id: 'icon-1', type: 'icon', name: 'أيقونة الرئيسية', value: 'Home', category: 'navigation' },
    { id: 'icon-2', type: 'icon', name: 'أيقونة الإعدادات', value: 'Settings', category: 'navigation' },
    { id: 'icon-3', type: 'icon', name: 'أيقونة المستخدم', value: 'User', category: 'user' },
    { id: 'icon-4', type: 'icon', name: 'أيقونة البحث', value: 'Search', category: 'action' },
  ]);

  const [animationItems, setAnimationItems] = useState<DraggableItem[]>([
    { id: 'anim-1', type: 'animation', name: 'حركة الدخول', value: 'fadeIn', category: 'entrance' },
    { id: 'anim-2', type: 'animation', name: 'حركة التحويم', value: 'scale', category: 'hover' },
    { id: 'anim-3', type: 'animation', name: 'حركة النقر', value: 'bounce', category: 'click' },
  ]);

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
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'font':
        setFontItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'layout':
        setLayoutItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'component':
        setComponentItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'icon':
        setIconItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'animation':
        setAnimationItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
    }
  };

  const findItemById = (id: string): DraggableItem | undefined => {
    return [...colorItems, ...fontItems, ...layoutItems, ...componentItems, ...iconItems, ...animationItems].find(item => item.id === id);
  };

  const updateItem = (id: string, newValue: any) => {
    const item = findItemById(id);
    if (!item) return;

    const updateFunction = (items: DraggableItem[]) =>
      items.map(item => item.id === id ? { ...item, value: newValue } : item);

    switch (item.type) {
      case 'color':
        setColorItems(updateFunction);
        break;
      case 'font':
        setFontItems(updateFunction);
        break;
      case 'layout':
        setLayoutItems(updateFunction);
        break;
      case 'component':
        setComponentItems(updateFunction);
        break;
      case 'icon':
        setIconItems(updateFunction);
        break;
      case 'animation':
        setAnimationItems(updateFunction);
        break;
    }
  };

  const addNewItem = (type: DraggableItem['type']) => {
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
        setColorItems(prev => [...prev, newItem]);
        break;
      case 'font':
        setFontItems(prev => [...prev, newItem]);
        break;
      case 'layout':
        setLayoutItems(prev => [...prev, newItem]);
        break;
      case 'component':
        setComponentItems(prev => [...prev, newItem]);
        break;
      case 'icon':
        setIconItems(prev => [...prev, newItem]);
        break;
      case 'animation':
        setAnimationItems(prev => [...prev, newItem]);
        break;
    }
  };

  const getAllElements = () => {
    return [...colorItems, ...fontItems, ...layoutItems, ...componentItems, ...iconItems, ...animationItems];
  };

  const resetElements = () => {
    setColorItems([
      { id: 'color-1', type: 'color', name: 'اللون الأساسي', value: '#8B5CF6', category: 'primary' },
      { id: 'color-2', type: 'color', name: 'اللون الثانوي', value: '#06B6D4', category: 'secondary' },
      { id: 'color-3', type: 'color', name: 'لون التمييز', value: '#F59E0B', category: 'accent' },
    ]);
  };

  const randomizeElements = () => {
    setColorItems(prev => [...prev].sort(() => Math.random() - 0.5));
    setIconItems(prev => [...prev].sort(() => Math.random() - 0.5));
    setAnimationItems(prev => [...prev].sort(() => Math.random() - 0.5));
  };

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
