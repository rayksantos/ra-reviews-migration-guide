
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

/**
 * Represents a validation error in a CSV file
 */
export interface ValidationError {
  row: number;
  message: string;
}

/**
 * Form data for requesting a migration
 */
export interface MigrationFormData {
  companyName: string;
  raId: string;
  siteUrl: string;
  cnpj: string;
  oldPlatform: string;
  newPlatform: string;
  migrationDate: string;
  migrationTime: string;
}

/**
 * Possible statuses for a migration request
 */
export type MigrationStatus = 'pending' | 'in_progress' | 'completed' | 'archived';

/**
 * Represents a migration request record for admin views
 */
export interface MigrationRequest {
  _id: string;
  companyName: string;
  cnpj: string;
  raId: string;
  siteUrl: string;
  oldPlatform: string;
  newPlatform: string;
  migrationDate: string;
  status: MigrationStatus;
  fileName: string;
  createdAt: string;
}
