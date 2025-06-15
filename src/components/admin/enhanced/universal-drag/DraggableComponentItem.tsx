import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GripVertical, Grid, Eye, EyeOff } from 'lucide-react';
import { DraggableItem } from './types';

interface DraggableComponentItemProps {
  item: DraggableItem;
  onUpdate: (id: string, value: any) => void;
}

const DraggableComponentItem = ({ item, onUpdate }: DraggableComponentItemProps) => {
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

  const [isVisible, setIsVisible] = React.useState(true);
  const [componentStyle, setComponentStyle] = React.useState('default');

  const styleOptions = ['default', 'modern', 'classic', 'minimal', 'bold'];

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
      
      <Grid className="h-5 w-5 text-orange-400" />
      
      <div className="flex-1 space-y-3">
        <Label className="text-gray-300 text-sm">{item.name}</Label>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center justify-between">
            <Label className="text-gray-400 text-xs">الرؤية</Label>
            <Switch
              checked={isVisible}
              onCheckedChange={setIsVisible}
            />
          </div>
          <Select value={componentStyle} onValueChange={setComponentStyle}>
            <SelectTrigger className="bg-slate-800 border-gray-600 text-white h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {styleOptions.map((style) => (
                <SelectItem key={style} value={style}>
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Button
          size="sm"
          variant="outline"
          className={`h-8 w-8 p-0 border-gray-600 ${isVisible ? 'text-green-400' : 'text-red-400'}`}
        >
          {isVisible ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
        </Button>
      </div>
    </div>
  );
};

export default DraggableComponentItem;
