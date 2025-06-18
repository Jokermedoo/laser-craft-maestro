
import { toast } from 'sonner';
import React from 'react';

interface NotificationOptions {
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const useSmartNotifications = () => {
  const showSuccess = (message: string, options?: NotificationOptions) => {
    toast.success(message, {
      description: options?.description,
      action: options?.action ? {
        label: options.action.label,
        onClick: options.action.onClick,
      } : undefined,
    });
  };

  const showError = (message: string, options?: NotificationOptions) => {
    toast.error(message, {
      description: options?.description,
      action: options?.action ? {
        label: options.action.label,
        onClick: options.action.onClick,
      } : undefined,
    });
  };

  const showWarning = (message: string, options?: NotificationOptions) => {
    toast.warning(message, {
      description: options?.description,
      action: options?.action ? {
        label: options.action.label,
        onClick: options.action.onClick,
      } : undefined,
    });
  };

  const showInfo = (message: string, options?: NotificationOptions) => {
    toast.info(message, {
      description: options?.description,
      action: options?.action ? {
        label: options.action.label,
        onClick: options.action.onClick,
      } : undefined,
    });
  };

  const showLoading = (message: string, promise: Promise<any>) => {
    return toast.promise(promise, {
      loading: message,
      success: 'تم بنجاح!',
      error: 'حدث خطأ',
    });
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showLoading,
  };
};
