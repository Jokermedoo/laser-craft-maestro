
import React from 'react';

interface DashboardCardsProps {
  onSectionChange: (section: string) => void;
}

const DashboardCards = ({ onSectionChange }: DashboardCardsProps) => {
  const newSections = [
    {
      id: 'theme',
      title: '🎨 محرر الثيمات المتقدم',
      description: 'سحب وإفلات الألوان مع أدوات متطورة',
      features: '✨ 8 محررات ✨ حركات متقدمة ✨ قوالب جاهزة',
      gradient: 'from-purple-600 to-blue-600',
      border: 'border-purple-400/30',
      badge: { text: 'جديد', color: 'bg-green-500' }
    },
    {
      id: 'users',
      title: '👥 إدارة المستخدمين',
      description: 'إدارة شاملة للعملاء والموظفين',
      features: '🔍 بحث متقدم 📊 إحصائيات شاملة',
      gradient: 'from-blue-600 to-cyan-600',
      border: 'border-blue-400/30',
      badge: { text: 'جديد', color: 'bg-orange-500' }
    },
    {
      id: 'reports',
      title: '📊 التقارير والتحليلات',
      description: 'تحليل شامل للأداء والمبيعات',
      features: '📈 رسوم بيانية 📋 تقارير مفصلة',
      gradient: 'from-green-600 to-emerald-600',
      border: 'border-green-400/30',
      badge: { text: 'جديد', color: 'bg-red-500' }
    },
    {
      id: 'bookings',
      title: '📅 نظام الحجوزات',
      description: 'إدارة المواعيد والحجوزات',
      features: '⏰ جدولة ذكية 📱 تأكيد فوري',
      gradient: 'from-orange-600 to-red-600',
      border: 'border-orange-400/30',
      badge: { text: 'جديد', color: 'bg-yellow-500' }
    },
    {
      id: 'finance',
      title: '💰 لوحة التحكم المالية',
      description: 'إدارة الإيرادات والمصروفات',
      features: '💹 تدفق نقدي 📊 تحليل مالي',
      gradient: 'from-pink-600 to-rose-600',
      border: 'border-pink-400/30',
      badge: { text: 'جديد', color: 'bg-green-500' }
    },
    {
      id: 'notifications',
      title: '🔔 مركز الإشعارات',
      description: 'إرسال وإدارة الرسائل',
      features: '📱 واتساب 📧 إيميل 📨 SMS',
      gradient: 'from-indigo-600 to-purple-600',
      border: 'border-indigo-400/30',
      badge: { text: 'جديد', color: 'bg-blue-500' }
    }
  ];

  const classicSections = [
    {
      id: 'content',
      title: '📝 إدارة المحتوى',
      description: 'تعديل النصوص والعناوين',
      features: 'محرر نص متقدم',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'services',
      title: '🔧 إدارة الخدمات',
      description: 'إضافة وتعديل الخدمات',
      features: 'إدارة شاملة',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 'gallery',
      title: '🖼️ إدارة المعرض',
      description: 'إدارة الصور والمشاريع',
      features: 'رفع متقدم',
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      id: 'company',
      title: '🏢 بيانات الشركة',
      description: 'معلومات الاتصال والعنوان',
      features: 'إعدادات شاملة',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'security',
      title: '🔒 إعدادات الحماية',
      description: 'أمان وحماية النظام',
      features: 'حماية متقدمة',
      gradient: 'from-red-600 to-pink-600'
    }
  ];

  return (
    <>
      {/* بطاقات القسم الرئيسي */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {newSections.map((section) => (
          <div 
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`bg-gradient-to-br ${section.gradient} p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg border ${section.border} relative overflow-hidden group`}
          >
            <div className={`absolute top-2 right-2 ${section.badge.color} text-xs px-2 py-1 rounded-full text-black font-bold animate-pulse`}>
              {section.badge.text}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
            <p className="text-purple-100 mb-3">{section.description}</p>
            <div className="text-xs text-purple-200 bg-purple-400/20 px-2 py-1 rounded">
              {section.features}
            </div>
          </div>
        ))}
      </div>

      {/* الوحدات التقليدية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {classicSections.map((section) => (
          <div 
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`bg-gradient-to-br ${section.gradient} p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg`}
          >
            <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
            <p className="text-green-100 mb-3">{section.description}</p>
            <div className="text-xs text-green-200 bg-green-400/20 px-2 py-1 rounded">
              {section.features}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCards;
