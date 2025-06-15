
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GripVertical, Palette, Copy } from 'lucide-react';

interface DraggableItem {
  id: string;
  type: 'color' | 'font' | 'layout' | 'component';
  name: string;
  value: any;
  category?: string;
}

interface DraggableColorItemProps {
  item: DraggableItem;
  onUpdate: (id: string, value: any) => void;
}

const DraggableColorItem = ({ item, onUpdate }: DraggableColorItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleColorChange = (value: string) => {
    onUpdate(item.id, value);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-slate-700/50 rounded-lg border border-gray-600 hover:border-purple-500/50 transition-all"
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-white"
      >
        <GripVertical className="h-5 w-5" />
      </div>
      
      <Palette className="h-5 w-5 text-purple-400" />
      
      <div
        className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
        style={{ backgroundColor: item.value }}
        onClick={() => {
          const input = document.createElement('input');
          input.type = 'color';
          input.value = item.value;
          input.onchange = (e) => handleColorChange((e.target as HTMLInputElement).value);
          input.click();
        }}
      />
      
      <div className="flex-1 space-y-2">
        <Label className="text-gray-300 text-sm">{item.name}</Label>
        <Input
          type="text"
          value={item.value}
          onChange={(e) => handleColorChange(e.target.value)}
          className="bg-slate-800 border-gray-600 text-white text-sm h-8"
        />
      </div>
      
      <Button
        onClick={() => navigator.clipboard.writeText(item.value)}
        size="sm"
        variant="outline"
        className="h-8 w-8 p-0 border-gray-600 hover:bg-gray-600"
      >
        <Copy className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default DraggableColorItem;
