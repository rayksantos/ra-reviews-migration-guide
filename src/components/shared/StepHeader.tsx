import { ReactNode } from 'react';
import { DsBadge, DsH2, DsP } from '../ui/DesignSystem';
import { useI18n } from '../../i18n/context';

interface StepHeaderProps {
  stepNumber: number;
  stepTitle: string;
  heading?: string;
  description: ReactNode;
}

/**
 * Cabeçalho padrão para cada step
 */
export const StepHeader = ({ stepNumber, stepTitle, heading, description }: StepHeaderProps) => {
  const { t } = useI18n();
  
  return (
    <div className="space-y-4">
      <DsBadge variant="brand">{t.app.navigation.step} {stepNumber}: {stepTitle}</DsBadge>
      <DsH2>{heading || stepTitle}</DsH2>
      <DsP>{description}</DsP>
    </div>
  );
};

