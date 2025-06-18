
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, Tablet, Smartphone, RefreshCw, ExternalLink } from 'lucide-react';
import { SiteConfig, LayoutElement } from '@/hooks/useSiteBuilder';

interface ResponsivePreviewProps {
  config: SiteConfig;
  elements: LayoutElement[];
}

type DeviceType = 'desktop' | 'tablet' | 'mobile';

const ResponsivePreview = ({ config, elements }: ResponsivePreviewProps) => {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [previewKey, setPreviewKey] = useState(0);

  const deviceSizes = {
    desktop: { width: '100%', height: '700px', scale: 1 },
    tablet: { width: '768px', height: '1024px', scale: 0.7 },
    mobile: { width: '375px', height: '667px', scale: 0.8 }
  };

  const refreshPreview = () => {
    setPreviewKey(prev => prev + 1);
  };

  const openInNewTab = () => {
    window.open('/', '_blank');
  };

  const renderPreviewContent = () => {
    const visibleElements = elements.filter(el => el.visible).sort((a, b) => a.order - b.order);
    
    return (
      <div 
        className="min-h-full"
        style={{
          backgroundColor: config.colors.background,
          color: config.colors.text,
          fontFamily: config.fonts.primary
        }}
      >
        {visibleElements.map((element) => (
          <div key={element.id} className="p-6 border-b border-gray-200">
            {renderElementPreview(element, config)}
          </div>
        ))}
      </div>
    );
  };

  const renderElementPreview = (element: LayoutElement, config: SiteConfig) => {
    switch (element.type) {
      case 'hero':
        return (
          <div className="text-center py-20">
            <h1 
              className="text-4xl font-bold mb-4"
              style={{ color: config.colors.primary }}
            >
              {element.content?.title || 'عنوان رئيسي'}
            </h1>
            <h2 
              className="text-2xl mb-6"
              style={{ color: config.colors.secondary }}
            >
              {element.content?.subtitle || 'عنوان فرعي'}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {element.content?.description || 'وصف القسم الرئيسي'}
            </p>
            <button
              className="px-8 py-3 rounded-lg font-bold text-white"
              style={{ backgroundColor: config.colors.accent }}
            >
              {element.content?.buttonText || 'ابدأ الآن'}
            </button>
          </div>
        );
      
      case 'services':
        return (
          <div>
            <h2 
              className="text-3xl font-bold text-center mb-12"
              style={{ color: config.colors.primary }}
            >
              {element.content?.title || 'خدماتنا'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(element.content?.services || []).map((service: any, index: number) => (
                <div key={index} className="p-6 rounded-lg border">
                  <div className="text-2xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'about':
        return (
          <div className="text-center">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: config.colors.primary }}
            >
              {element.content?.title || 'من نحن'}
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              {element.content?.description || 'معلومات عن الشركة'}
            </p>
          </div>
        );
      
      case 'contact':
        return (
          <div className="text-center">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: config.colors.primary }}
            >
              {element.content?.title || 'تواصل معنا'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="font-bold mb-2">الهاتف</h3>
                <p>{element.content?.phone || '+966 XX XXX XXXX'}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">البريد الإلكتروني</h3>
                <p>{element.content?.email || 'info@example.com'}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">العنوان</h3>
                <p>{element.content?.address || 'الرياض، المملكة العربية السعودية'}</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-8 text-gray-500">
            معاينة {element.type} غير متاحة
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">المعاينة المتجاوبة</h2>
          <p className="text-gray-400">معاينة الموقع على أجهزة مختلفة</p>
        </div>
        
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Button
            variant="outline"
            size="sm"
            onClick={refreshPreview}
            className="border-gray-600"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={openInNewTab}
            className="border-gray-600"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* أدوات التحكم في الجهاز */}
      <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
        <Button
          variant={device === 'desktop' ? 'default' : 'outline'}
          onClick={() => setDevice('desktop')}
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Monitor className="h-4 w-4" />
          <span>سطح المكتب</span>
        </Button>
        <Button
          variant={device === 'tablet' ? 'default' : 'outline'}
          onClick={() => setDevice('tablet')}
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Tablet className="h-4 w-4" />
          <span>التابلت</span>
        </Button>
        <Button
          variant={device === 'mobile' ? 'default' : 'outline'}
          onClick={() => setDevice('mobile')}
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Smartphone className="h-4 w-4" />
          <span>الهاتف</span>
        </Button>
      </div>

      {/* معاينة الموقع */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">{config.name}</CardTitle>
            <Badge variant="outline">
              {deviceSizes[device].width} × {deviceSizes[device].height}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg overflow-hidden border border-gray-300">
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
              <div className="w-full h-full overflow-auto">
                {renderPreviewContent()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResponsivePreview;
