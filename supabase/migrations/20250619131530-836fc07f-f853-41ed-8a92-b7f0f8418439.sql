
-- Create tables for gallery items
CREATE TABLE public.gallery_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  category TEXT DEFAULT 'عام',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create tables for services
CREATE TABLE public.services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT DEFAULT 'Zap',
  features TEXT[] DEFAULT '{}',
  price TEXT,
  gradient TEXT DEFAULT 'from-blue-400 to-purple-500',
  popular BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for company information
CREATE TABLE public.company_info (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  whatsapp TEXT,
  email TEXT,
  address TEXT,
  working_hours TEXT DEFAULT 'السبت - الخميس: 9:00 - 18:00',
  website TEXT,
  description TEXT,
  facebook_url TEXT,
  instagram_url TEXT,
  youtube_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create admin users table
CREATE TABLE public.admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery-images', 'gallery-images', true);

-- Create RLS policies for gallery_items
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to gallery_items" ON public.gallery_items FOR SELECT USING (true);
CREATE POLICY "Allow authenticated users to manage gallery_items" ON public.gallery_items FOR ALL USING (true);

-- Create RLS policies for services
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow authenticated users to manage services" ON public.services FOR ALL USING (true);

-- Create RLS policies for company_info
ALTER TABLE public.company_info ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to company_info" ON public.company_info FOR SELECT USING (true);
CREATE POLICY "Allow authenticated users to manage company_info" ON public.company_info FOR ALL USING (true);

-- Create RLS policies for admin_users
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow authenticated users to read admin_users" ON public.admin_users FOR SELECT USING (true);
CREATE POLICY "Allow authenticated users to manage admin_users" ON public.admin_users FOR ALL USING (true);

-- Create storage policies
CREATE POLICY "Allow public read access to gallery images" ON storage.objects FOR SELECT USING (bucket_id = 'gallery-images');
CREATE POLICY "Allow authenticated users to upload gallery images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'gallery-images');
CREATE POLICY "Allow authenticated users to update gallery images" ON storage.objects FOR UPDATE USING (bucket_id = 'gallery-images');
CREATE POLICY "Allow authenticated users to delete gallery images" ON storage.objects FOR DELETE USING (bucket_id = 'gallery-images');

-- Insert default company info
INSERT INTO public.company_info (name, phone, whatsapp, email, address, description) VALUES 
('ورشة المعز للليزر', '+20 xxx xxx xxxx', '20xxxxxxxxx', 'info@almaez-laser.com', 'الأقصر، مصر', 'ورشة المعز لخدمات الليزر هي شركة رائدة في مجال النقش والحفر بالليزر، نقدم خدمات عالية الجودة بأحدث التقنيات.');

-- Insert sample gallery items
INSERT INTO public.gallery_items (title, description, image_url, category, featured) VALUES 
('نقش فني على الخشب الطبيعي', 'أعمال نقش متقنة وفنية على الخشب الطبيعي بتصاميم مخصصة', '/lovable-uploads/65900846-b6de-40b4-b288-b1b78c510879.png', 'نقش', true),
('تقطيع دقيق للأكريليك', 'تقطيع وتشكيل الأكريليك بدقة عالية وحواف نظيفة', '/lovable-uploads/a8b96219-ecf0-4f41-bfbd-bf9154d6ae6d.png', 'تقطيع', false),
('دروع تذكارية مميزة', 'دروع وميداليات تذكارية بتصاميم احترافية للمناسبات', '/lovable-uploads/63cf263a-71e9-4a5d-90d5-96cb9490e8ab.png', 'دروع', false);

-- Insert sample services
INSERT INTO public.services (title, description, icon, features, price, gradient, popular) VALUES 
('النقش بالليزر على المعادن', 'نقش دقيق ومتين على الذهب والفضة والنحاس والستانلس ستيل', 'Zap', ARRAY['دقة عالية', 'مقاوم للتآكل', 'تفاصيل دقيقة', 'ضمان الجودة'], 'ابتداءً من 50 جنيه', 'from-yellow-400 to-orange-500', true),
('التقطيع بالليزر للخامات', 'تقطيع دقيق للأكريليك والخشب والجلد والقماش بأشكال معقدة', 'Package', ARRAY['حواف نظيفة', 'أشكال معقدة', 'دقة متناهية', 'سرعة عالية'], 'ابتداءً من 30 جنيه', 'from-blue-400 to-purple-500', false);
