
export const COMPANY_INFO = {
  NAME: "ورشة المعز لخدمات الليزر",
  PHONE: "+20 102 191 1335",
  WHATSAPP: "201021911335",
  ADDRESS: "أرمنت الوابورات، الأقصر",
  EMAIL: "info@almaez-laser.com"
} as const;

export const SERVICES = [
  "النقش بالليزر",
  "التقطيع بالليزر", 
  "الرسم والحفر",
  "الدروع والميداليات"
] as const;

export const SOCIAL_LINKS = {
  WHATSAPP: `https://wa.me/${COMPANY_INFO.WHATSAPP}`,
  PHONE: `tel:${COMPANY_INFO.PHONE}`
} as const;
