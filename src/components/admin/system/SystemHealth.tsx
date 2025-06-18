
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Server, Database, Wifi, Shield, RefreshCw } from 'lucide-react';
import { useSmartNotifications } from '@/hooks/useSmartNotifications';
import AnimatedContainer from '@/components/enhanced/AnimatedContainer';

interface SystemStatus {
  server: 'online' | 'offline' | 'warning';
  database: 'connected' | 'disconnected' | 'slow';
  network: 'fast' | 'slow' | 'offline';
  security: 'secure' | 'warning' | 'critical';
  uptime: string;
  lastCheck: Date;
}

const SystemHealth = () => {
  const [status, setStatus] = useState<SystemStatus>({
    server: 'online',
    database: 'connected',
    network: 'fast',
    security: 'secure',
    uptime: '99.9%',
    lastCheck: new Date()
  });
  
  const [isChecking, setIsChecking] = useState(false);
  const { showSuccess, showWarning, showError } = useSmartNotifications();

  const checkSystemHealth = async () => {
    setIsChecking(true);
    
    try {
      // محاكاة فحص النظام
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newStatus: SystemStatus = {
        server: Math.random() > 0.1 ? 'online' : 'warning',
        database: Math.random() > 0.05 ? 'connected' : 'slow',
        network: Math.random() > 0.2 ? 'fast' : 'slow',
        security: Math.random() > 0.02 ? 'secure' : 'warning',
        uptime: (99.5 + Math.random() * 0.4).toFixed(1) + '%',
        lastCheck: new Date()
      };
      
      setStatus(newStatus);
      
      const issues = Object.entries(newStatus).filter(([key, value]) => 
        key !== 'uptime' && key !== 'lastCheck' && 
        (value === 'warning' || value === 'slow' || value === 'critical')
      );
      
      if (issues.length === 0) {
        showSuccess('النظام يعمل بكفاءة عالية', {
          description: 'جميع المكونات تعمل بشكل طبيعي'
        });
      } else {
        showWarning(`تم اكتشاف ${issues.length} مشكلة`, {
          description: 'بعض المكونات تحتاج انتباه'
        });
      }
      
    } catch (error) {
      showError('فشل في فحص النظام', {
        description: 'تعذر الاتصال بخدمات النظام'
      });
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkSystemHealth();
    const interval = setInterval(checkSystemHealth, 300000); // كل 5 دقائق
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
      case 'connected':
      case 'fast':
      case 'secure':
        return 'bg-green-600';
      case 'warning':
      case 'slow':
        return 'bg-yellow-600';
      case 'offline':
      case 'disconnected':
      case 'critical':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getStatusText = (key: string, value: string) => {
    const translations: Record<string, Record<string, string>> = {
      server: { online: 'متصل', offline: 'غير متصل', warning: 'تحذير' },
      database: { connected: 'متصل', disconnected: 'منقطع', slow: 'بطيء' },
      network: { fast: 'سريع', slow: 'بطيء', offline: 'منقطع' },
      security: { secure: 'آمن', warning: 'تحذير', critical: 'خطير' }
    };
    return translations[key]?.[value] || value;
  };

  return (
    <AnimatedContainer type="fade">
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-green-400" />
            حالة النظام
          </CardTitle>
          <Button
            onClick={checkSystemHealth}
            disabled={isChecking}
            size="sm"
            variant="outline"
            className="border-purple-500/50"
          >
            <RefreshCw className={`h-4 w-4 ${isChecking ? 'animate-spin' : ''}`} />
            فحص
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">الخادم</span>
              </div>
              <Badge className={getStatusColor(status.server)}>
                {getStatusText('server', status.server)}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">قاعدة البيانات</span>
              </div>
              <Badge className={getStatusColor(status.database)}>
                {getStatusText('database', status.database)}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300">الشبكة</span>
              </div>
              <Badge className={getStatusColor(status.network)}>
                {getStatusText('network', status.network)}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">الأمان</span>
              </div>
              <Badge className={getStatusColor(status.security)}>
                {getStatusText('security', status.security)}
              </Badge>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">وقت التشغيل:</span>
              <span className="text-green-400 font-semibold">{status.uptime}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-400">آخر فحص:</span>
              <span className="text-gray-300">
                {status.lastCheck.toLocaleTimeString('ar-SA')}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedContainer>
  );
};

export default SystemHealth;
