import { useI18n } from '../../i18n/context';
import { Locale } from '../../i18n/types';
import { Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../theme/context';

export const Header = () => {
  const { t, locale, setLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();
  
  // O base path está configurado no vite.config.ts
  // Arquivos de public/ são servidos com o base path
  const baseUrl = import.meta.env.BASE_URL;
  // Remove barra dupla se houver e garante que há uma barra entre baseUrl e assets
  const logoPath = `${baseUrl}assets/ra-reviews-logo.png`.replace(/([^:]\/)\/+/g, '$1');

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <header className="bg-[var(--background)] border-b border-[var(--color-slate-200)] sticky top-0 z-20 shadow-sm backdrop-blur-md bg-[var(--background)]/90 supports-[backdrop-filter]:bg-[var(--background)]/60 transition-colors">
      <div className="w-full px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo RA Reviews à esquerda */}
        <div className="flex items-center shrink-0">
          <img 
            src={logoPath}
            alt="RA Reviews" 
            className="h-8 sm:h-10 w-auto"
          />
        </div>
      
        {/* Título no centro - oculto em mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <h1 className="font-[var(--font-sans-2)] font-bold text-base lg:text-lg text-[var(--primary-text)] tracking-tight transition-colors">
            {t.header.title}
          </h1>
        </div>

        {/* Controles à direita (Tema + Idioma) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Toggle de Tema - Melhorado com indicação visual */}
          <div className="flex items-center gap-0.5 sm:gap-1 bg-[var(--color-slate-100)] rounded-lg p-0.5 sm:p-1">
            <button
              onClick={() => theme !== 'light' && toggleTheme()}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-medium transition-all flex items-center gap-1 sm:gap-1.5 ${
                theme === 'light'
                  ? 'bg-[var(--background)] text-[var(--card-primary-text)] shadow-sm'
                  : 'text-[var(--text-subtle)] hover:text-[var(--text-strong)]'
              }`}
              title="Modo claro"
              aria-label="Modo claro"
            >
              <Sun size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Claro</span>
            </button>
            <button
              onClick={() => theme !== 'dark' && toggleTheme()}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-medium transition-all flex items-center gap-1 sm:gap-1.5 ${
                theme === 'dark'
                  ? 'bg-[var(--background)] text-[var(--card-primary-text)] shadow-sm'
                  : 'text-[var(--text-subtle)] hover:text-[var(--text-strong)]'
              }`}
              title="Modo escuro"
              aria-label="Modo escuro"
            >
              <Moon size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Escuro</span>
            </button>
          </div>

          {/* Seletor de idioma */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Globe size={16} className="text-[var(--text-subtle)] hidden sm:block" />
            <div className="flex gap-0.5 sm:gap-1 bg-[var(--color-slate-100)] rounded-lg p-0.5 sm:p-1">
              <button
                onClick={() => handleLocaleChange('pt-BR')}
                className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition-all ${
                  locale === 'pt-BR'
                    ? 'bg-[var(--background)] text-[var(--card-primary-text)] shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-strong)]'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => handleLocaleChange('en-US')}
                className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition-all ${
                  locale === 'en-US'
                    ? 'bg-[var(--background)] text-[var(--card-primary-text)] shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-strong)]'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
