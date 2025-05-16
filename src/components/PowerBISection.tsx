
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PowerBISection = () => {
  return (
    <section className="animate-fade-in mb-10">
      <h2 className="mb-6">B.I. Balanceamento</h2>
      <Card className="w-full overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-full" style={{ height: '70vh' }}>
            <iframe 
              src="https://app.powerbi.com/view?r=eyJrIjoiYTM1OTkxNzQtOWYzZi00Zjc0LTg2MmItZTZlZDliYjRmN2ZiIiwidCI6IjBiYWY5MmI2LWNlNTEtNGNhMi05MTA3LWY1ZTcwYTUwMTIwYSJ9" 
              width="100%" 
              height="100%" 
              style={{ border: 'none' }} 
              allowFullScreen={true}
              title="B.I. Balanceamento"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PowerBISection;
