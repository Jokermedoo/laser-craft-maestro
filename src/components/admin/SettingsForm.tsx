
import React, { useState, useEffect } from 'react';
import { Save, Building } from 'lucide-react';
import { settingsService, CompanySettings } from '@/services/settingsService';
import { useToast } from '@/hooks/useToast';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Loader from '@/components/common/Loader';

const SettingsForm: React.FC = () => {
  const [settings, setSettings] = useState<Partial<CompanySettings>>({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    working_hours: 'السبت - الخميس: 9:00 - 18:00',
    website: '',
    description: '',
    facebook_url: '',
    instagram_url: '',
    youtube_url: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { success, error } = useToast();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await settingsService.get();
      if (data) {
        setSettings(data);
      }
    } catch (err) {
      error('خطأ في تحميل الإعدادات', 'حدث خطأ أثناء تحميل إعدادات الشركة');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!settings.name) {
      error('بيانات ناقصة', 'يرجى إدخال اسم الشركة على الأقل');
      return;
    }

    setSaving(true);
    try {
      await settingsService.update(settings);
      success('تم الحفظ بنجاح', 'تم تحديث إعدادات الشركة بنجاح');
    } catch (err) {
      error('خطأ في الحفظ', 'حدث خطأ أثناء حفظ الإعدادات');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field: keyof CompanySettings, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return <Loader text="جاري تحميل الإعدادات..." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Building className="w-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">إعدادات الشركة</h2>
            <p className="text-gray-400">تعديل بيانات ومعلومات الشركة</p>
          </div>
        </div>
        <Button 
          onClick={handleSave} 
          loading={saving}
          className="bg-green-600 hover:bg-green-700"
        >
          <Save className="w-4 h-4 ml-2" />
          حفظ التغييرات
        </Button>
      </div>

      {/* Basic Information */}
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-white mb-6">البيانات الأساسية</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="اسم الشركة"
            value={settings.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="اسم الشركة أو المؤسسة"
          />
          
          <Input
            label="رقم الهاتف"
            value={settings.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="+20 xxx xxx xxxx"
          />
          
          <Input
            label="رقم الواتساب"
            value={settings.whatsapp || ''}
            onChange={(e) => handleChange('whatsapp', e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="20xxxxxxxxx"
          />
          
          <Input
            label="البريد الإلكتروني"
            type="email"
            value={settings.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="info@company.com"
          />
        </div>
        
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">العنوان</label>
            <textarea
              value={settings.address || ''}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full p-3 bg-slate-700 border border-gray-600 text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={3}
              placeholder="العنوان التفصيلي للشركة"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">نبذة عن الشركة</label>
            <textarea
              value={settings.description || ''}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full p-3 bg-slate-700 border border-gray-600 text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={4}
              placeholder="وصف مختصر عن الشركة وخدماتها"
            />
          </div>
        </div>
      </div>

      {/* Additional Settings */}
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-white mb-6">إعدادات إضافية</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="ساعات العمل"
            value={settings.working_hours || ''}
            onChange={(e) => handleChange('working_hours', e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="السبت - الخميس: 9:00 - 18:00"
          />
          
          <Input
            label="الموقع الإلكتروني"
            value={settings.website || ''}
            onChange={(e) => handleChange('website', e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="www.company.com"
          />
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-white mb-6">وسائل التواصل الاجتماعي</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="رابط الفيسبوك"
            value={settings.facebook_url || ''}
            onChange={(e) => handleChange('facebook_url', e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="https://facebook.com/company"
          />
          
          <Input
            label="رابط الإنستجرام"
            value={settings.instagram_url || ''}
            onChange={(e) => handleChange('instagram_url', e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="https://instagram.com/company"
          />
          
          <Input
            label="رابط اليوتيوب"
            value={settings.youtube_url || ''}
            onChange={(e) => handleChange('youtube_url', e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="https://youtube.com/company"
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
