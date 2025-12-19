
import { useState } from 'react';
import { CheckCircle2, ClipboardCheck, ExternalLink, ArrowRight, ShieldCheck, Zap, Mail, FileSignature, Clock } from 'lucide-react';
import { DsButton, DsH2, DsP, DsBadge } from '../ui/DesignSystem';
import { WizardStepState } from '../../types/migration';

interface StepUploadProps {
    onBack: () => void;
}

export const StepUpload = ({ onBack }: StepUploadProps) => {
  const [wizardStep, setWizardStep] = useState<WizardStepState>('checklist');
  const [checks, setChecks] = useState({
    spreadsheetFilled: false,
    codesValidated: false,
    newPlatformIntegrated: false,
    newProductsRemoved: false,
    awareOfSignature: false
  });

  const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLScqd3IR56V1638wyRcLCB_dp47x3HhiBSy2mr2ek5Gks-vtDA/viewform";

  const allChecked = Object.values(checks).every(v => v === true);

  const toggleCheck = (key: keyof typeof checks) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleOpenForms = () => {
    window.open(GOOGLE_FORMS_URL, '_blank');
  };

  // Checklist View
  const ChecklistView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
        <div className="bg-[var(--primary-50)] p-6 rounded-[var(--radius-xl)] border border-[var(--primary-100)]">
            <h3 className="font-bold text-[var(--primary-800)] text-lg mb-4 flex items-center gap-2">
                <ClipboardCheck size={24} /> Checklist de Prontidão
            </h3>
            <p className="text-sm text-[var(--primary-800)] mb-6">
                Antes de enviarmos você para o formulário de solicitação, confirme se seguiu todas as orientações técnicas:
            </p>

            <div className="space-y-3">
                {[
                    { id: 'spreadsheetFilled', label: 'Preenchi a planilha "de-para" corretamente seguindo o modelo.' },
                    { id: 'codesValidated', label: 'Validei se os novos IDs de produto estão corretos e sem erros de formatação.' },
                    { id: 'newPlatformIntegrated', label: 'A nova plataforma já está integrada e enviando pedidos para a RA Reviews.' },
                    { id: 'newProductsRemoved', label: 'Removi da planilha as linhas de produtos novos que já nasceram na nova plataforma.' },
                    { id: 'awareOfSignature', label: 'Estou ciente que a migração só inicia de fato após eu assinar o Termo que receberei por e-mail.' }
                ].map((item) => (
                    <label 
                        key={item.id}
                        className={`flex items-center gap-3 p-4 rounded-[var(--radius-lg)] border transition-all cursor-pointer group ${
                            checks[item.id as keyof typeof checks] 
                            ? 'bg-white border-[var(--primary-400)] shadow-sm' 
                            : 'bg-white/50 border-[var(--color-slate-200)] hover:border-[var(--color-slate-300)]'
                        }`}
                    >
                        <div className={`w-6 h-6 rounded flex items-center justify-center border-2 transition-all ${
                            checks[item.id as keyof typeof checks] 
                            ? 'bg-[var(--primary-600)] border-[var(--primary-600)] text-white' 
                            : 'bg-white border-[var(--color-slate-300)] group-hover:border-[var(--primary-400)]'
                        }`}>
                            {checks[item.id as keyof typeof checks] && <CheckCircle2 size={16} />}
                        </div>
                        <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={checks[item.id as keyof typeof checks]} 
                            onChange={() => toggleCheck(item.id as keyof typeof checks)}
                        />
                        <span className={`text-sm font-medium ${checks[item.id as keyof typeof checks] ? 'text-[var(--color-slate-900)]' : 'text-[var(--color-slate-500)]'}`}>
                            {item.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-[var(--color-slate-100)]">
             <DsButton variant="ghost" onClick={onBack}>
                Voltar
            </DsButton>
            <DsButton 
                onClick={() => setWizardStep('confirmation')} 
                disabled={!allChecked}
                className="min-w-[200px]"
            >
                Seguir para Solicitação <ArrowRight size={18} className="ml-2" />
            </DsButton>
        </div>
    </div>
  );

  // Secondary Confirmation Popup (Modal styled overlay)
  const ConfirmationView = () => (
    <div className="space-y-8 py-8 text-center animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-[var(--color-yellow-50)] text-[var(--color-yellow-600)] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[var(--color-yellow-100)]">
            <ShieldCheck size={40} />
        </div>
        <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-[var(--color-slate-900)] font-[var(--font-sans-2)] mb-4">
                Declaração de Responsabilidade
            </h3>
            <p className="text-sm text-[var(--color-slate-600)] leading-relaxed">
                Ao prosseguir, você confirma que revisou os dados. <strong>Erros na planilha podem causar vinculação incorreta de reviews.</strong> 
                <br/><br/>
                Após o envio, nossa automação validará seu arquivo e enviará o termo de aceite para o seu e-mail.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <DsButton variant="secondary" onClick={() => setWizardStep('checklist')}>
                Revisar Checklist
            </DsButton>
            <DsButton onClick={() => setWizardStep('final_link')} className="bg-[var(--primary-700)]">
                Sim, estou seguro
            </DsButton>
        </div>
    </div>
  );

  // Final State: Visual Timeline of Automation Flow
  const FinalLinkView = () => (
    <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="w-20 h-20 bg-[var(--secondary-100)] text-[var(--secondary-600)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[var(--secondary-100)]/20">
            <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-extrabold font-[var(--font-sans-2)] text-[var(--primary-800)] mb-4">
            Quase lá!
        </h3>
        <DsP className="mb-10 max-w-xl mx-auto text-base">
            O último passo é preencher o formulário e <strong>anexar sua planilha</strong>. Veja o que acontece logo em seguida:
        </DsP>
        
        {/* Visual Timeline of Automation */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-[var(--color-slate-50)] p-4 rounded-xl border border-[var(--color-slate-200)] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--primary-600)] text-white w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-sm">1</div>
                <Zap className="mx-auto mb-2 text-[var(--primary-600)]" size={24} />
                <h5 className="font-bold text-sm text-[var(--primary-900)] mb-1">Validação Interna</h5>
                <p className="text-[10px] text-[var(--color-slate-500)] leading-tight">Nossa automação realiza uma segunda conferência técnica na sua planilha.</p>
            </div>
            <div className="bg-[var(--color-slate-50)] p-4 rounded-xl border border-[var(--color-slate-200)] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--primary-600)] text-white w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-sm">2</div>
                <Mail className="mx-auto mb-2 text-[var(--primary-600)]" size={24} />
                <h5 className="font-bold text-sm text-[var(--primary-900)] mb-1">Termo por E-mail</h5>
                <p className="text-[10px] text-[var(--color-slate-500)] leading-tight">Se tudo estiver certo, o termo de aceite é enviado para o seu e-mail.</p>
            </div>
            <div className="bg-[var(--color-slate-50)] p-4 rounded-xl border border-[var(--color-slate-200)] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--primary-600)] text-white w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-sm">3</div>
                <FileSignature className="mx-auto mb-2 text-[var(--primary-600)]" size={24} />
                <h5 className="font-bold text-sm text-[var(--primary-900)] mb-1">Execução Real</h5>
                <p className="text-[10px] text-[var(--color-slate-500)] leading-tight">Somente após sua assinatura é que executamos a migração no banco de dados.</p>
            </div>
        </div>

        <div className="max-w-md mx-auto space-y-4">
            <button 
                onClick={handleOpenForms}
                className="w-full flex items-center justify-center gap-3 bg-[var(--primary-700)] text-white h-16 rounded-[var(--radius-2xl)] font-bold text-lg hover:bg-[var(--primary-600)] transition-all transform hover:-translate-y-1 shadow-lg shadow-[var(--primary-700)]/20 group"
            >
                Abrir Formulário Oficial
                <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-slate-400)]">
                <Clock size={14} />
                <span>Prazo: <strong>48h a 72h úteis</strong> após o termo estar devidamente assinado.</span>
            </div>
        </div>

        <div className="mt-12 pt-12 border-t border-[var(--color-slate-100)]">
             <DsButton variant="ghost" onClick={() => setWizardStep('checklist')}>
                Voltar para o Checklist
            </DsButton>
        </div>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4 mb-8">
        <DsBadge variant="brand">Passo 5: Solicitação Oficial</DsBadge>
        <DsH2>
            {wizardStep === 'checklist' ? 'Checklist Final de Segurança' : 
             wizardStep === 'confirmation' ? 'Última Confirmação' :
             'Solicitar Migração'}
        </DsH2>
        <DsP>
           {wizardStep === 'checklist' && 'Certifique-se de que todos os requisitos foram atendidos para evitar atrasos.'}
           {wizardStep === 'final_link' && 'Clique no botão abaixo para preencher o formulário oficial.'}
        </DsP>
      </div>

      <div className="bg-white rounded-[var(--radius-2xl)] p-6 md:p-8 shadow-sm border border-[var(--color-slate-200)] relative">
        {wizardStep === 'checklist' && <ChecklistView />}
        {wizardStep === 'confirmation' && <ConfirmationView />}
        {wizardStep === 'final_link' && <FinalLinkView />}
      </div>
    </div>
  );
};
