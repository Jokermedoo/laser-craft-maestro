
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Save, 
  FolderOpen, 
  Trash2, 
  Copy, 
  Download, 
  Upload,
  Settings
} from 'lucide-react';
import { useConfigManager } from '@/hooks/useConfigManager';
import { useAdmin } from '@/contexts/AdminContext';

const ConfigManager = () => {
  const { settings, updateTheme } = useAdmin();
  const {
    savedConfigs,
    currentConfig,
    saveConfig,
    loadConfig,
    deleteConfig,
    duplicateConfig,
    exportConfig,
    importConfig
  } = useConfigManager();
  
  const [configName, setConfigName] = useState('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const handleSaveConfig = () => {
    if (configName.trim()) {
      saveConfig(configName.trim(), settings);
      setConfigName('');
      setShowSaveDialog(false);
    }
  };

  const handleLoadConfig = (configId: string) => {
    const config = loadConfig(configId);
    if (config) {
      updateTheme(config.settings.theme);
    }
  };

  const handleImportConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importConfig(file)
        .then(() => {
          console.log('تم استيراد التكوين بنجاح');
        })
        .catch((error) => {
          console.error('خطأ في استيراد التكوين:', error);
        });
    }
  };

  return (
    <Card className="bg-slate-800/50 border-purple-500/30">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Settings className="h-5 w-5 ml-2" />
          إدارة التكوينات
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* حفظ تكوين جديد */}
        <div className="space-y-3">
          {!showSaveDialog ? (
            <Button
              onClick={() => setShowSaveDialog(true)}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <Save className="h-4 w-4 ml-2" />
              حفظ التكوين الحالي
            </Button>
          ) : (
            <div className="space-y-2">
              <Label className="text-gray-300">اسم التكوين</Label>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Input
                  value={configName}
                  onChange={(e) => setConfigName(e.target.value)}
                  placeholder="أدخل اسم التكوين"
                  className="bg-slate-700 border-gray-600 text-white"
                />
                <Button onClick={handleSaveConfig} size="sm">
                  حفظ
                </Button>
                <Button 
                  onClick={() => setShowSaveDialog(false)} 
                  size="sm" 
                  variant="outline"
                >
                  إلغاء
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* قائمة التكوينات المحفوظة */}
        <div className="space-y-2">
          <Label className="text-gray-300">التكوينات المحفوظة</Label>
          <div className="max-h-48 overflow-y-auto space-y-2">
            {savedConfigs.map((config) => (
              <div
                key={config.id}
                className={`p-3 rounded-lg border ${
                  currentConfig === config.id
                    ? 'border-purple-500 bg-purple-500/20'
                    : 'border-gray-600 bg-slate-700/50'
                } transition-all`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-white text-sm">
                      {config.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(config.timestamp).toLocaleDateString('ar')}
                    </div>
                  </div>
                  
                  {config.preview && (
                    <div
                      className="w-8 h-8 rounded border border-white/20 mr-2"
                      style={{ background: config.preview }}
                    />
                  )}
                </div>

                <div className="flex space-x-1 rtl:space-x-reverse mt-2">
                  <Button
                    size="sm"
                    onClick={() => handleLoadConfig(config.id)}
                    className="flex-1"
                  >
                    <FolderOpen className="h-3 w-3 ml-1" />
                    تحميل
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => duplicateConfig(config.id, `${config.name} - نسخة`)}
                    className="border-gray-600"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => exportConfig(config.id)}
                    className="border-gray-600"
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteConfig(config.id)}
                    className="border-red-500 text-red-400 hover:bg-red-600/20"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* استيراد تكوين */}
        <div className="space-y-2">
          <Label className="text-gray-300">استيراد تكوين</Label>
          <div className="relative">
            <input
              type="file"
              accept=".json"
              onChange={handleImportConfig}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button variant="outline" className="w-full border-gray-600">
              <Upload className="h-4 w-4 ml-2" />
              اختر ملف التكوين
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfigManager;
