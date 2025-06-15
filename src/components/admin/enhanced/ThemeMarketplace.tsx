
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, Download, Eye, Search, Filter, Heart } from 'lucide-react';

interface ThemeTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  downloads: number;
  preview: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  tags: string[];
  featured: boolean;
}

const ThemeMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  const templates: ThemeTemplate[] = [
    {
      id: 'modern-dark',
      name: 'الظلام العصري',
      description: 'تصميم عصري بألوان داكنة أنيقة',
      category: 'modern',
      rating: 4.8,
      downloads: 1250,
      preview: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      colors: { primary: '#667eea', secondary: '#764ba2', accent: '#f093fb' },
      tags: ['داكن', 'عصري', 'أنيق'],
      featured: true
    },
    {
      id: 'corporate-blue',
      name: 'الأزرق المؤسسي',
      description: 'مثالي للمواقع المؤسسية والتجارية',
      category: 'corporate',
      rating: 4.6,
      downloads: 980,
      preview: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
      colors: { primary: '#2196f3', secondary: '#21cbf3', accent: '#ff9800' },
      tags: ['مؤسسي', 'أزرق', 'احترافي'],
      featured: false
    },
    {
      id: 'creative-rainbow',
      name: 'الإبداع الملون',
      description: 'ألوان زاهية للمواقع الإبداعية',
      category: 'creative',
      rating: 4.9,
      downloads: 756,
      preview: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)',
      colors: { primary: '#ff6b6b', secondary: '#4ecdc4', accent: '#45b7d1' },
      tags: ['إبداعي', 'ملون', 'زاهي'],
      featured: true
    },
    {
      id: 'minimalist-white',
      name: 'البساطة البيضاء',
      description: 'تصميم بسيط ونظيف بألوان فاتحة',
      category: 'minimal',
      rating: 4.4,
      downloads: 1100,
      preview: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      colors: { primary: '#c3cfe2', secondary: '#f5f7fa', accent: '#667eea' },
      tags: ['بسيط', 'نظيف', 'فاتح'],
      featured: false
    },
    {
      id: 'sunset-warm',
      name: 'غروب دافئ',
      description: 'ألوان دافئة مستوحاة من الغروب',
      category: 'warm',
      rating: 4.7,
      downloads: 890,
      preview: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
      colors: { primary: '#ff9a9e', secondary: '#fecfef', accent: '#a8edea' },
      tags: ['دافئ', 'غروب', 'رومانسي'],
      featured: true
    },
    {
      id: 'tech-neon',
      name: 'النيون التقني',
      description: 'ألوان نيون للمواقع التقنية',
      category: 'tech',
      rating: 4.5,
      downloads: 567,
      preview: 'linear-gradient(135deg, #00f5ff 0%, #0080ff 100%)',
      colors: { primary: '#00f5ff', secondary: '#0080ff', accent: '#ff0080' },
      tags: ['تقني', 'نيون', 'مستقبلي'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'modern', name: 'عصري' },
    { id: 'corporate', name: 'مؤسسي' },
    { id: 'creative', name: 'إبداعي' },
    { id: 'minimal', name: 'بسيط' },
    { id: 'warm', name: 'دافئ' },
    { id: 'tech', name: 'تقني' }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.includes(searchTerm));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const applyTemplate = (template: ThemeTemplate) => {
    console.log('تطبيق القالب:', template);
    // هنا سيتم تطبيق القالب على النظام
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Star className="h-8 w-8 text-yellow-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">متجر القوالب</h2>
            <p className="text-gray-400">اختر من مجموعة كبيرة من القوالب الجاهزة</p>
          </div>
        </div>
      </div>

      {/* شريط البحث والفلترة */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="ابحث عن القوالب..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-800 border-gray-600 text-white pr-10"
          />
        </div>
        
        <div className="flex space-x-2 rtl:space-x-reverse overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* القوالب المميزة */}
      {selectedCategory === 'all' && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">القوالب المميزة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.filter(t => t.featured).map((template) => (
              <Card key={template.id} className="bg-slate-800/50 border-yellow-500/30 relative overflow-hidden">
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-yellow-500 text-black">مميز</Badge>
                </div>
                <CardHeader className="pb-2">
                  <div
                    className="w-full h-32 rounded-lg mb-3"
                    style={{ background: template.preview }}
                  />
                  <CardTitle className="text-white text-lg">{template.name}</CardTitle>
                  <p className="text-gray-400 text-sm">{template.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{template.rating}</span>
                      <span className="text-gray-400 text-sm">({template.downloads})</span>
                    </div>
                    <Button
                      onClick={() => toggleFavorite(template.id)}
                      variant="ghost"
                      size="sm"
                      className="p-1"
                    >
                      <Heart 
                        className={`h-4 w-4 ${favorites.includes(template.id) ? 'text-red-400 fill-current' : 'text-gray-400'}`} 
                      />
                    </Button>
                  </div>

                  <div className="flex space-x-1 rtl:space-x-reverse mb-4">
                    {Object.values(template.colors).map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Button
                      onClick={() => applyTemplate(template)}
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                    >
                      <Download className="h-4 w-4 ml-2" />
                      تطبيق
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-600">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* جميع القوالب */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">
            {selectedCategory === 'all' ? 'جميع القوالب' : `قوالب ${categories.find(c => c.id === selectedCategory)?.name}`}
          </h3>
          <span className="text-gray-400">{filteredTemplates.length} قالب</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="bg-slate-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all">
              <CardHeader className="pb-2">
                <div
                  className="w-full h-24 rounded-lg mb-2"
                  style={{ background: template.preview }}
                />
                <CardTitle className="text-white text-base">{template.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs">{template.rating}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{template.downloads}</span>
                </div>

                <div className="flex space-x-1 rtl:space-x-reverse mb-3">
                  {Object.values(template.colors).map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <Button
                  onClick={() => applyTemplate(template)}
                  size="sm"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  تطبيق
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeMarketplace;
