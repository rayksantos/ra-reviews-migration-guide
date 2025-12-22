import { CheckCircle2, ClipboardCheck, ArrowRight } from 'lucide-react';
import { DsButton } from '../../../ui/DesignSystem';
import { ChecksState } from '../constants';
import { useI18n } from '../../../../i18n/context';

interface ChecklistViewProps {
  checks: ChecksState;
  onToggleCheck: (key: keyof ChecksState) => void;
  allChecked: boolean;
  onBack: () => void;
  onNext: () => void;
}

/**
 * View do checklist de prontidão
 */
export const ChecklistView = ({ checks, onToggleCheck, allChecked, onBack, onNext }: ChecklistViewProps) => {
  const { t } = useI18n();
  const step5 = t.steps.step5;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-[var(--card-primary-bg)] p-6 rounded-[var(--radius-xl)] border border-[var(--primary-100)]">
        <h3 className="font-bold text-[var(--card-primary-text)] text-lg mb-4 flex items-center gap-2">
          <ClipboardCheck size={24} /> {step5.checklist.header}
        </h3>
        <p className="text-sm text-[var(--card-primary-text)] mb-6 opacity-90">
          {step5.checklist.intro}
        </p>

        <div className="space-y-3">
          {step5.checklist.items.map((item: string, index: number) => {
            const checkKey = Object.keys(checks)[index] as keyof ChecksState;
            return (
              <label
                key={index}
                className={`flex items-center gap-3 p-4 rounded-[var(--radius-lg)] border transition-all cursor-pointer group ${
                  checks[checkKey]
                    ? 'bg-[var(--card-primary-bg)] border-[var(--primary-400)] shadow-sm'
                    : 'bg-[var(--background)]/50 border-[var(--color-slate-200)] hover:border-[var(--color-slate-300)] hover:shadow-sm'
                }`}
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center border-2 transition-all ${
                  checks[checkKey]
                    ? 'bg-[var(--primary-600)] border-[var(--primary-600)] text-[var(--color-slate-50)]'
                    : 'bg-[var(--background)] border-[var(--color-slate-300)] group-hover:border-[var(--primary-400)]'
                }`}>
                  {checks[checkKey] && <CheckCircle2 size={16} />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checks[checkKey]}
                  onChange={() => onToggleCheck(checkKey)}
                />
                <span className={`text-sm font-medium transition-colors ${
                  checks[checkKey]
                    ? 'text-[var(--card-primary-text)]'
                    : 'text-[var(--text-subtle)] group-hover:text-[var(--text-strong)]'
                }`}>
                  {item}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-[var(--color-slate-100)]">
        <DsButton variant="ghost" onClick={onBack}>
          {t.app.navigation.back}
        </DsButton>
        <DsButton
          onClick={onNext}
          disabled={!allChecked}
          className="min-w-[200px]"
        >
          {step5.checklist.next} <ArrowRight size={18} className="ml-2" />
        </DsButton>
      </div>
    </div>
  );
};
