
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Settings, MessageSquare } from 'lucide-react';
import EnhancedNotificationCenter from './EnhancedNotificationCenter';
import NotificationTemplates from './NotificationTemplates';

const NotificationCenter = () => {
  const [activeTab, setActiveTab] = useState('enhanced');

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Bell className="h-8 w-8 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">مركز الإشعارات المتقدم</h2>
          <p className="text-gray-400">إدارة شاملة للإشعارات والرسائل</p>
          <p className="text-sm text-purple-400">طور بواسطة محمد سليم</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
          <TabsTrigger value="enhanced" className="data-[state=active]:bg-purple-600">
            <MessageSquare className="h-4 w-4 ml-2" />
            مركز الإشعارات المحسن
          </TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-purple-600">
            <Settings className="h-4 w-4 ml-2" />
            القوالب
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">
            <Settings className="h-4 w-4 ml-2" />
            الإعدادات
          </TabsTrigger>
        </TabsList>

        <TabsContent value="enhanced" className="mt-6">
          <EnhancedNotificationCenter />
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          <NotificationTemplates />
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <div className="text-white">إعدادات الإشعارات ستكون متاحة قريباً...</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NotificationCenter;
