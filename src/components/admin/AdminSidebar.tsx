
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
  Shield
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
    id: 'preview',
    title: 'المعاينة المباشرة',
    icon: Eye,
    description: 'عرض التغييرات'
  }
];

const AdminSidebar = ({ activeSection, setActiveSection }: AdminSidebarProps) => {
  return (
    <Sidebar className="border-r border-purple-500/30 bg-slate-900/50 backdrop-blur-sm">
      <SidebarHeader className="p-6 border-b border-purple-500/30">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Shield className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-lg font-bold text-white">لوحة الإدارة</h2>
            <p className="text-sm text-gray-400">ورشة المعز للليزر</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-300 text-sm font-medium mb-3">
            إدارة الموقع
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.id)}
                    isActive={activeSection === item.id}
                    className={`
                      w-full text-white hover:bg-purple-600/20 transition-all duration-200 rounded-lg p-3
                      ${activeSection === item.id 
                        ? 'bg-purple-600/40 border border-purple-500/50 shadow-lg' 
                        : 'hover:bg-purple-600/10'
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-gray-400">{item.description}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-purple-500/30">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-4 rounded-lg border border-purple-500/30">
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
            <Shield className="h-5 w-5 text-purple-400" />
            <p className="text-white text-sm font-medium">الإدارة المتقدمة</p>
          </div>
          <p className="text-purple-200 text-xs">تحكم كامل بدون كود</p>
          <div className="mt-2 text-xs text-gray-400">
            نسخة 1.0.0
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
