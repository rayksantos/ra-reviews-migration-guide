/**
 * Tipos para o sistema de internacionalização
 */

export type Locale = 'pt-BR' | 'en-US';

// Tipos específicos para cada step
export interface Step1Translations {
  stepTitle: string;
  heading: string;
  description: string;
  whyFill: {
    title: string;
    before: {
      title: string;
      description: string;
    };
    now: {
      title: string;
      description: string;
      result: string;
    };
  };
  whenToMigrate: {
    when: {
      title: string;
      items: string[];
    };
    whenNot: {
      title: string;
      items: string[];
    };
  };
  idLogic: {
    title: string;
    description: string;
    oldPlatform: string;
    newPlatform: string;
    systemDoesNotRecognize: string;
    systemExplanation: string;
    exampleProduct: string;
    exampleOldId: string;
    exampleNewId: string;
  };
}

export interface TranslationKeys {
  // App & Layout
  app: {
    hero: {
      title: string;
      description: string;
    };
    footer: {
      copyright: string;
    };
    navigation: {
      back: string;
      next: string;
      step: string;
      of: string;
    };
  };
  header: {
    title: string;
  };
  sidebar: {
    expandMenu: string;
    collapseMenu: string;
    completeAllSteps: string;
    stepTitles: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
      step5: string;
    };
  };
  steps: {
    step1: Step1Translations;
    step2: Record<string, any>;
    step3: Record<string, any>;
    step4: Record<string, any>;
    step5: Record<string, any>;
  };
}

