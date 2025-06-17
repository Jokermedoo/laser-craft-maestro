
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { GripVertical, Trash2, Edit } from 'lucide-react';

interface LayoutElement {
  id: string;
  type: 'section' | 'grid' | 'card' | 'text' | 'image';
  name: string;
  properties: {
    width?: string;
    height?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
  };
}

interface SortableLayoutItemProps {
  element: LayoutElement;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

const SortableLayoutItem = ({ element, isSelected, onSelect, onDelete }: SortableLayoutItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: element.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'section': return 'قسم';
      case 'grid': return 'شبكة';
      case 'card': return 'بطاقة';
      case 'text': return 'نص';
      case 'image': return 'صورة';
      default: return type;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        group relative p-4 border-2 border-dashed rounded-lg cursor-pointer transition-all
        ${isSelected 
          ? 'border-purple-400 bg-purple-400/10' 
          : 'border-gray-600 hover:border-purple-400/50 bg-slate-700/30'
        }
      `}
      onClick={onSelect}
    >
      {/* Handle للسحب */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-2 right-2 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <GripVertical className="h-4 w-4 text-gray-400" />
      </div>

      {/* أزرار الإجراءات */}
      <div className="absolute top-2 left-2 flex space-x-1 rtl:space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="sm"
          variant="outline"
          className="h-6 w-6 p-0 border-red-500/50 text-red-400 hover:bg-red-600/20"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>

      {/* محتوى العنصر */}
      <div className="min-h-[80px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-white font-medium">{element.name}</div>
          <div className="text-gray-400 text-sm">{getTypeLabel(element.type)}</div>
          <div className="text-gray-500 text-xs mt-1">
            {element.properties.width} × {element.properties.height}
          </div>
        </div>
      </div>

      {/* معاينة الخصائص */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none opacity-20"
        style={{
          backgroundColor: element.properties.backgroundColor,
          borderRadius: element.properties.borderRadius,
        }}
      />
    </div>
  );
};

export default SortableLayoutItem;
