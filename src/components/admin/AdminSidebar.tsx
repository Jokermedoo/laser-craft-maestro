
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { 
  Settings, 
  Palette, 
  FileText, 
  Wrench, 
  Image, 
  Building, 
  Shield,
  Eye,
  Users,
  BarChart3,
  Calendar,
  DollarSign,
  Bell,
  Home
} from 'lucide-react';

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const AdminSidebar = ({ activeSection, setActiveSection }: AdminSidebarProps) => {
  const menuItems = [
    {
      group: 'الرئيسية',
      items: [
        { id: 'dashboard', title: 'لوحة التحكم', icon: Home },
        { id: 'preview', title: 'معاينة مباشرة', icon: Eye },
      ]
    },
    {
      group: 'إدارة النظام',
      items: [
        { id: 'users', title: 'إدارة المستخدمين', icon: Users },
        { id: 'bookings', title: 'نظام الحجوزات', icon: Calendar },
        { id: 'finance', title: 'لوحة التحكم المالية', icon: DollarSign },
        { id: 'reports', title: 'التقارير والتحليلات', icon: BarChart3 },
        { id: 'notifications', title: 'مركز الإشعارات', icon: Bell },
      ]
    },
    {
      group: 'المحتوى والتصميم',
      items: [
        { id: 'theme', title: 'محرر الثيمات', icon: Palette },
        { id: 'content', title: 'إدارة المحتوى', icon: FileText },
        { id: 'services', title: 'إدارة الخدمات', icon: Wrench },
        { id: 'gallery', title: 'إدارة المعرض', icon: Image },
      ]
    },
    {
      group: 'الإعدادات',
      items: [
        { id: 'company', title: 'بيانات الشركة', icon: Building },
        { id: 'security', title: 'إعدادات الحماية', icon: Shield },
        { id: 'settings', title: 'إعدادات عامة', icon: Settings },
      ]
    }
  ];

  return (
    <Sidebar className="border-r border-purple-500/30 bg-slate-900/95 backdrop-blur-sm">
      <SidebarHeader className="p-6 border-b border-purple-500/30">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">لوحة التحكم</h2>
            <p className="text-sm text-gray-400">ورشة المعز للليزر</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        {menuItems.map((group, groupIndex) => (
          <SidebarGroup key={groupIndex}>
            <SidebarGroupLabel className="text-purple-300 font-semibold text-sm mb-2">
              {group.group}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full justify-start space-x-3 rtl:space-x-reverse py-3 px-3 rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                          : 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
                      }`}
                    >
                      <item.icon className={`h-5 w-5 ${
                        activeSection === item.id ? 'text-white' : 'text-gray-400'
                      }`} />
                      <span className="font-medium">{item.title}</span>
                      {(item.id === 'users' || item.id === 'bookings' || item.id === 'finance' || item.id === 'reports' || item.id === 'notifications') && (
                        <span className="mr-auto bg-green-500 text-xs px-2 py-0.5 rounded-full text-black font-bold">
                          جديد
                        </span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-purple-500/30">
        <div className="text-center">
          <div className="text-xs text-gray-400 mb-2">الإصدار 2.0 - محدث</div>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">النظام يعمل بكفاءة</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
