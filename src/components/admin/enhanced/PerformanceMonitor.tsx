
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Zap, Clock, Database, Wifi, RefreshCw } from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface LoadTime {
  component: string;
  time: number;
  size: number;
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    { name: 'سرعة التحميل', value: 1.2, unit: 's', status: 'good', trend: 'down' },
    { name: 'استخدام الذاكرة', value: 45, unit: 'MB', status: 'good', trend: 'stable' },
    { name: 'حجم الحزمة', value: 2.8, unit: 'MB', status: 'warning', trend: 'up' },
    { name: 'عدد الطلبات', value: 12, unit: 'requests', status: 'good', trend: 'down' }
  ]);

  const [loadTimes, setLoadTimes] = useState<LoadTime[]>([
    { component: 'UniversalDragDropEditor', time: 340, size: 45 },
    { component: 'ThemeEditor', time: 180, size: 28 },
    { component: 'ConfigManager', time: 95, size: 15 },
    { component: 'LivePreview', time: 220, size: 32 }
  ]);

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [updateInterval, setUpdateInterval] = useState<NodeJS.Timeout | null>(null);

  const startMonitoring = () => {
    setIsMonitoring(true);
    const interval = setInterval(() => {
      // محاكاة تحديث البيانات
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(0, metric.value + (Math.random() - 0.5) * 0.2),
        trend: Math.random() > 0.5 ? 'up' : 'down'
      })));
    }, 2000);
    setUpdateInterval(interval);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
    if (updateInterval) {
      clearInterval(updateInterval);
      setUpdateInterval(null);
    }
  };

  useEffect(() => {
    return () => {
      if (updateInterval) {
        clearInterval(updateInterval);
      }
    };
  }, [updateInterval]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      case 'stable': return '→';
      default: return '→';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Activity className="h-8 w-8 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">مراقب الأداء</h2>
            <p className="text-gray-400">مراقبة أداء النظام في الوقت الفعلي</p>
          </div>
        </div>
        
        <div className="flex space-x-2 rtl:space-x-reverse">
          {!isMonitoring ? (
            <Button onClick={startMonitoring} className="bg-green-600 hover:bg-green-700">
              <Activity className="h-4 w-4 ml-2" />
              بدء المراقبة
            </Button>
          ) : (
            <Button onClick={stopMonitoring} variant="outline" className="border-red-500 text-red-400">
              <RefreshCw className="h-4 w-4 ml-2" />
              إيقاف المراقبة
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="components">المكونات</TabsTrigger>
          <TabsTrigger value="network">الشبكة</TabsTrigger>
          <TabsTrigger value="memory">الذاكرة</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* المقاييس الرئيسية */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">{metric.name}</span>
                    <span className="text-xs">{getTrendIcon(metric.trend)}</span>
                  </div>
                  <div className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                    {metric.value.toFixed(1)} {metric.unit}
                  </div>
                  <Progress 
                    value={Math.min(metric.value / 5 * 100, 100)} 
                    className="mt-2 h-2"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* رسم بياني للأداء */}
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">أداء النظام</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-slate-900 rounded-lg p-4 flex items-end justify-between">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-purple-500 rounded-t w-4"
                    style={{
                      height: `${Math.random() * 80 + 20}%`,
                      opacity: isMonitoring ? 1 : 0.5
                    }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="components" className="space-y-4">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">أوقات تحميل المكونات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {loadTimes.map((component, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Clock className="h-5 w-5 text-blue-400" />
                      <div>
                        <div className="text-white font-medium">{component.component}</div>
                        <div className="text-gray-400 text-sm">{component.size} KB</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${component.time > 200 ? 'text-yellow-400' : 'text-green-400'}`}>
                        {component.time}ms
                      </div>
                      <Progress value={Math.min(component.time / 500 * 100, 100)} className="w-24 h-2 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Wifi className="h-5 w-5 ml-2" />
                  حالة الشبكة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">سرعة التحميل</span>
                    <span className="text-green-400 font-bold">Fast</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">زمن الاستجابة</span>
                    <span className="text-green-400 font-bold">45ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">نوع الاتصال</span>
                    <span className="text-blue-400 font-bold">4G</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Database className="h-5 w-5 ml-2" />
                  استخدام البيانات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">البيانات المرسلة</span>
                      <span className="text-white">2.4 MB</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">البيانات المستلمة</span>
                      <span className="text-white">8.7 MB</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="memory" className="space-y-4">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">استخدام الذاكرة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">الذاكرة المستخدمة</span>
                    <span className="text-white">45.2 / 64.0 MB</span>
                  </div>
                  <Progress value={70} className="h-4" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                    <div className="text-2xl font-bold text-white">28.5</div>
                    <div className="text-gray-400 text-sm">JS Heap</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <Database className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                    <div className="text-2xl font-bold text-white">12.1</div>
                    <div className="text-gray-400 text-sm">DOM Nodes</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <Activity className="h-8 w-8 mx-auto mb-2 text-green-400" />
                    <div className="text-2xl font-bold text-white">4.6</div>
                    <div className="text-gray-400 text-sm">Event Listeners</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceMonitor;
