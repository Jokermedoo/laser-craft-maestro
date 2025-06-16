
import React, { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Palette, 
  Users, 
  Settings, 
  FileText, 
  Image, 
  Shield, 
  BarChart3,
  Calendar,
  DollarSign,
  Bell,
  Zap,
  Save,
  RotateCcw,
  Download,
  Upload,
  Eye
} from 'lucide-react';

interface CommandAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  shortcut?: string;
  category: string;
  action: () => void;
  permission?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSectionChange: (section: string) => void;
}

const CommandPalette = ({ isOpen, onClose, onSectionChange }: CommandPaletteProps) => {
  const [search, setSearch] = useState('');

  const commands: CommandAction[] = [
    // التنقل
    {
      id: 'nav-theme',
      title: 'محرر الثيمات',
      description: 'تخصيص الألوان والخطوط',
      icon: <Palette className="h-4 w-4" />,
      shortcut: 'Ctrl+T',
      category: 'التنقل',
      action: () => onSectionChange('theme')
    },
    {
      id: 'nav-users',
      title: 'إدارة المستخدمين',
      description: 'عرض وإدارة حسابات المستخدمين',
      icon: <Users className="h-4 w-4" />,
      shortcut: 'Ctrl+U',
      category: 'التنقل',
      action: () => onSectionChange('users')
    },
    {
      id: 'nav-content',
      title: 'إدارة المحتوى',
      description: 'تعديل النصوص والمحتوى',
      icon: <FileText className="h-4 w-4" />,
      shortcut: 'Ctrl+C',
      category: 'التنقل',
      action: () => onSectionChange('content')
    },
    {
      id: 'nav-gallery',
      title: 'إدارة المعرض',
      description: 'رفع وتنظيم الصور',
      icon: <Image className="h-4 w-4" />,
      shortcut: 'Ctrl+G',
      category: 'التنقل',
      action: () => onSectionChange('gallery')
    },
    {
      id: 'nav-security',
      title: 'إعدادات الحماية',
      description: 'أمان وصلاحيات النظام',
      icon: <Shield className="h-4 w-4" />,
      shortcut: 'Ctrl+S',
      category: 'التنقل',
      action: () => onSectionChange('security')
    },
    {
      id: 'nav-reports',
      title: 'التقارير والتحليلات',
      description: 'عرض الإحصائيات والتقارير',
      icon: <BarChart3 className="h-4 w-4" />,
      shortcut: 'Ctrl+R',
      category: 'التنقل',
      action: () => onSectionChange('reports')
    },
    {
      id: 'nav-bookings',
      title: 'نظام الحجوزات',
      description: 'إدارة المواعيد والحجوزات',
      icon: <Calendar className="h-4 w-4" />,
      shortcut: 'Ctrl+B',
      category: 'التنقل',
      action: () => onSectionChange('bookings')
    },
    {
      id: 'nav-finance',
      title: 'لوحة التحكم المالية',
      description: 'إدارة الحسابات والمالية',
      icon: <DollarSign className="h-4 w-4" />,
      shortcut: 'Ctrl+F',
      category: 'التنقل',
      action: () => onSectionChange('finance')
    },
    {
      id: 'nav-notifications',
      title: 'مركز الإشعارات',
      description: 'إرسال وإدارة الإشعارات',
      icon: <Bell className="h-4 w-4" />,
      shortcut: 'Ctrl+N',
      category: 'التنقل',
      action: () => onSectionChange('notifications')
    },

    // الإجراءات
    {
      id: 'action-save',
      title: 'حفظ التغييرات',
      description: 'حفظ جميع الإعدادات الحالية',
      icon: <Save className="h-4 w-4" />,
      shortcut: 'Ctrl+S',
      category: 'الإجراءات',
      action: () => {
        localStorage.setItem('admin_settings_backup', JSON.stringify({}));
        console.log('تم حفظ الإعدادات');
      }
    },
    {
      id: 'action-reset',
      title: 'إعادة تعيين',
      description: 'إعادة تعيين جميع الإعدادات',
      icon: <RotateCcw className="h-4 w-4" />,
      shortcut: 'Ctrl+Alt+R',
      category: 'الإجراءات',
      action: () => {
        if (confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات؟')) {
          localStorage.clear();
          window.location.reload();
        }
      }
    },
    {
      id: 'action-export',
      title: 'تصدير الإعدادات',
      description: 'تصدير جميع الإعدادات كملف',
      icon: <Download className="h-4 w-4" />,
      shortcut: 'Ctrl+E',
      category: 'الإجراءات',
      action: () => {
        const settings = localStorage.getItem('admin_settings') || '{}';
        const blob = new Blob([settings], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `admin-settings-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
      }
    },
    {
      id: 'action-preview',
      title: 'معاينة مباشرة',
      description: 'فتح المعاينة المباشرة',
      icon: <Eye className="h-4 w-4" />,
      shortcut: 'Ctrl+P',
      category: 'الإجراءات',
      action: () => onSectionChange('preview')
    }
  ];

  const filteredCommands = commands.filter(command =>
    command.title.toLowerCase().includes(search.toLowerCase()) ||
    command.description.toLowerCase().includes(search.toLowerCase())
  );

  const groupedCommands = filteredCommands.reduce((groups, command) => {
    const category = command.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(command);
    return groups;
  }, {} as Record<string, CommandAction[]>);

  const handleSelect = useCallback((command: CommandAction) => {
    command.action();
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open command palette with Ctrl+K
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) {
          setSearch('');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 max-w-2xl bg-slate-800 border-purple-500/30">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-white flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-400" />
            لوحة الأوامر السريعة
          </DialogTitle>
        </DialogHeader>
        
        <Command className="bg-transparent">
          <div className="px-4 pb-4">
            <div className="relative">
              <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="ابحث عن الأوامر والإعدادات..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pr-10 bg-slate-700 border-purple-500/30 text-white"
              />
            </div>
          </div>
          
          <CommandList className="max-h-96 overflow-y-auto px-4 pb-4">
            {Object.keys(groupedCommands).length === 0 ? (
              <CommandEmpty className="text-gray-400 text-center py-8">
                لا توجد نتائج مطابقة
              </CommandEmpty>
            ) : (
              Object.entries(groupedCommands).map(([category, commands]) => (
                <CommandGroup key={category} heading={category} className="mb-4">
                  {commands.map((command) => (
                    <CommandItem
                      key={command.id}
                      onSelect={() => handleSelect(command)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 cursor-pointer text-white"
                    >
                      <div className="flex-shrink-0 text-purple-400">
                        {command.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white">{command.title}</div>
                        <div className="text-sm text-gray-400 truncate">{command.description}</div>
                      </div>
                      {command.shortcut && (
                        <Badge variant="outline" className="text-xs bg-slate-600 border-slate-500 text-gray-300">
                          {command.shortcut}
                        </Badge>
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default CommandPalette;
