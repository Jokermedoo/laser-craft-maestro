
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Mail, Smartphone, Plus, Edit, Trash2 } from 'lucide-react';

interface NotificationTemplate {
  id: string;
  name: string;
  type: 'whatsapp' | 'email' | 'sms';
  subject?: string;
  content: string;
  variables: string[];
  isActive: boolean;
}

const NotificationTemplates = () => {
  const [templates, setTemplates] = useState<NotificationTemplate[]>([
    {
      id: '1',
      name: 'ترحيب بالعميل الجديد',
      type: 'whatsapp',
      content: 'مرحباً {اسم_العميل}! نرحب بك في ورشة المعز للليزر. نحن متحمسون لخدمتك.',
      variables: ['اسم_العميل'],
      isActive: true
    },
    {
      id: '2',
      name: 'تأكيد الموعد',
      type: 'sms',
      content: 'تم تأكيد موعدك في {التاريخ} الساعة {الوقت}. شكراً لاختيارك ورشة المعز.',
      variables: ['التاريخ', 'الوقت'],
      isActive: true
    },
    {
      id: '3',
      name: 'فاتورة مكتملة',
      type: 'email',
      subject: 'فاتورة رقم {رقم_الفاتورة}',
      content: 'عزيزي {اسم_العميل}، تم إكمال خدمتك بنجاح. المبلغ الإجمالي: {المبلغ} ريال.',
      variables: ['اسم_العميل', 'رقم_الفاتورة', 'المبلغ'],
      isActive: true
    }
  ]);

  const [editingTemplate, setEditingTemplate] = useState<NotificationTemplate | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'whatsapp': return <MessageSquare className="h-4 w-4 text-green-400" />;
      case 'email': return <Mail className="h-4 w-4 text-blue-400" />;
      case 'sms': return <Smartphone className="h-4 w-4 text-purple-400" />;
      default: return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'whatsapp': return 'bg-green-600';
      case 'email': return 'bg-blue-600';
      case 'sms': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">قوالب الإشعارات</h3>
        <Button
          onClick={() => setIsCreating(true)}
          className="bg-purple-600 hover:bg-purple-700"
        >
          <Plus className="h-4 w-4 ml-2" />
          إضافة قالب جديد
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  {getTypeIcon(template.type)}
                  {template.name}
                </CardTitle>
                <Badge className={`${getTypeColor(template.type)} text-white`}>
                  {template.type === 'whatsapp' ? 'واتساب' : 
                   template.type === 'email' ? 'إيميل' : 'رسالة نصية'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {template.subject && (
                <div>
                  <p className="text-gray-400 text-sm">الموضوع:</p>
                  <p className="text-white text-sm">{template.subject}</p>
                </div>
              )}
              
              <div>
                <p className="text-gray-400 text-sm">المحتوى:</p>
                <p className="text-white text-sm bg-slate-700/50 p-2 rounded">
                  {template.content.length > 100 
                    ? `${template.content.substring(0, 100)}...` 
                    : template.content}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">المتغيرات:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {template.variables.map((variable, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {variable}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Badge className={template.isActive ? 'bg-green-600' : 'bg-gray-600'}>
                  {template.isActive ? 'مفعل' : 'معطل'}
                </Badge>
                
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingTemplate(template)}
                    className="text-blue-400 border-blue-400"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-400 border-red-400"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotificationTemplates;
