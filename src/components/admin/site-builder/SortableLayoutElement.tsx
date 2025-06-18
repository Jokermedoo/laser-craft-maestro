
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  GripVertical, 
  Eye, 
  EyeOff, 
  Copy, 
  Trash2, 
  Edit 
} from 'lucide-react';
import { LayoutElement } from '@/hooks/useSiteBuilder';

interface SortableLayoutElementProps {
  element: LayoutElement;
  onUpdate: (id: string, updates: Partial<LayoutElement>) => void;
  onDelete: (id: string) => void;
  onDuplicate: (element: LayoutElement) => void;
}

const SortableLayoutElement = ({ 
  element, 
  onUpdate, 
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
      case 'hero': return '🏆';
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
      case 'hero': return 'قسم البطل';
      case 'services': return 'الخدمات';
      case 'products': return 'المنتجات';
      case 'about': return 'من نحن';
      case 'gallery': return 'المعرض';
      case 'contact': return 'اتصل بنا';
      default: return type;
    }
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Card 
        className={`
          border-2 border-dashed transition-all duration-200
          ${element.visible 
            ? 'border-purple-400/50 bg-purple-400/5' 
            : 'border-gray-600/50 bg-gray-600/5 opacity-60'
          }
          hover:border-purple-400 hover:shadow-lg
        `}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Handle للسحب */}
              <div
                {...attributes}
                {...listeners}
                className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-white transition-colors"
              >
                <GripVertical className="h-5 w-5" />
              </div>
              
              {/* أيقونة ونوع العنصر */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-2xl">{getElementIcon(element.type)}</span>
                <div>
                  <h3 className="text-white font-medium">
                    {getElementName(element.type)}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {element.content?.title || 'بدون عنوان'}
                  </p>
                </div>
              </div>
            </div>

            {/* أزرار التحكم */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {/* مفتاح الإظهار/الإخفاء */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Switch
                  checked={element.visible}
                  onCheckedChange={(visible) => onUpdate(element.id, { visible })}
                />
                {element.visible ? (
                  <Eye className="h-4 w-4 text-green-400" />
                ) : (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                )}
              </div>

              {/* أزرار الإجراءات */}
              <Button
                size="sm"
                variant="outline"
                onClick={() => onDuplicate(element)}
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

          {/* معاينة المحتوى */}
          <div className="mt-3 p-3 bg-slate-700/30 rounded-lg">
            <div className="text-gray-300 text-sm">
              {element.type === 'hero' && (
                <div>
                  <div className="font-medium">{element.content?.title}</div>
                  <div className="text-gray-400">{element.content?.subtitle}</div>
                </div>
              )}
              {element.type === 'services' && (
                <div>خدمات: {element.content?.services?.length || 0}</div>
              )}
              {element.type === 'products' && (
                <div>منتجات: {element.content?.products?.length || 0}</div>
              )}
              {element.type === 'gallery' && (
                <div>صور: {element.content?.images?.length || 0}</div>
              )}
              {(element.type === 'about' || element.type === 'contact') && (
                <div>{element.content?.description || element.content?.title}</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SortableLayoutElement;
