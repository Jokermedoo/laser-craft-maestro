
import React from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Layout } from 'lucide-react';
import { LayoutElement } from '@/hooks/useSiteBuilder';
import SortableLayoutElement from './SortableLayoutElement';

interface DragDropLayoutEditorProps {
  elements: LayoutElement[];
  onChange: (elements: LayoutElement[]) => void;
}

const DragDropLayoutEditor = ({ elements, onChange }: DragDropLayoutEditorProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const availableElements = [
    { type: 'hero', name: 'قسم البطل', icon: '🏆' },
    { type: 'services', name: 'الخدمات', icon: '⚙️' },
    { type: 'products', name: 'المنتجات', icon: '📦' },
    { type: 'about', name: 'من نحن', icon: '👥' },
    { type: 'gallery', name: 'المعرض', icon: '🖼️' },
    { type: 'contact', name: 'اتصل بنا', icon: '📞' },
  ];

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    
    if (active.id !== over?.id) {
      const oldIndex = elements.findIndex((item) => item.id === active.id);
      const newIndex = elements.findIndex((item) => item.id === over.id);
      
      const newElements = [...elements];
      const [reorderedItem] = newElements.splice(oldIndex, 1);
      newElements.splice(newIndex, 0, reorderedItem);
      
      // Update order numbers
      const reorderedElements = newElements.map((el, index) => ({
        ...el,
        order: index + 1
      }));
      
      onChange(reorderedElements);
    }
  };

  const addElement = (type: string) => {
    const newElement: LayoutElement = {
      id: `${type}-${Date.now()}`,
      type: type as LayoutElement['type'],
      content: getDefaultContent(type),
      style: {},
      visible: true,
      order: elements.length + 1,
    };
    
    onChange([...elements, newElement]);
  };

  const getDefaultContent = (type: string) => {
    switch (type) {
      case 'hero':
        return {
          title: 'عنوان رئيسي جديد',
          subtitle: 'عنوان فرعي',
          description: 'وصف القسم',
          buttonText: 'اضغط هنا'
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
          description: 'نبذة عن الشركة'
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

  const updateElement = (id: string, updates: Partial<LayoutElement>) => {
    const updatedElements = elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    );
    onChange(updatedElements);
  };

  const deleteElement = (id: string) => {
    const filteredElements = elements.filter(el => el.id !== id);
    const reorderedElements = filteredElements.map((el, index) => ({
      ...el,
      order: index + 1
    }));
    onChange(reorderedElements);
  };

  const duplicateElement = (element: LayoutElement) => {
    const newElement: LayoutElement = {
      ...element,
      id: `${element.type}-${Date.now()}`,
      order: elements.length + 1,
    };
    onChange([...elements, newElement]);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
      {/* أدوات إضافة العناصر */}
      <div className="xl:col-span-1">
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">إضافة عناصر جديدة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {availableElements.map((elementType) => (
              <Button
                key={elementType.type}
                onClick={() => addElement(elementType.type)}
                variant="outline"
                className="w-full justify-start border-purple-500/30 text-white hover:bg-purple-600/20"
              >
                <span className="mr-2 text-lg">{elementType.icon}</span>
                {elementType.name}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* منطقة تحرير التخطيط */}
      <div className="xl:col-span-3">
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Layout className="h-5 w-5 mr-2" />
              تخطيط الصفحة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={elements} strategy={verticalListSortingStrategy}>
                <div className="space-y-4 min-h-[600px]">
                  {elements
                    .sort((a, b) => a.order - b.order)
                    .map((element) => (
                      <SortableLayoutElement
                        key={element.id}
                        element={element}
                        onUpdate={updateElement}
                        onDelete={deleteElement}
                        onDuplicate={duplicateElement}
                      />
                    ))}
                  
                  {elements.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                      <Layout className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>اسحب العناصر من الجانب لبناء تخطيط الصفحة</p>
                    </div>
                  )}
                </div>
              </SortableContext>
            </DndContext>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DragDropLayoutEditor;
