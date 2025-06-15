
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Wallet, PieChart } from 'lucide-react';

const FinanceDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // بيانات الإيرادات الشهرية
  const revenueData = [
    { month: 'يناير', revenue: 45000, expenses: 32000, profit: 13000 },
    { month: 'فبراير', revenue: 52000, expenses: 35000, profit: 17000 },
    { month: 'مارس', revenue: 48000, expenses: 33000, profit: 15000 },
    { month: 'أبريل', revenue: 61000, expenses: 38000, profit: 23000 },
    { month: 'مايو', revenue: 55000, expenses: 36000, profit: 19000 },
    { month: 'يونيو', revenue: 67000, expenses: 40000, profit: 27000 }
  ];

  // بيانات المصروفات
  const expensesData = [
    { category: 'المواد الخام', amount: 15000, percentage: 37.5 },
    { category: 'الرواتب', amount: 12000, percentage: 30 },
    { category: 'الكهرباء والمياه', amount: 5000, percentage: 12.5 },
    { category: 'الصيانة', amount: 4000, percentage: 10 },
    { category: 'أخرى', amount: 4000, percentage: 10 }
  ];

  // بيانات التدفق النقدي اليومي
  const cashFlowData = [
    { day: 'الاثنين', inflow: 8500, outflow: 3200 },
    { day: 'الثلاثاء', inflow: 9200, outflow: 2800 },
    { day: 'الأربعاء', inflow: 7800, outflow: 4100 },
    { day: 'الخميس', inflow: 10500, outflow: 3500 },
    { day: 'الجمعة', inflow: 9800, outflow: 2900 },
    { day: 'السبت', inflow: 11200, outflow: 4200 },
    { day: 'الأحد', inflow: 6500, outflow: 2200 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <DollarSign className="h-8 w-8 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">لوحة التحكم المالية</h2>
            <p className="text-gray-400">إدارة الإيرادات والمصروفات والتدفق النقدي</p>
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
          <Button className="bg-green-600 hover:bg-green-700">
            <PieChart className="h-4 w-4 ml-2" />
            تقرير مالي
          </Button>
        </div>
      </div>

      {/* بطاقات الإحصائيات المالية */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">إجمالي الإيرادات</p>
                <p className="text-3xl font-bold text-green-400">328,500 ر.س</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-400 ml-1" />
                  <span className="text-green-400 text-sm">+12.5%</span>
                </div>
              </div>
              <DollarSign className="h-12 w-12 text-green-400 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-600/20 to-pink-600/20 border-red-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">إجمالي المصروفات</p>
                <p className="text-3xl font-bold text-red-400">214,000 ر.س</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-red-400 ml-1" />
                  <span className="text-red-400 text-sm">+8.2%</span>
                </div>
              </div>
              <CreditCard className="h-12 w-12 text-red-400 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">صافي الربح</p>
                <p className="text-3xl font-bold text-blue-400">114,500 ر.س</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-blue-400 ml-1" />
                  <span className="text-blue-400 text-sm">+18.9%</span>
                </div>
              </div>
              <Wallet className="h-12 w-12 text-blue-400 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">هامش الربح</p>
                <p className="text-3xl font-bold text-purple-400">34.9%</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-purple-400 ml-1" />
                  <span className="text-purple-400 text-sm">+2.1%</span>
                </div>
              </div>
              <TrendingUp className="h-12 w-12 text-purple-400 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* الرسوم البيانية المالية */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* رسم الإيرادات والأرباح */}
        <Card className="bg-slate-800/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white">الإيرادات والأرباح الشهرية</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
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
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                <Area type="monotone" dataKey="profit" stackId="2" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* رسم المصروفات */}
        <Card className="bg-slate-800/50 border-red-500/30">
          <CardHeader>
            <CardTitle className="text-white">توزيع المصروفات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expensesData.map((expense, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between text-white mb-2">
                      <span className="font-medium">{expense.category}</span>
                      <span>{expense.amount.toLocaleString()} ر.س</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${expense.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <Badge className="mr-4 bg-red-500/20 text-red-400">
                    {expense.percentage}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* التدفق النقدي */}
        <Card className="bg-slate-800/50 border-blue-500/30 xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-white">التدفق النقدي الأسبوعي</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cashFlowData}>
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
                <Bar dataKey="inflow" fill="#10B981" name="التدفق الداخل" />
                <Bar dataKey="outflow" fill="#EF4444" name="التدفق الخارج" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* قائمة المعاملات الأخيرة */}
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">المعاملات الأخيرة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: 1, type: 'income', description: 'قطع ليزر - أحمد محمد', amount: 450, date: '2024-06-15' },
              { id: 2, type: 'expense', description: 'شراء مواد خام', amount: -1200, date: '2024-06-14' },
              { id: 3, type: 'income', description: 'نقش على الخشب - فاطمة علي', amount: 300, date: '2024-06-14' },
              { id: 4, type: 'expense', description: 'صيانة الآلات', amount: -800, date: '2024-06-13' },
              { id: 5, type: 'income', description: 'حفر على الزجاج - خالد سعد', amount: 550, date: '2024-06-13' }
            ].map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className={`w-3 h-3 rounded-full ${transaction.type === 'income' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <div>
                    <p className="text-white font-medium">{transaction.description}</p>
                    <p className="text-gray-400 text-sm">{transaction.date}</p>
                  </div>
                </div>
                <div className={`font-bold ${transaction.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount} ر.س
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinanceDashboard;
