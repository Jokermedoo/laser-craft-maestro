
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Calculator, MessageSquare } from 'lucide-react';

interface CalculatorProps {
  whatsappNumber: string;
}

const PriceCalculator = ({ whatsappNumber }: CalculatorProps) => {
  const [material, setMaterial] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [complexity, setComplexity] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const materials = [
    { value: 'wood', label: 'خشب', multiplier: 1 },
    { value: 'acrylic', label: 'أكريليك', multiplier: 1.5 },
    { value: 'metal', label: 'معدن', multiplier: 2 },
    { value: 'leather', label: 'جلد', multiplier: 1.3 },
    { value: 'glass', label: 'زجاج', multiplier: 2.5 }
  ];

  const sizes = [
    { value: 'small', label: 'صغير (أقل من 10 سم)', price: 50 },
    { value: 'medium', label: 'متوسط (10-30 سم)', price: 100 },
    { value: 'large', label: 'كبير (30-50 سم)', price: 200 },
    { value: 'xlarge', label: 'كبير جداً (أكثر من 50 سم)', price: 350 }
  ];

  const complexities = [
    { value: 'simple', label: 'بسيط (نص فقط)', multiplier: 1 },
    { value: 'medium', label: 'متوسط (نص + رسومات)', multiplier: 1.5 },
    { value: 'complex', label: 'معقد (تفاصيل دقيقة)', multiplier: 2 }
  ];

  const calculatePrice = () => {
    const materialData = materials.find(m => m.value === material);
    const sizeData = sizes.find(s => s.value === size);
    const complexityData = complexities.find(c => c.value === complexity);

    if (materialData && sizeData && complexityData) {
      const basePrice = sizeData.price * materialData.multiplier * complexityData.multiplier * quantity;
      setEstimatedPrice(Math.round(basePrice));
    }
  };

  const handleWhatsAppOrder = () => {
    const materialLabel = materials.find(m => m.value === material)?.label;
    const sizeLabel = sizes.find(s => s.value === size)?.label;
    const complexityLabel = complexities.find(c => c.value === complexity)?.label;
    
    const message = `مرحباً، أريد طلب خدمة نقش بالليزر:
الخامة: ${materialLabel}
الحجم: ${sizeLabel}
التعقيد: ${complexityLabel}
الكمية: ${quantity}
السعر المتوقع: ${estimatedPrice} جنيه

أرجو التواصل لتأكيد التفاصيل والسعر النهائي.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-lg mb-4 block">احسب تكلفة مشروعك</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            آلة حاسبة <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">الأسعار</span>
          </h2>
        </div>

        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <Calculator className="h-6 w-6 text-yellow-400" />
              احسب السعر التقديري لمشروعك
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">نوع الخامة</label>
                <Select value={material} onValueChange={setMaterial}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="اختر نوع الخامة" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((mat) => (
                      <SelectItem key={mat.value} value={mat.value}>
                        {mat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white mb-2">الحجم</label>
                <Select value={size} onValueChange={setSize}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="اختر الحجم" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white mb-2">درجة التعقيد</label>
                <Select value={complexity} onValueChange={setComplexity}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="اختر درجة التعقيد" />
                  </SelectTrigger>
                  <SelectContent>
                    {complexities.map((comp) => (
                      <SelectItem key={comp.value} value={comp.value}>
                        {comp.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white mb-2">الكمية</label>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>

            <Button 
              onClick={calculatePrice}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={!material || !size || !complexity}
            >
              احسب السعر التقديري
            </Button>

            {estimatedPrice > 0 && (
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  السعر التقديري: {estimatedPrice} جنيه
                </h3>
                <p className="text-gray-300 mb-4">
                  * هذا سعر تقديري، السعر النهائي يحدد بعد مراجعة التصميم
                </p>
                <Button
                  onClick={handleWhatsAppOrder}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <MessageSquare className="ml-2 h-4 w-4" />
                  اطلب عبر واتساب
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceCalculator;
