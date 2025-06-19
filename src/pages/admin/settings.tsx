
import React, { useState } from 'react';
import { AdminProvider } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import CompanySettings from '@/components/admin/CompanySettings';
import ProtectedRoute from '@/components/admin/ProtectedRoute';

const AdminSettings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('company');

  return (
    <ProtectedRoute>
      <AdminProvider>
        <AdminLayout activeSection={activeSection} setActiveSection={setActiveSection}>
          <div className="p-6">
            <CompanySettings />
          </div>
        </AdminLayout>
      </AdminProvider>
    </ProtectedRoute>
  );
};

export default AdminSettings;
