
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GripVertical, Type, Copy } from 'lucide-react';

interface DraggableItem {
  id: string;
  type: 'color' | 'font' | 'layout' | 'component';
  name: string;
  value: any;
  category?: string;
}

interface DraggableFontItemProps {
  item: DraggableItem;
  onUpdate: (id: string, value: any) => void;
}

const DraggableFontItem = ({ item, onUpdate }: DraggableFontItemProps) => {
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

  const fontOptions = [
    'Cairo, sans-serif',
    'Inter, sans-serif',
    'Roboto, sans-serif',
    'Open Sans, sans-serif',
    'Montserrat, sans-serif',
    'Poppins, sans-serif',
  ];

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
      
      <Type className="h-5 w-5 text-blue-400" />
      
      <div className="flex-1 space-y-2">
        <Label className="text-gray-300 text-sm">{item.name}</Label>
        <div className="flex space-x-2 rtl:space-x-reverse">
          <Select value={item.value} onValueChange={(value) => onUpdate(item.id, value)}>
            <SelectTrigger className="bg-slate-800 border-gray-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fontOptions.map((font) => (
                <SelectItem key={font} value={font} style={{ fontFamily: font }}>
                  {font}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="text"
            value={item.value}
            onChange={(e) => onUpdate(item.id, e.target.value)}
            className="bg-slate-800 border-gray-600 text-white text-sm h-8 flex-1"
            style={{ fontFamily: item.value }}
          />
        </div>
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

export default DraggableFontItem;
