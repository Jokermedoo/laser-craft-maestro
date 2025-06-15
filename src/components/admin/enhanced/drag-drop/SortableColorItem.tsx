
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GripVertical, Copy, Trash2 } from 'lucide-react';

interface ColorItem {
  id: string;
  name: string;
  value: string;
  category: 'primary' | 'secondary' | 'accent' | 'background' | 'text';
}

interface SortableColorItemProps {
  color: ColorItem;
  onUpdate: (id: string, value: string) => void;
  onDelete: (id: string) => void;
}

const SortableColorItem = ({ color, onUpdate, onDelete }: SortableColorItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: color.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleColorClick = () => {
    const input = document.createElement('input');
    input.type = 'color';
    input.value = color.value;
    input.onchange = (e) => onUpdate(color.id, (e.target as HTMLInputElement).value);
    input.click();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color.value);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-slate-700/50 rounded-lg border border-gray-600 hover:border-purple-500/50 transition-all"
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-white"
      >
        <GripVertical className="h-5 w-5" />
      </div>
      
      <div
        className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
        style={{ backgroundColor: color.value }}
        onClick={handleColorClick}
      />
      
      <div className="flex-1 space-y-2">
        <Label className="text-gray-300 text-sm">{color.name}</Label>
        <Input
          type="text"
          value={color.value}
          onChange={(e) => onUpdate(color.id, e.target.value)}
          className="bg-slate-800 border-gray-600 text-white text-sm h-8"
        />
      </div>
      
      <div className="flex space-x-2 rtl:space-x-reverse">
        <Button
          onClick={handleCopy}
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0 border-gray-600 hover:bg-gray-600"
        >
          <Copy className="h-3 w-3" />
        </Button>
        <Button
          onClick={() => onDelete(color.id)}
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0 border-red-500/50 text-red-400 hover:bg-red-600/20"
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default SortableColorItem;
export type { ColorItem };
