
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAdminPermissions } from '@/hooks/useAdminPermissions';
import CommandPalette from './CommandPalette';
import { 
  Shield, 
  Users, 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Zap,
  Command,
  Settings,
  Bell,
  BarChart3
} from 'lucide-react';

interface AdminDashboardProps {
  onSectionChange: (section: string) => void;
}

const AdminDashboard = ({ onSectionChange }: AdminDashboardProps) => {
  const { currentUser, canAccess, canEdit, loginAsAdmin, logout, isLoggedIn } = useAdminPermissions();
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [systemStatus] = useState({
    uptime: '99.9%',
    activeUsers: 12,
    totalRequests: 1284,
    errorRate: 0.1
  });

  useEffect(() => {
    if (!isLoggedIn) {
      loginAsAdmin('super_admin');
    }
  }, [isLoggedIn, loginAsAdmin]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setShowCommandPalette(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isLoggedIn || !currentUser) {
    return (
      <div className="p-6 max-w-md mx-auto">
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white text-center">تسجيل دخول المدير</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={() => loginAsAdmin('super_admin')}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <Shield className="h-4 w-4 mr-2" />
              دخول كمدير عام
            </Button>
            <Button 
              onClick={() => loginAsAdmin('content_manager')}
              variant="outline"
              className="w-full border-blue-500/50 text-blue-400"
            >
              دخول كمدير محتوى
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* رأس لوحة التحكم */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            مرحباً، {currentUser.name}
          </h1>
          <p className="text-gray-400">
            لوحة التحكم المطورة - {new Date().toLocaleDateString('ar-EG')}
          </p>
        </div>
        
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Button
            onClick={() => setShowCommandPalette(true)}
            variant="outline"
            className="border-purple-500/50 text-purple-400 hover:bg-purple-600/20"
          >
            <Command className="h-4 w-4 mr-2" />
            أوامر سريعة
            <Badge variant="outline" className="mr-2 text-xs">Ctrl+K</Badge>
          </Button>
          
          <Badge className="bg-green-600/20 text-green-400 border-green-500/50">
            {currentUser.role === 'super_admin' ? 'مدير عام' : 'مدير'}
          </Badge>
          
          <Button
            onClick={logout}
            variant="outline"
            size="sm"
            className="border-red-500/50 text-red-400 hover:bg-red-600/20"
          >
            تسجيل خروج
          </Button>
        </div>
      </div>

      {/* إحصائيات النظام */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-400 text-sm font-medium">وقت التشغيل</p>
                <p className="text-2xl font-bold text-white">{systemStatus.uptime}</p>
              </div>
              <Activity className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-400 text-sm font-medium">المستخدمين النشطين</p>
                <p className="text-2xl font-bold text-white">{systemStatus.activeUsers}</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-400 text-sm font-medium">إجمالي الطلبات</p>
                <p className="text-2xl font-bold text-white">{systemStatus.totalRequests}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-400 text-sm font-medium">معدل الأخطاء</p>
                <p className="text-2xl font-bold text-white">{systemStatus.errorRate}%</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* الإجراءات السريعة */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Zap className="h-5 w-5 mr-2 text-purple-400" />
            الإجراءات السريعة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {canAccess('theme') && (
              <Button
                onClick={() => onSectionChange('theme')}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center border-purple-500/30 hover:bg-purple-600/20"
              >
                <Settings className="h-6 w-6 mb-1 text-purple-400" />
                <span className="text-xs text-white">الثيمات</span>
              </Button>
            )}
            
            {canAccess('users') && (
              <Button
                onClick={() => onSectionChange('users')}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center border-blue-500/30 hover:bg-blue-600/20"
              >
                <Users className="h-6 w-6 mb-1 text-blue-400" />
                <span className="text-xs text-white">المستخدمين</span>
              </Button>
            )}
            
            {canAccess('reports') && (
              <Button
                onClick={() => onSectionChange('reports')}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center border-green-500/30 hover:bg-green-600/20"
              >
                <BarChart3 className="h-6 w-6 mb-1 text-green-400" />
                <span className="text-xs text-white">التقارير</span>
              </Button>
            )}
            
            {canAccess('notifications') && (
              <Button
                onClick={() => onSectionChange('notifications')}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center border-yellow-500/30 hover:bg-yellow-600/20"
              >
                <Bell className="h-6 w-6 mb-1 text-yellow-400" />
                <span className="text-xs text-white">الإشعارات</span>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* آخر الأنشطة */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Clock className="h-5 w-5 mr-2 text-purple-400" />
            آخر الأنشطة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-slate-700/50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <div className="flex-1">
                <p className="text-white text-sm">تم حفظ إعدادات الثيم بنجاح</p>
                <p className="text-gray-400 text-xs">منذ 5 دقائق</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-slate-700/50 rounded-lg">
              <Users className="h-5 w-5 text-blue-400" />
              <div className="flex-1">
                <p className="text-white text-sm">تم إضافة مستخدم جديد</p>
                <p className="text-gray-400 text-xs">منذ 15 دقيقة</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-slate-700/50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-purple-400" />
              <div className="flex-1">
                <p className="text-white text-sm">تم تحديث التقرير الشهري</p>
                <p className="text-gray-400 text-xs">منذ 30 دقيقة</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
        onSectionChange={onSectionChange}
      />
    </div>
  );
};

export default AdminDashboard;
