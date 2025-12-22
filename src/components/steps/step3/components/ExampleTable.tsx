import { DsBadge, DsTooltip } from '../../../ui/DesignSystem';
import { useI18n } from '../../../../i18n/context';

interface ExampleTableProps {
  isHighlighted: (id: string) => boolean;
}

/**
 * Tabela de exemplo completa da planilha final
 */
export const ExampleTable = ({ isHighlighted }: ExampleTableProps) => {
  const { t } = useI18n();
  const step3 = t.steps.step3;
  const tableData = step3.exampleTable;

  const rows = [
    {
      id: 'ex-simple',
      name: tableData.rows.simple.name,
      oldId: tableData.rows.simple.oldId,
      newId: tableData.rows.simple.newId,
      action: tableData.rows.simple.action,
      explanation: tableData.rows.simple.explanation
    },
    {
      id: null,
      name: tableData.rows.alphanumeric.name,
      oldId: tableData.rows.alphanumeric.oldId,
      newId: tableData.rows.alphanumeric.newId,
      action: tableData.rows.alphanumeric.action,
      explanation: tableData.rows.alphanumeric.explanation
    },
    {
      id: null,
      name: tableData.rows.leadingZero.name,
      oldId: tableData.rows.leadingZero.oldId,
      newId: tableData.rows.leadingZero.newId,
      action: tableData.rows.leadingZero.action,
      explanation: tableData.rows.leadingZero.explanation
    },
    {
      id: 'ex-group',
      name: tableData.rows.group1.name,
      oldId: tableData.rows.group1.oldId,
      newId: tableData.rows.group1.newId,
      action: tableData.rows.group1.action,
      explanation: tableData.rows.group1.explanation,
      isGroup: true
    },
    {
      id: 'ex-group-2',
      name: tableData.rows.group2.name,
      oldId: tableData.rows.group2.oldId,
      newId: tableData.rows.group2.newId,
      action: tableData.rows.group2.action,
      explanation: tableData.rows.group2.explanation,
      isGroup: true
    },
    {
      id: 'ex-archive',
      name: tableData.rows.archive.name,
      oldId: tableData.rows.archive.oldId,
      newId: tableData.rows.archive.newId,
      action: tableData.rows.archive.action,
      explanation: tableData.rows.archive.explanation,
      archived: true
    }
  ];

  return (
    <div className="border border-[var(--color-slate-200)] rounded-[var(--radius-2xl)] shadow-sm bg-[var(--background)] mt-8 overflow-hidden transition-colors">
      <div className="bg-[var(--color-slate-50)] px-4 sm:px-6 py-3 sm:py-4 border-b border-[var(--color-slate-200)] flex flex-col md:flex-row justify-between items-start md:items-center gap-2 overflow-visible rounded-t-[var(--radius-2xl)]">
        <div>
          <span className="font-bold text-sm text-[var(--color-slate-800)] font-[var(--font-sans-2)] block">
            {tableData.title}
          </span>
          <span className="text-xs text-[var(--color-slate-700)]">
            {tableData.subtitle}
          </span>
        </div>
        <div className="flex gap-2">
          <DsBadge variant="warning">{tableData.badges.csv}</DsBadge>
          <DsBadge variant="info">{tableData.badges.required}</DsBadge>
        </div>
      </div>
      <div className="md:overflow-visible overflow-x-auto relative overflow-y-visible -mx-4 sm:mx-0">
        <table className="w-full text-xs sm:text-sm text-left md:table-auto min-w-[600px]">
          <thead className="bg-[var(--color-slate-50)]/50 relative z-10">
            <tr>
              <th className="px-4 py-3 font-medium border-b border-[var(--color-slate-200)] text-xs uppercase tracking-wider text-[var(--color-slate-800)] rounded-tl-lg">
                {tableData.columns.name}
              </th>
              <th className="px-4 py-3 font-medium border-b border-[var(--color-slate-200)] text-xs uppercase tracking-wider text-[var(--color-slate-800)]">
                <DsTooltip
                  term={tableData.columns.oldId.label}
                  definition={tableData.columns.oldId.tooltip}
                />
              </th>
              <th className="px-4 py-3 font-bold text-[var(--card-primary-text)] bg-[var(--card-primary-bg)] border-b-2 border-[var(--primary-200)] text-xs uppercase tracking-wider">
                <DsTooltip
                  term={tableData.columns.newId.label}
                  definition={tableData.columns.newId.tooltip}
                />
              </th>
              <th className="px-4 py-3 font-medium border-b border-[var(--color-slate-200)] text-xs uppercase tracking-wider text-[var(--color-slate-800)]">
                <DsTooltip
                  term={tableData.columns.action.label}
                  definition={tableData.columns.action.tooltip}
                />
              </th>
              <th className="px-4 py-3 font-medium border-b border-[var(--color-slate-200)] text-xs uppercase tracking-wider text-[var(--color-slate-700)] rounded-tr-lg">
                {tableData.columns.explanation}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-slate-100)]">
            {rows.map((row, index) => {
              const highlighted = row.id ? isHighlighted(row.id) : false;
              return (
                <tr
                  key={index}
                  id={row.id || undefined}
                  className={`hover:bg-[var(--color-slate-50)] transition-all duration-200 group hover:shadow-sm hover:border-l-2 hover:border-l-[var(--primary-300)] ${
                    highlighted ? 'bg-[var(--secondary-100)] border-l-2 border-l-[var(--secondary-400)]' : ''
                  }`}
                >
                  <td className={`px-4 py-3 text-[var(--foreground)] group-hover:text-[var(--color-slate-800)] transition-colors ${row.archived ? 'opacity-50 group-hover:opacity-70' : ''}`}>
                    {row.name}
                  </td>
                  <td className={`px-4 py-3 font-mono text-[var(--text-muted)] group-hover:text-[var(--color-slate-700)] transition-colors ${row.archived ? 'opacity-50 group-hover:opacity-70' : ''}`}>
                    {row.oldId}
                  </td>
                  <td className={`px-4 py-3 font-mono font-bold bg-[var(--card-primary-bg)]/30 text-[var(--card-primary-text)] border-x border-[var(--primary-100)] group-hover:bg-[var(--card-primary-bg)]/50 group-hover:text-[var(--primary-800)] transition-colors ${row.archived ? 'text-[var(--text-subtle)] italic group-hover:text-[var(--color-slate-500)]' : ''}`}>
                    {row.newId}
                  </td>
                  <td className="px-4 py-3">
                    {row.action === 'archive' ? (
                      <span className="bg-[var(--color-slate-200)] px-2 py-1 rounded text-xs font-bold text-[var(--color-slate-800)] group-hover:bg-[var(--color-slate-300)] group-hover:text-[var(--color-slate-900)] transition-colors">
                        {row.action}
                      </span>
                    ) : (
                      <span className="text-[var(--text-subtle)] group-hover:text-[var(--color-slate-600)]">-</span>
                    )}
                  </td>
                  <td className={`px-4 py-3 text-[var(--text-muted)] text-xs group-hover:text-[var(--color-slate-700)] transition-colors ${row.isGroup ? 'border-l-2 border-[var(--secondary-300)] pl-2' : ''}`}>
                    {row.explanation}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
