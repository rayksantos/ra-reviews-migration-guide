import { HelpCircle, Download, FileSpreadsheet, FileSignature, UploadCloud } from 'lucide-react';
import { StepDefinition } from '../types/migration';
import { StepIntro, StepPreparation, StepSpreadsheet, StepTerm } from '../components/steps/ContentSteps';
import { StepUpload } from '../components/steps/StepUpload';

/**
 * URL do formulário Google Forms para solicitação de migração
 */
export const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLScqd3IR56V1638wyRcLCB_dp47x3HhiBSy2mr2ek5Gks-vtDA/viewform";

/**
 * Configuração dos steps do wizard de migração
 */
export const MIGRATION_STEPS: Omit<StepDefinition, 'component'>[] = [
  { title: "Entendimento", icon: HelpCircle },
  { title: "Preparação", icon: Download },
  { title: "A Planilha", icon: FileSpreadsheet },
  { title: "Termo & Regras", icon: FileSignature },
  { title: "Validar e Enviar", icon: UploadCloud },
];

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

/**
 * Checklist items para validação final
 */
export interface ChecklistItem {
  id: string;
  label: string;
}

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'spreadsheetFilled', label: 'Preenchi a planilha "de-para" corretamente seguindo o modelo.' },
  { id: 'codesValidated', label: 'Validei se os novos IDs de produto estão corretos e sem erros de formatação.' },
  { id: 'newPlatformIntegrated', label: 'A nova plataforma já está integrada e enviando pedidos para a RA Reviews.' },
  { id: 'newProductsRemoved', label: 'Removi da planilha as linhas de produtos novos que já nasceram na nova plataforma.' },
  { id: 'awareOfSignature', label: 'Estou ciente que a migração só inicia de fato após eu assinar o Termo que receberei por e-mail.' }
];

/**
 * Prazo estimado para processamento da migração (em horas úteis)
 */
export const MIGRATION_PROCESSING_TIME = {
  MIN: 48,
  MAX: 72,
} as const;

