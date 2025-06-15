import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  GripVertical, 
  Star, 
  Heart, 
  Home, 
  Settings, 
  User, 
  Mail, 
  Phone, 
  Search,
  Plus,
  Edit,
  Trash,
  Eye,
  EyeOff,
  Camera,
  Image,
  Download,
  Upload
} from 'lucide-react';
import { DraggableItem } from './types';

interface DraggableIconItemProps {
  item: DraggableItem;
  onUpdate: (id: string, value: any) => void;
}

const iconOptions = [
  { name: 'Star', icon: Star, value: 'Star' },
  { name: 'Heart', icon: Heart, value: 'Heart' },
  { name: 'Home', icon: Home, value: 'Home' },
  { name: 'Settings', icon: Settings, value: 'Settings' },
  { name: 'User', icon: User, value: 'User' },
  { name: 'Mail', icon: Mail, value: 'Mail' },
  { name: 'Phone', icon: Phone, value: 'Phone' },
  { name: 'Search', icon: Search, value: 'Search' },
  { name: 'Plus', icon: Plus, value: 'Plus' },
  { name: 'Edit', icon: Edit, value: 'Edit' },
  { name: 'Trash', icon: Trash, value: 'Trash' },
  { name: 'Eye', icon: Eye, value: 'Eye' },
  { name: 'EyeOff', icon: EyeOff, value: 'EyeOff' },
  { name: 'Camera', icon: Camera, value: 'Camera' },
  { name: 'Image', icon: Image, value: 'Image' },
  { name: 'Download', icon: Download, value: 'Download' },
  { name: 'Upload', icon: Upload, value: 'Upload' },
];

const DraggableIconItem = ({ item, onUpdate }: DraggableIconItemProps) => {
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

  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState('#8B5CF6');
  
  const selectedIcon = iconOptions.find(opt => opt.value === item.value)?.icon || Star;
  const SelectedIconComponent = selectedIcon;

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
      
      <div className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg border border-gray-600">
        <SelectedIconComponent size={iconSize} color={iconColor} />
      </div>
      
      <div className="flex-1 space-y-3">
        <Label className="text-gray-300 text-sm">{item.name}</Label>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label className="text-xs text-gray-400">نوع الأيقونة</Label>
            <Select value={item.value} onValueChange={(value) => onUpdate(item.id, value)}>
              <SelectTrigger className="bg-slate-800 border-gray-600 text-white h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-48">
                {iconOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <option.icon size={16} />
                      <span>{option.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-xs text-gray-400">الحجم</Label>
            <Input
              type="number"
              value={iconSize}
              onChange={(e) => setIconSize(Number(e.target.value))}
              className="bg-slate-800 border-gray-600 text-white h-8"
              min="12"
              max="48"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-xs text-gray-400">اللون</Label>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div
              className="w-8 h-8 rounded border-2 border-white/20 cursor-pointer"
              style={{ backgroundColor: iconColor }}
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'color';
                input.value = iconColor;
                input.onchange = (e) => setIconColor((e.target as HTMLInputElement).value);
                input.click();
              }}
            />
            <Input
              type="text"
              value={iconColor}
              onChange={(e) => setIconColor(e.target.value)}
              className="bg-slate-800 border-gray-600 text-white text-xs h-8 flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraggableIconItem;
