
import { useState } from 'react';
import { DraggableItem } from './types';
import { useItemStorage } from './hooks/useItemStorage';
import { useItemOperations } from './hooks/useItemOperations';
import { useDragHandlers } from './hooks/useDragHandlers';
import { useUtilityOperations } from './hooks/useUtilityOperations';

export const useDragDropLogic = () => {
  const { getStoredItems } = useItemStorage();

  // Initialize state with cached data
  const [colorItems, setColorItems] = useState<DraggableItem[]>(() => getStoredItems('color'));
  const [fontItems, setFontItems] = useState<DraggableItem[]>(() => getStoredItems('font'));
  const [layoutItems, setLayoutItems] = useState<DraggableItem[]>(() => getStoredItems('layout'));
  const [componentItems, setComponentItems] = useState<DraggableItem[]>(() => getStoredItems('component'));
  const [iconItems, setIconItems] = useState<DraggableItem[]>(() => getStoredItems('icon'));
  const [animationItems, setAnimationItems] = useState<DraggableItem[]>(() => getStoredItems('animation'));

  // Use the separated hooks
  const { allItems, findItemById, updateItem, addNewItem } = useItemOperations(
    colorItems, setColorItems,
    fontItems, setFontItems,
    layoutItems, setLayoutItems,
    componentItems, setComponentItems,
    iconItems, setIconItems,
    animationItems, setAnimationItems
  );

  const { activeId, handleDragStart, handleDragEnd } = useDragHandlers(
    colorItems, setColorItems,
    fontItems, setFontItems,
    layoutItems, setLayoutItems,
    componentItems, setComponentItems,
    iconItems, setIconItems,
    animationItems, setAnimationItems,
    findItemById
  );

  const { getAllElements, resetElements, randomizeElements } = useUtilityOperations(
    colorItems, setColorItems,
    iconItems, setIconItems,
    animationItems, setAnimationItems,
    allItems
  );

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
