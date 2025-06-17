
import React, { useState } from 'react';
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
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Move, Palette, Type, Layout, Grid, Star, Zap, Eye, Settings } from 'lucide-react';
import { useDragDropLogic } from './universal-drag/useDragDropLogic';
import DraggableItemRenderer from './universal-drag/DraggableItemRenderer';
import TabContent from './universal-drag/TabContent';
import ElementPreview from './universal-drag/ElementPreview';
import LivePreviewPanel from './LivePreviewPanel';
import ConfigManager from './ConfigManager';
import { usePerformance } from '@/hooks/usePerformance';

const UniversalDragDropEditor = () => {
  const [activeTab, setActiveTab] = useState('colors');
  const { measureRenderTime, optimizePerformance } = usePerformance();
  
  const {
    activeId,
    colorItems = [],
    fontItems = [],
    layoutItems = [],
    componentItems = [],
    iconItems = [],
    animationItems = [],
    handleDragStart,
    handleDragEnd,
    findItemById,
    updateItem,
    addNewItem,
    getAllElements,
    resetElements,
    randomizeElements
  } = useDragDropLogic();

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

  React.useEffect(() => {
    const endMeasure = measureRenderTime('UniversalDragDropEditor');
    optimizePerformance();
    return endMeasure;
  }, [measureRenderTime, optimizePerformance]);

  const renderDraggableItem = (item: any) => (
    <DraggableItemRenderer item={item} onUpdate={updateItem} />
  );

  const exportElements = () => {
    const elementsData = {
      colors: colorItems || [],
      fonts: fontItems || [],
      layout: layoutItems || [],
      components: componentItems || [],
      icons: iconItems || [],
      animations: animationItems || [],
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
              <TabsList className="grid w-full grid-cols-8 bg-slate-800/50">
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
                <TabsTrigger value="preview" className="data-[state=active]:bg-purple-600">
                  <Eye className="h-4 w-4 ml-2" />
                  المعاينة
                </TabsTrigger>
                <TabsTrigger value="configs" className="data-[state=active]:bg-purple-600">
                  <Settings className="h-4 w-4 ml-2" />
                  التكوينات
                </TabsTrigger>
              </TabsList>

              <TabsContent value="colors" className="mt-6">
                <TabContent
                  items={colorItems}
                  onUpdate={updateItem}
                  renderDraggableItem={renderDraggableItem}
                />
              </TabsContent>

              <TabsContent value="fonts" className="mt-6">
                <TabContent
                  items={fontItems}
                  onUpdate={updateItem}
                  renderDraggableItem={renderDraggableItem}
                />
              </TabsContent>

              <TabsContent value="layout" className="mt-6">
                <TabContent
                  items={layoutItems}
                  onUpdate={updateItem}
                  renderDraggableItem={renderDraggableItem}
                />
              </TabsContent>

              <TabsContent value="components" className="mt-6">
                <TabContent
                  items={componentItems}
                  onUpdate={updateItem}
                  renderDraggableItem={renderDraggableItem}
                />
              </TabsContent>

              <TabsContent value="icons" className="mt-6">
                <TabContent
                  items={iconItems}
                  onUpdate={updateItem}
                  onAddItem={() => addNewItem('icon')}
                  renderDraggableItem={renderDraggableItem}
                />
              </TabsContent>

              <TabsContent value="animations" className="mt-6">
                <TabContent
                  items={animationItems}
                  onUpdate={updateItem}
                  onAddItem={() => addNewItem('animation')}
                  renderDraggableItem={renderDraggableItem}
                />
              </TabsContent>

              <TabsContent value="preview" className="mt-6">
                <LivePreviewPanel />
              </TabsContent>

              <TabsContent value="configs" className="mt-6">
                <ConfigManager />
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
