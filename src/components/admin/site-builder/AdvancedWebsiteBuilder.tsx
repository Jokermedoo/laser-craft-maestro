
import React, { useState, useCallback } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Layout, Settings, Eye, Palette, Code, Download } from 'lucide-react';
import SiteConfigurationPanel from './SiteConfigurationPanel';
import DragDropLayoutEditor from './DragDropLayoutEditor';
import ContentEditor from './ContentEditor';
import ResponsivePreview from './ResponsivePreview';
import TemplateGallery from './TemplateGallery';
import BuildExportPanel from './BuildExportPanel';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import AnimatedContainer from '@/components/enhanced/AnimatedContainer';

const AdvancedWebsiteBuilder = () => {
  const [activeTab, setActiveTab] = useState('config');
  const { 
    siteConfig, 
    layoutElements, 
    updateSiteConfig, 
    updateLayoutElements,
    previewMode,
    setPreviewMode
  } = useSiteBuilder();

  const handleConfigChange = useCallback((config: any) => {
    updateSiteConfig(config);
  }, [updateSiteConfig]);

  return (
    <div className="space-y-6">
      <AnimatedContainer type="slide">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Globe className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">منشئ المواقع المتقدم</h2>
            <p className="text-gray-400">إنشاء وتخصيص مواقع احترافية بالسحب والإفلات</p>
            <p className="text-sm text-purple-400">طور بواسطة محمد سليم</p>
          </div>
        </div>
      </AnimatedContainer>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-slate-800/50">
          <TabsTrigger value="config" className="data-[state=active]:bg-purple-600">
            <Settings className="h-4 w-4 ml-2" />
            التكوين
          </TabsTrigger>
          <TabsTrigger value="layout" className="data-[state=active]:bg-purple-600">
            <Layout className="h-4 w-4 ml-2" />
            التخطيط
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-purple-600">
            <Code className="h-4 w-4 ml-2" />
            المحتوى
          </TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-purple-600">
            <Palette className="h-4 w-4 ml-2" />
            القوالب
          </TabsTrigger>
          <TabsTrigger value="preview" className="data-[state=active]:bg-purple-600">
            <Eye className="h-4 w-4 ml-2" />
            المعاينة
          </TabsTrigger>
          <TabsTrigger value="build" className="data-[state=active]:bg-purple-600">
            <Download className="h-4 w-4 ml-2" />
            البناء والتصدير
          </TabsTrigger>
        </TabsList>

        <TabsContent value="config" className="mt-6">
          <SiteConfigurationPanel 
            config={siteConfig}
            onChange={handleConfigChange}
          />
        </TabsContent>

        <TabsContent value="layout" className="mt-6">
          <DragDropLayoutEditor
            elements={layoutElements}
            onChange={updateLayoutElements}
          />
        </TabsContent>

        <TabsContent value="content" className="mt-6">
          <ContentEditor 
            elements={layoutElements}
            onChange={updateLayoutElements}
          />
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          <TemplateGallery
            onTemplateSelect={(template) => {
              updateSiteConfig(template.config);
              updateLayoutElements(template.layout);
            }}
          />
        </TabsContent>

        <TabsContent value="preview" className="mt-6">
          <ResponsivePreview
            config={siteConfig}
            elements={layoutElements}
          />
        </TabsContent>

        <TabsContent value="build" className="mt-6">
          <BuildExportPanel
            config={siteConfig}
            elements={layoutElements}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvancedWebsiteBuilder;
