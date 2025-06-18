
import { toast } from 'sonner';
import React from 'react';

interface NotificationOptions {
  title?: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

interface NotificationHistory {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  timestamp: Date;
  read: boolean;
}

export const useSmartNotifications = () => {
  const [notifications, setNotifications] = React.useState<NotificationHistory[]>([]);

  const addToHistory = (type: NotificationHistory['type'], message: string) => {
    const newNotification: NotificationHistory = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: new Date(),
      read: false,
    };
    setNotifications(prev => [newNotification, ...prev.slice(0, 49)]); // Keep last 50
  };

  const showSuccess = (message: string, options?: NotificationOptions) => {
    addToHistory('success', message);
    toast.success(message, {
      description: options?.description,
      duration: options?.duration || 4000,
      action: options?.action ? {
        label: options.action.label,
        onClick: options.action.onClick,
      } : undefined,
    });
  };

  const showError = (message: string, options?: NotificationOptions) => {
    addToHistory('error', message);
    toast.error(message, {
      description: options?.description,
      duration: options?.duration || 6000,
      action: options?.action ? {
        label: options.action.label,
        onClick: options.action.onClick,
      } : undefined,
    });
  };

  const showWarning = (message: string, options?: NotificationOptions) => {
    addToHistory('warning', message);
    toast.warning(message, {
      description: options?.description,
      duration: options?.duration || 5000,
      action: options?.action ? {
        label: options.action.label,
        onClick: options.action.onClick,
      } : undefined,
    });
  };

  const showInfo = (message: string, options?: NotificationOptions) => {
    addToHistory('info', message);
    toast.info(message, {
      description: options?.description,
      duration: options?.duration || 4000,
      action: options?.action ? {
        label: options.action.label,
        onClick: options.action.onClick,
      } : undefined,
    });
  };

  const showLoading = (message: string, promise: Promise<any>) => {
    return toast.promise(promise, {
      loading: message,
      success: (data) => {
        addToHistory('success', 'تم بنجاح!');
        return 'تم بنجاح!';
      },
      error: (error) => {
        addToHistory('error', 'حدث خطأ');
        return 'حدث خطأ';
      },
    });
  };

  const showCustom = (message: string, options?: NotificationOptions) => {
    addToHistory('info', message);
    toast(message, {
      duration: options?.duration || 4000,
      description: options?.description,
    });
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const clearHistory = () => {
    setNotifications([]);
  };

  const getUnreadCount = () => {
    return notifications.filter(n => !n.read).length;
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showLoading,
    showCustom,
    notifications,
    markAsRead,
    markAllAsRead,
    clearHistory,
    getUnreadCount,
  };
};
