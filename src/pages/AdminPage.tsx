
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
import { SidebarProvider } from '@/components/ui/sidebar';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';

const AdminPageContent = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  // إعداد اختصارات عامة للأدمن
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
      case 'preview':
        return <LivePreview />;
      default:
        return (
          <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">🏢 لوحة التحكم الرئيسية المطورة</h1>
              <p className="text-gray-300 text-lg">منصة إدارة شاملة لورشة المعز للليزر مع أدوات متقدمة وذكية</p>
            </div>
            
            {/* بطاقات القسم الرئيسي */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div 
                onClick={() => setActiveSection('theme')}
                className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg border border-purple-400/30 relative overflow-hidden group"
              >
                <div className="absolute top-2 right-2 bg-green-500 text-xs px-2 py-1 rounded-full text-black font-bold animate-pulse">
                  جديد
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold text-white mb-2">🎨 محرر الثيمات المتقدم</h3>
                <p className="text-purple-100 mb-3">سحب وإفلات الألوان مع أدوات متطورة</p>
                <div className="text-xs text-purple-200 bg-purple-400/20 px-2 py-1 rounded">
                  ✨ 8 محررات ✨ حركات متقدمة ✨ قوالب جاهزة
                </div>
              </div>

              <div 
                onClick={() => setActiveSection('users')}
                className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg border border-blue-400/30 relative overflow-hidden group"
              >
                <div className="absolute top-2 right-2 bg-orange-500 text-xs px-2 py-1 rounded-full text-black font-bold">
                  جديد
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold text-white mb-2">👥 إدارة المستخدمين</h3>
                <p className="text-blue-100 mb-3">إدارة شاملة للعملاء والموظفين</p>
                <div className="text-xs text-blue-200 bg-blue-400/20 px-2 py-1 rounded">
                  🔍 بحث متقدم 📊 إحصائيات شاملة
                </div>
              </div>

              <div 
                onClick={() => setActiveSection('reports')}
                className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg border border-green-400/30 relative overflow-hidden group"
              >
                <div className="absolute top-2 right-2 bg-red-500 text-xs px-2 py-1 rounded-full text-black font-bold">
                  جديد
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold text-white mb-2">📊 التقارير والتحليلات</h3>
                <p className="text-green-100 mb-3">تحليل شامل للأداء والمبيعات</p>
                <div className="text-xs text-green-200 bg-green-400/20 px-2 py-1 rounded">
                  📈 رسوم بيانية 📋 تقارير مفصلة
                </div>
              </div>

              <div 
                onClick={() => setActiveSection('bookings')}
                className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg border border-orange-400/30 relative overflow-hidden group"
              >
                <div className="absolute top-2 right-2 bg-yellow-500 text-xs px-2 py-1 rounded-full text-black font-bold">
                  جديد
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold text-white mb-2">📅 نظام الحجوزات</h3>
                <p className="text-orange-100 mb-3">إدارة المواعيد والحجوزات</p>
                <div className="text-xs text-orange-200 bg-orange-400/20 px-2 py-1 rounded">
                  ⏰ جدولة ذكية 📱 تأكيد فوري
                </div>
              </div>

              <div 
                onClick={() => setActiveSection('finance')}
                className="bg-gradient-to-br from-pink-600 to-rose-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg border border-pink-400/30 relative overflow-hidden group"
              >
                <div className="absolute top-2 right-2 bg-green-500 text-xs px-2 py-1 rounded-full text-black font-bold">
                  جديد
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold text-white mb-2">💰 لوحة التحكم المالية</h3>
                <p className="text-pink-100 mb-3">إدارة الإيرادات والمصروفات</p>
                <div className="text-xs text-pink-200 bg-pink-400/20 px-2 py-1 rounded">
                  💹 تدفق نقدي 📊 تحليل مالي
                </div>
              </div>

              <div 
                onClick={() => setActiveSection('notifications')}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg border border-indigo-400/30 relative overflow-hidden group"
              >
                <div className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded-full text-black font-bold">
                  جديد
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold text-white mb-2">🔔 مركز الإشعارات</h3>
                <p className="text-indigo-100 mb-3">إرسال وإدارة الرسائل</p>
                <div className="text-xs text-indigo-200 bg-indigo-400/20 px-2 py-1 rounded">
                  📱 واتساب 📧 إيميل 📨 SMS
                </div>
              </div>
            </div>

            {/* الوحدات التقليدية */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div 
                onClick={() => setActiveSection('content')}
                className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">📝 إدارة المحتوى</h3>
                <p className="text-green-100 mb-3">تعديل النصوص والعناوين</p>
                <div className="text-xs text-green-200 bg-green-400/20 px-2 py-1 rounded">
                  محرر نص متقدم
                </div>
              </div>
              
              <div 
                onClick={() => setActiveSection('services')}
                className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">🔧 إدارة الخدمات</h3>
                <p className="text-orange-100 mb-3">إضافة وتعديل الخدمات</p>
                <div className="text-xs text-orange-200 bg-orange-400/20 px-2 py-1 rounded">
                  إدارة شاملة
                </div>
              </div>
              
              <div 
                onClick={() => setActiveSection('gallery')}
                className="bg-gradient-to-br from-pink-600 to-rose-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">🖼️ إدارة المعرض</h3>
                <p className="text-pink-100 mb-3">إدارة الصور والمشاريع</p>
                <div className="text-xs text-pink-200 bg-pink-400/20 px-2 py-1 rounded">
                  رفع متقدم
                </div>
              </div>
              
              <div 
                onClick={() => setActiveSection('company')}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">🏢 بيانات الشركة</h3>
                <p className="text-indigo-100 mb-3">معلومات الاتصال والعنوان</p>
                <div className="text-xs text-indigo-200 bg-indigo-400/20 px-2 py-1 rounded">
                  إعدادات شاملة
                </div>
              </div>
              
              <div 
                onClick={() => setActiveSection('security')}
                className="bg-gradient-to-br from-red-600 to-pink-600 p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">🔒 إعدادات الحماية</h3>
                <p className="text-red-100 mb-3">أمان وحماية النظام</p>
                <div className="text-xs text-red-200 bg-red-400/20 px-2 py-1 rounded">
                  حماية متقدمة
                </div>
              </div>
            </div>

            {/* إحصائيات النظام المحسنة */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                📊 إحصائيات النظام المتقدمة
                <div className="mr-4 bg-green-500 text-xs px-3 py-1 rounded-full text-black font-bold animate-pulse">
                  محدث الآن
                </div>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-400/30">
                  <div className="text-3xl font-bold text-purple-400">12</div>
                  <div className="text-gray-400 text-sm">المحررات المتاحة</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30">
                  <div className="text-3xl font-bold text-green-400">50+</div>
                  <div className="text-gray-400 text-sm">القوالب الجاهزة</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-400/30">
                  <div className="text-3xl font-bold text-blue-400">100+</div>
                  <div className="text-gray-400 text-sm">الحركات المتاحة</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-400/30">
                  <div className="text-3xl font-bold text-orange-400">79</div>
                  <div className="text-gray-400 text-sm">إجمالي المستخدمين</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg border border-pink-400/30">
                  <div className="text-3xl font-bold text-pink-400">328K</div>
                  <div className="text-gray-400 text-sm">إجمالي المبيعات</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-400/30">
                  <div className="text-3xl font-bold text-indigo-400">∞</div>
                  <div className="text-gray-400 text-sm">الإمكانيات</div>
                </div>
              </div>
            </div>

            {/* الميزات الجديدة المحسنة */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                🎉 الميزات الجديدة والمحدثة
                <div className="mr-4 bg-red-500 text-xs px-3 py-1 rounded-full text-white font-bold animate-bounce">
                  HOT
                </div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-green-400 mb-3">🎨 محررات التصميم</h3>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">محرر الحركات المتقدم</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">التخطيط المتجاوب</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">متجر القوالب</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-400 mb-3">💼 أدوات الإدارة</h3>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">إدارة المستخدمين</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">نظام الحجوزات</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">لوحة التحكم المالية</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-400 mb-3">🔧 ميزات تقنية</h3>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">مراقب الأداء</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">اختصارات لوحة المفاتيح</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">حفظ التكوينات</span>
                  </div>
                </div>
              </div>
            </div>
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
