
import { supabase } from '@/lib/supabaseClient';

export interface GalleryItem {
  id?: string;
  title: string;
  description?: string;
  image_url?: string;
  category: string;
  featured: boolean;
  created_at?: string;
  updated_at?: string;
}

export const galleryService = {
  async getAll(): Promise<GalleryItem[]> {
    const { data, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async create(item: Omit<GalleryItem, 'id' | 'created_at' | 'updated_at'>): Promise<GalleryItem> {
    const { data, error } = await supabase
      .from('gallery_items')
      .insert([item])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<GalleryItem>): Promise<GalleryItem> {
    const { data, error } = await supabase
      .from('gallery_items')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('gallery_items')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  async uploadImage(file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `gallery/${Date.now()}-${Math.random()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('gallery-images')
      .upload(fileName, file);
    
    if (error) throw error;
    
    const { data: urlData } = supabase.storage
      .from('gallery-images')
      .getPublicUrl(fileName);
    
    return urlData.publicUrl;
  }
};
