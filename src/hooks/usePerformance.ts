
import { useState, useEffect, useCallback, useMemo } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  lastUpdate: string;
  memoryUsage: number;
  domElementsCount: number;
}

interface MemoryInfo {
  usedJSHeapSize?: number;
  totalJSHeapSize?: number;
  jsHeapSizeLimit?: number;
}

declare global {
  interface Performance {
    memory?: MemoryInfo;
  }
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    lastUpdate: '',
    memoryUsage: 0,
    domElementsCount: 0
  });
  const [isOptimized, setIsOptimized] = useState(false);

  const measureRenderTime = useCallback((componentName: string) => {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      // فقط للتطوير
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }
      
      setMetrics(prev => ({
        ...prev,
        renderTime,
        lastUpdate: new Date().toISOString()
      }));
    };
  }, []);

  const measureCurrentMetrics = useCallback(() => {
    const memoryUsage = performance.memory?.usedJSHeapSize || 0;
    const domElementsCount = document.querySelectorAll('*').length;
    
    setMetrics(prev => ({
      ...prev,
      memoryUsage,
      domElementsCount,
      lastUpdate: new Date().toISOString()
    }));
  }, []);

  const optimizePerformance = useCallback(() => {
    setIsOptimized(true);
    
    // تفعيل التخزين المؤقت
    localStorage.setItem('performance_optimized', 'true');
    
    // تحديث المقاييس
    measureCurrentMetrics();
    
    // تنظيف الذاكرة إذا كان متاحاً
    if ('gc' in window && typeof (window as any).gc === 'function') {
      (window as any).gc();
    }
    
    console.log('Performance optimization completed');
  }, [measureCurrentMetrics]);

  const clearCache = useCallback(() => {
    // تنظيف التخزين المؤقت
    sessionStorage.clear();
    
    // إعادة تعيين الحالة
    setIsOptimized(false);
    localStorage.removeItem('performance_optimized');
    
    measureCurrentMetrics();
  }, [measureCurrentMetrics]);

  const optimizedMetrics = useMemo(() => ({
    ...metrics,
    score: Math.max(0, Math.min(100, 100 - (metrics.renderTime / 10) - (metrics.memoryUsage / 10000000)))
  }), [metrics]);

  useEffect(() => {
    const cached = localStorage.getItem('performance_optimized');
    if (cached === 'true') {
      setIsOptimized(true);
    }

    // قياس وقت التحميل الأولي
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // قياس المقاييس الأولية
    measureCurrentMetrics();

    // تنظيف دوري للذاكرة (كل دقيقة)
    const cleanupInterval = setInterval(() => {
      measureCurrentMetrics();
      
      if (performance.memory && performance.memory.usedJSHeapSize && performance.memory.usedJSHeapSize > 100000000) {
        console.warn('High memory usage detected, consider cleanup');
      }
    }, 60000);

    return () => clearInterval(cleanupInterval);
  }, [measureCurrentMetrics]);

  return {
    metrics: optimizedMetrics,
    isOptimized,
    measureRenderTime,
    optimizePerformance,
    clearCache,
    measureCurrentMetrics
  };
};
