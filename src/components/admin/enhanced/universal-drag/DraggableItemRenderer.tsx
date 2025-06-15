
import React from 'react';
import { DraggableItem } from './types';
import DraggableColorItem from './DraggableColorItem';
import DraggableFontItem from './DraggableFontItem';
import DraggableLayoutItem from './DraggableLayoutItem';
import DraggableComponentItem from './DraggableComponentItem';
import DraggableIconItem from './DraggableIconItem';
import DraggableAnimationItem from './DraggableAnimationItem';

interface DraggableItemRendererProps {
  item: DraggableItem;
  onUpdate: (id: string, value: any) => void;
}

const DraggableItemRenderer = ({ item, onUpdate }: DraggableItemRendererProps) => {
  switch (item.type) {
    case 'color':
      return (
        <DraggableColorItem
          key={item.id}
          item={item}
          onUpdate={onUpdate}
        />
      );
    case 'font':
      return (
        <DraggableFontItem
          key={item.id}
          item={item}
          onUpdate={onUpdate}
        />
      );
    case 'layout':
      return (
        <DraggableLayoutItem
          key={item.id}
          item={item}
          onUpdate={onUpdate}
        />
      );
    case 'component':
      return (
        <DraggableComponentItem
          key={item.id}
          item={item}
          onUpdate={onUpdate}
        />
      );
    case 'icon':
      return (
        <DraggableIconItem
          key={item.id}
          item={item}
          onUpdate={onUpdate}
        />
      );
    case 'animation':
      return (
        <DraggableAnimationItem
          key={item.id}
          item={item}
          onUpdate={onUpdate}
        />
      );
    default:
      return null;
  }
};

export default DraggableItemRenderer;
