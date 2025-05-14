
import React from 'react';
import { 
  Users, 
  Store, 
  Clock, 
  UserCog, 
  BarChart4, 
  Filter 
} from 'lucide-react';
import StatCard from '@/components/StatCard';
import NameList from '@/components/NameList';
import DataTable from '@/components/DataTable';
import FiltersList from '@/components/FiltersList';

const Index = () => {
  // Dados dos promotores inativos
  const inactivePromoters = [
    "ANA CAROLINA SOUSA ROCHA",
    "BEATRIZ CONCEIÇÃO DA COSTA",
    "CÁSSIO SILVA DA CONCEIÇÃO",
    "ERICK WILLIAM PROENÇA",
    "HALISSON DA SILVA SANTOS",
    "INGRID STEFANI DE OLIVEIRA CORDEIRO",
    "LUANE APARECIDA DA SILVA",
    "LUCAS RIBEIRO DA SILVA",
    "SHIRLEY MARTINS DA SILVA NASCIMENTO",
    "SUELLEN RIBEIRO GOMES",
    "THAMIRES SILVA RODRIGUES",
    "WESLEY GONÇALVES DA SILVA MARINHO"
  ];

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
        
        <NameList names={inactivePromoters} />
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
    </div>
  );
};

export default Index;
