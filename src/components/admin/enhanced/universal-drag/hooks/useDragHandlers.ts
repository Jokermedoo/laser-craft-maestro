
import { useState, useCallback } from 'react';
import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { DraggableItem } from '../types';
import { useItemStorage } from './useItemStorage';

export const useDragHandlers = (
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
  setAnimationItems: React.Dispatch<React.SetStateAction<DraggableItem[]>>,
  findItemById: (id: string) => DraggableItem | undefined
) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { saveItems } = useItemStorage();

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
          saveItems('color', newItems);
          return newItems;
        });
        break;
      case 'font':
        setFontItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveItems('font', newItems);
          return newItems;
        });
        break;
      case 'layout':
        setLayoutItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveItems('layout', newItems);
          return newItems;
        });
        break;
      case 'component':
        setComponentItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveItems('component', newItems);
          return newItems;
        });
        break;
      case 'icon':
        setIconItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveItems('icon', newItems);
          return newItems;
        });
        break;
      case 'animation':
        setAnimationItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(items, oldIndex, newIndex);
          saveItems('animation', newItems);
          return newItems;
        });
        break;
    }
  };

  return {
    activeId,
    handleDragStart,
    handleDragEnd
  };
};
