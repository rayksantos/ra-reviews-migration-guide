
import { CheckCircle2, X, Fingerprint, RefreshCw, Layers, Trash2, AlertTriangle, FileSignature, ArrowRight, BrainCircuit, Clock, History, TimerOff, UserCog, HelpCircle, AlertOctagon, ArrowDown, Split, Merge, BookOpen, ListChecks, Eraser, ArrowDownUp, ShieldAlert, ShoppingBag, LayoutTemplate, FilterX, Zap, MailCheck } from 'lucide-react';
import { DsBadge, DsCard, DsH2, DsP, DsTooltip } from '../ui/DesignSystem';

// --- STEP 1: INTRO ---
export const StepIntro = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="space-y-4">
      <DsBadge variant="brand">Passo 1: Entendimento Completo</DsBadge>
      <DsH2>O que é a Migração de Reviews?</DsH2>
      <DsP>
        A migração é um processo técnico de <strong>"Sincronização de Identidade"</strong>.
        Para a RA Reviews, um produto é identificado por um código único (ID). Quando você troca de plataforma, esse código geralmente muda, mesmo que o nome e a foto do produto continuem iguais.
      </DsP>
    </div>

    {/* Section: Why do I need to fill this? (High Visibility) */}
    <div className="bg-[var(--primary-50)] border border-[var(--primary-200)] rounded-[var(--radius-2xl)] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary-500)]"></div>
        <div className="p-5 border-b border-[var(--primary-100)] bg-white/50">
            <h3 className="font-bold text-[var(--primary-800)] font-[var(--font-sans-2)] text-xl flex items-center gap-2">
                <UserCog size={24} className="text-[var(--primary-600)]" />
                Por que <span className="underline decoration-[var(--primary-400)] decoration-2 underline-offset-2">eu</span> preciso preencher a planilha?
            </h3>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-8 bg-gradient-to-br from-white to-[var(--primary-50)]/30">
            <div className="space-y-3 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="flex items-center gap-2 text-[var(--color-slate-500)] font-bold text-sm uppercase tracking-wide">
                    <History size={16} /> Como era antes (Manual)
                </div>
                <p className="text-sm text-[var(--color-slate-600)] leading-relaxed">
                    Nossa equipe tentava validar linha por linha. Como <strong>não conhecemos seu catálogo</strong>, isso gerava dúvidas ("Esse Tênis X é o mesmo que Tênis Y?"), filas de espera e o processo levava até <strong>60 dias</strong>.
                </p>
            </div>
            <div className="space-y-3 relative">
                 <div className="hidden md:block absolute -left-4 top-0 bottom-0 w-[1px] bg-[var(--primary-200)]"></div>
                <div className="flex items-center gap-2 text-[var(--primary-700)] font-bold text-sm uppercase tracking-wide">
                    <TimerOff size={16} /> Como é agora (Automático)
                </div>
                <p className="text-sm text-[var(--color-slate-800)] leading-relaxed font-medium">
                    Transferimos a inteligência para quem entende do produto: <strong>você</strong>. Ninguém melhor que sua equipe para apontar que o <em>"Produto A"</em> virou o <em>"Produto B"</em>.
                </p>
                <div className="bg-white p-3 rounded-lg text-xs text-[var(--primary-800)] font-bold border border-[var(--primary-200)] mt-2 shadow-sm flex gap-2 items-center">
                    <CheckCircle2 size={16} className="text-[var(--primary-600)]"/>
                    Resultado: Sem fila de espera. Migração em poucos dias.
                </div>
            </div>
        </div>
    </div>

    {/* Section: When to migrate */}
    <div className="grid md:grid-cols-2 gap-6">
        <DsCard className="border-l-4 border-l-[var(--primary-500)] shadow-sm !p-5">
            <h3 className="font-bold text-[var(--primary-800)] text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 size={20} /> Quando fazer?
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-slate-600)]">
                <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)] mt-1.5 shrink-0"/>
                    Troca de plataforma de E-commerce (ex: Vtex para Shopify, Nuvemshop para Wake).
                </li>
                <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)] mt-1.5 shrink-0"/>
                    Mudança de ERP que gera novos códigos de produto na integração.
                </li>
                <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)] mt-1.5 shrink-0"/>
                    Recadastramento manual massivo de produtos com novos códigos.
                </li>
            </ul>
        </DsCard>

        <DsCard className="border-l-4 border-l-[var(--color-slate-300)] shadow-sm bg-[var(--color-slate-50)] !p-5">
             <h3 className="font-bold text-[var(--color-slate-700)] text-lg mb-3 flex items-center gap-2">
                <X size={20} /> Quando NÃO é necessário?
            </h3>
             <ul className="space-y-3 text-sm text-[var(--color-slate-600)]">
                <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-slate-400)] mt-1.5 shrink-0"/>
                    Redesign de layout (Front-end) mantendo a mesma plataforma.
                </li>
                <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-slate-400)] mt-1.5 shrink-0"/>
                    Atualização de versão da plataforma (ex: Vtex CMS para Vtex IO) <strong>se os IDs forem mantidos</strong>.
                </li>
                 <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-slate-400)] mt-1.5 shrink-0"/>
                    Mudança apenas de domínio (URL) da loja.
                </li>
            </ul>
        </DsCard>
    </div>

    {/* Visual Explanation: The "ID Key" concept */}
    <div className="bg-white rounded-[var(--radius-2xl)] p-6 border border-[var(--color-slate-200)] shadow-sm">
        <h3 className="font-bold text-[var(--foreground)] font-[var(--font-sans-2)] mb-2 text-lg flex items-center gap-2">
            <Fingerprint size={20} className="text-[var(--secondary-600)]"/> A Lógica dos IDs
        </h3>
        <p className="text-sm text-[var(--color-slate-500)] mb-6 leading-relaxed z-10 relative">
            A RA Reviews não usa o "Nome" ou "SKU Comercial" para vincular reviews, usamos o <strong>ID de Produto</strong> enviado na integração.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm z-0 relative">
            {/* Old Platform */}
            <div className="flex-1 w-full bg-[var(--color-red-50)] p-4 rounded-[var(--radius-xl)] border border-[var(--color-red-100)] opacity-75">
                <div className="text-[var(--color-red-800)] font-bold text-xs uppercase mb-2">Plataforma Antiga</div>
                <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-white rounded border flex items-center justify-center text-lg">👟</div>
                     <div>
                        <div className="font-bold">Tênis Corrida</div>
                        <div className="font-mono text-xs">ID: <span className="bg-white px-1 rounded border">675</span></div>
                     </div>
                </div>
            </div>

            {/* Connection Status */}
             <div className="flex flex-col items-center gap-1">
                 <div className="text-[var(--color-slate-400)] text-xs font-medium text-center">O sistema não reconhece</div>
                 <HelpCircle className="text-[var(--color-slate-300)]" />
                 <div className="text-[10px] text-[var(--color-slate-400)] max-w-[120px] text-center leading-tight">
                    Para o sistema, 675 é diferente de 998811
                 </div>
             </div>

            {/* New Platform */}
            <div className="flex-1 w-full bg-[var(--primary-50)] p-4 rounded-[var(--radius-xl)] border border-[var(--primary-100)]">
                <div className="text-[var(--primary-800)] font-bold text-xs uppercase mb-2">Nova Plataforma</div>
                <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-white rounded border flex items-center justify-center text-lg">👟</div>
                     <div>
                        <div className="font-bold">Tênis Corrida</div>
                        <div className="font-mono text-xs">ID: <span className="bg-white px-1 rounded border">998811</span></div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

// --- STEP 2: PREPARATION ---
export const StepPreparation = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="space-y-4">
      <DsBadge variant="brand">Passo 2: Extração de Dados</DsBadge>
      <DsH2>Gerando a Base da Migração</DsH2>
      <DsP>
        O arquivo que você vai exportar agora contém <strong>todos os seus produtos</strong> e será a base que você editará. Sem esse arquivo, não é possível prosseguir.
      </DsP>
    </div>

    {/* WARNING BOX: DO NOT ADD ROWS */}
    <div className="bg-[var(--color-red-50)] p-5 rounded-[var(--radius-xl)] border border-[var(--color-red-200)] flex gap-4">
        <div className="bg-white p-2 rounded-full h-fit text-[var(--color-red-600)] shadow-sm shrink-0">
            <ShieldAlert size={24} />
        </div>
        <div>
            <h4 className="font-bold text-[var(--color-red-800)] text-lg mb-1">Regra Crítica: Nunca Adicione Linhas</h4>
            <p className="text-sm text-[var(--color-red-800)] leading-relaxed">
                Esta planilha representa o banco de dados da RA Reviews. 
                <strong> Não adicione produtos novos manualmente </strong> nesta planilha. Se um produto não estava na base exportada, ele não tem histórico de reviews para migrar. 
                Inserir linhas novas causará erro no processamento.
            </p>
        </div>
    </div>

    {/* INSTRUCTION: Remove New Products */}
    <div className="bg-[var(--secondary-50)] p-5 rounded-[var(--radius-xl)] border border-[var(--secondary-200)] flex gap-4">
        <div className="bg-white p-2 rounded-full h-fit text-[var(--secondary-600)] shadow-sm shrink-0">
            <FilterX size={24} />
        </div>
        <div>
            <h4 className="font-bold text-[var(--secondary-800)] text-lg mb-1">Limpeza de Produtos Novos</h4>
            <p className="text-sm text-[var(--secondary-800)] leading-relaxed">
                Como você já integrou a nova plataforma, o arquivo exportado conterá também os <strong>produtos novos (com IDs novos)</strong> que já caíram no nosso sistema.
                <br/>
                <span className="font-bold underline decoration-2 decoration-[var(--secondary-400)]">Você deve remover (excluir) essas linhas da planilha.</span> Não migramos produtos que já nasceram na nova plataforma.
            </p>
        </div>
    </div>

    <div className="space-y-4 bg-white border border-[var(--color-slate-200)] rounded-[var(--radius-xl)] p-6 shadow-sm">
      <h3 className="font-bold text-[var(--foreground)] font-[var(--font-sans-2)] text-lg border-b border-[var(--color-slate-100)] pb-4 mb-4">
        Como gerar seu arquivo base no Painel RA Reviews:
      </h3>
      <ol className="space-y-8 relative border-l-2 border-[var(--color-slate-200)] ml-3 pl-8 py-2">
        <li className="relative group">
          <span className="absolute -left-[2.7rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-[var(--color-slate-200)] text-[var(--color-slate-500)] group-hover:border-[var(--primary-500)] group-hover:text-[var(--primary-700)] font-bold text-sm transition-colors">1</span>
          <h4 className="font-bold text-[var(--foreground)]">Acesse o Menu "Exportar Dados"</h4>
          <p className="text-sm text-[var(--color-slate-500)] mt-1">
            No menu lateral esquerdo do seu painel administrativo atual.
          </p>
        </li>
        <li className="relative group">
          <span className="absolute -left-[2.7rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-[var(--color-slate-200)] text-[var(--color-slate-500)] group-hover:border-[var(--primary-500)] group-hover:text-[var(--primary-700)] font-bold text-sm transition-colors">2</span>
          <h4 className="font-bold text-[var(--foreground)]">Configure o Filtro</h4>
          <div className="mt-2 bg-[var(--color-slate-50)] p-3 rounded-lg border border-[var(--color-slate-200)] text-sm grid gap-2">
              <div className="flex justify-between">
                  <span className="text-[var(--color-slate-500)]">Tipo:</span>
                  <span className="font-medium bg-white px-2 py-0.5 rounded border border-[var(--color-slate-200)]">Todos os produtos da empresa</span>
              </div>
              <div className="flex justify-between">
                  <span className="text-[var(--color-slate-500)]">Período:</span>
                  <span className="font-medium bg-white px-2 py-0.5 rounded border border-[var(--color-slate-200)]">Todo o período</span>
              </div>
          </div>
        </li>
        <li className="relative group">
          <span className="absolute -left-[2.7rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-[var(--color-slate-200)] text-[var(--color-slate-500)] group-hover:border-[var(--primary-500)] group-hover:text-[var(--primary-700)] font-bold text-sm transition-colors">3</span>
          <h4 className="font-bold text-[var(--foreground)]">Salve o Arquivo</h4>
          <p className="text-sm text-[var(--color-slate-500)] mt-1">
            Você receberá um link por e-mail. Baixe e salve como <code>migracao_base.csv</code>.
          </p>
        </li>
      </ol>
    </div>
    
    <div className="bg-[var(--color-yellow-50)] p-4 rounded-[var(--radius-xl)] border border-[var(--color-yellow-800)]/20 flex gap-3">
        <AlertTriangle className="text-[var(--color-yellow-800)] shrink-0" size={20} />
        <div>
            <strong className="text-[var(--color-yellow-800)] text-sm">Política de Uso</strong>
            <p className="text-xs text-[var(--color-yellow-800)] mt-1">
                Lembre-se: Cada cliente tem direito a realizar este processo de migração assistida <strong>apenas UMA vez</strong> durante todo o tempo de contrato. Garanta que os dados estejam corretos.
            </p>
        </div>
    </div>
  </div>
);

// --- STEP 3: SPREADSHEET ---
export const StepSpreadsheet = () => {
  const scrollToExample = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.animate([
        { backgroundColor: 'var(--primary-100)' },
        { backgroundColor: 'transparent' }
      ], {
        duration: 2500,
        easing: 'ease-out'
      });
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-4">
        <DsBadge variant="brand">Passo 3: Mão na Massa</DsBadge>
        <DsH2>Regras de Ouro e Preenchimento</DsH2>
        <DsP>
            Abra o arquivo que você baixou. Você verá colunas com dados antigos. Sua única tarefa é preencher as colunas de destino com atenção aos detalhes.
        </DsP>
        </div>

        {/* CHECKLIST: Is Integration Ready? */}
        <div className="bg-[var(--secondary-50)] border border-[var(--secondary-200)] rounded-[var(--radius-2xl)] p-5">
            <h3 className="font-bold text-[var(--secondary-800)] text-lg mb-3 flex items-center gap-2">
                <BrainCircuit size={20} /> Antes de preencher: Os novos IDs já existem?
            </h3>
            <p className="text-sm text-[var(--secondary-800)] mb-4">
                Para que a migração funcione, a RA Reviews já precisa estar recebendo dados da sua nova plataforma. Verifique:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
                 <div className="bg-white p-3 rounded-lg border border-[var(--secondary-200)] flex items-start gap-3">
                    <ShoppingBag className="text-[var(--secondary-600)] shrink-0 mt-1" size={18} />
                    <div className="text-sm">
                        <strong className="block text-[var(--secondary-900)]">Novos Pedidos no Painel</strong>
                        <span className="text-[var(--secondary-700)] text-xs">Vá ao painel da RA Reviews. Já existem pedidos com origem da nova loja entrando?</span>
                    </div>
                 </div>
                 <div className="bg-white p-3 rounded-lg border border-[var(--secondary-200)] flex items-start gap-3">
                    <LayoutTemplate className="text-[var(--secondary-600)] shrink-0 mt-1" size={18} />
                    <div className="text-sm">
                        <strong className="block text-[var(--secondary-900)]">Widgets no Site</strong>
                        <span className="text-[var(--secondary-700)] text-xs">As estrelas e reviews já aparecem visualmente na nova loja (mesmo que vazios)?</span>
                    </div>
                 </div>
            </div>
        </div>

        {/* CRITICAL RULES SECTION */}
        <div className="grid md:grid-cols-2 gap-6">
            {/* Forbidden Case */}
            <div className="bg-[var(--color-red-50)] border border-[var(--color-red-100)] rounded-[var(--radius-xl)] p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 bg-white/50 rounded-bl-[var(--radius-lg)] border-b border-l border-[var(--color-red-100)]">
                    <X className="text-[var(--color-red-600)]" size={24} />
                </div>
                <h3 className="font-bold text-[var(--color-red-800)] text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Split size={18} /> Proibido (1 para N)
                </h3>
                <p className="text-sm text-[var(--color-red-700)] font-medium mb-4">
                    Um produto antigo <strong>NÃO pode</strong> se transformar em vários novos.
                </p>
                <div className="bg-white p-3 rounded-[var(--radius-lg)] text-xs space-y-2 border border-[var(--color-red-100)]">
                    <p className="text-[var(--color-slate-500)]">Exemplo Errado:</p>
                    <div className="flex items-center gap-2">
                        <span className="bg-[var(--color-slate-100)] px-2 py-1 rounded text-[var(--color-slate-600)] line-through">Camiseta Antiga</span>
                        <ArrowRight size={14} className="text-[var(--color-slate-400)]" />
                        <div className="flex flex-col gap-1">
                            <span className="bg-[var(--color-red-100)] px-2 py-1 rounded text-[var(--color-red-700)] font-bold">Camiseta Azul</span>
                            <span className="bg-[var(--color-red-100)] px-2 py-1 rounded text-[var(--color-red-700)] font-bold">Camiseta Vermelha</span>
                        </div>
                    </div>
                </div>
                <p className="text-[10px] text-[var(--color-red-700)] mt-2">
                    O sistema precisa de um destino único para os reviews antigos.
                </p>
            </div>

            {/* Allowed Case */}
            <div className="bg-[var(--primary-50)] border border-[var(--primary-100)] rounded-[var(--radius-xl)] p-5 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 bg-white/50 rounded-bl-[var(--radius-lg)] border-b border-l border-[var(--primary-100)]">
                    <CheckCircle2 className="text-[var(--primary-600)]" size={24} />
                </div>
                <h3 className="font-bold text-[var(--primary-800)] text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Merge size={18} /> Permitido (N para 1)
                </h3>
                <p className="text-sm text-[var(--primary-700)] font-medium mb-4">
                    Vários produtos antigos <strong>PODEM</strong> ser migrados para um único novo.
                </p>
                 <div className="bg-white p-3 rounded-[var(--radius-lg)] text-xs space-y-2 border border-[var(--primary-100)]">
                    <p className="text-[var(--color-slate-500)]">Exemplo Correto (Agrupamento):</p>
                    <div className="flex items-center gap-2">
                         <div className="flex flex-col gap-1">
                            <span className="bg-[var(--color-slate-100)] px-2 py-1 rounded text-[var(--color-slate-600)]">Antigo 37</span>
                            <span className="bg-[var(--color-slate-100)] px-2 py-1 rounded text-[var(--color-slate-600)]">Antigo 39</span>
                        </div>
                        <ArrowRight size={14} className="text-[var(--color-slate-400)]" />
                        <span className="bg-[var(--primary-100)] px-2 py-1 rounded text-[var(--primary-700)] font-bold">Novo Modelo Único</span>
                    </div>
                </div>
            </div>
        </div>

        {/* ALERT: Technical Details (UPDATED: SLATE/GREY) */}
        <div className="bg-[var(--color-slate-100)] border border-[var(--color-slate-200)] rounded-[var(--radius-xl)] p-5">
            <h3 className="font-bold text-[var(--color-slate-700)] flex items-center gap-2 mb-3">
                <AlertOctagon size={20} /> Cuidado com o Excel!
            </h3>
            <p className="text-sm text-[var(--color-slate-600)] mb-4 leading-relaxed">
                O Excel costuma "estragar" IDs numéricos grandes ou que começam com zero. <br/>
                Ex: O ID <code>00123</code> vira <code>123</code> e o ID <code>99999999999</code> vira <code>9.99E+10</code>.
            </p>
            <div className="bg-white/60 p-3 rounded-lg text-xs font-medium text-[var(--color-slate-600)] border border-[var(--color-slate-300)]/30">
                <strong>Dica de Ouro:</strong> Se seus IDs novos possuem letras ou começam com zero, formate a coluna C como "Texto" antes de digitar ou use o Google Sheets para editar.
            </div>
        </div>

        {/* DETAILED RULES & OBSERVATIONS SECTION (UPDATED: YELLOW/ATTENTION) */}
        <div className="bg-[var(--color-yellow-50)] border border-[var(--color-yellow-200)] rounded-[var(--radius-2xl)] p-6 shadow-sm">
            <h3 className="font-bold text-[var(--color-yellow-800)] font-[var(--font-sans-2)] text-xl mb-6 flex items-center gap-2">
                <BookOpen size={24} className="text-[var(--color-yellow-600)]" />
                Regras e Observações Importantes
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Rule Block 0: NO NEW LINES */}
                <div className="space-y-2 md:col-span-2 bg-white/80 p-3 rounded-lg border border-[var(--color-yellow-200)]">
                    <h4 className="font-bold text-sm text-[var(--color-yellow-800)] flex items-center gap-2 uppercase tracking-wide">
                        <ShieldAlert size={16} className="text-[var(--color-yellow-600)]" /> NÃO Crie Linhas Novas
                    </h4>
                    <p className="text-sm text-[var(--color-yellow-700)] leading-relaxed">
                        A planilha exportada é o espelho do nosso banco. Se você adicionar um produto manualmente, o ID interno da RA não existirá e a migração falhará.
                        <br/><strong>Solução:</strong> Se um produto não está na planilha, ele não será migrado.
                    </p>
                </div>

                {/* Rule Block: Remove New Products */}
                <div className="space-y-2 bg-[var(--secondary-50)]/50 p-2 rounded border border-[var(--secondary-200)]/50">
                    <h4 className="font-bold text-sm text-[var(--color-yellow-800)] flex items-center gap-2">
                        <FilterX size={16} className="text-[var(--color-yellow-600)]" /> Remover Produtos Novos
                    </h4>
                    <p className="text-sm text-[var(--color-yellow-700)] leading-relaxed">
                         Como a integração já está ativa, sua planilha pode conter <strong>produtos novos</strong> (da nova loja). Você deve <strong>remover (excluir)</strong> essas linhas. Não precisamos migrar um produto novo para ele mesmo.
                    </p>
                </div>

                {/* Rule Block 1 */}
                <div className="space-y-2">
                    <h4 className="font-bold text-sm text-[var(--color-yellow-800)] flex items-center gap-2">
                        <Trash2 size={16} className="text-[var(--color-yellow-600)]" /> Arquivamento de Produtos
                    </h4>
                    <p className="text-sm text-[var(--color-yellow-700)] leading-relaxed">
                        Se um produto não será migrado, deve ser arquivado. Preencha a coluna <strong>Novo código</strong> com <code>null</code> e a coluna <strong>Ação</strong> com <code>archive</code>.
                    </p>
                </div>

                {/* Rule Block 2 */}
                <div className="space-y-2">
                    <h4 className="font-bold text-sm text-[var(--color-yellow-800)] flex items-center gap-2">
                        <Merge size={16} className="text-[var(--color-yellow-600)]" /> Mesclagem (Unificação)
                    </h4>
                    <p className="text-sm text-[var(--color-yellow-700)] leading-relaxed">
                        Para unir vários produtos antigos em um único novo, repita o mesmo ID Novo para todos eles.
                        <span className="block mt-1 text-[var(--color-yellow-800)] text-xs font-bold bg-white/50 p-2 rounded border border-[var(--color-yellow-200)]">
                            Nota: O produto final herdará o nome do ÚLTIMO produto listado no grupo a ser mesclado.
                        </span>
                    </p>
                </div>

                {/* Rule Block 3 */}
                <div className="space-y-2">
                    <h4 className="font-bold text-sm text-[var(--color-yellow-800)] flex items-center gap-2">
                        <ListChecks size={16} className="text-[var(--color-yellow-600)]" /> Preenchimento Obrigatório
                    </h4>
                    <p className="text-sm text-[var(--color-yellow-700)] leading-relaxed">
                        As colunas <strong>Código antigo</strong> e <strong>Novo código</strong> são obrigatórias (exceto em arquivamentos, onde o novo é 'null'). A coluna <strong>Ação</strong> só é obrigatória se for arquivar.
                    </p>
                </div>

                {/* Rule Block 5 */}
                <div className="space-y-2">
                    <h4 className="font-bold text-sm text-[var(--color-yellow-800)] flex items-center gap-2">
                        <ArrowDownUp size={16} className="text-[var(--color-yellow-600)]" /> Migrações Parciais
                    </h4>
                    <p className="text-sm text-[var(--color-yellow-700)] leading-relaxed">
                         É permitido remover linhas de produtos que você não deseja migrar ou arquivar. O sistema ignorará o que não estiver na planilha.
                    </p>
                </div>

                {/* Rule Block 6 */}
                <div className="space-y-2">
                    <h4 className="font-bold text-sm text-[var(--color-yellow-800)] flex items-center gap-2">
                        <Eraser size={16} className="text-[var(--color-yellow-600)]" /> Limpeza do Arquivo
                    </h4>
                    <ul className="text-sm text-[var(--color-yellow-700)] list-disc pl-5 space-y-2">
                        <li>Não deixe linhas em branco no meio ou no final do arquivo.</li>
                        <li><strong>IMPORTANTE:</strong> Exclua as linhas referentes aos produtos novos (que já existem na nova plataforma) para evitar duplicidade e erros.</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* SCENARIOS */}
        <div>
            <div className="flex justify-between items-end mb-4">
                <h3 className="font-bold text-[var(--foreground)] font-[var(--font-sans-2)] text-xl">
                    Cenários do Dia a Dia
                </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
                {/* Scenario 1: Simple Swap */}
                <div 
                    onClick={() => scrollToExample('ex-simple')}
                    className="group cursor-pointer bg-white rounded-[var(--radius-xl)] p-5 border border-[var(--color-slate-200)] shadow-sm hover:shadow-md hover:border-[var(--primary-300)] hover:ring-1 hover:ring-[var(--primary-300)] transition-all relative"
                    title="Clique para ver o exemplo na tabela"
                >
                    <div className="absolute top-4 right-4 text-[var(--color-slate-300)] group-hover:text-[var(--primary-500)] transition-colors">
                        <ArrowDown size={20} />
                    </div>
                    <div className="w-10 h-10 bg-[var(--primary-50)] text-[var(--primary-700)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--primary-100)] transition-colors">
                        <RefreshCw size={20} />
                    </div>
                    <h4 className="font-bold text-[var(--primary-800)] mb-2"> Troca Simples</h4>
                    <p className="text-xs text-[var(--color-slate-500)] mb-4">
                        O produto existe nas duas lojas, mas o código mudou.
                    </p>
                    <div className="bg-[var(--color-slate-50)] rounded-lg p-3 text-xs border border-[var(--color-slate-100)] opacity-75 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-center mb-1">
                            <span className="text-[var(--color-slate-400)]">Antigo</span>
                            <span className="font-mono line-through decoration-red-400">100</span>
                        </div>
                        <div className="flex justify-between items-center font-bold text-[var(--primary-700)]">
                            <span>Novo</span>
                            <span className="font-mono">AB-200</span>
                        </div>
                    </div>
                     <div className="mt-3 pt-3 border-t border-[var(--color-slate-100)] flex items-center text-xs font-bold text-[var(--primary-600)] opacity-60 group-hover:opacity-100 transition-opacity">
                        Ver na tabela <ArrowDown size={14} className="ml-1" />
                    </div>
                </div>

                {/* Scenario 2: Variations */}
                <div 
                    onClick={() => scrollToExample('ex-group')}
                    className="group cursor-pointer bg-white rounded-[var(--radius-xl)] p-5 border border-[var(--color-slate-200)] shadow-sm hover:shadow-md hover:border-[var(--secondary-300)] hover:ring-1 hover:ring-[var(--secondary-300)] transition-all relative"
                    title="Clique para ver o exemplo na tabela"
                >
                     <div className="absolute top-4 right-4 text-[var(--color-slate-300)] group-hover:text-[var(--secondary-500)] transition-colors">
                        <ArrowDown size={20} />
                    </div>
                    <div className="w-10 h-10 bg-[var(--secondary-50)] text-[var(--secondary-700)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--secondary-100)] transition-colors">
                        <Layers size={20} />
                    </div>
                    <h4 className="font-bold text-[var(--secondary-800)] mb-2"> Agrupamento</h4>
                    <p className="text-xs text-[var(--color-slate-500)] mb-4">
                        Vários produtos antigos viraram variações de um único pai.
                    </p>
                    <div className="bg-[var(--color-slate-50)] rounded-lg p-3 text-xs border border-[var(--color-slate-100)] opacity-75 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-center mb-1">
                            <span className="text-[var(--color-slate-400)]">Antigo 37</span>
                            <span className="font-mono text-[var(--secondary-700)]">PAI-01</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[var(--color-slate-400)]">Antigo 38</span>
                            <span className="font-mono font-bold text-[var(--secondary-700)]">PAI-01</span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-[var(--color-slate-100)] flex items-center text-xs font-bold text-[var(--secondary-600)] opacity-60 group-hover:opacity-100 transition-opacity">
                        Ver na tabela <ArrowDown size={14} className="ml-1" />
                    </div>
                </div>

                {/* Scenario 3: Archive */}
                <div 
                    onClick={() => scrollToExample('ex-archive')}
                    className="group cursor-pointer bg-white rounded-[var(--radius-xl)] p-5 border border-[var(--color-slate-200)] shadow-sm hover:shadow-md hover:border-[var(--color-slate-400)] hover:ring-1 hover:ring-[var(--color-slate-400)] transition-all relative"
                    title="Clique para ver o exemplo na tabela"
                >
                     <div className="absolute top-4 right-4 text-[var(--color-slate-300)] group-hover:text-[var(--color-slate-600)] transition-colors">
                        <ArrowDown size={20} />
                    </div>
                    <div className="w-10 h-10 bg-[var(--color-slate-100)] text-[var(--color-slate-600)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--color-slate-200)] transition-colors">
                        <Trash2 size={20} />
                    </div>
                    <h4 className="font-bold text-[var(--foreground)] mb-2"> Limpeza</h4>
                    <p className="text-xs text-[var(--color-slate-500)] mb-4">
                        O produto saiu de linha e não existirá na nova loja.
                    </p>
                    <div className="bg-[var(--color-slate-50)] rounded-lg p-3 text-xs border border-[var(--color-slate-100)] opacity-75 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-center mb-1">
                            <span className="text-[var(--color-slate-400)]">Novo ID</span>
                            <span className="font-mono text-[var(--color-slate-400)] italic">null</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[var(--color-slate-400)]">Ação</span>
                            <span className="font-mono font-bold bg-[var(--color-slate-200)] px-1 rounded">archive</span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-[var(--color-slate-100)] flex items-center text-xs font-bold text-[var(--color-slate-600)] opacity-60 group-hover:opacity-100 transition-opacity">
                        Ver na tabela <ArrowDown size={14} className="ml-1" />
                    </div>
                </div>
            </div>
        </div>

        {/* EXTENDED Table Example */}
        <div className="border border-[var(--color-slate-200)] rounded-[var(--radius-2xl)] overflow-hidden shadow-sm bg-white mt-8">
        <div className="bg-[var(--color-slate-50)] px-6 py-4 border-b border-[var(--color-slate-200)] flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <div>
                <span className="font-bold text-sm text-[var(--color-slate-700)] font-[var(--font-sans-2)] block">Exemplo Completo da Planilha Final</span>
                <span className="text-xs text-[var(--color-slate-400)]">Observe os diferentes tipos de preenchimento</span>
            </div>
            <div className="flex gap-2">
                <DsBadge variant="warning">CSV UTF-8</DsBadge>
                <DsBadge variant="info">Colunas Obrigatórias</DsBadge>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-[var(--color-slate-500)] bg-[var(--color-slate-50)]/50">
                <tr>
                <th className="px-4 py-3 font-medium border-b border-[var(--color-slate-200)] text-xs uppercase tracking-wider">A: Nome (Ref)</th>
                <th className="px-4 py-3 font-medium border-b border-[var(--color-slate-200)] text-xs uppercase tracking-wider">
                    <DsTooltip 
                        term="B: ID Antigo" 
                        definition="O código original do produto na plataforma anterior. Já vem preenchido e não deve ser alterado." 
                    />
                </th>
                <th className="px-4 py-3 font-bold text-[var(--primary-700)] bg-[var(--primary-50)] border-b-2 border-[var(--primary-200)] text-xs uppercase tracking-wider">
                    <DsTooltip 
                        term="C: ID Novo" 
                        definition="O código correspondente na nova loja. Aceita números e letras. Preencha exatamente como está no novo ERP." 
                    />
                </th>
                <th className="px-4 py-3 font-medium border-b border-[var(--color-slate-200)] text-xs uppercase tracking-wider">
                    <DsTooltip 
                        term="D: Ação" 
                        definition="Opcional. Deixe em branco para migrar ou escreva 'archive' para não exibir reviews deste produto." 
                    />
                </th>
                <th className="px-4 py-3 font-medium border-b border-[var(--color-slate-200)] text-xs uppercase tracking-wider text-[var(--color-slate-400)]">Explicação (Visual)</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-slate-100)]">
                {/* Row 1: Simple Numeric */}
                <tr id="ex-simple" className="hover:bg-[var(--color-slate-50)] transition-colors group">
                <td className="px-4 py-3 text-[var(--color-slate-700)]">Cadeira Office</td>
                <td className="px-4 py-3 font-mono text-[var(--color-slate-500)]">100</td>
                <td className="px-4 py-3 font-mono font-bold bg-[var(--primary-50)]/30 text-[var(--primary-700)] border-x border-[var(--primary-100)]">55402</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)]">-</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)] text-xs">Migração normal de ID numérico.</td>
                </tr>
                {/* Row 2: Alphanumeric */}
                <tr className="hover:bg-[var(--color-slate-50)] transition-colors group">
                <td className="px-4 py-3 text-[var(--color-slate-700)]">Mesa Vidro</td>
                <td className="px-4 py-3 font-mono text-[var(--color-slate-500)]">200</td>
                <td className="px-4 py-3 font-mono font-bold bg-[var(--primary-50)]/30 text-[var(--primary-700)] border-x border-[var(--primary-100)]">MESA-V-120</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)]">-</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)] text-xs">ID da nova loja contém letras/traços.</td>
                </tr>
                {/* Row 3: Leading Zero */}
                <tr className="hover:bg-[var(--color-slate-50)] transition-colors group">
                <td className="px-4 py-3 text-[var(--color-slate-700)]">Luminária</td>
                <td className="px-4 py-3 font-mono text-[var(--color-slate-500)]">300</td>
                <td className="px-4 py-3 font-mono font-bold bg-[var(--primary-50)]/30 text-[var(--primary-700)] border-x border-[var(--primary-100)]">00551</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)]">-</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)] text-xs">ID começa com zero (cuidado com Excel).</td>
                </tr>
                {/* Row 4: Grouping */}
                <tr id="ex-group" className="hover:bg-[var(--color-slate-50)] transition-colors group">
                <td className="px-4 py-3 text-[var(--color-slate-700)]">Tênis Red 37</td>
                <td className="px-4 py-3 font-mono text-[var(--color-slate-500)]">T-37</td>
                <td className="px-4 py-3 font-mono font-bold bg-[var(--primary-50)]/30 text-[var(--primary-700)] border-x border-[var(--primary-100)]">TENIS-RED</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)]">-</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)] text-xs border-l-2 border-[var(--secondary-300)] pl-2">Variação apontando p/ Pai.</td>
                </tr>
                <tr className="hover:bg-[var(--color-slate-50)] transition-colors group">
                <td className="px-4 py-3 text-[var(--color-slate-700)]">Tênis Red 38</td>
                <td className="px-4 py-3 font-mono text-[var(--color-slate-500)]">T-38</td>
                <td className="px-4 py-3 font-mono font-bold bg-[var(--primary-50)]/30 text-[var(--primary-700)] border-x border-[var(--primary-100)]">TENIS-RED</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)]">-</td>
                <td className="px-4 py-3 text-[var(--color-slate-400)] text-xs border-l-2 border-[var(--secondary-300)] pl-2">Variação apontando p/ Pai.</td>
                </tr>
                {/* Row 5: Archive */}
                <tr id="ex-archive" className="hover:bg-[var(--color-slate-50)] transition-colors group">
                <td className="px-4 py-3 text-[var(--color-slate-700)] opacity-50">Antigo Inverno 2018</td>
                <td className="px-4 py-3 font-mono text-[var(--color-slate-500)] opacity-50">999</td>
                <td className="px-4 py-3 font-mono text-[var(--color-slate-400)] bg-[var(--primary-50)]/30 border-x border-[var(--primary-100)] italic">null</td>
                <td className="px-4 py-3 text-[var(--color-slate-500)] font-mono"><span className="bg-[var(--color-slate-200)] px-2 py-1 rounded text-xs font-bold text-[var(--color-slate-700)]">archive</span></td>
                <td className="px-4 py-3 text-[var(--color-slate-400)] text-xs">Produto excluído. Reviews serão arquivados.</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
  );
};

// --- STEP 4: TERM (ATUALIZADO PARA FLUXO DE AUTOMAÇÃO) ---
export const StepTerm = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <DsBadge variant="brand">Passo 4: Fluxo de Assinatura</DsBadge>
        <DsH2>Como funciona a oficialização?</DsH2>
        <DsP>
          Para garantir a integridade dos seus dados e a segurança jurídica de ambas as partes, a migração segue um fluxo automatizado de validação e assinatura.
        </DsP>
      </div>
  
      <div className="grid md:grid-cols-2 gap-6">
          <DsCard className="border-t-4 border-t-[var(--primary-500)] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[var(--primary-50)] rounded-lg text-[var(--primary-600)]">
                      <Zap size={20} />
                  </div>
                  <h4 className="font-bold text-[var(--primary-800)]">1. Automação Pós-Envio</h4>
              </div>
              <p className="text-sm text-[var(--color-slate-600)] leading-relaxed">
                  Ao enviar o formulário no próximo passo, sua planilha passará por uma <strong>segunda validação automática</strong> interna. Nosso sistema confere a consistência técnica final do arquivo.
              </p>
          </DsCard>

          <DsCard className="border-t-4 border-t-[var(--secondary-500)] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[var(--secondary-50)] rounded-lg text-[var(--secondary-600)]">
                      <MailCheck size={20} />
                  </div>
                  <h4 className="font-bold text-[var(--secondary-800)]">2. Termo de Aceite</h4>
              </div>
              <p className="text-sm text-[var(--color-slate-600)] leading-relaxed">
                  Se tudo estiver correto na validação, o sistema gera o <strong>Termo de Aceite</strong> e o envia automaticamente para o e-mail cadastrado no formulário para assinatura digital.
              </p>
          </DsCard>
      </div>

      <div className="bg-[var(--color-slate-900)] text-white p-6 rounded-[var(--radius-2xl)] relative overflow-hidden shadow-xl">
          <div className="flex items-start gap-4 relative z-10">
              <div className="p-3 bg-white/10 rounded-full">
                  <FileSignature size={24} className="text-[var(--secondary-400)]" />
              </div>
              <div>
                  <h4 className="font-bold text-lg mb-2">A migração só ocorre após a assinatura</h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                      A execução técnica da migração no banco de dados <strong>só será iniciada de fato</strong> depois que o Termo estiver assinado pelo responsável. Sem a assinatura, os dados permanecem inalterados.
                  </p>
              </div>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10">
              <CheckCircle2 size={160} />
          </div>
      </div>
      
      <div className="bg-[var(--color-yellow-50)] p-4 rounded-[var(--radius-xl)] border border-[var(--color-yellow-200)] flex gap-3">
          <Clock className="text-[var(--color-yellow-800)] shrink-0" size={20} />
          <p className="text-xs text-[var(--color-yellow-800)] leading-relaxed">
              <strong>Tempo estimado:</strong> Verifique sua caixa de entrada e spam após o envio. O e-mail com o termo costuma ser enviado poucos minutos após a validação da automação interna.
          </p>
      </div>
    </div>
);
