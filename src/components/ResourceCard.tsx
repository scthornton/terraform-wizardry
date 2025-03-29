
import React from 'react';
import { 
  Server, 
  Database, 
  Globe, 
  Box, 
  Lock, 
  Cloud,
  Network
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  title: string;
  type: string;
  description: string;
  icon?: 'server' | 'database' | 'network' | 'globe' | 'box' | 'lock' | 'cloud';
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  type, 
  description, 
  icon = 'box',
  className
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'server':
        return <Server className="h-5 w-5" />;
      case 'database':
        return <Database className="h-5 w-5" />;
      case 'network':
        return <Network className="h-5 w-5" />;
      case 'globe':
        return <Globe className="h-5 w-5" />;
      case 'lock':
        return <Lock className="h-5 w-5" />;
      case 'cloud':
        return <Cloud className="h-5 w-5" />;
      default:
        return <Box className="h-5 w-5" />;
    }
  };

  return (
    <div className={cn(
      "group relative p-6 rounded-lg border border-border bg-card hover:border-terraform-purple transition-all duration-300 terraform-glow",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="rounded-md bg-muted p-2 text-terraform-purple">
          {getIcon()}
        </div>
        <div className="text-xs font-medium text-muted-foreground rounded-full px-2 py-0.5 bg-muted">
          {type}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-terraform-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg"></div>
    </div>
  );
};

export default ResourceCard;
