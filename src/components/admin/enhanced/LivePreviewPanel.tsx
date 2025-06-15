
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Smartphone, Tablet, Monitor, RefreshCw } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const LivePreviewPanel = () => {
  const { settings, previewMode, setPreviewMode } = useAdmin();
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [isLiveMode, setIsLiveMode] = useState(true);
  const [previewKey, setPreviewKey] = useState(0);

  const deviceSizes = {
    mobile: { width: '375px', height: '667px' },
    tablet: { width: '768px', height: '1024px' },
    desktop: { width: '100%', height: '600px' }
  };

  const refreshPreview = () => {
    setPreviewKey(prev => prev + 1);
  };

  useEffect(() => {
    if (isLiveMode) {
      // تحديث المعاينة عند تغيير الإعدادات
      refreshPreview();
    }
  }, [settings.theme, isLiveMode]);

  return (
    <Card className="bg-slate-800/50 border-purple-500/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center">
            <Eye className="h-5 w-5 ml-2" />
            المعاينة المباشرة
          </CardTitle>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Switch 
              checked={isLiveMode} 
              onCheckedChange={setIsLiveMode}
            />
            <Label className="text-gray-300 text-sm">تحديث تلقائي</Label>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* أدوات التحكم */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 rtl:space-x-reverse">
            <Button
              size="sm"
              variant={device === 'mobile' ? 'default' : 'outline'}
              onClick={() => setDevice('mobile')}
              className="p-2"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant={device === 'tablet' ? 'default' : 'outline'}
              onClick={() => setDevice('tablet')}
              className="p-2"
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant={device === 'desktop' ? 'default' : 'outline'}
              onClick={() => setDevice('desktop')}
              className="p-2"
            >
              <Monitor className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            size="sm"
            variant="outline"
            onClick={refreshPreview}
            className="border-gray-600"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        {/* منطقة المعاينة */}
        <div className="bg-white rounded-lg border border-gray-600 overflow-hidden">
          <div 
            className="mx-auto transition-all duration-300"
            style={{
              width: deviceSizes[device].width,
              height: deviceSizes[device].height,
              maxWidth: '100%'
            }}
          >
            <iframe
              key={previewKey}
              src="/"
              className="w-full h-full border-0"
              title="Live Preview"
              style={{
                transform: device === 'mobile' ? 'scale(0.8)' : 'scale(1)',
                transformOrigin: 'top left'
              }}
            />
          </div>
        </div>

        {/* معلومات الجهاز */}
        <div className="text-xs text-gray-400 text-center">
          الجهاز: {device} | 
          الأبعاد: {deviceSizes[device].width} × {deviceSizes[device].height}
        </div>
      </CardContent>
    </Card>
  );
};

export default LivePreviewPanel;
