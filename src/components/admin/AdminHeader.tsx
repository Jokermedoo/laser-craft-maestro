
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Eye, EyeOff, Save, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const { previewMode, setPreviewMode } = useAdmin();
  const navigate = useNavigate();

  const handleSave = () => {
    // حفظ الإعدادات في localStorage
    localStorage.setItem('adminSettings', JSON.stringify({}));
    console.log('تم حفظ الإعدادات بنجاح');
  };

  const handleReset = () => {
    if (confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات؟')) {
      localStorage.removeItem('adminSettings');
      window.location.reload();
    }
  };

  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-purple-500/30 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">لوحة إدارة الموقع</h1>
          <p className="text-gray-400">إدارة وتخصيص الواجهة الأمامية بشكل مباشر</p>
        </div>
        
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Button
            onClick={() => setPreviewMode(!previewMode)}
            variant="outline"
            className="bg-purple-600/20 border-purple-500/50 text-white hover:bg-purple-600/30"
          >
            {previewMode ? <EyeOff className="h-4 w-4 ml-2" /> : <Eye className="h-4 w-4 ml-2" />}
            {previewMode ? 'إخفاء المعاينة' : 'معاينة مباشرة'}
          </Button>
          
          <Button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700"
          >
            <Save className="h-4 w-4 ml-2" />
            حفظ التغييرات
          </Button>
          
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-red-500/50 text-red-400 hover:bg-red-600/20"
          >
            <RotateCcw className="h-4 w-4 ml-2" />
            إعادة تعيين
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-blue-500/50 text-blue-400 hover:bg-blue-600/20"
          >
            عرض الموقع
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
