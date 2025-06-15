
import { useCallback } from 'react';
import { DraggableItem } from '../types';
import { useItemStorage } from './useItemStorage';

export const useUtilityOperations = (
  colorItems: DraggableItem[],
  setColorItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>,
  iconItems: DraggableItem[],
  setIconItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>,
  animationItems: DraggableItem[],
  setAnimationItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>,
  allItems: DraggableItem[]
) => {
  const { saveItems, getDefaultItems } = useItemStorage();

  const getAllElements = useCallback(() => allItems, [allItems]);

  const resetElements = useCallback(() => {
    const defaultColors = getDefaultItems('color');
    setColorItems(defaultColors);
    saveItems('color', defaultColors);
  }, [getDefaultItems, setColorItems, saveItems]);

  const randomizeElements = useCallback(() => {
    const shuffledColors = [...colorItems].sort(() => Math.random() - 0.5);
    const shuffledIcons = [...iconItems].sort(() => Math.random() - 0.5);
    const shuffledAnimations = [...animationItems].sort(() => Math.random() - 0.5);
    
    setColorItems(shuffledColors);
    setIconItems(shuffledIcons);
    setAnimationItems(shuffledAnimations);
    
    saveItems('color', shuffledColors);
    saveItems('icon', shuffledIcons);
    saveItems('animation', shuffledAnimations);
  }, [colorItems, iconItems, animationItems, setColorItems, setIconItems, setAnimationItems, saveItems]);

  return {
    getAllElements,
    resetElements,
    randomizeElements
  };
};
