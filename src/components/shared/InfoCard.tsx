import { ReactNode } from 'react';
import { DsCard } from '../ui/DesignSystem';

interface InfoCardProps {
  children: ReactNode;
  className?: string;
  borderColor?: string;
  hoverBorderColor?: string;
}

/**
 * Card informativo reutilizável com hover
 */
export const InfoCard = ({ 
  children, 
  className = '', 
  borderColor = 'border-[var(--primary-500)]',
  hoverBorderColor = 'hover:border-[var(--primary-600)]'
}: InfoCardProps) => (
  <DsCard className={`border-l-4 ${borderColor} shadow-sm !p-5 transition-all duration-200 hover:shadow-md ${hoverBorderColor} group ${className}`}>
    {children}
  </DsCard>
);

