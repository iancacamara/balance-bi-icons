
import React, { useState } from 'react';
import { UserCog, AlertTriangle } from 'lucide-react';
import StatCard from '@/components/StatCard';
import NameList from '@/components/NameList';
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { coordinatorsData } from '@/data/promotersData';

interface CoordinatorsSectionProps {
  coordinators: string[];
}

const CoordinatorsSection = ({ coordinators }: CoordinatorsSectionProps) => {
  const [activeTab, setActiveTab] = useState("list");
  const [selectedCoordinator, setSelectedCoordinator] = useState<string | null>(null);
  
  // Encontrar o coordenador selecionado nos dados
  const coordinatorDetails = selectedCoordinator 
    ? coordinatorsData.find(coord => coord.name === selectedCoordinator) 
    : null;

  return (
    <section className="animate-fade-in mb-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h2 className="mb-2 md:mb-0">3. Aba de Coordenadores</h2>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </div>
        <StatCard 
          icon={<UserCog className="h-6 w-6" />} 
          title="Total de Coordenadores" 
          value={coordinators.length}
          className="w-full md:w-auto" 
        />
      </div>
      
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-md mb-6">
        <p className="text-amber-800">
          <span className="font-medium">Atenção:</span> Existem problemas de hierarquia em várias equipes. 
          Algumas pessoas que não são coordenadores estão com permissões incorretas.
          Selecione um coordenador para ver os detalhes dos problemas.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="list">Lista de Coordenadores</TabsTrigger>
          <TabsTrigger value="hierarchy">Problemas de Hierarquia</TabsTrigger>
          <TabsTrigger value="regions">Problemas de Regionais</TabsTrigger>
          <TabsTrigger value="clients">Problemas de Clientes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list">
          <NameList 
            names={coordinators} 
            onNameClick={(name) => setSelectedCoordinator(name)}
            activeItem={selectedCoordinator}
          />
          
          {selectedCoordinator && coordinatorDetails && (
            <Card className="mt-4 border-amber-200">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-2">Problemas de {selectedCoordinator}</h3>
                <p className="text-amber-800 mb-2">{coordinatorDetails.issue}</p>
                
                {coordinatorDetails.imageSrc && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Evidência:</h4>
                    <div className="border rounded overflow-hidden">
                      <img 
                        src={coordinatorDetails.imageSrc} 
                        alt={`Evidência - ${selectedCoordinator}`}
                        className="w-full object-contain max-h-[400px]"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="hierarchy">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coordinatorsData.map((coord, index) => (
              <Card key={index} className="border-amber-200">
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-2">{coord.name}</h3>
                  <p className="text-amber-800">{coord.issue}</p>
                  
                  {coord.imageSrc && (
                    <div className="mt-4">
                      <div className="border rounded overflow-hidden">
                        <img 
                          src={coord.imageSrc} 
                          alt={`Evidência - ${coord.name}`}
                          className="w-full object-contain max-h-[200px]"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="regions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regionalsData.map((region, index) => (
              <Card key={index} className="border-red-200">
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-2">Regional {region.name}</h3>
                  <p className="text-red-800 mb-3">{region.issue}</p>
                  
                  {region.imageSrc && (
                    <div className="mt-2">
                      <div className="border rounded overflow-hidden">
                        <img 
                          src={region.imageSrc} 
                          alt={`Evidência - ${region.name}`}
                          className="w-full object-contain max-h-[200px]"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="clients">
          <Card className="border-red-200">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-3">Problemas com Clientes</h3>
              <div className="space-y-2 mb-4">
                <p className="text-red-800">• Cliente Neugebauer com horas de atendimento zeradas</p>
                <p className="text-red-800">• Cliente Fini com horas vazias</p>
              </div>
              
              <div className="border rounded overflow-hidden">
                <img 
                  src="https://github.com/iancacamara/imagens_promotores/blob/main/fini_neug.png?raw=true" 
                  alt="Evidência - Clientes com problemas"
                  className="w-full object-contain max-h-[400px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CoordinatorsSection;
