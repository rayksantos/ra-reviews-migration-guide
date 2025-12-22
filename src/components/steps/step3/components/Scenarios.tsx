import { RefreshCw, Layers, Trash2, ArrowDown } from 'lucide-react';
import { useI18n } from '../../../../i18n/context';

interface ScenariosProps {
  onScenarioClick: (id: string) => void;
}

/**
 * Cards de cenários do dia a dia com exemplos interativos
 */
export const Scenarios = ({ onScenarioClick }: ScenariosProps) => {
  const { t } = useI18n();
  const step3 = t.steps.step3;
  const scenariosData = step3.scenarios;

  const scenarios = [
    {
      id: 'ex-simple',
      icon: RefreshCw,
      title: scenariosData.simple.title,
      description: scenariosData.simple.description,
      color: 'primary',
      examples: [
        { label: scenariosData.simple.old, value: '100', strikethrough: true, bold: false, italic: false, badge: false },
        { label: scenariosData.simple.new, value: 'AB-200', bold: true, strikethrough: false, italic: false, badge: false }
      ],
      seeInTable: scenariosData.simple.seeInTable
    },
    {
      id: 'ex-group',
      icon: Layers,
      title: scenariosData.grouping.title,
      description: scenariosData.grouping.description,
      color: 'secondary',
      examples: [
        { label: scenariosData.grouping.old37, value: 'PAI-01', bold: false, strikethrough: false, italic: false, badge: false },
        { label: scenariosData.grouping.old38, value: 'PAI-01', bold: true, strikethrough: false, italic: false, badge: false }
      ],
      seeInTable: scenariosData.grouping.seeInTable
    },
    {
      id: 'ex-archive',
      icon: Trash2,
      title: scenariosData.cleanup.title,
      description: scenariosData.cleanup.description,
      color: 'slate',
      examples: [
        { label: scenariosData.cleanup.newId, value: 'null', italic: true, bold: false, strikethrough: false, badge: false },
        { label: scenariosData.cleanup.action, value: 'archive', badge: true, bold: true, strikethrough: false, italic: false }
      ],
      seeInTable: scenariosData.cleanup.seeInTable
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-[var(--card-primary-bg)]',
          text: 'text-[var(--card-primary-text)]',
          hoverBg: 'group-hover:opacity-90',
          border: 'hover:border-[var(--primary-300)]',
          ring: 'hover:ring-[var(--primary-300)]',
          title: 'text-[var(--card-primary-text)]',
          footer: 'text-[var(--card-primary-text)]',
          arrow: 'group-hover:text-[var(--primary-500)]',
          exampleText: 'text-[var(--card-primary-text)]'
        };
      case 'secondary':
        return {
          bg: 'bg-[var(--card-secondary-bg)]',
          text: 'text-[var(--card-secondary-text)]',
          hoverBg: 'group-hover:opacity-90',
          border: 'hover:border-[var(--secondary-300)]',
          ring: 'hover:ring-[var(--secondary-300)]',
          title: 'text-[var(--card-secondary-text)]',
          footer: 'text-[var(--card-secondary-text)]',
          arrow: 'group-hover:text-[var(--secondary-500)]',
          exampleText: 'text-[var(--card-secondary-text)]'
        };
      default:
        return {
          bg: 'bg-[var(--color-slate-100)]',
          text: 'text-[var(--text-muted)]',
          hoverBg: 'group-hover:bg-[var(--color-slate-200)]',
          border: 'hover:border-[var(--color-slate-400)]',
          ring: 'hover:ring-[var(--color-slate-400)]',
          title: 'text-[var(--foreground)]',
          footer: 'text-[var(--text-muted)]',
          arrow: 'group-hover:text-[var(--text-muted)]',
          exampleText: 'text-[var(--text-subtle)]'
        };
    }
  };

  return (
    <div>
      <div className="flex justify-between items-end mb-4">
        <h3 className="font-bold text-[var(--foreground)] font-[var(--font-sans-2)] text-xl">
          {scenariosData.title}
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon;
          const colors = getColorClasses(scenario.color);
          
          return (
            <div
              key={scenario.id}
              onClick={() => onScenarioClick(scenario.id)}
              className={`group bg-[var(--background)] rounded-[var(--radius-xl)] p-5 border border-[var(--color-slate-200)] shadow-sm hover:shadow-md ${colors.border} hover:ring-1 ${colors.ring} transition-all relative cursor-pointer`}
              title="Clique para ver o exemplo na tabela"
            >
              <div className={`absolute top-4 right-4 text-[var(--text-subtle)] ${colors.arrow} transition-colors`}>
                <ArrowDown size={20} />
              </div>
              <div className={`w-10 h-10 ${colors.bg} ${colors.text} rounded-full flex items-center justify-center mb-4 ${colors.hoverBg} transition-colors`}>
                <Icon size={20} />
              </div>
              <h4 className={`font-bold ${colors.title} mb-2`}> {scenario.title}</h4>
              <p className="text-xs text-[var(--text-subtle)] mb-4">
                {scenario.description}
              </p>
              <div className="bg-[var(--color-slate-50)] rounded-lg p-3 text-xs border border-[var(--color-slate-100)] opacity-75 group-hover:opacity-100 transition-opacity">
                {scenario.examples.map((example, idx) => (
                  <div key={idx} className={`flex justify-between items-center ${idx > 0 ? 'mt-1' : 'mb-1'}`}>
                    <span className="text-[var(--text-subtle)]">{example.label}</span>
                    <span className={`font-mono ${example.bold ? 'font-bold' : ''} ${example.italic ? 'italic' : ''} ${example.strikethrough ? 'line-through decoration-red-400' : ''} ${example.badge ? 'bg-[var(--color-slate-200)] px-1 rounded' : ''} ${example.bold ? colors.exampleText : colors.text}`}>
                      {example.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className={`mt-3 pt-3 border-t border-[var(--color-slate-100)] flex items-center text-xs font-bold ${colors.footer} opacity-60 group-hover:opacity-100 transition-opacity`}>
                {scenario.seeInTable} <ArrowDown size={14} className="ml-1" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
