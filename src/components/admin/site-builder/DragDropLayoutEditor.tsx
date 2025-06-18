
import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layout, Plus, Eye, EyeOff } from 'lucide-react';
import { LayoutElement } from '@/hooks/useSiteBuilder';
import SortableLayoutElement from './SortableLayoutElement';
import { useSmartNotifications } from '@/hooks/useSmartNotifications';

interface DragDropLayoutEditorProps {
  elements: LayoutElement[];
  onChange: (elements: LayoutElement[]) => void;
}

const DragDropLayoutEditor = ({ elements, onChange }: DragDropLayoutEditorProps) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const { showSuccess } = useSmartNotifications();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = elements.findIndex((item) => item.id === active.id);
      const newIndex = elements.findIndex((item) => item.id === over.id);
      
      const newElements = arrayMove(elements, oldIndex, newIndex).map((el, index) => ({
        ...el,
        order: index + 1
      }));
      
      onChange(newElements);
      showSuccess('تم إعادة ترتيب العناصر بنجاح');
    }

    setActiveId(null);
  };

  const addElement = (type: LayoutElement['type']) => {
    const newElement: LayoutElement = {
      id: `${type}-${Date.now()}`,
      type,
      content: getDefaultContent(type),
      style: {},
      visible: true,
      order: elements.length + 1,
    };

    onChange([...elements, newElement]);
    showSuccess(`تم إضافة عنصر ${type} بنجاح`);
  };

  const toggleVisibility = (elementId: string) => {
    const updatedElements = elements.map(el =>
      el.id === elementId ? { ...el, visible: !el.visible } : el
    );
    onChange(updatedElements);
  };

  const deleteElement = (elementId: string) => {
    const filteredElements = elements.filter(el => el.id !== elementId);
    onChange(filteredElements);
    showSuccess('تم حذف العنصر بنجاح');
  };

  const duplicateElement = (elementId: string) => {
    const elementToDuplicate = elements.find(el => el.id === elementId);
    if (elementToDuplicate) {
      const newElement = {
        ...elementToDuplicate,
        id: `${elementToDuplicate.type}-${Date.now()}`,
        order: elements.length + 1,
      };
      onChange([...elements, newElement]);
      showSuccess('تم نسخ العنصر بنجاح');
    }
  };

  const getDefaultContent = (type: LayoutElement['type']) => {
    switch (type) {
      case 'hero':
        return {
          title: 'عنوان رئيسي جديد',
          subtitle: 'عنوان فرعي',
          description: 'وصف القسم الرئيسي',
          buttonText: 'ابدأ الآن'
        };
      case 'services':
        return {
          title: 'خدماتنا',
          services: []
        };
      case 'products':
        return {
          title: 'منتجاتنا',
          products: []
        };
      case 'about':
        return {
          title: 'من نحن',
          description: 'معلومات عن الشركة'
        };
      case 'gallery':
        return {
          title: 'معرض الأعمال',
          images: []
        };
      case 'contact':
        return {
          title: 'تواصل معنا',
          phone: '',
          email: '',
          address: ''
        };
      default:
        return {};
    }
  };

  const availableElements = [
    { type: 'hero' as const, name: 'القسم الرئيسي', icon: '🏠' },
    { type: 'services' as const, name: 'الخدمات', icon: '⚙️' },
    { type: 'products' as const, name: 'المنتجات', icon: '📦' },
    { type: 'about' as const, name: 'من نحن', icon: '👥' },
    { type: 'gallery' as const, name: 'المعرض', icon: '🖼️' },
    { type: 'contact' as const, name: 'التواصل', icon: '📞' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Layout className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">محرر التخطيط</h2>
            <p className="text-gray-400">إضافة وترتيب عناصر الموقع بالسحب والإفلات</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* عناصر جديدة */}
        <div className="xl:col-span-1">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">إضافة عناصر</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {availableElements.map((element) => (
                <Button
                  key={element.type}
                  onClick={() => addElement(element.type)}
                  className="w-full justify-start bg-slate-700 hover:bg-purple-600/20 border border-purple-500/30"
                  variant="outline"
                >
                  <span className="ml-2">{element.icon}</span>
                  {element.name}
                  <Plus className="h-4 w-4 mr-auto" />
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* عناصر التخطيط */}
        <div className="xl:col-span-3">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">عناصر الموقع</CardTitle>
            </CardHeader>
            <CardContent>
              {elements.length === 0 ? (
                <div className="text-center py-12">
                  <Layout className="h-12 w-12 mx-auto mb-4 text-gray-400 opacity-50" />
                  <p className="text-gray-400">لا توجد عناصر. أضف عنصراً من القائمة الجانبية</p>
                </div>
              ) : (
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext items={elements.map(el => el.id)} strategy={verticalListSortingStrategy}>
                    <div className="space-y-3">
                      {elements.map((element) => (
                        <SortableLayoutElement
                          key={element.id}
                          element={element}
                          onToggleVisibility={toggleVisibility}
                          onDelete={deleteElement}
                          onDuplicate={duplicateElement}
                        />
                      ))}
                    </div>
                  </SortableContext>

                  <DragOverlay>
                    {activeId ? (
                      <SortableLayoutElement
                        element={elements.find(el => el.id === activeId)!}
                        onToggleVisibility={() => {}}
                        onDelete={() => {}}
                        onDuplicate={() => {}}
                      />
                    ) : null}
                  </DragOverlay>
                </DndContext>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DragDropLayoutEditor;
