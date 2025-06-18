
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
import SmartAssistant from '@/components/admin/ai/SmartAssistant';
import SEOManager from '@/components/admin/seo/SEOManager';
import SocialMediaManager from '@/components/admin/social/SocialMediaManager';
import AdvancedSecurity from '@/components/admin/security/AdvancedSecurity';
import ExtensionManager from '@/components/admin/extensions/ExtensionManager';
import AdvancedWebsiteBuilder from '@/components/admin/site-builder/AdvancedWebsiteBuilder';
import SystemHealth from '@/components/admin/system/SystemHealth';
import PerformanceOptimizer from '@/components/enhanced/PerformanceOptimizer';
import SmartToaster from '@/components/enhanced/SmartToaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';

const AdminPageContent = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  useAdminShortcuts({
    save: () => console.log('حفظ عام'),
    preview: () => setActiveSection('preview'),
    export: () => console.log('تصدير عام'),
  });

  const renderContent = () => {
    switch (activeSection) {
      case 'website-builder':
        return <AdvancedWebsiteBuilder />;
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
      case 'system-health':
        return <SystemHealth />;
      case 'settings':
        return (
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div>
                <h2 className="text-2xl font-bold text-white">الإعدادات العامة</h2>
                <p className="text-gray-400">إدارة الإعدادات الأساسية للنظام</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SystemHealth />
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">🏢 لوحة التحكم الرئيسية المطورة</h1>
              <p className="text-gray-300 text-lg">منصة إدارة شاملة لورشة المعز للليزر مع أدوات متقدمة وذكية</p>
              <p className="text-purple-400 mt-2">طور بواسطة محمد سليم</p>
              <div className="mt-4 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">النظام جاهز للنشر</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">جميع الوظائف تعمل بكفاءة عالية ومُحسنة للأداء</p>
              </div>
            </div>
            
            <DashboardCards onSectionChange={setActiveSection} />
            <DashboardStats />
            <DashboardFeatures />
          </div>
        );
    }
  };

  return (
    <>
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
      
      {/* مكونات عامة */}
      <PerformanceOptimizer />
      <SmartToaster />
    </>
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
