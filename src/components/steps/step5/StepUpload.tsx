import { useState } from 'react';
import { DsH2, DsP, DsBadge } from '../../ui/DesignSystem';
import { WizardStepState } from '../../../types/migration';
import { ChecklistView } from './components/ChecklistView';
import { ConfirmationView } from './components/ConfirmationView';
import { FinalLinkView } from './components/FinalLinkView';
import { ChecksState } from './constants';
import { useI18n } from '../../../i18n/context';

interface StepUploadProps {
  onBack: () => void;
}

/**
 * Step 5: Solicitação Oficial
 * Checklist final e link para formulário de solicitação
 */
export const StepUpload = ({ onBack }: StepUploadProps) => {
  const { t } = useI18n();
  const step5 = t.steps.step5;
  const [wizardStep, setWizardStep] = useState<WizardStepState>('checklist');
  const [checks, setChecks] = useState<ChecksState>({
    spreadsheetFilled: false,
    codesValidated: false,
    newPlatformIntegrated: false,
    newProductsRemoved: false,
    awareOfSignature: false
  });

  const allChecked = Object.values(checks).every(v => v === true);

  const toggleCheck = (key: keyof ChecksState) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getStepTitle = () => {
    switch (wizardStep) {
      case 'checklist':
        return step5.checklist.title;
      case 'confirmation':
        return step5.confirmation.title;
      case 'final_link':
        return step5.final.title;
      default:
        return step5.stepTitle;
    }
  };

  const getStepDescription = () => {
    switch (wizardStep) {
      case 'checklist':
        return step5.checklist.description;
      case 'final_link':
        return step5.final.description;
      default:
        return '';
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4 mb-8">
        <DsBadge variant="brand">{t.app.navigation.step} 5: {step5.stepTitle}</DsBadge>
        <DsH2>{getStepTitle()}</DsH2>
        {getStepDescription() && <DsP>{getStepDescription()}</DsP>}
      </div>

      <div className="bg-[var(--background)] rounded-[var(--radius-2xl)] p-6 md:p-8 shadow-sm border border-[var(--color-slate-200)] relative transition-colors">
        {wizardStep === 'checklist' && (
          <ChecklistView
            checks={checks}
            onToggleCheck={toggleCheck}
            allChecked={allChecked}
            onBack={onBack}
            onNext={() => setWizardStep('confirmation')}
          />
        )}
        {wizardStep === 'confirmation' && (
          <ConfirmationView
            onBack={() => setWizardStep('checklist')}
            onConfirm={() => setWizardStep('final_link')}
          />
        )}
        {wizardStep === 'final_link' && (
          <FinalLinkView
            onBack={() => setWizardStep('checklist')}
          />
        )}
      </div>
    </div>
  );
};
