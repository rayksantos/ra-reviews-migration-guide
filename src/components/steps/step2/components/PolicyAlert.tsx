import { AlertTriangle } from 'lucide-react';
import { useI18n } from '../../../../i18n/context';

/**
 * Alerta sobre política de uso (uma vez por contrato)
 */
export const PolicyAlert = () => {
  const { t } = useI18n();
  const step2 = t.steps.step2;

  return (
    <div className="bg-[var(--card-yellow-bg)] p-4 rounded-[var(--radius-xl)] border border-[var(--color-yellow-800)]/20 flex gap-3 transition-all duration-200 hover:shadow-sm hover:border-[var(--color-yellow-800)]/30 group">
      <AlertTriangle className="text-[var(--card-yellow-text)] shrink-0 group-hover:opacity-90 transition-colors" size={20} />
      <div>
        <strong className="text-[var(--card-yellow-text)] text-sm group-hover:opacity-90 transition-colors">
          {step2.policy.title}
        </strong>
        <p className="text-xs text-[var(--card-yellow-text)] mt-1 opacity-90">
          {step2.policy.description}
        </p>
      </div>
    </div>
  );
};
