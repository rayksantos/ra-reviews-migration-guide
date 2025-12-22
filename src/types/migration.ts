import { LucideIcon } from 'lucide-react';
import type { ComponentType } from 'react';

/**
 * Defines a step in the migration wizard
 */
export interface StepDefinition {
  title: string;
  icon: LucideIcon;
  component: ComponentType<any>;
}

/**
 * Union type for all possible states within wizard flows
 */
export type WizardStepState = 
  | 'checklist' 
  | 'confirmation' 
  | 'final_link' 
  | 'upload' 
  | 'validating' 
  | 'errors' 
  | 'form' 
  | 'success';
