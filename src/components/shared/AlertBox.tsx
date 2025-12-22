import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface AlertBoxProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  variant?: 'warning' | 'info' | 'error' | 'success';
  className?: string;
}

/**
 * Box de alerta/informação reutilizável
 */
export const AlertBox = ({ 
  icon: Icon, 
  title, 
  children, 
  variant = 'info',
  className = '' 
}: AlertBoxProps) => {
  const variants = {
    warning: {
      bg: 'bg-[var(--card-yellow-bg)]',
      border: 'border-[var(--color-yellow-200)]',
      text: 'text-[var(--card-yellow-text)]',
      iconColor: 'text-[var(--card-yellow-text)]'
    },
    info: {
      bg: 'bg-[var(--card-secondary-bg)]',
      border: 'border-[var(--secondary-200)]',
      text: 'text-[var(--card-secondary-text)]',
      iconColor: 'text-[var(--card-secondary-text)]'
    },
    error: {
      bg: 'bg-[var(--card-red-bg)]',
      border: 'border-[var(--color-red-200)]',
      text: 'text-[var(--card-red-text)]',
      iconColor: 'text-[var(--card-red-text)]'
    },
    success: {
      bg: 'bg-[var(--card-primary-bg)]',
      border: 'border-[var(--primary-200)]',
      text: 'text-[var(--card-primary-text)]',
      iconColor: 'text-[var(--card-primary-text)]'
    }
  };

  const styles = variants[variant];

  return (
    <div className={`${styles.bg} p-5 rounded-[var(--radius-xl)] border ${styles.border} flex gap-4 transition-all duration-200 hover:shadow-md hover:border-opacity-80 group ${className}`}>
      <div className={`bg-[var(--background)] p-2 rounded-full h-fit ${styles.iconColor} shadow-sm shrink-0 group-hover:bg-[var(--background)]/90 transition-colors`}>
        <Icon size={24} className={`group-hover:scale-110 transition-transform`} />
      </div>
      <div className="flex-1">
        <h4 className={`font-bold ${styles.text} text-lg mb-1 group-hover:opacity-90 transition-opacity`}>
          {title}
        </h4>
        <div className={`text-sm ${styles.text} leading-relaxed`}>
          {children}
        </div>
      </div>
    </div>
  );
};

