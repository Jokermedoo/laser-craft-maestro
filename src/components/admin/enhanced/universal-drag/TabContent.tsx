
import React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { TabContentProps } from './types';

const TabContent = ({ items, onUpdate, onAddItem, renderDraggableItem }: TabContentProps) => {
  return (
    <Card className="bg-slate-800/50 border-purple-500/30">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">ترتيب العناصر</CardTitle>
        {onAddItem && (
          <Button
            onClick={onAddItem}
            size="sm"
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Plus className="h-4 w-4 ml-2" />
            إضافة عنصر
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {items.map(renderDraggableItem)}
          </div>
        </SortableContext>
      </CardContent>
    </Card>
  );
};

export default TabContent;
