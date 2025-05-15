
import React from 'react';
import { BarChart4 } from 'lucide-react';
import DataTable from '@/components/DataTable';

interface BalanceSectionProps {
  balanceTableHeaders: string[];
  balanceTableData: Record<string, any>[];
}

const BalanceSection = ({ balanceTableHeaders, balanceTableData }: BalanceSectionProps) => {
  return (
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
  );
};

export default BalanceSection;
