
import { LucideIcon } from 'lucide-react';
import { Zap, Package, Trophy, Palette } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  gradient: string;
  popular?: boolean;
}

export const servicesData: Service[] = [
  {
    id: '1',
    icon: Zap,
    title: "النقش بالليزر على المعادن",
    description: "نقش دقيق ومتين على الذهب والفضة والنحاس والستانلس ستيل",
    features: ["دقة عالية", "مقاوم للتآكل", "تفاصيل دقيقة", "ضمان الجودة"],
    price: "ابتداءً من 50 جنيه",
    gradient: "from-yellow-400 to-orange-500",
    popular: true
  },
  {
    id: '2',
    icon: Package,
    title: "التقطيع بالليزر للخامات",
    description: "تقطيع دقيق للأكريليك والخشب والجلد والقماش بأشكال معقدة",
    features: ["حواف نظيفة", "أشكال معقدة", "دقة متناهية", "سرعة عالية"],
    price: "ابتداءً من 30 جنيه",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    id: '3',
    icon: Trophy,
    title: "الدروع والميداليات التذكارية",
    description: "تصنيع دروع وميداليات مخصصة للفرق والمؤسسات والمناسبات",
    features: ["تصميم مخصص", "خامات فاخرة", "تشطيب مميز", "تسليم سريع"],
    price: "ابتداءً من 100 جنيه",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    id: '4',
    icon: Palette,
    title: "الرسم والحفر الفني",
    description: "رسم وحفر التصاميم الفنية والشعارات بأحدث تقنيات الليزر",
    features: ["إبداع فني", "تصاميم مبتكرة", "جودة احترافية", "أسعار منافسة"],
    price: "ابتداءً من 80 جنيه",
    gradient: "from-pink-400 to-red-500"
  }
];

// خدمات للقائمة المبسطة في الصفحة الرئيسية
export const homeServicesData = [
  {
    icon: Zap,
    title: "النقش بالليزر",
    description: "نقش دقيق على جميع أنواع الخامات بأعلى جودة وأدق التفاصيل",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Package,
    title: "التقطيع بالليزر", 
    description: "تقطيع الخامات بدقة متناهية وحواف نظيفة ومثالية",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    icon: Trophy,
    title: "الدروع والميداليات",
    description: "تصنيع دروع وميداليات تذكارية مخصصة للمناسبات",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: Palette,
    title: "الرسم والحفر",
    description: "رسم وحفر التصاميم المعقدة والفنية بأحدث تقنيات الليزر",
    gradient: "from-pink-400 to-red-500"
  }
];
