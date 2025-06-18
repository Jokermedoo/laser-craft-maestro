
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Download, Eye } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: string;
  rating: number;
  downloads: number;
  config: any;
  layout: any;
}

interface TemplateGalleryProps {
  onTemplateSelect: (template: Template) => void;
}

const TemplateGallery = ({ onTemplateSelect }: TemplateGalleryProps) => {
  const templates: Template[] = [
    {
      id: 'modern-business',
      name: 'موقع الأعمال الحديث',
      description: 'قالب عصري للشركات والخدمات التجارية',
      category: 'أعمال',
      preview: '/placeholder.svg',
      rating: 4.8,
      downloads: 1250,
      config: {
        name: 'شركة الابتكار',
        colors: {
          primary: '#2563EB',
          secondary: '#1E40AF',
          accent: '#F59E0B',
          background: '#FFFFFF',
          text: '#1F2937',
        },
        fonts: {
          primary: 'Cairo, sans-serif',
          secondary: 'Inter, sans-serif',
        }
      },
      layout: [
        {
          id: 'hero-1',
          type: 'hero',
          content: {
            title: 'شركة الابتكار للحلول التقنية',
            subtitle: 'نحن رواد التحول الرقمي',
            description: 'نقدم أفضل الحلول التقنية المبتكرة لنمو أعمالك',
            buttonText: 'اكتشف خدماتنا'
          },
          style: {},
          visible: true,
          order: 1,
        }
      ]
    },
    {
      id: 'laser-workshop',
      name: 'ورشة الليزر المتخصصة',
      description: 'قالب مخصص لورش النقش بالليزر',
      category: 'ورش',
      preview: '/placeholder.svg',
      rating: 5.0,
      downloads: 320,
      config: {
        name: 'ورشة المعز لخدمات الليزر',
        colors: {
          primary: '#8B5CF6',
          secondary: '#06B6D4',
          accent: '#F59E0B',
          background: '#0F172A',
          text: '#FFFFFF',
        },
        fonts: {
          primary: 'Cairo, sans-serif',
          secondary: 'Inter, sans-serif',
        }
      },
      layout: [
        {
          id: 'hero-2',
          type: 'hero',
          content: {
            title: 'ورشة المعز لخدمات الليزر',
            subtitle: 'الدقة والإتقان في كل قطعة',
            description: 'متخصصون في النقش والحفر بالليزر بأحدث التقنيات',
            buttonText: 'اطلب خدمتك الآن'
          },
          style: {},
          visible: true,
          order: 1,
        }
      ]
    },
    {
      id: 'medical-clinic',
      name: 'عيادة طبية متطورة',
      description: 'قالب احترافي للعيادات والمراكز الطبية',
      category: 'طبي',
      preview: '/placeholder.svg',
      rating: 4.9,
      downloads: 890,
      config: {
        name: 'عيادة الشفاء الطبية',
        colors: {
          primary: '#10B981',
          secondary: '#059669',
          accent: '#3B82F6',
          background: '#F8FAFC',
          text: '#1E293B',
        },
        fonts: {
          primary: 'Cairo, sans-serif',
          secondary: 'Inter, sans-serif',
        }
      },
      layout: [
        {
          id: 'hero-3',
          type: 'hero',
          content: {
            title: 'عيادة الشفاء الطبية',
            subtitle: 'صحتك أولويتنا',
            description: 'نقدم أفضل الخدمات الطبية بأحدث التقنيات والمعدات',
            buttonText: 'احجز موعدك'
          },
          style: {},
          visible: true,
          order: 1,
        }
      ]
    },
    {
      id: 'restaurant-modern',
      name: 'مطعم عصري',
      description: 'قالب أنيق للمطاعم والمقاهي',
      category: 'مطاعم',
      preview: '/placeholder.svg',
      rating: 4.7,
      downloads: 1450,
      config: {
        name: 'مطعم الذواقة',
        colors: {
          primary: '#DC2626',
          secondary: '#B91C1C',
          accent: '#F59E0B',
          background: '#FEF2F2',
          text: '#7F1D1D',
        },
        fonts: {
          primary: 'Cairo, sans-serif',
          secondary: 'Playfair Display, serif',
        }
      },
      layout: [
        {
          id: 'hero-4',
          type: 'hero',
          content: {
            title: 'مطعم الذواقة',
            subtitle: 'نكهات استثنائية وتجربة لا تُنسى',
            description: 'اكتشف أشهى الأطباق المحضرة بعناية من أجود المكونات',
            buttonText: 'احجز طاولتك'
          },
          style: {},
          visible: true,
          order: 1,
        }
      ]
    },
    {
      id: 'tech-startup',
      name: 'شركة تقنية ناشئة',
      description: 'قالب عصري للشركات التقنية الناشئة',
      category: 'تقنية',
      preview: '/placeholder.svg',
      rating: 4.8,
      downloads: 670,
      config: {
        name: 'تك إنوفيشن',
        colors: {
          primary: '#6366F1',
          secondary: '#4F46E5',
          accent: '#EC4899',
          background: '#0F172A',
          text: '#F1F5F9',
        },
        fonts: {
          primary: 'Inter, sans-serif',
          secondary: 'JetBrains Mono, monospace',
        }
      },
      layout: [
        {
          id: 'hero-5',
          type: 'hero',
          content: {
            title: 'تك إنوفيشن',
            subtitle: 'نبني مستقبل التكنولوجيا',
            description: 'حلول برمجية متطورة ومبتكرة لتحويل أفكارك إلى واقع رقمي',
            buttonText: 'ابدأ مشروعك'
          },
          style: {},
          visible: true,
          order: 1,
        }
      ]
    },
    {
      id: 'fashion-boutique',
      name: 'بوتيك أزياء',
      description: 'قالب أنيق لمحلات الأزياء والموضة',
      category: 'أزياء',
      preview: '/placeholder.svg',
      rating: 4.6,
      downloads: 920,
      config: {
        name: 'بوتيك الأناقة',
        colors: {
          primary: '#BE185D',
          secondary: '#9D174D',
          accent: '#F472B6',
          background: '#FDF2F8',
          text: '#831843',
        },
        fonts: {
          primary: 'Playfair Display, serif',
          secondary: 'Inter, sans-serif',
        }
      },
      layout: [
        {
          id: 'hero-6',
          type: 'hero',
          content: {
            title: 'بوتيك الأناقة',
            subtitle: 'حيث تلتقي الموضة بالأناقة',
            description: 'اكتشف أحدث صيحات الموضة والأزياء العصرية',
            buttonText: 'تسوق الآن'
          },
          style: {},
          visible: true,
          order: 1,
        }
      ]
    }
  ];

  const categories = ['الكل', 'أعمال', 'ورش', 'تقنية', 'طبي', 'مطاعم', 'أزياء'];
  const [selectedCategory, setSelectedCategory] = React.useState('الكل');

  const filteredTemplates = selectedCategory === 'الكل' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="cursor-pointer hover:bg-purple-600/20"
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="bg-slate-800/50 border-purple-500/30 hover:border-purple-400 transition-all group">
            <CardHeader className="pb-3">
              <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden mb-3">
                <img 
                  src={template.preview} 
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-white text-lg">{template.name}</CardTitle>
              <p className="text-gray-400 text-sm">{template.description}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-xs">
                  {template.category}
                </Badge>
                <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 ml-1" />
                    {template.rating}
                  </div>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 ml-1" />
                    {template.downloads}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Button
                  onClick={() => onTemplateSelect(template)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  size="sm"
                >
                  استخدام القالب
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-600/20"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">قوالب مصممة بعناية</h3>
            <p className="text-gray-400 mb-4">
              جميع القوالب مطورة بواسطة محمد سليم وفريق التطوير المتخصص
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400">{templates.length}+</div>
                <div className="text-sm text-gray-400">قوالب متاحة</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">4.8</div>
                <div className="text-sm text-gray-400">متوسط التقييم</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">
                  {templates.reduce((sum, t) => sum + t.downloads, 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">إجمالي التحميلات</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TemplateGallery;
