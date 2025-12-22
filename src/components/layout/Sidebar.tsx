import { useState } from 'react';
import { PanelLeftClose, PanelLeftOpen, Info, CheckCircle2 } from 'lucide-react';
import { StepDefinition } from '../../types/migration';
import { useI18n } from '../../i18n/context';

interface SidebarProps {
  steps: StepDefinition[];
  currentStep: number;
  onStepChange: (index: number) => void;
}

export const Sidebar = ({ steps, currentStep, onStepChange }: SidebarProps) => {
  const { t } = useI18n();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div 
      className={`hidden lg:block sticky top-24 transition-all duration-300 ease-in-out bg-[var(--background)] border border-[var(--color-slate-200)] rounded-[var(--radius-xl)] shadow-sm overflow-hidden z-10 ${
          isCollapsed ? 'w-20' : 'w-[300px]'
      }`}
    >
       <div className={`p-4 border-b border-[var(--color-slate-100)] flex ${isCollapsed ? 'justify-center' : 'justify-end'}`}>
           <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-[var(--color-slate-400)] hover:text-[var(--primary-600)] transition-colors p-1 rounded hover:bg-[var(--color-slate-50)]"
              title={isCollapsed ? t.sidebar.expandMenu : t.sidebar.collapseMenu}
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
                  ? 'bg-[var(--card-primary-bg)] text-[var(--card-primary-text)]' 
                  : isCompleted
                    ? 'text-[var(--card-secondary-text)] hover:bg-[var(--color-slate-50)]'
                    : 'text-[var(--text-subtle)] hover:bg-[var(--color-slate-50)]'
              }`}
              title={isCollapsed ? step.title : undefined}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                isActive 
                  ? 'bg-[var(--background)] text-[var(--card-primary-text)] shadow-sm' 
                  : isCompleted 
                      ? 'bg-[var(--secondary-100)] text-[var(--card-secondary-text)]' 
                      : 'bg-[var(--color-slate-100)] text-[var(--text-subtle)] group-hover:bg-[var(--color-slate-200)]'
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
              <div className="flex gap-3 items-start text-[var(--color-slate-800)]">
                  <Info size={16} className="mt-0.5 shrink-0 text-[var(--color-slate-800)]" />
                  <p className="text-xs leading-relaxed text-[var(--color-slate-800)]">
                      {t.sidebar.completeAllSteps}
                  </p>
              </div>
          </div>
      )}
    </div>
  );
};
