
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCard {
  title: string;
  value: string;
  color: string;
  gradient: string;
  border: string;
}

const DashboardStats = () => {
  const stats: StatCard[] = [
    {
      title: 'المحررات المتاحة',
      value: '12',
      color: 'text-purple-400',
      gradient: 'from-purple-500/20 to-blue-500/20',
      border: 'border-purple-400/30'
    },
    {
      title: 'القوالب الجاهزة',
      value: '50+',
      color: 'text-green-400',
      gradient: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-400/30'
    },
    {
      title: 'الحركات المتاحة',
      value: '100+',
      color: 'text-blue-400',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-400/30'
    },
    {
      title: 'إجمالي المستخدمين',
      value: '79',
      color: 'text-orange-400',
      gradient: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-400/30'
    },
    {
      title: 'إجمالي المبيعات',
      value: '328K',
      color: 'text-pink-400',
      gradient: 'from-pink-500/20 to-rose-500/20',
      border: 'border-pink-400/30'
    },
    {
      title: 'الإمكانيات',
      value: '∞',
      color: 'text-indigo-400',
      gradient: 'from-indigo-500/20 to-purple-500/20',
      border: 'border-indigo-400/30'
    }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 mb-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        📊 إحصائيات النظام المتقدمة
        <div className="mr-4 bg-green-500 text-xs px-3 py-1 rounded-full text-black font-bold animate-pulse">
          محدث الآن
        </div>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`text-center p-4 bg-gradient-to-br ${stat.gradient} rounded-lg border ${stat.border}`}
          >
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
