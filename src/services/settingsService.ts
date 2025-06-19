
import { supabase } from '@/lib/supabaseClient';

export interface CompanySettings {
  id?: string;
  name: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  working_hours: string;
  website?: string;
  description?: string;
  facebook_url?: string;
  instagram_url?: string;
  youtube_url?: string;
  created_at?: string;
  updated_at?: string;
}

export const settingsService = {
  async get(): Promise<CompanySettings | null> {
    const { data, error } = await supabase
      .from('company_info')
      .select('*')
      .limit(1)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  async update(settings: Partial<CompanySettings>): Promise<CompanySettings> {
    const existing = await this.get();
    
    if (existing?.id) {
      const { data, error } = await supabase
        .from('company_info')
        .update({ ...settings, updated_at: new Date().toISOString() })
        .eq('id', existing.id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } else {
      const { data, error } = await supabase
        .from('company_info')
        .insert([settings])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    }
  }
};
