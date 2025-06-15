
import React, { createContext, useContext, ReactNode } from 'react';

interface CompanyInfo {
  name: string;
  phone: string;
  whatsapp: string;
  address: string;
  email?: string;
  secondaryPhone?: string;
}

interface CompanyContextType {
  companyInfo: CompanyInfo;
}

const companyInfo: CompanyInfo = {
  name: "ورشة المعز لخدمات الليزر",
  phone: "+20 102 191 1335",
  secondaryPhone: "+20 114 199 0282",
  whatsapp: "201141990282",
  address: "أرمنت الوابورات، الأقصر",
  email: "info@almaez-laser.com"
};

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
};

interface CompanyProviderProps {
  children: ReactNode;
}

export const CompanyProvider = ({ children }: CompanyProviderProps) => {
  return (
    <CompanyContext.Provider value={{ companyInfo }}>
      {children}
    </CompanyContext.Provider>
  );
};
