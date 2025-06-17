
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Globe,
  User,
  Activity,
  Wifi
} from 'lucide-react';

interface SecurityLog {
  id: string;
  type: 'login' | 'failed_login' | 'data_access' | 'config_change' | 'suspicious';
  user: string;
  ip: string;
  location: string;
  timestamp: string;
  details: string;
  risk: 'low' | 'medium' | 'high';
}

interface SecurityRule {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'access' | 'data' | 'network' | 'authentication';
  lastTriggered?: string;
}

const AdvancedSecurity = () => {
  const [securityLogs] = useState<SecurityLog[]>([
    {
      id: '1',
      type: 'login',
      user: 'admin@almoez.com',
      ip: '192.168.1.100',
      location: 'الرياض، السعودية',
      timestamp: '2024-06-17 14:30:25',
      details: 'تسجيل دخول ناجح من لوحة التحكم',
      risk: 'low'
    },
    {
      id: '2',
      type: 'failed_login',
      user: 'unknown@test.com',
      ip: '45.123.87.45',
      location: 'غير معروف',
      timestamp: '2024-06-17 13:45:12',
      details: 'محاولة دخول فاشلة - كلمة مرور خاطئة',
      risk: 'medium'
    },
    {
      id: '3',
      type: 'suspicious',
      user: 'guest',
      ip: '103.45.67.89',
      location: 'روسيا',
      timestamp: '2024-06-17 12:20:33',
      details: 'محاولات متكررة للوصول للبيانات الحساسة',
      risk: 'high'
    }
  ]);

  const [securityRules] = useState<SecurityRule[]>([
    {
      id: '1',
      name: 'حماية ضد القوة الغاشمة',
      description: 'منع محاولات الدخول المتكررة من نفس IP',
      enabled: true,
      category: 'authentication',
      lastTriggered: '2024-06-17 13:45:12'
    },
    {
      id: '2',
      name: 'مراقبة الوصول للملفات الحساسة',
      description: 'تنبيه عند محاولة الوصول لملفات النظام',
      enabled: true,
      category: 'data'
    },
    {
      id: '3',
      name: 'كشف عناوين IP المشبوهة',
      description: 'فحص عناوين IP ضد قوائم التهديدات',
      enabled: true,
      category: 'network'
    },
    {
      id: '4',
      name: 'التحقق الثنائي الإجباري',
      description: 'طلب التحقق الثنائي لجميع المستخدمين',
      enabled: false,
      category: 'authentication'
    }
  ]);

  const [securityStatus] = useState({
    threat_level: 'medium',
    active_threats: 2,
    blocked_attempts: 15,
    secure_connections: 98.5
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'login': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'failed_login': return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'data_access': return <Eye className="h-4 w-4 text-blue-400" />;
      case 'config_change': return <Activity className="h-4 w-4 text-purple-400" />;
      case 'suspicious': return <AlertTriangle className="h-4 w-4 text-red-400" />;
      default: return null;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-600';
      case 'medium': return 'bg-yellow-600';
      case 'high': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'access': return <Lock className="h-4 w-4" />;
      case 'data': return <Shield className="h-4 w-4" />;
      case 'network': return <Wifi className="h-4 w-4" />;
      case 'authentication': return <User className="h-4 w-4" />;
      default: return null;
    }
  };

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Shield className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">نظام الأمان المتقدم</h2>
            <p className="text-gray-400">مراقبة وحماية شاملة للنظام</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Badge className={`${getRiskColor(securityStatus.threat_level)} text-white`}>
            مستوى التهديد: {securityStatus.threat_level === 'low' ? 'منخفض' : 
                               securityStatus.threat_level === 'medium' ? 'متوسط' : 'عالي'}
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
          <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
            نظرة عامة
          </TabsTrigger>
          <TabsTrigger value="logs" className="data-[state=active]:bg-purple-600">
            سجل الأمان
          </TabsTrigger>
          <TabsTrigger value="rules" className="data-[state=active]:bg-purple-600">
            قواعد الحماية
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="data-[state=active]:bg-purple-600">
            المراقبة المباشرة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          {/* إحصائيات الأمان */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{securityStatus.active_threats}</div>
                <div className="text-gray-300">تهديدات نشطة</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{securityStatus.blocked_attempts}</div>
                <div className="text-gray-300">محاولات محجوبة</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{securityStatus.secure_connections}%</div>
                <div className="text-gray-300">اتصالات آمنة</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold ${getThreatLevelColor(securityStatus.threat_level)} mb-2`}>
                  {securityStatus.threat_level === 'low' ? 'آمن' : 
                   securityStatus.threat_level === 'medium' ? 'تحذير' : 'خطر'}
                </div>
                <div className="text-gray-300">حالة النظام</div>
              </CardContent>
            </Card>
          </div>

          {/* آخر التنبيهات */}
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
                آخر التنبيهات الأمنية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {securityLogs.filter(log => log.risk !== 'low').slice(0, 3).map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      {getTypeIcon(log.type)}
                      <div>
                        <p className="text-white text-sm">{log.details}</p>
                        <p className="text-gray-400 text-xs">من {log.ip} • {log.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Badge className={`${getRiskColor(log.risk)} text-white text-xs`}>
                        {log.risk === 'high' ? 'عالي' : log.risk === 'medium' ? 'متوسط' : 'منخفض'}
                      </Badge>
                      <span className="text-gray-500 text-xs">{log.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">سجل الأحداث الأمنية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityLogs.map((log) => (
                  <div key={log.id} className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        {getTypeIcon(log.type)}
                        <span className="text-white font-medium">{log.user}</span>
                        <Badge className={`${getRiskColor(log.risk)} text-white text-xs`}>
                          {log.risk === 'high' ? 'خطر عالي' : log.risk === 'medium' ? 'خطر متوسط' : 'خطر منخفض'}
                        </Badge>
                      </div>
                      <span className="text-gray-400 text-sm">{log.timestamp}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-2">{log.details}</p>
                    
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-500 text-sm">
                      <span className="flex items-center">
                        <Globe className="h-3 w-3 mr-1" />
                        {log.ip}
                      </span>
                      <span>{log.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">قواعد الحماية النشطة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityRules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      {getCategoryIcon(rule.category)}
                      <div>
                        <h3 className="text-white font-medium">{rule.name}</h3>
                        <p className="text-gray-400 text-sm">{rule.description}</p>
                        {rule.lastTriggered && (
                          <p className="text-gray-500 text-xs mt-1">
                            آخر تفعيل: {rule.lastTriggered}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Badge className={rule.enabled ? 'bg-green-600' : 'bg-gray-600'}>
                        {rule.enabled ? 'مفعل' : 'معطل'}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-blue-400 border-blue-400"
                      >
                        تعديل
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                المراقبة المباشرة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-400">
                أدوات المراقبة المباشرة للأمان ستكون متاحة قريباً...
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvancedSecurity;
