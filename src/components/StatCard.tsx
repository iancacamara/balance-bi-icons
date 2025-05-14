
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  className?: string;
}

const StatCard = ({ icon, title, value, className }: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6 flex items-center gap-4">
        <div className="bg-bi-primary/10 p-3 rounded-full text-bi-primary">
          {icon}
        </div>
        <div>
          <p className="text-sm text-bi-muted font-medium">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
