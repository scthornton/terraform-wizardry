
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Code, 
  BookOpen, 
  Server, 
  Github,
  Menu
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const TerraformHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-7 w-7 rounded bg-terraform-gradient flex items-center justify-center">
              <div className="h-5 w-5 text-white font-bold">T</div>
            </div>
            <span className="text-xl font-bold text-terraform-purple">Terraform<span className="text-terraform-teal">Wizardry</span></span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/learn" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Learn
          </Link>
          <Link to="/playground" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Playground
          </Link>
          <Link to="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Button>
          <Button className="hidden md:flex bg-terraform-gradient hover:bg-terraform-purple transition-colors">
            Get Started
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Learn</DropdownMenuItem>
              <DropdownMenuItem>Playground</DropdownMenuItem>
              <DropdownMenuItem>Resources</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Get Started</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default TerraformHeader;
