
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Download, Code, Globe, Archive, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { SiteConfig, LayoutElement } from '@/hooks/useSiteBuilder';
import { useSmartNotifications } from '@/hooks/useSmartNotifications';

interface BuildExportPanelProps {
  config: SiteConfig;
  elements: LayoutElement[];
}

const BuildExportPanel = ({ config, elements }: BuildExportPanelProps) => {
  const [buildProgress, setBuildProgress] = useState(0);
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildStatus, setBuildStatus] = useState<'idle' | 'building' | 'success' | 'error'>('idle');
  const { showSuccess, showError, showLoading } = useSmartNotifications();

  const simulateBuild = async () => {
    setIsBuilding(true);
    setBuildStatus('building');
    setBuildProgress(0);

    const steps = [
      'تحليل الإعدادات...',
      'إنشاء ملفات HTML...',
      'تطبيق الأنماط...',
      'تحسين الأداء...',
      'إنشاء الحزمة النهائية...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setBuildProgress((i + 1) * 20);
    }

    setIsBuilding(false);
    setBuildStatus('success');
    showSuccess('تم بناء الموقع بنجاح!');
  };

  const exportConfig = () => {
    const exportData = {
      meta: {
        version: '1.0.0',
        createdBy: 'محمد سليم',
        createdAt: new Date().toISOString(),
        projectName: config.name
      },
      config,
      layout: elements,
      buildInfo: {
        elementsCount: elements.length,
        visibleElements: elements.filter(el => el.visible).length
      }
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.name.replace(/\s+/g, '-')}-config.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showSuccess('تم تصدير إعدادات الموقع بنجاح');
  };

  const exportHTML = () => {
    const htmlContent = generateHTML(config, elements);
    const blob = new Blob([htmlContent], { type: 'text/html; charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.name.replace(/\s+/g, '-')}.html`;
    a.click();
    URL.revokeObjectURL(url);
    
    showSuccess('تم تصدير ملف HTML بنجاح');
  };

  const generateHTML = (config: SiteConfig, elements: LayoutElement[]) => {
    const visibleElements = elements.filter(el => el.visible).sort((a, b) => a.order - b.order);
    
    const elementsHTML = visibleElements.map(element => {
      switch (element.type) {
        case 'hero':
          return `
            <section class="hero" style="background: ${config.colors.background}; color: ${config.colors.text}; padding: 80px 20px; text-align: center;">
              <h1 style="color: ${config.colors.primary}; font-size: 3rem; margin-bottom: 1rem;">${element.content?.title || 'عنوان رئيسي'}</h1>
              <h2 style="color: ${config.colors.secondary}; font-size: 1.5rem; margin-bottom: 2rem;">${element.content?.subtitle || 'عنوان فرعي'}</h2>
              <p style="font-size: 1.2rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">${element.content?.description || 'وصف القسم'}</p>
              <button style="background: ${config.colors.accent}; color: white; padding: 12px 24px; border: none; border-radius: 8px; font-size: 1.1rem; cursor: pointer;">${element.content?.buttonText || 'ابدأ الآن'}</button>
            </section>
          `;
        case 'services':
          return `
            <section class="services" style="padding: 60px 20px;">
              <h2 style="color: ${config.colors.primary}; text-align: center; font-size: 2.5rem; margin-bottom: 3rem;">${element.content?.title || 'خدماتنا'}</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto;">
                ${(element.content?.services || []).map((service: any) => `
                  <div style="padding: 2rem; border: 1px solid #e5e7eb; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">${service.icon}</div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: ${config.colors.primary};">${service.title}</h3>
                    <p>${service.description}</p>
                  </div>
                `).join('')}
              </div>
            </section>
          `;
        default:
          return `<section class="${element.type}" style="padding: 40px 20px;"><p>قسم ${element.type}</p></section>`;
      }
    }).join('');

    return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.metadata.title}</title>
    <meta name="description" content="${config.metadata.description}">
    <meta name="keywords" content="${config.metadata.keywords}">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: ${config.fonts.primary}; 
            background: ${config.colors.background}; 
            color: ${config.colors.text}; 
            line-height: 1.6;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    </style>
</head>
<body>
    ${elementsHTML}
    
    <footer style="background: ${config.colors.primary}; color: white; text-align: center; padding: 20px;">
        <p>© 2024 ${config.name} - طور بواسطة محمد سليم</p>
    </footer>
</body>
</html>
    `;
  };

  const exportPackage = async () => {
    showLoading('جاري إنشاء الحزمة...', 
      new Promise((resolve) => {
        setTimeout(() => {
          const files = {
            'index.html': generateHTML(config, elements),
            'config.json': JSON.stringify({ config, elements }, null, 2),
            'README.md': `# ${config.name}\n\n${config.metadata.description}\n\nطور بواسطة محمد سليم`
          };
          
          // محاكاة إنشاء ملف مضغوط
          resolve(files);
        }, 2000);
      })
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Download className="h-8 w-8 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">البناء والتصدير</h2>
          <p className="text-gray-400">إنشاء وتصدير موقعك الإلكتروني</p>
          <p className="text-sm text-purple-400">طور بواسطة محمد سليم</p>
        </div>
      </div>

      {/* معلومات المشروع */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">معلومات المشروع</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{config.name}</div>
              <div className="text-sm text-gray-400">اسم المشروع</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{elements.length}</div>
              <div className="text-sm text-gray-400">إجمالي العناصر</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{elements.filter(el => el.visible).length}</div>
              <div className="text-sm text-gray-400">عناصر مرئية</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {buildStatus === 'success' ? <CheckCircle className="h-6 w-6 mx-auto" /> : 
                 buildStatus === 'error' ? <AlertCircle className="h-6 w-6 mx-auto" /> : '⏳'}
              </div>
              <div className="text-sm text-gray-400">حالة البناء</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* عملية البناء */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">بناء الموقع</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isBuilding && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">جاري البناء...</span>
                <span className="text-purple-400">{buildProgress}%</span>
              </div>
              <Progress value={buildProgress} className="w-full" />
            </div>
          )}
          
          <div className="flex space-x-3 rtl:space-x-reverse">
            <Button
              onClick={simulateBuild}
              disabled={isBuilding}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Globe className="h-4 w-4 mr-2" />
              {isBuilding ? 'جاري البناء...' : 'بناء الموقع'}
            </Button>
            
            {buildStatus === 'success' && (
              <Badge variant="default" className="bg-green-600">
                <CheckCircle className="h-3 w-3 mr-1" />
                تم البناء بنجاح
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* خيارات التصدير */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">تصدير المشروع</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              onClick={exportConfig}
              variant="outline"
              className="h-20 flex-col space-y-2 border-purple-500/50 hover:bg-purple-600/20"
            >
              <FileText className="h-6 w-6" />
              <span>تصدير الإعدادات</span>
              <span className="text-xs text-gray-400">JSON</span>
            </Button>

            <Button
              onClick={exportHTML}
              variant="outline"
              className="h-20 flex-col space-y-2 border-purple-500/50 hover:bg-purple-600/20"
            >
              <Code className="h-6 w-6" />
              <span>تصدير HTML</span>
              <span className="text-xs text-gray-400">ملف واحد</span>
            </Button>

            <Button
              onClick={exportPackage}
              variant="outline"
              className="h-20 flex-col space-y-2 border-purple-500/50 hover:bg-purple-600/20"
            >
              <Archive className="h-6 w-6" />
              <span>حزمة كاملة</span>
              <span className="text-xs text-gray-400">ZIP</span>
            </Button>

            <Button
              variant="outline"
              className="h-20 flex-col space-y-2 border-purple-500/50 hover:bg-purple-600/20"
              disabled
            >
              <Globe className="h-6 w-6" />
              <span>نشر مباشر</span>
              <span className="text-xs text-gray-400">قريباً</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* تعليمات النشر */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">تعليمات النشر</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-bold text-white mb-2">1. تصدير ملف HTML</h4>
              <p className="text-sm">احصل على ملف HTML جاهز للرفع على أي استضافة ويب</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">2. تصدير الحزمة الكاملة</h4>
              <p className="text-sm">احصل على جميع الملفات والإعدادات في ملف مضغوط</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">3. رفع الموقع</h4>
              <p className="text-sm">ارفع الملفات على استضافة ويب مثل Netlify أو Vercel أو GitHub Pages</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuildExportPanel;
