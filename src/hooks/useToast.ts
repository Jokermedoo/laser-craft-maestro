
import { useState } from 'react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description?: string;
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (title: string, description?: string) => {
    showToast({ type: 'success', title, description });
  };

  const error = (title: string, description?: string) => {
    showToast({ type: 'error', title, description });
  };

  const warning = (title: string, description?: string) => {
    showToast({ type: 'warning', title, description });
  };

  const info = (title: string, description?: string) => {
    showToast({ type: 'info', title, description });
  };

  return {
    toasts,
    showToast,
    removeToast,
    success,
    error,
    warning,
    info
  };
};
