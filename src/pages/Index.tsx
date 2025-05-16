
import React from 'react';
import InactivePromotersSection from '@/components/InactivePromotersSection';
import StoresAllocationSection from '@/components/StoresAllocationSection';
import CoordinatorsSection from '@/components/CoordinatorsSection';
import BalanceSection from '@/components/BalanceSection';
import FiltersSection from '@/components/FiltersSection';
import ConclusionSection from '@/components/ConclusionSection';
import PowerBISection from '@/components/PowerBISection';
import { 
  inactivePromoters, 
  coordinators, 
  balanceTableHeaders, 
  balanceTableData,
  filters
} from '@/data/promotersData';

const Index = () => {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <h1 className="text-center md:text-left">Apresentação do B.I. de Balanceamento</h1>
      
      <PowerBISection />
      
      <InactivePromotersSection inactivePromoters={inactivePromoters} />
      
      <StoresAllocationSection />
      
      <CoordinatorsSection coordinators={coordinators} />
      
      <BalanceSection 
        balanceTableHeaders={balanceTableHeaders} 
        balanceTableData={balanceTableData} 
      />
      
      <FiltersSection filters={filters} />
      
      <ConclusionSection />
    </div>
  );
};

export default Index;
