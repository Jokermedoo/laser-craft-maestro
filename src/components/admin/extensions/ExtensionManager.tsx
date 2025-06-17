
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Puzzle, 
  Download, 
  Trash2, 
  Settings, 
  Star, 
  Search,
  Plus,
  Globe,
  Zap,
  BarChart3,
  Palette,
  MessageSquare
} from 'lucide-react';

interface Extension {
  id: string;
  name: string;
  description: string;
  version: string;
  author: string;
  category: 'productivity' | 'design' | 'analytics' | 'communication' | 'security';
  rating: number;
  downloads: number;
  installed: boolean;
  enabled: boolean;
  price: number;
  icon: string;
}

const ExtensionManager = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const [extensions] = useState<Extension[]>([
    {
      id: '1',
      name: 'محرر الصور المتقدم',
      description: 'أدوات تحرير وتحسين الصور مباشرة داخل النظام',
      version: '2.1.0',
      author: 'TechTeam',
      category: 'design',
      rating: 4.8,
      downloads: 1250,
      installed: true,
      enabled: true,
      price: 0,
      icon: 'palette'
    },
    {
      id: '2',
      name: 'تحليلات التسويق الذكية',
      description: 'تحليل متقدم لأداء التسويق وسلوك العملاء',
      version: '1.5.2',
      author: 'Analytics Pro',
      category: 'analytics',
      rating: 4.6,
      downloads: 890,
      installed: false,
      enabled: false,
      price: 29.99,
      icon: 'chart'
    },
    {
      id: '3',
      name: 'دردشة العملاء المباشرة',
      description: 'نظام دردشة مباشر مع العملاء مع ذكاء اصطناعي',
      version: '3.0.1',
      author: 'ChatBot Inc',
      category: 'communication',
      rating: 4.9,
      downloads: 2100,
      installed: true,
      enabled: false,
      price: 19.99,
      icon: 'message'
    },
    {
      id: '4',
      name: 'مُسرّع الأداء',
      description: 'تحسين سرعة التحميل والأداء تلقائياً',
      version: '1.8.0',
      author: 'SpeedBoost',
      category: 'productivity',
      rating: 4.7,
      downloads: 1650,
      installed: false,
      enabled: false,
      price: 0,
      icon: 'zap'
    },
    {
      id: '5',
      name: 'حماية متقدمة ضد الهجمات',
      description: 'طبقة حماية إضافية ضد البريد المزعج والهجمات',
      version: '2.3.1',
      author: 'SecureShield',
      category: 'security',
      rating: 4.5,
      downloads: 980,
      installed: false,
      enabled: false,
      price: 39.99,
      icon: 'shield'
    }
  ]);

  const categories = [
    { id: 'all', name: 'الكل', icon: Globe },
    { id: 'productivity', name: 'الإنتاجية', icon: Zap },
    { id: 'design', name: 'التصميم', icon: Palette },
    { id: 'analytics', name: 'التحليلات', icon: BarChart3 },
    { id: 'communication', name: 'التواصل', icon: MessageSquare },
    { id: 'security', name: 'الأمان', icon: Settings }
  ];

  const getExtensionIcon = (iconType: string) => {
    switch (iconType) {
      case 'palette': return <Palette className="h-8 w-8 text-purple-400" />;
      case 'chart': return <BarChart3 className="h-8 w-8 text-blue-400" />;
      case 'message': return <MessageSquare className="h-8 w-8 text-green-400" />;
      case 'zap': return <Zap className="h-8 w-8 text-yellow-400" />;
      case 'shield': return <Settings className="h-8 w-8 text-red-400" />;
      default: return <Puzzle className="h-8 w-8 text-gray-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'productivity': return 'bg-yellow-600';
      case 'design': return 'bg-purple-600';
      case 'analytics': return 'bg-blue-600';
      case 'communication': return 'bg-green-600';
      case 'security': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const filteredExtensions = extensions.filter(ext => {
    const matchesSearch = ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ext.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || ext.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const installedExtensions = extensions.filter(ext => ext.installed);
  const availableExtensions = extensions.filter(ext => !ext.installed);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Puzzle className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">إدارة الإضافات والتوسعات</h2>
            <p className="text-gray-400">توسيع وظائف النظام بإضافات ذكية</p>
          </div>
        </div>
        
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 ml-2" />
          رفع إضافة مخصصة
        </Button>
      </div>

      <Tabs defaultValue="installed" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
          <TabsTrigger value="installed" className="data-[state=active]:bg-purple-600">
            المثبتة ({installedExtensions.length})
          </TabsTrigger>
          <TabsTrigger value="marketplace" className="data-[state=active]:bg-purple-600">
            متجر الإضافات ({availableExtensions.length})
          </TabsTrigger>
          <TabsTrigger value="custom" className="data-[state=active]:bg-purple-600">
            إضافات مخصصة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="installed" className="mt-6 space-y-6">
          {installedExtensions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {installedExtensions.map((extension) => (
                <Card key={extension.id} className="bg-slate-800/50 border-purple-500/30">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        {getExtensionIcon(extension.icon)}
                        <div>
                          <CardTitle className="text-white text-lg">{extension.name}</CardTitle>
                          <p className="text-gray-400 text-sm">v{extension.version}</p>
                        </div>
                      </div>
                      <Badge className={extension.enabled ? 'bg-green-600' : 'bg-gray-600'}>
                        {extension.enabled ? 'مفعل' : 'معطل'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm">{extension.description}</p>
                    
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400 text-sm">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{extension.rating}</span>
                      <span>•</span>
                      <span>{extension.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-blue-500/50 text-blue-400"
                      >
                        <Settings className="h-4 w-4 ml-2" />
                        إعدادات
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500/50 text-red-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-slate-800/50 border-purple-500/30">
              <CardContent className="p-8 text-center">
                <Puzzle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-white text-lg mb-2">لا توجد إضافات مثبتة</h3>
                <p className="text-gray-400 mb-4">ابدأ بتصفح متجر الإضافات لإضافة وظائف جديدة</p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  تصفح المتجر
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="marketplace" className="mt-6 space-y-6">
          {/* شريط البحث والفلترة */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 rtl:md:space-x-reverse">
            <div className="flex-1">
              <Input
                placeholder="البحث في الإضافات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            <div className="flex space-x-2 rtl:space-x-reverse">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-purple-600" : "border-purple-500/50 text-purple-400"}
                >
                  <category.icon className="h-4 w-4 ml-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* قائمة الإضافات المتاحة */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExtensions.filter(ext => !ext.installed).map((extension) => (
              <Card key={extension.id} className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      {getExtensionIcon(extension.icon)}
                      <div>
                        <CardTitle className="text-white text-lg">{extension.name}</CardTitle>
                        <p className="text-gray-400 text-sm">by {extension.author}</p>
                      </div>
                    </div>
                    <Badge className={`${getCategoryColor(extension.category)} text-white`}>
                      {categories.find(c => c.id === extension.category)?.name}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">{extension.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{extension.rating}</span>
                      <span>•</span>
                      <Download className="h-4 w-4" />
                      <span>{extension.downloads}</span>
                    </div>
                    
                    <div className="text-white font-bold">
                      {extension.price === 0 ? 'مجاني' : `$${extension.price}`}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Download className="h-4 w-4 ml-2" />
                    {extension.price === 0 ? 'تثبيت مجاني' : 'شراء وتثبيت'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="custom" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">إضافات مخصصة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-white text-lg mb-2">إنشاء إضافة مخصصة</h3>
                <p className="text-gray-400 mb-4">
                  قم برفع إضافة مطورة خصيصاً لاحتياجاتك
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 ml-2" />
                  رفع إضافة
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExtensionManager;
