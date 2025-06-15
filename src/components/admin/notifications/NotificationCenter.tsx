
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Bell, Send, MessageSquare, Mail, Phone, AlertCircle, CheckCircle, Users } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  recipient: 'all' | 'customers' | 'employees';
  channel: 'email' | 'sms' | 'push' | 'whatsapp';
  status: 'sent' | 'pending' | 'failed';
  sentAt: string;
  readCount: number;
  totalRecipients: number;
}

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'عرض خاص على قطع الليزر',
      message: 'خصم 20% على جميع خدمات قطع الليزر لهذا الأسبوع فقط!',
      type: 'info',
      recipient: 'customers',
      channel: 'whatsapp',
      status: 'sent',
      sentAt: '2024-06-15 10:30',
      readCount: 45,
      totalRecipients: 67
    },
    {
      id: '2',
      title: 'تحديث مواعيد العمل',
      message: 'تم تحديث مواعيد العمل للأسبوع القادم. يرجى مراجعة الجدول الجديد.',
      type: 'warning',
      recipient: 'employees',
      channel: 'email',
      status: 'sent',
      sentAt: '2024-06-14 14:15',
      readCount: 8,
      totalRecipients: 12
    }
  ]);

  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    type: 'info' as const,
    recipient: 'all' as const,
    channel: 'whatsapp' as const
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'info': return 'bg-blue-500';
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'info': return <Bell className="h-4 w-4" />;
      case 'success': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertCircle className="h-4 w-4" />;
      case 'error': return <AlertCircle className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'email': return <Mail className="h-4 w-4" />;
      case 'sms': return <MessageSquare className="h-4 w-4" />;
      case 'whatsapp': return <Phone className="h-4 w-4" />;
      case 'push': return <Bell className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const sendNotification = () => {
    if (!newNotification.title || !newNotification.message) return;

    const notification: Notification = {
      id: Date.now().toString(),
      title: newNotification.title,
      message: newNotification.message,
      type: newNotification.type,
      recipient: newNotification.recipient,
      channel: newNotification.channel,
      status: 'sent',
      sentAt: new Date().toLocaleString('ar-SA'),
      readCount: 0,
      totalRecipients: newNotification.recipient === 'all' ? 79 : 
                      newNotification.recipient === 'customers' ? 67 : 12
    };

    setNotifications(prev => [notification, ...prev]);
    setNewNotification({
      title: '',
      message: '',
      type: 'info',
      recipient: 'all',
      channel: 'whatsapp'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Bell className="h-8 w-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">مركز الإشعارات</h2>
            <p className="text-gray-400">إرسال وإدارة الإشعارات والرسائل</p>
          </div>
        </div>
      </div>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {notifications.length}
            </div>
            <div className="text-gray-300">إجمالي الإشعارات</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {notifications.filter(n => n.status === 'sent').length}
            </div>
            <div className="text-gray-300">تم الإرسال</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {notifications.reduce((sum, n) => sum + n.readCount, 0)}
            </div>
            <div className="text-gray-300">مجموع القراءات</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              79
            </div>
            <div className="text-gray-300">إجمالي المستقبلين</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* نموذج إرسال إشعار جديد */}
        <Card className="bg-slate-800/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2 rtl:space-x-reverse">
              <Send className="h-5 w-5 text-green-400" />
              <span>إرسال إشعار جديد</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">العنوان</label>
              <Input
                value={newNotification.title}
                onChange={(e) => setNewNotification(prev => ({ ...prev, title: e.target.value }))}
                placeholder="عنوان الإشعار..."
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">الرسالة</label>
              <Textarea
                value={newNotification.message}
                onChange={(e) => setNewNotification(prev => ({ ...prev, message: e.target.value }))}
                placeholder="نص الرسالة..."
                rows={4}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">النوع</label>
                <select
                  value={newNotification.type}
                  onChange={(e) => setNewNotification(prev => ({ ...prev, type: e.target.value as any }))}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                >
                  <option value="info">معلومات</option>
                  <option value="success">نجاح</option>
                  <option value="warning">تحذير</option>
                  <option value="error">خطأ</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">المستقبل</label>
                <select
                  value={newNotification.recipient}
                  onChange={(e) => setNewNotification(prev => ({ ...prev, recipient: e.target.value as any }))}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                >
                  <option value="all">الجميع</option>
                  <option value="customers">العملاء</option>
                  <option value="employees">الموظفين</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">وسيلة الإرسال</label>
              <select
                value={newNotification.channel}
                onChange={(e) => setNewNotification(prev => ({ ...prev, channel: e.target.value as any }))}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
              >
                <option value="whatsapp">واتساب</option>
                <option value="email">البريد الإلكتروني</option>
                <option value="sms">رسائل نصية</option>
                <option value="push">إشعارات فورية</option>
              </select>
            </div>

            <Button 
              onClick={sendNotification}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={!newNotification.title || !newNotification.message}
            >
              <Send className="h-4 w-4 ml-2" />
              إرسال الإشعار
            </Button>
          </CardContent>
        </Card>

        {/* سجل الإشعارات */}
        <Card className="bg-slate-800/50 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2 rtl:space-x-reverse">
              <Bell className="h-5 w-5 text-blue-400" />
              <span>سجل الإشعارات</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 hover:bg-slate-700/70 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Badge className={`${getTypeColor(notification.type)} text-white flex items-center space-x-1 rtl:space-x-reverse`}>
                        {getTypeIcon(notification.type)}
                        <span>{notification.type === 'info' ? 'معلومات' : 
                               notification.type === 'success' ? 'نجاح' : 
                               notification.type === 'warning' ? 'تحذير' : 'خطأ'}</span>
                      </Badge>
                      <Badge variant="outline" className="text-gray-300 border-gray-500">
                        {getChannelIcon(notification.channel)}
                        <span className="mr-1">
                          {notification.channel === 'whatsapp' ? 'واتساب' :
                           notification.channel === 'email' ? 'إيميل' :
                           notification.channel === 'sms' ? 'SMS' : 'فوري'}
                        </span>
                      </Badge>
                    </div>
                    <span className="text-gray-400 text-xs">{notification.sentAt}</span>
                  </div>

                  <h4 className="text-white font-medium mb-2">{notification.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{notification.message}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-400">
                      <span>إلى: {notification.recipient === 'all' ? 'الجميع' : 
                                  notification.recipient === 'customers' ? 'العملاء' : 'الموظفين'}</span>
                      <span>•</span>
                      <span>{notification.readCount}/{notification.totalRecipients} قرأوا</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${notification.status === 'sent' ? 'text-green-400 border-green-400' : 'text-yellow-400 border-yellow-400'}`}
                    >
                      {notification.status === 'sent' ? 'تم الإرسال' : 'في الانتظار'}
                    </Badge>
                  </div>

                  {/* شريط التقدم للقراءة */}
                  <div className="mt-3">
                    <div className="w-full bg-slate-600 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${(notification.readCount / notification.totalRecipients) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotificationCenter;
