/**
 * Traduções em Português (Brasil)
 */
import { TranslationKeys } from '../types';

export const ptBR: TranslationKeys = {
  app: {
    hero: {
      title: 'Sua reputação não pode começar do zero',
      description: 'Cada review conquistado é um ativo valioso do seu negócio. Garanta a migração segura do seu histórico e mantenha a confiança dos seus clientes intacta na nova plataforma.',
    },
    footer: {
      copyright: '© 2025 RA Reviews. Todos os direitos reservados.',
    },
    navigation: {
      back: 'Voltar',
      next: 'Próximo',
      step: 'Passo',
      of: 'de',
    },
  },
  header: {
    title: 'Guia de Migração',
  },
  sidebar: {
    expandMenu: 'Expandir menu',
    collapseMenu: 'Recolher menu',
    completeAllSteps: 'Complete todos os passos antes de iniciar a migração.',
    stepTitles: {
      step1: 'Entendimento',
      step2: 'Preparação',
      step3: 'A Planilha',
      step4: 'Termo & Regras',
      step5: 'Validar e Enviar',
    },
  },
  steps: {
    step1: {
      stepTitle: 'Entendimento Completo',
      heading: 'O que é a Migração de Reviews?',
      description: 'A migração é um processo técnico de "Sincronização de Identidade". Para a RA Reviews, um produto é identificado por um código único (ID). Quando você troca de plataforma, esse código geralmente muda, mesmo que o nome e a foto do produto continuem iguais.',
      whyFill: {
        title: 'Por que eu preciso preencher a planilha?',
        before: {
          title: 'Como era antes (Manual)',
          description: 'Nossa equipe tentava validar linha por linha. Como não conhecemos seu catálogo, isso gerava dúvidas ("Esse Tênis X é o mesmo que Tênis Y?"), filas de espera e o processo levava até 60 dias.',
        },
        now: {
          title: 'Como é agora (Automático)',
          description: 'Transferimos a inteligência para quem entende do produto: você. Ninguém melhor que sua equipe para apontar que o "Produto A" virou o "Produto B".',
          result: 'Resultado: Sem fila de espera. Migração em poucos dias.',
        },
      },
      whenToMigrate: {
        when: {
          title: 'Quando fazer?',
          items: [
            'Troca de plataforma de E-commerce (ex: Vtex para Shopify, Nuvemshop para Wake).',
            'Mudança de ERP que gera novos códigos de produto na integração.',
            'Recadastramento manual massivo de produtos com novos códigos.',
          ],
        },
        whenNot: {
          title: 'Quando NÃO é necessário?',
          items: [
            'Redesign de layout (Front-end) mantendo a mesma plataforma.',
            'Atualização de versão da plataforma (ex: Vtex CMS para Vtex IO) se os IDs forem mantidos.',
            'Mudança apenas de domínio (URL) da loja.',
          ],
        },
      },
      idLogic: {
        title: 'A Lógica dos IDs',
        description: 'A RA Reviews não usa o "Nome" ou "SKU Comercial" para vincular reviews, usamos o ID de Produto enviado na integração.',
        oldPlatform: 'Plataforma Antiga',
        newPlatform: 'Nova Plataforma',
        systemDoesNotRecognize: 'O sistema não reconhece',
        systemExplanation: 'Para o sistema, 675 é diferente de 998811',
        exampleProduct: 'Tênis Corrida',
        exampleOldId: '675',
        exampleNewId: '998811',
      },
    },
    step2: {
      stepTitle: 'Extração de Dados',
      heading: 'Gerando a Base da Migração',
      description: 'O arquivo que você vai exportar agora contém todos os seus produtos e será a base que você editará. Sem esse arquivo, não é possível prosseguir.',
      criticalRule: {
        title: 'Regra Crítica: Nunca Adicione Linhas',
        description: 'Esta planilha representa o banco de dados da RA Reviews. Não adicione produtos novos manualmente nesta planilha. Se um produto não estava na base exportada, ele não tem histórico de reviews para migrar. Inserir linhas novas causará erro no processamento.',
      },
      removeNewProducts: {
        title: 'Limpeza de Produtos Novos',
        description: 'Como você já integrou a nova plataforma, o arquivo exportado conterá também os produtos novos (com IDs novos) que já caíram no nosso sistema.',
        action: 'Você deve remover (excluir) essas linhas da planilha. Não migramos produtos que já nasceram na nova plataforma.',
      },
      instructions: {
        title: 'Como gerar seu arquivo base no Painel RA Reviews:',
        step1: {
          title: 'Acesse o Menu "Exportar Dados"',
          description: 'No menu lateral esquerdo do seu painel administrativo atual.',
        },
        step2: {
          title: 'Configure o Filtro',
          tipo: 'Todos os produtos da empresa',
          periodo: 'Todo o período',
        },
        step3: {
          title: 'Salve o Arquivo',
          description: 'Você receberá um link por e-mail. Baixe e salve como migracao_base.csv.',
        },
      },
      policy: {
        title: 'Política de Uso',
        description: 'Lembre-se: Cada cliente tem direito a realizar este processo de migração assistida apenas UMA vez durante todo o tempo de contrato. Garanta que os dados estejam corretos.',
      },
    },
    step3: {
      stepTitle: 'Mão na Massa',
      heading: 'Regras de Ouro e Preenchimento',
      description: 'Abra o arquivo que você baixou. Você verá colunas com dados antigos. Sua única tarefa é preencher as colunas de destino com atenção aos detalhes.',
      integrationChecklist: {
        title: 'Antes de preencher: Os novos IDs já existem?',
        description: 'Para que a migração funcione, a RA Reviews já precisa estar recebendo dados da sua nova plataforma. Verifique:',
        newOrders: {
          title: 'Novos Pedidos no Painel',
          description: 'Vá ao painel da RA Reviews. Já existem pedidos com origem da nova loja entrando?',
        },
        widgets: {
          title: 'Widgets no Site',
          description: 'As estrelas e reviews já aparecem visualmente na nova loja (mesmo que vazios)?',
        },
      },
      criticalRules: {
        forbidden: {
          title: 'Proibido (1 para N)',
          description: 'Um produto antigo NÃO pode se transformar em vários novos.',
          example: 'Exemplo Errado:',
          note: 'O sistema precisa de um destino único para os reviews antigos.',
        },
        allowed: {
          title: 'Permitido (N para 1)',
          description: 'Vários produtos antigos PODEM ser migrados para um único novo.',
          example: 'Exemplo Correto (Agrupamento):',
        },
      },
      excelAlert: {
        title: 'Cuidado com o Excel!',
        description: 'O Excel costuma "estragar" IDs numéricos grandes ou que começam com zero. Ex: O ID 00123 vira 123 e o ID 99999999999 vira 9.99E+10.',
        tip: 'Dica de Ouro: Se seus IDs novos possuem letras ou começam com zero, formate a coluna C como "Texto" antes de digitar ou use o Google Sheets para editar.',
      },
      detailedRules: {
        title: 'Regras e Observações Importantes',
        rules: [
          {
            title: 'NÃO Crie Linhas Novas',
            description: 'A planilha exportada é o espelho do nosso banco. Se você adicionar um produto manualmente, o ID interno da RA não existirá e a migração falhará.',
            solution: 'Se um produto não está na planilha, ele não será migrado.',
          },
          {
            title: 'Remover Produtos Novos',
            description: 'Como a integração já está ativa, sua planilha pode conter produtos novos (da nova loja). Você deve remover (excluir) essas linhas. Não precisamos migrar um produto novo para ele mesmo.',
          },
          {
            title: 'Arquivamento de Produtos',
            description: 'Se um produto não será migrado, deve ser arquivado. Preencha a coluna Novo código com null e a coluna Ação com archive.',
          },
          {
            title: 'Mesclagem (Unificação)',
            description: 'Para unir vários produtos antigos em um único novo, repita o mesmo ID Novo para todos eles.',
            note: 'O produto final herdará o nome do ÚLTIMO produto listado no grupo a ser mesclado.',
          },
          {
            title: 'Preenchimento Obrigatório',
            description: 'As colunas Código antigo e Novo código são obrigatórias (exceto em arquivamentos, onde o novo é \'null\'). A coluna Ação só é obrigatória se for arquivar.',
          },
          {
            title: 'Migrações Parciais',
            description: 'É permitido remover linhas de produtos que você não deseja migrar ou arquivar. O sistema ignorará o que não estiver na planilha.',
          },
          {
            title: 'Limpeza do Arquivo',
            items: [
              'Não deixe linhas em branco no meio ou no final do arquivo.',
              'IMPORTANTE: Exclua as linhas referentes aos produtos novos (que já existem na nova plataforma) para evitar duplicidade e erros.',
            ],
          },
        ],
      },
      scenarios: {
        title: 'Cenários do Dia a Dia',
        simple: {
          title: 'Troca Simples',
          description: 'O produto existe nas duas lojas, mas o código mudou.',
          old: 'Antigo',
          new: 'Novo',
          seeInTable: 'Ver na tabela',
        },
        grouping: {
          title: 'Agrupamento',
          description: 'Vários produtos antigos viraram variações de um único pai.',
          old37: 'Antigo 37',
          old38: 'Antigo 38',
          seeInTable: 'Ver na tabela',
        },
        cleanup: {
          title: 'Limpeza',
          description: 'O produto saiu de linha e não existirá na nova loja.',
          newId: 'Novo ID',
          action: 'Ação',
          seeInTable: 'Ver na tabela',
        },
      },
      exampleTable: {
        title: 'Exemplo Completo da Planilha Final',
        subtitle: 'Observe os diferentes tipos de preenchimento',
        columns: {
          name: 'A: Nome (Ref)',
          oldId: {
            label: 'B: ID Antigo',
            tooltip: 'O código original do produto na plataforma anterior. Já vem preenchido e não deve ser alterado.',
          },
          newId: {
            label: 'C: ID Novo',
            tooltip: 'O código correspondente na nova loja. Aceita números e letras. Preencha exatamente como está no novo ERP.',
          },
          action: {
            label: 'D: Ação',
            tooltip: 'Opcional. Deixe em branco para migrar ou escreva \'archive\' para não exibir reviews deste produto.',
          },
          explanation: 'Explicação (Visual)',
        },
        rows: {
          simple: {
            name: 'Cadeira Office',
            oldId: '100',
            newId: '55402',
            action: '-',
            explanation: 'Migração normal de ID numérico.',
          },
          alphanumeric: {
            name: 'Mesa Vidro',
            oldId: '200',
            newId: 'MESA-V-120',
            action: '-',
            explanation: 'ID da nova loja contém letras/traços.',
          },
          leadingZero: {
            name: 'Luminária',
            oldId: '300',
            newId: '00551',
            action: '-',
            explanation: 'ID começa com zero (cuidado com Excel).',
          },
          group1: {
            name: 'Tênis Red 37',
            oldId: 'T-37',
            newId: 'TENIS-RED',
            action: '-',
            explanation: 'Variação apontando p/ Pai.',
          },
          group2: {
            name: 'Tênis Red 38',
            oldId: 'T-38',
            newId: 'TENIS-RED',
            action: '-',
            explanation: 'Variação apontando p/ Pai.',
          },
          archive: {
            name: 'Antigo Inverno 2018',
            oldId: '999',
            newId: 'null',
            action: 'archive',
            explanation: 'Produto excluído. Reviews serão arquivados.',
          },
        },
        badges: {
          csv: 'CSV UTF-8',
          required: 'Colunas Obrigatórias',
        },
      },
    },
    step4: {
      stepTitle: 'Fluxo de Assinatura',
      heading: 'Como funciona a oficialização?',
      description: 'Para garantir a integridade dos seus dados e a segurança jurídica de ambas as partes, a migração segue um fluxo automatizado de validação e assinatura.',
      automation: {
        title: '1. Automação Pós-Envio',
        description: 'Ao enviar o formulário no próximo passo, sua planilha passará por uma segunda validação automática interna. Nosso sistema confere a consistência técnica final do arquivo.',
      },
      term: {
        title: '2. Termo de Aceite',
        description: 'Se tudo estiver correto na validação, o sistema gera o Termo de Aceite e o envia automaticamente para o e-mail cadastrado no formulário para assinatura digital.',
      },
      signature: {
        title: 'A migração só ocorre após a assinatura',
        description: 'A execução técnica da migração no banco de dados só será iniciada de fato depois que o Termo estiver assinado pelo responsável. Sem a assinatura, os dados permanecem inalterados.',
      },
      timeEstimate: {
        title: 'Tempo estimado:',
        description: 'Verifique sua caixa de entrada e spam após o envio. O e-mail com o termo costuma ser enviado poucos minutos após a validação da automação interna.',
      },
    },
    step5: {
      stepTitle: 'Solicitação Oficial',
      checklist: {
        title: 'Checklist Final de Segurança',
        description: 'Certifique-se de que todos os requisitos foram atendidos para evitar atrasos.',
        header: 'Checklist de Prontidão',
        intro: 'Antes de enviarmos você para o formulário de solicitação, confirme se seguiu todas as orientações técnicas:',
        items: [
          'Preenchi a planilha "de-para" corretamente seguindo o modelo.',
          'Validei se os novos IDs de produto estão corretos e sem erros de formatação.',
          'A nova plataforma já está integrada e enviando pedidos para a RA Reviews.',
          'Removi da planilha as linhas de produtos novos que já nasceram na nova plataforma.',
          'Estou ciente que a migração só inicia de fato após eu assinar o Termo que receberei por e-mail.',
        ],
        next: 'Seguir para Solicitação',
      },
      confirmation: {
        title: 'Última Confirmação',
        header: 'Declaração de Responsabilidade',
        description: 'Ao prosseguir, você confirma que revisou os dados. Erros na planilha podem causar vinculação incorreta de reviews.',
        automation: 'Após o envio, nossa automação validará seu arquivo e enviará o termo de aceite para o seu e-mail.',
        review: 'Revisar Checklist',
        confirm: 'Sim, estou seguro',
      },
      final: {
        title: 'Solicitar Migração',
        description: 'Clique no botão abaixo para preencher o formulário oficial.',
        almostThere: 'Quase lá!',
        intro: 'O último passo é preencher o formulário e anexar sua planilha. Veja o que acontece logo em seguida:',
        timeline: {
          validation: {
            title: 'Validação Interna',
            description: 'Nossa automação realiza uma segunda conferência técnica na sua planilha.',
          },
          email: {
            title: 'Termo por E-mail',
            description: 'Se tudo estiver certo, o termo de aceite é enviado para o seu e-mail.',
          },
          execution: {
            title: 'Execução Real',
            description: 'Somente após sua assinatura é que executamos a migração no banco de dados.',
          },
        },
        openForm: 'Abrir Formulário Oficial',
        deadline: 'Prazo: 48h a 72h úteis após o termo estar devidamente assinado.',
        backToChecklist: 'Voltar para o Checklist',
      },
    },
  },
};

