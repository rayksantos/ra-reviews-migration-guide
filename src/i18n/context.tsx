import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Locale, TranslationKeys } from './types';
import { ptBR } from './translations/pt-BR';
import { enUS } from './translations/en-US';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Locale, TranslationKeys> = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

interface I18nProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

/**
 * Provider de internacionalização
 * Gerencia o idioma atual e fornece as traduções
 */
export const I18nProvider = ({ children, defaultLocale = 'pt-BR' }: I18nProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Tenta recuperar do localStorage
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && (saved === 'pt-BR' || saved === 'en-US')) {
      return saved;
    }
    // Tenta detectar do navegador
    const browserLang = navigator.language;
    if (browserLang.startsWith('en')) {
      return 'en-US';
    }
    return defaultLocale;
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const value: I18nContextType = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

/**
 * Hook para usar o contexto de i18n
 */
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

