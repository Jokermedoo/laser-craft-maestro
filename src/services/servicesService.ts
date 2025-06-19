
import { supabase } from '@/lib/supabaseClient';

export interface Service {
  id?: string;
  title: string;
  description?: string;
  icon: string;
  features: string[];
  price?: string;
  gradient: string;
  popular: boolean;
  created_at?: string;
  updated_at?: string;
}

export const servicesService = {
  async getAll(): Promise<Service[]> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async create(service: Omit<Service, 'id' | 'created_at' | 'updated_at'>): Promise<Service> {
    const { data, error } = await supabase
      .from('services')
      .insert([service])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Service>): Promise<Service> {
    const { data, error } = await supabase
      .from('services')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
