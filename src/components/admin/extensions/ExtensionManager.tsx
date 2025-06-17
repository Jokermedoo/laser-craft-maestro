
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Puzzle, 
  Download, 
  Settings, 
  Star, 
  Search, 
  Plus,
  Trash2,
  RefreshCw,
  Shield,
  Zap,
  Eye,
  Users
} from 'lucide-react';

interface Extension {
  id: string;
  name: string;
  description: string;
  version: string;
  category: string;
  installed: boolean;
  enabled: boolean;
  rating: number;
  downloads: number;
  size: string;
  author: string;
}

const ExtensionManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const [extensions] = useState<Extension[]>([
    {
      id: '1',
      name: 'محرر الصور المتقدم',
      description: 'محرر صور متقدم مع أدوات احترافية للتعديل والتحسين',
      version: '2.1.0',
      category: 'media',
      installed: true,
      enabled: true,
      rating: 4.8,
      downloads: 15420,
      size: '2.3 MB',
      author: 'فريق التطوير'
    },
    {
      id: '2',
      name: 'نظام الدفع المتكامل',
      description: 'نظام دفع شامل يدعم جميع وسائل الدفع الإلكتروني',
      version: '1.5.2',
      category: 'payment',
      installed: false,
      enabled: false,
      rating: 4.9,
      downloads: 8930,
      size: '1.8 MB',
      author: 'PayTech Solutions'
    },
    {
      id: '3',
      name: 'أدوات التحليلات المتقدمة',
      description: 'تحليلات متقدمة مع رسوم بيانية تفاعلية',
      version: '3.0.1',
      category: 'analytics',
      installed: true,
      enabled: false,
      rating: 4.7,
      downloads: 12350,
      size: '3.1 MB',
      author: 'Analytics Pro'
    },
    {
      id: '4',
      name: 'مساعد الذكاء الاصطناعي',
      description: 'مساعد ذكي لتحسين المحتوى والتفاعل مع العملاء',
      version: '1.0.0',
      category: 'ai',
      installed: false,
      enabled: false,
      rating: 5.0,
      downloads: 25670,
      size: '4.2 MB',
      author: 'AI Solutions'
    }
  ]);

  const categories = [
    { id: 'all', name: 'الكل', icon: Puzzle },
    { id: 'media', name: 'الوسائط', icon: Eye },
    { id: 'payment', name: 'المدفوعات', icon: Shield },
    { id: 'analytics', name: 'التحليلات', icon: Zap },
    { id: 'ai', name: 'الذكاء الاصطناعي', icon: Users }
  ];

  const filteredExtensions = extensions.filter(ext => {
    const matchesSearch = ext.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ext.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || ext.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const installedExtensions = extensions.filter(ext => ext.installed);
  const availableExtensions = extensions.filter(ext => !ext.installed);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Puzzle;
  };

  const handleInstall = (extensionId: string) => {
    console.log(`Installing extension ${extensionId}`);
  };

  const handleUninstall = (extensionId: string) => {
    console.log(`Uninstalling extension ${extensionId}`);
  };

  const handleToggle = (extensionId: string, enabled: boolean) => {
    console.log(`Toggling extension ${extensionId} to ${enabled}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Puzzle className="h-8 w-8 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">إدارة الإضافات</h2>
          <p className="text-gray-400">تثبيت وإدارة الإضافات لتوسيع وظائف النظام</p>
        </div>
      </div>

      {/* أدوات البحث والتصفية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="البحث في الإضافات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : 'border-slate-600 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="installed" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
          <TabsTrigger value="installed" className="data-[state=active]:bg-purple-600">
            الإضافات المثبتة ({installedExtensions.length})
          </TabsTrigger>
          <TabsTrigger value="available" className="data-[state=active]:bg-purple-600">
            الإضافات المتاحة ({availableExtensions.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="installed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installedExtensions
              .filter(ext => {
                const matchesSearch = ext.name.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = selectedCategory === 'all' || ext.category === selectedCategory;
                return matchesSearch && matchesCategory;
              })
              .map((extension) => {
                const CategoryIcon = getCategoryIcon(extension.category);
                return (
                  <Card key={extension.id} className="bg-slate-800/50 border-purple-500/30">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <CategoryIcon className="h-8 w-8 text-purple-400" />
                          <div>
                            <CardTitle className="text-white text-lg">{extension.name}</CardTitle>
                            <p className="text-sm text-gray-400">v{extension.version}</p>
                          </div>
                        </div>
                        <Switch
                          checked={extension.enabled}
                          onCheckedChange={(checked) => handleToggle(extension.id, checked)}
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm mb-4">{extension.description}</p>
                      
                      <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          {extension.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {extension.downloads.toLocaleString()}
                        </div>
                        <span>{extension.size}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Settings className="h-4 w-4 mr-2" />
                          إعدادات
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleUninstall(extension.id)}
                          className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </TabsContent>

        <TabsContent value="available" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableExtensions
              .filter(ext => {
                const matchesSearch = ext.name.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = selectedCategory === 'all' || ext.category === selectedCategory;
                return matchesSearch && matchesCategory;
              })
              .map((extension) => {
                const CategoryIcon = getCategoryIcon(extension.category);
                return (
                  <Card key={extension.id} className="bg-slate-800/50 border-slate-600/30 hover:border-purple-500/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <CategoryIcon className="h-8 w-8 text-gray-400" />
                          <div>
                            <CardTitle className="text-white text-lg">{extension.name}</CardTitle>
                            <p className="text-sm text-gray-400">v{extension.version} • {extension.author}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          جديد
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm mb-4">{extension.description}</p>
                      
                      <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          {extension.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {extension.downloads.toLocaleString()}
                        </div>
                        <span>{extension.size}</span>
                      </div>

                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => handleInstall(extension.id)}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        تثبيت
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExtensionManager;
