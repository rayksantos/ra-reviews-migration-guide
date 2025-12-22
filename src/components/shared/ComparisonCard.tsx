import { ReactNode } from 'react';

interface ComparisonCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  variant?: 'old' | 'new';
  className?: string;
}

/**
 * Card de comparação (antes/depois) reutilizável
 */
export const ComparisonCard = ({ 
  title, 
  icon, 
  children, 
  variant = 'old',
  className = '' 
}: ComparisonCardProps) => {
  const styles = variant === 'old' 
    ? 'bg-[var(--card-red-bg)] border-[var(--color-red-100)] text-[var(--card-red-text)] opacity-75'
    : 'bg-[var(--card-primary-bg)] border-[var(--primary-100)] text-[var(--card-primary-text)]';

  return (
    <div className={`flex-1 w-full ${styles} p-4 rounded-[var(--radius-xl)] border transition-all duration-200 hover:opacity-100 hover:shadow-sm hover:border-opacity-80 ${className}`}>
      <div className="font-bold text-xs uppercase mb-2 opacity-90">{title}</div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[var(--background)] rounded border flex items-center justify-center text-lg">
          {icon}
        </div>
        <div className="flex-1 text-[var(--foreground)]">
          {children}
        </div>
      </div>
    </div>
  );
};

