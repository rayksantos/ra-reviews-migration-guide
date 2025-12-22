import { useState, useEffect, useRef, useCallback } from 'react';
import { STEP_COMPONENTS } from '../constants/migration';
import { StepDefinition } from '../types/migration';
import { useI18n } from '../i18n/context';
import { HelpCircle, Download, FileSpreadsheet, FileSignature, UploadCloud } from 'lucide-react';

/**
 * Hook customizado para gerenciar o estado e navegação dos steps do wizard
 */
export const useMigrationSteps = () => {
  const { t } = useI18n();
  const [currentStep, setCurrentStep] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  // Títulos traduzidos dos steps
  const stepTitles = [
    t.sidebar.stepTitles.step1,
    t.sidebar.stepTitles.step2,
    t.sidebar.stepTitles.step3,
    t.sidebar.stepTitles.step4,
    t.sidebar.stepTitles.step5,
  ];

  const stepIcons = [HelpCircle, Download, FileSpreadsheet, FileSignature, UploadCloud];

  // Cria os steps completos com componentes e títulos traduzidos
  const steps: StepDefinition[] = stepTitles.map((title, index) => ({
    title,
    icon: stepIcons[index],
    component: STEP_COMPONENTS[index],
  }));

  // Scroll para o topo quando o step muda
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentStep]);

  const handleNext = useCallback(() => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  }, [steps.length]);

  const handlePrev = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  }, []);

  const goToStep = useCallback((index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStep(index);
    }
  }, [steps.length]);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return {
    steps,
    currentStep,
    setCurrentStep: goToStep,
    handleNext,
    handlePrev,
    topRef,
    isFirstStep,
    isLastStep,
    progress,
  };
};
