/**
 * Constantes do Step 5: Solicitação Oficial
 */

export const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLScqd3IR56V1638wyRcLCB_dp47x3HhiBSy2mr2ek5Gks-vtDA/viewform";

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

export interface ChecksState {
  spreadsheetFilled: boolean;
  codesValidated: boolean;
  newPlatformIntegrated: boolean;
  newProductsRemoved: boolean;
  awareOfSignature: boolean;
}

