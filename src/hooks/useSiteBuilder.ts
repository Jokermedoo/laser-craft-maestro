
import { useState, useCallback } from 'react';

export interface SiteConfig {
  name: string;
  logo: string;
  favicon: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
}

export interface LayoutElement {
  id: string;
  type: 'hero' | 'services' | 'products' | 'contact' | 'about' | 'gallery';
  content: any;
  style: any;
  visible: boolean;
  order: number;
}

export const useSiteBuilder = () => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    name: 'ورشة المعز لخدمات الليزر',
    logo: '',
    favicon: '',
    colors: {
      primary: '#8B5CF6',
      secondary: '#06B6D4',
      accent: '#F59E0B',
      background: '#0F172A',
      text: '#FFFFFF',
    },
    fonts: {
      primary: 'Cairo, sans-serif',
      secondary: 'Inter, sans-serif',
    },
    metadata: {
      title: 'ورشة المعز لخدمات الليزر - الرائدة في النقش بالليزر',
      description: 'متخصصون في خدمات النقش والحفر بالليزر بأحدث التقنيات',
      keywords: 'ليزر, نقش, حفر, ورشة المعز',
    },
  });

  const [layoutElements, setLayoutElements] = useState<LayoutElement[]>([
    {
      id: 'hero',
      type: 'hero',
      content: {
        title: 'ورشة المعز لخدمات الليزر',
        subtitle: 'الرائدة في مجال النقش بالليزر',
        description: 'نحن متخصصون في تقديم أفضل خدمات النقش والحفر بالليزر',
        buttonText: 'تواصل معنا الآن'
      },
      style: {},
      visible: true,
      order: 1,
    },
    {
      id: 'services',
      type: 'services',
      content: {
        title: 'خدماتنا',
        services: []
      },
      style: {},
      visible: true,
      order: 2,
    },
  ]);

  const [previewMode, setPreviewMode] = useState(false);

  const updateSiteConfig = useCallback((newConfig: Partial<SiteConfig>) => {
    setSiteConfig(prev => ({ ...prev, ...newConfig }));
  }, []);

  const updateLayoutElements = useCallback((elements: LayoutElement[]) => {
    setLayoutElements(elements);
  }, []);

  const exportConfiguration = useCallback(() => {
    const config = {
      site: siteConfig,
      layout: layoutElements,
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      author: 'محمد سليم'
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${siteConfig.name}-config.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [siteConfig, layoutElements]);

  const importConfiguration = useCallback(async (file: File) => {
    const text = await file.text();
    const config = JSON.parse(text);
    
    if (config.site) {
      setSiteConfig(config.site);
    }
    if (config.layout) {
      setLayoutElements(config.layout);
    }
  }, []);

  return {
    siteConfig,
    layoutElements,
    previewMode,
    updateSiteConfig,
    updateLayoutElements,
    setPreviewMode,
    exportConfiguration,
    importConfiguration,
  };
};
