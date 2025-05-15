
import React from 'react';
import { Filter } from 'lucide-react';
import FiltersList from '@/components/FiltersList';

interface FiltersSectionProps {
  filters: Array<{
    name: string;
    issues: string[];
    status: 'error' | 'warning' | 'success';
  }>;
}

const FiltersSection = ({ filters }: FiltersSectionProps) => {
  return (
    <section className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="mb-0">5. Filtros</h2>
        <Filter className="h-6 w-6 text-bi-primary" />
      </div>
      
      <FiltersList filters={filters} />
    </section>
  );
};

export default FiltersSection;
