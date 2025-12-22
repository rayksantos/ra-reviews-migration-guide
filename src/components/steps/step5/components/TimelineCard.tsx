import { LucideIcon } from 'lucide-react';

interface TimelineCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Card da timeline de automação
 */
export const TimelineCard = ({ number, icon: Icon, title, description }: TimelineCardProps) => (
  <div className="bg-[var(--background)] p-4 rounded-xl border border-[var(--color-slate-200)] relative transition-all duration-200 hover:shadow-md hover:border-[var(--color-slate-300)] hover:bg-[var(--card-primary-bg)] group">
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--primary-600)] text-[var(--color-slate-50)] w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-sm group-hover:bg-[var(--primary-700)] transition-colors">
      {number}
    </div>
    <Icon className="mx-auto mb-2 text-[var(--primary-600)] group-hover:text-[var(--primary-700)] transition-colors" size={24} />
    <h5 className="font-bold text-sm text-[var(--foreground)] mb-1 group-hover:text-[var(--card-primary-text)] transition-colors">
      {title}
    </h5>
    <p className="text-[10px] text-[var(--text-muted)] leading-tight group-hover:text-[var(--text-strong)] transition-colors">
      {description}
    </p>
  </div>
);

