
import { useEffect, useCallback } from 'react';

interface ShortcutConfig {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  action: () => void;
  description: string;
}

export const useKeyboardShortcuts = (shortcuts: ShortcutConfig[]) => {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const shortcut = shortcuts.find(s => 
      s.key.toLowerCase() === event.key.toLowerCase() &&
      !!s.ctrlKey === event.ctrlKey &&
      !!s.shiftKey === event.shiftKey &&
      !!s.altKey === event.altKey
    );

    if (shortcut) {
      event.preventDefault();
      shortcut.action();
    }
  }, [shortcuts]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return shortcuts;
};

// اختصارات محددة مسبقاً للأدمن
export const useAdminShortcuts = (actions: {
  save?: () => void;
  preview?: () => void;
  export?: () => void;
  reset?: () => void;
  undo?: () => void;
  redo?: () => void;
}) => {
  const shortcuts: ShortcutConfig[] = [
    {
      key: 's',
      ctrlKey: true,
      action: actions.save || (() => {}),
      description: 'حفظ (Ctrl+S)'
    },
    {
      key: 'p',
      ctrlKey: true,
      action: actions.preview || (() => {}),
      description: 'معاينة (Ctrl+P)'
    },
    {
      key: 'e',
      ctrlKey: true,
      action: actions.export || (() => {}),
      description: 'تصدير (Ctrl+E)'
    },
    {
      key: 'r',
      ctrlKey: true,
      shiftKey: true,
      action: actions.reset || (() => {}),
      description: 'إعادة تعيين (Ctrl+Shift+R)'
    },
    {
      key: 'z',
      ctrlKey: true,
      action: actions.undo || (() => {}),
      description: 'تراجع (Ctrl+Z)'
    },
    {
      key: 'y',
      ctrlKey: true,
      action: actions.redo || (() => {}),
      description: 'إعادة (Ctrl+Y)'
    }
  ];

  return useKeyboardShortcuts(shortcuts);
};
