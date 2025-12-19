
import { useState } from 'react';
import { PanelLeftClose, PanelLeftOpen, Info, CheckCircle2 } from 'lucide-react';
import { StepDefinition } from '../../types/migration';

interface SidebarProps {
  steps: StepDefinition[];
  currentStep: number;
  onStepChange: (index: number) => void;
}

export const Sidebar = ({ steps, currentStep, onStepChange }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div 
      className={`hidden lg:block sticky top-24 transition-all duration-300 ease-in-out bg-white border border-[var(--color-slate-200)] rounded-[var(--radius-xl)] shadow-sm overflow-hidden z-10 ${
          isCollapsed ? 'w-20' : 'w-[300px]'
      }`}
    >
       <div className={`p-4 border-b border-[var(--color-slate-100)] flex ${isCollapsed ? 'justify-center' : 'justify-end'}`}>
           <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-[var(--color-slate-400)] hover:text-[var(--primary-600)] transition-colors p-1 rounded hover:bg-[var(--color-slate-50)]"
              title={isCollapsed ? "Expandir menu" : "Recolher menu"}
           >
               {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
           </button>
       </div>

      <nav className="p-2 space-y-1">
        {steps.map((step, index) => {
          const isActive = currentStep === index;
          const isCompleted = currentStep > index;
          const Icon = step.icon;
          
          return (
            <button
              key={index}
              onClick={() => onStepChange(index)}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center' : ''} px-3 py-3 rounded-[var(--radius-lg)] text-sm font-medium transition-all duration-200 group relative ${
                isActive 
                  ? 'bg-[var(--primary-50)] text-[var(--primary-800)]' 
                  : isCompleted
                    ? 'text-[var(--secondary-700)] hover:bg-[var(--color-slate-50)]'
                    : 'text-[var(--color-slate-500)] hover:bg-[var(--color-slate-50)]'
              }`}
              title={isCollapsed ? step.title : undefined}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                isActive 
                  ? 'bg-white text-[var(--primary-700)] shadow-sm' 
                  : isCompleted 
                      ? 'bg-[var(--secondary-100)] text-[var(--secondary-700)]' 
                      : 'bg-[var(--color-slate-100)] text-[var(--color-slate-400)] group-hover:bg-[var(--color-slate-200)]'
              }`}>
                {isCompleted ? <CheckCircle2 size={16} /> : <Icon size={16} />}
              </div>
              
              <span className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>
                  {step.title}
              </span>

              {isActive && !isCollapsed && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--primary-500)]" />
              )}
            </button>
          );
        })}
      </nav>
      
      {!isCollapsed && (
          <div className="p-4 mt-4 bg-[var(--color-slate-50)] border-t border-[var(--color-slate-100)]">
              <div className="flex gap-3 items-start text-[var(--color-slate-500)]">
                  <Info size={16} className="mt-0.5 shrink-0" />
                  <p className="text-xs leading-relaxed">
                      Complete todos os passos antes de iniciar a migração.
                  </p>
              </div>
          </div>
      )}
    </div>
  );
};
