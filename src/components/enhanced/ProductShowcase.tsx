
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  MessageSquare, 
  Clock, 
  Award, 
  Zap,
  Filter,
  Grid,
  List
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  features: string[];
  popular?: boolean;
}

interface ProductShowcaseProps {
  whatsappNumber: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "نقش أسماء على الخشب",
    description: "نقش أسماء وعبارات مخصصة على الخشب الطبيعي بجودة عالية",
    price: "من 75 جنيه",
    duration: "30-60 دقيقة",
    rating: 4.9,
    reviews: 156,
    category: "خشب",
    image: "🪵",
    features: ["خشب طبيعي", "نقش دقيق", "تشطيب ممتاز"],
    popular: true
  },
  {
    id: 2,
    name: "لوحات أكريليك مضيئة",
    description: "لوحات إعلانية مضيئة من الأكريليك مع إضاءة LED",
    price: "من 200 جنيه",
    duration: "2-4 ساعات",
    rating: 4.8,
    reviews: 98,
    category: "أكريليك",
    image: "💡",
    features: ["إضاءة LED", "مقاوم للماء", "ألوان متعددة"]
  },
  {
    id: 3,
    name: "نقش على المعادن",
    description: "نقش دائم على المعادن المختلفة للاستخدامات الصناعية والشخصية",
    price: "من 100 جنيه",
    duration: "45-90 دقيقة",
    rating: 4.7,
    reviews: 73,
    category: "معادن",
    image: "🔗",
    features: ["نقش دائم", "مقاوم للصدأ", "دقة عالية"]
  },
  {
    id: 4,
    name: "هدايا مخصصة",
    description: "هدايا مخصصة منقوشة بالليزر للمناسبات الخاصة",
    price: "من 50 جنيه",
    duration: "30-120 دقيقة",
    rating: 5.0,
    reviews: 124,
    category: "هدايا",
    image: "🎁",
    features: ["تصميم مخصص", "مناسبات مختلفة", "جودة ممتازة"],
    popular: true
  },
  {
    id: 5,
    name: "قطع غيار بالليزر",
    description: "قطع غيار مخصصة مقطوعة بالليزر للمعدات والآلات",
    price: "حسب الطلب",
    duration: "1-6 ساعات",
    rating: 4.6,
    reviews: 45,
    category: "صناعي",
    image: "⚙️",
    features: ["دقة عالية", "مواد متنوعة", "مواصفات دقيقة"]
  },
  {
    id: 6,
    name: "يافطات محلات",
    description: "يافطات وعلامات تجارية للمحلات والشركات",
    price: "من 300 جنيه",
    duration: "3-8 ساعات",
    rating: 4.8,
    reviews: 67,
    category: "تجاري",
    image: "🏪",
    features: ["مواد عالية الجودة", "مقاوم للطقس", "تركيب مجاني"]
  }
];

const ProductShowcase = ({ whatsappNumber }: ProductShowcaseProps) => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['الكل', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products
    .filter(product => selectedCategory === 'الكل' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
        default:
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      }
    });

  return (
    <section className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-lg mb-4 block">منتجاتنا وخدماتنا</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            اكتشف <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">إبداعاتنا</span>
          </h2>
        </div>

        {/* Filters and Controls */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-semibold">تصنيف:</span>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800 border border-purple-500/30 text-white rounded px-3 py-2 text-sm"
              >
                <option value="popular">الأكثر شعبية</option>
                <option value="rating">الأعلى تقييماً</option>
                <option value="price">السعر</option>
              </select>
              
              <div className="flex border border-purple-500/30 rounded">
                <Button
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105 relative">
              {product.popular && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white z-10">
                  الأكثر طلباً
                </Badge>
              )}
              
              <CardContent className={`p-6 ${viewMode === 'list' ? 'flex items-center gap-6' : ''}`}>
                <div className={`${viewMode === 'list' ? 'w-20 h-20 flex-shrink-0' : 'text-center mb-6'}`}>
                  <div className="text-4xl mb-4">{product.image}</div>
                </div>
                
                <div className={`${viewMode === 'list' ? 'flex-grow' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-bold">{product.rating}</span>
                      <span className="text-gray-400 text-sm">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{product.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className={`${viewMode === 'list' ? 'flex items-center justify-between' : ''}`}>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-yellow-400">{product.price}</span>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 group-hover:scale-105 transition-all duration-300"
                    >
                      <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن: ${product.name}`} target="_blank">
                        <MessageSquare className="h-4 w-4 ml-2" />
                        اطلب الآن
                        <Zap className="h-4 w-4 mr-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">لا توجد منتجات في هذا التصنيف</p>
            <Button 
              onClick={() => setSelectedCategory('الكل')}
              variant="outline"
            >
              عرض جميع المنتجات
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
