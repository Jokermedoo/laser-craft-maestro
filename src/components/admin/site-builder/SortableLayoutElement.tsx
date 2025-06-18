
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GripVertical, Eye, EyeOff, Copy, Trash2 } from 'lucide-react';
import { LayoutElement } from '@/hooks/useSiteBuilder';

interface SortableLayoutElementProps {
  element: LayoutElement;
  onToggleVisibility: (id: string) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}

const SortableLayoutElement = ({ 
  element, 
  onToggleVisibility, 
  onDelete, 
  onDuplicate 
}: SortableLayoutElementProps) => {
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

  const getElementIcon = (type: string) => {
    switch (type) {
      case 'hero': return '🏠';
      case 'services': return '⚙️';
      case 'products': return '📦';
      case 'about': return '👥';
      case 'gallery': return '🖼️';
      case 'contact': return '📞';
      default: return '📄';
    }
  };

  const getElementName = (type: string) => {
    switch (type) {
      case 'hero': return 'القسم الرئيسي';
      case 'services': return 'الخدمات';
      case 'products': return 'المنتجات';
      case 'about': return 'من نحن';
      case 'gallery': return 'المعرض';
      case 'contact': return 'التواصل';
      default: return type;
    }
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Card className={`bg-slate-700/50 border-purple-500/30 hover:border-purple-400 transition-all ${
        !element.visible ? 'opacity-50' : ''
      }`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <button
                className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-white"
                {...attributes}
                {...listeners}
              >
                <GripVertical className="h-5 w-5" />
              </button>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-2xl">{getElementIcon(element.type)}</span>
                <div>
                  <h4 className="text-white font-medium">
                    {element.content?.title || getElementName(element.type)}
                  </h4>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mt-1">
                    <Badge variant="outline" className="text-xs">
                      {getElementName(element.type)}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      الترتيب: {element.order}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onToggleVisibility(element.id)}
                className={`h-8 w-8 p-0 ${
                  element.visible 
                    ? 'border-green-500/50 text-green-400 hover:bg-green-600/20' 
                    : 'border-gray-500/50 text-gray-400 hover:bg-gray-600/20'
                }`}
              >
                {element.visible ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={() => onDuplicate(element.id)}
                className="h-8 w-8 p-0 border-blue-500/50 text-blue-400 hover:bg-blue-600/20"
              >
                <Copy className="h-3 w-3" />
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={() => onDelete(element.id)}
                className="h-8 w-8 p-0 border-red-500/50 text-red-400 hover:bg-red-600/20"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SortableLayoutElement;
