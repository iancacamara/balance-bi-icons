
import React, { useState } from 'react';
import { Users, Search, Info } from 'lucide-react';
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
import StatCard from '@/components/StatCard';
import { useToast } from "@/hooks/use-toast";

interface Promoter {
  name: string;
  reason: string;
  justification: string;
  lastActivity: string;
  region: string;
  status: string;
  details: {
    reason: string;
    notes: string;
    imageSrc?: string;
    errors?: string[];
    recommendations?: string;
  };
}

interface InactivePromotorsSectionProps {
  inactivePromoters: Promoter[];
}

const InactivePromotersSection = ({ inactivePromoters }: InactivePromotorsSectionProps) => {
  const [selectedPromoter, setSelectedPromoter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
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
  const copyPromoterData = (promoter: Promoter) => {
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

  return (
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
    </section>
  );
};

export default InactivePromotersSection;
export type { Promoter };
