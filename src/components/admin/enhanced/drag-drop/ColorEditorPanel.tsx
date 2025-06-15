
import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import SortableColorItem, { ColorItem } from './SortableColorItem';

interface ColorEditorPanelProps {
  colors: ColorItem[];
  onColorsChange: (colors: ColorItem[]) => void;
  onUpdateColor: (id: string, value: string) => void;
  onDeleteColor: (id: string) => void;
  onAddColor: () => void;
}

const ColorEditorPanel = ({ 
  colors, 
  onColorsChange, 
  onUpdateColor, 
  onDeleteColor, 
  onAddColor 
}: ColorEditorPanelProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = colors.findIndex((item) => item.id === active.id);
      const newIndex = colors.findIndex((item) => item.id === over?.id);
      onColorsChange(arrayMove(colors, oldIndex, newIndex));
    }
  };

  return (
    <Card className="bg-slate-800/50 border-purple-500/30">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span>محرر الألوان</span>
          <Button onClick={onAddColor} size="sm" className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 ml-2" />
            إضافة لون
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={colors} strategy={verticalListSortingStrategy}>
            <div className="space-y-3">
              {colors.map((color) => (
                <SortableColorItem
                  key={color.id}
                  color={color}
                  onUpdate={onUpdateColor}
                  onDelete={onDeleteColor}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </CardContent>
    </Card>
  );
};

export default ColorEditorPanel;
