import { BrainCircuit, ShoppingBag, LayoutTemplate } from 'lucide-react';
import { useI18n } from '../../../../i18n/context';

/**
 * Checklist para verificar se a integração está pronta
 */
export const IntegrationChecklist = () => {
  const { t } = useI18n();
  const step3 = t.steps.step3;

  const checks = [
    {
      icon: ShoppingBag,
      title: step3.integrationChecklist.newOrders.title,
      description: step3.integrationChecklist.newOrders.description
    },
    {
      icon: LayoutTemplate,
      title: step3.integrationChecklist.widgets.title,
      description: step3.integrationChecklist.widgets.description
    }
  ];

  return (
    <div className="bg-[var(--card-secondary-bg)] border border-[var(--secondary-200)] rounded-[var(--radius-2xl)] p-5">
      <h3 className="font-bold text-[var(--card-secondary-text)] text-lg mb-3 flex items-center gap-2">
        <BrainCircuit size={20} /> {step3.integrationChecklist.title}
      </h3>
      <p className="text-sm text-[var(--card-secondary-text)] mb-4 opacity-90">
        {step3.integrationChecklist.description}
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {checks.map((check, index) => {
          const Icon = check.icon;
          return (
            <div 
              key={index}
              className="bg-[var(--background)] p-3 rounded-lg border border-[var(--secondary-200)] flex items-start gap-3 transition-all duration-200 hover:shadow-md hover:border-[var(--secondary-300)] hover:bg-[var(--card-secondary-bg)]/30 group"
            >
              <Icon className="text-[var(--card-secondary-text)] shrink-0 mt-1 group-hover:opacity-90 transition-colors" size={18} />
              <div className="text-sm">
                <strong className="block text-[var(--card-secondary-text)] group-hover:opacity-90 transition-colors">
                  {check.title}
                </strong>
                <span className="text-[var(--card-secondary-text)] text-xs opacity-80">
                  {check.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
