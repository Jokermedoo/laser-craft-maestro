
import React, { useState } from 'react';
import { AdminProvider } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import ServicesManager from '@/components/admin/ServicesManager';
import ProtectedRoute from '@/components/admin/ProtectedRoute';

const AdminServices: React.FC = () => {
  const [activeSection, setActiveSection] = useState('services');

  return (
    <ProtectedRoute>
      <AdminProvider>
        <AdminLayout activeSection={activeSection} setActiveSection={setActiveSection}>
          <div className="p-6">
            <ServicesManager />
          </div>
        </AdminLayout>
      </AdminProvider>
    </ProtectedRoute>
  );
};

export default AdminServices;
