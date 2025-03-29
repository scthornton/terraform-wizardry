
import React from 'react';
import { 
  Server, 
  Database, 
  Globe, 
  Cloud, 
  ArrowRight,
  Network 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Resource {
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  x: number;
  y: number;
}

interface Connection {
  source: string;
  target: string;
  label?: string;
}

const VisualizeInfrastructure: React.FC = () => {
  const resources: Resource[] = [
    { 
      id: 'vpc', 
      name: 'Main VPC', 
      type: 'aws_vpc', 
      icon: <Network className="h-6 w-6" />, 
      x: 50, 
      y: 50 
    },
    { 
      id: 'subnet1', 
      name: 'Public Subnet', 
      type: 'aws_subnet', 
      icon: <Network className="h-6 w-6" />, 
      x: 30, 
      y: 150 
    },
    { 
      id: 'subnet2', 
      name: 'Private Subnet', 
      type: 'aws_subnet', 
      icon: <Network className="h-6 w-6" />, 
      x: 70, 
      y: 150 
    },
    { 
      id: 'ec2', 
      name: 'Web Server', 
      type: 'aws_instance', 
      icon: <Server className="h-6 w-6" />, 
      x: 30, 
      y: 250 
    },
    { 
      id: 'rds', 
      name: 'Database', 
      type: 'aws_db_instance', 
      icon: <Database className="h-6 w-6" />, 
      x: 70, 
      y: 250 
    },
    { 
      id: 'lb', 
      name: 'Load Balancer', 
      type: 'aws_lb', 
      icon: <Globe className="h-6 w-6" />, 
      x: 30, 
      y: 350 
    },
  ];

  const connections: Connection[] = [
    { source: 'vpc', target: 'subnet1' },
    { source: 'vpc', target: 'subnet2' },
    { source: 'subnet1', target: 'ec2' },
    { source: 'subnet2', target: 'rds' },
    { source: 'ec2', target: 'lb' },
    { source: 'ec2', target: 'rds', label: 'connects to' },
  ];

  return (
    <div className="w-full h-[500px] relative overflow-hidden bg-gray-900 rounded-xl p-4 border border-terraform-purple terraform-glow">
      <div className="absolute inset-0 bg-terraform-dots bg-[size:20px_20px] opacity-10"></div>
      
      {connections.map((connection, idx) => {
        const source = resources.find(r => r.id === connection.source);
        const target = resources.find(r => r.id === connection.target);
        
        if (!source || !target) return null;
        
        const startX = `${source.x}%`;
        const startY = `${source.y}%`;
        const endX = `${target.x}%`;
        const endY = `${target.y}%`;
        
        return (
          <React.Fragment key={`connection-${idx}`}>
            <div 
              className="absolute border-t-2 border-terraform-teal/60 z-0 transform origin-left"
              style={{
                left: startX,
                top: startY,
                width: `calc(${Math.sqrt(Math.pow(target.x - source.x, 2) + Math.pow(target.y - source.y, 2))}%)`,
                height: '2px',
                transform: `rotate(${Math.atan2(target.y - source.y, target.x - source.x) * (180 / Math.PI)}deg)`,
              }}
            >
              {connection.label && (
                <div className="absolute top-0 left-1/2 transform -translate-y-full -translate-x-1/2 bg-gray-800 text-terraform-teal text-xs px-2 py-1 rounded whitespace-nowrap">
                  {connection.label}
                </div>
              )}
            </div>
            <div
              className="absolute w-2 h-2 bg-terraform-teal rounded-full z-10"
              style={{
                left: `calc(${endX} - 4px)`,
                top: `calc(${endY} - 4px)`,
              }}
            ></div>
          </React.Fragment>
        );
      })}
      
      {resources.map((resource) => (
        <div
          key={resource.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-pulse-slow"
          style={{
            left: `${resource.x}%`,
            top: `${resource.y}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <div className="bg-gray-800 p-3 rounded-lg text-terraform-teal mb-2 shadow-lg z-20">
            {resource.icon}
          </div>
          <div className="text-white text-xs font-medium bg-gray-800/80 px-2 py-1 rounded-md max-w-[100px] text-center z-20">
            {resource.name}
          </div>
          <div className="text-terraform-teal text-xs mt-1 bg-gray-800/80 px-2 py-0.5 rounded-md z-20">
            {resource.type}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisualizeInfrastructure;
