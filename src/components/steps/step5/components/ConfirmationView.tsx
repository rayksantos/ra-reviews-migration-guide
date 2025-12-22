import { ShieldCheck } from 'lucide-react';
import { DsButton } from '../../../ui/DesignSystem';
import { useI18n } from '../../../../i18n/context';

interface ConfirmationViewProps {
  onBack: () => void;
  onConfirm: () => void;
}

/**
 * View de confirmação e declaração de responsabilidade
 */
export const ConfirmationView = ({ onBack, onConfirm }: ConfirmationViewProps) => {
  const { t } = useI18n();
  const step5 = t.steps.step5;

  return (
    <div className="space-y-8 py-8 text-center animate-in zoom-in-95 duration-300">
      <div className="w-20 h-20 bg-[var(--color-yellow-50)] text-[var(--color-yellow-600)] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[var(--color-yellow-100)]">
        <ShieldCheck size={40} />
      </div>
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-[var(--color-slate-400)] font-[var(--font-sans-2)] mb-4">
          {step5.confirmation.header}
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          {step5.confirmation.description}
          <br/><br/>
          {step5.confirmation.automation}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <DsButton variant="secondary" onClick={onBack}>
          {step5.confirmation.review}
        </DsButton>
        <DsButton onClick={onConfirm} className="bg-[var(--primary-700)]">
          {step5.confirmation.confirm}
        </DsButton>
      </div>
    </div>
  );
};
