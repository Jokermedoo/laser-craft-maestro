
import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  companyName: string;
  description: string;
  workingHours?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  companyName,
  description,
  workingHours
}) => {
  const features = [
    {
      icon: Award,
      title: 'خبرة وإتقان',
      description: 'سنوات من الخبرة في مجال النقش والحفر بالليزر'
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'فريق عمل مدرب على أعلى مستوى من الاحترافية'
    },
    {
      icon: Clock,
      title: 'سرعة في التنفيذ',
      description: 'تسليم سريع مع الحفاظ على جودة العمل'
    }
  ];

  const achievements = [
    'أكثر من 1000 مشروع منجز',
    'عملاء راضون 100%',
    'تقنيات حديثة ومتطورة',
    'ضمان الجودة والإتقان'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            عن {companyName}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">إنجازatنا</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
            
            {workingHours && (
              <div className="mt-8 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <div>
                    <h4 className="text-white font-semibold">ساعات العمل</h4>
                    <p className="text-gray-300">{workingHours}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
