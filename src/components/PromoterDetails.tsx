
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, FileText, Edit, Image, AlertTriangle } from 'lucide-react';

interface PromoterDetailsProps {
  name: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  details: {
    reason: string;
    notes: string;
    imageSrc?: string;
    errors?: string[];
    recommendations?: string;
  };
}

const PromoterDetails = ({ name, open, onOpenChange, details }: PromoterDetailsProps) => {
  const [activeTab, setActiveTab] = useState("info");
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-bi-primary">
            <Info className="h-5 w-5" />
            Detalhes do Promotor: {name}
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Informações
            </TabsTrigger>
            {details.errors && details.errors.length > 0 && (
              <TabsTrigger value="errors" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Problemas
              </TabsTrigger>
            )}
            {details.imageSrc && (
              <TabsTrigger value="evidence" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Evidências
              </TabsTrigger>
            )}
          </TabsList>
          
          <TabsContent value="info" className="space-y-4 animate-fade-in">
            <div>
              <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5" />
                Motivo da Inatividade
              </h3>
              <p className="text-gray-700">{details.reason}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                <Edit className="h-5 w-5" />
                Notas Adicionais
              </h3>
              <Card>
                <CardContent className="p-4 text-gray-700">
                  {details.notes}
                </CardContent>
              </Card>
            </div>
            
            {details.recommendations && (
              <div className="pt-2">
                <h3 className="text-lg font-medium mb-2">Recomendações</h3>
                <Card>
                  <CardContent className="p-4 bg-blue-50 text-blue-800">
                    {details.recommendations}
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
          
          {details.errors && details.errors.length > 0 && (
            <TabsContent value="errors" className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Problemas Encontrados
              </h3>
              <ul className="space-y-2">
                {details.errors.map((error, index) => (
                  <li key={index} className="bg-red-50 p-3 rounded-md border border-red-200 text-red-800">
                    {error}
                  </li>
                ))}
              </ul>
            </TabsContent>
          )}
          
          {details.imageSrc && (
            <TabsContent value="evidence" className="animate-fade-in">
              <h3 className="text-lg font-medium mb-2">Evidência/Documento</h3>
              <div className="border rounded-md overflow-hidden bg-gray-100">
                <img 
                  src={details.imageSrc}
                  alt="Documento do promotor"
                  className="w-full object-contain max-h-[500px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Imagem+não+encontrada';
                  }}
                />
              </div>
            </TabsContent>
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default PromoterDetails;
