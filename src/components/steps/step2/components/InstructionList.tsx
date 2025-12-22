import { useI18n } from '../../../../i18n/context';

/**
 * Lista de instruções passo a passo para gerar o arquivo
 */
export const InstructionList = () => {
  const { t } = useI18n();
  const step2 = t.steps.step2;

  const steps = [
    {
      number: 1,
      title: step2.instructions.step1.title,
      description: step2.instructions.step1.description,
      config: null
    },
    {
      number: 2,
      title: step2.instructions.step2.title,
      description: null,
      config: {
        tipo: step2.instructions.step2.tipo,
        periodo: step2.instructions.step2.periodo
      }
    },
    {
      number: 3,
      title: step2.instructions.step3.title,
      description: step2.instructions.step3.description,
      config: null
    }
  ];

  return (
    <div className="space-y-4 bg-[var(--background)] border border-[var(--color-slate-200)] rounded-[var(--radius-xl)] p-4 sm:p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[var(--color-slate-300)] group">
      <h3 className="font-bold text-[var(--foreground)] font-[var(--font-sans-2)] text-lg border-b border-[var(--color-slate-100)] pb-4 mb-4 group-hover:opacity-90 transition-colors">
        {step2.instructions.title}
      </h3>
      <ol className="space-y-8 relative border-l-2 border-[var(--color-slate-200)] ml-3 pl-8 py-2 group-hover:border-[var(--color-slate-300)] transition-colors">
        {steps.map((step) => (
          <li key={step.number} className="relative group/step hover:translate-x-1 transition-transform">
            <span className="absolute -left-[2.7rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--background)] border-2 border-[var(--color-slate-200)] text-[var(--text-subtle)] group-hover/step:border-[var(--primary-500)] group-hover/step:text-[var(--card-primary-text)] group-hover/step:bg-[var(--primary-100)] font-bold text-sm transition-all z-10">
              {step.number}
            </span>
            <h4 className="font-bold text-[var(--foreground)] group-hover/step:text-[var(--card-primary-text)] transition-colors">
              {step.title}
            </h4>
            {step.description && (
              <p className="text-sm text-[var(--text-subtle)] mt-1 group-hover/step:text-[var(--text-muted)] transition-colors">
                {step.description}
              </p>
            )}
            {step.config && (
              <div className="mt-2 bg-[var(--color-slate-50)] p-3 rounded-lg border border-[var(--color-slate-200)] text-sm grid gap-2 hover:bg-[var(--color-slate-100)] transition-colors">
                <div className="flex justify-between">
                  <span className="text-[var(--color-slate-800)]">Tipo:</span>
                  <span className="font-medium bg-[var(--background)] px-2 py-0.5 rounded border border-[var(--color-slate-200)] text-[var(--foreground)]">
                    {step.config.tipo}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-slate-800)]">Período:</span>
                  <span className="font-medium bg-[var(--background)] px-2 py-0.5 rounded border border-[var(--color-slate-200)] text-[var(--foreground)]">
                    {step.config.periodo}
                  </span>
                </div>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
