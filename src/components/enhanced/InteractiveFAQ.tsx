
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, MessageSquare, Phone, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface InteractiveFAQProps {
  whatsappNumber: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "كم يستغرق وقت النقش بالليزر؟",
    answer: "يختلف الوقت حسب حجم وتعقيد التصميم، لكن معظم الأعمال تكتمل في نفس اليوم. الأعمال البسيطة تستغرق 30-60 دقيقة.",
    category: "وقت"
  },
  {
    id: 2,
    question: "ما هي المواد التي يمكن نقشها؟",
    answer: "نتعامل مع الخشب، الأكريليك، الجلد، المعادن، الزجاج، والبلاستيك. كل مادة لها تقنيات نقش مختلفة للحصول على أفضل النتائج.",
    category: "مواد"
  },
  {
    id: 3,
    question: "هل يمكنني إحضار تصميمي الخاص؟",
    answer: "بالطبع! يمكنك إحضار تصميمك أو صورتك، وسنقوم بتحويلها لتناسب النقش بالليزر. نقبل ملفات AI, PDF, JPG, PNG.",
    category: "تصميم"
  },
  {
    id: 4,
    question: "كم تبلغ تكلفة النقش؟",
    answer: "الأسعار تبدأ من 50 جنيه للقطع الصغيرة وتختلف حسب الحجم والمادة والتعقيد. نقدم عروض أسعار مجانية لجميع المشاريع.",
    category: "أسعار"
  },
  {
    id: 5,
    question: "هل تقدمون خدمة التوصيل؟",
    answer: "نعم، نوفر خدمة التوصيل داخل أرمنت والمناطق المجاورة. للمناطق البعيدة، يمكن الترتيب للشحن عبر شركات النقل.",
    category: "توصيل"
  },
  {
    id: 6,
    question: "هل يوجد ضمان على الأعمال؟",
    answer: "نعم، نقدم ضمان سنة كاملة على جودة النقش والمواد المستخدمة. في حالة وجود أي مشكلة، نصلحها مجاناً.",
    category: "ضمان"
  }
];

const InteractiveFAQ = ({ whatsappNumber }: InteractiveFAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-lg mb-4 block">الأسئلة الشائعة</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            أجوبة لكل <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">استفساراتك</span>
          </h2>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="ابحث في الأسئلة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400"
              />
            </div>
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
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((item) => (
            <Card key={item.id} className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-bold text-white">{item.question}</h3>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-yellow-400" />
                  )}
                </button>
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    <div className="mt-4 pt-4 border-t border-purple-500/30">
                      <p className="text-sm text-yellow-400 mb-3">هل تحتاج مساعدة إضافية؟</p>
                      <div className="flex gap-3">
                        <Button 
                          asChild
                          size="sm"
                          className="bg-green-500 hover:bg-green-600"
                        >
                          <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، لدي سؤال حول: ${item.question}`} target="_blank">
                            <MessageSquare className="h-4 w-4 ml-2" />
                            واتساب
                          </a>
                        </Button>
                        <Button 
                          asChild
                          variant="outline"
                          size="sm"
                        >
                          <a href="tel:+201141990282">
                            <Phone className="h-4 w-4 ml-2" />
                            اتصل بنا
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">لم يتم العثور على نتائج مطابقة لبحثك</p>
            <Button 
              asChild
              className="mt-4 bg-yellow-500 hover:bg-yellow-600"
            >
              <a href={`https://wa.me/${whatsappNumber}?text=مرحباً، لدي سؤال لم أجد إجابته في الأسئلة الشائعة`} target="_blank">
                <MessageSquare className="h-4 w-4 ml-2" />
                اسأل مباشرة
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveFAQ;
