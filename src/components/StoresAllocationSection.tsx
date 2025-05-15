
import React from 'react';
import { Store, Clock } from 'lucide-react';
import StatCard from '@/components/StatCard';

const StoresAllocationSection = () => {
  return (
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
  );
};

export default StoresAllocationSection;
