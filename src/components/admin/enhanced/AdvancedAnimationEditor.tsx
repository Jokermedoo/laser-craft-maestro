
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Play, Pause, RotateCcw, Download, Upload } from 'lucide-react';

interface AnimationConfig {
  id: string;
  name: string;
  type: string;
  duration: number;
  delay: number;
  easing: string;
  repeat: number;
  direction: string;
  enabled: boolean;
}

const AdvancedAnimationEditor = () => {
  const [animations, setAnimations] = useState<AnimationConfig[]>([
    {
      id: 'anim-1',
      name: 'حركة الدخول',
      type: 'fadeInUp',
      duration: 600,
      delay: 0,
      easing: 'ease-out',
      repeat: 1,
      direction: 'normal',
      enabled: true
    },
    {
      id: 'anim-2',
      name: 'حركة التحويم',
      type: 'scale',
      duration: 300,
      delay: 0,
      easing: 'ease-in-out',
      repeat: 1,
      direction: 'normal',
      enabled: true
    }
  ]);

  const [selectedAnimation, setSelectedAnimation] = useState<string>('anim-1');
  const [isPlaying, setIsPlaying] = useState(false);

  const animationTypes = [
    'fadeIn', 'fadeOut', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight',
    'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight',
    'zoomIn', 'zoomOut', 'scale', 'rotate', 'bounce', 'pulse', 'flash', 'shake'
  ];

  const easingTypes = [
    'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out',
    'cubic-bezier(0.25, 0.1, 0.25, 1)', 'cubic-bezier(0.42, 0, 0.58, 1)'
  ];

  const updateAnimation = (id: string, field: string, value: any) => {
    setAnimations(prev => prev.map(anim => 
      anim.id === id ? { ...anim, [field]: value } : anim
    ));
  };

  const playAnimation = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const addNewAnimation = () => {
    const newId = `anim-${Date.now()}`;
    const newAnimation: AnimationConfig = {
      id: newId,
      name: 'حركة جديدة',
      type: 'fadeIn',
      duration: 500,
      delay: 0,
      easing: 'ease-out',
      repeat: 1,
      direction: 'normal',
      enabled: true
    };
    setAnimations(prev => [...prev, newAnimation]);
    setSelectedAnimation(newId);
  };

  const currentAnimation = animations.find(a => a.id === selectedAnimation);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Zap className="h-8 w-8 text-yellow-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">محرر الحركات المتقدم</h2>
            <p className="text-gray-400">إنشاء وتخصيص حركات متقدمة للعناصر</p>
          </div>
        </div>
        <div className="flex space-x-2 rtl:space-x-reverse">
          <Button onClick={playAnimation} className="bg-green-600 hover:bg-green-700">
            <Play className="h-4 w-4 ml-2" />
            تجربة
          </Button>
          <Button onClick={addNewAnimation} className="bg-blue-600 hover:bg-blue-700">
            <Zap className="h-4 w-4 ml-2" />
            حركة جديدة
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* قائمة الحركات */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">الحركات المتاحة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {animations.map((animation) => (
              <div
                key={animation.id}
                onClick={() => setSelectedAnimation(animation.id)}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  selectedAnimation === animation.id
                    ? 'bg-purple-600/30 border-purple-400'
                    : 'bg-slate-700/50 border-gray-600 hover:border-purple-500/50'
                } border`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{animation.name}</span>
                  <Switch
                    checked={animation.enabled}
                    onCheckedChange={(checked) => updateAnimation(animation.id, 'enabled', checked)}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {animation.type} • {animation.duration}ms
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* محرر الحركة */}
        <Card className="lg:col-span-2 bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">تخصيص الحركة</CardTitle>
          </CardHeader>
          <CardContent>
            {currentAnimation && (
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-700">
                  <TabsTrigger value="basic">الأساسيات</TabsTrigger>
                  <TabsTrigger value="timing">التوقيت</TabsTrigger>
                  <TabsTrigger value="advanced">متقدم</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">اسم الحركة</Label>
                    <Input
                      value={currentAnimation.name}
                      onChange={(e) => updateAnimation(currentAnimation.id, 'name', e.target.value)}
                      className="bg-slate-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-300">نوع الحركة</Label>
                    <Select
                      value={currentAnimation.type}
                      onValueChange={(value) => updateAnimation(currentAnimation.id, 'type', value)}
                    >
                      <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {animationTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">المدة (ms): {currentAnimation.duration}</Label>
                    <Slider
                      value={[currentAnimation.duration]}
                      onValueChange={([value]) => updateAnimation(currentAnimation.id, 'duration', value)}
                      min={100}
                      max={3000}
                      step={50}
                      className="w-full"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="timing" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">التأخير (ms): {currentAnimation.delay}</Label>
                    <Slider
                      value={[currentAnimation.delay]}
                      onValueChange={([value]) => updateAnimation(currentAnimation.id, 'delay', value)}
                      min={0}
                      max={2000}
                      step={50}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">منحنى التسارع</Label>
                    <Select
                      value={currentAnimation.easing}
                      onValueChange={(value) => updateAnimation(currentAnimation.id, 'easing', value)}
                    >
                      <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {easingTypes.map((easing) => (
                          <SelectItem key={easing} value={easing}>{easing}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">عدد التكرار: {currentAnimation.repeat}</Label>
                    <Slider
                      value={[currentAnimation.repeat]}
                      onValueChange={([value]) => updateAnimation(currentAnimation.id, 'repeat', value)}
                      min={1}
                      max={10}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">اتجاه الحركة</Label>
                    <Select
                      value={currentAnimation.direction}
                      onValueChange={(value) => updateAnimation(currentAnimation.id, 'direction', value)}
                    >
                      <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">عادي</SelectItem>
                        <SelectItem value="reverse">عكسي</SelectItem>
                        <SelectItem value="alternate">متناوب</SelectItem>
                        <SelectItem value="alternate-reverse">متناوب عكسي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* معاينة الحركة */}
                  <div className="bg-slate-900 p-6 rounded-lg border border-gray-600">
                    <Label className="text-gray-300 block mb-4">معاينة الحركة</Label>
                    <div className="flex justify-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg ${
                          isPlaying ? `animate-bounce` : ''
                        }`}
                        style={{
                          animationDuration: `${currentAnimation.duration}ms`,
                          animationDelay: `${currentAnimation.delay}ms`,
                          animationTimingFunction: currentAnimation.easing,
                          animationIterationCount: currentAnimation.repeat,
                          animationDirection: currentAnimation.direction
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Button onClick={playAnimation} className="flex-1">
                      <Play className="h-4 w-4 ml-2" />
                      تشغيل
                    </Button>
                    <Button variant="outline" className="border-gray-600">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdvancedAnimationEditor;
