import React, { useEffect, useState, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Gauge, CheckCircle, AlertTriangle, TrendingUp, RefreshCw, MemoryStick, Monitor } from 'lucide-react';
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
  const {
    showSuccess,
    showInfo,
    showWarning
  } = useSmartNotifications();
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
    return <AnimatedContainer type="fade" className="fixed bottom-4 left-4 z-50">
        <Card className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-blue-400 animate-spin" />
              <span className="text-white text-sm">قياس الأداء...</span>
            </div>
          </CardContent>
        </Card>
      </AnimatedContainer>;
  }
  const score = metrics.score || 0;
  return <AnimatedContainer type="slide" className="fixed bottom-4 left-4 z-50">
      <Card className="bg-slate-800/95 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 shadow-lg">
        
      </Card>
    </AnimatedContainer>;
});
PerformanceOptimizer.displayName = 'PerformanceOptimizer';
export default PerformanceOptimizer;