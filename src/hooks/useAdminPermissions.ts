
import { useState, useEffect, useCallback } from 'react';

export interface Permission {
  id: string;
  name: string;
  description: string;
  category: string;
  level: 'read' | 'write' | 'admin';
}

export interface UserRole {
  id: string;
  name: string;
  permissions: string[];
  description: string;
}

export const useAdminPermissions = () => {
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    name: string;
    role: string;
    permissions: string[];
  } | null>(null);

  const [roles] = useState<UserRole[]>([
    {
      id: 'super_admin',
      name: 'مدير عام',
      description: 'صلاحيات كاملة على جميع الأقسام',
      permissions: ['*']
    },
    {
      id: 'content_manager',
      name: 'مدير محتوى',
      description: 'إدارة المحتوى والمعرض والخدمات',
      permissions: ['content.read', 'content.write', 'gallery.read', 'gallery.write', 'services.read', 'services.write']
    },
    {
      id: 'theme_designer',
      name: 'مصمم واجهات',
      description: 'تخصيص الثيمات والألوان والتصميم',
      permissions: ['theme.read', 'theme.write', 'design.read', 'design.write']
    },
    {
      id: 'user_manager',
      name: 'مدير المستخدمين',
      description: 'إدارة حسابات المستخدمين والعملاء',
      permissions: ['users.read', 'users.write', 'customers.read', 'customers.write']
    },
    {
      id: 'finance_manager',
      name: 'مدير مالي',
      description: 'إدارة الحسابات والتقارير المالية',
      permissions: ['finance.read', 'finance.write', 'reports.read', 'bookings.read']
    },
    {
      id: 'viewer',
      name: 'مشاهد',
      description: 'عرض فقط بدون صلاحيات تعديل',
      permissions: ['*.read']
    }
  ]);

  const checkPermission = useCallback((permission: string): boolean => {
    if (!currentUser) return false;
    
    // Super admin has all permissions
    if (currentUser.permissions.includes('*')) return true;
    
    // Check specific permission
    if (currentUser.permissions.includes(permission)) return true;
    
    // Check wildcard permissions
    const permissionParts = permission.split('.');
    const wildcardPermission = `${permissionParts[0]}.*`;
    if (currentUser.permissions.includes(wildcardPermission)) return true;
    
    return false;
  }, [currentUser]);

  const hasRole = useCallback((roleId: string): boolean => {
    return currentUser?.role === roleId;
  }, [currentUser]);

  const canAccess = useCallback((section: string): boolean => {
    const readPermission = `${section}.read`;
    return checkPermission(readPermission);
  }, [checkPermission]);

  const canEdit = useCallback((section: string): boolean => {
    const writePermission = `${section}.write`;
    return checkPermission(writePermission);
  }, [checkPermission]);

  const loginAsAdmin = useCallback((roleId: string = 'super_admin') => {
    const role = roles.find(r => r.id === roleId);
    if (role) {
      setCurrentUser({
        id: 'admin_user',
        name: 'المدير العام',
        role: roleId,
        permissions: role.permissions
      });
      localStorage.setItem('admin_session', JSON.stringify({ roleId, timestamp: Date.now() }));
    }
  }, [roles]);

  const logout = useCallback(() => {
    setCurrentUser(null);
    localStorage.removeItem('admin_session');
  }, []);

  useEffect(() => {
    // Check for existing session
    const session = localStorage.getItem('admin_session');
    if (session) {
      try {
        const { roleId, timestamp } = JSON.parse(session);
        // Session expires after 8 hours
        if (Date.now() - timestamp < 8 * 60 * 60 * 1000) {
          loginAsAdmin(roleId);
        } else {
          logout();
        }
      } catch (error) {
        logout();
      }
    }
  }, [loginAsAdmin, logout]);

  return {
    currentUser,
    roles,
    checkPermission,
    hasRole,
    canAccess,
    canEdit,
    loginAsAdmin,
    logout,
    isLoggedIn: !!currentUser
  };
};
