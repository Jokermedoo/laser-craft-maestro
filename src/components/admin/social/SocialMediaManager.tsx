
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Send, 
  Calendar, 
  BarChart3,
  Users,
  Heart,
  Share,
  Eye
} from 'lucide-react';

interface SocialPost {
  id: string;
  platform: 'facebook' | 'instagram' | 'whatsapp';
  content: string;
  image?: string;
  scheduled: string;
  status: 'draft' | 'scheduled' | 'published';
  engagement: {
    likes: number;
    shares: number;
    comments: number;
    views: number;
  };
}

const SocialMediaManager = () => {
  const [posts] = useState<SocialPost[]>([
    {
      id: '1',
      platform: 'facebook',
      content: 'عروض خاصة على خدمات القطع بالليزر! احصل على خصم 20% لفترة محدودة',
      scheduled: '2024-06-18 10:00',
      status: 'published',
      engagement: { likes: 45, shares: 12, comments: 8, views: 320 }
    },
    {
      id: '2',
      platform: 'instagram',
      content: 'صور من آخر مشاريعنا في قطع المعادن بدقة عالية 🔥',
      scheduled: '2024-06-18 14:00',
      status: 'scheduled',
      engagement: { likes: 0, shares: 0, comments: 0, views: 0 }
    },
    {
      id: '3',
      platform: 'whatsapp',
      content: 'رسالة ترحيبية للعملاء الجدد مع معلومات الخدمات',
      scheduled: '',
      status: 'draft',
      engagement: { likes: 0, shares: 0, comments: 0, views: 0 }
    }
  ]);

  const [newPost, setNewPost] = useState({
    platform: 'facebook' as const,
    content: '',
    scheduled: ''
  });

  const [analytics] = useState({
    total_followers: 2450,
    monthly_reach: 12800,
    engagement_rate: 4.2,
    best_posting_time: '10:00 AM'
  });

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook': return <Facebook className="h-4 w-4 text-blue-400" />;
      case 'instagram': return <Instagram className="h-4 w-4 text-pink-400" />;
      case 'whatsapp': return <MessageCircle className="h-4 w-4 text-green-400" />;
      default: return null;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'facebook': return 'bg-blue-600';
      case 'instagram': return 'bg-pink-600';
      case 'whatsapp': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-600';
      case 'scheduled': return 'bg-blue-600';
      case 'draft': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Share className="h-8 w-8 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">إدارة وسائل التواصل الاجتماعي</h2>
          <p className="text-gray-400">نشر وجدولة المحتوى عبر جميع المنصات</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
          <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
            نظرة عامة
          </TabsTrigger>
          <TabsTrigger value="posts" className="data-[state=active]:bg-purple-600">
            المنشورات
          </TabsTrigger>
          <TabsTrigger value="create" className="data-[state=active]:bg-purple-600">
            إنشاء منشور
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600">
            التحليلات
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{analytics.total_followers}</div>
                <div className="text-gray-300">إجمالي المتابعين</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{analytics.monthly_reach.toLocaleString()}</div>
                <div className="text-gray-300">الوصول الشهري</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{analytics.engagement_rate}%</div>
                <div className="text-gray-300">معدل التفاعل</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">{analytics.best_posting_time}</div>
                <div className="text-gray-300">أفضل وقت نشر</div>
              </CardContent>
            </Card>
          </div>

          {/* آخر المنشورات */}
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">آخر المنشورات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      {getPlatformIcon(post.platform)}
                      <div>
                        <p className="text-white text-sm">{post.content.substring(0, 50)}...</p>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse mt-1">
                          <Badge className={`${getPlatformColor(post.platform)} text-white text-xs`}>
                            {post.platform}
                          </Badge>
                          <Badge className={`${getStatusColor(post.status)} text-white text-xs`}>
                            {post.status === 'published' ? 'منشور' :
                             post.status === 'scheduled' ? 'مجدول' : 'مسودة'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    {post.status === 'published' && (
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-400 text-xs">
                        <span className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {post.engagement.likes}
                        </span>
                        <span className="flex items-center">
                          <Share className="h-3 w-3 mr-1" />
                          {post.engagement.shares}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.engagement.views}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="posts" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">جميع المنشورات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        {getPlatformIcon(post.platform)}
                        <Badge className={`${getPlatformColor(post.platform)} text-white`}>
                          {post.platform}
                        </Badge>
                        <Badge className={`${getStatusColor(post.status)} text-white`}>
                          {post.status === 'published' ? 'منشور' :
                           post.status === 'scheduled' ? 'مجدول' : 'مسودة'}
                        </Badge>
                      </div>
                      {post.scheduled && (
                        <span className="text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          {post.scheduled}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-white mb-3">{post.content}</p>
                    
                    {post.status === 'published' && (
                      <div className="flex items-center space-x-6 rtl:space-x-reverse text-gray-400 text-sm">
                        <span className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {post.engagement.likes} إعجاب
                        </span>
                        <span className="flex items-center">
                          <Share className="h-4 w-4 mr-1" />
                          {post.engagement.shares} مشاركة
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.engagement.comments} تعليق
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {post.engagement.views} مشاهدة
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">إنشاء منشور جديد</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">المنصة</label>
                <select 
                  value={newPost.platform}
                  onChange={(e) => setNewPost({...newPost, platform: e.target.value as any})}
                  className="w-full mt-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white"
                >
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
              
              <div>
                <label className="text-gray-400 text-sm">محتوى المنشور</label>
                <Textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  placeholder="اكتب محتوى المنشور هنا..."
                  className="mt-1 bg-slate-700 border-slate-600 text-white"
                  rows={4}
                />
              </div>
              
              <div>
                <label className="text-gray-400 text-sm">وقت النشر (اختياري)</label>
                <Input
                  type="datetime-local"
                  value={newPost.scheduled}
                  onChange={(e) => setNewPost({...newPost, scheduled: e.target.value})}
                  className="mt-1 bg-slate-700 border-slate-600 text-white"
                />
              </div>
              
              <div className="flex space-x-3 rtl:space-x-reverse">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Send className="h-4 w-4 ml-2" />
                  نشر الآن
                </Button>
                <Button variant="outline" className="border-blue-500/50 text-blue-400">
                  <Calendar className="h-4 w-4 ml-2" />
                  جدولة المنشور
                </Button>
                <Button variant="outline" className="border-gray-500/50 text-gray-400">
                  حفظ كمسودة
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                تحليلات مفصلة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-400">
                ستتوفر التحليلات المفصلة قريباً...
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SocialMediaManager;
