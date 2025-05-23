
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Filter } from 'lucide-react';
import DataTable from '@/components/DataTable';
import { ScrollArea } from '@/components/ui/scroll-area';

// Definindo a estrutura dos dados de desempenho
interface PerformanceData {
  dataInclusao: string;
  ultimoAtendimento: string;
  diasSemAtender: number | string;
  loja: string;
  cliente: string;
  oQuePrecisaAjustar: string;
  cidade: string;
  uf: string;
  regional: string;
  coordenacao: string;
  situacao: string;
}

const PowerBISection = () => {
  const [activeTab, setActiveTab] = useState("powerbi");
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dados de desempenho conforme fornecidos pelo usuário
  const performanceData: PerformanceData[] = [
    { dataInclusao: "20/05/2025", ultimoAtendimento: "SEM ATENDIMENTO", diasSemAtender: 3, loja: "12948-BOM VIZINHO - ACARAU - CENTRO", cliente: "DANONE", oQuePrecisaAjustar: "OPERAÇÃO FICOU DE AJUSTAR", cidade: "ACARAU", uf: "CE", regional: "Nordeste", coordenacao: "Heider Isbelo", situacao: "SEM ATENDIMENTO" },
    { dataInclusao: "22/04/2025", ultimoAtendimento: "25/04/2025", diasSemAtender: 28, loja: "30371-CARVALHO ATACADO E VAREJO - BARRAS - CENTRO", cliente: "GOMES DA COSTA", oQuePrecisaAjustar: "PROBLEMA COM CARTAS", cidade: "BARRAS", uf: "PI", regional: "Nordeste", coordenacao: "Heider Isbelo", situacao: "AINDA ROTEIRIZADO, PROMOTOR ATIVO" },
    { dataInclusao: "07/10/2024", ultimoAtendimento: "30/04/2025", diasSemAtender: 23, loja: "12983-RISSUL - CAMPO BOM - CENTRO II", cliente: "ONTEX", oQuePrecisaAjustar: "AGUARDANDO RETORNO", cidade: "CAMPO BOM", uf: "RS", regional: "Sul1", coordenacao: "Gabriel Poleto", situacao: "AINDA ROTEIRIZADO, PROMOTOR ATIVO" },
    { dataInclusao: "", ultimoAtendimento: "23/04/2025", diasSemAtender: 30, loja: "32650-SUPERMARKET - CASIMIRO DE ABREU - VILA MATARUNA", cliente: "RED BULL", oQuePrecisaAjustar: "RESOLVIDO", cidade: "CASIMIRO DE ABREU", uf: "RJ", regional: "R.E.M", coordenacao: "Marcos Portela", situacao: "ATENDIMENTO FINALIZADO" },
    { dataInclusao: "05/03/2024", ultimoAtendimento: "26/03/2025", diasSemAtender: 58, loja: "29197-KOCH - GOVERNADOR CELSO RAMOS - AREIAS DO MEIO", cliente: "OPERGEL,RED BULL", oQuePrecisaAjustar: "RESOLVIDO", cidade: "GOVERNADOR CELSO RAMOS", uf: "SC", regional: "Sul1", coordenacao: "Gabriel Poleto", situacao: "PCP SOLICITOU ENCERRAMENTO E ABRIU VAGA" },
    { dataInclusao: "15/04/2025", ultimoAtendimento: "SEM ATENDIMENTO", diasSemAtender: 38, loja: "37055-CENTER BOX - ITAITINGA - PARQUE DOM PEDRO", cliente: "DANONE", oQuePrecisaAjustar: "PRECISA O CADASTRO RETIRAR O ATENDIMENTO", cidade: "ITAITINGA", uf: "CE", regional: "Nordeste", coordenacao: "Heider Isbelo", situacao: "ROTEIRIZADO, PROMOTOR ATIVO" },
    { dataInclusao: "19/02/2025", ultimoAtendimento: "25/04/2025", diasSemAtender: 28, loja: "31026-AMERICANAS - ITAPERUNA - CIDADE NOVA", cliente: "KIDS ZONE", oQuePrecisaAjustar: "AGUARDANDO RETORNO, COORDENADOR", cidade: "ITAPERUNA", uf: "RJ", regional: "R.E.M", coordenacao: "Marcos Portela", situacao: "ROTEIRIZADO, PROMOTOR ATIVO" },
    { dataInclusao: "30/04/2025", ultimoAtendimento: "SEM ATENDIMENTO", diasSemAtender: 23, loja: "8049-GRUPO CARVALHO - JOSE DE FREITAS - CENTRO", cliente: "GOMES DA COSTA", oQuePrecisaAjustar: "AGUARDANDO RETORNO, COORDENADOR", cidade: "JOSE DE FREITAS", uf: "PI", regional: "Nordeste", coordenacao: "Heider Isbelo", situacao: "ROTEIRIZADO, PROMOTOR ATIVO" },
    { dataInclusao: "19/03/2025", ultimoAtendimento: "11/04/2025", diasSemAtender: 42, loja: "12947-BOM VIZINHO - LIMOEIRO DO NORTE - SOCORRO", cliente: "DANONE", oQuePrecisaAjustar: "AGUARDANDO RETORNO, COORDENADOR", cidade: "LIMOEIRO DO NORTE", uf: "CE", regional: "Nordeste", coordenacao: "Heider Isbelo", situacao: "ROTEIRIZADO, PROMOTOR ATIVO" },
    { dataInclusao: "07/05/2025", ultimoAtendimento: "SEM ATENDIMENTO", diasSemAtender: 16, loja: "23136-CANTINHO DOCE - SAO JOSE DE RIBAMAR - KIOLA", cliente: "4PMKT", oQuePrecisaAjustar: "AGUARDANDO RETORNO, CADASTRO", cidade: "SAO JOSE DE RIBAMAR", uf: "MA", regional: "Nordeste", coordenacao: "Heider Isbelo", situacao: "NÃO ENCONTREI VAGA EM ABERTO, AINDA ROTEIRIZADO" },
    { dataInclusao: "", ultimoAtendimento: "12/12/2024", diasSemAtender: 162, loja: "18289-SUPERMERCADOS BH - PIRAPORA - SAO JOAO BATISTA", cliente: "SUZANO", oQuePrecisaAjustar: "RESOLVIDO", cidade: "PIRAPORA", uf: "MG", regional: "R.E.M", coordenacao: "Marcos Portela", situacao: "ATENDIMENTO FINALIZADO" },
    { dataInclusao: "15/04/2025", ultimoAtendimento: "21/05/2025", diasSemAtender: 2, loja: "17819-FONSECA - SANTA CRUZ DAS PALMEIRAS - VILA BORTONE", cliente: "DANONE,MATILAT", oQuePrecisaAjustar: "IR VERIFICANDO", cidade: "SANTA CRUZ DAS PALMEIRAS", uf: "SP", regional: "SP", coordenacao: "Lucilene Sanches", situacao: "ROTEIRIZADO, PROMOTOR ATIVO" },
    { dataInclusao: "13/05/2025", ultimoAtendimento: "SEM ATENDIMENTO", diasSemAtender: 10, loja: "25778-AM PM CONVERNIENCIA - SAO ROQUE - CENTRO", cliente: "RED BULL", oQuePrecisaAjustar: "", cidade: "SÃO ROQUE", uf: "SP", regional: "SP", coordenacao: "Fábio Severio", situacao: "ATENDIMENTO FINALIZADO" },
    { dataInclusao: "13/12/2024", ultimoAtendimento: "12/04/2025", diasSemAtender: 41, loja: "33216-STOK CENTER - SOLEDADE - BOTUCARAI", cliente: "RED BULL", oQuePrecisaAjustar: "PRECISA O CADASTRO RETIRAR O ATENDIMENTO", cidade: "SOLEDADE", uf: "RS", regional: "Sul1", coordenacao: "Gabriel Poleto", situacao: "PCP SOLICITOU ENCERRAMENTO E ABRIU VAGA" },
    { dataInclusao: "15/01/2025", ultimoAtendimento: "09/04/2025", diasSemAtender: 44, loja: "35163-COMPRE MAIS - SOLEDADE - EXPEDICIONARIO", cliente: "UNIGRA", oQuePrecisaAjustar: "", cidade: "SOLEDADE", uf: "RS", regional: "Sul1", coordenacao: "Gabriel Poleto", situacao: "PCP SOLICITOU ENCERRAMENTO E ABRIU VAGA" },
    { dataInclusao: "01/04/2024", ultimoAtendimento: "30/04/2025", diasSemAtender: 23, loja: "7553-VILLEFORT - CORONEL FABRICIANO - STA HELENA", cliente: "FORNO DE MINAS", oQuePrecisaAjustar: "AGUARDANDO RETORNO, COORDENADOR", cidade: "CORONEL FABRICIANO", uf: "MG", regional: "R.E.M", coordenacao: "Marcos Portela", situacao: "AINDA ROTEIRIZADO" },
  ];

  // Obter lista única de coordenadores
  const coordenadores = [...new Set(performanceData.map(item => item.coordenacao))];

  // Filtrar dados com base no termo de busca
  const filteredData = performanceData.filter(item => 
    item.coordenacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Agrupar por coordenador
  const dataByCoordinator: Record<string, PerformanceData[]> = filteredData.reduce((acc, item) => {
    const coord = item.coordenacao;
    if (!acc[coord]) {
      acc[coord] = [];
    }
    acc[coord].push(item);
    return acc;
  }, {} as Record<string, PerformanceData[]>);

  // Cabeçalhos para a tabela de desempenho
  const performanceHeaders = [
    "Data Inclusão",
    "Último Atendimento",
    "Dias Sem Atender",
    "Loja",
    "Cliente",
    "O Que Precisa Ajustar",
    "Cidade",
    "UF",
    "Regional",
    "Coordenação",
    "Situação"
  ];

  // Formatar dados para a tabela
  const formatTableData = (data: PerformanceData[]) => {
    return data.map(item => ({
      "Data Inclusão": item.dataInclusao,
      "Último Atendimento": item.ultimoAtendimento,
      "Dias Sem Atender": item.diasSemAtender,
      "Loja": item.loja,
      "Cliente": item.cliente,
      "O Que Precisa Ajustar": item.oQuePrecisaAjustar,
      "Cidade": item.cidade,
      "UF": item.uf,
      "Regional": item.regional,
      "Coordenação": item.coordenacao,
      "Situação": item.situacao
    }));
  };

  return (
    <section className="animate-fade-in mb-10">
      <h2 className="mb-6">B.I. Balanceamento</h2>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="powerbi">Análise Dashboard</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="powerbi">
          <Card className="w-full overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full" style={{ height: '70vh' }}>
                <iframe 
                  src="https://app.powerbi.com/view?r=eyJrIjoiYTM1OTkxNzQtOWYzZi00Zjc0LTg2MmItZTZlZDliYjRmN2ZiIiwidCI6IjBiYWY5MmI2LWNlNTEtNGNhMi05MTA3LWY1ZTcwYTUwMTIwYSJ9" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none' }} 
                  allowFullScreen={true}
                  title="B.I. Balanceamento"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-medium">Filtrar por Coordenador</h3>
            </div>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bi-muted h-4 w-4" />
              <Input 
                placeholder="Buscar coordenador..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(dataByCoordinator).map(([coordinator, data], index) => (
              <Card key={index} className="border-l-4 border-l-bi-primary">
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-4 sticky top-0 bg-white py-2">Coordenador: {coordinator}</h3>
                  
                  <ScrollArea className="h-[500px] pr-4">
                    <DataTable
                      headers={performanceHeaders}
                      data={formatTableData(data)}
                      caption={`Performance - ${coordinator}`}
                    />
                  </ScrollArea>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {Object.keys(dataByCoordinator).length === 0 && (
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Nenhum resultado encontrado para "{searchTerm}"</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default PowerBISection;
