
import React from 'react';
import { UserCog } from 'lucide-react';
import StatCard from '@/components/StatCard';
import NameList from '@/components/NameList';

interface CoordinatorsSectionProps {
  coordinators: string[];
}

const CoordinatorsSection = ({ coordinators }: CoordinatorsSectionProps) => {
  return (
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
  );
};

export default CoordinatorsSection;
