
import React, { useState } from 'react';
import { AdminProvider } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import GalleryManager from '@/components/admin/GalleryManager';
import ProtectedRoute from '@/components/admin/ProtectedRoute';

const AdminGallery: React.FC = () => {
  const [activeSection, setActiveSection] = useState('gallery');

  return (
    <ProtectedRoute>
      <AdminProvider>
        <AdminLayout activeSection={activeSection} setActiveSection={setActiveSection}>
          <div className="p-6">
            <GalleryManager />
          </div>
        </AdminLayout>
      </AdminProvider>
    </ProtectedRoute>
  );
};

export default AdminGallery;
