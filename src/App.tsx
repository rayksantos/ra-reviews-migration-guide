
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Components
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { DsButton, DsCard, DsH1 } from './components/ui/DesignSystem';

// Hooks
import { useMigrationSteps } from './hooks/useMigrationSteps';

export default function App() {
  const {
    steps,
    currentStep,
    setCurrentStep,
    handleNext,
    handlePrev,
    topRef,
    isLastStep,
    progress,
  } = useMigrationSteps();

  const CurrentStepComponent = steps[currentStep].component;
  
  // O último step precisa receber a função onBack
  const stepProps = isLastStep 
    ? { onBack: handlePrev }
    : {};

  return (
    <div className="min-h-screen pb-12 bg-[var(--color-slate-50)] text-[var(--foreground)]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-12" ref={topRef}>
        
        {/* HERO SECTION */}
        <div className="text-center mb-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <DsH1 className="text-center">Sua reputação não pode começar do zero</DsH1>
          <p className="text-lg text-[var(--color-slate-500)] max-w-2xl mx-auto leading-relaxed">
            Cada review conquistado é um ativo valioso do seu negócio. Garanta a migração segura do seu histórico e mantenha a confiança dos seus clientes intacta na nova plataforma.
          </p>
        </div>

        {/* MAIN FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          
          {/* SIDEBAR */}
          <Sidebar 
            steps={steps} 
            currentStep={currentStep} 
            onStepChange={setCurrentStep} 
          />

          {/* MOBILE PROGRESS BAR */}
          <div className="lg:hidden w-full mb-2">
            <div className="flex justify-between text-xs font-bold text-[var(--color-slate-500)] mb-2 px-1">
                <span>Passo {currentStep + 1} de {steps.length}</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-[var(--color-slate-200)] rounded-full overflow-hidden">
                <div 
                    className="h-full bg-[var(--primary-500)] transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
          </div>

          {/* CONTENT CARD */}
          <div className="flex-1 w-full min-w-0">
            <DsCard className="min-h-[600px] flex flex-col justify-between relative overflow-hidden transition-all duration-300">
                
                {/* Dynamic Step Content */}
                <div className="mb-12">
                    <CurrentStepComponent {...stepProps} />
                </div>

                {/* Navigation Buttons (Only for non-interactive steps) */}
                {!isLastStep && (
                  <div className="flex flex-col-reverse sm:flex-row justify-between items-center pt-8 border-t border-[var(--color-slate-100)] mt-auto gap-4">
                      <DsButton 
                          variant="ghost" 
                          onClick={handlePrev} 
                          disabled={currentStep === 0}
                          className="w-full sm:w-auto"
                      >
                          <ChevronLeft size={18} className="mr-1" /> Voltar
                      </DsButton>

                      <DsButton onClick={handleNext} className="w-full sm:w-auto">
                          Próximo <ChevronRight size={18} className="ml-1" />
                      </DsButton>
                  </div>
                )}
            </DsCard>
          </div>
        </div>
      </div>
      
      {/* Simple Footer */}
      <footer className="mt-20 border-t border-[var(--color-slate-200)] py-8 text-center text-[var(--color-slate-400)] text-sm">
        <p>© 2025 RA Reviews. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
