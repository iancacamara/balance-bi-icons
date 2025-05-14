
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface DataTableProps {
  caption?: string;
  headers: string[];
  data: Record<string, string | number>[];
  searchable?: boolean;
  searchColumn?: string;
  note?: string;
}

const DataTable = ({ 
  caption, 
  headers, 
  data, 
  searchable = false,
  searchColumn = 'Promotor',
  note 
}: DataTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = searchable 
    ? data.filter(row => 
        String(row[searchColumn])
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : data;

  return (
    <div className="space-y-4">
      {searchable && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bi-muted h-4 w-4" />
          <Input 
            placeholder={`Buscar por ${searchColumn}...`}
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      
      <div className="rounded-md border overflow-x-auto">
        <Table>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead key={index} className="bg-bi-primary text-white">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((row, rowIndex) => (
              <TableRow key={rowIndex} className={rowIndex % 2 === 1 ? 'bg-bi-hover' : ''}>
                {headers.map((header, cellIndex) => (
                  <TableCell key={cellIndex}>
                    {String(row[header] || '')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {note && <p className="text-sm italic text-bi-muted">{note}</p>}
    </div>
  );
};

export default DataTable;
