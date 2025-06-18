
import { useState, useCallback, useEffect } from 'react';

interface PerformanceMetrics {
  score: number;
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  bundleSize: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  const measureCurrentMetrics = useCallback(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    
    // قياس استخدام الذاكرة
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;
    
    // حساب النقاط
    let score = 100;
    if (loadTime > 3000) score -= 20;
    if (memoryUsage > 50) score -= 15;
    
    const newMetrics: PerformanceMetrics = {
      score: Math.max(0, score),
      loadTime,
      memoryUsage,
      renderTime: performance.now(),
      bundleSize: 0
    };
    
    setMetrics(newMetrics);
    return newMetrics;
  }, []);

  const optimizePerformance = useCallback(async () => {
    console.log('بدء تحسين الأداء...');
    
    // تنظيف الذاكرة المؤقتة
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }
    
    // تحسين DOM
    const unusedElements = document.querySelectorAll('[data-unused="true"]');
    unusedElements.forEach(el => el.remove());
    
    setIsOptimized(true);
    
    // إعادة قياس المؤشرات
    setTimeout(() => {
      measureCurrentMetrics();
    }, 1000);
    
    console.log('تم تحسين الأداء بنجاح');
  }, [measureCurrentMetrics]);

  const clearCache = useCallback(() => {
    localStorage.clear();
    sessionStorage.clear();
    
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister());
      });
    }
    
    console.log('تم تنظيف الذاكرة المؤقتة');
  }, []);

  const measureRenderTime = useCallback((componentName: string) => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      console.log(`${componentName} render time: ${endTime - startTime}ms`);
    };
  }, []);

  useEffect(() => {
    measureCurrentMetrics();
    
    const interval = setInterval(() => {
      measureCurrentMetrics();
    }, 30000);
    
    return () => clearInterval(interval);
  }, [measureCurrentMetrics]);

  return {
    metrics,
    isOptimized,
    optimizePerformance,
    clearCache,
    measureCurrentMetrics,
    measureRenderTime
  };
};
