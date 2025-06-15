
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import {
  Lock,
  Shield,
  Key,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Users,
  Clock
} from 'lucide-react';

const SecuritySettings = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    adminPassword: '',
    enableTwoFactor: false,
    sessionTimeout: 30,
    allowRemoteAccess: true,
    enableLoginLogs: true,
    maxLoginAttempts: 3,
    lockoutDuration: 15
  });

  const [loginLogs] = useState([
    {
      id: 1,
      time: '2024-01-15 14:30:25',
      ip: '192.168.1.100',
      status: 'نجح',
      location: 'الأقصر، مصر'
    },
    {
      id: 2,
      time: '2024-01-15 12:15:10',
      ip: '192.168.1.105',
      status: 'فشل',
      location: 'غير معروف'
    },
    {
      id: 3,
      time: '2024-01-14 16:45:33',
      ip: '192.168.1.100',
      status: 'نجح',
      location: 'الأقصر، مصر'
    }
  ]);

  const handleSave = () => {
    localStorage.setItem('adminSecuritySettings', JSON.stringify(settings));
    toast({
      title: "تم حفظ إعدادات الحماية",
      description: "تم تحديث جميع إعدادات الأمان بنجاح",
    });
  };

  const generateNewPassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setSettings(prev => ({ ...prev, adminPassword: password }));
    toast({
      title: "تم إنشاء كلمة مرور جديدة",
      description: "تأكد من حفظها في مكان آمن",
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4 flex items-center">
          <Lock className="h-8 w-8 mr-3 text-purple-400" />
          إعدادات الحماية والأمان
        </h1>
        <p className="text-gray-300">إدارة أمان لوحة التحكم وحماية البيانات</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* إعدادات كلمة المرور */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Key className="h-5 w-5 mr-2 text-purple-400" />
              كلمة مرور الإدارة
            </CardTitle>
            <CardDescription className="text-gray-400">
              تغيير كلمة مرور الدخول للوحة الإدارة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">كلمة المرور الحالية</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={settings.adminPassword}
                  onChange={(e) => setSettings(prev => ({ ...prev, adminPassword: e.target.value }))}
                  className="bg-slate-700 border-purple-500/30 text-white pr-10"
                  placeholder="أدخل كلمة المرور الجديدة"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>
            <Button
              onClick={generateNewPassword}
              variant="outline"
              className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-600/20"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              إنشاء كلمة مرور عشوائية
            </Button>
          </CardContent>
        </Card>

        {/* إعدادات الأمان المتقدمة */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Shield className="h-5 w-5 mr-2 text-purple-400" />
              إعدادات الأمان المتقدمة
            </CardTitle>
            <CardDescription className="text-gray-400">
              تفعيل الحماية الإضافية للنظام
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-gray-300">التحقق بخطوتين</Label>
                <p className="text-sm text-gray-400">حماية إضافية للدخول</p>
              </div>
              <Switch
                checked={settings.enableTwoFactor}
                onCheckedChange={(checked) => setSettings(prev => ({ ...prev, enableTwoFactor: checked }))}
              />
            </div>

            <Separator className="bg-purple-500/30" />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-gray-300">السماح بالدخول عن بعد</Label>
                <p className="text-sm text-gray-400">الدخول من خارج الشبكة المحلية</p>
              </div>
              <Switch
                checked={settings.allowRemoteAccess}
                onCheckedChange={(checked) => setSettings(prev => ({ ...prev, allowRemoteAccess: checked }))}
              />
            </div>

            <Separator className="bg-purple-500/30" />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-gray-300">تسجيل محاولات الدخول</Label>
                <p className="text-sm text-gray-400">حفظ سجل جميع المحاولات</p>
              </div>
              <Switch
                checked={settings.enableLoginLogs}
                onCheckedChange={(checked) => setSettings(prev => ({ ...prev, enableLoginLogs: checked }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout" className="text-gray-300">مهلة الجلسة (دقيقة)</Label>
                <Input
                  id="sessionTimeout"
                  type="number"
                  value={settings.sessionTimeout}
                  onChange={(e) => setSettings(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))}
                  className="bg-slate-700 border-purple-500/30 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxAttempts" className="text-gray-300">الحد الأقصى للمحاولات</Label>
                <Input
                  id="maxAttempts"
                  type="number"
                  value={settings.maxLoginAttempts}
                  onChange={(e) => setSettings(prev => ({ ...prev, maxLoginAttempts: parseInt(e.target.value) }))}
                  className="bg-slate-700 border-purple-500/30 text-white"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* سجل الدخول */}
        <Card className="bg-slate-800/50 border-purple-500/30 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Users className="h-5 w-5 mr-2 text-purple-400" />
              سجل محاولات الدخول
            </CardTitle>
            <CardDescription className="text-gray-400">
              آخر محاولات الدخول للوحة الإدارة
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {loginLogs.map((log) => (
                <div
                  key={log.id}
                  className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-purple-500/20"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      {log.status === 'نجح' ? (
                        <CheckCircle className="h-6 w-6 text-green-400" />
                      ) : (
                        <AlertTriangle className="h-6 w-6 text-red-400" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-white text-sm">{log.time}</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        IP: {log.ip} • {log.location}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={log.status === 'نجح' ? 'default' : 'destructive'}
                    className={log.status === 'نجح' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}
                  >
                    {log.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* أزرار الحفظ */}
      <div className="mt-8 flex justify-end space-x-4 rtl:space-x-reverse">
        <Button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Save className="h-4 w-4 mr-2" />
          حفظ إعدادات الحماية
        </Button>
      </div>
    </div>
  );
};

export default SecuritySettings;
