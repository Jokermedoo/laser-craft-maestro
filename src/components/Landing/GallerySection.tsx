
import React, { useState, useEffect } from 'react';
import { Eye, Heart } from 'lucide-react';
import { galleryService, GalleryItem } from '@/services/galleryService';
import Loader from '@/components/common/Loader';

const GallerySection: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    loadGalleryItems();
  }, []);

  const loadGalleryItems = async () => {
    try {
      const data = await galleryService.getAll();
      setItems(data);
    } catch (error) {
      console.error('Error loading gallery items:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['الكل', ...Array.from(new Set(items.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'الكل' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const featuredItems = filteredItems.filter(item => item.featured);
  const displayItems = featuredItems.length > 0 ? featuredItems : filteredItems.slice(0, 9);

  if (loading) {
    return (
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <Loader text="جاري تحميل المعرض..." />
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            استعرض مجموعة من أفضل أعمالنا في مجال النقش والحفر بالليزر
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image_url || '/placeholder.svg'}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(item.image_url || '')}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black p-2 rounded-full">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                )}
                <span className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {displayItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">لا توجد أعمال في هذا التصنيف</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
