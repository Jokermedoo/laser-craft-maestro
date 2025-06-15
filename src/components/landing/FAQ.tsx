
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هي الخامات التي تعملون عليها؟",
    answer: "نعمل على مجموعة واسعة من الخامات تشمل الخشب بجميع أنواعه، الأكريليك، الجلود الطبيعية والصناعية، المعادن الرقيقة، والورق المقوى. كل خامة لها إعدادات خاصة لضمان أفضل النتائج."
  },
  {
    question: "كم يستغرق تنفيذ الطلب؟",
    answer: "مدة التنفيذ تعتمد على حجم وتعقيد المشروع. الطلبات البسيطة تستغرق من 1-3 أيام، بينما المشاريع الكبيرة قد تحتاج من أسبوع إلى أسبوعين. نلتزم دائماً بالمواعيد المتفق عليها مسبقاً."
  },
  {
    question: "هل تقدمون خدمة التصميم؟",
    answer: "نعم، لدينا فريق تصميم مختص يمكنه تحويل أفكارك إلى تصميمات احترافية. كما نقبل التصميمات الجاهزة ونقوم بتحسينها لتناسب تقنية الليزر."
  },
  {
    question: "ما هي أحجام القطع التي يمكنكم العمل عليها؟",
    answer: "يمكننا العمل على قطع تتراوح من الأحجام الصغيرة جداً (بضعة سنتيمترات) إلى القطع الكبيرة (حتى 100×60 سم). للقطع الأكبر، يمكننا تقسيم العمل على عدة أجزاء."
  },
  {
    question: "هل تقدمون ضمان على الأعمال؟",
    answer: "نعم، نقدم ضمان جودة على جميع أعمالنا. في حالة وجود أي عيب في التصنيع أو جودة العمل، نقوم بإعادة التنفيذ مجاناً خلال 30 يوم من التسليم."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل الدفع نقداً عند الاستلام، أو التحويل البنكي، أو الدفع الإلكتروني. للمشاريع الكبيرة، نطلب دفعة مقدمة 50% والباقي عند التسليم."
  },
  {
    question: "هل يمكنني رؤية عينة قبل تنفيذ الطلب كاملاً؟",
    answer: "بالطبع! للطلبات الكبيرة أو التصميمات المعقدة، يمكننا تنفيذ عينة صغيرة أولاً للتأكد من رضاكم عن النتيجة النهائية قبل إكمال الطلب."
  },
  {
    question: "هل تقدمون خدمة التوصيل؟",
    answer: "حالياً نقدم خدمة الاستلام من الورشة في الأقصر - أرمنت الوابورات. للطلبات الكبيرة أو المسافات البعيدة، يمكن التفاوض على خدمة التوصيل مقابل رسوم إضافية."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">الأسئلة الشائعة</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة تكراراً من عملائنا
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:bg-card/80 transition-colors"
              >
                <AccordionTrigger className="text-right hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
