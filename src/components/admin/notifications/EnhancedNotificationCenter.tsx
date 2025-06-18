import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Send, MessageSquare, Mail, Smartphone, Clock, CheckCircle, XCircle, Trash2, Check } from 'lucide-react';
import { useSmartNotifications } from '@/hooks/useSmartNotifications';
import AnimatedContainer from '@/components/enhanced/AnimatedContainer';

const EnhancedNotificationCenter = () => {
  const { 
    notifications, 
    showSuccess, 
    showError, 
    showWarning, 
    showInfo,
    markAsRead,
    markAllAsRead,
    clearHistory,
    getUnreadCount
  } = useSmartNotifications();

  const [newNotification, setNewNotification] = useState({
    type: 'info' as 'success' | 'error' | 'warning' | 'info',
    message: '',
    description: '',
  });

  const handleSendNotification = () => {
    if (!newNotification.message) return;

    const options = newNotification.description ? { description: newNotification.description } : undefined;

    switch (newNotification.type) {
      case 'success':
        showSuccess(newNotification.message, options);
        break;
      case 'error':
        showError(newNotification.message, options);
        break;
      case 'warning':
        showWarning(newNotification.message, options);
        break;
      case 'info':
        showInfo(newNotification.message, options);
        break;
    }

    setNewNotification({ type: 'info', message: '', description: '' });
  };

  const getStatusIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-400" />;
      case 'warning': return <Clock className="h-4 w-4 text-yellow-400" />;
      case 'info': return <Bell className="h-4 w-4 text-blue-400" />;
      default: return <Bell className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-600';
      case 'error': return 'bg-red-600';
      case 'warning': return 'bg-yellow-600';
      case 'info': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit'
    }).format(date);
  };

  return (
    <AnimatedContainer type="slide">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="relative">
              <Bell className="h-8 w-8 text-purple-400" />
              {getUnreadCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-red-600 text-xs">
                  {getUnreadCount()}
                </Badge>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">مركز الإشعارات المحسن</h2>
              <p className="text-gray-400">إدارة وإرسال الإشعارات الذكية المتطورة</p>
              <p className="text-sm text-purple-400">طور بواسطة محمد سليم</p>
            </div>
          </div>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <Button 
              onClick={markAllAsRead}
              variant="outline"
              className="border-purple-500/50 text-purple-400"
              disabled={getUnreadCount() === 0}
            >
              <Check className="h-4 w-4 ml-2" />
              قرأت الكل
            </Button>
            <Button 
              onClick={clearHistory}
              variant="outline"
              className="border-red-500/50 text-red-400"
            >
              <Trash2 className="h-4 w-4 ml-2" />
              مسح السجل
            </Button>
          </div>
        </div>

        <Tabs defaultValue="send" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
            <TabsTrigger value="send" className="data-[state=active]:bg-purple-600">
              <Send className="h-4 w-4 ml-2" />
              إرسال إشعار
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-purple-600">
              <Bell className="h-4 w-4 ml-2" />
              سجل الإشعارات ({notifications.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="send" className="mt-6">
            <Card className="bg-slate-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">إرسال إشعار جديد</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">نوع الإشعار</label>
                  <Select 
                    value={newNotification.type} 
                    onValueChange={(value: any) => setNewNotification(prev => ({ ...prev, type: value }))}
                  >
                    <SelectTrigger className="bg-slate-700 border-gray-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-gray-600">
                      <SelectItem value="info">معلومات</SelectItem>
                      <SelectItem value="success">نجح</SelectItem>
                      <SelectItem value="warning">تحذير</SelectItem>
                      <SelectItem value="error">خطأ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">رسالة الإشعار</label>
                  <Input
                    value={newNotification.message}
                    onChange={(e) => setNewNotification(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="اكتب رسالة الإشعار..."
                    className="bg-slate-700 border-gray-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">وصف إضافي (اختياري)</label>
                  <Textarea
                    value={newNotification.description}
                    onChange={(e) => setNewNotification(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="وصف تفصيلي للإشعار..."
                    className="bg-slate-700 border-gray-600"
                  />
                </div>

                <Button 
                  onClick={handleSendNotification}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={!newNotification.message}
                >
                  <Send className="h-4 w-4 ml-2" />
                  إرسال الإشعار
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card className="bg-slate-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  سجل الإشعارات
                  <Badge className="bg-purple-600">
                    {getUnreadCount()} غير مقروء
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {notifications.length === 0 ? (
                  <div className="text-center py-8">
                    <Bell className="h-12 w-12 mx-auto mb-4 text-gray-400 opacity-50" />
                    <p className="text-gray-400">لا توجد إشعارات في السجل</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                          notification.read 
                            ? 'bg-slate-700/50 border-gray-600' 
                            : 'bg-slate-700 border-purple-500/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3 rtl:space-x-reverse flex-1">
                          {getStatusIcon(notification.type)}
                          <div className="flex-1">
                            <p className={`font-medium ${notification.read ? 'text-gray-300' : 'text-white'}`}>
                              {notification.message}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {formatTime(notification.timestamp)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Badge className={`${getStatusColor(notification.type)} text-white text-xs`}>
                            {notification.type === 'success' ? 'نجح' :
                             notification.type === 'error' ? 'خطأ' :
                             notification.type === 'warning' ? 'تحذير' : 'معلومات'}
                          </Badge>
                          {!notification.read && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => markAsRead(notification.id)}
                              className="h-6 w-6 p-0 text-purple-400 hover:text-purple-300"
                            >
                              <CheckCircle className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedContainer>
  );
};

export default EnhancedNotificationCenter;
