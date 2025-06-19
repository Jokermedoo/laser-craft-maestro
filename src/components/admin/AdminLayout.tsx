
import React from 'react';
import AdminSidebar from './AdminSidebar';
import Topbar from './Topbar';
import { SidebarProvider } from '@/components/ui/sidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ 
  children, 
  activeSection, 
  setActiveSection 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-screen">
          <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="flex-1 flex flex-col min-w-0">
            <Topbar />
            <main className="flex-1 overflow-auto">
              <div className="h-full">
                {children}
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminLayout;
