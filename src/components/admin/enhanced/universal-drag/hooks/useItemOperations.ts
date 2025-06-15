
import { useCallback } from 'react';
import { DraggableItem } from '../types';
import { useItemStorage } from './useItemStorage';

export const useItemOperations = (
  colorItems: DraggableItem[],
  setColorItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>,
  fontItems: DraggableItem[],
  setFontItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>,
  layoutItems: DraggableItem[],
  setLayoutItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>,
  componentItems: DraggableItem[],
  setComponentItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>,
  iconItems: DraggableItem[],
  setIconItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>,
  animationItems: DraggableItem[],
  setAnimationItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>
) => {
  const { saveItems } = useItemStorage();

  const allItems = [
    ...colorItems,
    ...fontItems,
    ...layoutItems,
    ...componentItems,
    ...iconItems,
    ...animationItems
  ];

  const findItemById = useCallback((id: string): DraggableItem | undefined => {
    return allItems.find(item => item.id === id);
  }, [allItems]);

  const updateItem = useCallback((id: string, newValue: any) => {
    const item = findItemById(id);
    if (!item) return;

    const updateFunction = (items: DraggableItem[]) => {
      return items.map(item => item.id === id ? { ...item, value: newValue } : item);
    };

    switch (item.type) {
      case 'color':
        setColorItems(items => {
          const newItems = updateFunction(items);
          saveItems('color', newItems);
          return newItems;
        });
        break;
      case 'font':
        setFontItems(items => {
          const newItems = updateFunction(items);
          saveItems('font', newItems);
          return newItems;
        });
        break;
      case 'layout':
        setLayoutItems(items => {
          const newItems = updateFunction(items);
          saveItems('layout', newItems);
          return newItems;
        });
        break;
      case 'component':
        setComponentItems(items => {
          const newItems = updateFunction(items);
          saveItems('component', newItems);
          return newItems;
        });
        break;
      case 'icon':
        setIconItems(items => {
          const newItems = updateFunction(items);
          saveItems('icon', newItems);
          return newItems;
        });
        break;
      case 'animation':
        setAnimationItems(items => {
          const newItems = updateFunction(items);
          saveItems('animation', newItems);
          return newItems;
        });
        break;
    }
  }, [findItemById, saveItems, setColorItems, setFontItems, setLayoutItems, setComponentItems, setIconItems, setAnimationItems]);

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
          saveItems('color', newItems);
          return newItems;
        });
        break;
      case 'font':
        setFontItems(prev => {
          const newItems = [...prev, newItem];
          saveItems('font', newItems);
          return newItems;
        });
        break;
      case 'layout':
        setLayoutItems(prev => {
          const newItems = [...prev, newItem];
          saveItems('layout', newItems);
          return newItems;
        });
        break;
      case 'component':
        setComponentItems(prev => {
          const newItems = [...prev, newItem];
          saveItems('component', newItems);
          return newItems;
        });
        break;
      case 'icon':
        setIconItems(prev => {
          const newItems = [...prev, newItem];
          saveItems('icon', newItems);
          return newItems;
        });
        break;
      case 'animation':
        setAnimationItems(prev => {
          const newItems = [...prev, newItem];
          saveItems('animation', newItems);
          return newItems;
        });
        break;
    }
  }, [saveItems, setColorItems, setFontItems, setLayoutItems, setComponentItems, setIconItems, setAnimationItems]);

  return {
    allItems,
    findItemById,
    updateItem,
    addNewItem
  };
};
