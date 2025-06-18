
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Smartphone, Tablet, Monitor, RefreshCw, ExternalLink } from 'lucide-react';
import { SiteConfig, LayoutElement } from '@/hooks/useSiteBuilder';

interface ResponsivePreviewProps {
  config: SiteConfig;
  elements: LayoutElement[];
}

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const ResponsivePreview = ({ config, elements }: ResponsivePreviewProps) => {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [isLiveMode, setIsLiveMode] = useState(true);
  const [previewKey, setPreviewKey] = useState(0);

  const deviceSizes = {
    mobile: { width: '375px', height: '667px', scale: 0.8 },
    tablet: { width: '768px', height: '1024px', scale: 0.7 },
    desktop: { width: '100%', height: '800px', scale: 1 }
  };

  const refreshPreview = () => {
    setPreviewKey(prev => prev + 1);
  };

  const openInNewTab = () => {
    window.open('/', '_blank');
  };

  return (
    <div className="space-y-6">
      {/* أدوات التحكم */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">معاينة متجاوبة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            {/* أزرار الأجهزة */}
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Button
                size="sm"
                variant={device === 'mobile' ? 'default' : 'outline'}
                onClick={() => setDevice('mobile')}
                className={device === 'mobile' ? 'bg-purple-600' : 'border-purple-500/50'}
              >
                <Smartphone className="h-4 w-4 mr-2" />
                موبايل
              </Button>
              <Button
                size="sm"
                variant={device === 'tablet' ? 'default' : 'outline'}
                onClick={() => setDevice('tablet')}
                className={device === 'tablet' ? 'bg-purple-600' : 'border-purple-500/50'}
              >
                <Tablet className="h-4 w-4 mr-2" />
                تابلت
              </Button>
              <Button
                size="sm"
                variant={device === 'desktop' ? 'default' : 'outline'}
                onClick={() => setDevice('desktop')}
                className={device === 'desktop' ? 'bg-purple-600' : 'border-purple-500/50'}
              >
                <Monitor className="h-4 w-4 mr-2" />
                سطح المكتب
              </Button>
            </div>

            {/* أدوات إضافية */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Switch 
                  checked={isLiveMode} 
                  onCheckedChange={setIsLiveMode}
                />
                <Label className="text-gray-300 text-sm">تحديث تلقائي</Label>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={refreshPreview}
                className="border-gray-600"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={openInNewTab}
                className="border-blue-500/50 text-blue-400 hover:bg-blue-600/20"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* منطقة المعاينة */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardContent className="p-6">
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-2xl">
            <div 
              className="mx-auto transition-all duration-300"
              style={{
                width: deviceSizes[device].width,
                height: deviceSizes[device].height,
                maxWidth: '100%',
                transform: `scale(${deviceSizes[device].scale})`,
                transformOrigin: 'top center'
              }}
            >
              {/* شريط المتصفح الوهمي */}
              <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center space-x-2 rtl:space-x-reverse">
                <div className="flex space-x-1 rtl:space-x-reverse">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 text-center">
                  {config.name || 'موقعي الجديد'}
                </div>
              </div>

              {/* محتوى المعاينة */}
              <div className="h-full overflow-auto">
                <PreviewContent config={config} elements={elements} />
              </div>
            </div>
          </div>

          {/* معلومات الجهاز */}
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-400">
              الجهاز: {device === 'mobile' ? 'موبايل' : device === 'tablet' ? 'تابلت' : 'سطح المكتب'} | 
              الأبعاد: {deviceSizes[device].width} × {deviceSizes[device].height}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// مكون المعاينة
const PreviewContent = ({ config, elements }: { config: SiteConfig; elements: LayoutElement[] }) => {
  const visibleElements = elements.filter(el => el.visible).sort((a, b) => a.order - b.order);

  return (
    <div 
      style={{ 
        backgroundColor: config.colors.background,
        color: config.colors.text,
        fontFamily: config.fonts.primary
      }}
    >
      {visibleElements.map((element) => (
        <PreviewElement key={element.id} element={element} config={config} />
      ))}
      
      {visibleElements.length === 0 && (
        <div className="p-20 text-center text-gray-500">
          <h2 className="text-2xl font-bold mb-4">مرحباً بك في موقعك الجديد!</h2>
          <p>أضف عناصر من قسم التخطيط لرؤية المحتوى هنا</p>
        </div>
      )}
    </div>
  );
};

// مكون عرض العنصر
const PreviewElement = ({ element, config }: { element: LayoutElement; config: SiteConfig }) => {
  const baseStyle = {
    padding: '40px 20px',
    borderBottom: `1px solid ${config.colors.primary}20`
  };

  switch (element.type) {
    case 'hero':
      return (
        <div style={{ ...baseStyle, backgroundColor: config.colors.primary, color: 'white', textAlign: 'center' as const }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            {element.content?.title || 'عنوان رئيسي'}
          </h1>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', opacity: 0.9 }}>
            {element.content?.subtitle || 'عنوان فرعي'}
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8 }}>
            {element.content?.description || 'وصف الموقع'}
          </p>
          <button style={{ 
            backgroundColor: config.colors.accent, 
            color: 'white', 
            padding: '12px 24px', 
            borderRadius: '6px',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            {element.content?.buttonText || 'اضغط هنا'}
          </button>
        </div>
      );
    
    case 'services':
      return (
        <div style={baseStyle}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem', color: config.colors.primary }}>
            {element.content?.title || 'خدماتنا'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {element.content?.services?.slice(0, 3).map((service: any, index: number) => (
              <div key={index} style={{ 
                backgroundColor: config.colors.background, 
                border: `2px solid ${config.colors.primary}30`,
                borderRadius: '8px', 
                padding: '20px', 
                textAlign: 'center' as const 
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: config.colors.primary }}>
                  {service.title}
                </h3>
                <p style={{ color: config.colors.text, opacity: 0.8 }}>{service.description}</p>
              </div>
            )) || (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center' as const, color: config.colors.text, opacity: 0.6 }}>
                لا توجد خدمات مضافة بعد
              </div>
            )}
          </div>
        </div>
      );
    
    default:
      return (
        <div style={baseStyle}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', color: config.colors.primary }}>
            {element.content?.title || `قسم ${element.type}`}
          </h2>
          <p style={{ textAlign: 'center', marginTop: '1rem', opacity: 0.8 }}>
            محتوى {element.type} سيظهر هنا
          </p>
        </div>
      );
  }
};

export default ResponsivePreview;
