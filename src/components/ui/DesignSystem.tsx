
import type { ButtonHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

// --- BUTTON ---
interface DsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg';
}

export const DsButton = ({ children, variant = 'primary', size = 'default', className = '', ...props }: DsButtonProps) => {
  const baseClasses = "inline-flex justify-center items-center rounded-[var(--radius-xl)] font-medium transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  
  const variants = {
    primary: "bg-[var(--primary-700)] text-white hover:bg-[var(--primary-600)] shadow-lg shadow-[var(--primary-700)]/20",
    secondary: "border border-[var(--color-slate-300)] bg-white text-[var(--foreground)] hover:bg-[var(--color-slate-50)]",
    ghost: "bg-transparent text-[var(--primary-700)] hover:bg-[var(--primary-50)]",
    destructive: "bg-[var(--color-red-600)] text-white hover:bg-[var(--color-red-700)]"
  };

  const sizes = {
    default: "h-12 px-6 text-sm",
    sm: "h-9 px-3 text-xs",
    lg: "h-14 px-8 text-base"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- INPUT ---
export const DsInput = ({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    className={`flex w-full rounded-[var(--radius-xl)] border border-[var(--color-slate-300)] bg-[var(--background)] h-12 px-4 text-sm placeholder:text-[var(--color-slate-400)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-200)] focus:border-[var(--primary-500)] transition-all ${className}`}
    {...props}
  />
);

// --- LABEL ---
export const DsLabel = ({ className = '', children, ...props }: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={`block text-sm font-medium text-[var(--color-slate-700)] mb-1.5 ${className}`} {...props}>
    {children}
  </label>
);

// --- CARD ---
interface DsCardProps {
  children: ReactNode;
  className?: string;
}

export const DsCard = ({ children, className = '' }: DsCardProps) => (
  <div className={`bg-white rounded-[var(--radius-2xl)] p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(29,41,61,0.05)] border border-[var(--color-slate-100)] ${className}`}>
    {children}
  </div>
);

// --- BADGE ---
interface DsBadgeProps {
  children: ReactNode;
  variant?: 'info' | 'warning' | 'success' | 'brand';
}

export const DsBadge = ({ children, variant = 'info' }: DsBadgeProps) => {
  const variants = {
    info: "bg-[var(--color-slate-100)] text-[var(--color-slate-600)]",
    brand: "bg-[var(--primary-50)] text-[var(--primary-700)]",
    warning: "bg-[var(--color-yellow-50)] text-[var(--color-yellow-800)]",
    success: "bg-[var(--secondary-50)] text-[var(--secondary-700)]"
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${variants[variant]}`}>
      {children}
    </span>
  );
};

// --- TYPOGRAPHY ---
interface DsTypographyProps {
  children: ReactNode;
  className?: string;
}

export const DsH1 = ({ children, className = '' }: DsTypographyProps) => (
  <h1 className={`block font-extrabold text-3xl md:text-4xl lg:text-5xl font-[var(--font-sans-2)] text-[var(--primary-800)] leading-tight ${className}`}>
    {children}
  </h1>
);

export const DsH2 = ({ children, className = '' }: DsTypographyProps) => (
  <h2 className={`block font-bold text-2xl font-[var(--font-sans-2)] text-[var(--foreground)] ${className}`}>
    {children}
  </h2>
);

export const DsP = ({ children, className = '' }: DsTypographyProps) => (
  <p className={`block text-base leading-7 text-[var(--color-slate-600)] ${className}`}>
    {children}
  </p>
);

// --- TOOLTIP ---
interface DsTooltipProps {
  term: string;
  definition: string;
}

export const DsTooltip = ({ term, definition }: DsTooltipProps) => (
  <span className="relative group inline-block cursor-help border-b border-dashed border-[var(--primary-400)] text-[var(--foreground)] font-medium">
    {term}
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-3 bg-[var(--color-slate-800)] text-white text-xs font-normal leading-relaxed rounded-[var(--radius-md)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-center shadow-xl pointer-events-none">
      {definition}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--color-slate-800)]"></span>
    </span>
  </span>
);
