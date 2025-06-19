
import { useState, useEffect } from 'react';
import { checkAdminAuth, getAdminUser, logoutAdmin } from '@/utils/checkAdminAuth';

export interface AdminUser {
  email: string;
  name: string;
  loginTime: string;
}

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = checkAdminAuth();
      const userData = getAdminUser();
      
      setIsAuthenticated(isLoggedIn);
      setUser(userData);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const logout = () => {
    logoutAdmin();
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    loading,
    logout
  };
};
