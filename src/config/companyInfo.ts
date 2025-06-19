
export interface CompanyInfo {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  description: string;
  working_hours: string;
  website?: string;
  facebook_url?: string;
  instagram_url?: string;
  youtube_url?: string;
}

export const defaultCompanyInfo: CompanyInfo = {
  name: 'ورشة المعز للليزر',
  phone: '+20 xxx xxx xxxx',
  whatsapp: '20xxxxxxxxx',
  email: 'info@almaez-laser.com',
  address: 'الأقصر، مصر',
  description: 'ورشة المعز لخدمات الليزر هي شركة رائدة في مجال النقش والحفر بالليزر، نقدم خدمات عالية الجودة بأحدث التقنيات.',
  working_hours: 'السبت - الخميس: 9:00 - 18:00',
  website: 'https://almaez-laser.com',
  facebook_url: '',
  instagram_url: '',
  youtube_url: ''
};
