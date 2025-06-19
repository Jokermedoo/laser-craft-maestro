
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash2, Image, Upload, Loader2 } from 'lucide-react';
import { useGalleryData } from '@/hooks/useSupabaseData';
import { useImageUpload } from '@/hooks/useImageUpload';
import { useToast } from '@/components/ui/use-toast';

interface GalleryFormData {
  title: string;
  description: string;
  category: string;
  featured: boolean;
  image_url: string;
}

const GalleryManager = () => {
  const { items, loading, addItem, updateItem, deleteItem } = useGalleryData();
  const { uploadImage, uploading } = useImageUpload();
  const { toast } = useToast();
  
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState<GalleryFormData>({
    title: '',
    description: '',
    category: 'نقش',
    featured: false,
    image_url: ''
  });

  const categories = ['نقش', 'تقطيع', 'دروع', 'لوحات', 'خط عربي', 'هدايا', 'أخرى'];

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'نقش',
      featured: false,
      image_url: ''
    });
    setEditingItem(null);
    setIsAddingNew(false);
  };

  const handleImageUpload = async (file: File) => {
    const result = await uploadImage(file, 'gallery');
    if (result.success) {
      setFormData(prev => ({ ...prev, image_url: result.url }));
      toast({
        title: "تم رفع الصورة بنجاح",
        description: "يمكنك الآن حفظ العنصر",
      });
    } else {
      toast({
        title: "خطأ في رفع الصورة",
        description: "حدث خطأ أثناء رفع الصورة، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.image_url) {
      toast({
        title: "بيانات ناقصة",
        description: "يرجى إدخال العنوان والصورة على الأقل",
        variant: "destructive",
      });
      return;
    }

    if (editingItem) {
      const result = await updateItem(editingItem, formData);
      if (result.success) {
        toast({
          title: "تم التحديث بنجاح",
          description: "تم تحديث العنصر في المعرض",
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
      const result = await addItem(formData);
      if (result.success) {
        toast({
          title: "تم الإضافة بنجاح",
          description: "تم إضافة العنصر الجديد للمعرض",
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

  const handleEdit = (item: any) => {
    setFormData({
      title: item.title,
      description: item.description || '',
      category: item.category,
      featured: item.featured,
      image_url: item.image_url || ''
    });
    setEditingItem(item.id);
    setIsAddingNew(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا العنصر؟')) {
      const result = await deleteItem(id);
      if (result.success) {
        toast({
          title: "تم الحذف بنجاح",
          description: "تم حذف العنصر من المعرض",
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
          <Image className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">إدارة المعرض</h2>
            <p className="text-gray-400">إضافة وتعديل وحذف صور الأعمال</p>
          </div>
        </div>
        <Button 
          onClick={() => setIsAddingNew(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4 ml-2" />
          إضافة عمل جديد
        </Button>
      </div>

      {/* Form for adding/editing */}
      {isAddingNew && (
        <Card className="bg-slate-800/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white">
              {editingItem ? 'تعديل العمل' : 'إضافة عمل جديد'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">عنوان العمل</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-slate-700 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">التصنيف</Label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full p-2 bg-slate-700 border border-gray-600 text-white rounded-md"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-gray-300">وصف العمل</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">رفع الصورة</Label>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(file);
                  }}
                  className="bg-slate-700 border-gray-600 text-white"
                  disabled={uploading}
                />
                {uploading && <Loader2 className="h-4 w-4 animate-spin text-purple-400" />}
              </div>
            </div>

            {formData.image_url && (
              <div className="space-y-2">
                <Label className="text-gray-300">معاينة الصورة</Label>
                <div className="aspect-video max-w-md">
                  <img 
                    src={formData.image_url} 
                    alt="معاينة"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="w-4 h-4 text-purple-600"
              />
              <Label htmlFor="featured" className="text-gray-300">عمل مميز</Label>
            </div>

            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button 
                onClick={handleSubmit} 
                className="bg-green-600 hover:bg-green-700"
                disabled={uploading}
              >
                {editingItem ? 'حفظ التغييرات' : 'إضافة العمل'}
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

      {/* Gallery items grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="bg-slate-800/50 border-purple-500/30 overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src={item.image_url || '/placeholder.svg'} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <Button
                  size="sm"
                  onClick={() => handleEdit(item)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              {item.featured && (
                <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                  مميز
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.description}</p>
              <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                {item.category}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">لا توجد أعمال في المعرض حالياً</p>
        </div>
      )}
    </div>
  );
};

export default GalleryManager;
