import { AlertOctagon } from 'lucide-react';
import { useI18n } from '../../../../i18n/context';

/**
 * Alerta sobre problemas com Excel ao editar IDs
 */
export const ExcelAlert = () => {
  const { t } = useI18n();
  const step3 = t.steps.step3;

  return (
    <div className="bg-[var(--color-slate-100)] border border-[var(--color-slate-200)] rounded-[var(--radius-xl)] p-5 transition-all duration-200 hover:shadow-md hover:border-[var(--color-slate-300)] hover:bg-[var(--color-slate-50)] group">
      <h3 className="font-bold text-[var(--color-slate-800)] flex items-center gap-2 mb-3 group-hover:opacity-90 transition-colors">
        <AlertOctagon size={20} className="text-[var(--color-slate-800)] group-hover:opacity-90 transition-colors" /> {step3.excelAlert.title}
      </h3>
      <p className="text-sm text-[var(--color-slate-700)] mb-4 leading-relaxed">
        {step3.excelAlert.description}
      </p>
      <div className="bg-[var(--color-slate-200)] p-3 rounded-lg text-xs font-medium text-[var(--color-slate-800)] border border-[var(--color-slate-300)] transition-all duration-200 hover:bg-[var(--color-slate-300)] hover:border-[var(--color-slate-400)]">
        <strong>{step3.excelAlert.tip}</strong>
      </div>
    </div>
  );
};
