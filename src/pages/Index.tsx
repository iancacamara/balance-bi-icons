import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Store, 
  Clock, 
  UserCog, 
  BarChart4, 
  Filter,
  Info,
  Search
} from 'lucide-react';
import StatCard from '@/components/StatCard';
import DataTable from '@/components/DataTable';
import FiltersList from '@/components/FiltersList';
import NameList from '@/components/NameList';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import PromoterDetails from '@/components/PromoterDetails';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  // Estado para controlar o modal de detalhes
  const [selectedPromoter, setSelectedPromoter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  // Dados dos promotores inativos (dados atualizados do CSV)
  const inactivePromoters = [
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

  // Status colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Crítico': return 'bg-red-100 text-red-800';
      case 'Em análise': return 'bg-amber-100 text-amber-800';
      case 'Pendente': return 'bg-blue-100 text-blue-800';
      case 'Justificado': return 'bg-green-100 text-green-800';
      case 'Encerrado': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Função para filtrar promotores com base no termo de busca
  const filteredPromoters = inactivePromoters.filter(promoter => 
    promoter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promoter.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promoter.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promoter.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Função para copiar dados do promotor selecionado
  const copyPromoterData = (promoter: any) => {
    const dataText = `
      Promotor: ${promoter.name}
      Motivo: ${promoter.reason}
      Justificativa: ${promoter.justification}
      Última Atividade: ${promoter.lastActivity}
      Regional: ${promoter.region}
      Status: ${promoter.status}
      Detalhes: ${promoter.details.notes}
    `;
    
    navigator.clipboard.writeText(dataText).then(() => {
      toast({
        title: "Dados copiados",
        description: "Informações do promotor copiadas para a área de transferência",
      });
    }).catch(err => {
      console.error('Erro ao copiar: ', err);
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar os dados. Tente novamente.",
        variant: "destructive"
      });
    });
  };

  // Dados dos coordenadores
  const coordinators = [
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
  const balanceTableHeaders = [
    "Promotor", 
    "Perfil", 
    "Regional", 
    "Coordenador", 
    "TT Horas Mês", 
    "Horas Excedentes", 
    "Situação", 
    "Justificativa OP"
  ];

  const balanceTableData = [
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
  const filters = [
    {
      name: "Filtro de Bairro",
      issues: ["Linhas vazias", "-", "-SCNPJ", "com o 0"],
      status: 'error' as const
    },
    {
      name: "Filtro de Cidade",
      issues: ["Linhas vazias", "-", "-SCNPJ", "com a letra A"],
      status: 'error' as const
    },
    {
      name: "Filtro de UF",
      issues: ["Linhas vazias"],
      status: 'warning' as const
    },
    {
      name: "Filtro Nome da Loja",
      issues: ["Linhas vazias"],
      status: 'warning' as const
    },
    {
      name: "Perfil de Contratação",
      issues: ["Está vindo vazio"],
      status: 'error' as const
    },
    {
      name: "Filtro de Família",
      issues: ["Linhas vazias"],
      status: 'warning' as const
    }
  ];

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <h1 className="text-center md:text-left">Apresentação do B.I. de Balanceamento</h1>
      
      <section className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="mb-2 md:mb-0">1. Promotores Inativos</h2>
          <StatCard 
            icon={<Users className="h-6 w-6" />} 
            title="Total de Promotores Inativos" 
            value={inactivePromoters.length} 
            className="w-full md:w-auto"
          />
        </div>
        
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bi-muted h-4 w-4" />
          <Input 
            placeholder="Buscar promotor, motivo, regional ou status..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableCaption>Lista de promotores inativos e suas justificativas</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-bi-primary text-white">Nome do Promotor</TableHead>
                <TableHead className="bg-bi-primary text-white">Motivo</TableHead>
                <TableHead className="bg-bi-primary text-white">Justificativa</TableHead>
                <TableHead className="bg-bi-primary text-white">Última Atividade</TableHead>
                <TableHead className="bg-bi-primary text-white">Regional</TableHead>
                <TableHead className="bg-bi-primary text-white">Status</TableHead>
                <TableHead className="bg-bi-primary text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPromoters.map((promoter, index) => (
                <TableRow key={index} className={index % 2 === 1 ? 'bg-bi-hover' : ''}>
                  <TableCell className="font-medium">
                    <Button 
                      variant="link" 
                      className="p-0 h-auto font-medium text-left underline-offset-4"
                      onClick={() => setSelectedPromoter(promoter.name)}
                    >
                      {promoter.name}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <span className="cursor-help underline underline-offset-2 text-bi-primary">
                          {promoter.reason}
                        </span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">Detalhes do Motivo</h4>
                            <p className="text-sm">
                              {promoter.details.reason}
                            </p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                  <TableCell>{promoter.justification}</TableCell>
                  <TableCell>{promoter.lastActivity || "-"}</TableCell>
                  <TableCell>{promoter.region || "-"}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(promoter.status)}`}
                    >
                      {promoter.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => setSelectedPromoter(promoter.name)}
                      >
                        <Info className="h-4 w-4" />
                        Ver
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyPromoterData(promoter)}
                        className="flex items-center gap-1"
                      >
                        Copiar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      
      <section className="animate-fade-in">
        <h2>2. Alocação de Lojas</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard 
            icon={<Store className="h-6 w-6" />} 
            title="Total de Lojas Alocadas" 
            value={40}
          />
          <StatCard 
            icon={<Clock className="h-6 w-6" />} 
            title="Total de Horas" 
            value="1.026 horas"
          />
        </div>
      </section>
      
      <section className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="mb-2 md:mb-0">3. Aba de Coordenadores</h2>
          <StatCard 
            icon={<UserCog className="h-6 w-6" />} 
            title="Total de Coordenadores" 
            value={coordinators.length}
            className="w-full md:w-auto" 
          />
        </div>
        
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md mb-4">
          <p className="text-amber-800 italic">
            Ajustar a lista de coordenadores pois algumas pessoas não são coordenadores.
          </p>
        </div>
        
        <NameList names={coordinators} />
      </section>
      
      <section className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="mb-2 md:mb-0">4. Balanceamento de Horas dos Promotores</h2>
          <div className="flex items-center gap-2 text-bi-primary">
            <BarChart4 className="h-6 w-6" />
            <span className="font-semibold">Análise de Balanceamento</span>
          </div>
        </div>
        
        <DataTable 
          caption="Detalhamento das horas e justificativas dos promotores"
          headers={balanceTableHeaders}
          data={balanceTableData}
          searchable={true}
          note="*Tabela completa com dados detalhados dos promotores."
        />
      </section>
      
      <section className="animate-fade-in">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="mb-0">5. Filtros</h2>
          <Filter className="h-6 w-6 text-bi-primary" />
        </div>
        
        <FiltersList filters={filters} />
      </section>
      
      <section className="animate-fade-in">
        <h2>6. Conclusão</h2>
        
        <div className="bg-bi-primary/5 p-6 rounded-lg border border-bi-primary/20">
          <p className="mb-4">
            Resumo dos pontos principais identificados no B.I. de balanceamento:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Existem <strong>12 promotores inativos</strong> que precisam ser avaliados</li>
            <li>Foram alocadas <strong>40 lojas</strong> totalizando <strong>1.026 horas</strong></li>
            <li>A lista de coordenadores precisa ser atualizada para remover pessoas que não exercem essa função</li>
            <li>Há vários promotores com <strong>horas excedentes</strong> que precisam ser balanceadas</li>
            <li>Os filtros apresentam problemas que precisam ser corrigidos para melhorar a usabilidade do B.I.</li>
          </ul>
          
          <div className="mt-6 p-4 bg-bi-primary/10 rounded-md">
            <p className="font-medium">Próximos passos:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Corrigir os problemas nos filtros identificados</li>
              <li>Revisar e atualizar a lista de coordenadores</li>
              <li>Balancear as horas excedentes dos promotores</li>
              <li>Avaliar a situação dos promotores inativos</li>
            </ol>
          </div>
        </div>
      </section>
      
      {/* Modal de detalhes do promotor */}
      {selectedPromoter && (
        <PromoterDetails
          name={selectedPromoter}
          open={!!selectedPromoter}
          onOpenChange={(open) => {
            if (!open) setSelectedPromoter(null);
          }}
          details={inactivePromoters.find(p => p.name === selectedPromoter)?.details || {
            reason: "",
            notes: ""
          }}
        />
      )}
    </div>
  );
};

export default Index;
