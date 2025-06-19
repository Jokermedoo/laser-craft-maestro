
export interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  gradients: {
    main: string;
    secondary: string;
  };
}

export const availableThemes: ThemeConfig[] = [
  {
    id: 'purple-dark',
    name: 'البنفسجي الداكن',
    colors: {
      primary: '#8B5CF6',
      secondary: '#F59E0B',
      accent: '#EF4444',
      background: '#0F172A',
      text: '#FFFFFF'
    },
    gradients: {
      main: 'from-slate-900 via-purple-900 to-slate-900',
      secondary: 'from-purple-600 to-pink-600'
    }
  },
  {
    id: 'blue-dark',
    name: 'الأزرق الداكن',
    colors: {
      primary: '#3B82F6',
      secondary: '#10B981',
      accent: '#F59E0B',
      background: '#1E293B',
      text: '#FFFFFF'
    },
    gradients: {
      main: 'from-slate-900 via-blue-900 to-slate-900',
      secondary: 'from-blue-600 to-indigo-600'
    }
  },
  {
    id: 'golden',
    name: 'الذهبي',
    colors: {
      primary: '#F59E0B',
      secondary: '#EF4444',
      accent: '#8B5CF6',
      background: '#1C1917',
      text: '#FFFFFF'
    },
    gradients: {
      main: 'from-amber-900 via-yellow-900 to-amber-900',
      secondary: 'from-yellow-600 to-orange-600'
    }
  }
];

export const getCurrentTheme = (): ThemeConfig => {
  const savedTheme = localStorage.getItem('currentTheme');
  if (savedTheme) {
    try {
      return JSON.parse(savedTheme);
    } catch (error) {
      console.error('Error parsing saved theme:', error);
    }
  }
  return availableThemes[0];
};

export const saveTheme = (theme: ThemeConfig): void => {
  localStorage.setItem('currentTheme', JSON.stringify(theme));
};
