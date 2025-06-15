
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Building, Phone, Mail, MapPin, Save } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const CompanySettings = () => {
  const { settings, updateCompanyInfo } = useAdmin();
  const [companyData, setCompanyData] = useState(settings.companyInfo);

  const handleSave = () => {
    updateCompanyInfo(companyData);
    console.log('تم حفظ بيانات الشركة بنجاح');
  };

  const handleChange = (field: string, value: string) => {
    setCompanyData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Building className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">إعدادات الشركة</h2>
            <p className="text-gray-400">تعديل بيانات ومعلومات الشركة</p>
          </div>
        </div>
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 ml-2" />
          حفظ التغييرات
        </Button>
      </div>

      {/* بيانات الشركة الأساسية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">البيانات الأساسية</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-gray-300">اسم الشركة</Label>
            <Input
              value={companyData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="bg-slate-700 border-gray-600 text-white text-lg font-bold"
              placeholder="اسم الشركة أو المؤسسة"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-gray-300 flex items-center">
                <Phone className="h-4 w-4 ml-2" />
                رقم الهاتف الأساسي
              </Label>
              <Input
                value={companyData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="bg-slate-700 border-gray-600 text-white"
                placeholder="+20 xxx xxx xxxx"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">رقم الواتساب</Label>
              <Input
                value={companyData.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                className="bg-slate-700 border-gray-600 text-white"
                placeholder="20xxxxxxxxx"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300 flex items-center">
              <Mail className="h-4 w-4 ml-2" />
              البريد الإلكتروني
            </Label>
            <Input
              value={companyData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="bg-slate-700 border-gray-600 text-white"
              placeholder="info@company.com"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300 flex items-center">
              <MapPin className="h-4 w-4 ml-2" />
              العنوان
            </Label>
            <Textarea
              value={companyData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="bg-slate-700 border-gray-600 text-white"
              placeholder="العنوان التفصيلي للشركة"
            />
          </div>
        </CardContent>
      </Card>

      {/* معاينة البيانات */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">معاينة البيانات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">{companyData.name}</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>{companyData.phone}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>{companyData.email}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>{companyData.address}</span>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open(`https://wa.me/${companyData.whatsapp}`, '_blank')}
              >
                تواصل عبر الواتساب
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* إعدادات متقدمة */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">إعدادات متقدمة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-gray-300">ساعات العمل</Label>
              <Input
                defaultValue="السبت - الخميس: 9:00 - 18:00"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">الموقع الإلكتروني</Label>
              <Input
                defaultValue="www.almaez-laser.com"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-gray-300">نبذة عن الشركة</Label>
            <Textarea
              defaultValue="ورشة المعز لخدمات الليزر هي شركة رائدة في مجال النقش والحفر بالليزر، نقدم خدمات عالية الجودة بأحدث التقنيات."
              className="bg-slate-700 border-gray-600 text-white min-h-24"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-gray-300">رابط الفيسبوك</Label>
              <Input
                placeholder="https://facebook.com/almaez"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">رابط الإنستجرام</Label>
              <Input
                placeholder="https://instagram.com/almaez"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">رابط اليوتيوب</Label>
              <Input
                placeholder="https://youtube.com/almaez"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanySettings;
