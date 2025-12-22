import { StepIntro, StepPreparation, StepSpreadsheet, StepTerm } from '../components/steps/ContentSteps';
import { StepUpload } from '../components/steps/step5/StepUpload';

/**
 * Mapeamento de componentes para cada step
 */
export const STEP_COMPONENTS = [
  StepIntro,
  StepPreparation,
  StepSpreadsheet,
  StepTerm,
  StepUpload,
] as const;

