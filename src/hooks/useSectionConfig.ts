
import { useState, useEffect } from 'react';
import { SectionConfig, defaultSectionsConfig } from '@/config/sectionsConfig';

export const useSectionConfig = () => {
  const [sections, setSections] = useState<SectionConfig[]>(defaultSectionsConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSections();
  }, []);

  const loadSections = () => {
    try {
      const saved = localStorage.getItem('sectionsConfig');
      if (saved) {
        setSections(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading sections config:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateSection = (id: string, updates: Partial<SectionConfig>) => {
    setSections(prev => {
      const updated = prev.map(section => 
        section.id === id ? { ...section, ...updates } : section
      );
      localStorage.setItem('sectionsConfig', JSON.stringify(updated));
      return updated;
    });
  };

  const reorderSections = (newOrder: SectionConfig[]) => {
    setSections(newOrder);
    localStorage.setItem('sectionsConfig', JSON.stringify(newOrder));
  };

  const toggleSection = (id: string) => {
    updateSection(id, { enabled: !sections.find(s => s.id === id)?.enabled });
  };

  return {
    sections,
    loading,
    updateSection,
    reorderSections,
    toggleSection
  };
};
