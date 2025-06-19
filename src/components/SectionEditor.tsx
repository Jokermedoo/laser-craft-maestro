
import React, { useState } from 'react';
import { Edit3, Save, X } from 'lucide-react';
import { SectionConfig } from '@/config/sectionsConfig';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

interface SectionEditorProps {
  section: SectionConfig;
  onClose: () => void;
}

const SectionEditor: React.FC<SectionEditorProps> = ({ section, onClose }) => {
  const { updateSection } = useSectionConfig();
  const [formData, setFormData] = useState({
    name: section.name,
    component: section.component,
    enabled: section.enabled,
    order: section.order
  });

  const handleSave = () => {
    updateSection(section.id, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl p-6 w-full max-w-md border border-purple-500/30">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Edit3 className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold text-white">تعديل القسم</h3>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={onClose}
            className="p-2"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <Input
            label="اسم القسم"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="bg-slate-700 border-gray-600 text-white"
          />

          <Input
            label="مكون القسم"
            value={formData.component}
            onChange={(e) => setFormData(prev => ({ ...prev, component: e.target.value }))}
            className="bg-slate-700 border-gray-600 text-white"
          />

          <Input
            label="ترتيب القسم"
            type="number"
            value={formData.order.toString()}
            onChange={(e) => setFormData(prev => ({ ...prev, order: parseInt(e.target.value) || 1 }))}
            className="bg-slate-700 border-gray-600 text-white"
          />

          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <input
              type="checkbox"
              id="enabled"
              checked={formData.enabled}
              onChange={(e) => setFormData(prev => ({ ...prev, enabled: e.target.checked }))}
              className="w-4 h-4 text-purple-600"
            />
            <label htmlFor="enabled" className="text-gray-300">
              تفعيل القسم
            </label>
          </div>
        </div>

        <div className="flex space-x-4 rtl:space-x-reverse mt-6">
          <Button
            onClick={handleSave}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            <Save className="w-4 h-4 ml-2" />
            حفظ
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 border-gray-500 text-gray-400"
          >
            إلغاء
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionEditor;
