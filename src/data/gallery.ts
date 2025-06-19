
export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  featured?: boolean;
}

export const galleryData: GalleryItem[] = [
  {
    id: '1',
    image: "/lovable-uploads/65900846-b6de-40b4-b288-b1b78c510879.png",
    title: "نقش فني على الخشب الطبيعي",
    description: "أعمال نقش متقنة وفنية على الخشب الطبيعي بتصاميم مخصصة",
    category: "نقش",
    featured: true
  },
  {
    id: '2',
    image: "/lovable-uploads/a8b96219-ecf0-4f41-bfbd-bf9154d6ae6d.png", 
    title: "تقطيع دقيق للأكريليك",
    description: "تقطيع وتشكيل الأكريليك بدقة عالية وحواف نظيفة",
    category: "تقطيع"
  },
  {
    id: '3',
    image: "/lovable-uploads/63cf263a-71e9-4a5d-90d5-96cb9490e8ab.png",
    title: "دروع تذكارية مميزة", 
    description: "دروع وميداليات تذكارية بتصاميم احترافية للمناسبات",
    category: "دروع"
  },
  {
    id: '4',
    image: "/lovable-uploads/7e58da88-2f6a-4421-be55-2dae8f38a583.png",
    title: "لوحات إعلانية احترافية",
    description: "لوحات دعاية وإعلان عالية الجودة للشركات والمحلات",
    category: "لوحات"
  },
  {
    id: '5',
    image: "/lovable-uploads/0c4893fc-ccab-42f0-83eb-17b007cc808f.png",
    title: "خط عربي بالليزر",
    description: "نقش الخط العربي بدقة متناهية وجمال فني رائع",
    category: "خط عربي"
  },
  {
    id: '6',
    image: "/lovable-uploads/65900846-b6de-40b4-b288-b1b78c510879.png",
    title: "صناديق هدايا مخصصة",
    description: "صناديق هدايا منقوشة بالليزر للمناسبات الخاصة",
    category: "هدايا"
  },
  {
    id: '7',
    image: "/lovable-uploads/a8b96219-ecf0-4f41-bfbd-bf9154d6ae6d.png",
    title: "تقطيع أشكال معقدة",
    description: "تقطيع أشكال هندسية معقدة بدقة فائقة",
    category: "تقطيع"
  },
  {
    id: '8',
    image: "/lovable-uploads/63cf263a-71e9-4a5d-90d5-96cb9490e8ab.png",
    title: "كؤوس وجوائز",
    description: "كؤوس وجوائز للبطولات والمسابقات",
    category: "دروع"
  }
];

export const galleryCategories = [
  'الكل',
  'نقش', 
  'تقطيع',
  'دروع',
  'لوحات',
  'خط عربي',
  'هدايا'
];
