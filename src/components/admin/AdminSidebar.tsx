
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
  Building
} from 'lucide-react';

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  {
    id: 'dashboard',
    title: 'لوحة التحكم',
    icon: LayoutDashboard
  },
  {
    id: 'theme',
    title: 'محرر الألوان',
    icon: Palette
  },
  {
    id: 'content',
    title: 'محرر المحتوى',
    icon: FileText
  },
  {
    id: 'services',
    title: 'إدارة الخدمات',
    icon: Settings
  },
  {
    id: 'gallery',
    title: 'إدارة المعرض',
    icon: Image
  },
  {
    id: 'company',
    title: 'بيانات الشركة',
    icon: Building
  },
  {
    id: 'preview',
    title: 'المعاينة المباشرة',
    icon: Eye
  }
];

const AdminSidebar = ({ activeSection, setActiveSection }: AdminSidebarProps) => {
  return (
    <Sidebar className="border-r border-purple-500/30">
      <SidebarHeader className="p-6">
        <h2 className="text-xl font-bold text-white">لوحة الإدارة</h2>
        <p className="text-gray-400 text-sm">ورشة المعز للليزر</p>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-300 px-4">إدارة الموقع</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.id)}
                    isActive={activeSection === item.id}
                    className="text-white hover:bg-purple-600/20 data-[active=true]:bg-purple-600/40"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="bg-purple-600/20 p-3 rounded-lg">
          <p className="text-white text-sm font-medium">الإدارة المتقدمة</p>
          <p className="text-purple-200 text-xs">تحكم كامل بدون كود</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
