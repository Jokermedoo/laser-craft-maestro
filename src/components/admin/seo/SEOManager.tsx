
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Globe, BarChart3, Target, TrendingUp, AlertCircle } from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  score: number;
  issues: string[];
  suggestions: string[];
}

const SEOManager = () => {
  const [currentPage, setCurrentPage] = useState<SEOData>({
    title: 'ورشة المعز للليزر - أفضل خدمات القطع والحفر',
    description: 'ورشة متخصصة في قطع وحفر المعادن بتقنية الليزر عالية الدقة',
    keywords: ['ليزر', 'قطع معادن', 'حفر', 'ورشة'],
    url: 'https://almoez-laser.com',
    score: 75,
    issues: [
      'العنوان طويل جداً (أكثر من 60 حرف)',
      'نقص في الكلمات المفتاحية الطويلة',
      'لا توجد صور بديلة لبعض الصور'
    ],
    suggestions: [
      'إضافة كلمات مفتاحية محلية مثل "الرياض"',
      'تحسين سرعة التحميل',
      'إضافة مراجعات العملاء'
    ]
  });

  const [analytics] = useState({
    organic_traffic: 1250,
    keyword_ranking: 23,
    backlinks: 45,
    page_speed: 85
  });

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-600';
    if (score >= 60) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Search className="h-8 w-8 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">إدارة SEO المتقدمة</h2>
          <p className="text-gray-400">تحسين محركات البحث والتحليلات</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
          <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
            نظرة عامة
          </TabsTrigger>
          <TabsTrigger value="keywords" className="data-[state=active]:bg-purple-600">
            الكلمات المفتاحية
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-purple-600">
            المحتوى
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600">
            التحليلات
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          {/* نتيجة SEO العامة */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold ${getScoreColor(currentPage.score)} mb-2`}>
                  {currentPage.score}
                </div>
                <div className="text-gray-300">نتيجة SEO</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{analytics.organic_traffic}</div>
                <div className="text-gray-300">زيارات عضوية</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{analytics.keyword_ranking}</div>
                <div className="text-gray-300">كلمات في المقدمة</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">{analytics.page_speed}</div>
                <div className="text-gray-300">سرعة الصفحة</div>
              </CardContent>
            </Card>
          </div>

          {/* المشاكل والاقتراحات */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-400" />
                  المشاكل المكتشفة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentPage.issues.map((issue, index) => (
                    <div key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <AlertCircle className="h-4 w-4 text-red-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                  اقتراحات التحسين
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentPage.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <TrendingUp className="h-4 w-4 text-green-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="keywords" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">إدارة الكلمات المفتاحية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {currentPage.keywords.map((keyword, index) => (
                  <Badge key={index} variant="outline" className="bg-purple-600/20 text-purple-300">
                    {keyword}
                  </Badge>
                ))}
              </div>
              <Input
                placeholder="إضافة كلمة مفتاحية جديدة..."
                className="bg-slate-700 border-slate-600 text-white"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">تحسين المحتوى</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">عنوان الصفحة</label>
                <Input
                  value={currentPage.title}
                  onChange={(e) => setCurrentPage({...currentPage, title: e.target.value})}
                  className="mt-1 bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm">وصف الصفحة</label>
                <Textarea
                  value={currentPage.description}
                  onChange={(e) => setCurrentPage({...currentPage, description: e.target.value})}
                  className="mt-1 bg-slate-700 border-slate-600 text-white"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">تحليلات متقدمة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-400">
                ستتوفر التحليلات المتقدمة قريباً...
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOManager;
