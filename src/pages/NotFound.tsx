
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import TerraformHeader from "@/components/TerraformHeader";
import TerraformFooter from "@/components/TerraformFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <TerraformHeader />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container max-w-md text-center">
          <div className="inline-flex items-center justify-center p-4 bg-destructive/10 text-destructive rounded-full mb-6">
            <AlertCircle className="h-8 w-8" />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-4">404 - Resource Not Found</h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            The configuration references a resource that doesn't exist in the current state.
          </p>
          
          <pre className="mb-8 p-4 bg-gray-900 text-white rounded-md text-sm font-mono text-left">
{`Error: No resource instance found
  on main.tf line 12:
  resource was not found at path "${location.pathname}"`}
          </pre>
          
          <Button asChild className="bg-terraform-gradient hover:bg-terraform-purple">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      
      <TerraformFooter />
    </div>
  );
};

export default NotFound;
