
import React from 'react';
import { Eye, EyeOff, ArrowUp, ArrowDown, Settings } from 'lucide-react';
import { SectionConfig } from '@/config/sectionsConfig';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import Button from '@/components/common/Button';

const SectionController: React.FC = () => {
  const { sections, toggleSection, reorderSections } = useSectionConfig();

  const moveSectionUp = (index: number) => {
    if (index > 0) {
      const newOrder = [...sections];
      [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
      reorderSections(newOrder);
    }
  };

  const moveSectionDown = (index: number) => {
    if (index < sections.length - 1) {
      const newOrder = [...sections];
      [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
      reorderSections(newOrder);
    }
  };

  return (
    <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/30">
      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
        <Settings className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">إدارة أقسام الصفحة</h3>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`p-4 rounded-lg border transition-all ${
              section.enabled 
                ? 'bg-slate-700/50 border-green-500/30' 
                : 'bg-slate-800/50 border-gray-600/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-sm text-gray-400">#{section.order}</span>
                <h4 className="text-white font-medium">{section.name}</h4>
                <span className="text-xs text-gray-500">({section.component})</span>
              </div>

              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                {/* Reorder buttons */}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => moveSectionUp(index)}
                  disabled={index === 0}
                  className="p-2"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
                
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => moveSectionDown(index)}
                  disabled={index === sections.length - 1}
                  className="p-2"
                >
                  <ArrowDown className="w-4 h-4" />
                </Button>

                {/* Toggle visibility */}
                <Button
                  size="sm"
                  onClick={() => toggleSection(section.id)}
                  className={`p-2 ${
                    section.enabled 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                >
                  {section.enabled ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionController;
