
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "1200+",
    label: "عميل راضٍ",
    description: "من جميع أنحاء مصر",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Award,
    number: "5000+",
    label: "مشروع منجز",
    description: "بأعلى جودة ودقة",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    number: "5+",
    label: "سنوات خبرة",
    description: "في مجال الليزر",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Star,
    number: "4.9",
    label: "تقييم العملاء",
    description: "من أصل 5 نجوم",
    gradient: "from-pink-500 to-red-500"
  }
];

const Stats = () => {
  return (
    <section className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-lg mb-4 block">أرقامنا تتحدث</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            إنجازات تفتخر بها <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">ورشة المعز</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`bg-gradient-to-r ${stat.gradient} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-white font-bold text-lg mb-2">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
