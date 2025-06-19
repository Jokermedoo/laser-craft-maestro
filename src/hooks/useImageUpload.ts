
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useImageUpload = () => {
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file: File, folder: string = 'gallery') => {
    try {
      setUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${folder}/${Date.now()}-${Math.random()}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('gallery-images')
        .upload(fileName, file);
      
      if (error) throw error;
      
      const { data: urlData } = supabase.storage
        .from('gallery-images')
        .getPublicUrl(fileName);
      
      return { success: true, url: urlData.publicUrl };
    } catch (error) {
      console.error('Error uploading image:', error);
      return { success: false, error };
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (url: string) => {
    try {
      const fileName = url.split('/').pop();
      if (!fileName) return { success: false, error: 'Invalid file name' };
      
      const { error } = await supabase.storage
        .from('gallery-images')
        .remove([fileName]);
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error deleting image:', error);
      return { success: false, error };
    }
  };

  return { uploadImage, deleteImage, uploading };
};
