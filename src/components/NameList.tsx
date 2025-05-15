
import React from 'react';
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { User } from 'lucide-react';

interface NameListProps {
  names: string[];
  onNameClick?: (name: string) => void;
  activeItem?: string | null;
}

const NameList = ({ names, onNameClick, activeItem }: NameListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {names.map((name, index) => (
        <Card 
          key={index} 
          className={`cursor-pointer hover:bg-slate-50 transition-colors ${activeItem === name ? 'border-blue-500 bg-blue-50' : ''}`}
          onClick={() => onNameClick && onNameClick(name)}
        >
          <CardContent className="p-4 flex items-center gap-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NameList;
