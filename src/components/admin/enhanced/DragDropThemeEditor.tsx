
import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import ColorEditorPanel from './drag-drop/ColorEditorPanel';
import ThemePresetsPanel, { ThemePreset } from './drag-drop/ThemePresetsPanel';
import ColorPreviewPanel from './drag-drop/ColorPreviewPanel';
import ThemeActions from './drag-drop/ThemeActions';
import { ColorItem } from './drag-drop/SortableColorItem';

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

  const updateColor = (id: string, value: string) => {
    const newColors = colors.map(color => 
      color.id === id ? { ...color, value } : color
    );
    setColors(newColors);
    
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

  const importTheme = (importedColors: ColorItem[]) => {
    setColors(importedColors);
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
        
        <ThemeActions
          colors={colors}
          onGenerateRandom={generateRandomTheme}
          onExport={exportTheme}
          onImport={importTheme}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* محرر الألوان بالسحب والإفلات */}
        <div className="lg:col-span-2">
          <ColorEditorPanel
            colors={colors}
            onColorsChange={setColors}
            onUpdateColor={updateColor}
            onDeleteColor={deleteColor}
            onAddColor={addColor}
          />
        </div>

        {/* القوالب الجاهزة والمعاينة */}
        <div>
          <ThemePresetsPanel 
            presets={presets}
            onApplyPreset={applyPreset}
          />
          <ColorPreviewPanel colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default DragDropThemeEditor;
