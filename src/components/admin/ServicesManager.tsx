
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash2, Settings, Loader2 } from 'lucide-react';
import { useServicesData } from '@/hooks/useSupabaseData';
import { useToast } from '@/components/ui/use-toast';

interface ServiceFormData {
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  gradient: string;
  popular: boolean;
}

const ServicesManager = () => {
  const { services, loading, addService, updateService, deleteService } = useServicesData();
  const { toast } = useToast();
  
  const [editingService, setEditingService] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState<ServiceFormData>({
    title: '',
    description: '',
    icon: 'Zap',
    features: [''],
    price: '',
    gradient: 'from-blue-400 to-purple-500',
    popular: false
  });

  const iconOptions = ['Zap', 'Star', 'Award', 'Target', 'Gem', 'Crown', 'Shield', 'Heart'];
  const gradientOptions = [
    'from-yellow-400 to-orange-500',
    'from-blue-400 to-purple-500',
    'from-green-400 to-emerald-500',
    'from-pink-400 to-red-500',
    'from-purple-400 to-pink-500',
    'from-indigo-400 to-blue-500'
  ];

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: 'Zap',
      features: [''],
      price: '',
      gradient: 'from-blue-400 to-purple-500',
      popular: false
    });
    setEditingService(null);
    setIsAddingNew(false);
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description) {
      toast({
        title: "بيانات ناقصة",
        description: "يرجى إدخال العنوان والوصف على الأقل",
        variant: "destructive",
      });
      return;
    }

    const serviceData = {
      ...formData,
      features: formData.features.filter(f => f.trim() !== '')
    };

    if (editingService) {
      const result = await updateService(editingService, serviceData);
      if (result.success) {
        toast({
          title: "تم التحديث بنجاح",
          description: "تم تحديث الخدمة",
        });
        resetForm();
      } else {
        toast({
          title: "خطأ في التحديث",
          description: "حدث خطأ أثناء التحديث",
          variant: "destructive",
        });
      }
    } else {
      const result = await addService(serviceData);
      if (result.success) {
        toast({
          title: "تم الإضافة بنجاح",
          description: "تم إضافة الخدمة الجديدة",
        });
        resetForm();
      } else {
        toast({
          title: "خطأ في الإضافة",
          description: "حدث خطأ أثناء الإضافة",
          variant: "destructive",
        });
      }
    }
  };

  const handleEdit = (service: any) => {
    setFormData({
      title: service.title,
      description: service.description || '',
      icon: service.icon,
      features: service.features || [''],
      price: service.price || '',
      gradient: service.gradient,
      popular: service.popular
    });
    setEditingService(service.id);
    setIsAddingNew(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
      const result = await deleteService(id);
      if (result.success) {
        toast({
          title: "تم الحذف بنجاح",
          description: "تم حذف الخدمة",
        });
      } else {
        toast({
          title: "خطأ في الحذف",
          description: "حدث خطأ أثناء الحذف",
          variant: "destructive",
        });
      }
    }
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const updateFeature = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? value : f)
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
          <Settings className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">إدارة الخدمات</h2>
            <p className="text-gray-400">إضافة وتعديل وحذف الخدمات</p>
          </div>
        </div>
        <Button 
          onClick={() => setIsAddingNew(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4 ml-2" />
          إضافة خدمة جديدة
        </Button>
      </div>

      {/* Form for adding/editing */}
      {isAddingNew && (
        <Card className="bg-slate-800/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white">
              {editingService ? 'تعديل الخدمة' : 'إضافة خدمة جديدة'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">اسم الخدمة</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-slate-700 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">السعر</Label>
                <Input
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="ابتداءً من 50 جنيه"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">الأيقونة</Label>
                <select
                  value={formData.icon}
                  onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
                  className="w-full p-2 bg-slate-700 border border-gray-600 text-white rounded-md"
                >
                  {iconOptions.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">التدرج اللوني</Label>
                <select
                  value={formData.gradient}
                  onChange={(e) => setFormData(prev => ({ ...prev, gradient: e.target.value }))}
                  className="w-full p-2 bg-slate-700 border border-gray-600 text-white rounded-md"
                >
                  {gradientOptions.map(gradient => (
                    <option key={gradient} value={gradient}>{gradient}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-gray-300">وصف الخدمة</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">مميزات الخدمة</Label>
              {formData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Input
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                    className="bg-slate-700 border-gray-600 text-white"
                    placeholder={`الميزة ${index + 1}`}
                  />
                  {formData.features.length > 1 && (
                    <Button
                      size="sm"
                      onClick={() => removeFeature(index)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                onClick={addFeature}
                variant="outline"
                className="border-purple-500/50 text-purple-400"
              >
                <Plus className="h-4 w-4 ml-2" />
                إضافة ميزة
              </Button>
            </div>

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <input
                type="checkbox"
                id="popular"
                checked={formData.popular}
                onChange={(e) => setFormData(prev => ({ ...prev, popular: e.target.checked }))}
                className="w-4 h-4 text-purple-600"
              />
              <Label htmlFor="popular" className="text-gray-300">خدمة شائعة</Label>
            </div>

            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button 
                onClick={handleSubmit} 
                className="bg-green-600 hover:bg-green-700"
              >
                {editingService ? 'حفظ التغييرات' : 'إضافة الخدمة'}
              </Button>
              <Button 
                onClick={resetForm}
                variant="outline"
                className="border-gray-500/50 text-gray-400"
              >
                إلغاء
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span>{service.title}</span>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  {service.popular && (
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      شائع
                    </span>
                  )}
                  <Button
                    size="sm"
                    onClick={() => handleEdit(service)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleDelete(service.id)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{service.description}</p>
              {service.price && (
                <p className="text-yellow-400 font-bold mb-4">{service.price}</p>
              )}
              {service.features && service.features.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-white font-medium">المميزات:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {services.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">لا توجد خدمات مضافة حالياً</p>
        </div>
      )}
    </div>
  );
};

export default ServicesManager;
