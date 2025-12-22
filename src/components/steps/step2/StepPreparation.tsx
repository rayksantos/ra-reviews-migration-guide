import { ShieldAlert, FilterX } from 'lucide-react';
import { StepHeader } from '../../shared/StepHeader';
import { AlertBox } from '../../shared/AlertBox';
import { InstructionList } from './components/InstructionList';
import { PolicyAlert } from './components/PolicyAlert';
import { useI18n } from '../../../i18n/context';

/**
 * Step 2: Extração de Dados
 * Explica como gerar o arquivo base da migração
 */
export const StepPreparation = () => {
  const { t } = useI18n();
  const step2 = t.steps.step2;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <StepHeader
        stepNumber={2}
        stepTitle={step2.stepTitle}
        heading={step2.heading}
        description={
          <>
            {step2.description}
          </>
        }
      />

      <AlertBox
        icon={ShieldAlert}
        title={step2.criticalRule.title}
        variant="error"
      >
        {step2.criticalRule.description}
      </AlertBox>

      <AlertBox
        icon={FilterX}
        title={step2.removeNewProducts.title}
        variant="info"
      >
        {step2.removeNewProducts.description}
        <br/>
        <span className="font-bold underline decoration-2 decoration-[var(--secondary-400)]">
          {step2.removeNewProducts.action}
        </span>
      </AlertBox>

      <InstructionList />

      <PolicyAlert />
    </div>
  );
};
