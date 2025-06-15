
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { Plus, Edit, Trash2, Image, Upload } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const GalleryManager = () => {
  const { settings, updateGallery } = useAdmin();
  const [gallery, setGallery] = useState(settings.gallery);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const defaultGalleryItem = {
    id: '',
    title: '',
    description: '',
    image: '',
    category: 'لوحات إعلانية'
  };

  const [newItem, setNewItem] = useState(defaultGalleryItem);

  const categories = [
    'لوحات إعلانية',
    'نقش على المعادن',
    'نقش على الخشب',
    'نقش على الأكريليك',
    'هدايا مخصصة',
    'مجوهرات',
    'قطع تذكارية',
    'أخرى'
  ];

  const handleAddItem = () => {
    if (newItem.title && newItem.description && newItem.image) {
      const itemWithId = {
        ...newItem,
        id: Date.now().toString()
      };
      const updatedGallery = [...gallery, itemWithId];
      setGallery(updatedGallery);
      updateGallery(updatedGallery);
      setNewItem(defaultGalleryItem);
      setIsAddingNew(false);
    }
  };

  const handleEditItem = (item: any) => {
    setEditingItem(item);
  };

  const handleUpdateItem = () => {
    if (editingItem) {
      const updatedGallery = gallery.map(item => 
        item.id === editingItem.id ? editingItem : item
      );
      setGallery(updatedGallery);
      updateGallery(updatedGallery);
      setEditingItem(null);
    }
  };

  const handleDeleteItem = (itemId: string) => {
    if (confirm('هل أنت متأكد من حذف هذا العنصر؟')) {
      const updatedGallery = gallery.filter(item => item.id !== itemId);
      setGallery(updatedGallery);
      updateGallery(updatedGallery);
    }
  };

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

      {/* معرض الأعمال الحالية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <Card key={item.id} className="bg-slate-800/50 border-purple-500/30 overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <Button
                  size="sm"
                  onClick={() => handleEditItem(item)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleDeleteItem(item.id)}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
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

      {/* نموذج إضافة عمل جديد */}
      {isAddingNew && (
        <Card className="bg-slate-800/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white">إضافة عمل جديد</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">عنوان العمل</Label>
                <Input
                  value={newItem.title}
                  onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                  className="bg-slate-700 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">التصنيف</Label>
                <select
                  value={newItem.category}
                  onChange={(e) => setNewItem({...newItem, category: e.target.value})}
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
                value={newItem.description}
                onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">رابط الصورة</Label>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Input
                  value={newItem.image}
                  onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                  className="bg-slate-700 border-gray-600 text-white"
                  placeholder="https://example.com/image.jpg"
                />
                <Button 
                  variant="outline"
                  className="border-purple-500/50 text-purple-400"
                >
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-gray-500 text-xs">يمكنك رفع الصورة أو إدخال رابط مباشر</p>
            </div>

            {/* معاينة الصورة */}
            {newItem.image && (
              <div className="space-y-2">
                <Label className="text-gray-300">معاينة الصورة</Label>
                <div className="aspect-video max-w-md">
                  <img 
                    src={newItem.image} 
                    alt="معاينة"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x225?text=الصورة+غير+متاحة';
                    }}
                  />
                </div>
              </div>
            )}

            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button onClick={handleAddItem} className="bg-green-600 hover:bg-green-700">
                حفظ العمل
              </Button>
              <Button 
                onClick={() => {
                  setIsAddingNew(false);
                  setNewItem(defaultGalleryItem);
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

      {/* نموذج تعديل العمل */}
      {editingItem && (
        <Card className="bg-slate-800/50 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white">تعديل العمل</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">عنوان العمل</Label>
                <Input
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                  className="bg-slate-700 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">التصنيف</Label>
                <select
                  value={editingItem.category}
                  onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
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
                value={editingItem.description}
                onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">رابط الصورة</Label>
              <Input
                value={editingItem.image}
                onChange={(e) => setEditingItem({...editingItem, image: e.target.value})}
                className="bg-slate-700 border-gray-600 text-white"
              />
            </div>

            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button onClick={handleUpdateItem} className="bg-blue-600 hover:bg-blue-700">
                حفظ التغييرات
              </Button>
              <Button 
                onClick={() => setEditingItem(null)}
                variant="outline"
                className="border-gray-500/50 text-gray-400"
              >
                إلغاء
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* إحصائيات المعرض */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">إحصائيات المعرض</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{gallery.length}</div>
              <div className="text-gray-400">إجمالي الأعمال</div>
            </div>
            {categories.slice(0, 3).map(category => (
              <div key={category} className="text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {gallery.filter(item => item.category === category).length}
                </div>
                <div className="text-gray-400">{category}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GalleryManager;
