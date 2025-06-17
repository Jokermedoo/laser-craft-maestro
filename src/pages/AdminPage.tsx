import React, { useState } from 'react';
import { AdminProvider } from '@/contexts/AdminContext';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import ThemeEditor from '@/components/admin/ThemeEditor';
import ContentEditor from '@/components/admin/ContentEditor';
import ServicesManager from '@/components/admin/ServicesManager';
import GalleryManager from '@/components/admin/GalleryManager';
import CompanySettings from '@/components/admin/CompanySettings';
import SecuritySettings from '@/components/admin/SecuritySettings';
import LivePreview from '@/components/admin/LivePreview';
import UserManagement from '@/components/admin/users/UserManagement';
import ReportsAnalytics from '@/components/admin/reports/ReportsAnalytics';
import BookingSystem from '@/components/admin/bookings/BookingSystem';
import FinanceDashboard from '@/components/admin/finance/FinanceDashboard';
import NotificationCenter from '@/components/admin/notifications/NotificationCenter';
import VisualLayoutEditor from '@/components/admin/visual-editor/VisualLayoutEditor';
import BackupManager from '@/components/admin/system/BackupManager';
import DashboardStats from '@/components/admin/dashboard/DashboardStats';
import DashboardFeatures from '@/components/admin/dashboard/DashboardFeatures';
import DashboardCards from '@/components/admin/dashboard/DashboardCards';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';
import SmartAssistant from '@/components/admin/ai/SmartAssistant';
import SEOManager from '@/components/admin/seo/SEOManager';
import SocialMediaManager from '@/components/admin/social/SocialMediaManager';
import AdvancedSecurity from '@/components/admin/security/AdvancedSecurity';
import ExtensionManager from '@/components/admin/extensions/ExtensionManager';

const AdminPageContent = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  useAdminShortcuts({
    save: () => console.log('حفظ عام'),
    preview: () => setActiveSection('preview'),
    export: () => console.log('تصدير عام'),
  });

  const renderContent = () => {
    switch (activeSection) {
      case 'theme':
        return <ThemeEditor />;
      case 'content':
        return <ContentEditor />;
      case 'services':
        return <ServicesManager />;
      case 'gallery':
        return <GalleryManager />;
      case 'company':
        return <CompanySettings />;
      case 'security':
        return <SecuritySettings />;
      case 'users':
        return <UserManagement />;
      case 'reports':
        return <ReportsAnalytics />;
      case 'bookings':
        return <BookingSystem />;
      case 'finance':
        return <FinanceDashboard />;
      case 'notifications':
        return <NotificationCenter />;
      case 'visual-editor':
        return <VisualLayoutEditor />;
      case 'backup':
        return <BackupManager />;
      case 'preview':
        return <LivePreview />;
      case 'ai-assistant':
        return <SmartAssistant />;
      case 'seo':
        return <SEOManager />;
      case 'social':
        return <SocialMediaManager />;
      case 'advanced-security':
        return <AdvancedSecurity />;
      case 'extensions':
        return <ExtensionManager />;
      default:
        return (
          <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">🏢 لوحة التحكم الرئيسية المطورة</h1>
              <p className="text-gray-300 text-lg">منصة إدارة شاملة لورشة المعز للليزر مع أدوات متقدمة وذكية</p>
            </div>
            
            <DashboardCards onSectionChange={setActiveSection} />
            <DashboardStats />
            <DashboardFeatures />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-screen">
          <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="flex-1 flex flex-col min-w-0">
            <AdminHeader />
            <main className="flex-1 overflow-auto">
              <div className="h-full">
                {renderContent()}
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

const AdminPage = () => {
  return (
    <AdminProvider>
      <AdminPageContent />
    </AdminProvider>
  );
};

export default AdminPage;
