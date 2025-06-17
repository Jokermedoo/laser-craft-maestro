
import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layout, Grid, Columns, Square, Circle, Triangle } from 'lucide-react';
import SortableLayoutItem from './SortableLayoutItem';

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
  children?: LayoutElement[];
}

const VisualLayoutEditor = () => {
  const [elements, setElements] = useState<LayoutElement[]>([
    {
      id: '1',
      type: 'section',
      name: 'قسم البطل',
      properties: {
        width: '100%',
        height: '500px',
        backgroundColor: '#8B5CF6',
        padding: '40px'
      }
    },
    {
      id: '2',
      type: 'grid',
      name: 'شبكة الخدمات',
      properties: {
        width: '100%',
        backgroundColor: '#1E293B',
        padding: '60px'
      }
    },
    {
      id: '3',
      type: 'card',
      name: 'بطاقة التواصل',
      properties: {
        width: '400px',
        height: '300px',
        backgroundColor: '#374151',
        borderRadius: '12px',
        padding: '20px'
      }
    }
  ]);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedElement, setSelectedElement] = useState<LayoutElement | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    
    if (active.id !== over?.id) {
      setElements((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        
        const newItems = [...items];
        const [reorderedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, reorderedItem);
        
        return newItems;
      });
    }
    
    setActiveId(null);
  };

  const addNewElement = (type: LayoutElement['type']) => {
    const newElement: LayoutElement = {
      id: Date.now().toString(),
      type,
      name: `عنصر ${type} جديد`,
      properties: {
        width: '100%',
        height: type === 'text' ? 'auto' : '200px',
        backgroundColor: '#374151',
        padding: '20px'
      }
    };
    
    setElements([...elements, newElement]);
  };

  const updateElement = (id: string, updates: Partial<LayoutElement>) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
  };

  const elementTypes = [
    { type: 'section', name: 'قسم', icon: <Square className="h-4 w-4" /> },
    { type: 'grid', name: 'شبكة', icon: <Grid className="h-4 w-4" /> },
    { type: 'card', name: 'بطاقة', icon: <Columns className="h-4 w-4" /> },
    { type: 'text', name: 'نص', icon: <Circle className="h-4 w-4" /> },
    { type: 'image', name: 'صورة', icon: <Triangle className="h-4 w-4" /> }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Layout className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">المحرر المرئي المتقدم</h2>
            <p className="text-gray-400">تصميم التخطيط بالسحب والإفلات</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* أدوات العناصر */}
        <div className="xl:col-span-1">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">عناصر التصميم</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {elementTypes.map((elementType) => (
                <Button
                  key={elementType.type}
                  onClick={() => addNewElement(elementType.type as LayoutElement['type'])}
                  variant="outline"
                  className="w-full justify-start border-purple-500/30 text-white hover:bg-purple-600/20"
                >
                  {elementType.icon}
                  <span className="mr-2">{elementType.name}</span>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* خصائص العنصر المحدد */}
          {selectedElement && (
            <Card className="bg-slate-800/50 border-purple-500/30 mt-6">
              <CardHeader>
                <CardTitle className="text-white">خصائص العنصر</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-gray-400 text-sm">العرض</label>
                  <input
                    type="text"
                    value={selectedElement.properties.width || ''}
                    onChange={(e) => updateElement(selectedElement.id, {
                      properties: { ...selectedElement.properties, width: e.target.value }
                    })}
                    className="w-full mt-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm">الارتفاع</label>
                  <input
                    type="text"
                    value={selectedElement.properties.height || ''}
                    onChange={(e) => updateElement(selectedElement.id, {
                      properties: { ...selectedElement.properties, height: e.target.value }
                    })}
                    className="w-full mt-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm">لون الخلفية</label>
                  <input
                    type="color"
                    value={selectedElement.properties.backgroundColor || '#374151'}
                    onChange={(e) => updateElement(selectedElement.id, {
                      properties: { ...selectedElement.properties, backgroundColor: e.target.value }
                    })}
                    className="w-full mt-1 h-10 bg-slate-700 border border-slate-600 rounded"
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* منطقة التصميم */}
        <div className="xl:col-span-2">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">منطقة التصميم</CardTitle>
            </CardHeader>
            <CardContent>
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <SortableContext items={elements} strategy={verticalListSortingStrategy}>
                  <div className="space-y-4 min-h-[600px] bg-slate-900/50 p-4 rounded-lg">
                    {elements.map((element) => (
                      <SortableLayoutItem
                        key={element.id}
                        element={element}
                        isSelected={selectedElement?.id === element.id}
                        onSelect={() => setSelectedElement(element)}
                        onDelete={() => deleteElement(element.id)}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            </CardContent>
          </Card>
        </div>

        {/* معاينة النتيجة */}
        <div className="xl:col-span-1">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">معاينة مباشرة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-2 min-h-[400px]">
                <div className="space-y-2 transform scale-50 origin-top-left">
                  {elements.map((element) => (
                    <div
                      key={element.id}
                      style={{
                        width: element.properties.width,
                        height: element.properties.height,
                        backgroundColor: element.properties.backgroundColor,
                        padding: element.properties.padding,
                        borderRadius: element.properties.borderRadius,
                      }}
                      className="border border-gray-200"
                    >
                      <span className="text-xs text-white opacity-75">
                        {element.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VisualLayoutEditor;
