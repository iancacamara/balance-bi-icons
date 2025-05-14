
import React from 'react';
import { Check, Info, X } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FilterItem {
  name: string;
  issues: string[];
  status: 'ok' | 'warning' | 'error';
}

interface FiltersListProps {
  filters: FilterItem[];
}

const FiltersList = ({ filters }: FiltersListProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filters.map((filter, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-4 animate-slide-up"
            style={{ '--index': index } as React.CSSProperties}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{filter.name}</h3>
              {filter.status === 'ok' && (
                <Check className="h-5 w-5 text-green-500" />
              )}
              {filter.status === 'warning' && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-5 w-5 text-amber-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Este filtro tem alguns problemas menores</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {filter.status === 'error' && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <X className="h-5 w-5 text-red-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Este filtro precisa de correção</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            
            {filter.issues.length > 0 && (
              <ul className="text-sm text-bi-muted list-disc list-inside space-y-1">
                {filter.issues.map((issue, issueIndex) => (
                  <li key={issueIndex}>{issue}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersList;
