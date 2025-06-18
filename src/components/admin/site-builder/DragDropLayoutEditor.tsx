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
    showSuccess(`تم إضافة عنصر ${getElementName(type)} بنجاح`);
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
          services: [
            {
              id: '1',
              title: 'خدمة متميزة',
              description: 'وصف الخدمة',
              icon: '⚙️'
            }
          ]
        };
      case 'products':
        return {
          title: 'منتجاتنا',
          products: [
            {
              id: '1',
              name: 'منتج رائع',
              description: 'وصف المنتج',
              price: '100 ريال',
              image: '/placeholder.svg'
            }
          ]
        };
      case 'about':
        return {
          title: 'من نحن',
          description: 'معلومات عن الشركة',
          image: '/placeholder.svg',
          features: ['ميزة 1', 'ميزة 2', 'ميزة 3']
        };
      case 'gallery':
        return {
          title: 'معرض الأعمال',
          images: [
            { id: '1', src: '/placeholder.svg', alt: 'صورة 1' },
            { id: '2', src: '/placeholder.svg', alt: 'صورة 2' }
          ]
        };
      case 'contact':
        return {
          title: 'تواصل معنا',
          phone: '+966501234567',
          email: 'info@example.com',
          address: 'الرياض، المملكة العربية السعودية',
          workingHours: 'الأحد - الخميس: 9:00 - 17:00'
        };
      default:
        return {};
    }
  };

  const availableElements = [
    { type: 'hero' as const, name: 'القسم الرئيسي', icon: '🏠', description: 'قسم الترحيب الرئيسي' },
    { type: 'services' as const, name: 'الخدمات', icon: '⚙️', description: 'عرض الخدمات المقدمة' },
    { type: 'products' as const, name: 'المنتجات', icon: '📦', description: 'كتالوج المنتجات' },
    { type: 'about' as const, name: 'من نحن', icon: '👥', description: 'معلومات عن الشركة' },
    { type: 'gallery' as const, name: 'المعرض', icon: '🖼️', description: 'معرض الصور والأعمال' },
    { type: 'contact' as const, name: 'التواصل', icon: '📞', description: 'معلومات الاتصال' },
  ];

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Layout className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">محرر التخطيط المحسن</h2>
            <p className="text-gray-400">إضافة وترتيب عناصر الموقع بالسحب والإفلات</p>
            <p className="text-sm text-purple-400">طور بواسطة محمد سليم</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-1">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">إضافة عناصر جديدة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {availableElements.map((element) => (
                <div key={element.type} className="space-y-1">
                  <Button
                    onClick={() => addElement(element.type)}
                    className="w-full justify-start bg-slate-700 hover:bg-purple-600/20 border border-purple-500/30"
                    variant="outline"
                  >
                    <span className="ml-2">{element.icon}</span>
                    <div className="flex-1 text-left">
                      <div className="font-medium">{element.name}</div>
                      <div className="text-xs text-gray-400">{element.description}</div>
                    </div>
                    <Plus className="h-4 w-4 mr-auto" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="xl:col-span-3">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">عناصر الموقع ({elements.length})</CardTitle>
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
