
export const checkAdminAuth = (): boolean => {
  const isLoggedIn = localStorage.getItem('admin_logged_in') === 'true';
  const userData = localStorage.getItem('admin_user');
  
  if (!isLoggedIn || !userData) {
    return false;
  }
  
  try {
    const user = JSON.parse(userData);
    return user && user.email && user.name;
  } catch (error) {
    console.error('Error parsing admin user data:', error);
    return false;
  }
};

export const getAdminUser = () => {
  const userData = localStorage.getItem('admin_user');
  if (userData) {
    try {
      return JSON.parse(userData);
    } catch (error) {
      console.error('Error parsing admin user data:', error);
      return null;
    }
  }
  return null;
};

export const logoutAdmin = () => {
  localStorage.removeItem('admin_logged_in');
  localStorage.removeItem('admin_user');
};
