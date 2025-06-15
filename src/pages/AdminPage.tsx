
import React, { useState } from 'react';
import { AdminProvider } from '@/contexts/AdminContext';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import ThemeEditor from '@/components/admin/ThemeEditor';
import ContentEditor from '@/components/admin/ContentEditor';
import ServicesManager from '@/components/admin/ServicesManager';
import GalleryManager from '@/components/admin/GalleryManager';
import CompanySettings from '@/components/admin/CompanySettings';
import LivePreview from '@/components/admin/LivePreview';
import { SidebarProvider } from '@/components/ui/sidebar';

const AdminPageContent = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

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
      case 'preview':
        return <LivePreview />;
      default:
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-6">لوحة التحكم الرئيسية</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">محرر الألوان</h3>
                <p className="text-purple-100">تخصيص ألوان الموقع بالكامل</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">إدارة المحتوى</h3>
                <p className="text-green-100">تعديل النصوص والعناوين</p>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">المعاينة المباشرة</h3>
                <p className="text-orange-100">مشاهدة التغييرات فوراً</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SidebarProvider>
        <div className="flex w-full">
          <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="flex-1">
            <AdminHeader />
            <main className="p-6">
              {renderContent()}
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
