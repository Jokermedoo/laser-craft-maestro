import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Move, Palette, Type, Layout, Grid, Star, Zap, Plus } from 'lucide-react';
import DraggableColorItem from './universal-drag/DraggableColorItem';
import DraggableFontItem from './universal-drag/DraggableFontItem';
import DraggableLayoutItem from './universal-drag/DraggableLayoutItem';
import DraggableComponentItem from './universal-drag/DraggableComponentItem';
import DraggableIconItem from './universal-drag/DraggableIconItem';
import DraggableAnimationItem from './universal-drag/DraggableAnimationItem';
import ElementPreview from './universal-drag/ElementPreview';

interface DraggableItem {
  id: string;
  type: 'color' | 'font' | 'layout' | 'component' | 'icon' | 'animation';
  name: string;
  value: any;
  category?: string;
}

const UniversalDragDropEditor = () => {
  const [activeTab, setActiveTab] = useState('colors');
  const [activeId, setActiveId] = useState<string | null>(null);
  
  const [colorItems, setColorItems] = useState<DraggableItem[]>([
    { id: 'color-1', type: 'color', name: 'اللون الأساسي', value: '#8B5CF6', category: 'primary' },
    { id: 'color-2', type: 'color', name: 'اللون الثانوي', value: '#06B6D4', category: 'secondary' },
    { id: 'color-3', type: 'color', name: 'لون التمييز', value: '#F59E0B', category: 'accent' },
  ]);

  const [fontItems, setFontItems] = useState<DraggableItem[]>([
    { id: 'font-1', type: 'font', name: 'الخط الأساسي', value: 'Cairo, sans-serif', category: 'primary' },
    { id: 'font-2', type: 'font', name: 'الخط الثانوي', value: 'Inter, sans-serif', category: 'secondary' },
  ]);

  const [layoutItems, setLayoutItems] = useState<DraggableItem[]>([
    { id: 'layout-1', type: 'layout', name: 'عرض الحاوية', value: '1200px', category: 'container' },
    { id: 'layout-2', type: 'layout', name: 'عرض الشريط الجانبي', value: '280px', category: 'sidebar' },
    { id: 'layout-3', type: 'layout', name: 'ارتفاع الهيدر', value: '80px', category: 'header' },
  ]);

  const [componentItems, setComponentItems] = useState<DraggableItem[]>([
    { id: 'comp-1', type: 'component', name: 'البطاقات', value: 'cards', category: 'ui' },
    { id: 'comp-2', type: 'component', name: 'الأزرار', value: 'buttons', category: 'ui' },
    { id: 'comp-3', type: 'component', name: 'النماذج', value: 'forms', category: 'ui' },
  ]);

  const [iconItems, setIconItems] = useState<DraggableItem[]>([
    { id: 'icon-1', type: 'icon', name: 'أيقونة الرئيسية', value: 'Home', category: 'navigation' },
    { id: 'icon-2', type: 'icon', name: 'أيقونة الإعدادات', value: 'Settings', category: 'navigation' },
    { id: 'icon-3', type: 'icon', name: 'أيقونة المستخدم', value: 'User', category: 'user' },
    { id: 'icon-4', type: 'icon', name: 'أيقونة البحث', value: 'Search', category: 'action' },
  ]);

  const [animationItems, setAnimationItems] = useState<DraggableItem[]>([
    { id: 'anim-1', type: 'animation', name: 'حركة الدخول', value: 'fadeIn', category: 'entrance' },
    { id: 'anim-2', type: 'animation', name: 'حركة التحويم', value: 'scale', category: 'hover' },
    { id: 'anim-3', type: 'animation', name: 'حركة النقر', value: 'bounce', category: 'click' },
  ]);

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

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over || active.id === over.id) return;

    const activeItem = findItemById(active.id as string);
    if (!activeItem) return;

    // تحديد نوع العنصر وتحديث القائمة المناسبة
    switch (activeItem.type) {
      case 'color':
        setColorItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'font':
        setFontItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'layout':
        setLayoutItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'component':
        setComponentItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'icon':
        setIconItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
      case 'animation':
        setAnimationItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        break;
    }
  };

  const findItemById = (id: string): DraggableItem | undefined => {
    return [...colorItems, ...fontItems, ...layoutItems, ...componentItems, ...iconItems, ...animationItems].find(item => item.id === id);
  };

  const updateItem = (id: string, newValue: any) => {
    const item = findItemById(id);
    if (!item) return;

    const updateFunction = (items: DraggableItem[]) =>
      items.map(item => item.id === id ? { ...item, value: newValue } : item);

    switch (item.type) {
      case 'color':
        setColorItems(updateFunction);
        break;
      case 'font':
        setFontItems(updateFunction);
        break;
      case 'layout':
        setLayoutItems(updateFunction);
        break;
      case 'component':
        setComponentItems(updateFunction);
        break;
      case 'icon':
        setIconItems(updateFunction);
        break;
      case 'animation':
        setAnimationItems(updateFunction);
        break;
    }
  };

  const addNewItem = (type: DraggableItem['type']) => {
    const newId = `${type}-${Date.now()}`;
    const newItem: DraggableItem = {
      id: newId,
      type,
      name: `عنصر جديد ${type}`,
      value: type === 'color' ? '#8B5CF6' : type === 'icon' ? 'Star' : 'default',
      category: 'custom'
    };

    switch (type) {
      case 'color':
        setColorItems(prev => [...prev, newItem]);
        break;
      case 'font':
        setFontItems(prev => [...prev, newItem]);
        break;
      case 'layout':
        setLayoutItems(prev => [...prev, newItem]);
        break;
      case 'component':
        setComponentItems(prev => [...prev, newItem]);
        break;
      case 'icon':
        setIconItems(prev => [...prev, newItem]);
        break;
      case 'animation':
        setAnimationItems(prev => [...prev, newItem]);
        break;
    }
  };

  const renderDraggableItem = (item: DraggableItem) => {
    switch (item.type) {
      case 'color':
        return (
          <DraggableColorItem
            key={item.id}
            item={item}
            onUpdate={updateItem}
          />
        );
      case 'font':
        return (
          <DraggableFontItem
            key={item.id}
            item={item}
            onUpdate={updateItem}
          />
        );
      case 'layout':
        return (
          <DraggableLayoutItem
            key={item.id}
            item={item}
            onUpdate={updateItem}
          />
        );
      case 'component':
        return (
          <DraggableComponentItem
            key={item.id}
            item={item}
            onUpdate={updateItem}
          />
        );
      case 'icon':
        return (
          <DraggableIconItem
            key={item.id}
            item={item}
            onUpdate={updateItem}
          />
        );
      case 'animation':
        return (
          <DraggableAnimationItem
            key={item.id}
            item={item}
            onUpdate={updateItem}
          />
        );
      default:
        return null;
    }
  };

  const getAllElements = () => {
    return [...colorItems, ...fontItems, ...layoutItems, ...componentItems, ...iconItems, ...animationItems];
  };

  const exportElements = () => {
    const elementsData = {
      colors: colorItems,
      fonts: fontItems,
      layout: layoutItems,
      components: componentItems,
      icons: iconItems,
      animations: animationItems,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(elementsData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `elements-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetElements = () => {
    // إعادة تعيين جميع العناصر للقيم الافتراضية
    setColorItems([
      { id: 'color-1', type: 'color', name: 'اللون الأساسي', value: '#8B5CF6', category: 'primary' },
      { id: 'color-2', type: 'color', name: 'اللون الثانوي', value: '#06B6D4', category: 'secondary' },
      { id: 'color-3', type: 'color', name: 'لون التمييز', value: '#F59E0B', category: 'accent' },
    ]);
    // يمكن إضافة المزيد من إعادة التعيين للعناصر الأخرى
  };

  const randomizeElements = () => {
    // ترتيب عشوائي لجميع العناصر
    setColorItems(prev => [...prev].sort(() => Math.random() - 0.5));
    setIconItems(prev => [...prev].sort(() => Math.random() - 0.5));
    setAnimationItems(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Move className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">محرر السحب والإفلات الشامل المطور</h2>
            <p className="text-gray-400">تحكم كامل في ترتيب وتخصيص جميع عناصر الواجهة مع مميزات متقدمة</p>
          </div>
        </div>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-slate-800/50">
                <TabsTrigger value="colors" className="data-[state=active]:bg-purple-600">
                  <Palette className="h-4 w-4 ml-2" />
                  الألوان
                </TabsTrigger>
                <TabsTrigger value="fonts" className="data-[state=active]:bg-purple-600">
                  <Type className="h-4 w-4 ml-2" />
                  الخطوط
                </TabsTrigger>
                <TabsTrigger value="layout" className="data-[state=active]:bg-purple-600">
                  <Layout className="h-4 w-4 ml-2" />
                  التخطيط
                </TabsTrigger>
                <TabsTrigger value="components" className="data-[state=active]:bg-purple-600">
                  <Grid className="h-4 w-4 ml-2" />
                  المكونات
                </TabsTrigger>
                <TabsTrigger value="icons" className="data-[state=active]:bg-purple-600">
                  <Star className="h-4 w-4 ml-2" />
                  الأيقونات
                </TabsTrigger>
                <TabsTrigger value="animations" className="data-[state=active]:bg-purple-600">
                  <Zap className="h-4 w-4 ml-2" />
                  الحركات
                </TabsTrigger>
              </TabsList>

              <TabsContent value="colors" className="mt-6">
                <Card className="bg-slate-800/50 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white">ترتيب الألوان</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SortableContext items={colorItems} strategy={verticalListSortingStrategy}>
                      <div className="space-y-3">
                        {colorItems.map(renderDraggableItem)}
                      </div>
                    </SortableContext>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="fonts" className="mt-6">
                <Card className="bg-slate-800/50 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white">ترتيب الخطوط</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SortableContext items={fontItems} strategy={verticalListSortingStrategy}>
                      <div className="space-y-3">
                        {fontItems.map(renderDraggableItem)}
                      </div>
                    </SortableContext>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="layout" className="mt-6">
                <Card className="bg-slate-800/50 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white">ترتيب التخطيط</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SortableContext items={layoutItems} strategy={verticalListSortingStrategy}>
                      <div className="space-y-3">
                        {layoutItems.map(renderDraggableItem)}
                      </div>
                    </SortableContext>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="components" className="mt-6">
                <Card className="bg-slate-800/50 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white">ترتيب المكونات</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SortableContext items={componentItems} strategy={verticalListSortingStrategy}>
                      <div className="space-y-3">
                        {componentItems.map(renderDraggableItem)}
                      </div>
                    </SortableContext>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="icons" className="mt-6">
                <Card className="bg-slate-800/50 border-purple-500/30">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-white">ترتيب الأيقونات</CardTitle>
                    <Button
                      onClick={() => addNewItem('icon')}
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Plus className="h-4 w-4 ml-2" />
                      إضافة أيقونة
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <SortableContext items={iconItems} strategy={verticalListSortingStrategy}>
                      <div className="space-y-3">
                        {iconItems.map(renderDraggableItem)}
                      </div>
                    </SortableContext>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="animations" className="mt-6">
                <Card className="bg-slate-800/50 border-purple-500/30">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-white">ترتيب الحركات</CardTitle>
                    <Button
                      onClick={() => addNewItem('animation')}
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Plus className="h-4 w-4 ml-2" />
                      إضافة حركة
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <SortableContext items={animationItems} strategy={verticalListSortingStrategy}>
                      <div className="space-y-3">
                        {animationItems.map(renderDraggableItem)}
                      </div>
                    </SortableContext>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="xl:col-span-1">
            <ElementPreview
              elements={getAllElements()}
              onExport={exportElements}
              onReset={resetElements}
              onRandomize={randomizeElements}
            />
          </div>
        </div>

        <DragOverlay>
          {activeId ? renderDraggableItem(findItemById(activeId)!) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default UniversalDragDropEditor;
