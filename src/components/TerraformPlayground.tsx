
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Download, CloudOff, Cloud, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const DEFAULT_CODE = `# Configure the AWS Provider
provider "aws" {
  region = "us-west-2"
}

# Create a VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "main-vpc"
  }
}

# Create a public subnet
resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-west-2a"
  
  tags = {
    Name = "public-subnet"
  }
}

# Create an EC2 instance
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public.id
  
  tags = {
    Name = "web-server"
  }
}`;

const TerraformPlayground: React.FC = () => {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [activeTab, setActiveTab] = useState('editor');
  const [planOutput, setPlanOutput] = useState('');
  
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };
  
  const runTerraformPlan = () => {
    // Simulate running terraform plan
    toast.info('Running terraform plan...', { duration: 2000 });
    
    setTimeout(() => {
      if (code.includes('error') || code.includes('Error')) {
        setPlanOutput(`Error: Invalid resource configuration
The configuration for aws_instance.web is invalid:
* Invalid AMI ID format. Expected ami-xxxxxxxxx.

Planning failed. No changes were made.`);
        toast.error('Terraform plan failed!');
      } else {
        setPlanOutput(`Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_instance.web will be created
  + resource "aws_instance" "web" {
      + ami                                  = "ami-0c55b159cbfafe1f0"
      + instance_type                        = "t2.micro"
      + subnet_id                            = (known after apply)
      + tags                                 = {
          + "Name" = "web-server"
        }
    }

  # aws_subnet.public will be created
  + resource "aws_subnet" "public" {
      + availability_zone                    = "us-west-2a"
      + cidr_block                           = "10.0.1.0/24"
      + vpc_id                               = (known after apply)
      + tags                                 = {
          + "Name" = "public-subnet"
        }
    }

  # aws_vpc.main will be created
  + resource "aws_vpc" "main" {
      + cidr_block                           = "10.0.0.0/16"
      + tags                                 = {
          + "Name" = "main-vpc"
        }
    }

Plan: 3 to add, 0 to change, 0 to destroy.`);
        
        toast.success('Terraform plan completed successfully!');
      }
      
      setActiveTab('output');
    }, 2000);
  };
  
  const downloadTerraform = () => {
    const element = document.createElement('a');
    const file = new Blob([code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'main.tf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success('main.tf downloaded successfully!');
  };
  
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-sm font-mono ml-2">main.tf</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={downloadTerraform}>
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
          <Button size="sm" onClick={runTerraformPlan} className="bg-terraform-gradient hover:bg-terraform-purple">
            <Play className="h-4 w-4 mr-1" />
            Run Plan
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between px-4 border-b border-border">
          <TabsList className="h-10">
            <TabsTrigger value="editor" className="data-[state=active]:text-terraform-purple">
              Editor
            </TabsTrigger>
            <TabsTrigger value="output" className="data-[state=active]:text-terraform-purple">
              Output
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CloudOff className="h-4 w-4" />
            <span>Not connected to backend</span>
          </div>
        </div>
        
        <TabsContent value="editor" className="p-0 m-0 border-0">
          <textarea
            value={code}
            onChange={handleCodeChange}
            className="w-full h-[400px] p-4 bg-gray-900 text-white font-mono text-sm outline-none resize-none"
          />
        </TabsContent>
        
        <TabsContent value="output" className="p-0 m-0 border-0">
          <pre className="w-full h-[400px] p-4 bg-gray-900 text-white font-mono text-sm overflow-auto">
            {planOutput || 'Run terraform plan to see output here.'}
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TerraformPlayground;
