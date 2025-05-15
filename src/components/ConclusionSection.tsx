
import React from 'react';

const ConclusionSection = () => {
  return (
    <section className="animate-fade-in">
      <h2>6. Conclusão</h2>
      
      <div className="bg-bi-primary/5 p-6 rounded-lg border border-bi-primary/20">
        <p className="mb-4">
          Resumo dos pontos principais identificados no B.I. de balanceamento:
        </p>
        
        <ul className="list-disc list-inside space-y-2">
          <li>Existem <strong>12 promotores inativos</strong> que precisam ser avaliados</li>
          <li>Foram alocadas <strong>40 lojas</strong> totalizando <strong>1.026 horas</strong></li>
          <li>A lista de coordenadores precisa ser atualizada para remover pessoas que não exercem essa função</li>
          <li>Há vários promotores com <strong>horas excedentes</strong> que precisam ser balanceadas</li>
          <li>Os filtros apresentam problemas que precisam ser corrigidos para melhorar a usabilidade do B.I.</li>
        </ul>
        
        <div className="mt-6 p-4 bg-bi-primary/10 rounded-md">
          <p className="font-medium">Próximos passos:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Corrigir os problemas nos filtros identificados</li>
            <li>Revisar e atualizar a lista de coordenadores</li>
            <li>Balancear as horas excedentes dos promotores</li>
            <li>Avaliar a situação dos promotores inativos</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
