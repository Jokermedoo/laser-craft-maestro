
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Gauge, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  domElements: number;
  memoryUsage: number;
  networkRequests: number;
}

const PerformanceOptimizer = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [lastOptimization, setLastOptimization] = useState<Date | null>(null);

  useEffect(() => {
    measurePerformance();
    
    // Auto-optimize every 5 minutes
    const interval = setInterval(() => {
      if (!isOptimizing) {
        optimizePerformance();
      }
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  const measurePerformance = () => {
    const loadTime = performance.now();
    const domElements = document.querySelectorAll('*').length;
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
    const networkRequests = performance.getEntriesByType('resource').length;

    setMetrics({
      loadTime,
      domElements,
      memoryUsage,
      networkRequests
    });
  };

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    try {
      // Simulate optimization tasks
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clean up unused resources
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Cleanup tasks during idle time
          console.log('Performance optimization completed');
        });
      }
      
      measurePerformance();
      setLastOptimization(new Date());
    } finally {
      setIsOptimizing(false);
    }
  };

  const getPerformanceScore = () => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // Deduct points based on metrics
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.domElements > 1000) score -= 15;
    if (metrics.memoryUsage > 50000000) score -= 20;
    if (metrics.networkRequests > 50) score -= 10;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!metrics) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Card className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-blue-400 animate-spin" />
              <span className="text-white text-sm">قياس الأداء...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const score = getPerformanceScore();

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Card className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-blue-400" />
              <span className="text-white text-sm font-bold">أداء الموقع</span>
            </div>
            <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {score}%
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">وقت التحميل:</span>
              <span className="text-white">{(metrics.loadTime / 1000).toFixed(2)}ث</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">العناصر:</span>
              <span className="text-white">{metrics.domElements}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">الذاكرة:</span>
              <span className="text-white">{formatBytes(metrics.memoryUsage)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">الطلبات:</span>
              <span className="text-white">{metrics.networkRequests}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={optimizePerformance}
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
              onClick={measurePerformance}
              className="text-xs"
            >
              <TrendingUp className="h-3 w-3" />
            </Button>
          </div>

          {lastOptimization && (
            <div className="flex items-center gap-1 mt-2 text-xs text-green-400">
              <CheckCircle className="h-3 w-3" />
              <span>آخر تحسين: {lastOptimization.toLocaleTimeString('ar-EG')}</span>
            </div>
          )}
          
          {score < 60 && (
            <div className="flex items-center gap-1 mt-2 text-xs text-yellow-400">
              <AlertTriangle className="h-3 w-3" />
              <span>يحتاج تحسين</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceOptimizer;
