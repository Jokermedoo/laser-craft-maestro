
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdmin } from '@/contexts/AdminContext';

const ColorPreview = () => {
  const { settings } = useAdmin();

  return (
    <Card className="bg-slate-800/50 border-purple-500/30">
      <CardHeader>
        <CardTitle className="text-white">معاينة الألوان الحالية</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="p-6 rounded-lg"
          style={{ 
            backgroundColor: settings.theme.backgroundColor,
            color: settings.theme.textColor 
          }}
        >
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: settings.theme.primaryColor }}
          >
            ورشة المعز لخدمات الليزر
          </h3>
          <p className="mb-4">
            هذا نص تجريبي لمعاينة الألوان المختارة على الموقع
          </p>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <button 
              className="px-6 py-2 rounded-lg font-medium"
              style={{ backgroundColor: settings.theme.primaryColor, color: settings.theme.textColor }}
            >
              زر أساسي
            </button>
            <button 
              className="px-6 py-2 rounded-lg font-medium"
              style={{ backgroundColor: settings.theme.secondaryColor, color: settings.theme.textColor }}
            >
              زر ثانوي
            </button>
            <button 
              className="px-6 py-2 rounded-lg font-medium"
              style={{ backgroundColor: settings.theme.accentColor, color: settings.theme.backgroundColor }}
            >
              زر التمييز
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPreview;
