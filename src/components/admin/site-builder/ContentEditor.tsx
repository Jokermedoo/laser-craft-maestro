import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Save, Plus, Trash2 } from 'lucide-react';
import { LayoutElement } from '@/hooks/useSiteBuilder';

interface ContentEditorProps {
  elements: LayoutElement[];
  onChange: (elements: LayoutElement[]) => void;
}

const ContentEditor = ({ elements, onChange }: ContentEditorProps) => {
  const [selectedElement, setSelectedElement] = useState<LayoutElement | null>(
    elements.length > 0 ? elements[0] : null
  );

  const updateElementContent = (elementId: string, content: any) => {
    const updatedElements = elements.map(el =>
      el.id === elementId ? { ...el, content } : el
    );
    onChange(updatedElements);
    
    // Update selected element
    if (selectedElement?.id === elementId) {
      setSelectedElement({ ...selectedElement, content });
    }
  };

  const renderContentEditor = (element: LayoutElement) => {
    switch (element.type) {
      case 'hero':
        return <HeroContentEditor element={element} onUpdate={updateElementContent} />;
      case 'services':
        return <ServicesContentEditor element={element} onUpdate={updateElementContent} />;
      case 'products':
        return <ProductsContentEditor element={element} onUpdate={updateElementContent} />;
      case 'about':
        return <AboutContentEditor element={element} onUpdate={updateElementContent} />;
      case 'gallery':
        return <GalleryContentEditor element={element} onUpdate={updateElementContent} />;
      case 'contact':
        return <ContactContentEditor element={element} onUpdate={updateElementContent} />;
      default:
        return <div className="text-gray-400">محرر غير متاح لهذا النوع</div>;
    }
  };

  if (elements.length === 0) {
    return (
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardContent className="p-12 text-center">
          <Edit className="h-12 w-12 mx-auto mb-4 text-gray-400 opacity-50" />
          <p className="text-gray-400">لا توجد عناصر للتحرير. أضف عناصر من قسم التخطيط أولاً.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
      {/* قائمة العناصر */}
      <div className="xl:col-span-1">
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">العناصر المتاحة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {elements.map((element) => (
              <Button
                key={element.id}
                onClick={() => setSelectedElement(element)}
                variant={selectedElement?.id === element.id ? 'default' : 'outline'}
                className={`w-full justify-start ${
                  selectedElement?.id === element.id 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'border-purple-500/30 text-white hover:bg-purple-600/20'
                }`}
              >
                <Edit className="h-4 w-4 mr-2" />
                {element.content?.title || `عنصر ${element.type}`}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* محرر المحتوى */}
      <div className="xl:col-span-3">
        {selectedElement ? (
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">
                تحرير محتوى: {selectedElement.content?.title || selectedElement.type}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderContentEditor(selectedElement)}
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardContent className="p-12 text-center">
              <Edit className="h-12 w-12 mx-auto mb-4 text-gray-400 opacity-50" />
              <p className="text-gray-400">اختر عنصراً من القائمة لبدء التحرير</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

// Hero Content Editor
const HeroContentEditor = ({ element, onUpdate }: { element: LayoutElement; onUpdate: (id: string, content: any) => void }) => {
  const [content, setContent] = useState(element.content || {});

  const handleSave = () => {
    onUpdate(element.id, content);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-gray-300">العنوان الرئيسي</Label>
        <Input
          value={content.title || ''}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
          className="bg-slate-700 border-gray-600 text-white"
        />
      </div>

      <div>
        <Label className="text-gray-300">العنوان الفرعي</Label>
        <Input
          value={content.subtitle || ''}
          onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
          className="bg-slate-700 border-gray-600 text-white"
        />
      </div>

      <div>
        <Label className="text-gray-300">الوصف</Label>
        <Textarea
          value={content.description || ''}
          onChange={(e) => setContent({ ...content, description: e.target.value })}
          className="bg-slate-700 border-gray-600 text-white"
          rows={4}
        />
      </div>

      <div>
        <Label className="text-gray-300">نص الزر</Label>
        <Input
          value={content.buttonText || ''}
          onChange={(e) => setContent({ ...content, buttonText: e.target.value })}
          className="bg-slate-700 border-gray-600 text-white"
        />
      </div>

      <div>
        <Label className="text-gray-300">رابط الزر</Label>
        <Input
          value={content.buttonLink || ''}
          onChange={(e) => setContent({ ...content, buttonLink: e.target.value })}
          className="bg-slate-700 border-gray-600 text-white"
          placeholder="https://..."
        />
      </div>

      <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
        <Save className="h-4 w-4 mr-2" />
        حفظ التغييرات
      </Button>
    </div>
  );
};

// Services Content Editor
const ServicesContentEditor = ({ element, onUpdate }: { element: LayoutElement; onUpdate: (id: string, content: any) => void }) => {
  const [content, setContent] = useState(element.content || { title: 'خدماتنا', services: [] });

  const addService = () => {
    const newService = {
      id: Date.now().toString(),
      title: 'خدمة جديدة',
      description: 'وصف الخدمة',
      icon: '⚙️',
      price: ''
    };
    setContent({
      ...content,
      services: [...(content.services || []), newService]
    });
  };

  const updateService = (serviceId: string, updates: any) => {
    const updatedServices = content.services?.map((service: any) =>
      service.id === serviceId ? { ...service, ...updates } : service
    );
    setContent({ ...content, services: updatedServices });
  };

  const deleteService = (serviceId: string) => {
    const filteredServices = content.services?.filter((service: any) => service.id !== serviceId);
    setContent({ ...content, services: filteredServices });
  };

  const handleSave = () => {
    onUpdate(element.id, content);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-gray-300">عنوان القسم</Label>
        <Input
          value={content.title || ''}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
          className="bg-slate-700 border-gray-600 text-white"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <Label className="text-gray-300">الخدمات</Label>
          <Button onClick={addService} size="sm" className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            إضافة خدمة
          </Button>
        </div>

        <div className="space-y-4">
          {content.services?.map((service: any, index: number) => (
            <Card key={service.id} className="bg-slate-700/50 border-gray-600">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">خدمة {index + 1}</h4>
                  <Button
                    onClick={() => deleteService(service.id)}
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 p-0 border-red-500/50 text-red-400 hover:bg-red-600/20"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-gray-400 text-sm">العنوان</Label>
                    <Input
                      value={service.title}
                      onChange={(e) => updateService(service.id, { title: e.target.value })}
                      className="bg-slate-800 border-gray-600 text-white text-sm"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-400 text-sm">الأيقونة</Label>
                    <Input
                      value={service.icon}
                      onChange={(e) => updateService(service.id, { icon: e.target.value })}
                      className="bg-slate-800 border-gray-600 text-white text-sm"
                    />
                  </div>
                </div>
                
                <div className="mt-3">
                  <Label className="text-gray-400 text-sm">الوصف</Label>
                  <Textarea
                    value={service.description}
                    onChange={(e) => updateService(service.id, { description: e.target.value })}
                    className="bg-slate-800 border-gray-600 text-white text-sm"
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
        <Save className="h-4 w-4 mr-2" />
        حفظ التغييرات
      </Button>
    </div>
  );
};

// Other content editors would follow similar patterns...
const ProductsContentEditor = ({ element, onUpdate }: { element: LayoutElement; onUpdate: (id: string, content: any) => void }) =>  <div className="text-gray-400">محرر المنتجات قيد التطوير</div>;

const AboutContentEditor = ({ element, onUpdate }: { element: LayoutElement; onUpdate: (id: string, content: any) => void }) =>  <div className="text-gray-400">محرر من نحن قيد التطوير</div>;

const GalleryContentEditor = ({ element, onUpdate }: { element: LayoutElement; onUpdate: (id: string, content: any) => void }) =>  <div className="text-gray-400">محرر المعرض قيد التطوير</div>;

const ContactContentEditor = ({ element, onUpdate }: { element: LayoutElement; onUpdate: (id: string, content: any) => void }) =>  <div className="text-gray-400">محرر التواصل قيد التطوير</div>;

export default ContentEditor;
