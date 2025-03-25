
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { SupplierInfo } from "@/services/supplierApi";
import { CheckCircle, ExternalLink } from "lucide-react";

interface SupplierConnectionCardProps {
  supplier: SupplierInfo;
  onConnect: (supplierId: string, apiKey: string) => void;
}

export const SupplierConnectionCard = ({ supplier, onConnect }: SupplierConnectionCardProps) => {
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
              <label htmlFor={`apiKey-${supplier.id}`} className="block text-gray-700">API Key</label>
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
            }}
          >
            Disconnect
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
