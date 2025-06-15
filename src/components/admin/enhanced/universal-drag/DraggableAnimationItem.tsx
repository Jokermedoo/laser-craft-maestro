import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { GripVertical, Zap, Play, Pause } from 'lucide-react';
import { DraggableItem } from './types';

interface DraggableAnimationItemProps {
  item: DraggableItem;
  onUpdate: (id: string, value: any) => void;
}

const DraggableAnimationItem = ({ item, onUpdate }: DraggableAnimationItemProps) => {
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

  const [animationType, setAnimationType] = useState('fade');
  const [duration, setDuration] = useState([300]);
  const [delay, setDelay] = useState([0]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const animationTypes = [
    { value: 'fade', label: 'تلاشي' },
    { value: 'slide', label: 'انزلاق' },
    { value: 'scale', label: 'تكبير' },
    { value: 'rotate', label: 'دوران' },
    { value: 'bounce', label: 'ارتداد' },
    { value: 'pulse', label: 'نبضة' },
    { value: 'shake', label: 'اهتزاز' },
    { value: 'flip', label: 'قلب' },
  ];

  const previewAnimation = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), duration[0]);
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
      
      <div className={`flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg border border-gray-600 ${isPlaying ? 'animate-pulse' : ''}`}>
        <Zap className="h-6 w-6 text-yellow-400" />
      </div>
      
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-gray-300 text-sm">{item.name}</Label>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Switch
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
            />
            <Button
              onClick={previewAnimation}
              size="sm"
              variant="outline"
              className="h-6 w-6 p-0 border-gray-600"
            >
              <Play className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label className="text-xs text-gray-400">نوع الحركة</Label>
            <Select value={animationType} onValueChange={setAnimationType}>
              <SelectTrigger className="bg-slate-800 border-gray-600 text-white h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {animationTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-xs text-gray-400">المدة (ms)</Label>
            <Slider
              value={duration}
              onValueChange={setDuration}
              min={100}
              max={2000}
              step={50}
              className="w-full"
            />
            <div className="text-xs text-gray-500 text-center">{duration[0]}ms</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-xs text-gray-400">التأخير (ms)</Label>
          <Slider
            value={delay}
            onValueChange={setDelay}
            min={0}
            max={1000}
            step={50}
            className="w-full"
          />
          <div className="text-xs text-gray-500 text-center">{delay[0]}ms</div>
        </div>
      </div>
    </div>
  );
};

export default DraggableAnimationItem;
