
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  HelpCircle,
  Clock,
  DollarSign,
  Settings,
  Truck
} from 'lucide-react';
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';

const FAQContent = () => {
  const { companyInfo } = useCompany();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqCategories = [
    {
      title: "الخدمات والأسعار",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      questions: [
        {
          question: "ما هي الخدمات التي تقدمونها؟",
          answer: "نقدم خدمات النقش بالليزر على جميع أنواع الخامات (خشب، أكريليك، معدن، جلد، زجاج)، القطع بالليزر، الحفر، والرسم على المواد المختلفة."
        },
        {
          question: "كيف يتم تحديد الأسعار؟",
          answer: "تحدد الأسعار حسب نوع الخامة، حجم العمل، درجة التعقيد، والكمية المطلوبة. يمكنك استخدام آلة حاسبة الأسعار للحصول على تقدير مبدئي."
        },
        {
          question: "هل تقدمون خصومات للكميات الكبيرة؟",
          answer: "نعم، نقدم خصومات تدريجية للكميات الكبيرة والعملاء المميزين. تواصل معنا للحصول على عرض مخصص."
        }
      ]
    },
    {
      title: "الوقت والتسليم",
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
      questions: [
        {
          question: "كم يستغرق إنجاز العمل؟",
          answer: "معظم الأعمال تنجز في نفس اليوم. الأعمال المعقدة قد تحتاج 1-3 أيام حسب الحجم والتعقيد."
        },
        {
          question: "هل تعملون في عطلة نهاية الأسبوع؟",
          answer: "نعم، نعمل 6 أيام في الأسبوع من السبت للخميس. يمكن التنسيق للأعمال العاجلة في الجمعة."
        },
        {
          question: "هل يمكن التوصيل؟",
          answer: "نعم، نوفر خدمة التوصيل داخل المحافظة مقابل رسوم رمزية. التوصيل مجاني للطلبات أكثر من 500 جنيه."
        }
      ]
    },
    {
      title: "التقنيات والخامات",
      icon: Settings,
      color: "from-purple-500 to-pink-500",
      questions: [
        {
          question: "ما هي أنواع الخامات التي تتعاملون معها؟",
          answer: "نتعامل مع جميع أنواع الخشب، الأكريليك، المعادن (استانلس، ألومنيوم، نحاس)، الجلد الطبيعي والصناعي، والزجاج."
        },
        {
          question: "ما هي دقة النقش بالليزر؟",
          answer: "نستخدم أحدث أجهزة الليزر بدقة عالية تصل إلى 0.1 مم، مما يضمن جودة ودقة فائقة في التفاصيل."
        },
        {
          question: "هل يمكن النقش على المواد الملونة؟",
          answer: "نعم، يمكن النقش على المواد الملونة، وتختلف النتيجة حسب نوع المادة ولونها."
        }
      ]
    },
    {
      title: "الضمان والجودة",
      icon: HelpCircle,
      color: "from-yellow-500 to-orange-500",
      questions: [
        {
          question: "هل تقدمون ضمان على الأعمال؟",
          answer: "نعم، نقدم ضمان سنة كاملة على جودة النقش وثبات الألوان في الظروف العادية."
        },
        {
          question: "ماذا لو لم أكن راضياً عن النتيجة؟",
          answer: "نعيد العمل مجاناً إذا لم يكن مطابقاً للمواصفات المتفق عليها. رضا العميل هو أولويتنا."
        },
        {
          question: "هل يمكن إصلاح الأعمال التالفة؟",
          answer: "نقدم خدمة إصلاح وتجديد الأعمال المنقوشة حسب حالة القطعة وإمكانية الإصلاح."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) => 
    category.questions.map((q, qIndex) => ({
      ...q,
      categoryIndex,
      questionIndex: qIndex,
      category: category.title,
      categoryColor: category.color
    }))
  );

  const filteredQuestions = allQuestions.filter(
    item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpanded = (categoryIndex: number, questionIndex: number) => {
    const itemId = categoryIndex * 100 + questionIndex;
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isExpanded = (categoryIndex: number, questionIndex: number) => {
    const itemId = categoryIndex * 100 + questionIndex;
    return expandedItems.includes(itemId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <AnimatedBackground />
      <Navbar whatsappNumber={companyInfo.whatsapp} />
      
      <section className="relative py-20 pt-32 z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              الأسئلة <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">الشائعة</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              إجابات على أكثر الأسئلة التي يطرحها عملاؤنا
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="ابحث في الأسئلة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-12 bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {!searchTerm ? (
            // عرض الأسئلة مقسمة بالفئات
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => (
                      <Card key={questionIndex} className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleExpanded(categoryIndex, questionIndex)}
                            className="w-full p-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                          >
                            <span className="text-lg font-semibold text-white">{item.question}</span>
                            {isExpanded(categoryIndex, questionIndex) ? (
                              <ChevronUp className="h-5 w-5 text-yellow-400" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                          
                          {isExpanded(categoryIndex, questionIndex) && (
                            <div className="px-6 pb-6 border-t border-purple-500/30">
                              <p className="text-gray-300 leading-relaxed pt-4">{item.answer}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // عرض نتائج البحث
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">
                نتائج البحث ({filteredQuestions.length})
              </h2>
              
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((item, index) => (
                  <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleExpanded(item.categoryIndex, item.questionIndex)}
                        className="w-full p-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                      >
                        <div className="text-right">
                          <span className="text-lg font-semibold text-white block">{item.question}</span>
                          <span className={`text-sm bg-gradient-to-r ${item.categoryColor} bg-clip-text text-transparent font-medium`}>
                            {item.category}
                          </span>
                        </div>
                        {isExpanded(item.categoryIndex, item.questionIndex) ? (
                          <ChevronUp className="h-5 w-5 text-yellow-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                      
                      {isExpanded(item.categoryIndex, item.questionIndex) && (
                        <div className="px-6 pb-6 border-t border-purple-500/30">
                          <p className="text-gray-300 leading-relaxed pt-4">{item.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border border-purple-500/30">
                  <CardContent className="p-8 text-center">
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">لم نجد نتائج</h3>
                    <p className="text-gray-400">جرب كلمات بحث أخرى أو تواصل معنا مباشرة</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <MessageSquare className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">لم تجد إجابة لسؤالك؟</h3>
                <p className="text-gray-300 mb-6">
                  تواصل معنا مباشرة وسنجيب على جميع استفساراتك خلال دقائق
                </p>
                <Button 
                  asChild
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700"
                >
                  <a href={`https://wa.me/${companyInfo.whatsapp}?text=مرحباً، لدي استفسار لم أجد إجابته في الأسئلة الشائعة`} target="_blank">
                    <MessageSquare className="ml-2 h-5 w-5" />
                    تواصل معنا الآن
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer whatsappNumber={companyInfo.whatsapp} />
    </div>
  );
};

const FAQPage = () => {
  return (
    <CompanyProvider>
      <FAQContent />
    </CompanyProvider>
  );
};

export default FAQPage;
