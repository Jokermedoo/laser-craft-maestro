
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { Plus, Edit, Trash2, Settings } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const ServicesManager = () => {
  const { settings, updateServices } = useAdmin();
  const [services, setServices] = useState(settings.services);
  const [editingService, setEditingService] = useState<any>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const defaultService = {
    id: '',
    title: '',
    description: '',
    icon: 'Zap',
    features: ['']
  };

  const [newService, setNewService] = useState(defaultService);

  const iconOptions = [
    'Zap', 'Star', 'Award', 'Target', 'Gem', 'Crown', 'Shield', 'Heart', 'Sparkles', 'Diamond'
  ];

  const handleAddService = () => {
    if (newService.title && newService.description) {
      const serviceWithId = {
        ...newService,
        id: Date.now().toString(),
        features: newService.features.filter(f => f.trim() !== '')
      };
      const updatedServices = [...services, serviceWithId];
      setServices(updatedServices);
      updateServices(updatedServices);
      setNewService(defaultService);
      setIsAddingNew(false);
    }
  };

  const handleEditService = (service: any) => {
    setEditingService(service);
  };

  const handleUpdateService = () => {
    if (editingService) {
      const updatedServices = services.map(s => 
        s.id === editingService.id ? editingService : s
      );
      setServices(updatedServices);
      updateServices(updatedServices);
      setEditingService(null);
    }
  };

  const handleDeleteService = (serviceId: string) => {
    if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
      const updatedServices = services.filter(s => s.id !== serviceId);
      setServices(updatedServices);
      updateServices(updatedServices);
    }
  };

  const addFeature = (serviceData: any, setServiceData: any) => {
    setServiceData({
      ...serviceData,
      features: [...serviceData.features, '']
    });
  };

  const removeFeature = (index: number, serviceData: any, setServiceData: any) => {
    const newFeatures = serviceData.features.filter((_: any, i: number) => i !== index);
    setServiceData({
      ...serviceData,
      features: newFeatures
    });
  };

  const updateFeature = (index: number, value: string, serviceData: any, setServiceData: any) => {
    const newFeatures = [...serviceData.features];
    newFeatures[index] = value;
    setServiceData({
      ...serviceData,
      features: newFeatures
    });
  };

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

      {/* قائمة الخدمات الحالية */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span>{service.title}</span>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <Button
                    size="sm"
                    onClick={() => handleEditService(service)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleDeleteService(service.id)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="space-y-2">
                <h4 className="text-white font-medium">المميزات:</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* نموذج إضافة خدمة جديدة */}
      {isAddingNew && (
        <Card className="bg-slate-800/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white">إضافة خدمة جديدة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">اسم الخدمة</Label>
                <Input
                  value={newService.title}
                  onChange={(e) => setNewService({...newService, title: e.target.value})}
                  className="bg-slate-700 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">الأيقونة</Label>
                <select
                  value={newService.icon}
                  onChange={(e) => setNewService({...newService, icon: e.target.value})}
                  className="w-full p-2 bg-slate-700 border border-gray-600 text-white rounded-md"
                >
                  {iconOptions.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-gray-300">وصف الخدمة</Label>
              <Textarea
                value={newService.description}
                onChange={(e) => setNewService({...newService, description: e.target.value})}
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">مميزات الخدمة</Label>
              {newService.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Input
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value, newService, setNewService)}
                    className="bg-slate-700 border-gray-600 text-white"
                    placeholder={`الميزة ${index + 1}`}
                  />
                  <Button
                    size="sm"
                    onClick={() => removeFeature(index, newService, setNewService)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                onClick={() => addFeature(newService, setNewService)}
                variant="outline"
                className="border-purple-500/50 text-purple-400"
              >
                <Plus className="h-4 w-4 ml-2" />
                إضافة ميزة
              </Button>
            </div>

            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button onClick={handleAddService} className="bg-green-600 hover:bg-green-700">
                حفظ الخدمة
              </Button>
              <Button 
                onClick={() => {
                  setIsAddingNew(false);
                  setNewService(defaultService);
                }}
                variant="outline"
                className="border-gray-500/50 text-gray-400"
              >
                إلغاء
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* نموذج تعديل الخدمة */}
      {editingService && (
        <Card className="bg-slate-800/50 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white">تعديل الخدمة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">اسم الخدمة</Label>
                <Input
                  value={editingService.title}
                  onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                  className="bg-slate-700 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">الأيقونة</Label>
                <select
                  value={editingService.icon}
                  onChange={(e) => setEditingService({...editingService, icon: e.target.value})}
                  className="w-full p-2 bg-slate-700 border border-gray-600 text-white rounded-md"
                >
                  {iconOptions.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-gray-300">وصف الخدمة</Label>
              <Textarea
                value={editingService.description}
                onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">مميزات الخدمة</Label>
              {editingService.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Input
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value, editingService, setEditingService)}
                    className="bg-slate-700 border-gray-600 text-white"
                    placeholder={`الميزة ${index + 1}`}
                  />
                  <Button
                    size="sm"
                    onClick={() => removeFeature(index, editingService, setEditingService)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                onClick={() => addFeature(editingService, setEditingService)}
                variant="outline"
                className="border-purple-500/50 text-purple-400"
              >
                <Plus className="h-4 w-4 ml-2" />
                إضافة ميزة
              </Button>
            </div>

            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button onClick={handleUpdateService} className="bg-blue-600 hover:bg-blue-700">
                حفظ التغييرات
              </Button>
              <Button 
                onClick={() => setEditingService(null)}
                variant="outline"
                className="border-gray-500/50 text-gray-400"
              >
                إلغاء
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ServicesManager;
