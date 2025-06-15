
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
  SidebarFooter
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Palette,
  FileText,
  Settings,
  Image,
  Eye,
  Building,
  Shield,
  Lock,
  Users
} from 'lucide-react';

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  {
    id: 'dashboard',
    title: 'لوحة التحكم',
    icon: LayoutDashboard,
    description: 'الصفحة الرئيسية'
  },
  {
    id: 'theme',
    title: 'محرر الألوان',
    icon: Palette,
    description: 'تخصيص الألوان'
  },
  {
    id: 'content',
    title: 'محرر المحتوى',
    icon: FileText,
    description: 'تعديل النصوص'
  },
  {
    id: 'services',
    title: 'إدارة الخدمات',
    icon: Settings,
    description: 'الخدمات المتاحة'
  },
  {
    id: 'gallery',
    title: 'إدارة المعرض',
    icon: Image,
    description: 'صور المشاريع'
  },
  {
    id: 'company',
    title: 'بيانات الشركة',
    icon: Building,
    description: 'معلومات الاتصال'
  },
  {
    id: 'security',
    title: 'إعدادات الحماية',
    icon: Lock,
    description: 'أمان النظام'
  },
  {
    id: 'preview',
    title: 'المعاينة المباشرة',
    icon: Eye,
    description: 'عرض التغييرات'
  }
];

const AdminSidebar = ({ activeSection, setActiveSection }: AdminSidebarProps) => {
  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-purple-500/30 bg-slate-900/95 backdrop-blur-sm">
      <SidebarHeader className="p-4 border-b border-purple-500/30">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex-shrink-0 p-2 bg-purple-600/20 rounded-lg">
            <Shield className="h-6 w-6 text-purple-400" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-white truncate">لوحة الإدارة</h2>
            <p className="text-sm text-gray-400 truncate">ورشة المعز للليزر</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-300 text-xs font-medium mb-2 px-2">
            إدارة الموقع
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.id)}
                    isActive={activeSection === item.id}
                    className={`
                      w-full text-white hover:bg-purple-600/20 transition-all duration-200 rounded-lg
                      ${activeSection === item.id 
                        ? 'bg-purple-600/40 border border-purple-500/50 shadow-lg text-purple-100' 
                        : 'hover:bg-purple-600/10'
                      }
                      group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2
                    `}
                    tooltip={item.title}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <div className="flex flex-col items-start min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
                      <span className="font-medium text-sm truncate">{item.title}</span>
                      <span className="text-xs text-gray-400 truncate">{item.description}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-3 border-t border-purple-500/30">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-3 rounded-lg border border-purple-500/30">
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
            <Shield className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <p className="text-white text-sm font-medium truncate group-data-[collapsible=icon]:hidden">
              الإدارة المتقدمة
            </p>
          </div>
          <p className="text-purple-200 text-xs truncate group-data-[collapsible=icon]:hidden">
            تحكم كامل بدون كود
          </p>
          <div className="mt-2 text-xs text-gray-400 group-data-[collapsible=icon]:hidden">
            نسخة 1.0.0
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
