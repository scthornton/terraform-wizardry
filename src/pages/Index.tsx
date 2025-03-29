
import React from 'react';
import TerraformHeader from '@/components/TerraformHeader';
import TerraformFooter from '@/components/TerraformFooter';
import CodeBlock from '@/components/CodeBlock';
import ResourceCard from '@/components/ResourceCard';
import VisualizeInfrastructure from '@/components/VisualizeInfrastructure';
import TerraformPlayground from '@/components/TerraformPlayground';
import { 
  ArrowRight, 
  Server, 
  Database, 
  Network, 
  Shield, 
  GitBranch,
  BarChart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const resourceSample = `resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "web-server"
  }
}`;

  const modulesSample = `module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "3.14.0"
  
  name = "my-vpc"
  cidr = "10.0.0.0/16"
  
  azs             = ["us-west-2a", "us-west-2b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
  
  enable_nat_gateway = true
}`;

  return (
    <div className="flex flex-col min-h-screen">
      <TerraformHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-terraform-dots bg-[size:30px_30px] opacity-5"></div>
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-terraform-purple/10 to-transparent"></div>
          <div className="container relative">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
                Learn and Master 
                <span className="text-transparent bg-clip-text bg-terraform-gradient"> Terraform </span>
                Infrastructure as Code
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
                Build, visualize, and deploy your cloud infrastructure with our interactive platform designed for Terraform enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button size="lg" className="bg-terraform-gradient hover:bg-terraform-purple">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Try the Playground
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Code Examples Section */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                Infrastructure as <span className="text-terraform-teal">Code</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Define your infrastructure using Terraform's declarative language, visualize relationships, and deploy with confidence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Tabs defaultValue="resources">
                  <TabsList className="mb-4">
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                    <TabsTrigger value="modules">Modules</TabsTrigger>
                  </TabsList>
                  <TabsContent value="resources">
                    <CodeBlock 
                      code={resourceSample} 
                      title="main.tf" 
                    />
                    <p className="text-gray-400 text-sm">
                      Define AWS EC2 instances, VPCs, security groups, and more with Terraform's resource blocks.
                    </p>
                  </TabsContent>
                  <TabsContent value="modules">
                    <CodeBlock 
                      code={modulesSample} 
                      title="modules.tf" 
                    />
                    <p className="text-gray-400 text-sm">
                      Reuse and compose infrastructure components with Terraform modules for cleaner, more maintainable code.
                    </p>
                  </TabsContent>
                </Tabs>
                
                <Button variant="link" className="text-terraform-teal p-0">
                  Learn more about Terraform syntax
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <VisualizeInfrastructure />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Use <span className="text-terraform-purple">Terraform</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the benefits of infrastructure as code with Terraform.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard 
                title="Provision Infrastructure"
                type="FEATURE"
                icon="server"
                description="Define and provision infrastructure across multiple cloud providers using a single workflow."
              />
              <ResourceCard 
                title="Infrastructure as Code"
                type="FEATURE"
                icon="network"
                description="Version, reuse, and share your infrastructure configurations using the same workflows as application code."
              />
              <ResourceCard 
                title="Multi-Cloud Deployment"
                type="FEATURE"
                icon="cloud"
                description="Manage resources on AWS, Azure, GCP, and many other providers with consistent syntax."
              />
              <ResourceCard 
                title="State Management"
                type="FEATURE"
                icon="database"
                description="Track the state of your infrastructure and easily make incremental changes."
              />
              <ResourceCard 
                title="Dependency Management"
                type="FEATURE"
                icon="box"
                description="Automatically handle dependencies between resources for efficient provisioning."
              />
              <ResourceCard 
                title="Security & Compliance"
                type="FEATURE"
                icon="lock"
                description="Enforce security policies and compliance requirements consistently across your infrastructure."
              />
            </div>
          </div>
        </section>
        
        {/* Playground Preview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Try Our <span className="text-terraform-teal">Interactive Playground</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Write, validate, and visualize Terraform code directly in your browser.
              </p>
            </div>
            
            <TerraformPlayground />
            
            <div className="mt-8 text-center">
              <Button className="bg-terraform-gradient hover:bg-terraform-purple">
                Open Full Playground
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-terraform-gradient">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Master Terraform?
              </h2>
              <p className="text-xl mb-8">
                Start your infrastructure as code journey today with our comprehensive resources and interactive tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-terraform-purple hover:bg-gray-100">
                  Get Started for Free
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <TerraformFooter />
    </div>
  );
};

export default Index;
