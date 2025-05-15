
import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export interface FilterItem {
  name: string;
  issues: string[];
  status: 'error' | 'warning' | 'success';
}

interface FiltersListProps {
  filters: FilterItem[];
}

const FiltersList = ({ filters }: FiltersListProps) => {
  const getStatusIcon = (status: 'error' | 'warning' | 'success') => {
    switch (status) {
      case 'error':
        return <AlertCircle className="mr-2 h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />;
      case 'success':
        return <CheckCircle className="mr-2 h-4 w-4 text-green-500" />;
    }
  };

  const getStatusClass = (status: 'error' | 'warning' | 'success') => {
    switch (status) {
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-amber-50 border-amber-200';
      case 'success':
        return 'bg-green-50 border-green-200';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filters.map((filter, index) => (
        <Card 
          key={index} 
          className={`border ${getStatusClass(filter.status)}`}
        >
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              {getStatusIcon(filter.status)}
              <h3 className="font-medium">{filter.name}</h3>
            </div>
            
            {filter.issues.length > 0 ? (
              <ul className="pl-6 list-disc text-sm space-y-1 text-gray-700">
                {filter.issues.map((issue, i) => (
                  <li key={i}>{issue}</li>
                ))}
              </ul>
            ) : (
              <p className="text-green-600 text-sm">Sem problemas</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FiltersList;
