
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, LogOut, Bell } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Topbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <header className="bg-slate-800/95 backdrop-blur-sm border-b border-purple-500/30 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <h1 className="text-2xl font-bold text-white">لوحة تحكم المعز</h1>
        </div>
        
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-300 hover:text-white"
          >
            <Bell className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-3 rtl:space-x-reverse text-white">
            <User className="h-5 w-5 text-purple-400" />
            <span className="text-sm">{user?.name || 'مدير النظام'}</span>
          </div>
          
          <Button
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
          >
            <LogOut className="h-5 w-5" />
            <span className="mr-2">خروج</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
