
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Send, MessageSquare, Mail, Smartphone, Clock, CheckCircle, XCircle } from 'lucide-react';
import NotificationTemplates from './NotificationTemplates';

interface NotificationHistory {
  id: string;
  type: 'whatsapp' | 'email' | 'sms';
  recipient: string;
  subject?: string;
  content: string;
  status: 'sent' | 'failed' | 'pending';
  timestamp: string;
}

const SmartNotificationCenter = () => {
  const [notifications] = useState<NotificationHistory[]>([
    {
      id: '1',
      type: 'whatsapp',
      recipient: '+966501234567',
      content: 'مرحباً أحمد! تم تأكيد موعدك غداً الساعة 2 ظهراً.',
      status: 'sent',
      timestamp: '2024-06-17 10:30'
    },
    {
      id: '2',
      type: 'email',
      recipient: 'customer@example.com',
      subject: 'فاتورة رقم #1234',
      content: 'تم إرسال فاتورتك بنجاح. المبلغ الإجمالي: 500 ريال.',
      status: 'sent',
      timestamp: '2024-06-17 09:15'
    },
    {
      id: '3',
      type: 'sms',
      recipient: '+966509876543',
      content: 'تذكير: موعدك اليوم الساعة 4 عصراً.',
      status: 'failed',
      timestamp: '2024-06-17 08:00'
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'failed': return <XCircle className="h-4 w-4 text-red-400" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-400" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-green-600';
      case 'failed': return 'bg-red-600';
      case 'pending': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'whatsapp': return <MessageSquare className="h-4 w-4 text-green-400" />;
      case 'email': return <Mail className="h-4 w-4 text-blue-400" />;
      case 'sms': return <Smartphone className="h-4 w-4 text-purple-400" />;
      default: return null;
    }
  };

  // إحصائيات سريعة
  const stats = {
    total: notifications.length,
    sent: notifications.filter(n => n.status === 'sent').length,
    failed: notifications.filter(n => n.status === 'failed').length,
    pending: notifications.filter(n => n.status === 'pending').length
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Bell className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">مركز الإشعارات الذكي</h2>
            <p className="text-gray-400">إدارة وإرسال الإشعارات المتعددة</p>
          </div>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Send className="h-4 w-4 ml-2" />
          إرسال إشعار جديد
        </Button>
      </div>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{stats.total}</div>
            <div className="text-gray-300">إجمالي الإشعارات</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.sent}</div>
            <div className="text-gray-300">تم الإرسال</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-600/20 to-pink-600/20 border-red-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">{stats.failed}</div>
            <div className="text-gray-300">فشل الإرسال</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.pending}</div>
            <div className="text-gray-300">في الانتظار</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
          <TabsTrigger value="history" className="data-[state=active]:bg-purple-600">
            سجل الإشعارات
          </TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-purple-600">
            القوالب
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">
            الإعدادات
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">سجل الإشعارات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4 rtl:space-x-reverse flex-1">
                      {getTypeIcon(notification.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-1">
                          <span className="text-white font-medium">{notification.recipient}</span>
                          {notification.subject && (
                            <span className="text-gray-400 text-sm">- {notification.subject}</span>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm">{notification.content}</p>
                        <p className="text-gray-500 text-xs mt-1">{notification.timestamp}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      {getStatusIcon(notification.status)}
                      <Badge className={`${getStatusColor(notification.status)} text-white`}>
                        {notification.status === 'sent' ? 'تم الإرسال' :
                         notification.status === 'failed' ? 'فشل' : 'في الانتظار'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          <NotificationTemplates />
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">إعدادات الإشعارات</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">إعدادات الإشعارات ستكون متاحة قريباً...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SmartNotificationCenter;
