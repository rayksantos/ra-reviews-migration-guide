import { ShieldAlert, FilterX, Trash2, Merge, ListChecks, ArrowDownUp, Eraser, BookOpen } from 'lucide-react';
import { useI18n } from '../../../../i18n/context';

/**
 * Seção de regras detalhadas e observações importantes
 */
export const DetailedRules = () => {
  const { t } = useI18n();
  const step3 = t.steps.step3;
  const rulesData = step3.detailedRules.rules;

  const icons = [ShieldAlert, FilterX, Trash2, Merge, ListChecks, ArrowDownUp, Eraser];

  return (
    <div className="bg-[var(--card-yellow-bg)] border border-[var(--color-yellow-200)] rounded-[var(--radius-2xl)] p-6 shadow-sm">
      <h3 className="font-bold text-[var(--card-yellow-text)] font-[var(--font-sans-2)] text-xl mb-6 flex items-center gap-2">
        <BookOpen size={24} className="text-[var(--card-yellow-text)]" />
        {step3.detailedRules.title}
      </h3>
      
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        {rulesData.map((rule: any, index: number) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className={`space-y-2 ${rule.fullWidth ? 'md:col-span-2 bg-[var(--background)]/80 p-3 rounded-lg border border-[var(--color-yellow-200)]' : 'transition-all duration-200 hover:bg-[var(--background)]/30 p-2 rounded hover:shadow-sm'} group`}
            >
              <h4 className="font-bold text-sm text-[var(--card-yellow-text)] flex items-center gap-2 uppercase tracking-wide group-hover:opacity-90 transition-colors">
                <Icon size={16} className="text-[var(--card-yellow-text)] group-hover:opacity-90 transition-colors" /> {rule.title}
              </h4>
              {rule.description && (
                <p className="text-sm text-[var(--card-yellow-text)] leading-relaxed opacity-90">
                  {rule.description}
                  {rule.solution && (
                    <>
                      <br/><strong>Solução:</strong> {rule.solution}
                    </>
                  )}
                </p>
              )}
              {rule.note && (
                <span className="block mt-1 text-[var(--color-yellow-800)] text-xs font-bold bg-[var(--background)]/50 p-2 rounded border border-[var(--color-yellow-200)] group-hover:bg-[var(--background)]/70 transition-colors">
                  Nota: {rule.note}
                </span>
              )}
              {rule.items && (
                <ul className="text-sm text-[var(--color-yellow-700)] list-disc pl-5 space-y-2">
                  {rule.items.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
