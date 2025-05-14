
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface NameListProps {
  names: string[];
  title?: string;
}

const NameList = ({ names, title }: NameListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredNames = names.filter(name => 
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {title && <h3 className="text-lg font-medium">{title}</h3>}
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          placeholder="Buscar nomes..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="max-h-80 overflow-y-auto pr-2">
        <ul className="list-disc list-inside space-y-2">
          {filteredNames.map((name, index) => (
            <li 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {name}
            </li>
          ))}
        </ul>
        
        {filteredNames.length === 0 && (
          <p className="text-muted-foreground italic text-center py-4">Nenhum nome encontrado</p>
        )}
      </div>
    </div>
  );
};

export default NameList;
