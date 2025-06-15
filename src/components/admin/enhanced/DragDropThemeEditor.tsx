
import React, { useState } from 'react';
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
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { 
  Palette, 
  GripVertical, 
  Plus, 
  Trash2, 
  Copy, 
  Download, 
  Upload,
  Wand2,
  Eye,
  Save
} from 'lucide-react';

interface ColorItem {
  id: string;
  name: string;
  value: string;
  category: 'primary' | 'secondary' | 'accent' | 'background' | 'text';
}

interface ThemePreset {
  id: string;
  name: string;
  colors: ColorItem[];
  gradient?: string;
}

const SortableColorItem = ({ color, onUpdate, onDelete }: { 
  color: ColorItem; 
  onUpdate: (id: string, value: string) => void;
  onDelete: (id: string) => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: color.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-slate-700/50 rounded-lg border border-gray-600 hover:border-purple-500/50 transition-all"
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-white"
      >
        <GripVertical className="h-5 w-5" />
      </div>
      
      <div
        className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
        style={{ backgroundColor: color.value }}
        onClick={() => {
          const input = document.createElement('input');
          input.type = 'color';
          input.value = color.value;
          input.onchange = (e) => onUpdate(color.id, (e.target as HTMLInputElement).value);
          input.click();
        }}
      />
      
      <div className="flex-1 space-y-2">
        <Label className="text-gray-300 text-sm">{color.name}</Label>
        <Input
          type="text"
          value={color.value}
          onChange={(e) => onUpdate(color.id, e.target.value)}
          className="bg-slate-800 border-gray-600 text-white text-sm h-8"
        />
      </div>
      
      <div className="flex space-x-2 rtl:space-x-reverse">
        <Button
          onClick={() => navigator.clipboard.writeText(color.value)}
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0 border-gray-600 hover:bg-gray-600"
        >
          <Copy className="h-3 w-3" />
        </Button>
        <Button
          onClick={() => onDelete(color.id)}
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0 border-red-500/50 text-red-400 hover:bg-red-600/20"
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

const DragDropThemeEditor = () => {
  const { settings, updateTheme } = useAdmin();
  
  const [colors, setColors] = useState<ColorItem[]>([
    { id: '1', name: 'اللون الأساسي', value: settings.theme.primaryColor, category: 'primary' },
    { id: '2', name: 'اللون الثانوي', value: settings.theme.secondaryColor, category: 'secondary' },
    { id: '3', name: 'لون التمييز', value: settings.theme.accentColor, category: 'accent' },
    { id: '4', name: 'لون الخلفية', value: settings.theme.backgroundColor, category: 'background' },
    { id: '5', name: 'لون النص', value: settings.theme.textColor, category: 'text' },
  ]);

  const [presets] = useState<ThemePreset[]>([
    {
      id: 'preset1',
      name: 'البنفسجي الكلاسيكي',
      colors: [
        { id: 'p1-1', name: 'أساسي', value: '#8B5CF6', category: 'primary' },
        { id: 'p1-2', name: 'ثانوي', value: '#06B6D4', category: 'secondary' },
        { id: 'p1-3', name: 'تمييز', value: '#F59E0B', category: 'accent' },
        { id: 'p1-4', name: 'خلفية', value: '#0F172A', category: 'background' },
        { id: 'p1-5', name: 'نص', value: '#FFFFFF', category: 'text' },
      ]
    },
    {
      id: 'preset2',
      name: 'الأخضر الطبيعي',
      colors: [
        { id: 'p2-1', name: 'أساسي', value: '#10B981', category: 'primary' },
        { id: 'p2-2', name: 'ثانوي', value: '#3B82F6', category: 'secondary' },
        { id: 'p2-3', name: 'تمييز', value: '#F59E0B', category: 'accent' },
        { id: 'p2-4', name: 'خلفية', value: '#064E3B', category: 'background' },
        { id: 'p2-5', name: 'نص', value: '#ECFDF5', category: 'text' },
      ]
    }
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setColors((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const updateColor = (id: string, value: string) => {
    setColors(colors.map(color => 
      color.id === id ? { ...color, value } : color
    ));
    
    // تطبيق التغييرات على الثيم الحالي
    const updatedColor = colors.find(c => c.id === id);
    if (updatedColor) {
      const themeUpdate: any = {};
      switch (updatedColor.category) {
        case 'primary':
          themeUpdate.primaryColor = value;
          break;
        case 'secondary':
          themeUpdate.secondaryColor = value;
          break;
        case 'accent':
          themeUpdate.accentColor = value;
          break;
        case 'background':
          themeUpdate.backgroundColor = value;
          break;
        case 'text':
          themeUpdate.textColor = value;
          break;
      }
      updateTheme(themeUpdate);
    }
  };

  const deleteColor = (id: string) => {
    setColors(colors.filter(color => color.id !== id));
  };

  const addColor = () => {
    const newColor: ColorItem = {
      id: Date.now().toString(),
      name: 'لون جديد',
      value: '#000000',
      category: 'accent'
    };
    setColors([...colors, newColor]);
  };

  const applyPreset = (preset: ThemePreset) => {
    setColors(preset.colors);
    
    // تطبيق الألوان على الثيم
    const themeUpdate: any = {};
    preset.colors.forEach(color => {
      switch (color.category) {
        case 'primary':
          themeUpdate.primaryColor = color.value;
          break;
        case 'secondary':
          themeUpdate.secondaryColor = color.value;
          break;
        case 'accent':
          themeUpdate.accentColor = color.value;
          break;
        case 'background':
          themeUpdate.backgroundColor = color.value;
          break;
        case 'text':
          themeUpdate.textColor = color.value;
          break;
      }
    });
    updateTheme(themeUpdate);
  };

  const generateRandomTheme = () => {
    const randomColors = colors.map(color => ({
      ...color,
      value: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`
    }));
    setColors(randomColors);
  };

  const exportTheme = () => {
    const themeData = {
      name: 'ثيم مخصص',
      colors: colors,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(themeData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'custom-theme.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importTheme = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const themeData = JSON.parse(e.target?.result as string);
            if (themeData.colors) {
              setColors(themeData.colors);
            }
          } catch (error) {
            console.error('خطأ في استيراد الثيم:', error);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Palette className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">محرر الثيمات المتقدم</h2>
            <p className="text-gray-400">سحب وإفلات الألوان مع مميزات متقدمة</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Button onClick={generateRandomTheme} variant="outline" size="sm">
            <Wand2 className="h-4 w-4 ml-2" />
            ثيم عشوائي
          </Button>
          <Button onClick={exportTheme} variant="outline" size="sm">
            <Download className="h-4 w-4 ml-2" />
            تصدير
          </Button>
          <Button onClick={importTheme} variant="outline" size="sm">
            <Upload className="h-4 w-4 ml-2" />
            استيراد
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* محرر الألوان بالسحب والإفلات */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span>محرر الألوان</span>
                <Button onClick={addColor} size="sm" className="bg-green-600 hover:bg-green-700">
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
                        onUpdate={updateColor}
                        onDelete={deleteColor}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            </CardContent>
          </Card>
        </div>

        {/* القوالب الجاهزة */}
        <div>
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">القوالب الجاهزة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {presets.map((preset) => (
                <div key={preset.id} className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="text-white font-medium mb-3">{preset.name}</h4>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-1 rtl:space-x-reverse">
                      {preset.colors.slice(0, 5).map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded border border-white/20"
                          style={{ backgroundColor: color.value }}
                        />
                      ))}
                    </div>
                    <Button
                      onClick={() => applyPreset(preset)}
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      تطبيق
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* معاينة سريعة */}
          <Card className="bg-slate-800/50 border-purple-500/30 mt-4">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Eye className="h-5 w-5 ml-2" />
                معاينة سريعة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="p-4 rounded-lg border"
                style={{ 
                  backgroundColor: colors.find(c => c.category === 'background')?.value || '#0F172A',
                  color: colors.find(c => c.category === 'text')?.value || '#FFFFFF',
                  borderColor: colors.find(c => c.category === 'primary')?.value || '#8B5CF6'
                }}
              >
                <h3 
                  className="font-bold mb-2"
                  style={{ color: colors.find(c => c.category === 'primary')?.value }}
                >
                  عنوان تجريبي
                </h3>
                <p className="text-sm mb-3">
                  هذا نص تجريبي لمعاينة الألوان
                </p>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <button 
                    className="px-3 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: colors.find(c => c.category === 'primary')?.value,
                      color: colors.find(c => c.category === 'background')?.value
                    }}
                  >
                    زر أساسي
                  </button>
                  <button 
                    className="px-3 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: colors.find(c => c.category === 'secondary')?.value,
                      color: colors.find(c => c.category === 'text')?.value
                    }}
                  >
                    زر ثانوي
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DragDropThemeEditor;
