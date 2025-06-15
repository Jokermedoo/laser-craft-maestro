
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ColorItem } from './SortableColorItem';

interface ThemePreset {
  id: string;
  name: string;
  colors: ColorItem[];
  gradient?: string;
}

interface ThemePresetsPanelProps {
  presets: ThemePreset[];
  onApplyPreset: (preset: ThemePreset) => void;
}

const ThemePresetsPanel = ({ presets, onApplyPreset }: ThemePresetsPanelProps) => {
  return (
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
                onClick={() => onApplyPreset(preset)}
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
  );
};

export default ThemePresetsPanel;
export type { ThemePreset };
