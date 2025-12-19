import { useState, useEffect, useRef, useCallback } from 'react';
import { MIGRATION_STEPS, STEP_COMPONENTS } from '../constants/migration';
import { StepDefinition } from '../types/migration';

/**
 * Hook customizado para gerenciar o estado e navegação dos steps do wizard
 */
export const useMigrationSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  // Cria os steps completos com componentes
  const steps: StepDefinition[] = MIGRATION_STEPS.map((step, index) => ({
    ...step,
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

