import { StepHeader } from '../../shared/StepHeader';
import { IntegrationChecklist } from './components/IntegrationChecklist';
import { CriticalRules } from './components/CriticalRules';
import { ExcelAlert } from './components/ExcelAlert';
import { DetailedRules } from './components/DetailedRules';
import { Scenarios } from './components/Scenarios';
import { ExampleTable } from './components/ExampleTable';
import { useTableHighlight } from '../../../hooks/useTableHighlight';
import { useI18n } from '../../../i18n/context';

/**
 * Step 3: Mão na Massa
 * Regras de ouro e preenchimento da planilha
 */
export const StepSpreadsheet = () => {
  const { t } = useI18n();
  const step3 = t.steps.step3;
  const { highlightRow, highlightGroup, isHighlighted } = useTableHighlight();

  const scrollToExample = (id: string) => {
    if (id === 'ex-group') {
      highlightGroup(['ex-group', 'ex-group-2'], 3000, 'var(--secondary-100)');
    } else {
      highlightRow(id, 3000);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <StepHeader
        stepNumber={3}
        stepTitle={step3.stepTitle}
        heading={step3.heading}
        description={
          <>
            {step3.description}
          </>
        }
      />

      <IntegrationChecklist />
      <CriticalRules />
      <ExcelAlert />
      <DetailedRules />
      <Scenarios onScenarioClick={scrollToExample} />
      <ExampleTable isHighlighted={isHighlighted} />
    </div>
  );
};
