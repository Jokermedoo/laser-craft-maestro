
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Download, Calendar, DollarSign, Users, ShoppingBag } from 'lucide-react';

const ReportsAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // بيانات تجريبية للمبيعات
  const salesData = [
    { month: 'يناير', sales: 45000, orders: 120, customers: 85 },
    { month: 'فبراير', sales: 52000, orders: 135, customers: 95 },
    { month: 'مارس', sales: 48000, orders: 128, customers: 88 },
    { month: 'أبريل', sales: 61000, orders: 155, customers: 110 },
    { month: 'مايو', sales: 55000, orders: 142, customers: 98 },
    { month: 'يونيو', sales: 67000, orders: 168, customers: 125 }
  ];

  // بيانات الخدمات
  const servicesData = [
    { name: 'قطع الليزر', value: 40, color: '#8B5CF6' },
    { name: 'النقش', value: 30, color: '#06B6D4' },
    { name: 'الحفر', value: 20, color: '#F59E0B' },
    { name: 'خدمات أخرى', value: 10, color: '#10B981' }
  ];

  // بيانات الأداء اليومي
  const dailyPerformance = [
    { day: 'السبت', revenue: 8500, orders: 25 },
    { day: 'الأحد', revenue: 9200, orders: 28 },
    { day: 'الاثنين', revenue: 7800, orders: 22 },
    { day: 'الثلاثاء', revenue: 10500, orders: 32 },
    { day: 'الأربعاء', revenue: 9800, orders: 29 },
    { day: 'الخميس', revenue: 11200, orders: 35 },
    { day: 'الجمعة', revenue: 6500, orders: 18 }
  ];

  const exportReport = () => {
    console.log('تصدير التقرير...');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <TrendingUp className="h-8 w-8 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">التقارير والتحليلات</h2>
            <p className="text-gray-400">تحليل شامل لأداء الأعمال والمبيعات</p>
          </div>
        </div>
        <div className="flex space-x-4 rtl:space-x-reverse">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
          >
            <option value="week">هذا الأسبوع</option>
            <option value="month">هذا الشهر</option>
            <option value="quarter">هذا الربع</option>
            <option value="year">هذا العام</option>
          </select>
          <Button onClick={exportReport} className="bg-green-600 hover:bg-green-700">
            <Download className="h-4 w-4 ml-2" />
            تصدير التقرير
          </Button>
        </div>
      </div>

      {/* بطاقات الإحصائيات الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">إجمالي المبيعات</p>
                <p className="text-3xl font-bold text-blue-400">328,500 ر.س</p>
                <p className="text-green-400 text-sm flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 ml-1" />
                  +12.5% عن الشهر الماضي
                </p>
              </div>
              <DollarSign className="h-12 w-12 text-blue-400 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">عدد الطلبات</p>
                <p className="text-3xl font-bold text-green-400">748</p>
                <p className="text-green-400 text-sm flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 ml-1" />
                  +8.2% عن الشهر الماضي
                </p>
              </div>
              <ShoppingBag className="h-12 w-12 text-green-400 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">العملاء الجدد</p>
                <p className="text-3xl font-bold text-purple-400">156</p>
                <p className="text-green-400 text-sm flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 ml-1" />
                  +15.8% عن الشهر الماضي
                </p>
              </div>
              <Users className="h-12 w-12 text-purple-400 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">متوسط قيمة الطلب</p>
                <p className="text-3xl font-bold text-orange-400">439 ر.س</p>
                <p className="text-red-400 text-sm flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 ml-1 rotate-180" />
                  -2.1% عن الشهر الماضي
                </p>
              </div>
              <Calendar className="h-12 w-12 text-orange-400 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* الرسوم البيانية */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* رسم بياني للمبيعات الشهرية */}
        <Card className="bg-slate-800/50 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white">المبيعات الشهرية</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="sales" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* رسم دائري للخدمات */}
        <Card className="bg-slate-800/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">توزيع الخدمات</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={servicesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {servicesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* رسم خطي للأداء اليومي */}
        <Card className="bg-slate-800/50 border-green-500/30 xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-white">الأداء اليومي</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} />
                <Line type="monotone" dataKey="orders" stroke="#F59E0B" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
