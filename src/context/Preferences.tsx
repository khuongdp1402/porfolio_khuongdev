import React, { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'vi';
export type Theme = 'dark' | 'light';
export type L = { en: string; vi: string };

interface PreferencesValue {
  lang: Lang;
  theme: Theme;
  toggleLang: () => void;
  toggleTheme: () => void;
  tr: (text: L) => string;
}

const PreferencesContext = createContext<PreferencesValue | undefined>(undefined);

function read<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  try {
    const v = window.localStorage.getItem(key);
    return allowed.includes(v as T) ? (v as T) : fallback;
  } catch {
    return fallback;
  }
}

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() =>
    read('pf-lang', ['en', 'vi'] as const, navigator.language?.toLowerCase().startsWith('vi') ? 'vi' : 'en')
  );
  const [theme, setTheme] = useState<Theme>(() => read('pf-theme', ['dark', 'light'] as const, 'dark'));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute('content', theme === 'dark' ? '#0C0C0C' : '#F7F6F3');
    try {
      window.localStorage.setItem('pf-theme', theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'en'
        ? 'Đỗ Phú Khương — Full-Stack .NET Developer'
        : 'Đỗ Phú Khương — Lập trình viên Full-Stack .NET';
    try {
      window.localStorage.setItem('pf-lang', lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const value: PreferencesValue = {
    lang,
    theme,
    toggleLang: () => setLang((l) => (l === 'en' ? 'vi' : 'en')),
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    tr: (text) => text[lang],
  };

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function usePrefs(): PreferencesValue {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error('usePrefs must be used within PreferencesProvider');
  return ctx;
}
