
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const SUPABASE_URL = "https://rozpewnnkvhxalqhipsa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvenBld25ua3ZoeGFscWhpcHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMzg1MjYsImV4cCI6MjA2NTkxNDUyNn0.mwCUAcDN-GO7Chy5VRREG2Ofoe7gIk1xVKM5CILwjrw";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
