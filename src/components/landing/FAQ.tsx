
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
    answer: "نعمل على مجموعة واسعة من الخامات تشمل الخشب بأنواعه، الأكريليك، الجلود الطبيعية والصناعية، المعادن الرقيقة، والورق المقوى. كل خامة لها تقنيات خاصة نتقنها لضمان أفضل النتائج."
  },
  {
    question: "كم يستغرق تنفيذ الطلبات؟",
    answer: "يختلف وقت التنفيذ حسب نوع وحجم المشروع. الطلبات البسيطة مثل النقش على قطعة صغيرة تستغرق 1-2 يوم، بينما المشاريع الكبيرة قد تحتاج من 5-7 أيام. نحدد الوقت المطلوب بدقة عند مناقشة التفاصيل."
  },
  {
    question: "هل تقدمون خدمة التصميم؟",
    answer: "نعم، نقدم خدمة التصميم المجانية للعملاء. فريقنا يساعدكم في تطوير أفكاركم وتحويلها إلى تصاميم احترافية جاهزة للتنفيذ، مع إمكانية التعديل حتى الوصول للنتيجة المرغوبة."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل الدفع نقداً عند الاستلام، أو التحويل البنكي، أو الدفع عبر فودافون كاش. نطلب عادة 50% مقدم للبدء في المشروع والباقي عند التسليم."
  },
  {
    question: "هل تقدمون ضمان على الأعمال؟",
    answer: "نعم، نقدم ضمان جودة لمدة شهر على جميع أعمالنا. إذا واجهت أي مشكلة في الجودة أو التصنيع خلال هذه المدة، سنقوم بإصلاحها مجاناً."
  },
  {
    question: "هل يمكن رؤية عينة قبل التنفيذ النهائي؟",
    answer: "بالطبع! نقوم بعمل عينة أو نموذج أولي للمشاريع الكبيرة أو المعقدة حتى تتأكدوا من النتيجة قبل التنفيذ النهائي. هذا يضمن رضاكم التام عن المنتج النهائي."
  },
  {
    question: "هل تشحنون خارج الأقصر؟",
    answer: "نعم، يمكننا الشحن لجميع أنحاء مصر عبر شركات الشحن المعتمدة. تكلفة الشحن تختلف حسب الوزن والمنطقة، ونحرص على التعبئة الآمنة لضمان وصول طلبكم بحالة ممتازة."
  },
  {
    question: "كيف يمكنني الحصول على عرض سعر؟",
    answer: "يمكنكم التواصل معنا عبر واتساب وإرسال تفاصيل المشروع أو صور للتصميم المطلوب. سنقوم بدراسة المشروع وإرسال عرض سعر تفصيلي خلال 24 ساعة."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">الأسئلة الشائعة</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة التي يطرحها عملاؤنا
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-right text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pt-2 pb-4">
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
