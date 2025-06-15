
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
          <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">لوحة التحكم الرئيسية</h1>
              <p className="text-gray-300">مرحباً بك في لوحة إدارة ورشة المعز للليزر</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div 
                onClick={() => setActiveSection('theme')}
                className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">محرر الألوان</h3>
                <p className="text-purple-100">تخصيص ألوان الموقع بالكامل</p>
              </div>
              
              <div 
                onClick={() => setActiveSection('content')}
                className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">إدارة المحتوى</h3>
                <p className="text-green-100">تعديل النصوص والعناوين</p>
              </div>
              
              <div 
                onClick={() => setActiveSection('services')}
                className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">إدارة الخدمات</h3>
                <p className="text-orange-100">إضافة وتعديل الخدمات</p>
              </div>
              
              <div 
                onClick={() => setActiveSection('gallery')}
                className="bg-gradient-to-br from-pink-600 to-rose-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">إدارة المعرض</h3>
                <p className="text-pink-100">إدارة الصور والمشاريع</p>
              </div>
              
              <div 
                onClick={() => setActiveSection('company')}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">بيانات الشركة</h3>
                <p className="text-indigo-100">معلومات الاتصال والعنوان</p>
              </div>
              
              <div 
                onClick={() => setActiveSection('preview')}
                className="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">المعاينة المباشرة</h3>
                <p className="text-cyan-100">مشاهدة التغييرات فوراً</p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">إحصائيات سريعة</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">5</div>
                  <div className="text-gray-400 text-sm">الخدمات</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">12</div>
                  <div className="text-gray-400 text-sm">المشاريع</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">3</div>
                  <div className="text-gray-400 text-sm">الصفحات</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">1</div>
                  <div className="text-gray-400 text-sm">المدير</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SidebarProvider>
        <div className="flex w-full min-h-screen">
          <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="flex-1 flex flex-col">
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
