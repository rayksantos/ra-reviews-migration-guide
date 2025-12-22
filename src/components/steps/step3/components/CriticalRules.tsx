import { X, CheckCircle2, Split, Merge, ArrowRight } from 'lucide-react';
import { useI18n } from '../../../../i18n/context';

/**
 * Card de regra crítica (proibido ou permitido)
 */
interface RuleCardProps {
  variant: 'forbidden' | 'allowed';
}

export const CriticalRules = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <RuleCard variant="forbidden" />
    <RuleCard variant="allowed" />
  </div>
);

const RuleCard = ({ variant }: RuleCardProps) => {
  const { t } = useI18n();
  const step3 = t.steps.step3;
  const isForbidden = variant === 'forbidden';
  
  const config = isForbidden
    ? {
        bg: 'bg-[var(--color-red-50)]',
        border: 'border-[var(--color-red-100)]',
        hoverBorder: 'hover:border-[var(--color-red-200)]',
        icon: X,
        iconColor: 'text-[var(--color-red-600)]',
        titleColor: 'text-[var(--color-red-800)]',
        textColor: 'text-[var(--color-red-700)]',
        exampleBg: 'bg-[var(--color-red-100)]',
        exampleText: 'text-[var(--color-red-700)]',
        title: step3.criticalRules.forbidden.title,
        description: step3.criticalRules.forbidden.description,
        example: {
          old: 'Camiseta Antiga',
          new: ['Camiseta Azul', 'Camiseta Vermelha']
        },
        exampleLabel: step3.criticalRules.forbidden.example,
        note: step3.criticalRules.forbidden.note
      }
    : {
        bg: 'bg-[var(--card-primary-bg)]',
        border: 'border-[var(--primary-100)]',
        hoverBorder: 'hover:border-[var(--primary-200)]',
        icon: CheckCircle2,
        iconColor: 'text-[var(--card-primary-text)]',
        titleColor: 'text-[var(--card-primary-text)]',
        textColor: 'text-[var(--card-primary-text)]',
        exampleBg: 'bg-[var(--card-primary-bg)]',
        exampleText: 'text-[var(--card-primary-text)]',
        title: step3.criticalRules.allowed.title,
        description: step3.criticalRules.allowed.description,
        example: {
          old: ['Antigo 37', 'Antigo 39'],
          new: 'Novo Modelo Único'
        },
        exampleLabel: step3.criticalRules.allowed.example,
        note: null
      };

  const Icon = config.icon;

  return (
    <div className={`${config.bg} border ${config.border} rounded-[var(--radius-xl)] p-4 sm:p-5 relative overflow-hidden transition-all duration-300 hover:shadow-lg ${config.hoverBorder} hover:scale-[1.02] group`}>
      <div className={`absolute top-0 right-0 p-2 bg-[var(--background)]/50 rounded-bl-[var(--radius-lg)] border-b border-l ${config.border} group-hover:bg-[var(--background)]/70 transition-colors`}>
        <Icon className={`${config.iconColor} group-hover:opacity-90 transition-colors`} size={24} />
      </div>
      <h3 className={`font-bold ${config.titleColor} text-sm uppercase tracking-wide mb-3 flex items-center gap-2`}>
        {isForbidden ? <Split size={18} /> : <Merge size={18} />} {config.title}
      </h3>
      <p className={`text-sm ${config.textColor} font-medium mb-4`}>
        {config.description}
      </p>
      <div className={`bg-[var(--background)] p-3 rounded-[var(--radius-lg)] text-xs space-y-2 border ${config.border}`}>
        <p className="text-[var(--text-subtle)]">
          {config.exampleLabel}
        </p>
        <div className="flex items-center gap-2">
          {isForbidden ? (
            <>
              <span className="bg-[var(--color-slate-200)] px-2 py-1 rounded text-[var(--color-slate-700)] line-through">
                {config.example.old as string}
              </span>
              <ArrowRight size={14} className="text-[var(--text-subtle)]" />
              <div className="flex flex-col gap-1">
                {(config.example.new as string[]).map((item, idx) => (
                  <span key={idx} className={`${config.exampleBg} px-2 py-1 rounded ${config.exampleText} font-bold`}>
                    {item}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-1">
                {(config.example.old as string[]).map((item, idx) => (
                  <span key={idx} className="bg-[var(--color-slate-200)] px-2 py-1 rounded text-[var(--color-slate-700)]">
                    {item}
                  </span>
                ))}
              </div>
              <ArrowRight size={14} className="text-[var(--text-subtle)]" />
              <span className={`${config.exampleBg} px-2 py-1 rounded ${config.exampleText} font-bold`}>
                {config.example.new as string}
              </span>
            </>
          )}
        </div>
      </div>
      {config.note && (
        <p className={`text-[10px] ${config.textColor} mt-2`}>
          {config.note}
        </p>
      )}
    </div>
  );
};
