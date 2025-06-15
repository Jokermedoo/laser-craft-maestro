
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { GripVertical, Layout, Copy } from 'lucide-react';

interface DraggableItem {
  id: string;
  type: 'color' | 'font' | 'layout' | 'component' | 'icon' | 'animation';
  name: string;
  value: any;
  category?: string;
}

interface DraggableLayoutItemProps {
  item: DraggableItem;
  onUpdate: (id: string, value: any) => void;
}

const DraggableLayoutItem = ({ item, onUpdate }: DraggableLayoutItemProps) => {
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

  const numericValue = parseInt(item.value);
  const maxValue = item.category === 'container' ? 2000 : item.category === 'sidebar' ? 500 : 200;

  const handleSliderChange = (values: number[]) => {
    onUpdate(item.id, `${values[0]}px`);
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
      
      <Layout className="h-5 w-5 text-green-400" />
      
      <div className="flex-1 space-y-3">
        <Label className="text-gray-300 text-sm">{item.name}</Label>
        <div className="space-y-2">
          <Slider
            value={[numericValue]}
            onValueChange={handleSliderChange}
            min={50}
            max={maxValue}
            step={10}
            className="w-full"
          />
          <Input
            type="text"
            value={item.value}
            onChange={(e) => onUpdate(item.id, e.target.value)}
            className="bg-slate-800 border-gray-600 text-white text-sm h-8"
          />
        </div>
      </div>
      
      <div className="text-gray-400 text-sm min-w-[60px] text-center">
        {item.value}
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

export default DraggableLayoutItem;
