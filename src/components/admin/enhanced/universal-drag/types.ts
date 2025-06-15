
export interface DraggableItem {
  id: string;
  type: 'color' | 'font' | 'layout' | 'component' | 'icon' | 'animation';
  name: string;
  value: any;
  category?: string;
}

export interface TabContentProps {
  items: DraggableItem[];
  onUpdate: (id: string, value: any) => void;
  onAddItem?: () => void;
  renderDraggableItem: (item: DraggableItem) => React.ReactNode;
}
