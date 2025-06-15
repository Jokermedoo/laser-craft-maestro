
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هي الخامات التي يمكن العمل عليها بالليزر؟",
    answer: "نعمل على مجموعة واسعة من الخامات تشمل الخشب، الأكريليك، الجلد، المعادن الرقيقة، البلاستيك، والقماش. كل خامة لها إعدادات خاصة لضمان أفضل النتائج."
  },
  {
    question: "كم من الوقت يستغرق تنفيذ المشروع؟",
    answer: "يعتمد وقت التنفيذ على حجم وتعقيد المشروع. المشاريع البسيطة قد تستغرق من ساعات قليلة إلى يوم واحد، بينما المشاريع الكبيرة قد تحتاج من 3-7 أيام."
  },
  {
    question: "هل تقدمون خدمة التصميم؟",
    answer: "نعم، نقدم خدمة التصميم كجزء من خدماتنا. يمكنكم إرسال فكرتكم وسنقوم بتطوير التصميم المناسب، أو يمكنكم إرسال تصميمكم الجاهز."
  },
  {
    question: "ما هي تكلفة الخدمات؟",
    answer: "تختلف التكلفة حسب نوع الخامة، حجم المشروع، ودرجة التعقيد. نقدم عروض أسعار مجانية بعد مراجعة تفاصيل مشروعكم."
  },
  {
    question: "هل يمكن تنفيذ كميات كبيرة؟",
    answer: "بالطبع! نتخصص في تنفيذ الطلبات الكبيرة للشركات والمؤسسات. نضمن الجودة الثابتة والالتزام بالمواعيد المحددة."
  },
  {
    question: "هل تقدمون ضمان على الأعمال؟",
    answer: "نعم، نقدم ضمان جودة على جميع أعمالنا. في حالة وجود أي مشكلة في التنفيذ، نقوم بإعادة العمل مجاناً."
  },
  {
    question: "كيف يمكنني طلب خدمة أو الحصول على عرض سعر؟",
    answer: "يمكنكم التواصل معنا عبر واتساب أو الاتصال المباشر. أرسلوا لنا تفاصيل مشروعكم وسنقدم لكم عرض سعر مفصل خلال 24 ساعة."
  },
  {
    question: "هل تقدمون خدمة التوصيل؟",
    answer: "نعم، نقدم خدمة التوصيل داخل محافظة الأقصر مجاناً. للمحافظات الأخرى، يتم التنسيق لأفضل طرق التوصيل الآمنة."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">الأسئلة الشائعة</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وطريقة العمل
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-right text-foreground hover:text-primary font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed text-base">
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
