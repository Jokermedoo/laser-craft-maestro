
import React, { useEffect, useState, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Gauge, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  RefreshCw,
  MemoryStick,
  Monitor
} from 'lucide-react';
import { usePerformance } from '@/hooks/usePerformance';
import { useSmartNotifications } from '@/hooks/useSmartNotifications';
import AnimatedContainer from './AnimatedContainer';

const PerformanceOptimizer = memo(() => {
  const { 
    metrics, 
    isOptimized, 
    optimizePerformance, 
    clearCache, 
    measureCurrentMetrics 
  } = usePerformance();
  
  const { showSuccess, showInfo, showWarning } = useSmartNotifications();
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = useCallback(async () => {
    setIsOptimizing(true);
    try {
      await optimizePerformance();
      showSuccess('تم تحسين الأداء بنجاح!', {
        description: 'تم تطبيق جميع التحسينات على النظام'
      });
      await new Promise(resolve => setTimeout(resolve, 500));
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizePerformance, showSuccess]);

  const handleClearCache = useCallback(() => {
    clearCache();
    showInfo('تم تنظيف الذاكرة المؤقتة', {
      description: 'تم حذف جميع البيانات المؤقتة'
    });
  }, [clearCache, showInfo]);

  const getScoreColor = useCallback((score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  }, []);

  const formatBytes = useCallback((bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }, []);

  const formatNumber = useCallback((num: number) => {
    return num.toLocaleString('ar-EG');
  }, []);

  useEffect(() => {
    if (metrics && metrics.score < 60) {
      showWarning('الأداء يحتاج تحسين', {
        description: `النتيجة الحالية: ${Math.round(metrics.score)}%`,
        action: {
          label: 'تحسين الآن',
          onClick: handleOptimize
        }
      });
    }
  }, [metrics, showWarning, handleOptimize]);

  if (!metrics) {
    return (
      <AnimatedContainer type="fade" className="fixed bottom-4 left-4 z-50">
        <Card className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-blue-400 animate-spin" />
              <span className="text-white text-sm">قياس الأداء...</span>
            </div>
          </CardContent>
        </Card>
      </AnimatedContainer>
    );
  }

  const score = metrics.score || 0;

  return (
    <AnimatedContainer type="slide" className="fixed bottom-4 left-4 z-50">
      <Card className="bg-slate-800/95 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-blue-400" />
              <span className="text-white text-sm font-bold">أداء الموقع</span>
            </div>
            <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {Math.round(score)}%
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">وقت التحميل:</span>
              <span className="text-white">{(metrics.loadTime / 1000).toFixed(2)}ث</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">عناصر DOM:</span>
              <span className="text-white">{formatNumber(metrics.domElementsCount)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">استخدام الذاكرة:</span>
              <span className="text-white">{formatBytes(metrics.memoryUsage)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">آخر قياس:</span>
              <span className="text-white">{(metrics.renderTime).toFixed(1)}ms</span>
            </div>
          </div>

          <div className="flex gap-2 mb-3">
            <Button
              size="sm"
              onClick={handleOptimize}
              disabled={isOptimizing}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-xs"
            >
              {isOptimizing ? (
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
              ) : (
                <Zap className="h-3 w-3 mr-1" />
              )}
              {isOptimizing ? 'تحسين...' : 'تحسين'}
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              onClick={measureCurrentMetrics}
              className="text-xs border-slate-600"
            >
              <TrendingUp className="h-3 w-3" />
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={handleClearCache}
              className="text-xs border-slate-600"
            >
              <MemoryStick className="h-3 w-3" />
            </Button>
          </div>

          {isOptimized && (
            <div className="flex items-center gap-1 mb-2 text-xs text-green-400">
              <CheckCircle className="h-3 w-3" />
              <span>النظام محسن</span>
            </div>
          )}
          
          {score < 60 && (
            <div className="flex items-center gap-1 text-xs text-yellow-400">
              <AlertTriangle className="h-3 w-3" />
              <span>يحتاج تحسين</span>
            </div>
          )}

          {score >= 80 && (
            <div className="flex items-center gap-1 text-xs text-green-400">
              <CheckCircle className="h-3 w-3" />
              <span>أداء ممتاز</span>
            </div>
          )}
        </CardContent>
      </Card>
    </AnimatedContainer>
  );
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;
