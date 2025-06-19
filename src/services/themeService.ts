
export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  mode: 'light' | 'dark' | 'auto';
}

export const themeService = {
  getThemes(): Theme[] {
    return [
      {
        id: 'dark-purple',
        name: 'البنفسجي الداكن',
        colors: {
          primary: '#8B5CF6',
          secondary: '#F59E0B',
          accent: '#EF4444',
          background: '#0F172A'
        },
        mode: 'dark'
      },
      {
        id: 'dark-blue',
        name: 'الأزرق الداكن',
        colors: {
          primary: '#3B82F6',
          secondary: '#10B981',
          accent: '#F59E0B',
          background: '#1E293B'
        },
        mode: 'dark'
      },
      {
        id: 'light-elegant',
        name: 'الأنيق الفاتح',
        colors: {
          primary: '#6366F1',
          secondary: '#EC4899',
          accent: '#8B5CF6',
          background: '#F8FAFC'
        },
        mode: 'light'
      }
    ];
  },

  saveTheme(theme: Theme): void {
    localStorage.setItem('theme', JSON.stringify(theme));
  },

  getCurrentTheme(): Theme | null {
    const saved = localStorage.getItem('theme');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  },

  applyTheme(theme: Theme): void {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.colors.primary);
    root.style.setProperty('--theme-secondary', theme.colors.secondary);
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--theme-background', theme.colors.background);
    
    document.body.classList.remove('light', 'dark');
    if (theme.mode !== 'auto') {
      document.body.classList.add(theme.mode);
    }
    
    this.saveTheme(theme);
  }
};
