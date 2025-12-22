import { Zap, MailCheck, FileSignature, CheckCircle2, Clock } from 'lucide-react';
import { DsCard } from '../../ui/DesignSystem';
import { StepHeader } from '../../shared/StepHeader';
import { useI18n } from '../../../i18n/context';

/**
 * Step 4: Fluxo de Assinatura
 * Explica como funciona a oficialização da migração
 */
export const StepTerm = () => {
  const { t } = useI18n();
  const step4 = t.steps.step4;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <StepHeader
        stepNumber={4}
        stepTitle={step4.stepTitle}
        heading={step4.heading}
        description={
          <>
            {step4.description}
          </>
        }
      />

      <div className="grid md:grid-cols-2 gap-6">
        <DsCard className="border-t-4 border-t-[var(--primary-500)] shadow-sm transition-all duration-200 hover:shadow-md hover:border-t-[var(--primary-600)] group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[var(--card-primary-bg)] rounded-lg text-[var(--card-primary-text)] group-hover:opacity-90 transition-colors">
              <Zap size={20} className="group-hover:opacity-90 transition-colors" />
            </div>
            <h4 className="font-bold text-[var(--card-primary-text)] group-hover:opacity-90 transition-colors">
              {step4.automation.title}
            </h4>
          </div>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed group-hover:text-[var(--text-strong)] transition-colors">
            {step4.automation.description}
          </p>
        </DsCard>

        <DsCard className="border-t-4 border-t-[var(--secondary-500)] shadow-sm transition-all duration-200 hover:shadow-md hover:border-t-[var(--secondary-600)] group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[var(--card-secondary-bg)] rounded-lg text-[var(--card-secondary-text)] group-hover:opacity-90 transition-colors">
              <MailCheck size={20} className="group-hover:opacity-90 transition-colors" />
            </div>
            <h4 className="font-bold text-[var(--card-secondary-text)] group-hover:opacity-90 transition-colors">
              {step4.term.title}
            </h4>
          </div>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed group-hover:text-[var(--text-strong)] transition-colors">
            {step4.term.description}
          </p>
        </DsCard>
      </div>

      <div className="bg-[var(--color-slate-900)] text-[var(--color-slate-50)] p-6 rounded-[var(--radius-2xl)] relative overflow-hidden shadow-xl transition-all duration-200 hover:shadow-2xl group">
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-3 bg-[var(--color-slate-50)]/10 rounded-full group-hover:bg-[var(--color-slate-50)]/15 transition-colors">
            <FileSignature size={24} className="text-[var(--secondary-400)] group-hover:text-[var(--secondary-300)] transition-colors" />
          </div>
          <div>
          <h4 className="font-bold text-lg mb-2 group-hover:text-[var(--color-slate-50)] transition-colors">
            {step4.signature.title}
          </h4>
          <p className="text-sm text-[var(--color-slate-50)]/70 leading-relaxed group-hover:text-[var(--color-slate-50)]/80 transition-colors">
              {step4.signature.description}
            </p>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-15 transition-opacity">
          <CheckCircle2 size={160} />
        </div>
      </div>

      <div className="bg-[var(--card-yellow-bg)] p-4 rounded-[var(--radius-xl)] border border-[var(--color-yellow-200)] flex gap-3 transition-all duration-200 hover:shadow-sm hover:border-[var(--color-yellow-300)] group">
        <Clock className="text-[var(--card-yellow-text)] shrink-0 group-hover:opacity-90 transition-colors" size={20} />
        <p className="text-xs text-[var(--card-yellow-text)] leading-relaxed">
          <strong>{step4.timeEstimate.title}</strong> {step4.timeEstimate.description}
        </p>
      </div>
    </div>
  );
};
