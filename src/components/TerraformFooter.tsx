
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Youtube, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const TerraformFooter = () => {
  return (
    <footer className="w-full py-6 md:py-12 border-t border-border/40 bg-background">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-terraform-gradient flex items-center justify-center">
                <div className="h-5 w-5 text-white font-bold">T</div>
              </div>
              <span className="text-xl font-bold text-terraform-purple">Terraform<span className="text-terraform-teal">Wizardry</span></span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A learning platform for Terraform IaC with interactive visualizations and code playground.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Platform</h4>
              <div className="flex flex-col gap-1">
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                <Link to="/learn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Learn</Link>
                <Link to="/playground" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Playground</Link>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Resources</h4>
              <div className="flex flex-col gap-1">
                <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
                <Link to="/tutorials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tutorials</Link>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
                <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Legal</h4>
              <div className="flex flex-col gap-1">
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TerraformWizardry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-terraform-purple fill-terraform-purple" />
            <span>by perfecxion.ai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TerraformFooter;
