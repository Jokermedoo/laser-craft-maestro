
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "ما هي الخامات التي يمكن العمل عليها بالليزر؟",
    answer: "نعمل على مجموعة واسعة من الخامات تشمل: الخشب بجميع أنواعه، الأكريليك، الجلد الطبيعي والصناعي، بعض أنواع المعادن، البلاستيك، والورق المقوى. كل خامة لها إعدادات خاصة لضمان أفضل النتائج."
  },
  {
    question: "كم يستغرق تنفيذ المشروع؟",
    answer: "يعتمد وقت التنفيذ على حجم وتعقيد المشروع. المشاريع البسيطة تستغرق من يوم إلى يومين، بينما المشاريع المعقدة أو الكميات الكبيرة قد تحتاج من 3-7 أيام. نحرص على إعطاء تقدير دقيق لكل عميل عند مناقشة المشروع."
  },
  {
    question: "هل تقدمون خدمة التصميم؟",
    answer: "نعم، لدينا فريق تصميم محترف يمكنه إنشاء تصاميم مخصصة حسب احتياجاتكم. كما يمكننا تطوير وتحسين التصاميم الموجودة لديكم لتتناسب مع تقنية الليزر والخامة المختارة."
  },
  {
    question: "ما هي أسعاركم؟",
    answer: "الأسعار تختلف حسب نوع الخامة، حجم العمل، تعقيد التصميم، والكمية المطلوبة. نقدم أسعاراً تنافسية ومرنة تناسب جميع الميزانيات. تواصلوا معنا للحصول على عرض سعر مجاني ومفصل."
  },
  {
    question: "هل يمكنكم تنفيذ طلبات عاجلة؟",
    answer: "نعم، نتفهم أن بعض المشاريع لها طبيعة عاجلة. نقدم خدمة الطلبات العاجلة مع إمكانية التسليم خلال 24 ساعة للمشاريع البسيطة. يرجى التواصل معنا مباشرة لمناقشة التفاصيل والتكلفة الإضافية."
  },
  {
    question: "هل تقدمون ضمان على الأعمال؟",
    answer: "نعم، نقدم ضمان جودة على جميع أعمالنا. إذا كان هناك أي عيب في التصنيع أو عدم مطابقة للمواصفات المتفق عليها، نقوم بإعادة العمل مجاناً. كما نقدم خدمة ما بعد البيع لضمان رضاكم التام."
  },
  {
    question: "هل يمكنني زيارة الورشة لمشاهدة العمل؟",
    answer: "بالطبع! نرحب بزيارتكم لورشتنا في أرمنت الوابورات، الأقصر. يمكنكم مشاهدة المعدات والأعمال السابقة ومناقشة مشروعكم مع فريقنا مباشرة. يفضل التنسيق معنا مسبقاً لضمان توفر الوقت المناسب."
  },
  {
    question: "هل تقدمون خدمة التوصيل؟",
    answer: "نعم، نقدم خدمة التوصيل داخل محافظة الأقصر مجاناً للطلبات التي تزيد عن حد أدنى معين. كما يمكننا الترتيب للشحن إلى جميع أنحاء مصر عبر شركات الشحن المختلفة مع ضمان التغليف الآمن."
  }
];

const FAQ = () => {
  const whatsappNumber = "201021911335";

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">الأسئلة الشائعة</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وطريقة العمل
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg bg-card">
                <AccordionTrigger className="text-right hover:no-underline px-6 py-4 text-foreground font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-foreground/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                لم تجد إجابة لسؤالك؟
              </h3>
              <p className="text-foreground/80 mb-6">
                لا تتردد في التواصل معنا مباشرة. فريقنا جاهز للإجابة على جميع استفساراتكم
                وتقديم المساعدة اللازمة في أي وقت.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=لدي سؤال لم أجد إجابته في الموقع`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="ml-2 h-5 w-5" />
                  اسأل عبر واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
