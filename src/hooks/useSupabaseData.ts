
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type Tables = Database['public']['Tables'];
type GalleryItem = Tables['gallery_items']['Row'];
type Service = Tables['services']['Row'];
type CompanyInfo = Tables['company_info']['Row'];

export const useGalleryData = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item: Omit<GalleryItem, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .insert([item])
        .select();
      
      if (error) throw error;
      if (data) setItems(prev => [data[0], ...prev]);
      return { success: true };
    } catch (error) {
      console.error('Error adding gallery item:', error);
      return { success: false, error };
    }
  };

  const updateItem = async (id: string, updates: Partial<GalleryItem>) => {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select();
      
      if (error) throw error;
      if (data) {
        setItems(prev => prev.map(item => item.id === id ? data[0] : item));
      }
      return { success: true };
    } catch (error) {
      console.error('Error updating gallery item:', error);
      return { success: false, error };
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('gallery_items')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      setItems(prev => prev.filter(item => item.id !== id));
      return { success: true };
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      return { success: false, error };
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { items, loading, addItem, updateItem, deleteItem, refetch: fetchItems };
};

export const useServicesData = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const addService = async (service: Omit<Service, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('services')
        .insert([service])
        .select();
      
      if (error) throw error;
      if (data) setServices(prev => [data[0], ...prev]);
      return { success: true };
    } catch (error) {
      console.error('Error adding service:', error);
      return { success: false, error };
    }
  };

  const updateService = async (id: string, updates: Partial<Service>) => {
    try {
      const { data, error } = await supabase
        .from('services')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select();
      
      if (error) throw error;
      if (data) {
        setServices(prev => prev.map(service => service.id === id ? data[0] : service));
      }
      return { success: true };
    } catch (error) {
      console.error('Error updating service:', error);
      return { success: false, error };
    }
  };

  const deleteService = async (id: string) => {
    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      setServices(prev => prev.filter(service => service.id !== id));
      return { success: true };
    } catch (error) {
      console.error('Error deleting service:', error);
      return { success: false, error };
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return { services, loading, addService, updateService, deleteService, refetch: fetchServices };
};

export const useCompanyData = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCompanyInfo = async () => {
    try {
      const { data, error } = await supabase
        .from('company_info')
        .select('*')
        .limit(1)
        .single();
      
      if (error && error.code !== 'PGRST116') throw error;
      setCompanyInfo(data);
    } catch (error) {
      console.error('Error fetching company info:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateCompanyInfo = async (updates: Partial<CompanyInfo>) => {
    try {
      if (companyInfo?.id) {
        const { data, error } = await supabase
          .from('company_info')
          .update({ ...updates, updated_at: new Date().toISOString() })
          .eq('id', companyInfo.id)
          .select();
        
        if (error) throw error;
        if (data) setCompanyInfo(data[0]);
      }
      return { success: true };
    } catch (error) {
      console.error('Error updating company info:', error);
      return { success: false, error };
    }
  };

  useEffect(() => {
    fetchCompanyInfo();
  }, []);

  return { companyInfo, loading, updateCompanyInfo, refetch: fetchCompanyInfo };
};
