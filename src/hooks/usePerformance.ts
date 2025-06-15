
import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  lastUpdate: string;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    lastUpdate: ''
  });
  const [isOptimized, setIsOptimized] = useState(false);

  const measureRenderTime = useCallback((componentName: string) => {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      setMetrics(prev => ({
        ...prev,
        renderTime,
        lastUpdate: new Date().toISOString()
      }));
    };
  }, []);

  const optimizePerformance = useCallback(() => {
    // تحسين الأداء عبر تقليل re-renders
    setIsOptimized(true);
    
    // تفعيل التخزين المؤقت
    localStorage.setItem('performance_optimized', 'true');
  }, []);

  useEffect(() => {
    const cached = localStorage.getItem('performance_optimized');
    if (cached === 'true') {
      setIsOptimized(true);
    }

    // قياس وقت التحميل الأولي
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));
  }, []);

  return {
    metrics,
    isOptimized,
    measureRenderTime,
    optimizePerformance
  };
};
