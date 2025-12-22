import { CheckCircle2, ExternalLink, Clock, Zap, Mail, FileSignature } from 'lucide-react';
import { DsButton, DsP } from '../../../ui/DesignSystem';
import { GOOGLE_FORMS_URL } from '../constants';
import { TimelineCard } from './TimelineCard';
import { useI18n } from '../../../../i18n/context';

interface FinalLinkViewProps {
  onBack: () => void;
}

/**
 * View final com link para o formulário e timeline de automação
 */
export const FinalLinkView = ({ onBack }: FinalLinkViewProps) => {
  const { t } = useI18n();
  const step5 = t.steps.step5;
  const final = step5.final;

  const handleOpenForms = () => {
    window.open(GOOGLE_FORMS_URL, '_blank');
  };

  const timelineSteps = [
    {
      number: 1,
      icon: Zap,
      title: final.timeline.validation.title,
      description: final.timeline.validation.description
    },
    {
      number: 2,
      icon: Mail,
      title: final.timeline.email.title,
      description: final.timeline.email.description
    },
    {
      number: 3,
      icon: FileSignature,
      title: final.timeline.execution.title,
      description: final.timeline.execution.description
    }
  ];

  return (
    <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="w-20 h-20 bg-[var(--secondary-100)] text-[var(--secondary-600)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[var(--secondary-100)]/20">
        <CheckCircle2 size={40} />
      </div>
      <h3 className="text-3xl font-extrabold font-[var(--font-sans-2)] text-[var(--primary-800)] mb-4">
        {final.almostThere}
      </h3>
      <DsP className="mb-10 max-w-xl mx-auto text-base">
        {final.intro}
      </DsP>

      {/* Visual Timeline of Automation */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {timelineSteps.map((step) => (
          <TimelineCard key={step.number} {...step} />
        ))}
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <button
          onClick={handleOpenForms}
          className="w-full flex items-center justify-center gap-3 bg-[var(--primary-700)] text-[var(--color-slate-50)] h-16 rounded-[var(--radius-2xl)] font-bold text-lg hover:bg-[var(--primary-600)] transition-all transform hover:-translate-y-1 shadow-lg shadow-[var(--primary-700)]/20 group"
        >
          {final.openForm}
          <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-slate-400)]">
          <Clock size={14} />
          <span>{final.deadline}</span>
        </div>
      </div>

      <div className="mt-12 pt-12 border-t border-[var(--color-slate-100)]">
        <DsButton variant="ghost" onClick={onBack}>
          {final.backToChecklist}
        </DsButton>
      </div>
    </div>
  );
};
