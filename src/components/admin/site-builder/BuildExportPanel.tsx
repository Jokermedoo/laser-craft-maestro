
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Code, 
  FileZip, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  Info,
  Rocket,
  Settings
} from 'lucide-react';
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
  const { showSuccess, showError, showInfo } = useSmartNotifications();

  const buildOptions = [
    {
      id: 'html',
      name: 'HTML/CSS/JS',
      description: 'ملفات ويب قياسية',
      icon: <Code className="h-5 w-5" />,
      size: '~2MB',
      compatibility: 'جميع المتصفحات'
    },
    {
      id: 'react',
      name: 'React App',
      description: 'تطبيق React كامل',
      icon: <Globe className="h-5 w-5" />,
      size: '~15MB',
      compatibility: 'متصفحات حديثة'
    },
    {
      id: 'zip',
      name: 'ملف مضغوط',
      description: 'جميع الملفات في أرشيف',
      icon: <FileZip className="h-5 w-5" />,
      size: '~5MB',
      compatibility: 'للتحميل والاستضافة'
    }
  ];

  const simulateBuild = async (type: string) => {
    setIsBuilding(true);
    setBuildStatus('building');
    setBuildProgress(0);

    try {
      // محاكاة عملية البناء
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setBuildProgress(i);
      }

      setBuildStatus('success');
      showSuccess(`تم بناء الموقع بصيغة ${type} بنجاح!`, {
        description: 'يمكنك الآن تحميل الملفات'
      });

      // محاكاة التحميل
      downloadBuild(type);
    } catch (error) {
      setBuildStatus('error');
      showError('فشل في بناء الموقع', {
        description: 'حدث خطأ أثناء عملية البناء'
      });
    } finally {
      setIsBuilding(false);
      setTimeout(() => {
        setBuildStatus('idle');
        setBuildProgress(0);
      }, 3000);
    }
  };

  const downloadBuild = (type: string) => {
    const buildData = {
      config,
      elements,
      buildType: type,
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      author: 'محمد سليم - منشئ المواقع المتقدم'
    };

    const blob = new Blob([JSON.stringify(buildData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.name}-${type}-build.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportConfiguration = () => {
    const configData = {
      site: config,
      layout: elements,
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      author: 'محمد سليم'
    };

    const blob = new Blob([JSON.stringify(configData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.name}-configuration.json`;
    a.click();
    URL.revokeObjectURL(url);

    showInfo('تم تصدير التكوين', {
      description: 'يمكنك استيراد هذا الملف لاحقاً'
    });
  };

  const checkReadiness = () => {
    const issues = [];
    
    if (!config.name) issues.push('اسم الموقع غير مُعرف');
    if (!config.metadata.title) issues.push('عنوان الصفحة مفقود');
    if (!config.metadata.description) issues.push('وصف الموقع مفقود');
    if (elements.length === 0) issues.push('لا توجد عناصر في الصفحة');
    if (elements.filter(el => el.visible).length === 0) issues.push('جميع العناصر مخفية');

    return {
      isReady: issues.length === 0,
      issues
    };
  };

  const readiness = checkReadiness();

  return (
    <div className="space-y-6">
      {/* حالة الاستعداد */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            فحص الاستعداد للنشر
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">حالة المشروع:</span>
              <Badge 
                variant={readiness.isReady ? 'default' : 'destructive'}
                className={readiness.isReady ? 'bg-green-600' : 'bg-red-600'}
              >
                {readiness.isReady ? 'جاهز للنشر' : 'يحتاج مراجعة'}
              </Badge>
            </div>

            {!readiness.isReady && (
              <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-medium">مشاكل يجب حلها:</span>
                </div>
                <ul className="text-sm text-yellow-300 space-y-1">
                  {readiness.issues.map((issue, index) => (
                    <li key={index}>• {issue}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400">{elements.length}</div>
                <div className="text-sm text-gray-400">إجمالي العناصر</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">
                  {elements.filter(el => el.visible).length}
                </div>
                <div className="text-sm text-gray-400">عناصر مرئية</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">
                  {config.colors.primary ? 1 : 0}/5
                </div>
                <div className="text-sm text-gray-400">ألوان مُعرفة</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-400">متجاوب</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* خيارات البناء */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {buildOptions.map((option) => (
          <Card key={option.id} className="bg-slate-800/50 border-purple-500/30 hover:border-purple-400 transition-all">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                {option.icon}
                <span className="mr-2">{option.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-sm mb-4">{option.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">الحجم المتوقع:</span>
                  <span className="text-white">{option.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">التوافق:</span>
                  <span className="text-white">{option.compatibility}</span>
                </div>
              </div>
              
              <Button
                onClick={() => simulateBuild(option.id)}
                disabled={!readiness.isReady || isBuilding}
                className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
              >
                {isBuilding ? (
                  <>
                    <Settings className="h-4 w-4 mr-2 animate-spin" />
                    جاري البناء...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    بناء وتحميل
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* شريط التقدم */}
      {isBuilding && (
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">جاري بناء الموقع...</span>
                <span className="text-gray-400">{buildProgress}%</span>
              </div>
              <Progress value={buildProgress} className="w-full" />
              <div className="text-sm text-gray-400 text-center">
                {buildProgress < 30 && 'تحليل التكوين...'}
                {buildProgress >= 30 && buildProgress < 60 && 'بناء العناصر...'}
                {buildProgress >= 60 && buildProgress < 90 && 'تطبيق الأنماط...'}
                {buildProgress >= 90 && 'التحضير للتحميل...'}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* أدوات إضافية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            أدوات التطوير
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={exportConfiguration}
              variant="outline"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-600/20"
            >
              <Download className="h-4 w-4 mr-2" />
              تصدير التكوين
            </Button>

            <Button
              onClick={() => window.open('/', '_blank')}
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-600/20"
            >
              <Rocket className="h-4 w-4 mr-2" />
              معاينة مباشرة
            </Button>

            <Button
              onClick={() => showInfo('قريباً!', { description: 'ميزة النشر التلقائي قيد التطوير' })}
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-600/20"
            >
              <Globe className="h-4 w-4 mr-2" />
              نشر تلقائي
            </Button>
          </div>

          <div className="mt-6 p-4 bg-slate-700/30 rounded-lg">
            <div className="flex items-center mb-2">
              <Info className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">معلومات المطور</span>
            </div>
            <p className="text-sm text-gray-400">
              تم تطوير هذا المنشئ بواسطة <strong className="text-white">محمد سليم</strong>
              <br />
              منشئ مواقع متقدم مع إمكانيات السحب والإفلات والمعاينة المباشرة
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuildExportPanel;
