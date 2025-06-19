
import React, { useState } from 'react';
import { AdminProvider } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardStats from '@/components/admin/dashboard/DashboardStats';
import DashboardFeatures from '@/components/admin/dashboard/DashboardFeatures';
import DashboardCards from '@/components/admin/dashboard/DashboardCards';
import ProtectedRoute from '@/components/admin/ProtectedRoute';

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <ProtectedRoute>
      <AdminProvider>
        <AdminLayout activeSection={activeSection} setActiveSection={setActiveSection}>
          <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">🏢 لوحة التحكم الرئيسية</h1>
              <p className="text-gray-300 text-lg">منصة إدارة شاملة لورشة المعز للليزر مع قاعدة بيانات فعلية</p>
              <div className="mt-4 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">النظام متصل بقاعدة البيانات</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">جميع العمليات تعمل بشكل فعلي مع Supabase</p>
              </div>
            </div>
            
            <DashboardCards onSectionChange={setActiveSection} />
            <DashboardStats />
            <DashboardFeatures />
          </div>
        </AdminLayout>
      </AdminProvider>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
