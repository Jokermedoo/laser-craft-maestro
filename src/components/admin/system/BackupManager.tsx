
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Upload, RotateCcw, Save, HardDrive, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

interface BackupItem {
  id: string;
  name: string;
  size: string;
  date: string;
  type: 'manual' | 'auto';
  status: 'complete' | 'partial' | 'failed';
  description: string;
}

const BackupManager = () => {
  const [backups] = useState<BackupItem[]>([
    {
      id: '1',
      name: 'نسخة احتياطية كاملة - يونيو 2024',
      size: '45.2 MB',
      date: '2024-06-17 14:30',
      type: 'manual',
      status: 'complete',
      description: 'نسخة شاملة تحتوي على جميع الإعدادات والبيانات'
    },
    {
      id: '2',
      name: 'نسخة تلقائية يومية',
      size: '12.8 MB',
      date: '2024-06-17 02:00',
      type: 'auto',
      status: 'complete',
      description: 'نسخة تلقائية للإعدادات الأساسية'
    },
    {
      id: '3',
      name: 'نسخة إعدادات الثيم',
      size: '2.1 MB',
      date: '2024-06-16 18:45',
      type: 'manual',
      status: 'complete',
      description: 'نسخة من إعدادات الألوان والثيمات'
    }
  ]);

  const [isCreating, setIsCreating] = useState(false);

  const createBackup = async () => {
    setIsCreating(true);
    // محاكاة إنشاء نسخة احتياطية
    setTimeout(() => {
      setIsCreating(false);
      console.log('تم إنشاء النسخة الاحتياطية بنجاح');
    }, 3000);
  };

  const downloadBackup = (backup: BackupItem) => {
    // محاكاة تحميل النسخة الاحتياطية
    const backupData = {
      id: backup.id,
      name: backup.name,
      date: backup.date,
      settings: {
        theme: {
          primaryColor: '#8B5CF6',
          secondaryColor: '#06B6D4',
          // إعدادات أخرى...
        },
        content: {
          // بيانات المحتوى...
        },
        users: {
          // بيانات المستخدمين...
        }
      }
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-${backup.id}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const restoreBackup = (backup: BackupItem) => {
    if (confirm(`هل أنت متأكد من استعادة النسخة الاحتياطية "${backup.name}"؟ سيتم استبدال الإعدادات الحالية.`)) {
      console.log(`جاري استعادة النسخة الاحتياطية: ${backup.name}`);
      // تنفيذ عملية الاستعادة هنا
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'partial': return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'failed': return <AlertTriangle className="h-4 w-4 text-red-400" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return 'bg-green-600';
      case 'partial': return 'bg-yellow-600';
      case 'failed': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'auto' ? 'bg-blue-600' : 'bg-purple-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <HardDrive className="h-8 w-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">إدارة النسخ الاحتياطية</h2>
            <p className="text-gray-400">حماية وأمان البيانات</p>
          </div>
        </div>
        
        <div className="flex space-x-3 rtl:space-x-reverse">
          <Button
            onClick={createBackup}
            disabled={isCreating}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {isCreating ? (
              <>
                <Clock className="h-4 w-4 ml-2 animate-spin" />
                جاري الإنشاء...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 ml-2" />
                إنشاء نسخة احتياطية
              </>
            )}
          </Button>
        </div>
      </div>

      {/* إحصائيات النسخ الاحتياطية */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{backups.length}</div>
            <div className="text-gray-300">إجمالي النسخ</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {backups.filter(b => b.status === 'complete').length}
            </div>
            <div className="text-gray-300">نسخ كاملة</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {backups.filter(b => b.type === 'auto').length}
            </div>
            <div className="text-gray-300">نسخ تلقائية</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {backups.reduce((total, backup) => {
                const size = parseFloat(backup.size);
                return total + size;
              }, 0).toFixed(1)}
            </div>
            <div className="text-gray-300">MB مجموع الحجم</div>
          </CardContent>
        </Card>
      </div>

      {/* قائمة النسخ الاحتياطية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">النسخ الاحتياطية المتاحة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {backups.map((backup) => (
              <div
                key={backup.id}
                className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg"
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse flex-1">
                  <HardDrive className="h-8 w-8 text-purple-400" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-1">
                      <span className="text-white font-medium">{backup.name}</span>
                      <Badge className={`${getTypeColor(backup.type)} text-white text-xs`}>
                        {backup.type === 'auto' ? 'تلقائية' : 'يدوية'}
                      </Badge>
                      <Badge className={`${getStatusColor(backup.status)} text-white text-xs`}>
                        {getStatusIcon(backup.status)}
                        {backup.status === 'complete' ? 'مكتملة' : 
                         backup.status === 'partial' ? 'جزئية' : 'فاشلة'}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm">{backup.description}</p>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-500 text-xs mt-1">
                      <span>الحجم: {backup.size}</span>
                      <span>التاريخ: {backup.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => downloadBackup(backup)}
                    className="text-blue-400 border-blue-400 hover:bg-blue-600/20"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => restoreBackup(backup)}
                    className="text-green-400 border-green-400 hover:bg-green-600/20"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* إعدادات النسخ التلقائية */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">إعدادات النسخ التلقائية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">النسخ التلقائية اليومية</h4>
                <p className="text-gray-400 text-sm">إنشاء نسخة احتياطية كل يوم في الساعة 2:00 صباحاً</p>
              </div>
              <Button variant="outline" className="border-green-500/50 text-green-400">
                مفعل
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">النسخ التلقائية الأسبوعية</h4>
                <p className="text-gray-400 text-sm">إنشاء نسخة احتياطية شاملة كل أسبوع</p>
              </div>
              <Button variant="outline" className="border-blue-500/50 text-blue-400">
                مفعل
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">حفظ قبل التحديثات</h4>
                <p className="text-gray-400 text-sm">إنشاء نسخة احتياطية تلقائياً قبل أي تحديث مهم</p>
              </div>
              <Button variant="outline" className="border-purple-500/50 text-purple-400">
                مفعل
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackupManager;
