
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Building, Phone, Mail, MapPin, Save, Loader2 } from 'lucide-react';
import { useCompanyData } from '@/hooks/useSupabaseData';
import { useToast } from '@/components/ui/use-toast';

const CompanySettings = () => {
  const { companyInfo, loading, updateCompanyInfo } = useCompanyData();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    working_hours: '',
    website: '',
    description: '',
    facebook_url: '',
    instagram_url: '',
    youtube_url: ''
  });

  useEffect(() => {
    if (companyInfo) {
      setFormData({
        name: companyInfo.name || '',
        phone: companyInfo.phone || '',
        whatsapp: companyInfo.whatsapp || '',
        email: companyInfo.email || '',
        address: companyInfo.address || '',
        working_hours: companyInfo.working_hours || '',
        website: companyInfo.website || '',
        description: companyInfo.description || '',
        facebook_url: companyInfo.facebook_url || '',
        instagram_url: companyInfo.instagram_url || '',
        youtube_url: companyInfo.youtube_url || ''
      });
    }
  }, [companyInfo]);

  const handleSave = async () => {
    const result = await updateCompanyInfo(formData);
    if (result.success) {
      toast({
        title: "تم الحفظ بنجاح",
        description: "تم تحديث بيانات الشركة",
      });
    } else {
      toast({
        title: "خطأ في الحفظ",
        description: "حدث خطأ أثناء حفظ البيانات",
        variant: "destructive",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
        <span className="mr-2 text-white">جاري تحميل البيانات...</span>
      </div>
    );
  }

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
              value={formData.name}
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
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="bg-slate-700 border-gray-600 text-white"
                placeholder="+20 xxx xxx xxxx"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">رقم الواتساب</Label>
              <Input
                value={formData.whatsapp}
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
              value={formData.email}
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
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="bg-slate-700 border-gray-600 text-white"
              placeholder="العنوان التفصيلي للشركة"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">نبذة عن الشركة</Label>
            <Textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="bg-slate-700 border-gray-600 text-white min-h-24"
              placeholder="وصف مختصر عن الشركة وخدماتها"
            />
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
                value={formData.working_hours}
                onChange={(e) => handleChange('working_hours', e.target.value)}
                className="bg-slate-700 border-gray-600 text-white"
                placeholder="السبت - الخميس: 9:00 - 18:00"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">الموقع الإلكتروني</Label>
              <Input
                value={formData.website}
                onChange={(e) => handleChange('website', e.target.value)}
                className="bg-slate-700 border-gray-600 text-white"
                placeholder="www.company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-gray-300">رابط الفيسبوك</Label>
              <Input
                value={formData.facebook_url}
                onChange={(e) => handleChange('facebook_url', e.target.value)}
                placeholder="https://facebook.com/company"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">رابط الإنستجرام</Label>
              <Input
                value={formData.instagram_url}
                onChange={(e) => handleChange('instagram_url', e.target.value)}
                placeholder="https://instagram.com/company"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">رابط اليوتيوب</Label>
              <Input
                value={formData.youtube_url}
                onChange={(e) => handleChange('youtube_url', e.target.value)}
                placeholder="https://youtube.com/company"
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>
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
            <h3 className="text-2xl font-bold text-white mb-4">{formData.name}</h3>
            <div className="space-y-3 text-gray-300">
              {formData.phone && (
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span>{formData.phone}</span>
                </div>
              )}
              {formData.email && (
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span>{formData.email}</span>
                </div>
              )}
              {formData.address && (
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span>{formData.address}</span>
                </div>
              )}
            </div>
            {formData.description && (
              <p className="text-gray-300 mt-4">{formData.description}</p>
            )}
            {formData.whatsapp && (
              <div className="mt-6">
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open(`https://wa.me/${formData.whatsapp}`, '_blank')}
                >
                  تواصل عبر الواتساب
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanySettings;
