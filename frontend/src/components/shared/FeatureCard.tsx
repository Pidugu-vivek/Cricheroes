
import React from 'react';
import { cn } from '../../lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={cn(
        'feature-card p-6 h-full',
        onClick && !disabled ? 'cursor-pointer' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className
      )}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          <Icon size={24} />
        </div>
        
        <h3 className="text-lg font-medium">{title}</h3>
        
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
