
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { supplierApi, SupplierInfo } from "@/services/supplierApi";
import { AlertCircle, CheckCircle, ExternalLink } from "lucide-react";

interface SupplierConnectionCardProps {
  supplier: SupplierInfo;
  onConnect: (supplierId: string, apiKey: string) => void;
}

const SupplierConnectionCard = ({ supplier, onConnect }: SupplierConnectionCardProps) => {
  const [apiKey, setApiKey] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConnect = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter an API key",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API validation
    setTimeout(() => {
      onConnect(supplier.id, apiKey);
      setIsSubmitting(false);
      setApiKey("");
    }, 1000);
  };

  return (
    <Card className="bg-black border-gold-light/20 hover:border-gold-light/40 transition-all">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{supplier.name}</CardTitle>
          {supplier.isConnected ? (
            <Badge className="bg-green-600">Connected</Badge>
          ) : (
            <Badge variant="outline" className="text-jewelry-muted border-jewelry-muted">
              Not Connected
            </Badge>
          )}
        </div>
        <CardDescription>{supplier.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <img 
            src={supplier.logo} 
            alt={`${supplier.name} logo`} 
            className="h-8 object-contain bg-white p-1 rounded" 
          />
          <a 
            href={supplier.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm flex items-center text-primary hover:underline"
          >
            Visit Website <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
        
        {!supplier.isConnected ? (
          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor={`apiKey-${supplier.id}`}>API Key</Label>
              <Input
                id={`apiKey-${supplier.id}`}
                type="password"
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center text-green-500 mb-4">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Successfully connected to {supplier.name}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!supplier.isConnected ? (
          <Button 
            className="w-full"
            onClick={handleConnect}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Connecting..." : "Connect"}
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => {
              // In a real app, we would disconnect from the API
              toast({
                title: "API Disconnected",
                description: `Your ${supplier.name} connection has been removed.`,
              });
              // This would update the supplier to be disconnected
              // We're not implementing this fully in the demo
            }}
          >
            Disconnect
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export function SupplierConnectionPanel() {
  const suppliers = supplierApi.getSuppliers();
  
  const handleConnect = (supplierId: string, apiKey: string) => {
    supplierApi.setApiKey(supplierId, apiKey);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display mb-2">Connect to Suppliers</h2>
        <p className="text-jewelry-muted mb-6">
          Configure your API connections to start importing products and processing orders.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {suppliers.map((supplier) => (
          <SupplierConnectionCard
            key={supplier.id}
            supplier={supplier}
            onConnect={handleConnect}
          />
        ))}
      </div>
      
      <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
          <div>
            <h3 className="text-yellow-500 font-medium">Getting Started</h3>
            <p className="text-sm text-jewelry-muted">
              To obtain API keys, you'll need to register for developer accounts with each supplier.
              Visit their websites and look for API or Developer documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
