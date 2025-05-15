
import { Promoter } from '@/components/InactivePromotersSection';
import { FilterItem } from '@/components/FiltersList';

// Dados dos promotores inativos
export const inactivePromoters: Promoter[] = [
  {
    name: "ANA CAROLINA SOUSA ROCHA",
    reason: "Não compareceu por 30 dias",
    justification: "Sem contato",
    lastActivity: "22/04",
    region: "SPI2",
    status: "Crítico",
    details: {
      reason: "A promotora não compareceu ao trabalho por mais de 30 dias e não atendeu as ligações.",
      notes: "Tentativas de contato foram feitas nos dias 23/04, 25/04 e 29/04 sem sucesso. E-mails foram enviados mas não houve resposta.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor1.jpg",
      errors: [
        "Ausência não justificada por 30 dias consecutivos",
        "Não respondeu a 5 tentativas de contato via telefone",
        "Clientes sem atendimento relataram problemas"
      ],
      recommendations: "Recomendação: iniciar processo de substituição e verificar procedimentos de rescisão contratual."
    }
  },
  {
    name: "BEATRIZ CONCEIÇÃO DA COSTA",
    reason: "Afastamento médico",
    justification: "Atestado enviado",
    lastActivity: "15/04",
    region: "SP1",
    status: "Justificado",
    details: {
      reason: "Afastamento por motivos médicos com atestado válido.",
      notes: "Atestado médico com validade até 15/05. Retorno previsto para 16/05.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor2.jpg"
    }
  },
  {
    name: "CÁSSIO SILVA DA CONCEIÇÃO",
    reason: "Desligamento voluntário",
    justification: "Pedido de demissão",
    lastActivity: "05/04",
    region: "SUL1",
    status: "Encerrado",
    details: {
      reason: "Promotor pediu desligamento voluntário por motivos pessoais.",
      notes: "Realizou a entrega do crachá e equipamentos. Documentação de saída processada pelo RH.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor3.jpg"
    }
  },
  {
    name: "ERICK WILLIAM PROENÇA",
    reason: "Baixa performance",
    justification: "Abaixo da meta",
    lastActivity: "10/04",
    region: "Nordeste",
    status: "Em análise",
    details: {
      reason: "Performance abaixo do esperado por três meses consecutivos.",
      notes: "Reuniões de feedback realizadas em 15/02, 20/03 e 10/04. Plano de melhoria não atingiu os objetivos propostos.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor4.jpg"
    }
  },
  {
    name: "HALISSON DA SILVA SANTOS",
    reason: "Abandono de função",
    justification: "Sem comunicação",
    lastActivity: "30/03",
    region: "SP2",
    status: "Crítico",
    details: {
      reason: "Não compareceu ao trabalho por mais de 15 dias sem justificativa.",
      notes: "Processo de abandono de função iniciado pelo RH após 15 dias de ausência sem comunicação.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor5.jpg"
    }
  },
  {
    name: "INGRID STEFANI DE OLIVEIRA CORDEIRO",
    reason: "Transferência interna",
    justification: "Mudança de departamento",
    lastActivity: "12/04",
    region: "SUL2",
    status: "Encerrado",
    details: {
      reason: "Transferida para outro departamento da empresa.",
      notes: "Transferência aprovada pela gerência em 12/04. Novo departamento: Marketing.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor6.jpg"
    }
  },
  {
    name: "LUANE APARECIDA DA SILVA",
    reason: "Licença maternidade",
    justification: "Afastamento legal",
    lastActivity: "20/03",
    region: "SPI1",
    status: "Justificado",
    details: {
      reason: "Em licença maternidade desde 20/03.",
      notes: "Retorno previsto para 20/09. Documentação processada pelo RH.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor7.jpg"
    }
  },
  {
    name: "LUCAS RIBEIRO DA SILVA",
    reason: "Conflito de horário",
    justification: "Impossibilidade de agenda",
    lastActivity: "18/04",
    region: "SP3",
    status: "Em análise",
    details: {
      reason: "Conflitos recorrentes com horários estabelecidos.",
      notes: "Reunião de alinhamento marcada para 25/04 para discutir alternativas de horário.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor8.jpg"
    }
  },
  {
    name: "SHIRLEY MARTINS DA SILVA NASCIMENTO",
    reason: "Problema de saúde",
    justification: "Sem atestado formal",
    lastActivity: "14/04",
    region: "Nacional",
    status: "Pendente",
    details: {
      reason: "Relatou problemas de saúde, mas não enviou documentação médica.",
      notes: "Aguardando envio de atestado médico. Prazo final: 28/04.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor9.jpg"
    }
  },
  {
    name: "SUELLEN RIBEIRO GOMES",
    reason: "Mudança de residência",
    justification: "Relocalização",
    lastActivity: "05/04",
    region: "MG",
    status: "Encerrado",
    details: {
      reason: "Mudança para outra cidade impossibilitou continuidade.",
      notes: "Processo de desligamento amigável concluído em 05/04.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor10.jpg"
    }
  },
  {
    name: "THAMIRES SILVA RODRIGUES",
    reason: "Nova proposta",
    justification: "Oportunidade externa",
    lastActivity: "08/04",
    region: "RJ",
    status: "Encerrado",
    details: {
      reason: "Aceitou proposta de outra empresa.",
      notes: "Entrevista de desligamento realizada em 08/04. Feedback positivo sobre a experiência na empresa.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor11.jpg"
    }
  },
  {
    name: "WESLEY GONÇALVES DA SILVA MARINHO",
    reason: "Advertências múltiplas",
    justification: "Questões disciplinares",
    lastActivity: "11/04",
    region: "ES",
    status: "Crítico",
    details: {
      reason: "Recebeu 3 advertências por questões disciplinares.",
      notes: "Última advertência em 11/04 por descumprimento de procedimentos operacionais. Caso encaminhado para análise do RH.",
      imageSrc: "https://github.com/iancacamara/imagens_promotores/raw/main/promotor12.jpg",
      errors: [
        "Descumprimento de procedimentos operacionais",
        "Faltas sem justificativa prévia",
        "Conflitos com colegas de trabalho"
      ],
      recommendations: "Recomendação: avaliar continuidade do contrato conforme política disciplinar da empresa."
    }
  }
];

// Dados dos coordenadores
export const coordinators = [
  "Adriano Trindade",
  "Carla do Nascimento",
  "Djavan Amorim",
  "Jeferson Rodrigues",
  "Michael Rodrigues",
  "Nelson do Couto",
  "Miriele Elias",
  "Thales Henrique",
  "Thiago Franca"
];

// Dados da tabela de balanceamento
export const balanceTableHeaders = [
  "Promotor", 
  "Perfil", 
  "Regional", 
  "Coordenador", 
  "TT Horas Mês", 
  "Horas Excedentes", 
  "Situação", 
  "Justificativa OP"
];

export const balanceTableData = [
  {
    "Promotor": "JONATHAS ELBER PEREIRA",
    "Perfil": "promotorexpress",
    "Regional": "SPI2",
    "Coordenador": "FABIO SEVERIO DA SILVA",
    "TT Horas Mês": 528,
    "Horas Excedentes": -208,
    "Situação": "Não estava como vaga em aberto",
    "Justificativa OP": "Atualmente tem 337,5 horas, as horas a mais devido realização de retenções."
  },
  {
    "Promotor": "RICARDO GUALBERTO SANTANA",
    "Perfil": "promotorexpress",
    "Regional": "SPI2",
    "Coordenador": "FABIO SEVERIO DA SILVA",
    "TT Horas Mês": 484,
    "Horas Excedentes": -164,
    "Situação": "Não estava como vaga em aberto",
    "Justificativa OP": "Promotor realizando retenções, supervisor da região não tinha perfil de vaga aberta, em treinamento."
  },
  {
    "Promotor": "JOAO VICTOR OLIVEIRA SANTOS",
    "Perfil": "promotorexpress",
    "Regional": "SPI2",
    "Coordenador": "FABIO SEVERIO DA SILVA",
    "TT Horas Mês": 458,
    "Horas Excedentes": -138,
    "Situação": "Não estava como vaga em aberto",
    "Justificativa OP": "Mesmo caso de Ricardo: retenções + ausência de perfil aberto."
  },
  {
    "Promotor": "ERLAINE MARCIEL VAZ DA SILVEIRA",
    "Perfil": "promotorexpress",
    "Regional": "SPI2",
    "Coordenador": "FABIO SEVERIO DA SILVA",
    "TT Horas Mês": 392,
    "Horas Excedentes": -72,
    "Situação": "Não estava como vaga em aberto",
    "Justificativa OP": "Atualmente tem 333,5 horas, excedente por retenções."
  },
  {
    "Promotor": "CRISTIAN EDUARDO WEISHEINER DA SILVA",
    "Perfil": "promotor",
    "Regional": "SUL1",
    "Coordenador": "GABRIEL POLETTO TAVARES",
    "TT Horas Mês": 386,
    "Horas Excedentes": -166,
    "Situação": "Não estava como vaga em aberto",
    "Justificativa OP": "Falta de promotores na região; ajustes serão feitos."
  },
  {
    "Promotor": "JACKSON DE OLIVEIRA MOURA",
    "Perfil": "promotorexpress",
    "Regional": "SP1",
    "Coordenador": "GILMAR TEIXEIRA DA SILVA",
    "TT Horas Mês": 398,
    "Horas Excedentes": -78,
    "Situação": "",
    "Justificativa OP": "Projeto EXTREM DA RED BULL nos finais de semana."
  },
  {
    "Promotor": "ALLAN PEREIRA DE ARAUJO",
    "Perfil": "promotorexpress",
    "Regional": "SP1",
    "Coordenador": "GILMAR TEIXEIRA DA SILVA",
    "TT Horas Mês": 384,
    "Horas Excedentes": -64,
    "Situação": "",
    "Justificativa OP": "Projeto EXTREM DA RED BULL nos finais de semana."
  },
  {
    "Promotor": "VERA LUCIA SILVA VIANA",
    "Perfil": "promotorexpress",
    "Regional": "Nordeste",
    "Coordenador": "HEIDER ISBELO DE SOUSA",
    "TT Horas Mês": 438,
    "Horas Excedentes": -118,
    "Situação": "Não estava como vaga em aberto",
    "Justificativa OP": "Houve turnover; Vera assumiu os clientes até contratação do novato."
  },
  {
    "Promotor": "FRANCISCO RAIMUNDO DE CARVALHO DA SILVA",
    "Perfil": "promotorexpress",
    "Regional": "Nordeste",
    "Coordenador": "HEIDER ISBELO DE SOUSA",
    "TT Horas Mês": 420,
    "Horas Excedentes": -100,
    "Situação": "",
    "Justificativa OP": "Sendo retiradas e balanceadas horas excedentes."
  },
  {
    "Promotor": "MILTON LEITE DE PONTES NETO",
    "Perfil": "promotorexpress",
    "Regional": "Nordeste",
    "Coordenador": "HEIDER ISBELO DE SOUSA",
    "TT Horas Mês": 414,
    "Horas Excedentes": -94,
    "Situação": "",
    "Justificativa OP": "Sendo retiradas e balanceadas horas excedentes."
  },
  {
    "Promotor": "AUGUSTO ION SILVA CERQUEIRA",
    "Perfil": "promotorexpress",
    "Regional": "Nordeste",
    "Coordenador": "HEIDER ISBELO DE SOUSA",
    "TT Horas Mês": 378,
    "Horas Excedentes": -58,
    "Situação": "Não estava como vaga em aberto",
    "Justificativa OP": "Turnover; assumiu clientes até contratar o novato."
  },
  {
    "Promotor": "LUMAR JOSE KOECHE",
    "Perfil": "promotorexpress",
    "Regional": "SUL2",
    "Coordenador": "MARCOS VINICIUS OLIVEIRA DA SILVA",
    "TT Horas Mês": 522,
    "Horas Excedentes": -202,
    "Situação": "Não estava como vaga em aberto",
    "Justificativa OP": "Cobertura de vaga aberta. Fechamento das vagas equilibrará o roteiro."
  },
  {
    "Promotor": "VAGNER MOREIRA DA SILVA",
    "Perfil": "promotor",
    "Regional": "SP2",
    "Coordenador": "MICHAEL RODRIGUES COSTA DE MEIRA",
    "TT Horas Mês": 402,
    "Horas Excedentes": -182,
    "Situação": "",
    "Justificativa OP": "Com 286 atendimentos; retenção de vaga em aberto. Já removida do nome."
  },
  {
    "Promotor": "YURI MORAES ADRIANO",
    "Perfil": "promotorexpress",
    "Regional": "SP2",
    "Coordenador": "MICHAEL RODRIGUES COSTA DE MEIRA",
    "TT Horas Mês": 402,
    "Horas Excedentes": -82,
    "Situação": "",
    "Justificativa OP": "Retenção da vaga em aberto na loja do Giga Barueri."
  },
  {
    "Promotor": "ANTONIO CARLOS PINHEIRO DE OLIVEIRA",
    "Perfil": "promotorexpress",
    "Regional": "SP2",
    "Coordenador": "MICHAEL RODRIGUES COSTA DE MEIRA",
    "TT Horas Mês": 386,
    "Horas Excedentes": -66,
    "Situação": "",
    "Justificativa OP": "Com 238 atendimentos; retenção de vaga em aberto. Já removida."
  },
  {
    "Promotor": "JONATHAN ALEXSANDRO LIMA PARAISO",
    "Perfil": "promotorexpress",
    "Regional": "SP2",
    "Coordenador": "MICHAEL RODRIGUES COSTA DE MEIRA",
    "TT Horas Mês": 382,
    "Horas Excedentes": -62,
    "Situação": "",
    "Justificativa OP": "Retenção de vaga em aberto no roteiro do Anchieta."
  },
  {
    "Promotor": "MARJORIE KENIFER CORONA DE SA",
    "Perfil": "promotorexpress",
    "Regional": "SPI1",
    "Coordenador": "PAULO MANOEL MORATO JUNIOR",
    "TT Horas Mês": 384,
    "Horas Excedentes": -64,
    "Situação": "Não estava como vaga em aberto",
    "Justificativa OP": "Em processo de contratação. Documentação em andamento."
  }
];

// Dados dos filtros
export const filters: FilterItem[] = [
  {
    name: "Filtro de Bairro",
    issues: ["Linhas vazias", "-", "-SCNPJ", "com o 0"],
    status: 'error'
  },
  {
    name: "Filtro de Cidade",
    issues: ["Linhas vazias", "-", "-SCNPJ", "com a letra A"],
    status: 'error'
  },
  {
    name: "Filtro de UF",
    issues: ["Linhas vazias"],
    status: 'warning'
  },
  {
    name: "Filtro Nome da Loja",
    issues: ["Linhas vazias"],
    status: 'warning'
  },
  {
    name: "Perfil de Contratação",
    issues: ["Está vindo vazio"],
    status: 'error'
  },
  {
    name: "Filtro de Família",
    issues: ["Linhas vazias"],
    status: 'warning'
  }
];
