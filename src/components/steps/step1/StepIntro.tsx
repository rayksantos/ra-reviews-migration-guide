import { CheckCircle2, X, Fingerprint, History, TimerOff, UserCog, HelpCircle } from 'lucide-react';
import { StepHeader } from '../../shared/StepHeader';
import { InfoCard } from '../../shared/InfoCard';
import { ComparisonCard } from '../../shared/ComparisonCard';
import { useI18n } from '../../../i18n/context';

/**
 * Seção explicando por que o usuário precisa preencher a planilha
 */
const WhyFillSection = () => {
  const { t } = useI18n();
  const step1 = t.steps.step1;

  return (
    <div className="bg-[var(--card-primary-bg)] border border-[var(--primary-200)] rounded-[var(--radius-2xl)] overflow-hidden shadow-md relative transition-all duration-300 hover:shadow-lg hover:border-[var(--primary-300)] group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary-500)] group-hover:bg-[var(--primary-600)] transition-colors"></div>
      <div className="p-5 border-b border-[var(--primary-100)] bg-[var(--background)]/50 group-hover:bg-[var(--background)]/70 transition-colors">
        <h3 className="font-bold text-[var(--card-primary-text)] font-[var(--font-sans-2)] text-xl flex items-center gap-2 group-hover:opacity-90 transition-colors">
          <UserCog size={24} className="text-[var(--card-primary-text)] group-hover:opacity-90 transition-colors" />
          {step1.whyFill.title}
        </h3>
      </div>
      <div className="p-6 grid md:grid-cols-2 gap-8 bg-gradient-to-br from-[var(--background)] to-[var(--card-primary-bg)]/30 group-hover:from-[var(--background)] group-hover:to-[var(--card-primary-bg)]/40 transition-all">
        <div className="space-y-3 opacity-75 grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100">
          <div className="flex items-center gap-2 text-[var(--text-subtle)] font-bold text-sm uppercase tracking-wide hover:text-[var(--text-muted)] transition-colors">
            <History size={16} /> {step1.whyFill.before.title}
          </div>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            {step1.whyFill.before.description}
          </p>
        </div>
        <div className="space-y-3 relative">
          <div className="hidden md:block absolute -left-4 top-0 bottom-0 w-[1px] bg-[var(--primary-200)] group-hover:bg-[var(--primary-300)] transition-colors"></div>
          <div className="flex items-center gap-2 text-[var(--card-primary-text)] font-bold text-sm uppercase tracking-wide group-hover:opacity-90 transition-colors">
            <TimerOff size={16} /> {step1.whyFill.now.title}
          </div>
          <p className="text-sm text-[var(--text-strong)] leading-relaxed font-medium">
            {step1.whyFill.now.description}
          </p>
          <div className="bg-[var(--background)] p-3 rounded-lg text-xs text-[var(--card-primary-text)] font-bold border border-[var(--primary-200)] mt-2 shadow-sm flex gap-2 items-center hover:shadow-md hover:border-[var(--primary-300)] transition-all">
            <CheckCircle2 size={16} className="text-[var(--card-primary-text)]"/>
            {step1.whyFill.now.result}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Seção explicando quando fazer e quando não fazer a migração
 */
const WhenToMigrateSection = () => {
  const { t } = useI18n();
  const step1 = t.steps.step1;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <InfoCard borderColor="border-l-[var(--primary-500)]" hoverBorderColor="hover:border-l-[var(--primary-600)]">
        <h3 className="font-bold text-[var(--primary-800)] text-lg mb-3 flex items-center gap-2 group-hover:text-[var(--primary-900)] transition-colors">
          <CheckCircle2 size={20} className="group-hover:text-[var(--primary-700)] transition-colors" /> {step1.whenToMigrate.when.title}
        </h3>
        <ul className="space-y-3 text-sm text-[var(--text-muted)]">
          {step1.whenToMigrate.when.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2 hover:text-[var(--text-strong)] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)] mt-1.5 shrink-0 group-hover:bg-[var(--primary-600)] transition-colors"/>
              {item}
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard 
        borderColor="border-l-[var(--color-slate-300)]" 
        hoverBorderColor="hover:border-l-[var(--color-slate-400)]"
        className="bg-[var(--color-slate-50)]"
      >
        <h3 className="font-bold text-[var(--color-slate-800)] text-lg mb-3 flex items-center gap-2 group-hover:opacity-90 transition-colors">
          <X size={20} className="text-[var(--color-slate-800)] group-hover:opacity-90 transition-colors" /> {step1.whenToMigrate.whenNot.title}
        </h3>
        <ul className="space-y-3 text-sm text-[var(--color-slate-700)]">
          {step1.whenToMigrate.whenNot.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2 hover:text-[var(--color-slate-800)] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-slate-600)] mt-1.5 shrink-0 group-hover:bg-[var(--color-slate-700)] transition-colors"/>
              {item}
            </li>
          ))}
        </ul>
      </InfoCard>
    </div>
  );
};

/**
 * Seção visual explicando a lógica dos IDs
 */
const IdLogicSection = () => {
  const { t } = useI18n();
  const step1 = t.steps.step1;

  return (
    <div className="bg-[var(--background)] rounded-[var(--radius-2xl)] p-6 border border-[var(--color-slate-200)] shadow-sm transition-all duration-200 hover:shadow-md hover:border-[var(--color-slate-300)] group">
      <h3 className="font-bold text-[var(--foreground)] font-[var(--font-sans-2)] mb-2 text-lg flex items-center gap-2 group-hover:text-[var(--color-slate-600)] transition-colors">
        <Fingerprint size={20} className="text-[var(--secondary-600)] group-hover:text-[var(--secondary-700)] transition-colors"/> {step1.idLogic.title}
      </h3>
      <p className="text-sm text-[var(--text-subtle)] mb-6 leading-relaxed z-10 relative">
        {step1.idLogic.description}
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm z-0 relative">
        <ComparisonCard 
          title={step1.idLogic.oldPlatform}
          variant="old"
          icon="👟"
        >
          <div className="font-bold text-[var(--foreground)]">{step1.idLogic.exampleProduct}</div>
          <div className="font-mono text-xs text-[var(--foreground)]">ID: <span className="bg-[var(--background)] px-1 rounded border text-[var(--foreground)]">{step1.idLogic.exampleOldId}</span></div>
        </ComparisonCard>

        <div className="flex flex-col items-center gap-1">
          <div className="text-[var(--color-slate-400)] text-xs font-medium text-center">{step1.idLogic.systemDoesNotRecognize}</div>
          <HelpCircle className="text-[var(--color-slate-300)]" />
          <div className="text-[10px] text-[var(--color-slate-400)] max-w-[120px] text-center leading-tight">
            {step1.idLogic.systemExplanation}
          </div>
        </div>

        <ComparisonCard 
          title={step1.idLogic.newPlatform}
          variant="new"
          icon="👟"
        >
          <div className="font-bold text-[var(--foreground)]">{step1.idLogic.exampleProduct}</div>
          <div className="font-mono text-xs text-[var(--foreground)]">ID: <span className="bg-[var(--background)] px-1 rounded border text-[var(--foreground)]">{step1.idLogic.exampleNewId}</span></div>
        </ComparisonCard>
      </div>
    </div>
  );
};

/**
 * Step 1: Entendimento Completo
 * Explica o que é migração e por que é necessário
 */
export const StepIntro = () => {
  const { t } = useI18n();
  const step1 = t.steps.step1;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <StepHeader
        stepNumber={1}
        stepTitle={step1.stepTitle}
        heading={step1.heading}
        description={
          <>
            {step1.description}
          </>
        }
      />

      <WhyFillSection />
      <WhenToMigrateSection />
      <IdLogicSection />
    </div>
  );
};
