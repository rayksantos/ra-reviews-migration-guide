
export const Header = () => {
  // O base path está configurado no vite.config.ts
  // Arquivos de public/ são servidos com o base path
  const baseUrl = import.meta.env.BASE_URL;
  // Remove barra dupla se houver e garante que há uma barra entre baseUrl e assets
  const logoPath = `${baseUrl}assets/ra-reviews-logo.png`.replace(/([^:]\/)\/+/g, '$1');

  return (
    <header className="bg-white border-b border-[var(--color-slate-200)] sticky top-0 z-20 shadow-sm backdrop-blur-md bg-white/90 supports-[backdrop-filter]:bg-white/60">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        {/* Logo RA Reviews à esquerda */}
        <div className="flex items-center">
          <img 
            src={logoPath}
            alt="RA Reviews" 
            className="h-10 w-auto"
          />
        </div>
      
        {/* Título no centro */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="font-[var(--font-sans-2)] font-bold text-lg text-[var(--primary-800)] tracking-tight">
            Guia de Migração
          </h1>
        </div>
      </div>
    </header>
  );
};
