
import React from 'react';

const DashboardFeatures = () => {
  const features = [
    {
      category: '🎨 محررات التصميم',
      color: 'text-green-400',
      items: [
        'محرر الحركات المتقدم',
        'التخطيط المتجاوب', 
        'متجر القوالب'
      ]
    },
    {
      category: '💼 أدوات الإدارة',
      color: 'text-blue-400',
      items: [
        'إدارة المستخدمين',
        'نظام الحجوزات',
        'لوحة التحكم المالية'
      ]
    },
    {
      category: '🔧 ميزات تقنية',
      color: 'text-purple-400',
      items: [
        'مراقب الأداء',
        'اختصارات لوحة المفاتيح',
        'حفظ التكوينات'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        🎉 الميزات الجديدة والمحدثة
        <div className="mr-4 bg-red-500 text-xs px-3 py-1 rounded-full text-white font-bold animate-bounce">
          HOT
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="space-y-3">
            <h3 className={`font-semibold ${feature.color} mb-3`}>{feature.category}</h3>
            {feature.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className={`w-2 h-2 ${feature.color.replace('text', 'bg')} rounded-full animate-pulse`}></div>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardFeatures;
