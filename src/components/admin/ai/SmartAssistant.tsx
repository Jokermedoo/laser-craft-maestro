
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, Send, Lightbulb, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface Suggestion {
  id: string;
  type: 'optimization' | 'design' | 'content' | 'security';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
}

const SmartAssistant = () => {
  const [query, setQuery] = useState('');
  const [suggestions] = useState<Suggestion[]>([
    {
      id: '1',
      type: 'optimization',
      title: 'تحسين أداء التحميل',
      description: 'يمكن تقليل وقت التحميل بـ 30% عبر ضغط الصور وتحسين الخطوط',
      priority: 'high',
      impact: 'تحسين تجربة المستخدم بشكل كبير'
    },
    {
      id: '2',
      type: 'design',
      title: 'تحديث نظام الألوان',
      description: 'استخدام نظام ألوان أكثر توافقاً مع الويب الحديث',
      priority: 'medium',
      impact: 'مظهر أكثر احترافية'
    },
    {
      id: '3',
      type: 'content',
      title: 'تحسين محتوى SEO',
      description: 'إضافة كلمات مفتاحية استراتيجية لتحسين ترتيب البحث',
      priority: 'high',
      impact: 'زيادة الزيارات العضوية بـ 40%'
    },
    {
      id: '4',
      type: 'security',
      title: 'تعزيز الأمان',
      description: 'تطبيق معايير الأمان الحديثة لحماية البيانات',
      priority: 'high',
      impact: 'حماية أفضل للموقع والعملاء'
    }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'optimization': return <TrendingUp className="h-4 w-4 text-green-400" />;
      case 'design': return <Lightbulb className="h-4 w-4 text-blue-400" />;
      case 'content': return <CheckCircle className="h-4 w-4 text-purple-400" />;
      case 'security': return <AlertTriangle className="h-4 w-4 text-red-400" />;
      default: return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-600';
      case 'medium': return 'bg-yellow-600';
      case 'low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'optimization': return 'bg-green-600/20 border-green-500/30';
      case 'design': return 'bg-blue-600/20 border-blue-500/30';
      case 'content': return 'bg-purple-600/20 border-purple-500/30';
      case 'security': return 'bg-red-600/20 border-red-500/30';
      default: return 'bg-gray-600/20 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Bot className="h-8 w-8 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">المساعد الذكي</h2>
          <p className="text-gray-400">تحليل ذكي واقتراحات لتحسين الموقع</p>
        </div>
      </div>

      {/* محادثة مع المساعد */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">اسأل المساعد الذكي</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="كيف يمكنني تحسين موقعي؟"
              className="flex-1 bg-slate-700 border-slate-600 text-white"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* الاقتراحات الذكية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">الاقتراحات الذكية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className={`p-4 rounded-lg border ${getTypeColor(suggestion.type)}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    {getTypeIcon(suggestion.type)}
                    <h3 className="text-white font-medium">{suggestion.title}</h3>
                  </div>
                  <Badge className={`${getPriorityColor(suggestion.priority)} text-white text-xs`}>
                    {suggestion.priority === 'high' ? 'عالي' : 
                     suggestion.priority === 'medium' ? 'متوسط' : 'منخفض'}
                  </Badge>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{suggestion.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">التأثير: {suggestion.impact}</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    تطبيق
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartAssistant;
