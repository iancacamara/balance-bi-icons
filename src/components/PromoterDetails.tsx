
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Info, FileText, Edit } from 'lucide-react';

interface PromoterDetailsProps {
  name: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  details: {
    reason: string;
    notes: string;
    imageSrc?: string;
  };
}

const PromoterDetails = ({ name, open, onOpenChange, details }: PromoterDetailsProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Detalhes do Promotor: {name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
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

          {details.imageSrc && (
            <div>
              <h3 className="text-lg font-medium mb-2">Evidência/Documento</h3>
              <div className="border rounded-md overflow-hidden">
                <img 
                  src={details.imageSrc}
                  alt="Documento do promotor"
                  className="w-full object-contain max-h-[400px]"
                />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoterDetails;
